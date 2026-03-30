import type { Metadata } from "next";
import Image from "next/image";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AgentCard from "@/components/ui/AgentCard";
import ContactSection from "@/components/sections/ContactSection";
import Link from "next/link";
import { ArrowRight, Award, Brain, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Customer Education",
  description:
    "Accelerate onboarding, drive product adoption, and reduce churn with AI-powered customer education programs.",
  openGraph: {
    title: "Customer Education",
    description: "AI-powered customer education that reduces churn and drives expansion.",
    url: "https://merahki.ai/customer-education",
    type: "website",
  },
};

const features = [
  {
    icon: Brain,
    title: "Ongoing Skills Development",
    bullets: [
      "Deliver AI-generated content based on usage patterns, support cases, or feedback.",
      "Keep customers ahead of your product roadmap with continuous, contextual learning.",
    ],
    image: "/images/customer-education/ongoing-skills.jpg",
    imageAlt: "Ongoing skills development dashboard",
    reverse: false,
  },
  {
    icon: Award,
    title: "Customer Certification",
    bullets: [
      "Build and update certification programs in weeks.",
      "Prove value to customers and increase stickiness.",
    ],
    image: "/images/customer-education/customer-certification.jpg",
    imageAlt: "Customer certification program builder",
    reverse: true,
  },
  {
    icon: Zap,
    title: "Feature Adoption Tracker",
    bullets: [
      "Automatically identify customers who need training on new releases.",
      "Trigger targeted content to boost adoption and reduce churn.",
    ],
    image: "/images/customer-education/feature-adoption.png",
    imageAlt: "Feature adoption tracker analytics",
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
      "Assign, update, and report on customer learning with natural-language requests. Capabilities expanding monthly through our modular intent framework.",
    image: "/images/agents/manager-agent.jpg",
  },
  {
    name: "Learner Agent",
    availability: "early-access" as const,
    description:
      "Provide customers with a persistent AI tutor that can answer questions, suggest next steps, and reinforce learning over time.",
    image: "/images/agents/learner-agent.jpg",
  },
];

const caseStudies = [
  {
    company: "Franky",
    metric: "3x–15x",
    desc: "growth in partner revenue using AI-personalized certification.",
    color: "from-accent-purple/20",
  },
  {
    company: "Bavaria",
    metric: "200+",
    desc: "learners onboarded in a new feature of Bavaria's logistic app in the first month using adaptive onboarding.",
    color: "from-accent-blue/20",
  },
];

export default function CustomerEducationPage() {
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
              Customer Education
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Grow customers{" "}
              <span className="text-gradient-peach-purple">faster</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              AI-powered onboarding, adoption, and expansion programs turn users
              into advocates.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
              >
                Book a Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Problem Narrative */}
      <section className="relative py-16 px-6">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <div className="narrative-card rounded-2xl p-10 space-y-4">
              <h2 className="text-2xl font-bold text-white">
                Smarter enablement for customer growth
              </h2>
              <p className="text-white/60 leading-relaxed">
                The best way to grow revenue is to grow customers. But
                onboarding, educating, and retaining them at scale is slow,
                manual, and often inconsistent — especially when products
                evolve quickly.
              </p>
              <p className="text-white/60 leading-relaxed">
                merahki.ai solves this. Our strategies deliver personalized,
                measurable learning experiences that shorten time-to-value,
                increase adoption, and unlock expansion opportunities —
                without adding to your team&apos;s workload.
              </p>
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
          {/* Section heading */}
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Platform capabilities
                <br />
                <span className="text-gradient-peach-purple">
                  for customer growth
                </span>
              </h2>
            </div>
          </AnimatedSection>

          {/* Feature rows */}
          <div className="space-y-28">
            {features.map((f) => (
              <AnimatedSection key={f.title} delay={0.1}>
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
                <span className="text-gradient-blue-pink">education</span>
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
                Proven{" "}
                <span className="text-gradient-peach-purple">at scale</span>
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
                  <p className="text-5xl font-bold text-gradient-peach-purple">
                    {cs.metric}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {cs.desc}
                  </p>
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
              An AI-native learning platform that{" "}
              <span className="text-gradient-peach-purple">
                combines creation, delivery, and analytics
              </span>
            </h2>
            <p className="text-white/50 mt-4 leading-relaxed">
              So every customer touchpoint drives growth.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection
        heading="Launch your customer education program"
        subheading="See how merahki.ai helps you onboard, engage, and retain customers at scale."
      />
    </div>
  );
}
