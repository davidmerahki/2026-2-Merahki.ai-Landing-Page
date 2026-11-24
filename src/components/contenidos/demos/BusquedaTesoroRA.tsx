"use client";

import { useEffect, useRef, useState, type FocusEvent, type KeyboardEvent, type PointerEvent as RPointerEvent } from "react";
import { Check, ScanLine, X } from "lucide-react";
import { cls, DemoShell, type DemoProps } from "./ui";

const SW = 760;
const SH = 640;
const VW = 256;
const VH = 452;

type Marcador = {
  id: string;
  x: number;
  y: number;
  titulo: [string, string];
  valor: [string, string];
  texto: [string, string];
  serie: number[];
};

const MARCADORES: Marcador[] = [
  {
    id: "estante",
    x: 180,
    y: 250,
    titulo: ["Rotación de inventario", "Inventory turnover"],
    valor: ["4,2 veces al mes", "4.2 times a month"],
    texto: ["Cada producto de este estante se repone, en promedio, cada 7 días.", "Each product on this shelf is restocked about every 7 days."],
    serie: [3.1, 3.6, 3.9, 4.2],
  },
  {
    id: "nevera",
    x: 575,
    y: 225,
    titulo: ["Temperatura de la nevera", "Refrigerator temperature"],
    valor: ["4,8 °C · rango 2 a 8 °C", "4.8 °C · range 2 to 8 °C"],
    texto: ["El sensor envía una lectura cada 15 minutos. Fuera de rango, avisa al regente de farmacia.", "The sensor sends a reading every 15 minutes. Out of range, it alerts the head pharmacist."],
    serie: [5.1, 4.6, 4.9, 4.8],
  },
  {
    id: "mostrador",
    x: 395,
    y: 505,
    titulo: ["Registro de dispensación", "Dispensing log"],
    valor: ["312 entregas hoy", "312 deliveries today"],
    texto: ["Cada entrega queda asociada a una fórmula médica y a un paciente.", "Each delivery is linked to a prescription and a patient."],
    serie: [240, 288, 301, 312],
  },
];

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

function Farmacia() {
  return (
    <svg viewBox={`0 0 ${SW} ${SH}`} width={SW} height={SH} className="block" aria-hidden>
      <defs>
        <linearGradient id="ra-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2b2340" />
          <stop offset="1" stopColor="#191226" />
        </linearGradient>
      </defs>
      <rect width={SW} height="420" fill="url(#ra-wall)" />
      <rect y="420" width={SW} height={SH - 420} fill="#120d1c" />
      {/* Estante con cajas de medicamentos */}
      <rect x="60" y="120" width="250" height="300" fill="#3a2f52" />
      {[0, 1, 2, 3].map((r) => (
        <g key={r}>
          <rect x="60" y={190 + r * 70} width="250" height="8" fill="#4d4070" />
          {[0, 1, 2, 3, 4, 5].map((c) => (
            <rect key={c} x={72 + c * 39} y={150 + r * 70} width="30" height="40" rx="3" fill={["#e9e3f5", "#c4b5fd", "#f9a8d4", "#ddd6fe"][(r + c) % 4]} opacity="0.85" />
          ))}
        </g>
      ))}
      {/* Nevera */}
      <rect x="470" y="90" width="210" height="330" rx="10" fill="#d9d3e6" />
      <rect x="482" y="104" width="186" height="300" rx="6" fill="#a99fc0" />
      {[0, 1, 2].map((r) => (
        <rect key={r} x="490" y={170 + r * 80} width="170" height="5" fill="#ece8f4" opacity="0.7" />
      ))}
      <rect x="650" y="210" width="8" height="70" rx="4" fill="#ece8f4" />
      <rect x="500" y="118" width="62" height="26" rx="4" fill="#1a1426" />
      <text x="531" y="136" fontSize="14" fontWeight="700" textAnchor="middle" fill="#34d399" fontFamily="Inter, sans-serif">4.8°</text>
      {/* Mostrador */}
      <rect x="180" y="470" width="470" height="120" rx="8" fill="#4b3a6e" />
      <rect x="180" y="460" width="470" height="18" rx="6" fill="#5d4a86" />
      <rect x="440" y="395" width="110" height="68" rx="6" fill="#0b0814" stroke="#6b5a92" strokeWidth="4" />
      <rect x="452" y="407" width="86" height="44" rx="3" fill="#221a36" />
      <rect x="485" y="463" width="20" height="8" fill="#6b5a92" />
      {/* Letrero */}
      <rect x="300" y="30" width="160" height="40" rx="8" fill="#1a1426" stroke="#7C3AED" strokeWidth="2" />
      <text x="380" y="57" fontSize="18" fontWeight="700" textAnchor="middle" fill="#e9d5ff" fontFamily="Inter, sans-serif">FARMACIA</text>
    </svg>
  );
}

