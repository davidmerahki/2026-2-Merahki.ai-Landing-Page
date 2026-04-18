import type { Metadata } from "next";
import Image from "next/image";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import LogoCarousel from "@/components/sections/LogoCarousel";
import Link from "next/link";
import { ArrowRight, BarChart3, BookOpen, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Analytics & Reports",
  description:
    "Tu dashboard LMS completo. Mide y reporta el impacto de tus programas de formación. Insights impulsados por IA, reportes automatizados y más de 95 filtros.",
  openGraph: {
    title: "Analytics & Reports — merahki.ai",
    description:
      "Reportes automatizados, respuestas impulsadas por IA, gráficos radiales y más de 95 filtros — todo integrado en tu plataforma.",
    url: "https://merahki.ai/es/analytics-reports",
    type: "website",
  },
  alternates: {
    canonical: "https://merahki.ai/es/analytics-reports",
    languages: { en: "https://merahki.ai/analytics-reports" },
  },
};

const tldrCards = [
  {
    img: "/images/analytics%20and%20reports/Generate%20automated%20scheduled%20reports%20and%20export%20data%20exactly%20when%20you%20need%20it%20to%20simplify%20admin%20tasks.png",
    alt: "Genera reportes automatizados programados",
    text: "Genera reportes automatizados y programados, y exporta datos exactamente cuando los necesitas para simplificar las tareas administrativas.",
  },
  {
    img: "/images/analytics%20and%20reports/Use%20AI%20powered%20insights%20to%20answer%20questions%20about%20your%20business%20and%20user%20performance%20for%20data%20driven%20decisions.png",
    alt: "Usa insights impulsados por IA",
    text: "Usa insights impulsados por IA para responder preguntas sobre el rendimiento de tu negocio y usuarios para tomar decisiones basadas en datos.",
  },
  {
    img: "/images/analytics%20and%20reports/easily%20visualize%20complex%20learning%20data%20with%20radar%20charts%20%20dashboards%20%20and%20reports%20using%20ready%20made%20templates.png",
    alt: "Visualiza datos complejos fácilmente",
    text: "Visualiza fácilmente datos complejos de aprendizaje con gráficos radiales, dashboards y reportes usando plantillas listas para usar.",
  },
];

const coreFeatures = [
  {
    icon: BarChart3,
    title: "Mide el progreso del usuario",
    body: "Rastrea el avance del usuario, resultados de exámenes, respuestas a encuestas e historial de participación en cursos con un clic en tu dashboard LMS.",
  },
  {
    icon: BookOpen,
    title: "Profundiza en los insights del curso",
    body: "Comprende rápidamente cómo los aprendices navegan tus cursos, identifica puntos de fricción y convierte insights valiosos en mejoras que potencian tanto la experiencia de aprendizaje como los resultados del negocio.",
  },
  {
    icon: FileText,
    title: "Prepara reportes automatizados",
    body: "Automatiza la distribución de reportes y mantén actualizados a tus stakeholders más importantes con reportes extraídos y enviados por email automáticamente usando nuestras herramientas de LMS reporting.",
  },
];

const growItems = [
  {
    title: "Filtra y exporta segmentos de aprendices con más de 95 filtros distintos",
    body: "Aplica filtros simples o altamente elaborados para usuarios, cursos, interacciones sociales y UTMs en tus reportes LMS antes de exportarlos y obtén toda la información que necesitas.",
  },
  {
    title: "Habilita a tu equipo para crear contenido basado en datos",
    body: "Obtén learning insights para ti y tu equipo, revisa las tasas de finalización de cursos, descubre qué sesiones tienen más reproducciones, analiza datos de progreso, puntuaciones de exámenes y tiempo invertido en el aprendizaje. Conecta estos insights con el rendimiento para respaldar el desarrollo de cursos.",
  },
  {
    title: "Aprovecha una potente visualización de datos para tus partners",
    body: "Ofrece a partners, clientes, instructores y managers métricas visualmente atractivas con LMS analytics.",
  },
];

