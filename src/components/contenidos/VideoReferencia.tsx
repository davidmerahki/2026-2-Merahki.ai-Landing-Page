"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import type { Lang, Referencia } from "@/content/contenidos/tipos";

const MODO: Record<Referencia["modo"], [string, string]> = {
  desarrollar: ["Desarrollar a la medida", "Build it custom"],
  integrar: ["Integrar en tu LMS", "Integrate into your LMS"],
  licenciar: ["Licenciar o revender", "License or resell"],
};

/**
 * Fachada de video: muestra la miniatura y un botón de reproducir. El iframe del
 * proveedor (sin cookies en YouTube) se carga solo cuando la persona hace clic.
 */
export default function VideoReferencia({ r, lang }: { r: Referencia; lang: Lang }) {
  const es = lang === "es";
  const L = es ? 0 : 1;
  const [play, setPlay] = useState(false);
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (play) frameRef.current?.focus();
  }, [play]);

  const thumb = r.provider === "youtube" ? `https://i.ytimg.com/vi/${r.videoId}/${r.miniatura ?? "hqdefault"}.jpg` : r.thumb;
  const src =
    r.provider === "youtube"
      ? `https://www.youtube-nocookie.com/embed/${r.videoId}?autoplay=1&rel=0&playsinline=1`
      : `https://player.vimeo.com/video/${r.videoId}?autoplay=1&dnt=1`;
  const titulo = `${r.tituloVideo} · ${r.canal}`;

  return (
    <figure className="flex h-full flex-col">
      <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-black">
        {play ? (
          <iframe
            ref={frameRef}
            src={src}
            title={titulo}
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlay(true)}
            aria-label={`${es ? "Reproducir el video" : "Play the video"} «${r.tituloVideo}», ${es ? "de" : "by"} ${r.canal}${r.duracion ? `, ${r.duracion}` : ""}`}
            className="group absolute inset-0 block h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#C084FC]"
          >
            {thumb && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={thumb} alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none" />
            )}
            <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/10" aria-hidden />
            <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#0A0010] shadow-[0_0_0_8px_rgba(255,255,255,0.14)] transition-transform group-hover:scale-110 motion-reduce:transition-none" aria-hidden>
              <Play className="ml-0.5 h-6 w-6 fill-current" />
            </span>
            <span className="absolute inset-x-3 bottom-2.5 flex items-center justify-between gap-2 text-left text-[11px] font-semibold text-white/90" aria-hidden>
              <span className="truncate">{r.canal}</span>
              {r.duracion && <span className="shrink-0 rounded bg-black/70 px-1.5 py-0.5 tabular-nums">{r.duracion}</span>}
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-3 flex flex-1 flex-col gap-1.5">
        <a
          href={r.url}
          target="_blank"
          rel="noopener"
          className="inline-flex w-fit items-center gap-1 rounded text-sm font-semibold text-white hover:text-[#C084FC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC]"
        >
          {r.plataforma}
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          <span className="sr-only">{es ? "(sitio oficial, se abre en otra pestaña)" : "(official site, opens in a new tab)"}</span>
        </a>
        <p className="text-sm leading-relaxed text-white/75">{r.wow[lang]}</p>
        <p className="text-xs leading-relaxed text-white/55">
          <span className="font-semibold text-[#F9A8D4]">{MODO[r.modo][L]}.</span> {r.merahki[lang]}
        </p>
      </figcaption>
    </figure>
  );
}
