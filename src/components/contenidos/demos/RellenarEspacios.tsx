"use client";

import { useState } from "react";
import { cls, DemoShell, Feedback, type DemoProps } from "./ui";

type Hueco = { id: string; ok: string[]; muestra: [string, string]; ancho: string };

const HUECOS: Record<string, Hueco> = {
  h1: { id: "h1", ok: ["400"], muestra: ["400", "400"], ancho: "w-20" },
  h2: { id: "h2", ok: ["7", "7%", "7 %", "7,0", "7.0", "7,0%", "7.0%"], muestra: ["7", "7"], ancho: "w-16" },
  h3: { id: "h3", ok: ["por encima", "encima", "arriba", "sobre", "above", "over", "higher"], muestra: ["por encima", "above"], ancho: "w-32" },
};

const norm = (s: string) => s.trim().toLowerCase().replace(/\s+/g, " ");

export default function RellenarEspacios({ lang }: DemoProps) {
  const es = lang === "es";
  const L = es ? 0 : 1;
  const [val, setVal] = useState<Record<string, string>>({ h1: "", h2: "", h3: "" });
  const [revisado, setRevisado] = useState(false);
  const [intentos, setIntentos] = useState(0);

  const correcto = (id: string) => HUECOS[id].ok.includes(norm(val[id]));
  const total = Object.keys(HUECOS).filter(correcto).length;

  const input = (id: string, label: string) => {
    const h = HUECOS[id];
    const estado = revisado ? (correcto(id) ? "ok" : "bad") : null;
    return (
      <span className="inline-flex flex-col align-baseline">
        <input
          value={val[id]}
          onChange={(e) => {
            setVal((v) => ({ ...v, [id]: e.target.value }));
            setRevisado(false);
          }}
          aria-label={label}
          aria-invalid={estado === "bad" || undefined}
          autoComplete="off"
          inputMode={id === "h3" ? "text" : "decimal"}
          className={`mx-1 ${h.ancho} rounded-lg border-b-2 bg-white/[0.07] px-2 py-0.5 text-center font-semibold text-white outline-none transition-colors placeholder:text-white/25 focus:bg-white/[0.12] focus:ring-2 focus:ring-[#C084FC] ${
            estado === "ok" ? "border-emerald-400" : estado === "bad" ? "border-rose-400" : "border-white/40"
          }`}
          placeholder="…"
        />
        {estado === "bad" && <span className="mt-0.5 text-center text-[11px] text-rose-200">{es ? "Respuesta" : "Answer"}: {h.muestra[L]}</span>}
      </span>
    );
  };

  return (
    <DemoShell
      lang={lang}
      instruction={es ? "Completa el cálculo de la tasa de reingreso hospitalario con los datos del caso." : "Complete the hospital readmission rate calculation with the case data."}
      onReset={() => {
        setVal({ h1: "", h2: "", h3: "" });
        setRevisado(false);
        setIntentos(0);
      }}
    >
      <form
        className={`${cls.stage} p-4 text-[16px] leading-[2.4] text-white/85 sm:p-6`}
        onSubmit={(e) => {
          e.preventDefault();
          setRevisado(true);
          setIntentos((n) => n + 1);
        }}
      >
        {es ? (
          <p>
            En marzo hubo 400 egresos y 28 pacientes volvieron a hospitalizarse antes de 30 días. La tasa de reingreso es 28 dividido entre {input("h1", "Espacio 1, divisor")}, es decir {input("h2", "Espacio 2, porcentaje")} %. Si la meta es menos de 5 %, el indicador está {input("h3", "Espacio 3, posición frente a la meta")} de la meta.
          </p>
        ) : (
          <p>
            In March there were 400 discharges and 28 patients were readmitted within 30 days. The readmission rate is 28 divided by {input("h1", "Blank 1, divisor")}, which is {input("h2", "Blank 2, percentage")}%. If the target is under 5%, the indicator is {input("h3", "Blank 3, position against the target")} the target.
          </p>
        )}
        <div className="mt-3 flex items-center gap-3">
          <button type="submit" className={cls.btnPrimary}>
            {es ? "Revisar" : "Check"}
          </button>
          {intentos > 0 && <span className="text-xs text-white/45">{es ? `Intentos: ${intentos}` : `Attempts: ${intentos}`}</span>}
        </div>
      </form>
      <Feedback tone={revisado ? (total === 3 ? "ok" : "bad") : null}>
        {revisado && (total === 3 ? (es ? "3 de 3. La tasa es 7 %, dos puntos por encima de la meta." : "3 of 3. The rate is 7%, two points above the target.") : es ? `${total} de 3 correctas.` : `${total} of 3 correct.`)}
      </Feedback>
    </DemoShell>
  );
}
