import type { Metadata } from "next";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://meetings.hubspot.com/david5040?uuid=26d4db2a-ff58-48ff-be04-a74d169db651" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
              >
                Book a Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="https://ulaiz.share.hsforms.com/2E5fbICR4QJejlPcle2rN1w"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white border border-white/20 hover:bg-white/5 transition-all text-sm"
              >
                Download Report <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <Link href="/case-studies/uniandes-sanofi-microbiota" className="block rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-10 hover:bg-white/[0.05] transition-colors">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-peach">Uniandes × Sanofi CHC · Medical education</p>
              <h2 className="mt-5 text-3xl md:text-4xl font-bold text-white leading-tight">
                From 8 weeks to USD $550K: multinational medical education across Latin America.
              </h2>
              <p className="mt-5 text-white/60 text-base md:text-lg leading-relaxed">
                Two clinical tracks, 200+ allergists, 95+ digital badges, and 8 countries reached.
              </p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent-peach">
                Read case study <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
