interface QuoteCardProps {
  quote: string;
  name: string;
  role: string;
  quoteLang?: "en" | "es";
}

export default function QuoteCard({ quote, name, role, quoteLang }: QuoteCardProps) {
  return (
    <figure className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7 flex flex-col">
      <blockquote lang={quoteLang} className="text-white/75 text-sm md:text-base leading-relaxed flex-1">
        “{quote}”
      </blockquote>
      <figcaption className="mt-6 border-t border-white/10 pt-4">
        <p className="font-semibold text-white">{name}</p>
        <p className="mt-1 text-sm text-white/45 leading-relaxed">{role}</p>
      </figcaption>
    </figure>
  );
}
