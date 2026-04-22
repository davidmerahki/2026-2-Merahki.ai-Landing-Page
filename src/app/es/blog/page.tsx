import type { Metadata } from "next";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Artículos | merahki.ai",
  description:
    "Guías, tendencias y mejores prácticas sobre tecnología LMS, formación corporativa y crecimiento basado en educación.",
  openGraph: {
    title: "Blog & Artículos | merahki.ai",
    description: "Guías, tendencias y mejores prácticas sobre educación y tecnología LMS.",
    url: "https://merahki.ai/es/blog",
    type: "website",
  },
  alternates: { canonical: "https://merahki.ai/es/blog" },
};

export default function BlogEsPage() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 text-center">
        <GlowBackground
          indigoPosition={{ x: "30%", y: "40%" }}
          rustPosition={{ x: "70%", y: "60%" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">
              Blog &amp; Artículos
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Ideas para crecer{" "}
              <span className="text-gradient-peach-purple">a través de la educación</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Mantente al día con el blog de merahki.ai — guías, tendencias y mejores prácticas sobre tecnología LMS, formación y aprendizaje corporativo.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <Link
              href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
            >
              Hablar con un experto <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Articles */}
      <section className="relative py-16 px-6">
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Artículo en español */}
              <Link
                href="/blog/guia-credenciales-digitales"
                className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:border-white/20 transition-all group"
              >
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs font-medium tracking-widest uppercase">Due Diligence</span>
                  <span className="px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/8 text-white/70 text-xs font-medium tracking-widest uppercase">Credenciales</span>
                </div>
                <h2 className="text-white font-bold text-xl leading-snug group-hover:text-gradient-peach-purple transition-all">
                  Guía Integral: Cómo Evaluar una Plataforma de Credenciales Digitales
                </h2>
                <p className="text-white/55 text-sm leading-relaxed flex-1">
                  Marco completo de due diligence, auditoría técnica, verificabilidad en blockchain, formulario maestro y matriz comparativa para universidades.
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-white/08">
                  <span className="text-white/30 text-xs">merahki.ai · Abril 2026</span>
                  <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white/80 transition-colors" />
                </div>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Más artículos próximamente */}
      <section className="relative pb-16 px-6">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-10 space-y-3">
              <p className="text-4xl font-bold text-white/10">✍</p>
              <h3 className="text-xl font-bold text-white">Más artículos próximamente</h3>
              <p className="text-white/50 leading-relaxed text-sm">
                Estamos trabajando en guías detalladas, casos de éxito y artículos de liderazgo de pensamiento. Contactanos para recibir notificaciones cuando publiquemos.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection
        heading="¿Querés recibir nuevos artículos?"
        subheading="Sé de los primeros en recibir nuevas guías, reportes e insights sobre crecimiento basado en educación."
      />
    </div>
  );
}
