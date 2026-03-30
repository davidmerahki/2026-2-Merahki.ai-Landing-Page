import type { Metadata } from "next";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, BookOpen, Route } from "lucide-react";

export const metadata: Metadata = {
  title: "Flexible Courses",
  description:
    "Create personalized learning experiences that adapt to every student. AI-powered adaptive learning tools with drag-and-drop interface.",
  openGraph: {
    title: "Flexible Courses",
    description:
      "Build adaptive learning experiences with AI-powered tools. Personalized, interactive, and flexible course creation at any scale.",
    url: "https://merahki.ai/flexible-courses",
    type: "website",
  },
};

const features = [
  {
    icon: Sparkles,
    title: "Elevate your content with AI",
    bullets: [
      "Generate course outlines and text-based content from scratch, or revitalize existing content with the help of an AI assistant.",
      "Sync and reuse learning content across multiple courses, programs, and schools.",
    ],
    reverse: false,
    media: {
      type: "video" as const,
      src: "https://www.learnworlds.com/app/uploads/2026/01/Course_Planner_1100x1100.webm",
    },
  },
  {
    icon: BookOpen,
    title: "Create interactive courses",
    bullets: [
      "Leverage the richest library of learning activities: interactive ebooks and videos, course assessments, SCORM packages, live sessions, and more.",
      "Engage every type of learner with diverse, multimedia content formats in a single platform.",
    ],
    reverse: true,
    media: {
      type: "image" as const,
      src: "/images/flexible%20courses/create%20interactive%20courses.png",
      alt: "Create interactive courses",
    },
  },
  {
    icon: Route,
    title: "Build flexible learning pathways",
    bullets: [
      "Select whether your learners navigate your program freely, sequentially, or set your own prerequisites with a visual course builder.",
      "Customize completion rules for each course activity and flexibly manage learners' progress.",
    ],
    reverse: false,
    media: {
      type: "image" as const,
      src: "/images/flexible%20courses/Build%20flexible%20learning%20pathways.png",
      alt: "Build flexible learning pathways",
    },
  },
];

const stats = [
  { value: "800k", label: "Courses created" },
  { value: "$1B+", label: "Customer revenue generated" },
  { value: "2M", label: "Active learners per month" },
];

export default function FlexibleCoursesPage() {
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
              Flexible Courses
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Create personalized{" "}
              <span className="text-gradient-blue-pink">learning experiences</span>{" "}
              that adapt to every student
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              AI-powered adaptive learning tools with drag-and-drop interface.
              Create, sell, and deliver courses that adjust to each learner&apos;s
              needs faster than ever.
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
                Transform education with adaptive learning technology
              </h2>
              <p className="text-white/60 leading-relaxed">
                Traditional one-size-fits-all courses fail to engage modern
                learners. Without personalization, learners disengage, abandon
                courses, and never reach their full potential.
              </p>
              <p className="text-white/60 leading-relaxed">
                merahki.ai changes that. Our AI-powered platform delivers
                personalized, adaptive learning experiences that adjust to each
                learner&apos;s pace, style, and progress — maximizing completion
                rates and measurable outcomes.
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
                Everything you need to build
                <br />
                <span className="text-gradient-blue-pink">
                  flexible, adaptive courses
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
                    {f.media?.type === "video" ? (
                      <video
                        src={f.media.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full rounded-2xl border border-white/10 shadow-2xl"
                      />
                    ) : f.media?.type === "image" ? (
                      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[16/10]">
                        <Image
                          src={f.media.src}
                          alt={f.media.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ) : (
                      <div className="relative rounded-2xl border border-white/10 bg-white/5 shadow-2xl aspect-[16/10] flex items-center justify-center">
                        <div className="text-center space-y-2 pointer-events-none">
                          <f.icon className="w-10 h-10 text-white/15 mx-auto" />
                          <p className="text-white/20 text-xs tracking-widest uppercase">
                            Image coming soon
                          </p>
                        </div>
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
              The only platform built for{" "}
              <span className="text-gradient-blue-pink">
                truly adaptive, flexible learning
              </span>
            </h2>
            <p className="text-white/50 mt-4 leading-relaxed">
              AI-native course creation, personalized delivery, and advanced
              analytics — all in one place.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all"
            >
              Start Building <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection
        heading="Build your first flexible course"
        subheading="Create personalized, adaptive learning experiences that engage every learner — at any scale."
      />
    </div>
  );
}
