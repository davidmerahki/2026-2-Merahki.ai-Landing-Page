import type { Metadata } from "next";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import LogoCarousel from "@/components/sections/LogoCarousel";
import Link from "next/link";
import { ArrowRight, Sparkles, ClipboardList, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Assistant",
  description:
    "Construye experiencias de aprendizaje de mayor calidad con IA. Genera esquemas completos de cursos, evaluaciones y ebooks en minutos.",
  openGraph: {
    title: "AI Assistant — merahki.ai",
    description:
      "Creación de cursos impulsada por IA: Course Planner, Assessment Designer e AI Insights — todo en una plataforma AI-native.",
    url: "https://merahki.ai/es/ai-assistant",
    type: "website",
  },
  alternates: {
    canonical: "https://merahki.ai/es/ai-assistant",
    languages: { en: "https://merahki.ai/ai-assistant" },
  },
};

const features = [
  {
    icon: Sparkles,
    title: "Course Planner",
    bullets: [
      "Proporciona un tema, elige tu modelo de aprendizaje y actividades, y deja que la IA genere un esquema estructurado de curso en segundos — completo con módulos, lecciones y actividades sugeridas.",
      "Reescribe, mejora y optimiza lecciones, páginas y contenido existentes para que pases menos tiempo actualizando desde cero.",
    ],
    reverse: false,
    videoSrc:
      "https://www.learnworlds.com/app/uploads/2026/03/ai-course-planner-1.webm",
  },
  {
    icon: ClipboardList,
    title: "Assessment Designer",
    bullets: [
      "Importa tu contenido de aprendizaje existente y conviértelo automáticamente en cuestionarios, exámenes o evaluaciones de certificación.",
      "Acelera tu proceso de evaluación con evaluaciones generadas por IA eligiendo el tema, tipo y número de formatos de preguntas.",
    ],
    reverse: true,
    videoSrc:
      "https://www.learnworlds.com/app/uploads/2026/03/ai-assessment.webm",
  },
  {
    icon: BarChart3,
    title: "AI Insights",
    bullets: [
      "Pregunta lo que sea — desde el rendimiento de ventas hasta el progreso de los aprendices — y obtén respuestas instantáneas, gráficos y conclusiones accionables.",
      "Nuestra IA extrae datos de todas tus fuentes y recuerda el contexto a lo largo de tu conversación, para que las preguntas de seguimiento sean effortless.",
    ],
    reverse: false,
    videoSrc: "https://www.learnworlds.com/app/uploads/2026/03/ai-insights.webm",
  },
];

const stats = [
  { value: "Minutos", label: "Para generar un esquema de curso completo" },
  { value: "10×", label: "Creación de contenido más rápida" },
  { value: "100%", label: "Tu contenido, tu copyright" },
];

export default function AIAssistantEsPage() {
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
              AI Assistant
            </span>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Construye{" "}
              <span className="text-gradient-blue-pink">
                experiencias de aprendizaje de mayor calidad
              </span>{" "}
              con IA
            </h1>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Genera esquemas completos de cursos, evaluaciones y ebooks en
              minutos. Tú aportas la experiencia — la IA potencia el resultado.
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
                El impacto completo de la creación de cursos impulsada por IA
              </h2>
              <p className="text-white/60 leading-relaxed">
                Crear contenido de aprendizaje de alta calidad es lento,
                inconsistente y difícil de escalar. Desde escribir esquemas
                hasta diseñar evaluaciones y redactar emails — la carga de
                trabajo ralentiza incluso a los mejores equipos de L&amp;D.
              </p>
              <p className="text-white/60 leading-relaxed">
                El AI Assistant de merahki.ai lo cambia. Genera cursos
                estructurados, evaluaciones inteligentes e insights en tiempo
                real en minutos — para que tu equipo se enfoque en la
                experiencia, no en la producción.
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
                IA que funciona en
                <br />
                <span className="text-gradient-blue-pink">
                  cada parte de tu plataforma
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
                    <video
                      src={f.videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full rounded-2xl border border-white/10 shadow-2xl"
                    />
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
              Creación de cursos impulsada por IA —{" "}
              <span className="text-gradient-blue-pink">
                más todo lo que necesitas para distribuirlos
              </span>
            </h2>
            <p className="text-white/50 mt-4 leading-relaxed">
              Desde la generación de contenido hasta el diseño de evaluaciones,
              insights de aprendices y comunicaciones automatizadas — todo en
              una plataforma AI-native.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Link
              href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all"
            >
              Prueba el AI Assistant <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection
        heading="Potencia tu creación de contenido con IA"
        subheading="Genera esquemas de cursos, evaluaciones e insights en minutos — no en semanas."
      />
    </div>
  );
}
