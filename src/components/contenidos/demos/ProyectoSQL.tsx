"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { ChevronDown, Lightbulb, Lock, Play, ArrowRight, CheckCircle2, XCircle, MinusCircle, Trophy } from "lucide-react";
import { cls, DemoShell, EventLog, Feedback, tx, useEventLog, useReducedMotion, type DemoProps } from "./ui";

/* ------------------------------------------------------------------ */
/* Motor SQL: superficie mínima de alasql que usamos                    */
/* ------------------------------------------------------------------ */

type Row = Record<string, unknown>;
type AlaDb = { exec: (sql: string) => unknown; tables: Record<string, { data: unknown[] }> };
type AlaSQL = { Database: new () => AlaDb };
type Tx2 = readonly [string, string];

/* ---- PURE-START (lógica sin React: la prueba en Node extrae este bloque) ---- */

const DATA: Row[] = (
  [
    ["Andina", "Ene", "Curso de Excel", 120, 14.4],
    ["Andina", "Feb", "Curso de Power BI", 80, 16.0],
    ["Andina", "Mar", "Curso de Excel", 95, 11.4],
    ["Caribe", "Ene", "Curso de Power BI", 40, 8.0],
    ["Caribe", "Feb", "Curso de Excel", 70, 8.4],
    ["Caribe", "Mar", "Curso de Python", 30, 9.0],
    ["Pacífico", "Ene", "Curso de Python", 55, 16.5],
    ["Pacífico", "Feb", "Curso de Excel", 60, 7.2],
    ["Pacífico", "Mar", "Curso de Power BI", 45, 9.0],
    ["Orinoquía", "Ene", "Curso de Excel", 25, 3.0],
    ["Orinoquía", "Feb", "Curso de Python", 20, 6.0],
    ["Orinoquía", "Mar", "Curso de Power BI", 15, 3.0],
  ] as const
).map(([region, mes, producto, unidades, ventas]) => ({ region, mes, producto, unidades, ventas }));

const REFERENCE = [
  "SELECT region, SUM(ventas) AS total FROM ventas GROUP BY region",
  "SELECT region, SUM(ventas) AS total FROM ventas GROUP BY region ORDER BY total DESC",
  "SELECT region, SUM(ventas) AS total FROM ventas GROUP BY region HAVING SUM(ventas) > 30",
];

const MAX_ROWS = 200;
const MAX_LEN = 600;
const TOL = 0.01;

const BLOCKED_WORDS =
  /\b(INTO|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|ATTACH|DETACH|REQUIRE|SOURCE|ASSERT|SET|USE|DECLARE|EXEC)\b/i;
