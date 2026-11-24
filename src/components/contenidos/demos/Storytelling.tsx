"use client";

import { useEffect, useRef, useState, type KeyboardEvent as RKeyboardEvent } from "react";
import { Play, Pause, RotateCcw, Undo2 } from "lucide-react";
import { cls, tx, useEventLog, EventLog, DemoShell, useReducedMotion, type DemoProps } from "./ui";

/* ───────────── Guion ───────────── */

type Bi = [string, string];
type StoryId = "junta" | "turno";
type SceneId = "e1" | "e2" | "e3a" | "e3b" | "e4b" | "h1" | "h2";

const BASE = "/contenidos/storytelling";
const FILE: Record<SceneId, string> = {
  e1: "junta-e1",
  e2: "junta-e2",
  e3a: "junta-e3a",
  e3b: "junta-e3b",
  e4b: "junta-e4b",
  h1: "turno-h1",
  h2: "turno-h2",
};

const SCENES: Record<SceneId, { title: Bi; sub: Bi; alt: Bi }> = {
  e1: {
    title: ["Contexto", "Context"],
    sub: [
      "Laura es analista de crédito en un banco de Bogotá. Mañana a las 8 le presenta a la junta si el nuevo crédito de libranza funciona.",
      "Laura is a credit analyst at a bank in Bogotá. Tomorrow at 8 she tells the board whether the new payroll loan is working.",
    ],
    alt: ["Laura revisa su portátil de noche en la oficina del banco", "Laura checks her laptop at night in the bank office"],
  },
  e2: {
    title: ["El dato", "The figure"],
    sub: [
      "El reporte dice que el crédito promedio es de 3,7 millones. Se ve mejor de lo esperado.",
      "The report says the average loan is 3.7 million pesos. It looks better than expected.",
    ],
    alt: ["Primer plano de Laura frente a la pantalla", "Close-up of Laura in front of the screen"],
  },
  e3a: {
    title: ["Final A", "Ending A"],
    sub: [
      "Una directiva pregunta por qué casi todos los créditos están por debajo de 2,5 millones. Un solo crédito grande infló el promedio.",
      "A board member asks why almost every loan is under 2.5 million. One large loan pushed the average up.",
    ],
    alt: ["Laura presenta ante cuatro directivos y una directiva frunce el ceño", "Laura presents to four executives and one of them frowns"],
  },
  e3b: {
    title: ["Revisión", "Review"],
    sub: [
      "Laura ordena los créditos y encuentra uno de 12 millones que sube el promedio. La mediana es 2,4 millones.",
      "Laura sorts the loans and finds one of 12 million that pushes the average up. The median is 2.4 million.",
    ],
    alt: ["Laura revisa los datos de noche y anota en una libreta", "Laura reviews the data at night and takes notes"],
  },
  e4b: {
    title: ["Final B", "Ending B"],
    sub: [
      "En la junta presenta la mediana y explica el valor atípico. La junta decide con el dato que describe a sus clientes.",
      "She presents the median and explains the outlier. The board decides with the number that describes its customers.",
    ],
    alt: ["Laura presenta con seguridad y los directivos asienten", "Laura presents with confidence and the executives nod"],
  },
  h1: {
    title: ["Escena 1", "Scene 1"],
    sub: [
      "Camila es médica general en un hospital de Boyacá. Son las 2 de la mañana y llega un paciente de 74 años con dificultad para respirar.",
      "Camila is a general practitioner at a hospital in Boyacá. It is 2 a.m. and a 74-year-old patient arrives short of breath.",
    ],
    alt: ["Camila camina por el pasillo de un hospital de noche", "Camila walks down a hospital corridor at night"],
  },
  h2: {
    title: ["Escena 2", "Scene 2"],
    sub: [
      "Los síntomas apuntan a insuficiencia cardíaca. En el programa, el participante decide qué hace Camila y vive las consecuencias.",
      "The symptoms point to heart failure. In the program, learners decide what Camila does and live with the consequences.",
    ],
    alt: ["Camila ausculta al paciente mientras su hija mira", "Camila examines the patient while his daughter watches"],
  },
};

