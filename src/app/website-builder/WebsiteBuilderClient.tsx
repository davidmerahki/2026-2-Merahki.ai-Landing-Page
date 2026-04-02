"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import GlowBackground from "@/components/ui/GlowBackground";
import ContactSection from "@/components/sections/ContactSection";
import LogoCarousel from "@/components/sections/LogoCarousel";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  PenTool,
  Layers,
  Layout,
  Code2,
  Sparkles,
  Plug,
  Rocket,
  Zap,
  ShieldCheck,
  HeartHandshake,
  CheckCircle,
  BarChart2,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";

const stats = [
  { value: "+120", label: "Academies delivered" },
  { value: "3×", label: "Faster than in-house" },
  { value: "+40%", label: "Avg. student registration rate" },
];

const designFeatures = [
  { icon: Compass, title: "Strategy-first discovery", desc: "We audit your brand, audience, and growth goals before a single pixel is placed." },
  { icon: PenTool, title: "Conversion-led UX design", desc: "Wireframes and prototypes engineered to turn visitors into enrolled students." },
  { icon: Layers, title: "Brand-aligned visual identity", desc: "Every element reflects your brand — from typography to color system to micro-interactions." },
  { icon: Layout, title: "Content architecture", desc: "Structured information hierarchy that guides learners toward registration at every step." },
];

const buildFeatures = [
  { icon: Code2, title: "Custom development", desc: "Fully custom-coded, performance-optimized academy websites — no templates, no compromises." },
  { icon: Sparkles, title: "AI-powered personalization", desc: "Smart display logic that adapts to each visitor's profile, intent, and behavior." },
  { icon: Plug, title: "Integrations & automations", desc: "CRM, payment, analytics, and LMS connections built in from day one — fully wired up." },
];

const launchFeatures = [
  { icon: Rocket, title: "Managed deployment", desc: "We handle hosting, DNS, and go-live — zero technical lift required on your end." },
  { icon: Zap, title: "Performance optimization", desc: "Core Web Vitals, image compression, and adaptive loading pre-configured at launch." },
  { icon: TrendingUp, title: "Post-launch support", desc: "Ongoing maintenance, A/B testing, and iteration to keep your academy growing." },
];

const proofPoints = [
  { icon: CheckCircle, text: "2–4 week average launch cycle" },
  { icon: Users, text: "Dedicated expert team for every project" },
  { icon: Award, text: "Full asset & IP ownership transferred to you" },
];

const standardFeatures = [
  { icon: Zap, title: "Always-on performance", desc: "99.9% uptime SLA with globally distributed infrastructure and instant failover." },
  { icon: ShieldCheck, title: "Security & compliance", desc: "HTTPS enforced, GDPR-ready, and encrypted data handling baked into every build." },
  { icon: HeartHandshake, title: "Expert-led advisory", desc: "A dedicated success partner guides strategy, reviews metrics, and drives ongoing improvement." },
];

const testimonials = [
  { quote: "The merahki.ai team delivered our academy in 3 weeks. Student registration went up 52% in the first month.", name: "Laura M.", role: "VP of Customer Success, SaaS Co." },
  { quote: "We tried to build this in-house for 6 months. merahki.ai shipped a better product in 4 weeks.", name: "Carlos R.", role: "Chief Learning Officer, Healthcare Group" },
  { quote: "The conversion-focused design made a real difference — our sign-up rate doubled after launch.", name: "Sofia T.", role: "Head of Partnerships, Fintech Platform" },
  { quote: "Not just a website — a full growth engine. Our education program became a pipeline driver overnight.", name: "James K.", role: "Director of Revenue, Tech Agency" },
];

const faqs = [
  { question: "What's included in the website creation service?", answer: "Every engagement includes strategic discovery, UX wireframing, visual design, full custom development, integrations setup, performance optimization, managed deployment, and 30 days of post-launch support." },
  { question: "How long does the entire process take?", answer: "Most projects launch within 2–4 weeks from kickoff. Complex multi-course academies with custom integrations may take 6–8 weeks. We'll scope the timeline accurately during discovery." },
  { question: "Do I need any technical knowledge?", answer: "None at all. You provide your brand assets, content goals, and strategic direction — our team handles every technical aspect from design through deployment." },
  { question: "Can you migrate my existing academy to merahki.ai?", answer: "Yes. We regularly migrate academies from other platforms, including course content, learner data, enrollments, and payment records. Migration is scoped case-by-case during discovery." },
  { question: "What happens after the site launches?", answer: "You'll receive 30 days of post-launch support included in every project. After that, we offer ongoing growth retainers covering A/B testing, analytics reviews, conversion improvements, and new feature builds." },
];

