"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";
import { ArrowDown } from "lucide-react";
import CtaLink from "@/components/landing/CtaLink";
import GlowBackground from "@/components/ui/GlowBackground";

type HeroCopy = {
  h1a: string;
  h1b: string;
  h1c: string;
  sub: string;
  ctaPrimary: string;
  scrollHint: string;
  scrollHintShort: string;
  marquee: readonly string[];
};

/**
 * Hero scroll-driven, estilo "el scroll controla el título":
 * 1. Al cargar, el hero queda PEGADO (sticky) y el video es el protagonista.
 * 2. Al scrollear, la página no baja: el scroll revela el título de IZQUIERDA A
 *    DERECHA, línea por línea, con un clip-path scrubbeado (no por tiempo).
 * 3. Cuando el título termina de aparecer, el pin se suelta y la página baja normal.
 * El video vive en public/videos/hero-bg-720.mp4 (todas las pantallas; con
 * Save-Data o prefers-reduced-motion se queda el fondo de marca sin video).
 */
export default function HeroScroll({
  copy,
  agendaHref,
}: {
  copy: HeroCopy;
  agendaHref: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (reduced) return;
    // El video ya pesa 2 MB (antes 19.7 MB), así que también corre en móvil.
    // Única excepción: usuarios con ahorro de datos activo (Save-Data) se
    // quedan con el fondo de marca — el poster/glow cubre el hero igual.
    type ConnectionInfo = { saveData?: boolean };
    const conn = (navigator as { connection?: ConnectionInfo }).connection;
    if (conn?.saveData) return;
    setShowVideo(true);
  }, [reduced]);

  // iOS Safari no respeta el autoPlay declarativo cuando el <video> se monta
  // después de la hidratación, y el Low Power Mode lo bloquea del todo.
  // Reproducción imperativa: muted forzado antes de play() (React no siempre
  // refleja el atributo), reintento en canplay y al primer toque/scroll.
  useEffect(() => {
    if (!showVideo) return;
    const v = videoRef.current;
    if (!v) return;
    v.defaultMuted = true;
    v.muted = true;
    const tryPlay = () => {
      if (v.paused) v.play().catch(() => {});
    };
    tryPlay();
    v.addEventListener("canplay", tryPlay);
    window.addEventListener("touchstart", tryPlay, { once: true, passive: true });
    window.addEventListener("scroll", tryPlay, { once: true, passive: true });
    return () => {
      v.removeEventListener("canplay", tryPlay);
      window.removeEventListener("touchstart", tryPlay);
      window.removeEventListener("scroll", tryPlay);
    };
  }, [showVideo]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Velo que oscurece: video protagonista → texto protagonista
  const overlay = useTransform(scrollYProgress, [0, 0.85], [0.12, 0.9]);

  // Línea 1 se auto-revela al cargar (ver JSX): el primer paint nunca queda vacío.
  // Líneas 2-3 siguen scrubbeadas por scroll (rangos corridos hacia el inicio).
  const w2 = useTransform(scrollYProgress, [0.12, 0.45], [100, 0]);
  const w3 = useTransform(scrollYProgress, [0.38, 0.72], [100, 0]);
  const clip2 = useMotionTemplate`inset(0 ${w2}% 0 0)`;
  const clip3 = useMotionTemplate`inset(0 ${w3}% 0 0)`;

  // Subhead + CTA + marquee entran al final del recorrido
  const tailO = useTransform(scrollYProgress, [0.68, 0.88], [0, 1]);
  const tailY = useTransform(scrollYProgress, [0.68, 0.88], [24, 0]);
  const marqueeO = useTransform(scrollYProgress, [0.78, 0.96], [0, 1]);
  const hintO = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  const full = { clipPath: "inset(0 0 0 0)" } as const;

  return (
    <section ref={ref} className={reduced ? "relative" : "relative h-[160vh]"}>
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center px-6 pt-20 pb-8">
        {/* Fondo: glow de marca (base + fallback sin video) + video full-bleed */}
        <div className="absolute inset-0" aria-hidden="true">
          <GlowBackground
            indigoPosition={{ x: "22%", y: "35%" }}
            rustPosition={{ x: "80%", y: "70%" }}
          />
          {showVideo && (
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              src="/videos/hero-bg-720.mp4"
              poster="/videos/hero-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onEnded={(e) => {
                // Refuerzo del loop: algunos navegadores lo ignoran tras
                // bloquear el autoplay inicial
                e.currentTarget.currentTime = 0;
                e.currentTarget.play().catch(() => {});
              }}
            />
          )}
          <motion.div
            className="absolute inset-0 bg-void"
            style={reduced ? { opacity: 0.78 } : { opacity: overlay }}
          />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-void" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
          <h1 className="font-bold tracking-tight leading-[1.07] text-[clamp(1.9rem,4.4vw,4rem)]">
            {/* Línea 1: barrido L→R por TIEMPO al montar (no por scroll) para que
                el hero nunca aterrice vacío — clave en móvil, donde no hay video. */}
            <motion.span
              className="block text-white"
              initial={reduced ? false : { clipPath: "inset(0 100% 0 0)" }}
              animate={reduced ? undefined : { clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {copy.h1a}
            </motion.span>
            <motion.span className="block text-white" style={reduced ? full : { clipPath: clip2 }}>
              {copy.h1b}
            </motion.span>
            <motion.span
              className="block pb-2 text-gradient-peach-purple"
              style={reduced ? full : { clipPath: clip3 }}
            >
              {copy.h1c}
            </motion.span>
          </h1>

          <motion.div
            className="mt-7 flex flex-col sm:flex-row sm:items-center gap-5 md:gap-8"
            style={reduced ? { opacity: 1 } : { opacity: tailO, y: tailY }}
          >
            <p className="text-base md:text-lg text-white/60 max-w-md leading-relaxed">{copy.sub}</p>
            <CtaLink href={agendaHref} event="cta_primary_hero">
              {copy.ctaPrimary}
            </CtaLink>
          </motion.div>
        </div>

        {/* Marquee de disciplinas */}
        <motion.div
          className="relative z-10 -mx-6 overflow-hidden border-y border-white/10 py-3.5 select-none"
          style={reduced ? { opacity: 1 } : { opacity: marqueeO }}
          aria-hidden="true"
        >
          <div className="flex w-max animate-scroll-left">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex items-center">
                {copy.marquee.map((term) => (
                  <span
                    key={`${dup}-${term}`}
                    className="flex items-center whitespace-nowrap px-6 text-sm uppercase tracking-[0.25em] text-white/40"
                  >
                    {term}
                    <span className="ml-12 text-accent-peach">·</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hint: visible al aterrizar, se desvanece al empezar a scrollear */}
        <motion.div
          className="relative z-10 mt-5 flex items-center justify-center gap-2 text-white/60 text-xs uppercase tracking-[0.2em]"
          style={reduced ? { opacity: 0 } : { opacity: hintO }}
        >
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          {/* Móvil: versión corta — la frase completa chocaba con el switcher EN|ES */}
          <span className="md:hidden">{copy.scrollHintShort}</span>
          <span className="hidden md:inline">{copy.scrollHint}</span>
        </motion.div>
      </div>
    </section>
  );
}
