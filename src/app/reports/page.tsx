import type { Metadata } from "next";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Reports & Resources",
  description:
    "Access merahki.ai's reports and resources to learn about LMS strategy, enterprise learning, and corporate education best practices.",
  openGraph: {
    title: "Reports & Resources",
    description: "Access Education-Led Growth research & guides.",
    url: "https://merahki.ai/reports",
    type: "website",
  },
};

export default function ReportsPage() {
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
              Reports &amp; Resources
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Research to{" "}
              <span className="text-gradient-peach-purple">guide your strategy</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Access merahki.ai&apos;s reports and resources to learn about LMS
              strategy, enterprise learning, and corporate education best
              practices.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
            >
              Get notified <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="relative py-20 px-6">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-12 space-y-4">
              <p className="text-5xl font-bold text-white/10">📄</p>
              <h2 className="text-2xl font-bold text-white">Reports coming soon</h2>
              <p className="text-white/50 leading-relaxed">
                We&apos;re compiling industry research, benchmarks, and
                Education-Led Growth guides. Drop your email below and
                we&apos;ll send them directly to you on release.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection
        heading="Get the research first"
        subheading="Be among the first to access our Education-Led Growth reports and strategic guides."
      />
    </div>
  );
}
