import type { Metadata } from "next";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Upcoming Events",
  description:
    "Connect with merahki.ai at upcoming events, conferences, and community meetups focused on education-led growth and enterprise learning.",
  openGraph: {
    title: "Upcoming Events",
    description: "Connect with merahki.ai during these upcoming events.",
    url: "https://merahki.ai/events",
    type: "website",
  },
};

export default function EventsPage() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 text-center">
        <GlowBackground
          indigoPosition={{ x: "20%", y: "50%" }}
          rustPosition={{ x: "80%", y: "40%" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">
              Upcoming Events
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Meet us{" "}
              <span className="text-gradient-peach-purple">in person</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Connect with merahki.ai at upcoming conferences, meetups, and
              industry events. Come talk education-led growth with the people
              building the future of enterprise learning.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
            >
              Get event updates <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="relative py-20 px-6">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-12 space-y-4">
              <p className="text-5xl font-bold text-white/10">📅</p>
              <h2 className="text-2xl font-bold text-white">Events being scheduled</h2>
              <p className="text-white/50 leading-relaxed">
                We&apos;re finalising our event calendar for the year. Drop
                your details below and we&apos;ll reach out as soon as dates
                are confirmed.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection
        heading="Let's connect"
        subheading="Tell us where you'll be and we'll make sure to connect at the right event."
      />
    </div>
  );
}