export default function AnalyticsReportsEsPage() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      {/* Hero — text left / dashboard image right */}
      <section className="relative pt-32 pb-20 px-6">
        <GlowBackground
          indigoPosition={{ x: "30%", y: "40%" }}
          rustPosition={{ x: "70%", y: "60%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col gap-12 items-center md:flex-row">
            <div className="flex-1 space-y-6">
              <AnimatedSection immediate>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">
                  Analytics &amp; Reports
                </span>
              </AnimatedSection>
              <AnimatedSection immediate delay={0.1}>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Tu{" "}
                  <span className="text-gradient-blue-pink">
                    dashboard LMS completo
                  </span>
                </h1>
              </AnimatedSection>
              <AnimatedSection immediate delay={0.2}>
                <p className="text-lg text-white/60 leading-relaxed">
                  Mide y reporta el impacto de tus programas de formación.
                  Insights impulsados por IA, reportes automatizados y más de
                  95 filtros — todo en un dashboard diseñado para decisiones
                  basadas en datos.
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
            <AnimatedSection immediate delay={0.2} className="flex-1 w-full">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[16/10]">
                <Image
                  src="/images/analytics%20and%20reports/your%20complete%20lms%20dashboard.png"
                  alt="Tu dashboard LMS completo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <LogoCarousel />

      {/* TL;DR Section */}
      <section className="relative py-20 px-6">
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="mb-3">
              <span className="text-2xl font-bold text-white">TL;DR</span>
            </div>
            <p className="text-white/60 mb-10 max-w-2xl">
              merahki.ai ofrece herramientas completas de LMS reporting y
              analytics que te ayudan a:
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tldrCards.map((card) => (
                <div
                  key={card.alt}
                  className="glass-card rounded-2xl overflow-hidden flex flex-col"
                >
                  <div className="relative aspect-[4/3] w-full bg-white/5">
                    <Image
                      src={card.img}
                      alt={card.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-white/70 leading-relaxed text-sm">
                      {card.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="mt-8 text-white/50 text-sm">
              <span className="font-semibold text-white/70">Ideal para: </span>
              Proveedores de formación, creadores de cursos online, equipos de
              L&amp;D corporativo, instituciones educativas y coaches o creadores
              que buscan insights basados en datos sobre el comportamiento de los
              aprendices y la efectividad de los cursos.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Narrative */}
      <section className="relative py-10 px-6">
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="narrative-card rounded-2xl p-10 space-y-4 text-center">
              <h2 className="text-2xl font-bold text-white">
                Mide y reporta el impacto de tus programas de formación
              </h2>
              <p className="text-white/60 leading-relaxed">
                Sin datos claros, los equipos de L&amp;D operan a ciegas —
                invirtiendo tiempo en contenido que no genera resultados y
                perdiendo oportunidades de mejorar los resultados de los
                aprendices. Los stakeholders exigen prueba de ROI, y los
                reportes manuales toman horas.
              </p>
              <p className="text-white/60 leading-relaxed">
                El dashboard de analytics de merahki.ai te da una visión
                completa de cada aprendiz, curso e interacción. Automatiza
                reportes, muestra insights impulsados por IA y visualiza datos
                de rendimiento — sin salir de tu plataforma.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core features — 3 column grid */}
      <section className="relative py-20 px-6">
        <GlowBackground
          indigoPosition={{ x: "20%", y: "50%" }}
          rustPosition={{ x: "80%", y: "50%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coreFeatures.map((f) => (
                <div
                  key={f.title}
                  className="glass-card rounded-2xl p-8 space-y-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent-purple/20 flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-accent-purple" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{f.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm">
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Grow your impact */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "70%", y: "40%" }}
          rustPosition={{ x: "30%", y: "60%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Amplía tu impacto con{" "}
                <span className="text-gradient-blue-pink">
                  herramientas de LMS reporting listas para usar
                </span>
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex flex-col gap-10 items-center md:flex-row">
              <div className="flex-1 w-full">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
                  <Image
                    src="/images/analytics%20and%20reports/filter%20and%20export%20learner%20segments%20with%2095%20different%20filters.png"
                    alt="Filtra y exporta segmentos de aprendices con más de 95 filtros"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-8">
                {growItems.map((item) => (
                  <div key={item.title} className="space-y-2">
                    <div className="flex items-start gap-3">
                      <span className="text-accent-purple text-lg leading-none mt-0.5 flex-shrink-0">
                        ✦
                      </span>
                      <h4 className="text-lg font-semibold text-white">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-white/60 leading-relaxed pl-7">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
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
              Insights basados en datos que{" "}
              <span className="text-gradient-blue-pink">
                no encontrarás en ningún otro lugar
              </span>
            </h2>
            <p className="text-white/50 mt-4 leading-relaxed">
              Reportes automatizados, respuestas impulsadas por IA, gráficos
              radiales y más de 95 filtros — todo integrado en tu plataforma,
              sin integraciones adicionales.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Link
              href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all"
            >
              Explora el Dashboard <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection
        heading="Convierte los datos en tu ventaja competitiva"
        subheading="Rastrea cada interacción de los aprendices, automatiza reportes y muestra insights de IA — todo desde un dashboard."
      />
    </div>
  );
}
