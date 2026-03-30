import type { Metadata } from "next";
import Image from "next/image";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AgentCard from "@/components/ui/AgentCard";
import ContactSection from "@/components/sections/ContactSection";
import Link from "next/link";
import { ArrowRight, Users, BarChart3, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "Product Adoption & Onboarding",
  description:
    "Accelerate product mastery with AI-driven onboarding and adoption programs. Reduce churn, increase retention, and grow revenue.",
  openGraph: {
    title: "Product Adoption & Onboarding",
    description: "AI-driven onboarding and adoption programs that help customers realize value faster.",
    url: "https://merahki.ai/product-adoption",
    type: "website",
  },
};

const features = [
  {
    icon: Users,
    title: "Role-Specific Onboarding",
    bullets: [
      "Deliver tailored onboarding flows for each customer segment.",
      "Adjust content dynamically based on user progress and behavior.",
    ],
    image: "/images/product-adoption/role-specific-onboarding.jpg",
    imageAlt: "Role-specific onboarding dashboard",
    reverse: false,
  },
  {
    icon: BarChart3,
    title: "Impact Reporting",
    bullets: [
      "Tie onboarding and adoption programs to KPIs like time-to-value, retention, and expansion.",
      "Conversational analytics available via Labs — ask questions, get instant answers.",
    ],
    image: "/images/product-adoption/impact-reporting.jpg",
    imageAlt: "Impact reporting analytics dashboard",
    reverse: true,
  },
  {
    icon: Rocket,
    title: "Feature Adoption Triggers",
    bullets: [
      "Identify customers not engaging with new features automatically.",
      "Launch targeted campaigns to increase awareness and usage.",
    ],
    image: "",
    imageAlt: "",
    reverse: false,
  },
];

const agents = [
  {
    name: "Creator Agent",
    availability: "available" as const,
    description:
      "Turn release notes, product guides, and training videos into structured onboarding programs in minutes.",
    image: "/images/agents/creator-agent.jpg",
  },
  {
    name: "Manager Agent",
    availability: "early-access" as const,
    description:
      "Assign onboarding and adoption campaigns automatically to specific audiences based on usage triggers. Capabilities grow monthly.",
    image: "/images/agents/manager-agent.jpg",
  },
  {
    name: "Learner Agent",
    availability: "early-access" as const,
    description:
      "Acts as a context-aware tutor for your customers — reinforcing key workflows, answering feature questions, and recommending next steps.",
    image: "/images/agents/learner-agent.jpg",
  },
];

const caseStudies = [
  {
    company: "NovoNordisk",
    metric: "73,000+",
    desc: "training hours saved annually by automating education of doctors in obesity management.",
    color: "from-accent-blue/20",
  },
  {
    company: "Global Enterprises",
    metric: "↑ Adoption",
    desc: "Cut onboarding time and increased productivity with targeted AI-driven training across global teams.",
    color: "from-accent-purple/20",
  },
];

export default function ProductAdoptionPage() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 text-center">
        <GlowBackground
          indigoPosition={{ x: "25%", y: "40%" }}
          rustPosition={{ x: "75%", y: "55%" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">
              Product Adoption &amp; Onboarding
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Accelerate{" "}
              <span className="text-gradient-blue-pink">product mastery</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              AI-driven onboarding and adoption programs help customers realize
              value faster — and stay longer.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
            >
              Book a Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Problem Narrative */}
      <section className="relative py-16 px-6">
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="narrative-card rounded-2xl p-10 space-y-4 text-center">
              <h2 className="text-2xl font-bold text-white">
                From first login to full adoption
              </h2>
              <p className="text-white/60 leading-relaxed">
                Getting customers to sign up is one thing — getting them to use
                your product deeply and consistently is another. Without fast,
                personalized onboarding and ongoing adoption campaigns, churn
                risks rise and expansion opportunities shrink.
              </p>
              <p className="text-white/60 leading-relaxed">
                merahki.ai changes that. Our AI-enabled platform personalizes
                every onboarding step, targets adoption gaps, and measures the
                business impact — so every customer reaches their full potential
                faster.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "80%", y: "50%" }}
          rustPosition={{ x: "15%", y: "60%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Platform capabilities
                <br />
                <span className="text-gradient-blue-pink">
                  for product adoption
                </span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-28">
            {features.map((f) => (
              <AnimatedSection key={f.title} delay={0.1}>
                {f.image ? (
                  <div
                    className={`flex flex-col gap-10 items-center ${
                      f.reverse ? "md:flex-row-reverse" : "md:flex-row"
                    }`}
                  >
                    {/* Text side */}
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
                    {/* Image side */}
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
                ) : (
                  <div className="glass-card rounded-2xl p-10 flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-11 h-11 rounded-xl bg-accent-purple/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <f.icon className="w-5 h-5 text-accent-purple" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{f.title}</h3>
                      <ul className="space-y-3">
                        {f.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <span className="text-accent-purple text-lg leading-none mt-0.5">✦</span>
                            <span className="text-white/65 leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents */}
      <section className="relative py-20 px-6">
        <GlowBackground
          indigoPosition={{ x: "20%", y: "40%" }}
          rustPosition={{ x: "80%", y: "60%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="section-badge text-white/30 mb-4 inline-block">
                Powered by merahki.ai
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                AI agents for{" "}
                <span className="text-gradient-blue-pink">
                  product adoption
                </span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
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

      {/* Proven at Scale */}
      <section className="relative py-20 px-6">
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold">
                Proven <span className="text-gradient-peach-purple">at scale</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((cs, i) => (
              <AnimatedSection key={cs.company} delay={i * 0.15}>
                <div
                  className={`rounded-2xl p-8 border border-white/10 bg-gradient-to-br ${cs.color} to-transparent space-y-3`}
                >
                  <p className="section-badge text-white/40">{cs.company}</p>
                  <p className="text-5xl font-bold text-gradient-blue-pink">{cs.metric}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{cs.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Turn every product update into a{" "}
              <span className="text-gradient-blue-pink">growth moment</span>
            </h2>
            <p className="text-white/50 mt-4">
              Personalized, measurable adoption programs at every stage of the
              customer lifecycle.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all"
            >
              Start Driving Adoption <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection
        heading="Start driving product adoption"
        subheading="Turn every product update into a growth moment with personalized, measurable adoption programs."
      />
    </div>
  );
}
