"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { cls, DemoShell, type DemoProps } from "./ui";

const TARJETAS: { f: [string, string]; b: [string, string] }[] = [
  {
    f: ["Concejal: «¿Por qué el indicador de cobertura no cumplió la meta?»", "Council member: “Why did the coverage indicator miss its target?”"],
    b: ["«Llegamos al 87 % de la meta. La brecha está en dos barrios donde la línea base usa datos de población desactualizados. Proponemos actualizarla con el registro de este año.»", "“We reached 87% of the target. The gap is in two neighborhoods where the baseline uses outdated population data. We propose updating it with this year's records.”"],
  },
  {
    f: ["Gerente: «¿Las ventas subieron por la campaña?»", "Manager: “Did sales go up because of the campaign?”"],
    b: ["«Coinciden en el tiempo. Para atribuirlo a la campaña comparamos las tiendas que la tuvieron con las que no.»", "“They happened at the same time. To attribute it to the campaign we compare stores that ran it with stores that did not.”"],
  },
  {
    f: ["Director: «Dame un solo número para el comité.»", "Director: “Give me a single number for the committee.”"],
    b: ["«El número es 4 % de caída real en tiendas comparables. Lo acompaño con la categoría que lo explica, para que el comité pueda decidir.»", "“The number is a 4% real drop in like-for-like stores. I will add the category that explains it so the committee can decide.”"],
  },
  {
    f: ["Auditor: «¿De dónde sale este dato?»", "Auditor: “Where does this number come from?”"],
    b: ["«Del sistema de facturación, con corte al 30 de septiembre. En el anexo está la consulta y las reglas de limpieza que aplicamos.»", "“From the billing system, as of September 30. The appendix has the query and the cleaning rules we applied.”"],
  },
];

export default function TarjetasDialogo({ lang }: DemoProps) {
  const es = lang === "es";
  const L = es ? 0 : 1;
  const [i, setI] = useState(0);
  const [ver, setVer] = useState(false);
  const [vistas, setVistas] = useState<Set<number>>(new Set());
  const t = TARJETAS[i];

  const ir = (n: number) => {
    setI((n + TARJETAS.length) % TARJETAS.length);
    setVer(false);
  };
  const voltear = () => {
    setVer((v) => !v);
    setVistas((s) => new Set(s).add(i));
  };

  return (
    <DemoShell
      lang={lang}
      instruction={es ? "Lee la pregunta, piensa qué responderías y voltea la tarjeta para comparar con la respuesta sugerida." : "Read the question, think about how you would answer and flip the card to compare with the suggested answer."}
      onReset={() => {
        setI(0);
        setVer(false);
        setVistas(new Set());
      }}
    >
      <div className={`${cls.stage} p-4 sm:p-6`}>
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10" aria-hidden>
            <MessageCircle className="h-4 w-4 text-white/70" />
          </span>
          <p className="rounded-2xl rounded-tl-md bg-white/[0.08] px-4 py-3 text-base font-medium leading-relaxed text-white">{t.f[L]}</p>
        </div>
        <div className="mt-4 flex items-start justify-end gap-3" aria-live="polite">
          {ver ? (
            <p className="max-w-[90%] rounded-2xl rounded-tr-md bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] px-4 py-3 text-sm leading-relaxed text-white shadow-[0_10px_30px_rgba(124,58,237,0.35)]">
              {t.b[L]}
            </p>
          ) : (
            <p className="rounded-2xl rounded-tr-md border border-dashed border-white/20 px-4 py-3 text-sm text-white/40">
              {es ? "Tu respuesta…" : "Your answer…"}
            </p>
          )}
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#7C3AED]/40 text-xs font-bold text-white" aria-hidden>
            {es ? "Tú" : "You"}
          </span>
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <button type="button" onClick={voltear} aria-pressed={ver} className={cls.btnPrimary}>
            {ver ? (es ? "Ocultar respuesta" : "Hide answer") : es ? "Ver respuesta sugerida" : "See suggested answer"}
          </button>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => ir(i - 1)} className={`${cls.btnGhost} px-2.5`} aria-label={es ? "Tarjeta anterior" : "Previous card"}>
              <ChevronLeft className="h-4 w-4" aria-hidden />
            </button>
            <span className="text-xs tabular-nums text-white/55">{i + 1} / {TARJETAS.length}</span>
            <button type="button" onClick={() => ir(i + 1)} className={`${cls.btnGhost} px-2.5`} aria-label={es ? "Tarjeta siguiente" : "Next card"}>
              <ChevronRight className="h-4 w-4" aria-hidden />
            </button>
          </div>
        </div>
      </div>
      <p className="text-xs text-white/45">{es ? `Respuestas revisadas: ${vistas.size} de ${TARJETAS.length}` : `Answers reviewed: ${vistas.size} of ${TARJETAS.length}`}</p>
    </DemoShell>
  );
}