const BLOCKED_FUNCS = /\b(CSV|TSV|TAB|TXT|JSON|XLS|XLSX|HTML|FILE|URL)\s*\(/i;
const DANGEROUS_IDS =
  /\b(CONSTRUCTOR|PROTOTYPE|__PROTO__|WINDOW|GLOBALTHIS|GLOBAL|PROCESS|EVAL|FUNCTION|ALASQL|IMPORT|DOCUMENT|FETCH|XMLHTTPREQUEST|NEW)\b/i;
const ODD_CHARS = /[`[\]@$\\{}]|->|::/;

type Validation = { ok: true; sql: string } | { ok: false; msg: Tx2 };

/** Acepta una sola sentencia SELECT de lectura sobre la tabla ventas. */
function validateQuery(raw: string): Validation {
  const bad = (es: string, en: string): Validation => ({ ok: false, msg: [es, en] });
  let sql = raw.replace(/\/\*[\s\S]*?\*\//g, " ").replace(/--[^\n]*/g, " ").trim();
  if (!sql) return bad("Escribe una consulta para poder ejecutarla.", "Write a query so you can run it.");
  if (raw.length > MAX_LEN)
    return bad(
      `La consulta es muy larga para este ejercicio (máximo ${MAX_LEN} caracteres).`,
      `That query is too long for this exercise (${MAX_LEN} characters at most).`,
    );
  if (/\/\*|\*\//.test(sql)) return bad("Hay un comentario sin cerrar. Revisa los símbolos /* y */.", "There is an unclosed comment. Check the /* and */ symbols.");
  sql = sql.replace(/;\s*$/, "").trim();
  if (sql.includes(";"))
    return bad(
      "En este ejercicio se ejecuta una sola consulta a la vez. Quita el punto y coma del medio.",
      "This exercise runs one query at a time. Remove the semicolon in the middle.",
    );
  if (!/^SELECT\b/i.test(sql))
    return bad("Aquí solo puedes hacer consultas de lectura, y deben empezar con SELECT.", "Here you can only run read queries, and they must start with SELECT.");
  if (ODD_CHARS.test(sql))
    return bad(
      "Hay un símbolo que este ejercicio no permite (por ejemplo comillas invertidas, corchetes o @). Usa solo SQL estándar.",
      "There is a symbol this exercise does not allow (for example backticks, brackets or @). Stick to standard SQL.",
    );
  const word = sql.match(BLOCKED_WORDS) ?? sql.match(DANGEROUS_IDS);
  if (word)
    return bad(
      `La palabra ${word[1].toUpperCase()} no está permitida. Este proyecto es de solo lectura: consulta los datos sin modificarlos.`,
      `The word ${word[1].toUpperCase()} is not allowed. This project is read-only: query the data without changing it.`,
    );
  const fn = sql.match(BLOCKED_FUNCS);
  if (fn)
    return bad(
      `La función ${fn[1].toUpperCase()}( lee archivos o redes y no está permitida aquí. Trabaja con la tabla ventas.`,
      `The function ${fn[1].toUpperCase()}( reads files or networks and is not allowed here. Work with the ventas table.`,
    );
  const sources = [...sql.matchAll(/\b(?:FROM|JOIN)\s+([^\s,;)]*)/gi)];
  const commas = sources.reduce((n, m) => {
    const rest = sql.slice((m.index ?? 0) + m[0].length - m[1].length);
    const clause = rest.split(/\b(?:WHERE|GROUP|ORDER|HAVING|LIMIT|UNION|JOIN)\b|\)/i)[0];
    return n + (clause.match(/,/g)?.length ?? 0);
  }, 0);
  if (sources.some((m) => !/^(ventas$|\()/i.test(m[1])) || sources.length + commas > 4)
    return bad(
      "Solo puedes consultar la tabla ventas, con hasta cuatro tablas en total (FROM, JOIN o comas).",
      "You can only query the ventas table, with up to four tables in total (FROM, JOIN or commas).",
    );
  // «total» es palabra reservada en el motor: la entrecomillamos fuera de los textos.
  sql = sql.replace(/'(?:[^']|'')*'|"(?:[^"]|"")*"|\btotal\b(?!\s*\()/gi, (m) => (/^['"]/.test(m) ? m : "[total]"));
  return { ok: true, sql };
}

function resetData(db: AlaDb) {
  db.tables.ventas.data = DATA.map((r) => ({ ...r }));
}

function makeDb(ala: AlaSQL): AlaDb {
  const db = new ala.Database();
  db.exec("CREATE TABLE ventas (region STRING, mes STRING, producto STRING, unidades INT, ventas NUMBER)");
  resetData(db);
  return db;
}

type RunOk = { ok: true; cols: string[]; rows: Row[] };
type RunErr = { ok: false; error: string };

function runQuery(db: AlaDb, sql: string): RunOk | RunErr {
  try {
    resetData(db);
    const out = db.exec(sql);
    if (!Array.isArray(out)) return { ok: false, error: "La consulta no devolvió una tabla." };
    const rows: Row[] = out.map((r) => (r && typeof r === "object" && !Array.isArray(r) ? (r as Row) : { valor: r }));
    const cols: string[] = [];
    for (const r of rows.slice(0, MAX_ROWS)) for (const k of Object.keys(r)) if (!cols.includes(k)) cols.push(k);
    return { ok: true, cols, rows };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : String(e) };
  }
}

/** Resume el error del motor: la parte útil y no el volcado completo. */
function summarizeError(msg: string): string {
  const got = msg.match(/got '([^']+)'/);
  if (/^Parse error/i.test(msg)) return got ? `Error de sintaxis cerca de «${got[1]}».` : "Error de sintaxis.";
  const first = msg.split("\n")[0].trim();
  return first.length > 140 ? `${first.slice(0, 140)}…` : first;
}

type Expected = { region: string; total: number }[];

function buildExpected(db: AlaDb): Expected[] {
  return REFERENCE.map((q) => {
    const v = validateQuery(q);
    if (!v.ok) throw new Error("referencia inválida");
    const r = runQuery(db, v.sql);
    if (!r.ok) throw new Error(r.error);
    return r.rows.map((row) => ({ region: String(row.region), total: Number(row.total) }));
  });
}

const norm = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").trim().toLowerCase();

type Feat = { group: boolean; sum: boolean; order: boolean; desc: boolean; having: boolean; where: boolean; sumUnits: boolean };

function features(sql: string): Feat {
  const s = sql.replace(/'(?:[^']|'')*'/g, "''").toUpperCase();
  return {
    group: /\bGROUP\s+BY\b/.test(s),
    sum: /\bSUM\s*\(/.test(s),
    order: /\bORDER\s+BY\b/.test(s),
    desc: /\bDESC\b/.test(s),
    having: /\bHAVING\b/.test(s),
    where: /\bWHERE\b/.test(s),
    sumUnits: /\bSUM\s*\(\s*UNIDADES\s*\)/.test(s),
  };
}

type CritId = "runs" | "rows" | "cols" | "totals" | "order";
type CritDef = { id: CritId; label: Tx2 };
type CritResult = { id: CritId; ok: boolean | null; comment?: Tx2 };

const LBL: Record<CritId, Tx2> = {
  runs: ["La consulta se ejecuta sin errores", "The query runs without errors"],
  rows: ["Devuelve 4 filas, una por región", "Returns 4 rows, one per region"],
  cols: ["Tiene una columna con la región y otra con la suma", "Has one column with the region and another with the sum"],
  totals: ["Los totales coinciden con los esperados", "The totals match the expected ones"],
  order: ["El orden va de la región que más vende a la que menos", "The order goes from the top-selling region to the lowest"],
};

const CRITERIA: CritDef[][] = [
  (["runs", "rows", "cols", "totals"] as CritId[]).map((id) => ({ id, label: LBL[id] })),
  (["runs", "rows", "cols", "totals", "order"] as CritId[]).map((id) => ({ id, label: LBL[id] })),
  [
    { id: "runs", label: LBL.runs },
    { id: "rows", label: ["Devuelve exactamente Andina y Pacífico", "Returns exactly Andina and Pacífico"] },
    { id: "cols", label: LBL.cols },
    { id: "totals", label: ["Los totales de esas dos regiones coinciden", "The totals of those two regions match"] },
  ],
];

const MSG = {
  group: ["Estás viendo las ventas fila por fila. Para sumar por región agrupa con GROUP BY region.", "You are looking at sales row by row. To add up by region, group with GROUP BY region."] as Tx2,
  sum: ["Para el total de cada región suma la columna ventas con SUM(ventas).", "For each region's total, add up the ventas column with SUM(ventas)."] as Tx2,
  sumUnits: ["Estás sumando unidades. El total que pide el reto es de ventas: usa SUM(ventas).", "You are adding units. The challenge asks for sales totals: use SUM(ventas)."] as Tx2,
  orderNone: ["Ya tienes los totales. Ordénalos con ORDER BY y la palabra DESC para ir de mayor a menor.", "You already have the totals. Sort them with ORDER BY and the word DESC to go from highest to lowest."] as Tx2,
  orderAsc: ["ORDER BY ordena de menor a mayor por defecto. Agrega DESC para ir de mayor a menor.", "ORDER BY sorts from lowest to highest by default. Add DESC to go from highest to lowest."] as Tx2,
  orderWrong: ["Ordena por el total de cada región, no por su nombre, y usa DESC para ir de mayor a menor.", "Sort by each region's total, not by its name, and use DESC to go from highest to lowest."] as Tx2,
  where: ["WHERE filtra antes de sumar, fila por fila. Para filtrar por el total usa HAVING después de GROUP BY.", "WHERE filters before adding up, row by row. To filter by the total, use HAVING after GROUP BY."] as Tx2,
  having: ["Para filtrar por el total de cada región usa HAVING después de GROUP BY.", "To filter by each region's total, use HAVING after GROUP BY."] as Tx2,
};

function comment(idx: number, id: CritId, f: Feat, nRows: number, err: string | null): Tx2 {
  if (id === "runs") {
    const e = summarizeError(err ?? "");
    return [
      `${e} Revisa que la consulta tenga la forma SELECT … FROM ventas, con las comas y los paréntesis completos.`,
      `${e} Check that the query looks like SELECT … FROM ventas, with all commas and parentheses in place.`,
    ];
  }
  if (idx === 2) {
    if (id === "order") return MSG.orderWrong;
    if (f.where && !f.having) return MSG.where;
    if (!f.group) return MSG.group;
    if (!f.sum) return MSG.sum;
    if (!f.having) return MSG.having;
    return [
      "Revisa el umbral: más de 30 millones significa que el total de la región es mayor que 30.",
      "Check the threshold: more than 30 million means the region's total is greater than 30.",
    ];
  }
  if (id === "order") return !f.order ? MSG.orderNone : !f.desc ? MSG.orderAsc : MSG.orderWrong;
  if (id === "rows") {
    if (!f.group) return MSG.group;
    return [
      `Esperaba 4 filas, una por región, y tu consulta devuelve ${nRows}. Agrupa con GROUP BY region.`,
      `I expected 4 rows, one per region, and your query returns ${nRows}. Group with GROUP BY region.`,
    ];
  }
  if (id === "cols") {
    if (!f.sum) return MSG.sum;
    return [
      "Necesitas una columna con el nombre de la región y otra con el total numérico. Incluye region en el SELECT.",
      "You need one column with the region name and another with the numeric total. Include region in the SELECT.",
    ];
  }
  if (!f.sum) return MSG.sum;
  if (!f.group) return MSG.group;
  if (f.sumUnits) return MSG.sumUnits;
  return [
    "Los totales no coinciden. Revisa que sumes ventas y agrupes por region, sin filtros que quiten filas.",
    "The totals do not match. Check that you add up ventas and group by region, with no filters that drop rows.",
  ];
}

/** Compara el resultado contra el de la consulta de referencia, sin depender de los nombres de columna. */
function evaluate(idx: number, sql: string, run: RunOk | RunErr, expected: Expected): CritResult[] {
  const defs = CRITERIA[idx];
  const f = features(sql);
  if (!run.ok) {
    return defs.map((d, i) => (i === 0 ? { id: d.id, ok: false, comment: comment(idx, "runs", f, 0, run.error) } : { id: d.id, ok: null }));
  }
  const { rows, cols } = run;
  const textCol = rows.length > 0 ? cols.find((c) => rows.every((r) => typeof r[c] === "string")) : undefined;
  const numCols = rows.length > 0 ? cols.filter((c) => rows.every((r) => typeof r[c] === "number" && Number.isFinite(r[c] as number))) : [];
  const expMap = new Map(expected.map((e) => [norm(e.region), e.total]));

  const matches = (numCol: string) =>
    !!textCol &&
    rows.length === expected.length &&
    rows.every((r) => {
      const t = expMap.get(norm(String(r[textCol])));
      return t !== undefined && Math.abs((r[numCol] as number) - t) <= TOL;
    }) &&
    new Set(rows.map((r) => norm(String(r[textCol])))).size === expected.length;
  const numCol = numCols.find(matches) ?? numCols[0];

  const regionsOk =
    !!textCol &&
    rows.length === expected.length &&
    new Set(rows.map((r) => norm(String(r[textCol])))).size === expected.length &&
    rows.every((r) => expMap.has(norm(String(r[textCol]))));

  const ok: Record<CritId, boolean> = {
    runs: true,
    rows: regionsOk,
    cols: !!textCol && numCols.length > 0,
    totals: !!numCol && matches(numCol),
    order:
      !!textCol && rows.length === expected.length && rows.every((r, i) => norm(String(r[textCol])) === norm(expected[i].region)),
  };
  return defs.map((d) => (ok[d.id] ? { id: d.id, ok: true } : { id: d.id, ok: false, comment: comment(idx, d.id, f, rows.length, null) }));
}

/* ---- PURE-END ---- */

/* ------------------------------------------------------------------ */
/* Textos                                                               */
/* ------------------------------------------------------------------ */

const CHALLENGES: { title: Tx2; hint: Tx2 }[] = [
  {
    title: ["Muestra las ventas totales por región.", "Show the total sales per region."],
    hint: [
      "Estructura: SELECT la columna de texto, FUNCIÓN(columna numérica) AS nombre FROM la tabla GROUP BY la columna de texto.",
      "Structure: SELECT the text column, FUNCTION(numeric column) AS name FROM the table GROUP BY the text column.",
    ],
  },
  {
    title: ["Ordena las regiones de la que más vende a la que menos.", "Sort the regions from the top seller to the lowest."],
    hint: [
      "Estructura: la consulta del reto anterior, más ORDER BY el total seguido de DESC.",
      "Structure: the previous challenge's query, plus ORDER BY the total followed by DESC.",
    ],
  },
  {
    title: ["Muestra solo las regiones que vendieron más de 30 millones.", "Show only the regions that sold more than 30 million."],
    hint: [
      "Estructura: la consulta del reto 1, más HAVING una condición sobre el total, después de GROUP BY.",
      "Structure: challenge 1's query, plus HAVING a condition on the total, after GROUP BY.",
    ],
  },
];

const START_SQL = "SELECT * FROM ventas";

type RunInfo =
  | { kind: "blocked"; msg: Tx2 }
  | { kind: "run"; res: RunOk | RunErr; results: CritResult[] };

const LINE = 24;

/* ------------------------------------------------------------------ */
/* Componente                                                           */
/* ------------------------------------------------------------------ */

export default function ProyectoSQL({ lang }: DemoProps) {
  const es = lang === "es";
  const reduced = useReducedMotion();
  const { events, log, clear } = useEventLog();

  const [status, setStatus] = useState<"loading" | "ready" | "failed">("loading");
  const [expected, setExpected] = useState<Expected[] | null>(null);
  const dbRef = useRef<AlaDb | null>(null);

  const [active, setActive] = useState(0);
  const [passed, setPassed] = useState<boolean[]>([false, false, false]);
  const [queries, setQueries] = useState<string[]>([START_SQL, START_SQL, START_SQL]);
  const [runs, setRuns] = useState<(RunInfo | null)[]>([null, null, null]);
  const [attempts, setAttempts] = useState<number[]>([0, 0, 0]);
  const [fails, setFails] = useState<Record<string, number>[]>([{}, {}, {}]);
  const [hintOpen, setHintOpen] = useState<boolean[]>([false, false, false]);
  const [announce, setAnnounce] = useState("");

  const taRef = useRef<HTMLTextAreaElement>(null);
  const tabFree = useRef(false);

  const t = useCallback((p: Tx2) => (es ? p[0] : p[1]), [es]);
  const num = useCallback(
    (n: number) => {
      const s = String(Number(n.toFixed(4)));
      return es ? s.replace(".", ",") : s;
    },
    [es],
  );

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const mod = await import("alasql");
        const ala = ((mod as { default?: unknown }).default ?? mod) as unknown as AlaSQL;
        const db = makeDb(ala);
        const exp = buildExpected(db);
        if (!alive) return;
        dbRef.current = db;
        setExpected(exp);
        setStatus("ready");
      } catch {
        if (alive) setStatus("failed");
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const reset = useCallback(() => {
    setActive(0);
    setPassed([false, false, false]);
    setQueries([START_SQL, START_SQL, START_SQL]);
    setRuns([null, null, null]);
    setAttempts([0, 0, 0]);
    setFails([{}, {}, {}]);
    setHintOpen([false, false, false]);
    setAnnounce("");
    clear();
  }, [clear]);

  const setQuery = (v: string) => setQueries((q) => q.map((x, i) => (i === active ? v : x)));

  const run = useCallback(
    (sql: string) => {
      const db = dbRef.current;
      if (!db || !expected) return;
      const i = active;
      const v = validateQuery(sql);
      if (!v.ok) {
        setRuns((r) => r.map((x, k) => (k === i ? { kind: "blocked", msg: v.msg } : x)));
        setAnnounce(t(v.msg));
        return;
      }
      const res = runQuery(db, v.sql);
      const results = evaluate(i, v.sql, res, expected[i]);
      const failed = results.filter((c) => c.ok === false);
      const okCount = results.filter((c) => c.ok === true).length;
      const all = failed.length === 0;
      log(es ? "ejecutó" : "ran", es ? `reto ${i + 1}` : `challenge ${i + 1}`);
      if (all) log(es ? "pasó prueba" : "passed test", `${okCount}/${results.length}`);
      else log(es ? "no pasó" : "failed test", t(CRITERIA[i].find((d) => d.id === failed[0].id)!.label).slice(0, 34));
      if (all && !passed[i]) log(es ? "completó" : "completed", es ? `reto ${i + 1}` : `challenge ${i + 1}`);
      setRuns((r) => r.map((x, k) => (k === i ? { kind: "run", res, results } : x)));
      setAttempts((a) => a.map((x, k) => (k === i ? x + 1 : x)));
      setFails((fs) =>
        fs.map((m, k) => {
          if (k !== i) return m;
          const n = { ...m };
          for (const c of failed) n[c.id] = (n[c.id] ?? 0) + 1;
          return n;
        }),
      );
      if (all) setPassed((p) => p.map((x, k) => (k === i ? true : x)));
      const shown = res.ok ? Math.min(res.rows.length, MAX_ROWS) : 0;
      setAnnounce(
        res.ok
          ? es
            ? `Resultado: ${shown} filas. ${okCount} de ${results.length} pruebas pasadas.${all ? " Reto superado." : ""}`
            : `Result: ${shown} rows. ${okCount} of ${results.length} tests passed.${all ? " Challenge passed." : ""}`
          : es
            ? `La consulta tiene un error. ${okCount} de ${results.length} pruebas pasadas.`
            : `The query has an error. ${okCount} of ${results.length} tests passed.`,
      );
    },
    [active, expected, es, log, passed, t],
  );

  const toggleHint = () => {
    const open = hintOpen[active];
    setHintOpen((h) => h.map((x, k) => (k === active ? !open : x)));
    if (!open) log(es ? "pidió pista" : "asked hint", es ? `reto ${active + 1}` : `challenge ${active + 1}`);
  };

  const next = () => {
    setActive((a) => Math.min(2, a + 1));
    setAnnounce(es ? `Reto ${Math.min(3, active + 2)} de 3.` : `Challenge ${Math.min(3, active + 2)} of 3.`);
  };

  const onKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      run(e.currentTarget.value);
      return;
    }
    if (e.key === "Escape") {
      tabFree.current = true;
      return;
    }
    if (e.key === "Tab" && !e.shiftKey && !tabFree.current) {
      e.preventDefault();
      const el = e.currentTarget;
      const s = el.selectionStart;
      const nv = `${el.value.slice(0, s)}  ${el.value.slice(el.selectionEnd)}`;
      setQuery(nv);
      requestAnimationFrame(() => {
        if (taRef.current) taRef.current.selectionStart = taRef.current.selectionEnd = s + 2;
      });
      return;
    }
    if (e.key !== "Tab" && e.key !== "Shift") tabFree.current = false;
  };

  const query = queries[active];
  const lines = Math.max(4, query.split("\n").length);
  const info = runs[active];
  const allDone = passed.every(Boolean);
  const isPassed = passed[active];
  const challenge = CHALLENGES[active];

  const failedComments: Tx2[] = [];
  if (info?.kind === "run") {
    for (const c of info.results) if (c.ok === false && c.comment && !failedComments.some((x) => x[0] === c.comment![0])) failedComments.push(c.comment);
  }

  /* ---------- estados de carga ---------- */
  if (status !== "ready") {
    return (
      <DemoShell lang={lang} instruction={tx(lang, "Escribe una consulta, ejecútala y lee el comentario del revisor.", "Write a query, run it and read the reviewer's comment.")}>
        <div className={`${cls.stage} p-6 text-center text-sm text-white/70`} role="status">
          {status === "loading"
            ? tx(lang, "Cargando el editor…", "Loading the editor…")
            : tx(lang, "No se pudo cargar el editor. Cierra esta ventana y vuelve a abrirla.", "The editor could not load. Close this window and open it again.")}
        </div>
      </DemoShell>
    );
  }

  const mostFailed = (i: number) => {
    const entries = Object.entries(fails[i]).sort((a, b) => b[1] - a[1]);
    if (!entries.length) return es ? "Ninguno" : "None";
    const def = CRITERIA[i].find((d) => d.id === entries[0][0]);
    return `${def ? t(def.label) : entries[0][0]} (${entries[0][1]})`;
  };

  return (
    <DemoShell
      lang={lang}
      onReset={reset}
      instruction={tx(lang, "Escribe una consulta, ejecútala y lee el comentario del revisor. Las pruebas corren al instante.", "Write a query, run it and read the reviewer's comment. The tests run instantly.")}
    >
      <div className={`${cls.stage} flex flex-col gap-4 p-3 sm:p-4`}>
        {/* Encabezado */}
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-white">{tx(lang, "Proyecto 2 · Ventas por región", "Project 2 · Sales by region")}</p>
            <p className="text-xs text-white/55">{tx(lang, "Analítica de Datos para la Toma de Decisiones", "Data Analytics for Decision Making")}</p>
          </div>
          <p className="rounded-full bg-[#7C3AED]/20 px-3 py-1 text-xs font-medium text-[#C084FC]">
            {tx(lang, `Reto ${active + 1} de 3`, `Challenge ${active + 1} of 3`)}
          </p>
        </div>

        {/* Escalera de retos */}
        <ol className="flex gap-2" aria-label={tx(lang, "Retos", "Challenges")}>
          {CHALLENGES.map((_, i) => {
            const unlocked = i === 0 || passed[i - 1];
            return (
              <li key={i} className="min-w-0 flex-1">
                <button
                  type="button"
                  disabled={!unlocked}
                  aria-current={i === active ? "step" : undefined}
                  onClick={() => setActive(i)}
                  className={`flex w-full items-center justify-center gap-1.5 rounded-xl border px-2 py-2 text-xs font-medium transition-colors ${cls.focus} disabled:cursor-not-allowed disabled:opacity-40 ${
                    i === active ? "border-[#C084FC]/70 bg-[#7C3AED]/25 text-white" : "border-white/10 bg-white/[0.04] text-white/70 hover:border-white/30"
                  }`}
                >
                  {passed[i] ? <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" aria-hidden /> : !unlocked ? <Lock className="h-3.5 w-3.5" aria-hidden /> : null}
                  <span className="truncate">{tx(lang, `Reto ${i + 1}`, `Challenge ${i + 1}`)}</span>
                  <span className="sr-only">
                    {passed[i] ? tx(lang, ", superado", ", passed") : !unlocked ? tx(lang, ", bloqueado", ", locked") : ""}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        {/* Enunciado */}
        <p className="text-base font-medium leading-snug text-white">{t(challenge.title)}</p>

        {/* Tabla ventas */}
        <details className="group rounded-xl border border-white/10 bg-black/30">
          <summary className={`flex cursor-pointer list-none items-center justify-between gap-2 rounded-xl px-3 py-2 text-sm text-white/80 ${cls.focus}`}>
            <span>{tx(lang, "Ver la tabla ventas", "View the ventas table")}</span>
            <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden />
          </summary>
          <div className="overflow-x-auto px-3 pb-3" tabIndex={0} role="region" aria-label={tx(lang, "Tabla ventas, 12 filas", "ventas table, 12 rows")}>
            <p className="mb-2 text-xs text-white/50">
              {tx(lang, "12 filas. La columna ventas está en millones de pesos.", "12 rows. The ventas column is in millions of pesos.")}
            </p>
            <table className="w-full min-w-[460px] border-collapse font-mono text-xs">
              <thead>
                <tr className="text-left text-[#C084FC]">
                  {["region", "mes", "producto", "unidades", "ventas"].map((c) => (
                    <th key={c} scope="col" className="border-b border-white/10 px-2 py-1 font-semibold">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-white/75">
                {DATA.map((r, i) => (
                  <tr key={i} className="odd:bg-white/[0.03]">
                    <td className="px-2 py-1">{String(r.region)}</td>
                    <td className="px-2 py-1">{String(r.mes)}</td>
                    <td className="px-2 py-1">{String(r.producto)}</td>
                    <td className="px-2 py-1">{num(r.unidades as number)}</td>
                    <td className="px-2 py-1">{num(r.ventas as number)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>

        {/* Editor */}
        <div>
          <label htmlFor="sql-editor" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
            {tx(lang, "Tu consulta SQL", "Your SQL query")}
          </label>
          <div className="flex overflow-hidden rounded-xl border border-white/15 bg-black/50 focus-within:border-[#C084FC] focus-within:ring-2 focus-within:ring-[#C084FC]/60">
            <div aria-hidden className="select-none border-r border-white/10 px-2 py-3 text-right font-mono text-xs text-white/30" style={{ lineHeight: `${LINE}px` }}>
              {Array.from({ length: lines }, (_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
            <textarea
              id="sql-editor"
              ref={taRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={onKey}
              spellCheck={false}
              autoCapitalize="off"
              autoCorrect="off"
              autoComplete="off"
              wrap="off"
              className="block min-w-0 flex-1 resize-none overflow-x-auto overflow-y-hidden bg-transparent px-3 py-3 font-mono text-[13px] text-white outline-none"
              style={{ height: lines * LINE + 24, lineHeight: `${LINE}px` }}
            />
          </div>
          <p className="mt-1.5 text-xs text-white/45">
            {tx(
              lang,
              "Tab inserta dos espacios. Esc y luego Tab para salir del editor. Ctrl/Cmd + Enter ejecuta.",
              "Tab inserts two spaces. Esc then Tab to leave the editor. Ctrl/Cmd + Enter runs.",
            )}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button type="button" onClick={() => run(query)} className={cls.btnPrimary}>
            <Play className="h-4 w-4" aria-hidden />
            {tx(lang, "Ejecutar", "Run")}
          </button>
          <button type="button" onClick={toggleHint} aria-expanded={hintOpen[active]} className={cls.btnGhost}>
            <Lightbulb className="h-4 w-4" aria-hidden />
            {tx(lang, "Pista", "Hint")}
          </button>
        </div>

        {hintOpen[active] && (
          <p className="rounded-xl bg-[#7C3AED]/15 px-3 py-2 font-mono text-xs leading-relaxed text-white/85">{t(challenge.hint)}</p>
        )}

        {/* Resultado */}
        <div className="flex flex-col gap-3">
          <p className="sr-only" aria-live="polite">
            {announce}
          </p>

          {info?.kind === "blocked" && <Feedback tone="info">{t(info.msg)}</Feedback>}

          {info?.kind === "run" && (
            <>
              {info.res.ok ? (
                <div>
                  <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
                    {tx(lang, "Resultado", "Result")} · {info.res.rows.length} {tx(lang, info.res.rows.length === 1 ? "fila" : "filas", info.res.rows.length === 1 ? "row" : "rows")}
                    {info.res.rows.length > MAX_ROWS && ` · ${tx(lang, `se muestran las primeras ${MAX_ROWS}`, `showing the first ${MAX_ROWS}`)}`}
                  </p>
                  {info.res.rows.length === 0 ? (
                    <p className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white/70">
                      {tx(lang, "La consulta corrió, pero no devolvió ninguna fila.", "The query ran, but it returned no rows.")}
                    </p>
                  ) : (
                    <div
                      className="max-h-64 overflow-auto rounded-xl border border-white/10 bg-black/30"
                      tabIndex={0}
                      role="region"
                      aria-label={tx(lang, "Resultado de la consulta", "Query result")}
                    >
                      <table className="w-full min-w-max border-collapse font-mono text-xs">
                        <thead className="sticky top-0 bg-[#1a0b2e]">
                          <tr className="text-left text-[#C084FC]">
                            {info.res.cols.map((c) => (
                              <th key={c} scope="col" className="border-b border-white/10 px-3 py-1.5 font-semibold">
                                {c}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="text-white/80">
                          {info.res.rows.slice(0, MAX_ROWS).map((r, ri) => (
                            <tr key={ri} className="odd:bg-white/[0.03]">
                              {info.res.ok &&
                                info.res.cols.map((c) => (
                                  <td key={c} className="whitespace-nowrap px-3 py-1.5">
                                    {cellText(r[c], num)}
                                  </td>
                                ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ) : (
                <p className="rounded-xl bg-rose-400/10 px-3 py-2 font-mono text-xs leading-relaxed text-rose-200 [overflow-wrap:anywhere]">
                  {summarizeError(info.res.error)}
                </p>
              )}

              {/* Pruebas */}
              <div className="rounded-xl border border-white/10 bg-black/30 p-3">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/50">{tx(lang, "Pruebas automáticas", "Automated tests")}</p>
                <ul className="space-y-1.5">
                  {info.results.map((c) => {
                    const def = CRITERIA[active].find((d) => d.id === c.id)!;
                    return (
                      <li key={c.id} className="flex items-start gap-2 text-sm">
                        {c.ok === true ? (
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" aria-hidden />
                        ) : c.ok === false ? (
                          <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-300" aria-hidden />
                        ) : (
                          <MinusCircle className="mt-0.5 h-4 w-4 shrink-0 text-white/30" aria-hidden />
                        )}
                        <span className={c.ok === true ? "text-white/85" : c.ok === false ? "text-rose-100" : "text-white/40"}>
                          {t(def.label)}
                          <span className="sr-only">
                            {c.ok === true ? tx(lang, ": pasó", ": passed") : c.ok === false ? tx(lang, ": falló", ": failed") : tx(lang, ": sin evaluar", ": not evaluated")}
                          </span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Revisor */}
              {failedComments.length > 0 && (
                <div className="rounded-xl border border-[#F472B6]/30 bg-[#F472B6]/[0.07] p-3">
                  <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#F472B6]">{tx(lang, "Comentario del revisor", "Reviewer comment")}</p>
                  <div className="space-y-1.5 text-sm leading-relaxed text-white/90">
                    {failedComments.slice(0, 2).map((m, i) => (
                      <p key={i}>{t(m)}</p>
                    ))}
                  </div>
                </div>
              )}

              {isPassed && info.results.every((c) => c.ok) && (
                <div className={`rounded-xl bg-emerald-400/10 p-3 ${reduced ? "" : "animate-pulse [animation-iteration-count:2]"}`}>
                  <p className="flex items-start gap-2 text-sm font-medium text-emerald-200">
                    <Trophy className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                    {tx(
                      lang,
                      `Reto ${active + 1} superado. Las pruebas pasaron y tu consulta devuelve lo esperado.`,
                      `Challenge ${active + 1} passed. The tests passed and your query returns what was expected.`,
                    )}
                  </p>
                  {active < 2 && (
                    <button type="button" onClick={next} className={`${cls.btnPrimary} mt-3`}>
                      {tx(lang, "Siguiente reto", "Next challenge")}
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </button>
                  )}
                </div>
              )}
            </>
          )}

          {!info && (
            <p className="text-sm text-white/45">
              {tx(lang, "Ejecuta tu consulta para ver el resultado y las pruebas.", "Run your query to see the result and the tests.")}
            </p>
          )}
        </div>

        {/* Resumen del docente */}
        {allDone && (
          <div className="rounded-xl border border-[#C084FC]/40 bg-[#7C3AED]/10 p-3">
            <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-white">
              <Trophy className="h-4 w-4 text-[#C084FC]" aria-hidden />
              {tx(lang, "Proyecto completo. Esto ve el docente de tu recorrido", "Project complete. This is what the instructor sees of your path")}
            </p>
            <div className="overflow-x-auto" tabIndex={0} role="region" aria-label={tx(lang, "Resumen por reto", "Summary by challenge")}>
              <table className="w-full min-w-[420px] border-collapse text-xs">
                <thead>
                  <tr className="text-left text-white/55">
                    <th scope="col" className="px-2 py-1 font-semibold">{tx(lang, "Reto", "Challenge")}</th>
                    <th scope="col" className="px-2 py-1 font-semibold">{tx(lang, "Intentos", "Attempts")}</th>
                    <th scope="col" className="px-2 py-1 font-semibold">{tx(lang, "Criterio que más falló", "Most failed criterion")}</th>
                  </tr>
                </thead>
                <tbody className="text-white/85">
                  {[0, 1, 2].map((i) => (
                    <tr key={i} className="odd:bg-white/[0.03]">
                      <td className="px-2 py-1">{i + 1}</td>
                      <td className="px-2 py-1">{attempts[i]}</td>
                      <td className="px-2 py-1">{mostFailed(i)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3 rounded-lg border border-dashed border-white/20 p-2.5">
              <p className="mb-1 inline-block rounded-full bg-white/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-white/70">
                {tx(lang, "Ejemplo ilustrativo", "Illustrative example")}
              </p>
              <p className="text-xs leading-relaxed text-white/70">
                {tx(
                  lang,
                  "En una cohorte de 40 personas, 23 usaron WHERE en el reto 3 en su primer intento. El docente ve ese patrón y dedica diez minutos de la sesión en vivo a la diferencia entre WHERE y HAVING.",
                  "In a cohort of 40 people, 23 used WHERE in challenge 3 on their first attempt. The instructor sees that pattern and spends ten minutes of the live session on the difference between WHERE and HAVING.",
                )}
              </p>
            </div>
          </div>
        )}
      </div>

      <EventLog lang={lang} events={events} />
    </DemoShell>
  );
}

/** Los valores siempre se pintan como texto (React los escapa), nunca como HTML. */
function cellText(v: unknown, num: (n: number) => string): string {
  if (v === null || v === undefined) return "NULL";
  if (typeof v === "number") return Number.isFinite(v) ? num(v) : String(v);
  if (typeof v === "string") return v.length > 200 ? `${v.slice(0, 200)}…` : v;
  if (typeof v === "boolean") return String(v);
  try {
    const s = JSON.stringify(v);
    return s.length > 200 ? `${s.slice(0, 200)}…` : s;
  } catch {
    return String(v);
  }
}
