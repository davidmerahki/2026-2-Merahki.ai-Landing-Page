"use client";

import { useEffect, useRef, useState } from "react";
import { Check, RotateCcw, SkipForward, Play, Circle } from "lucide-react";
import { cls, DemoShell, EventLog, Feedback, tx, useEventLog, useReducedMotion, type DemoProps } from "./ui";

type Q = { q: [string, string]; opts: [string, string][]; correct: number; exp: [string, string] };

/** La pregunta k diagnostica el módulo k + 1. */
const PREGUNTAS: Q[] = [
  {
    q: [
      "Cinco personas tardan 2, 3, 3, 4 y 40 minutos en resolver un ticket. ¿Qué medida describe mejor el tiempo típico?",
      "Five people take 2, 3, 3, 4 and 40 minutes to resolve a ticket. Which measure best describes the typical time?",
    ],
    opts: [
      ["La media (10,4 minutos)", "The mean (10.4 minutes)"],
      ["La mediana (3 minutos)", "The median (3 minutes)"],
      ["El rango (38 minutos)", "The range (38 minutes)"],
    ],
    correct: 1,
    exp: [
      "La mediana. El valor de 40 minutos infla la media, mientras que la mediana solo depende del valor del medio.",
      "The median. The 40-minute value inflates the mean, while the median depends only on the middle value.",
    ],
  },
  {
    q: ["¿Qué calcula la función PROMEDIO.SI en Excel?", "What does the AVERAGEIF function calculate in Excel?"],
    opts: [
      ["La suma de las celdas que cumplen un criterio", "The sum of the cells that meet a criterion"],
      ["El promedio de todo el rango, sin mirar el criterio", "The average of the whole range, ignoring the criterion"],
      ["El promedio solo de las celdas que cumplen un criterio", "The average of only the cells that meet a criterion"],
    ],
    correct: 2,
    exp: [
      "PROMEDIO.SI promedia únicamente las celdas que cumplen el criterio, por ejemplo las ventas de una sola región.",
      "AVERAGEIF averages only the cells that meet the criterion, for example the sales of a single region.",
    ],
  },
  {
    q: ["En una tabla dinámica, ¿qué va en el área de Valores?", "In a pivot table, what goes in the Values area?"],
    opts: [
      ["El campo que resumes, por ejemplo la suma de ventas", "The field you summarize, for example the sum of sales"],
      ["Las categorías que quedan como filas", "The categories that become rows"],
      ["El filtro que limita el periodo", "The filter that limits the period"],
    ],
    correct: 0,
    exp: [
      "Valores contiene el número que se resume (suma, promedio, conteo). Las categorías van en Filas o Columnas.",
      "Values holds the number being summarized (sum, average, count). Categories go in Rows or Columns.",
    ],
  },
  {
    q: [
      "Las ventas de helado y los casos de insolación suben juntos cada verano. ¿Qué concluyes?",
      "Ice cream sales and heatstroke cases rise together every summer. What do you conclude?",
    ],
    opts: [
      ["El helado causa la insolación", "Ice cream causes heatstroke"],
      ["No hay ninguna relación entre las dos", "There is no relationship between the two"],
      ["Hay correlación, pero una tercera variable como el calor puede explicar las dos", "They are correlated, but a third variable such as heat may explain both"],
    ],
    correct: 2,
    exp: [
      "Correlación no es causalidad. El calor sube las dos series sin que una cause la otra.",
      "Correlation is not causation. Heat raises both series without either one causing the other.",
    ],
  },
];

const MODULOS: [string, string][] = [
  ["Estadística descriptiva", "Descriptive statistics"],
  ["Excel para análisis", "Excel for analysis"],
  ["Tablas dinámicas y tableros", "Pivot tables and dashboards"],
  ["Correlación y regresión", "Correlation and regression"],
  ["Visualización para decidir", "Visualization for decisions"],
  ["Proyecto final", "Final project"],
];

const HORAS_POR_MODULO = 1.5;

