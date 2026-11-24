"use client";

import { useEffect, useRef, useState } from "react";
import { RotateCcw } from "lucide-react";
import { cls, DemoShell, type DemoProps } from "./ui";

type Clase = "lineas" | "barras" | "dispersion" | "torta" | "histograma" | "calor";
const NOMBRES: Record<Clase, [string, string]> = {
  lineas: ["Líneas", "Line"],
  barras: ["Barras", "Bar"],
  dispersion: ["Dispersión", "Scatter"],
  torta: ["Torta", "Pie"],
  histograma: ["Histograma", "Histogram"],
  calor: ["Mapa de calor", "Heat map"],
};
type Carta = { key: string; clase: Clase; tipo: "nombre" | "dibujo" };

function Dibujo({ c }: { c: Clase }) {
  const s = "#C084FC";
  return (
    <svg viewBox="0 0 48 36" className="h-10 w-14" aria-hidden>
      {c === "lineas" && <polyline points="3,30 13,22 22,25 32,12 45,6" fill="none" stroke={s} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />}
      {c === "barras" && [12, 22, 16, 30].map((h, i) => <rect key={i} x={4 + i * 11} y={34 - h} width="8" height={h} rx="1.5" fill={s} />)}
      {c === "dispersion" && [[6, 28], [12, 22], [18, 25], [24, 15], [30, 18], [36, 9], [42, 7]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="2.6" fill="#F472B6" />)}
      {c === "torta" && (
        <g>
          <circle cx="24" cy="18" r="14" fill="rgba(192,132,252,0.35)" />
          <path d="M24 18 L24 4 A14 14 0 0 1 37.3 22.3 Z" fill="#F472B6" />
        </g>
      )}
      {c === "histograma" && [6, 14, 24, 30, 20, 10].map((h, i) => <rect key={i} x={3 + i * 7} y={34 - h} width="7" height={h} fill={s} stroke="#12051f" strokeWidth="1" />)}
      {c === "calor" &&
        Array.from({ length: 12 }).map((_, i) => (
          <rect key={i} x={4 + (i % 4) * 10.5} y={3 + Math.floor(i / 4) * 10.5} width="9.5" height="9.5" rx="1.5" fill="#F472B6" opacity={0.2 + ((i * 37) % 80) / 100} />
        ))}
    </svg>
  );
}

const barajar = (): Carta[] => {
  const cartas: Carta[] = (Object.keys(NOMBRES) as Clase[]).flatMap((c) => [
    { key: `${c}-n`, clase: c, tipo: "nombre" as const },
    { key: `${c}-d`, clase: c, tipo: "dibujo" as const },
  ]);
  for (let i = cartas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
  }
  return cartas;
};

