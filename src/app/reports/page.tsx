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
              href="https://meetings.hubspot.com/david5040?uuid=26d4db2a-ff58-48ff-be04-a74d169db651" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
            >
              Get notified <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="relative py-16 px-6">
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Report — Microcredentials & Digital Credentials */}
              <Link
                href="/reports/microcredentials-digital-credentials-research"
                className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:border-white/20 transition-all group"
              >
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs font-medium tracking-widest uppercase">Research</span>
                  <span className="px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/8 text-white/70 text-xs font-medium tracking-widest uppercase">Microcredentials</span>
                </div>
                <h2 className="text-white font-bold text-xl leading-snug group-hover:text-gradient-peach-purple transition-all">
                  Microcredentials &amp; Digital Credentials: Research, Use Cases &amp; Strategic Framework
                </h2>
                <p className="text-white/55 text-sm leading-relaxed flex-1">
                  A comprehensive research report on the rise of microcredentials and digital credentials — backed by global data, institutional use cases, and a strategic framework for universities and enterprises adopting verifiable, skills-based certification at scale.
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-white/08">
                  <span className="text-white/30 text-xs">merahki.ai · May 2026</span>
                  <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white/80 transition-colors" />
                </div>
              </Link>

              {/* Report — Education-Led Growth */}
              <Link
                href="https://hubs.ly/Q04gVqB10"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:border-white/20 transition-all group"
              >
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs font-medium tracking-widest uppercase">Report</span>
                  <span className="px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/8 text-white/70 text-xs font-medium tracking-widest uppercase">Education-Led Growth</span>
                </div>
                <h2 className="text-white font-bold text-xl leading-snug group-hover:text-gradient-peach-purple transition-all">
                  Education-Led Growth: The ROI Framework for Training Programs
                </h2>
                <p className="text-white/55 text-sm leading-relaxed flex-1">
                  Discover how structured education programs deliver 372% ROI over three years. This report covers the methodology, measurement hierarchy, and benchmarks behind Education-Led Growth — the strategy that turns training into a provable revenue driver.
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
        heading="Get the research first"
        subheading="Be among the first to access our Education-Led Growth reports and strategic guides."
      />
    </div>
  );
}
