import { buildFaqJsonLd, buildMetadata } from "@/lib/seo/metadata";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import LogoCarousel from "@/components/sections/LogoCarousel";
import Link from "next/link";
import TestimonialsES from "@/components/sections/TestimonialsES";
import HomeBodyV2, { getHomeFaqItems } from "@/components/landing/HomeBodyV2";
import HeroPipeline from "@/components/landing/HeroPipeline";
import { ArrowRight, PenTool, Rocket, BarChart3, Check, BadgeCheck } from "lucide-react";
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
              <AnimatedSection immediate delay={0.05}>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full section-badge bg-white/10 text-white/70 border border-white/15">
                  <BadgeCheck className="w-3.5 h-3.5 text-accent-peach" />
                  POK Official Partner
                </span>
              </AnimatedSection>
              <AnimatedSection immediate delay={0.1}>
                <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight">
                  Virtualiza tu conocimiento una vez. Capacita, certifica y revende{" "}
                  <span className="text-gradient-peach-purple whitespace-nowrap">n veces</span>.
                </h1>
              </AnimatedSection>
              <AnimatedSection immediate delay={0.2}>
                <p className="text-xl text-white/60 max-w-xl leading-relaxed">
                  Co-diseñamos y virtualizamos tus microcredenciales, producimos el contenido, medimos el impacto con learning analytics y emitimos credenciales verificadas por POK. Un solo partner, de punta a punta. ROI claro y medible para tu talento, tus clientes corporativos y tus estudiantes.
                </p>
              </AnimatedSection>
              <AnimatedSection immediate delay={0.25}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 py-2 max-w-xl">
                  {[
                    "En vivo en 6–12 semanas",
                    "Ingreso recurrente, cohorte tras cohorte",
                    "Learning analytics con 95+ filtros",
                    "Credenciales verificables en blockchain",
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
            <AnimatedSection immediate delay={0.2} className="flex-1 w-full max-w-xl md:max-w-none">
              <HeroPipeline lang="es" />
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

      <HomeBodyV2 locale="es">
        {/* ── SECCIÓN 9 — PRUEBA / TESTIMONIOS ── */}
        <TestimonialsES />
      </HomeBodyV2>

    </div>
  );
}

