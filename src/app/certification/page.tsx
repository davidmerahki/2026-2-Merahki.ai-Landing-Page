import type { Metadata } from "next";
import Image from "next/image";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FeatureCard from "@/components/ui/FeatureCard";
import ContactSection from "@/components/sections/ContactSection";
import LogoCarousel from "@/components/sections/LogoCarousel";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BarChart3,
  Globe,
  Layers,
  Shield,
  Zap,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Certification & Assessment",
  description:
    "Build, deliver, and manage AI-powered certification programs for customers, partners, and employees. Fraud-resistant credentials at any scale.",
  openGraph: {
    title: "Certification & Assessment",
    description: "AI-powered certification programs that prove mastery and build trust.",
    url: "https://merahki.ai/certification",
    type: "website",
  },
};

const features = [
  {
    icon: Zap,
    title: "AI-Generated Assessments",
    desc: "Build quizzes, simulations, and branching scenarios in minutes from existing content. Adaptive difficulty keeps learners engaged.",
    color: "text-accent-peach",
    bg: "bg-accent-peach/10",
  },
  {
    icon: Award,
    title: "Certification Management",
    desc: "Issue branded digital certificates instantly. Set expiry, renewal criteria, and track status across your entire learner base.",
    color: "text-accent-purple",
    bg: "bg-accent-purple/10",
  },
  {
    icon: Shield,
    title: "Fraud-Resistant Credentials",
    desc: "Tamper-proof, verifiable credentials linked to learner identity and program completion data.",
    color: "text-accent-blue",
    bg: "bg-accent-blue/10",
  },
  {
    icon: Layers,
    title: "Multi-Level Programs",
    desc: "Build tiered certification paths — from foundation to expert — with prerequisite gating and role-based tracks.",
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
  {
    icon: Globe,
    title: "Global Delivery",
    desc: "Localize assessments into 50+ languages. Ensure every learner worldwide has an equal path to certification.",
    color: "text-accent-peach",
    bg: "bg-accent-peach/10",
  },
  {
    icon: BarChart3,
    title: "Certification Analytics",
    desc: "Track pass rates, completion velocity, and repeat attempts. Identify gaps before they become retention risks.",
    color: "text-accent-purple",
    bg: "bg-accent-purple/10",
  },
];

const useCases = [
  {
    title: "Customer Certification",
    desc: "Validate customer expertise with product certification programs that drive advocacy and reduce churn.",
    icon: "👤",
  },
  {
    title: "Partner Certification",
    desc: "Credential your partner network to build trust, increase sales readiness, and unlock tier benefits.",
    icon: "🤝",
  },
  {
    title: "Employee Certification",
    desc: "Maintain compliance, prove competency, and support career growth with structured internal certification.",
    icon: "🏢",
  },
  {
    title: "Industry Certification",
    desc: "Launch industry-standard credentials that position your organization as the authority in your field.",
    icon: "🌍",
  },
];

const standards = [
  {
    label: "OpenBadge 3.0",
    desc: "Global standard for verifiable credentials — compatible with leading educational and workforce platforms worldwide.",
  },
  {
    label: "European Learning Model (Europass)",
    desc: "Ensures recognition across EU member states and partner countries, with automatic Europass profile integration.",
  },
  {
    label: "GDPR Compliant",
    desc: "Strict compliance with the world's most stringent data protection regulations.",
  },
  {
    label: "LTI Integration",
    desc: "Seamless and secure integration with any LMS via Learning Tools Interoperability — no disruption to existing workflows.",
  },
  {
    label: "ISO 27001 & SOC 2",
    desc: "Enterprise-grade security certifications ensuring your institution's data stays fully protected.",
  },
  {
    label: "Blockchain Verified",
    desc: "Credentials registered on-chain as NFTs — tamper-proof, cryptographically unique, and independently verifiable anywhere.",
  },
];

const faqs = [
  {
    q: "What is a verifiable digital credential?",
    a: "A verifiable digital credential is a tamper-proof, cryptographically signed record of achievement. Each credential contains all relevant metadata — recipient name, issuance date, issuer identity, and achievement criteria — and can be independently verified by anyone, anywhere, without requiring the issuing platform to be active.",
  },
  {
    q: "What is the European Learning Model (ELM / Europass)?",
    a: "The European Learning Model is the official EU framework for digital credentials. merahki.ai issues ELM-compatible credentials, meaning they are recognized across EU member states, integrate automatically with Europass profiles, and support academic and professional mobility for learners worldwide.",
  },
  {
    q: "Are credentials blockchain-verified and tamper-proof?",
    a: "Yes. Credentials can be registered on-chain as NFTs — unique, non-reproducible tokens with a complete audit trail. They are cryptographically validated, independently verifiable, and permanently traceable, with no dependency on any single platform's uptime.",
  },
  {
    q: "How does merahki.ai integrate with existing platforms?",
    a: "merahki.ai supports LTI (Learning Tools Interoperability), open APIs, and native integrations with Moodle, Canvas, Blackboard, Google Classroom, Open edX, and Brightspace — plus CRMs like Salesforce and HubSpot. You can start issuing credentials in minutes without disrupting existing workflows.",
  },
];

const comparisonRows = [
  { feature: "AI-generated assessments", us: true, them: false },
  { feature: "Branded digital credentials", us: true, them: true },
  { feature: "Automatic renewal reminders", us: true, them: false },
  { feature: "Analytics linked to revenue", us: true, them: false },
  { feature: "Multi-tier certification paths", us: true, them: true },
  { feature: "50+ language support", us: true, them: false },
];

export default function CertificationPage() {
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-purple/30 bg-accent-purple/10 text-accent-purple text-xs font-medium tracking-widest uppercase">
              Certification & Assessment
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Credentials that{" "}
              <span className="text-gradient-peach-purple">prove mastery</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Build, deliver, and manage AI-powered certification programs for
              customers, partners, and employees — at any scale.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
              >
                Start Building <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white border border-white/20 hover:bg-white/5 transition-all text-sm"
              >
                See a Demo
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="text-white/30 text-xs">Powered by</span>
              <div className="relative h-5 w-20">
                <Image
                  src="/images/certifications%20at%20scale/Pok-tech%20(1).png"
                  alt="POK.tech"
                  fill
                  className="object-contain brightness-0 invert opacity-30"
                  sizes="80px"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <LogoCarousel />

      {/* Stats Bar */}
      <section className="py-12 px-6 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "1,100+", label: "Institutions worldwide" },
                { value: "19+", label: "Countries" },
                { value: "1.5M+", label: "Credentials issued" },
                { value: "1M+", label: "Credentials shared" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-3xl md:text-4xl font-bold text-gradient-peach-purple">
                    {stat.value}
                  </p>
                  <p className="text-white/50 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-20 px-6">
        <GlowBackground
          indigoPosition={{ x: "80%", y: "40%" }}
          rustPosition={{ x: "15%", y: "60%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Everything you need to run{" "}
                <span className="text-gradient-blue-pink">
                  world-class certification
                </span>
              </h2>
              <p className="text-white/50">
                From AI-powered assessment creation to fraud-resistant credential
                delivery.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.08}>
                <FeatureCard
                  icon={f.icon}
                  title={f.title}
                  description={f.desc}
                  iconClassName={f.color}
                  iconBg={f.bg}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="relative py-20 px-6">
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Built to the{" "}
                <span className="text-gradient-peach-purple">highest standards</span>
              </h2>
              <p className="text-white/50">
                Certified, compliant, and interoperable — globally.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {standards.map((std, i) => (
              <AnimatedSection key={std.label} delay={i * 0.07}>
                <div className="glass-card rounded-2xl p-5 space-y-2 h-full">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-accent-purple flex-shrink-0" />
                    <span className="text-white font-semibold text-sm">{std.label}</span>
                  </div>
                  <p className="text-white/50 text-xs leading-relaxed">{std.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative py-20 px-6">
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                One platform,{" "}
                <span className="text-gradient-peach-purple">every audience</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {useCases.map((uc, i) => (
              <AnimatedSection key={uc.title} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-6 flex gap-4 items-start h-full hover:border-white/15 transition-all">
                  <span className="text-3xl">{uc.icon}</span>
                  <div className="space-y-2">
                    <h3 className="text-white font-semibold">{uc.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{uc.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 px-6">
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Frequently asked{" "}
                <span className="text-gradient-blue-pink">questions</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={faq.q} delay={i * 0.08}>
                <details className="glass-card rounded-2xl group">
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-white font-semibold text-sm select-none">
                    {faq.q}
                    <ChevronDown className="w-4 h-4 text-white/40 flex-shrink-0 transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-5 text-white/55 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="relative py-20 px-6">
        <GlowBackground
          indigoPosition={{ x: "50%", y: "50%" }}
          rustPosition={{ x: "20%", y: "40%" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Why{" "}
                <span className="text-gradient-peach-purple">merahki.ai</span>
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <div className="grid grid-cols-3 bg-white/5 px-6 py-4 border-b border-white/10">
                <span className="text-white/40 text-sm font-medium">Feature</span>
                <span className="text-center text-accent-purple text-sm font-semibold">
                  merahki.ai
                </span>
                <span className="text-center text-white/30 text-sm font-medium">
                  Others
                </span>
              </div>
              {comparisonRows.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 px-6 py-4 items-center ${
                    i % 2 === 0 ? "bg-white/[0.02]" : ""
                  } border-b border-white/5 last:border-0`}
                >
                  <span className="text-white/60 text-sm">{row.feature}</span>
                  <div className="flex justify-center">
                    {row.us ? (
                      <CheckCircle2 className="w-5 h-5 text-accent-purple" />
                    ) : (
                      <span className="text-white/20 text-lg">—</span>
                    )}
                  </div>
                  <div className="flex justify-center">
                    {row.them ? (
                      <CheckCircle2 className="w-5 h-5 text-white/30" />
                    ) : (
                      <span className="text-white/20 text-lg">—</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* NFT Credentials Pricing */}
      <section className="relative py-20 px-6">
        <GlowBackground
          indigoPosition={{ x: "60%", y: "40%" }}
          rustPosition={{ x: "30%", y: "60%" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-8 space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold">
                NFT{" "}
                <span className="text-gradient-peach-purple">Credentials</span>
              </h2>
              <p className="text-white/60 font-medium">
                Special Prepayment Conditions *
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl overflow-hidden border border-white/10">
              {/* Table header */}
              <div className="grid grid-cols-3 bg-white/5 px-6 py-4 border-b border-white/10">
                <span className="text-white/50 text-sm font-medium">
                  Number of certificates
                </span>
                <span className="text-center text-white/50 text-sm font-medium">
                  Price per pack **
                </span>
                <span className="text-center text-white/50 text-sm font-medium">
                  Price per certificate **
                </span>
              </div>
              {/* Table rows */}
              {[
                { qty: "1,000",   pack: "$2,500",   unit: "$2.50" },
                { qty: "5,000",   pack: "$10,000",  unit: "$2.00" },
                { qty: "10,000",  pack: "$16,500",  unit: "$1.65" },
                { qty: "50,000",  pack: "$62,500",  unit: "$1.25" },
                { qty: "100,000", pack: "$100,000", unit: "$1.00" },
              ].map((row, i) => (
                <div
                  key={row.qty}
                  className={`grid grid-cols-3 px-6 py-4 items-center border-b border-white/5 last:border-0 ${
                    i % 2 === 0 ? "bg-white/[0.02]" : ""
                  }`}
                >
                  <span className="text-white/70 text-sm font-medium">
                    {row.qty}
                  </span>
                  <span className="text-center text-white font-semibold text-sm">
                    {row.pack}
                  </span>
                  <span className="text-center text-accent-purple font-bold text-sm">
                    {row.unit}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="mt-5 text-white/30 text-xs text-center leading-relaxed">
              * Prepayment conditions apply. Prices are fixed at the time of
              purchase and valid for the agreed certificate pack size.
              <br />
              ** All prices in USD. Bulk pricing applies per pack purchased.
              Minimum order 1,000 certificates.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Partner logo — POK.tech */}
      <section className="relative py-12 px-6">
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="text-center text-white/50 text-sm mb-6 font-medium">
              We are partners of the world&apos;s best credentials infrastructure
            </p>
            <div className="flex justify-center">
              <div className="bg-white rounded-2xl px-10 py-6 flex items-center justify-center shadow-xl">
                <div className="relative h-14 w-44">
                  <Image
                    src="/images/certifications%20at%20scale/Pok-tech%20(1).png"
                    alt="POK.tech — Credentials infrastructure partner"
                    fill
                    className="object-contain"
                    sizes="176px"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Premium */}
      <section className="relative py-16 px-6">
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-8 space-y-1">
              <h2 className="text-3xl md:text-4xl font-bold">
                Features{" "}
                <span className="text-gradient-peach-purple">Premium</span>
              </h2>
              <p className="text-accent-purple font-semibold">
                More Power, More Control, More Impact
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="glass-card rounded-2xl p-8 space-y-5">
              {[
                {
                  title: "Learning Path Analytics:",
                  body: "track how many users start, complete, and progress through each learning path.",
                },
                {
                  title: "Leads on Pages:",
                  body: "collect data from visitors on your certificate viewer pages through customizable lead forms.",
                },
                {
                  title: "AdPages Performance Metrics:",
                  body: "measure clicks and engagement within your credentials to optimize your campaigns.",
                },
                {
                  title: "Employability Insights:",
                  body: "see how many learners landed a job or got promoted after sharing their credentials on LinkedIn.",
                },
                {
                  title: "Advanced Email Customization:",
                  body: "personalize content, language, and layout using dynamic fields and AI-powered editing.",
                },
                {
                  title: "Custom Email Sender Domain:",
                  body: "send emails from your institution's domain instead of noreply@pok.tech to strengthen your brand.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="text-accent-purple mt-1 flex-shrink-0">●</span>
                  <p className="text-white/70 text-sm leading-relaxed">
                    <span className="font-bold text-white">{item.title}</span>{" "}
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="mt-6 text-center space-y-1">
              <p className="font-bold text-white text-base">
                Premium Features included with your{" "}
                <span className="text-gradient-peach-purple">
                  $1,000 credit purchase
                </span>
              </p>
              <p className="text-white/50 text-sm">
                Unlock all Premium tools for your institution — more reach,
                more impact, more control.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Advocacy — text left / image right */}
      <section className="relative py-20 px-6">
        <GlowBackground
          indigoPosition={{ x: "70%", y: "40%" }}
          rustPosition={{ x: "30%", y: "60%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-col gap-12 items-center md:flex-row">
              {/* Text left */}
              <div className="flex-1 space-y-6">
                <div className="w-11 h-11 rounded-xl bg-accent-purple/20 flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent-purple" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                  Every credential is transformed into a{" "}
                  <span className="text-gradient-peach-purple">
                    digital asset that drives greater defensibility and advocacy.
                  </span>
                </h2>
                <p className="text-white/60 leading-relaxed">
                  Move beyond static certificates. Build a verifiable ecosystem
                  where every achievement strengthens your market position and
                  turns users into your most powerful promoters.
                </p>
              </div>
              {/* Image right */}
              <div className="flex-1 w-full">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
                  <Image
                    src="/images/certifications%20at%20scale/Guido%20credential.png"
                    alt="Guido credential — digital asset advocacy"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 text-center">
        <GlowBackground
          indigoPosition={{ x: "40%", y: "50%" }}
          rustPosition={{ x: "60%", y: "50%" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <AnimatedSection>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-purple to-accent-blue mb-4 mx-auto">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to launch your{" "}
              <span className="text-gradient-peach-purple">
                certification program?
              </span>
            </h2>
            <p className="text-white/50 mt-4 leading-relaxed">
              Join organizations worldwide using merahki.ai to validate expertise
              and build trust.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white border border-white/20 hover:bg-white/5 transition-all"
              >
                Talk to Sales
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection
        heading="Launch your certification program"
        subheading="Join organizations worldwide using merahki.ai to validate expertise and build trust."
      />
    </div>
  );
}
