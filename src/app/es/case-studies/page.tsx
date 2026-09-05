import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Casos de estudio",
  description: "Resultados reales de programas educativos, microcredenciales y educación continua construidos con Merahki.",
  openGraph: {
    title: "Casos de estudio | Merahki",
    description: "Resultados reales de programas educativos construidos con Merahki.",
    url: "https://merahki.ai/es/case-studies",
    type: "website",
  },
};

export default function CaseStudiesPageES() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      <section className="relative pt-32 pb-24 px-6 text-center">
        <GlowBackground indigoPosition={{ x: "25%", y: "45%" }} rustPosition={{ x: "75%", y: "55%" }} />
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">
              Casos de estudio
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Resultados reales de <span className="text-gradient-blue-pink">clientes reales</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Explora cómo instituciones y aliados usan educación, microcredenciales y operación end-to-end para lanzar programas medibles.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <Link href="/es/case-studies/uniandes-sanofi-microbiota" className="block rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-10 hover:bg-white/[0.05] transition-colors">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-peach">Uniandes × Sanofi CHC · Educación médica</p>
              <h2 className="mt-5 text-3xl md:text-4xl font-bold text-white leading-tight">
                De 8 semanas a USD $550K: educación médica multinacional en Latinoamérica.
              </h2>
              <p className="mt-5 text-white/60 text-base md:text-lg leading-relaxed">
                Dos tracks clínicos, +200 alergólogos, 95+ insignias digitales y 8 países alcanzados.
              </p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent-peach">
                Leer caso <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
