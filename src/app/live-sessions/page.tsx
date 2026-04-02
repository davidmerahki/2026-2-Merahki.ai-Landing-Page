import type { Metadata } from "next";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import LogoCarousel from "@/components/sections/LogoCarousel";
import Link from "next/link";
import {
  ArrowRight,
  Video,
  Users,
  Calendar,
  Smartphone,
  BarChart2,
  Play,
  Mic,
  Share2,
  Monitor,
  BookOpen,
  Clock,
  Award,
  TrendingUp,
  Radio,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Live Sessions",
  description:
    "Connect with your learners using merahki.ai's virtual classroom LMS for live sessions and build powerful shared learning experiences with Zoom, Webex, Microsoft Teams, and Calendly.",
  openGraph: {
    title: "Live Sessions — merahki.ai",
    description:
      "Virtual classroom LMS for live sessions. One-on-one and group sessions powered by Zoom, Webex, Teams & Calendly.",
    url: "https://merahki.ai/live-sessions",
    type: "website",
  },
};

const stats = [
  { value: "73,000+", label: "Training hours saved" },
  { value: "+34%", label: "Feature adoption increase" },
  { value: "−42%", label: "Early churn reduction" },
];

const liveBenefits = [
  {
    icon: Play,
    title: "Turn courses into valuable live experiences",
    desc: "Bring people together in active learning experiences that spark curiosity, enable immediate feedback, and inspire participants to build new skills.",
  },
  {
    icon: Users,
    title: "Personalize learning",
    desc: "Craft memorable personal experiences with 1:1 and group sessions. Talk to your learners, showcase your expertise, build trust & confidence, and increase customer retention.",
  },
  {
    icon: Mic,
    title: "Upskill with peer learning",
    desc: "Empower participants to learn from peers and experts by raising hands, participating in breakout rooms, and asking questions in Q&A.",
  },
  {
    icon: Radio,
    title: "Instructors' personality matters",
    desc: "Bring virtual learning to life, take center stage, and add your personal tone of voice in a connected live experience.",
  },
  {
    icon: BookOpen,
    title: "Ice-break the anonymous self-paced learning",
    desc: "Vivify your academy with experiences that break the monotony of online learning. Leverage exclusivity and mass connectivity with one-on-one meetings and live events.",
  },
  {
    icon: Smartphone,
    title: "Go live, go mobile",
    desc: "Connect and engage with your learners regardless of their location, with your iOS and Android mobile app.",
  },
  {
    icon: Share2,
    title: "Cultivate a thriving learning community",
    desc: "Foster connection, collaboration, and engagement. Learners interact through live sessions and shared activities, building stronger motivation and better outcomes.",
  },
  {
    icon: Clock,
    title: "Drive group progression through shared milestones",
    desc: "Move learners forward together with structured timelines and scheduled live sessions. Shared goals keep everyone aligned and accountable.",
  },
  {
    icon: BarChart2,
    title: "Boost accountability and see real results",
    desc: "Real-time interaction, attendance tracking, and live feedback drive learner engagement and ensure measurable progress.",
  },
];

const featureRows = [
  {
    icon: Users,
    title: "Build rich training programs with our virtual classroom",
    bullets: [
      "Run a 7-day workshop, a VIP or exclusive training, group sessions, or one-on-one sessions; for coaching, customer education, fitness, or employee training — it's all possible.",
      "Choose from a full library of formats and adapt sessions to fit your learners' goals and timelines.",
    ],
    reverse: false,
  },
  {
    icon: Video,
    title: "Live recorded once, hosted forever",
    bullets: [
      "Combine the intimacy of live interaction with the evergreen convenience of recorded content.",
      "Extend your reach and make your sessions available even when you're not presenting live.",
    ],
    reverse: true,
  },
  {
    icon: Monitor,
    title: "Stick with the stack of tools you already have",
    bullets: [
      "Unlimited one-to-one and group video networking sessions to foster connections between your learners.",
      "Native integrations with Zoom, Webex, Microsoft Teams, and Calendly — no switching tools required.",
    ],
    reverse: false,
  },
];

