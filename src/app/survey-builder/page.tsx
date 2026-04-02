import type { Metadata } from "next";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import LogoCarousel from "@/components/sections/LogoCarousel";
import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  Sparkles,
  LayoutDashboard,
  UserCheck,
  GitBranch,
  ShieldCheck,
  MousePointerClick,
  Share2,
  BarChart2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Survey Builder",
  description:
    "Create on-brand forms and surveys with merahki.ai. Capture leads, collect feedback, measure NPS, and analyze responses — all from one dashboard.",
  openGraph: {
    title: "Survey Builder — merahki.ai",
    description:
      "Capture leads, feedback, and insights without leaving your academy. AI-powered forms and surveys built for education-led growth.",
    url: "https://merahki.ai/survey-builder",
    type: "website",
  },
};

const stats = [
  { value: "10+", label: "Question types supported" },
  { value: "3×", label: "Higher completion with conditional logic" },
  { value: "100%", label: "On-brand, no-code forms" },
];

const buildFeatures = [
  {
    icon: ClipboardList,
    title: "Powerful surveys to collect key customer data",
    desc: "Whether you want to capture and qualify leads, assess learner preferences, collect NPS scores, or evaluate a course, there's a survey format to support it. Choose the formats you need or build your own unique form or survey that meets your needs.",
  },
  {
    icon: Sparkles,
    title: "Build it from scratch or with AI in minutes",
    desc: "Create sleek forms and surveys with a form builder that doesn't need coding. Add conditions, customize the flow, or use AI-guided dialogue to create more engaging surveys and save the conversation as a response.",
  },
  {
    icon: LayoutDashboard,
    title: "Manage everything from a single dashboard",
    desc: "View, edit, and reuse your marketing or course-related forms and surveys. See responses, track where each form is used in your academy, and update everything in a few clicks.",
  },
];

const marketingFeatures = [
  {
    icon: UserCheck,
    title: "Capture and qualify leads with ease",
    desc: "Gather the exact audience information you need — use case, role, goals, budget, timeline — so you can personalize your messaging and offers.",
  },
  {
    icon: GitBranch,
    title: "Turn forms into an effective sales funnel",
    desc: "Use forms to redirect prospects to the right next step: a course bundle, a webinar replay, a consultation booking, or a high-intent offer. Cross-sell and upsell with less friction.",
  },
  {
    icon: ShieldCheck,
    title: "Get consent easily with ready-to-use consent forms",
    desc: "Keep security and clarity front and center with customizable consent and incident-report style forms that reinforce your rules and expectations.",
  },
];

const useCases = [
  "Pre-launch registration",
  "Assess courses",
  "Capture leads",
  "Newsletter subscription",
  "Get to know your audience",
  "Gather feedback",
  "Demographics collection",
  "Social proof reviews",
  "Onboard learners",
  "Measure Net Promoter Score",
];

const steps = [
  {
    number: "01",
    icon: MousePointerClick,
    title: "Start from scratch or use ready-made templates",
    desc: "Choose a blank canvas for full control, or jump-start your form with a professionally designed template matched to your use case.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Customize with drag & drop or AI",
    desc: "Click, drag, and drop to customize and place the form, or use our AI assistant to populate it with smart questions tailored to your audience.",
  },
  {
    number: "03",
    icon: Share2,
    title: "Publish, embed, or share anywhere",
    desc: "Turn your form into a learning activity, embed it anywhere on your site, or share a link to capture leads through your marketing channels.",
  },
];

const industries = [
  { name: "Finance", desc: "Qualify investors, collect compliance consents, and measure advisor training effectiveness." },
  { name: "Healthcare", desc: "Onboard patients, capture incident reports, and measure clinical training outcomes." },
  { name: "Corporate", desc: "Run pulse surveys, collect onboarding feedback, and segment employees by role or skill level." },
  { name: "Fitness", desc: "Capture new member goals, measure class satisfaction, and qualify coaching prospects." },
  { name: "Education", desc: "Assess prior knowledge, collect course feedback, and segment learners by experience level." },
  { name: "Coaching", desc: "Qualify leads, collect client intake details, and measure session satisfaction scores." },
];

const faqs = [
  {
    question: "What is a survey builder and what is it used for?",
    answer:
      "A survey builder is a tool that helps you create surveys and forms to collect structured information — feedback, preferences, onboarding details, or satisfaction scores. Use it to analyze results, segment audiences, and make better decisions: improve a course, qualify leads, reduce churn, or measure training impact.",
  },
  {
    question: "What's the difference between a survey, a form, and a questionnaire?",
    answer:
      "Form: Used to collect information (lead capture, registration, consent, onboarding). Often transactional. Survey: Used to measure opinions and experience (CSAT, NPS, course feedback, pulse checks). Often evaluative. Questionnaire: A broad term — basically a set of questions that can function like a form or a survey depending on the goal.",
  },
  {
    question: "When should I use a survey vs an assessment or quiz?",
    answer:
      "Use a survey when you want perceptions or context — satisfaction, needs, blockers, expectations, self-reported confidence. Use an assessment when you want to measure knowledge or skill — right/wrong answers, scoring, certification readiness. Surveys capture 'how someone feels/needs,' assessments capture 'what someone knows/can do.'",
  },
  {
    question: "What is NPS and how do you calculate Net Promoter Score?",
    answer:
      "NPS measures loyalty by asking: 'How likely are you to recommend us?' on a 0–10 scale. Promoters score 9–10, Passives 7–8, Detractors 0–6. NPS = % Promoters − % Detractors (ranges from −100 to +100). Best used with a follow-up: 'What's the main reason for your score?'",
  },
  {
    question: "What is conditional logic in surveys and when should you use it?",
    answer:
      "Conditional logic shows or hides questions based on a previous answer. Use it when you want surveys to feel shorter and more relevant. If someone answers 'Beginner,' show beginner follow-ups. If someone gives a low score, ask what went wrong. It improves completion rates and gives you cleaner, more actionable data.",
  },
  {
    question: "How many questions should a survey have to avoid drop-offs?",
    answer:
      "Aim for 3–5 questions for high-response surveys (NPS, quick feedback, post-lesson pulse) and 5–10 for course evaluations or onboarding. Keep it short, group related questions, and use conditional logic so respondents only see questions that apply to them.",
  },
  {
    question: "What is CSAT and when should you use it?",
    answer:
      "CSAT (Customer Satisfaction Score) measures satisfaction with a specific experience — a course, module, live session, or onboarding step. Typically asked as 'How satisfied were you?' on a 1–5 scale. Use it immediately after a key moment in the learner journey to capture a quick quality signal.",
  },
  {
    question: "How can I segment users based on survey responses?",
    answer:
      "Segmentation groups people based on what they tell you — role, goal, skill level, intent, or satisfaction risk. Once segmented, you can tailor follow-ups: emails, course paths, bundles, or coaching invites. merahki.ai's dashboard makes it easy to filter and act on responses across your entire academy.",
  },
];

