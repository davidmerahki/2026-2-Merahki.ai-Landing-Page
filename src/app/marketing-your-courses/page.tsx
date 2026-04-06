import type { Metadata } from "next";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import MarketingProposal from "@/components/sections/MarketingProposal";
import LogoCarousel from "@/components/sections/LogoCarousel";
import Link from "next/link";
import {
  ArrowRight,
  Tag,
  RefreshCw,
  Users,
  BarChart2,
  FileText,
  Plug,
  MousePointerClick,
  Smartphone,
  Globe,
  PieChart,
  MessageSquare,
  Bookmark,
  Zap,
  TrendingUp,
  Search,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Marketing Your Courses",
  description:
    "merahki.ai's Outsourced Growth Engine is a Managed Growth Squad that closes the Execution Gap — the space between having a marketing strategy and actually running it. Using the $100M Money Model for Academies and Full-Cycle Growth Execution, our squad manages your entire academy funnel: Conversion Asset Infrastructure, Stack Integration & Automation (HubSpot, Salesforce, LMS Workflow Architecture Optimization), Traffic & Visibility Engine (Technical SEO + retargeting), and Analytics & Revenue Attribution (CAC, LTV, NRR). The result: Lead-to-Customer Transformation via education, AARRR Growth Loop Optimization, and Education-Led Retention Strategy — all executed without adding internal headcount.",
  keywords: [
    "Outsourced Growth Engine",
    "Managed Growth Squad",
    "Full-Cycle Growth Execution",
    "AARRR Growth Loop Optimization",
    "The 100M Money Model for Academies",
    "Lead-to-Customer Transformation",
    "Education-Led Retention Strategy",
    "Education-Qualified Leads EQL",
    "Demand Generation through Education",
    "UTI Matrix Analysis",
    "Workflow Architecture Optimization HubSpot Salesforce LMS",
    "Customer Acquisition Cost CAC Optimization",
    "Customer Lifetime Value LTV Expansion",
    "Net Revenue Retention NRR",
    "High-Leverage Educational Assets",
    "academy marketing automation",
    "course enrollment growth",
    "education marketing funnel",
  ],
  openGraph: {
    title: "Marketing Your Courses — Outsourced Growth Engine | merahki.ai",
    description:
      "merahki.ai's Managed Growth Squad runs your entire academy funnel — from Conversion Asset Infrastructure to Full-Cycle Growth Execution. The $100M Money Model for Academies applied to your marketing stack: AARRR Growth Loop Optimization, Lead-to-Customer Transformation via EQLs, and NRR-linked attribution.",
    url: "https://merahki.ai/marketing-your-courses",
    type: "website",
  },
};

const pillars = [
  { icon: TrendingUp, text: "We turn your traffic into a pipeline of qualified students." },
  { icon: Zap, text: "We orchestrate your existing tech stack so it runs on autopilot." },
  { icon: PieChart, text: "Clean data and ROI tracking. No vanity metrics, just revenue engineering." },
];

const salesFeatures = [
  {
    icon: MousePointerClick,
    title: "High-converting assets",
    desc: "We build the forms, pop-ups, and scarcity triggers that actually move the needle.",
  },
  {
    icon: Plug,
    title: "Workflow architecture",
    desc: "We sync your stack — Mailchimp, ActiveCampaign, or ConvertKit — and run the automation for you.",
  },
  {
    icon: Globe,
    title: "Search dominance",
    desc: "Technical SEO handled. We optimize your URLs and code so your academy ranks where the intent is.",
  },
];

const campaignFeatures = [
  {
    icon: BarChart2,
    title: "Funnel optimization and friction removal",
    desc: "We don't just look at clicks. We analyze how users move through your sales funnel, identify where you're losing money, and implement the fixes immediately. Your performance is our responsibility.",
    reverse: false,
  },
  {
    icon: FileText,
    title: "C-Suite reporting on autopilot",
    desc: "Forget manual exports. We automate your report distribution, delivering the metrics that matter — CAC, LTV, and NRR — directly to your stakeholders' inboxes.",
    reverse: true,
  },
];

