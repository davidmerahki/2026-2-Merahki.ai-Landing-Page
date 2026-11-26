"use client";

/**
 * Storytelling para el Aprendizaje (24-nov-2026; entornos laborales 26-nov-2026).
 * Historias en video generadas con IA: banca, droguería, ventas y obra con decisión y dos finales, y salud como avance.
 * Guiones: «Sitio merahki.ai - Storytelling para el Aprendizaje, guion (2026-11-24)» y
 * «Sitio merahki.ai - Storytelling en entornos laborales, guion (2026-11-26)».
 */
import { useEffect, useRef, useState, type KeyboardEvent as RKeyboardEvent } from "react";
import { Play, Pause, RotateCcw, Undo2 } from "lucide-react";
import { cls, tx, useEventLog, EventLog, DemoShell, useReducedMotion, type DemoProps } from "./ui";

/* ───────────── Guiones ───────────── */

type Bi = [string, string];
type Scene = { file: string; title: Bi; sub: Bi; alt: Bi };
type Decision = {
  q: Bi;
  a: { text: Bi; log: Bi; scene: string };
  b: { text: Bi; log: Bi; review: string; end: string };
  outcome: { a: Bi; b: Bi };
  learning: Bi;
};
type Story = { id: string; tab: Bi; sector: Bi; scenes: Record<string, Scene>; start: string[]; decision?: Decision; teaserEnd?: Bi };

const BASE = "/contenidos/storytelling";
const T_CONTEXTO: Bi = ["Contexto", "Context"];
const T_FINAL_A: Bi = ["Final A", "Ending A"];
const T_REVISION: Bi = ["Revisión", "Review"];
const T_FINAL_B: Bi = ["Final B", "Ending B"];

