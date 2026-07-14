"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  HeartPulse,
  Landmark,
  Briefcase,
  BrainCircuit,
  Leaf,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export type CourseArea = "salud" | "gobierno" | "negocios" | "ia" | "sostenibilidad";

export type Course = {
  title: string;
  client: string;
  year: string;
  area: CourseArea;
  areaLabel: string;
  logo?: string;
};

const AREA_STYLE: Record<
  CourseArea,
  { icon: typeof HeartPulse; bg: string; chip: string; iconColor: string }
> = {
  salud: {
    icon: HeartPulse,
    bg: "bg-gradient-to-br from-accent-blue/30 via-deep to-void",
    chip: "border-accent-blue/40 text-accent-blue",
    iconColor: "text-accent-blue/25",
  },
  gobierno: {
    icon: Landmark,
    bg: "bg-gradient-to-br from-glow-indigo/50 via-deep to-void",
    chip: "border-accent-purple/40 text-accent-purple",
    iconColor: "text-accent-purple/25",
  },
  negocios: {
    icon: Briefcase,
    bg: "bg-gradient-to-br from-accent-peach/25 via-deep to-void",
    chip: "border-accent-peach/40 text-accent-peach",
    iconColor: "text-accent-peach/25",
  },
  ia: {
    icon: BrainCircuit,
    bg: "bg-gradient-to-br from-accent-purple/30 via-deep to-void",
    chip: "border-accent-purple/40 text-accent-purple",
    iconColor: "text-accent-purple/25",
  },
  sostenibilidad: {
    icon: Leaf,
    bg: "bg-gradient-to-br from-accent-blue/20 via-deep to-void",
    chip: "border-accent-peach/40 text-accent-peach",
    iconColor: "text-accent-peach/25",
  },
};

/* Posiciones del coverflow: centro + laterales en diagonal */
const SLOTS = [
  { x: "-62%", scale: 0.78, rotateY: 32, opacity: 0.55, z: 10, blur: false },
  { x: "0%", scale: 1, rotateY: 0, opacity: 1, z: 30, blur: false },
  { x: "62%", scale: 0.78, rotateY: -32, opacity: 0.55, z: 10, blur: false },
];

export default function CourseCarousel({
  courses,
  prevLabel,
  nextLabel,
}: {
  courses: Course[];
  prevLabel: string;
  nextLabel: string;
}) {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();
  const n = courses.length;

  const go = (dir: number) => setIndex((i) => (i + dir + n) % n);

  return (
    <div className="relative">
      {/* Escenario con perspectiva. Alto holgado para que la sombra de las
          tarjetas no se recorte (antes 500px con tarjetas de 460px = 20px, cortaba). */}
      <div
        className="relative h-[500px] md:h-[580px] [clip-path:inset(0)]"
        style={{ perspective: "1400px" }}
      >
        {courses.map((course, i) => {
          // offset relativo al centro: -1, 0, +1 visibles; el resto oculto
          let offset = i - index;
          if (offset > n / 2) offset -= n;
          if (offset < -n / 2) offset += n;
          const visible = Math.abs(offset) <= 1;
          const slot = visible ? SLOTS[offset + 1] : null;
          const style = AREA_STYLE[course.area];
          const Icon = style.icon;

          return (
            <motion.div
              key={course.title}
              className="absolute left-1/2 top-1/2 w-[300px] md:w-[400px] h-[400px] md:h-[460px] -ml-[150px] md:-ml-[200px] -mt-[200px] md:-mt-[230px] cursor-pointer"
              animate={
                slot
                  ? {
                      x: slot.x,
                      scale: slot.scale,
                      rotateY: reduced ? 0 : slot.rotateY,
                      opacity: slot.opacity,
                      zIndex: slot.z,
                    }
                  : { x: offset < 0 ? "-120%" : "120%", scale: 0.6, opacity: 0, zIndex: 0 }
              }
              transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 260, damping: 30 }}
              style={{ transformStyle: "preserve-3d" }}
              onClick={() => {
                if (offset === -1) go(-1);
                if (offset === 1) go(1);
              }}
              aria-hidden={!visible}
            >
              <article
                className={`relative h-full rounded-3xl border border-white/15 overflow-hidden p-7 md:p-8 flex flex-col ${style.bg} shadow-2xl`}
              >
                {/* Ícono decorativo gigante */}
                <Icon className={`absolute -right-8 -bottom-8 w-48 h-48 ${style.iconColor}`} aria-hidden="true" />

                <div className="flex items-center justify-between">
                  <span className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${style.chip}`}>
                    {course.areaLabel}
                  </span>
                  <span className="text-white/40 text-sm font-medium">{course.year}</span>
                </div>

                {/* Logo del cliente: centrado arriba, grande y protagonista (logos blancos → chip oscuro).
                    h fija + w-auto + object-contain preservan el aspecto (sin distorsión). */}
                {course.logo && (
                  <div className="mt-8 flex justify-center relative z-10">
                    <span className="inline-flex items-center justify-center rounded-2xl bg-white/10 border border-white/15 px-7 py-4">
                      <Image
                        src={course.logo}
                        alt=""
                        width={260}
                        height={72}
                        className="h-12 md:h-16 w-auto max-w-[200px] object-contain"
                      />
                    </span>
                  </div>
                )}

                <h3 className="mt-auto text-xl md:text-2xl font-bold text-white leading-snug relative z-10">
                  {course.title}
                </h3>

                <span className="mt-3 block text-white/55 text-xs leading-snug relative z-10">
                  {course.client}
                </span>
              </article>
            </motion.div>
          );
        })}
      </div>

      {/* Controles */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label={prevLabel}
          className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="text-white/40 text-sm tabular-nums">
          {index + 1} / {n}
        </span>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label={nextLabel}
          className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
