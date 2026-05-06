import type { Metadata } from "next";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import OurProposal from "@/components/sections/OurProposal";
import LogoCarousel from "@/components/sections/LogoCarousel";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  BookOpen,
  Gamepad2,
  Rocket,
  Headphones,
  BarChart3,
  TrendingUp,
  RefreshCcw,
  Sparkles,
  Star,
  ArrowDownRight,
  Zap,
  Clock,
  TrendingDown,
  EyeOff,
  AlertTriangle,
  GraduationCap,
  Users,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "B2B Continuing Education Outsourcing",
  description:
    "merahki.ai designs, produces, launches, and operates virtual continuing education programs for higher education institutions — powered by AI, behavioral science, and education strategy frameworks. Full-service education operations outsourcing.",
  keywords: [
    "continuing education outsourcing",
    "B2B education operations",
    "virtual continuing education programs",
    "higher education outsourcing",
    "continuing education unit",
    "corporate training programs",
    "education-led growth",
    "B2B training outsourcing",
    "instructional design outsourcing",
    "LMS operations",
    "education strategy",
    "gamification continuing education",
    "Octalysis framework education",
    "learning analytics dashboard",
    "corporate client retention education",
    "education program ROI",
    "AI-powered education",
    "branded mobile learning app",
    "digital credentials higher education",
    "HubSpot Academy alternative",
  ],
  openGraph: {
    title:
      "B2B Continuing Education Outsourcing — Full-Service Education Operations | merahki.ai",
    description:
      "Scale your B2B education line without scaling your team. We design, produce, launch, and operate virtual continuing education programs for your institution. 8 weeks from kickoff to live program.",
    url: "https://merahki.ai/continuing-education",
    type: "website",
  },
};

/* ────────────────────────────── DATA ────────────────────────────── */

const heroStats = [
  { value: "+40%", label: "Avg. completion rate across merahki.ai-operated programs" },
  { value: "3×", label: "Faster than in-house production" },
  { value: "−42%", label: "Reduction in early participant dropout" },
  { value: "8 wks", label: "Guaranteed delivery from kickoff to live program" },
];

const constraints = [
  {
    num: "01",
    icon: AlertTriangle,
    title: "Limited Operational Capacity",
    desc: "Your team manages instructional design, video production, LMS configuration, enrollment workflows, and participant support simultaneously. The bottleneck isn't demand — it's delivery capacity. Every new B2B program competes for the same scarce resources.",
    stat: "50%+ of participant churn traces back to ineffective onboarding (Weber).",
  },
  {
    num: "02",
    icon: TrendingDown,
    title: "Low Completion and Retention Rates",
    desc: "Generic virtual programs lose participants after week two. Without engagement strategies grounded in behavioral economics and gamification, your corporate clients see disappointing outcomes — and they don't renew.",
    stat: "MOOC-style: 12–15% completion. Structured programs: 60–80%. Cohort-based: 85–98%.",
  },
  {
    num: "03",
    icon: Clock,
    title: "Slow Time to Market",
    desc: "From program conception to launch, months pass in cycles of instructional design, video production, LMS setup, enrollment coordination, and stakeholder review. The industry standard is 20 weeks across six phases.",
    stat: "merahki.ai compresses this to 8 weeks — platform, team, and methodology already in place.",
  },
  {
    num: "04",
    icon: EyeOff,
    title: "Invisible ROI",
    desc: "Without learning analytics integrated into business metrics, your continuing education unit cannot demonstrate to corporate clients — or to your own institution — the real value of its programs.",
    stat: "Most units measure only activity (enrollments) without connecting to business outcomes (retention, revenue).",
  },
];

