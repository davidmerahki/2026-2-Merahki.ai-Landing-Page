"use client";

import { memo, useEffect, useRef, useState, type FocusEvent, type KeyboardEvent, type PointerEvent as RPointerEvent } from "react";
import { ChevronLeft, ChevronRight, Compass, Plus, X, Check } from "lucide-react";
import { cls, useEventLog, EventLog, DemoShell, useReducedMotion, type DemoProps } from "./ui";

const H = 320;
const W = H * 4; // panorama de 1600×400 escalado
const S = W / 1600;

type Punto = { id: string; x: number; y: number; dato: boolean; titulo: [string, string]; texto: [string, string] };
const PUNTOS: Punto[] = [
  {
    id: "tablero",
    x: 600,
    y: 150,
    dato: true,
    titulo: ["Tablero de OEE en tiempo real", "Real-time OEE board"],
    texto: [
      "Muestra la eficiencia general de los equipos del turno. Hoy va en 78 % y la meta es 85 %.",
      "Shows the shift's overall equipment effectiveness. Today it is at 78% and the target is 85%.",
    ],
  },
  {
    id: "sensor",
    x: 1010,
    y: 215,
    dato: true,
    titulo: ["Sensor de temperatura de la línea 2", "Line 2 temperature sensor"],
    texto: [
      "Envía una lectura cada 10 segundos al sistema de la planta. Si pasa de 80 °C, genera una alerta.",
      "Sends a reading every 10 seconds to the plant system. Above 80 °C it triggers an alert.",
    ],
  },
  {
    id: "registro",
    x: 1385,
    y: 262,
    dato: true,
    titulo: ["Registro manual de paros", "Manual downtime log"],
    texto: [
      "El supervisor anota a mano cada paro y su causa. Es la fuente con más errores de la sala.",
      "The supervisor writes down every stop and its cause by hand. It is the most error-prone source in the room.",
    ],
  },
  {
    id: "extintor",
    x: 255,
    y: 270,
    dato: false,
    titulo: ["Extintor", "Fire extinguisher"],
    texto: ["Este punto no registra ni muestra datos de producción. Sigue buscando.", "This point does not record or show production data. Keep looking."],
  },
];

