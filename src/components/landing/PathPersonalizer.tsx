"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Sparkles, ArrowRight, MousePointerClick } from "lucide-react";

type Profile = {
  name: string;
  role: string;
  sector: string;
  traits: readonly string[];
  route: readonly string[];
};

type Copy = {
  coursesLabel: string;
  courses: readonly { name: string; chips: readonly string[] }[];
  engineLabel: string;
  engineDesc: string;
  engineReading: string;
  criteria: readonly string[];
  profilesLabel: string;
  profilesHint: string;
  routeLabel: string;
  routeFor: string;
  catalogLabel: string;
  stepsWord: string;
  profiles: readonly Profile[];
  resultValue: string;
  resultLabel: string;
};

const ROTATE_MS = 4000;

/**
 * Personalización por IA (slide 16 del showroom).
 *
 * Lectura en tres pasos, de izquierda a derecha y de arriba abajo: (1) la
 * persona, (2) el motor leyendo SUS criterios y la ruta que resulta, (3) el
 * catálogo común donde se ilumina esa ruta. El orden importa: la causa (quién
 * es) va antes que el efecto (qué ruta le toca), que es como el visitante lee.
 *
 * Rota sola entre perfiles hasta el primer clic. Ese cambio automático es lo que
 * enseña el argumento — cambia la persona, cambia la ruta — sin pedirle nada al
 * visitante, y de paso revela que las tarjetas son interactivas.
 */
