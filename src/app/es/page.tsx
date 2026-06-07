import { buildFaqJsonLd, buildMetadata } from "@/lib/seo/metadata";
import Image from "next/image";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import LogoCarousel from "@/components/sections/LogoCarousel";
import Link from "next/link";
import TestimonialsES from "@/components/sections/TestimonialsES";
import HomeBodyV2, { getHomeFaqItems } from "@/components/landing/HomeBodyV2";
import { ArrowRight, PenTool, Rocket, BarChart3, Check } from "lucide-react";
export const metadata = buildMetadata("home", "es");

export default function HomePageES() {
  const demoUrl =
    "https://ulaiz.share.hsforms.com/2E5fbICR4QJejlPcle2rN1w";

  const faqItems = getHomeFaqItems("es");

  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(faqItems)) }}
      />
      {/* ── SECCIÓN 1 — HERO ── */}
      <section className="relative min-h-screen flex items-center px-6 pt-24 pb-16">
        <GlowBackground
          indigoPosition={{ x: "25%", y: "40%" }}
          rustPosition={{ x: "75%", y: "55%" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="flex-1 space-y-8">
              <AnimatedSection immediate delay={0.1}>
                <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight">
                  Personas y empresas ya están comprando microcredenciales.{" "}
                  <span className="text-gradient-peach-purple">La única pregunta es a quién.</span>
                </h1>
              </AnimatedSection>
              <AnimatedSection immediate delay={0.2}>
                <p className="text-xl text-white/60 max-w-xl leading-relaxed">
                  Merahki diseña y virtualiza tus microcredenciales, mide su impacto con learning analytics y emite insignias digitales verificables. Convierte tu educación continua en un motor de crecimiento e ingreso recurrente.
                </p>
              </AnimatedSection>
              <AnimatedSection immediate delay={0.25}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 py-2 max-w-xl">
                  {[
                    "Diseño y virtualización en 6–12 semanas",
                    "Ingreso recurrente para tu institución",
                    "Learning analytics con 95+ filtros",
                    "Insignias verificables en blockchain",
                  ].map((pillar) => (
                    <div key={pillar} className="flex items-start gap-2">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent-peach" />
                      <span className="text-sm text-white/70 leading-snug">{pillar}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
              <AnimatedSection immediate delay={0.3}>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Link href={demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm">
                    Agendar mi demo de 20 min <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/reports" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white border border-white/20 hover:bg-white/5 transition-all text-sm">
                    Quiero el Framework de ROI gratis
                  </Link>
                </div>
              </AnimatedSection>
              <AnimatedSection immediate delay={0.35}>
                <p className="text-sm text-white/40 max-w-xl leading-relaxed border-l-2 border-accent-peach/40 pl-4">
                  UNESCO abrió una ventana de 18–36 meses para que las universidades tomen posición. Las que se muevan primero se quedan con la última milla hacia el empleo. El resto se la cede a Google y a los bootcamps.
                </p>
              </AnimatedSection>
            </div>
            <AnimatedSection immediate delay={0.2} className="flex-1 w-full">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                <Image src="/images/Micro-credenciales microcredentials.png" alt="Dashboard de analítica Merahki — comparación de cohortes entrenadas vs. no entrenadas" width={900} height={720} className="w-full h-auto" sizes="(max-width: 768px) 100vw, 50vw" priority />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 2 — LOGO BAR ── */}
      <LogoCarousel heading="Equipos que ya miden el impacto con Merahki" />

      {/* ── SECCIÓN 3 — SOLUCIÓN: 3 PILARES ── */}
      <section className="relative py-24 px-6">
        <GlowBackground indigoPosition={{ x: "80%", y: "50%" }} rustPosition={{ x: "20%", y: "70%" }} />
        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Lo diseñamos. Lo producimos.{" "}
                <span className="text-gradient-peach-purple">Probamos que funciona.</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: PenTool, title: "Diseño y producción", desc: "Construimos el programa completo — cursos, videos, assessments y credenciales — con IA y frameworks de diseño instruccional. Tú traes la experiencia. Nosotros nos encargamos de todo lo demás.", link: { label: "Ver cómo construimos", href: "/methodology" }, color: "text-accent-peach", bg: "bg-accent-peach/10" },
              { icon: Rocket, title: "Lanzamiento y credencial", desc: "Tu academy con marca propia sale en vivo en semanas — con adaptive learning, app móvil, sesiones en vivo y micro-credenciales verificables que tus participantes comparten en LinkedIn.", link: { label: "Ver una academy en vivo", href: "/case-studies" }, color: "text-accent-purple", bg: "bg-accent-purple/10" },
              { icon: BarChart3, title: "Medición y prueba de ROI", desc: "Nuestra analítica conecta datos de aprendizaje con resultados de negocio. Compara cohortes entrenadas vs. no entrenadas. Ve ticket deflection, adoption lift y tasas de renovación — en tiempo real, no trimestralmente.", link: { label: "Ver el dashboard", href: "/analytics-reports" }, color: "text-accent-blue", bg: "bg-accent-blue/10" },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="relative rounded-2xl p-7 border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all h-full flex flex-col">
                  <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center mb-5 flex-shrink-0`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed flex-1">{item.desc}</p>
                  <Link href={item.link.href} className="inline-flex items-center gap-1 text-xs font-medium text-white/40 hover:text-white/70 transition-colors mt-5">
                    {item.link.label} <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 4 — PROBLEMA / DOLOR (PAS) ── */}
      <section id="nueva-realidad" className="relative py-20 md:py-32 px-6 bg-white/[0.03] border-y border-white/5">
        <div className="relative z-10 max-w-[760px] mx-auto">
          <AnimatedSection>
            <div className="text-center mb-10">
              <p className="text-xs font-semibold tracking-[0.28em] uppercase text-accent-purple mb-4">La nueva realidad</p>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">Pierdes a tus estudiantes dos veces.</h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="space-y-7 text-white/70 text-lg md:text-xl leading-[1.7]">
              <p>Primero cuando se gradúan y no vuelven. Después cuando deciden seguir aprendiendo —y lo hacen en Coursera, en Google, en un bootcamp de seis semanas.</p>
              <p>Cada vez que pasa, no pierdes solo el ingreso. Pierdes la relevancia que define a tu institución.</p>
              <p>La matrícula de pregrado cae. Solo 2 de cada 10 jóvenes terminan la educación tradicional. El 70% de tus egresados quiere seguir aprendiendo —si les ofreces algo relevante—. Y las empresas no encuentran el talento que las universidades no certifican: la escasez global llega al 75%.</p>
              <p className="text-white font-medium border-l-4 border-accent-purple/70 bg-white/[0.04] rounded-r-2xl px-6 py-5">Coursera tiene 13 años. Tu institución lleva décadas construyendo autoridad académica. Pero hoy es Coursera la que pone su sello sobre el egresado que tú formaste.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                { value: "2 de 10", label: "jóvenes que terminan la educación tradicional" },
                { value: "70%", label: "de egresados quiere seguir aprendiendo" },
                { value: "75%", label: "escasez global de talento" },
              ].map((stat) => (
                <div key={stat.value} className="border-t border-white/15 pt-5 text-center md:text-left">
                  <p className="text-4xl md:text-5xl font-bold text-gradient-blue-pink">{stat.value}</p>
                  <p className="text-white/55 text-sm leading-relaxed mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <HomeBodyV2 locale="es">
        {/* ── SECCIÓN 9 — PRUEBA / TESTIMONIOS ── */}
        <TestimonialsES />
      </HomeBodyV2>

    </div>
  );
}

