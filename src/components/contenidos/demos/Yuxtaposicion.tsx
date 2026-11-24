"use client";

import { useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { DemoShell, type DemoProps } from "./ui";

const DATOS: { es: string; en: string; v: number }[] = [
  { es: "Urgencias", en: "Emergency", v: 34 },
  { es: "Consulta externa", en: "Outpatient", v: 27 },
  { es: "Hospitalización", en: "Inpatient", v: 14 },
  { es: "Laboratorio", en: "Lab", v: 10 },
  { es: "Imágenes", en: "Imaging", v: 7 },
  { es: "Odontología", en: "Dental", v: 5 },
  { es: "Otros", en: "Other", v: 3 },
];
const COLORES = ["#7C3AED", "#F472B6", "#C084FC", "#f4a27a", "#3b82f6", "#9ca3af", "#DB2777"];

function arco(cx: number, cy: number, r: number, a0: number, a1: number) {
  const p = (a: number) => [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  const [x0, y0] = p(a0);
  const [x1, y1] = p(a1);
  return `M ${cx} ${cy} L ${x0} ${y0} A ${r} ${r} 0 ${a1 - a0 > Math.PI ? 1 : 0} 1 ${x1} ${y1} Z`;
}

function Antes({ es }: { es: boolean }) {
  let a = -Math.PI / 2;
  return (
    <svg viewBox="0 0 600 340" className="block h-full w-full" aria-hidden>
      <rect width="600" height="340" fill="#120823" />
      <text x="24" y="38" fontSize="15" fontWeight="700" fill="rgba(255,255,255,0.8)" fontFamily="Inter, sans-serif" letterSpacing="1">
        {es ? "ATENCIONES POR SERVICIO (%)" : "PATIENT VISITS BY UNIT (%)"}
      </text>
      <ellipse cx="190" cy="206" rx="118" ry="112" fill="rgba(0,0,0,0.5)" />
      {DATOS.map((d, i) => {
        const a1 = a + (d.v / 100) * Math.PI * 2;
        const path = arco(180, 194, 112, a, a1);
        a = a1;
        return <path key={d.es} d={path} fill={COLORES[i]} stroke="#120823" strokeWidth="2" />;
      })}
      {DATOS.map((d, i) => (
        <g key={d.es} transform={`translate(340 ${78 + i * 34})`}>
          <rect width="16" height="16" rx="3" fill={COLORES[i]} />
          <text x="26" y="13" fontSize="13" fill="rgba(255,255,255,0.65)" fontFamily="Inter, sans-serif">
            {es ? d.es : d.en}
          </text>
        </g>
      ))}
    </svg>
  );
}

function Despues({ es }: { es: boolean }) {
  return (
    <svg viewBox="0 0 600 340" className="block h-full w-full" aria-hidden>
      <rect width="600" height="340" fill="#0b0517" />
      <text x="24" y="38" fontSize="16" fontWeight="700" fill="#fff" fontFamily="Inter, sans-serif">
        {es ? "Urgencias concentra el 34 % de las atenciones del mes" : "Emergency accounts for 34% of this month's visits"}
      </text>
      {DATOS.map((d, i) => {
        const w = (d.v / 34) * 330;
        const y = 70 + i * 36;
        return (
          <g key={d.es}>
            <text x="170" y={y + 17} fontSize="13" textAnchor="end" fill={i === 0 ? "#fff" : "rgba(255,255,255,0.6)"} fontWeight={i === 0 ? 700 : 400} fontFamily="Inter, sans-serif">
              {es ? d.es : d.en}
            </text>
            <rect x="182" y={y} width={w} height="24" rx="5" fill={i === 0 ? "#F472B6" : "rgba(192,132,252,0.35)"} />
            <text x={188 + w} y={y + 17} fontSize="13" fontWeight="600" fill={i === 0 ? "#F9A8D4" : "rgba(255,255,255,0.6)"} fontFamily="Inter, sans-serif">
              {d.v} %
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function Yuxtaposicion({ lang }: DemoProps) {
  const es = lang === "es";
  const [v, setV] = useState(50);
  return (
    <DemoShell
      lang={lang}
      instruction={es ? "Mueve el deslizador para comparar el mismo informe antes y después de aplicar las reglas de visualización del módulo 3." : "Move the slider to compare the same report before and after applying the visualization rules from module 3."}
      onReset={() => setV(50)}
    >
      <div className="relative aspect-[60/34] w-full select-none overflow-hidden rounded-2xl border border-white/10">
        <div className="absolute inset-0">
          <Antes es={es} />
        </div>
        <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${v}%)` }}>
          <Despues es={es} />
        </div>
        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/70 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/80">{es ? "Antes" : "Before"}</span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-[#7C3AED]/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">{es ? "Después" : "After"}</span>
        <input
          type="range"
          min={0}
          max={100}
          value={v}
          onChange={(e) => setV(Number(e.target.value))}
          aria-label={es ? "Comparar antes y después" : "Compare before and after"}
          aria-valuetext={es ? `${v} % del informe original visible` : `${v}% of the original report visible`}
          className="peer absolute inset-0 z-10 h-full w-full cursor-ew-resize opacity-0"
        />
        <div className="pointer-events-none absolute inset-y-0 z-0 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)] peer-focus-visible:bg-[#C084FC]" style={{ left: `${v}%` }}>
          <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[#0A0010] text-white shadow-xl">
            <MoveHorizontal className="h-4 w-4" aria-hidden />
          </span>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-white/65">
        {es
          ? "El rediseño ordena los servicios de mayor a menor, quita la leyenda, pone el dato junto a cada barra y usa el título para decir el hallazgo."
          : "The redesign sorts units from largest to smallest, drops the legend, puts the value next to each bar and uses the title to state the finding."}
      </p>
    </DemoShell>
  );
}
