import AnimatedSection from "@/components/ui/AnimatedSection";
import GlowBackground from "@/components/ui/GlowBackground";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  MessageSquare,
  FileSignature,
  PlayCircle,
  Target,
  Plug,
  Globe,
  BarChart2,
  MousePointerClick,
  Mail,
  RefreshCw,
  Zap,
  Search,
  TrendingUp,
  PieChart,
  Megaphone,
} from "lucide-react";

const tiers = [
  {
    price: "2,200 USD",
    billing: "+ VAT · One-time setup fee",
    title: "Growth Engine Setup",
    subtitle: "Full infrastructure build — strategy, stack integration, conversion assets, and first campaign launch",
    headerIcon: Target,
    accentClass: "from-accent-purple/25 to-accent-pink/15 border-accent-purple/35",
    iconClass: "bg-accent-purple/20 border-accent-purple/30",
    textClass: "text-accent-purple",
    items: [
      { icon: CalendarCheck, title: "Discovery & Strategy Session", desc: "Deep-dive into your audience, funnel gaps, and growth goals — resulting in a 90-day execution roadmap." },
      { icon: Search, title: "Tech Stack Audit & Integration", desc: "Full audit of your current tools. We connect and configure every integration — CRM, email, analytics, and LMS." },
      { icon: MousePointerClick, title: "Conversion Asset Creation", desc: "We build your lead capture forms, pop-ups, landing page sections, and scarcity triggers from scratch." },
      { icon: Globe, title: "Technical SEO Optimization", desc: "URLs, meta tags, structured data, and page speed — fully optimized so your academy ranks where the intent is." },
      { icon: Mail, title: "Email Nurture Sequence Architecture", desc: "Welcome flow, lead nurturing, and re-engagement sequences — written, built, and tested by our team." },
      { icon: PieChart, title: "Tracking & Attribution Setup", desc: "Pixel installation, UTM framework, and conversion goals configured across all channels." },
      { icon: BarChart2, title: "Analytics Dashboard Configuration", desc: "Custom reporting dashboard surfacing CAC, LTV, NRR, funnel rates, and enrollment velocity." },
      { icon: Megaphone, title: "Kickoff Campaign Launch", desc: "We plan and execute your first campaign from asset to deployment — so you see results from day one." },
    ],
  },
  {
    price: "1,100 USD",
    billing: "+ VAT · / month · ongoing retainer",
    title: "Growth Retainer",
    subtitle: "Continuous marketing execution — campaigns managed, funnels optimized, and growth compounded every month",
    headerIcon: TrendingUp,
    accentClass: "from-accent-blue/20 to-accent-purple/10 border-accent-blue/30",
    iconClass: "bg-accent-blue/20 border-accent-blue/30",
    textClass: "text-accent-blue",
    items: [
      { icon: Megaphone, title: "Monthly Campaign Management", desc: "Our team plans, launches, and manages your marketing campaigns — you approve, we execute." },
      { icon: RefreshCw, title: "A/B Testing & Funnel Optimization", desc: "Continuous testing across landing pages, emails, and CTAs to improve your enrollment rate every cycle." },
      { icon: BarChart2, title: "Weekly Performance Reports", desc: "Automated reporting delivered to your inbox — CAC, LTV, NRR, conversion rates, and growth trends." },
      { icon: Mail, title: "Email Sequence Management", desc: "We maintain, update, and expand your nurturing flows as your offer and audience evolve." },
      { icon: Target, title: "Retargeting Campaign Management", desc: "We re-engage warm leads and past visitors with structured remarketing flows across paid channels." },
      { icon: Zap, title: "SEO Monitoring & Content Updates", desc: "Monthly SEO health checks, ranking reports, and on-page updates to protect and grow your organic traffic." },
    ],
  },
];

const stats = [
  { value: "+40%", label: "avg. student enrollment increase" },
  { value: "3×", label: "faster time-to-first-enrollment" },
  { value: "−35%", label: "reduction in cost per acquisition" },
  { value: "+52%", label: "avg. lead-to-student conversion lift" },
  { value: "30–60", label: "days to first measurable results" },
];

