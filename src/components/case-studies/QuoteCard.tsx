interface QuoteCardProps {
  quote: string;
  name: string;
  role: string;
  quoteLang?: "en" | "es";
}

export default function QuoteCard({ quote, name, role, quoteLang }: QuoteCardProps) {
  return (
    <figure className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-7 flex flex-col shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent-peach/30 hover:bg-white/[0.065]">
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent-purple/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative mb-5 flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-3xl leading-none text-accent-peach/80">
        “
      </div>
      <blockquote lang={quoteLang} className="relative text-white/78 text-sm md:text-base leading-relaxed flex-1">
        “{quote}”
      </blockquote>
      <figcaption className="relative mt-6 border-t border-white/10 pt-4">
        <p className="font-semibold text-white">{name}</p>
        <p className="mt-1 text-sm text-white/45 leading-relaxed">{role}</p>
      </figcaption>
    </figure>
  );
}
