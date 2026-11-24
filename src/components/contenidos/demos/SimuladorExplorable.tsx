"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent, type PointerEvent as RPointerEvent } from "react";
import { Target } from "lucide-react";
import { cls, DemoShell, EventLog, Feedback, tx, useEventLog, useReducedMotion, type DemoProps } from "./ui";

/** Salarios mensuales en millones de pesos. El último es el valor que se arrastra. */
const FIXED = [1.8, 2.0, 2.2, 2.4, 2.6, 2.9];
const START = 12.0;
const MIN = 2.9;
const MAX = 20;
const AXIS_MAX = 20;
const GOAL = 4;

const MEAN_COLOR = "#F472B6";
const MEDIAN_COLOR = "#C084FC";

// Geometría del SVG (unidades del viewBox).
const W = 560;
const H = 290;
const PAD_L = 26;
const PAD_R = 26;
const AXIS_Y = 218;
const DOT_Y = 190;
const TOP_Y = 58;
const xOf = (v: number) => PAD_L + (v / AXIS_MAX) * (W - PAD_L - PAD_R);
const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));

function stats(outlier: number) {
  const all = [...FIXED, outlier].sort((a, b) => a - b);
  const mean = all.reduce((s, n) => s + n, 0) / all.length;
  const median = all[Math.floor(all.length / 2)];
  return { mean, median };
}

