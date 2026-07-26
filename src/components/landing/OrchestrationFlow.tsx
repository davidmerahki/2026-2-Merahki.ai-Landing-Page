"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, BarChart3, ShieldCheck, Bot } from "lucide-react";

type Copy = {
  inputsLabel: string;
  inputsBadge: string;
  inputs: readonly { num: string; title: string; desc: string }[];
  engineName: string;
  engineBadge: string;
  engineParts: readonly string[];
  outputsLabel: string;
  outputsBadge: string;
  outputs: readonly { title: string; desc: string }[];
  layerLabel: string;
  layerItems: readonly string[];
  closer: string;
  closerSub: string;
};

const OUTPUT_ICONS = [GraduationCap, BarChart3, ShieldCheck, Bot];

/**
 * Flecha conectora con punta y una partícula que viaja en la dirección del
 * flujo. La punta marca el sentido de un vistazo; la partícula lo confirma en
 * movimiento — sin ella, dos cajas unidas por una línea no dicen quién alimenta
 * a quién. Horizontal en desktop, vertical (hacia abajo) en móvil.
 * Cada instancia tiene su propio useId: varios <marker>/<linearGradient> con el
 * mismo id hacen que el navegador resuelva solo el primero.
 */
function FlowArrow({
  delay,
  vertical,
  reduced,
}: {
  delay: number;
  vertical?: boolean;
  reduced: boolean | null;
}) {
  const uid = useId();
  const gradId = `${uid}-grad`;
  const headId = `${uid}-head`;

  const LEN = vertical ? 56 : 64;
  const W = vertical ? 12 : LEN;
  const H = vertical ? LEN : 12;
  const cross = 6; // centro del eje transversal

  const x1 = vertical ? cross : 0;
  const y1 = vertical ? 0 : cross;
  const x2 = vertical ? cross : LEN - 9; // deja aire para la punta
  const y2 = vertical ? LEN - 9 : cross;

  return (
    <div
      className={
        vertical
          ? "flex justify-center py-1 md:hidden"
          : "hidden md:flex items-center justify-center px-1 shrink-0"
      }
      aria-hidden="true"
    >
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="overflow-visible">
        <defs>
          {/* userSpaceOnUse, no objectBoundingBox: una línea recta tiene bbox de
              alto (o ancho) 0 y el gradiente relativo no se puede resolver sobre
              él — el trazo simplemente no se pinta y solo queda la punta. */}
          <linearGradient
            id={gradId}
            gradientUnits="userSpaceOnUse"
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
          >
            <stop offset="0%" stopColor="#f5a97f" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#c6a0f6" stopOpacity="1" />
          </linearGradient>
          {/* Punta de flecha: el ancla visual del sentido del flujo */}
          <marker
            id={headId}
            markerWidth="7"
            markerHeight="7"
            refX="5.5"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0.4 L6,3 L0,5.6 Z" fill="#c6a0f6" />
          </marker>
        </defs>

        <motion.line
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={`url(#${gradId})`}
          strokeWidth={2}
          strokeLinecap="round"
          markerEnd={`url(#${headId})`}
          initial={reduced ? undefined : { pathLength: 0, opacity: 0 }}
          whileInView={reduced ? undefined : { pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay, ease: "easeOut" }}
        />

        {/* Partícula en bucle: deja el sentido del flujo fuera de toda duda */}
        {!reduced && (
          <motion.circle
            r={2.5}
            fill="#f5a97f"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: [0, 1, 1, 0],
              ...(vertical ? { cy: [2, LEN - 11], cx: cross } : { cx: [2, LEN - 11], cy: cross }),
            }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{
              duration: 1.6,
              delay: delay + 0.4,
              repeat: Infinity,
              repeatDelay: 0.7,
              ease: "easeInOut",
            }}
          />
        )}
      </svg>
    </div>
  );
}

