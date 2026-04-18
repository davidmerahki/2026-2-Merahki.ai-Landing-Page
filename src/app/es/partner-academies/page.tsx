import type { Metadata } from "next";
import Image from "next/image";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AgentCard from "@/components/ui/AgentCard";
import ContactSection from "@/components/sections/ContactSection";
import PartnerProposal from "@/components/sections/PartnerProposal";
import LogoCarousel from "@/components/sections/LogoCarousel";
import Link from "next/link";
import { ArrowRight, Zap, TrendingUp, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Partner Academies",
  description:
    "Los programas de enablement impulsados por IA de merahki.ai ayudan a los partners a vender más, antes — con menos esfuerzo de tu equipo. Automatiza el onboarding de partners, acelera la certificación y personaliza el enablement a escala global.",
  alternates: {
    canonical: "https://merahki.ai/es/partner-academies",
    languages: { en: "https://merahki.ai/partner-academies" },
  },
  openGraph: {
    title: "Partner Academies — Activa a tus partners rápidamente | merahki.ai",
    description:
      "Activa un ecosistema global de partners para cerrar ventas más rápido con onboarding y certificación personalizados por IA.",
    url: "https://merahki.ai/es/partner-academies",
    type: "website",
  },
};

const features = [
  {
    icon: Zap,
    title: "Rapid Onboarding",
    bullets: [
      "Entrega learning journeys personalizados por tier de partner, rol o región.",
      "Reduce el tiempo hasta la primera venta con secuencias de onboarding dinámicas.",
    ],
    image: "/images/partner-education/rapid-onboarding.jpg",
    imageAlt: "Dashboard de rapid onboarding de partners",
    reverse: false,
  },
  {
    icon: TrendingUp,
    title: "Performance Insights",
    bullets: [
      "Vincula la formación del partner con la contribución al pipeline y el impacto en revenue.",
      "Accede a reportes clave al instante, con analytics conversacional próximamente en Labs.",
    ],
    image: "/images/partner-education/performance-insights.jpg",
    imageAlt: "Analytics de performance insights de partners",
    reverse: true,
  },
  {
    icon: Award,
    title: "Scalable Certification",
    bullets: [
      "Crea, lanza y mantiene programas de certificación sin retrabajos manuales.",
      "Potencia la credibilidad del partner y genera confianza en el cliente en cada tier.",
    ],
    image: "/images/partner-education/scalable-certification.png",
    imageAlt: "Programa de certificación escalable de partners",
    reverse: false,
  },
];

const agents = [
  {
    name: "Creator Agent",
    availability: "available" as const,
    description:
      "Transforma presentaciones de ventas, scripts de demo y briefs de lanzamiento en learning paths estructurados para partners.",
    image: "/images/agents/creator-agent.jpg",
  },
  {
    name: "Manager Agent",
    availability: "early-access" as const,
    description:
      "Asigna onboarding o certificación a grupos específicos de partners con una sola instrucción en lenguaje natural. Las capacidades crecen cada mes a través de nuestro modular intent framework.",
    image: "/images/agents/manager-agent.jpg",
  },
  {
    name: "Learner Agent",
    availability: "early-access" as const,
    description:
      "Actúa como tutor de IA adaptado al rol del partner — respondiendo preguntas, recomendando repasos y mostrando contenido nuevo a medida que los productos evolucionan.",
    image: "/images/agents/learner-agent.jpg",
  },
];

const caseStudies = [
  {
    company: "Gusto",
    metric: "3x–15x",
    desc: "crecimiento en revenue de partners usando certificación personalizada por IA.",
    color: "from-accent-peach/20",
  },
  {
    company: "Meta",
    metric: "Millones",
    desc: "de personas alcanzadas en todo el mundo a través de un partner enablement escalado.",
    color: "from-accent-blue/20",
  },
];