export default function Diagnostico({ lang }: DemoProps) {
  const es = lang === "es";
  const L = es ? 0 : 1;
  const reduced = useReducedMotion();
  const { events, log, clear } = useEventLog();
  const [idx, setIdx] = useState(0);
  const [respuestas, setRespuestas] = useState<(number | null)[]>([null, null, null, null]);
  const [lit, setLit] = useState(false);
  const headRef = useRef<HTMLParagraphElement>(null);
  const resRef = useRef<HTMLHeadingElement>(null);

  const fin = idx >= PREGUNTAS.length;
  const q = fin ? null : PREGUNTAS[idx];
  const marcada = q ? respuestas[idx] : null;
  const checked = marcada !== null;

  useEffect(() => {
    if (idx > 0 && !fin) headRef.current?.focus();
  }, [idx, fin]);

  useEffect(() => {
    if (!fin) {
      setLit(false);
      return;
    }
    resRef.current?.focus();
    if (reduced) {
      setLit(true);
      return;
    }
    const t = window.setTimeout(() => setLit(true), 60);
    return () => window.clearTimeout(t);
  }, [fin, reduced]);

  const dominados = PREGUNTAS.map((p, i) => respuestas[i] === p.correct);
  const nDominados = dominados.filter(Boolean).length;
  const primero = dominados.findIndex((d) => !d); // 0..4 siempre, los módulos 5 y 6 nunca se dominan
  const inicio = (primero === -1 ? 4 : primero) + 1;
  const horas = nDominados * HORAS_POR_MODULO;
  const horasTxt = es ? String(horas).replace(".", ",") : String(horas);

  const elegir = (i: number) => {
    if (!q || checked) return;
    const ok = i === q.correct;
    setRespuestas((r) => r.map((v, k) => (k === idx ? i : v)));
    log("answered", `${es ? "Pregunta" : "Question"} ${idx + 1} · ${ok ? (es ? "correcta" : "correct") : es ? "incorrecta" : "incorrect"}`);
  };

  const siguiente = () => {
    if (idx + 1 >= PREGUNTAS.length) {
      const dom = PREGUNTAS.filter((p, i) => respuestas[i] === p.correct).length;
      const prim = PREGUNTAS.findIndex((p, i) => respuestas[i] !== p.correct);
      const start = (prim === -1 ? 4 : prim) + 1;
      log("completed", es ? `Ruta lista · empieza en módulo ${start}` : `Path ready · starts at module ${start}`);
      log("skipped", es ? `${dom} ${dom === 1 ? "módulo omitido" : "módulos omitidos"}` : `${dom} ${dom === 1 ? "module skipped" : "modules skipped"}`);
    }
    setIdx(idx + 1);
  };

  const reset = () => {
    setIdx(0);
    setRespuestas([null, null, null, null]);
    setLit(false);
    clear();
  };

  const mensaje =
    nDominados === 0
      ? es
        ? "Empiezas en el módulo 1. Con estas respuestas no se omite ningún módulo, así que haces la ruta completa de 6."
        : "You start at module 1. With these answers no module is skipped, so you take the full 6-module path."
      : es
        ? `Empiezas en el módulo ${inicio}. Ahorras ${horasTxt} horas.`
        : `You start at module ${inicio}. You save ${horasTxt} hours.`;

  const nota =
    nDominados === 0
      ? es
        ? "Es un ejemplo: cada módulo que dominaras se omitiría."
        : "This is an example: every module you mastered would be skipped."
      : es
        ? `Cálculo del ejemplo: ${String(HORAS_POR_MODULO).replace(".", ",")} horas por cada módulo que ya dominas (${nDominados} ${nDominados === 1 ? "módulo" : "módulos"}).`
        : `Worked example: ${HORAS_POR_MODULO} hours for each module you already master (${nDominados} ${nDominados === 1 ? "module" : "modules"}).`;

  return (
    <DemoShell
      lang={lang}
      onReset={reset}
      instruction={tx(
        lang,
        "Responde un diagnóstico de cuatro preguntas. Los módulos que ya dominas se omiten de tu ruta, porque repetir lo que ya sabes no aporta.",
        "Answer a four-question diagnostic. Modules you already master are skipped in your path, because repeating what you already know adds nothing.",
      )}
    >
      <div className={`${cls.stage} p-4 sm:p-5`}>
        {q && (
          <div>
            <div className="mb-4 flex gap-1.5" aria-hidden>
              {PREGUNTAS.map((p, k) => (
                <span
                  key={k}
                  className={`h-1.5 flex-1 rounded-full ${k < idx ? "bg-[#C084FC]" : k === idx ? "bg-white/50" : "bg-white/10"}`}
                />
              ))}
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C084FC]">
              {es ? "Pregunta" : "Question"} {idx + 1} {es ? "de" : "of"} {PREGUNTAS.length}
            </p>
            <p ref={headRef} tabIndex={-1} className="mt-2 text-base font-semibold leading-snug text-white focus:outline-none sm:text-lg">
              {q.q[L]}
            </p>
            <div role="radiogroup" aria-label={es ? "Opciones" : "Options"} className="mt-4 grid gap-2">
              {q.opts.map((o, i) => {
                const sel = marcada === i;
                const esCorrecta = i === q.correct;
                const estado = checked ? (esCorrecta ? "ok" : sel ? "bad" : "off") : "";
                return (
                  <button
                    key={i}
                    type="button"
                    role="radio"
                    aria-checked={sel}
                    onClick={() => elegir(i)}
                    disabled={checked}
                    className={`${cls.chip} flex items-center gap-3 py-3 disabled:cursor-default ${
                      estado === "ok"
                        ? "border-emerald-400/70 bg-emerald-400/10"
                        : estado === "bad"
                          ? "border-rose-400/70 bg-rose-400/10"
                          : estado === "off"
                            ? "opacity-50"
                            : ""
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${sel ? "border-[#C084FC] bg-[#7C3AED]" : "border-white/30"}`}
                      aria-hidden
                    >
                      {sel && <Check className="h-3 w-3" />}
                    </span>
                    <span className="flex-1">{o[L]}</span>
                    {checked && esCorrecta && <Check className="h-4 w-4 text-emerald-300" aria-label={es ? "correcta" : "correct"} />}
                  </button>
                );
              })}
            </div>
            <div className="mt-3">
              <Feedback tone={checked ? (marcada === q.correct ? "ok" : "bad") : null}>
                {checked ? (
                  <>
                    {marcada === q.correct
                      ? es
                        ? `Lo dominas: se omite el módulo ${idx + 1}. `
                        : `You master it: module ${idx + 1} is skipped. `
                      : es
                        ? `Este tema queda en tu ruta (módulo ${idx + 1}). `
                        : `This topic stays in your path (module ${idx + 1}). `}
                    {q.exp[L]}
                  </>
                ) : null}
              </Feedback>
            </div>
            <div className="mt-2 flex justify-end">
              {checked && (
                <button type="button" onClick={siguiente} className={cls.btnPrimary}>
                  {idx === PREGUNTAS.length - 1 ? (es ? "Ver mi ruta" : "See my path") : es ? "Siguiente" : "Next"}
                </button>
              )}
            </div>
          </div>
        )}

        {fin && (
          <div>
            <div aria-live="polite">
              <h3 ref={resRef} tabIndex={-1} className="text-lg font-semibold leading-snug text-white focus:outline-none">
                {es ? "Tu ruta personalizada" : "Your personalized path"}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-white/85">{mensaje}</p>
              <p className="mt-1 text-xs leading-relaxed text-white/50">{nota}</p>
            </div>

            <ol className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {MODULOS.map((m, i) => {
                const n = i + 1;
                const dominado = i < 4 && dominados[i];
                const esInicio = n === inicio;
                const estado = dominado ? "skip" : esInicio ? "start" : "path";
                const estadoTxt =
                  estado === "skip" ? (es ? "Lo dominas, se omite" : "Mastered, skipped") : estado === "start" ? (es ? "Empiezas aquí" : "Start here") : es ? "En tu ruta" : "In your path";
                return (
                  <li
                    key={n}
                    className={`flex items-start gap-3 rounded-xl border px-3 py-3 ${
                      reduced ? "" : "transition-[opacity,transform,background-color,border-color] duration-500"
                    } ${lit ? "translate-y-0 opacity-100" : reduced ? "" : "translate-y-2 opacity-0"} ${
                      estado === "skip"
                        ? "border-white/10 bg-white/[0.03] text-white/45"
                        : estado === "start"
                          ? "border-[#C084FC] bg-[#7C3AED]/25 text-white"
                          : "border-[#F472B6]/40 bg-[#F472B6]/[0.07] text-white"
                    }`}
                    style={reduced ? undefined : { transitionDelay: `${i * 120}ms` }}
                    aria-label={`${es ? "Módulo" : "Module"} ${n}: ${m[L]}. ${estadoTxt}`}
                  >
                    <span
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                        estado === "skip" ? "bg-white/10 text-white/60" : estado === "start" ? "bg-[#7C3AED] text-white" : "bg-[#F472B6]/30 text-white"
                      }`}
                      aria-hidden
                    >
                      {estado === "skip" ? <Check className="h-3.5 w-3.5" /> : n}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className={`block text-sm font-semibold leading-snug ${estado === "skip" ? "line-through decoration-white/30" : ""}`}>
                        {m[L]}
                      </span>
                      <span className="mt-1 flex items-center gap-1.5 text-xs" aria-hidden>
                        {estado === "skip" ? (
                          <SkipForward className="h-3 w-3" />
                        ) : estado === "start" ? (
                          <Play className="h-3 w-3 text-[#C084FC]" />
                        ) : (
                          <Circle className="h-3 w-3 text-[#F472B6]" />
                        )}
                        <span className={estado === "start" ? "text-[#C084FC]" : estado === "path" ? "text-white/70" : ""}>{estadoTxt}</span>
                      </span>
                    </span>
                  </li>
                );
              })}
            </ol>

            <button type="button" onClick={reset} className={`${cls.btnGhost} mt-4`}>
              <RotateCcw className="h-4 w-4" aria-hidden /> {es ? "Volver a intentar" : "Try again"}
            </button>
          </div>
        )}
      </div>
      <EventLog lang={lang} events={events} />
    </DemoShell>
  );
}
