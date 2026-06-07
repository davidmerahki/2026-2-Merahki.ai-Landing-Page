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
      <div className="relative rounded-[2rem] bg-gradient-to-br from-accent-peach/25 via-accent-purple/20 to-accent-blue/20 p-px shadow-2xl shadow-accent-purple/10">
        <div className="relative w-full aspect-video overflow-hidden rounded-[calc(2rem-1px)] border border-white/10 bg-black/50">
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-black/20 via-transparent to-white/5" />
          <iframe
            src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
            title={title}
            loading="lazy"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
      {caption && <figcaption className="max-w-3xl text-sm leading-relaxed text-white/55">{caption}</figcaption>}
      <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />
    </figure>
  );
}
