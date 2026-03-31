import type { Metadata } from "next";
import Image from "next/image";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import LogoCarousel from "@/components/sections/LogoCarousel";
import ContactSection from "@/components/sections/ContactSection";
import Link from "next/link";
import { ArrowRight, Play, BookOpen, TrendingUp, Award, Users, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "merahki.ai — Education-Led Growth Ecosystem",
  description:
    "Transform your education approach into a growth engine for lasting impact on customers, leads, and partners. AI-powered learning at scale.",
  openGraph: {
    title: "merahki.ai — Education-Led Growth Ecosystem",
    description: "AI-powered education that drives retention, adoption, and revenue at scale.",
    url: "https://merahki.ai",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center px-6 pt-24 pb-16">
        <GlowBackground
          indigoPosition={{ x: "25%", y: "40%" }}
          rustPosition={{ x: "75%", y: "55%" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

            {/* Left: Text */}
            <div className="flex-1 space-y-8">
              <AnimatedSection>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">
                  Education-Led Growth Ecosystem
                </span>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <h1 className="text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight">
                  Transform your education approach into a{" "}
                  <span className="text-gradient-peach-purple">growth engine</span>{" "}
                  for lasting impact
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p className="text-xl text-white/60 max-w-xl leading-relaxed">
                  On customers, leads, and partners. AI-powered learning
                  experiences that drive retention, adoption, and revenue — at
                  scale.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Link
                    href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
                  >
                    Book a Demo <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/education-led-growth"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white border border-white/20 hover:bg-white/5 transition-all text-sm"
                  >
                    Learn the Method
                  </Link>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="flex flex-wrap gap-8 text-sm text-white/40">
                  <span>+100 proven strategies</span>
                  <span className="text-white/20">·</span>
                  <span>8 industries served</span>
                  <span className="text-white/20">·</span>
                  <span>AI-native platform</span>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Image */}
            <AnimatedSection delay={0.2} className="flex-1 w-full">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl aspect-[16/10]">
                <Image
                  src="/images/feature-adoption-tracker.png"
                  alt="Feature Adoption Tracker"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ── VSL Section ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "50%", y: "50%" }}
          rustPosition={{ x: "80%", y: "30%" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-video">
              <iframe
                src="https://player.vimeo.com/video/1119888924?h=2c6a08f16e#t=149"
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="merahki.ai — Education-Led Growth Ecosystem"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-center text-white/40 text-sm mt-6">
              See how leading companies use merahki.ai to turn education into their #1 growth channel
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Logo Carousel ── */}
      <LogoCarousel />

      {/* ── Value Props ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "80%", y: "50%" }}
          rustPosition={{ x: "20%", y: "70%" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                One platform.{" "}
                <span className="text-gradient-blue-pink">Every growth lever.</span>
              </h2>
              <p className="text-white/50 text-lg max-w-xl mx-auto">
                From onboarding to advocacy — merahki.ai powers every stage of the customer and partner lifecycle.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Customer Education",
                desc: "Shorten time-to-value, increase adoption, and unlock expansion through personalized learning experiences.",
                href: "/customer-education",
                color: "text-accent-purple",
                bg: "bg-accent-purple/10",
              },
              {
                icon: Users,
                title: "Partner Academies",
                desc: "Enable a global partner ecosystem to sell faster with AI-personalized onboarding and certification.",
                href: "/partner-academies",
                color: "text-accent-blue",
                bg: "bg-accent-blue/10",
              },
              {
                icon: Rocket,
                title: "Product Adoption",
                desc: "Turn every new feature launch into a training campaign that drives engagement and reduces churn.",
                href: "/product-adoption",
                color: "text-accent-pink",
                bg: "bg-accent-pink/10",
              },
              {
                icon: Award,
                title: "Certification",
                desc: "Build fraud-resistant credential programs that prove mastery and create loyalty with customers and partners.",
                href: "/certification",
                color: "text-accent-peach",
                bg: "bg-accent-peach/10",
              },
              {
                icon: Play,
                title: "Flexible Courses",
                desc: "Build and deliver engaging courses at any scale — self-paced, blended, or live — tailored to every learner's journey.",
                href: "/flexible-courses",
                color: "text-accent-purple",
                bg: "bg-accent-purple/10",
              },
              {
                icon: TrendingUp,
                title: "Education-Led Growth",
                desc: "A proven methodology that turns your education programs into your #1 channel for acquisition and retention.",
                href: "/education-led-growth",
                color: "text-accent-blue",
                bg: "bg-accent-blue/10",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={(i % 3) * 0.1}>
                <Link href={item.href} className="block group h-full">
                  <div className="relative rounded-2xl p-7 border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all h-full flex flex-col">
                    <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center mb-5 flex-shrink-0`}>
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed flex-1">{item.desc}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-white/40 group-hover:text-white/70 transition-colors mt-5">
                      Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it Works ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "20%", y: "60%" }}
          rustPosition={{ x: "80%", y: "40%" }}
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block section-badge text-white/30 mb-4">The Method</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                How{" "}
                <span className="text-gradient-peach-purple">Education-Led Growth</span>{" "}
                works
              </h2>
              <p className="text-white/50 max-w-xl mx-auto">
                A repeatable 3-phase system that turns your education programs into your most scalable growth asset.
              </p>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-8 left-[calc(16.67%-1px)] right-[calc(16.67%-1px)] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Attract & Convert",
                  desc: "Use free learning content to attract high-intent buyers. Turn education into a top-of-funnel growth engine that generates qualified leads organically.",
                  color: "text-accent-peach",
                  border: "border-accent-peach/30",
                  bg: "bg-accent-peach/10",
                },
                {
                  step: "02",
                  title: "Onboard & Adopt",
                  desc: "Accelerate time-to-value with AI-personalized learning paths. Reduce churn by ensuring every customer and partner reaches their first success milestone faster.",
                  color: "text-accent-purple",
                  border: "border-accent-purple/30",
                  bg: "bg-accent-purple/10",
                },
                {
                  step: "03",
                  title: "Expand & Retain",
                  desc: "Continuously educate customers on advanced features and new use cases. Create certified power users who advocate for your product and expand their accounts.",
                  color: "text-accent-blue",
                  border: "border-accent-blue/30",
                  bg: "bg-accent-blue/10",
                },
              ].map((item, i) => (
                <AnimatedSection key={item.step} delay={i * 0.15}>
                  <div className="flex flex-col items-start gap-5">
                    <div className={`w-14 h-14 rounded-2xl ${item.bg} border ${item.border} flex items-center justify-center flex-shrink-0`}>
                      <span className={`font-bold text-lg ${item.color}`}>{item.step}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-12 text-center">
              <Link
                href="/education-led-growth"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
              >
                Explore the full methodology <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-20 px-6 border-y border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "100+", label: "Proven strategies" },
            { value: "8", label: "Industries served" },
            { value: "73K+", label: "Training hours saved" },
            { value: "15x", label: "Partner revenue growth" },
          ].map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div>
                <p className="text-4xl font-bold text-gradient-peach-purple mb-2">
                  {stat.value}
                </p>
                <p className="text-white/40 text-sm">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "60%", y: "50%" }}
          rustPosition={{ x: "30%", y: "50%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="inline-block section-badge text-white/30 mb-4">What People Say</span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Trusted by teams that{" "}
                <span className="text-gradient-blue-pink">grow through education</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "merahki.ai turned our customer onboarding from a cost center into a growth driver. Churn dropped 34% in the first quarter after launch.",
                name: "Sofia R.",
                role: "Head of Customer Success",
                company: "SaaS Company",
              },
              {
                quote: "We built and launched a full partner certification academy in under 3 weeks. Our certified partners now close deals 2x faster than uncertified ones.",
                name: "Carlos M.",
                role: "VP of Partner Programs",
                company: "Technology Distributor",
              },
              {
                quote: "The AI agents handle 80% of learner questions automatically. Our team focuses on strategy while the platform does the heavy lifting.",
                name: "Anika T.",
                role: "Director of L&D",
                company: "Enterprise Healthcare",
              },
            ].map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-7 h-full flex flex-col gap-5">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <span key={s} className="text-accent-peach text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-white font-medium text-sm">{t.name}</p>
                    <p className="text-white/40 text-xs mt-0.5">{t.role} · {t.company}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <ContactSection
        heading="Ready to turn education into your competitive edge?"
        subheading="Join leading organizations that use merahki.ai to educate, grow, and retain."
      />
    </div>
  );
}
