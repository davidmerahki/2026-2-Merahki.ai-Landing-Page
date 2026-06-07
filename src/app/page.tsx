import type { Metadata } from "next";
import Image from "next/image";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import LogoCarousel from "@/components/sections/LogoCarousel";
import Accordion from "@/components/ui/Accordion";
import Collapsible from "@/components/ui/Collapsible";
import Link from "next/link";
import TestimonialsEN from "@/components/sections/TestimonialsEN";
import {
  ArrowRight,
  PenTool,
  Rocket,
  BarChart3,
  Shield,
  Heart,
  DollarSign,
  Factory,
  GraduationCap,
  Monitor,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "merahki.ai — Prove the ROI of Every Training Program",
  description:
    "The AI-powered platform that helps education leaders measure business impact — from enrollment to credential to CFO report. Design, launch, and prove ROI in weeks.",
  keywords: [
    "training ROI",
    "education ROI platform",
    "customer education analytics",
    "micro-credentials",
    "verifiable credentials",
    "partner certification",
    "learning analytics",
    "training business impact",
    "credential program",
    "education-led growth",
    "academy platform",
    "instructional design",
    "AI-powered training",
    "cohort analytics",
    "ticket deflection training",
    "B2B education platform",
  ],
  openGraph: {
    title: "merahki.ai — Prove the ROI of Every Training Program",
    description:
      "Design, launch, and prove the business impact of every training program. AI-powered platform for education leaders who need to show results, not just completions.",
    url: "https://merahki.ai",
    type: "website",
  },
};

