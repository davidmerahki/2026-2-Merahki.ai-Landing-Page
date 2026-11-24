"use client";

import { useRef, useState } from "react";
import { cls, DemoShell, DragGhost, Feedback, useDragPlace, type DemoProps } from "./ui";

type Parte = string | { b: string; ans: string };

const PALABRAS: { id: string; t: [string, string] }[] = [
  { id: "kpi", t: ["KPI", "KPI"] },
  { id: "varianza", t: ["varianza", "variance"] },
  { id: "promedio", t: ["promedio", "mean"] },
  { id: "correlacion", t: ["correlación", "correlation"] },
  { id: "moda", t: ["moda", "mode"] },
  { id: "mediana", t: ["mediana", "median"] },
];

const TEXTO: Record<"es" | "en", Parte[][]> = {
  es: [
    ["Un ", { b: "b1", ans: "kpi" }, " es una métrica ligada a un objetivo y a una meta."],
    ["El ", { b: "b2", ans: "promedio" }, " se distorsiona con valores atípicos. Por eso los reportes de salarios usan la ", { b: "b3", ans: "mediana" }, "."],
    ["Una ", { b: "b4", ans: "correlacion" }, " alta entre dos variables no prueba que una cause la otra."],
  ],
  en: [
    ["A ", { b: "b1", ans: "kpi" }, " is a metric tied to an objective and a target."],
    ["The ", { b: "b2", ans: "promedio" }, " gets distorted by outliers. That is why salary reports use the ", { b: "b3", ans: "mediana" }, "."],
    ["A high ", { b: "b4", ans: "correlacion" }, " between two variables does not prove that one causes the other."],
  ],
};
const BLANCOS = ["b1", "b2", "b3", "b4"];
const RESP: Record<string, string> = { b1: "kpi", b2: "promedio", b3: "mediana", b4: "correlacion" };

export default function ArrastrarPalabras({ lang }: DemoProps) {
  const es = lang === "es";
  const L = es ? 0 : 1;
  const root = useRef<HTMLDivElement>(null);
  const vacio = () => Object.fromEntries(BLANCOS.map((b) => [b, null])) as Record<string, string | null>;
  const [fill, setFill] = useState<Record<string, string | null>>(vacio);
  const [sel, setSel] = useState<string | null>(null);
  const [revisado, setRevisado] = useState(false);

  const nombre = (id: string) => PALABRAS.find((p) => p.id === id)!.t[L];

  const colocar = (palabra: string, zona: string | null) => {
    setRevisado(false);
    setSel(null);
    if (!zona) return;
    setFill((f) => {
      const next = { ...f };
      for (const b of BLANCOS) if (next[b] === palabra) next[b] = null;
      if (zona !== "banco") next[zona] = palabra;
      return next;
    });
  };
  const { ghost, over, bind, consumeClick } = useDragPlace(root, colocar);

  const enUso = new Set(Object.values(fill).filter(Boolean) as string[]);
  const banco = PALABRAS.filter((p) => !enUso.has(p.id));

  const tocarPalabra = (id: string) => {
    if (consumeClick()) return;
    setSel((s) => (s === id ? null : id));
  };
  const tocarBlanco = (b: string) => {
    if (consumeClick()) return;
    if (sel) colocar(sel, b);
    else if (fill[b]) setSel(fill[b]);
  };

  const correctos = BLANCOS.filter((b) => fill[b] === RESP[b]).length;
  const lleno = BLANCOS.every((b) => fill[b]);

  return (
    <DemoShell
      lang={lang}
      instruction={es ? "Arrastra cada palabra al espacio que le corresponde. También puedes tocar o pulsar Enter en una palabra y después en el espacio." : "Drag each word into its blank. You can also tap or press Enter on a word and then on the blank."}
      onReset={() => {
        setFill(vacio());
        setSel(null);
        setRevisado(false);
      }}
    >
      <div ref={root} className="relative space-y-4">
        <div className={`${cls.stage} space-y-4 p-4 text-[15px] leading-[2.6] text-white/90 sm:p-5`}>
          {TEXTO[lang].map((frase, i) => (
            <p key={i}>
              {frase.map((parte, j) => {
                if (typeof parte === "string") return <span key={j}>{parte}</span>;
                const w = fill[parte.b];
                const estado = revisado && w ? (w === parte.ans ? "ok" : "bad") : null;
                return (
                  <button
                    key={j}
                    type="button"
                    data-zone={parte.b}
                    {...(w ? bind(w, nombre(w)) : {})}
                    onClick={() => tocarBlanco(parte.b)}
                    aria-label={w ? `${es ? "Espacio con" : "Blank with"} ${nombre(w)}` : es ? "Espacio vacío" : "Empty blank"}
                    className={`mx-1 inline-flex min-w-[96px] touch-none items-center justify-center rounded-lg border-b-2 px-2 align-middle leading-8 transition-colors ${cls.focus} ${
                      w ? "border-[#C084FC] bg-[#7C3AED]/25 font-semibold text-white" : "border-white/40 bg-white/[0.06] text-white/30"
                    } ${over === parte.b ? "bg-[#7C3AED]/40 ring-2 ring-[#C084FC]" : ""} ${sel && !w ? "ring-1 ring-[#C084FC]/50" : ""} ${
                      estado === "ok" ? "!border-emerald-400 !bg-emerald-400/15" : estado === "bad" ? "!border-rose-400 !bg-rose-400/15" : ""
                    }`}
                  >
                    {w ? nombre(w) : "·····"}
                  </button>
                );
              })}
            </p>
          ))}
        </div>

        <div data-zone="banco" className={`rounded-2xl border border-dashed p-3 transition-colors ${over === "banco" ? "border-[#C084FC] bg-[#7C3AED]/10" : "border-white/15"}`}>
          <div className="mb-2 flex items-center justify-between">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">{es ? "Palabras" : "Words"}</p>
            {sel && enUso.has(sel) && (
              <button type="button" onClick={() => colocar(sel, "banco")} className={`${cls.btnGhost} px-2.5 py-1 text-xs`}>
                {es ? "Quitar del texto" : "Remove from text"}
              </button>
            )}
          </div>
          <div className="flex min-h-[40px] flex-wrap gap-2">
            {banco.map((p) => (
              <button
                key={p.id}
                type="button"
                {...bind(p.id, p.t[L])}
                onClick={() => tocarPalabra(p.id)}
                aria-pressed={sel === p.id}
                className={`${cls.chip} touch-none rounded-full px-4 py-1.5 font-medium ${sel === p.id ? "border-[#C084FC] bg-[#7C3AED]/30" : ""} ${ghost?.id === p.id ? "opacity-40" : ""}`}
              >
                {p.t[L]}
              </button>
            ))}
          </div>
        </div>
        <DragGhost ghost={ghost} />
      </div>

      <div className="flex items-center gap-3">
        <button type="button" onClick={() => setRevisado(true)} disabled={!lleno} className={cls.btnPrimary}>
          {es ? "Revisar" : "Check"}
        </button>
        <span className="text-xs text-white/45">{es ? "Sobran dos palabras." : "Two words are extra."}</span>
      </div>
      <Feedback tone={revisado ? (correctos === 4 ? "ok" : "bad") : null}>
        {revisado && (correctos === 4 ? (es ? "4 de 4 correctas." : "4 of 4 correct.") : es ? `${correctos} de 4 correctas. Mueve las marcadas en rojo.` : `${correctos} of 4 correct. Move the ones marked in red.`)}
      </Feedback>
    </DemoShell>
  );
}
