"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent as RPointerEvent } from "react";
import Link from "next/link";
import {
  Activity, AppWindow, ArrowDownUp, ArrowRight, ArrowUpRight, AudioLines, BarChart3, BookOpen, Brain, Calculator, Calendar, ChevronLeft,
  ChevronRight, CircleCheck, CircleDot, CircleHelp, ClipboardList, Columns3, Combine, Crosshair, Eye, FilePen, FileStack, Fingerprint,
  GalleryHorizontal, GalleryHorizontalEnd, Gift, GitCommitHorizontal, Glasses, Grid3x3, Headphones, Highlighter, Images, Layers, LayoutList,
  LayoutTemplate, ListChecks, ListCollapse, Map as MapIcon, MessagesSquare, Mic, MicVocal, MonitorPlay, MousePointerClick, Move, NotebookPen,
  PenLine, Play, Presentation, Projector, QrCode, Repeat, Rotate3d, Route, Rows3, ScanEye, ScanSearch, ScrollText, Search, SlidersHorizontal, Split,
  SquareCheckBig, SquareSplitHorizontal, Target, TextCursorInput, TextSearch, Timer, ToggleRight, Trophy, WholeWord, X,
  type LucideIcon,
} from "lucide-react";
import {
  CATEGORIAS, DATOS, OBJETIVOS, PROGRAMA, SECTORES, TIPOS,
  type CategoriaId, type DatoId, type Lang, type ObjetivoId, type TipoContenido, type VerboXapi,
} from "@/content/contenidos/tipos";
import { DEMOS } from "./demos";
import VideoReferencia from "./VideoReferencia";

const MEETING = "https://meetings.hubspot.com/david5040?uuid=26d4db2a-ff58-48ff-be04-a74d169db651";

/* ── Iconografía propia (lucide, trazo uniforme) ── */
const ICONOS: Record<string, LucideIcon> = {
  "video-interactivo": MonitorPlay,
  "presentacion-curso": Presentation,
  "presentacion-impresionante": Projector,
  "libro-interactivo": BookOpen,
  "linea-tiempo": GitCommitHorizontal,
  "muro-informacion": LayoutList,
  "recorrido-360": Rotate3d,
  "vr-learning": Glasses,
  "busqueda-tesoro-ra": ScanEye,
  "escenario-ramificado": Split,
  "mapa-juego": MapIcon,
  "juego-memoria": Brain,
  crucigrama: Grid3x3,
  "sopa-letras": TextSearch,
  "calendario-adviento": Gift,
  "conjunto-preguntas": ListChecks,
  "opcion-multiple": SquareCheckBig,
  "opcion-unica": CircleDot,
  "verdadero-falso": ToggleRight,
  "eleccion-multimedia": Images,
  "adivinar-respuesta": CircleHelp,
  "test-personalidad": Fingerprint,
  "cuestionario-aritmetico": Calculator,
  "cuestionario-encuesta": ClipboardList,
  resumen: ScrollText,
  ensayo: PenLine,
  "rellenar-espacios": TextCursorInput,
  "rellenar-espacios-avanzado": FilePen,
  "marcar-palabras": Highlighter,
  "tira-estructura": Rows3,
  "arrastrar-soltar": Move,
  "arrastrar-palabras": WholeWord,
  "ordenar-parrafos": ArrowDownUp,
  "emparejamiento-imagenes": Combine,
  "secuenciacion-imagenes": GalleryHorizontal,
  "hotspots-imagenes": Target,
  "encontrar-hotspot": Crosshair,
  "encontrar-multiples-hotspots": ScanSearch,
  "yuxtaposicion-imagenes": SquareSplitHorizontal,
  "carrusel-imagenes": GalleryHorizontalEnd,
  agamotto: SlidersHorizontal,
  collage: LayoutTemplate,
  "grabadora-audio": Mic,
  "decir-palabras": AudioLines,
  "conjunto-decir-palabras": MicVocal,
  dictado: Headphones,
  flashcards: Layers,
  "tarjetas-dialogo": MessagesSquare,
  "notas-cornell": NotebookPen,
  "herramienta-documentacion": FileStack,
  grafico: BarChart3,
  "codigo-qr": QrCode,
  "incrustador-iframe": AppWindow,
  acordeon: ListCollapse,
  "pagina-columna": Columns3,
};

