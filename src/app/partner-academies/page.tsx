import type { Metadata } from "next";
import Image from "next/image";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AgentCard from "@/components/ui/AgentCard";
import ContactSection from "@/components/sections/ContactSection";
import PartnerProposal from "@/components/sections/PartnerProposal";
import LogoCarousel from "@/components/sections/LogoCarousel";
import Link from "next/link";
import { ArrowRight, Zap, TrendingUp, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Partner Academies",
  description:
    "Partner Academy Acceleration is the fastest path to compounding indirect revenue. merahki.ai builds White-Label LMS Partner Academies with AI-powered certification programs, Global Partner Enablement workflows, and Blockchain-Verified Credentials — including 1EdTech Standards, Open Badges 3.0, and W3C Verifiable Credentials. Our Partner Certification ROI framework links training completion directly to time-to-first-sale reduction, partner revenue growth, and channel sales enablement at scale. ISO 27001 and SOC 2 compliant infrastructure.",
  keywords: [
    "Partner Academy Acceleration",
    "partner certification ROI",
    "channel sales enablement",
    "Global Partner Enablement",
    "White-Label LMS for Enterprises",
    "scaling indirect sales",
    "rapid partner onboarding",
    "time-to-first-sale acceleration",
    "partner training programs",
    "how to increase partner revenue",
    "best platforms for partner certification",
    "white-label partner academies",
    "NFT Certifications",
    "Fraud-Resistant Credentials",
    "1EdTech Standards",
    "Open Badges 3.0",
    "W3C Verifiable Credentials",
    "Blockchain-Verified Professional Mastery",
    "POK Infrastructure",
    "ISO 27001 SOC 2 Compliance",
    "Revenue Expansion Programs",
    "Workforce Readiness",
  ],
  openGraph: {
    title: "Partner Academies — Certify & Scale Your Channel | merahki.ai",
    description:
      "How do you increase partner revenue? Build a Partner Academy. merahki.ai delivers Partner Academy Acceleration with AI-powered certification, Blockchain-Verified Credentials (1EdTech, Open Badges 3.0, W3C VC), and Global Partner Enablement — cutting time-to-first-sale and compounding indirect revenue.",
    url: "https://merahki.ai/partner-academies",
    type: "website",
  },
};

const features = [
  {
    icon: Zap,
    title: "Rapid Onboarding",
    bullets: [
      "Deliver tailored learning journeys by partner tier, role, or region.",
      "Cut time-to-first-sale with dynamic onboarding sequences.",
    ],
    image: "/images/partner-education/rapid-onboarding.jpg",
    imageAlt: "Rapid partner onboarding dashboard",
    reverse: false,
  },
  {
    icon: TrendingUp,
    title: "Performance Insights",
    bullets: [
      "Tie partner training to pipeline contribution and revenue impact.",
      "Access key reports instantly, with conversational analytics launching in Labs.",
    ],
    image: "/images/partner-education/performance-insights.jpg",
    imageAlt: "Partner performance insights analytics",
    reverse: true,
  },
  {
    icon: Award,
    title: "Scalable Certification",
    bullets: [
      "Create, launch, and maintain certification programs with no manual rework.",
      "Enhance partner credibility and build customer trust at every tier.",
    ],
    image: "/images/partner-education/scalable-certification.png",
    imageAlt: "Scalable partner certification program",
    reverse: false,
  },
];

const agents = [
  {
    name: "Creator Agent",
    availability: "available" as const,
    description:
      "Transform sales decks, demo scripts, and launch briefs into structured partner learning paths.",
    image: "/images/agents/creator-agent.jpg",
  },
  {
    name: "Manager Agent",
    availability: "early-access" as const,
    description:
      "Assign onboarding or certification to specific partner groups with a single natural-language request. Capabilities grow each month via our modular intent framework.",
    image: "/images/agents/manager-agent.jpg",
  },
  {
    name: "Learner Agent",
    availability: "early-access" as const,
    description:
      "Acts as a role-aware AI tutor for partners — answering questions, recommending refreshers, and surfacing new content as products evolve.",
    image: "/images/agents/learner-agent.jpg",
  },
];

