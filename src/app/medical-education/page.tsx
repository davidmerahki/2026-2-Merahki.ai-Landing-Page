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
  ShieldCheck,
  GraduationCap,
  Stethoscope,
  BarChart3,
  Gamepad2,
  ClipboardCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Medical Education",
  description:
    "merahki.ai's Medical Education platform delivers AI-powered Continuing Medical Education (CME), accreditation management, clinical simulation, and competency-based assessments for healthcare professionals. Reduce time-to-competency, ensure regulatory compliance, and scale clinical training programs with measurable Kirkpatrick Level 4 outcomes.",
  keywords: [
    "medical education platform",
    "continuing medical education CME",
    "CME compliance tracking",
    "healthcare accreditation management",
    "clinical simulation training",
    "competency-based medical assessment",
    "AI-powered medical training",
    "Kirkpatrick Level 4 healthcare ROI",
    "pharmaceutical training platform",
    "healthcare professional development",
    "medical certification programs",
    "clinical case simulation",
    "gamification in medical education",
    "adaptive learning healthcare",
    "medical education analytics",
    "ACCME compliance",
    "healthcare workforce readiness",
    "digital credentials healthcare",
  ],
  openGraph: {
    title:
      "Medical Education — AI-Powered CME & Clinical Training | merahki.ai",
    description:
      "Transform medical education with AI-powered CME tracking, accreditation management, clinical simulations, and competency-based assessments. merahki.ai helps healthcare organizations scale training while ensuring regulatory compliance.",
    url: "https://merahki.ai/medical-education",
    type: "website",
  },
};

const pillars = [
  {
    icon: ShieldCheck,
    label: "CME Compliance",
    color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  },
  {
    icon: Award,
    label: "Accreditation",
    color: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  },
  {
    icon: Stethoscope,
    label: "Clinical Simulation",
    color: "text-sky-400 bg-sky-400/10 border-sky-400/20",
  },
  {
    icon: ClipboardCheck,
    label: "Assessment",
    color: "text-violet-400 bg-violet-400/10 border-violet-400/20",
  },
  {
    icon: Gamepad2,
    label: "Gamification",
    color: "text-rose-400 bg-rose-400/10 border-rose-400/20",
  },
  {
    icon: BarChart3,
    label: "Analytics",
    color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "CME Tracking & Compliance",
    bullets: [
      "Automate credit tracking, reporting, and renewal reminders for physicians, nurses, and allied health professionals.",
      "Ensure compliance with ACCME, state licensing boards, and specialty-specific requirements through real-time dashboards.",
    ],
    image: "/images/customer-education/ongoing-skills.jpg",
    imageAlt: "CME compliance tracking dashboard",
    reverse: false,
  },
  {
    icon: Award,
    title: "Accreditation Management",
    bullets: [
      "Streamline accreditation workflows — from application to approval — with AI-assisted documentation and audit trails.",
      "Maintain continuous compliance with evolving standards from accrediting bodies and regulatory agencies.",
    ],
    image: "/images/customer-education/customer-certification.jpg",
    imageAlt: "Accreditation management workflow",
    reverse: true,
  },
  {
    icon: Stethoscope,
    title: "Clinical Case Simulation",
    bullets: [
      "Deploy interactive, branching clinical scenarios that adapt to learner decisions in real time.",
      "Measure clinical reasoning and decision-making skills with AI-scored performance analytics.",
    ],
    image: "/images/customer-education/feature-adoption.png",
    imageAlt: "Clinical case simulation interface",
    reverse: false,
  },
];

const agents = [
  {
    name: "Creator Agent",
    availability: "available" as const,
    description:
      "Transform clinical guidelines, research papers, and protocols into structured courses, case studies, and assessments — in minutes, not months.",
    image: "/images/agents/creator-agent.jpg",
  },
  {
    name: "Manager Agent",
    availability: "early-access" as const,
    description:
      "Assign training paths by specialty, track CME credits, and generate compliance reports using natural-language commands. Expanding monthly through our modular intent framework.",
    image: "/images/agents/manager-agent.jpg",
  },
  {
    name: "Learner Agent",
    availability: "early-access" as const,
    description:
      "Provide clinicians with a persistent AI tutor that answers clinical questions, recommends evidence-based resources, and reinforces learning through spaced repetition.",
    image: "/images/agents/learner-agent.jpg",
  },
];

const stats = [
  {
    metric: "89%",
    desc: "of healthcare organizations report improved compliance outcomes with structured digital CME programs.",
    color: "from-accent-purple/20",
  },
  {
    metric: "3x",
    desc: "faster time-to-competency for clinical teams using AI-adaptive learning paths vs. traditional classroom training.",
    color: "from-accent-blue/20",
  },
  {
    metric: "45%",
    desc: "reduction in training costs by replacing in-person workshops with scalable, on-demand digital education.",
    color: "from-emerald-500/20",
  },
];