const digitalFeatures = [
  { icon: MousePointerClick, title: "We build and deploy conversion assets", desc: "Forms, pop-ups, scarcity triggers, and landing pages — designed and deployed by our team, not left for you to figure out." },
  { icon: Plug, title: "We integrate and manage your current toolset", desc: "We connect and operate the tools you already own so your stack works as a unified growth system, not a collection of disconnected software." },
  { icon: Target, title: "We own the conversion tracking and attribution", desc: "Every pixel, every touchpoint, every revenue source — tracked, attributed, and reported with full clarity." },
  { icon: Globe, title: "We scale your academy's visibility via SEO and Paid Media", desc: "From technical SEO to targeted ad campaigns, we build the organic and paid channels that keep qualified traffic coming in." },
  { icon: PieChart, title: "We provide actionable intelligence, not just raw data", desc: "No dashboards dumped on your desk. We translate your data into specific growth actions and implement them for you." },
  { icon: MessageSquare, title: "We design and run your email nurturing sequences", desc: "End-to-end email flows — from lead capture to re-engagement — written, built, and managed by our team." },
  { icon: RefreshCw, title: "We manage A/B tests and iterate on every funnel stage", desc: "Continuous optimization across your landing pages, emails, and CTAs — so every cycle improves your enrollment rate." },
  { icon: Smartphone, title: "We set up retargeting and remarketing campaigns", desc: "We re-engage visitors and warm leads who didn't convert the first time, using structured retargeting flows across channels." },
  { icon: Bookmark, title: "We track student LTV and build revenue expansion programs", desc: "From upsells and renewals to referral mechanics — we build the systems that increase the lifetime value of every learner." },
];

const funnelSteps = [
  {
    icon: Search,
    step: "01",
    title: "Qualified traffic generation",
    desc: "We find your audience where they live — search, ads, and social — and drive them to high-performance landing pages designed for one thing: action.",
  },
  {
    icon: Target,
    step: "02",
    title: "Lead-to-customer transformation",
    desc: "We use your LMS to capture interest through previews and mini-courses. Our team manages the nurturing sequences that turn cold leads into loyal students with offers they can't ignore.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Retention and expansion",
    desc: "Education is the ultimate retention tool. We manage your mobile app presence and push notifications to keep learners engaged, driving in-app purchases and increasing your Net Revenue Retention.",
  },
];

const industries = [
  { name: "Finance", desc: "We build lead qualification funnels, automate advisor nurturing, and track attribution from webinar to enrollment." },
  { name: "Healthcare", desc: "We run compliance training campaigns, manage re-engagement sequences, and measure CAC and LTV across programs." },
  { name: "Corporate", desc: "We orchestrate internal training campaigns, segment by department, and deliver C-Suite reporting on learning ROI." },
  { name: "Fitness", desc: "We launch subscription funnels, manage seasonal promotions, and convert trial users into high-LTV paying members." },
  { name: "Education", desc: "We build full enrollment funnels, run early-access campaigns, and attribute revenue to every marketing touchpoint." },
  { name: "Coaching", desc: "We automate lead follow-up, promote group programs, and run the conversion sequences that close qualified prospects." },
];

const faqs = [
  {
    question: "What does merahki.ai's marketing execution service include?",
    answer: "Our service covers the full marketing lifecycle: strategy, asset creation, stack integration, automation setup, campaign management, conversion tracking, SEO, paid media, reporting, and ongoing optimization. You get a dedicated squad — not a software subscription.",
  },
  {
    question: "How is this different from buying marketing software?",
    answer: "You don't get another dashboard to manage. You get a team that operates inside your existing stack and executes every growth activity for you — from building landing pages to running A/B tests — while you monitor the results.",
  },
  {
    question: "Which tools does merahki.ai work with?",
    answer: "We work with Mailchimp, ActiveCampaign, ConvertKit, HubSpot, Zapier, Make, Google Analytics, Facebook Pixel, Google Tag Manager, Stripe, and more. We adapt to your current stack — we don't force you to switch tools.",
  },
  {
    question: "How do you handle reporting and attribution?",
    answer: "We track CAC, LTV, NRR, funnel conversion rates, and revenue attribution across every channel. Reports are automated and delivered directly to your stakeholders — no manual exports, no vanity metrics.",
  },
  {
    question: "How long does it take to see results?",
    answer: "Most clients see measurable improvements in lead quality and funnel conversion within the first 30–60 days. SEO and organic growth compounds over 90–180 days. We prioritize quick wins first while building long-term growth infrastructure in parallel.",
  },
  {
    question: "Do we retain ownership of our marketing assets and data?",
    answer: "Yes. Every asset we build — landing pages, email sequences, automations, ad creatives — is fully owned by you. All data lives in your accounts. We operate them on your behalf, but everything transfers to you at any time.",
  },
];

