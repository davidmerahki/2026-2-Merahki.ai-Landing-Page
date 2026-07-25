"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

type Copy = {
  coursesLabel: string;
  courses: readonly { name: string; chips: readonly string[] }[];
  engineLabel: string;
  engineDesc: string;
  criteria: readonly string[];
  profilesLabel: string;
  profiles: readonly { name: string; role: string; route: readonly string[] }[];
  resultValue: string;
  resultLabel: string;
};

/**
 * Personalización por IA (slide 16 del showroom).
 *
 * 12 fichas de 3 cursos ya virtualizados. Al elegir un perfil, su ruta se
 * ilumina ficha por ficha y se muestra la secuencia — la demo del argumento
 * "virtualizas una vez, la IA rearma rutas infinitas, sin re-pagar producción".
 *
 * Arranca con el primer perfil activo para que la sección nunca se vea muerta
 * si nadie interactúa. Sin media: solo estado + framer-motion.
 */
export default function PathPersonalizer({ copy }: { copy: Copy }) {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const profile = copy.profiles[active];
  const route = profile.route;

  const positionInRoute = (chip: string) => route.indexOf(chip);

  return (
    <div className="mt-12 grid lg:grid-cols-[1fr_minmax(0,380px)] gap-8 lg:gap-12 items-start">
      {/* ── Grilla de fichas ── */}
      <div>
        <p className="text-[11px] uppercase tracking-[0.22em] text-white/35 mb-4">
          {copy.coursesLabel}
        </p>
        <div className="space-y-3">
          {copy.courses.map((course) => (
            <div
              key={course.name}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
            >
              <p className="text-sm text-white/50 mb-3">{course.name}</p>
              <div className="flex gap-2.5">
                {course.chips.map((chip) => {
                  const pos = positionInRoute(chip);
                  const inRoute = pos !== -1;
                  return (
                    <motion.div
                      key={chip}
                      className={`relative flex-1 aspect-square max-w-[64px] rounded-xl border flex items-center justify-center font-bold text-sm transition-colors ${
                        inRoute
                          ? "border-accent-purple/60 bg-accent-purple/15 text-white"
                          : "border-white/10 bg-white/[0.02] text-white/25"
                      }`}
                      animate={
                        reduced
                          ? undefined
                          : inRoute
                            ? { scale: [1, 1.08, 1], opacity: 1 }
                            : { scale: 1, opacity: 1 }
                      }
                      transition={{ duration: 0.4, delay: inRoute ? pos * 0.12 : 0 }}
                    >
                      {chip}
                      {inRoute && (
                        <motion.span
                          className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-accent-purple text-[10px] font-bold text-void flex items-center justify-center"
                          initial={reduced ? false : { scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.25, delay: pos * 0.12 }}
                        >
                          {pos + 1}
                        </motion.span>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Motor IA + criterios */}
        <div className="mt-4 rounded-2xl border border-accent-purple/25 bg-glow-indigo/20 p-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-accent-purple" aria-hidden="true" />
            <span className="font-semibold text-white text-sm">{copy.engineLabel}</span>
          </div>
          <p className="mt-1.5 text-white/50 text-sm leading-snug">{copy.engineDesc}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {copy.criteria.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/12 px-2.5 py-1 text-[11px] text-white/55"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Perfiles + ruta resultante ── */}
      <div>
        <p className="text-[11px] uppercase tracking-[0.22em] text-white/35 mb-4">
          {copy.profilesLabel}
        </p>
        <div className="space-y-2.5" role="tablist" aria-label={copy.profilesLabel}>
          {copy.profiles.map((p, i) => {
            const isActive = i === active;
            return (
              <button
                key={p.name}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(i)}
                className={`w-full text-left rounded-2xl border p-4 transition-colors cursor-pointer ${
                  isActive
                    ? "border-accent-purple/55 bg-accent-purple/10"
                    : "border-white/10 bg-white/[0.02] hover:border-white/25"
                }`}
              >
                <span className={`font-semibold ${isActive ? "text-white" : "text-white/70"}`}>
                  {p.name}
                </span>
                <span className="block text-sm text-white/45 mt-0.5">{p.role}</span>

                {isActive && (
                  <motion.div
                    className="mt-3 flex items-center gap-1.5 flex-wrap"
                    initial={reduced ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {p.route.map((chip, idx) => (
                      <span key={chip} className="flex items-center gap-1.5">
                        <span className="w-7 h-7 rounded-lg bg-accent-purple/25 border border-accent-purple/50 text-white text-xs font-bold flex items-center justify-center">
                          {chip}
                        </span>
                        {idx < p.route.length - 1 && (
                          <ArrowRight className="w-3 h-3 text-white/30" aria-hidden="true" />
                        )}
                      </span>
                    ))}
                  </motion.div>
                )}
              </button>
            );
          })}
        </div>

        {/* Remate económico */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-2xl font-bold text-gradient-peach-purple">{copy.resultValue}</p>
          <p className="mt-1 text-white/50 text-sm leading-snug">{copy.resultLabel}</p>
        </div>
      </div>
    </div>
  );
}
