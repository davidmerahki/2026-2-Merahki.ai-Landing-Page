"use client";

import Script from "next/script";

interface CaseStudyVideoProps {
  videoId: string;
  title: string;
  caption?: string;
}

export default function CaseStudyVideo({ videoId, title, caption }: CaseStudyVideoProps) {
  return (
    <figure className="space-y-4">
      <div className="relative w-full aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl">
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
          title={title}
          loading="lazy"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 w-full h-full"
        />
      </div>
      {caption && <figcaption className="text-sm leading-relaxed text-white/50">{caption}</figcaption>}
      <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />
    </figure>
  );
}