export default function SimuladorExplorable({ lang }: DemoProps) {
  const es = lang === "es";
  const reduced = useReducedMotion();
  const { events, log, clear } = useEventLog();

  const [value, setValue] = useState(START);
  const [dragging, setDragging] = useState(false);
  const [focused, setFocused] = useState(false);
  const [announce, setAnnounce] = useState("");

  const svgRef = useRef<SVGSVGElement>(null);
  const handleRef = useRef<SVGGElement>(null);
  const solved = useRef(false);
  const keyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const num = useCallback((n: number, d = 1) => (es ? n.toFixed(d).replace(".", ",") : n.toFixed(d)), [es]);

  const { mean, median } = useMemo(() => stats(value), [value]);
  const reached = Math.round(mean * 1000) / 1000 > GOAL;

  const describe = useCallback(
    (v: number) => {
      const s = stats(v);
      return es
        ? `Valor extremo en ${num(v)} millones. Media ${num(s.mean)}, mediana ${num(s.median)}.`
        : `Extreme value at ${num(v)} million. Mean ${num(s.mean)}, median ${num(s.median)}.`;
    },
    [es, num],
  );

  const checkChallenge = useCallback(
    (v: number) => {
      const s = stats(v);
      const ok = Math.round(s.mean * 1000) / 1000 > GOAL;
      if (ok && !solved.current) {
        solved.current = true;
        log(es ? "completó reto" : "met challenge", es ? `media ${num(s.mean, 2)}` : `mean ${num(s.mean, 2)}`);
      }
      if (!ok) solved.current = false;
    },
    [es, log, num],
  );

  useEffect(
    () => () => {
      if (keyTimer.current) clearTimeout(keyTimer.current);
    },
    [],
  );

  const toValue = (clientX: number) => {
    const r = svgRef.current?.getBoundingClientRect();
    if (!r || r.width === 0) return value;
    const vx = ((clientX - r.left) / r.width) * W;
    const v = ((vx - PAD_L) / (W - PAD_L - PAD_R)) * AXIS_MAX;
    return Math.round(clamp(v, MIN, MAX) * 10) / 10;
  };

  const onDown = (e: RPointerEvent<SVGGElement>) => {
    if (e.button !== 0) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    handleRef.current?.focus({ preventScroll: true });
    setDragging(true);
    const v = toValue(e.clientX);
    setValue(v);
    checkChallenge(v);
  };
  const onMove = (e: RPointerEvent<SVGGElement>) => {
    if (!dragging) return;
    const v = toValue(e.clientX);
    setValue(v);
    checkChallenge(v);
  };
  const endDrag = (e: RPointerEvent<SVGGElement>) => {
    if (!dragging) return;
    setDragging(false);
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
    const v = toValue(e.clientX);
    setValue(v);
    checkChallenge(v);
    setAnnounce(describe(v));
    log(es ? "arrastró" : "dragged", es ? `valor extremo ${num(v)}` : `extreme value ${num(v)}`);
  };

  const onKey = (e: KeyboardEvent<SVGGElement>) => {
    let next: number | null = null;
    if (e.key === "ArrowRight" || e.key === "ArrowUp") next = value + 0.5;
    else if (e.key === "ArrowLeft" || e.key === "ArrowDown") next = value - 0.5;
    else if (e.key === "Home") next = MIN;
    else if (e.key === "End") next = MAX;
    if (next === null) return;
    e.preventDefault();
    const v = Math.round(clamp(next, MIN, MAX) * 10) / 10;
    setValue(v);
    checkChallenge(v);
    setAnnounce(describe(v));
    if (keyTimer.current) clearTimeout(keyTimer.current);
    keyTimer.current = setTimeout(() => log(es ? "movió" : "moved", es ? `valor extremo ${num(v)}` : `extreme value ${num(v)}`), 600);
  };

  const tryAnother = () => {
    setValue(START);
    solved.current = false;
    setAnnounce(describe(START));
    log(es ? "reintentó" : "retried", es ? "punto en 12,0" : "point at 12.0");
  };

  const reset = () => {
    setValue(START);
    setDragging(false);
    solved.current = false;
    setAnnounce("");
    clear();
  };

  const animate = !dragging && !reduced;
  const move = (v: number): React.CSSProperties => ({
    transform: `translateX(${xOf(v)}px)`,
    transition: animate ? "transform 450ms cubic-bezier(0.22, 1, 0.36, 1)" : "none",
  });

  // Etiquetas con tope en los bordes para que no se corten.
  const labelShift = (v: number) => clamp(xOf(v), 52, W - 52) - xOf(v);
  const meanTxt = `${es ? "Media" : "Mean"} ${num(mean)}`;
  const medianTxt = `${es ? "Mediana" : "Median"} ${num(median)}`;
  const ticks = [0, 5, 10, 15, 20];
  const minor = Array.from({ length: 21 }, (_, i) => i);

  return (
    <DemoShell
      lang={lang}
      onReset={reset}
      instruction={tx(
        lang,
        "Siete personas ganan entre 1,8 y 12 millones al mes. Arrastra el punto más alto y mira cómo reaccionan la media y la mediana.",
        "Seven people earn between 1.8 and 12 million a month. Drag the highest point and watch how the mean and the median react.",
      )}
    >
      <div className={`${cls.stage} p-3 sm:p-4`}>
        <svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          className="block h-auto w-full select-none"
          role="group"
          aria-label={tx(lang, "Siete salarios sobre una recta de 0 a 20 millones, con la media y la mediana", "Seven salaries on a 0 to 20 million line, with the mean and the median")}
        >
          {/* Eje */}
          <line x1={xOf(0)} x2={xOf(AXIS_MAX)} y1={AXIS_Y} y2={AXIS_Y} stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
          {minor.map((t) => (
            <line key={t} x1={xOf(t)} x2={xOf(t)} y1={AXIS_Y} y2={AXIS_Y + (ticks.includes(t) ? 9 : 5)} stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
          ))}
          {ticks.map((t) => (
            <text key={t} x={xOf(t)} y={AXIS_Y + 28} textAnchor="middle" fontSize="16" fill="rgba(255,255,255,0.55)">
              {t}
            </text>
          ))}
          <text x={W / 2} y={H - 8} textAnchor="middle" fontSize="16" fill="rgba(255,255,255,0.75)">
            {tx(lang, "Salario mensual (millones de pesos)", "Monthly salary (millions of pesos)")}
          </text>

          {/* Meta: media por encima de 4 */}
          <line x1={xOf(GOAL)} x2={xOf(GOAL)} y1={TOP_Y} y2={AXIS_Y} stroke="#34D399" strokeOpacity={reached ? 0.9 : 0.45} strokeWidth="1.5" strokeDasharray="4 5" />
          <text x={xOf(GOAL) + 6} y={TOP_Y + 14} fontSize="14" fill="#6EE7B7" fillOpacity={reached ? 1 : 0.7}>
            {tx(lang, "Meta 4", "Goal 4")}
          </text>

          {/* Línea de la mediana */}
          <g style={move(median)}>
            <line x1="0" x2="0" y1={TOP_Y - 6} y2={AXIS_Y} stroke={MEDIAN_COLOR} strokeWidth="3" strokeLinecap="round" />
            <g transform={`translate(${labelShift(median)} 0)`}>
              <rect x="-50" y="34" width="100" height="22" rx="11" fill={MEDIAN_COLOR} fillOpacity="0.18" stroke={MEDIAN_COLOR} strokeOpacity="0.7" />
              <text x="0" y="50" textAnchor="middle" fontSize="15" fontWeight="600" fill="#E9D5FF">
                {medianTxt}
              </text>
            </g>
          </g>

          {/* Línea de la media */}
          <g style={move(mean)}>
            <line x1="0" x2="0" y1={TOP_Y - 6} y2={AXIS_Y} stroke={MEAN_COLOR} strokeWidth="3" strokeLinecap="round" />
            <g transform={`translate(${labelShift(mean)} 0)`}>
              <rect x="-50" y="8" width="100" height="22" rx="11" fill={MEAN_COLOR} fillOpacity="0.18" stroke={MEAN_COLOR} strokeOpacity="0.7" />
              <text x="0" y="24" textAnchor="middle" fontSize="15" fontWeight="600" fill="#FBCFE8">
                {meanTxt}
              </text>
            </g>
          </g>

          {/* Seis salarios fijos, escalonados para que no se tapen */}
          {FIXED.map((v, i) => (
            <circle key={v} cx={xOf(v)} cy={DOT_Y - (i % 3) * 15} r="6.5" fill="rgba(255,255,255,0.85)" stroke="#0A0010" strokeWidth="1.5" />
          ))}

          {/* Punto que se arrastra */}
          <g
            ref={handleRef}
            style={{ ...move(value), touchAction: "none", cursor: dragging ? "grabbing" : "grab", outline: "none" }}
            tabIndex={0}
            role="slider"
            aria-label={tx(lang, "Salario más alto, en millones de pesos", "Highest salary, in millions of pesos")}
            aria-orientation="horizontal"
            aria-valuemin={MIN}
            aria-valuemax={MAX}
            aria-valuenow={value}
            aria-valuetext={es ? `${num(value)} millones de pesos` : `${num(value)} million pesos`}
            onPointerDown={onDown}
            onPointerMove={onMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onKeyDown={onKey}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          >
            <circle cx="0" cy={DOT_Y} r="28" fill="transparent" />
            {focused && <circle cx="0" cy={DOT_Y} r="19" fill="none" stroke="#C084FC" strokeWidth="3" />}
            <circle cx="0" cy={DOT_Y} r={dragging ? 15 : 13} fill="#7C3AED" stroke="#fff" strokeWidth="2.5" />
            <text x="0" y={DOT_Y - 24} textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff" style={{ pointerEvents: "none" }}>
              {num(value)}
            </text>
          </g>
        </svg>
        <p className="mt-1 text-center text-xs text-white/45">
          {tx(lang, "Arrastra el punto morado o usa las flechas del teclado (paso de 0,5).", "Drag the purple point or use the arrow keys (0.5 step).")}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/55">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: MEAN_COLOR }} aria-hidden />
            {tx(lang, "Media", "Mean")}
          </p>
          <p className="mt-1 text-2xl font-bold tabular-nums text-white">
            {num(mean)} <span className="text-sm font-medium text-white/50">{tx(lang, "millones", "million")}</span>
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/55">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: MEDIAN_COLOR }} aria-hidden />
            {tx(lang, "Mediana", "Median")}
          </p>
          <p className="mt-1 text-2xl font-bold tabular-nums text-white">
            {num(median)} <span className="text-sm font-medium text-white/50">{tx(lang, "millones", "million")}</span>
          </p>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {announce}
      </p>

      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5">
        <p className="flex items-center gap-2 text-sm font-medium text-white/90">
          <Target className="h-4 w-4 shrink-0 text-[#6EE7B7]" aria-hidden />
          {tx(lang, "Reto: lleva la media por encima de 4 millones.", "Challenge: bring the mean above 4 million.")}
        </p>
        <button type="button" onClick={tryAnother} className={`${cls.btnGhost} px-3 py-1.5 text-xs`}>
          {tx(lang, "Probar otro caso", "Try another case")}
        </button>
      </div>

      <Feedback tone={reached ? "ok" : null}>
        {es
          ? `La media subió a ${num(mean, mean < 4.05 ? 2 : 1)}. La mediana sigue en ${num(median)}: un solo valor extremo mueve la media y no la mediana.`
          : `The mean rose to ${num(mean, mean < 4.05 ? 2 : 1)}. The median stays at ${num(median)}: a single extreme value moves the mean and not the median.`}
      </Feedback>

      <EventLog lang={lang} events={events} />
    </DemoShell>
  );
}