/** Par de color por categoría, dentro de la paleta de marca. */
const COLOR: Record<CategoriaId, [string, string]> = {
  video: ["#7C3AED", "#C084FC"],
  inmersivas: ["#3B82F6", "#C084FC"],
  juegos: ["#DB2777", "#F4A27A"],
  evaluacion: ["#7C3AED", "#F472B6"],
  texto: ["#A855F7", "#F472B6"],
  arrastrar: ["#F472B6", "#F4A27A"],
  imagenes: ["#3B82F6", "#F472B6"],
  voz: ["#DB2777", "#C084FC"],
  estudio: ["#6D28D9", "#3B82F6"],
  estructura: ["#6D28D9", "#C084FC"],
};

const DATO_ICONO: Record<DatoId, LucideIcon> = {
  clics: MousePointerClick,
  tiempo: Timer,
  respuestas: CircleCheck,
  intentos: Repeat,
  puntaje: Trophy,
  ruta: Route,
  progreso: Activity,
  texto: PenLine,
  vistas: Eye,
};

const VERBO: Record<VerboXapi, [string, string]> = {
  answered: ["respondió", "answered"],
  interacted: ["interactuó con", "interacted with"],
  completed: ["completó", "completed"],
  experienced: ["vio", "experienced"],
  progressed: ["avanzó en", "progressed"],
};

const T = {
  es: {
    search: "Buscar un tipo de contenido",
    placeholder: "Busca por nombre o uso: video, arrastrar, 360, voz…",
    clearSearch: "Borrar búsqueda",
    category: "Categoría",
    all: "Todas",
    objective: "Objetivo",
    allObj: "Todos",
    onlyDemo: "Solo con demo en vivo",
    showing: (n: number, t: number) => `Mostrando ${n} de ${t} tipos`,
    emptyTitle: "Ningún tipo coincide con esos filtros",
    emptyBody: "Prueba con otra palabra o quita alguno de los filtros.",
    clearAll: "Quitar filtros",
    live: "Demo en vivo",
    video: "Video",
    videoSr: "Con video de referencia del mercado",
    market: "Así se ve en el mercado",
    marketNote: (n: number) => `Ejemplo${n > 1 ? "s" : ""} de referencia en el mercado. merahki.ai puede desarrollar una experiencia así a la medida o integrar y licenciar herramientas como ${n > 1 ? "estas" : "esta"}.`,
    noDemoShort: "Este tipo no tiene demo en la página. En una reunión de 30 minutos te lo mostramos con contenido de un curso.",
    whatIs: "Qué es",
    example: "Ejemplo de uso",
    sample: "Programa de muestra",
    idealFor: "Ideal para",
    captures: "Datos que registra de cada participante",
    capturesNote: "Cada interactividad captura la data de interacción del participante. Los registros salen en formato xAPI hacia los reportes del programa.",
    xapi: "Ver un registro xAPI de ejemplo",
    tryIt: "Pruébalo",
    noDemoTitle: "Te mostramos este formato en una reunión",
    noDemoBody: "Esta ficha no tiene demo en la página. En una reunión de 30 minutos te mostramos este tipo funcionando con contenido de un curso y revisamos si sirve para tu programa.",
    quote: "Solicitar cotización a la medida",
    meet: "Agendar reunión de 30 minutos",
    prev: "Tipo anterior",
    next: "Tipo siguiente",
    close: "Cerrar ficha",
    pos: (i: number, n: number) => `${i} de ${n}`,
    homeQuote: "/es#cotizacion",
    actor: "Participante 0142",
    module: "Módulo 2",
    langTag: "es-CO",
  },
  en: {
    search: "Search content types",
    placeholder: "Search by name or use: video, drag, 360, voice…",
    clearSearch: "Clear search",
    category: "Category",
    all: "All",
    objective: "Goal",
    allObj: "All",
    onlyDemo: "Live demos only",
    showing: (n: number, t: number) => `Showing ${n} of ${t} types`,
    emptyTitle: "No content type matches those filters",
    emptyBody: "Try another word or remove one of the filters.",
    clearAll: "Clear filters",
    live: "Live demo",
    video: "Video",
    videoSr: "With a market reference video",
    market: "What it looks like in the market",
    marketNote: (n: number) => `Market reference example${n > 1 ? "s" : ""}. merahki.ai can build an experience like this for you or integrate and license tools like ${n > 1 ? "these" : "this one"}.`,
    noDemoShort: "This type has no demo on the page. In a 30-minute meeting we show it to you with course content.",
    whatIs: "What it is",
    example: "Use case",
    sample: "Sample program",
    idealFor: "Best for",
    captures: "Data it records for each learner",
    capturesNote: "Every interactive activity captures the learner's interaction data. Records are sent as xAPI statements to the program reports.",
    xapi: "See a sample xAPI statement",
    tryIt: "Try it",
    noDemoTitle: "We show you this format in a meeting",
    noDemoBody: "This type has no demo on the page. In a 30-minute meeting we show it working with real course content and check whether it fits your program.",
    quote: "Request a custom quote",
    meet: "Book a 30-minute meeting",
    prev: "Previous type",
    next: "Next type",
    close: "Close",
    pos: (i: number, n: number) => `${i} of ${n}`,
    homeQuote: "/#cotizacion",
    actor: "Learner 0142",
    module: "Module 2",
    langTag: "en-US",
  },
} as const;