const pillars = [
  {
    icon: Target,
    color: "text-violet-400",
    title: "Education Strategy & Program Architecture",
    tagline: "We design programs engineered for outcomes, not just content.",
    desc: "We begin with a Friction Audit — a structured diagnostic of where your current programs lose participants, create operational friction, and fail to demonstrate value. From the audit, we architect the complete program using Weber's Orchestrated Onboarding, Quick's instructional design principles, and Intellum's Seven Pillars of ELG.",
    includes: [
      "Friction Audit of existing programs or new program brief",
      "Complete program architecture with modular structure",
      "3–5 measurable learning objectives per module (behavioral, evaluable)",
      "Learning pathway design (sequential, free-navigation, or prerequisite-gated)",
      "Format selection per module (video, interactive ebook, assessment, SCORM, live session, H5P)",
      "Monetization model recommendation (Cost Center, Cost Recovery, or Revenue Center)",
    ],
    leadKpi: "Time-to-First-Course: <7 days from enrollment",
    lagKpi: "Program Completion Rate: 60–80% (vs. 12–15% MOOC baseline)",
    timeline: "Weeks 1–4",
  },
  {
    icon: BookOpen,
    color: "text-sky-400",
    title: "Instructional Design & Content Production",
    tagline: "From idea to published course — in weeks, not months.",
    desc: "Our team takes your subject-matter expertise and transforms it into interactive, multimedia learning experiences. We apply Merrill's First Principles, Gagné's Nine Events of Instruction, and Cathy Moore's Action Mapping based on program needs. No frontend or backend development required — turnkey delivery.",
    includes: [
      "Complete instructional design: scripts, storyboards, assessment flows",
      "Up to 100 minutes of premium video per course (production & editing)",
      "Up to 12 lessons designed by dedicated experts",
      "6+ interactive H5P activities per course",
      "Design and customization aligned to your institution's brand identity",
      "AI-assisted content generation: outlines, assessments, ebooks, translations",
      "Interactive video: AI-generated quizzes, summaries, pop-ups, engagement checkpoints",
    ],
    leadKpi: "Course Completion Rate per module",
    lagKpi: "Participant CSAT: 85%+ best-in-class",
    timeline: "Weeks 5–7",
  },
  {
    icon: Gamepad2,
    color: "text-rose-400",
    title: "Gamification & Behavioral Economics",
    tagline: "We turn desired behaviors into habits — not obligations.",
    desc: "We implement gamification structures based on Yu-kai Chou's Octalysis Framework and behavioral economics principles. Not superficial points and badges — we design the core drives that motivate completion, active participation, and re-purchase. Duolingo's 37% DAU/MAU stickiness ratio proves these techniques work at scale.",
    includes: [
      "Octalysis mapping: 8 core drives tailored to each program",
      "Progression system: badges, certifications (Accredible/Credly), leaderboards",
      "Behavioral nudges: contextual reminders, loss aversion triggers, endowment effects",
      "Community-Led Learning: live sessions, breakout rooms, peer review",
      "CLG Flywheel: transform completers into promoters and re-purchase agents",
    ],
    leadKpi: "Engagement Rate (social interactions, active sessions, video replays)",
    lagKpi: "Corporate client retention and re-purchase rate",
    timeline: "Measurable within first cohort (weeks 8–12)",
  },
  {
    icon: Rocket,
    color: "text-amber-400",
    title: "Launch & Enrollment Operations",
    tagline: "From ready program to enrolled participant — frictionless.",
    desc: "We operate the entire go-to-market process: LMS technical configuration, enrollment flows, automated communications, participant onboarding, and coordination with your commercial team. Our academy websites achieve +40% average student registration rate because every design decision is conversion-engineered.",
    includes: [
      "Complete LMS configuration: schools, courses, users, roles, permissions",
      "Conversion-optimized enrollment flows (+40% avg registration rate)",
      "Payment gateway integration (Stripe, PayPal, Shopify)",
      "Automated communications: welcome emails, reminders, push notifications",
      "B2B coordination: bulk enrollment, corporate cohort management, per-company reporting",
      "Branded mobile app (iOS + Android) available in 2–4 weeks",
    ],
    leadKpi: "Student Registration Rate; Time-to-First-Course",
    lagKpi: "Revenue per program",
    timeline: "Week 8 (launch)",
  },
  {
    icon: Headphones,
    color: "text-emerald-400",
    title: "Participant Support",
    tagline: "Support that frees your team — not consumes it.",
    desc: "We provide participant support throughout the entire program lifecycle, combining AI agents with human escalation. The cost per assisted ticket is $25–$35, while self-service costs $1–$4. Our AI-first approach means support that scales logarithmically, not linearly, with participants.",
    includes: [
      "AI Learner Agent: resolves 80% of participant questions automatically",
      "Human second-level support: escalation for complex cases",
      "Technical incident management: access, passwords, compatibility, certificates",
      "Multi-channel support: in-platform, email, chat (Freshchat, Zendesk, Tawk.to)",
      "Feedback loops: post-module NPS surveys embedded in the learning flow (3× higher response)",
    ],
    leadKpi: "Support Ticket Deflection Rate: 45–60%",
    lagKpi: "Participant NPS: +50+ (world-class)",
    timeline: "Immediate from launch",
  },
  {
    icon: BarChart3,
    color: "text-cyan-400",
    title: "Data Analytics & Learning Analytics",
    tagline: "Every decision data-driven. Every result demonstrable.",
    desc: "We implement a complete analytics stack connecting learning activity to business outcomes. The four-layer KPI hierarchy: Leading indicators → Transitional indicators → Lagging business outcomes → Terminal financial metrics. The fatal error is measuring only one layer. We instrument all four.",
    includes: [
      "Learning analytics dashboard: 95+ filters, user progression, exam results",
      "AI-powered insights: natural-language questions about program performance",
      "Automated scheduled reports: automatic distribution to stakeholders",
      "Integration with visualization tools and BI platforms",
      "Cohort analysis: trained-vs-untrained, by company, by cohort, by instructor",
      "CRM integration from day one: trained/untrained tagging for attribution",
    ],
    leadKpi: "Completion Rate, Engagement Rate per module",
    lagKpi: "Customer Education ROI (Avramescu formula: 140–372% ROI)",
    timeline: "Leading indicators from week 1; lagging from month 3; terminal from month 6–12",
  },
];

const courseWeeks = [
  {
    week: "Week 0",
    phase: "Pre-Enrollment (Embark Phase)",
    desc: "Automated welcome sequence sets expectations, introduces the learning path, and creates anticipation. A 5-minute diagnostic assessment personalizes the pathway. Engagement starts before day one.",
    highlights: ["Branded welcome email", "2-minute instructor video", "Diagnostic quiz", "Countdown timer to kickoff"],
  },
  {
    week: "Week 1",
    phase: "Foundations (Kickoff + Adopt Phase)",
    desc: "12-minute interactive video with AI subtitles, auto-generated navigation, and embedded engagement checkpoints. H5P drag-and-drop activities reinforce core concepts. First badge earned and leaderboard visible.",
    highlights: ["Interactive video with quizzes", "H5P activities", "First badge unlocked", "60-min live session with breakout rooms"],
  },
  {
    week: "Week 2–3",
    phase: "Application (Deep Adopt Phase)",
    desc: "Modules follow the same pattern: interactive video → H5P activity → peer discussion → live session. Gamification escalates with team challenges, peer reviews, and the AI Learner Agent available 24/7.",
    highlights: ["Progressive badge collection", "Streak counter", "40+ participant discussions", "AI-powered instant answers"],
  },
  {
    week: "Week 4",
    phase: "Certification & Expand Phase",
    desc: "Comprehensive assessment (30 questions, 75% pass, 60-min limit). Digital certificate via Accredible/Credly, shareable on LinkedIn. Expand phase activates: testimonials, referrals, advanced programs, alumni community.",
    highlights: ["AI-calibrated assessment", "LinkedIn-shareable credential", "Advanced program upsell", "Alumni community invitation"],
  },
];

const beforeAfter = [
  { dimension: "Time to launch", before: "4–6 months", after: "8 weeks guaranteed" },
  { dimension: "Completion rate", before: "20–35%", after: "60–80% (target: 72%+)" },
  { dimension: "Participant NPS", before: "Not measured", after: "+45 to +55 target" },
  { dimension: "Support resolution", before: "Manual, slow", after: "80% auto-deflected by AI" },
  { dimension: "ROI visibility", before: "None", after: "Four-layer KPI dashboard" },
  { dimension: "Mobile access", before: "None", after: "Branded iOS + Android app" },
  { dimension: "Video engagement", before: "Passive playback", after: "Interactive: quizzes, pop-ups, AI subtitles" },
  { dimension: "Gamification", before: "None", after: "Octalysis-powered: badges, streaks, leaderboards" },
  { dimension: "Certification", before: "PDF certificate", after: "Digital credential + LinkedIn share" },
  { dimension: "Analytics", before: "Enrollment counts", after: "95+ filters, AI insights, automated reports" },
];

