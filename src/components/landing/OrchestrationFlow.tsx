"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, BarChart3, ShieldCheck, Bot } from "lucide-react";

type Copy = {
  inputsLabel: string;
  inputs: readonly { num: string; title: string; desc: string }[];
  engineName: string;
  engineParts: readonly string[];
  outputsLabel: string;
  outputs: readonly { title: string; desc: string }[];
  layerLabel: string;
  layerItems: readonly string[];
  closer: string;
  closerSub: string;
};

const OUTPUT_ICONS = [GraduationCap, BarChart3, ShieldCheck, Bot];

/**
 * Línea conectora que se dibuja sola al entrar al viewport. Vertical en móvil
 * (columnas apiladas), horizontal en desktop. Vive fuera del componente padre
 * para que cada instancia tenga su propio useId: cuatro <linearGradient> con el
 * mismo id hacen que el navegador resuelva solo el primero.
 */
function Connector({
  delay,
  vertical,
  reduced,
}: {
  delay: number;
  vertical?: boolean;
  reduced: boolean | null;
}) {
  const gradId = useId();
  return (
    <div
      className={vertical ? "flex justify-center py-3 md:hidden" : "hidden md:flex items-center px-2"}
      aria-hidden="true"
    >
      <svg
        width={vertical ? 2 : 48}
        height={vertical ? 32 : 2}
        viewBox={vertical ? "0 0 2 32" : "0 0 48 2"}
        className="overflow-visible"
      >
        <motion.line
          x1={0}
          y1={0}
          x2={vertical ? 0 : 48}
          y2={vertical ? 32 : 0}
          stroke={`url(#${gradId})`}
          strokeWidth={2}
          strokeLinecap="round"
          initial={reduced ? undefined : { pathLength: 0, opacity: 0 }}
          whileInView={reduced ? undefined : { pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay, ease: "easeOut" }}
        />
        <defs>
          <linearGradient
            id={gradId}
            x1="0"
            y1="0"
            x2={vertical ? "0" : "1"}
            y2={vertical ? "1" : "0"}
          >
            <stop offset="0%" stopColor="#f5a97f" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#c6a0f6" stopOpacity="0.9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/**
 * Diagrama de orquestación end-to-end (slide 15 del showroom).
 *
 * Insumos del aliado → motor de virtualización merahki → 4 entregables.
 * Las conexiones se dibujan con scroll (whileInView escalonado) y el motor
 * late suave. Con prefers-reduced-motion todo aparece en su estado final.
 *
 * Solo SVG + framer-motion: 0 KB de media nueva, sin tocar el presupuesto móvil.
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
      <div className="flex flex-col md:flex-row md:items-stretch md:justify-center">
        {/* ── Insumos ── */}
        <div className="md:w-[30%] md:max-w-[340px]">
          <motion.p
            className="text-[11px] uppercase tracking-[0.22em] text-white/35 mb-4"
            {...fade(0)}
          >
            {copy.inputsLabel}
          </motion.p>
          <div className="space-y-3">
            {copy.inputs.map((input, i) => (
              <motion.div
                key={input.num}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
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

        <Connector delay={0.15} vertical reduced={reduced} />
        <Connector delay={0.15} reduced={reduced} />

        {/* ── Motor ── */}
        <div className="md:w-[26%] md:max-w-[280px] flex items-center">
          <motion.div
            className="relative w-full rounded-3xl border border-accent-purple/35 bg-gradient-to-b from-glow-indigo/40 to-transparent p-6 text-center"
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

        <Connector delay={0.25} vertical reduced={reduced} />
        <Connector delay={0.25} reduced={reduced} />

        {/* ── Salidas ── */}
        <div className="md:w-[34%] md:max-w-[400px]">
          <motion.p
            className="text-[11px] uppercase tracking-[0.22em] text-white/35 mb-4 mt-8 md:mt-0"
            {...fade(0.25)}
          >
            {copy.outputsLabel}
          </motion.p>
          <div className="space-y-3">
            {copy.outputs.map((output, i) => {
              const Icon = OUTPUT_ICONS[i] ?? GraduationCap;
              return (
                <motion.div
                  key={output.title}
                  className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
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