const plans = [
  {
    name: "Essentials",
    description: "For small clinics and practices launching their first digital CME program.",
    features: [
      "Up to 500 learners",
      "CME credit tracking & reporting",
      "Course builder with templates",
      "Basic analytics dashboard",
      "Email support",
    ],
  },
  {
    name: "Professional",
    description: "For hospitals and health systems scaling training across departments.",
    features: [
      "Up to 5,000 learners",
      "Everything in Essentials",
      "Accreditation workflow management",
      "Clinical simulation builder",
      "AI Creator Agent access",
      "Advanced analytics & compliance reports",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For pharmaceutical companies, medical associations, and large health networks.",
    features: [
      "Unlimited learners",
      "Everything in Professional",
      "Full AI Agent suite (Creator, Manager, Learner)",
      "Custom integrations (EHR, LRS, xAPI)",
      "White-label academy",
      "Dedicated success manager",
      "SLA & custom compliance",
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does merahki.ai support Continuing Medical Education (CME) compliance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "merahki.ai automates CME credit tracking, renewal reminders, and compliance reporting across ACCME, state licensing boards, and specialty-specific requirements. Real-time dashboards give program administrators instant visibility into learner progress, while AI-generated audit trails simplify accreditation reviews.",
      },
    },
    {
      "@type": "Question",
      name: "Can merahki.ai be used for clinical simulation training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. merahki.ai's clinical simulation builder lets you create interactive, branching patient scenarios that adapt to learner decisions. AI-scored performance analytics measure clinical reasoning, diagnostic accuracy, and treatment decision-making — providing Kirkpatrick Level 3 and Level 4 outcomes data.",
      },
    },
    {
      "@type": "Question",
      name: "How does AI improve medical education outcomes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "merahki.ai's AI agents transform medical education by automating content creation from clinical guidelines and research, delivering adaptive learning paths personalized to each clinician's knowledge gaps, and providing a persistent AI tutor for spaced repetition and evidence-based recommendations. This results in 3x faster time-to-competency and measurable improvements in clinical performance.",
      },
    },
    {
      "@type": "Question",
      name: "Is merahki.ai suitable for pharmaceutical training programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. merahki.ai powers training programs for leading pharmaceutical companies including Novartis, AstraZeneca, Sanofi, and Abbott. The platform supports product knowledge training, HCP engagement education, compliance training, and medical affairs programs — all with built-in regulatory compliance tracking and analytics.",
      },
    },
  ],
};

export default function MedicalEducationPage() {
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
              Medical Education
            </span>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Empowering healthcare{" "}
              <span className="text-gradient-peach-purple">professionals</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              AI-powered CME programs, accreditation management, and clinical
              training that scale — while keeping every credential compliant.
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

      {/* Revolutionizing Medical Education */}
      <section className="relative py-16 px-6">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="narrative-card rounded-2xl p-10 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Revolutionizing medical education
              </h2>
              <p className="text-white/60 leading-relaxed max-w-2xl mx-auto">
                Traditional medical education is slow to update, hard to scale,
                and disconnected from real clinical outcomes. merahki.ai bridges
                the gap between knowledge acquisition and clinical performance —
                with AI that adapts to every learner, every specialty, and every
                regulatory requirement.
              </p>
              <div className="flex flex-wrap gap-3 justify-center pt-2">
                {pillars.map((p) => (
                  <span
                    key={p.label}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold tracking-wide ${p.color}`}
                  >
                    <p.icon className="w-3.5 h-3.5" />
                    {p.label}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "20%", y: "50%" }}
          rustPosition={{ x: "80%", y: "40%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Platform capabilities
                <br />
                <span className="text-gradient-peach-purple">
                  for clinical excellence
                </span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-28">
            {features.map((f) => (
              <AnimatedSection key={f.title} delay={0.1}>
                <div
                  className={`flex flex-col gap-10 items-center ${
                    f.reverse ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  <div className="flex-1 space-y-6">
                    <div className="w-11 h-11 rounded-xl bg-accent-purple/20 flex items-center justify-center">
                      <f.icon className="w-5 h-5 text-accent-purple" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {f.title}
                    </h3>
                    <ul className="space-y-3">
                      {f.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <span className="text-accent-purple text-lg leading-none mt-0.5">
                            ✦
                          </span>
                          <span className="text-white/65 leading-relaxed">
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex-1 w-full">
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl aspect-[16/10]">
                      <Image
                        src={f.image}
                        alt={f.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
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
                  healthcare education
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

      {/* Stats */}
      <section className="relative py-20 px-6">
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold">
                Proven{" "}
                <span className="text-gradient-peach-purple">impact</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((s, i) => (
              <AnimatedSection key={s.metric} delay={i * 0.15}>
                <div
                  className={`rounded-2xl p-8 border border-white/10 bg-gradient-to-br ${s.color} to-transparent space-y-3`}
                >
                  <p className="text-5xl font-bold text-gradient-peach-purple">
                    {s.metric}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
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
                <span className="text-gradient-peach-purple">organization</span>
              </h2>
              <p className="text-white/50 mt-4 max-w-xl mx-auto">
                From independent clinics to global health networks — choose the
                plan that fits your scale.
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
                purpose-built for medical education
              </span>
            </h2>
            <p className="text-white/50 mt-4 leading-relaxed">
              From CME compliance to clinical competency — one platform that
              connects education to patient outcomes.
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
        heading="Launch your medical education program"
        subheading="See how merahki.ai helps healthcare organizations deliver compliant, scalable, and effective training."
      />
    </div>
  );
}
