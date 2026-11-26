"use client";

/**
 * Proyecto con retroalimentación en una hoja de cálculo (26-nov-2026): equipo de ventas, hoja de comisiones.
 * El participante escribe una fórmula en D2, la hoja la copia hasta D6 (referencias relativas, respeta $) y un
 * revisor comenta al instante. Motor propio de fórmulas: + - * / ^, %, comparaciones, SI/IF, SUMA/SUM,
 * PROMEDIO/AVERAGE, MAX, MIN, Y/AND, O/OR; separador ; o , (con ; la coma es decimal).
 */
import { useMemo, useRef, useState } from "react";
import { CheckCircle2, Lightbulb, Lock, Play, Trophy, XCircle } from "lucide-react";
import { cls, EventLog, tx, useEventLog, type DemoProps } from "./ui";

type Fila = { nombre: string; ventas: number; meta: number };
const FILAS: Fila[] = [
  { nombre: "Ana", ventas: 52, meta: 45 },
  { nombre: "Carlos", ventas: 40, meta: 40 },
  { nombre: "Diana", ventas: 33, meta: 38 },
  { nombre: "Felipe", ventas: 61, meta: 50 },
  { nombre: "Laura", ventas: 28, meta: 35 },
];
const ESPERADO_1 = FILAS.map((f) => f.ventas * 0.05);
const ESPERADO_2 = FILAS.map((f) => f.ventas * (f.ventas >= f.meta ? 0.08 : 0.05));
const TOTAL = ESPERADO_2.reduce((a, b) => a + b, 0);

/* ───────────── Motor de fórmulas ───────────── */
type Val = number | boolean | number[];
type Tok = { t: "num" | "ref" | "fn" | "op" | "(" | ")" | "sep" | ":" | "%"; v: string };

function tokenizar(src: string): Tok[] {
  const s = src.trim().replace(/^=/, "");
  const decimalComa = s.includes(";");
  const out: Tok[] = [];
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (/\s/.test(c)) { i++; continue; }
    const num = decimalComa ? /^\d+(?:[.,]\d+)?/.exec(s.slice(i)) : /^\d+(?:\.\d+)?/.exec(s.slice(i));
    if (num) { out.push({ t: "num", v: num[0].replace(",", ".") }); i += num[0].length; continue; }
    const ref = /^\$?[A-Za-z]{1,2}\$?\d+/.exec(s.slice(i));
    if (ref) { out.push({ t: "ref", v: ref[0].toUpperCase() }); i += ref[0].length; continue; }
    const fn = /^[A-Za-zÁÉÍÓÚáéíóú]+(?=\s*\()/.exec(s.slice(i));
    if (fn) { out.push({ t: "fn", v: fn[0].toUpperCase() }); i += fn[0].length; continue; }
    const op2 = s.slice(i, i + 2);
    if (op2 === ">=" || op2 === "<=" || op2 === "<>") { out.push({ t: "op", v: op2 }); i += 2; continue; }
    if ("+-*/^<>=".includes(c)) { out.push({ t: "op", v: c }); i++; continue; }
    if (c === "(" || c === ")") { out.push({ t: c, v: c }); i++; continue; }
    if (c === ";" || (c === "," && !decimalComa)) { out.push({ t: "sep", v: c }); i++; continue; }
    if (c === ":") { out.push({ t: ":", v: c }); i++; continue; }
    if (c === "%") { out.push({ t: "%", v: c }); i++; continue; }
    throw new Error(`«${c}»`);
  }
  return out;
}

type Ctx = { cell: (col: string, row: number) => number };
const parseRef = (r: string) => {
  const m = /^(\$?)([A-Z]{1,2})(\$?)(\d+)$/.exec(r)!;
  return { col: m[2], row: Number(m[4]), absCol: !!m[1], absRow: !!m[3] };
};

