"use client";

/** Pestañas de entorno para una demo (26-nov-2026): la demo del programa de ejemplo y una en otro entorno laboral. */
import { useRef, useState, type ComponentType, type KeyboardEvent } from "react";
import { cls, tx, type DemoProps } from "./ui";

export type Entorno = { id: string; tab: [string, string]; Demo: ComponentType<DemoProps> };

export default function EntornosTabs({ lang, entornos, label }: DemoProps & { entornos: Entorno[]; label: [string, string] }) {
  const i18 = lang === "es" ? 0 : 1;
  const [act, setAct] = useState(entornos[0].id);
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});
  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    let n = entornos.findIndex((x) => x.id === act);
    if (e.key === "ArrowRight") n = (n + 1) % entornos.length;
    else if (e.key === "ArrowLeft") n = (n + entornos.length - 1) % entornos.length;
    else return;
    e.preventDefault();
    setAct(entornos[n].id);
    refs.current[entornos[n].id]?.focus();
  };
  const actual = entornos.find((x) => x.id === act)!;
  return (
    <div className="flex flex-col gap-4">
      <div role="tablist" aria-label={label[i18]} className="flex flex-wrap gap-2">
        {entornos.map((x) => {
          const on = x.id === act;
          return (
            <button
              key={x.id}
              ref={(el) => {
                refs.current[x.id] = el;
              }}
              role="tab"
              type="button"
              id={`ent-${x.id}`}
              aria-selected={on}
              aria-controls="ent-panel"
              tabIndex={on ? 0 : -1}
              onClick={() => setAct(x.id)}
              onKeyDown={onKey}
              className={`rounded-xl border px-4 py-2 text-left text-sm font-semibold transition-colors ${
                on ? "border-[#C084FC]/70 bg-[#7C3AED]/25 text-white" : "border-white/10 bg-white/[0.03] text-white/65 hover:border-white/30 hover:text-white"
              } ${cls.focus}`}
            >
              {x.tab[i18]}
            </button>
          );
        })}
      </div>
      <div id="ent-panel" role="tabpanel" aria-labelledby={`ent-${act}`}>
        <actual.Demo key={act} lang={lang} />
      </div>
      <span className="sr-only">{tx(lang, "Cambia de pestaña con las flechas.", "Switch tabs with the arrow keys.")}</span>
    </div>
  );
}
