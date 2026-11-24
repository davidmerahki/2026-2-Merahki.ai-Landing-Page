import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Lang } from "@/content/blog/types";
import { articulosDe, pathDe } from "@/content/blog/registry";

/** Tarjetas de los artículos escritos como datos (src/content/blog), más nuevos primero. */
export default function ArticleCards({ lang }: { lang: Lang }) {
  const lista = articulosDe(lang);
  if (!lista.length) return null;
  const mes = (iso: string) =>
    new Date(iso + "T12:00:00Z").toLocaleDateString(lang === "es" ? "es-CO" : "en-US", { year: "numeric", month: "long" });
  return (
    <>
      {lista.map((a) => (
        <Link key={a.slug} href={pathDe(a)} className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:border-white/20 transition-all group">
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/8 text-white/70 text-xs font-medium tracking-widest uppercase">{a.kicker}</span>
            {a.adaptedFrom && (
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs font-medium tracking-widest uppercase">{a.adaptedFrom.publisher}</span>
            )}
          </div>
          <h2 className="text-white font-bold text-xl leading-snug group-hover:text-gradient-peach-purple transition-all">{a.title}</h2>
          <p className="text-white/55 text-sm leading-relaxed flex-1">{a.description}</p>
          <div className="flex items-center justify-between pt-2 border-t border-white/08">
            <span className="text-white/30 text-xs">David González · {mes(a.published)}</span>
            <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white/80 transition-colors" />
          </div>
        </Link>
      ))}
    </>
  );
}