const integrationFeatures = [
  {
    icon: Calendar,
    title: "Set up the event and let merahki.ai handle the rest",
    desc: "Simply add your meetings as learning activities in a course, and only enrolled learners will have access to attend or register.",
  },
  {
    icon: Users,
    title: "Multiple instructors, multiple live sessions",
    desc: "Run multiple live sessions at the same time by giving instructors the power to plan their sessions through Zoom, Google Meet, Microsoft Teams, and Webex.",
  },
  {
    icon: BarChart2,
    title: "Track attendance and export events reports",
    desc: "Automatically extract attendance from Zoom and Microsoft Teams and access useful performance reports. You can also manually manage attendance.",
  },
];

const calendlyFeatures = [
  {
    title: "One-to-one sessions",
    desc: "Give every learner the VIP treatment. Connect Calendly to merahki.ai, set your availability once, and let clients book the perfect time — right inside the course player. Ideal for deep-dive coaching, personal goal-setting, and tailored consultations without the back-and-forth.",
    highlight: true,
  },
  {
    title: "Group sessions",
    desc: "Turn live lessons into focused, high-energy workshops. Limit seats, create topic-based rooms, and let learners choose the session that fits their path — virtual classroom features boost attendance and group dynamics beyond a basic webinar.",
    highlight: false,
  },
];

const engagementTools = [
  "Screen sharing",
  "Polls",
  "Segment chat",
  "Breakout rooms",
  "Q&A",
  "Raise hand",
  "Session recording",
  "Virtual whiteboard",
  "Reactions",
];

const efficiencyBenefits = [
  {
    icon: Clock,
    title: "Save time and money",
    desc: "Avoid the cost of producing professional training videos by running live online training sessions with one of the best virtual classroom platforms in the market.",
  },
  {
    icon: Award,
    title: "Be paid for VIP experiences",
    desc: "Offer genuine one-to-one training and provide each trainee with the proper attention and the ideal time they need.",
  },
  {
    icon: TrendingUp,
    title: "Increase your customer retention",
    desc: "Together, everyone achieves more. Successful human connections encourage more learning and promote retention.",
  },
];

const faqs = [
  {
    question: "What is the best virtual classroom software?",
    answer:
      "The best virtual classroom software reliably delivers live, interactive training while staying easy to run for instructors and easy to join for learners — stable video and audio, interactive tools (chat, polls, Q&A, whiteboard, breakout rooms), session recording, attendance tracking, and smooth scheduling. merahki.ai combines a strong live classroom experience with the ability to organize training into structured programs, track completion, and keep everything branded and centralized.",
  },
  {
    question: "What is a cohort-based course platform, and how does it support group progression?",
    answer:
      "A cohort-based course platform brings groups of learners together to move through a curriculum as a community rather than individually. This shared progression framework maintains motivation, increases accountability through group milestones, and encourages interaction among participants — transforming solo study into a social experience with higher completion rates.",
  },
  {
    question: "How can I interact with students using the merahki.ai LMS virtual classroom?",
    answer:
      "With merahki.ai's LMS virtual classroom, you can host live video lessons, facilitate real-time discussions, and engage learners using interactive tools like screen sharing, polls, breakout rooms, and group chat. These features recreate the dynamic of a physical classroom — enabling instructors to ask questions, respond to student input, and drive engagement throughout a session.",
  },
  {
    question: "How does the platform for cohort-based courses ensure security for corporate training?",
    answer:
      "merahki.ai is built with enterprise security and compliance in mind. This includes encrypted data storage, secure password handling, enforced HTTPS, GDPR compliance, Single Sign-On (SSO), dedicated cloud infrastructure, and role-based access controls — ensuring sensitive training content and learner data remain protected at all times.",
  },
  {
    question: "Can multiple instructors run concurrent live sessions under one school?",
    answer:
      "Yes. merahki.ai allows multiple instructors to run live sessions simultaneously under the same school account. Each instructor can schedule their own cohort meetings, workshops, or coaching calls using Zoom, Microsoft Teams, or Webex — enabling a flexible and scalable live learning ecosystem.",
  },
  {
    question: "Is the live session experience optimized for mobile-first employees?",
    answer:
      "Absolutely. merahki.ai supports fully responsive live learning experiences that work on mobile devices, including branded iOS and Android apps. Whether learners are in the field, commuting, or working remotely, they can join live sessions, participate in discussions, or access session recordings directly from their smartphones or tablets.",
  },
  {
    question: "How many participants can join a live group session at once?",
    answer:
      "merahki.ai integrates with scalable video platforms like Zoom and Microsoft Teams, which can flexibly accommodate whatever audience size you need — from small workshops to large interactive webinars. These integrations also allow you to manage attendance, host breakout discussions, and capture participation analytics efficiently.",
  },
  {
    question: "Can I automate the transition of a live session into an on-demand course activity?",
    answer:
      "Yes. With merahki.ai's virtual classroom, you can easily convert recorded live sessions into on-demand learning activities. Once a session ends, the recording can be attached to your course — allowing learners who missed the live event to watch it later as part of their learning path.",
  },
  {
    question: "Does merahki.ai include built-in interactive tools like polls and whiteboards?",
    answer:
      "merahki.ai integrates with popular video conferencing tools such as Zoom, Google Meet, Webex, or Microsoft Teams — many of which include polls, chat, whiteboards, and Q&A. The platform complements these live sessions by letting you structure them inside your course experience so you can manage access, share materials, add follow-up activities, and track learner progress.",
  },
  {
    question: "Is the merahki.ai virtual classroom environment white-labeled?",
    answer:
      "Yes. The virtual classroom capabilities in merahki.ai can be fully white-labeled. You can customize colors, logos, domains, and course player visuals so that learners feel fully immersed in your branded academy experience. For enterprises and professional training providers, this branding flexibility extends to feature controls as well.",
  },
];

