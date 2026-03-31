import AnimatedSection from "@/components/ui/AnimatedSection";
import GlowBackground from "@/components/ui/GlowBackground";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  MessageSquare,
  FileSignature,
  PlayCircle,
  Video,
  BookOpen,
  Sparkles,
  Palette,
  Gift,
  TrendingUp,
  Share2,
  BarChart2,
  Monitor,
  Database,
  Smartphone,
  GraduationCap,
} from "lucide-react";

const tiers = [
  {
    price: "4,575 USD",
    billing: "+ VAT · One-time payment",
    title: "Academy Setup",
    subtitle: "Initial setup per course — 1 course per feature or use case to guarantee effectiveness",
    headerIcon: GraduationCap,
    highlight: true,
    items: [
      { icon: CalendarCheck, title: "8-Week Guaranteed Delivery", desc: "No front-end or back-end development required — a turnkey solution ready to customize and implement." },
      { icon: Video, title: "100 Minutes of Premium Video", desc: "Production & editing of educational content for your Academy." },
      { icon: BookOpen, title: "Complete Program Design", desc: "Up to 12 lessons designed by industry experts working exclusively on your project." },
      { icon: Sparkles, title: "6 Interactive H5P Activities", desc: "Designed for in-lesson engagement and knowledge reinforcement." },
      { icon: Palette, title: "Design & Customization", desc: "Content tailored to your brand identity." },
      { icon: Gift, title: "Gamification & Behavioral Economics", desc: "Powered by the Octalysis Framework." },
      { icon: TrendingUp, title: "Education-Led Growth (ELG) Strategy", desc: "Education integrated directly into your Go-To-Market strategy to drive sales, adoption, and retention." },
      { icon: Share2, title: "CLG Flywheel Design & Activation", desc: "Transform your most passionate users into your main growth engine." },
    ],
  },
  {
    price: "762 USD",
    billing: "+ VAT · / month · up to 1,000 users",
    title: "Growth & Analytics",
    subtitle: "$1 USD per additional user / month",
    headerIcon: BarChart2,
    highlight: false,
    items: [
      { icon: BarChart2, title: "Learning Analytics", desc: "Every lesson guarantees adoption by measuring observable behaviors and learning outcomes." },
      { icon: Monitor, title: "LMS Platform", desc: "Your knowledge base becomes a resource that drives growth metrics." },
      { icon: Database, title: "Data Integration", desc: "Virtual machine sends data directly to your preferred visualization tools." },
    ],
  },
  {
    price: "400 USD",
    billing: "/ month · up to 1,000 users",
    title: "Mobile App",
    subtitle: "$1 USD per additional user / month",
    headerIcon: Smartphone,
    highlight: false,
    items: [
      { icon: Smartphone, title: "iOS & Android App", desc: "Your content, adaptive and personalized for all types of devices." },
    ],
  },
];

const stats = [
  { value: "+30.3%", label: "increase in product adoption" },
  { value: "+28.7%", label: "boost in user engagement" },
  { value: "+34.6%", label: "growth in Customer Lifetime Value (LTV)" },
  { value: "−8.1%", label: "reduction in the sales cycle" },
  { value: "−7.2%", label: "decrease in support tickets" },
];

const caseStudies = [
  {
    tag: "Healthcare",
    result: "60% faster compliance certification",
    detail: "Automated compliance paths reduced manual tracking and cut certification time dramatically.",
    color: "from-accent-purple/20",
  },
  {
    tag: "Retail & Field Staff",
    result: "3x improvement in onboarding speed",
    detail: "Role-specific dynamic onboarding cut ramp time from months to weeks across 40+ locations.",
    color: "from-accent-blue/20",
  },
  {
    tag: "Manufacturing",
    result: "40% reduction in retraining costs",
    detail: "AI-driven reinforcement loops eliminated knowledge gaps and reduced repeat training sessions.",
    color: "from-accent-pink/20",
  },
];

