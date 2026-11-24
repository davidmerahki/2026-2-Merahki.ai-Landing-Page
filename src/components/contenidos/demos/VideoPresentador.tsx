"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent as RKeyboardEvent, type PointerEvent as RPointerEvent } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";
import { cls, tx, useEventLog, EventLog, Feedback, DemoShell, useReducedMotion, type DemoProps } from "./ui";

/* ───────────── Datos de la lección ───────────── */

const DUR = 42;
const SALARIOS = [1.8, 2.0, 2.2, 2.4, 2.6, 2.9, 12.0];
const SIN_ATIPICO = SALARIOS.slice(0, 6);
const sum = (a: number[]) => a.reduce((s, v) => s + v, 0);
const median = (a: number[]) => {
  const s = [...a].sort((x, y) => x - y);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};
// Con los siete: 25,9 / 7 = 3,7 y mediana 2,4. Sin el de 12: 13,9 / 6 = 2,3 y mediana (2,2 + 2,4) / 2 = 2,3.
const MEDIA_7 = sum(SALARIOS) / SALARIOS.length;
const MEDIANA_7 = median(SALARIOS);
const MEDIA_6 = sum(SIN_ATIPICO) / SIN_ATIPICO.length;
const MEDIANA_6 = median(SIN_ATIPICO);

const fmtN = (v: number, es: boolean) => v.toFixed(1).replace(".", es ? "," : ".");
const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

type Bi = [string, string];

const CAPS: { start: number; end: number; title: Bi }[] = [
  { start: 0, end: 10, title: ["Medidas de tendencia central", "Measures of central tendency"] },
  { start: 10, end: 22, title: ["La media y el valor atípico", "The mean and the outlier"] },
  { start: 22, end: 34, title: ["La mediana resiste los extremos", "The median resists extremes"] },
  { start: 34, end: 42, title: ["Resumen", "Summary"] },
];
const chapterOf = (t: number) => {
  let c = 0;
  CAPS.forEach((x, i) => {
    if (t >= x.start) c = i;
  });
  return c;
};

const CUES: { t: number; s: Bi }[] = [
  { t: 0, s: ["Hola, soy tu docente. Hoy aprenderás a resumir datos con un solo número.", "Hi, I'm your teacher. Today you will learn to summarize data with a single number."] },
  { t: 4, s: ["Para eso usamos dos medidas de tendencia central: la media y la mediana.", "For that we use two measures of central tendency: the mean and the median."] },
  { t: 8, s: ["Veamos qué significa cada una y cuándo conviene usarla.", "Let's see what each one means and when to use it."] },
  { t: 10, s: ["Imagina un equipo de siete personas. Estos son sus salarios mensuales, en millones de pesos.", "Picture a team of seven people. These are their monthly salaries, in millions of pesos."] },
  { t: 14, s: ["Seis salarios están entre 1,8 y 2,9 millones. Uno es de 12 millones.", "Six salaries are between 1.8 and 2.9 million. One is 12 million."] },
  { t: 18, s: ["La media suma todo y divide entre 7, y da 3,7 millones. La mediana, el valor del medio, da 2,4.", "The mean adds everything and divides by 7, giving 3.7 million. The median, the middle value, is 2.4."] },
  { t: 22, s: ["Ahora quitemos el salario de 12 millones y miremos qué pasa.", "Now let's remove the 12 million salary and see what happens."] },
  { t: 26, s: ["Quedan seis salarios. Antes de seguir, piensa qué medida va a cambiar más.", "Six salaries are left. Before we go on, think about which measure will change more."] },
  { t: 30, s: ["La media bajó de 3,7 a 2,3 millones. La mediana pasó de 2,4 a 2,3 y casi no se movió.", "The mean dropped from 3.7 to 2.3 million. The median went from 2.4 to 2.3 and barely moved."] },
  { t: 34, s: ["En resumen, con valores extremos la mediana describe mejor el caso típico.", "In short, with extreme values the median describes the typical case better."] },
  { t: 38, s: ["La media funciona cuando los datos son parejos. Nos vemos en la próxima lección.", "The mean works when the data are even. See you in the next lesson."] },
];
const cueAt = (t: number) => {
  let c = CUES[0];
  CUES.forEach((x) => {
    if (t >= x.t) c = x;
  });
  return c;
};

