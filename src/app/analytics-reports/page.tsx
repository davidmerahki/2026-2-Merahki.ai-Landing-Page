import type { Metadata } from "next";
import Image from "next/image";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import Link from "next/link";
import { ArrowRight, BarChart3, BookOpen, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Analytics & Reports",
  description:
    "Your complete LMS dashboard. Track learner progress, course insights, and business performance with AI-powered analytics and automated reports.",
  openGraph: {
    title: "Analytics & Reports",
    description:
      "Comprehensive LMS reporting tools — automated reports, AI insights, radar charts, and 95+ filters for data-driven decisions.",
    url: "https://merahki.ai/analytics-reports",
    type: "website",
  },
};

const tldrCards = [
  {
    img: "/images/analytics%20and%20reports/Generate%20automated%20scheduled%20reports%20and%20export%20data%20exactly%20when%20you%20need%20it%20to%20simplify%20admin%20tasks.png",
    alt: "Generate automated scheduled reports",
    text: "Generate automated scheduled reports and export data exactly when you need it to simplify admin tasks.",
  },
  {
    img: "/images/analytics%20and%20reports/Use%20AI%20powered%20insights%20to%20answer%20questions%20about%20your%20business%20and%20user%20performance%20for%20data%20driven%20decisions.png",
    alt: "Use AI powered insights",
    text: "Use AI-powered insights to answer questions about your business and user performance for data-driven decisions.",
  },
  {
    img: "/images/analytics%20and%20reports/easily%20visualize%20complex%20learning%20data%20with%20radar%20charts%20%20dashboards%20%20and%20reports%20using%20ready%20made%20templates.png",
    alt: "Easily visualize complex learning data",
    text: "Easily visualize complex learning data with radar charts, dashboards, and reports using ready-made templates.",
  },
];

const coreFeatures = [
  {
    icon: BarChart3,
    title: "Measure user progress",
    body: "Track user progression, exam results, survey responses, and course participation history at the click of a button in your LMS dashboard.",
  },
  {
    icon: BookOpen,
    title: "Deep dive into course insights",
    body: "Quickly understand how learners navigate your courses, identify friction points, and turn valuable insights into improvements that enhance both your learning experience and business results.",
  },
  {
    icon: FileText,
    title: "Prepare automated reports",
    body: "Automate report distribution and keep your most important stakeholders up to date with reports automatically extracted and emailed using our LMS reporting tools.",
  },
];

const growItems = [
  {
    title: "Filter and export learner segments with 95+ different filters",
    body: "Apply simple or highly elaborate filters for users, courses, social interactions, and UTMs to your LMS reports before you export them and get all the information you need.",
  },
  {
    title: "Enable your team to create data-backed content",
    body: "Get learning insights for you and your team, check course completion rates, see which sessions get more replays, review progress data, exam scores, and time spent in learning. Connect these insights with performance to support course development.",
  },
  {
    title: "Leverage powerful data visualization for your partners",
    body: "Give partners, customers, instructors, and managers visually engaging metrics with LMS analytics.",
  },
];

export default function AnalyticsReportsPage() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      {/* Hero — text left / dashboard image right */}
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
                  Analytics &amp; Reports
                </span>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Your complete{" "}
                  <span className="text-gradient-blue-pink">LMS dashboard</span>
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="text-lg text-white/60 leading-relaxed">
                  Measure and report the impact of your training programs.
                  AI-powered insights, automated reports, and 95+ filters — all
                  in one dashboard built for data-driven decisions.
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
            {/* Hero image */}
            <AnimatedSection delay={0.2} className="flex-1 w-full">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[16/10]">
                <Image
                  src="/images/analytics%20and%20reports/your%20complete%20lms%20dashboard.png"
                  alt="Your complete LMS dashboard"
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

      {/* TL;DR Section */}
      <section className="relative py-20 px-6">
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="mb-3">
              <span className="text-2xl font-bold text-white">TL;DR</span>
            </div>
            <p className="text-white/60 mb-10 max-w-2xl">
              merahki.ai provides comprehensive LMS reporting and analytics
              tools that help you:
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tldrCards.map((card) => (
                <div
                  key={card.alt}
                  className="glass-card rounded-2xl overflow-hidden flex flex-col"
                >
                  {/* Card image */}
                  <div className="relative aspect-[4/3] w-full bg-white/5">
                    <Image
                      src={card.img}
                      alt={card.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  {/* Card text */}
                  <div className="p-6">
                    <p className="text-white/70 leading-relaxed text-sm">
                      {card.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="mt-8 text-white/50 text-sm">
              <span className="font-semibold text-white/70">Best for: </span>
              Training providers, online course creators, L&amp;D corporate
              training teams, educational institutions, and online coaches or
              creators seeking data-driven insights into learner behavior and
              course effectiveness.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Narrative */}
      <section className="relative py-10 px-6">
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="narrative-card rounded-2xl p-10 space-y-4 text-center">
              <h2 className="text-2xl font-bold text-white">
                Measure and report the impact of your training programs
              </h2>
              <p className="text-white/60 leading-relaxed">
                Without clear data, L&amp;D teams are flying blind — spending
                time on content that doesn&apos;t drive results and missing
                opportunities to improve learner outcomes. Stakeholders demand
                proof of ROI, and manual reporting takes hours.
              </p>
              <p className="text-white/60 leading-relaxed">
                merahki.ai&apos;s analytics dashboard gives you a complete
                picture of every learner, course, and interaction. Automate
                reports, surface AI-driven insights, and visualize performance
                data — all without leaving your platform.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core features — 3 column grid */}
      <section className="relative py-20 px-6">
        <GlowBackground
          indigoPosition={{ x: "20%", y: "50%" }}
          rustPosition={{ x: "80%", y: "50%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coreFeatures.map((f) => (
                <div key={f.title} className="glass-card rounded-2xl p-8 space-y-4">
                  <div className="w-11 h-11 rounded-xl bg-accent-purple/20 flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-accent-purple" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{f.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm">{f.body}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Grow your impact — title + image left / 3 text blocks right */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "70%", y: "40%" }}
          rustPosition={{ x: "30%", y: "60%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Grow your impact with{" "}
                <span className="text-gradient-blue-pink">
                  out-of-the-box LMS reporting tools
                </span>
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex flex-col gap-10 items-center md:flex-row">
              {/* Image left */}
              <div className="flex-1 w-full">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
                  <Image
                    src="/images/analytics%20and%20reports/filter%20and%20export%20learner%20segments%20with%2095%20different%20filters.png"
                    alt="Filter and export learner segments with 95+ different filters"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Text blocks right */}
              <div className="flex-1 space-y-8">
                {growItems.map((item) => (
                  <div key={item.title} className="space-y-2">
                    <div className="flex items-start gap-3">
                      <span className="text-accent-purple text-lg leading-none mt-0.5 flex-shrink-0">
                        ✦
                      </span>
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
              Data-driven insights you{" "}
              <span className="text-gradient-blue-pink">
                won&apos;t find anywhere else
              </span>
            </h2>
            <p className="text-white/50 mt-4 leading-relaxed">
              Automated reports, AI-powered answers, radar charts, and 95+
              filters — all built into your platform, no integrations required.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all"
            >
              Explore the Dashboard <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection
        heading="Make data your competitive advantage"
        subheading="Track every learner interaction, automate reports, and surface AI insights — all from one dashboard."
      />
    </div>
  );
}
