"use client";

import { useEffect, useRef, useState } from "react";
import { Check, RotateCcw, X } from "lucide-react";
import { cls, DemoShell, EventLog, Feedback, ScoreRing, useEventLog, type DemoProps } from "./ui";

type Q = { id: string; kind: "vf" | "multi" | "single"; q: [string, string]; opts: [string, string][]; correct: number[]; exp: [string, string] };

const VF: [string, string][] = [["Verdadero", "True"], ["Falso", "False"]];

const BANCO: Record<string, Q> = {
  vf1: {
    id: "vf1",
    kind: "vf",
    q: ["Una correlación alta entre dos variables prueba que una causa la otra.", "A high correlation between two variables proves that one causes the other."],
    opts: VF,
    correct: [1],
    exp: ["Falso. Las ventas de helado y el uso de aire acondicionado suben juntas porque las dos dependen del calor.", "False. Ice cream sales and air conditioning use rise together because both depend on heat."],
  },
  vf2: {
    id: "vf2",
    kind: "vf",
    q: ["La mediana es menos sensible a los valores atípicos que la media.", "The median is less sensitive to outliers than the mean."],
    opts: VF,
    correct: [0],
    exp: ["Verdadero. La mediana solo depende del valor del medio.", "True. The median depends only on the middle value."],
  },
  vf3: {
    id: "vf3",
    kind: "vf",
    q: ["Un KPI necesita una meta y un periodo para poder evaluarse.", "A KPI needs a target and a period to be evaluated."],
    opts: VF,
    correct: [0],
    exp: ["Verdadero. Sin meta ni periodo, el número no dice si vas bien o mal.", "True. Without a target and a period, the number does not tell you whether you are on track."],
  },
  mc1: {
    id: "mc1",
    kind: "multi",
    q: ["¿Cuáles de estos son problemas de calidad de datos? Elige todas las que apliquen.", "Which of these are data quality problems? Choose all that apply."],
    opts: [["Registros duplicados", "Duplicate records"], ["Valores faltantes", "Missing values"], ["Fechas en formatos distintos", "Dates in different formats"], ["Un tablero con muchos colores", "A dashboard with too many colors"]],
    correct: [0, 1, 2],
    exp: ["Los tres primeros afectan el dato. Un tablero con muchos colores es un problema de diseño.", "The first three affect the data itself. A dashboard with too many colors is a design problem."],
  },
  mc2: {
    id: "mc2",
    kind: "multi",
    q: ["¿Qué gráficos sirven para comparar categorías en un mismo periodo? Elige todas las que apliquen.", "Which charts work for comparing categories in the same period? Choose all that apply."],
    opts: [["Barras horizontales", "Horizontal bars"], ["Columnas", "Columns"], ["Dispersión", "Scatter plot"], ["Líneas", "Line chart"]],
    correct: [0, 1],
    exp: ["Barras y columnas comparan categorías. La dispersión muestra la relación entre dos variables y las líneas, el cambio en el tiempo.", "Bars and columns compare categories. A scatter plot shows the relationship between two variables, and a line chart shows change over time."],
  },
  sc1: {
    id: "sc1",
    kind: "single",
    q: ["Para mostrar cómo evolucionaron las ventas durante 24 meses, ¿qué gráfico es más claro?", "To show how sales changed over 24 months, which chart is clearest?"],
    opts: [["Líneas", "Line chart"], ["Torta", "Pie chart"], ["Dispersión", "Scatter plot"]],
    correct: [0],
    exp: ["Las líneas muestran la tendencia en el tiempo de un vistazo.", "A line chart shows the trend over time at a glance."],
  },
  sc2: {
    id: "sc2",
    kind: "single",
    q: ["Un valor atípico infla el promedio de salarios de un equipo. ¿Qué medida reportas?", "An outlier inflates a team's average salary. Which measure do you report?"],
    opts: [["La mediana", "The median"], ["La media", "The mean"], ["La suma total", "The total"]],
    correct: [0],
    exp: ["La mediana representa mejor el salario típico cuando hay valores extremos.", "The median better represents the typical salary when there are extreme values."],
  },
  sc3: {
    id: "sc3",
    kind: "single",
    q: ["Una tasa de conversión de 3 % significa que…", "A 3% conversion rate means that…"],
    opts: [["3 de cada 100 visitantes compraron", "3 out of 100 visitors bought"], ["las ventas subieron 3 %", "sales went up 3%"], ["hay 3 % de clientes nuevos", "3% of customers are new"]],
    correct: [0],
    exp: ["La conversión divide las compras entre las visitas.", "Conversion divides purchases by visits."],
  },
};

