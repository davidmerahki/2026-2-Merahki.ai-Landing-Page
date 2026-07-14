"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Kinetic word-by-word reveal (Uncommon-style), built in code.
 * Each word slides up from a clipped container with a slight rotation.
 */
export default function KineticText({
  text,
  className,
  wordClassName,
  delay = 0,
  once = true,
  immediate = false,
}: {
  text: string;
  className?: string;
  /** Clases que deben pintarse en cada palabra (p.ej. text-gradient-*, que se rompe en ancestros con hijos transformados) */
  wordClassName?: string;
  delay?: number;
  once?: boolean;
  immediate?: boolean;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <span className={`${className ?? ""} ${wordClassName ?? ""}`}>{text}</span>;
  }

  const words = text.split(" ");

  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => {
        const inner = (
          <motion.span
            className={`inline-block will-change-transform ${wordClassName ?? ""}`}
            initial={{ y: "115%", rotate: 3, opacity: 0 }}
            {...(immediate
              ? { animate: { y: "0%", rotate: 0, opacity: 1 } }
              : {
                  whileInView: { y: "0%", rotate: 0, opacity: 1 },
                  viewport: { once, margin: "-60px" },
                })}
            transition={{
              duration: 0.6,
              delay: delay + i * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        );
        return (
          // pb/-mb dan aire a las descendentes (g, p, y) para que overflow-hidden no las corte
          <span
            key={`${word}-${i}`}
            aria-hidden="true"
            className="inline-block overflow-hidden align-bottom pb-[0.18em] -mb-[0.18em]"
          >
            {inner}
          </span>
        );
      })}
    </span>
  );
}
