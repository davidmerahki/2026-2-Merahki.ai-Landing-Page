"use client";

import { useRef, useState } from "react";
import { Check, X } from "lucide-react";
import { cls, DemoShell, DragGhost, Feedback, useDragPlace, type DemoProps } from "./ui";

type Zona = "lineas" | "barras" | "dispersion";

const ITEMS: { id: string; zona: Zona; t: [string, string] }[] = [
  { id: "a", zona: "lineas", t: ["¿Cómo evolucionaron las ventas mes a mes?", "How did sales change month to month?"] },
  { id: "b", zona: "barras", t: ["¿Qué sucursal vendió más en marzo?", "Which branch sold the most in March?"] },
  { id: "c", zona: "dispersion", t: ["¿Hay relación entre el descuento y las unidades vendidas?", "Is there a relationship between discount and units sold?"] },
  { id: "d", zona: "lineas", t: ["¿Cómo cambió la tasa de mora en 12 meses?", "How did the delinquency rate change over 12 months?"] },
  { id: "e", zona: "barras", t: ["¿Qué producto tiene más devoluciones?", "Which product has the most returns?"] },
  { id: "f", zona: "dispersion", t: ["¿Los pacientes de mayor edad tienen estancias más largas?", "Do older patients have longer hospital stays?"] },
];

const ZONAS: { id: Zona; t: [string, string] }[] = [
  { id: "lineas", t: ["Gráfico de líneas", "Line chart"] },
  { id: "barras", t: ["Gráfico de barras", "Bar chart"] },
  { id: "dispersion", t: ["Gráfico de dispersión", "Scatter plot"] },
];

