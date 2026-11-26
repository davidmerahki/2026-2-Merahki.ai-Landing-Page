"use client";

/**
 * Simulador explorable en una droguería (26-nov-2026): punto de pedido y cantidad por pedido del acetaminofén.
 * Simulación determinista de 30 días: demanda diaria fija (con picos de fin de semana), entrega en 3 días y
 * revisión por inventario disponible + en camino. Ejemplo ilustrativo; la regla es la del punto de pedido clásico.
 */
import { useEffect, useMemo, useRef, useState } from "react";
import { Target } from "lucide-react";
import { cls, EventLog, Feedback, tx, useEventLog, type DemoProps } from "./ui";

const DEMANDA = [11, 13, 12, 14, 16, 18, 10, 12, 11, 13, 15, 17, 19, 9, 12, 12, 14, 13, 16, 20, 10, 11, 13, 12, 14, 17, 18, 9, 12, 13];
const DIAS = DEMANDA.length;
const ENTREGA = 3;
const INICIAL = 80;
const META_PROMEDIO = 50;

type Dia = { stock: number; faltante: number; pedido: boolean; llega: boolean };

function simular(R: number, Q: number) {
  let stock = INICIAL;
  const llegadas: Record<number, number> = {};
  let enCamino = 0;
  const dias: Dia[] = [];
  for (let d = 0; d < DIAS; d++) {
    let llega = false;
    if (llegadas[d]) {
      stock += llegadas[d];
      enCamino -= llegadas[d];
      llega = true;
    }
    const venta = Math.min(stock, DEMANDA[d]);
    const faltante = DEMANDA[d] - venta;
    stock -= venta;
    let pedido = false;
    if (stock + enCamino <= R) {
      llegadas[d + ENTREGA] = (llegadas[d + ENTREGA] || 0) + Q;
      enCamino += Q;
      pedido = true;
    }
    dias.push({ stock, faltante, pedido, llega });
  }
  const sinProducto = dias.filter((x) => x.faltante > 0).length;
  const clientes = dias.reduce((a, x) => a + x.faltante, 0);
  const promedio = dias.reduce((a, x) => a + x.stock, 0) / DIAS;
  return { dias, sinProducto, clientes, promedio };
}

const VW = 560;
const VH = 250;
const PL = 34;
const PR = 12;
const PT = 16;
const PB = 34;

