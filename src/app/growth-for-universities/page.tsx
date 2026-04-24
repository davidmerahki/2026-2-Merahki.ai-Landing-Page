import type { Metadata } from "next";
import Image from "next/image";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AgentCard from "@/components/ui/AgentCard";
import ContactSection from "@/components/sections/ContactSection";
import OurProposal from "@/components/sections/OurProposal";
import LogoCarousel from "@/components/sections/LogoCarousel";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Brain,
  GraduationCap,
  Users,
  BarChart3,
  Megaphone,
  BookOpen,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  RefreshCcw,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Growth for Universities",
  description:
    "merahki.ai helps universities and higher education institutions scale enrollment, boost student retention, and deliver lifelong learning programs with AI-powered academies. From undergraduate recruitment to continuing education, our platform turns education into a measurable growth engine.",
  keywords: [
    "university growth platform",
    "higher education enrollment growth",
    "student retention strategies",
    "lifelong learning platform",
    "continuing education university",
    "AI-powered university programs",
    "higher education marketing",
    "university digital transformation",
    "online degree programs platform",
    "student engagement AI",
    "education-led growth universities",
    "university certification programs",
    "micro-credentials higher education",
    "adaptive learning university",
    "student onboarding automation",
    "alumni engagement platform",
    "university analytics dashboard",
    "enrollment funnel optimization",
  ],
  openGraph: {
    title:
      "Growth for Universities — Scale Enrollment & Lifelong Learning | merahki.ai",
    description:
      "AI-powered platform that helps universities scale enrollment, improve student retention, launch continuing education programs, and turn alumni into lifelong learners.",
    url: "https://merahki.ai/growth-for-universities",
    type: "website",
  },
};

const capabilities = [
  {
    icon: Megaphone,
    title: "Enrollment & Recruitment Marketing",
    desc: "AI-optimized funnels that convert prospective students into enrolled learners — from first click to first class.",
    color: "text-rose-400",
  },
  {
    icon: BookOpen,
    title: "Flexible Academic Programs",
    desc: "Build and launch undergraduate, graduate, and micro-credential programs that adapt to every learner's schedule and goals.",
    color: "text-sky-400",
  },
  {
    icon: Brain,
    title: "AI-Driven Content Creation",
    desc: "Transform syllabi, research papers, and lecture recordings into engaging digital courses in minutes — not semesters.",
    color: "text-violet-400",
  },
  {
    icon: Users,
    title: "Student Engagement & Retention",
    desc: "Detect at-risk students early with behavioral analytics and deploy personalized interventions that improve completion rates.",
    color: "text-emerald-400",
  },
  {
    icon: Award,
    title: "Digital Credentials & Certification",
    desc: "Issue blockchain-verified certificates, micro-credentials, and Open Badges that employers trust and alumni share.",
    color: "text-amber-400",
  },
  {
    icon: BarChart3,
    title: "Institutional Analytics",
    desc: "Real-time dashboards connecting enrollment, engagement, completion, and employment outcomes for data-driven decisions.",
    color: "text-cyan-400",
  },
];

const programTypes = [
  {
    label: "Undergraduate",
    icon: GraduationCap,
    bullets: [
      "Interactive onboarding that reduces first-year dropout by up to 35%.",
      "Adaptive learning paths aligned to degree requirements.",
      "Gamified engagement that keeps students motivated through completion.",
    ],
  },
  {
    label: "Graduate & Professional",
    icon: BookOpen,
    bullets: [
      "Flexible cohort-based programs for working professionals.",
      "AI-powered thesis and research skill development modules.",
      "Industry-recognized certifications embedded in curricula.",
    ],
  },
  {
    label: "Continuing Education",
    icon: RefreshCcw,
    bullets: [
      "Launch market-ready micro-credential programs in weeks.",
      "Turn alumni networks into recurring revenue through lifelong learning.",
      "Corporate training partnerships powered by your institutional brand.",
    ],
  },
];

const stats = [
  {
    metric: "35%",
    desc: "improvement in first-year student retention with AI-driven engagement programs.",
    color: "from-accent-purple/20",
  },
  {
    metric: "5x",
    desc: "faster course creation from existing syllabi using the AI Creator Agent.",
    color: "from-accent-blue/20",
  },
  {
    metric: "70%",
    desc: "of alumni express interest in lifelong learning when offered relevant micro-credentials.",
    color: "from-emerald-500/20",
  },
  {
    metric: "2.4x",
    desc: "return on marketing investment with AI-optimized enrollment funnels.",
    color: "from-amber-500/20",
  },
];

