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
    client: "Client A",
    tag: "Fintech",
    result: "40% reduction in onboarding time",
    detail: "Drastically reduced onboarding time, enhancing user adoption and decreasing churn.",
    color: "from-accent-purple/20",
  },
  {
    client: "Client B",
    tag: "Global Sales Organization",
    result: "150% increase in partner revenue",
    detail: "Partner Academy model delivered a 150% revenue increase within six months.",
    color: "from-accent-blue/20",
  },
  {
    client: "Client C",
    tag: "SaaS",
    result: "60% increase in user engagement",
    detail: "Transformed customer education, leading to 60% higher engagement and stronger retention.",
    color: "from-accent-pink/20",
  },
];

const steps = [
  { icon: CalendarCheck, step: "01", title: "Schedule a Meeting", desc: "Reach out to arrange a conversation at your earliest convenience." },
  { icon: MessageSquare, step: "02", title: "Discuss Your Needs", desc: "Share your existing challenges — we'll refine the details of your proposed academy." },
  { icon: FileSignature, step: "03", title: "Review & Sign", desc: "We'll walk you through the proposal, ensuring you're comfortable and excited to partner." },
  { icon: PlayCircle, step: "04", title: "Begin Implementation", desc: "Our team mobilizes to deliver the ultimate customer education experience." },
];

export default function OurProposal() {
  return (
    <section className="relative py-28 px-6" id="our-proposal">
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
              <span className="text-gradient-peach-purple">Customer Education</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-1 text-sm text-white/40 mt-2">
              <span><span className="text-white/60 font-medium">Prepared for:</span> Heads of Growth · Go-To-Market · Customer Success</span>
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
                Customer education is broken at scale — and it&apos;s costing you growth.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  number: "01",
                  title: "Low feature adoption",
                  desc: "Customers log in but never discover advanced features — limiting their perceived value and your expansion revenue.",
                  color: "text-accent-purple",
                },
                {
                  number: "02",
                  title: "High support volume",
                  desc: "Repeated how-to questions flood your support team, driving up costs and slowing response times across the board.",
                  color: "text-accent-blue",
                },
                {
                  number: "03",
                  title: "Slow time-to-value",
                  desc: "Manual, inconsistent onboarding means customers take weeks to see results — increasing early churn risk dramatically.",
                  color: "text-accent-peach",
                },
                {
                  number: "04",
                  title: "Invisible ROI",
                  desc: "Without measurable learning outcomes, you can&apos;t prove the impact of education on retention, adoption, or revenue growth.",
                  color: "text-accent-pink",
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
                <span className="text-4xl flex-shrink-0 mt-0.5" role="img" aria-label="idea">&#x1F4A1;</span>
                <div className="space-y-1">
                  <h4 className="text-white text-xl md:text-2xl font-bold leading-snug">
                    The &ldquo;Aha! Moment&rdquo; shouldn&apos;t be a mystery.
                  </h4>
                  <p className="text-white/55 text-sm leading-relaxed">
                    Most SaaS founders watch their churn rates climb while users get stuck at the login screen. It&apos;s frustrating to build a world-class product only to see customers feel overwhelmed and eventually give up.
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
              <h4 className="text-white text-lg font-bold">The &ldquo;Value Gap.&rdquo;</h4>
              <p className="text-white/65 leading-relaxed">
                If a customer doesn&apos;t feel the &ldquo;win&rdquo; within their first few sessions, they aren&apos;t just &ldquo;slow&rdquo; — they are a <span className="text-red-400 font-semibold">churn risk</span>. The cost of stagnant adoption isn&apos;t just a missed renewal; it&apos;s the slow death of your product&apos;s reputation.
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                At Merahki.ai, we&apos;ve seen brilliant software fail because of complexity. We believe your product deserves to be <span className="text-white font-medium">mastered, not just subscribed to</span>. We act as the bridge between &ldquo;I just signed up&rdquo; and &ldquo;I can&apos;t live without this.&rdquo;
              </p>
            </div>

            {/* The Plan */}
            <div className="space-y-4">
              <p className="text-white/60 text-xs font-bold tracking-widest uppercase text-center">The Plan to accelerate your growth</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    step: "01",
                    title: "Friction Audit",
                    desc: "We identify exactly where your users are getting lost.",
                    color: "from-accent-purple/20",
                    accent: "text-accent-purple",
                  },
                  {
                    step: "02",
                    title: "The Academy Framework",
                    desc: "We deploy a scalable education system tailored to your UI.",
                    color: "from-accent-blue/20",
                    accent: "text-accent-blue",
                  },
                  {
                    step: "03",
                    title: "Retention Loop",
                    desc: "We turn education into a driver for product mastery and expansion.",
                    color: "from-accent-peach/15",
                    accent: "text-accent-peach",
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
                Imagine cutting your support tickets in half and watching your &ldquo;Time-to-Value&rdquo; shrink from weeks to minutes.
              </p>
              <p className="text-white/60 leading-relaxed">
                When customers feel like experts, they don&apos;t just stay — they become your loudest advocates.
              </p>
              <div className="pt-3 border-t border-white/10">
                <p className="text-white/80 font-semibold">Ready to stop the &ldquo;Onboarding Leak&rdquo;?</p>
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
                Increase feature adoption, customer satisfaction, and brand advocacy — while decreasing support costs.
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
                Why{" "}
                <span className="text-gradient-peach-purple">Merahki.ai?</span>
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
                <AnimatedSection key={c.client} delay={i * 0.1}>
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
                Next Steps to{" "}
                <span className="text-gradient-blue-pink">Take Action</span>
              </h3>
              <p className="text-white/50">We&apos;re eager to partner with you on this journey towards educational excellence.</p>
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
                Schedule a Meeting <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