export default function JuegoMemoria({ lang }: DemoProps) {
  const es = lang === "es";
  const L = es ? 0 : 1;
  const [cartas, setCartas] = useState<Carta[]>(barajar);
  const [abiertas, setAbiertas] = useState<string[]>([]);
  const [pares, setPares] = useState<Set<Clase>>(new Set());
  const [jugadas, setJugadas] = useState(0);
  const [seg, setSeg] = useState(0);
  const [inicio, setInicio] = useState<number | null>(null);
  const [anuncio, setAnuncio] = useState("");
  const timer = useRef<number | undefined>(undefined);
  const completo = pares.size === 6;

  useEffect(() => {
    if (inicio === null || completo) return;
    const id = window.setInterval(() => setSeg(Math.floor((Date.now() - inicio) / 1000)), 500);
    return () => window.clearInterval(id);
  }, [inicio, completo]);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const voltear = (c: Carta) => {
    if (abiertas.length === 2 || abiertas.includes(c.key) || pares.has(c.clase)) return;
    if (inicio === null) setInicio(Date.now());
    const next = [...abiertas, c.key];
    setAbiertas(next);
    if (next.length === 2) {
      setJugadas((j) => j + 1);
      const [a, b] = next.map((k) => cartas.find((x) => x.key === k)!);
      if (a.clase === b.clase) {
        setPares((p) => new Set(p).add(a.clase));
        setAbiertas([]);
        setAnuncio(es ? `Pareja encontrada: ${NOMBRES[a.clase][0]}` : `Pair found: ${NOMBRES[a.clase][1]}`);
      } else {
        setAnuncio(es ? "No son pareja" : "Not a pair");
        timer.current = window.setTimeout(() => setAbiertas([]), 900);
      }
    }
  };
  const reset = () => {
    window.clearTimeout(timer.current);
    setCartas(barajar());
    setAbiertas([]);
    setPares(new Set());
    setJugadas(0);
    setSeg(0);
    setInicio(null);
    setAnuncio("");
  };

  return (
    <DemoShell lang={lang} instruction={es ? "Voltea dos cartas a la vez y empareja cada tipo de gráfico con su nombre." : "Flip two cards at a time and match each chart type with its name."} onReset={reset}>
      <div className="flex items-center gap-4 text-xs text-white/60">
        <span>{es ? "Parejas" : "Pairs"} <strong className="text-white">{pares.size}/6</strong></span>
        <span>{es ? "Jugadas" : "Moves"} <strong className="text-white">{jugadas}</strong></span>
        <span>{es ? "Tiempo" : "Time"} <strong className="tabular-nums text-white">{seg}s</strong></span>
      </div>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
        {cartas.map((c, i) => {
          const visible = abiertas.includes(c.key) || pares.has(c.clase);
          const ok = pares.has(c.clase);
          return (
            <div key={c.key} className="[perspective:900px]">
              <button
                type="button"
                onClick={() => voltear(c)}
                aria-label={visible ? `${es ? "Carta" : "Card"} ${i + 1}: ${c.tipo === "nombre" ? NOMBRES[c.clase][L] : `${es ? "dibujo de gráfico de" : "drawing of a"} ${NOMBRES[c.clase][L]}${es ? "" : " chart"}`}` : `${es ? "Carta" : "Card"} ${i + 1}, ${es ? "boca abajo" : "face down"}`}
                aria-disabled={ok}
                className={`relative block aspect-[4/3] w-full rounded-2xl [transform-style:preserve-3d] motion-safe:transition-transform motion-safe:duration-300 ${visible ? "[transform:rotateY(180deg)]" : ""} ${cls.focus}`}
              >
                <span className="absolute inset-0 flex items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(135deg,#2a1452,#12051f)] [backface-visibility:hidden]">
                  <span className="h-6 w-6 rounded-full border-2 border-[#C084FC]/50" aria-hidden />
                </span>
                <span className={`absolute inset-0 flex items-center justify-center rounded-2xl border p-2 text-center text-sm font-semibold [backface-visibility:hidden] [transform:rotateY(180deg)] ${ok ? "border-emerald-400/60 bg-emerald-400/10 text-white" : "border-[#C084FC]/50 bg-[#1a0a2e] text-white"}`}>
                  {c.tipo === "nombre" ? NOMBRES[c.clase][L] : <Dibujo c={c.clase} />}
                </span>
              </button>
            </div>
          );
        })}
      </div>
      <p className="sr-only" aria-live="polite">{anuncio}</p>
      {completo && (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-emerald-400/10 px-4 py-3" role="status">
          <p className="text-sm text-emerald-100">
            {es ? `Completaste las 6 parejas en ${jugadas} jugadas y ${seg} segundos.` : `You matched all 6 pairs in ${jugadas} moves and ${seg} seconds.`}
          </p>
          <button type="button" onClick={reset} className={cls.btnGhost}>
            <RotateCcw className="h-4 w-4" aria-hidden /> {es ? "Jugar otra vez" : "Play again"}
          </button>
        </div>
      )}
    </DemoShell>
  );
}
