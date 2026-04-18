import type { Metadata } from "next";
import Image from "next/image";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import LogoCarousel from "@/components/sections/LogoCarousel";
import Link from "next/link";
import { ArrowRight, Smartphone, Layers, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile App Builder",
  description:
    "Tu propia app de elearning con tu marca — sin una línea de código. Construye, previsualiza y lanza una app de aprendizaje móvil completamente white-label en iOS y Android en menos de un mes.",
  openGraph: {
    title: "Mobile App Builder — merahki.ai",
    description:
      "Constructor sin código para apps de elearning. Lanza una app completamente white-label en iOS y Android en semanas.",
    url: "https://merahki.ai/es/mobile-app-builder",
    type: "website",
  },
  alternates: {
    canonical: "https://merahki.ai/es/mobile-app-builder",
    languages: { en: "https://merahki.ai/mobile-app-builder" },
  },
};

const features = [
  {
    icon: Smartphone,
    title: "Lanzamos tu propia app de elearning",
    bullets: [
      "El desarrollo de apps móviles de elearning personalizadas solía ser costoso, complicado y tardado. Ya no — nosotros gestionamos todo.",
      "Una vez que nos envías tu app, tardará 2–4 semanas en estar en vivo. Asumimos plena responsabilidad por el cumplimiento en Google Play y App Store.",
    ],
    reverse: false,
    media: {
      type: "video" as const,
      src: "https://www.learnworlds.com/app/uploads/2026/02/mobile-app-hero.webm",
    },
  },
  {
    icon: Layers,
    title: "Construimos tu app con tu marca",
    bullets: [
      "Usa nuestro editor visual para configurar y probar tu app personalizada antes de gastar un solo centavo. Solo compra cuando estés listo para el lanzamiento.",
      "Personaliza todo — desde temas y widgets hasta notificaciones push — sin código requerido. Diseñada para brillar en cualquier dispositivo.",
    ],
    reverse: true,
    media: {
      type: "image" as const,
      src: "/images/mobile%20app/build%20your%20branded%20app.png",
      alt: "Construimos tu app con tu marca",
    },
  },
  {
    icon: BarChart3,
    title: "Integra tus campañas",
    bullets: [
      "Monitorea el rendimiento de marketing desde el primer clic hasta la finalización del curso con integración nativa de Google Firebase y Facebook Business SDK.",
      "Rastrea cada interacción con tu app — revisa usuarios activos, sesiones y otras métricas de rendimiento para identificar áreas de optimización.",
    ],
    reverse: false,
    media: {
      type: "video" as const,
      src: "https://www.learnworlds.com/app/uploads/2026/02/mob-analytics-video.webm",
    },
  },
];

const stats = [
  { value: "311%", label: "Mayor revenue para usuarios de app" },
  { value: "10×", label: "Crecimiento de usuarios con mobile" },
  { value: "2–4 sem", label: "De la entrega al lanzamiento en vivo" },
];

export default function MobileAppBuilderEsPage() {
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
              Mobile App Builder
            </span>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Tu propia{" "}
              <span className="text-gradient-blue-pink">app de elearning</span>{" "}
              con tu marca — sin una línea de código
            </h1>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Construye, previsualiza y lanza una app de aprendizaje móvil
              completamente white-label en iOS y Android en menos de un mes.
              Acceso offline, inicio de sesión biométrico, compras in-app y
              notificaciones push — todo incluido.
            </p>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.3}>
            <Link
              href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
            >
              Agenda un Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <LogoCarousel />

      {/* Stats Bar */}
      <section className="py-12 px-6 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-3 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-3xl md:text-4xl font-bold text-gradient-blue-pink">
                    {stat.value}
                  </p>
                  <p className="text-white/50 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Narrative */}
      <section className="relative py-16 px-6">
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="narrative-card rounded-2xl p-10 space-y-4 text-center">
              <h2 className="text-2xl font-bold text-white">
                Hemos hecho el desarrollo de apps de elearning personalizadas
                accesible para todos
              </h2>
              <p className="text-white/60 leading-relaxed">
                Lanzar una app de aprendizaje móvil con tu marca solía requerir
                un equipo de desarrollo, meses de trabajo y un presupuesto
                elevado. Interminables idas y vueltas con las app stores, dolores
                de cabeza de cumplimiento y cronogramas impredecibles.
              </p>
              <p className="text-white/60 leading-relaxed">
                merahki.ai lo cambia. Nuestro Mobile App Builder sin código te
                permite diseñar, previsualizar y lanzar tu app completamente
                personalizada en iOS y Android — nosotros gestionamos el envío,
                el cumplimiento normativo y la publicación para que puedas
                enfocarte en tus aprendices.
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
                Todo lo que necesitas para
                <br />
                <span className="text-gradient-blue-pink">
                  lanzar tu app de aprendizaje móvil
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
                    {f.media.type === "video" ? (
                      <video
                        src={f.media.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full rounded-2xl border border-white/10 shadow-2xl"
                      />
                    ) : (
                      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[16/10]">
                        <Image
                          src={f.media.src}
                          alt={f.media.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    )}
                  </div>
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
              Pantalla más pequeña.{" "}
              <span className="text-gradient-blue-pink">Mayor revenue.</span>
            </h2>
            <p className="text-white/50 mt-4 leading-relaxed">
              Constructor sin código. Personalización total de marca. Publicada
              en iOS y Android. Acceso offline, notificaciones push y compras
              in-app — todo en una plataforma.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Link
              href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all"
            >
              Lanza tu App <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection
        heading="Lanza tu app de elearning con tu marca"
        subheading="No se requiere código. Completamente white-label. En vivo en iOS y Android en menos de un mes."
      />
    </div>
  );
}
