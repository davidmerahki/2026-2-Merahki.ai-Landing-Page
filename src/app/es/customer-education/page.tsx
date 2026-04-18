import type { Metadata } from "next";
import Image from "next/image";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AgentCard from "@/components/ui/AgentCard";
import ContactSection from "@/components/sections/ContactSection";
import OurProposal from "@/components/sections/OurProposal";
import LogoCarousel from "@/components/sections/LogoCarousel";
import Link from "next/link";
import { ArrowRight, Award, Brain, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Customer Education",
  description:
    "Los programas de onboarding, adopción y expansión impulsados por IA de merahki.ai convierten a los usuarios en promotores. Reduce el Time-to-Value, aumenta la adopción y desbloquea oportunidades de expansión sin aumentar la carga de trabajo de tu equipo.",
  alternates: {
    canonical: "https://merahki.ai/es/customer-education",
    languages: { en: "https://merahki.ai/customer-education" },
  },
  openGraph: {
    title: "Customer Education — Haz crecer a tus clientes más rápido | merahki.ai",
    description:
      "Reduce el Time-to-Value, aumenta la adopción y desbloquea la expansión a través de experiencias de aprendizaje personalizadas potenciadas por IA.",
    url: "https://merahki.ai/es/customer-education",
    type: "website",
  },
};

const features = [
  {
    icon: Brain,
    title: "Desarrollo de habilidades continuo",
    bullets: [
      "Entrega contenido generado por IA basado en patrones de uso, casos de soporte o feedback.",
      "Mantén a tus clientes adelante de tu roadmap de producto con aprendizaje continuo y contextual.",
    ],
    image: "/images/customer-education/ongoing-skills.jpg",
    imageAlt: "Dashboard de desarrollo de habilidades continuo",
    reverse: false,
  },
  {
    icon: Award,
    title: "Customer Certification",
    bullets: [
      "Construye y actualiza programas de certificación en semanas.",
      "Demuestra valor a tus clientes y aumenta la stickiness.",
    ],
    image: "/images/customer-education/customer-certification.jpg",
    imageAlt: "Constructor de programas de certificación",
    reverse: true,
  },
  {
    icon: Zap,
    title: "Feature Adoption Tracker",
    bullets: [
      "Identifica automáticamente a los clientes que necesitan formación sobre nuevas versiones.",
      "Activa contenido dirigido para impulsar la adopción y reducir el churn.",
    ],
    image: "/images/customer-education/feature-adoption.png",
    imageAlt: "Analytics del Feature Adoption Tracker",
    reverse: false,
  },
];

const agents = [
  {
    name: "Creator Agent",
    availability: "available" as const,
    description:
      "Genera estructuras de cursos, guías y evaluaciones a partir de release notes, documentación o webinars grabados — en minutos.",
    image: "/images/agents/creator-agent.jpg",
  },
  {
    name: "Manager Agent",
    availability: "early-access" as const,
    description:
      "Asigna, actualiza y reporta sobre el aprendizaje de clientes con instrucciones en lenguaje natural. Capacidades en expansión mensual a través de nuestro modular intent framework.",
    image: "/images/agents/manager-agent.jpg",
  },
  {
    name: "Learner Agent",
    availability: "early-access" as const,
    description:
      "Ofrece a tus clientes un tutor de IA persistente que responde preguntas, sugiere próximos pasos y refuerza el aprendizaje a lo largo del tiempo.",
    image: "/images/agents/learner-agent.jpg",
  },
];

const caseStudies = [
  {
    company: "Franky",
    metric: "3x–15x",
    desc: "crecimiento en revenue de partners usando certificación personalizada por IA.",
    color: "from-accent-purple/20",
  },
  {
    company: "Bavaria",
    metric: "200+",
    desc: "aprendices incorporados en una nueva funcionalidad de la app logística de Bavaria en el primer mes usando onboarding adaptativo.",
    color: "from-accent-blue/20",
  },
];

export default function CustomerEducationPageES() {
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
              Customer Education
            </span>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Haz crecer a tus clientes{" "}
              <span className="text-gradient-peach-purple">más rápido</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Los programas de onboarding, adopción y expansión impulsados por IA convierten a los usuarios en promotores.
            </p>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
              >
                Agenda un Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <LogoCarousel />

      {/* Problem Narrative */}
      <section className="relative py-16 px-6">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <div className="narrative-card rounded-2xl p-10 space-y-4">
              <h2 className="text-2xl font-bold text-white">
                Enablement más inteligente para el crecimiento del cliente
              </h2>
              <p className="text-white/60 leading-relaxed">
                La mejor forma de aumentar el revenue es hacer crecer a tus clientes. Pero hacer el onboarding, educarlos y retenerlos a escala es lento, manual e inconsistente — especialmente cuando los productos evolucionan rápidamente.
              </p>
              <p className="text-white/60 leading-relaxed">
                merahki.ai lo soluciona. Nuestras estrategias entregan experiencias de aprendizaje personalizadas y medibles que reducen el Time-to-Value, aumentan la adopción y desbloquean oportunidades de expansión — sin aumentar la carga de trabajo de tu equipo.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "20%", y: "50%" }}
          rustPosition={{ x: "80%", y: "40%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Capacidades de plataforma
                <br />
                <span className="text-gradient-peach-purple">
                  para el crecimiento del cliente
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
                          <span className="text-accent-purple text-lg leading-none mt-0.5">
                            ✦
                          </span>
                          <span className="text-white/65 leading-relaxed">
                            {b}
                          </span>
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
      <section className="relative py-20 px-6" id="agents">
        <GlowBackground
          indigoPosition={{ x: "70%", y: "40%" }}
          rustPosition={{ x: "20%", y: "60%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="section-badge text-white/30 mb-4 inline-block">
                Powered by merahki.ai
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                AI agents diseñados para la{" "}
                <span className="text-gradient-blue-pink">educación</span>
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
          rustPosition={{ x: "30%", y: "60%" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <AnimatedSection>
            <span className="section-badge text-white/30 mb-2 inline-block">
              Solo con merahki.ai
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Una plataforma de aprendizaje AI-native que{" "}
              <span className="text-gradient-peach-purple">
                combina creación, distribución y analytics
              </span>
            </h2>
            <p className="text-white/50 mt-4 leading-relaxed">
              Para que cada touchpoint con el cliente impulse el crecimiento.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Link
              href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all"
            >
              Comenzar <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <OurProposal />

      <ContactSection
        heading="Lanza tu programa de Customer Education"
        subheading="Descubre cómo merahki.ai te ayuda a hacer el onboarding, engagement y retención de clientes a escala."
      />
    </div>
  );
}
