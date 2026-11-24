"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { DemoShell, type DemoProps } from "./ui";

const ITEMS: { q: [string, string]; a: [string, string] }[] = [
  {
    q: ["¿Qué es un KPI?", "What is a KPI?"],
    a: ["Un indicador clave ligado a un objetivo, con una meta y un periodo. Las ventas del mes son un dato. Las ventas del mes frente a la meta son un KPI.", "A key indicator tied to an objective, with a target and a period. Monthly sales are a number. Monthly sales against target are a KPI."],
  },
  {
    q: ["¿Qué diferencia hay entre dato e información?", "What is the difference between data and information?"],
    a: ["El dato es el registro suelto, como 312 entregas. La información es el dato con contexto, como 312 entregas, 9 % más que el martes pasado.", "Data is the raw record, like 312 deliveries. Information is data with context, like 312 deliveries, 9% more than last Tuesday."],
  },
  {
    q: ["¿Qué es un tablero de seguimiento?", "What is a tracking dashboard?"],
    a: ["Una vista con los pocos indicadores que un equipo revisa para decidir. Si nadie toma una decisión con él, sobra.", "A view with the few indicators a team reviews to make decisions. If nobody makes a decision with it, it is not needed."],
  },
  {
    q: ["¿Qué es la calidad de datos?", "What is data quality?"],
    a: ["Qué tan completos, exactos, consistentes y actualizados están los datos para el uso que les vas a dar.", "How complete, accurate, consistent and current the data is for the use you will give it."],
  },
];

export default function Acordeon({ lang }: DemoProps) {
  const es = lang === "es";
  const L = es ? 0 : 1;
  const [abiertos, setAbiertos] = useState<Set<number>>(new Set([0]));
  const toggle = (i: number) =>
    setAbiertos((s) => {
      const n = new Set(s);
      if (n.has(i)) n.delete(i);
      else n.add(i);
      return n;
    });

  return (
    <DemoShell lang={lang} instruction={es ? "Glosario del módulo 1. Abre solo lo que necesitas consultar." : "Module 1 glossary. Open only what you need to look up."} onReset={() => setAbiertos(new Set([0]))}>
      <div className="divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
        {ITEMS.map((it, i) => {
          const open = abiertos.has(i);
          return (
            <div key={i}>
              <h4>
                <button
                  type="button"
                  id={`acc-h-${i}`}
                  aria-expanded={open}
                  aria-controls={`acc-p-${i}`}
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-[15px] font-semibold text-white hover:bg-white/[0.04] focus-visible:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#C084FC]"
                >
                  {it.q[L]}
                  <ChevronDown className={`h-4 w-4 shrink-0 text-[#C084FC] motion-safe:transition-transform motion-safe:duration-300 ${open ? "rotate-180" : ""}`} aria-hidden />
                </button>
              </h4>
              <div
                id={`acc-p-${i}`}
                role="region"
                aria-labelledby={`acc-h-${i}`}
                className={`grid motion-safe:transition-[grid-template-rows] motion-safe:duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden">
                  <p className={`px-4 pb-4 text-sm leading-relaxed text-white/70 ${open ? "" : "invisible"}`}>{it.a[L]}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-xs text-white/45">{es ? `${abiertos.size} de ${ITEMS.length} definiciones abiertas` : `${abiertos.size} of ${ITEMS.length} definitions open`}</p>
    </DemoShell>
  );
}
