import type { Metadata } from "next";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import Link from "next/link";
import { ArrowRight, Sparkles, ClipboardList, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Assistant",
  description:
    "Build higher-quality learning experiences faster. Generate course outlines, assessments, and insights in minutes with merahki.ai's AI Assistant.",
  openGraph: {
    title: "AI Assistant",
    description:
      "AI-powered course creation, assessment design, and real-time insights — all in one platform.",
    url: "https://merahki.ai/ai-assistant",
    type: "website",
  },
};

const features = [
  {
    icon: Sparkles,
    title: "Course Planner",
    bullets: [
      "Provide a topic, pick your learning model and activities, and let the AI generate a structured course outline in seconds — complete with modules, lessons, and suggested activities.",
      "Rewrite, enhance, and improve existing lessons, pages, and content so you spend less time updating from scratch.",
    ],
    reverse: false,
    videoSrc: "https://www.learnworlds.com/app/uploads/2026/03/ai-course-planner-1.webm",
  },
  {
    icon: ClipboardList,
    title: "Assessment Designer",
    bullets: [
      "Import your existing learning content and turn it into quizzes, exams, or certification assessments automatically.",
      "Accelerate your evaluation process with AI-generated assessments by choosing the topic, type, and number of question formats.",
    ],
    reverse: true,
    videoSrc: "https://www.learnworlds.com/app/uploads/2026/03/ai-assessment.webm",
  },
  {
    icon: BarChart3,
    title: "AI Insights",
    bullets: [
      "Ask anything — from sales performance to learner progress — and get instant answers, charts, and actionable takeaways.",
      "Our AI pulls from all your data sources and remembers context across your conversation, so follow-ups are effortless.",
    ],
    reverse: false,
    videoSrc: "https://www.learnworlds.com/app/uploads/2026/03/ai-insights.webm",
  },
];

const stats = [
  { value: "Minutes", label: "To generate a full course outline" },
  { value: "10×", label: "Faster content creation" },
  { value: "100%", label: "Your content, your copyright" },
];

export default function AIAssistantPage() {
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
              AI Assistant
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Build higher-quality{" "}
              <span className="text-gradient-blue-pink">
                learning experiences
              </span>{" "}
              with AI
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Generate complete course outlines, assessments, and ebooks in
              minutes. You provide the expertise — AI empowers the outcome.
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
                The full impact of AI-powered course creation
              </h2>
              <p className="text-white/60 leading-relaxed">
                Creating high-quality learning content is time-consuming,
                inconsistent, and hard to scale. From writing outlines to
                designing assessments and crafting emails — the workload slows
                down even the best L&amp;D teams.
              </p>
              <p className="text-white/60 leading-relaxed">
                merahki.ai&apos;s AI Assistant changes that. Generate structured
                courses, smart assessments, and real-time insights in minutes —
                so your team focuses on expertise, not production.
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
                AI that works across
                <br />
                <span className="text-gradient-blue-pink">
                  every part of your platform
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

                  {/* Video */}
                  <div className="flex-1 w-full">
                    <video
                      src={f.videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full rounded-2xl border border-white/10 shadow-2xl"
                    />
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
              AI-powered course creation —{" "}
              <span className="text-gradient-blue-pink">
                plus everything you need to deliver it
              </span>
            </h2>
            <p className="text-white/50 mt-4 leading-relaxed">
              From content generation to assessment design, learner insights,
              and automated communications — all in one AI-native platform.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all"
            >
              Try the AI Assistant <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection
        heading="Supercharge your content creation with AI"
        subheading="Generate course outlines, assessments, and insights in minutes — not weeks."
      />
    </div>
  );
}