export default function MarketingYourCoursesPage() {
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
              Marketing Your Courses
            </span>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Your outsourced{" "}
              <span className="text-gradient-blue-pink">
                growth engine for academies
              </span>
            </h1>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Stop buying software you don&apos;t have time to manage. We are the marketing execution team that scales your academy using the best-in-class stack. merahki.ai doesn&apos;t give you another dashboard; we give you a dedicated squad to handle your growth from end to end.
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

      {/* ── Pillars ── */}
      <section className="py-14 px-6 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((p) => (
                <div key={p.text} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <p.icon className="w-5 h-5 text-accent-purple" />
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{p.text}</p>
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
                We own the execution. You monitor the ROI.
              </h2>
              <p className="text-white/60 leading-relaxed">
                Most academies buy software they never fully use — tools that sit idle while traffic leaks and leads go cold.
              </p>
              <p className="text-white/60 leading-relaxed">
                merahki.ai deploys a dedicated growth squad to own your marketing engine end to end. We execute. You scale.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Sales Features ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "20%", y: "50%" }}
          rustPosition={{ x: "80%", y: "30%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                merahki.ai deploys a dedicated growth squad{" "}
                <span className="text-gradient-blue-pink">to own your marketing engine</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {salesFeatures.map((f, i) => (
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

      {/* ── Campaign Features (alternating rows) ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "80%", y: "40%" }}
          rustPosition={{ x: "20%", y: "60%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                We own the execution.{" "}
                <span className="text-gradient-blue-pink">You monitor the ROI.</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="space-y-24">
            {campaignFeatures.map((f) => (
              <AnimatedSection key={f.title} delay={0.1}>
                <div className={`flex flex-col gap-10 items-center ${f.reverse ? "md:flex-row-reverse" : "md:flex-row"}`}>
                  <div className="flex-1 space-y-6">
                    <div className="w-11 h-11 rounded-xl bg-accent-purple/20 flex items-center justify-center">
                      <f.icon className="w-5 h-5 text-accent-purple" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{f.title}</h3>
                    <p className="text-white/65 leading-relaxed">{f.desc}</p>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="relative rounded-2xl border border-white/10 bg-white/5 shadow-2xl aspect-[16/10] flex items-center justify-center">
                      <div className="text-center space-y-2 pointer-events-none">
                        <f.icon className="w-10 h-10 text-white/15 mx-auto" />
                        <p className="text-white/20 text-xs tracking-widest uppercase">Image coming soon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Digital Features Grid ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "50%", y: "50%" }}
          rustPosition={{ x: "20%", y: "30%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Full-cycle{" "}
                <span className="text-gradient-blue-pink">growth execution</span>
              </h2>
              <p className="text-white/50 mt-4 max-w-2xl mx-auto">
                Every growth lever — built, operated, and optimized by our team so you never have to manage it alone.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {digitalFeatures.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.06}>
                <div className="glass-card rounded-2xl p-6 space-y-3 h-full">
                  <div className="w-10 h-10 rounded-xl bg-accent-blue/20 flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-accent-blue" />
                  </div>
                  <h3 className="text-white font-semibold text-sm leading-snug">{f.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Marketing Automation Funnel ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "70%", y: "40%" }}
          rustPosition={{ x: "30%", y: "60%" }}
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                Automated execution to{" "}
                <span className="text-gradient-blue-pink">maximize student LTV</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {funnelSteps.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.1}>
                <div className="relative glass-card rounded-2xl p-8 space-y-4 h-full">
                  <span className="text-5xl font-bold text-white/8 absolute top-6 right-6 leading-none select-none">
                    {step.step}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-accent-peach/20 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-accent-peach" />
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
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                How different industries use{" "}
                <span className="text-gradient-blue-pink">merahki.ai marketing tools</span>
              </h2>
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
                Everything you need to know about marketing your courses with merahki.ai
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details key={faq.question} className="group glass-card rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none text-white font-medium text-sm leading-snug select-none hover:text-white/80 transition-colors">
                    <span>{faq.question}</span>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-open:rotate-180 transition-transform duration-200">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </summary>
                  <p className="px-6 pb-6 text-white/55 text-sm leading-relaxed">{faq.answer}</p>
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
            <span className="section-badge text-white/30 mb-2 inline-block">Only with merahki.ai</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Stop managing tools.{" "}
              <span className="text-gradient-blue-pink">Start monitoring growth.</span>
            </h2>
            <p className="text-white/50 mt-4 leading-relaxed">
              A dedicated squad to own your marketing engine — from qualified traffic to student retention — end to end.
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

      <MarketingProposal />

      <ContactSection
        heading="Start marketing your courses smarter"
        subheading="Connect your marketing stack to your academy and drive enrollment, retention, and revenue from a single platform."
      />
    </div>
  );
}
