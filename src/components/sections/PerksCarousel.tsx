import Image from "next/image";

const perks: { src: string; alt: string }[] = [
  { src: "/images/perks/badge_teal-spring-2.svg",                          alt: "Teal Spring Badge" },
  { src: "/images/perks/best-support.svg",                                  alt: "Best Support" },
  { src: "/images/perks/capterra-best-value.svg",                           alt: "Capterra Best Value" },
  { src: "/images/perks/capterra-shortlist.svg",                            alt: "Capterra Shortlist" },
  { src: "/images/perks/getapp-leaders.svg",                                alt: "GetApp Leaders" },
  { src: "/images/perks/high-performer.svg",                                alt: "High Performer" },
  { src: "/images/perks/regional-leader.svg",                               alt: "Regional Leader" },
  { src: "/images/perks/software-advice-best-customer-support.svg",         alt: "Software Advice Best Customer Support" },
  { src: "/images/perks/users-most-likely-to-recommend.svg",                alt: "Users Most Likely to Recommend" },
];

export default function PerksCarousel() {
  const doubled = [...perks, ...perks];

  return (
    <section className="py-10 border-t border-white/5 overflow-hidden">
      <p className="text-center text-white/30 section-badge mb-8">
        Recognized by the world&apos;s leading software review platforms
      </p>

      <div className="relative">
        <div className="flex">
          <div className="logo-scroll-track">
            {doubled.map((perk, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-6 relative"
                style={{ width: 110, height: 130 }}
              >
                <Image
                  src={perk.src}
                  alt={perk.alt}
                  fill
                  className="object-contain opacity-90 hover:opacity-100 transition-opacity"
                  sizes="110px"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-void to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-void to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
