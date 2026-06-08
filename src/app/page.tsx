import { buildFaqJsonLd, buildMetadata } from "@/lib/seo/metadata";
import Image from "next/image";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import LogoCarousel from "@/components/sections/LogoCarousel";
import Link from "next/link";
import TestimonialsEN from "@/components/sections/TestimonialsEN";
import HomeBodyV2, { getHomeFaqItems } from "@/components/landing/HomeBodyV2";
import { ArrowRight, PenTool, Rocket, BarChart3, Check } from "lucide-react";
export const metadata = buildMetadata("home", "en");

export default function HomePage() {
  const demoUrl =
    "https://ulaiz.share.hsforms.com/2E5fbICR4QJejlPcle2rN1w";

  const faqItems = getHomeFaqItems("en");

  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(faqItems)) }}
      />
      {/* ── SECTION 1 — HERO ── */}
      <section className="relative min-h-screen flex items-center px-6 pt-24 pb-16">
        <GlowBackground
          indigoPosition={{ x: "25%", y: "40%" }}
          rustPosition={{ x: "75%", y: "55%" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Left: Text */}
            <div className="flex-1 space-y-8">
              <AnimatedSection immediate delay={0.1}>
                <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight">
                  People and companies are already buying micro-credentials.
                </h1>
              </AnimatedSection>

              <AnimatedSection immediate delay={0.2}>
                <p className="text-xl text-white/60 max-w-xl leading-relaxed">
                  Merahki helps you co-design and virtualize your micro-credentials, measure their impact with learning analytics, and issue verifiable digital badges. Turn your continuing education into a growth engine and a recurring revenue stream.
                </p>
              </AnimatedSection>

              {/* Pillars */}
              <AnimatedSection immediate delay={0.25}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 py-2 max-w-xl">
                  {[
                    "Design and virtualization in 6–12 weeks",
                    "Recurring revenue for your institution",
                    "Learning analytics with 95+ filters",
                    "Blockchain-verifiable badges",
                  ].map((pillar) => (
                    <div key={pillar} className="flex items-start gap-2">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent-peach" />
                      <span className="text-sm text-white/70 leading-snug">
                        {pillar}
                      </span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* CTAs */}
              <AnimatedSection immediate delay={0.3}>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Link
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
                  >
                    Book my 20-min demo{" "}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/reports"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white border border-white/20 hover:bg-white/5 transition-all text-sm"
                  >
                    Get the free ROI Framework
                  </Link>
                </div>
              </AnimatedSection>

              {/* Urgency microcopy */}
              <AnimatedSection immediate delay={0.35}>
                <p className="text-sm text-white/40 max-w-xl leading-relaxed border-l-2 border-accent-peach/40 pl-4">
                  UNESCO opened an 18–36 month window for universities to take
                  position. The ones that move first own the last mile to
                  employment. The rest hand it to Google and the bootcamps.
                </p>
              </AnimatedSection>
            </div>

            {/* Right: Dashboard Visual */}
            <AnimatedSection immediate delay={0.2} className="flex-1 w-full">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                <Image
                  src="/images/Micro-credenciales microcredentials.png"
                  alt="Merahki analytics dashboard — trained vs. untrained cohort comparison"
                  width={900}
                  height={720}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — LOGO BAR ── */}
      <LogoCarousel heading="Teams already measuring impact with Merahki" />

      {/* ── SECTION 3 — SOLUTION: 3 PILLARS ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "80%", y: "50%" }}
          rustPosition={{ x: "20%", y: "70%" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                We design it. Produce it.{" "}
                <span className="text-gradient-peach-purple">
                  Prove it works.
                </span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: PenTool,
                title: "Design & produce",
                desc: "We build the full program — courses, videos, assessments, and credentials — using AI and instructional design frameworks. You bring the expertise. We handle everything else.",
                link: { label: "See how we build", href: "/methodology" },
                color: "text-accent-peach",
                bg: "bg-accent-peach/10",
              },
              {
                icon: Rocket,
                title: "Launch & credential",
                desc: "Your branded academy goes live in weeks — with adaptive learning, mobile app, live sessions, and verifiable micro-credentials your learners share on LinkedIn.",
                link: {
                  label: "See a live academy",
                  href: "/case-studies",
                },
                color: "text-accent-purple",
                bg: "bg-accent-purple/10",
              },
              {
                icon: BarChart3,
                title: "Measure & prove ROI",
                desc: "Our analytics connect learning data to business outcomes. Track trained vs. untrained cohorts. See ticket deflection, adoption lift, and renewal rates — in real time, not quarterly.",
                link: {
                  label: "See the dashboard",
                  href: "/analytics-reports",
                },
                color: "text-accent-blue",
                bg: "bg-accent-blue/10",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="relative rounded-2xl p-7 border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all h-full flex flex-col">
                  <div
                    className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center mb-5 flex-shrink-0`}
                  >
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed flex-1">
                    {item.desc}
                  </p>
                  <Link
                    href={item.link.href}
                    className="inline-flex items-center gap-1 text-xs font-medium text-white/40 hover:text-white/70 transition-colors mt-5"
                  >
                    {item.link.label}{" "}
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <HomeBodyV2 locale="en">
        {/* ── SECTION 9 — PROOF / TESTIMONIALS ── */}
        <TestimonialsEN />
      </HomeBodyV2>

    </div>
  );
}

