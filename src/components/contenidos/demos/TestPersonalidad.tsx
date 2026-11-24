"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";
import { cls, DemoShell, type DemoProps } from "./ui";

type Perfil = "explorador" | "narrador" | "arquitecto" | "estratega";

const PERFILES: Record<Perfil, { n: [string, string]; d: [string, string]; ruta: [string, string] }> = {
  explorador: {
    n: ["Explorador de datos", "Data explorer"],
    d: ["Te mueve encontrar patrones que nadie había visto. Tu reto es convertir cada hallazgo en una recomendación concreta.", "You are driven by finding patterns nobody had seen. Your challenge is turning each finding into a concrete recommendation."],
    ruta: ["Módulo 4, Estadística para decidir, y módulo 5, Comunicación con datos.", "Module 4, Statistics for decisions, and module 5, Communicating with data."],
  },
  narrador: {
    n: ["Narrador con datos", "Data storyteller"],
    d: ["Te importa que el dato se entienda y mueva a alguien. Tu reto es sostener la historia con un análisis riguroso.", "You care about data being understood and moving people to act. Your challenge is backing the story with rigorous analysis."],
    ruta: ["Módulo 2, Calidad de datos, y módulo 4, Estadística para decidir.", "Module 2, Data quality, and module 4, Statistics for decisions."],
  },
  arquitecto: {
    n: ["Arquitecto de datos", "Data architect"],
    d: ["Te gusta que los datos estén ordenados y sean confiables. Tu reto es llevar esa base hasta una decisión de negocio.", "You like data to be organized and reliable. Your challenge is carrying that foundation all the way to a business decision."],
    ruta: ["Módulo 1, Preguntas de negocio, y módulo 5, Comunicación con datos.", "Module 1, Business questions, and module 5, Communicating with data."],
  },
  estratega: {
    n: ["Estratega", "Strategist"],
    d: ["Empiezas por la decisión que hay que tomar. Tu reto es no saltarte la revisión de los datos.", "You start from the decision that has to be made. Your challenge is not skipping the data review."],
    ruta: ["Módulo 2, Calidad de datos, y módulo 3, Visualización.", "Module 2, Data quality, and module 3, Visualization."],
  },
};

const PREGUNTAS: { q: [string, string]; o: { p: Perfil; t: [string, string] }[] }[] = [
  {
    q: ["Te llega una base de datos nueva. ¿Qué haces primero?", "You get a new dataset. What do you do first?"],
    o: [
      { p: "explorador", t: ["Busco patrones o datos raros", "Look for patterns or odd values"] },
      { p: "narrador", t: ["Imagino el gráfico que la resume", "Picture the chart that sums it up"] },
      { p: "arquitecto", t: ["Reviso cómo está organizada y qué le falta", "Check how it is organized and what is missing"] },
      { p: "estratega", t: ["Pregunto qué decisión depende de ella", "Ask which decision depends on it"] },
    ],
  },
  {
    q: ["En una reunión, tu aporte más común es…", "In a meeting, your most common contribution is…"],
    o: [
      { p: "explorador", t: ["Un hallazgo que nadie esperaba", "A finding nobody expected"] },
      { p: "narrador", t: ["Una historia clara con el dato clave", "A clear story with the key number"] },
      { p: "arquitecto", t: ["Una advertencia sobre la calidad del dato", "A warning about data quality"] },
      { p: "estratega", t: ["Una recomendación con su costo y su riesgo", "A recommendation with its cost and risk"] },
    ],
  },
  {
    q: ["¿Qué herramienta abres primero?", "Which tool do you open first?"],
    o: [
      { p: "explorador", t: ["Un notebook para explorar", "A notebook to explore"] },
      { p: "narrador", t: ["Una herramienta de visualización", "A visualization tool"] },
      { p: "arquitecto", t: ["El diccionario de datos", "The data dictionary"] },
      { p: "estratega", t: ["La hoja con las metas del área", "The sheet with the team's targets"] },
    ],
  },
  {
    q: ["Un buen día de trabajo termina con…", "A good workday ends with…"],
    o: [
      { p: "explorador", t: ["Una pregunta nueva que vale la pena investigar", "A new question worth investigating"] },
      { p: "narrador", t: ["Un informe que el equipo entendió a la primera", "A report the team understood the first time"] },
      { p: "arquitecto", t: ["Una base limpia y documentada", "A clean, documented dataset"] },
      { p: "estratega", t: ["Una decisión tomada con datos", "A decision made with data"] },
    ],
  },
];