const VARIANTES: Record<string, string[]> = {
  set: ["vf1", "mc1", "sc1", "sc2"],
  vf: ["vf1", "vf2", "vf3"],
  multiple: ["mc1", "mc2"],
  unica: ["sc1", "sc2", "sc3"],
};

const igual = (a: number[], b: number[]) => a.length === b.length && a.every((x) => b.includes(x));

export default function Cuestionario({ lang, variante = "set" }: DemoProps) {
  const es = lang === "es";
  const L = es ? 0 : 1;
  const ids = VARIANTES[variante] ?? VARIANTES.set;
  const auto = variante === "unica";
  const [idx, setIdx] = useState(0);
  const [sel, setSel] = useState<number[]>([]);
  const [checked, setChecked] = useState(false);
  const [res, setRes] = useState<Record<string, boolean>>({});
  const headRef = useRef<HTMLParagraphElement>(null);
  const timer = useRef<number | undefined>(undefined);
  const { events, log, clear } = useEventLog();

  useEffect(() => () => window.clearTimeout(timer.current), []);
  useEffect(() => {
    if (idx > 0) headRef.current?.focus();
  }, [idx]);

  const fin = idx >= ids.length;
  const q = fin ? null : BANCO[ids[idx]];

  const comprobar = (seleccion: number[]) => {
    if (!q) return;
    const ok = igual(seleccion, q.correct);
    setChecked(true);
    setRes((r) => ({ ...r, [q.id]: ok }));
    log("answered", `${es ? "Pregunta" : "Question"} ${idx + 1} · ${ok ? (es ? "correcta" : "correct") : es ? "incorrecta" : "incorrect"}`);
    if (auto) timer.current = window.setTimeout(siguiente, 1300);
  };
  const elegir = (i: number) => {
    if (!q || checked) return;
    if (q.kind === "multi") {
      setSel((s) => (s.includes(i) ? s.filter((x) => x !== i) : [...s, i]));
      return;
    }
    setSel([i]);
    comprobar([i]);
  };
  function siguiente() {
    if (idx + 1 >= ids.length) log("completed", es ? `${ids.length} preguntas respondidas` : `${ids.length} questions answered`);
    setIdx(idx + 1);
    setSel([]);
    setChecked(false);
  }
  const reset = () => {
    window.clearTimeout(timer.current);
    setIdx(0);
    setSel([]);
    setChecked(false);
    setRes({});
    clear();
  };

  const puntos = ids.filter((id) => res[id]).length;
  const ok = q ? res[q.id] : false;

  const instr: Record<string, [string, string]> = {
    set: ["Responde las cuatro preguntas del módulo. Mezcla verdadero o falso, opción múltiple y opción única.", "Answer the module's four questions. It mixes true or false, multiple choice and single choice."],
    vf: ["Marca cada afirmación como verdadera o falsa.", "Mark each statement as true or false."],
    multiple: ["Elige todas las respuestas correctas y luego comprueba.", "Choose every correct answer, then check."],
    unica: ["Elige una respuesta. La siguiente pregunta aparece sola.", "Pick one answer. The next question appears on its own."],
  };

  return (
    <DemoShell lang={lang} instruction={(instr[variante] ?? instr.set)[L]} onReset={reset}>
      <div className={`${cls.stage} p-4 sm:p-5`}>
        <div className="mb-4 flex gap-1.5" aria-hidden>
          {ids.map((id, k) => (
            <span key={id} className={`h-1.5 flex-1 rounded-full ${k < idx ? (res[id] ? "bg-emerald-400" : "bg-rose-400") : k === idx ? "bg-white/50" : "bg-white/10"}`} />
          ))}
        </div>

        {q && (
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C084FC]">
              {es ? "Pregunta" : "Question"} {idx + 1} {es ? "de" : "of"} {ids.length} · {q.kind === "vf" ? (es ? "Verdadero o falso" : "True or false") : q.kind === "multi" ? (es ? "Opción múltiple" : "Multiple choice") : es ? "Opción única" : "Single choice"}
            </p>
            <p ref={headRef} tabIndex={-1} className="mt-2 text-base font-semibold leading-snug text-white focus:outline-none sm:text-lg">{q.q[L]}</p>
            <div role={q.kind === "multi" ? "group" : "radiogroup"} aria-label={es ? "Opciones" : "Options"} className={`mt-4 grid gap-2 ${q.kind === "vf" ? "grid-cols-2" : ""}`}>
              {q.opts.map((o, i) => {
                const marcada = sel.includes(i);
                const esCorrecta = q.correct.includes(i);
                const estado = checked ? (esCorrecta ? "ok" : marcada ? "bad" : "off") : marcada ? "on" : "";
                return (
                  <button
                    key={i}
                    type="button"
                    role={q.kind === "multi" ? "checkbox" : "radio"}
                    aria-checked={marcada}
                    onClick={() => elegir(i)}
                    disabled={checked}
                    className={`${cls.chip} flex items-center gap-3 py-3 ${q.kind === "vf" ? "justify-center text-base font-semibold" : ""} ${
                      estado === "on" ? "border-[#C084FC] bg-[#7C3AED]/25" : estado === "ok" ? "border-emerald-400/70 bg-emerald-400/10" : estado === "bad" ? "border-rose-400/70 bg-rose-400/10" : estado === "off" ? "opacity-50" : ""
                    }`}
                  >
                    {q.kind !== "vf" && (
                      <span className={`flex h-5 w-5 shrink-0 items-center justify-center border-2 ${q.kind === "multi" ? "rounded-md" : "rounded-full"} ${marcada ? "border-[#C084FC] bg-[#7C3AED]" : "border-white/30"}`} aria-hidden>
                        {marcada && <Check className="h-3 w-3" />}
                      </span>
                    )}
                    <span className="flex-1">{o[L]}</span>
                    {checked && esCorrecta && <Check className="h-4 w-4 text-emerald-300" aria-hidden />}
                    {checked && marcada && !esCorrecta && <X className="h-4 w-4 text-rose-300" aria-hidden />}
                  </button>
                );
              })}
            </div>
            <div className="mt-3">
              <Feedback tone={checked ? (ok ? "ok" : "bad") : null}>{checked ? q.exp[L] : null}</Feedback>
            </div>
            <div className="mt-2 flex justify-end gap-2">
              {q.kind === "multi" && !checked && (
                <button type="button" onClick={() => comprobar(sel)} disabled={sel.length === 0} className={cls.btnPrimary}>
                  {es ? "Comprobar" : "Check"}
                </button>
              )}
              {checked && !auto && (
                <button type="button" onClick={siguiente} className={cls.btnPrimary}>
                  {idx === ids.length - 1 ? (es ? "Ver resultado" : "See result") : es ? "Siguiente" : "Next"}
                </button>
              )}
            </div>
          </div>
        )}

        {fin && (
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center" role="status">
            <ScoreRing value={puntos} max={ids.length} label={es ? `${puntos} de ${ids.length} correctas` : `${puntos} of ${ids.length} correct`} />
            <div className="flex-1">
              <p className="text-lg font-semibold text-white">
                {puntos === ids.length ? (es ? "Todas correctas" : "All correct") : es ? `${puntos} de ${ids.length} correctas` : `${puntos} of ${ids.length} correct`}
              </p>
              <ul className="mt-2 space-y-1 text-sm text-white/70">
                {ids.map((id, k) => (
                  <li key={id} className="flex items-start gap-2">
                    {res[id] ? <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" aria-label={es ? "correcta" : "correct"} /> : <X className="mt-0.5 h-4 w-4 shrink-0 text-rose-300" aria-label={es ? "incorrecta" : "incorrect"} />}
                    <span>{k + 1}. {BANCO[id].q[L]}</span>
                  </li>
                ))}
              </ul>
              <button type="button" onClick={reset} className={`${cls.btnGhost} mt-3`}>
                <RotateCcw className="h-4 w-4" aria-hidden /> {es ? "Volver a intentar" : "Try again"}
              </button>
            </div>
          </div>
        )}
      </div>
      <EventLog lang={lang} events={events} />
    </DemoShell>
  );
}
