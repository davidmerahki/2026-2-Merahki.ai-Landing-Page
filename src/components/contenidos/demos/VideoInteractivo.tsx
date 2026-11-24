"use client";

import { useEffect, useRef, useState, type PointerEvent as RPointerEvent } from "react";
import { Play, Pause, RotateCcw, Info, X } from "lucide-react";
import { cls, useEventLog, EventLog, Feedback, type DemoProps } from "./ui";

const DUR = 36;
const SALARIOS = [1.8, 2.0, 2.2, 2.4, 2.6, 2.9, 12.0];

type Pregunta = { id: string; t: number; q: [string, string]; opts: [string, string][]; correct: number; ok: [string, string]; bad: [string, string] };

const PREGUNTAS: Pregunta[] = [
  {
    id: "p1",
    t: 9,
    q: [
      "Uno de los siete salarios es mucho mayor que los demás. ¿Qué medida representa mejor el salario típico del equipo?",
      "One of the seven salaries is much higher than the rest. Which measure best represents the team's typical salary?",
    ],
    opts: [["La media", "The mean"], ["La mediana", "The median"]],
    correct: 1,
    ok: ["Correcto. La mediana no cambia con un valor extremo.", "Correct. The median does not move with an extreme value."],
    bad: [
      "La media sube con el valor extremo. Al continuar verás dónde queda la línea rosada.",
      "The mean rises with the extreme value. Continue to see where the pink line lands.",
    ],
  },
  {
    id: "p2",
    t: 26,
    q: ["Si sacamos el salario de 12 millones, ¿qué medida cambia más?", "If we remove the 12 million salary, which measure changes the most?"],
    opts: [["La media", "The mean"], ["La mediana", "The median"]],
    correct: 0,
    ok: [
      "Correcto. La media baja de 3,7 a 2,3 millones. La mediana apenas pasa de 2,4 a 2,3.",
      "Correct. The mean drops from 3.7 to 2.3 million. The median barely moves from 2.4 to 2.3.",
    ],
    bad: [
      "La mediana casi no se mueve, pasa de 2,4 a 2,3. La media baja de 3,7 a 2,3 millones.",
      "The median barely moves, from 2.4 to 2.3. The mean drops from 3.7 to 2.3 million.",
    ],
  },
];
const INFO_T = 18;

const caption = (t: number, es: boolean) => {
  if (t < 4) return es ? "Estos son los salarios mensuales de un equipo de 7 personas, en millones de pesos." : "These are the monthly salaries of a 7-person team, in millions of pesos.";
  if (t < 9) return es ? "Seis salarios están entre 1,8 y 2,9 millones. Uno es de 12 millones." : "Six salaries are between 1.8 and 2.9 million. One is 12 million.";
  if (t < 18) return es ? "La media suma todo y divide entre 7: 3,7 millones. La mediana es el valor del medio: 2,4 millones." : "The mean adds everything and divides by 7: 3.7 million. The median is the middle value: 2.4 million.";
  if (t < 26) return es ? "La media quedó por encima de seis de los siete salarios." : "The mean ended up above six of the seven salaries.";
  return es ? "Sin el valor atípico, la media y la mediana quedan en 2,3 millones." : "Without the outlier, the mean and the median both land at 2.3 million.";
};

const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