/** Etiqueta de etapa: aporta el rótulo semántico (entra / procesa / sale). */
function StageBadge({ text, tone }: { text: string; tone: "in" | "engine" | "out" }) {
  const styles = {
    in: "border-accent-peach/40 text-accent-peach bg-accent-peach/10",
    engine: "border-accent-purple/45 text-accent-purple bg-accent-purple/10",
    out: "border-accent-blue/40 text-accent-blue bg-accent-blue/10",
  }[tone];
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${styles}`}
    >
      {text}
    </span>
  );
}

/**
 * Diagrama de orquestación end-to-end (slide 15 del showroom).
 * Insumos del aliado → motor de virtualización merahki → 4 entregables.
 * Solo SVG + framer-motion: 0 KB de media nueva.
 */
export default function OrchestrationFlow({ copy }: { copy: Copy }) {
  const reduced = useReducedMotion();

  /**
   * Mismo viewport que AnimatedSection (patrón del resto del sitio) para que el
   * disparo sea consistente. Delays cortos: el diagrama es contenido de negocio
   * y no debe quedar esperando una cascada larga.
   */
  const fade = (delay: number) =>
    reduced
      ? { initial: false as const }
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <div className="mt-12">
      <div className="flex flex-col md:flex-row md:items-stretch md:justify-center md:gap-1">
        {/* ── ENTRA ── */}
        <div className="md:w-[30%] md:max-w-[330px]">
          <motion.div className="mb-4 flex items-center gap-2" {...fade(0)}>
            <StageBadge text={copy.inputsBadge} tone="in" />
            <span className="text-[11px] uppercase tracking-[0.18em] text-white/35">
              {copy.inputsLabel}
            </span>
          </motion.div>
          <div className="space-y-3">
            {copy.inputs.map((input, i) => (
              <motion.div
                key={input.num}
                className="rounded-2xl border border-accent-peach/20 bg-accent-peach/[0.04] p-4"
                {...fade(0.05 + i * 0.05)}
              >
                <span className="text-[11px] font-semibold text-accent-peach tracking-[0.2em]">
                  {input.num}
                </span>
                <h3 className="mt-1 font-semibold text-white text-[15px]">{input.title}</h3>
                <p className="mt-0.5 text-white/45 text-sm leading-snug">{input.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <FlowArrow delay={0.15} vertical reduced={reduced} />
        <FlowArrow delay={0.15} reduced={reduced} />

        {/* ── PROCESA ── */}
        <div className="md:w-[26%] md:max-w-[270px] flex flex-col justify-center">
          <motion.div className="mb-4 flex md:justify-center" {...fade(0.18)}>
            <StageBadge text={copy.engineBadge} tone="engine" />
          </motion.div>
          <motion.div
            className="relative w-full rounded-3xl border border-accent-purple/40 bg-gradient-to-b from-glow-indigo/45 to-transparent p-6 text-center"
            {...fade(0.2)}
          >
            {!reduced && (
              <motion.span
                className="absolute inset-0 rounded-3xl border border-accent-purple/30"
                animate={{ opacity: [0.15, 0.6, 0.15], scale: [1, 1.02, 1] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
              />
            )}
            <p className="relative text-lg font-bold text-white">
              merahki<span className="text-accent-purple">.ai</span>
            </p>
            <p className="relative mt-1 text-[13px] text-white/55">{copy.engineName}</p>
            <div className="relative mt-4 flex flex-wrap justify-center gap-2">
              {copy.engineParts.map((part) => (
                <span
                  key={part}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] text-white/70"
                >
                  {part}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <FlowArrow delay={0.25} vertical reduced={reduced} />
        <FlowArrow delay={0.25} reduced={reduced} />

        {/* ── SALE ── */}
        <div className="md:w-[34%] md:max-w-[390px]">
          <motion.div className="mb-4 mt-8 md:mt-0 flex items-center gap-2" {...fade(0.25)}>
            <StageBadge text={copy.outputsBadge} tone="out" />
            <span className="text-[11px] uppercase tracking-[0.18em] text-white/35">
              {copy.outputsLabel}
            </span>
          </motion.div>
          <div className="space-y-3">
            {copy.outputs.map((output, i) => {
              const Icon = OUTPUT_ICONS[i] ?? GraduationCap;
              return (
                <motion.div
                  key={output.title}
                  className="flex gap-3 rounded-2xl border border-accent-blue/20 bg-accent-blue/[0.04] p-4"
                  {...fade(0.3 + i * 0.05)}
                >
                  <Icon className="w-5 h-5 text-accent-blue shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-white text-[15px] leading-snug">
                      {output.title}
                    </h3>
                    <p className="mt-0.5 text-white/45 text-sm leading-snug">{output.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Capa de orquestación ── */}
      <motion.div
        className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6"
        {...fade(0.4)}
      >
        <span className="text-[11px] uppercase tracking-[0.22em] text-white/35 shrink-0">
          {copy.layerLabel}
        </span>
        <div className="flex flex-wrap gap-2">
          {copy.layerItems.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/12 px-3 py-1 text-xs text-white/60"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      {/* ── Remate ── */}
      <motion.div className="mt-10 text-center" {...fade(0.45)}>
        <p className="text-2xl md:text-3xl font-bold text-white tracking-tight">{copy.closer}</p>
        <p className="mt-1 text-white/45">{copy.closerSub}</p>
      </motion.div>
    </div>
  );
}
