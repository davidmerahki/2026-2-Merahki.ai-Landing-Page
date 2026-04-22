import type { Metadata } from "next";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Articles",
  description:
    "Stay ahead with the merahki.ai blog — insights, trends, and best practices on LMS technology, training, and enterprise learning.",
  openGraph: {
    title: "Blog & Articles",
    description: "Insights, trends, and best practices on education-led growth.",
    url: "https://merahki.ai/blog",
    type: "website",
  },
};

export default function BlogPage() {
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
              Blog &amp; Articles
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Insights to help you{" "}
              <span className="text-gradient-peach-purple">grow through education</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Stay ahead with the merahki.ai blog — insights, trends, and best
              practices on LMS technology, training, and enterprise learning.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <Link
              href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
            >
              Subscribe for updates <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Articles */}
      <section className="relative py-16 px-6">
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Article card — Spanish */}
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

              {/* Article card — English */}
              <Link
                href="/blog/how-to-evaluate-digital-credentials-platform"
                className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:border-white/20 transition-all group"
              >
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs font-medium tracking-widest uppercase">Due Diligence</span>
                  <span className="px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/8 text-white/70 text-xs font-medium tracking-widest uppercase">Digital Credentials</span>
                </div>
                <h2 className="text-white font-bold text-xl leading-snug group-hover:text-gradient-peach-purple transition-all">
                  How to Evaluate a Digital Credentials Platform: A Complete Guide
                </h2>
                <p className="text-white/55 text-sm leading-relaxed flex-1">
                  A complete due diligence framework — technical audit, blockchain verifiability, master evaluation form, and comparative matrix for universities.
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-white/08">
                  <span className="text-white/30 text-xs">merahki.ai · April 2026</span>
                  <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white/80 transition-colors" />
                </div>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* More coming soon */}
      <section className="relative pb-16 px-6">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-10 space-y-3">
              <p className="text-4xl font-bold text-white/10">✍</p>
              <h3 className="text-xl font-bold text-white">More articles coming soon</h3>
              <p className="text-white/50 leading-relaxed text-sm">
                We&apos;re working on in-depth guides, customer stories, and
                thought leadership pieces. Subscribe below to get notified when
                we publish.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection
        heading="Stay in the loop"
        subheading="Be the first to receive new articles, reports, and education-led growth insights."
      />
    </div>
  );
}