const outcomes = [
  {
    icon: TrendingUp,
    title: "Revenue",
    color: "text-emerald-400",
    desc: "Launch B2B programs 3× faster than in-house, accelerating pipeline and increasing revenue per quarter. Structured education programs generate +7.6% revenue lift and +35% Customer Lifetime Value.",
  },
  {
    icon: RefreshCcw,
    title: "Corporate Client Retention",
    color: "text-sky-400",
    desc: "Corporate clients that see high completion rates and participant satisfaction renew. −42% reduction in early dropout. +56% improvement in onboarding time and +21% lift in CLV.",
  },
  {
    icon: Sparkles,
    title: "Participant Experience",
    color: "text-violet-400",
    desc: "Interactive AI-powered video, Octalysis gamification, branded mobile app, multi-channel support. Participants compare the experience to HubSpot Academy and Coursera — not a static university LMS.",
  },
  {
    icon: Star,
    title: "Satisfaction (NPS)",
    color: "text-amber-400",
    desc: "NPS measured at every module and at program completion. SaaS benchmark: +31 to +36. Our target: world-class (+50+). Surveys embedded in-flow generate 3× higher response rates.",
  },
  {
    icon: ArrowDownRight,
    title: "Support Ticket Reduction",
    color: "text-rose-400",
    desc: "AI Learner Agent deflects 80% of queries automatically. Cost per assisted ticket: $25–$35. Self-service: $1–$4. A 7–15× cost multiplier that frees your team for strategic work.",
  },
  {
    icon: Zap,
    title: "Agility",
    color: "text-cyan-400",
    desc: "From idea to live program in 8 weeks (guaranteed). No frontend/backend development needed. No hiring instructional designers, video producers, or support engineers.",
  },
];

const phases = [
  {
    num: "01",
    title: "Diagnose & Design",
    timeline: "Weeks 1–4",
    desc: "We run the Friction Audit: identify where participants drop off, where operational friction exists, and where improvement opportunities lie. We interview 10–15 stakeholders and score your current state across six maturity dimensions.",
    deliverables: "Complete program architecture, detailed instructional design, gamification plan, integration stack recommendation, and instrumented KPIs (3 leading + 3 lagging, with formulas and baselines).",
  },
  {
    num: "02",
    title: "Produce & Configure",
    timeline: "Weeks 5–7",
    desc: "We produce all content (video, interactives, assessments), configure the LMS, integrate CRM and analytics tools, design enrollment flows, and prepare the mobile app. Your academic team reviews and approves content — we handle everything operational.",
    deliverables: "First three learning paths mapped to highest-value gaps. Active-voice titles, participant's job-to-be-done focus, knowledge checks between sections.",
  },
  {
    num: "03",
    title: "Launch & Operate",
    timeline: "Week 8 Onward",
    desc: "Soft-launch to a 10–20% pilot cohort to validate content and UX. Capture feedback, iterate, and go live with the full cohort. Ongoing participant support, analytics monitoring, automated reporting, and continuous improvement cycles.",
    deliverables: "Activity metrics from week 1. Engagement metrics by month 3. Business-outcome metrics by month 6–12.",
  },
];

const setupPlans = [
  {
    name: "Starter",
    price: "$2,975",
    popular: false,
    features: [
      "Up to 5 lessons",
      "40 minutes premium video",
      "3 interactive H5P activities",
      "Basic branding (logo, colors)",
      "Strategy brief",
      "Gagné's Nine Events framework",
      "4-week delivery",
      "AI course outline",
    ],
  },
  {
    name: "Professional",
    price: "$4,575",
    popular: true,
    features: [
      "Up to 12 lessons",
      "100 minutes premium video",
      "6 interactive H5P activities",
      "Full brand alignment",
      "Octalysis gamification",
      "ELG + CLG Flywheel strategy",
      "Gagné + Merrill's First Principles",
      "8-week delivery",
      "AI outline + assessments + subtitles",
    ],
  },
  {
    name: "Enterprise",
    price: "$8,500",
    popular: false,
    features: [
      "20+ lessons",
      "200 minutes premium video",
      "12 interactive H5P activities",
      "Full + multi-language",
      "Octalysis + Certification design",
      "Full ELG + CLG + Partner strategy",
      "Gagné + Merrill + Action Mapping",
      "12-week delivery",
      "Dedicated project manager",
      "Full AI suite (ebooks, translations)",
    ],
  },
];

