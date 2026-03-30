import type { Metadata } from "next";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Webinar Library",
  description:
    "Learn from experts in live and on-demand sessions. Explore merahki.ai's webinar library on education-led growth, LMS strategy, and enterprise learning.",
  openGraph: {
    title: "Webinar Library",
    description: "Learn from experts in live & on-demand sessions.",
    url: "https://merahki.ai/webinars",
    type: "website",
  },
};

export default function WebinarsPage() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 text-center">
        <GlowBackground
          indigoPosition={{ x: "40%", y: "40%" }}
          rustPosition={{ x: "60%", y: "65%" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">
              Webinar Library
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Learn from the{" "}
              <span className="text-gradient-blue-pink">experts</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Explore our library of live and on-demand sessions covering
              education-led growth, LMS strategy, AI in learning, and
              enterprise training best practices.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
            >
              Register for upcoming sessions <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="relative py-20 px-6">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-12 space-y-4">
              <p className="text-5xl font-bold text-white/10">🎙</p>
              <h2 className="text-2xl font-bold text-white">Sessions coming soon</h2>
              <p className="text-white/50 leading-relaxed">
                We&apos;re scheduling our first webinars on education-led
                growth strategy. Register below to be notified as soon as
                they go live.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection
        heading="Never miss a session"
        subheading="Register your interest and we'll notify you when our next live webinar goes live."
      />
    </div>
  );
}