const STORIES: Record<StoryId, { tab: Bi; start: SceneId[] }> = {
  junta: { tab: ["La junta de las 8 · Banca", "The 8 a.m. board · Banking"], start: ["e1", "e2"] },
  turno: { tab: ["Turno de noche · Salud", "Night shift · Health"], start: ["h1", "h2"] },
};
const ORDER: StoryId[] = ["junta", "turno"];

const OPTIONS: { id: "a" | "b"; letter: string; text: Bi; log: Bi }[] = [
  { id: "a", letter: "A", text: ["Presenta el promedio en la junta", "Presents the average to the board"], log: ["A · Presenta el promedio", "A · Presents the average"] },
  {
    id: "b",
    letter: "B",
    text: ["Revisa cómo se reparten los créditos antes de presentar", "Checks how the loans are distributed before presenting"],
    log: ["B · Revisa el reparto", "B · Checks the spread"],
  },
];

const OUTCOME: Record<"a" | "b", { label: Bi; line: Bi }> = {
  a: {
    label: ["Final A", "Ending A"],
    line: [
      "La junta aprobó ampliar el crédito con un dato que no representaba a la mayoría de los clientes.",
      "The board approved expanding the loan with a number that did not represent most customers.",
    ],
  },
  b: {
    label: ["Final B", "Ending B"],
    line: ["La junta decidió con el dato correcto.", "The board decided with the right number."],
  },
};
const LEARNING: Bi = [
  "Cuando hay valores atípicos, la media se desplaza. La mediana muestra el caso típico.",
  "When there are outliers, the mean shifts. The median shows the typical case.",
];
const END_TURNO: Bi = [
  "En el programa, el participante decide qué hace Camila y vive las consecuencias.",
  "In the program, learners decide what Camila does and live with the consequences.",
];

type Mode = "scene" | "decision" | "outcome";

/* ───────────── Componente ───────────── */