const agents = [
  {
    name: "Creator Agent",
    availability: "available" as const,
    description:
      "Transform syllabi, lecture recordings, and academic papers into structured digital courses, assessments, and interactive content — in minutes.",
    image: "/images/agents/creator-agent.jpg",
  },
  {
    name: "Manager Agent",
    availability: "early-access" as const,
    description:
      "Manage student cohorts, track completion milestones, and generate institutional reports using natural-language commands. Expanding monthly through our modular intent framework.",
    image: "/images/agents/manager-agent.jpg",
  },
  {
    name: "Learner Agent",
    availability: "early-access" as const,
    description:
      "Give every student a persistent AI tutor that answers questions, recommends resources, and reinforces learning through spaced repetition — 24/7.",
    image: "/images/agents/learner-agent.jpg",
  },
];

const plans = [
  {
    name: "Starter",
    description: "For small institutions and departments launching their first digital programs.",
    features: [
      "Up to 1,000 learners",
      "Course builder with templates",
      "Digital certificate issuance",
      "Basic analytics dashboard",
      "Email support",
    ],
  },
  {
    name: "Growth",
    description: "For universities scaling enrollment and expanding into continuing education.",
    features: [
      "Up to 10,000 learners",
      "Everything in Starter",
      "AI Creator Agent access",
      "Enrollment funnel builder",
      "Student retention analytics",
      "Micro-credential programs",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For large universities and multi-campus systems with complex requirements.",
    features: [
      "Unlimited learners",
      "Everything in Growth",
      "Full AI Agent suite (Creator, Manager, Learner)",
      "Custom integrations (SIS, LRS, xAPI, CRM)",
      "White-label academy",
      "Dedicated success manager",
      "SLA & compliance support",
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does merahki.ai help universities increase enrollment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "merahki.ai provides AI-optimized enrollment funnels that convert prospective students into enrolled learners. From targeted content marketing to personalized nurture sequences, the platform automates the recruitment process while providing real-time analytics on conversion rates, cost per enrollment, and channel performance — delivering an average 2.4x return on marketing investment.",
      },
    },
    {
      "@type": "Question",
      name: "Can merahki.ai improve student retention rates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. merahki.ai's behavioral analytics engine detects at-risk students early by analyzing engagement patterns, assignment completion, and learning activity. The platform then triggers personalized interventions — adaptive content, tutor nudges, or mentor referrals — that keep students on track. Universities using this approach report up to 35% improvement in first-year retention.",
      },
    },
    {
      "@type": "Question",
      name: "How can universities launch continuing education programs with merahki.ai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "merahki.ai enables universities to launch market-ready micro-credential and continuing education programs in weeks. The AI Creator Agent transforms existing academic content into professional development courses, while the platform handles enrollment, certification, and analytics. Universities can turn alumni networks into recurring revenue through lifelong learning programs powered by their institutional brand.",
      },
    },
    {
      "@type": "Question",
      name: "What types of credentials can merahki.ai issue?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "merahki.ai supports blockchain-verified certificates, Open Badges 3.0, Europass Digital Credentials, and W3C Verifiable Credentials. These digital credentials are tamper-proof, employer-verifiable, and shareable on LinkedIn and other professional networks — giving students and alumni portable proof of their achievements.",
      },
    },
  ],
};