const caseStudies = [
  {
    company: "Gusto",
    metric: "3x–15x",
    desc: "growth in partner revenue using AI-personalized certification.",
    color: "from-accent-peach/20",
  },
  {
    company: "Meta",
    metric: "Millions",
    desc: "reached worldwide through scaled partner enablement.",
    color: "from-accent-blue/20",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you increase partner revenue with a Partner Academy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Partner Academy Acceleration works by replacing manual partner enablement with a scalable, AI-powered certification ecosystem. merahki.ai builds white-label Partner Academies that deliver role-specific learning journeys by partner tier, region, and function — cutting time-to-first-sale and ensuring every partner can confidently pitch and close. Organizations using merahki.ai's Partner Academy model report 3x–15x growth in indirect revenue within the first six months, driven by faster ramp time, higher certification completion, and stronger product knowledge at the point of sale.",
      },
    },
    {
      "@type": "Question",
      name: "What is Partner Certification ROI and how is it measured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Partner Certification ROI is the measurable business impact of linking certification completion to pipeline contribution and closed revenue. merahki.ai's Academy ROI Tracking framework connects learning data to CRM outcomes — tracking time-to-first-sale, average deal size by certification tier, and partner churn reduction. Using Kirkpatrick Level 4 methodology, we prove that certified partners generate 150% more revenue than uncertified equivalents, making partner training a direct revenue investment rather than an operational cost.",
      },
    },
    {
      "@type": "Question",
      name: "How do you accelerate time-to-first-sale for channel partners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Accelerating time-to-first-sale for channel partners requires replacing generic onboarding with dynamic, role-specific learning paths that deliver product knowledge, competitive positioning, and sales methodology in the first week. merahki.ai's Rapid Partner Onboarding system uses Adaptive Onboarding Sequences tailored to each partner's tier (Gold, Silver, Regional) and role (Sales, Technical, Support), combined with the Merahki AI Learner Agent — a Context-Aware AI Tutor that answers partner questions in real-time during sales conversations.",
      },
    },
    {
      "@type": "Question",
      name: "What are Blockchain-Verified Credentials and why do partner programs need them?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Blockchain-Verified Credentials are tamper-proof digital certificates anchored to a distributed ledger, making them impossible to forge and instantly verifiable by any third party. merahki.ai issues partner certifications using 1EdTech Standards, Open Badges 3.0, W3C Verifiable Credentials (VC), and Europass Digital Credentials — with infrastructure powered by POK, a global credentialing partner. For channel programs, Fraud-Resistant Credentials ensure only genuinely certified partners can represent your brand, protecting partner tier integrity and customer trust.",
      },
    },
  ],
};

export default function PartnerAcademiesPage() {
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
              Partner Training Programs
            </span>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Activate{" "}
              <span className="text-gradient-peach-purple">partners</span> fast
            </h1>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              AI-enabled enablement programs help partners sell more, sooner —
              with less effort from your team.
            </p>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.3}>
            <Link
              href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
            >
              Book a Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <LogoCarousel />

      {/* Problem Narrative */}
      <section className="relative py-16 px-6">
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="narrative-card rounded-2xl p-10 space-y-4 text-center">
              <h2 className="text-2xl font-bold text-white">
                Equip partners to perform from day one
              </h2>
              <p className="text-white/60 leading-relaxed">
                Partner revenue depends on how quickly they can learn your
                products, pitch your value, and deliver results. But enabling a
                global partner ecosystem is time-consuming, hard to personalize,
                and difficult to measure.
              </p>
              <p className="text-white/60 leading-relaxed">
                merahki.ai changes that. Our AI-driven platform automates
                partner onboarding, accelerates certification, and personalizes
                enablement — freeing your team to focus on strategy while
                partners ramp faster.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "80%", y: "50%" }}
          rustPosition={{ x: "20%", y: "40%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Platform capabilities
                <br />
                <span className="text-gradient-peach-purple">
                  for partner acceleration
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
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents */}
      <section className="relative py-20 px-6">
        <GlowBackground
          indigoPosition={{ x: "30%", y: "60%" }}
          rustPosition={{ x: "70%", y: "30%" }}
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
                  partner enablement
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
          rustPosition={{ x: "70%", y: "40%" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <AnimatedSection>
            <span className="section-badge text-white/30 mb-2 inline-block">
              Only with merahki.ai
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              The only platform purpose-built for{" "}
              <span className="text-gradient-peach-purple">
                partner acceleration at scale
              </span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Link
              href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all"
            >
              Activate Your Partners <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <PartnerProposal />

      <ContactSection
        heading="Build your partner academy"
        subheading="Enable, certify, and scale your partner ecosystem with AI-powered learning."
      />
    </div>
  );
}