const lmsPlans = [
  {
    name: "Starter",
    price: "$499/mo",
    popular: false,
    features: [
      "500 users included",
      "50+ analytics filters",
      "1 portal (school)",
      "Basic monthly reports",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "$762/mo",
    popular: true,
    features: [
      "1,000 users ($1/user/mo extra)",
      "95+ analytics filters",
      "Up to 3 portals",
      "CRM integration (HubSpot + Zapier/Make)",
      "AI Learner Agent",
      "Scheduled weekly/monthly reports",
      "Webhooks",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "$1,500/mo",
    popular: false,
    features: [
      "5,000 users ($0.75/user/mo extra)",
      "95+ filters with AI-powered insights",
      "Unlimited portals",
      "CRM + SSO/SAML integration",
      "AI Agent (custom-trained on your content)",
      "Custom executive dashboards",
      "Full API + advanced webhooks",
      "Dedicated CSM · 99.9% SLA",
    ],
  },
];

const appPlans = [
  {
    name: "Starter",
    price: "$299/mo",
    popular: false,
    features: ["iOS OR Android", "Offline access", "Push notifications"],
  },
  {
    name: "Professional",
    price: "$400/mo",
    popular: true,
    features: [
      "iOS + Android",
      "1,000 users ($1/user/mo extra)",
      "Offline access + push notifications",
      "In-app purchases + biometric login",
    ],
  },
  {
    name: "Enterprise",
    price: "$750/mo",
    popular: false,
    features: [
      "iOS + Android",
      "5,000 users ($0.75/user/mo extra)",
      "Offline access + push notifications",
      "In-app purchases + biometric login",
      "Dedicated app support",
    ],
  },
];

const yearTotals = [
  { tier: "Starter", setup: "$2,975", lms: "$5,988", app: "$3,588", total: "$12,551" },
  { tier: "Professional", setup: "$4,575", lms: "$9,144", app: "$4,800", total: "$18,519" },
  { tier: "Enterprise", setup: "$8,500", lms: "$18,000", app: "$9,000", total: "$35,500" },
];

const addOns = [
  {
    title: "Partner Academy",
    desc: "For corporate clients that need to train their own ecosystems — distributors, franchisees, resellers. Certified partners generate 6× more revenue (PartnerStack). 353% ROI (PartnerAwesome 2025).",
    tiers: ["From $2,975", "From $5,500", "From $9,500"],
  },
  {
    title: "Certification Program",
    desc: "Validate competency, not just completion. Certifications are the highest-converting engagement mechanic. Meta Blueprint charges $99–$150 per exam across 3M+ course takers.",
    tiers: ["From $2,475", "From $4,500", "From $9,000"],
  },
  {
    title: "Academy Website",
    desc: "Conversion-optimized web presence for your B2B education line. Strategy-first discovery, AI-powered personalization. Average +40% student registration rate.",
    tiers: ["From $1,975", "From $4,500", "From $7,500"],
  },
  {
    title: "ELG Strategy Retainer",
    desc: "Ongoing strategic advisory as your fractional Chief Learning Officer. Monthly reviews, KPI analysis, portfolio optimization, and quarterly executive presentations.",
    tiers: ["$2,500–$6,000 one-time", "$3,000/mo retainer", ""],
  },
];

const testimonials = [
  {
    quote: "merahki.ai allowed us to launch 4 new B2B programs in a single quarter — we used to launch 1 per year. Completion rate went from 35% to 72% and every corporate client renewed their contract.",
    author: "Director of Continuing Education",
    org: "Private university, Colombia",
  },
  {
    quote: "The AI support agent was a game changer. We reduced support queries by 65% and participants report the experience is better than platforms like Coursera.",
    author: "Corporate Programs Coordinator",
    org: "Higher education institution, Mexico",
  },
  {
    quote: "The HubSpot integration let us prove our continuing education unit's ROI with data for the first time. The provost now understands the value of what we do.",
    author: "VP of Academic Extension",
    org: "University, Chile",
  },
];

const audiences = [
  {
    icon: Briefcase,
    title: "Directors of Continuing Education",
    desc: "Launch more programs, faster, without hiring more staff.",
  },
  {
    icon: Users,
    title: "Corporate Program Coordinators",
    desc: "Improve completion rates and satisfaction to renew B2B contracts.",
  },
  {
    icon: Building2,
    title: "VPs of Academic Extension",
    desc: "Demonstrate your unit's ROI to institutional leadership with data.",
  },
  {
    icon: GraduationCap,
    title: "Higher Education Institutions",
    desc: "Compete with bootcamps and corporate platforms without sacrificing your academic advantage.",
  },
];

const industries = [
  "Healthcare",
  "Fintech",
  "Technology",
  "Manufacturing",
  "Retail",
  "Professional Services",
  "Government",
  "Nonprofits",
];

const faqs = [
  {
    q: "Do you replace our academic team?",
    a: "No. merahki.ai is an operational extension of your team. Your Subject-Matter Experts (SMEs) provide knowledge and validate content. We handle instructional design, production, configuration, launch, support, and analytics.",
  },
  {
    q: "What if we already have an LMS?",
    a: "We can work on merahki.ai as the primary platform (recommended for maximum integration and analytics) or integrate with your existing LMS via API and webhooks. We assess this during the Friction Audit.",
  },
  {
    q: "How long does it take to launch the first program?",
    a: "Starter tier: 4 weeks. Professional tier: 8 weeks. Enterprise tier: 12 weeks. All timelines are guaranteed from kickoff to live program and include design, production, configuration, and soft-launch.",
  },
  {
    q: "Which tier should I start with?",
    a: "Launching your first virtual B2B program? Start with Starter ($12,551/year). Ready to compete with HubSpot Academy quality, with gamification and full analytics? Professional is our most popular ($18,519/year). Operating multiple programs across clients and geographies? Enterprise ($35,500/year).",
  },
  {
    q: "Can you operate programs in multiple languages?",
    a: "Yes. merahki.ai supports AI-powered subtitle translation, content localization, and multi-language via Weglot. We operate programs in English, Spanish, Portuguese, and other languages on demand.",
  },
  {
    q: "How do you measure ROI?",
    a: "We implement the four-layer KPI hierarchy: Leading → Transitional → Lagging → Terminal. We use Avramescu's Customer Education ROI formula: (Retention Value + Expansion Value + Support Savings + Acquisition Value − Program Cost) ÷ Program Cost. Reports are generated automatically.",
  },
  {
    q: "What does participant support include?",
    a: "24/7 AI Learner Agent (80% auto-deflection) + human second-level support + technical incident management + in-flow satisfaction surveys.",
  },
  {
    q: "How is this different from hiring freelance instructional designers?",
    a: "Freelancers deliver one-off course design. We deliver the entire lifecycle: strategy → production → launch → operations → analytics → continuous improvement. Plus the technology platform, AI agents, gamification, mobile app, and CRM integration — all included.",
  },
  {
    q: "Do I need the add-on services?",
    a: "Not to start. The core three services (Program Setup + LMS + App) cover the complete lifecycle. Most institutions add Certification within the first 6 months — it's the strongest engagement and re-enrollment driver.",
  },
  {
    q: "Is there a bundle discount?",
    a: "Yes. The 'Full Program Launch' bundle (Professional tier across all three core services) offers an 8% discount — Year 1 total of $17,037 vs. $18,519 à la carte, saving $1,482.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/* ────────────────────────────── COMPONENT ────────────────────────────── */

export default function ContinuingEducationPage() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ═══════════ SECTION 1 — HERO ═══════════ */}
      <section className="relative pt-32 pb-20 px-6 text-center">
        <GlowBackground
          indigoPosition={{ x: "30%", y: "40%" }}
          rustPosition={{ x: "70%", y: "60%" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <AnimatedSection immediate>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">
              B2B Continuing Education Outsourcing
            </span>
          </AnimatedSection>

          <AnimatedSection immediate delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Scale Your B2B Education Line{" "}
              <span className="text-gradient-peach-purple">
                Without Scaling Your Team.
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection immediate delay={0.2}>
            <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
              We design, produce, launch, and operate virtual continuing
              education programs for your institution — powered by AI,
              behavioral science, and the same education strategy frameworks
              used by HubSpot Academy, Salesforce Trailhead, and Asana Academy.
              You bring the academic brand and subject-matter experts. We
              deliver everything else.
            </p>
          </AnimatedSection>

          <AnimatedSection immediate delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://meetings.hubspot.com/david5040?uuid=26d4db2a-ff58-48ff-be04-a74d169db651"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
              >
                Book a Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="https://ulaiz.share.hsforms.com/2E5fbICR4QJejlPcle2rN1w"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold border border-white/15 text-white/80 hover:bg-white/5 hover:text-white transition-all text-sm"
              >
                Download Report <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Stats Bar */}
          <AnimatedSection immediate delay={0.4}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
              {heroStats.map((s) => (
                <div
                  key={s.value}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center"
                >
                  <p className="text-2xl md:text-3xl font-bold text-gradient-peach-purple">
                    {s.value}
                  </p>
                  <p className="text-xs text-white/40 mt-1 leading-tight">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection immediate delay={0.5}>
            <p className="text-xs text-white/30 mt-6 tracking-wide">
              Trusted by continuing education units and corporate universities
              across 8+ industries
            </p>
          </AnimatedSection>
        </div>
      </section>

      <LogoCarousel />

      {/* ═══════════ SECTION 2 — THE PROBLEM ═══════════ */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "20%", y: "30%" }}
          rustPosition={{ x: "80%", y: "70%" }}
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Continuing Education Units Are Trapped in a{" "}
                <span className="text-gradient-peach-purple">
                  Model That Doesn&apos;t Scale.
                </span>
              </h2>
              <p className="text-white/55 mt-6 max-w-3xl mx-auto leading-relaxed">
                Internal teams are stretched across instructional design, content
                production, enrollment management, participant support, and
                reporting — all while preserving the academic rigor that defines
                the institutional brand. The result: programs that take months to
                launch, completion rates that disappoint, and a B2B pipeline
                that never reaches its revenue potential.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {constraints.map((c, i) => (
              <AnimatedSection key={c.num} delay={i * 0.08}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 space-y-3 h-full hover:bg-white/[0.04] transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-accent-purple/60">
                      {c.num}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                      <c.icon className="w-4 h-4 text-white/50" />
                    </div>
                    <h3 className="text-base font-bold text-white">{c.title}</h3>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {c.desc}
                  </p>
                  <p className="text-xs text-accent-purple/70 font-medium leading-relaxed border-t border-white/5 pt-3">
                    {c.stat}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Insight */}
          <AnimatedSection delay={0.4}>
            <div className="mt-12 rounded-2xl border border-accent-purple/20 bg-accent-purple/5 p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Lightbulb className="w-5 h-5 text-accent-purple" />
                <span className="text-sm font-bold text-accent-purple uppercase tracking-widest">
                  The Insight
                </span>
              </div>
              <p className="text-lg font-semibold text-white max-w-2xl mx-auto">
                The problem isn&apos;t your academic content — it&apos;s your
                delivery infrastructure.
              </p>
              <p className="text-white/50 text-sm mt-3 max-w-2xl mx-auto leading-relaxed">
                Most continuing education units have excellent subject-matter
                experts and strong institutional brands. What they lack is an
                operational machine that transforms that expertise into virtual
                learning experiences engineered for completion, satisfaction, and
                corporate client re-purchase.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════ SECTION 3 — THE VILLAIN ═══════════ */}
      <section className="relative py-20 px-6">
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="narrative-card rounded-2xl p-10 space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
                The &ldquo;Capacity Gap.&rdquo;
              </h2>
              <p className="text-white/55 leading-relaxed">
                Continuing education units were designed for an in-person world:
                classrooms, instructors, campus logistics. Digital
                transformation demands they operate like an edtech company —
                with UX design, multimedia production, gamification, real-time
                analytics, and process automation — but with the same team size
                and budget.
              </p>
              <p className="text-white/55 leading-relaxed">
                We&apos;ve seen institutions with decades of reputation lose B2B
                contracts to bootcamps and corporate training platforms that
                operate with one-tenth of their academic expertise but ten times
                their operational velocity.
              </p>
              <div className="border-t border-white/10 pt-5">
                <p className="text-white/80 font-medium leading-relaxed text-center">
                  Your institution deserves to maintain its academic advantage
                  without sacrificing speed or scale.{" "}
                  <span className="text-gradient-peach-purple font-bold">
                    We act as the operational extension
                  </span>{" "}
                  that converts your expertise into learning experiences that
                  retain participants, certify competence, and generate
                  re-purchase.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════ SECTION 4 — THE SOLUTION (Six Pillars) ═══════════ */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "70%", y: "30%" }}
          rustPosition={{ x: "30%", y: "70%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="section-badge text-white/30 mb-4 inline-block">
                Six Service Pillars
              </span>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                A Dedicated Education Operations Team{" "}
                <span className="text-gradient-peach-purple">
                  — Without Hiring One.
                </span>
              </h2>
              <p className="text-white/50 mt-5 max-w-3xl mx-auto leading-relaxed">
                merahki.ai functions as a strategic outsourcing partner for your
                continuing education unit. We don&apos;t replace your academic
                team — we amplify it. We manage the entire lifecycle of your B2B
                virtual programs.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {pillars.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.06}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left: Info */}
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                          <p.icon className={`w-5 h-5 ${p.color}`} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">
                            {p.title}
                          </h3>
                          <p className="text-sm text-white/40 italic">
                            {p.tagline}
                          </p>
                        </div>
                      </div>
                      <p className="text-white/55 text-sm leading-relaxed">
                        {p.desc}
                      </p>
                      <div className="flex flex-wrap gap-3 pt-1">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Lead: {p.leadKpi}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
                          Lag: {p.lagKpi}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-white/40 border border-white/10">
                          {p.timeline}
                        </span>
                      </div>
                    </div>
                    {/* Right: Includes */}
                    <div className="lg:w-[380px] shrink-0">
                      <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-3">
                        What&apos;s included
                      </p>
                      <ul className="space-y-2">
                        {p.includes.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-xs text-white/55"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent-purple shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SECTION 5 — COURSE SHOWCASE ═══════════ */}
      <section className="relative py-24 px-6" id="course-showcase">
        <GlowBackground
          indigoPosition={{ x: "50%", y: "30%" }}
          rustPosition={{ x: "50%", y: "70%" }}
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-4">
              <span className="section-badge text-white/30 mb-4 inline-block">
                Course Showcase
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                See What Your B2B Clients{" "}
                <span className="text-gradient-blue-pink">Actually Get.</span>
              </h2>
              <p className="text-white/50 mt-4 max-w-2xl mx-auto">
                Sample course: &ldquo;Reduce Stockouts by 40% with
                Demand-Driven Planning&rdquo; — 12 hours across 4 weeks,
                blended (self-paced + 3 live sessions).
              </p>
            </div>
          </AnimatedSection>

          {/* Participant Journey Timeline */}
          <div className="mt-14 space-y-6">
            {courseWeeks.map((w, i) => (
              <AnimatedSection key={w.week} delay={i * 0.1}>
                <div className="relative flex gap-6">
                  {/* Timeline dot + line */}
                  <div className="hidden sm:flex flex-col items-center pt-1">
                    <div className="w-10 h-10 rounded-full bg-accent-purple/20 border border-accent-purple/40 flex items-center justify-center text-xs font-bold text-accent-purple shrink-0">
                      {w.week.replace("Week ", "W")}
                    </div>
                    {i < courseWeeks.length - 1 && (
                      <div className="w-px flex-1 bg-white/10 mt-2" />
                    )}
                  </div>
                  {/* Card */}
                  <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="sm:hidden text-xs font-bold text-accent-purple bg-accent-purple/10 px-2 py-0.5 rounded-full">
                        {w.week}
                      </span>
                      <h3 className="text-base font-bold text-white">
                        {w.phase}
                      </h3>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed mb-4">
                      {w.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {w.highlights.map((h) => (
                        <span
                          key={h}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 text-white/50 border border-white/10"
                        >
                          <CheckCircle2 className="w-3 h-3 text-accent-purple" />
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* What Stakeholders See */}
          <AnimatedSection delay={0.5}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 space-y-3">
                <h3 className="text-base font-bold text-white">
                  What the Corporate Client Sees
                </h3>
                <ul className="space-y-2">
                  {[
                    "Real-time cohort progress with radar charts",
                    "Completion funnel with dropout analysis",
                    "Assessment results by module, team, and location",
                    "NPS and satisfaction scores per cohort",
                    "One-page ROI narrative connecting learning to business impact",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-white/55"
                    >
                      <span className="text-accent-purple mt-0.5">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 space-y-3">
                <h3 className="text-base font-bold text-white">
                  What Your Institution&apos;s Leadership Sees
                </h3>
                <ul className="space-y-2">
                  {[
                    "Program ROI by quarter and revenue per program",
                    "Corporate client retention rate (renewed vs. churned)",
                    "Support ticket deflection % and cost savings",
                    "Enrollments, completion, pass rate by program",
                    "Revenue by client, by industry, by program type",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-white/55"
                    >
                      <span className="text-accent-purple mt-0.5">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Before / After */}
          <AnimatedSection delay={0.6}>
            <div className="mt-14">
              <h3 className="text-xl font-bold text-white text-center mb-6">
                Before / After Comparison
              </h3>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
                <div className="grid grid-cols-3 text-xs font-bold uppercase tracking-widest text-white/30 border-b border-white/10 px-5 py-3">
                  <span>Dimension</span>
                  <span>Before (In-House)</span>
                  <span>After (merahki.ai)</span>
                </div>
                {beforeAfter.map((row, i) => (
                  <div
                    key={row.dimension}
                    className={`grid grid-cols-3 text-sm px-5 py-3 ${
                      i % 2 === 0 ? "bg-white/[0.01]" : ""
                    } ${
                      i < beforeAfter.length - 1
                        ? "border-b border-white/5"
                        : ""
                    }`}
                  >
                    <span className="text-white/70 font-medium text-xs">
                      {row.dimension}
                    </span>
                    <span className="text-white/35 text-xs">{row.before}</span>
                    <span className="text-emerald-400/80 text-xs font-medium">
                      {row.after}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════ SECTION 6 — BUSINESS OUTCOMES ═══════════ */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "60%", y: "40%" }}
          rustPosition={{ x: "30%", y: "60%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                One Service.{" "}
                <span className="text-gradient-peach-purple">
                  Six Business Outcomes.
                </span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {outcomes.map((o, i) => (
              <AnimatedSection key={o.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 space-y-3 h-full hover:bg-white/[0.04] transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                      <o.icon className={`w-5 h-5 ${o.color}`} />
                    </div>
                    <h3 className="text-base font-bold text-white">
                      {o.title}
                    </h3>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {o.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SECTION 7 — HOW IT WORKS ═══════════ */}
      <section className="relative py-24 px-6">
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                From Idea to Live Program:{" "}
                <span className="text-gradient-blue-pink">
                  Three Clear Phases.
                </span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {phases.map((p, i) => (
              <AnimatedSection key={p.num} delay={i * 0.12}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center">
                        <span className="text-xl font-bold text-accent-purple">
                          {p.num}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-bold text-white">
                          {p.title}
                        </h3>
                        <span className="text-xs font-bold text-white/30 uppercase tracking-widest bg-white/5 px-2.5 py-1 rounded-full">
                          {p.timeline}
                        </span>
                      </div>
                      <p className="text-white/55 text-sm leading-relaxed">
                        {p.desc}
                      </p>
                      <p className="text-xs text-white/40 border-t border-white/5 pt-3">
                        <span className="font-semibold text-white/55">
                          Deliverables:
                        </span>{" "}
                        {p.deliverables}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SECTION 8 — PLANS & PRICING ═══════════ */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "40%", y: "30%" }}
          rustPosition={{ x: "60%", y: "70%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                Choose the Right Plan{" "}
                <span className="text-gradient-peach-purple">
                  for Your Institution.
                </span>
              </h2>
              <p className="text-white/50 mt-4 max-w-2xl mx-auto">
                Three tiers from launching a first pilot program to operating a
                full B2B academy at scale. Every tier includes merahki.ai&apos;s
                methodology, platform, and operational support.
              </p>
            </div>
          </AnimatedSection>

          {/* 8A — Program Setup */}
          <AnimatedSection delay={0.1}>
            <div className="mb-16">
              <h3 className="text-xl font-bold text-white mb-2">
                Program Setup{" "}
                <span className="text-white/40 text-sm font-normal">
                  (One-Time per Course)
                </span>
              </h3>
              <p className="text-white/40 text-sm mb-6">
                Each course is a self-contained learning experience. Multiple
                courses compose a program or learning path.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {setupPlans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`rounded-2xl p-7 border space-y-4 h-full flex flex-col ${
                      plan.popular
                        ? "border-accent-purple/50 bg-accent-purple/5"
                        : "border-white/10 bg-white/[0.02]"
                    }`}
                  >
                    {plan.popular && (
                      <span className="inline-flex self-start items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-accent-purple/20 text-accent-purple">
                        Most Popular
                      </span>
                    )}
                    <h4 className="text-lg font-bold text-white">
                      {plan.name}
                    </h4>
                    <p className="text-2xl font-bold text-gradient-peach-purple">
                      {plan.price}{" "}
                      <span className="text-xs text-white/30 font-normal">
                        + VAT
                      </span>
                    </p>
                    <ul className="space-y-2 flex-1">
                      {plan.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-xs text-white/60"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-purple shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* 8B — Monthly Operations */}
          <AnimatedSection delay={0.15}>
            <div className="mb-16">
              <h3 className="text-xl font-bold text-white mb-2">
                Monthly Operations{" "}
                <span className="text-white/40 text-sm font-normal">
                  (LMS Platform)
                </span>
              </h3>
              <p className="text-white/40 text-sm mb-6">
                The operational backbone: LMS, analytics, integrations, and
                support infrastructure.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {lmsPlans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`rounded-2xl p-7 border space-y-4 h-full flex flex-col ${
                      plan.popular
                        ? "border-accent-purple/50 bg-accent-purple/5"
                        : "border-white/10 bg-white/[0.02]"
                    }`}
                  >
                    {plan.popular && (
                      <span className="inline-flex self-start items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-accent-purple/20 text-accent-purple">
                        Most Popular
                      </span>
                    )}
                    <h4 className="text-lg font-bold text-white">
                      {plan.name}
                    </h4>
                    <p className="text-2xl font-bold text-gradient-peach-purple">
                      {plan.price}{" "}
                      <span className="text-xs text-white/30 font-normal">
                        + VAT
                      </span>
                    </p>
                    <ul className="space-y-2 flex-1">
                      {plan.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-xs text-white/60"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-purple shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* 8C — Mobile App */}
          <AnimatedSection delay={0.2}>
            <div className="mb-16">
              <h3 className="text-xl font-bold text-white mb-2">
                Branded Mobile App{" "}
                <span className="text-white/40 text-sm font-normal">
                  (Optional)
                </span>
              </h3>
              <p className="text-white/40 text-sm mb-6">
                Your content, your brand, on every device. App users generate
                311% more revenue and 10× user growth compared to web-only.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {appPlans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`rounded-2xl p-7 border space-y-4 h-full flex flex-col ${
                      plan.popular
                        ? "border-accent-purple/50 bg-accent-purple/5"
                        : "border-white/10 bg-white/[0.02]"
                    }`}
                  >
                    {plan.popular && (
                      <span className="inline-flex self-start items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-accent-purple/20 text-accent-purple">
                        Most Popular
                      </span>
                    )}
                    <h4 className="text-lg font-bold text-white">
                      {plan.name}
                    </h4>
                    <p className="text-2xl font-bold text-gradient-peach-purple">
                      {plan.price}{" "}
                      <span className="text-xs text-white/30 font-normal">
                        + VAT
                      </span>
                    </p>
                    <ul className="space-y-2 flex-1">
                      {plan.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-xs text-white/60"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-purple shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* 8D — Year 1 Total Investment */}
          <AnimatedSection delay={0.25}>
            <div className="mb-16">
              <h3 className="text-xl font-bold text-white mb-6">
                Year 1 Total Investment
              </h3>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
                <div className="grid grid-cols-5 text-xs font-bold uppercase tracking-widest text-white/30 border-b border-white/10 px-5 py-3">
                  <span>Tier</span>
                  <span>Setup</span>
                  <span>LMS (12 mo)</span>
                  <span>App (12 mo)</span>
                  <span>Year 1 Total</span>
                </div>
                {yearTotals.map((row, i) => (
                  <div
                    key={row.tier}
                    className={`grid grid-cols-5 text-sm px-5 py-3.5 ${
                      i % 2 === 0 ? "bg-white/[0.01]" : ""
                    } ${
                      i < yearTotals.length - 1
                        ? "border-b border-white/5"
                        : ""
                    }`}
                  >
                    <span className="text-white/70 font-semibold text-xs">
                      {row.tier}
                    </span>
                    <span className="text-white/50 text-xs">{row.setup}</span>
                    <span className="text-white/50 text-xs">{row.lms}</span>
                    <span className="text-white/50 text-xs">{row.app}</span>
                    <span className="text-white font-bold text-xs">
                      {row.total}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* 8E — Recommended Bundle */}
          <AnimatedSection delay={0.3}>
            <div className="mb-16 rounded-2xl border border-accent-purple/30 bg-accent-purple/5 p-8">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-accent-purple" />
                <h3 className="text-xl font-bold text-white">
                  Recommended: &ldquo;Full Program Launch&rdquo; Bundle
                </h3>
              </div>
              <p className="text-white/55 text-sm mb-6 max-w-2xl">
                The most common package for continuing education units launching
                their first serious B2B program. Professional tier across all
                three services with an 8% discount.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center">
                  <p className="text-xs text-white/30 uppercase tracking-widest mb-1">
                    Program Setup
                  </p>
                  <p className="text-lg font-bold text-white">$4,209</p>
                  <p className="text-xs text-white/30 line-through">
                    $4,575
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center">
                  <p className="text-xs text-white/30 uppercase tracking-widest mb-1">
                    LMS + App Monthly
                  </p>
                  <p className="text-lg font-bold text-white">$1,069/mo</p>
                  <p className="text-xs text-white/30 line-through">
                    $1,162/mo
                  </p>
                </div>
                <div className="rounded-xl border border-accent-purple/30 bg-accent-purple/10 p-5 text-center">
                  <p className="text-xs text-accent-purple uppercase tracking-widest mb-1 font-bold">
                    Year 1 Total
                  </p>
                  <p className="text-lg font-bold text-gradient-peach-purple">
                    $17,037
                  </p>
                  <p className="text-xs text-emerald-400 font-semibold">
                    Save $1,482
                  </p>
                </div>
              </div>
              <Link
                href="https://meetings.hubspot.com/david5040?uuid=26d4db2a-ff58-48ff-be04-a74d169db651"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm bg-accent-purple text-white hover:bg-accent-purple/85 transition-all"
              >
                Book a Demo to Lock In Bundle Pricing{" "}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          {/* 8F — Add-On Services */}
          <AnimatedSection delay={0.35}>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Add-On Services
              </h3>
              <p className="text-white/40 text-sm mb-6">
                Specialized services that extend the value of your B2B education
                line. Available as add-ons to any tier.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {addOns.map((addon) => (
                  <div
                    key={addon.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-3 hover:bg-white/[0.04] transition-colors"
                  >
                    <h4 className="text-base font-bold text-white">
                      {addon.title}
                    </h4>
                    <p className="text-white/45 text-xs leading-relaxed">
                      {addon.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {addon.tiers
                        .filter(Boolean)
                        .map((t, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium text-white/50 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full"
                          >
                            {["Starter", "Professional", "Enterprise"][i]}:{" "}
                            {t}
                          </span>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════ SECTION 9 — SOCIAL PROOF ═══════════ */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "50%", y: "50%" }}
          rustPosition={{ x: "50%", y: "30%" }}
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold">
                Real Results.{" "}
                <span className="text-gradient-peach-purple">
                  Real Institutions.
                </span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 space-y-4 h-full flex flex-col">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className="w-3.5 h-3.5 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed flex-1 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="border-t border-white/5 pt-3">
                    <p className="text-sm font-semibold text-white">
                      {t.author}
                    </p>
                    <p className="text-xs text-white/35">{t.org}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Results Table */}
          <AnimatedSection delay={0.4}>
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
              <div className="grid grid-cols-3 text-xs font-bold uppercase tracking-widest text-white/30 border-b border-white/10 px-5 py-3">
                <span>Client</span>
                <span>Result</span>
                <span>Detail</span>
              </div>
              {[
                {
                  client: "University (Colombia)",
                  result: "+40% completion rate",
                  detail:
                    "Corporate programs with Octalysis gamification + interactive video",
                },
                {
                  client: "Higher Ed (Mexico)",
                  result: "−65% support tickets",
                  detail: "AI Learner Agent + integrated knowledge base",
                },
                {
                  client: "University (Chile)",
                  result: "3× programs/quarter",
                  detail: "Full outsourcing of production + operations",
                },
              ].map((row, i) => (
                <div
                  key={row.client}
                  className={`grid grid-cols-3 text-sm px-5 py-3 ${
                    i % 2 === 0 ? "bg-white/[0.01]" : ""
                  } ${i < 2 ? "border-b border-white/5" : ""}`}
                >
                  <span className="text-white/70 font-medium text-xs">
                    {row.client}
                  </span>
                  <span className="text-emerald-400/80 font-semibold text-xs">
                    {row.result}
                  </span>
                  <span className="text-white/45 text-xs">{row.detail}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════ SECTION 10 — WHO THIS IS FOR ═══════════ */}
      <section className="relative py-24 px-6">
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold">
                Designed for Continuing Education Units{" "}
                <span className="text-gradient-blue-pink">
                  Ready to Scale.
                </span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            {audiences.map((a, i) => (
              <AnimatedSection key={a.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 flex items-start gap-4 hover:bg-white/[0.04] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-accent-purple/15 flex items-center justify-center shrink-0">
                    <a.icon className="w-5 h-5 text-accent-purple" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {a.title}
                    </h3>
                    <p className="text-white/50 text-sm mt-1">{a.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="text-center">
              <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-4">
                Industries Where Corporate Clients Demand Training
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {industries.map((ind) => (
                  <span
                    key={ind}
                    className="px-4 py-1.5 rounded-full text-xs font-medium text-white/50 border border-white/10 bg-white/[0.03]"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════ SECTION 11 — FAQs ═══════════ */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "30%", y: "50%" }}
          rustPosition={{ x: "70%", y: "50%" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold">
                Everything You Need to{" "}
                <span className="text-gradient-peach-purple">Know.</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors">
                  <h3 className="text-sm font-bold text-white mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SECTION 12 — FINAL CTA ═══════════ */}
      <section className="relative py-24 px-6 text-center">
        <GlowBackground
          indigoPosition={{ x: "50%", y: "50%" }}
          rustPosition={{ x: "30%", y: "60%" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold">
              Stop Competing{" "}
              <span className="text-gradient-peach-purple">
                With Your Hands Tied.
              </span>
            </h2>
            <p className="text-white/50 mt-4 leading-relaxed max-w-xl mx-auto">
              Your institution has the academic expertise, the brand, and the
              reputation. What&apos;s missing is an operational machine that
              converts that capital into B2B virtual programs that generate
              revenue, retention, and reputation. merahki.ai is that machine.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Link
              href="https://meetings.hubspot.com/david5040?uuid=26d4db2a-ff58-48ff-be04-a74d169db651"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all"
            >
              Book a Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap gap-4 justify-center text-xs text-white/35 mt-4">
              <span>30-minute personalized walkthrough</span>
              <span>·</span>
              <span>Talk to an education strategy expert</span>
              <span>·</span>
              <span>Implementation roadmap included</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.25}>
            <p className="text-lg font-semibold text-white/70 mt-6">
              Scale your B2B continuing education.{" "}
              <span className="text-gradient-peach-purple">
                We operate. You grow.
              </span>
            </p>
          </AnimatedSection>
        </div>
      </section>

      <OurProposal />

      <ContactSection
        heading="Scale your continuing education"
        subheading="See how merahki.ai helps higher education institutions launch, operate, and grow B2B virtual programs — from first pilot to full academy."
      />
    </div>
  );
}