export default function SimuladorFarmacia({ lang }: DemoProps) {
  const es = lang === "es";
  const T = (a: string, b: string) => tx(lang, a, b);
  const { events, log, clear } = useEventLog();
  const [R, setR] = useState(20);
  const [Q, setQ] = useState(60);
  const sim = useMemo(() => simular(R, Q), [R, Q]);
  const logrado = sim.sinProducto === 0 && sim.promedio < META_PROMEDIO;
  const ya = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (logrado && !ya.current) {
      ya.current = true;
      log(T("logró la meta", "met the goal"), T(`punto ${R} · pedido ${Q}`, `reorder ${R} · order ${Q}`));
    }
    if (!logrado) ya.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logrado]);

  const cambiar = (que: "R" | "Q", v: number) => {
    if (que === "R") setR(v);
    else setQ(v);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => log(T("ajustó", "adjusted"), `${que === "R" ? T("punto de pedido", "reorder point") : T("cantidad", "order size")} ${v}`), 500);
  };

  const max = Math.max(INICIAL, ...sim.dias.map((d) => d.stock), R) * 1.12;
  const x = (d: number) => PL + (d / (DIAS - 1)) * (VW - PL - PR);
  const y = (v: number) => PT + (1 - v / max) * (VH - PT - PB);
  const area = `M${x(0)},${y(0)} ` + sim.dias.map((d, i) => `L${x(i)},${y(d.stock)}`).join(" ") + ` L${x(DIAS - 1)},${y(0)} Z`;
  const linea = sim.dias.map((d, i) => `${i ? "L" : "M"}${x(i)},${y(d.stock)}`).join(" ");
  const n = (v: number, dec = 0) => (es ? v.toFixed(dec).replace(".", ",") : v.toFixed(dec));

  const reset = () => {
    clear();
    setR(20);
    setQ(60);
    ya.current = false;
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm leading-relaxed text-white/70">
          {T(
            "Eres el dependiente de una droguería. El acetaminofén se vende unas 13 cajas al día y el proveedor tarda 3 días en entregar. Elige cuándo pedir y cuánto, y mira 30 días de inventario.",
            "You work the counter at a drugstore. Acetaminophen sells about 13 boxes a day and the supplier takes 3 days to deliver. Choose when to order and how much, and watch 30 days of stock.",
          )}
        </p>
        <button type="button" onClick={reset} className={`${cls.btnGhost} shrink-0 px-3 py-1.5 text-xs`}>
          {T("Reiniciar", "Reset")}
        </button>
      </div>

      <div className={`${cls.stage} p-3 sm:p-4`}>
        <div className="mb-2 flex flex-wrap items-center gap-2 text-xs font-semibold">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7C3AED]/20 px-2.5 py-1 text-[#DDD6FE] ring-1 ring-[#7C3AED]/40">
            <Target className="h-3.5 w-3.5" aria-hidden />
            {T(`Meta: cero días sin producto y menos de ${META_PROMEDIO} cajas en promedio`, `Goal: zero days out of stock and fewer than ${META_PROMEDIO} boxes on average`)}
          </span>
        </div>
        <svg viewBox={`0 0 ${VW} ${VH}`} className="w-full" role="img" aria-label={T(
          `Inventario de 30 días. ${sim.sinProducto} días sin producto, ${sim.clientes} cajas sin vender por falta de producto e inventario promedio de ${n(sim.promedio)} cajas.`,
          `Thirty days of stock. ${sim.sinProducto} days out of stock, ${sim.clientes} boxes not sold for lack of stock and an average stock of ${n(sim.promedio)} boxes.`,
        )}>
          <defs>
            <linearGradient id="sf-area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#22D3EE" stopOpacity="0.45" />
              <stop offset="1" stopColor="#7C3AED" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          {[0, 0.25, 0.5, 0.75, 1].map((f) => (
            <g key={f}>
              <line x1={PL} x2={VW - PR} y1={y(max * f)} y2={y(max * f)} stroke="rgba(255,255,255,0.07)" />
              <text x={PL - 6} y={y(max * f) + 3} textAnchor="end" fontSize="9" fill="rgba(255,255,255,0.45)">{Math.round(max * f)}</text>
            </g>
          ))}
          {sim.dias.map((d, i) =>
            d.faltante > 0 ? <rect key={`f${i}`} x={x(i) - 7} y={PT} width={14} height={VH - PT - PB} fill="rgba(244,63,94,0.16)" /> : null,
          )}
          <path d={area} fill="url(#sf-area)" />
          <path d={linea} fill="none" stroke="#22D3EE" strokeWidth="2.2" strokeLinejoin="round" />
          <line x1={PL} x2={VW - PR} y1={y(R)} y2={y(R)} stroke="#F472B6" strokeWidth="1.5" strokeDasharray="5 4" />
          <text x={VW - PR} y={y(R) - 5} textAnchor="end" fontSize="10" fontWeight="700" fill="#F9A8D4">{T(`Punto de pedido: ${R}`, `Reorder point: ${R}`)}</text>
          {sim.dias.map((d, i) => (
            <g key={`m${i}`}>
              {d.pedido && <path d={`M${x(i)},${VH - PB + 6} l-5,8 h10 z`} fill="#C084FC" />}
              {d.llega && <circle cx={x(i)} cy={VH - PB + 22} r={4} fill="#22D3EE" />}
              {d.faltante > 0 && <circle cx={x(i)} cy={y(0) - 4} r={3.5} fill="#F43F5E" />}
            </g>
          ))}
          <text x={PL} y={VH - 2} fontSize="9" fill="rgba(255,255,255,0.45)">{T("Día 1", "Day 1")}</text>
          <text x={VW - PR} y={VH - 2} textAnchor="end" fontSize="9" fill="rgba(255,255,255,0.45)">{T("Día 30", "Day 30")}</text>
        </svg>
        <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-white/60" aria-hidden>
          <li><span className="mr-1 inline-block h-2 w-3 rounded-sm bg-[#22D3EE]" />{T("Cajas en la estantería", "Boxes on the shelf")}</li>
          <li><span className="mr-1 inline-block h-0 w-0 border-x-[5px] border-b-[8px] border-x-transparent border-b-[#C084FC] align-middle" />{T("Hace un pedido", "Places an order")}</li>
          <li><span className="mr-1 inline-block h-2 w-2 rounded-full bg-[#22D3EE]" />{T("Llega el pedido", "Order arrives")}</li>
          <li><span className="mr-1 inline-block h-2 w-3 rounded-sm bg-[#F43F5E]/60" />{T("Día sin producto", "Day out of stock")}</li>
        </ul>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {([
          ["R", R, 0, 80, T("Punto de pedido (cajas)", "Reorder point (boxes)"), T("Pides cuando quedan estas cajas, contando las que vienen en camino.", "You order when this many boxes are left, counting those on the way.")],
          ["Q", Q, 20, 200, T("Cajas por pedido", "Boxes per order"), T("Cuántas cajas pides cada vez.", "How many boxes you order each time.")],
        ] as const).map(([k, v, min, mx, label, help]) => (
          <label key={k} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <span className="flex items-baseline justify-between gap-2 text-sm font-semibold text-white">
              {label}
              <span className="font-mono text-lg text-[#A5F3FC]">{v}</span>
            </span>
            <input
              type="range"
              min={min}
              max={mx}
              step={k === "R" ? 1 : 5}
              value={v}
              onChange={(e) => cambiar(k, Number(e.target.value))}
              className="mt-2 w-full accent-[#22D3EE]"
            />
            <span className="mt-1 block text-xs text-white/50">{help}</span>
          </label>
        ))}
      </div>

      <dl className="grid grid-cols-3 gap-2">
        {[
          [T("Días sin producto", "Days out of stock"), String(sim.sinProducto), sim.sinProducto === 0],
          [T("Cajas que no se vendieron", "Boxes not sold"), String(sim.clientes), sim.clientes === 0],
          [T("Inventario promedio", "Average stock"), n(sim.promedio), sim.promedio < META_PROMEDIO],
        ].map(([t, v, ok]) => (
          <div key={t as string} className={`rounded-xl border p-3 ${ok ? "border-[#4ADE80]/40 bg-[#4ADE80]/[0.06]" : "border-white/10 bg-white/[0.03]"}`}>
            <dt className="text-[11px] leading-snug text-white/55">{t}</dt>
            <dd className={`mt-1 font-mono text-xl font-bold ${ok ? "text-[#86EFAC]" : "text-white"}`}>{v}</dd>
          </div>
        ))}
      </dl>

      <Feedback tone={logrado ? "ok" : sim.sinProducto > 0 && R < 40 ? "info" : null}>
        {logrado
          ? T(
              "Lo lograste. El punto de pedido cubre la venta de los 3 días de entrega (unas 40 cajas) más una reserva para los días pico, y los pedidos pequeños mantienen bajo el inventario.",
              "You did it. The reorder point covers sales during the 3-day delivery (about 40 boxes) plus a buffer for peak days, and small orders keep stock low.",
            )
          : sim.sinProducto > 0 && R < 40
            ? T(
                "Pista: mientras llega el pedido sigues vendiendo. ¿Cuántas cajas se venden en 3 días?",
                "Hint: you keep selling while the order is on its way. How many boxes sell in 3 days?",
              )
            : undefined}
      </Feedback>

      <p className="text-xs leading-relaxed text-white/45">{T("Ejemplo ilustrativo con demanda simulada.", "Illustrative example with simulated demand.")}</p>
      <EventLog lang={lang} events={events} />
    </div>
  );
}
