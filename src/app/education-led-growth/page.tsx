import type { Metadata } from "next";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import Link from "next/link";
import {
  ArrowRight,
  AlertCircle,
  TrendingUp,
  CheckCircle2,
  XCircle,
  Phone,
  Search,
  Users,
  BookOpen,
  Lightbulb,
  Target,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Education-Led Growth",
  description:
    "Turn education into your #1 growth channel. Attract, convert, and retain customers and partners through strategic learning programs.",
  openGraph: {
    title: "Education-Led Growth",
    description: "Turn education into your #1 growth channel.",
    url: "https://merahki.ai/education-led-growth",
    type: "website",
  },
};

const painPoints = [
  {
    type: "External",
    icon: AlertCircle,
    color: "text-accent-peach",
    bg: "bg-accent-peach/10 border-accent-peach/20",
    description:
      "Lacking effective learning analytics and education infrastructure to measure real impact.",
  },
  {
    type: "Internal",
    icon: AlertCircle,
    color: "text-accent-blue",
    bg: "bg-accent-blue/10 border-accent-blue/20",
    description:
      "Frustrated by the inability to create a growth-focused education strategy that actually moves the needle.",
  },
  {
    type: "Philosophical",
    icon: AlertCircle,
    color: "text-accent-purple",
    bg: "bg-accent-purple/10 border-accent-purple/20",
    description:
      "You deserve a seamless way to educate and grow without unnecessary hurdles or complexity.",
  },
];

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Schedule a Call",
    desc: "Discuss your current education strategy and identify key growth gaps.",
  },
  {
    number: "02",
    icon: Search,
    title: "Discovery Call",
    desc: "Join a deep-dive session to identify the best education-led growth fit for your organization.",
  },
  {
    number: "03",
    icon: Users,
    title: "Hire Your Team",
    desc: "Get your dedicated education growth team and start driving measurable results immediately.",
  },
];

const principles = [
  {
    icon: BookOpen,
    title: "Education as a growth channel",
    desc: "Treat learning programs the same way you treat demand gen campaigns — with funnels, conversion metrics, and ROI targets.",
  },
  {
    icon: Lightbulb,
    title: "Content that converts",
    desc: "Free courses, certifications, and micro-credentials that attract high-intent buyers and nurture them to qualified conversations.",
  },
  {
    icon: Target,
    title: "Education that retains",
    desc: "Continuous learning paths keep customers engaged with your product, accelerate adoption, and reduce churn quarter over quarter.",
  },
  {
    icon: BarChart3,
    title: "Measurable at every stage",
    desc: "Track education's contribution to pipeline, retention, NPS, and expansion revenue — not just completion rates.",
  },
];

const successResults = [
  "Increased lead conversion rates from educational content",
  "Boosted partner engagement and time-to-first-sale",
  "Streamlined product onboarding and reduced time-to-value",
  "Higher NPS and customer advocacy scores",
  "Measurable education ROI tied to revenue metrics",
  "Scalable learning infrastructure without growing the team",
];

const tragicResults = [
  "Continued frustration from scattered, unmeasured training",
  "Missed pipeline and expansion revenue opportunities",
  "Losing leads and partners to more education-mature competitors",
  "High churn from customers who never reached first success",
  "L&D budgets cut because impact can't be proven",
];

