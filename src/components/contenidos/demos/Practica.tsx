"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Cuestionario from "./Cuestionario";
import RellenarEspacios from "./RellenarEspacios";
import ArrastrarSoltar from "./ArrastrarSoltar";
import Flashcards from "./Flashcards";
import { cls, type DemoProps } from "./ui";

/**
 * Práctica con retroalimentación inmediata (24-nov-2026): reúne en pestañas cuatro formatos
 * de práctica de recuperación que ya tenían demo. Cada pestaña monta su demo desde cero.
 */
const PESTANAS = [
  { id: "multiple", es: "Opción múltiple", en: "Multiple choice" },
  { id: "rellenar", es: "Rellenar espacios", en: "Fill in the blanks" },
  { id: "arrastrar", es: "Arrastrar y soltar", en: "Drag and drop" },
  { id: "flashcards", es: "Flashcards", en: "Flashcards" },
] as const;

type PestanaId = (typeof PESTANAS)[number]["id"];

export default function Practica({ lang }: DemoProps) {
  const [activa, setActiva] = useState<PestanaId>("multiple");
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const i = PESTANAS.findIndex((p) => p.id === activa);
    let n = -1;
    if (e.key === "ArrowRight") n = (i + 1) % PESTANAS.length;
    else if (e.key === "ArrowLeft") n = (i - 1 + PESTANAS.length) % PESTANAS.length;
    else if (e.key === "Home") n = 0;
    else if (e.key === "End") n = PESTANAS.length - 1;
    if (n < 0) return;
    e.preventDefault();
    setActiva(PESTANAS[n].id);
    refs.current[n]?.focus();
  };

  return (
    <div className="flex flex-col gap-4">
      <div
        role="tablist"
        aria-label={lang === "es" ? "Formatos de práctica" : "Practice formats"}
        className="flex gap-2 overflow-x-auto pb-1"
        onKeyDown={onKey}
      >
        {PESTANAS.map((p, i) => {
          const on = p.id === activa;
          return (
            <button
              key={p.id}
              ref={(el) => {
                refs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`practica-tab-${p.id}`}
              aria-selected={on}
              aria-controls={`practica-panel-${p.id}`}
              tabIndex={on ? 0 : -1}
              onClick={() => setActiva(p.id)}
              className={`shrink-0 whitespace-nowrap rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${cls.focus} ${
                on ? "border-white bg-white text-[#0A0010]" : "border-white/[0.14] bg-white/[0.03] text-white/75 hover:border-white/35 hover:text-white"
              }`}
            >
              {p[lang]}
            </button>
          );
        })}
      </div>
      <div role="tabpanel" id={`practica-panel-${activa}`} aria-labelledby={`practica-tab-${activa}`} tabIndex={0} className={cls.focus}>
        {activa === "multiple" && <Cuestionario key="multiple" lang={lang} variante="multiple" />}
        {activa === "rellenar" && <RellenarEspacios key="rellenar" lang={lang} />}
        {activa === "arrastrar" && <ArrastrarSoltar key="arrastrar" lang={lang} />}
        {activa === "flashcards" && <Flashcards key="flashcards" lang={lang} />}
      </div>
    </div>
  );
}