type Pregunta = { id: string; n: number; t: number; q: Bi; opts: Bi[]; correct: number; ok: Bi; bad: Bi };

const PREGUNTAS: Pregunta[] = [
  {
    id: "p1",
    n: 1,
    t: 18,
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
    n: 2,
    t: 30,
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

const MEDIA_IN = 18.5; // la línea de la media aparece justo después de la pregunta 1
const MEDIANA_IN = 20;
const OUT_AT = 24; // el salario de 12 millones se aparta
const AFTER_Q2 = 30.5; // las líneas se recalculan después de la pregunta 2

/* ───────────── Gráfico de salarios ───────────── */

function Chart({ t, es }: { t: number; es: boolean }) {
  const W = 320, H = 140, padL = 24, padB = 18, top = 8, right = 84, max = 13;
  const plotH = H - padB - top;
  const y = (v: number) => top + plotH * (1 - v / max);
  const bw = (W - padL - right) / SALARIOS.length;
  const removed = t >= OUT_AT;
  const after = t >= AFTER_Q2;
  const media = after ? MEDIA_6 : MEDIA_7;
  const mediana = after ? MEDIANA_6 : MEDIANA_7;
  const x2 = W - right + 4;
  const halo = { stroke: "#07000f", strokeWidth: 3, paintOrder: "stroke" } as const;
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="h-full w-full"
      role="img"
      aria-label={tx(es ? "es" : "en", "Gráfico de barras con siete salarios mensuales, en millones de pesos", "Bar chart with seven monthly salaries, in millions of pesos")}
    >
      {[0, 4, 8, 12].map((v) => (
        <g key={v}>
          <line x1={padL} x2={x2} y1={y(v)} y2={y(v)} stroke="rgba(255,255,255,0.09)" />
          <text x={padL - 5} y={y(v) + 3} textAnchor="end" fontSize="9" fill="rgba(255,255,255,0.5)">{v}</text>
        </g>
      ))}
      {SALARIOS.map((v, i) => {
        const shown = t >= 10.8 + i * 0.35;
        const isOut = i === SALARIOS.length - 1;
        const x = padL + 4 + i * bw;
        const cx = x + (bw - 8) / 2;
        return (
          <g key={i}>
            <rect
              x={x}
              y={y(v)}
              width={bw - 8}
              height={H - padB - y(v)}
              rx="3"
              fill={isOut ? "#F472B6" : "#7C3AED"}
              opacity={isOut && removed ? 0.16 : 0.92}
              className="motion-safe:transition-[transform,opacity] motion-safe:duration-500"
              style={{ transformBox: "fill-box", transformOrigin: "bottom", transform: `scaleY(${shown ? 1 : 0})` }}
            />
            <text x={cx} y={H - 5} textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.7)">{fmtN(v, es).replace(/[,.]0$/, "")}</text>
            {isOut && removed && (
              <text x={cx} y={y(6)} textAnchor="middle" fontSize="8" fontWeight="600" fill="#F9A8D4">{es ? "excluido" : "excluded"}</text>
            )}
          </g>
        );
      })}
      <g
        className="motion-safe:transition-[transform,opacity] motion-safe:duration-700"
        style={{ transform: `translateY(${y(media)}px)`, opacity: t >= MEDIA_IN ? 1 : 0 }}
      >
        <line x1={padL} x2={x2} y1={0} y2={0} stroke="#F472B6" strokeWidth="1.6" strokeDasharray="5 3" />
        <text x={x2 + 4} y={-3} fontSize="10" fontWeight="700" fill="#F9A8D4">{es ? "Media" : "Mean"} {fmtN(media, es)}</text>
      </g>
      <g
        className="motion-safe:transition-[transform,opacity] motion-safe:duration-700"
        style={{ transform: `translateY(${y(mediana)}px)`, opacity: t >= MEDIANA_IN ? 1 : 0 }}
      >
        <line x1={padL} x2={x2} y1={0} y2={0} stroke="#C084FC" strokeWidth="1.6" />
        <text x={x2 + 4} y={11} fontSize="10" fontWeight="700" fill="#D8B4FE" {...halo}>{es ? "Mediana" : "Median"} {fmtN(mediana, es)}</text>
      </g>
    </svg>
  );
}