export default function PathPersonalizer({ copy }: { copy: Copy }) {
  const [active, setActive] = useState(0);
  const [touched, setTouched] = useState(false);
  const reduced = useReducedMotion();
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const profile = copy.profiles[active];
  const route = profile.route;

  useEffect(() => {
    if (touched || reduced) return;
    timer.current = setInterval(
      () => setActive((i) => (i + 1) % copy.profiles.length),
      ROTATE_MS
    );
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [touched, reduced, copy.profiles.length]);

  const pick = useCallback((i: number) => {
    setTouched(true);
    setActive(i);
  }, []);

  return (
    <div className="mt-12">
      <div className="grid lg:grid-cols-[minmax(0,300px)_1fr] gap-6 lg:gap-10 items-start">
        {/* ── 1. LA PERSONA (causa) ── */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-accent-peach mb-1">
            {copy.profilesLabel}
          </p>
          <p className="text-white/40 text-sm mb-4 flex items-start gap-1.5">
            <MousePointerClick className="w-3.5 h-3.5 shrink-0 mt-0.5" aria-hidden="true" />
            <span>{copy.profilesHint}</span>
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
                  onClick={() => pick(i)}
                  className={`relative w-full text-left rounded-2xl border p-4 flex items-center gap-3.5 transition-all cursor-pointer ${
                    isActive
                      ? "border-accent-purple/60 bg-accent-purple/10 shadow-lg shadow-accent-purple/5"
                      : "border-white/12 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.05]"
                  }`}
                >
                  <span
                    className={`w-11 h-11 shrink-0 rounded-full flex items-center justify-center font-bold text-base transition-colors ${
                      isActive
                        ? "bg-accent-purple text-void"
                        : "bg-white/8 text-white/50 border border-white/15"
                    }`}
                    aria-hidden="true"
                  >
                    {p.name.charAt(0)}
                  </span>
                  <span className="min-w-0">
                    <span
                      className={`block font-semibold truncate ${isActive ? "text-white" : "text-white/75"}`}
                    >
                      {p.name}
                    </span>
                    <span className="block text-sm text-white/45 truncate">
                      {p.role} · {p.sector}
                    </span>
                  </span>

                  {/* Barra de progreso de la rotación automática: señala que esto se mueve solo */}
                  {isActive && !touched && !reduced && (
                    <motion.span
                      className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-accent-purple/70 origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: ROTATE_MS / 1000, ease: "linear" }}
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 2. EL MOTOR Y LA RUTA (efecto) ── */}
        <div className="space-y-4">
          {/* Motor leyendo los criterios de ESTA persona */}
          <div className="rounded-2xl border border-accent-purple/25 bg-glow-indigo/20 p-4 md:p-5">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent-purple shrink-0" aria-hidden="true" />
              <span className="font-semibold text-white text-sm">{copy.engineLabel}</span>
              <span className="text-white/40 text-sm truncate">
                — {copy.engineReading}{" "}
                <span className="text-white/70 font-medium">{profile.name}</span>
              </span>
            </div>

            <div className="mt-3 flex flex-wrap gap-2 min-h-[30px]">
              <AnimatePresence mode="popLayout">
                {profile.traits.map((trait, i) => (
                  <motion.span
                    key={`${profile.name}-${trait}`}
                    layout
                    initial={reduced ? false : { opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduced ? undefined : { opacity: 0, y: 6 }}
                    transition={{ duration: 0.25, delay: reduced ? 0 : i * 0.06 }}
                    className="rounded-full border border-accent-purple/30 bg-accent-purple/10 px-3 py-1 text-[11px] text-white/75"
                  >
                    {trait}
                  </motion.span>
                ))}
              </AnimatePresence>
            </div>

            <p className="mt-3 text-white/45 text-sm leading-snug">{copy.engineDesc}</p>
          </div>

          {/* La ruta resultante */}
          <div className="rounded-2xl border border-white/12 bg-white/[0.03] p-4 md:p-5">
            <div className="flex items-baseline justify-between gap-3 flex-wrap">
              <p className="text-[11px] uppercase tracking-[0.2em] text-accent-blue">
                {copy.routeLabel}
              </p>
              <p className="text-white/40 text-sm">
                {copy.routeFor}{" "}
                <span className="text-white/70 font-medium">{profile.name}</span> ·{" "}
                {route.length} {copy.stepsWord}
              </p>
            </div>

            <div className="mt-4 flex items-center gap-2 flex-wrap">
              {route.map((chip, idx) => (
                <motion.span
                  key={`${profile.name}-${chip}`}
                  className="flex items-center gap-2"
                  initial={reduced ? false : { opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: reduced ? 0 : idx * 0.1 }}
                >
                  <span className="relative w-11 h-11 rounded-xl bg-accent-purple/20 border border-accent-purple/55 text-white font-bold flex items-center justify-center">
                    {chip}
                    <span className="absolute -top-1.5 -left-1.5 w-5 h-5 rounded-full bg-accent-purple text-[10px] font-bold text-void flex items-center justify-center">
                      {idx + 1}
                    </span>
                  </span>
                  {idx < route.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-accent-purple/60" aria-hidden="true" />
                  )}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. EL CATÁLOGO COMÚN ── */}
      <div className="mt-8">
        <p className="text-[11px] uppercase tracking-[0.2em] text-white/35 mb-4">
          {copy.catalogLabel}
        </p>
        <div className="grid sm:grid-cols-3 gap-3">
          {copy.courses.map((course) => (
            <div
              key={course.name}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-4"
            >
              <p className="text-sm text-white/45 mb-3">{course.name}</p>
              <div className="flex gap-2">
                {course.chips.map((chip) => {
                  const pos = route.indexOf(chip);
                  const inRoute = pos !== -1;
                  return (
                    <motion.div
                      key={chip}
                      className={`relative flex-1 aspect-square rounded-xl border flex items-center justify-center font-bold text-sm ${
                        inRoute
                          ? "border-accent-purple/60 bg-accent-purple/15 text-white"
                          : "border-white/8 bg-white/[0.02] text-white/20"
                      }`}
                      animate={
                        reduced || !inRoute ? undefined : { scale: [1, 1.09, 1] }
                      }
                      transition={{ duration: 0.4, delay: inRoute ? pos * 0.1 : 0 }}
                    >
                      {chip}
                      {inRoute && (
                        <motion.span
                          className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-accent-purple text-[10px] font-bold text-void flex items-center justify-center"
                          initial={reduced ? false : { scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.25, delay: reduced ? 0 : pos * 0.1 }}
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
      </div>

      {/* ── Remate económico ── */}
      <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">
        <p className="text-2xl font-bold text-gradient-peach-purple shrink-0">
          {copy.resultValue}
        </p>
        <p className="text-white/50 text-sm leading-snug">{copy.resultLabel}</p>
      </div>
    </div>
  );
}