export default function VideoInteractivo({ lang }: DemoProps) {
  const es = lang === "es";
  const [t, setT] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [activeQ, setActiveQ] = useState<Pregunta | null>(null);
  const [choice, setChoice] = useState<number | null>(null);
  const [results, setResults] = useState<Record<string, { correct: boolean; attempts: number }>>({});
  const [infoClosed, setInfoClosed] = useState(false);
  const tRef = useRef(0);
  const firstOptRef = useRef<HTMLButtonElement>(null);
  const { events, log, clear } = useEventLog();

  useEffect(() => {
    if (!playing) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const prev = tRef.current;
      let next = Math.min(DUR, prev + (now - last) / 1000);
      last = now;
      const q = PREGUNTAS.find((p) => !results[p.id] && prev < p.t && next >= p.t);
      if (q) {
        next = q.t;
        tRef.current = next;
        setT(next);
        setPlaying(false);
        setActiveQ(q);
        setChoice(null);
        log("paused", `${es ? "Pregunta" : "Question"} ${q.id === "p1" ? 1 : 2} · ${fmt(q.t)}`);
        return;
      }
      tRef.current = next;
      setT(next);
      if (next >= DUR) {
        setPlaying(false);
        log("completed", `Video · ${fmt(DUR)}`);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing, results, log, es]);

  useEffect(() => {
    if (activeQ) firstOptRef.current?.focus();
  }, [activeQ]);

  const play = () => {
    if (activeQ) return;
    if (tRef.current >= DUR) {
      tRef.current = 0;
      setT(0);
      setResults({});
      setInfoClosed(false);
    }
    setStarted(true);
    setPlaying(true);
    log("played", `Video · ${fmt(tRef.current)}`);
  };
  const pause = () => {
    setPlaying(false);
    log("paused", `Video · ${fmt(tRef.current)}`);
  };

  const answer = (i: number) => {
    if (!activeQ || choice !== null) return;
    setChoice(i);
    const prev = results[activeQ.id];
    const attempts = (prev?.attempts ?? 0) + 1;
    const correct = i === activeQ.correct;
    setResults((r) => ({ ...r, [activeQ.id]: { correct: r[activeQ.id]?.correct || correct, attempts } }));
    log("answered", `${activeQ.id === "p1" ? "P1" : "P2"} · ${correct ? (es ? "correcta" : "correct") : es ? "incorrecta" : "incorrect"} · ${es ? "intento" : "attempt"} ${attempts}`);
  };
  const retry = () => setChoice(null);
  const resume = () => {
    setActiveQ(null);
    setChoice(null);
    setPlaying(true);
  };

  const seekFromPointer = (e: RPointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    let target = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)) * DUR;
    const blocker = PREGUNTAS.find((p) => !results[p.id] && p.t < target);
    if (blocker) target = blocker.t - 0.05;
    tRef.current = target;
    setT(target);
    setStarted(true);
  };

  const reset = () => {
    tRef.current = 0;
    setT(0);
    setPlaying(false);
    setStarted(false);
    setActiveQ(null);
    setChoice(null);
    setResults({});
    setInfoClosed(false);
    clear();
  };

  const showInfo = !infoClosed && t >= INFO_T && t < INFO_T + 7 && !activeQ;
  const outlierOut = t >= 27;
  const media = outlierOut ? 2.3 : 3.7;
  const mediana = outlierOut ? 2.3 : 2.4;
  const ended = t >= DUR;
  const correctCount = PREGUNTAS.filter((p) => results[p.id]?.correct).length;

  // Geometría del gráfico
  const W = 520, H = 230, padL = 36, padB = 26, top = 14, max = 13;
  const y = (v: number) => top + (H - padB - top) * (1 - v / max);
  const bw = (W - padL - 20) / SALARIOS.length;

  return (
    <div className="flex flex-col gap-3">
      <div className={`${cls.stage} aspect-[16/10] w-full bg-[#07000f] sm:aspect-video`}>
        {/* Escena del "video" */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(124,58,237,0.28),transparent_60%),radial-gradient(ellipse_at_85%_90%,rgba(219,39,119,0.18),transparent_55%)]" />
        <div className="absolute left-3 top-3 rounded-md bg-black/50 px-2 py-1 text-[11px] font-medium text-white/70">
          {es ? "Módulo 2 · Medidas de tendencia central" : "Module 2 · Measures of central tendency"}
        </div>
        <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-x-4 top-8 bottom-14 h-[calc(100%-5.5rem)] w-[calc(100%-2rem)]" role="img" aria-label={es ? "Gráfico de barras con siete salarios" : "Bar chart with seven salaries"}>
          {[0, 4, 8, 12].map((v) => (
            <g key={v}>
              <line x1={padL} x2={W - 10} y1={y(v)} y2={y(v)} stroke="rgba(255,255,255,0.08)" />
              <text x={padL - 8} y={y(v) + 4} textAnchor="end" fontSize="10" fill="rgba(255,255,255,0.45)">{v}</text>
            </g>
          ))}
          {SALARIOS.map((v, i) => {
            const shown = t > i * 0.5;
            const isOut = i === SALARIOS.length - 1;
            const h = shown ? H - padB - y(v) : 0;
            return (
              <g key={i}>
                <rect
                  x={padL + 10 + i * bw}
                  y={H - padB - h}
                  width={bw - 14}
                  height={h}
                  rx="4"
                  fill={isOut ? "#F472B6" : "#7C3AED"}
                  opacity={isOut && outlierOut ? 0.18 : 0.9}
                  className="motion-safe:transition-all motion-safe:duration-500"
                />
                <text x={padL + 10 + i * bw + (bw - 14) / 2} y={H - 8} textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.55)">
                  {String(v).replace(".", es ? "," : ".")}
                </text>
              </g>
            );
          })}
          {t >= 10 && (
            <g className="motion-safe:transition-transform motion-safe:duration-700" style={{ transform: `translateY(${y(media)}px)` }}>
              <line x1={padL} x2={W - 10} y1={0} y2={0} stroke="#F472B6" strokeWidth="2" strokeDasharray="6 4" />
              <text x={W - 12} y={-6} textAnchor="end" fontSize="11" fontWeight="600" fill="#F9A8D4">
                {es ? "Media" : "Mean"} {String(media).replace(".", es ? "," : ".")}
              </text>
            </g>
          )}
          {t >= 11 && (
            <g className="motion-safe:transition-transform motion-safe:duration-700" style={{ transform: `translateY(${y(mediana)}px)` }}>
              <line x1={padL} x2={W - 10} y1={0} y2={0} stroke="#C084FC" strokeWidth="2" />
              <text x={padL + 6} y={14} fontSize="11" fontWeight="600" fill="#D8B4FE">
                {es ? "Mediana" : "Median"} {String(mediana).replace(".", es ? "," : ".")}
              </text>
            </g>
          )}
        </svg>

        {/* Subtítulos */}
        {started && !ended && (
          <p className="absolute inset-x-4 bottom-3 mx-auto w-fit max-w-[92%] rounded-md bg-black/70 px-3 py-1.5 text-center text-xs leading-snug text-white sm:text-sm">
            {caption(t, es)}
          </p>
        )}

        {/* Ventana emergente sin pausa */}
        {showInfo && (
          <div className="absolute right-3 top-3 z-10 flex max-w-[15rem] items-start gap-2 rounded-xl border border-[#C084FC]/40 bg-[#14062a]/95 p-3 text-xs text-white/85 shadow-xl">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#C084FC]" aria-hidden />
            <span>{es ? "Por esta razón los reportes de salarios usan la mediana." : "This is why salary reports use the median."}</span>
            <button type="button" onClick={() => setInfoClosed(true)} className={`-m-1 rounded p-1 text-white/50 hover:text-white ${cls.focus}`} aria-label={es ? "Cerrar dato" : "Close note"}>
              <X className="h-3.5 w-3.5" aria-hidden />
            </button>
          </div>
        )}

        {/* Póster */}
        {!started && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-black/55 text-center">
            <button type="button" onClick={play} className={`flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#0A0010] shadow-[0_0_0_10px_rgba(255,255,255,0.08)] transition-transform hover:scale-105 motion-reduce:hover:scale-100 ${cls.focus}`} aria-label={es ? "Reproducir video" : "Play video"}>
              <Play className="ml-1 h-7 w-7" aria-hidden />
            </button>
            <p className="px-6 text-sm font-semibold text-white">{es ? "¿Media o mediana? Cómo resumir salarios con un valor atípico" : "Mean or median? Summarizing salaries with an outlier"}</p>
            <p className="text-xs text-white/60">0:36 · {es ? "2 preguntas que pausan el video" : "2 questions that pause the video"}</p>
          </div>
        )}

        {/* Pregunta que pausa */}
        {activeQ && (
          <div role="group" aria-label={es ? "Pregunta del video" : "Video question"} className="absolute inset-0 z-20 flex items-center justify-center bg-black/70 p-3 sm:p-6">
            <div className="w-full max-w-md rounded-2xl border border-white/15 bg-[#12051f] p-4 shadow-2xl sm:p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C084FC]">{es ? "El video se pausó" : "The video paused"} · {fmt(activeQ.t)}</p>
              <p className="mt-2 text-sm font-semibold leading-snug text-white sm:text-base">{activeQ.q[es ? 0 : 1]}</p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {activeQ.opts.map((o, i) => {
                  const state = choice === null ? "" : i === activeQ.correct ? "border-emerald-400/70 bg-emerald-400/10" : i === choice ? "border-rose-400/70 bg-rose-400/10" : "opacity-50";
                  return (
                    <button key={i} ref={i === 0 ? firstOptRef : undefined} type="button" disabled={choice !== null} onClick={() => answer(i)} className={`${cls.chip} text-center ${state}`}>
                      {o[es ? 0 : 1]}
                    </button>
                  );
                })}
              </div>
              <div className="mt-3">
                <Feedback tone={choice === null ? null : choice === activeQ.correct ? "ok" : "bad"}>
                  {choice === null ? null : choice === activeQ.correct ? activeQ.ok[es ? 0 : 1] : activeQ.bad[es ? 0 : 1]}
                </Feedback>
              </div>
              {choice !== null && (
                <div className="mt-2 flex flex-wrap justify-end gap-2">
                  {choice !== activeQ.correct && (
                    <button type="button" onClick={retry} className={cls.btnGhost}>{es ? "Intentar de nuevo" : "Try again"}</button>
                  )}
                  <button type="button" onClick={resume} className={cls.btnPrimary}>{es ? "Continuar el video" : "Continue the video"}</button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Pantalla final */}
        {ended && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 bg-black/70 p-4 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C084FC]">{es ? "Resumen del video" : "Video summary"}</p>
            <p className="text-2xl font-bold text-white">{correctCount} {es ? "de" : "of"} 2 {es ? "respuestas correctas" : "correct answers"}</p>
            <p className="text-xs text-white/60">{es ? "Tiempo de visualización" : "Watch time"} 0:36</p>
            <button type="button" onClick={play} className={`${cls.btnPrimary} mt-2`}>
              <RotateCcw className="h-4 w-4" aria-hidden /> {es ? "Ver de nuevo" : "Watch again"}
            </button>
          </div>
        )}
      </div>

      {/* Controles */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={playing ? pause : play}
          disabled={!!activeQ}
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-40 ${cls.focus}`}
          aria-label={playing ? (es ? "Pausar" : "Pause") : es ? "Reproducir" : "Play"}
        >
          {playing ? <Pause className="h-4 w-4" aria-hidden /> : <Play className="ml-0.5 h-4 w-4" aria-hidden />}
        </button>
        <div className="relative h-8 flex-1">
          <div className="absolute inset-x-0 top-1/2 h-1.5 -translate-y-1/2 cursor-pointer touch-none rounded-full bg-white/10" onPointerDown={seekFromPointer} aria-hidden>
            <div className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] to-[#F472B6]" style={{ width: `${(t / DUR) * 100}%` }} />
          </div>
          {PREGUNTAS.map((p, i) => (
            <span
              key={p.id}
              className={`pointer-events-none absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[3px] border-2 border-[#0A0010] ${results[p.id] ? "bg-emerald-400" : "bg-[#F472B6]"}`}
              style={{ left: `${(p.t / DUR) * 100}%` }}
              title={`${es ? "Pregunta" : "Question"} ${i + 1}`}
            />
          ))}
          <span className="pointer-events-none absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#0A0010] bg-[#C084FC]" style={{ left: `${(INFO_T / DUR) * 100}%` }} />
        </div>
        <span className="w-[74px] shrink-0 text-right font-mono text-xs tabular-nums text-white/60">
          {fmt(t)} / {fmt(DUR)}
        </span>
        <button type="button" onClick={reset} className={`rounded-full p-2 text-white/50 hover:text-white ${cls.focus}`} aria-label={es ? "Reiniciar demo" : "Reset demo"}>
          <RotateCcw className="h-4 w-4" aria-hidden />
        </button>
      </div>
      <p className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-white/45">
        <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rotate-45 rounded-[2px] bg-[#F472B6]" aria-hidden />{es ? "Pregunta que pausa" : "Pausing question"}</span>
        <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#C084FC]" aria-hidden />{es ? "Dato emergente" : "Pop-up note"}</span>
      </p>
      <EventLog lang={lang} events={events} />
    </div>
  );
}