export default function LiveSessionsPage() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 px-6 text-center">
        <GlowBackground
          indigoPosition={{ x: "30%", y: "40%" }}
          rustPosition={{ x: "70%", y: "60%" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <AnimatedSection immediate>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">
              Merahki.ai virtual classroom ecosystem
            </span>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Harness the power of{" "}
              <span className="text-gradient-blue-pink">human connection</span>{" "}
              with live meetings
            </h1>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Use our virtual classroom LMS to talk with your learners effectively and create meaningful one-on-one and group connections. Leverage the power of Zoom, Webex, Microsoft Teams, and Calendly to empower shared learning experiences and real-time conversations.
            </p>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.3}>
            <Link
              href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
            >
              Book a Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <LogoCarousel />

      {/* ── Stats Bar ── */}
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

      {/* ── Narrative ── */}
      <section className="relative py-16 px-6">
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="narrative-card rounded-2xl p-10 space-y-4 text-center">
              <h2 className="text-2xl font-bold text-white">
                Break the isolation of self-paced learning
              </h2>
              <p className="text-white/60 leading-relaxed">
                Self-paced courses are powerful — but they leave learners disconnected, anonymous, and disengaged. Without real human interaction, motivation drops and completion rates suffer.
              </p>
              <p className="text-white/60 leading-relaxed">
                merahki.ai&apos;s virtual classroom LMS brings the human element back. Connect learners with instructors and peers through live sessions, coaching calls, and group workshops — all seamlessly embedded in your academy&apos;s learning paths.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Live Benefits Grid ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "20%", y: "50%" }}
          rustPosition={{ x: "80%", y: "30%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Live sessions, vivid{" "}
                <span className="text-gradient-blue-pink">learning experiences</span>
              </h2>
              <p className="text-white/50 mt-4 max-w-2xl mx-auto">
                A powerful LMS with virtual classroom capabilities — designed for real connection at every scale.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveBenefits.map((benefit, i) => (
              <AnimatedSection key={benefit.title} delay={i * 0.05}>
                <div className="glass-card rounded-2xl p-6 space-y-4 h-full">
                  <div className="w-10 h-10 rounded-xl bg-accent-purple/20 flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-accent-purple" />
                  </div>
                  <h3 className="text-white font-semibold leading-snug">{benefit.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Alternating Feature Rows ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "80%", y: "40%" }}
          rustPosition={{ x: "20%", y: "60%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Add live events, one-on-one,
                <br />
                <span className="text-gradient-blue-pink">
                  and group sessions in your courses
                </span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="space-y-28">
            {featureRows.map((f) => (
              <AnimatedSection key={f.title} delay={0.1}>
                <div
                  className={`flex flex-col gap-10 items-center ${
                    f.reverse ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  <div className="flex-1 space-y-6">
                    <div className="w-11 h-11 rounded-xl bg-accent-purple/20 flex items-center justify-center">
                      <f.icon className="w-5 h-5 text-accent-purple" />
                    </div>
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
                  <div className="flex-1 w-full">
                    <div className="relative rounded-2xl border border-white/10 bg-white/5 shadow-2xl aspect-[16/10] flex items-center justify-center">
                      <div className="text-center space-y-2 pointer-events-none">
                        <f.icon className="w-10 h-10 text-white/15 mx-auto" />
                        <p className="text-white/20 text-xs tracking-widest uppercase">
                          Image coming soon
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Webinar Integration Cards ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "50%", y: "50%" }}
          rustPosition={{ x: "80%", y: "20%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                An LMS with virtual classroom and webinar integration
                <br />
                <span className="text-gradient-blue-pink">
                  makes your life easier and livelier
                </span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {integrationFeatures.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-8 space-y-4 h-full">
                  <div className="w-11 h-11 rounded-xl bg-accent-blue/20 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-accent-blue" />
                  </div>
                  <h3 className="text-white font-semibold leading-snug">{feature.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Calendly Section ── */}
      <section className="relative py-24 px-6">
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Schedule coaching sessions{" "}
                <span className="text-gradient-blue-pink">with Calendly</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {calendlyFeatures.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.1}>
                <div
                  className={`rounded-2xl p-8 space-y-4 h-full ${
                    feature.highlight
                      ? "bg-gradient-to-br from-accent-purple/20 to-accent-pink/10 border border-accent-purple/30"
                      : "glass-card"
                  }`}
                >
                  <h3 className="text-white font-bold text-xl">{feature.title}</h3>
                  <p className="text-white/60 leading-relaxed">{feature.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engagement Tools ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "60%", y: "50%" }}
          rustPosition={{ x: "30%", y: "30%" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Explore the live{" "}
              <span className="text-gradient-blue-pink">engagement tools</span>{" "}
              in your courses
            </h2>
            <p className="text-white/50 mt-4 max-w-2xl mx-auto leading-relaxed">
              Participants in courses are more than attendees — they listen and participate. Take advantage of screen sharing, polls, segment chat, breakout rooms, and involve the whole audience.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {engagementTools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-full border border-accent-purple/30 bg-accent-purple/10 text-white/70 text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Efficiency Benefits ── */}
      <section className="relative py-24 px-6">
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Use our virtual classroom LMS to
                <br />
                <span className="text-gradient-blue-pink">
                  grow your academy with efficiency
                </span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {efficiencyBenefits.map((benefit, i) => (
              <AnimatedSection key={benefit.title} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-8 space-y-4 h-full">
                  <div className="w-11 h-11 rounded-xl bg-accent-peach/20 flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-accent-peach" />
                  </div>
                  <h3 className="text-white font-semibold text-lg">{benefit.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "20%", y: "50%" }}
          rustPosition={{ x: "80%", y: "60%" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">FAQs</h2>
              <p className="text-white/50 mt-3">
                Everything you need to know about live sessions in merahki.ai
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group glass-card rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none text-white font-medium text-sm leading-snug select-none hover:text-white/80 transition-colors">
                    <span>{faq.question}</span>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-open:rotate-180 transition-transform duration-200">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </summary>
                  <p className="px-6 pb-6 text-white/55 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Only with merahki.ai CTA ── */}
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
              Launch your{" "}
              <span className="text-gradient-blue-pink">
                live learning community today
              </span>
            </h2>
            <p className="text-white/50 mt-4 leading-relaxed">
              Real human connections, flexible scheduling, and AI-native analytics — all in one virtual classroom platform.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Link
              href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all"
            >
              Book a Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection
        heading="Start delivering live learning experiences"
        subheading="Connect your learners with instructors and peers through powerful virtual classroom sessions — at any scale."
      />
    </div>
  );
}