function evaluar(src: string, ctx: Ctx, dRow = 0): Val {
  const toks = tokenizar(src);
  let p = 0;
  const peek = () => toks[p];
  const eat = (t?: Tok["t"], v?: string) => {
    const k = toks[p];
    if (!k || (t && k.t !== t) || (v && k.v !== v)) throw new Error("sintaxis");
    p++;
    return k;
  };
  const num = (x: Val): number => {
    if (Array.isArray(x)) throw new Error("rango");
    return typeof x === "boolean" ? (x ? 1 : 0) : x;
  };
  const refVal = (r: string) => {
    const q = parseRef(r);
    return ctx.cell(q.col, q.absRow ? q.row : q.row + dRow);
  };
  const flat = (args: Val[]) => args.flatMap((a) => (Array.isArray(a) ? a : [num(a)]));
  const FN: Record<string, (a: Val[]) => Val> = {
    SI: (a) => (num(a[0]) ? a[1] ?? true : a[2] ?? false),
    IF: (a) => (num(a[0]) ? a[1] ?? true : a[2] ?? false),
    SUMA: (a) => flat(a).reduce((x, y) => x + y, 0),
    SUM: (a) => flat(a).reduce((x, y) => x + y, 0),
    PROMEDIO: (a) => { const f = flat(a); return f.reduce((x, y) => x + y, 0) / f.length; },
    AVERAGE: (a) => { const f = flat(a); return f.reduce((x, y) => x + y, 0) / f.length; },
    MAX: (a) => Math.max(...flat(a)),
    MIN: (a) => Math.min(...flat(a)),
    Y: (a) => a.every((x) => num(x) !== 0),
    AND: (a) => a.every((x) => num(x) !== 0),
    O: (a) => a.some((x) => num(x) !== 0),
    OR: (a) => a.some((x) => num(x) !== 0),
  };
  const primary = (): Val => {
    const k = peek();
    if (!k) throw new Error("incompleta");
    if (k.t === "num") { p++; return Number(k.v); }
    if (k.t === "ref") {
      p++;
      if (peek()?.t === ":") {
        p++;
        const b = eat("ref").v;
        const A = parseRef(k.v);
        const B = parseRef(b);
        const r0 = A.absRow ? A.row : A.row + dRow;
        const r1 = B.absRow ? B.row : B.row + dRow;
        const vals: number[] = [];
        for (let r = Math.min(r0, r1); r <= Math.max(r0, r1); r++) vals.push(ctx.cell(A.col, r));
        return vals;
      }
      return refVal(k.v);
    }
    if (k.t === "fn") {
      p++;
      const f = FN[k.v];
      if (!f) throw new Error(`función ${k.v}`);
      eat("(");
      const args: Val[] = [];
      if (peek()?.t !== ")") {
        args.push(cmp());
        while (peek()?.t === "sep") { p++; args.push(cmp()); }
      }
      eat(")");
      return f(args);
    }
    if (k.t === "(") { p++; const v = cmp(); eat(")"); return v; }
    throw new Error("sintaxis");
  };
  const postfix = (): Val => { let v = primary(); while (peek()?.t === "%") { p++; v = num(v) / 100; } return v; };
  const unary = (): Val => {
    const k = peek();
    if (k?.t === "op" && (k.v === "-" || k.v === "+")) { p++; const v = num(unary()); return k.v === "-" ? -v : v; }
    return postfix();
  };
  const power = (): Val => { let v = unary(); while (peek()?.t === "op" && peek().v === "^") { p++; v = num(v) ** num(unary()); } return v; };
  const term = (): Val => {
    let v = power();
    while (peek()?.t === "op" && (peek().v === "*" || peek().v === "/")) { const o = eat().v; const r = num(power()); v = o === "*" ? num(v) * r : num(v) / r; }
    return v;
  };
  const add = (): Val => {
    let v = term();
    while (peek()?.t === "op" && (peek().v === "+" || peek().v === "-")) { const o = eat().v; const r = num(term()); v = o === "+" ? num(v) + r : num(v) - r; }
    return v;
  };
  const cmp = (): Val => {
    const a = add();
    const k = peek();
    if (k?.t === "op" && ["=", "<>", "<", ">", "<=", ">="].includes(k.v)) {
      p++;
      const x = num(a);
      const y = num(add());
      return { "=": x === y, "<>": x !== y, "<": x < y, ">": x > y, "<=": x <= y, ">=": x >= y }[k.v]!;
    }
    return a;
  };
  const v = cmp();
  if (p !== toks.length) throw new Error("sintaxis");
  return v;
}

