"use client";

/**
 * Galería del catálogo de experiencias (24-nov-2026): una sección por familia, una tarjeta por experiencia
 * y la ficha en un <dialog> nativo con la demo. Reemplaza al explorador de 55 tipos con filtros.
 * La ficha conserva lo que ya funcionaba allí: bloqueo de scroll, trampa de foco, regreso del foco
 * al botón que la abrió, anterior/siguiente y enlace profundo (#exp-<id>).
 */
import { useCallback, useEffect, useLayoutEffect, useRef, useState, type KeyboardEvent } from "react";
import {
  ArrowLeft, ArrowRight, BookOpenCheck, Bot, ChevronLeft, ChevronRight, ListChecks, MessagesSquare, MonitorPlay,
  Orbit, Play, Route, ScanLine, SlidersHorizontal, X, type LucideIcon,
} from "lucide-react";
import { DATOS, EXPERIENCIAS, FAMILIAS, PROGRAMA, type Experiencia, type FamiliaId, type Lang } from "@/content/contenidos/experiencias";
import { DEMOS } from "@/components/contenidos/demos";
import VideoReferencia from "@/components/contenidos/VideoReferencia";

const ICONOS: Record<string, LucideIcon> = {
  "copiloto-estudiantil": Bot,
  "simulador-conversaciones": MessagesSquare,
  "simuladores-explorables": SlidersHorizontal,
  "recorridos-360": Orbit,
  "realidad-aumentada": ScanLine,
  "video-presentador-ia": MonitorPlay,
  "practica-inmediata": ListChecks,
  "diagnostico-ruta": Route,
};

/** Color de cada familia: [fondo del ícono, color del ícono]. */
const COLOR: Record<FamiliaId, [string, string]> = {
  conversar: ["bg-[#7C3AED]/20 ring-[#7C3AED]/40", "text-[#C4B5FD]"],
  construir: ["bg-[#0EA5E9]/15 ring-[#0EA5E9]/35", "text-[#7DD3FC]"],
  vivir: ["bg-[#DB2777]/15 ring-[#DB2777]/35", "text-[#F9A8D4]"],
  practicar: ["bg-[#F59E0B]/15 ring-[#F59E0B]/35", "text-[#FCD34D]"],
};

const T = {
  es: {
    nuevo: "Nuevo",
    probar: "Probar la demo",
    porQue: "Por qué funciona",
    sinFuente: "Uso recomendado",
    captura: "Datos que deja",
    ejemplo: "Ejemplo en un sector",
    demoDe: "Demo con el programa de ejemplo",
    referencias: "Ejemplos de referencia en el mercado",
    referenciasNota: "Videos públicos de otras empresas. merahki.ai puede desarrollar una experiencia parecida, integrar la herramienta en tu LMS o licenciarla.",
    anterior: "Experiencia anterior",
    siguiente: "Experiencia siguiente",
    cerrar: "Cerrar",
    de: "de",
    cotizar: "Solicitar cotización a la medida",
    quoteHref: "/es#cotizacion",
  },
  en: {
    nuevo: "New",
    probar: "Try the demo",
    porQue: "Why it works",
    sinFuente: "Best use",
    captura: "Data it records",
    ejemplo: "Example in an industry",
    demoDe: "Demo with the sample program",
    referencias: "Market reference examples",
    referenciasNota: "Public videos from other companies. merahki.ai can build a similar experience, integrate the tool into your LMS or license it.",
    anterior: "Previous experience",
    siguiente: "Next experience",
    cerrar: "Close",
    de: "of",
    cotizar: "Request a custom quote",
    quoteHref: "/#cotizacion",
  },
} as const;

const CSS = `
.mx-dialog{padding:0;border:0;background:transparent;color:#fff;max-width:none;max-height:none;width:100vw;height:100dvh;margin:0;overflow:visible}
@media (min-width:768px){.mx-dialog{width:min(1180px,calc(100vw - 48px));height:min(880px,calc(100dvh - 48px));margin:auto}}
.mx-dialog::backdrop{background:rgba(4,0,10,.74);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}
.mx-dialog[open] .mx-panel{animation:mx-in .34s cubic-bezier(.2,.8,.2,1)}
.mx-dialog[open]::backdrop{animation:mx-fade .25s ease-out}
@keyframes mx-in{from{opacity:0;transform:translateY(16px) scale(.985)}to{opacity:1;transform:none}}
@keyframes mx-fade{from{opacity:0}to{opacity:1}}
@media (prefers-reduced-motion:reduce){.mx-dialog[open] .mx-panel,.mx-dialog[open]::backdrop{animation:none!important}}
`;

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