export default function WebsiteBuilderClient() {
  const { scrollY } = useScroll();

  // Hero parallax layers
  const card1Y = useTransform(scrollY, [0, 600], [0, -130]);
  const card2Y = useTransform(scrollY, [0, 600], [0, -70]);
  const card3Y = useTransform(scrollY, [0, 600], [0, -180]);
  const glowY  = useTransform(scrollY, [0, 600], [0, -60]);

  // "Grow your academy" section parallax
  const growRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: growProgress } = useScroll({ target: growRef, offset: ["start end", "end start"] });
  const imageParallax = useTransform(growProgress, [0, 1], [60, -60]);
  const textParallax  = useTransform(growProgress, [0, 1], [20, -20]);

  // Sticky tab — detect which panel is active
  const designRef = useRef<HTMLDivElement>(null);
  const buildRef  = useRef<HTMLDivElement>(null);
  const launchRef = useRef<HTMLDivElement>(null);

  const designInView = useInView(designRef, { margin: "-30% 0px -50% 0px" });
  const buildInView  = useInView(buildRef,  { margin: "-30% 0px -50% 0px" });
  const launchInView = useInView(launchRef, { margin: "-30% 0px -50% 0px" });

  const activeTab = launchInView ? "launch" : buildInView ? "build" : "design";

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const stagger = (i: number) => ({ duration: 0.55, delay: i * 0.1, ease: "easeOut" as const });

  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 px-6 min-h-[90vh] flex items-center">
        <motion.div style={{ y: glowY }} className="absolute inset-0 pointer-events-none">
          <GlowBackground indigoPosition={{ x: "35%", y: "45%" }} rustPosition={{ x: "68%", y: "55%" }} />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12">

          {/* Text */}
          <div className="flex-1 space-y-7 max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase"
            >
              Website Creation Service
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight"
            >
              Deliver{" "}
              <span className="text-gradient-blue-pink">conversion-first</span>{" "}
              academy websites to your education-led growth strategy.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/60 leading-relaxed"
            >
              We build conversion-first academy websites from the ground up. Our expert team handles the entire lifecycle — from strategic design to technical deployment — ensuring your platform is optimized for maximum student registration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
              >
                Book a Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Floating parallax cards */}
          <div className="flex-1 relative h-[420px] hidden lg:block">
            {/* Card 1 — dashboard mockup */}
            <motion.div
              style={{ y: card1Y }}
              className="absolute top-0 right-8 w-64 glass-card rounded-2xl p-5 shadow-2xl border border-white/10"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-accent-purple/20 flex items-center justify-center">
                  <BarChart2 className="w-4 h-4 text-accent-purple" />
                </div>
                <span className="text-white/70 text-xs font-medium">Academy Analytics</span>
              </div>
              <p className="text-3xl font-bold text-white">+52%</p>
              <p className="text-white/40 text-xs mt-1">Student registrations after launch</p>
              <div className="mt-3 h-1 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-accent-purple to-accent-pink" />
              </div>
            </motion.div>

            {/* Card 2 — enrollment badge */}
            <motion.div
              style={{ y: card2Y }}
              className="absolute top-40 left-0 w-52 glass-card rounded-2xl p-4 shadow-xl border border-white/10"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-full bg-accent-blue/20 flex items-center justify-center">
                  <CheckCircle className="w-3.5 h-3.5 text-accent-blue" />
                </div>
                <span className="text-white/60 text-xs">New enrollment</span>
              </div>
              <p className="text-white font-semibold text-sm">Customer Academy Live</p>
              <p className="text-white/40 text-xs mt-1">Launched in 18 days</p>
            </motion.div>

            {/* Card 3 — metric pill */}
            <motion.div
              style={{ y: card3Y }}
              className="absolute bottom-12 right-16 glass-card rounded-xl px-4 py-3 shadow-xl border border-white/10 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-accent-peach/20 flex items-center justify-center flex-shrink-0">
                <Zap className="w-4 h-4 text-accent-peach" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">94%</p>
                <p className="text-white/40 text-xs">Avg. completion rate</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <LogoCarousel />

      {/* ── Stats Bar ── */}
      <section className="py-12 px-6 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 gap-8 text-center"
          >
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={stagger(i)} className="space-y-1">
                <p className="text-3xl md:text-4xl font-bold text-gradient-blue-pink">{stat.value}</p>
                <p className="text-white/50 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Sticky Tab Nav ── */}
      <div className="sticky top-16 z-30 flex justify-center py-4 px-6 bg-void/80 backdrop-blur-md border-b border-white/5">
        <div className="flex gap-2 bg-white/5 border border-white/10 rounded-full p-1">
          {[
            { id: "design", label: "Design", ref: designRef },
            { id: "build",  label: "Build",  ref: buildRef  },
            { id: "launch", label: "Launch", ref: launchRef },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollTo(tab.ref)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-white text-black"
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Design Panel ── */}
      <section ref={designRef} id="design" className="relative py-28 px-6 scroll-mt-32">
        <GlowBackground indigoPosition={{ x: "20%", y: "40%" }} rustPosition={{ x: "80%", y: "60%" }} />
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Design with <span className="text-gradient-blue-pink">purpose and precision</span>
            </h2>
            <p className="text-white/50 mt-4 max-w-2xl mx-auto">Every design decision is rooted in conversion strategy — not aesthetics alone.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {designFeatures.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={stagger(i)} className="glass-card rounded-2xl p-8 space-y-4">
                <div className="w-11 h-11 rounded-xl bg-accent-purple/20 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-accent-purple" />
                </div>
                <h3 className="text-white font-bold text-lg">{f.title}</h3>
                <p className="text-white/55 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Build Panel ── */}
      <section ref={buildRef} id="build" className="relative py-28 px-6 scroll-mt-32">
        <GlowBackground indigoPosition={{ x: "80%", y: "40%" }} rustPosition={{ x: "20%", y: "60%" }} />
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Built custom. <span className="text-gradient-blue-pink">Built to perform.</span>
            </h2>
            <p className="text-white/50 mt-4 max-w-2xl mx-auto">No templates. No shortcuts. Every line of code written to maximize speed, reliability, and conversion.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {buildFeatures.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={stagger(i)} className="glass-card rounded-2xl p-8 space-y-4">
                <div className="w-11 h-11 rounded-xl bg-accent-blue/20 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-accent-blue" />
                </div>
                <h3 className="text-white font-bold text-lg">{f.title}</h3>
                <p className="text-white/55 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Launch Panel ── */}
      <section ref={launchRef} id="launch" className="relative py-28 px-6 scroll-mt-32">
        <GlowBackground indigoPosition={{ x: "50%", y: "50%" }} rustPosition={{ x: "80%", y: "20%" }} />
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Launch fast. <span className="text-gradient-blue-pink">Grow continuously.</span>
            </h2>
            <p className="text-white/50 mt-4 max-w-2xl mx-auto">We manage every technical aspect of deployment so you can focus entirely on your learners.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {launchFeatures.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={stagger(i)} className="glass-card rounded-2xl p-8 space-y-4">
                <div className="w-11 h-11 rounded-xl bg-accent-peach/20 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-accent-peach" />
                </div>
                <h3 className="text-white font-bold text-lg">{f.title}</h3>
                <p className="text-white/55 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Grow Your Academy (parallax row) ── */}
      <section ref={growRef} className="relative py-28 px-6 overflow-hidden">
        <GlowBackground indigoPosition={{ x: "30%", y: "50%" }} rustPosition={{ x: "70%", y: "40%" }} />
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">

          <motion.div style={{ y: textParallax }} className="flex-1 space-y-7">
            <motion.h2 initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold">
              Grow your academy,{" "}
              <span className="text-gradient-blue-pink">not your overhead</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-white/60 text-lg leading-relaxed">
              You focus on your education strategy. We handle everything that gets it online.
            </motion.p>
            <ul className="space-y-4">
              {proofPoints.map((p, i) => (
                <motion.li key={p.text} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={stagger(i + 1)} className="flex items-center gap-3">
                  <p.icon className="w-5 h-5 text-accent-purple flex-shrink-0" />
                  <span className="text-white/70">{p.text}</span>
                </motion.li>
              ))}
            </ul>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
              <Link
                href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
              >
                Start your project <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div style={{ y: imageParallax }} className="flex-1 w-full">
            <div className="rounded-2xl border border-white/10 bg-white/5 shadow-2xl aspect-[16/10] flex items-center justify-center">
              <div className="text-center space-y-2 pointer-events-none">
                <Layout className="w-10 h-10 text-white/15 mx-auto" />
                <p className="text-white/20 text-xs tracking-widest uppercase">Image coming soon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Professional Standard ── */}
      <section className="relative py-24 px-6">
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              The professional standard for{" "}
              <span className="text-gradient-blue-pink">academy websites</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {standardFeatures.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={stagger(i)} className="glass-card rounded-2xl p-8 space-y-4">
                <div className="w-11 h-11 rounded-xl bg-accent-purple/20 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-accent-purple" />
                </div>
                <h3 className="text-white font-bold text-lg">{f.title}</h3>
                <p className="text-white/55 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="relative py-24 px-6 overflow-hidden">
        <GlowBackground indigoPosition={{ x: "60%", y: "50%" }} rustPosition={{ x: "20%", y: "30%" }} />
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Trusted by those who build with education</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={stagger(i)} className="glass-card rounded-2xl p-6 space-y-4 flex flex-col">
                <p className="text-white/65 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative py-24 px-6">
        <GlowBackground indigoPosition={{ x: "20%", y: "50%" }} rustPosition={{ x: "80%", y: "60%" }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">FAQs</h2>
            <p className="text-white/50 mt-3">Everything you need to know about our website creation service</p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="space-y-3">
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
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 px-6 text-center">
        <GlowBackground indigoPosition={{ x: "50%", y: "50%" }} rustPosition={{ x: "70%", y: "40%" }} />
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="section-badge text-white/30 mb-2 inline-block">Only with merahki.ai</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Start building your{" "}
              <span className="text-gradient-blue-pink">academy today</span>
            </h2>
            <p className="text-white/50 mt-4 leading-relaxed">
              A conversion-first website, built by education growth experts — from strategy to launch in weeks, not months.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
            <Link
              href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all"
            >
              Book a Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <ContactSection
        heading="Let's build your academy website"
        subheading="Tell us about your education strategy and we'll design, build, and launch a conversion-first academy site — from scratch."
      />
    </div>
  );
}
