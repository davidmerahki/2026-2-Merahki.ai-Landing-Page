import type { Metadata } from "next";
import Image from "next/image";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AgentCard from "@/components/ui/AgentCard";
import ContactSection from "@/components/sections/ContactSection";
import LogoCarousel from "@/components/sections/LogoCarousel";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Rocket, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Rapid Studio",
  description:
    "Enterprise-grade e-learning authoring built for speed and AI. Create, publish, and manage training content that integrates seamlessly with your LMS.",
  openGraph: {
    title: "Rapid Studio",
    description: "Built for speed. Ready for AI. Enterprise e-learning authoring at its best.",
    url: "https://merahki.ai/training-certification",
    type: "website",
  },
};

const trustedBy = [
  "POK",
  "Codere",
  "Fundación Corona",
  "Novartis",
  "Terumo",
  "Fundación Santa Fe de Bogotá",
  "Cafam",
  "AstraZeneca",
  "UK PACT",
  "IDARTES",
  "Luker Chocolate",
  "DRC – Danish Refugee Council",
  "Universidad del Valle",
  "Fundación Aflora",
  "Bavaria",
  "ESPN",
  "Claro",
  "Celsia",
  "Project Management Institute",
  "Universidad de los Andes",
  "Abbott",
  "Parque Arauco",
  "BID",
  "Escuela Nacional del Deporte",
  "Fundación FEMSA",
  "Unicuces",
  "AMSHOC",
  "Heel",
  "Alcaldía Mayor de Bogotá",
  "Universidad César Vallejo",
  "Advanz International Education",
  "LearnWorlds",
  "Vásquez Kennedy Career Success",
  "Positiva Compañía de Seguros",
];

const features = [
  {
    icon: ShieldCheck,
    title: "Compliance Automation",
    bullets: [
      "Assign, track, and update required training automatically across roles and locations.",
      "Stay audit-ready with automated reporting and completion tracking.",
    ],
    image: "/images/training-certification/compliance-automation.jpg",
    imageAlt: "Compliance automation dashboard",
    reverse: false,
  },
  {
    icon: Zap,
    title: "Just-in-Time Learning",
    bullets: [
      "Provide AI-powered search and quick reference guides inside the flow of work.",
      "Reduce time-to-competency with contextual microlearning.",
    ],
    image: "/images/training-certification/just-in-time.jpg",
    imageAlt: "Just-in-time learning interface",
    reverse: true,
  },
  {
    icon: Rocket,
    title: "Accelerated Onboarding",
    bullets: [
      "Create role-specific onboarding paths that cut ramp time for new hires.",
      "Adjust dynamically as employees complete training milestones.",
    ],
    image: "/images/training-certification/accelerated-onboarding.png",
    imageAlt: "Accelerated onboarding program",
    reverse: false,
  },
];

const agents = [
  {
    name: "Creator Agent",
    availability: "available" as const,
    description:
      "Generate course structures, guides, and assessments from release notes, documentation, or recorded webinars — in minutes.",
    image: "/images/agents/creator-agent.jpg",
  },
  {
    name: "Manager Agent",
    availability: "early-access" as const,
    description:
      "Assign, update, and report on learning programs with natural-language requests. Capabilities expanding monthly.",
    image: "/images/agents/manager-agent.jpg",
  },
];

const pricingTiers = [
  {
    name: "Personal",
    subtitle: "For Individuals",
    price: "Contact Us",
    highlight: false,
    features: [
      "Complete authoring suite",
      "Quizzes and assessments",
      "Custom logic & themes",
      "Free Reviewer licenses",
      "Standard email support",
    ],
    cta: "Get Started",
    href: "#contact",
  },
  {
    name: "Enterprise",
    subtitle: "For Agencies or Scaling Organizations",
    price: "Custom",
    highlight: true,
    features: [
      "2 license minimum",
      "Hire a fullstack production team",
      "Project Manager, Video Editor, Graphic Designer",
      "Instructional Designer, Gamification Expert",
      "Bulk user management",
      "Access to merahki.ai Evolve Hub & Community",
    ],
    cta: "Get a Quote",
    href: "#contact",
  },
];

