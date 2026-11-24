"use client";

import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { Plus, X } from "lucide-react";
import { cls, DemoShell, type DemoProps } from "./ui";

type Hot = { id: string; x: number; y: number; t: [string, string]; d: [string, string] };
const HOTS: Hot[] = [
  { id: "filtros", x: 82, y: 9, t: ["Filtros", "Filters"], d: ["El funcionario cambia el periodo y el tipo de impuesto. Todo el tablero se actualiza con esa selección.", "Staff change the period and the tax type. The whole dashboard updates with that selection."] },
  { id: "kpi", x: 79, y: 30, t: ["Indicador de cumplimiento", "Target achievement"], d: ["Divide el recaudo del mes entre la meta: 48.200 entre 52.000 da 92,7 %.", "Divides the month's collection by the target: 48,200 over 52,000 is 92.7%."] },
  { id: "tendencia", x: 32, y: 66, t: ["Tendencia de 12 meses", "12-month trend"], d: ["La línea continua es el recaudo real. La punteada es la meta de cada mes.", "The solid line is actual collection. The dotted line is each month's target."] },
  { id: "alerta", x: 80, y: 52, t: ["Alerta automática", "Automatic alert"], d: ["Aparece cuando un impuesto va más de 5 % por debajo de su meta. Hoy la activa el predial.", "It appears when a tax is more than 5% below its target. Today property tax triggers it."] },
];

function Tablero({ es }: { es: boolean }) {
  const real = [38, 41, 44, 40, 46, 47, 45, 49, 51, 50, 47, 48.2];
  const meta = [40, 42, 44, 44, 46, 48, 48, 50, 50, 51, 52, 52];
  const px = (i: number) => 40 + i * 30;
  const py = (v: number) => 360 - (v - 30) * 6;
  const linea = (arr: number[]) => arr.map((v, i) => `${px(i)},${py(v)}`).join(" ");
  return (
    <svg viewBox="0 0 640 400" className="block h-auto w-full" role="img" aria-label={es ? "Tablero de recaudo municipal de octubre" : "Municipal tax collection dashboard for October"}>
      <rect width="640" height="400" rx="14" fill="#0d0619" />
      <text x="24" y="40" fontSize="17" fontWeight="700" fill="#fff" fontFamily="Inter, sans-serif">{es ? "Tablero de recaudo · Octubre" : "Tax collection · October"}</text>
      <rect x="420" y="22" width="92" height="26" rx="13" fill="#1c1030" stroke="#3b2768" />
      <text x="466" y="40" fontSize="11" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontFamily="Inter, sans-serif">{es ? "Oct 2026" : "Oct 2026"}</text>
      <rect x="520" y="22" width="96" height="26" rx="13" fill="#1c1030" stroke="#3b2768" />
      <text x="568" y="40" fontSize="11" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontFamily="Inter, sans-serif">{es ? "Todos" : "All taxes"}</text>
      {[
        { x: 24, l: es ? "Recaudo del mes" : "Collected this month", v: es ? "$48.200 M" : "$48,200M" },
        { x: 230, l: es ? "Meta" : "Target", v: es ? "$52.000 M" : "$52,000M" },
        { x: 436, l: es ? "Cumplimiento" : "Achievement", v: es ? "92,7 %" : "92.7%" },
      ].map((k, i) => (
        <g key={k.x}>
          <rect x={k.x} y="66" width="180" height="78" rx="10" fill="#160b28" stroke={i === 2 ? "#F472B6" : "#2a1b48"} />
          <text x={k.x + 14} y="92" fontSize="11" fill="rgba(255,255,255,0.55)" fontFamily="Inter, sans-serif">{k.l}</text>
          <text x={k.x + 14} y="124" fontSize="24" fontWeight="700" fill="#fff" fontFamily="Inter, sans-serif">{k.v}</text>
        </g>
      ))}
      <rect x="24" y="160" width="380" height="220" rx="10" fill="#120823" />
      <polyline points={linea(meta)} fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeDasharray="5 5" />
      <polyline points={linea(real)} fill="none" stroke="#C084FC" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={px(11)} cy={py(48.2)} r="5" fill="#F472B6" />
      <rect x="420" y="160" width="196" height="220" rx="10" fill="#120823" />
      {[
        { l: es ? "Predial" : "Property", v: 0.92, c: "#F472B6" },
        { l: "ICA", v: 0.99, c: "#7C3AED" },
        { l: es ? "Otros" : "Other", v: 0.96, c: "#7C3AED" },
      ].map((b, i) => (
        <g key={b.l}>
          <text x="436" y={268 + i * 38} fontSize="11" fill="rgba(255,255,255,0.65)" fontFamily="Inter, sans-serif">{b.l}</text>
          <rect x="496" y={256 + i * 38} width="104" height="16" rx="4" fill="rgba(255,255,255,0.08)" />
          <rect x="496" y={256 + i * 38} width={104 * b.v} height="16" rx="4" fill={b.c} />
        </g>
      ))}
      <rect x="436" y="190" width="164" height="40" rx="8" fill="rgba(244,114,182,0.15)" stroke="#F472B6" />
      <text x="448" y="215" fontSize="11" fontWeight="600" fill="#F9A8D4" fontFamily="Inter, sans-serif">{es ? "Predial 8 % bajo la meta" : "Property tax 8% below target"}</text>
    </svg>
  );
}

