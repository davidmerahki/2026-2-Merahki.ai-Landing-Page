"use client";

/**
 * Recorrido 360° de Matterport con fachada (26-nov-2026): miniatura y botón; el iframe se carga solo al hacer clic.
 * La miniatura sale de /api/v1/player/models/<id>/thumb, que redirige a una URL firmada nueva en cada carga.
 */
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Orbit } from "lucide-react";
import type { Lang, Recorrido } from "@/content/contenidos/experiencias";

export default function RecorridoMatterport({ r, lang }: { r: Recorrido; lang: Lang }) {
  const es = lang === "es";
  const [on, setOn] = useState(false);
  const ref = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    if (on) ref.current?.focus();
  }, [on]);
  return (
    <figure className="flex h-full flex-col">
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-black">
        {on ? (
          <iframe
            ref={ref}
            src={`https://my.matterport.com/show/?m=${r.matterport}&play=1&qs=1&lang=${es ? "es" : "en"}`}
            title={`${r.titulo[lang]} · ${r.autor}`}
            allow="fullscreen; xr-spatial-tracking"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setOn(true)}
            aria-label={`${es ? "Entrar al recorrido 360°" : "Enter the 360° tour"} «${r.titulo[lang]}», ${r.autor}`}
            className="group absolute inset-0 block h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#C084FC]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://my.matterport.com/api/v1/player/models/${r.matterport}/thumb`}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transition-none"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" aria-hidden />
            <span className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0A0010] shadow-[0_0_0_10px_rgba(255,255,255,0.14)] transition-transform group-hover:scale-105 motion-reduce:transition-none" aria-hidden>
              <Orbit className="h-4 w-4" />
              {es ? "Entrar al recorrido" : "Enter the tour"}
            </span>
            <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-white/90 ring-1 ring-white/15" aria-hidden>
              360° · Matterport
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-3 flex flex-1 flex-col gap-1">
        <p className="text-sm font-semibold text-white">{r.titulo[lang]}</p>
        <p className="text-sm leading-relaxed text-white/70">{r.descripcion[lang]}</p>
        <a
          href={r.url}
          target="_blank"
          rel="noopener"
          className="mt-0.5 inline-flex w-fit items-center gap-1 rounded text-xs text-[#C4B5FD] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC]"
        >
          {r.autor}
          <ArrowUpRight className="h-3 w-3" aria-hidden />
          <span className="sr-only">{es ? "(se abre en otra pestaña)" : "(opens in a new tab)"}</span>
        </a>
      </figcaption>
    </figure>
  );
}
