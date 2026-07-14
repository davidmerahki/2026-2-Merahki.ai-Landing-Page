"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  PenTool,
  MonitorPlay,
  Clapperboard,
  BarChart3,
  BadgeCheck,
} from "lucide-react";

type Lang = "en" | "es";

const COPY: Record<
  Lang,
  {
    header: string;
    stages: { title: string; desc: string }[];
    credTitle: string;
    credVerified: string;
    credNote: string;
  }
> = {
  en: {
    header: "Five layers. One delivery.",
    stages: [
      { title: "Design", desc: "Learning outcomes and rubrics with your experts" },
      { title: "Production & implementation", desc: "AI-produced video and courses, on your LMS" },
      { title: "Delivery & communications", desc: "Cohorts run for you: enrollment, engagement, support" },
      { title: "Analytics", desc: "95+ filters, Kirkpatrick, trained vs. untrained" },
      { title: "Verifiable credentials", desc: "Issued via POK: Open Badge 3.0 + W3C VC" },
    ],
    credTitle: "Micro-credential",
    credVerified: "Verified via POK",
    credNote: "Virtualize once: issue it cohort after cohort",
  },
  es: {
    header: "Cinco capas. Una sola entrega.",
    stages: [
      { title: "Diseño", desc: "Resultados de aprendizaje y rúbricas con tus expertos" },
      { title: "Producción e implementación", desc: "Video y cursos producidos con IA, sobre tu LMS" },
      { title: "Ejecución y comunicaciones", desc: "Cohortes operadas: convocatoria, engagement, soporte" },
      { title: "Analítica", desc: "95+ filtros, Kirkpatrick, entrenados vs. no entrenados" },
      { title: "Credenciales verificables", desc: "Emitidas vía POK: Open Badge 3.0 + W3C VC" },
    ],
    credTitle: "Microcredencial",
    credVerified: "Verificada vía POK",
    credNote: "Virtualiza una vez: emítela cohorte tras cohorte",
  },
};

const STAGE_STYLE = [
  { icon: PenTool, color: "text-accent-peach", chip: "bg-accent-peach/15" },
  { icon: MonitorPlay, color: "text-accent-purple", chip: "bg-accent-purple/15" },
  { icon: Clapperboard, color: "text-accent-blue", chip: "bg-accent-blue/15" },
  { icon: BarChart3, color: "text-accent-pink", chip: "bg-accent-pink/15" },
  { icon: BadgeCheck, color: "text-white", chip: "bg-gradient-peach-purple" },
];

const MULT_STEPS = ["×1", "×2", "×3", "×n"];
const STAGE_MS = 2000;
const MULT_MS = 700;
const HOLD_MS = 1800;

export default function HeroPipeline({ lang = "en" }: { lang?: Lang }) {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const [mult, setMult] = useState(0);
  const copy = COPY[lang];

  useEffect(() => {
    if (reduced) return;
    if (active < 4) {
      const t = setTimeout(() => setActive((a) => a + 1), STAGE_MS);
      return () => clearTimeout(t);
    }
    if (mult < MULT_STEPS.length - 1) {
      const t = setTimeout(() => setMult((m) => m + 1), MULT_MS);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setActive(0);
      setMult(0);
    }, HOLD_MS);
    return () => clearTimeout(t);
  }, [active, mult, reduced]);

  // With reduced motion, show everything lit and the credential visible.
  const current = reduced ? 4 : active;
  const multStep = reduced ? MULT_STEPS.length - 1 : mult;
  const showCredential = current === 4;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 shadow-2xl p-5 sm:p-7">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <span className="text-xs font-medium uppercase tracking-widest text-white/40">
          {copy.header}
        </span>
        <span className="relative flex h-2 w-2">
          {!reduced && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-peach/60" />
          )}
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-peach" />
        </span>
      </div>

      {/* Stages */}
      <div className="relative">
        {/* Connector line + animated fill */}
        <div className="absolute left-[19px] top-5 bottom-5 w-px bg-white/10" />
        <motion.div
          className="absolute left-[19px] top-5 w-px bg-gradient-to-b from-accent-peach via-accent-purple to-accent-blue"
          animate={{ height: `${(current / 4) * 82}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        <div className="space-y-2 relative">
          {copy.stages.map((stage, i) => {
            const style = STAGE_STYLE[i];
            const Icon = style.icon;
            const isActive = i === current;
            const isDone = i < current;
            return (
              <motion.div
                key={stage.title}
                animate={{
                  backgroundColor: isActive
                    ? "rgba(255,255,255,0.06)"
                    : "rgba(255,255,255,0)",
                  borderColor: isActive
                    ? "rgba(255,255,255,0.2)"
                    : "rgba(255,255,255,0)",
                }}
                transition={{ duration: 0.35 }}
                className="flex items-center gap-3.5 rounded-xl border px-2.5 py-2.5"
              >
                <div
                  className={`relative z-10 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                    isActive || isDone ? style.chip : "bg-white/[0.06]"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 transition-colors duration-300 ${
                      isActive || isDone ? style.color : "text-white/25"
                    }`}
                  />
                </div>
                <div className="min-w-0">
                  <p
                    className={`text-sm font-semibold leading-tight transition-colors duration-300 ${
                      isActive ? "text-white" : isDone ? "text-white/70" : "text-white/35"
                    }`}
                  >
                    {stage.title}
                  </p>
                  <p
                    className={`text-xs leading-snug transition-colors duration-300 ${
                      isActive ? "text-white/60" : "text-white/25"
                    }`}
                  >
                    {stage.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Output: the credential, multiplied */}
      <div className="mt-5 h-[92px] relative">
        <AnimatePresence>
          {showCredential && (
            <motion.div
              key="credential"
              initial={{ opacity: 0, y: 14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-x-0"
            >
              <div className="relative">
                {/* Ghost copies stacking behind as it multiplies */}
                {Array.from({ length: multStep }).map((_, g) => (
                  <motion.div
                    key={g}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.25 - g * 0.06 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 rounded-xl border border-white/20 bg-white/5"
                    style={{
                      transform: `translate(${(g + 1) * 7}px, ${(g + 1) * -5}px)`,
                    }}
                  />
                ))}
                <div className="relative rounded-xl border border-white/20 bg-deep/90 px-4 py-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gradient-peach-purple flex items-center justify-center flex-shrink-0">
                    <BadgeCheck className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-white leading-tight">
                      {copy.credTitle}
                    </p>
                    <p className="text-xs text-white/50 leading-snug">
                      {copy.credVerified} · {copy.credNote}
                    </p>
                  </div>
                  <motion.span
                    key={multStep}
                    initial={{ scale: 1.4, opacity: 0.5 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    className="text-lg font-bold text-gradient-peach-purple flex-shrink-0"
                  >
                    {MULT_STEPS[multStep]}
                  </motion.span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
