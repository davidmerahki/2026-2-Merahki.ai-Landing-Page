import type { Metadata } from "next";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Learning fuels growth. Explore how our customers leverage education to drive adoption, engagement, and measurable business impact.",
  openGraph: {
    title: "Case Studies",
    description: "See how leading brands succeed with merahki.ai.",
    url: "https://merahki.ai/case-studies",
    type: "website",
  },
};

export default function CaseStudiesPage() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 text-center">
        <GlowBackground
          indigoPosition={{ x: "25%", y: "45%" }}
          rustPosition={{ x: "75%", y: "55%" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">
              Case Studies
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Real results from{" "}
              <span className="text-gradient-blue-pink">real customers</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Learning fuels growth, and our customers prove it every day. They
              are leveraging education to drive adoption, engagement, and
              measurable business impact. Explore their success stories and see
              what&apos;s possible when learning is at the heart of your growth
              strategy.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <Link
              href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
            >
              Talk to an expert <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="relative py-20 px-6">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-12 space-y-4">
              <p className="text-5xl font-bold text-white/10">📊</p>
              <h2 className="text-2xl font-bold text-white">Stories coming soon</h2>
              <p className="text-white/50 leading-relaxed">
                We&apos;re documenting the results our customers are achieving.
                In the meantime, book a demo to hear directly from us about
                what&apos;s possible.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection
        heading="See what's possible"
        subheading="Talk to our team and learn how companies like yours are using education to drive growth."
      />
    </div>
  );
}
