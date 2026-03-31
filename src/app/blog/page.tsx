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

      {/* Coming Soon */}
      <section className="relative py-20 px-6">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-12 space-y-4">
              <p className="text-5xl font-bold text-white/10">✍</p>
              <h2 className="text-2xl font-bold text-white">Articles coming soon</h2>
              <p className="text-white/50 leading-relaxed">
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
