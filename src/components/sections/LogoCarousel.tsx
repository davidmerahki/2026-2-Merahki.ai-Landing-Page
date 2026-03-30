"use client";

const logos = [
  "Universidad de los Andes",
  "AstraZeneca",
  "Claro",
  "Beraka Travel",
  "BID",
  "YouAdvanz Miami",
  "Pok.tech",
  "LearnWorlds",
  "Gusto",
  "Meta",
  "Bavaria",
  "NovoNordisk",
];

export default function LogoCarousel() {
  const doubled = [...logos, ...logos];

  return (
    <section className="py-16 border-y border-white/5 overflow-hidden">
      <p className="text-center text-white/30 section-badge mb-8">
        Trusted by leading organizations worldwide
      </p>
      <div className="relative">
        <div className="flex">
          <div className="logo-scroll-track">
            {doubled.map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-8 px-6 py-3 rounded-xl border border-white/10 bg-white/3 hover:bg-white/8 transition-colors cursor-default"
              >
                <span className="text-white/50 font-medium text-sm whitespace-nowrap hover:text-white/80 transition-colors">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
