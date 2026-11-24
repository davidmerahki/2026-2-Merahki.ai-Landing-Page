"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Flag, RotateCcw, Star } from "lucide-react";
import { cls, useEventLog, EventLog, DemoShell, type DemoProps } from "./ui";

type Nodo = {
  id: string;
  label: [string, string];
  texto: [string, string];
  opciones?: { a: string; t: [string, string] }[];
  final?: { estrellas: 1 | 2 | 3; titulo: [string, string] };
};

const NODOS: Record<string, Nodo> = {
  inicio: {
    id: "inicio",
    label: ["Inicio", "Start"],
    texto: [
      "Viernes, 4 p. m. Trabajas en una empresa de alimentos. El gerente comercial te pide explicar el lunes por qué las ventas de la regional Norte cayeron 18 % en octubre.",
      "Friday, 4 p.m. You work at a food manufacturer. The sales manager asks you to explain on Monday why sales in the North region fell 18% in October.",
    ],
    opciones: [
      { a: "informe", t: ["Armo el informe con el dato que ya tengo", "I build the report with the data I already have"] },
      { a: "calidad", t: ["Reviso primero la calidad de los datos", "I check the data quality first"] },
    ],
  },
  informe: {
    id: "informe",
    label: ["Informe directo", "Straight to report"],
    texto: [
      "Presentas la caída del 18 %. En la reunión, el director de la regional dice que dos tiendas no reportaron ventas en octubre por un cambio de sistema.",
      "You present the 18% drop. In the meeting, the regional director says two stores did not report sales in October because of a system change.",
    ],
    opciones: [
      { a: "defender", t: ["Defiendo el número", "I defend the number"] },
      { a: "corregir", t: ["Pido 24 horas para corregir el análisis", "I ask for 24 hours to fix the analysis"] },
    ],
  },
  calidad: {
    id: "calidad",
    label: ["Revisar datos", "Check data"],
    texto: [
      "Encuentras que dos tiendas tienen octubre en cero. El área de sistemas confirma una migración de las cajas.",
      "You find that two stores show zero for October. IT confirms a point-of-sale migration.",
    ],
    opciones: [
      { a: "comparables", t: ["Excluyo esas tiendas y comparo tiendas iguales", "I exclude those stores and compare like-for-like stores"] },
      { a: "imputar", t: ["Relleno octubre con el promedio de septiembre", "I fill October with September's average"] },
    ],
  },
  comparables: {
    id: "comparables",
    label: ["Tiendas comparables", "Like-for-like"],
    texto: [
      "Con tiendas comparables, la caída real es de 4 % y se concentra en una categoría: bebidas.",
      "With like-for-like stores, the real drop is 4% and it is concentrated in one category: beverages.",
    ],
    opciones: [
      { a: "recomendar", t: ["Presento el 4 % y la categoría que lo explica", "I present the 4% and the category behind it"] },
      { a: "solo", t: ["Presento solo el 4 %", "I present only the 4%"] },
    ],
  },
  defender: {
    id: "defender",
    label: ["Final 1", "Ending 1"],
    texto: ["La reunión termina sin decisión y el gerente pide que otra persona revise tus próximos informes.", "The meeting ends without a decision, and the manager asks someone else to review your next reports."],
    final: { estrellas: 1, titulo: ["El dato no resistió la primera pregunta", "The number did not survive the first question"] },
  },
  corregir: {
    id: "corregir",
    label: ["Final 2", "Ending 2"],
    texto: ["Recuperas la confianza del gerente, pero la decisión sobre la regional se aplaza una semana.", "You regain the manager's trust, but the decision on the region is delayed a week."],
    final: { estrellas: 2, titulo: ["Corregiste a tiempo, con costo", "You corrected in time, at a cost"] },
  },
  imputar: {
    id: "imputar",
    label: ["Final 3", "Ending 3"],
    texto: ["El número cambia, pero cuando te preguntan por el supuesto no puedes defender por qué usaste septiembre.", "The number changes, but when asked about the assumption you cannot defend why you used September."],
    final: { estrellas: 2, titulo: ["Un supuesto que nadie aprobó", "An assumption nobody approved"] },
  },
  solo: {
    id: "solo",
    label: ["Final 4", "Ending 4"],
    texto: ["El número es correcto, pero el gerente pide más análisis antes de decidir qué hacer.", "The number is correct, but the manager asks for more analysis before deciding what to do."],
    final: { estrellas: 2, titulo: ["Dato correcto, decisión pendiente", "Right number, decision pending"] },
  },
  recomendar: {
    id: "recomendar",
    label: ["Final 5", "Ending 5"],
    texto: ["El gerente decide revisar el precio de bebidas en la regional Norte. La decisión queda tomada en la misma reunión.", "The manager decides to review beverage pricing in the North region. The decision is made in the same meeting."],
    final: { estrellas: 3, titulo: ["Mejor ruta: dato limpio y una decisión", "Best path: clean data and a decision"] },
  },
};

// Posiciones del mapa de nodos (columnas = nivel de decisión)
const POS: Record<string, [number, number]> = {
  inicio: [30, 90],
  informe: [130, 45],
  calidad: [130, 135],
  defender: [230, 20],
  corregir: [230, 70],
  comparables: [230, 115],
  imputar: [230, 165],
  recomendar: [330, 95],
  solo: [330, 140],
};
const ARISTAS: [string, string][] = [
  ["inicio", "informe"], ["inicio", "calidad"], ["informe", "defender"], ["informe", "corregir"],
  ["calidad", "comparables"], ["calidad", "imputar"], ["comparables", "recomendar"], ["comparables", "solo"],
];