/* ───────────── Retos ───────────── */
type Reto = { titulo: [string, string]; pide: [string, string]; pista: [string, string]; celda: string };
const RETOS: Reto[] = [
  {
    titulo: ["Comisión base", "Base commission"],
    pide: ["Escribe en D2 la comisión del 5 % sobre las ventas. La hoja copia tu fórmula hasta D6.", "Write the 5% commission on sales in D2. The sheet copies your formula down to D6."],
    pista: ["Multiplica la venta de la columna B por 5 %. Por ejemplo, =B2*5%.", "Multiply the sale in column B by 5%. For example, =B2*5%."],
    celda: "D2",
  },
  {
    titulo: ["Comisión por meta", "Commission by target"],
    pide: ["Ahora quien llega a su meta (columna C) gana 8 %, y el resto, 5 %.", "Now whoever reaches their target (column C) earns 8%, and the rest earn 5%."],
    pista: ["Usa SI: =SI(B2>=C2;B2*8%;B2*5%). En inglés es =IF(B2>=C2,B2*8%,B2*5%).", "Use IF: =IF(B2>=C2,B2*8%,B2*5%). In Spanish Excel it is =SI(B2>=C2;B2*8%;B2*5%)."],
    celda: "D2",
  },
  {
    titulo: ["Total del equipo", "Team total"],
    pide: ["Escribe en D7 el total de comisiones que paga el equipo.", "Write in D7 the total commission the team pays."],
    pista: ["Suma el rango de la columna D: =SUMA(D2:D6).", "Sum the range in column D: =SUM(D2:D6)."],
    celda: "D7",
  },
];

type Resultado = { ok: boolean; vals: (number | null)[]; comentario: [string, string]; error?: boolean };