const Escena = memo(function Escena({ k }: { k: number }) {
  return (
    <svg viewBox="0 0 1600 400" width={W} height={H} className="block shrink-0" aria-hidden preserveAspectRatio="none">
      <defs>
        <linearGradient id={`p360-wall-${k}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1d1238" />
          <stop offset="1" stopColor="#0e0720" />
        </linearGradient>
        <linearGradient id={`p360-floor-${k}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#140a26" />
          <stop offset="1" stopColor="#05020b" />
        </linearGradient>
        <linearGradient id={`p360-win-${k}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2a1b55" />
          <stop offset="1" stopColor="#3b1f6e" />
        </linearGradient>
        <radialGradient id={`p360-lamp-${k}`} cx="0.5" cy="0" r="0.8">
          <stop offset="0" stopColor="#C084FC" stopOpacity="0.35" />
          <stop offset="1" stopColor="#C084FC" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1600" height="300" fill={`url(#p360-wall-${k})`} />
      <rect y="300" width="1600" height="100" fill={`url(#p360-floor-${k})`} />
      {Array.from({ length: 17 }).map((_, i) => (
        <line key={i} x1={i * 100} y1="300" x2={i * 100 + (i * 100 - 800) * 0.25} y2="400" stroke="rgba(192,132,252,0.08)" />
      ))}
      <line x1="0" y1="300" x2="1600" y2="300" stroke="rgba(255,255,255,0.12)" />
      {/* Lámparas */}
      {[200, 600, 1000, 1400].map((x) => (
        <g key={x}>
          <rect x={x - 50} y="0" width="100" height="6" fill="#2d1d4f" />
          <ellipse cx={x} cy="10" rx="160" ry="140" fill={`url(#p360-lamp-${k})`} />
        </g>
      ))}
      {/* Ventana hacia la línea de producción */}
      <rect x="40" y="70" width="320" height="170" rx="6" fill={`url(#p360-win-${k})`} stroke="#4c3380" strokeWidth="4" />
      <line x1="200" y1="70" x2="200" y2="240" stroke="#4c3380" strokeWidth="4" />
      {[70, 150, 230, 290].map((x, i) => (
        <g key={x}>
          <rect x={x} y={170 - i * 6} width="50" height={60 + i * 6} fill="#120a24" />
          <rect x={x + 8} y={180 - i * 6} width="10" height="6" fill={i % 2 ? "#F472B6" : "#C084FC"} opacity="0.8" />
        </g>
      ))}
      <rect x="40" y="226" width="320" height="8" fill="#0a0517" />
      {/* Extintor */}
      <rect x="240" y="248" width="30" height="52" rx="8" fill="#b4234f" />
      <rect x="248" y="240" width="14" height="10" fill="#3a3a48" />
      {/* Pantalla de OEE */}
      <rect x="450" y="60" width="300" height="180" rx="10" fill="#07030f" stroke="#3b2768" strokeWidth="6" />
      <text x="470" y="92" fontSize="16" fill="rgba(255,255,255,0.7)" fontFamily="Inter, sans-serif">OEE · Turno A</text>
      <path d="M 520 190 A 60 60 0 0 1 640 190" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="14" />
      <path d="M 520 190 A 60 60 0 0 1 627 157" fill="none" stroke="#F472B6" strokeWidth="14" />
      <text x="580" y="188" fontSize="26" fontWeight="700" textAnchor="middle" fill="#fff" fontFamily="Inter, sans-serif">78%</text>
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={672 + i * 14} y={200 - (30 + ((i * 17) % 50))} width="9" height={30 + ((i * 17) % 50)} fill="#7C3AED" />
      ))}
      <rect x="590" y="240" width="20" height="60" fill="#1f1438" />
      {/* Línea 2 con sensor */}
      <rect x="840" y="170" width="340" height="130" rx="8" fill="#1a1030" stroke="#33215c" strokeWidth="3" />
      <rect x="860" y="190" width="120" height="70" rx="4" fill="#0d0719" />
      <circle cx="920" cy="225" r="24" fill="none" stroke="#4c3380" strokeWidth="6" />
      <rect x="1000" y="190" width="160" height="16" rx="3" fill="#2a1b4a" />
      <rect x="990" y="200" width="40" height="30" rx="5" fill="#0d0719" stroke="#C084FC" strokeWidth="2" />
      <circle cx="1022" cy="208" r="3" fill="#34d399" />
      <rect x="840" y="300" width="340" height="10" fill="#0a0517" />
      <text x="860" y="285" fontSize="13" fill="rgba(255,255,255,0.45)" fontFamily="Inter, sans-serif">LÍNEA 2</text>
      {/* Escritorio con registro */}
      <rect x="1270" y="240" width="250" height="14" rx="3" fill="#2d1d4f" />
      <rect x="1290" y="254" width="10" height="46" fill="#22163d" />
      <rect x="1490" y="254" width="10" height="46" fill="#22163d" />
      <rect x="1360" y="222" width="54" height="22" rx="2" fill="#e9e3f5" transform="rotate(-6 1387 233)" />
      {[0, 1, 2].map((i) => (
        <line key={i} x1="1366" y1={229 + i * 5} x2="1404" y2={225 + i * 5} stroke="#7C3AED" strokeWidth="1.5" />
      ))}
      <rect x="1440" y="190" width="60" height="50" rx="4" fill="#0d0719" stroke="#3b2768" strokeWidth="3" />
      {/* Puerta */}
      <rect x="1545" y="110" width="50" height="190" fill="#160d2a" stroke="#33215c" strokeWidth="3" />
      <rect x="1550" y="88" width="40" height="14" rx="2" fill="#10b981" opacity="0.7" />
    </svg>
  );
});