function IconTile({ e, size = "md" }: { e: Experiencia; size?: "md" | "lg" }) {
  const Icon = ICONOS[e.id] ?? BookOpenCheck;
  const [bg, fg] = COLOR[e.familia];
  const box = size === "lg" ? "h-12 w-12 rounded-2xl" : "h-11 w-11 rounded-xl";
  return (
    <span className={`inline-flex shrink-0 items-center justify-center ring-1 ${bg} ${box}`} aria-hidden>
      <Icon className={`${size === "lg" ? "h-6 w-6" : "h-5 w-5"} ${fg}`} />
    </span>
  );
}

export default function GaleriaExperiencias({ lang }: { lang: Lang }) {
  const t = T[lang];
  const [openId, setOpenId] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const shownRef = useRef<string | null>(null);
  const downOnBackdrop = useRef(false);

  const abrir = useCallback((id: string) => {
    setOpenId(id);
    try {
      history.replaceState(null, "", `#exp-${id}`);
    } catch {}
  }, []);

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
        titleRef.current?.focus();
      }
      shownRef.current = openId;
    } else if (d.open) {
      d.close();
    }
  }, [openId]);

  const onClose = () => {
    document.documentElement.style.overflow = "";
    const id = shownRef.current;
    shownRef.current = null;
    setOpenId(null);
    try {
      if (location.hash.startsWith("#exp-")) history.replaceState(null, "", location.pathname + location.search);
    } catch {}
    if (id) document.getElementById(`btn-exp-${id}`)?.focus({ preventScroll: false });
  };

  // Enlace profundo: #exp-<id> abre la ficha.
  useEffect(() => {
    const leer = () => {
      const m = location.hash.match(/^#exp-(.+)$/);
      if (m && EXPERIENCIAS.some((x) => x.id === m[1])) setOpenId(m[1]);
    };
    leer();
    window.addEventListener("hashchange", leer);
    return () => {
      window.removeEventListener("hashchange", leer);
      document.documentElement.style.overflow = "";
    };
  }, []);

  const exp = openId ? EXPERIENCIAS.find((x) => x.id === openId) ?? null : null;
  const pos = exp ? EXPERIENCIAS.findIndex((x) => x.id === exp.id) : -1;
  const mover = (dir: -1 | 1) => {
    if (pos < 0) return;
    abrir(EXPERIENCIAS[(pos + dir + EXPERIENCIAS.length) % EXPERIENCIAS.length].id);
  };

  const onDialogKey = (e: KeyboardEvent<HTMLDialogElement>) => {
    if (e.key !== "Tab") return;
    const d = dialogRef.current;
    if (!d) return;
    const f = Array.from(
      d.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input:not([disabled]), select, textarea, summary, [tabindex]'),
    ).filter((el) => el.tabIndex >= 0 && el.getClientRects().length > 0);
    if (!f.length) return;
    const first = f[0];
    const last = f[f.length - 1];
    const active = document.activeElement;
    if (e.shiftKey && (active === first || active === titleRef.current)) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const Demo = exp ? DEMOS[exp.demo] : null;
  const familia = exp ? FAMILIAS.find((f) => f.id === exp.familia)! : null;
  const navBtn =
    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC]";

  return (
    <div lang={lang}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <div className="space-y-16">
        {FAMILIAS.map((fam) => {
          const items = EXPERIENCIAS.filter((x) => x.familia === fam.id);
          if (!items.length) return null;
          return (
            <section key={fam.id} aria-labelledby={`fam-${fam.id}`}>
              <div className="mb-6 max-w-3xl">
                <h3 id={`fam-${fam.id}`} className="text-2xl font-bold tracking-tight text-white md:text-[1.7rem]">
                  {fam.nombre[lang]}
                </h3>
                <p className="mt-2 leading-relaxed text-white/60">{fam.descripcion[lang]}</p>
              </div>
              <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {items.map((e) => (
                  <li key={e.id} className="flex">
                    <article className="flex w-full flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.015] p-6 transition-colors hover:border-white/25">
                      <div className="flex items-start justify-between gap-3">
                        <IconTile e={e} />
                        {e.nuevo && (
                          <span className="rounded-full bg-[#F472B6]/15 px-2.5 py-1 text-xs font-semibold text-[#F9A8D4] ring-1 ring-[#F472B6]/30">{t.nuevo}</span>
                        )}
                      </div>
                      <h4 className="mt-5 text-lg font-semibold leading-snug text-white">{e.nombre[lang]}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-white/70">{e.queHace[lang]}</p>
                      <p className="mt-4 border-l-2 border-white/15 pl-3 text-sm leading-relaxed text-white/55">
                        {e.porQue[lang]}
                        {e.fuente && <span className="mt-1 block text-xs text-white/40">{e.fuente.cita}</span>}
                      </p>
                      <div className="mt-auto pt-6">
                        <button
                          id={`btn-exp-${e.id}`}
                          type="button"
                          aria-haspopup="dialog"
                          onClick={() => abrir(e.id)}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[#0A0010] transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                        >
                          <Play className="h-4 w-4" aria-hidden />
                          {t.probar}
                          <span className="sr-only">: {e.nombre[lang]}</span>
                        </button>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      <dialog
        ref={dialogRef}
        className="mx-dialog"
        aria-labelledby="exp-titulo"
        onClose={onClose}
        onKeyDown={onDialogKey}
        onMouseDown={(e) => {
          downOnBackdrop.current = e.target === dialogRef.current;
        }}
        onClick={(e) => {
          if (downOnBackdrop.current && e.target === dialogRef.current) setOpenId(null);
        }}
      >
        {exp && familia && (
          <div className="mx-panel flex h-full flex-col overflow-hidden border border-white/10 bg-[#0A0010] md:rounded-[28px]">
            <header className="flex items-center gap-3 border-b border-white/10 px-4 py-3 md:px-6">
              <IconTile e={exp} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
                  {familia.nombre[lang]} · {pos + 1} {t.de} {EXPERIENCIAS.length}
                </p>
                <h2 id="exp-titulo" ref={titleRef} tabIndex={-1} className="truncate text-lg font-bold text-white outline-none md:text-xl">
                  {exp.nombre[lang]}
                </h2>
              </div>
              <button type="button" onClick={() => mover(-1)} className={`${navBtn} max-md:hidden`} aria-label={t.anterior}>
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>
              <button type="button" onClick={() => mover(1)} className={`${navBtn} max-md:hidden`} aria-label={t.siguiente}>
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>
              <button type="button" onClick={() => setOpenId(null)} className={navBtn} aria-label={t.cerrar}>
                <X className="h-5 w-5" aria-hidden />
              </button>
            </header>

            <div ref={bodyRef} className="flex-1 overflow-y-auto overscroll-contain">
              <div className="grid gap-8 p-4 md:p-6 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
                <div className="min-w-0">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#C084FC]">
                    {t.demoDe}: {PROGRAMA[lang]}
                  </p>
                  {Demo && <Demo key={exp.id} lang={lang} variante={exp.variante} />}
                </div>
                <aside className="min-w-0 space-y-6 text-sm leading-relaxed">
                  <p className="text-base leading-relaxed text-white/80">{exp.queHace[lang]}</p>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">{t.ejemplo}</h3>
                    <p className="mt-2 text-white/70">{exp.ejemplo[lang]}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">{exp.fuente ? t.porQue : t.sinFuente}</h3>
                    <p className="mt-2 text-white/70">{exp.porQue[lang]}</p>
                    {exp.fuente && (
                      <a
                        href={exp.fuente.url}
                        target="_blank"
                        rel="noopener"
                        className="mt-2 inline-flex items-center gap-1 text-xs text-[#C4B5FD] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC]"
                      >
                        {exp.fuente.cita}
                        <ArrowRight className="h-3 w-3 -rotate-45" aria-hidden />
                      </a>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">{t.captura}</h3>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {exp.captura.map((d) => (
                        <li key={d} className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-xs text-white/75">
                          {DATOS[d][lang]}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={t.quoteHref}
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC]"
                  >
                    {t.cotizar} <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                </aside>
              </div>

              {exp.referencias && exp.referencias.length > 0 && (
                <section className="border-t border-white/10 p-4 md:p-6" aria-labelledby="exp-refs">
                  <h3 id="exp-refs" className="text-base font-semibold text-white">{t.referencias}</h3>
                  <p className="mt-1 max-w-3xl text-sm text-white/55">{t.referenciasNota}</p>
                  <div className="mt-5 grid gap-5 md:grid-cols-2">
                    {exp.referencias.map((r) => (
                      <VideoReferencia key={r.videoId} r={r} lang={lang} />
                    ))}
                  </div>
                </section>
              )}

              <footer className="flex items-center justify-between gap-3 border-t border-white/10 p-4 md:px-6">
                <button type="button" onClick={() => mover(-1)} className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC]">
                  <ArrowLeft className="h-4 w-4" aria-hidden />
                  {EXPERIENCIAS[(pos - 1 + EXPERIENCIAS.length) % EXPERIENCIAS.length].nombre[lang]}
                </button>
                <button type="button" onClick={() => mover(1)} className="inline-flex items-center gap-2 text-right text-sm text-white/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC]">
                  {EXPERIENCIAS[(pos + 1) % EXPERIENCIAS.length].nombre[lang]}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </button>
              </footer>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}