export default function ProyectoHoja({ lang }: DemoProps) {
  const es = lang === "es";
  const i18 = es ? 0 : 1;
  const T = (a: string, b: string) => tx(lang, a, b);
  const { events, log, clear } = useEventLog();
  const [reto, setReto] = useState(0);
  const [formulas, setFormulas] = useState<string[]>(["", "", ""]);
  const [res, setRes] = useState<(Resultado | null)[]>([null, null, null]);
  const [pista, setPista] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const passed = res.map((r) => !!r?.ok);
  const n2 = (v: number) => (es ? v.toFixed(2).replace(".", ",") : v.toFixed(2));

  // Columna D que ve la hoja: lo último que pasó (o lo que el participante está probando en el reto actual)
  const colD = useMemo(() => {
    const r1 = res[1]?.ok ? res[1].vals : res[0]?.ok ? res[0].vals : null;
    return r1 ?? FILAS.map(() => null);
  }, [res]);

  const cell = (col: string, row: number): number => {
    const i = row - 2;
    if (i < 0 || i >= FILAS.length) return 0;
    if (col === "B") return FILAS[i].ventas;
    if (col === "C") return FILAS[i].meta;
    if (col === "D") return ESPERADO_2[i];
    return 0;
  };

  const ejecutar = () => {
    const f = formulas[reto].trim();
    if (!f) return;
    let r: Resultado;
    try {
      if (reto < 2) {
        const vals = FILAS.map((_, i) => {
          const v = evaluar(f, { cell }, i);
          if (Array.isArray(v)) throw new Error("rango");
          return typeof v === "boolean" ? (v ? 1 : 0) : v;
        });
        const esp = reto === 0 ? ESPERADO_1 : ESPERADO_2;
        const okRows = vals.map((v, i) => Math.abs(v - esp[i]) < 0.005);
        const ok = okRows.every(Boolean);
        let comentario: [string, string];
        const iguales = vals.every((v) => Math.abs(v - vals[0]) < 1e-9);
        if (ok) comentario = reto === 0
          ? ["Bien. Las cinco comisiones dan el 5 % de cada venta. La fórmula se copió sola porque usaste referencias relativas.", "Good. All five commissions are 5% of each sale. The formula copied down because you used relative references."]
          : ["Excelente. Carlos llegó justo a su meta y recibe 8 %: usaste «mayor o igual», que es lo que pide la política.", "Excellent. Carlos hit his target exactly and gets 8%: you used \"greater than or equal\", which is what the policy says."];
        else if (iguales) comentario = ["Las cinco filas dan lo mismo. ¿Fijaste la fila con $? Así la fórmula no cambia al copiarse hacia abajo.", "All five rows give the same value. Did you lock the row with $? Then the formula does not change when copied down."];
        else if (reto === 1 && vals.every((v, i) => Math.abs(v - ESPERADO_1[i]) < 0.005)) comentario = ["Todos reciben 5 %. Falta la condición: quien llega a su meta gana 8 %.", "Everyone gets 5%. The condition is missing: whoever reaches their target earns 8%."];
        else if (reto === 1 && !okRows[1] && okRows.filter(Boolean).length === 4) comentario = ["Casi. Carlos vendió 40 y su meta era 40: llegó a la meta, pero tu fórmula le da 5 %. ¿Usaste «mayor que» en vez de «mayor o igual»?", "Almost. Carlos sold 40 and his target was 40: he reached it, but your formula gives him 5%. Did you use \"greater than\" instead of \"greater than or equal\"?"];
        else if (reto === 1 && vals.every((v, i) => Math.abs(v - FILAS[i].ventas * 0.08) < 0.005)) comentario = ["Todos reciben 8 %. Revisa la condición: solo gana 8 % quien llega a su meta.", "Everyone gets 8%. Check the condition: only those who reach their target earn 8%."];
        else comentario = [`${okRows.filter(Boolean).length} de 5 filas coinciden. Compara la fila que falla con la política de comisiones.`, `${okRows.filter(Boolean).length} of 5 rows match. Compare the failing row with the commission policy.`];
        r = { ok, vals, comentario };
      } else {
        const v = evaluar(f, { cell }, 0);
        const val = Array.isArray(v) ? NaN : typeof v === "boolean" ? (v ? 1 : 0) : v;
        const ok = Math.abs(val - TOTAL) < 0.005;
        r = {
          ok,
          vals: [val],
          comentario: ok
            ? [`Listo. El equipo paga ${n2(TOTAL)} millones en comisiones este mes.`, `Done. The team pays ${n2(TOTAL)} million in commissions this month.`]
            : Math.abs(val - ESPERADO_2.slice(0, 4).reduce((a, b) => a + b, 0)) < 0.005
              ? ["Te faltó una fila: el rango debe ir de D2 a D6.", "You missed a row: the range should go from D2 to D6."]
              : ["El total no coincide. Suma toda la columna D, de D2 a D6.", "The total does not match. Add up the whole column D, from D2 to D6."],
        };
      }
    } catch (e) {
      r = {
        ok: false,
        vals: [],
        error: true,
        comentario: [
          `La hoja no pudo leer la fórmula (${(e as Error).message}). Revisa los paréntesis y usa ; o , para separar.`,
          `The sheet could not read the formula (${(e as Error).message}). Check the parentheses and use , or ; as separators.`,
        ],
      };
    }
    setRes((old) => old.map((x, i) => (i === reto ? r : x)));
    log(r.ok ? T("superó", "passed") : T("ejecutó", "ran"), `${T("Reto", "Challenge")} ${reto + 1}: ${f.slice(0, 40)}`);
  };

  const reset = () => {
    clear();
    setReto(0);
    setFormulas(["", "", ""]);
    setRes([null, null, null]);
    setPista(false);
  };

  const actual = res[reto];
  const filaD = (i: number) => {
    if (reto < 2 && actual && !actual.error) return actual.vals[i] ?? null;
    return colD[i];
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm leading-relaxed text-white/70">
          {T(
            "Eres analista del equipo de ventas. Escribe la fórmula de comisiones, ejecútala y lee el comentario del revisor. Las pruebas corren al instante.",
            "You are the sales team's analyst. Write the commission formula, run it and read the reviewer's comment. The tests run instantly.",
          )}
        </p>
        <button type="button" onClick={reset} className={`${cls.btnGhost} shrink-0 px-3 py-1.5 text-xs`}>
          {T("Reiniciar", "Reset")}
        </button>
      </div>

      <ol className="flex gap-2" aria-label={T("Retos", "Challenges")}>
        {RETOS.map((r, i) => {
          const unlocked = i === 0 || passed[i - 1];
          return (
            <li key={i} className="min-w-0 flex-1">
              <button
                type="button"
                disabled={!unlocked}
                onClick={() => { setReto(i); setPista(false); }}
                aria-current={i === reto ? "step" : undefined}
                className={`flex w-full items-center justify-center gap-1.5 rounded-lg border px-2 py-1.5 text-xs font-semibold transition-colors disabled:cursor-not-allowed ${
                  i === reto ? "border-[#C084FC]/70 bg-[#7C3AED]/25 text-white" : unlocked ? "border-white/12 text-white/70 hover:border-white/30" : "border-white/10 text-white/35"
                } ${cls.focus}`}
              >
                {passed[i] ? <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" aria-hidden /> : !unlocked ? <Lock className="h-3.5 w-3.5" aria-hidden /> : null}
                <span className="truncate">{T(`Reto ${i + 1}`, `Challenge ${i + 1}`)} · {r.titulo[i18]}</span>
              </button>
            </li>
          );
        })}
      </ol>

      <div className={`${cls.stage} p-3 sm:p-4`}>
        <p className="text-sm font-semibold text-white">{RETOS[reto].pide[i18]}</p>
        {/* barra de fórmulas */}
        <div className="mt-3 flex items-stretch overflow-hidden rounded-lg border border-white/15 bg-black/40 focus-within:ring-2 focus-within:ring-[#C084FC]">
          <span className="flex items-center border-r border-white/10 bg-white/[0.04] px-3 font-mono text-xs font-bold text-white/70">{RETOS[reto].celda}</span>
          <span className="flex items-center px-2 font-mono text-sm italic text-[#C084FC]" aria-hidden>
            fx
          </span>
          <input
            ref={inputRef}
            value={formulas[reto]}
            onChange={(e) => setFormulas((o) => o.map((x, i) => (i === reto ? e.target.value : x)))}
            onKeyDown={(e) => { if (e.key === "Enter") ejecutar(); }}
            aria-label={T(`Fórmula de la celda ${RETOS[reto].celda}`, `Formula for cell ${RETOS[reto].celda}`)}
            placeholder={reto === 2 ? "=" : T("=B2*…", "=B2*…")}
            spellCheck={false}
            autoComplete="off"
            className="min-w-0 flex-1 bg-transparent px-2 py-2.5 font-mono text-sm text-white outline-none placeholder:text-white/30"
          />
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          <button type="button" onClick={ejecutar} disabled={!formulas[reto].trim()} className={cls.btnPrimary}>
            <Play className="h-4 w-4" aria-hidden />
            {T("Ejecutar", "Run")}
          </button>
          <button type="button" onClick={() => setPista((v) => !v)} aria-expanded={pista} className={cls.btnGhost}>
            <Lightbulb className="h-4 w-4" aria-hidden />
            {T("Pista", "Hint")}
          </button>
        </div>
        {pista && <p className="mt-2 rounded-lg bg-white/[0.05] px-3 py-2 text-xs leading-relaxed text-white/75">{RETOS[reto].pista[i18]}</p>}

        {/* hoja */}
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[420px] border-collapse font-mono text-[13px]">
            <caption className="sr-only">{T("Hoja de comisiones del equipo de ventas, en millones de pesos", "Sales team commission sheet, in millions of pesos")}</caption>
            <thead>
              <tr className="text-[11px] text-white/45">
                <th scope="col" className="w-8 border border-white/10 bg-white/[0.04] py-1" aria-hidden />
                {["A", "B", "C", "D"].map((c) => (
                  <th key={c} scope="col" className="border border-white/10 bg-white/[0.04] py-1 font-semibold">{c}</th>
                ))}
              </tr>
              <tr className="text-left text-[12px] text-white/80">
                <th scope="row" className="border border-white/10 bg-white/[0.04] text-center text-[11px] text-white/45">1</th>
                <th scope="col" className="border border-white/10 px-2 py-1.5 font-semibold">{T("Vendedor", "Rep")}</th>
                <th scope="col" className="border border-white/10 px-2 py-1.5 font-semibold">{T("Ventas", "Sales")}</th>
                <th scope="col" className="border border-white/10 px-2 py-1.5 font-semibold">{T("Meta", "Target")}</th>
                <th scope="col" className="border border-white/10 px-2 py-1.5 font-semibold text-[#DDD6FE]">{T("Comisión", "Commission")}</th>
              </tr>
            </thead>
            <tbody>
              {FILAS.map((f, i) => {
                const v = filaD(i);
                const esp = reto === 0 ? ESPERADO_1[i] : ESPERADO_2[i];
                const marca = reto < 2 && actual && !actual.error ? (Math.abs((v ?? -1) - esp) < 0.005 ? "ok" : "bad") : null;
                return (
                  <tr key={f.nombre} className="text-white/85">
                    <th scope="row" className="border border-white/10 bg-white/[0.04] text-center text-[11px] font-normal text-white/45">{i + 2}</th>
                    <td className="border border-white/10 px-2 py-1.5 font-sans">{f.nombre}</td>
                    <td className="border border-white/10 px-2 py-1.5 text-right">{f.ventas}</td>
                    <td className="border border-white/10 px-2 py-1.5 text-right">{f.meta}</td>
                    <td className={`border border-white/10 px-2 py-1.5 text-right ${marca === "ok" ? "bg-emerald-400/10 text-emerald-200" : marca === "bad" ? "bg-rose-500/10 text-rose-200" : "text-[#DDD6FE]"}`}>
                      <span className="inline-flex items-center gap-1.5">
                        {v === null ? "" : n2(v)}
                        {marca === "ok" && <CheckCircle2 className="h-3.5 w-3.5" aria-label={T("correcta", "correct")} />}
                        {marca === "bad" && <XCircle className="h-3.5 w-3.5" aria-label={T("no coincide", "does not match")} />}
                      </span>
                    </td>
                  </tr>
                );
              })}
              <tr className="text-white/85">
                <th scope="row" className="border border-white/10 bg-white/[0.04] text-center text-[11px] font-normal text-white/45">7</th>
                <td className="border border-white/10 px-2 py-1.5 font-sans font-semibold" colSpan={3}>{T("Total", "Total")}</td>
                <td className={`border border-white/10 px-2 py-1.5 text-right font-semibold ${res[2]?.ok ? "bg-emerald-400/10 text-emerald-200" : reto === 2 && res[2] ? "bg-rose-500/10 text-rose-200" : "text-white/40"}`}>
                  {reto === 2 && res[2] && !res[2].error && Number.isFinite(res[2].vals[0] as number) ? n2(res[2].vals[0] as number) : res[2]?.ok ? n2(TOTAL) : ""}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div aria-live="polite">
        {actual && (
          <div className={`rounded-2xl border p-4 ${actual.ok ? "border-emerald-400/35 bg-emerald-400/[0.06]" : "border-[#F472B6]/35 bg-[#F472B6]/[0.06]"}`}>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#F472B6]">{T("Comentario del revisor", "Reviewer comment")}</p>
            <p className="text-sm leading-relaxed text-white/90">{actual.comentario[i18]}</p>
            {actual.ok && reto < 2 && (
              <button type="button" onClick={() => { setReto(reto + 1); setPista(false); setTimeout(() => inputRef.current?.focus(), 50); }} className={`${cls.btnPrimary} mt-3`}>
                {T(`Seguir al reto ${reto + 2}`, `Go to challenge ${reto + 2}`)}
              </button>
            )}
            {actual.ok && reto === 2 && (
              <p className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200">
                <Trophy className="h-4 w-4" aria-hidden />
                {T("Proyecto terminado: tres retos superados.", "Project complete: three challenges passed.")}
              </p>
            )}
          </div>
        )}
      </div>

      <EventLog lang={lang} events={events} />
    </div>
  );
}
