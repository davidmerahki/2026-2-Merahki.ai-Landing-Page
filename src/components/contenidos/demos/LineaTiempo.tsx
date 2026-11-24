"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cls, DemoShell, type DemoProps } from "./ui";

const EVENTOS: { y: string; t: [string, string]; d: [string, string] }[] = [
  {
    y: "1786",
    t: ["William Playfair publica las primeras gráficas de líneas y de barras", "William Playfair publishes the first line and bar charts"],
    d: ["En su Atlas comercial y político muestra con líneas el comercio de Inglaterra a lo largo de los años.", "In his Commercial and Political Atlas he shows England's trade over the years with lines."],
  },
  {
    y: "1854",
    t: ["John Snow ubica en un mapa los casos de cólera de Londres", "John Snow maps London's cholera cases"],
    d: ["Los casos se agrupan alrededor de una bomba de agua de Broad Street, la fuente del brote.", "The cases cluster around a water pump on Broad Street, the source of the outbreak."],
  },
  {
    y: "1858",
    t: ["Florence Nightingale grafica las causas de muerte de los soldados", "Florence Nightingale charts soldiers' causes of death"],
    d: ["Su diagrama de área polar muestra que en la guerra de Crimea murieron más soldados por enfermedades evitables que por heridas.", "Her polar area diagram shows that more soldiers in the Crimean War died of preventable disease than of wounds."],
  },
  {
    y: "1869",
    t: ["Charles Minard resume la campaña de Napoleón en Rusia", "Charles Minard sums up Napoleon's Russian campaign"],
    d: ["Una sola imagen cruza el tamaño del ejército, la ruta, las fechas y la temperatura del regreso.", "A single image combines army size, route, dates and the temperature on the retreat."],
  },
  {
    y: "1977",
    t: ["John Tukey publica Exploratory Data Analysis", "John Tukey publishes Exploratory Data Analysis"],
    d: ["El libro propone mirar los datos antes de probar hipótesis y difunde el diagrama de caja.", "The book argues for looking at data before testing hypotheses and spreads the box plot."],
  },
  {
    y: "2006",
    t: ["Hans Rosling anima los datos de salud e ingreso en TED", "Hans Rosling animates health and income data at TED"],
    d: ["Sus burbujas en movimiento muestran cómo cambiaron los países en 40 años y llevan la visualización a millones de personas.", "His moving bubbles show how countries changed over 40 years and bring data visualization to millions of people."],
  },
];

export default function LineaTiempo({ lang }: DemoProps) {
  const es = lang === "es";
  const L = es ? 0 : 1;
  const [i, setI] = useState(0);
  const [vistos, setVistos] = useState<Set<number>>(new Set([0]));
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const ir = (n: number, focus = false) => {
    const k = (n + EVENTOS.length) % EVENTOS.length;
    setI(k);
    setVistos((v) => new Set(v).add(k));
    if (focus) tabs.current[k]?.focus();
  };
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const map: Record<string, number> = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: EVENTOS.length - 1 };
    if (e.key in map) {
      e.preventDefault();
      ir(map[e.key], true);
    }
  };
  const ev = EVENTOS[i];

  return (
    <DemoShell
      lang={lang}
      instruction={es ? "Recorre seis momentos de la historia de la visualización de datos. Usa las flechas del teclado o toca cada año." : "Move through six moments in the history of data visualization. Use the arrow keys or tap each year."}
      onReset={() => {
        setI(0);
        setVistos(new Set([0]));
      }}
    >
      <div className={`${cls.stage} p-4 sm:p-5`}>
        <div className="relative overflow-x-auto pb-1">
          <div role="tablist" aria-label={es ? "Años" : "Years"} onKeyDown={onKey} className="relative flex min-w-[480px] justify-between px-2 pt-2">
            <span className="absolute left-6 right-6 top-[22px] h-0.5 bg-white/10" aria-hidden />
            <span
              className="absolute left-6 top-[22px] h-0.5 bg-gradient-to-r from-[#7C3AED] to-[#F472B6] motion-safe:transition-all motion-safe:duration-500"
              style={{ width: `calc((100% - 3rem) * ${i / (EVENTOS.length - 1)})` }}
              aria-hidden
            />
            {EVENTOS.map((e, k) => (
              <button
                key={e.y}
                ref={(el) => {
                  tabs.current[k] = el;
                }}
                type="button"
                role="tab"
                id={`lt-tab-${k}`}
                aria-selected={k === i}
                aria-controls="lt-panel"
                tabIndex={k === i ? 0 : -1}
                onClick={() => ir(k)}
                className={`relative z-10 flex w-16 flex-col items-center gap-2 rounded-lg pb-1 ${cls.focus}`}
              >
                <span className={`h-6 w-6 rounded-full border-2 motion-safe:transition-all ${k === i ? "scale-110 border-white bg-[#F472B6]" : k <= i ? "border-[#C084FC] bg-[#7C3AED]" : vistos.has(k) ? "border-[#C084FC]/60 bg-[#12051f]" : "border-white/25 bg-[#12051f]"}`} />
                <span className={`text-sm font-semibold tabular-nums ${k === i ? "text-white" : "text-white/50"}`}>{e.y}</span>
              </button>
            ))}
          </div>
        </div>

        <div id="lt-panel" role="tabpanel" aria-labelledby={`lt-tab-${i}`} className="mt-5 grid gap-4 sm:grid-cols-[auto_1fr] sm:items-start">
          <p className="bg-gradient-to-br from-[#C084FC] to-[#F472B6] bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">{ev.y}</p>
          <div>
            <p className="text-lg font-semibold leading-snug text-white">{ev.t[L]}</p>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{ev.d[L]}</p>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-xs text-white/45">{es ? `Momentos vistos: ${vistos.size} de 6` : `Moments viewed: ${vistos.size} of 6`}</span>
          <div className="flex gap-2">
            <button type="button" onClick={() => ir(i - 1)} className={`${cls.btnGhost} px-2.5`} aria-label={es ? "Momento anterior" : "Previous moment"}>
              <ChevronLeft className="h-4 w-4" aria-hidden />
            </button>
            <button type="button" onClick={() => ir(i + 1)} className={`${cls.btnGhost} px-2.5`} aria-label={es ? "Momento siguiente" : "Next moment"}>
              <ChevronRight className="h-4 w-4" aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </DemoShell>
  );
}
