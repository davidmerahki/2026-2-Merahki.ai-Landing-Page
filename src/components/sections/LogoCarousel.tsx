"use client";

import Image from "next/image";

const logos: { src: string; alt: string }[] = [
  { src: "/images/logos/pok.png",                          alt: "POK" },
  { src: "/images/logos/codere.png",                       alt: "Codere" },
  { src: "/images/logos/fundacion-corona.png",             alt: "Fundación Corona" },
  { src: "/images/logos/novartis.png",                     alt: "Novartis" },
  { src: "/images/logos/terumo.png",                       alt: "Terumo" },
  { src: "/images/logos/fundacion-santa-fe-bogota.png",    alt: "Fundación Santa Fe de Bogotá" },
  { src: "/images/logos/cafam.png",                        alt: "Cafam" },
  { src: "/images/logos/astrazeneca.png",                  alt: "AstraZeneca" },
  { src: "/images/logos/uk-pact.png",                      alt: "UK PACT" },
  { src: "/images/logos/idartes.png",                      alt: "IDARTES" },
  { src: "/images/logos/luker-chocolate.png",              alt: "Luker Chocolate" },
  { src: "/images/logos/drc.png",                          alt: "DRC – Danish Refugee Council" },
  { src: "/images/logos/universidad-del-valle.png",        alt: "Universidad del Valle" },
  { src: "/images/logos/fundacion-aflora.png",             alt: "Fundación Aflora" },
  { src: "/images/logos/bavaria.png",                      alt: "Bavaria" },
  { src: "/images/logos/espn.png",                         alt: "ESPN" },
  { src: "/images/logos/claro.png",                        alt: "Claro" },
  { src: "/images/logos/celsia.png",                       alt: "Celsia" },
  { src: "/images/logos/pmi.png",                          alt: "Project Management Institute" },
  { src: "/images/logos/universidad-de-los-andes.png",     alt: "Universidad de los Andes" },
  { src: "/images/logos/abbott.png",                       alt: "Abbott" },
  { src: "/images/logos/parque-arauco.png",                alt: "Parque Arauco" },
  { src: "/images/logos/bid.png",                          alt: "BID" },
  { src: "/images/logos/escuela-nacional-del-deporte.png", alt: "Escuela Nacional del Deporte" },
  { src: "/images/logos/fundacion-femsa.png",              alt: "Fundación FEMSA" },
  { src: "/images/logos/unicuces.png",                     alt: "Unicuces" },
  { src: "/images/logos/amshoc.png",                       alt: "AMSHOC" },
  { src: "/images/logos/heel.png",                         alt: "Heel" },
  { src: "/images/logos/alcaldia-mayor-bogota.png",        alt: "Alcaldía Mayor de Bogotá" },
  { src: "/images/logos/universidad-cesar-vallejo.png",    alt: "Universidad César Vallejo" },
  { src: "/images/logos/advanz.png",                       alt: "Advanz International Education" },
  { src: "/images/logos/learnworlds.png",                  alt: "LearnWorlds" },
  { src: "/images/logos/vasquez-kennedy.png",              alt: "Vásquez Kennedy Career Success" },
  { src: "/images/logos/positiva.png",                     alt: "Positiva Compañía de Seguros" },
  { src: "/images/logos/innpulsa.png",                     alt: "iNNpulsa Colombia" },
  { src: "/images/logos/sanofi.png",                       alt: "Sanofi" },
  { src: "/images/logos/raquetsuite.png",                  alt: "RaquetSuite" },
  { src: "/images/logos/query.png",                        alt: "Query" },
];

export default function LogoCarousel() {
  const doubled = [...logos, ...logos];

  return (
    <section className="py-14 border-y border-white/5 overflow-hidden">
      <p className="text-center text-white/30 section-badge mb-8">
        Trusted by leading organizations worldwide
      </p>
      <div className="relative">
        <div className="flex">
          <div className="logo-scroll-track">
            {doubled.map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-8 relative"
                style={{ width: 200, height: 64 }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                  sizes="200px"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-void to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-void to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