/** Abre y cierra el dialog antes de pintar, para que no quede un fondo vacío un cuadro. */
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

const CSS = `
.mx-dialog{padding:0;border:0;background:transparent;color:#fff;max-width:none;max-height:none;width:100vw;height:100dvh;margin:0;overflow:visible}
@media (min-width:768px){.mx-dialog{width:min(1180px,calc(100vw - 48px));height:min(880px,calc(100dvh - 48px));margin:auto}}
.mx-dialog::backdrop{background:rgba(4,0,10,.74);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}
.mx-dialog[open] .mx-panel{animation:mx-in .34s cubic-bezier(.2,.8,.2,1)}
.mx-dialog[open]::backdrop{animation:mx-fade .25s ease-out}
@keyframes mx-in{from{opacity:0;transform:translateY(16px) scale(.985)}to{opacity:1;transform:none}}
@keyframes mx-fade{from{opacity:0}to{opacity:1}}
@keyframes mx-rise{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
.mx-card{animation:mx-rise .5s cubic-bezier(.2,.8,.2,1) both}
@keyframes mx-float{0%,100%{transform:rotateX(8deg) translateY(0)}50%{transform:rotateX(8deg) translateY(-4px)}}
.mx-float{animation:mx-float 3.2s ease-in-out infinite}
@keyframes mx-shake{0%,100%{transform:translate(0,0)}25%{transform:translate(.6px,-.4px)}50%{transform:translate(-.5px,.5px)}75%{transform:translate(.4px,.3px)}}
.mx-shake{animation:mx-shake 1.8s ease-in-out infinite}
.mx-scroll{scrollbar-width:none}.mx-scroll::-webkit-scrollbar{display:none}
@media (prefers-reduced-motion:reduce){.mx-dialog[open] .mx-panel,.mx-dialog[open]::backdrop,.mx-card,.mx-float,.mx-shake{animation:none!important}}
`;

function xapi(t: TipoContenido, lang: Lang) {
  const L = lang === "es" ? 0 : 1;
  const tt = T[lang];
  const result: Record<string, unknown> =
    t.verbo === "answered"
      ? { success: true, score: { scaled: 0.8 }, duration: "PT48S" }
      : t.verbo === "completed"
        ? { completion: true, duration: "PT6M10S" }
        : t.verbo === "progressed"
          ? { completion: false, duration: "PT3M20S" }
          : { duration: "PT1M05S" };
  return JSON.stringify(
    {
      actor: { name: tt.actor },
      verb: { id: `http://adlnet.gov/expapi/verbs/${t.verbo}`, display: { [tt.langTag]: VERBO[t.verbo][L] } },
      object: { definition: { name: { [tt.langTag]: `${t.nombre[lang]} · ${tt.module}` } } },
      result,
    },
    null,
    2,
  );
}