const caseStudies = [
  {
    tag: "SaaS",
    result: "+52% student enrollment in 30 days",
    detail: "Conversion-focused landing page redesign, automated nurture sequences, and retargeting campaigns deployed at launch.",
    color: "from-accent-purple/20",
  },
  {
    tag: "Healthcare",
    result: "−38% cost per acquisition",
    detail: "Full funnel rebuild with SEO-optimized pages, email segmentation, and attribution tracking eliminated wasted ad spend.",
    color: "from-accent-blue/20",
  },
  {
    tag: "Corporate Training",
    result: "3× qualified lead volume",
    detail: "Stack integration, lead scoring automation, and targeted paid campaigns surfaced high-intent prospects the team had been missing.",
    color: "from-accent-pink/20",
  },
];

const steps = [
  { icon: CalendarCheck, step: "01", title: "Schedule a Meeting", desc: "Book a strategy call so we can understand your academy, current stack, and growth goals." },
  { icon: MessageSquare, step: "02", title: "Discuss Your Needs", desc: "We map your funnel gaps, audience profile, and the 90-day execution plan tailored to your business." },
  { icon: FileSignature, step: "03", title: "Review & Sign", desc: "We walk you through the proposal and scope of work before a single line of code is written." },
  { icon: PlayCircle, step: "04", title: "Launch Your Growth Engine", desc: "Our squad mobilizes to build your infrastructure and launch your first campaign within 2 weeks." },
];

