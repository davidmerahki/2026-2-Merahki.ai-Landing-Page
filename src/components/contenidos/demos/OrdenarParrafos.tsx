"use client";

import { useEffect, useRef, useState, type PointerEvent as RPointerEvent } from "react";
import { ArrowDown, ArrowUp, GripVertical } from "lucide-react";
import { cls, DemoShell, Feedback, type DemoProps } from "./ui";

const PASOS: { id: string; t: [string, string] }[] = [
  { id: "p1", t: ["Definir la pregunta: ¿por qué subió en marzo el tiempo de espera en urgencias?", "Define the question: why did emergency room waiting time go up in March?"] },
  { id: "p2", t: ["Reunir los registros de admisión, triaje y atención de los últimos seis meses.", "Gather admission, triage and care records from the last six months."] },
  { id: "p3", t: ["Limpiar los datos: quitar duplicados y revisar horas mal registradas.", "Clean the data: remove duplicates and check wrongly recorded times."] },
  { id: "p4", t: ["Analizar el tiempo de cada etapa por franja horaria y por día.", "Analyze the time of each stage by time slot and by day."] },
  { id: "p5", t: ["Presentar el hallazgo y una recomendación al comité de calidad.", "Present the finding and a recommendation to the quality committee."] },
];
const INICIAL = ["p3", "p1", "p4", "p5", "p2"];

export default function OrdenarParrafos({ lang }: DemoProps) {
  const es = lang === "es";
  const L = es ? 0 : 1;
  const [orden, setOrden] = useState<string[]>(INICIAL);
  const [revisado, setRevisado] = useState(false);
  const [intentos, setIntentos] = useState(0);
  const [arrastrado, setArrastrado] = useState<string | null>(null);
  const [anuncio, setAnuncio] = useState("");
  const focusNext = useRef<string | null>(null);
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    if (!focusNext.current) return;
    const el = listRef.current?.querySelector<HTMLButtonElement>(`[data-move="${focusNext.current}"]`);
    el?.focus();
    focusNext.current = null;
  }, [orden]);

  const mover = (id: string, to: number) => {
    setOrden((o) => {
      const from = o.indexOf(id);
      if (from < 0 || to < 0 || to >= o.length || from === to) return o;
      const n = [...o];
      n.splice(from, 1);
      n.splice(to, 0, id);
      return n;
    });
    setRevisado(false);
  };
  const conBoton = (id: string, dir: -1 | 1) => {
    const to = orden.indexOf(id) + dir;
    if (to < 0 || to >= orden.length) return;
    focusNext.current = `${id}:${dir === -1 ? (to === 0 ? "down" : "up") : to === orden.length - 1 ? "up" : "down"}`;
    mover(id, to);
    setAnuncio(es ? `Paso movido a la posición ${to + 1}` : `Step moved to position ${to + 1}`);
  };

  const onDown = (id: string) => (e: RPointerEvent<HTMLSpanElement>) => {
    if (e.button !== 0) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    setArrastrado(id);
  };
  const onMove = (e: RPointerEvent<HTMLSpanElement>) => {
    if (!arrastrado) return;
    const el = (document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null)?.closest<HTMLElement>("[data-idx]");
    if (el) mover(arrastrado, Number(el.dataset.idx));
  };
  const onUp = () => setArrastrado(null);

  const correctos = orden.filter((id, i) => PASOS[i].id === id).length;

  return (
    <DemoShell
      lang={lang}
      instruction={es ? "Ordena los pasos para investigar el aumento del tiempo de espera. Arrastra desde el ícono de agarre o usa las flechas de cada paso." : "Put the steps to investigate the longer waiting time in order. Drag from the grip icon or use each step's arrows."}
      onReset={() => {
        setOrden(INICIAL);
        setRevisado(false);
        setIntentos(0);
      }}
    >
      <ol ref={listRef} className="space-y-2">
        {orden.map((id, i) => {
          const p = PASOS.find((x) => x.id === id)!;
          const estado = revisado ? (PASOS[i].id === id ? "ok" : "bad") : null;
          return (
            <li
              key={id}
              data-idx={i}
              className={`flex items-center gap-2 rounded-2xl border bg-white/[0.04] p-2 pr-2.5 transition-colors sm:gap-3 ${
                arrastrado === id ? "border-[#C084FC] bg-[#7C3AED]/20 shadow-[0_10px_30px_rgba(124,58,237,0.35)]" : estado === "ok" ? "border-emerald-400/60" : estado === "bad" ? "border-rose-400/60" : "border-white/10"
              }`}
            >
              <span
                onPointerDown={onDown(id)}
                onPointerMove={onMove}
                onPointerUp={onUp}
                onPointerCancel={onUp}
                className="flex h-9 w-7 shrink-0 cursor-grab touch-none items-center justify-center rounded-lg text-white/40 hover:bg-white/10 hover:text-white active:cursor-grabbing"
                aria-hidden
              >
                <GripVertical className="h-4 w-4" />
              </span>
              <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${estado === "ok" ? "bg-emerald-400 text-[#0A0010]" : "bg-white/10 text-white/70"}`}>{i + 1}</span>
              <span className="flex-1 text-sm leading-snug text-white/90">{p.t[L]}</span>
              <span className="flex shrink-0 flex-col gap-1">
                <button type="button" data-move={`${id}:up`} onClick={() => conBoton(id, -1)} disabled={i === 0} className={`rounded-md p-1 text-white/60 hover:bg-white/10 hover:text-white disabled:opacity-20 ${cls.focus}`} aria-label={`${es ? "Subir el paso" : "Move step up"}: ${p.t[L]}`}>
                  <ArrowUp className="h-3.5 w-3.5" aria-hidden />
                </button>
                <button type="button" data-move={`${id}:down`} onClick={() => conBoton(id, 1)} disabled={i === orden.length - 1} className={`rounded-md p-1 text-white/60 hover:bg-white/10 hover:text-white disabled:opacity-20 ${cls.focus}`} aria-label={`${es ? "Bajar el paso" : "Move step down"}: ${p.t[L]}`}>
                  <ArrowDown className="h-3.5 w-3.5" aria-hidden />
                </button>
              </span>
            </li>
          );
        })}
      </ol>
      <p className="sr-only" aria-live="polite">{anuncio}</p>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => {
            setRevisado(true);
            setIntentos((n) => n + 1);
          }}
          className={cls.btnPrimary}
        >
          {es ? "Revisar el orden" : "Check the order"}
        </button>
      </div>
      <Feedback tone={revisado ? (correctos === PASOS.length ? "ok" : "bad") : null}>
        {revisado &&
          (correctos === PASOS.length
            ? es ? `Orden correcto en ${intentos} ${intentos === 1 ? "intento" : "intentos"}. Primero la pregunta, después los datos, luego el análisis y al final la recomendación.` : `Correct order in ${intentos} ${intentos === 1 ? "attempt" : "attempts"}. Question first, then data, then analysis and the recommendation last.`
            : es ? `${correctos} de 5 pasos en su lugar.` : `${correctos} of 5 steps in place.`)}
      </Feedback>
    </DemoShell>
  );
}