export default function Recorrido360({ lang }: DemoProps) {
  const es = lang === "es";
  const L = es ? 0 : 1;
  const reduced = useReducedMotion();
  const [offset, setOffset] = useState(W * 0.3);
  const [touched, setTouched] = useState(false);
  const [abierto, setAbierto] = useState<Punto | null>(null);
  const [encontrados, setEncontrados] = useState<Set<string>>(new Set());
  const viewRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; o: number; pid: number; on: boolean } | null>(null);
  const { events, log, clear } = useEventLog();

  // Giro lento automático hasta la primera interacción (no con movimiento reducido)
  useEffect(() => {
    if (touched || reduced) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      setOffset((o) => o + ((now - last) / 1000) * 14);
      last = now;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [touched, reduced]);

  const x = ((offset % W) + W) % W;
  const grados = Math.round((x / W) * 360);
  const datos = PUNTOS.filter((p) => p.dato);
  const n = datos.filter((p) => encontrados.has(p.id)).length;

  const onDown = (e: RPointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    setTouched(true);
    drag.current = { x: e.clientX, o: offset, pid: e.pointerId, on: false };
  };
  const onMove = (e: RPointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d || d.pid !== e.pointerId) return;
    const dx = e.clientX - d.x;
    if (!d.on && Math.abs(dx) > 4) {
      d.on = true;
      e.currentTarget.setPointerCapture(e.pointerId);
    }
    if (d.on) setOffset(d.o - dx);
  };
  const onUp = () => {
    drag.current = null;
  };
  const panBy = (dx: number) => {
    setTouched(true);
    setOffset((o) => o + dx);
  };
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); panBy(-90); }
    if (e.key === "ArrowRight") { e.preventDefault(); panBy(90); }
  };
  const centrar = (p: Punto) => {
    setTouched(true);
    const vw = viewRef.current?.clientWidth ?? 600;
    setOffset(p.x * S - vw / 2);
  };
  const abrir = (p: Punto) => {
    setTouched(true);
    setAbierto(p);
    log("interacted", `${es ? "Punto" : "Point"}: ${p.titulo[L]}`);
    if (p.dato && !encontrados.has(p.id)) {
      const next = new Set(encontrados).add(p.id);
      setEncontrados(next);
      if (datos.every((d) => next.has(d.id))) log("completed", `${es ? "Recorrido" : "Tour"} · 3/3`);
    }
  };
  const reset = () => {
    setEncontrados(new Set());
    setAbierto(null);
    setOffset(W * 0.3);
    setTouched(false);
    clear();
  };

  return (
    <DemoShell
      lang={lang}
      instruction={es ? "Arrastra la imagen para girar la vista y encuentra los 3 puntos de la sala de control donde se registran o se muestran datos de producción." : "Drag the image to turn around and find the 3 points in the control room where production data is recorded or shown."}
      onReset={reset}
    >
      <div
        ref={viewRef}
        className={`${cls.stage} relative h-[320px] cursor-grab touch-pan-y select-none active:cursor-grabbing ${cls.focus}`}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        onKeyDown={onKey}
        tabIndex={0}
        role="group"
        aria-roledescription={es ? "panorama 360°" : "360° panorama"}
        aria-label={es ? "Sala de control de la planta. Usa las flechas izquierda y derecha para girar." : "Plant control room. Use the left and right arrow keys to turn."}
      >
        <div className="absolute left-0 top-0 flex will-change-transform" style={{ transform: `translateX(${-x}px)`, width: W * 2 }}>
          <Escena k={0} />
          <Escena k={1} />
          {[0, 1].map((copia) =>
            PUNTOS.map((p) => {
              const found = encontrados.has(p.id);
              return (
                <button
                  key={`${copia}-${p.id}`}
                  type="button"
                  data-hotspot
                  tabIndex={copia === 0 ? 0 : -1}
                  aria-hidden={copia === 1 ? true : undefined}
                  onFocus={copia === 0 ? (e: FocusEvent<HTMLButtonElement>) => { if (e.currentTarget.matches(":focus-visible")) centrar(p); } : undefined}
                  onClick={() => abrir(p)}
                  className={`absolute flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 text-white shadow-[0_0_24px_rgba(192,132,252,0.6)] transition-transform hover:scale-110 motion-reduce:transition-none ${
                    found ? "border-emerald-300 bg-emerald-500/80" : "border-white/80 bg-[#7C3AED]/80"
                  } ${cls.focus}`}
                  style={{ left: copia * W + p.x * S, top: p.y * S }}
                  aria-label={`${p.titulo[L]}${found ? (es ? ", encontrado" : ", found") : ""}`}
                >
                  {!found && <span className="absolute inset-0 rounded-full border-2 border-white/60 motion-safe:animate-ping" aria-hidden />}
                  {found ? <Check className="h-4 w-4" aria-hidden /> : <Plus className="h-4 w-4" aria-hidden />}
                </button>
              );
            }),
          )}
        </div>
        {/* Viñeta para dar sensación de curvatura */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.65)_100%)]" aria-hidden />

        <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 text-xs text-white/80">
          <Compass className="h-3.5 w-3.5 text-[#C084FC]" aria-hidden style={{ transform: `rotate(${grados}deg)` }} />
          <span className="tabular-nums">{grados}°</span>
        </div>
        <div className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1.5 text-xs font-semibold text-white" aria-live="polite">
          {n} {es ? "de" : "of"} 3 {es ? "puntos" : "points"}
        </div>
        <div className="absolute bottom-3 left-3 flex gap-2">
          <button type="button" onClick={() => panBy(-160)} className={`rounded-full bg-black/60 p-2 text-white hover:bg-black/80 ${cls.focus}`} aria-label={es ? "Girar a la izquierda" : "Turn left"}>
            <ChevronLeft className="h-4 w-4" aria-hidden />
          </button>
          <button type="button" onClick={() => panBy(160)} className={`rounded-full bg-black/60 p-2 text-white hover:bg-black/80 ${cls.focus}`} aria-label={es ? "Girar a la derecha" : "Turn right"}>
            <ChevronRight className="h-4 w-4" aria-hidden />
          </button>
        </div>

        {abierto && (
          <div role="dialog" aria-label={abierto.titulo[L]} className="absolute inset-x-3 bottom-3 z-10 ml-auto max-w-sm rounded-2xl border border-white/15 bg-[#12051f]/95 p-4 shadow-2xl sm:inset-x-auto sm:right-3">
            <div className="flex items-start justify-between gap-3">
              <p className="font-semibold text-white">{abierto.titulo[L]}</p>
              <button type="button" onClick={() => setAbierto(null)} className={`-m-1 rounded p-1 text-white/60 hover:text-white ${cls.focus}`} aria-label={es ? "Cerrar" : "Close"}>
                <X className="h-4 w-4" aria-hidden />
              </button>
            </div>
            <p className="mt-1 text-sm leading-relaxed text-white/75">{abierto.texto[L]}</p>
            {abierto.dato && <p className="mt-2 text-xs font-semibold text-emerald-300">{es ? "Punto de datos encontrado" : "Data point found"}</p>}
          </div>
        )}
      </div>
      {n === 3 && (
        <p className="rounded-xl bg-emerald-400/10 px-3 py-2 text-sm text-emerald-200" role="status">
          {es ? "Encontraste las 3 fuentes de datos de la sala. El registro manual es el que más errores introduce al análisis." : "You found the room's 3 data sources. The manual log is the one that adds the most errors to the analysis."}
        </p>
      )}
      <EventLog lang={lang} events={events} />
    </DemoShell>
  );
}