export default function SurveyBuilderPage() {
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
              Survey Builder
            </span>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Capture leads, feedback, and insights —{" "}
              <span className="text-gradient-blue-pink">
                without leaving your academy
              </span>
            </h1>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Create on-brand forms and surveys with merahki.ai. Capture leads,
              collect feedback, measure NPS, and analyze responses — all from
              one dashboard.
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
                The data you need, collected where learning happens
              </h2>
              <p className="text-white/60 leading-relaxed">
                Most academies rely on disconnected tools to capture feedback, qualify leads, and measure satisfaction. The result is fragmented data, missed signals, and slow decisions.
              </p>
              <p className="text-white/60 leading-relaxed">
                merahki.ai brings forms and surveys directly into your academy experience — so you capture the right data at every stage of the learner journey, without friction.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Build Forms Section ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "20%", y: "50%" }}
          rustPosition={{ x: "80%", y: "30%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Build forms and surveys{" "}
                <span className="text-gradient-blue-pink">
                  people actually want to complete
                </span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {buildFeatures.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-8 space-y-4 h-full">
                  <div className="w-11 h-11 rounded-xl bg-accent-purple/20 flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-accent-purple" />
                  </div>
                  <h3 className="text-white font-semibold leading-snug">{f.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Marketing Section ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "80%", y: "40%" }}
          rustPosition={{ x: "20%", y: "60%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Maximize your marketing efforts{" "}
                <span className="text-gradient-blue-pink">and boost your sales</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marketingFeatures.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-8 space-y-4 h-full">
                  <div className="w-11 h-11 rounded-xl bg-accent-blue/20 flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-accent-blue" />
                  </div>
                  <h3 className="text-white font-semibold leading-snug">{f.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases Chips ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "50%", y: "50%" }}
          rustPosition={{ x: "30%", y: "30%" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Use forms &amp; surveys for{" "}
              <span className="text-gradient-blue-pink">
                marketing, eLearning and business purposes
              </span>
            </h2>
            <p className="text-white/50 mt-4 max-w-2xl mx-auto leading-relaxed">
              From lead capture and pre-launch registration to onboarding and post-course feedback — merahki.ai&apos;s survey builder helps you collect the right data at every stage.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {useCases.map((uc) => (
                <span
                  key={uc}
                  className="px-4 py-2 rounded-full border border-accent-purple/30 bg-accent-purple/10 text-white/70 text-sm font-medium"
                >
                  {uc}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 3 Steps ── */}
      <section className="relative py-24 px-6">
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                3 easy steps to make{" "}
                <span className="text-gradient-blue-pink">your own forms</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.1}>
                <div className="relative glass-card rounded-2xl p-8 space-y-4 h-full">
                  <span className="text-5xl font-bold text-white/8 absolute top-6 right-6 leading-none select-none">
                    {step.number}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-accent-purple/20 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-accent-purple" />
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">{step.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "70%", y: "50%" }}
          rustPosition={{ x: "20%", y: "40%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                How different industries use{" "}
                <span className="text-gradient-blue-pink">merahki.ai forms &amp; surveys</span>
              </h2>
              <p className="text-white/50 mt-4 max-w-2xl mx-auto">
                Every industry needs better data to drive better learning and business decisions. merahki.ai lets you capture intent, segment audiences, personalize training, and prove impact easily.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind, i) => (
              <AnimatedSection key={ind.name} delay={i * 0.08}>
                <div className="glass-card rounded-2xl p-6 space-y-3 h-full">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-purple" />
                    <h3 className="text-white font-semibold">{ind.name}</h3>
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed">{ind.desc}</p>
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
                Everything you need to know about forms &amp; surveys in merahki.ai
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

      {/* ── CTA ── */}
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
              Get the #1 forms &amp; survey builder{" "}
              <span className="text-gradient-blue-pink">inside your online academy</span>
            </h2>
            <p className="text-white/50 mt-4 leading-relaxed">
              Capture leads, collect feedback, and measure impact — all without leaving your academy.
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
        heading="Start collecting smarter insights"
        subheading="Build forms and surveys that capture the right data at every stage of your learner journey — powered by merahki.ai."
      />
    </div>
  );
}