export default function HomePage() {
  const demoUrl =
    "https://ulaiz.share.hsforms.com/2E5fbICR4QJejlPcle2rN1w";

  const faqItems = [
    {
      question: "We already have an LMS. Why do we need Merahki?",
      answer:
        "Merahki works with your LMS, not against it. We add the layers most platforms lack: instructional design, content production, verifiable credentials, and outcome-attribution analytics. Think of us as the team that fills the gap between \u201Cwe have a platform\u201D and \u201Cwe can prove it works.\u201D",
    },
    {
      question: "How do you measure ROI — not just completions?",
      answer:
        "We tag trained vs. untrained cohorts in your CRM and track business metrics — ticket deflection, adoption lift, NRR, renewal rates — at 30, 60, 90, and 120 days. The dashboard automates the math. You get ROI in real numbers, not estimates.",
    },
    {
      question: "What does this cost and when does it pay back?",
      answer:
        "Programs start at $2,975 for setup plus monthly operations. Most clients see first measurable outcomes within 6 weeks. Forrester data shows structured education programs hit payback in 7 months and return $6.71 per $1 by year three.",
      cta: { label: "See full pricing", href: "/reports" },
    },
    {
      question: "What about data security and compliance?",
      answer:
        "HTTPS enforced, GDPR-ready, Habeas Data compliant (critical for LATAM), SSO/SAML authentication, and encrypted data handling. We can discuss data residency and specific regulatory requirements on the demo call.",
    },
    {
      question: "How long does it take to go live?",
      answer:
        "Six to eight weeks: two for discovery and outcome mapping, four for design and production, one to two for platform setup and launch. The analytics dashboard is active from day one.",
    },
    {
      question: "Do we need to create the course content?",
      answer:
        "No. You bring the subject-matter experts. We handle instructional design, content production, interactive video, assessments, and credential architecture. AI tools accelerate every stage.",
    },
    {
      question: "What\u2019s a micro-credential vs. a regular course?",
      answer:
        "A micro-credential validates specific competencies through assessments — not just attendance. The digital badge is verifiable, shareable on LinkedIn, and meaningful to employers and compliance teams. It proves the learner can do the thing, not just that they sat through it.",
    },
    {
      question: "Can we use this for partner certification?",
      answer:
        "Yes. We design tier-gated partner programs with competency-based credentials and automated tier recalculation via API. Industry data: certified partners generate 6\u00D7 more revenue and close deals 46% faster.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
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
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "50%", y: "50%" }}
          rustPosition={{ x: "80%", y: "30%" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              70% of training programs{" "}
              <span className="text-gradient-blue-pink">
                can&apos;t defend their budget
              </span>{" "}
              to the CFO.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="space-y-6 text-white/60 text-base leading-relaxed">
              <p>
                Your team builds courses. Learners complete them. Reports show
                enrollment numbers and pass rates. Then budget season arrives —
                and the CFO asks: &ldquo;What did this actually change?&rdquo;
              </p>
              <p>
                You can&apos;t say how many support tickets dropped. You
                can&apos;t show which accounts renewed because they were
                trained. You can&apos;t prove that the $200K you spent on
                partner education created a single dollar of new revenue.
              </p>
              <p>
                Without that link between learning and business outcomes,
                training is the first budget cut when pressure hits.
              </p>

              {/* Agitate */}
              <p className="text-white/80 font-medium border-l-2 border-accent-purple/50 pl-5 italic">
                Every quarter without outcome data is another quarter defending
                your program with gut feel instead of proof.
              </p>

              {/* Solution tease */}
              <p className="text-white font-semibold">
                Merahki builds that link. From design to credential to ROI
                dashboard — in weeks.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA BREAK #1 ── */}
      <section className="py-20 px-6 border-y border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              See what your program&apos;s ROI looks like.
            </h2>
            <Link
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
            >
              Schedule my 20-min demo <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SECTION 6 — HOW IT WORKS ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "20%", y: "60%" }}
          rustPosition={{ x: "80%", y: "40%" }}
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Three steps. Six weeks.{" "}
                <span className="text-gradient-peach-purple">
                  First ROI report.
                </span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="relative">
            <div className="hidden md:block absolute top-8 left-[calc(16.67%-1px)] right-[calc(16.67%-1px)] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Diagnose",
                  desc: "We map your business goals to learning outcomes. What metric needs to move? Who needs to learn what? We set the baseline and tag cohorts before anything is built.",
                  deliverable: "Program Blueprint",
                  time: "Week 1\u20132",
                  color: "text-accent-peach",
                  border: "border-accent-peach/30",
                  bg: "bg-accent-peach/10",
                },
                {
                  step: "02",
                  title: "Design & launch",
                  desc: "Our team produces the full experience — adaptive courses, interactive video, assessments, credentials — using AI-powered tools. Your academy goes live with analytics active from day one.",
                  deliverable: "Live academy + mobile app",
                  time: "Week 3\u20136",
                  color: "text-accent-purple",
                  border: "border-accent-purple/30",
                  bg: "bg-accent-purple/10",
                },
                {
                  step: "03",
                  title: "Measure & optimize",
                  desc: "Automated dashboards track leading indicators weekly. Business-outcome metrics update monthly. Quarterly executive reports connect program spend to ROI in the language your CFO speaks.",
                  deliverable: "Ongoing ROI reporting",
                  time: "Week 6+ ongoing",
                  color: "text-accent-blue",
                  border: "border-accent-blue/30",
                  bg: "bg-accent-blue/10",
                },
              ].map((item, i) => (
                <AnimatedSection key={item.step} delay={i * 0.15}>
                  <div className="flex flex-col items-start gap-5">
                    <div
                      className={`w-14 h-14 rounded-2xl ${item.bg} border ${item.border} flex items-center justify-center flex-shrink-0`}
                    >
                      <span className={`font-bold text-lg ${item.color}`}>
                        {item.step}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed mb-3">
                        {item.desc}
                      </p>
                      <p className="text-xs text-white/30">
                        <span className="text-white/50 font-medium">
                          Deliverable:
                        </span>{" "}
                        {item.deliverable}
                      </p>
                      <p className="text-xs text-white/30 mt-1">{item.time}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7 — TESTIMONIALS ── */}
      <TestimonialsEN />

      {/* ── CTA BREAK #2 ── */}
      <section className="py-20 px-6 border-y border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your CFO wants numbers.{" "}
              <span className="text-gradient-peach-purple">
                Give them numbers.
              </span>
            </h2>
            <Link
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
            >
              Schedule my 20-min demo <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SECTION 8 — INDUSTRIES ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "80%", y: "50%" }}
          rustPosition={{ x: "20%", y: "70%" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Built for your industry.{" "}
                <span className="text-gradient-blue-pink">
                  Measured in your KPIs.
                </span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Monitor,
                title: "SaaS",
                desc: "Reduce onboarding time. Increase feature adoption. Prove trained accounts renew at higher rates.",
                metric: "+38.3% product adoption lift",
                metricSource: "Forrester/Intellum 2024",
                href: "/customer-education",
                color: "text-accent-purple",
                bg: "bg-accent-purple/10",
              },
              {
                icon: Shield,
                title: "Cybersecurity",
                desc: "Train your clients\u2019 teams. Measure incident reduction. Issue verifiable credentials that become a selling point in every proposal.",
                metric: "\u201325% incidents per $50 invested per learner",
                metricSource: "",
                href: "/case-studies",
                color: "text-accent-blue",
                bg: "bg-accent-blue/10",
              },
              {
                icon: Heart,
                title: "Healthcare & Life Sciences",
                desc: "Certify distributor teams. Track compliance. Maintain audit trails. Credentials tied to regulatory competency validation — not seat time.",
                metric: "100% audit-trail visibility",
                metricSource: "",
                href: "/medical-education",
                color: "text-accent-pink",
                bg: "bg-accent-pink/10",
              },
              {
                icon: DollarSign,
                title: "Financial Services",
                desc: "Certify partner networks. Gate tiers on competency, not revenue alone. Dashboard recalculates tier eligibility monthly.",
                metric: "Certified partners generate 6\u00D7 revenue",
                metricSource: "PartnerStack",
                href: "/partner-academies",
                color: "text-accent-peach",
                bg: "bg-accent-peach/10",
              },
              {
                icon: Factory,
                title: "Manufacturing",
                desc: "Upskill frontline teams. Track time-to-competency. Issue credentials that prove skills for safety and quality compliance.",
                metric: "",
                metricSource: "",
                href: "/training-certification",
                color: "text-accent-purple",
                bg: "bg-accent-purple/10",
              },
              {
                icon: GraduationCap,
                title: "Higher Education",
                desc: "Launch continuing education programs. Issue micro-credentials your graduates and corporate clients value. Measure program relevance with real outcomes data.",
                metric: "",
                metricSource: "",
                href: "/continuing-education",
                color: "text-accent-blue",
                bg: "bg-accent-blue/10",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={(i % 3) * 0.1}>
                <Link href={item.href} className="block group h-full">
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
                    {item.metric && (
                      <p className="text-xs font-medium text-accent-purple/80 mt-3">
                        {item.metric}
                        {item.metricSource && (
                          <span className="text-white/25 font-normal">
                            {" "}
                            ({item.metricSource})
                          </span>
                        )}
                      </p>
                    )}
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-white/40 group-hover:text-white/70 transition-colors mt-4">
                      See use cases{" "}
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9 — FAQ / OBJECTIONS ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "40%", y: "50%" }}
          rustPosition={{ x: "70%", y: "60%" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Questions the buying committee{" "}
                <span className="text-gradient-peach-purple">always asks.</span>
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Accordion items={faqItems} />
          </AnimatedSection>
        </div>
      </section>

      {/* ── SECTION 10 — THE ROI ENGINE ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "50%", y: "50%" }}
          rustPosition={{ x: "20%", y: "40%" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <Collapsible
              trigger={
                <h2 className="text-2xl md:text-3xl font-bold">
                  How the analytics{" "}
                  <span className="text-gradient-blue-pink">
                    actually work.
                  </span>
                </h2>
              }
            >
              <div className="space-y-10">
                {/* Four-Tier Measurement Hierarchy */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-6">
                    The Four-Tier Measurement Hierarchy
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        tier: "Tier 1 — Leading indicators",
                        freq: "tracked daily",
                        items:
                          "Enrollment velocity, time-to-first-course, module completion rates, assessment pass rates, engagement depth, drop-off points.",
                      },
                      {
                        tier: "Tier 2 — Transitional indicators",
                        freq: "tracked weekly",
                        items:
                          "Feature adoption post-training, behavioral change signals, support ticket patterns, product usage shifts in trained cohort.",
                      },
                      {
                        tier: "Tier 3 — Lagging business outcomes",
                        freq: "tracked monthly",
                        items:
                          "NRR and GRR differential, ticket deflection rate, CSAT and NPS lift, expansion revenue from educated accounts, incident reduction.",
                      },
                      {
                        tier: "Tier 4 — Terminal financial metrics",
                        freq: "reported quarterly",
                        items:
                          "Program ROI, LTV lift per trained user, deflection value, CAC payback compression, cost-per-credential trend.",
                      },
                    ].map((t) => (
                      <div
                        key={t.tier}
                        className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
                      >
                        <p className="text-white font-semibold text-sm">
                          {t.tier}
                        </p>
                        <p className="text-white/30 text-xs mb-2">{t.freq}</p>
                        <p className="text-white/50 text-xs leading-relaxed">
                          {t.items}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* The Formula */}
                <div className="rounded-xl border border-accent-purple/20 bg-accent-purple/5 p-6">
                  <h3 className="text-sm font-semibold text-white mb-3">
                    The Formula
                  </h3>
                  <p className="text-white/80 text-sm font-mono leading-relaxed">
                    Education ROI = (Retention Value + Expansion Value + Support
                    Savings + Acquisition Value − Program Cost) ÷ Program Cost
                  </p>
                  <p className="text-white/30 text-xs mt-2 italic">
                    Source: Avramescu Customer Education ROI Framework
                  </p>
                </div>

                {/* Integration Flow */}
                <div>
                  <h3 className="text-sm font-semibold text-white mb-3">
                    Integration Flow
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    CRM sync (HubSpot native; Zapier/Make for others) →
                    Cohort tagging at course completion → Webhook-driven event
                    flows → Automated dashboard → Scheduled executive reports
                    to inbox.
                  </p>
                </div>

                {/* Industry Benchmarks */}
                <div>
                  <h3 className="text-sm font-semibold text-white mb-4">
                    Industry Benchmarks
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left text-white/50 font-medium py-2 pr-4">
                            Metric
                          </th>
                          <th className="text-left text-white/50 font-medium py-2 pr-4">
                            Benchmark
                          </th>
                          <th className="text-left text-white/50 font-medium py-2">
                            Source
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-white/60 text-xs">
                        {[
                          ["Program ROI (3-year)", "372%", "Forrester/Intellum 2024"],
                          ["Return per $1 invested (Year 3)", "$6.71", "Forrester/Intellum 2024"],
                          ["Payback period", "7 months", "Forrester/Intellum 2024"],
                          ["Product adoption lift", "+38.3%", "Forrester/Intellum 2024"],
                          ["LTV lift per trained user", "+35%", "Forrester/Intellum 2024"],
                          ["Support cost reduction", "\u221215.5%", "Forrester/Intellum 2024"],
                          ["CSAT improvement", "+26.2%", "Forrester/Intellum 2024"],
                          ["Onboarding time improvement", "56% faster", "Thought Industries 2024"],
                          ["Ticket deflection multiplier", "7\u201315\u00D7", "HDI; Fullview"],
                          ["Certified partner revenue", "6\u00D7 vs. uncertified", "PartnerStack"],
                          ["Partner deal closure speed", "46% faster", "PartnerAwesome 2025"],
                        ].map((row) => (
                          <tr
                            key={row[0]}
                            className="border-b border-white/5"
                          >
                            <td className="py-2 pr-4">{row[0]}</td>
                            <td className="py-2 pr-4 text-white font-medium">
                              {row[1]}
                            </td>
                            <td className="py-2 text-white/30">{row[2]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Collapsible>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SECTION 11 — FINAL CTA ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "30%", y: "50%" }}
          rustPosition={{ x: "70%", y: "50%" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Next budget season,{" "}
              <span className="text-gradient-peach-purple">
                show them the numbers.
              </span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Every program Merahki builds comes with the analytics to prove its
              impact. Stop defending education with gut feel. Start defending it
              with data your CFO signs off on.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
              >
                Schedule my 20-min demo{" "}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/reports"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white border border-white/20 hover:bg-white/5 transition-all text-sm"
              >
                Get the ROI Framework free <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mini-testimonial */}
            <div className="glass-card rounded-xl p-5 max-w-md mx-auto">
              <p className="text-white/60 text-sm italic">
                &ldquo;The demo was straight to the point. No fluff, no
                pressure.&rdquo;
              </p>
              <p className="text-white/40 text-xs mt-2">
                — <span className="text-white/60 font-medium">Daniela V.</span>,
                Head of L&D, Manufacturing Co.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
