import type { Metadata } from "next";
import Image from "next/image";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import LogoCarousel from "@/components/sections/LogoCarousel";
import ContactSection from "@/components/sections/ContactSection";
import Link from "next/link";
import { ArrowRight, Play, BookOpen, TrendingUp, Award, Users, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "merahki.ai — Education-Led Growth Ecosystem",
  description:
    "merahki.ai es el pionero del Education-Led Growth (ELG) — una metodología que reemplaza los funnels de marketing tradicionales con Growth Loops potenciados por Education-Qualified Leads (EQLs). Nuestra plataforma AI-native entrega Zero-Marginal Cost Onboarding, Revenue Engineering through Education y el Merahki Growth Loop para ayudar a organizaciones B2B SaaS, enterprise y partner-driven a crecer de forma compuesta a escala.",
  alternates: {
    canonical: "https://merahki.ai/es",
    languages: { en: "https://merahki.ai" },
  },
  openGraph: {
    title: "merahki.ai — Education-Led Growth Ecosystem",
    description:
      "Convierte la educación en tu canal de crecimiento #1. merahki.ai genera Education-Qualified Leads (EQLs), acelera el Time-to-Value y hace ingeniería de revenue a través de academies potenciadas por IA.",
    url: "https://merahki.ai/es",
    type: "website",
  },
};