const STORIES: Story[] = [
  {
    id: "junta",
    tab: ["La junta de las 8", "The 8 a.m. board"],
    sector: ["Banca", "Banking"],
    start: ["e1", "e2"],
    scenes: {
      e1: {
        file: "junta-e1",
        title: T_CONTEXTO,
        sub: [
          "Laura es analista de crédito en un banco de Bogotá. Mañana a las 8 le presenta a la junta si el nuevo crédito de libranza funciona.",
          "Laura is a credit analyst at a bank in Bogotá. Tomorrow at 8 she tells the board whether the new payroll loan is working.",
        ],
        alt: ["Laura revisa su portátil de noche en la oficina del banco", "Laura checks her laptop at night in the bank office"],
      },
      e2: {
        file: "junta-e2",
        title: ["El dato", "The figure"],
        sub: ["El reporte dice que el crédito promedio es de 3,7 millones. Se ve mejor de lo esperado.", "The report says the average loan is 3.7 million pesos. It looks better than expected."],
        alt: ["Primer plano de Laura frente a la pantalla", "Close-up of Laura in front of the screen"],
      },
      e3a: {
        file: "junta-e3a",
        title: T_FINAL_A,
        sub: [
          "Una directiva pregunta por qué casi todos los créditos están por debajo de 2,5 millones. Un solo crédito grande infló el promedio.",
          "A board member asks why almost every loan is under 2.5 million. One large loan pushed the average up.",
        ],
        alt: ["Laura presenta ante cuatro directivos y una directiva frunce el ceño", "Laura presents to four executives and one of them frowns"],
      },
      e3b: {
        file: "junta-e3b",
        title: T_REVISION,
        sub: [
          "Laura ordena los créditos y encuentra uno de 12 millones que sube el promedio. La mediana es 2,4 millones.",
          "Laura sorts the loans and finds one of 12 million that pushes the average up. The median is 2.4 million.",
        ],
        alt: ["Laura revisa los datos de noche y anota en una libreta", "Laura reviews the data at night and takes notes"],
      },
      e4b: {
        file: "junta-e4b",
        title: T_FINAL_B,
        sub: [
          "En la junta presenta la mediana y explica el valor atípico. La junta decide con el dato que describe a sus clientes.",
          "She presents the median and explains the outlier. The board decides with the number that describes its customers.",
        ],
        alt: ["Laura presenta con seguridad y los directivos asienten", "Laura presents with confidence and the executives nod"],
      },
    },
    decision: {
      q: ["¿Qué hace Laura?", "What does Laura do?"],
      a: { text: ["Presenta el promedio en la junta", "Presents the average to the board"], log: ["A · Presenta el promedio", "A · Presents the average"], scene: "e3a" },
      b: {
        text: ["Revisa cómo se reparten los créditos antes de presentar", "Checks how the loans are distributed before presenting"],
        log: ["B · Revisa el reparto", "B · Checks the spread"],
        review: "e3b",
        end: "e4b",
      },
      outcome: {
        a: ["La junta aprobó ampliar el crédito con un dato que no representaba a la mayoría de los clientes.", "The board approved expanding the loan with a number that did not represent most customers."],
        b: ["La junta decidió con el dato correcto.", "The board decided with the right number."],
      },
      learning: ["Cuando hay valores atípicos, la media se desplaza. La mediana muestra el caso típico.", "When there are outliers, the mean shifts. The median shows the typical case."],
    },
  },
  {
    id: "farmacia",
    tab: ["El mostrador de las 6", "The 6 p.m. counter"],
    sector: ["Droguería", "Drugstore"],
    start: ["f1", "f2"],
    scenes: {
      f1: {
        file: "farmacia-f1",
        title: T_CONTEXTO,
        sub: [
          "Julián atiende el mostrador de una droguería de barrio en Bogotá. Son las 6 de la tarde y la fila llega hasta la puerta.",
          "Julián works the counter of a neighborhood drugstore in Bogotá. It is 6 p.m. and the line reaches the door.",
        ],
        alt: ["Julián atiende el mostrador con una fila de clientes", "Julián serves customers at the counter with a line waiting"],
      },
      f2: {
        file: "farmacia-f2",
        title: ["El pedido", "The request"],
        sub: [
          "Una señora le pide amoxicilina para su hijo de 6 años, «la misma de la vez pasada». No trae fórmula y tiene afán.",
          "A woman asks for amoxicillin for her 6-year-old son, \"the same as last time.\" She has no prescription and she is in a hurry.",
        ],
        alt: ["Una señora preocupada habla con Julián al otro lado del mostrador", "A worried woman talks to Julián across the counter"],
      },
      f3a: {
        file: "farmacia-f3a",
        title: T_FINAL_A,
        sub: [
          "Tres días después la señora vuelve con el niño, que sigue igual. El médico le dijo que era un virus y que el antibiótico no le servía.",
          "Three days later the woman comes back with her son, who is no better. The doctor told her it was a virus and the antibiotic was no use.",
        ],
        alt: ["La señora vuelve con su hijo, que tose", "The woman comes back with her coughing son"],
      },
      f3b: {
        file: "farmacia-f3b",
        title: T_REVISION,
        sub: [
          "Julián le pregunta por la fiebre y los síntomas. Le explica que el antibiótico se vende con fórmula y no sirve contra los virus, y le recomienda consultar hoy.",
          "Julián asks about the fever and the symptoms. He explains that antibiotics need a prescription and do not work against viruses, and suggests she see a doctor today.",
        ],
        alt: ["Julián le explica con calma y la señora asiente", "Julián explains calmly and the woman nods"],
      },
      f4b: {
        file: "farmacia-f4b",
        title: T_FINAL_B,
        sub: [
          "Al otro día la señora vuelve con la fórmula del pediatra y le agradece a Julián. Ahora compra siempre ahí.",
          "The next day the woman comes back with the pediatrician's prescription and thanks Julián. Now she always shops there.",
        ],
        alt: ["La señora sonríe y le entrega la fórmula a Julián", "The woman smiles and hands Julián the prescription"],
      },
    },
    decision: {
      q: ["¿Qué hace Julián?", "What does Julián do?"],
      a: { text: ["Le vende la amoxicilina para no perder la venta", "Sells her the amoxicillin so he does not lose the sale"], log: ["A · Vende sin fórmula", "A · Sells without a prescription"], scene: "f3a" },
      b: {
        text: ["Le pregunta por los síntomas y le explica por qué necesita fórmula", "Asks about the symptoms and explains why she needs a prescription"],
        log: ["B · Pregunta y explica", "B · Asks and explains"],
        review: "f3b",
        end: "f4b",
      },
      outcome: {
        a: ["La señora perdió tres días y la droguería perdió su confianza.", "The woman lost three days and the drugstore lost her trust."],
        b: ["La droguería atendió bien y ganó una clienta.", "The drugstore served her well and won a customer."],
      },
      learning: [
        "Los antibióticos se venden con fórmula médica y no sirven contra los virus. Preguntar por los síntomas y remitir al médico protege al paciente y a la droguería.",
        "Antibiotics are sold with a prescription and do not work against viruses. Asking about symptoms and referring to a doctor protects the patient and the drugstore.",
      ],
    },
  },
  {
    id: "ventas",
    tab: ["El descuento del viernes", "The Friday discount"],
    sector: ["Equipo de ventas", "Sales team"],
    start: ["v1", "v2"],
    scenes: {
      v1: {
        file: "ventas-v1",
        title: T_CONTEXTO,
        sub: [
          "Natalia lidera un equipo de ventas de software en Medellín. Es viernes, cierre de trimestre, y al equipo le falta un negocio para la meta.",
          "Natalia leads a software sales team in Medellín. It is Friday, the quarter closes today, and the team is one deal short of its target.",
        ],
        alt: ["Natalia dirige la reunión de su equipo de ventas", "Natalia leads her sales team meeting"],
      },
      v2: {
        file: "ventas-v2",
        title: ["La objeción", "The objection"],
        sub: ["En la videollamada, el cliente dice que firma hoy si le dan el 20 % de descuento.", "On the video call, the client says he will sign today if he gets a 20% discount."],
        alt: ["Natalia escucha al cliente en una videollamada", "Natalia listens to the client on a video call"],
      },
      v3a: {
        file: "ventas-v3a",
        title: T_FINAL_A,
        sub: [
          "El negocio entra, pero finanzas le muestra que el margen ya no cubre la implementación. Al año siguiente el cliente pide el mismo descuento.",
          "The deal closes, but finance shows her the margin no longer covers the implementation. Next year the client asks for the same discount.",
        ],
        alt: ["Un colega le deja un informe a Natalia y ella frunce el ceño", "A colleague hands Natalia a report and she frowns"],
      },
      v3b: {
        file: "ventas-v3b",
        title: T_REVISION,
        sub: [
          "Natalia pregunta y descubre el problema real: el cliente no tiene caja hasta marzo. El precio no era el obstáculo.",
          "Natalia asks and finds the real problem: the client has no cash until March. Price was never the obstacle.",
        ],
        alt: ["Natalia pregunta, escucha y toma notas", "Natalia asks, listens and takes notes"],
      },
      v4b: {
        file: "ventas-v4b",
        title: T_FINAL_B,
        sub: [
          "Le ofrece pagar en tres cuotas sin descuento. El cliente firma y el equipo llega a la meta con el margen completo.",
          "She offers three installments with no discount. The client signs and the team hits its target with the full margin.",
        ],
        alt: ["El equipo celebra alrededor de la mesa", "The team celebrates around the table"],
      },
    },
    decision: {
      q: ["¿Qué hace Natalia?", "What does Natalia do?"],
      a: { text: ["Le da el 20 % para cerrar hoy", "Gives him 20% to close today"], log: ["A · Da el descuento", "A · Gives the discount"], scene: "v3a" },
      b: {
        text: ["Le pregunta qué hay detrás del pedido de descuento", "Asks what is behind the discount request"],
        log: ["B · Pregunta por la objeción", "B · Asks about the objection"],
        review: "v3b",
        end: "v4b",
      },
      outcome: {
        a: ["El equipo llegó a la meta con un negocio que pierde plata.", "The team hit its target with a deal that loses money."],
        b: ["El equipo llegó a la meta sin regalar margen.", "The team hit its target without giving away margin."],
      },
      learning: [
        "Antes de bajar el precio, pregunta qué hay detrás de la objeción. Muchas veces el problema es el flujo de caja, el alcance o el riesgo, no el precio.",
        "Before lowering the price, ask what is behind the objection. Often the problem is cash flow, scope or risk, not price.",
      ],
    },
  },
  {
    id: "obra",
    tab: ["El andamio del piso 6", "The sixth-floor scaffold"],
    sector: ["Obra", "Construction"],
    start: ["o1", "o2"],
    scenes: {
      o1: {
        file: "obra-o1",
        title: T_CONTEXTO,
        sub: [
          "Marta es supervisora de obra en un edificio en construcción en Bogotá. A las 7 de la mañana llega el concreto para la losa del piso 6.",
          "Marta is a site supervisor on a building under construction in Bogotá. At 7 a.m. the concrete arrives for the sixth-floor slab.",
        ],
        alt: ["Marta camina hacia el camión de concreto que entra a la obra", "Marta walks toward the concrete truck entering the site"],
      },
      o2: {
        file: "obra-o2",
        title: ["El riesgo", "The risk"],
        sub: [
          "En el andamio del piso 6 falta la línea de vida. La cuadrilla quiere subir ya para no hacer esperar al camión.",
          "The lifeline on the sixth-floor scaffold is missing. The crew wants to go up now so the truck does not have to wait.",
        ],
        alt: ["Marta mira el andamio mientras el maestro de obra le señala hacia arriba", "Marta looks up at the scaffold while the foreman points up"],
      },
      o3a: {
        file: "obra-o3a",
        title: T_FINAL_A,
        sub: [
          "Un trabajador pierde el equilibrio en el andamio y un compañero lo agarra a tiempo. La obra se detiene para investigar el incidente.",
          "A worker loses his balance on the scaffold and a coworker grabs him in time. The site stops to investigate the incident.",
        ],
        alt: ["Un trabajador resbala en el andamio y un compañero lo sostiene", "A worker slips on the scaffold and a coworker holds him"],
      },
      o3b: {
        file: "obra-o3b",
        title: T_REVISION,
        sub: [
          "Marta detiene el trabajo. En 30 minutos la cuadrilla instala la línea de vida, y ella reprograma el vaciado con la planta de concreto.",
          "Marta stops the work. In 30 minutes the crew installs the lifeline, and she reschedules the pour with the concrete plant.",
        ],
        alt: ["La cuadrilla instala la línea de vida mientras Marta habla por teléfono", "The crew installs the lifeline while Marta talks on the phone"],
      },
      o4b: {
        file: "obra-o4b",
        title: T_FINAL_B,
        sub: ["El vaciado arranca con media hora de retraso y todos trabajan anclados. Nadie se lastima.", "The pour starts half an hour late and everyone works tied off. Nobody gets hurt."],
        alt: ["Los trabajadores se anclan a la línea de vida y empiezan a trabajar", "The workers clip onto the lifeline and start working"],
      },
    },
    decision: {
      q: ["¿Qué hace Marta?", "What does Marta do?"],
      a: { text: ["Deja subir a la cuadrilla para no hacer esperar el concreto", "Lets the crew go up so the concrete does not wait"], log: ["A · Deja subir", "A · Lets them go up"], scene: "o3a" },
      b: {
        text: ["Detiene el trabajo hasta que instalen la línea de vida", "Stops the work until the lifeline is installed"],
        log: ["B · Detiene el trabajo", "B · Stops the work"],
        review: "o3b",
        end: "o4b",
      },
      outcome: {
        a: ["El concreto llegó a tiempo y un trabajador casi se cae.", "The concrete arrived on time and a worker almost fell."],
        b: ["La losa se vació media hora tarde y todos volvieron a casa.", "The slab was poured half an hour late and everyone went home."],
      },
      learning: [
        "En trabajo en alturas, sin protección contra caídas no se sube. Media hora de retraso cuesta menos que un accidente.",
        "In work at height, nobody goes up without fall protection. Half an hour of delay costs less than an accident.",
      ],
    },
  },
  {
    id: "turno",
    tab: ["Turno de noche", "Night shift"],
    sector: ["Salud · avance", "Health · teaser"],
    start: ["h1", "h2"],
    scenes: {
      h1: {
        file: "turno-h1",
        title: ["Escena 1", "Scene 1"],
        sub: [
          "Camila es médica general en un hospital de Boyacá. Son las 2 de la mañana y llega un paciente de 74 años con dificultad para respirar.",
          "Camila is a general practitioner at a hospital in Boyacá. It is 2 a.m. and a 74-year-old patient arrives short of breath.",
        ],
        alt: ["Camila camina por el pasillo de un hospital de noche", "Camila walks down a hospital corridor at night"],
      },
      h2: {
        file: "turno-h2",
        title: ["Escena 2", "Scene 2"],
        sub: [
          "Los síntomas apuntan a insuficiencia cardíaca. En el programa, el participante decide qué hace Camila y vive las consecuencias.",
          "The symptoms point to heart failure. In the program, learners decide what Camila does and live with the consequences.",
        ],
        alt: ["Camila ausculta al paciente mientras su hija mira", "Camila examines the patient while his daughter watches"],
      },
    },
    teaserEnd: ["En el programa, el participante decide qué hace Camila y vive las consecuencias.", "In the program, learners decide what Camila does and live with the consequences."],
  },
];