export default function GrowthForUniversitiesPage() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 text-center">
        <GlowBackground
          indigoPosition={{ x: "30%", y: "40%" }}
          rustPosition={{ x: "70%", y: "60%" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <AnimatedSection immediate>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">
              Growth for Universities
            </span>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              A student-centric{" "}
              <span className="text-gradient-peach-purple">growth engine</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Scale enrollment, boost retention, and turn every graduate into a
              lifelong learner — with AI-powered programs that adapt to each
              student&apos;s journey.
            </p>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
              >
                Book a Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <LogoCarousel />

      {/* Problem Narrative */}
      <section className="relative py-16 px-6">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <div className="narrative-card rounded-2xl p-10 space-y-4">
              <h2 className="text-2xl font-bold text-white">
                The challenge universities face today
              </h2>
              <p className="text-white/60 leading-relaxed">
                Enrollment is increasingly competitive. Student expectations are
                higher than ever. And the demand for flexible, career-relevant
                education extends far beyond the traditional four-year degree.
              </p>
              <p className="text-white/60 leading-relaxed">
                merahki.ai gives universities the tools to attract, engage, and
                retain students at every stage — from first inquiry through
                alumni lifelong learning — with AI that scales your
                institution&apos;s impact without scaling your team.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 6 Capabilities Grid */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "20%", y: "50%" }}
          rustPosition={{ x: "80%", y: "40%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Platform capabilities
                <br />
                <span className="text-gradient-peach-purple">
                  for academic growth
                </span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {capabilities.map((cap, i) => (
              <AnimatedSection key={cap.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 space-y-3 h-full hover:bg-white/[0.04] transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                      <cap.icon className={`w-5 h-5 ${cap.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {cap.title}
                    </h3>
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed pl-[52px]">
                    {cap.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Program Types */}
      <section className="relative py-20 px-6">
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold">
                Built for every{" "}
                <span className="text-gradient-blue-pink">program type</span>
              </h2>
              <p className="text-white/50 mt-4 max-w-xl mx-auto">
                From traditional degrees to micro-credentials — one platform for
                the entire learner lifecycle.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programTypes.map((pt, i) => (
              <AnimatedSection key={pt.label} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 space-y-4 h-full">
                  <div className="w-10 h-10 rounded-xl bg-accent-purple/15 flex items-center justify-center">
                    <pt.icon className="w-5 h-5 text-accent-purple" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{pt.label}</h3>
                  <ul className="space-y-2.5">
                    {pt.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-white/60"
                      >
                        <span className="text-accent-purple mt-0.5">✦</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20 px-6">
        <GlowBackground
          indigoPosition={{ x: "60%", y: "50%" }}
          rustPosition={{ x: "30%", y: "40%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold">
                Measurable{" "}
                <span className="text-gradient-peach-purple">impact</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <AnimatedSection key={s.metric} delay={i * 0.1}>
                <div
                  className={`rounded-2xl p-7 border border-white/10 bg-gradient-to-br ${s.color} to-transparent space-y-2`}
                >
                  <p className="text-4xl font-bold text-gradient-peach-purple">
                    {s.metric}
                  </p>
                  <p className="text-white/55 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents */}
      <section className="relative py-20 px-6" id="agents">
        <GlowBackground
          indigoPosition={{ x: "70%", y: "40%" }}
          rustPosition={{ x: "20%", y: "60%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="section-badge text-white/30 mb-4 inline-block">
                Powered by merahki.ai
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                AI agents built for{" "}
                <span className="text-gradient-blue-pink">
                  higher education
                </span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {agents.map((agent, i) => (
              <AnimatedSection
                key={agent.name}
                delay={i * 0.1}
                className="h-full"
              >
                <AgentCard
                  name={agent.name}
                  availability={agent.availability}
                  description={agent.description}
                  image={agent.image}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "50%", y: "40%" }}
          rustPosition={{ x: "50%", y: "60%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold">
                Plans for every{" "}
                <span className="text-gradient-peach-purple">institution</span>
              </h2>
              <p className="text-white/50 mt-4 max-w-xl mx-auto">
                From single departments to multi-campus university systems —
                choose the plan that fits your scale.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <AnimatedSection key={plan.name} delay={i * 0.1}>
                <div
                  className={`rounded-2xl p-8 border space-y-5 h-full flex flex-col ${
                    plan.highlighted
                      ? "border-accent-purple/50 bg-accent-purple/5"
                      : "border-white/10 bg-white/[0.02]"
                  }`}
                >
                  {plan.highlighted && (
                    <span className="inline-flex self-start items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-accent-purple/20 text-accent-purple">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                  <ul className="space-y-2.5 flex-1">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-white/65"
                      >
                        <span className="text-accent-purple mt-0.5">✦</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full text-sm font-semibold transition-all ${
                      plan.highlighted
                        ? "bg-accent-purple text-white hover:bg-accent-purple/85"
                        : "border border-white/15 text-white/80 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    Get Started <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Only with merahki.ai */}
      <section className="relative py-24 px-6 text-center">
        <GlowBackground
          indigoPosition={{ x: "50%", y: "50%" }}
          rustPosition={{ x: "30%", y: "60%" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <AnimatedSection>
            <span className="section-badge text-white/30 mb-2 inline-block">
              Only with merahki.ai
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              The AI-native platform{" "}
              <span className="text-gradient-peach-purple">
                purpose-built for higher education
              </span>
            </h2>
            <p className="text-white/50 mt-4 leading-relaxed">
              From enrollment to alumni — one platform that turns every stage of
              the student journey into measurable growth.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Link
              href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <OurProposal />

      <ContactSection
        heading="Scale your university's growth"
        subheading="See how merahki.ai helps institutions boost enrollment, improve retention, and launch lifelong learning programs."
      />
    </div>
  );
}