export default function HomePageES() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center px-6 pt-24 pb-16">
        <GlowBackground
          indigoPosition={{ x: "25%", y: "40%" }}
          rustPosition={{ x: "75%", y: "55%" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

            {/* Left: Text */}
            <div className="flex-1 space-y-8">
              <AnimatedSection immediate>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">
                  Education-Led Growth Ecosystem
                </span>
              </AnimatedSection>

              <AnimatedSection immediate delay={0.1}>
                <h1 className="text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight">
                  Convierte tu estrategia de educación en un{" "}
                  <span className="text-gradient-peach-purple">Growth Engine escalable.</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection immediate delay={0.2}>
                <p className="text-xl text-white/60 max-w-xl leading-relaxed">
                  Diseñamos, producimos y lanzamos experiencias de aprendizaje potenciadas por IA para tus clientes, leads y partners. Transforma la educación en el driver más poderoso de retención, adopción y revenue.
                </p>
              </AnimatedSection>

              <AnimatedSection immediate delay={0.3}>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Link
                    href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
                  >
                    Agenda un Demo <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/education-led-growth"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white border border-white/20 hover:bg-white/5 transition-all text-sm"
                  >
                    Conoce el Método
                  </Link>
                </div>
              </AnimatedSection>

              <AnimatedSection immediate delay={0.4}>
                <div className="flex flex-wrap gap-8 text-sm text-white/40">
                  <span>+100 estrategias probadas</span>
                  <span className="text-white/20">·</span>
                  <span>8 industrias atendidas</span>
                  <span className="text-white/20">·</span>
                  <span>Ecosistema AI-native</span>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Image */}
            <AnimatedSection immediate delay={0.2} className="flex-1 w-full">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                <Image
                  src="/images/feature-adoption-tracker.png"
                  alt="Feature Adoption Tracker"
                  width={900}
                  height={720}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ── VSL Section ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "50%", y: "50%" }}
          rustPosition={{ x: "80%", y: "30%" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-video">
              <iframe
                src="https://player.vimeo.com/video/1119888924?h=2c6a08f16e#t=149"
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="merahki.ai — Education-Led Growth Ecosystem"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-center text-white/40 text-sm mt-6">
              Descubre cómo las empresas líderes usan merahki.ai para convertir la educación en su canal de crecimiento #1
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Logo Carousel ── */}
      <LogoCarousel />

      {/* ── Value Props ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "80%", y: "50%" }}
          rustPosition={{ x: "20%", y: "70%" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Un Ecosystem.{" "}
                <span className="text-gradient-blue-pink">Cada palanca de crecimiento.</span>
              </h2>
              <p className="text-white/50 text-lg max-w-xl mx-auto">
                Desde el onboarding hasta la fidelización — merahki.ai impulsa cada etapa del ciclo de vida del cliente y el partner.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Customer Education",
                desc: "Reduce el Time-to-Value, aumenta la adopción y desbloquea la expansión a través de experiencias de aprendizaje personalizadas.",
                href: "/es/customer-education",
                color: "text-accent-purple",
                bg: "bg-accent-purple/10",
              },
              {
                icon: Users,
                title: "Partner Academies",
                desc: "Activa un ecosistema global de partners para cerrar ventas más rápido con onboarding y certificación personalizados por IA.",
                href: "/es/partner-academies",
                color: "text-accent-blue",
                bg: "bg-accent-blue/10",
              },
              {
                icon: Rocket,
                title: "Product Adoption",
                desc: "Convierte cada lanzamiento de nueva funcionalidad en una campaña de formación que impulsa el engagement y reduce el churn.",
                href: "/es/product-adoption",
                color: "text-accent-pink",
                bg: "bg-accent-pink/10",
              },
              {
                icon: Award,
                title: "Certification",
                desc: "Construye programas de credenciales a prueba de fraude que demuestran dominio real y generan lealtad en clientes y partners.",
                href: "/es/certification",
                color: "text-accent-peach",
                bg: "bg-accent-peach/10",
              },
              {
                icon: Play,
                title: "Flexible Courses",
                desc: "Crea y distribuye cursos atractivos a cualquier escala — self-paced, blended o en vivo — adaptados al recorrido de cada aprendiz.",
                href: "/flexible-courses",
                color: "text-accent-purple",
                bg: "bg-accent-purple/10",
              },
              {
                icon: TrendingUp,
                title: "Education-Led Growth",
                desc: "Una metodología probada que convierte tus programas educativos en tu canal #1 de adquisición y retención.",
                href: "/education-led-growth",
                color: "text-accent-blue",
                bg: "bg-accent-blue/10",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={(i % 3) * 0.1}>
                <Link href={item.href} className="block group h-full">
                  <div className="relative rounded-2xl p-7 border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all h-full flex flex-col">
                    <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center mb-5 flex-shrink-0`}>
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed flex-1">{item.desc}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-white/40 group-hover:text-white/70 transition-colors mt-5">
                      Conoce más <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Method ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "20%", y: "60%" }}
          rustPosition={{ x: "80%", y: "40%" }}
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block section-badge text-white/30 mb-4">The Method</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Cómo funciona el{" "}
                <span className="text-gradient-peach-purple">Education-Led Growth</span>
              </h2>
              <p className="text-white/50 max-w-xl mx-auto">
                Un sistema de 3 fases repetible que convierte tus programas educativos en tu activo de crecimiento más escalable.
              </p>
            </div>
          </AnimatedSection>

          <div className="relative">
            <div className="hidden md:block absolute top-8 left-[calc(16.67%-1px)] right-[calc(16.67%-1px)] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Attract & Convert",
                  desc: "Usa contenido de aprendizaje gratuito para atraer compradores de alto potencial. Convierte la educación en un Growth Engine de top-of-funnel que genera leads calificados de forma orgánica.",
                  color: "text-accent-peach",
                  border: "border-accent-peach/30",
                  bg: "bg-accent-peach/10",
                },
                {
                  step: "02",
                  title: "Onboard & Adopt",
                  desc: "Acelera el Time-to-Value con learning paths personalizados por IA. Reduce el churn asegurando que cada cliente y partner alcance su primer hito de éxito más rápido.",
                  color: "text-accent-purple",
                  border: "border-accent-purple/30",
                  bg: "bg-accent-purple/10",
                },
                {
                  step: "03",
                  title: "Expand & Retain",
                  desc: "Educa continuamente a tus clientes sobre funcionalidades avanzadas y nuevos casos de uso. Crea power users certificados que abogan por tu producto y expanden sus cuentas.",
                  color: "text-accent-blue",
                  border: "border-accent-blue/30",
                  bg: "bg-accent-blue/10",
                },
              ].map((item, i) => (
                <AnimatedSection key={item.step} delay={i * 0.15}>
                  <div className="flex flex-col items-start gap-5">
                    <div className={`w-14 h-14 rounded-2xl ${item.bg} border ${item.border} flex items-center justify-center flex-shrink-0`}>
                      <span className={`font-bold text-lg ${item.color}`}>{item.step}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-12 text-center">
              <Link
                href="/education-led-growth"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
              >
                Explora la metodología completa <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-20 px-6 border-y border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "100+", label: "estrategias probadas" },
            { value: "8", label: "industrias atendidas" },
            { value: "73K+", label: "training hours ahorradas" },
            { value: "15x", label: "crecimiento en revenue de partners" },
          ].map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div>
                <p className="text-4xl font-bold text-gradient-peach-purple mb-2">
                  {stat.value}
                </p>
                <p className="text-white/40 text-sm">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "60%", y: "50%" }}
          rustPosition={{ x: "30%", y: "50%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="inline-block section-badge text-white/30 mb-4">Lo que dicen nuestros clientes</span>
              <h2 className="text-3xl md:text-4xl font-bold">
                La confianza de los equipos que{" "}
                <span className="text-gradient-blue-pink">crecen a través de la educación</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "merahki.ai convirtió nuestro onboarding de clientes de un centro de costos en un driver de crecimiento. El churn bajó un 34% en el primer trimestre tras el lanzamiento.",
                name: "Sofia R.",
                role: "Head of Customer Success",
                company: "Empresa SaaS",
              },
              {
                quote: "Construimos y lanzamos una Partner Academy completa con certificación en menos de 3 semanas. Nuestros partners certificados ahora cierran deals 2x más rápido que los no certificados.",
                name: "Carlos M.",
                role: "VP of Partner Programs",
                company: "Distribuidor de Tecnología",
              },
              {
                quote: "Los AI agents gestionan el 80% de las preguntas de los aprendices de forma automática. Nuestro equipo se enfoca en la estrategia mientras la plataforma hace el trabajo pesado.",
                name: "Anika T.",
                role: "Director of L&D",
                company: "Enterprise Healthcare",
              },
            ].map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-7 h-full flex flex-col gap-5">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <span key={s} className="text-accent-peach text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-white font-medium text-sm">{t.name}</p>
                    <p className="text-white/40 text-xs mt-0.5">{t.role} · {t.company}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <ContactSection
        heading="¿Listo para convertir la educación en tu ventaja competitiva?"
        subheading="Únete a las organizaciones líderes que usan merahki.ai para educar, crecer y retener."
      />
    </div>
  );
}