export default function MarketingProposal() {
  return (
    <section className="relative py-28 px-6" id="marketing-proposal">
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
              <span className="text-gradient-blue-pink">Marketing Your Courses</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-1 text-sm text-white/40 mt-2">
              <span><span className="text-white/60 font-medium">Prepared for:</span> Marketing · Sales · Growth</span>
              <span><span className="text-white/60 font-medium">Prepared by:</span> Merahki.ai</span>
            </div>
          </div>
        </AnimatedSection>

        {/* ── The Challenge ── */}
        <AnimatedSection delay={0.1}>
          <div className="space-y-8">

            <div className="text-center space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white">The Challenge You Face</h3>
              <p className="text-white/40 max-w-xl mx-auto text-sm">
                You have a great academy — but your marketing stack is fragmented, underused, and not converting.
              </p>
            </div>

            {/* Root cause */}
            <div className="rounded-2xl border border-white/10 bg-white/3 px-8 py-7 space-y-3">
              <p className="text-white/50 text-xs font-bold tracking-widest uppercase">The Root Cause</p>
              <h4 className="text-white text-lg font-bold">Growth without execution is just potential.</h4>
              <p className="text-white/60 leading-relaxed">
                Most academies invest in the right tools — email platforms, CRMs, analytics dashboards — but never unlock their full value because no one has the time or expertise to operate them properly. The result is wasted spend, disconnected data, and enrollment numbers that plateau no matter how good the content is.
              </p>
            </div>

            {/* The villain */}
            <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 px-8 py-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">The Villain</span>
                <div className="h-px flex-1 bg-orange-500/20" />
              </div>
              <h4 className="text-white text-lg font-bold">The Execution Gap.</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                The distance between having the right marketing stack and actually using it to grow is where most academy revenue is lost. It fails in three compounding ways:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                {[
                  { label: "Tool Paralysis", desc: "Software that sits idle. Integrations that were never finished. Campaigns that were planned but never launched." },
                  { label: "Attribution Blindness", desc: "No clear picture of which channels, emails, or pages are actually driving enrollment — so every decision is a guess." },
                  { label: "Execution Bottleneck", desc: "Your team knows what needs to happen but doesn't have the bandwidth to build, test, and optimize simultaneously." },
                ].map((v) => (
                  <div key={v.label} className="rounded-xl bg-orange-500/8 border border-orange-500/15 p-4 space-y-2">
                    <p className="text-orange-300 font-semibold text-sm">{v.label}</p>
                    <p className="text-white/50 text-xs leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Three layers of impact */}
            <div className="space-y-4">
              <p className="text-white/40 text-xs font-bold tracking-widest uppercase text-center">The Three Layers of Impact</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                <div className="glass-card rounded-2xl p-6 space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold tracking-widest uppercase text-accent-purple opacity-70">External</span>
                    <h4 className="text-white font-semibold">Low Enrollment &amp; High CAC</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      { title: "Thin Lead Pipeline", desc: "Traffic arrives but doesn't convert — because the funnel was never built to qualify and nurture intent." },
                      { title: "Rising Cost Per Student", desc: "Without optimization and attribution, ad spend grows but enrollment doesn't move proportionally." },
                      { title: "Invisible Revenue Leaks", desc: "Warm leads go cold, re-engagement never triggers, and potential students fall through the cracks silently." },
                    ].map((p) => (
                      <li key={p.title} className="space-y-0.5">
                        <p className="text-white/80 text-sm font-medium">{p.title}</p>
                        <p className="text-white/45 text-xs leading-relaxed">{p.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass-card rounded-2xl p-6 space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold tracking-widest uppercase text-accent-blue opacity-70">Internal · Company</span>
                    <h4 className="text-white font-semibold">Wasted Stack &amp; No Attribution</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      { title: "Subscriptions Without ROI", desc: "You're paying for tools that your team doesn't have time to fully configure, integrate, or operate consistently." },
                      { title: "No Growth Visibility", desc: "Without proper attribution, it's impossible to know which efforts are working — and which are draining budget." },
                      { title: "Execution Bottleneck", desc: "Growth ideas die in the backlog because there's no dedicated capacity to build and ship them." },
                    ].map((p) => (
                      <li key={p.title} className="space-y-0.5">
                        <p className="text-white/80 text-sm font-medium">{p.title}</p>
                        <p className="text-white/45 text-xs leading-relaxed">{p.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass-card rounded-2xl p-6 space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold tracking-widest uppercase text-accent-peach opacity-70">Internal · User</span>
                    <h4 className="text-white font-semibold">Marketing Complexity &amp; Paralysis</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      { title: "Overwhelm Without Direction", desc: "Too many channels, tools, and tactics to manage simultaneously — without a clear execution priority." },
                      { title: "No Clear ROI Signal", desc: "When it's unclear what's working, confidence drops and marketing investments get cut instead of optimized." },
                      { title: "Reactive Instead of Proactive", desc: "The team responds to problems rather than building systems that prevent them — growth stays inconsistent." },
                    ].map((p) => (
                      <li key={p.title} className="space-y-0.5">
                        <p className="text-white/80 text-sm font-medium">{p.title}</p>
                        <p className="text-white/45 text-xs leading-relaxed">{p.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ── Intro narrative ── */}
        <AnimatedSection delay={0.1}>
          <div className="space-y-6">

            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-purple via-accent-blue to-accent-pink" />
              <div className="narrative-card rounded-2xl pl-10 pr-8 py-9 flex items-start gap-5">
                <span className="text-4xl flex-shrink-0 mt-0.5" role="img" aria-label="rocket">&#x1F4C8;</span>
                <div className="space-y-1">
                  <h4 className="text-white text-xl md:text-2xl font-bold leading-snug">
                    Most academies don&apos;t have a traffic problem. They have an execution problem.
                  </h4>
                  <p className="text-white/55 text-sm leading-relaxed">
                    The tools exist. The audience is out there. But without a dedicated team building the funnels, running the automations, and optimizing the campaigns week over week, growth stays theoretical. Merahki.ai closes the execution gap so your academy starts compounding.
                  </p>
                </div>
              </div>
            </div>

            {/* The villain narrative */}
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 px-8 py-7 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-red-400 text-xs font-bold tracking-widest uppercase">The Villain</span>
                <div className="h-px flex-1 bg-red-500/20" />
              </div>
              <h4 className="text-white text-lg font-bold">The &ldquo;Execution Gap.&rdquo;</h4>
              <p className="text-white/65 leading-relaxed">
                The space between &ldquo;having a marketing strategy&rdquo; and &ldquo;actually running it&rdquo; is where most academy enrollment is lost. Every month without a functioning funnel is <span className="text-red-400 font-semibold">a fully priced growth opportunity with zero return</span>. The problem isn&apos;t your academy — it&apos;s the absence of an execution system that converts intent into enrollment.
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                At Merahki.ai, we close the execution gap by becoming your dedicated marketing squad — building, running, and optimizing your entire growth engine on your behalf.
              </p>
            </div>

            {/* The Plan */}
            <div className="space-y-6">

              <div className="text-center space-y-1">
                <p className="text-white/60 text-xs font-bold tracking-widest uppercase">The Plan to close the execution gap</p>
                <p className="text-white/35 text-xs max-w-lg mx-auto">Transitioning from fragmented tools to a fully managed, revenue-engineered growth operation.</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/3 px-7 py-5 flex items-start gap-4">
                <span className="text-2xl mt-0.5">&#x1F3AF;</span>
                <div className="space-y-1">
                  <p className="text-white font-semibold">The Strategy: Shift from &ldquo;Tools&rdquo; to &ldquo;Revenue Engineering&rdquo;</p>
                  <p className="text-white/50 text-sm leading-relaxed">Every marketing lever — traffic, conversion, nurturing, retention — owned, operated, and optimized by our squad. You monitor the dashboard. We build the machine.</p>
                </div>
              </div>

              {/* Four pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div className="rounded-2xl p-6 border border-white/10 bg-gradient-to-br from-accent-purple/20 to-transparent space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-accent-purple opacity-50 leading-none">I</span>
                    <h5 className="text-white font-semibold">Conversion Asset Infrastructure</h5>
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed">We build and deploy every conversion asset your funnel needs — forms, pop-ups, landing sections, and email flows — engineered to turn visitors into enrolled students.</p>
                  <div className="pt-3 border-t border-white/10 space-y-1.5">
                    <p className="text-accent-purple text-xs font-semibold">Solves</p>
                    <p className="text-white/40 text-xs leading-relaxed">Eliminates tool paralysis — your conversion infrastructure is built, tested, and live within the first 2 weeks of engagement.</p>
                  </div>
                </div>

                <div className="rounded-2xl p-6 border border-white/10 bg-gradient-to-br from-accent-blue/20 to-transparent space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-accent-blue opacity-50 leading-none">II</span>
                    <h5 className="text-white font-semibold">Stack Integration &amp; Automation</h5>
                  </div>
                  <ul className="space-y-2">
                    {[
                      { label: "Full Stack Integration", desc: "We connect your CRM, email platform, LMS, and analytics tools into a single, synchronized growth system." },
                      { label: "Automated Workflows", desc: "Lead scoring, enrollment triggers, re-engagement flows, and upsell sequences — all automated and running without manual work." },
                    ].map((b) => (
                      <li key={b.label} className="space-y-0.5">
                        <p className="text-white/75 text-sm font-medium">{b.label}</p>
                        <p className="text-white/40 text-xs leading-relaxed">{b.desc}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3 border-t border-white/10 space-y-1.5">
                    <p className="text-accent-blue text-xs font-semibold">Solves</p>
                    <p className="text-white/40 text-xs leading-relaxed">Eliminates subscription waste — every tool in your stack becomes fully operational and contributing to growth.</p>
                  </div>
                </div>

                <div className="rounded-2xl p-6 border border-white/10 bg-gradient-to-br from-accent-peach/15 to-transparent space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-accent-peach opacity-50 leading-none">III</span>
                    <h5 className="text-white font-semibold">Traffic &amp; Visibility Engine</h5>
                  </div>
                  <ul className="space-y-2">
                    {[
                      { label: "Technical SEO", desc: "We optimize your URLs, meta structure, and page speed so your academy ranks where qualified intent already lives." },
                      { label: "Paid & Retargeting Campaigns", desc: "We manage your paid media and retargeting flows to bring qualified visitors back until they convert." },
                    ].map((b) => (
                      <li key={b.label} className="space-y-0.5">
                        <p className="text-white/75 text-sm font-medium">{b.label}</p>
                        <p className="text-white/40 text-xs leading-relaxed">{b.desc}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3 border-t border-white/10 space-y-1.5">
                    <p className="text-accent-peach text-xs font-semibold">Solves</p>
                    <p className="text-white/40 text-xs leading-relaxed">Replaces guesswork with a structured, compounding traffic system that grows organic reach while paid channels fill short-term gaps.</p>
                  </div>
                </div>

                <div className="rounded-2xl p-6 border border-white/10 bg-gradient-to-br from-accent-pink/15 to-transparent space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-accent-pink opacity-50 leading-none">IV</span>
                    <h5 className="text-white font-semibold">Analytics &amp; Revenue Attribution</h5>
                  </div>
                  <ul className="space-y-2">
                    {[
                      { label: "Full Attribution Model", desc: "Every lead, enrollment, and dollar of revenue traced back to its source — so you know exactly what's working." },
                      { label: "Executive Reporting", desc: "Automated weekly and monthly reports delivering CAC, LTV, NRR, and funnel performance directly to your inbox." },
                    ].map((b) => (
                      <li key={b.label} className="space-y-0.5">
                        <p className="text-white/75 text-sm font-medium">{b.label}</p>
                        <p className="text-white/40 text-xs leading-relaxed">{b.desc}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3 border-t border-white/10 space-y-1.5">
                    <p className="text-accent-pink text-xs font-semibold">Solves</p>
                    <p className="text-white/40 text-xs leading-relaxed">Eliminates attribution blindness — every budget decision is backed by clean, actionable data instead of vanity metrics.</p>
                  </div>
                </div>

              </div>

              {/* ROI Measurement */}
              <div className="rounded-2xl border border-accent-purple/25 bg-gradient-to-br from-accent-purple/10 to-transparent px-7 py-6 space-y-4">
                <div className="flex items-center gap-2">
                  <p className="text-accent-purple text-xs font-bold tracking-widest uppercase">Measuring Success</p>
                  <div className="h-px flex-1 bg-accent-purple/20" />
                </div>
                <p className="text-white font-semibold">From &ldquo;impressions&rdquo; to revenue impact.</p>
                <p className="text-white/50 text-sm leading-relaxed">Every outcome is tied directly to business KPIs — not traffic, not open rates, not vanity dashboards.</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                  {[
                    { kpi: "Lower CAC", desc: "Measure the reduction in cost per enrolled student as funnel optimization compounds over time." },
                    { kpi: "Higher LTV", desc: "Track how upsell automations and re-engagement flows expand revenue per student over their lifecycle." },
                    { kpi: "Improved NRR", desc: "Measure net revenue retention as re-enrollment, expansion, and referral programs activate at scale." },
                  ].map((k) => (
                    <div key={k.kpi} className="rounded-xl bg-accent-purple/8 border border-accent-purple/15 p-4 space-y-1.5">
                      <p className="text-white font-semibold text-sm">{k.kpi}</p>
                      <p className="text-white/45 text-xs leading-relaxed">{k.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* The Transformation */}
            <div className="rounded-2xl bg-gradient-to-br from-accent-purple/15 to-accent-blue/10 border border-accent-purple/25 px-8 py-7 space-y-4">
              <p className="text-accent-purple text-xs font-bold tracking-widest uppercase">The Transformation</p>
              <p className="text-white text-lg font-semibold leading-relaxed">
                Imagine your funnel running on autopilot — qualified leads arriving daily, nurture sequences converting them on schedule, and a C-Suite dashboard showing exactly where every dollar went.
              </p>
              <p className="text-white/60 leading-relaxed">
                When your marketing engine runs at full capacity, enrollment becomes predictable. CAC drops. LTV climbs. And growth stops depending on how much manual work your team can squeeze in.
              </p>
              <div className="pt-3 border-t border-white/10">
                <p className="text-white/80 font-semibold">Ready to turn your marketing stack into your strongest growth lever?</p>
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
                <span className="text-gradient-blue-pink">Your Growth Engine</span>
              </h3>
              <p className="text-white/50 max-w-2xl mx-auto">
                Full marketing execution — from infrastructure setup to ongoing campaign management — run by our dedicated squad.
              </p>
            </div>
            <div className="space-y-10">
              {tiers.map((tier, i) => (
                <AnimatedSection key={tier.title} delay={i * 0.1}>
                  <div className="space-y-6">
                    <div className={`rounded-2xl px-8 py-6 flex items-start gap-4 bg-gradient-to-r border ${tier.accentClass}`}>
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 border ${tier.iconClass}`}>
                        <tier.headerIcon className={`w-4 h-4 ${tier.textClass}`} />
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
                Why <span className="text-gradient-blue-pink">Merahki.ai?</span>
              </h3>
              <p className="text-white/50 max-w-2xl mx-auto">
                A dedicated execution squad with proven results across academies, platforms, and industries.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <AnimatedSection key={s.label} delay={i * 0.08}>
                  <div className="glass-card rounded-2xl p-6 text-center space-y-2">
                    <p className="text-4xl font-bold text-gradient-blue-pink">{s.value}</p>
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
                Next Steps to <span className="text-gradient-blue-pink">Launch Your Growth Engine</span>
              </h3>
              <p className="text-white/50">We&apos;re ready to build and run a marketing system that compounds every month.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((s, i) => (
                <AnimatedSection key={s.step} delay={i * 0.1}>
                  <div className="glass-card rounded-2xl p-6 space-y-4 h-full">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold text-gradient-blue-pink leading-none">{s.step}</span>
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
                Start Growing Your Academy <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
