import type { Metadata } from "next";
import Image from "next/image";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AgentCard from "@/components/ui/AgentCard";
import ContactSection from "@/components/sections/ContactSection";
import TrainingProposal from "@/components/sections/TrainingProposal";
import LogoCarousel from "@/components/sections/LogoCarousel";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "Training & Certification",
  description:
    "El Training & Certification impulsado por IA de merahki.ai mantiene a los empleados capacitados, en cumplimiento normativo y listos para rendir — desde cualquier lugar. Automatiza el cumplimiento, acelera el onboarding y entrega just-in-time learning con impacto medible.",
  alternates: {
    canonical: "https://merahki.ai/es/training-certification",
    languages: { en: "https://merahki.ai/training-certification" },
  },
  openGraph: {
    title: "Training & Certification — Eleva la preparación de tu equipo | merahki.ai",
    description:
      "Formación que iguala la velocidad del negocio. AI-powered training para empleados capacitados, en cumplimiento normativo y listos para rendir.",
    url: "https://merahki.ai/es/training-certification",
    type: "website",
  },
};

const features = [
  {
    icon: ShieldCheck,
    title: "Automatización de cumplimiento normativo",
    bullets: [
      "Asigna, rastrea y actualiza la formación requerida automáticamente según roles y ubicaciones.",
      "Mantente listo para auditorías con reportes automatizados y seguimiento de finalización.",
    ],
    image: "/images/training-certification/compliance-automation.jpg",
    imageAlt: "Dashboard de automatización de cumplimiento normativo",
    reverse: false,
  },
  {
    icon: Zap,
    title: "Just-in-Time Learning",
    bullets: [
      "Proporciona búsqueda impulsada por IA y guías de referencia rápida dentro del flujo de trabajo.",
      "Reduce el tiempo hasta la competencia con microaprendizaje contextual.",
    ],
    image: "/images/training-certification/just-in-time.jpg",
    imageAlt: "Interfaz de just-in-time learning",
    reverse: true,
  },
  {
    icon: Rocket,
    title: "Onboarding acelerado",
    bullets: [
      "Crea rutas de onboarding específicas por rol que reducen el tiempo de ramp para nuevas contrataciones.",
      "Se ajusta dinámicamente a medida que los empleados completan hitos de formación.",
    ],
    image: "/images/training-certification/accelerated-onboarding.png",
    imageAlt: "Programa de onboarding acelerado",
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
      "Asigna, actualiza y reporta sobre programas de aprendizaje con instrucciones en lenguaje natural. Capacidades en expansión mensual.",
    image: "/images/agents/manager-agent.jpg",
  },
];

export default function TrainingCertificationPageES() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 text-center">
        <GlowBackground
          indigoPosition={{ x: "30%", y: "40%" }}
          rustPosition={{ x: "70%", y: "55%" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <AnimatedSection immediate>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">
              Training &amp; Certification
            </span>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Eleva la{" "}
              <span className="text-gradient-blue-pink">preparación de tu equipo</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              El Training &amp; Certification impulsado por IA mantiene a los empleados capacitados, en cumplimiento normativo y listos para rendir — desde cualquier lugar.
            </p>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
              >
                Solicitar Cotización <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white border border-white/20 hover:bg-white/5 transition-all text-sm"
              >
                Agenda un Demo
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <LogoCarousel />

      {/* Narrative */}
      <section className="relative py-16 px-6">
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="narrative-card rounded-2xl p-10 space-y-4 text-center">
              <h2 className="text-2xl font-bold text-white">
                Formación que iguala la velocidad del negocio
              </h2>
              <p className="text-white/60 leading-relaxed">
                Ya sea que estés incorporando nuevas contrataciones, actualizando las habilidades de tus equipos o manteniendo al personal de campo en cumplimiento normativo, la formación tradicional no puede seguir el ritmo del cambio constante. Los programas suelen ser demasiado lentos para desplegar, demasiado genéricos para impactar y demasiado manuales para gestionar a escala.
              </p>
              <p className="text-white/60 leading-relaxed">
                merahki.ai lo resuelve. Nuestra plataforma habilitada por IA entrega experiencias de aprendizaje dirigidas que llegan a cada empleado, en cada rol, exactamente cuando los necesita — con impacto medible.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "80%", y: "40%" }}
          rustPosition={{ x: "20%", y: "60%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Capacidades de plataforma
                <br />
                <span className="text-gradient-blue-pink">
                  para la mejora del rendimiento
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
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="section-badge text-white/30 mb-4 inline-block">
                Powered by merahki.ai
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                AI agents para la{" "}
                <span className="text-gradient-blue-pink">creación de contenido</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl mx-auto items-stretch">
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

      <TrainingProposal />

      <ContactSection
        heading="Agenda tu Strategy Call"
        subheading="Todo lo que tu equipo necesita para crear formación rápida, con marca propia y en cumplimiento normativo."
      />
    </div>
  );
}
