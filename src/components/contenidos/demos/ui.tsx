"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode, type RefObject, type PointerEvent as RPointerEvent } from "react";
import { RotateCcw, Check, X } from "lucide-react";
import type { Lang } from "@/content/contenidos/experiencias";

/** Props comunes a todas las demos del catálogo. */
export type DemoProps = { lang: Lang; variante?: string };

export const tx = (lang: Lang, es: string, en: string) => (lang === "es" ? es : en);

/** Clases compartidas (viven aquí para que Tailwind las escanee). */
export const cls = {
  btnPrimary:
    "inline-flex items-center justify-center gap-2 rounded-full bg-[#7C3AED] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#6D28D9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0010] disabled:cursor-not-allowed disabled:opacity-40",
  btnGhost:
    "inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/85 transition-colors hover:border-white/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC] disabled:cursor-not-allowed disabled:opacity-40",
  chip:
    "rounded-xl border border-white/[0.12] bg-white/[0.05] px-3 py-2 text-left text-sm text-white/90 transition-colors hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC]",
  stage: "relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.015]",
  focus: "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0010]",
};

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

/** Marco de cada demo: instrucción arriba, botón de reinicio y contenido. */
export function DemoShell({
  lang,
  instruction,
  onReset,
  children,
}: {
  lang: Lang;
  instruction: ReactNode;
  onReset?: () => void;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm leading-relaxed text-white/70">{instruction}</p>
        {onReset && (
          <button type="button" onClick={onReset} className={`${cls.btnGhost} shrink-0 px-3 py-1.5 text-xs`}>
            <RotateCcw className="h-3.5 w-3.5" aria-hidden />
            {tx(lang, "Reiniciar", "Reset")}
          </button>
        )}
      </div>
      {children}
    </div>
  );
}

/** Mensaje de retroalimentación anunciado a lectores de pantalla. */
export function Feedback({ tone, children }: { tone: "ok" | "bad" | "info" | null; children?: ReactNode }) {
  return (
    <div aria-live="polite" className="min-h-[1.5rem]">
      {tone && children && (
        <p
          className={`flex items-start gap-2 rounded-xl px-3 py-2 text-sm leading-relaxed ${
            tone === "ok"
              ? "bg-emerald-400/10 text-emerald-200"
              : tone === "bad"
                ? "bg-rose-400/10 text-rose-200"
                : "bg-[#7C3AED]/15 text-white/85"
          }`}
        >
          {tone === "ok" && <Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />}
          {tone === "bad" && <X className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />}
          <span>{children}</span>
        </p>
      )}
    </div>
  );
}

/** Registro visible de eventos (lo que la actividad enviaría como xAPI). */
export type LogEvent = { t: number; verb: string; detail: string };

export function useEventLog() {
  const start = useRef<number>(0);
  const [events, setEvents] = useState<LogEvent[]>([]);
  useEffect(() => {
    start.current = Date.now();
  }, []);
  const log = useCallback((verb: string, detail: string) => {
    const t = Math.round((Date.now() - start.current) / 1000);
    setEvents((ev) => [...ev.slice(-5), { t, verb, detail }]);
  }, []);
  const clear = useCallback(() => {
    start.current = Date.now();
    setEvents([]);
  }, []);
  return { events, log, clear };
}

const mmss = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