export default function TestPersonalidad({ lang }: DemoProps) {
  const es = lang === "es";
  const L = es ? 0 : 1;
  const [resp, setResp] = useState<Perfil[]>([]);
  const headRef = useRef<HTMLParagraphElement>(null);
  const fin = resp.length === PREGUNTAS.length;

  useEffect(() => {
    if (resp.length > 0) headRef.current?.focus();
  }, [resp.length]);

  const conteo = (Object.keys(PERFILES) as Perfil[]).map((p) => ({ p, n: resp.filter((r) => r === p).length }));
  // En empate gana el perfil de la última respuesta que empata.
  const max = Math.max(...conteo.map((c) => c.n));
  const ganador = [...resp].reverse().find((r) => conteo.find((c) => c.p === r)!.n === max) ?? "explorador";
  const q = PREGUNTAS[resp.length];

  return (
    <DemoShell lang={lang} instruction={es ? "Responde cuatro preguntas y recibe tu perfil de analista con la ruta del programa que más te sirve." : "Answer four questions and get your analyst profile with the program path that fits you best."} onReset={() => setResp([])}>
      <div className={`${cls.stage} p-4 sm:p-5`}>
        {!fin && q && (
          <>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C084FC]">
              {es ? "Pregunta" : "Question"} {resp.length + 1} {es ? "de" : "of"} 4
            </p>
            <p ref={headRef} tabIndex={-1} className="mt-2 text-lg font-semibold text-white focus:outline-none">{q.q[L]}</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {q.o.map((o) => (
                <button key={o.p} type="button" onClick={() => setResp((r) => [...r, o.p])} className={`${cls.chip} group flex items-center justify-between gap-3 py-3`}>
                  <span>{o.t[L]}</span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-white/30 group-hover:text-white" aria-hidden />
                </button>
              ))}
            </div>
          </>
        )}
        {fin && (
          <div role="status">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C084FC]">{es ? "Tu perfil" : "Your profile"}</p>
            <p ref={headRef} tabIndex={-1} className="mt-1 bg-gradient-to-r from-[#C084FC] to-[#F472B6] bg-clip-text text-3xl font-extrabold tracking-tight text-transparent focus:outline-none">
              {PERFILES[ganador].n[L]}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/80">{PERFILES[ganador].d[L]}</p>
            <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-3">
              <p className="text-xs font-semibold text-white/50">{es ? "Ruta sugerida en el programa" : "Suggested path in the program"}</p>
              <p className="mt-1 text-sm text-white">{PERFILES[ganador].ruta[L]}</p>
            </div>
            <ul className="mt-4 space-y-2">
              {conteo.map((c) => (
                <li key={c.p} className="flex items-center gap-3 text-xs text-white/65">
                  <span className="w-36 shrink-0">{PERFILES[c.p].n[L]}</span>
                  <span className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                    <span className={`block h-full rounded-full ${c.p === ganador ? "bg-gradient-to-r from-[#C084FC] to-[#F472B6]" : "bg-white/30"}`} style={{ width: `${(c.n / 4) * 100}%` }} />
                  </span>
                  <span className="w-8 text-right tabular-nums">{c.n}/4</span>
                </li>
              ))}
            </ul>
            <button type="button" onClick={() => setResp([])} className={`${cls.btnGhost} mt-4`}>
              <RotateCcw className="h-4 w-4" aria-hidden /> {es ? "Hacer el test otra vez" : "Take the quiz again"}
            </button>
          </div>
        )}
      </div>
    </DemoShell>
  );
}