function MiniChart({ z }: { z: Zona }) {
  return (
    <svg viewBox="0 0 60 32" className="h-8 w-14" aria-hidden>
      {z === "lineas" && <polyline points="2,26 14,20 26,22 38,12 50,14 58,6" fill="none" stroke="#C084FC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />}
      {z === "barras" && [8, 18, 12, 26, 15].map((h, i) => <rect key={i} x={3 + i * 11} y={30 - h} width="8" height={h} rx="1.5" fill="#C084FC" />)}
      {z === "dispersion" && [[6, 24], [14, 20], [20, 22], [28, 15], [34, 16], [42, 10], [50, 9], [56, 5]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="2.6" fill="#F472B6" />)}
    </svg>
  );
}

export default function ArrastrarSoltar({ lang }: DemoProps) {
  const es = lang === "es";
  const L = es ? 0 : 1;
  const root = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<Record<string, Zona | null>>(() => Object.fromEntries(ITEMS.map((i) => [i.id, null])));
  const [sel, setSel] = useState<string | null>(null);
  const [revisado, setRevisado] = useState(false);
  const [intentos, setIntentos] = useState(0);

  const colocar = (id: string, zona: string | null) => {
    setRevisado(false);
    setSel(null);
    if (zona === "banco") setPos((p) => ({ ...p, [id]: null }));
    else if (zona) setPos((p) => ({ ...p, [id]: zona as Zona }));
  };
  const { ghost, over, bind, consumeClick } = useDragPlace(root, colocar);

  const tocarItem = (id: string) => {
    if (consumeClick()) return;
    setSel((s) => (s === id ? null : id));
  };
  const tocarZona = (z: Zona | "banco") => {
    if (sel) colocar(sel, z);
  };
  const revisar = () => {
    setRevisado(true);
    setIntentos((n) => n + 1);
  };
  const reintentar = () => {
    setPos((p) => Object.fromEntries(ITEMS.map((i) => [i.id, p[i.id] === i.zona ? i.zona : null])));
    setRevisado(false);
  };
  const reset = () => {
    setPos(Object.fromEntries(ITEMS.map((i) => [i.id, null])));
    setSel(null);
    setRevisado(false);
    setIntentos(0);
  };

  const correctos = ITEMS.filter((i) => pos[i.id] === i.zona).length;
  const completos = ITEMS.every((i) => pos[i.id]);

  const ficha = (id: string) => {
    const it = ITEMS.find((i) => i.id === id)!;
    const zona = pos[id];
    const estado = revisado && zona ? (zona === it.zona ? "ok" : "bad") : null;
    return (
      <button
        key={id}
        type="button"
        {...bind(id, it.t[L])}
        onClick={(e) => {
          e.stopPropagation();
          tocarItem(id);
        }}
        aria-pressed={sel === id}
        className={`${cls.chip} flex w-full touch-none items-start gap-2 py-2.5 text-[13px] leading-snug ${sel === id ? "border-[#C084FC] bg-[#7C3AED]/25" : ""} ${ghost?.id === id ? "opacity-40" : ""} ${
          estado === "ok" ? "border-emerald-400/60" : estado === "bad" ? "border-rose-400/60" : ""
        }`}
      >
        {estado === "ok" && <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" aria-label={es ? "correcto" : "correct"} />}
        {estado === "bad" && <X className="mt-0.5 h-4 w-4 shrink-0 text-rose-300" aria-label={es ? "incorrecto" : "incorrect"} />}
        <span>{it.t[L]}</span>
      </button>
    );
  };

  const banco = ITEMS.filter((i) => !pos[i.id]);

  return (
    <DemoShell
      lang={lang}
      instruction={es ? "Arrastra cada pregunta de negocio al gráfico que mejor la responde. Sin mouse: toca o pulsa Enter sobre una pregunta y luego sobre el gráfico." : "Drag each business question onto the chart that answers it best. No mouse: tap or press Enter on a question, then on the chart."}
      onReset={reset}
    >
      <div ref={root} className="relative space-y-3">
        <div
          data-zone="banco"
          onClick={() => tocarZona("banco")}
          className={`min-h-[64px] rounded-2xl border border-dashed p-2 transition-colors ${over === "banco" ? "border-[#C084FC] bg-[#7C3AED]/10" : "border-white/15"}`}
        >
          <div className="flex items-center justify-between gap-2 px-1 pb-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
              {es ? "Preguntas" : "Questions"} · {banco.length}
            </p>
            {sel && pos[sel] && (
              <button type="button" onClick={(e) => { e.stopPropagation(); tocarZona("banco"); }} className={`${cls.btnGhost} px-2.5 py-1 text-xs`}>
                {es ? "Devolver la seleccionada" : "Return the selected one"}
              </button>
            )}
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {banco.map((i) => ficha(i.id))}
          </div>
          {banco.length === 0 && <p className="px-1 pb-1 text-xs text-white/35">{es ? "Todas las preguntas están ubicadas." : "All questions are placed."}</p>}
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {ZONAS.map((z) => {
            const dentro = ITEMS.filter((i) => pos[i.id] === z.id);
            return (
              <div
                key={z.id}
                data-zone={z.id}
                onClick={() => tocarZona(z.id)}
                className={`flex min-h-[150px] flex-col rounded-2xl border p-2 transition-colors ${over === z.id ? "border-[#C084FC] bg-[#7C3AED]/15" : "border-white/10 bg-white/[0.03]"}`}
              >
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    tocarZona(z.id);
                  }}
                  disabled={!sel}
                  className={`flex items-center gap-2 rounded-xl px-2 py-1.5 text-left text-sm font-semibold text-white disabled:cursor-default ${sel ? "ring-1 ring-[#C084FC]/50 hover:bg-white/5" : ""} ${cls.focus}`}
                  aria-label={`${z.t[L]}${sel ? (es ? ". Ubicar aquí la pregunta seleccionada" : ". Place the selected question here") : ""}`}
                >
                  <MiniChart z={z.id} />
                  {z.t[L]}
                </button>
                <div className="mt-2 space-y-2">
                  {dentro.map((i) => ficha(i.id))}
                </div>
              </div>
            );
          })}
        </div>
        <DragGhost ghost={ghost} />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button type="button" onClick={revisar} disabled={!completos} className={cls.btnPrimary}>
          {es ? "Revisar" : "Check"}
        </button>
        {revisado && correctos < ITEMS.length && (
          <button type="button" onClick={reintentar} className={cls.btnGhost}>{es ? "Reintentar las incorrectas" : "Retry the wrong ones"}</button>
        )}
        {!completos && <span className="text-xs text-white/45">{es ? `Faltan ${banco.length} por ubicar` : `${banco.length} left to place`}</span>}
      </div>
      <Feedback tone={revisado ? (correctos === ITEMS.length ? "ok" : "bad") : null}>
        {revisado &&
          (correctos === ITEMS.length
            ? es ? `6 de 6 correctas en ${intentos} ${intentos === 1 ? "intento" : "intentos"}. Líneas para tendencias, barras para comparar categorías y dispersión para relaciones entre dos variables.` : `6 of 6 correct in ${intentos} ${intentos === 1 ? "attempt" : "attempts"}. Lines for trends, bars to compare categories and scatter plots for relationships between two variables.`
            : es ? `${correctos} de 6 correctas. Revisa las marcadas en rojo.` : `${correctos} of 6 correct. Check the ones marked in red.`)}
      </Feedback>
    </DemoShell>
  );
}