export default function Storytelling({ lang }: DemoProps) {
  const es = lang === "es";
  const i18 = es ? 0 : 1;
  const T = (a: string, b: string) => tx(lang, a, b);
  const reduced = useReducedMotion();
  const { events, log, clear } = useEventLog();

  const [story, setStory] = useState<StoryId>("junta");
  const [seq, setSeq] = useState<SceneId[]>(STORIES.junta.start);
  const [idx, setIdx] = useState(0);
  const [mode, setMode] = useState<Mode>("scene");
  const [branch, setBranch] = useState<"a" | "b" | null>(null);
  const [playing, setPlaying] = useState(false);
  const [cc, setCc] = useState(true);
  const [run, setRun] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const decisionRef = useRef<HTMLDivElement>(null);
  const outcomeRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<StoryId, HTMLButtonElement | null>>({ junta: null, turno: null });
  const reducedRef = useRef(false);
  reducedRef.current = reduced;

  const V = es ? { view: "vio escena", chose: "decidió", done: "completó" } : { view: "viewed", chose: "chose", done: "completed" };

  const sceneId = seq[idx];
  const scene = SCENES[sceneId];
  const total = story === "junta" ? (branch === "b" ? 4 : 3) : 2;

  const logView = (id: SceneId) => log(V.view, `${SCENES[id].title[i18]}`);

  /* Arranque inicial: autoplay salvo con movimiento reducido */
  useEffect(() => {
    const quiet = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!quiet) setPlaying(true);
    log(es ? "vio escena" : "viewed", SCENES.e1.title[es ? 0 : 1]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* El video sigue al estado de reproducción */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (mode === "scene" && playing) {
      const p = v.play();
      if (p) p.catch(() => setPlaying(false));
    } else {
      v.pause();
    }
  }, [playing, mode, sceneId, run]);

  /* El foco pasa a la decisión o al cierre cuando aparecen */
  useEffect(() => {
    if (mode === "decision") decisionRef.current?.focus();
    if (mode === "outcome") outcomeRef.current?.focus();
  }, [mode]);

  const goTo = (nextSeq: SceneId[], nextIdx: number, autoplay: boolean) => {
    setSeq(nextSeq);
    setIdx(nextIdx);
    setMode("scene");
    setRun((r) => r + 1);
    setPlaying(autoplay);
    logView(nextSeq[nextIdx]);
  };

  const onEnded = () => {
    if (mode !== "scene") return;
    const auto = !reducedRef.current;
    if (idx < seq.length - 1) {
      const n = idx + 1;
      setIdx(n);
      setRun((r) => r + 1);
      setPlaying(auto);
      logView(seq[n]);
      return;
    }
    if (story === "turno") {
      setMode("outcome");
      setPlaying(false);
      log(V.done, es ? "Turno de noche" : "Night shift");
      return;
    }
    if (sceneId === "e2") {
      setMode("decision");
      setPlaying(false);
      return;
    }
    if (sceneId === "e3b") {
      const next: SceneId[] = [...seq, "e4b"];
      setSeq(next);
      setIdx(next.length - 1);
      setRun((r) => r + 1);
      setPlaying(auto);
      logView("e4b");
      return;
    }
    setMode("outcome");
    setPlaying(false);
    log(V.done, OUTCOME[sceneId === "e3a" ? "a" : "b"].label[i18]);
  };

  const choose = (id: "a" | "b") => {
    const opt = OPTIONS.find((o) => o.id === id)!;
    log(V.chose, opt.log[i18]);
    setBranch(id);
    goTo(["e1", "e2", id === "a" ? "e3a" : "e3b"], 2, !reduced);
  };

  const redecide = () => {
    setBranch(null);
    setSeq(["e1", "e2"]);
    setIdx(1);
    setMode("decision");
    setPlaying(false);
    setRun((r) => r + 1);
  };

  const restart = (s: StoryId = story) => {
    setBranch(null);
    goTo(STORIES[s].start, 0, !reduced);
  };

  const selectStory = (s: StoryId) => {
    if (s === story) return;
    setStory(s);
    restart(s);
  };

  const reset = () => {
    clear();
    setStory("junta");
    setBranch(null);
    setSeq(STORIES.junta.start);
    setIdx(0);
    setMode("scene");
    setRun((r) => r + 1);
    setPlaying(!reduced);
    log(es ? "vio escena" : "viewed", SCENES.e1.title[i18]);
  };

  const onTabKey = (e: RKeyboardEvent<HTMLButtonElement>) => {
    let n = ORDER.indexOf(story);
    if (e.key === "ArrowRight" || e.key === "ArrowDown") n = (n + 1) % ORDER.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") n = (n + ORDER.length - 1) % ORDER.length;
    else if (e.key === "Home") n = 0;
    else if (e.key === "End") n = ORDER.length - 1;
    else return;
    e.preventDefault();
    const s = ORDER[n];
    selectStory(s);
    tabRefs.current[s]?.focus();
  };

  const onMeta = () => {
    const v = videoRef.current;
    if (v && mode !== "scene" && isFinite(v.duration)) v.currentTime = Math.max(0, v.duration - 0.05);
  };

  const sz = (min: number, cq: number) => `max(${min}px, ${cq}cqw)`;
  const out = mode === "outcome" ? (story === "turno" ? null : OUTCOME[sceneId === "e3a" ? "a" : "b"]) : null;
  const dots: (SceneId | "decision")[] =
    story === "junta" && branch === null ? ["e1", "e2", "decision"] : seq;

  return (
    <DemoShell
      lang={lang}
      onReset={reset}
      instruction={T(
        "Mira la historia, decide qué hace Laura en el momento clave y compara los dos finales. También puedes ver la historia de salud.",
        "Watch the story, decide what Laura does at the key moment and compare the two endings. You can also watch the health story.",
      )}
    >
      <div className="flex flex-col gap-3">
        {/* Pestañas */}
        <div role="tablist" aria-label={T("Historias", "Stories")} className="flex flex-col gap-2 sm:flex-row">
          {ORDER.map((s) => {
            const active = s === story;
            return (
              <button
                key={s}
                ref={(el) => {
                  tabRefs.current[s] = el;
                }}
                role="tab"
                id={`st-tab-${s}`}
                type="button"
                aria-selected={active}
                aria-controls="st-panel"
                tabIndex={active ? 0 : -1}
                onClick={() => selectStory(s)}
                onKeyDown={onTabKey}
                className={`rounded-xl border px-4 py-2 text-left text-sm font-semibold transition-colors ${
                  active ? "border-[#C084FC]/70 bg-[#7C3AED]/25 text-white" : "border-white/10 bg-white/[0.03] text-white/65 hover:border-white/30 hover:text-white"
                } ${cls.focus}`}
              >
                {STORIES[s].tab[i18]}
              </button>
            );
          })}
        </div>

        <div id="st-panel" role="tabpanel" aria-labelledby={`st-tab-${story}`} className="flex min-w-0 flex-col gap-2">
          {/* Escenario 16:9 */}
          <div
            role="region"
            aria-label={T("Historia en video generada con IA", "AI-generated video story")}
            className={`${cls.stage} w-full bg-[#07000f] shadow-[0_20px_60px_rgba(124,58,237,0.18)]`}
            style={{ aspectRatio: "16 / 9", containerType: "inline-size" }}
          >
            <video
              key={`${sceneId}-${run}`}
              ref={videoRef}
              src={`${BASE}/${FILE[sceneId]}.mp4`}
              poster={`${BASE}/${FILE[sceneId]}-poster.webp`}
              muted
              playsInline
              preload="metadata"
              onEnded={onEnded}
              onLoadedMetadata={onMeta}
              aria-label={scene.alt[i18]}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(7,0,15,0.78),transparent_38%),linear-gradient(to_bottom,rgba(7,0,15,0.55),transparent_22%)]" />

            {/* Etiqueta de escena */}
            <span
              className="absolute left-[2.5%] top-[3.5%] z-10 rounded-full bg-black/60 px-[2.2%] py-[0.6%] font-semibold uppercase tracking-[0.12em] text-white/85"
              style={{ fontSize: sz(9, 1.5) }}
            >
              {mode === "decision"
                ? T("Decisión", "Decision")
                : `${T("Escena", "Scene")} ${idx + 1} ${T("de", "of")} ${total}`}
            </span>

            {/* Subtítulos */}
            <div aria-live="polite" aria-atomic="true" className="pointer-events-none absolute inset-x-[3%] bottom-[4%] z-10 flex justify-center">
              {cc && mode === "scene" && playing && (
                <p className="max-w-[92%] rounded-md bg-black/80 px-[2%] py-[0.8%] text-center leading-snug text-white" style={{ fontSize: sz(10, 2) }}>
                  {scene.sub[i18]}
                </p>
              )}
            </div>

            {/* Reproducir escena (pausa, o movimiento reducido) */}
            {mode === "scene" && !playing && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 bg-black/40 px-4 text-center">
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className={`${cls.btnPrimary} px-5 py-2.5`}
                >
                  <Play className="h-4 w-4" aria-hidden />
                  {T("Reproducir escena", "Play scene")}
                </button>
                {cc && (
                  <p className="max-w-md rounded-md bg-black/70 px-3 py-1.5 text-xs leading-snug text-white/90 sm:text-sm">{scene.sub[i18]}</p>
                )}
              </div>
            )}

            {/* Decisión sobre el último cuadro */}
            {mode === "decision" && (
              <div className="absolute inset-0 z-30 flex items-center justify-center overflow-y-auto bg-black/70 p-2 sm:p-5">
                <div
                  ref={decisionRef}
                  tabIndex={-1}
                  role="group"
                  aria-label={T("Decisión de la historia", "Story decision")}
                  className="my-auto w-full max-w-lg rounded-2xl border border-white/15 bg-[#12051f] p-3 shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC] sm:p-5"
                >
                  <p className="text-sm font-bold leading-snug text-white sm:text-xl">{T("¿Qué hace Laura?", "What does Laura do?")}</p>
                  <div className="mt-2 flex flex-col gap-2 sm:mt-3">
                    {OPTIONS.map((o) => (
                      <button key={o.id} type="button" onClick={() => choose(o.id)} className={`${cls.chip} flex items-start gap-2.5 text-xs sm:text-sm`}>
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7C3AED] text-[11px] font-bold text-white" aria-hidden>
                          {o.letter}
                        </span>
                        <span>
                          <span className="sr-only">{o.letter}. </span>
                          {o.text[i18]}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Fin de la historia 2 sobre el último cuadro */}
            {mode === "outcome" && story === "turno" && (
              <div className="absolute inset-0 z-30 flex items-center justify-center overflow-y-auto bg-black/75 p-3 sm:p-6">
                <div
                  ref={outcomeRef}
                  tabIndex={-1}
                  role="group"
                  aria-label={T("Cierre de la historia", "Story ending")}
                  className="my-auto w-full max-w-lg rounded-2xl border border-white/15 bg-[#12051f] p-3 text-center shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC] sm:p-5"
                >
                  <p className="text-xs font-semibold leading-snug text-white sm:text-lg">{END_TURNO[i18]}</p>
                  <button type="button" onClick={() => restart("turno")} className={`${cls.btnPrimary} mt-3`}>
                    <RotateCcw className="h-4 w-4" aria-hidden />
                    {T("Ver de nuevo", "Watch again")}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Tarjeta de resultado de la historia 1 */}
          {out && (
            <div
              ref={outcomeRef}
              tabIndex={-1}
              role="group"
              aria-label={T("Resultado de la decisión", "Decision outcome")}
              className="rounded-2xl border border-[#C084FC]/35 bg-[#7C3AED]/10 p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC] sm:p-5"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C084FC]">{out.label[i18]}</p>
              <p className="mt-1.5 text-base font-bold leading-snug text-white sm:text-lg">{out.line[i18]}</p>
              <p className="mt-3 border-l-4 border-[#F472B6] bg-white/[0.05] px-3 py-2 text-sm leading-relaxed text-white/90">
                <span className="font-semibold text-[#F9A8D4]">{T("Aprendizaje", "Learning point")}. </span>
                {LEARNING[i18]}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <button type="button" onClick={redecide} className={cls.btnPrimary}>
                  <Undo2 className="h-4 w-4" aria-hidden />
                  {T("Volver a decidir", "Decide again")}
                </button>
                <button type="button" onClick={() => restart("junta")} className={cls.btnGhost}>
                  <RotateCcw className="h-4 w-4" aria-hidden />
                  {T("Ver desde el inicio", "Watch from the start")}
                </button>
              </div>
            </div>
          )}

          {/* Controles */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              disabled={mode !== "scene"}
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-40 ${cls.focus}`}
              aria-label={playing ? T("Pausar", "Pause") : T("Reproducir", "Play")}
            >
              {playing ? <Pause className="h-4 w-4" aria-hidden /> : <Play className="ml-0.5 h-4 w-4" aria-hidden />}
            </button>
            <ol className="flex min-w-0 flex-1 items-center gap-1.5" aria-label={T("Escenas del recorrido", "Scenes on this path")}>
              {dots.map((d, i) => {
                const isDecision = d === "decision";
                const current = mode === "decision" ? isDecision : !isDecision && i === idx && mode === "scene";
                const seen = mode === "outcome" || (mode === "decision" ? !isDecision : i < idx);
                const label = isDecision ? T("Decisión", "Decision") : SCENES[d].title[i18];
                return (
                  <li
                    key={`${d}-${i}`}
                    aria-current={current ? "step" : undefined}
                    aria-label={label}
                    title={label}
                    className={`h-2 min-w-0 flex-1 rounded-full transition-colors ${
                      current ? "bg-gradient-to-r from-[#7C3AED] to-[#F472B6]" : seen ? "bg-[#C084FC]/70" : "bg-white/15"
                    } ${isDecision ? "border border-dashed border-[#F472B6]/70" : ""}`}
                  />
                );
              })}
            </ol>
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

          <p className="text-xs leading-relaxed text-white/50">
            {T(
              "Historias generadas con IA para este catálogo. En un programa real se escriben con tu experto y tus casos.",
              "Stories generated with AI for this catalog. In a real program they are written with your expert and your cases.",
            )}
          </p>
        </div>

        <EventLog lang={lang} events={events} />
      </div>
    </DemoShell>
  );
}