const steps = [
  { icon: CalendarCheck, step: "01", title: "Schedule a Meeting", desc: "Reach out to arrange a conversation at your earliest convenience." },
  { icon: MessageSquare, step: "02", title: "Discuss Your Needs", desc: "Share your existing training challenges — we'll map the right academy structure for your workforce." },
  { icon: FileSignature, step: "03", title: "Review & Sign", desc: "We'll walk you through the proposal, ensuring you're comfortable and excited to get started." },
  { icon: PlayCircle, step: "04", title: "Begin Implementation", desc: "Our team mobilizes to deliver a world-class training and certification experience in 8 weeks." },
];

export default function TrainingProposal() {
  return (
    <section className="relative py-28 px-6" id="training-proposal">
      <GlowBackground
        indigoPosition={{ x: "15%", y: "20%" }}
        rustPosition={{ x: "85%", y: "70%" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto space-y-24">

        {/* ── Header ── */}
        <AnimatedSection>
          <div className="text-center space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">
              Our Proposal
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4">
              <span className="text-gradient-peach-purple">Training &amp; Certification</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-1 text-sm text-white/40 mt-2">
              <span><span className="text-white/60 font-medium">Prepared for:</span> L&amp;D Leaders · HR Directors · Operations</span>
              <span><span className="text-white/60 font-medium">Prepared by:</span> Merahki.ai</span>
            </div>
          </div>
        </AnimatedSection>

        {/* ── The Challenge ── */}
        <AnimatedSection delay={0.1}>
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                The Challenge You Face
              </h3>
              <p className="text-white/40 max-w-xl mx-auto text-sm">
                Traditional employee training is too slow, too generic, and too hard to measure — and it&apos;s costing you performance.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  number: "01",
                  title: "Inability to Keep Up with Business Speed",
                  desc: "Static training materials become outdated as products, regulations, and market conditions change — leaving field staff under-equipped for current demands.",
                  color: "text-accent-purple",
                },
                {
                  number: "02",
                  title: "Lack of Relevance & Personalization",
                  desc: "Generic content that isn't tailored to a specific role, site, or performance level leads to low engagement and poor knowledge retention.",
                  color: "text-accent-blue",
                },
                {
                  number: "03",
                  title: "High Administrative & Manual Burden",
                  desc: "Managing compliance training, tracking expiring certifications, and updating onboarding paths across distributed workforces is too manual to scale.",
                  color: "text-accent-peach",
                },
                {
                  number: "04",
                  title: "Fragmented Learning Access",
                  desc: "Employees lack access to knowledge in the flow of work. Leaving their workspace to complete long-form courses disrupts productivity and kills adoption.",
                  color: "text-accent-pink",
                },
                {
                  number: "05",
                  title: "Slow Ramp Time for New Hires",
                  desc: "Without role-specific, dynamic onboarding paths, new hires take unnecessarily long to reach full productivity — draining resources and morale.",
                  color: "text-accent-purple",
                },
                {
                  number: "06",
                  title: "Difficulty Measuring Business Impact",
                  desc: "Organizations struggle to connect learning data to tangible KPIs — productivity levels, quality scores, and compliance rates remain disconnected from training activity.",
                  color: "text-accent-blue",
                },
                {
                  number: "07",
                  title: "The Forgetting Curve",
                  desc: "Without AI-driven reinforcement, employees quickly forget what they've learned — making one-time training events an expensive and ineffective investment.",
                  color: "text-accent-peach",
                },
              ].map((item) => (
                <div key={item.number} className="glass-card rounded-2xl p-6 space-y-4">
                  <span className={`text-4xl font-bold leading-none ${item.color} opacity-40`}>{item.number}</span>
                  <h4 className="text-white font-semibold leading-snug">{item.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ── Intro narrative ── */}
        <AnimatedSection delay={0.1}>
          <div className="space-y-6">

            {/* Hero headline */}
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-purple via-accent-blue to-accent-pink" />
              <div className="narrative-card rounded-2xl pl-10 pr-8 py-9 flex items-start gap-5">
                <span className="text-4xl flex-shrink-0 mt-0.5" role="img" aria-label="graduation">&#x1F393;</span>
                <div className="space-y-1">
                  <h4 className="text-white text-xl md:text-2xl font-bold leading-snug">
                    Your workforce can&apos;t wait months to be trained.
                  </h4>
                  <p className="text-white/55 text-sm leading-relaxed">
                    Most L&amp;D teams are fighting a losing battle — deploying training after the fact, scrambling to update outdated content, and watching completion rates flatline. Building a great product means nothing if your team can&apos;t execute on it.
                  </p>
                </div>
              </div>
            </div>

            {/* The Villain */}
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 px-8 py-7 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-red-400 text-xs font-bold tracking-widest uppercase">The Villain</span>
                <div className="h-px flex-1 bg-red-500/20" />
              </div>
              <h4 className="text-white text-lg font-bold">The &ldquo;Stale Knowledge Problem.&rdquo;</h4>
              <p className="text-white/65 leading-relaxed">
                Every day your employees operate on outdated information, you accumulate <span className="text-red-400 font-semibold">compounding performance debt</span>. The cost isn&apos;t just a missed compliance deadline — it&apos;s quality failures, longer ramp times, and a workforce that never reaches full potential.
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                At Merahki.ai, we&apos;ve seen high-performing organizations crippled by training that can&apos;t keep pace. We believe your team deserves to be <span className="text-white font-medium">continuously enabled, not periodically certified</span>. We bridge the gap between &ldquo;hired&rdquo; and &ldquo;high-performer.&rdquo;
              </p>
            </div>

            {/* The Plan */}
            <div className="space-y-5">
              <div className="text-center space-y-1">
                <p className="text-white/60 text-xs font-bold tracking-widest uppercase">An AI-Native Performance Ecosystem</p>
                <p className="text-white/35 text-xs max-w-lg mx-auto">Replaces the &ldquo;course-catalog&rdquo; model with a dynamic, four-pillar ecosystem built for the speed of modern business.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    step: "01",
                    title: "Automated Administration",
                    desc: "Natural-language commands handle complex logistics — role-based assignments, regional certifications, and compliance tracking — instantly, with no manual effort.",
                    color: "from-accent-purple/20",
                    accent: "text-accent-purple",
                  },
                  {
                    step: "02",
                    title: "Rapid Content Conversion",
                    desc: "Raw materials — SOPs, manuals, and decks — are automatically transformed into structured, interactive modules in minutes, so training always matches the speed of change.",
                    color: "from-accent-blue/20",
                    accent: "text-accent-blue",
                  },
                  {
                    step: "03",
                    title: "Just-in-Time Learning",
                    desc: "Shifts from memorization to in-flow support. Role-aware AI tutors answer questions in real-time within the tools employees already use — no workspace disruption.",
                    color: "from-accent-peach/15",
                    accent: "text-accent-peach",
                  },
                  {
                    step: "04",
                    title: "Performance-Linked ROI",
                    desc: "Training data is tied directly to KPIs — productivity, quality scores, and compliance rates — bridging the gap between learning activity and measurable business impact.",
                    color: "from-accent-pink/15",
                    accent: "text-accent-pink",
                  },
                ].map((p) => (
                  <div key={p.step} className={`rounded-2xl p-6 border border-white/10 bg-gradient-to-br ${p.color} to-transparent space-y-3`}>
                    <span className={`text-3xl font-bold leading-none ${p.accent} opacity-50`}>{p.step}</span>
                    <h5 className="text-white font-semibold">{p.title}</h5>
                    <p className="text-white/55 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* The Transformation */}
            <div className="rounded-2xl bg-gradient-to-br from-accent-purple/15 to-accent-blue/10 border border-accent-purple/25 px-8 py-7 space-y-4">
              <p className="text-accent-purple text-xs font-bold tracking-widest uppercase">The Transformation</p>
              <p className="text-white text-lg font-semibold leading-relaxed">
                Imagine cutting ramp time in half, eliminating compliance gaps, and watching your team&apos;s performance metrics climb — without adding a single L&amp;D headcount.
              </p>
              <p className="text-white/60 leading-relaxed">
                When employees feel continuously supported and equipped, they don&apos;t just comply — they perform.
              </p>
              <div className="pt-3 border-t border-white/10">
                <p className="text-white/80 font-semibold">Ready to build a workforce that never stops learning?</p>
              </div>
            </div>

          </div>
        </AnimatedSection>

        {/* ── Deliverables / Tiers ── */}
        <AnimatedSection delay={0.1}>
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold">
                What&apos;s Included in{" "}
                <span className="text-gradient-blue-pink">Your Academy</span>
              </h3>
              <p className="text-white/50 max-w-2xl mx-auto">
                A complete ecosystem of technology and talent ready to upskill your workforce — delivered in 8 weeks.
              </p>
            </div>
            <div className="space-y-10">
              {tiers.map((tier, i) => (
                <AnimatedSection key={tier.title} delay={i * 0.1}>
                  <div className="space-y-6">
                    <div className={`rounded-2xl px-8 py-6 flex items-start gap-4 ${
                      i === 0
                        ? "bg-gradient-to-r from-accent-purple/25 to-accent-pink/15 border border-accent-purple/35"
                        : i === 1
                        ? "bg-gradient-to-r from-accent-blue/20 to-accent-purple/10 border border-accent-blue/30"
                        : "bg-gradient-to-r from-accent-peach/15 to-accent-purple/8 border border-accent-peach/25"
                    }`}>
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        i === 0 ? "bg-accent-purple/20 border border-accent-purple/30"
                        : i === 1 ? "bg-accent-blue/20 border border-accent-blue/30"
                        : "bg-accent-peach/15 border border-accent-peach/25"
                      }`}>
                        <tier.headerIcon className={`w-4 h-4 ${i === 0 ? "text-accent-purple" : i === 1 ? "text-accent-blue" : "text-accent-peach"}`} />
                      </div>
                      <div>
                        <p className="text-2xl md:text-3xl font-bold text-white">{tier.price}</p>
                        <p className="text-white/50 text-sm mt-1">{tier.billing}</p>
                        {tier.subtitle && (
                          <p className="text-white/35 text-xs mt-2 max-w-lg">{tier.subtitle}</p>
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-7 px-2">
                      {tier.items.map((item) => (
                        <div key={item.title} className="space-y-2.5">
                          <div className="w-8 h-8 rounded-lg bg-accent-purple/12 border border-accent-purple/20 flex items-center justify-center">
                            <item.icon className="w-4 h-4 text-accent-purple" />
                          </div>
                          <h5 className="text-white font-semibold text-sm leading-snug">{item.title}</h5>
                          <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ── Why Merahki.ai — Stats ── */}
        <AnimatedSection delay={0.1}>
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold">
                Why <span className="text-gradient-peach-purple">Merahki.ai?</span>
              </h3>
              <p className="text-white/50 max-w-2xl mx-auto">
                Over 73,000+ training hours saved. Proven strategies across industries, delivering education that scales without scaling your team.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <AnimatedSection key={s.label} delay={i * 0.08}>
                  <div className="glass-card rounded-2xl p-6 text-center space-y-2">
                    <p className="text-4xl font-bold text-gradient-peach-purple">{s.value}</p>
                    <p className="text-white/55 text-sm leading-snug">{s.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ── Case Studies ── */}
        <AnimatedSection delay={0.1}>
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white/80 text-center">Proven Successes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {caseStudies.map((c, i) => (
                <AnimatedSection key={c.tag} delay={i * 0.1}>
                  <div className={`rounded-2xl p-7 border border-white/10 bg-gradient-to-br ${c.color} to-transparent space-y-3`}>
                    <span className="section-badge text-white/40">{c.tag}</span>
                    <p className="text-2xl font-bold text-white mt-2 leading-tight">{c.result}</p>
                    <p className="text-white/55 text-sm leading-relaxed">{c.detail}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ── Next Steps ── */}
        <AnimatedSection delay={0.1}>
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold">
                Next Steps to <span className="text-gradient-blue-pink">Take Action</span>
              </h3>
              <p className="text-white/50">We&apos;re ready to build a training program your team will actually use.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((s, i) => (
                <AnimatedSection key={s.step} delay={i * 0.1}>
                  <div className="glass-card rounded-2xl p-6 space-y-4 h-full">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold text-gradient-peach-purple leading-none">{s.step}</span>
                      <div className="w-9 h-9 rounded-xl bg-accent-purple/15 flex items-center justify-center">
                        <s.icon className="w-4 h-4 text-accent-purple" />
                      </div>
                    </div>
                    <h4 className="text-white font-semibold">{s.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            <div className="text-center pt-4">
              <Link
                href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all"
              >
                Book Your Strategy Call <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
