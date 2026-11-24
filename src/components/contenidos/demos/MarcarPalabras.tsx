"use client";

import { useState } from "react";
import { cls, DemoShell, Feedback, type DemoProps } from "./ui";

// Las palabras correctas van marcadas con *asterisco* en la fuente.
const FUENTE = {
  es: "En el informe semanal, el equipo comparó la *media* de ventas por tienda, la *mediana* del ticket y la *moda* del medio de pago. También revisó la desviación estándar y el rango para entender la dispersión de los datos.",
  en: "In the weekly report, the team compared the *mean* sales per store, the *median* ticket and the *mode* of payment method. It also reviewed the standard deviation and the range to understand how spread out the data was.",
};

export default function MarcarPalabras({ lang }: DemoProps) {
  const es = lang === "es";
  const tokens = FUENTE[lang].split(" ").map((raw, i) => {
    const correcta = raw.includes("*");
    const limpio = raw.replace(/\*/g, "");
    const m = limpio.match(/^(.*?)([.,]?)$/)!;
    return { i, palabra: m[1], signo: m[2], correcta };
  });
  const total = tokens.filter((t) => t.correcta).length;
  const [marcadas, setMarcadas] = useState<Set<number>>(new Set());
  const [revisado, setRevisado] = useState(false);

  const toggle = (i: number) => {
    setRevisado(false);
    setMarcadas((m) => {
      const n = new Set(m);
      if (n.has(i)) n.delete(i);
      else n.add(i);
      return n;
    });
  };

  const aciertos = tokens.filter((t) => t.correcta && marcadas.has(t.i)).length;
  const errores = tokens.filter((t) => !t.correcta && marcadas.has(t.i)).length;
  const puntaje = Math.max(0, aciertos - errores);

  return (
    <DemoShell
      lang={lang}
      instruction={es ? "Marca en el texto las tres palabras que nombran medidas de tendencia central." : "Mark the three words in the text that name measures of central tendency."}
      onReset={() => {
        setMarcadas(new Set());
        setRevisado(false);
      }}
    >
      <div className={`${cls.stage} p-4 sm:p-6`}>
        <p className="text-[17px] leading-[2.1] text-white/85">
          {tokens.map((t) => {
            const on = marcadas.has(t.i);
            const estado = revisado ? (t.correcta && on ? "ok" : !t.correcta && on ? "bad" : t.correcta ? "miss" : null) : null;
            return (
              <span key={t.i}>
                <button
                  type="button"
                  onClick={() => toggle(t.i)}
                  aria-pressed={on}
                  className={`rounded-md px-0.5 transition-colors ${cls.focus} ${on ? "bg-[#F472B6]/30 text-white underline decoration-[#F472B6] decoration-2 underline-offset-4" : "hover:bg-white/10"} ${
                    estado === "ok" ? "!bg-emerald-400/25 !decoration-emerald-300" : estado === "bad" ? "!bg-rose-400/25 !decoration-rose-300" : estado === "miss" ? "outline-dashed outline-1 outline-offset-2 outline-emerald-300/70" : ""
                  }`}
                >
                  {t.palabra}
                </button>
                {t.signo}{" "}
              </span>
            );
          })}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button type="button" onClick={() => setRevisado(true)} disabled={marcadas.size === 0} className={cls.btnPrimary}>
          {es ? "Revisar" : "Check"}
        </button>
        <span className="text-xs text-white/45">
          {es ? `${marcadas.size} marcadas` : `${marcadas.size} marked`}
        </span>
      </div>
      <Feedback tone={revisado ? (puntaje === total && errores === 0 ? "ok" : "bad") : null}>
        {revisado &&
          (puntaje === total && errores === 0
            ? es ? "3 de 3. Media, mediana y moda son medidas de tendencia central. La desviación estándar y el rango miden dispersión." : "3 of 3. Mean, median and mode are measures of central tendency. Standard deviation and range measure spread."
            : es ? `Puntaje ${puntaje} de ${total}. Cada palabra mal marcada resta un punto. Las que faltaron tienen un borde verde.` : `Score ${puntaje} of ${total}. Each wrong mark subtracts a point. The ones you missed have a green outline.`)}
      </Feedback>
    </DemoShell>
  );
}
