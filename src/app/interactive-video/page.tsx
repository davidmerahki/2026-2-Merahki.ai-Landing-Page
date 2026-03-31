import type { Metadata } from "next";
import Image from "next/image";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import LogoCarousel from "@/components/sections/LogoCarousel";
import Link from "next/link";
import { ArrowRight, Play, Zap, FileText, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Interactive Video",
  description:
    "Turn passive watching into active learning. AI-powered interactive video with subtitles, quizzes, pop-ups, and detailed engagement analytics.",
  openGraph: {
    title: "Interactive Video",
    description:
      "Transform any video into an engaging, trackable learning experience with AI-powered interactivity and built-in analytics.",
    url: "https://merahki.ai/interactive-video",
    type: "website",
  },
};

const features = [
  {
    icon: Zap,
    title: "Make learning dynamic and responsive",
    bullets: [
      "Make learning more dynamic with AI-generated interactive questions and engagement checkpoints that keep learners motivated — turning training videos into active, measurable learning.",
      "Empower learners with AI-generated tables of contents, allowing them to explore and control their learning journey and find key moments instantly.",
    ],
    reverse: false,
    media: {
      type: "image" as const,
      src: "/images/interactive%20video/make%20learning%20dynamic%20and%20responsive.png",
      alt: "Make learning dynamic and responsive",
    },
  },
  {
    icon: FileText,
    title: "Generate subtitles and transcripts",
    bullets: [
      "Make your content accessible to everyone, including those with hearing impairments or language barriers. Automatically create accurate subtitles and transcripts with AI.",
      "Edit subtitles manually for precision, or use AI-powered translations to reach global audiences without extra post-production hours.",
    ],
    reverse: true,
    media: {
      type: "video" as const,
      src: "https://www.learnworlds.com/app/uploads/2026/02/ai-video-subtitles.webm",
    },
  },
  {
    icon: Layers,
    title: "Brilliant pop-ups",
    bullets: [
      "Use pre-made pop-ups for deeper explanations, insights, or guidance — right when learners need them, without interrupting the flow.",
      "Add interactive elements like CTA buttons, social reactions, and embedded content to create a richer, more connected learning experience.",
    ],
    reverse: false,
    media: {
      type: "video" as const,
      src: "https://www.learnworlds.com/app/uploads/2026/02/popup.webm",
    },
  },
];

const deliverItems = [
  {
    title: "A consistent video experience for all devices",
    body: "Deliver a smooth, fully responsive video experience across all devices and browsers — no interruptions, no limitations.",
  },
  {
    title: "Keep your videos safe and secure",
    body: "Host your videos hassle-free with educational video hosting built into our platform at no extra cost. Enjoy built-in security, fast streaming, and optional watermarks for content protection.",
  },
  {
    title: "Discover interesting reports for viewership",
    body: "Gain deeper insights into learner engagement with detailed reports on plays, rewatches, drop-offs, and interactions to optimize your content. Use data to improve your videos, fix drop-off points, and amplify what works.",
  },
];

const stats = [
  { value: "AI", label: "Subtitles, translations & summaries" },
  { value: "100%", label: "Mobile-ready & secure" },
  { value: "Deep", label: "Analytics on every interaction" },
];

export default function InteractiveVideoPage() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      {/* Hero — text left / video right */}
      <section className="relative pt-32 pb-20 px-6">
        <GlowBackground
          indigoPosition={{ x: "30%", y: "40%" }}
          rustPosition={{ x: "70%", y: "60%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col gap-12 items-center md:flex-row">
            {/* Text */}
            <div className="flex-1 space-y-6">
              <AnimatedSection>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">
                  Interactive Video
                </span>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Turn passive watching into{" "}
                  <span className="text-gradient-blue-pink">
                    active learning
                  </span>{" "}
                  with our video-based educational platform
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="text-lg text-white/60 leading-relaxed">
                  Boost your videos with AI-powered interactions. Instantly add
                  subtitles, quizzes, summaries, and structured navigation — all
                  in one place, without extra hours in post-production.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <Link
                  href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
                >
                  Book a Demo <ArrowRight className="w-4 h-4" />
                </Link>
              </AnimatedSection>
            </div>
            {/* Hero video */}
            <AnimatedSection delay={0.2} className="flex-1 w-full">
              <video
                src="https://www.learnworlds.com/app/uploads/2026/02/interactive-video-hero.webm"
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-2xl border border-white/10 shadow-2xl"
              />
            </AnimatedSection>
          </div>
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
                Make your videos interactive and capture your learners&apos;
                attention like never before
              </h2>
              <p className="text-white/60 leading-relaxed">
                Most training videos are passive — learners watch, zone out, and
                forget. Without engagement checkpoints, real-time feedback, or
                accessibility features, even the best content falls flat.
              </p>
              <p className="text-white/60 leading-relaxed">
                merahki.ai transforms any video into an interactive, trackable
                learning experience. AI-generated subtitles, quizzes,
                summaries, and pop-ups keep learners engaged — and detailed
                analytics tell you exactly what&apos;s working.
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
                AI-powered interactivity
                <br />
                <span className="text-gradient-blue-pink">
                  built into every video
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

      {/* Deliver section — video left + 3 text blocks right */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "20%", y: "60%" }}
          rustPosition={{ x: "80%", y: "40%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold leading-snug max-w-3xl mx-auto">
                Deliver a smarter, safer, smoother learning experience — on any
                device — with{" "}
                <span className="text-gradient-blue-pink">
                  merahki.ai&apos;s interactive video features
                </span>
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex flex-col gap-10 items-center md:flex-row">
              {/* Video left */}
              <div className="flex-1 w-full">
                <video
                  src="https://www.learnworlds.com/app/uploads/2026/02/interactive-video-section4.webm"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full rounded-2xl border border-white/10 shadow-2xl"
                />
              </div>

              {/* Text blocks right */}
              <div className="flex-1 space-y-8">
                {deliverItems.map((item) => (
                  <div key={item.title} className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Play className="w-4 h-4 text-accent-purple flex-shrink-0" />
                      <h4 className="text-lg font-semibold text-white">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-white/60 leading-relaxed pl-7">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
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
              Every video becomes a{" "}
              <span className="text-gradient-blue-pink">
                learning experience
              </span>
            </h2>
            <p className="text-white/50 mt-4 leading-relaxed">
              AI-generated subtitles, quizzes, summaries, and pop-ups — all
              built in, all trackable, no extra tools required.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Link
              href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all"
            >
              Try Interactive Video <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection
        heading="Make every video count"
        subheading="Transform passive video into interactive, measurable learning experiences — powered by AI."
      />
    </div>
  );
}
