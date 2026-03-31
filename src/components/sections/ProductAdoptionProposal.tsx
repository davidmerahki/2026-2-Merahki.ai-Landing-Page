import AnimatedSection from "@/components/ui/AnimatedSection";
import GlowBackground from "@/components/ui/GlowBackground";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  CalendarCheck,
  MessageSquare,
  FileSignature,
  PlayCircle,
} from "lucide-react";

const tiers = [
  {
    price: "4,575 USD",
    billing: "+ VAT · One-time payment",
    title: "Academy Setup",
    highlight: true,
    items: [
      "Initial setup per course — 1 course per feature or use case to guarantee effectiveness",
      "Guaranteed delivery in 8 weeks",
      "No front-end or back-end development required — turnkey, ready to customize",
      "100 minutes of premium video — production & editing of educational content",
      "Complete program design — up to 12 lessons",
      "Industry experts working on your project",
      "6 interactive H5P learning activities",
      "Design & customization — content tailored to your brand identity",
      "Gamification & behavioral economics — powered by the Octalysis Framework",
      "Education-Led Growth (ELG) Strategy Design — education integrated into your Go-To-Market strategy",
      "CLG Flywheel Design & Activation — transform passionate users into your main growth engine",
    ],
  },
  {
    price: "762 USD",
    billing: "+ VAT · / month · up to 1,000 users",
    title: "Growth & Analytics",
    highlight: false,
    items: [
      "Learning Analytics — every lesson guarantees adoption through measurable, observable behaviors",
      "LMS Platform — your knowledge base becomes a resource that drives growth metrics",
      "Data Integration — virtual machine sends data directly to your preferred visualization tools",
    ],
  },
  {
    price: "400 USD",
    billing: "/ month · up to 1,000 users",
    title: "Mobile App",
    highlight: false,
    items: [
      "iOS & Android App — your content, adaptive and personalized for all types of devices",
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
    tag: "SaaS",
    result: "+34% feature adoption in 60 days",
    detail: "Role-specific onboarding paths and behavioral triggers converted passive sign-ups into power users.",
    color: "from-accent-purple/20",
  },
  {
    tag: "MedTech",
    result: "73,000+ training hours saved",
    detail: "AI-driven onboarding eliminated manual education workflows, scaling adoption across global markets.",
    color: "from-accent-blue/20",
  },
  {
    tag: "B2B Platform",
    result: "−42% early churn",
    detail: "Structured onboarding academy ensured customers reached their first value milestone within week one.",
    color: "from-accent-pink/20",
  },
];

const steps = [
  { icon: CalendarCheck, step: "01", title: "Schedule a Meeting", desc: "Reach out to arrange a conversation at your earliest convenience." },
  { icon: MessageSquare, step: "02", title: "Discuss Your Needs", desc: "Share your onboarding challenges — we'll map the right adoption strategy for your product." },
  { icon: FileSignature, step: "03", title: "Review & Sign", desc: "We'll walk you through the proposal, ensuring you're confident in the program before we begin." },
  { icon: PlayCircle, step: "04", title: "Begin Implementation", desc: "Our team mobilizes to deliver a world-class adoption academy in 8 weeks." },
];

export default function ProductAdoptionProposal() {
  return (
    <section className="relative py-28 px-6" id="product-adoption-proposal">
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
              <span className="text-gradient-peach-purple">Product Adoption &amp; Onboarding</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-1 text-sm text-white/40 mt-2">
              <span><span className="text-white/60 font-medium">Prepared for:</span> Product · Customer Success · Growth</span>
              <span><span className="text-white/60 font-medium">Prepared by:</span> Merahki.ai</span>
            </div>
          </div>
        </AnimatedSection>

        {/* ── The Challenge ── */}
        <AnimatedSection delay={0.1}>
          <div className="space-y-8">

            {/* Header */}
            <div className="text-center space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                The Challenge You Face
              </h3>
              <p className="text-white/40 max-w-xl mx-auto text-sm">
                Users sign up, get confused, and churn — before they ever experience the value your product delivers.
              </p>
            </div>

            {/* Philosophical root cause */}
            <div className="rounded-2xl border border-white/10 bg-white/3 px-8 py-7 space-y-3">
              <p className="text-white/50 text-xs font-bold tracking-widest uppercase">The Root Cause</p>
              <h4 className="text-white text-lg font-bold">
                Access is not the same as mastery.
              </h4>
              <p className="text-white/60 leading-relaxed">
                A sale is only a true win if your customer achieves mastery of your product. The fundamental mistake most companies make is treating education as a post-sale extra rather than the core engine of product value. When customers struggle to realize the value they&apos;ve already paid for, the problem isn&apos;t the product — it&apos;s the absence of a system designed to guide them to success.
              </p>
            </div>

            {/* The Villain */}
            <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 px-8 py-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">The Villain</span>
                <div className="h-px flex-1 bg-orange-500/20" />
              </div>
              <h4 className="text-white text-lg font-bold">Static Onboarding.</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                The traditional one-size-fits-all onboarding model is the real enemy of adoption. It fails in three compounding ways:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                {[
                  { label: "Irrelevance", desc: "Every user is forced through the same generic path regardless of their role, goals, or existing knowledge." },
                  { label: "Stagnation", desc: "Onboarding is treated as a one-and-done event — never evolving as the product or the user's needs change." },
                  { label: "The Content Gap", desc: "Outdated manuals and videos never reflect the current version of the software, leaving users perpetually behind." },
                ].map((v) => (
                  <div key={v.label} className="rounded-xl bg-orange-500/8 border border-orange-500/15 p-4 space-y-2">
                    <p className="text-orange-300 font-semibold text-sm">{v.label}</p>
                    <p className="text-white/50 text-xs leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Three problem dimensions */}
            <div className="space-y-4">
              <p className="text-white/40 text-xs font-bold tracking-widest uppercase text-center">The Three Layers of Impact</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                {/* External: Feature Gap & Churn */}
                <div className="glass-card rounded-2xl p-6 space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold tracking-widest uppercase text-accent-purple opacity-70">External</span>
                    <h4 className="text-white font-semibold">The Feature Gap &amp; Churn</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      { title: "Low Engagement", desc: "Users sign up but only touch a fraction of features, never reaching full adoption or realizing the product's full ROI." },
                      { title: "High Early Churn", desc: "Without a fast path to first value, users abandon before the product has a chance to prove itself." },
                      { title: "Support Overload", desc: "The absence of self-service learning floods CS teams with basic how-to tickets, blocking strategic work." },
                    ].map((p) => (
                      <li key={p.title} className="space-y-0.5">
                        <p className="text-white/80 text-sm font-medium">{p.title}</p>
                        <p className="text-white/45 text-xs leading-relaxed">{p.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Internal: Company frustration */}
                <div className="glass-card rounded-2xl p-6 space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold tracking-widest uppercase text-accent-blue opacity-70">Internal · Company</span>
                    <h4 className="text-white font-semibold">Untapped Potential</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      { title: "Innovation Being Wasted", desc: "Deep frustration that your best features go undiscovered because users simply \"don't get it\" — not for lack of quality, but lack of guidance." },
                      { title: "Manual Management Stress", desc: "Manually identifying stuck users and patching gaps with limited resources is an unsustainable drain on every team involved." },
                      { title: "No ROI Attribution", desc: "Without connecting onboarding to retention and expansion, it's impossible to justify or optimize education investment." },
                    ].map((p) => (
                      <li key={p.title} className="space-y-0.5">
                        <p className="text-white/80 text-sm font-medium">{p.title}</p>
                        <p className="text-white/45 text-xs leading-relaxed">{p.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Internal: User frustration */}
                <div className="glass-card rounded-2xl p-6 space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold tracking-widest uppercase text-accent-peach opacity-70">Internal · User</span>
                    <h4 className="text-white font-semibold">Lost in the Product</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      { title: "Overwhelm & Confusion", desc: "Users feel lost navigating a product that doesn't explain itself — leading to anxiety, avoidance, and eventual abandonment." },
                      { title: "ROI Skepticism", desc: "When users can't find answers in the flow of work, they question whether the product is worth the time investment at all." },
                      { title: "No In-Workflow Support", desc: "Forcing users to leave their workspace to find help disrupts productivity and erodes confidence in the product." },
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

            {/* Hero headline */}
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-purple via-accent-blue to-accent-pink" />
              <div className="narrative-card rounded-2xl pl-10 pr-8 py-9 flex items-start gap-5">
                <span className="text-4xl flex-shrink-0 mt-0.5" role="img" aria-label="rocket">&#x1F680;</span>
                <div className="space-y-1">
                  <h4 className="text-white text-xl md:text-2xl font-bold leading-snug">
                    Most users never make it to their &ldquo;aha!&rdquo; moment.
                  </h4>
                  <p className="text-white/55 text-sm leading-relaxed">
                    Your product solves a real problem — but if users can&apos;t discover that value on their own, they won&apos;t stay long enough to find out. Onboarding is not a welcome email. It&apos;s the most critical stage of your entire revenue engine.
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
              <h4 className="text-white text-lg font-bold">The &ldquo;Adoption Gap.&rdquo;</h4>
              <p className="text-white/65 leading-relaxed">
                The space between &ldquo;signed up&rdquo; and &ldquo;activated&rdquo; is where most SaaS revenue is lost. Every user who churns before reaching value is a <span className="text-red-400 font-semibold">fully paid acquisition cost with zero return</span>. The problem isn&apos;t your product — it&apos;s the absence of a system that guides users to success.
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                At Merahki.ai, we close the adoption gap by transforming onboarding from a one-time event into a <span className="text-white font-medium">continuous, measurable growth system</span> that scales with your product.
              </p>
            </div>

            {/* The Plan */}
            <div className="space-y-6">

              {/* Strategy framing */}
              <div className="text-center space-y-1">
                <p className="text-white/60 text-xs font-bold tracking-widest uppercase">The Plan to close the adoption gap</p>
                <p className="text-white/35 text-xs max-w-lg mx-auto">Transitioning from static access to an AI-native enablement ecosystem — automating the path from new user to power user.</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/3 px-7 py-5 flex items-start gap-4">
                <span className="text-2xl mt-0.5">&#x1F3AF;</span>
                <div className="space-y-1">
                  <p className="text-white font-semibold">The Strategy: Shift from &ldquo;Access&rdquo; to &ldquo;Value Realization&rdquo;</p>
                  <p className="text-white/50 text-sm leading-relaxed">Every user — from their first login — achieves mastery and realizes product value as quickly as possible. The system automates the entire journey from &ldquo;new user&rdquo; to &ldquo;power user,&rdquo; without manual intervention.</p>
                </div>
              </div>

              {/* Four pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                {/* Pillar I */}
                <div className="rounded-2xl p-6 border border-white/10 bg-gradient-to-br from-accent-purple/20 to-transparent space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-accent-purple opacity-50 leading-none">I</span>
                    <h5 className="text-white font-semibold">Dynamic, Role-Specific Onboarding</h5>
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed">Replaces the generic tour with tailored onboarding flows based on each user&apos;s segment, role, and real-time behavior — ensuring maximum relevance from the first login.</p>
                  <div className="pt-3 border-t border-white/10 space-y-1.5">
                    <p className="text-accent-purple text-xs font-semibold">Solves</p>
                    <p className="text-white/40 text-xs leading-relaxed">Eliminates irrelevance by adjusting content dynamically based on the user&apos;s specific role, progress, and behavior — no two onboarding journeys are the same.</p>
                  </div>
                </div>

                {/* Pillar II */}
                <div className="rounded-2xl p-6 border border-white/10 bg-gradient-to-br from-accent-blue/20 to-transparent space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-accent-blue opacity-50 leading-none">II</span>
                    <h5 className="text-white font-semibold">Automated Adoption &amp; Engagement Triggers</h5>
                  </div>
                  <ul className="space-y-2">
                    {[
                      { label: "Feature Adoption Triggers", desc: "Automatically identifies users not engaging with high-value features before disengagement becomes permanent." },
                      { label: "Targeted Campaigns", desc: "Launches automated adoption campaigns that increase awareness and usage of specific tools at the right moment." },
                    ].map((b) => (
                      <li key={b.label} className="space-y-0.5">
                        <p className="text-white/75 text-sm font-medium">{b.label}</p>
                        <p className="text-white/40 text-xs leading-relaxed">{b.desc}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3 border-t border-white/10 space-y-1.5">
                    <p className="text-accent-blue text-xs font-semibold">Solves</p>
                    <p className="text-white/40 text-xs leading-relaxed">Prevents churn by proactively pulling users back into the product before they lose interest — replacing reactive CS with proactive intelligence.</p>
                  </div>
                </div>

                {/* Pillar III */}
                <div className="rounded-2xl p-6 border border-white/10 bg-gradient-to-br from-accent-peach/15 to-transparent space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-accent-peach opacity-50 leading-none">III</span>
                    <h5 className="text-white font-semibold">AI-Driven Resource Creation &amp; Management</h5>
                  </div>
                  <ul className="space-y-2">
                    {[
                      { label: "Creator Agent", desc: "Instantly converts release notes, product guides, and videos into structured onboarding programs — keeping training always current." },
                      { label: "Manager Agent", desc: "Uses natural-language commands to assign onboarding or adoption campaigns to specific audiences based on usage triggers. No manual work." },
                    ].map((b) => (
                      <li key={b.label} className="space-y-0.5">
                        <p className="text-white/75 text-sm font-medium">{b.label}</p>
                        <p className="text-white/40 text-xs leading-relaxed">{b.desc}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3 border-t border-white/10 space-y-1.5">
                    <p className="text-accent-peach text-xs font-semibold">Solves</p>
                    <p className="text-white/40 text-xs leading-relaxed">Eliminates the &ldquo;too slow&rdquo; and &ldquo;too manual&rdquo; failures of legacy systems — training always reflects the current product, with zero content lag.</p>
                  </div>
                </div>

                {/* Pillar IV */}
                <div className="rounded-2xl p-6 border border-white/10 bg-gradient-to-br from-accent-pink/15 to-transparent space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-accent-pink opacity-50 leading-none">IV</span>
                    <h5 className="text-white font-semibold">Just-in-Time, In-Flow Support</h5>
                  </div>
                  <ul className="space-y-2">
                    {[
                      { label: "Learner Agent (AI Tutor)", desc: "A personal coach inside the product — answers feature questions and recommends next steps in real-time, directly within the user's workflow." },
                      { label: "Self-Service Hub", desc: "AI-powered search across all learning and support assets so users get instant answers without ever leaving their workspace." },
                    ].map((b) => (
                      <li key={b.label} className="space-y-0.5">
                        <p className="text-white/75 text-sm font-medium">{b.label}</p>
                        <p className="text-white/40 text-xs leading-relaxed">{b.desc}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3 border-t border-white/10 space-y-1.5">
                    <p className="text-accent-pink text-xs font-semibold">Solves</p>
                    <p className="text-white/40 text-xs leading-relaxed">Reduces support ticket volume and eliminates the friction of &ldquo;stopping work to learn&rdquo; — help lives where the user already is.</p>
                  </div>
                </div>

              </div>

              {/* ROI Measurement */}
              <div className="rounded-2xl border border-accent-purple/25 bg-gradient-to-br from-accent-purple/10 to-transparent px-7 py-6 space-y-4">
                <div className="flex items-center gap-2">
                  <p className="text-accent-purple text-xs font-bold tracking-widest uppercase">Measuring Success</p>
                  <div className="h-px flex-1 bg-accent-purple/20" />
                </div>
                <p className="text-white font-semibold">From &ldquo;completion rates&rdquo; to revenue impact.</p>
                <p className="text-white/50 text-sm leading-relaxed">Every outcome is tied directly to business KPIs — not just learning metrics.</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                  {[
                    { kpi: "Reduced Time-to-Value", desc: "Measure how much faster a user becomes fully productive after onboarding." },
                    { kpi: "Increased Retention", desc: "Track churn reduction driven by deeper product engagement and mastery." },
                    { kpi: "Expansion Opportunities", desc: "Identify ready-to-upgrade users based on their mastery of current features." },
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
                Imagine cutting early churn by 40%, watching feature adoption climb month over month, and freeing your CS team to focus on strategic growth — not how-to tickets.
              </p>
              <p className="text-white/60 leading-relaxed">
                When customers master your product, they don&apos;t just retain — they expand, refer, and become your most credible source of social proof.
              </p>
              <div className="pt-3 border-t border-white/10">
                <p className="text-white/80 font-semibold">Ready to turn onboarding into your strongest growth lever?</p>
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
                A complete ecosystem of technology and talent ready to activate your users — delivered in 8 weeks.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              {tiers.map((tier, i) => (
                <AnimatedSection key={tier.title} delay={i * 0.1}>
                  <div className={`rounded-2xl p-7 space-y-5 h-full flex flex-col ${tier.highlight ? "border border-accent-purple/40 bg-accent-purple/10" : "glass-card"}`}>
                    <div className="space-y-1">
                      <p className={`text-2xl font-bold ${tier.highlight ? "text-gradient-peach-purple" : "text-white"}`}>{tier.price}</p>
                      <p className="text-white/40 text-xs">{tier.billing}</p>
                    </div>
                    <h4 className="text-white font-semibold text-lg border-t border-white/10 pt-4">{tier.title}</h4>
                    <ul className="space-y-3 flex-1">
                      {tier.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-accent-purple flex-shrink-0 mt-0.5" />
                          <span className="text-white/65 text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    {tier.billing.includes("month") && (
                      <p className="text-white/30 text-xs pt-2 border-t border-white/5">$1 USD per additional user / month</p>
                    )}
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
              <p className="text-white/50">We&apos;re ready to build an onboarding system your users will actually complete.</p>
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
                Start Driving Adoption <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
