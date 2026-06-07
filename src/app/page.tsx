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
                  People and companies are already buying micro-credentials.{" "}
                  <span className="text-gradient-peach-purple">
                    The only question is who they buy them from.
                  </span>
                </h1>
              </AnimatedSection>

              <AnimatedSection immediate delay={0.2}>
                <p className="text-xl text-white/60 max-w-xl leading-relaxed">
                  Merahki designs and virtualizes your micro-credentials,
                  measures their impact with learning analytics, and issues
                  verifiable digital badges. Turn your continuing education into
                  a growth engine and a recurring revenue stream.
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

      {/* ── SECTION 4 — PROBLEM / PAIN (PAS) ── */}
      <section id="nueva-realidad" className="relative py-20 md:py-32 px-6 bg-white/[0.03] border-y border-white/5">
        <div className="relative z-10 max-w-[760px] mx-auto">
          <AnimatedSection>
            <div className="text-center mb-10">
              <p className="text-xs font-semibold tracking-[0.28em] uppercase text-accent-purple mb-4">
                The new reality
              </p>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                You lose your students twice.
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="space-y-7 text-white/70 text-lg md:text-xl leading-[1.7]">
              <p>
                First when they graduate and don&apos;t come back. Then when
                they decide to keep learning —and they do it on Coursera, on
                Google, in a six-week bootcamp.
              </p>
              <p>
                Every time it happens, it isn&apos;t just revenue you lose.
                It&apos;s the relevance that defines your institution.
              </p>
              <p>
                Undergraduate enrollment is falling. Only 2 in 10 young people
                finish traditional higher education. 70% of your graduates want
                to keep learning —if you offer them something relevant. And
                companies can&apos;t find the talent universities don&apos;t
                certify: the global shortage reaches 75%.
              </p>
              <p className="text-white font-medium border-l-4 border-accent-purple/70 bg-white/[0.04] rounded-r-2xl px-6 py-5">
                Coursera is 13 years old. Your institution has spent decades
                building academic authority. But today it&apos;s Coursera
                putting its seal on the graduate you trained.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  value: "2 in 10",
                  label: "young people who finish traditional higher education",
                },
                {
                  value: "70%",
                  label: "of graduates want to keep learning",
                },
                {
                  value: "75%",
                  label: "global talent shortage",
                },
              ].map((stat) => (
                <div
                  key={stat.value}
                  className="border-t border-white/15 pt-5 text-center md:text-left"
                >
                  <p className="text-4xl md:text-5xl font-bold text-gradient-blue-pink">
                    {stat.value}
                  </p>
                  <p className="text-white/55 text-sm leading-relaxed mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <HomeBodyV2 locale="en">
        {/* ── SECTION 9 — PROOF / TESTIMONIALS ── */}
        <TestimonialsEN />
      </HomeBodyV2>

    </div>
  );
}