export default function PartnerAcademiesPageES() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 text-center">
        <GlowBackground
          indigoPosition={{ x: "30%", y: "40%" }}
          rustPosition={{ x: "70%", y: "60%" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <AnimatedSection immediate>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">
              Partner Academies
            </span>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Activa a tus{" "}
              <span className="text-gradient-peach-purple">partners</span> rápidamente
            </h1>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Los programas de enablement impulsados por IA ayudan a los partners a vender más, antes — con menos esfuerzo de tu equipo.
            </p>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.3}>
            <Link
              href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
            >
              Agenda un Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <LogoCarousel />

      {/* Problem Narrative */}
      <section className="relative py-16 px-6">
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="narrative-card rounded-2xl p-10 space-y-4 text-center">
              <h2 className="text-2xl font-bold text-white">
                Equipa a tus partners para que rindan desde el primer día
              </h2>
              <p className="text-white/60 leading-relaxed">
                El revenue de un partner depende de qué tan rápido puede aprender tus productos, comunicar tu propuesta de valor y entregar resultados. Pero habilitar un ecosistema global de partners es lento, difícil de personalizar y complicado de medir.
              </p>
              <p className="text-white/60 leading-relaxed">
                merahki.ai lo cambia todo. Nuestra plataforma impulsada por IA automatiza el onboarding de partners, acelera la certificación y personaliza el enablement — liberando a tu equipo para enfocarse en la estrategia mientras los partners aceleran más rápido.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "80%", y: "50%" }}
          rustPosition={{ x: "20%", y: "40%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Capacidades del Ecosystem
                <br />
                <span className="text-gradient-peach-purple">
                  para la aceleración de partners
                </span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-28">
            {features.map((f) => (
              <AnimatedSection key={f.title} delay={0.1}>
                <div
                  className={`flex flex-col gap-10 items-center ${
                    f.reverse ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  <div className="flex-1 space-y-6">
                    <div className="w-11 h-11 rounded-xl bg-accent-purple/20 flex items-center justify-center">
                      <f.icon className="w-5 h-5 text-accent-purple" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {f.title}
                    </h3>
                    <ul className="space-y-3">
                      {f.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <span className="text-accent-purple text-lg leading-none mt-0.5">✦</span>
                          <span className="text-white/65 leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex-1 w-full">
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl aspect-[16/10]">
                      <Image
                        src={f.image}
                        alt={f.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents */}
      <section className="relative py-20 px-6">
        <GlowBackground
          indigoPosition={{ x: "30%", y: "60%" }}
          rustPosition={{ x: "70%", y: "30%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="section-badge text-white/30 mb-4 inline-block">
                Powered by merahki.ai
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                AI agents para el{" "}
                <span className="text-gradient-blue-pink">
                  enablement de partners
                </span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {agents.map((agent, i) => (
              <AnimatedSection key={agent.name} delay={i * 0.1} className="h-full">
                <AgentCard
                  name={agent.name}
                  availability={agent.availability}
                  description={agent.description}
                  image={agent.image}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Proven at Scale */}
      <section className="relative py-20 px-6">
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold">
                Probado{" "}
                <span className="text-gradient-peach-purple">a escala</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((cs, i) => (
              <AnimatedSection key={cs.company} delay={i * 0.15}>
                <div
                  className={`rounded-2xl p-8 border border-white/10 bg-gradient-to-br ${cs.color} to-transparent space-y-3`}
                >
                  <p className="section-badge text-white/40">{cs.company}</p>
                  <p className="text-5xl font-bold text-gradient-peach-purple">
                    {cs.metric}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {cs.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Only with merahki.ai */}
      <section className="relative py-24 px-6 text-center">
        <GlowBackground
          indigoPosition={{ x: "50%", y: "50%" }}
          rustPosition={{ x: "70%", y: "40%" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <AnimatedSection>
            <span className="section-badge text-white/30 mb-2 inline-block">
              Solo con merahki.ai
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              La única plataforma creada específicamente para la{" "}
              <span className="text-gradient-peach-purple">
                aceleración de partners a escala
              </span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Link
              href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all"
            >
              Activa a tus Partners <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <PartnerProposal />

      <ContactSection
        heading="Construye tu Partner Academy"
        subheading="Habilita, certifica y escala tu ecosistema de partners con aprendizaje potenciado por IA."
      />
    </div>
  );
}