export function EventLog({ lang, events }: { lang: Lang; events: LogEvent[] }) {
  return (
    <div className="min-w-0 overflow-hidden rounded-xl border border-white/10 bg-black/40 p-3">
      <p className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">
        <span className="h-1.5 w-1.5 rounded-full bg-[#F472B6]" aria-hidden />
        {tx(lang, "Lo que registra esta actividad (xAPI)", "What this activity records (xAPI)")}
      </p>
      {events.length === 0 ? (
        <p className="font-mono text-xs text-white/35">{tx(lang, "Sin eventos todavía.", "No events yet.")}</p>
      ) : (
        <ol className="space-y-1 font-mono text-xs">
          {events.map((e, i) => (
            <li key={`${e.t}-${i}`} className="flex gap-3 text-white/70">
              <span className="w-9 shrink-0 text-white/35">{mmss(e.t)}</span>
              <span className="w-[86px] shrink-0 text-[#C084FC]">{e.verb}</span>
              <span className="min-w-0 flex-1 break-words">{e.detail}</span>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

/**
 * Arrastrar con puntero (mouse, dedo o lápiz) sin dependencias.
 * Las zonas de destino llevan data-zone="id". El clic simple queda libre para
 * la alternativa de teclado y toque: seleccionar el elemento y luego la zona.
 */
export function useDragPlace(containerRef: RefObject<HTMLElement>, onDrop: (id: string, zone: string | null) => void) {
  const [ghost, setGhost] = useState<{ id: string; label: string; x: number; y: number } | null>(null);
  const [over, setOver] = useState<string | null>(null);
  const st = useRef<{ id: string; label: string; sx: number; sy: number; dragging: boolean; pid: number } | null>(null);
  const suppress = useRef(false);

  const zoneAt = (x: number, y: number) => {
    const el = document.elementFromPoint(x, y) as HTMLElement | null;
    return el?.closest<HTMLElement>("[data-zone]")?.dataset.zone ?? null;
  };
  const rel = (x: number, y: number) => {
    const r = containerRef.current?.getBoundingClientRect();
    return { x: x - (r?.left ?? 0), y: y - (r?.top ?? 0) };
  };

  const bind = (id: string, label: string) => ({
    onPointerDown: (e: RPointerEvent<HTMLElement>) => {
      suppress.current = false;
      if (e.button !== 0) return;
      st.current = { id, label, sx: e.clientX, sy: e.clientY, dragging: false, pid: e.pointerId };
      e.currentTarget.setPointerCapture(e.pointerId);
    },
    onPointerMove: (e: RPointerEvent<HTMLElement>) => {
      const s = st.current;
      if (!s || s.pid !== e.pointerId) return;
      if (!s.dragging && Math.hypot(e.clientX - s.sx, e.clientY - s.sy) > 6) s.dragging = true;
      if (s.dragging) {
        setGhost({ id: s.id, label: s.label, ...rel(e.clientX, e.clientY) });
        setOver(zoneAt(e.clientX, e.clientY));
      }
    },
    onPointerUp: (e: RPointerEvent<HTMLElement>) => {
      const s = st.current;
      st.current = null;
      if (!s || !s.dragging) return;
      suppress.current = true;
      const z = zoneAt(e.clientX, e.clientY);
      setGhost(null);
      setOver(null);
      onDrop(s.id, z);
    },
    onPointerCancel: () => {
      st.current = null;
      setGhost(null);
      setOver(null);
    },
  });

  /** Devuelve true si el clic viene de un arrastre y debe ignorarse. */
  const consumeClick = () => {
    if (suppress.current) {
      suppress.current = false;
      return true;
    }
    return false;
  };

  return { ghost, over, bind, consumeClick, dragging: ghost !== null };
}

/** Ficha flotante que sigue al puntero mientras se arrastra. */
export function DragGhost({ ghost }: { ghost: { label: string; x: number; y: number } | null }) {
  if (!ghost) return null;
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute z-30 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-[#C084FC]/70 bg-[#1a0b2e] px-3 py-2 text-sm font-medium text-white shadow-[0_12px_40px_rgba(124,58,237,0.45)]"
      style={{ left: ghost.x, top: ghost.y, maxWidth: 260 }}
    >
      {ghost.label}
    </div>
  );
}

/** Anillo de puntaje. */
export function ScoreRing({ value, max, label }: { value: number; max: number; label: string }) {
  const r = 34;
  const c = 2 * Math.PI * r;
  const pct = max ? value / max : 0;
  return (
    <div className="relative h-24 w-24 shrink-0" role="img" aria-label={label}>
      <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90">
        <circle cx="40" cy="40" r={r} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="7" />
        <circle
          cx="40"
          cy="40"
          r={r}
          fill="none"
          stroke="url(#mx-score)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct)}
          className="transition-[stroke-dashoffset] duration-700 motion-reduce:transition-none"
        />
        <defs>
          <linearGradient id="mx-score" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C084FC" />
            <stop offset="100%" stopColor="#F472B6" />
          </linearGradient>
        </defs>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white">
        {value}/{max}
      </span>
    </div>
  );
}
