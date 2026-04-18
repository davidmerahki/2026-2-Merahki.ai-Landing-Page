import type { Metadata } from "next";
import Image from "next/image";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AgentCard from "@/components/ui/AgentCard";
import ContactSection from "@/components/sections/ContactSection";
import ProductAdoptionProposal from "@/components/sections/ProductAdoptionProposal";
import LogoCarousel from "@/components/sections/LogoCarousel";
import Link from "next/link";
import { ArrowRight, Users, BarChart3, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "Product Adoption & Onboarding",
  description:
    "Los programas de onboarding y adopción impulsados por IA de merahki.ai ayudan a los clientes a realizar valor más rápido — y a quedarse más tiempo. Personaliza cada paso del onboarding, identifica los gaps de adopción y mide el impacto en el negocio.",
  alternates: {
    canonical: "https://merahki.ai/es/product-adoption",
    languages: { en: "https://merahki.ai/product-adoption" },
  },
  openGraph: {
    title: "Product Adoption & Onboarding — Acelera el dominio del producto | merahki.ai",
    description:
      "Convierte cada actualización de producto en un momento de crecimiento. Programas de adopción personalizados y medibles en cada etapa del ciclo de vida del cliente.",
    url: "https://merahki.ai/es/product-adoption",
    type: "website",
  },
};

const features = [
  {
    icon: Users,
    title: "Onboarding específico por rol",
    bullets: [
      "Entrega flujos de onboarding personalizados para cada segmento de cliente.",
      "Ajusta el contenido dinámicamente según el progreso y comportamiento del usuario.",
    ],
    image: "/images/product-adoption/role-specific-onboarding.jpg",
    imageAlt: "Dashboard de onboarding específico por rol",
    reverse: false,
  },
  {
    icon: BarChart3,
    title: "Impact Reporting",
    bullets: [
      "Vincula los programas de onboarding y adopción a KPIs como Time-to-Value, retención y expansión.",
      "Analytics conversacional disponible via Labs — haz preguntas, obtén respuestas al instante.",
    ],
    image: "/images/product-adoption/impact-reporting.jpg",
    imageAlt: "Dashboard de impact reporting",
    reverse: true,
  },
  {
    icon: Rocket,
    title: "Feature Adoption Triggers",
    bullets: [
      "Identifica automáticamente a los clientes que no están interactuando con nuevas funcionalidades.",
      "Lanza campañas dirigidas para aumentar el awareness y el uso.",
    ],
    image: "",
    imageAlt: "",
    reverse: false,
  },
];

const agents = [
  {
    name: "Creator Agent",
    availability: "available" as const,
    description:
      "Convierte release notes, guías de producto y videos de formación en programas de onboarding estructurados en minutos.",
    image: "/images/agents/creator-agent.jpg",
  },
  {
    name: "Manager Agent",
    availability: "early-access" as const,
    description:
      "Asigna campañas de onboarding y adopción automáticamente a audiencias específicas basadas en usage triggers. Las capacidades crecen cada mes.",
    image: "/images/agents/manager-agent.jpg",
  },
  {
    name: "Learner Agent",
    availability: "early-access" as const,
    description:
      "Actúa como tutor contextual para tus clientes — reforzando flujos de trabajo clave, respondiendo preguntas sobre funcionalidades y recomendando próximos pasos.",
    image: "/images/agents/learner-agent.jpg",
  },
];

const caseStudies = [
  {
    company: "NovoNordisk",
    metric: "73,000+",
    desc: "training hours ahorradas anualmente al automatizar la educación de médicos en el manejo de la obesidad.",
    color: "from-accent-blue/20",
  },
  {
    company: "Empresas Globales",
    metric: "↑ Adopción",
    desc: "Reducción del tiempo de onboarding y aumento de la productividad con formación dirigida por IA en equipos globales.",
    color: "from-accent-purple/20",
  },
];

export default function ProductAdoptionPageES() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 text-center">
        <GlowBackground
          indigoPosition={{ x: "25%", y: "40%" }}
          rustPosition={{ x: "75%", y: "55%" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <AnimatedSection immediate>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">
              Product Adoption &amp; Onboarding
            </span>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Acelera el{" "}
              <span className="text-gradient-blue-pink">dominio del producto</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Los programas de onboarding y adopción impulsados por IA ayudan a los clientes a realizar valor más rápido — y a quedarse más tiempo.
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
                Del primer inicio de sesión a la adopción total
              </h2>
              <p className="text-white/60 leading-relaxed">
                Lograr que los clientes se registren es una cosa — lograr que usen tu producto de forma profunda y consistente es otra. Sin un onboarding rápido y personalizado y campañas de adopción continuas, el riesgo de churn aumenta y las oportunidades de expansión se reducen.
              </p>
              <p className="text-white/60 leading-relaxed">
                merahki.ai lo cambia. Nuestra plataforma habilitada por IA personaliza cada paso del onboarding, identifica los gaps de adopción y mide el impacto en el negocio — para que cada cliente alcance su pleno potencial más rápido.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "80%", y: "50%" }}
          rustPosition={{ x: "15%", y: "60%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Capacidades de plataforma
                <br />
                <span className="text-gradient-blue-pink">
                  para el Product Adoption
                </span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-28">
            {features.map((f) => (
              <AnimatedSection key={f.title} delay={0.1}>
                {f.image ? (
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
                ) : (
                  <div className="glass-card rounded-2xl p-10 flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-11 h-11 rounded-xl bg-accent-purple/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <f.icon className="w-5 h-5 text-accent-purple" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{f.title}</h3>
                      <ul className="space-y-3">
                        {f.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <span className="text-accent-purple text-lg leading-none mt-0.5">✦</span>
                            <span className="text-white/65 leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents */}
      <section className="relative py-20 px-6">
        <GlowBackground
          indigoPosition={{ x: "20%", y: "40%" }}
          rustPosition={{ x: "80%", y: "60%" }}
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
                  Product Adoption
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
                Probado <span className="text-gradient-peach-purple">a escala</span>
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
                  <p className="text-5xl font-bold text-gradient-blue-pink">{cs.metric}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{cs.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Convierte cada actualización de producto en un{" "}
              <span className="text-gradient-blue-pink">momento de crecimiento</span>
            </h2>
            <p className="text-white/50 mt-4">
              Programas de adopción personalizados y medibles en cada etapa del ciclo de vida del cliente.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Link
              href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all"
            >
              Comienza a Impulsar la Adopción <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <ProductAdoptionProposal />

      <ContactSection
        heading="Comienza a impulsar la adopción del producto"
        subheading="Convierte cada actualización de producto en un momento de crecimiento con programas de adopción personalizados y medibles."
      />
    </div>
  );
}