/** Marcador impreso estilo código visual. */
function Glifo({ seed }: { seed: number }) {
  const cells = Array.from({ length: 16 }, (_, i) => ((i * 7 + seed * 5) % 3 === 0 ? 1 : 0));
  return (
    <span className="grid h-full w-full grid-cols-4 gap-[2px] rounded-[3px] bg-white p-[3px]" aria-hidden>
      {cells.map((c, i) => (
        <span key={i} className={c || i === 0 || i === 3 || i === 12 ? "bg-[#0A0010]" : "bg-white"} />
      ))}
    </span>
  );
}

export default function BusquedaTesoroRA({ lang }: DemoProps) {
  const es = lang === "es";
  const L = es ? 0 : 1;
  const [o, setO] = useState({ x: (SW - VW) / 2, y: (SH - VH) / 2 });
  const [escaneando, setEscaneando] = useState<string | null>(null);
  const [abierto, setAbierto] = useState<string | null>(null);
  const [hallados, setHallados] = useState<Set<string>>(new Set());
  const [arrastrando, setArrastrando] = useState(false);
  const drag = useRef<{ x: number; y: number; ox: number; oy: number; pid: number; on: boolean } | null>(null);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const mover = (x: number, y: number) => setO({ x: clamp(x, 0, SW - VW), y: clamp(y, 0, SH - VH) });
  const centrar = (m: Marcador) => mover(m.x - VW / 2, m.y - VH / 2);

  const escanear = (m: Marcador) => {
    if (escaneando) return;
    centrar(m);
    setAbierto(null);
    setEscaneando(m.id);
    timer.current = window.setTimeout(() => {
      setEscaneando(null);
      setAbierto(m.id);
      setHallados((h) => new Set(h).add(m.id));
    }, 900);
  };

  const onDown = (e: RPointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    drag.current = { x: e.clientX, y: e.clientY, ox: o.x, oy: o.y, pid: e.pointerId, on: false };
  };
  const onMove = (e: RPointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d || d.pid !== e.pointerId) return;
    const dx = e.clientX - d.x;
    const dy = e.clientY - d.y;
    if (!d.on && Math.hypot(dx, dy) > 4) {
      d.on = true;
      setArrastrando(true);
      e.currentTarget.setPointerCapture(e.pointerId);
    }
    if (d.on) mover(d.ox - dx, d.oy - dy);
  };
  const onUp = () => {
    drag.current = null;
    setArrastrando(false);
  };
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const step = 40;
    const map: Record<string, [number, number]> = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] };
    const v = map[e.key];
    if (v) {
      e.preventDefault();
      mover(o.x + v[0], o.y + v[1]);
    }
  };
  const reset = () => {
    window.clearTimeout(timer.current);
    setHallados(new Set());
    setAbierto(null);
    setEscaneando(null);
    setO({ x: (SW - VW) / 2, y: (SH - VH) / 2 });
  };

  const m = MARCADORES.find((x) => x.id === abierto);

  return (
    <DemoShell
      lang={lang}
      instruction={es ? "Mueve la cámara del celular por la farmacia (arrastra o usa las flechas) y toca los 3 marcadores para ver los datos de cada punto." : "Move the phone camera around the pharmacy (drag or use the arrow keys) and tap the 3 markers to see the data at each point."}
      onReset={reset}
    >
      <div className={`${cls.stage} flex flex-col items-center gap-4 p-4 sm:flex-row sm:items-start sm:justify-center sm:gap-6`}>
        {/* Teléfono */}
        <div className="relative shrink-0 rounded-[40px] border border-white/20 bg-[#05020a] p-2 shadow-[0_30px_80px_rgba(124,58,237,0.25)]">
          <div
            className={`relative overflow-hidden rounded-[32px] ${cls.focus} cursor-grab touch-none select-none active:cursor-grabbing`}
            style={{ width: VW, height: VH }}
            tabIndex={0}
            role="group"
            aria-roledescription={es ? "cámara de realidad aumentada" : "augmented reality camera"}
            aria-label={es ? "Vista de la cámara en la farmacia. Usa las flechas para mover la cámara." : "Camera view of the pharmacy. Use the arrow keys to move the camera."}
            onPointerDown={onDown}
            onPointerMove={onMove}
            onPointerUp={onUp}
            onPointerCancel={onUp}
            onKeyDown={onKey}
          >
            <div className={`absolute left-0 top-0 ${arrastrando ? "" : "motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out"}`} style={{ transform: `translate(${-o.x}px, ${-o.y}px)` }}>
              <div className="mx-shake">
                <Farmacia />
              </div>
              {MARCADORES.map((mk, i) => {
                const sx = mk.x - o.x;
                const sy = mk.y - o.y;
                const cerca = Math.hypot(sx - VW / 2, sy - VH / 2) < 90;
                const ok = hallados.has(mk.id);
                return (
                  <button
                    key={mk.id}
                    type="button"
                    onClick={() => escanear(mk)}
                    onFocus={(e: FocusEvent<HTMLButtonElement>) => {
                      if (e.currentTarget.matches(":focus-visible")) centrar(mk);
                    }}
                    className={`absolute h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-md p-1 ${cls.focus}`}
                    style={{ left: mk.x, top: mk.y }}
                    aria-label={`${es ? "Marcador" : "Marker"} ${i + 1}${ok ? (es ? ", escaneado" : ", scanned") : ""}`}
                  >
                    <Glifo seed={i + 1} />
                    {(cerca || ok) && (
                      <span className={`pointer-events-none absolute -inset-2 rounded-lg border-2 ${ok ? "border-emerald-300" : "border-[#F472B6] motion-safe:animate-pulse"}`} aria-hidden />
                    )}
                  </button>
                );
              })}
            </div>
            {/* Grano de cámara y retícula */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-overlay [background-image:repeating-radial-gradient(circle_at_17%_32%,#fff_0,#fff_0.5px,transparent_1px,transparent_3px)]" aria-hidden />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2" aria-hidden>
              {["left-0 top-0 border-l-2 border-t-2", "right-0 top-0 border-r-2 border-t-2", "bottom-0 left-0 border-b-2 border-l-2", "bottom-0 right-0 border-b-2 border-r-2"].map((c) => (
                <span key={c} className={`absolute h-5 w-5 rounded-[3px] border-white/80 ${c}`} />
              ))}
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between bg-gradient-to-b from-black/70 to-transparent px-5 pb-6 pt-3 text-[11px] font-semibold text-white">
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#F472B6] motion-safe:animate-pulse" aria-hidden />RA · {es ? "Farmacia" : "Pharmacy"}</span>
              <span aria-live="polite">{hallados.size}/3</span>
            </div>
            {escaneando && (
              <div className="pointer-events-none absolute inset-x-6 bottom-6 flex items-center gap-2 rounded-full bg-black/75 px-4 py-2 text-xs text-white" role="status">
                <ScanLine className="h-4 w-4 text-[#C084FC] motion-safe:animate-pulse" aria-hidden />
                {es ? "Escaneando marcador…" : "Scanning marker…"}
              </div>
            )}
            {m && (
              <div className="absolute inset-x-3 bottom-4 [perspective:700px]">
                <div className="mx-float rounded-2xl border border-[#C084FC]/50 bg-[#12051f]/90 p-3 shadow-[0_20px_50px_rgba(124,58,237,0.45)] [transform:rotateX(8deg)]" role="dialog" aria-label={m.titulo[L]}>
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#C084FC]">{m.titulo[L]}</p>
                    <button type="button" onClick={() => setAbierto(null)} className={`-m-1 rounded p-1 text-white/60 hover:text-white ${cls.focus}`} aria-label={es ? "Cerrar" : "Close"}>
                      <X className="h-3.5 w-3.5" aria-hidden />
                    </button>
                  </div>
                  <p className="mt-1 text-lg font-bold leading-tight text-white">{m.valor[L]}</p>
                  <div className="mt-2 flex h-10 items-end gap-1.5" aria-hidden>
                    {m.serie.map((v, i) => (
                      <span key={i} className="flex-1 rounded-t bg-gradient-to-t from-[#7C3AED] to-[#F472B6]" style={{ height: `${(v / Math.max(...m.serie)) * 100}%`, opacity: 0.5 + i * 0.16 }} />
                    ))}
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-white/75">{m.texto[L]}</p>
                </div>
              </div>
            )}
          </div>
          <span className="pointer-events-none absolute left-1/2 top-3 h-5 w-20 -translate-x-1/2 rounded-full bg-black" aria-hidden />
        </div>

        {/* Lista de hallazgos */}
        <ol className="w-full max-w-[240px] space-y-2 text-sm">
          {MARCADORES.map((mk, i) => {
            const ok = hallados.has(mk.id);
            return (
              <li key={mk.id} className={`flex items-center gap-2 rounded-xl border px-3 py-2 ${ok ? "border-emerald-400/40 bg-emerald-400/10 text-white" : "border-white/10 text-white/45"}`}>
                <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${ok ? "bg-emerald-400 text-[#0A0010]" : "bg-white/10"}`}>
                  {ok ? <Check className="h-3 w-3" aria-hidden /> : i + 1}
                </span>
                {ok ? mk.titulo[L] : es ? "Marcador sin escanear" : "Marker not scanned"}
              </li>
            );
          })}
          {hallados.size === 3 && (
            <li className="pt-1 text-xs leading-relaxed text-emerald-200" role="status">
              {es ? "Completaste la búsqueda. Cada escaneo quedó registrado con hora y orden." : "Hunt complete. Each scan was recorded with time and order."}
            </li>
          )}
        </ol>
      </div>
    </DemoShell>
  );
}