export default function EscenarioRamificado({ lang }: DemoProps) {
  const es = lang === "es";
  const L = es ? 0 : 1;
  const [ruta, setRuta] = useState<string[]>(["inicio"]);
  const [vistos, setVistos] = useState<Set<string>>(new Set(["inicio"]));
  const textRef = useRef<HTMLParagraphElement>(null);
  const { events, log, clear } = useEventLog();
  const actual = NODOS[ruta[ruta.length - 1]];

  useEffect(() => {
    if (ruta.length > 1) textRef.current?.focus();
  }, [ruta]);

  const elegir = (a: string, label: string) => {
    setRuta((r) => [...r, a]);
    setVistos((v) => new Set(v).add(a));
    log("answered", `${es ? "Decisión" : "Choice"} ${ruta.length}: ${label}`);
    if (NODOS[a].final) log("completed", `${NODOS[a].label[L]} · ${NODOS[a].final!.estrellas}/3`);
  };
  const otraRuta = () => {
    setRuta(["inicio"]);
    log("attempted", es ? "Nuevo intento desde el inicio" : "New attempt from the start");
  };
  const reset = () => {
    setRuta(["inicio"]);
    setVistos(new Set(["inicio"]));
    clear();
  };

  const enRuta = (a: string, b: string) => {
    const i = ruta.indexOf(a);
    return i >= 0 && ruta[i + 1] === b;
  };
  const finalesVistos = Object.values(NODOS).filter((n) => n.final && vistos.has(n.id)).length;

  return (
    <DemoShell lang={lang} instruction={es ? "Toma las decisiones del analista y mira a qué final te lleva cada ruta." : "Make the analyst's decisions and see which ending each path leads to."} onReset={reset}>
      <div className={`${cls.stage} p-4 sm:p-5`}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C084FC]">
          {actual.final ? (es ? "Final del caso" : "Case ending") : `${es ? "Decisión" : "Decision"} ${ruta.length}`}
        </p>
        {actual.final && (
          <div className="mt-2 flex items-center gap-1" role="img" aria-label={`${actual.final.estrellas} ${es ? "de 3 estrellas" : "of 3 stars"}`}>
            {[1, 2, 3].map((s) => (
              <Star key={s} className={`h-5 w-5 ${s <= actual.final!.estrellas ? "fill-[#F472B6] text-[#F472B6]" : "text-white/20"}`} aria-hidden />
            ))}
            <span className="ml-2 text-sm font-semibold text-white">{actual.final.titulo[L]}</span>
          </div>
        )}
        <p ref={textRef} tabIndex={-1} className="mt-2 text-base leading-relaxed text-white focus:outline-none" aria-live="polite">
          {actual.texto[L]}
        </p>
        {actual.opciones && (
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {actual.opciones.map((o) => (
              <button key={o.a} type="button" onClick={() => elegir(o.a, o.t[L])} className={`${cls.chip} group flex items-center justify-between gap-3 py-3`}>
                <span>{o.t[L]}</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:text-white motion-reduce:transition-none" aria-hidden />
              </button>
            ))}
          </div>
        )}
        {actual.final && (
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button type="button" onClick={otraRuta} className={cls.btnPrimary}>
              <RotateCcw className="h-4 w-4" aria-hidden /> {es ? "Probar otra ruta" : "Try another path"}
            </button>
            <span className="text-xs text-white/55">
              {es ? `Has visto ${finalesVistos} de 5 finales` : `You have seen ${finalesVistos} of 5 endings`}
            </span>
          </div>
        )}
      </div>

      <div className="grid gap-3 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <figure className="rounded-xl border border-white/10 bg-black/30 p-3">
          <figcaption className="mb-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">{es ? "Mapa de decisiones" : "Decision map"}</figcaption>
          <svg viewBox="0 0 360 190" className="h-auto w-full" role="img" aria-label={`${es ? "Ruta tomada" : "Path taken"}: ${ruta.map((r) => NODOS[r].label[L]).join(" → ")}`}>
            {ARISTAS.map(([a, b]) => {
              const on = enRuta(a, b);
              return (
                <line key={`${a}-${b}`} x1={POS[a][0]} y1={POS[a][1]} x2={POS[b][0]} y2={POS[b][1]} stroke={on ? "#C084FC" : "rgba(255,255,255,0.14)"} strokeWidth={on ? 2.5 : 1.5} strokeDasharray={on ? undefined : "3 4"} />
              );
            })}
            {Object.keys(POS).map((id) => {
              const n = NODOS[id];
              const isNow = id === actual.id;
              const inPath = ruta.includes(id);
              const seen = vistos.has(id);
              return (
                <g key={id} transform={`translate(${POS[id][0]} ${POS[id][1]})`}>
                  {isNow && <circle r="13" fill="none" stroke="#F472B6" strokeOpacity="0.5" className="motion-safe:animate-ping" style={{ transformOrigin: "center", transformBox: "fill-box" }} />}
                  <circle r={n.final ? 8 : 9} fill={isNow ? "#F472B6" : inPath ? "#7C3AED" : seen ? "#3b2163" : "#160a26"} stroke={inPath ? "#C084FC" : "rgba(255,255,255,0.25)"} strokeWidth="1.5" />
                  {n.final && <Flag x={-4} y={-4} width={8} height={8} color={seen ? "#fff" : "rgba(255,255,255,0.35)"} aria-hidden />}
                  <text y={n.final ? 20 : -14} textAnchor="middle" fontSize="8.5" fill={inPath ? "#fff" : "rgba(255,255,255,0.45)"}>{n.label[L]}</text>
                </g>
              );
            })}
          </svg>
        </figure>
        <EventLog lang={lang} events={events} />
      </div>
    </DemoShell>
  );
}