type Mode = "scene" | "decision" | "outcome";

/* ───────────── Componente ───────────── */

export default function Storytelling({ lang }: DemoProps) {
  const es = lang === "es";
  const i18 = es ? 0 : 1;
  const T = (a: string, b: string) => tx(lang, a, b);
  const reduced = useReducedMotion();
  const { events, log, clear } = useEventLog();

  const [sid, setSid] = useState(STORIES[0].id);
  const story = STORIES.find((s) => s.id === sid)!;
  const [seq, setSeq] = useState<string[]>(STORIES[0].start);
  const [idx, setIdx] = useState(0);
  const [mode, setMode] = useState<Mode>("scene");
  const [branch, setBranch] = useState<"a" | "b" | null>(null);
  const [playing, setPlaying] = useState(false);
  const [cc, setCc] = useState(true);
  const [run, setRun] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const decisionRef = useRef<HTMLDivElement>(null);
  const outcomeRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const reducedRef = useRef(false);
  reducedRef.current = reduced;

  const V = es ? { view: "vio escena", chose: "decidió", done: "completó" } : { view: "viewed", chose: "chose", done: "completed" };

  const sceneId = seq[idx];
  const scene = story.scenes[sceneId];
  const dec = story.decision;
  const total = dec ? (branch === "b" ? story.start.length + 2 : story.start.length + 1) : story.start.length;
  const logView = (s: Story, id: string) => log(V.view, `${s.tab[i18]} · ${s.scenes[id].title[i18]}`);

  /* Arranque inicial: autoplay salvo con movimiento reducido */
  useEffect(() => {
    const quiet = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!quiet) setPlaying(true);
    logView(STORIES[0], STORIES[0].start[0]);
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
  }, [playing, mode, sceneId, run, sid]);

  /* El foco pasa a la decisión o al cierre cuando aparecen */
  useEffect(() => {
    if (mode === "decision") decisionRef.current?.focus();
    if (mode === "outcome") outcomeRef.current?.focus();
  }, [mode]);

  const goTo = (s: Story, nextSeq: string[], nextIdx: number, autoplay: boolean) => {
    setSeq(nextSeq);
    setIdx(nextIdx);
    setMode("scene");
    setRun((r) => r + 1);
    setPlaying(autoplay);
    logView(s, nextSeq[nextIdx]);
  };

  const onEnded = () => {
    if (mode !== "scene") return;
    const auto = !reducedRef.current;
    if (idx < seq.length - 1) {
      const n = idx + 1;
      setIdx(n);
      setRun((r) => r + 1);
      setPlaying(auto);
      logView(story, seq[n]);
      return;
    }
    if (!dec) {
      setMode("outcome");
      setPlaying(false);
      log(V.done, story.tab[i18]);
      return;
    }
    if (sceneId === story.start[story.start.length - 1]) {
      setMode("decision");
      setPlaying(false);
      return;
    }
    if (sceneId === dec.b.review) {
      const next = [...seq, dec.b.end];
      setSeq(next);
      setIdx(next.length - 1);
      setRun((r) => r + 1);
      setPlaying(auto);
      logView(story, dec.b.end);
      return;
    }
    setMode("outcome");
    setPlaying(false);
    log(V.done, `${story.tab[i18]} · ${(sceneId === dec.a.scene ? T_FINAL_A : T_FINAL_B)[i18]}`);
  };

  const choose = (id: "a" | "b") => {
    if (!dec) return;
    log(V.chose, (id === "a" ? dec.a : dec.b).log[i18]);
    setBranch(id);
    goTo(story, [...story.start, id === "a" ? dec.a.scene : dec.b.review], story.start.length, !reduced);
  };

  const redecide = () => {
    setBranch(null);
    setSeq(story.start);
    setIdx(story.start.length - 1);
    setMode("decision");
    setPlaying(false);
    setRun((r) => r + 1);
  };

  const restart = (s: Story = story) => {
    setBranch(null);
    goTo(s, s.start, 0, !reduced);
  };

  const selectStory = (id: string) => {
    if (id === sid) return;
    const s = STORIES.find((x) => x.id === id)!;
    setSid(id);
    restart(s);
  };

  const reset = () => {
    clear();
    setSid(STORIES[0].id);
    setBranch(null);
    setSeq(STORIES[0].start);
    setIdx(0);
    setMode("scene");
    setRun((r) => r + 1);
    setPlaying(!reduced);
    logView(STORIES[0], STORIES[0].start[0]);
  };

  const onTabKey = (e: RKeyboardEvent<HTMLButtonElement>) => {
    let n = STORIES.findIndex((s) => s.id === sid);
    if (e.key === "ArrowRight" || e.key === "ArrowDown") n = (n + 1) % STORIES.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") n = (n + STORIES.length - 1) % STORIES.length;
    else if (e.key === "Home") n = 0;
    else if (e.key === "End") n = STORIES.length - 1;
    else return;
    e.preventDefault();
    const s = STORIES[n];
    selectStory(s.id);
    tabRefs.current[s.id]?.focus();
  };

  const onMeta = () => {
    const v = videoRef.current;
    if (v && mode !== "scene" && isFinite(v.duration)) v.currentTime = Math.max(0, v.duration - 0.05);
  };

  const sz = (min: number, cq: number) => `max(${min}px, ${cq}cqw)`;
  const out = mode === "outcome" && dec ? (sceneId === dec.a.scene ? { label: T_FINAL_A, line: dec.outcome.a } : { label: T_FINAL_B, line: dec.outcome.b }) : null;
  const dots: string[] = dec && branch === null ? [...story.start, "decision"] : seq;

  return (
    <DemoShell
      lang={lang}
      onReset={reset}
      instruction={T(
        "Elige una historia, mira el video y decide qué hace el protagonista en el momento clave. Después compara los dos finales.",
        "Pick a story, watch the video and decide what the main character does at the key moment. Then compare the two endings.",
      )}
    >
      <div className="flex flex-col gap-3">
        {/* Selector de historias con póster */}
        <div role="tablist" aria-label={T("Historias", "Stories")} className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
          {STORIES.map((s) => {
            const active = s.id === sid;
            return (
              <button
                key={s.id}
                ref={(el) => {
                  tabRefs.current[s.id] = el;
                }}
                role="tab"
                id={`st-tab-${s.id}`}
                type="button"
                aria-selected={active}
                aria-controls="st-panel"
                tabIndex={active ? 0 : -1}
                onClick={() => selectStory(s.id)}
                onKeyDown={onTabKey}
                className={`group relative aspect-[16/9] overflow-hidden rounded-xl border text-left transition-all ${
                  active ? "border-[#C084FC] ring-2 ring-[#C084FC]/50" : "border-white/10 opacity-80 hover:border-white/35 hover:opacity-100"
                } ${cls.focus}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${BASE}/${s.scenes[s.start[0]].file}-poster.webp`}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" aria-hidden />
                <span className="absolute inset-x-2 bottom-1.5">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-[#F9A8D4]">{s.sector[i18]}</span>
                  <span className="block truncate text-xs font-semibold text-white">{s.tab[i18]}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div id="st-panel" role="tabpanel" aria-labelledby={`st-tab-${sid}`} className="flex min-w-0 flex-col gap-2">
          {/* Escenario 16:9 */}
          <div
            role="region"
            aria-label={T("Historia en video generada con IA", "AI-generated video story")}
            className={`${cls.stage} w-full bg-[#07000f] shadow-[0_20px_60px_rgba(124,58,237,0.18)]`}
            style={{ aspectRatio: "16 / 9", containerType: "inline-size" }}
          >
            <video
              key={`${sid}-${sceneId}-${run}`}
              ref={videoRef}
              src={`${BASE}/${scene.file}.mp4`}
              poster={`${BASE}/${scene.file}-poster.webp`}
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
              {mode === "decision" ? T("Decisión", "Decision") : `${T("Escena", "Scene")} ${idx + 1} ${T("de", "of")} ${total}`}
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
                <button type="button" onClick={() => setPlaying(true)} className={`${cls.btnPrimary} px-5 py-2.5`}>
                  <Play className="h-4 w-4" aria-hidden />
                  {T("Reproducir escena", "Play scene")}
                </button>
                {cc && <p className="max-w-md rounded-md bg-black/70 px-3 py-1.5 text-xs leading-snug text-white/90 sm:text-sm">{scene.sub[i18]}</p>}
              </div>
            )}

            {/* Decisión sobre el último cuadro */}
            {mode === "decision" && dec && (
              <div className="absolute inset-0 z-30 flex items-center justify-center overflow-y-auto bg-black/70 p-2 sm:p-5">
                <div
                  ref={decisionRef}
                  tabIndex={-1}
                  role="group"
                  aria-label={T("Decisión de la historia", "Story decision")}
                  className="my-auto w-full max-w-lg rounded-2xl border border-white/15 bg-[#12051f] p-3 shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC] sm:p-5"
                >
                  <p className="text-sm font-bold leading-snug text-white sm:text-xl">{dec.q[i18]}</p>
                  <div className="mt-2 flex flex-col gap-2 sm:mt-3">
                    {(["a", "b"] as const).map((k) => (
                      <button key={k} type="button" onClick={() => choose(k)} className={`${cls.chip} flex items-start gap-2.5 text-xs sm:text-sm`}>
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7C3AED] text-[11px] font-bold text-white" aria-hidden>
                          {k.toUpperCase()}
                        </span>
                        <span>
                          <span className="sr-only">{k.toUpperCase()}. </span>
                          {dec[k].text[i18]}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Fin del avance sobre el último cuadro */}
            {mode === "outcome" && !dec && story.teaserEnd && (
              <div className="absolute inset-0 z-30 flex items-center justify-center overflow-y-auto bg-black/75 p-3 sm:p-6">
                <div
                  ref={outcomeRef}
                  tabIndex={-1}
                  role="group"
                  aria-label={T("Cierre de la historia", "Story ending")}
                  className="my-auto w-full max-w-lg rounded-2xl border border-white/15 bg-[#12051f] p-3 text-center shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC] sm:p-5"
                >
                  <p className="text-xs font-semibold leading-snug text-white sm:text-lg">{story.teaserEnd[i18]}</p>
                  <button type="button" onClick={() => restart()} className={`${cls.btnPrimary} mt-3`}>
                    <RotateCcw className="h-4 w-4" aria-hidden />
                    {T("Ver de nuevo", "Watch again")}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Tarjeta de resultado */}
          {out && dec && (
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
                {dec.learning[i18]}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <button type="button" onClick={redecide} className={cls.btnPrimary}>
                  <Undo2 className="h-4 w-4" aria-hidden />
                  {T("Volver a decidir", "Decide again")}
                </button>
                <button type="button" onClick={() => restart()} className={cls.btnGhost}>
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
                const label = isDecision ? T("Decisión", "Decision") : story.scenes[d].title[i18];
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