export default function TrainingCertificationPage() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 text-center">
        <GlowBackground
          indigoPosition={{ x: "30%", y: "40%" }}
          rustPosition={{ x: "70%", y: "55%" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">
              Training &amp; Certification
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Boost{" "}
              <span className="text-gradient-blue-pink">workforce readiness</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              AI-powered training keeps employees skilled, compliant, and ready
              to perform — anywhere they work.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
              >
                Get a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white border border-white/20 hover:bg-white/5 transition-all text-sm"
              >
                Book a Demo
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <LogoCarousel />

      {/* Trusted By */}
      <section className="py-12 px-6 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="text-center text-white/30 section-badge mb-8">
              Trusted by
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {trustedBy.map((name) => (
                <span
                  key={name}
                  className="px-4 py-2 rounded-lg border border-white/10 bg-white/3 text-white/50 text-sm"
                >
                  {name}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Narrative */}
      <section className="relative py-16 px-6">
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="narrative-card rounded-2xl p-10 space-y-4 text-center">
              <h2 className="text-2xl font-bold text-white">
                Training that matches the speed of business
              </h2>
              <p className="text-white/60 leading-relaxed">
                Whether you&apos;re onboarding new hires, upskilling teams, or
                keeping field staff compliant, traditional training can&apos;t
                keep up with constant change. Programs are often too slow to
                deploy, too generic to stick, and too manual to manage at scale.
              </p>
              <p className="text-white/60 leading-relaxed">
                merahki.ai fixes this. Our AI-enabled platform delivers targeted
                learning experiences that reach every employee, in every role,
                exactly when they need them — with measurable impact.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "80%", y: "40%" }}
          rustPosition={{ x: "20%", y: "60%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Platform capabilities
                <br />
                <span className="text-gradient-blue-pink">
                  for performance improvement
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
                          <span className="text-accent-purple text-lg leading-none mt-0.5">✦</span>
                          <span className="text-white/65 leading-relaxed">{b}</span>
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
      <section className="relative py-20 px-6">
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="section-badge text-white/30 mb-4 inline-block">
                Powered by merahki.ai
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                AI agents for{" "}
                <span className="text-gradient-blue-pink">content creation</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl mx-auto items-stretch">
            {agents.map((agent, i) => (
              <AnimatedSection key={agent.name} delay={i * 0.1} className="h-full">
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

      {/* Pricing */}
      <section className="relative py-24 px-6" id="pricing">
        <GlowBackground
          indigoPosition={{ x: "50%", y: "50%" }}
          rustPosition={{ x: "70%", y: "30%" }}
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                We&apos;ve got a plan{" "}
                <span className="text-gradient-peach-purple">for you</span>
              </h2>
              <p className="text-white/50">
                Get everything your organization needs to create e-learning.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pricingTiers.map((tier, i) => (
              <AnimatedSection key={tier.name} delay={i * 0.15}>
                <div
                  className={`rounded-2xl p-8 h-full flex flex-col space-y-6 ${
                    tier.highlight
                      ? "border border-accent-purple/40 bg-gradient-to-b from-accent-purple/10 to-transparent"
                      : "glass-card"
                  }`}
                >
                  <div>
                    <p className="section-badge text-white/40 mb-2">
                      {tier.subtitle}
                    </p>
                    <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                    <p
                      className={`text-4xl font-bold mt-3 ${
                        tier.highlight
                          ? "text-gradient-peach-purple"
                          : "text-white"
                      }`}
                    >
                      {tier.price}
                    </p>
                  </div>
                  <ul className="space-y-3 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-accent-purple flex-shrink-0 mt-0.5" />
                        <span className="text-white/60 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={tier.href}
                    className={`inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-semibold text-sm transition-all ${
                      tier.highlight
                        ? "bg-white text-black hover:bg-white/90"
                        : "border border-white/20 text-white hover:bg-white/5"
                    }`}
                  >
                    {tier.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Custom / Enterprise note */}
          <AnimatedSection delay={0.3}>
            <div className="mt-8 text-center glass-card rounded-2xl p-8">
              <p className="section-badge text-white/30 mb-3">Enterprise</p>
              <h3 className="text-xl font-bold text-white mb-2">
                For Agencies or Scaling Organizations
              </h3>
              <p className="text-white/50 text-sm mb-6">
                Custom pricing · 25 license minimum · Dedicated Account Manager ·
                Cloud Sync integration · SSO · API access · Priority support
              </p>
              <Link
                href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection
        heading="Get a quote for Rapid Studio"
        subheading="Everything your team needs to create fast, branded, and compliant e-learning content."
      />
    </div>
  );
}
