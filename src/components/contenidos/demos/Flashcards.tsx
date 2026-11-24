"use client";

import { useState } from "react";
import { Check, RotateCcw, Repeat } from "lucide-react";
import { cls, DemoShell, type DemoProps } from "./ui";

const TARJETAS: { id: string; f: [string, string]; b: [string, string] }[] = [
  { id: "kpi", f: ["KPI", "KPI"], b: ["Indicador ligado a un objetivo, con meta y periodo. Ejemplo: ventas del mes frente a la meta.", "An indicator tied to an objective, with a target and a period. Example: monthly sales against target."] },
  { id: "mediana", f: ["Mediana", "Median"], b: ["El valor del medio cuando ordenas los datos. No se mueve con los valores extremos.", "The middle value when you sort the data. Extreme values do not move it."] },
  { id: "atipico", f: ["Valor atípico", "Outlier"], b: ["Un dato muy lejos del resto. Puede ser un error de registro o un caso real que hay que explicar.", "A data point far from the rest. It may be a recording error or a real case that needs explaining."] },
  { id: "correlacion", f: ["Correlación", "Correlation"], b: ["Mide qué tanto se mueven juntas dos variables. No prueba que una cause la otra.", "Measures how much two variables move together. It does not prove that one causes the other."] },
  { id: "cohorte", f: ["Cohorte", "Cohort"], b: ["Un grupo que comparte un punto de partida, como los clientes que compraron por primera vez en enero.", "A group that shares a starting point, such as customers who first bought in January."] },
  { id: "ab", f: ["Prueba A/B", "A/B test"], b: ["Comparar dos versiones con grupos asignados al azar para saber cuál funciona mejor.", "Comparing two versions with randomly assigned groups to learn which one works better."] },
];

export default function Flashcards({ lang }: DemoProps) {
  const es = lang === "es";
  const L = es ? 0 : 1;
  const [cola, setCola] = useState<string[]>(TARJETAS.map((t) => t.id));
  const [volteada, setVolteada] = useState(false);
  const [sabidas, setSabidas] = useState<Set<string>>(new Set());
  const [repasos, setRepasos] = useState(0);

  const actual = TARJETAS.find((t) => t.id === cola[0]);
  const vistas = TARJETAS.length - cola.length;

  const marcar = (sabia: boolean) => {
    if (!actual) return;
    setVolteada(false);
    if (sabia) {
      setSabidas((s) => new Set(s).add(actual.id));
      setCola((c) => c.slice(1));
    } else {
      setRepasos((n) => n + 1);
      setCola((c) => [...c.slice(1), c[0]]);
    }
  };
  const reset = () => {
    setCola(TARJETAS.map((t) => t.id));
    setVolteada(false);
    setSabidas(new Set());
    setRepasos(0);
  };

  return (
    <DemoShell lang={lang} instruction={es ? "Piensa la definición, voltea la tarjeta y marca si la sabías. Las que marques para repasar vuelven al final del mazo." : "Think of the definition, flip the card and mark whether you knew it. The ones you mark for review go back to the end of the deck."} onReset={reset}>
      <div className="flex items-center gap-2" aria-hidden>
        {TARJETAS.map((t) => (
          <span key={t.id} className={`h-1.5 flex-1 rounded-full ${sabidas.has(t.id) ? "bg-gradient-to-r from-[#C084FC] to-[#F472B6]" : t.id === cola[0] ? "bg-white/40" : "bg-white/10"}`} />
        ))}
      </div>

      {actual ? (
        <>
          <div className="[perspective:1200px]">
            <button
              type="button"
              onClick={() => setVolteada((v) => !v)}
              aria-pressed={volteada}
              aria-label={volteada ? `${actual.f[L]}: ${actual.b[L]}` : `${actual.f[L]}. ${es ? "Voltear para ver la definición" : "Flip to see the definition"}`}
              className={`relative block h-56 w-full rounded-3xl text-left [transform-style:preserve-3d] motion-safe:transition-transform motion-safe:duration-500 ${volteada ? "[transform:rotateY(180deg)]" : ""} ${cls.focus}`}
            >
              <span className="absolute inset-0 flex flex-col justify-between rounded-3xl border border-white/15 bg-[radial-gradient(ellipse_at_20%_10%,rgba(124,58,237,0.45),transparent_60%),#12051f] p-6 [backface-visibility:hidden]">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C084FC]">
                  {es ? "Término" : "Term"} · {vistas + 1}/{TARJETAS.length}
                </span>
                <span className="text-3xl font-bold tracking-tight text-white">{actual.f[L]}</span>
                <span className="text-xs text-white/45">{es ? "Toca la tarjeta o pulsa Enter para voltearla" : "Tap the card or press Enter to flip it"}</span>
              </span>
              <span className="absolute inset-0 flex flex-col justify-center gap-3 rounded-3xl border border-[#F472B6]/40 bg-[#1a0a24] p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#F472B6]">{actual.f[L]}</span>
                <span className="text-lg leading-relaxed text-white">{actual.b[L]}</span>
              </span>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button type="button" onClick={() => marcar(false)} disabled={!volteada} className={cls.btnGhost}>
              <Repeat className="h-4 w-4" aria-hidden /> {es ? "Repasar de nuevo" : "Review again"}
            </button>
            <button type="button" onClick={() => marcar(true)} disabled={!volteada} className={cls.btnPrimary}>
              <Check className="h-4 w-4" aria-hidden /> {es ? "La sabía" : "I knew it"}
            </button>
          </div>
        </>
      ) : (
        <div className="flex h-56 flex-col items-center justify-center gap-3 rounded-3xl border border-white/10 bg-white/[0.03] text-center" role="status">
          <p className="text-2xl font-bold text-white">{es ? "Mazo completo" : "Deck complete"}</p>
          <p className="max-w-xs text-sm text-white/65">
            {es ? `Repasaste ${TARJETAS.length} términos y volviste ${repasos} ${repasos === 1 ? "vez" : "veces"} sobre los que no sabías.` : `You reviewed ${TARJETAS.length} terms and went back ${repasos} ${repasos === 1 ? "time" : "times"} to the ones you did not know.`}
          </p>
          <button type="button" onClick={reset} className={cls.btnPrimary}>
            <RotateCcw className="h-4 w-4" aria-hidden /> {es ? "Empezar otra vez" : "Start over"}
          </button>
        </div>
      )}
    </DemoShell>
  );
}