function IconTile({ tipo, size = "md" }: { tipo: TipoContenido; size?: "sm" | "md" | "lg" }) {
  const Icon = ICONOS[tipo.id] ?? Layers;
  const [a, b] = COLOR[tipo.categoria];
  const dims = size === "lg" ? "h-12 w-12 rounded-2xl" : size === "sm" ? "h-8 w-8 rounded-lg" : "h-11 w-11 rounded-xl";
  const icon = size === "lg" ? "h-6 w-6" : size === "sm" ? "h-4 w-4" : "h-5 w-5";
  return (
    <span
      className={`flex shrink-0 items-center justify-center ${dims}`}
      style={{ background: `linear-gradient(135deg, ${a}59, ${b}26)`, boxShadow: `inset 0 0 0 1px ${a}66, 0 8px 24px -12px ${a}` }}
      aria-hidden
    >
      <Icon className={icon} style={{ color: "#F5EEFF" }} strokeWidth={1.75} />
    </span>
  );
}

export default function ContentExplorer({ lang }: { lang: Lang }) {
  const t = T[lang];
  const L = lang;
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<CategoriaId | "todas">("todas");
  const [obj, setObj] = useState<ObjetivoId | "todos">("todos");
  const [soloDemo, setSoloDemo] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);
  const [anuncio, setAnuncio] = useState("");

  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const shownRef = useRef<string | null>(null);
  const downOnBackdrop = useRef(false);

  /* ── Filtros ── */
  const pasa = useCallback(
    (tp: TipoContenido, ignorar?: "cat") => {
      if (ignorar !== "cat" && cat !== "todas" && tp.categoria !== cat) return false;
      if (obj !== "todos" && !tp.idealPara.includes(obj)) return false;
      if (soloDemo && !tp.demo) return false;
      const qq = norm(q.trim());
      if (!qq) return true;
      const catName = CATEGORIAS.find((c) => c.id === tp.categoria)!.nombre[L];
      const hay = norm([tp.nombre.es, tp.nombre.en, tp.queEs[L], catName, ...tp.idealPara.map((o) => OBJETIVOS.find((x) => x.id === o)!.nombre[L])].join(" "));
      return qq.split(/\s+/).every((w) => hay.includes(w));
    },
    [cat, obj, soloDemo, q, L],
  );
  const filtrados = useMemo(() => TIPOS.filter((tp) => pasa(tp)), [pasa]);
  const conteoCat = useMemo(() => {
    const base = TIPOS.filter((tp) => pasa(tp, "cat"));
    return { todas: base.length, ...Object.fromEntries(CATEGORIAS.map((c) => [c.id, base.filter((x) => x.categoria === c.id).length])) } as Record<string, number>;
  }, [pasa]);
  const grupos = CATEGORIAS.map((c) => ({ c, items: filtrados.filter((x) => x.categoria === c.id) })).filter((g) => g.items.length > 0);
  const hayFiltros = q.trim() !== "" || cat !== "todas" || obj !== "todos" || soloDemo;
  const limpiar = () => {
    setQ("");
    setCat("todas");
    setObj("todos");
    setSoloDemo(false);
  };

  /* ── Ficha (dialog nativo) ── */
  const abrir = useCallback((id: string) => {
    setOpenId(id);
    try {
      history.replaceState(null, "", `#tipo-${id}`);
    } catch {}
  }, []);
  const cerrar = useCallback(() => setOpenId(null), []);

  useIsoLayoutEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (openId) {
      if (!d.open) {
        d.showModal();
        document.documentElement.style.overflow = "hidden";
        requestAnimationFrame(() => titleRef.current?.focus());
      } else {
        bodyRef.current?.scrollTo({ top: 0 });
        const tp = TIPOS.find((x) => x.id === openId);
        if (tp) setAnuncio(tp.nombre[L]);
      }
      shownRef.current = openId;
    } else if (d.open) {
      d.close();
    }
  }, [openId, L]);

  const onClose = () => {
    document.documentElement.style.overflow = "";
    const id = shownRef.current;
    shownRef.current = null;
    setOpenId(null);
    try {
      if (location.hash.startsWith("#tipo-")) history.replaceState(null, "", location.pathname + location.search);
    } catch {}
    if (id) document.getElementById(`btn-tipo-${id}`)?.focus({ preventScroll: false });
  };

  // Enlaces profundos: #tipo-<id> abre la ficha (también desde otros enlaces de la página).
  useEffect(() => {
    const leer = () => {
      const m = location.hash.match(/^#tipo-(.+)$/);
      if (m && TIPOS.some((x) => x.id === m[1])) setOpenId(m[1]);
    };
    leer();
    window.addEventListener("hashchange", leer);
    return () => {
      window.removeEventListener("hashchange", leer);
      document.documentElement.style.overflow = "";
    };
  }, []);

  const tipo = openId ? TIPOS.find((x) => x.id === openId) ?? null : null;
  const lista = tipo && filtrados.some((x) => x.id === tipo.id) ? filtrados : TIPOS;
  const posicion = tipo ? lista.findIndex((x) => x.id === tipo.id) : -1;
  const mover = (dir: -1 | 1) => {
    if (!tipo) return;
    const n = lista[(posicion + dir + lista.length) % lista.length];
    abrir(n.id);
  };

  const onDialogKey = (e: KeyboardEvent<HTMLDialogElement>) => {
    if (e.key !== "Tab") return;
    const d = dialogRef.current;
    if (!d) return;
    const focusables = Array.from(
      d.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input:not([disabled]), select, textarea, summary, [tabindex]'),
    ).filter((el) => el.tabIndex >= 0 && el.getClientRects().length > 0);
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement;
    if (e.shiftKey && (active === first || active === titleRef.current)) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const Demo = tipo?.demo ? DEMOS[tipo.demo] : null;
  const refs = tipo?.referencias ?? [];
  const catActual = tipo ? CATEGORIAS.find((c) => c.id === tipo.categoria)! : null;

  const chipBase =
    "shrink-0 whitespace-nowrap rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC] focus-visible:ring-offset-2 focus-visible:ring-offset-black";
  const chipOn = "border-white bg-white text-[#0A0010]";
  const chipOff = "border-white/[0.14] bg-white/[0.03] text-white/75 hover:border-white/35 hover:text-white";

  return (
    <div lang={lang}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* ── Barra de filtros ── */}
      <div className="space-y-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <label className="relative block flex-1">
            <span className="sr-only">{t.search}</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" aria-hidden />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t.placeholder}
              className="h-12 w-full rounded-full border border-white/[0.14] bg-white/[0.04] pl-11 pr-11 text-[15px] text-white placeholder:text-white/35 focus:border-[#C084FC]/70 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-[#C084FC]/40 [&::-webkit-search-cancel-button]:hidden"
            />
            {q && (
              <button type="button" onClick={() => setQ("")} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-white/50 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC]" aria-label={t.clearSearch}>
                <X className="h-4 w-4" aria-hidden />
              </button>
            )}
          </label>
          <button
            type="button"
            role="switch"
            aria-checked={soloDemo}
            onClick={() => setSoloDemo((v) => !v)}
            className="inline-flex h-12 shrink-0 items-center gap-3 rounded-full border border-white/[0.14] bg-white/[0.03] pl-4 pr-3 text-sm font-medium text-white/85 transition-colors hover:border-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC]"
          >
            <span className="h-2 w-2 rounded-full bg-[#F472B6]" aria-hidden />
            {t.onlyDemo}
            <span className={`relative h-6 w-10 rounded-full transition-colors ${soloDemo ? "bg-[#7C3AED]" : "bg-white/15"}`} aria-hidden>
              <span className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow transition-[left] motion-reduce:transition-none ${soloDemo ? "left-5" : "left-1"}`} />
            </span>
          </button>
        </div>

        <div role="group" aria-label={t.category} className="mx-scroll -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
          <button type="button" aria-pressed={cat === "todas"} onClick={() => setCat("todas")} className={`${chipBase} ${cat === "todas" ? chipOn : chipOff}`}>
            {t.all} <span className={`ml-1 tabular-nums ${cat === "todas" ? "text-[#0A0010]/55" : "text-white/40"}`}>{conteoCat.todas}</span>
          </button>
          {CATEGORIAS.map((c) => {
            const n = conteoCat[c.id] ?? 0;
            const on = cat === c.id;
            return (
              <button key={c.id} type="button" aria-pressed={on} onClick={() => setCat(on ? "todas" : c.id)} disabled={n === 0 && !on} className={`${chipBase} ${on ? chipOn : chipOff} disabled:cursor-not-allowed disabled:opacity-35`}>
                {c.nombre[L]} <span className={`ml-1 tabular-nums ${on ? "text-[#0A0010]/55" : "text-white/40"}`}>{n}</span>
              </button>
            );
          })}
        </div>

        <div role="group" aria-label={t.objective} className="mx-scroll -mx-4 flex items-center gap-2 overflow-x-auto px-4 pb-1 md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
          <span className="shrink-0 pr-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/40">{t.objective}</span>
          <button type="button" aria-pressed={obj === "todos"} onClick={() => setObj("todos")} className={`${chipBase} py-1 text-[13px] ${obj === "todos" ? chipOn : chipOff}`}>
            {t.allObj}
          </button>
          {OBJETIVOS.map((o) => {
            const on = obj === o.id;
            return (
              <button key={o.id} type="button" aria-pressed={on} onClick={() => setObj(on ? "todos" : o.id)} className={`${chipBase} py-1 text-[13px] ${on ? chipOn : chipOff}`}>
                {o.nombre[L]}
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-white/[0.08] pt-4">
          <p className="text-sm text-white/55" aria-live="polite" aria-atomic="true">
            {t.showing(filtrados.length, TIPOS.length)}
          </p>
          {hayFiltros && (
            <button type="button" onClick={limpiar} className="rounded-full px-3 py-1 text-sm text-[#C084FC] hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC]">
              {t.clearAll}
            </button>
          )}
        </div>
      </div>

      {/* ── Galería ── */}
      <div className="mt-8 space-y-14">
        {grupos.map(({ c, items }) => {
          const [a, b] = COLOR[c.id];
          return (
            <section key={c.id} aria-labelledby={`cat-${c.id}`}>
              <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between md:gap-8">
                <div className="flex items-center gap-3">
                  <span className="h-8 w-1 rounded-full" style={{ background: `linear-gradient(${a}, ${b})` }} aria-hidden />
                  <h3 id={`cat-${c.id}`} className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                    {c.nombre[L]}
                  </h3>
                  <span className="rounded-full bg-white/[0.07] px-2.5 py-0.5 text-xs font-semibold tabular-nums text-white/60">{items.length}</span>
                </div>
                <p className="text-sm leading-relaxed text-white/50 md:max-w-md md:text-right">{c.descripcion[L]}</p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {items.map((tp, i) => (
                  <li key={tp.id} id={`tipo-${tp.id}`} className="mx-card scroll-mt-28" style={{ animationDelay: `${Math.min(i, 8) * 40}ms` } as CSSProperties}>
                    <article className="group relative flex h-full flex-col rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.045] to-white/[0.015] p-5 transition duration-300 hover:border-white/20 hover:from-white/[0.07] motion-safe:hover:-translate-y-0.5 [&:has(:focus-visible)]:ring-2 [&:has(:focus-visible)]:ring-[#C084FC]">
                      <div className="flex items-start justify-between gap-3">
                        <IconTile tipo={tp} />
                        <span className="flex flex-wrap justify-end gap-1.5">
                          {tp.referencias?.length ? (
                            <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/[0.07] px-2.5 py-1 text-[11px] font-semibold text-white/85">
                              <Play className="h-2.5 w-2.5 fill-current" aria-hidden />
                              {t.video}
                            </span>
                          ) : null}
                          {tp.demo && (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F472B6]/30 bg-[#F472B6]/10 px-2.5 py-1 text-[11px] font-semibold text-[#F9A8D4]">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#F472B6] motion-safe:animate-pulse" aria-hidden />
                              {t.live}
                            </span>
                          )}
                        </span>
                      </div>
                      <h4 className="mt-4 text-[15px] font-semibold leading-snug text-white">
                        <button
                          id={`btn-tipo-${tp.id}`}
                          type="button"
                          onClick={() => abrir(tp.id)}
                          aria-haspopup="dialog"
                          aria-describedby={`desc-${tp.id}`}
                          className="text-left after:absolute after:inset-0 after:rounded-2xl after:content-[''] focus:outline-none"
                        >
                          {tp.nombre[L]}
                          {tp.demo && <span className="sr-only">. {t.live}</span>}
                          {tp.referencias?.length ? <span className="sr-only">. {t.videoSr}</span> : null}
                        </button>
                      </h4>
                      <p id={`desc-${tp.id}`} className="mt-1.5 line-clamp-3 text-sm leading-relaxed text-white/60">
                        {tp.queEs[L]}
                      </p>
                      <div className="mt-auto flex items-end justify-between gap-2 pt-5">
                        <span className="flex flex-wrap gap-1.5">
                          {tp.idealPara.slice(0, 2).map((o) => (
                            <span key={o} className="rounded-md bg-white/[0.06] px-2 py-0.5 text-[11px] font-medium text-white/60">
                              {OBJETIVOS.find((x) => x.id === o)!.nombre[L]}
                            </span>
                          ))}
                        </span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-white/25 transition-colors group-hover:text-white" aria-hidden />
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}

        {grupos.length === 0 && (
          <div className="rounded-3xl border border-dashed border-white/15 px-6 py-16 text-center">
            <p className="text-lg font-semibold text-white">{t.emptyTitle}</p>
            <p className="mt-2 text-sm text-white/55">{t.emptyBody}</p>
            <button type="button" onClick={limpiar} className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0A0010] hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC] focus-visible:ring-offset-2 focus-visible:ring-offset-black">
              {t.clearAll}
            </button>
          </div>
        )}
      </div>

      {/* ── Ficha de cada tipo ── */}
      <dialog
        ref={dialogRef}
        className="mx-dialog"
        aria-labelledby="mx-titulo"
        onCancel={(e) => {
          e.preventDefault();
          cerrar();
        }}
        onClose={onClose}
        onPointerDown={(e: RPointerEvent<HTMLDialogElement>) => {
          downOnBackdrop.current = e.target === dialogRef.current;
        }}
        onClick={(e) => {
          if (downOnBackdrop.current && e.target === dialogRef.current) cerrar();
          downOnBackdrop.current = false;
        }}
        onKeyDown={onDialogKey}
      >
        {tipo && catActual && (
          <div className="mx-panel flex h-full flex-col overflow-hidden border-white/10 bg-[#0A0010] shadow-[0_40px_120px_-20px_rgba(124,58,237,0.45)] md:rounded-[28px] md:border">
            <header className="flex items-center gap-3 border-b border-white/10 px-4 py-3 sm:px-6 sm:py-4">
              <IconTile tipo={tipo} size="lg" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">{catActual.nombre[L]}</p>
                <h2 id="mx-titulo" ref={titleRef} tabIndex={-1} className="truncate text-lg font-semibold tracking-tight text-white focus:outline-none sm:text-xl">
                  {tipo.nombre[L]}
                </h2>
              </div>
              <span className="hidden text-xs tabular-nums text-white/40 sm:inline">{t.pos(posicion + 1, lista.length)}</span>
              <div className="flex items-center gap-1">
                <button type="button" onClick={() => mover(-1)} className="rounded-full p-2 text-white/60 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC]" aria-label={t.prev}>
                  <ChevronLeft className="h-5 w-5" aria-hidden />
                </button>
                <button type="button" onClick={() => mover(1)} className="rounded-full p-2 text-white/60 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC]" aria-label={t.next}>
                  <ChevronRight className="h-5 w-5" aria-hidden />
                </button>
                <button type="button" onClick={cerrar} className="ml-1 rounded-full bg-white/[0.08] p-2 text-white hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC]" aria-label={t.close}>
                  <X className="h-5 w-5" aria-hidden />
                </button>
              </div>
            </header>
            <p className="sr-only" aria-live="polite">{anuncio}</p>

            <div ref={bodyRef} className="flex-1 overflow-y-auto overscroll-contain">
              <div className={`grid min-h-full ${Demo || refs.length ? "lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]" : "lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)]"}`}>
                {/* Ficha */}
                <div className="space-y-7 p-5 sm:p-7 lg:border-r lg:border-white/10">
                  <section>
                    <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C084FC]">{t.whatIs}</h3>
                    <p className="mt-2 text-[17px] leading-relaxed text-white">{tipo.queEs[L]}</p>
                  </section>

                  <section className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 sm:p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C084FC]">{t.example}</h3>
                      <span className="rounded-full border border-white/15 px-2.5 py-0.5 text-[11px] font-semibold text-white/70">{SECTORES[tipo.ejemplo.sector][L]}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-white/85">{tipo.ejemplo[L]}</p>
                    <p className="mt-3 text-xs text-white/45">
                      {t.sample}: <span className="text-white/70">{PROGRAMA[L]}</span>
                    </p>
                  </section>

                  <section>
                    <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C084FC]">{t.idealFor}</h3>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {tipo.idealPara.map((o) => (
                        <li key={o} className="rounded-full bg-white/[0.08] px-3 py-1 text-sm text-white/85">
                          {OBJETIVOS.find((x) => x.id === o)!.nombre[L]}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C084FC]">{t.captures}</h3>
                    <ul className="mt-3 grid grid-cols-2 gap-2">
                      {tipo.captura.map((d) => {
                        const Icon = DATO_ICONO[d];
                        return (
                          <li key={d} className="flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-sm text-white/85">
                            <Icon className="h-4 w-4 shrink-0 text-[#F472B6]" aria-hidden />
                            {DATOS[d][L]}
                          </li>
                        );
                      })}
                    </ul>
                    <p className="mt-3 text-xs leading-relaxed text-white/50">{t.capturesNote}</p>
                    <details className="group mt-3 rounded-xl border border-white/10 bg-black/40">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-3 py-2.5 text-xs font-semibold text-white/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC] [&::-webkit-details-marker]:hidden">
                        {t.xapi}
                        <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90 motion-reduce:transition-none" aria-hidden />
                      </summary>
                      <pre className="overflow-x-auto border-t border-white/10 px-3 py-3 font-mono text-[11px] leading-relaxed text-white/70">{xapi(tipo, L)}</pre>
                    </details>
                  </section>
                </div>

                {/* Demo */}
                <div className="border-t border-white/10 bg-white/[0.015] p-5 sm:p-7 lg:border-t-0">
                  {Demo ? (
                    <>
                      <h3 className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#F472B6]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#F472B6] motion-safe:animate-pulse" aria-hidden />
                        {t.tryIt}
                      </h3>
                      <Demo key={tipo.id} lang={lang} variante={tipo.variante} />
                    </>
                  ) : refs.length ? null : (
                    <div className="flex h-full flex-col justify-center gap-5 rounded-3xl border border-white/10 bg-[radial-gradient(ellipse_at_30%_0%,rgba(124,58,237,0.22),transparent_60%)] p-6 sm:p-8">
                      <div className="flex items-center gap-3">
                        <IconTile tipo={tipo} size="lg" />
                        <Calendar className="h-5 w-5 text-white/30" aria-hidden />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{t.noDemoTitle}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/65">{t.noDemoBody}</p>
                      </div>
                      <a href={MEETING} target="_blank" rel="noopener" className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0A0010] hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0010]">
                        {t.meet} <ArrowRight className="h-4 w-4" aria-hidden />
                      </a>
                    </div>
                  )}

                  {refs.length > 0 && (
                    <section aria-labelledby="mx-mercado" className={Demo ? "mt-10 border-t border-white/10 pt-7" : ""}>
                      <h3 id="mx-mercado" className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C084FC]">
                        <Play className="h-3 w-3 fill-current" aria-hidden />
                        {t.market}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-white/50">{t.marketNote(refs.length)}</p>
                      <ul className={`mt-4 grid gap-5 ${refs.length > 1 ? "sm:grid-cols-2" : ""}`}>
                        {refs.map((r) => (
                          <li key={r.videoId}>
                            <VideoReferencia r={r} lang={lang} />
                          </li>
                        ))}
                      </ul>
                      {!Demo && (
                        <p className="mt-6 text-sm leading-relaxed text-white/60">
                          {t.noDemoShort}{" "}
                          <a href={MEETING} target="_blank" rel="noopener" className="font-semibold text-white underline decoration-[#C084FC]/60 underline-offset-4 hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC]">
                            {t.meet}
                          </a>
                        </p>
                      )}
                    </section>
                  )}
                </div>
              </div>
            </div>

            <footer className="flex flex-wrap items-center justify-end gap-2 border-t border-white/10 px-4 py-3 sm:justify-between sm:px-6">
              <p className="hidden text-xs text-white/45 sm:block">
                {t.sample}: {PROGRAMA[L]}
              </p>
              <div className="flex flex-wrap gap-2">
                <a href={MEETING} target="_blank" rel="noopener" className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:border-white/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC]">
                  {t.meet}
                </a>
                <Link href={t.homeQuote} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0A0010] hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0010]">
                  {t.quote} <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </footer>
          </div>
        )}
      </dialog>
    </div>
  );
}
