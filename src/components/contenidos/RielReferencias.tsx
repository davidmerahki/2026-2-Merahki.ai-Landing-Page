"use client";

/** Franja «Así se ve en el mercado» del catálogo (25-nov-2026): todos los videos de referencia en un riel con anterior y siguiente. */
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Lang, Referencia } from "@/content/contenidos/experiencias";
import VideoReferencia from "@/components/contenidos/VideoReferencia";

export default function RielReferencias({ lang, refs, labels }: { lang: Lang; refs: Referencia[]; labels: { prev: string; next: string } }) {
  const riel = useRef<HTMLDivElement>(null);
  const mover = (d: -1 | 1) => {
    const el = riel.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: d * Math.max(320, el.clientWidth * 0.8), behavior: reduce ? "auto" : "smooth" });
  };
  const btn =
    "inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/85 transition-colors hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC]";
  return (
    <div>
      <div className="mb-5 flex justify-end gap-2">
        <button type="button" className={btn} onClick={() => mover(-1)} aria-label={labels.prev}>
          <ChevronLeft className="h-5 w-5" aria-hidden />
        </button>
        <button type="button" className={btn} onClick={() => mover(1)} aria-label={labels.next}>
          <ChevronRight className="h-5 w-5" aria-hidden />
        </button>
      </div>
      <div ref={riel} className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-4 px-4 pb-4 [scrollbar-width:thin] sm:-mx-6 sm:scroll-px-6 sm:px-6">
        {refs.map((r) => (
          <div key={r.videoId} className="w-[290px] shrink-0 snap-start sm:w-[340px]">
            <VideoReferencia r={r} lang={lang} />
          </div>
        ))}
      </div>
    </div>
  );
}