export default function EducationLedGrowthPage() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 text-center">
        <GlowBackground
          indigoPosition={{ x: "30%", y: "40%" }}
          rustPosition={{ x: "70%", y: "60%" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">
              Education-Led Growth
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              For{" "}
              <span className="text-gradient-peach-purple">
                Heads of Growth
              </span>{" "}
              seeking real impact
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Marketing leaders and growth professionals who want education to
              become their most powerful acquisition, retention, and expansion
              channel.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What is ELG? */}
      <section className="relative py-20 px-6">
        <GlowBackground
          indigoPosition={{ x: "70%", y: "50%" }}
          rustPosition={{ x: "20%", y: "50%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="inline-block section-badge text-white/30 mb-4">The Framework</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What is{" "}
                <span className="text-gradient-peach-purple">Education-Led Growth?</span>
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
                ELG is a go-to-market strategy where education programs — courses, certifications, academies — become your primary channel for attracting, converting, and retaining customers and partners.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-7 flex gap-5 h-full hover:border-white/15 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-accent-purple/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <p.icon className="w-5 h-5 text-accent-purple" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{p.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="relative py-20 px-6">
        <GlowBackground
          indigoPosition={{ x: "80%", y: "50%" }}
          rustPosition={{ x: "10%", y: "60%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                We understand the{" "}
                <span className="text-gradient-blue-pink">challenges</span>
              </h2>
              <p className="text-white/50 max-w-xl mx-auto">
                Three layers of pain that keep growth leaders from realizing the
                full potential of education.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map((p, i) => (
              <AnimatedSection key={p.type} delay={i * 0.1}>
                <div
                  className={`rounded-2xl p-6 border ${p.bg} h-full space-y-4`}
                >
                  <div className="flex items-center gap-3">
                    <p.icon className={`w-5 h-5 ${p.color}`} />
                    <span
                      className={`section-badge ${p.color}`}
                    >
                      {p.type}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Empathy + Authority */}
      <section className="relative py-20 px-6">
        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-8 h-full space-y-4">
              <span className="section-badge text-white/40">Empathy</span>
              <h3 className="text-2xl font-bold text-white">
                We know how hard it is
              </h3>
              <p className="text-white/60 leading-relaxed">
                Implementing effective education strategies without the right
                tools, infrastructure, and expertise is overwhelming. Most
                teams are left guessing what works and why.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="rounded-2xl p-8 h-full space-y-4 border border-accent-purple/30 bg-accent-purple/5">
              <span className="section-badge text-accent-purple">
                Competency & Authority
              </span>
              <h3 className="text-2xl font-bold text-white">
                +100 proven strategies
              </h3>
              <p className="text-white/60 leading-relaxed">
                With over 100 proven education-led growth strategies developed
                across 8 industries, we&apos;re a trusted ally in the field.
                Your growth is our mission.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="relative py-20 px-6">
        <GlowBackground
          indigoPosition={{ x: "50%", y: "50%" }}
          rustPosition={{ x: "80%", y: "30%" }}
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How we{" "}
                <span className="text-gradient-peach-purple">get started</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.15}>
                <div className="relative glass-card rounded-2xl p-8 text-center space-y-4">
                  <span className="text-6xl font-bold text-white/5 absolute top-4 right-6">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center mx-auto">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Variants */}
      <section className="relative py-16 px-6">
        <div className="relative z-10 max-w-3xl mx-auto space-y-6 text-center">
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-8 space-y-4 border-accent-peach/20">
              <p className="text-white/50 text-sm">Affirmation</p>
              <p className="text-white/80 text-lg italic leading-relaxed">
                &ldquo;If you&apos;re struggling with ineffective education strategies,
                we&apos;re here to help. You don&apos;t have to figure this out alone.&rdquo;
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all"
              >
                Let&apos;s Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#subscribe"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white border border-white/20 hover:bg-white/5 transition-all"
              >
                Subscribe for Insights
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Results Split */}
      <section className="relative py-20 px-6">
        <GlowBackground
          indigoPosition={{ x: "20%", y: "60%" }}
          rustPosition={{ x: "80%", y: "40%" }}
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
              The{" "}
              <span className="text-gradient-peach-purple">
                two paths forward
              </span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedSection>
              <div className="rounded-2xl p-8 border border-green-500/20 bg-green-500/5 space-y-5">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-bold text-green-400">
                    Successful Results
                  </h3>
                </div>
                <ul className="space-y-3">
                  {successResults.map((r) => (
                    <li key={r} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/70 text-sm">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="rounded-2xl p-8 border border-red-500/20 bg-red-500/5 space-y-5">
                <div className="flex items-center gap-3">
                  <XCircle className="w-6 h-6 text-red-400" />
                  <h3 className="text-xl font-bold text-red-400">
                    Without Action
                  </h3>
                </div>
                <ul className="space-y-3">
                  {tragicResults.map((r) => (
                    <li key={r} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/70 text-sm">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Identity Transformation */}
      <section className="relative py-20 px-6">
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-10 md:p-14 text-center relative overflow-hidden">
              <span className="absolute top-6 right-8 text-8xl font-black text-white/5 select-none">
                07
              </span>
              <span className="section-badge text-white/30 mb-6 inline-block">
                Identity Transformation
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                <div className="space-y-3">
                  <p className="section-badge text-red-400/60">Before</p>
                  <p className="text-xl font-semibold text-white/60">
                    Overwhelmed by education challenges
                  </p>
                  <p className="text-white/40 text-sm">
                    Scattered strategies, no measurement, constant firefighting
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="section-badge text-green-400/60">After</p>
                  <p className="text-xl font-semibold text-white">
                    Confident leader in education-led growth
                  </p>
                  <p className="text-white/50 text-sm">
                    Clear strategy, measurable outcomes, predictable growth
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all"
                >
                  Start the Transformation <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection
        heading="Start your Education-Led Growth journey"
        subheading="Turn education into your #1 growth channel. Talk to an expert today."
      />
    </div>
  );
}
