import type { Metadata } from "next";
import Image from "next/image";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import LogoCarousel from "@/components/sections/LogoCarousel";
import Link from "next/link";
import { ArrowRight, Smartphone, Layers, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile App Builder",
  description:
    "Build your own fully branded mobile elearning app — without a single line of code. Publish to iOS and Android in under a month.",
  openGraph: {
    title: "Mobile App Builder",
    description:
      "No-code mobile app builder for elearning. Launch a fully branded app to iOS and Android in weeks.",
    url: "https://merahki.ai/mobile-app-builder",
    type: "website",
  },
};

const features = [
  {
    icon: Smartphone,
    title: "We launch your own elearning app",
    bullets: [
      "Custom elearning mobile app development used to be costly, complicated, and time-consuming. Not anymore — we handle everything.",
      "Once you've submitted your app to us, it will take 2–4 weeks to go live. We take full responsibility for Google Play and App Store compliance.",
    ],
    reverse: false,
    media: {
      type: "video" as const,
      src: "https://www.learnworlds.com/app/uploads/2026/02/mobile-app-hero.webm",
    },
  },
  {
    icon: Layers,
    title: "We build your branded app",
    bullets: [
      "Use our visual editor to set up and test your branded app before spending a single cent. Only buy when you're ready for launch.",
      "Customize everything — from themes and widgets to push notifications — with no code required. Built to shine on any device.",
    ],
    reverse: true,
    media: {
      type: "image" as const,
      src: "/images/mobile%20app/build%20your%20branded%20app.png",
      alt: "Build your branded app",
    },
  },
  {
    icon: BarChart3,
    title: "Integrate your campaigns",
    bullets: [
      "Monitor marketing performance from first click to course completion with native Google Firebase and Facebook Business SDK integration.",
      "Track every interaction with your app — review active users, sessions, and other performance metrics to spotlight areas for optimization.",
    ],
    reverse: false,
    media: {
      type: "video" as const,
      src: "https://www.learnworlds.com/app/uploads/2026/02/mob-analytics-video.webm",
    },
  },
];

const stats = [
  { value: "311%", label: "More revenue for app users" },
  { value: "10×", label: "User growth with mobile" },
  { value: "2–4 wks", label: "From submission to live" },
];

export default function MobileAppBuilderPage() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 text-center">
        <GlowBackground
          indigoPosition={{ x: "30%", y: "40%" }}
          rustPosition={{ x: "70%", y: "60%" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <AnimatedSection immediate>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">
              Mobile App Builder
            </span>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Your own branded{" "}
              <span className="text-gradient-blue-pink">elearning app</span>
              {" "}— without a line of code
            </h1>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Build, preview, and launch a fully white-label mobile learning app
              to iOS and Android in under a month. Offline access, biometric
              login, in-app purchases, and push notifications — all included.
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

      {/* Stats Bar */}
      <section className="py-12 px-6 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-3 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-3xl md:text-4xl font-bold text-gradient-blue-pink">
                    {stat.value}
                  </p>
                  <p className="text-white/50 text-sm">{stat.label}</p>
                </div>
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
                We&apos;ve made custom elearning app development accessible to
                everyone
              </h2>
              <p className="text-white/60 leading-relaxed">
                Launching a branded mobile learning app used to require a
                development team, months of work, and a large budget. Endless
                back-and-forth with app stores, compliance headaches, and
                unpredictable timelines.
              </p>
              <p className="text-white/60 leading-relaxed">
                merahki.ai changes that. Our no-code Mobile App Builder lets you
                design, preview, and launch your fully branded app to iOS and
                Android — we handle the submission, compliance, and publication
                so you can focus on your learners.
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
                Everything you need to
                <br />
                <span className="text-gradient-blue-pink">
                  launch your mobile learning app
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

                  {/* Media side */}
                  <div className="flex-1 w-full">
                    {f.media.type === "video" ? (
                      <video
                        src={f.media.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full rounded-2xl border border-white/10 shadow-2xl"
                      />
                    ) : (
                      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[16/10]">
                        <Image
                          src={f.media.src}
                          alt={f.media.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    )}
                  </div>
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
              Smaller screen.{" "}
              <span className="text-gradient-blue-pink">Bigger revenue.</span>
            </h2>
            <p className="text-white/50 mt-4 leading-relaxed">
              No-code builder. Full brand customization. Published to iOS and
              Android. Offline access, push notifications, and in-app purchases
              — all in one platform.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Link
              href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all"
            >
              Launch Your App <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection
        heading="Launch your branded elearning app"
        subheading="No code required. Fully white-label. Live on iOS and Android in under a month."
      />
    </div>
  );
}