export default function HotspotsImagen({ lang }: DemoProps) {
  const es = lang === "es";
  const L = es ? 0 : 1;
  const [open, setOpen] = useState<string | null>(null);
  const [vistos, setVistos] = useState<Set<string>>(new Set());
  const btnRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) cardRef.current?.focus();
  }, [open]);

  const abrir = (id: string) => {
    setOpen((o) => (o === id ? null : id));
    setVistos((v) => new Set(v).add(id));
  };
  const cerrar = () => {
    const id = open;
    setOpen(null);
    if (id) btnRefs.current[id]?.focus();
  };
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      cerrar();
    }
  };
  const h = HOTS.find((x) => x.id === open);
  const cardStyle = h ? ({ "--hx": h.x > 55 ? `calc(${h.x}% - 16rem)` : `calc(${h.x}% + 1.5rem)`, "--hy": `min(${h.y}%, calc(100% - 9rem))` } as CSSProperties) : undefined;

  return (
    <DemoShell
      lang={lang}
      instruction={es ? "Abre los cuatro puntos del tablero para entender qué muestra cada parte." : "Open the four points on the dashboard to understand what each part shows."}
      onReset={() => {
        setOpen(null);
        setVistos(new Set());
      }}
    >
      <div className={`${cls.stage} p-2`}>
        <div className="relative">
          <Tablero es={es} />
          {HOTS.map((p, i) => (
            <button
              key={p.id}
              ref={(el) => {
                btnRefs.current[p.id] = el;
              }}
              type="button"
              onClick={() => abrir(p.id)}
              aria-expanded={open === p.id}
              aria-controls={`hot-${p.id}`}
              aria-label={`${i + 1}. ${p.t[L]}`}
              className={`absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 text-white shadow-[0_0_0_6px_rgba(124,58,237,0.25)] transition-transform hover:scale-110 motion-reduce:transition-none ${
                open === p.id ? "rotate-45 border-white bg-[#F472B6]" : vistos.has(p.id) ? "border-white/70 bg-[#6D28D9]" : "border-white bg-[#7C3AED]"
              } ${cls.focus}`}
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
            >
              <Plus className="h-4 w-4 motion-safe:transition-transform" aria-hidden />
            </button>
          ))}
          {h && (
            <div
              id={`hot-${h.id}`}
              ref={cardRef}
              tabIndex={-1}
              onKeyDown={onKey}
              role="region"
              aria-label={h.t[L]}
              style={cardStyle}
              className="absolute inset-x-2 bottom-2 z-10 rounded-2xl border border-white/15 bg-[#14062a]/95 p-4 shadow-2xl focus:outline-none sm:inset-x-auto sm:bottom-auto sm:w-64 sm:[left:var(--hx)] sm:[top:var(--hy)]"
            >
              <div className="flex items-start justify-between gap-2">
                <p className="font-semibold text-white">{h.t[L]}</p>
                <button type="button" onClick={cerrar} className={`-m-1 rounded p-1 text-white/60 hover:text-white ${cls.focus}`} aria-label={es ? "Cerrar" : "Close"}>
                  <X className="h-4 w-4" aria-hidden />
                </button>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-white/75">{h.d[L]}</p>
            </div>
          )}
        </div>
      </div>
      <p className="text-xs text-white/50" aria-live="polite">
        {es ? `Puntos abiertos: ${vistos.size} de 4` : `Points opened: ${vistos.size} of 4`}
      </p>
    </DemoShell>
  );
}
