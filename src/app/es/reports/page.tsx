import type { Metadata } from "next";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Reportes e Investigación | merahki.ai",
  description:
    "Accede a los reportes e investigaciones de merahki.ai sobre estrategia LMS, aprendizaje empresarial y mejores prácticas de educación corporativa.",
  openGraph: {
    title: "Reportes e Investigación | merahki.ai",
    description: "Investigación y guías sobre Education-Led Growth.",
    url: "https://merahki.ai/es/reports",
    type: "website",
  },
  alternates: { canonical: "https://merahki.ai/es/reports" },
};

export default function ReportsPageES() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 text-center">
        <GlowBackground
          indigoPosition={{ x: "35%", y: "50%" }}
          rustPosition={{ x: "65%", y: "45%" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">
              Reportes e Investigación
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Investigación para{" "}
              <span className="text-gradient-peach-purple">guiar tu estrategia</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Accede a los reportes e investigaciones de merahki.ai sobre estrategia LMS, aprendizaje empresarial y mejores prácticas de educación corporativa.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://meetings.hubspot.com/david5040?uuid=26d4db2a-ff58-48ff-be04-a74d169db651" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
              >
                Agenda un Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="https://ulaiz.share.hsforms.com/2E5fbICR4QJejlPcle2rN1w"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white border border-white/20 hover:bg-white/5 transition-all text-sm"
              >
                Descarga el Reporte <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="relative py-16 px-6">
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Reporte — Microcredenciales y Credenciales Digitales */}
              <Link
                href="/es/reports/microcredentials-digital-credentials-research"
                className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:border-white/20 transition-all group"
              >
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs font-medium tracking-widest uppercase">Investigación</span>
                  <span className="px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/8 text-white/70 text-xs font-medium tracking-widest uppercase">Microcredenciales</span>
                </div>
                <h2 className="text-white font-bold text-xl leading-snug group-hover:text-gradient-peach-purple transition-all">
                  Microcredenciales y Credenciales Digitales: Investigación, Casos de Uso y Marco Estratégico
                </h2>
                <p className="text-white/55 text-sm leading-relaxed flex-1">
                  Reporte completo sobre el auge de las microcredenciales y las credenciales digitales — respaldado por datos globales, casos de uso institucionales y un marco estratégico para universidades y empresas que adoptan certificación verificable y basada en competencias a escala.
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-white/08">
                  <span className="text-white/30 text-xs">merahki.ai · Mayo 2026</span>
                  <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white/80 transition-colors" />
                </div>
              </Link>

              {/* Reporte — Education-Led Growth */}
              <Link
                href="https://hubs.ly/Q04gVqB10"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:border-white/20 transition-all group"
              >
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs font-medium tracking-widest uppercase">Reporte</span>
                  <span className="px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/8 text-white/70 text-xs font-medium tracking-widest uppercase">Education-Led Growth</span>
                </div>
                <h2 className="text-white font-bold text-xl leading-snug group-hover:text-gradient-peach-purple transition-all">
                  Education-Led Growth: El Framework de ROI para Programas de Formación
                </h2>
                <p className="text-white/55 text-sm leading-relaxed flex-1">
                  Descubre cómo los programas de educación estructurados entregan 372% de ROI en tres años. Este reporte cubre la metodología, la jerarquía de medición y los benchmarks detrás del Education-Led Growth — la estrategia que convierte la formación en un generador de revenue demostrable.
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-white/08">
                  <span className="text-white/30 text-xs">merahki.ai · 2026</span>
                  <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white/80 transition-colors" />
                </div>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection
        heading="Accede a la investigación primero"
        subheading="Sé de los primeros en recibir nuestros reportes de Education-Led Growth y guías estratégicas."
        badge="Empieza Ahora"
        trustItems={[
          { title: "Demo personalizado de 30 min", desc: "Una demostración adaptada a tu caso de uso específico." },
          { title: "Habla con un experto, no con un vendedor", desc: "Conversarás con alguien que entiende profundamente el crecimiento impulsado por educación." },
          { title: "Roadmap de implementación incluido", desc: "Sal con un plan claro para lanzar tu primer programa." },
          { title: "Usado por equipos en 8+ industrias", desc: "Desde salud hasta SaaS — hemos visto y resuelto tus desafíos." },
        ]}
      />
    </div>
  );
}