/* ───────────── Componente ───────────── */

export default function VideoPresentador({ lang }: DemoProps) {
  const es = lang === "es";
  const T = (a: string, b: string) => tx(lang, a, b);
  const reduced = useReducedMotion();
  const { events, log, clear } = useEventLog();

  const [t, setT] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [cc, setCc] = useState(true);
  const [openQ, setOpenQ] = useState<Pregunta | null>(null);
  const [choice, setChoice] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});

  const tRef = useRef(0);
  const answeredRef = useRef<Record<string, boolean>>({});
  const openRef = useRef<Pregunta | null>(null);
  const dragRef = useRef<{ ch: number } | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const playBtnRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const V = es
    ? { play: "reprodujo", pause: "pausó", answer: "respondió", chapter: "cambió de capítulo", done: "completó" }
    : { play: "played", pause: "paused", answer: "answered", chapter: "changed chapter", done: "completed" };

  const logChapter = useCallback(
    (i: number) => log(es ? "cambió de capítulo" : "changed chapter", `${i + 1}. ${CAPS[i].title[es ? 0 : 1]}`),
    [log, es],
  );

  const openQuestion = useCallback(
    (q: Pregunta) => {
      openRef.current = q;
      setOpenQ(q);
      setChoice(null);
      setPlaying(false);
      log(es ? "pausó" : "paused", `${es ? "Pregunta" : "Question"} ${q.n} · ${fmt(q.t)}`);
    },
    [log, es],
  );

  const finish = useCallback(() => {
    tRef.current = DUR;
    setT(DUR);
    setPlaying(false);
    log(es ? "completó" : "completed", `${es ? "Lección" : "Lesson"} · ${fmt(DUR)}`);
  }, [log, es]);

  /* Reloj propio de la lección */
  useEffect(() => {
    if (!playing) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const prev = tRef.current;
      const next = Math.min(DUR, prev + (now - last) / 1000);
      last = now;
      const q = PREGUNTAS.find((p) => !(p.id in answeredRef.current) && prev < p.t && next >= p.t);
      if (q) {
        tRef.current = q.t;
        setT(q.t);
        openQuestion(q);
        return;
      }
      if (chapterOf(prev) !== chapterOf(next)) logChapter(chapterOf(next));
      tRef.current = next;
      setT(next);
      if (next >= DUR) {
        finish();
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing, openQuestion, finish, logChapter]);

  /* El video de la docente sigue a la lección */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (playing && !openQ && !reduced) v.play().catch(() => {});
    else v.pause();
  }, [playing, openQ, reduced]);

  /* Foco al panel de la pregunta cuando aparece */
  useEffect(() => {
    if (openQ) panelRef.current?.focus();
  }, [openQ]);

  const play = () => {
    if (openRef.current) return;
    if (tRef.current >= DUR) {
      tRef.current = 0;
      setT(0);
      answeredRef.current = {};
      setAnswers({});
    }
    setStarted(true);
    setPlaying(true);
    log(V.play, `${es ? "Lección" : "Lesson"} · ${fmt(tRef.current)}`);
  };
  const pause = () => {
    setPlaying(false);
    log(V.pause, `${es ? "Lección" : "Lesson"} · ${fmt(tRef.current)}`);
  };

  const seek = (target: number, how: "log" | "quiet") => {
    if (openRef.current) return;
    const prev = tRef.current;
    const nt = Math.max(0, Math.min(DUR, target));
    setStarted(true);
    const blocker = PREGUNTAS.find((p) => !(p.id in answeredRef.current) && p.t <= nt);
    if (blocker) {
      tRef.current = blocker.t;
      setT(blocker.t);
      openQuestion(blocker);
      return;
    }
    tRef.current = nt;
    setT(nt);
    if (nt >= DUR) {
      finish();
      return;
    }
    if (how === "log" && chapterOf(prev) !== chapterOf(nt)) logChapter(chapterOf(nt));
  };

  const answer = (i: number) => {
    const q = openRef.current;
    if (!q || choice !== null) return;
    const ok = i === q.correct;
    setChoice(i);
    answeredRef.current = { ...answeredRef.current, [q.id]: ok };
    setAnswers(answeredRef.current);
    log(V.answer, `P${q.n} · ${ok ? (es ? "correcta" : "correct") : es ? "incorrecta" : "incorrect"}`);
  };

  const resume = () => {
    openRef.current = null;
    setOpenQ(null);
    setChoice(null);
    setPlaying(true);
    log(V.play, `${es ? "Lección" : "Lesson"} · ${fmt(tRef.current)}`);
    requestAnimationFrame(() => playBtnRef.current?.focus());
  };

  const reset = () => {
    tRef.current = 0;
    answeredRef.current = {};
    openRef.current = null;
    setT(0);
    setPlaying(false);
    setStarted(false);
    setOpenQ(null);
    setChoice(null);
    setAnswers({});
    clear();
    if (videoRef.current) videoRef.current.currentTime = 0;
  };

  /* Barra de progreso: puntero y teclado */
  const targetFromX = (x: number) => {
    const r = sliderRef.current?.getBoundingClientRect();
    if (!r || r.width === 0) return tRef.current;
    return Math.max(0, Math.min(1, (x - r.left) / r.width)) * DUR;
  };
  const onSliderDown = (e: RPointerEvent<HTMLDivElement>) => {
    if (openRef.current) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    dragRef.current = { ch: chapterOf(tRef.current) };
    seek(targetFromX(e.clientX), "quiet");
  };
  const onSliderMove = (e: RPointerEvent<HTMLDivElement>) => {
    if (dragRef.current) seek(targetFromX(e.clientX), "quiet");
  };
  const onSliderUp = () => {
    const d = dragRef.current;
    dragRef.current = null;
    if (d && chapterOf(tRef.current) !== d.ch) logChapter(chapterOf(tRef.current));
  };
  const onSliderKey = (e: RKeyboardEvent<HTMLDivElement>) => {
    const cur = tRef.current;
    let to: number | null = null;
    if (e.key === "ArrowRight" || e.key === "ArrowUp") to = cur + 5;
    else if (e.key === "ArrowLeft" || e.key === "ArrowDown") to = cur - 5;
    else if (e.key === "Home") to = 0;
    else if (e.key === "End") to = DUR;
    if (to === null) return;
    e.preventDefault();
    seek(to, "log");
  };

  const ended = t >= DUR;
  const ci = chapterOf(t);
  const cue = cueAt(t);
  const correctCount = PREGUNTAS.filter((p) => answers[p.id]).length;
  const pct = (t / DUR) * 100;
  const sz = (min: number, cq: number) => `max(${min}px, ${cq}cqw)`;

  /* ───── Lámina ───── */
  const bullets: { k: Bi; v: Bi; at: number }[] = [
    { k: ["Media", "Mean"], v: ["Suma todos los valores y divide entre cuántos son.", "Adds all the values and divides by how many there are."], at: 0.8 },
    { k: ["Mediana", "Median"], v: ["Es el valor del medio cuando ordenas los datos.", "It is the middle value once you sort the data."], at: 4.5 },
    { k: ["Cuándo usar cada una", "When to use each"], v: ["La media con datos parejos. La mediana cuando hay valores extremos.", "The mean for even data. The median when there are extreme values."], at: 8.2 },
  ];

  const slide = (
    <div key={ci} className="vp-in absolute inset-0 flex flex-col px-[4%] pb-[19%] pt-[3.5%]">
      <div className="flex items-center gap-2 font-semibold uppercase tracking-[0.14em] text-[#C084FC]" style={{ fontSize: sz(7, 1.35) }}>
        <span>{T("Analítica de Datos para la Toma de Decisiones", "Data Analytics for Decision Making")}</span>
        <span className="text-white/35">{ci + 1}/4</span>
      </div>
      <h3 className="mt-[1%] font-bold leading-tight text-white" style={{ fontSize: sz(14, 3.7) }}>
        {CAPS[ci].title[es ? 0 : 1]}
      </h3>
      {(ci === 1 || ci === 2) && (
        <p className="mt-[0.6%] text-white/65" style={{ fontSize: sz(9, 1.8) }}>
          {ci === 1
            ? T("Salarios mensuales de un equipo de 7 personas, en millones de pesos.", "Monthly salaries of a 7-person team, in millions of pesos.")
            : T("Los mismos salarios, sin el de 12 millones.", "The same salaries, without the 12 million one.")}
        </p>
      )}

      {ci === 0 && (
        <ul className="mt-[2.5%] flex w-[72%] flex-col gap-[2.2%]">
          {bullets.map((b) => (
            <li
              key={b.k[0]}
              className="rounded-lg border border-white/10 bg-white/[0.05] px-[2.2%] py-[1.2%] motion-safe:transition-[opacity,transform] motion-safe:duration-500"
              style={{ opacity: t >= b.at ? 1 : 0, transform: t >= b.at ? "none" : "translateY(6px)", fontSize: sz(9, 2.05) }}
            >
              <span className="font-bold text-[#D8B4FE]">{b.k[es ? 0 : 1]}. </span>
              <span className="text-white/85">{b.v[es ? 0 : 1]}</span>
            </li>
          ))}
        </ul>
      )}

      {(ci === 1 || ci === 2) && (
        <>
          <div className="mt-[1.5%] min-h-0 w-[72%] flex-1">
            <Chart t={t} es={es} />
          </div>
          <div
            className="absolute right-[3%] top-[27%] hidden w-[22%] rounded-xl border border-[#C084FC]/30 bg-[#7C3AED]/15 p-[1.4%] leading-snug text-white/85 motion-safe:transition-opacity motion-safe:duration-500 sm:block"
            style={{ fontSize: sz(9, 1.6), opacity: (ci === 1 && t >= 20.5) || (ci === 2 && t >= AFTER_Q2) ? 1 : 0 }}
            aria-hidden
          >
            {ci === 1
              ? T("La media (3,7) queda por encima de seis de los siete salarios.", "The mean (3.7) lands above six of the seven salaries.")
              : T("La media baja de 3,7 a 2,3. La mediana pasa de 2,4 a 2,3.", "The mean drops from 3.7 to 2.3. The median goes from 2.4 to 2.3.")}
          </div>
        </>
      )}

      {ci === 3 && (
        <div className="mt-[3%] flex w-[72%] flex-col gap-[3%]">
          {[
            T("Con un valor extremo, la media sube a 3,7 millones y la mediana se queda en 2,4.", "With an extreme value, the mean rises to 3.7 million and the median stays at 2.4."),
            T("Sin él, ambas quedan en 2,3. Para el salario típico, usa la mediana.", "Without it, both land at 2.3. For the typical salary, use the median."),
          ].map((line, i) => (
            <p
              key={i}
              className="rounded-lg border-l-4 border-[#F472B6] bg-white/[0.05] px-[2.4%] py-[1.6%] font-semibold leading-snug text-white motion-safe:transition-opacity motion-safe:duration-500"
              style={{ fontSize: sz(10, 2.3), opacity: t >= 34.6 + i * 2.2 ? 1 : 0 }}
            >
              {line}
            </p>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <DemoShell
      lang={lang}
      onReset={reset}
      instruction={T(
        "Mira la lección, activa o quita los subtítulos, salta entre capítulos y responde las dos preguntas que detienen el video.",
        "Watch the lesson, toggle the subtitles, jump between chapters and answer the two questions that pause the video.",
      )}
    >
      <style>{`@keyframes vp-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}@media (prefers-reduced-motion:no-preference){.vp-in{animation:vp-in .45s ease both}}`}</style>
      <div className="flex flex-col gap-3 lg:grid lg:grid-cols-[minmax(0,1fr)_14.5rem] lg:items-start lg:gap-4">
        <div className="flex min-w-0 flex-col gap-2">
          {/* Escenario 16:9 */}
          <div
            role="region"
            aria-label={T("Lección en video con docente avatar de IA", "Video lesson with an AI avatar teacher")}
            className={`${cls.stage} w-full bg-[#07000f] shadow-[0_20px_60px_rgba(124,58,237,0.18)]`}
            style={{ aspectRatio: "16 / 9", containerType: "inline-size" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,rgba(124,58,237,0.30),transparent_58%),radial-gradient(ellipse_at_90%_95%,rgba(219,39,119,0.20),transparent_55%)]" />
            {slide}

            {/* Subtítulos */}
            <div aria-live="polite" aria-atomic="true" className="pointer-events-none absolute bottom-[3%] left-[3%] right-[31%] z-10 sm:right-[27%]">
              {cc && started && !ended && !openQ && (
                <p className="w-fit rounded-md bg-black/80 px-[2%] py-[0.8%] leading-snug text-white" style={{ fontSize: sz(9, 1.85) }}>
                  {cue.s[es ? 0 : 1]}
                </p>
              )}
            </div>

            {/* Docente avatar de IA */}
            <div className="absolute bottom-[3%] right-[2.5%] z-10 flex w-[28%] flex-col items-center gap-[4%] sm:w-[22%]">
              <div
                className={`aspect-square w-full overflow-hidden rounded-full bg-[#14062a] ring-2 ring-offset-2 ring-offset-[#07000f] transition-shadow ${
                  playing && !openQ ? "ring-[#C084FC] shadow-[0_0_28px_rgba(192,132,252,0.45)]" : "ring-[#C084FC]/45 shadow-none"
                }`}
              >
                <video
                  ref={videoRef}
                  src="/contenidos/presentador/instructora.mp4"
                  poster="/contenidos/presentador/instructora-poster.webp"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="whitespace-nowrap rounded-full bg-black/60 px-[6%] py-[1%] font-medium text-white/80" style={{ fontSize: sz(8, 1.3) }}>
                {T("Docente · avatar de IA", "Teacher · AI avatar")}
              </span>
            </div>

            {/* Antes de reproducir */}
            {!started && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 bg-gradient-to-b from-black/35 to-black/60 px-4 text-center">
                <button
                  type="button"
                  onClick={play}
                  className={`flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#0A0010] shadow-[0_0_0_10px_rgba(255,255,255,0.1)] transition-transform hover:scale-105 motion-reduce:hover:scale-100 sm:h-16 sm:w-16 ${cls.focus}`}
                  aria-label={T("Reproducir lección", "Play lesson")}
                >
                  <Play className="ml-1 h-6 w-6 sm:h-7 sm:w-7" aria-hidden />
                </button>
                <p className="text-sm font-semibold text-white sm:text-base">{T("Analítica de Datos para la Toma de Decisiones", "Data Analytics for Decision Making")}</p>
                <p className="text-xs text-white/65">
                  {fmt(DUR)} · {T("4 capítulos · 2 preguntas que detienen la lección", "4 chapters · 2 questions that pause the lesson")}
                </p>
              </div>
            )}

            {/* Pregunta que detiene la lección */}
            {openQ && (
              <div className="absolute inset-0 z-30 flex items-center justify-center overflow-y-auto bg-black/70 p-2 sm:p-5">
                <div
                  ref={panelRef}
                  tabIndex={-1}
                  role="group"
                  aria-label={T("Pregunta de la lección", "Lesson question")}
                  className="my-auto w-full max-w-md rounded-2xl border border-white/15 bg-[#12051f] p-3 shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC] sm:p-5"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#C084FC] sm:text-[11px]">
                    {T("La lección se detuvo", "The lesson paused")} · {T("Pregunta", "Question")} {openQ.n} {T("de", "of")} 2
                  </p>
                  <p className="mt-1.5 text-xs font-semibold leading-snug text-white sm:mt-2 sm:text-base">{openQ.q[es ? 0 : 1]}</p>
                  <div className="mt-2 grid grid-cols-2 gap-2 sm:mt-3">
                    {openQ.opts.map((o, i) => {
                      const state =
                        choice === null
                          ? ""
                          : i === openQ.correct
                            ? "border-emerald-400/70 bg-emerald-400/10"
                            : i === choice
                              ? "border-rose-400/70 bg-rose-400/10"
                              : "opacity-50";
                      return (
                        <button key={i} type="button" disabled={choice !== null} onClick={() => answer(i)} className={`${cls.chip} text-center ${state}`}>
                          {o[es ? 0 : 1]}
                        </button>
                      );
                    })}
                  </div>
                  <div className="mt-2 text-xs sm:mt-3">
                    <Feedback tone={choice === null ? null : choice === openQ.correct ? "ok" : "bad"}>
                      {choice === null ? null : choice === openQ.correct ? openQ.ok[es ? 0 : 1] : openQ.bad[es ? 0 : 1]}
                    </Feedback>
                  </div>
                  {choice !== null && (
                    <div className="mt-2 flex justify-end">
                      <button type="button" onClick={resume} className={`${cls.btnPrimary} px-4 py-1.5`}>
                        {T("Continuar", "Continue")}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Final */}
            {ended && !openQ && (
              <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-1.5 bg-black/75 p-4 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C084FC]">{T("Lección completada", "Lesson completed")}</p>
                <p className="text-xl font-bold text-white sm:text-2xl">
                  {correctCount} {T("de", "of")} 2 {T("respuestas correctas", "correct answers")}
                </p>
                <p className="text-xs text-white/60">{T("Tiempo de visualización", "Watch time")} {fmt(DUR)}</p>
                <button type="button" onClick={play} className={`${cls.btnPrimary} mt-1`}>
                  <RotateCcw className="h-4 w-4" aria-hidden /> {T("Ver de nuevo", "Watch again")}
                </button>
              </div>
            )}
          </div>

          <p className="text-xs leading-relaxed text-white/50">
            {T(
              "Demo sin audio. En el curso, el avatar habla con la cara y la voz del docente.",
              "Silent demo. In the course, the avatar speaks with the teacher's own face and voice.",
            )}
          </p>

          {/* Controles */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              ref={playBtnRef}
              type="button"
              onClick={playing ? pause : play}
              disabled={!!openQ}
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-40 ${cls.focus}`}
              aria-label={playing ? T("Pausar", "Pause") : T("Reproducir", "Play")}
            >
              {playing ? <Pause className="h-4 w-4" aria-hidden /> : <Play className="ml-0.5 h-4 w-4" aria-hidden />}
            </button>
            <span className="w-[72px] shrink-0 font-mono text-xs tabular-nums text-white/65">
              {fmt(t)} / {fmt(DUR)}
            </span>
            <div
              ref={sliderRef}
              role="slider"
              tabIndex={0}
              aria-label={T("Progreso de la lección", "Lesson progress")}
              aria-valuemin={0}
              aria-valuemax={DUR}
              aria-valuenow={Math.floor(t)}
              aria-valuetext={`${fmt(t)} ${T("de", "of")} ${fmt(DUR)}, ${T("capítulo", "chapter")} ${ci + 1}: ${CAPS[ci].title[es ? 0 : 1]}`}
              aria-disabled={!!openQ}
              onPointerDown={onSliderDown}
              onPointerMove={onSliderMove}
              onPointerUp={onSliderUp}
              onPointerCancel={onSliderUp}
              onKeyDown={onSliderKey}
              className={`group relative h-9 min-w-0 flex-1 cursor-pointer touch-none rounded-md ${cls.focus}`}
            >
              <div className="absolute inset-x-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-white/10">
                <div className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] to-[#F472B6]" style={{ width: `${pct}%` }} />
              </div>
              {CAPS.slice(1).map((c) => (
                <span
                  key={c.start}
                  aria-hidden
                  className="pointer-events-none absolute top-1/2 h-3.5 w-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/45"
                  style={{ left: `${(c.start / DUR) * 100}%` }}
                />
              ))}
              {PREGUNTAS.map((p) => (
                <span
                  key={p.id}
                  aria-hidden
                  className={`pointer-events-none absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[3px] border-2 border-[#0A0010] ${
                    p.id in answers ? (answers[p.id] ? "bg-emerald-400" : "bg-amber-400") : "bg-[#F472B6]"
                  }`}
                  style={{ left: `${(p.t / DUR) * 100}%` }}
                />
              ))}
              <span
                aria-hidden
                className="pointer-events-none absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#0A0010] bg-white shadow"
                style={{ left: `${pct}%` }}
              />
            </div>
            <button
              type="button"
              onClick={() => setCc((v) => !v)}
              aria-pressed={cc}
              aria-label={T("Subtítulos", "Subtitles")}
              title={T("Subtítulos", "Subtitles")}
              className={`h-8 shrink-0 rounded-md border px-2 text-[11px] font-bold tracking-wide transition-colors ${
                cc ? "border-[#C084FC] bg-[#7C3AED]/30 text-white" : "border-white/20 text-white/55 hover:text-white"
              } ${cls.focus}`}
            >
              CC
            </button>
          </div>
          <p className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-white/45">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rotate-45 rounded-[2px] bg-[#F472B6]" aria-hidden />
              {T("Pregunta que detiene la lección", "Question that pauses the lesson")}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-3 w-0.5 rounded-full bg-white/45" aria-hidden />
              {T("Inicio de capítulo", "Chapter start")}
            </span>
          </p>
        </div>

        {/* Capítulos */}
        <nav aria-label={T("Capítulos", "Chapters")} className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.03] p-2 lg:p-3">
          <p className="mb-2 hidden px-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45 lg:block">{T("Capítulos", "Chapters")}</p>
          <ol className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
            {CAPS.map((c, i) => {
              const qs = PREGUNTAS.filter((p) => p.t >= c.start && p.t < c.end);
              const active = i === ci && started;
              return (
                <li key={c.start} className="min-w-[10.5rem] shrink-0 lg:min-w-0">
                  <button
                    type="button"
                    disabled={!!openQ}
                    aria-current={active ? "true" : undefined}
                    onClick={() => seek(c.start, "log")}
                    className={`w-full rounded-xl border px-3 py-2 text-left transition-colors disabled:opacity-50 ${
                      active ? "border-[#C084FC]/70 bg-[#7C3AED]/20" : "border-white/10 bg-white/[0.03] hover:border-white/30"
                    } ${cls.focus}`}
                  >
                    <span className="flex items-center justify-between gap-2 font-mono text-[10px] text-white/45">
                      <span>
                        {i + 1} · {fmt(c.start)}
                      </span>
                      {qs.map((q) => (
                        <span key={q.id} className={q.id in answers ? (answers[q.id] ? "text-emerald-300" : "text-amber-300") : "text-[#F9A8D4]"}>
                          ◆ {T("Pregunta", "Question")} {q.n}
                        </span>
                      ))}
                    </span>
                    <span className="mt-0.5 block text-xs font-semibold leading-snug text-white sm:text-[13px]">{c.title[es ? 0 : 1]}</span>
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>

      <EventLog lang={lang} events={events} />
    </DemoShell>
  );
}
