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
  { value: "+120", label: "Academias entregadas" },
  { value: "3×", label: "Más rápido que in-house" },
  { value: "+40%", label: "Tasa de registro de estudiantes promedio" },
];

const designFeatures = [
  { icon: Compass, title: "Discovery estratégico", desc: "Auditamos tu marca, audiencia y objetivos de crecimiento antes de colocar un solo píxel." },
  { icon: PenTool, title: "UX diseñado para conversión", desc: "Wireframes y prototipos diseñados para convertir visitantes en estudiantes matriculados." },
  { icon: Layers, title: "Identidad visual alineada con tu marca", desc: "Cada elemento refleja tu marca — desde tipografía hasta sistema de colores y micro-interacciones." },
  { icon: Layout, title: "Arquitectura de contenido", desc: "Jerarquía de información estructurada que guía a los aprendices hacia el registro en cada paso." },
];

const buildFeatures = [
  { icon: Code2, title: "Desarrollo personalizado", desc: "Sitios web de academia completamente customizados y optimizados para rendimiento — sin templates, sin compromisos." },
  { icon: Sparkles, title: "Personalización impulsada por IA", desc: "Lógica de visualización inteligente que se adapta al perfil, intención y comportamiento de cada visitante." },
  { icon: Plug, title: "Integraciones y automatizaciones", desc: "Conexiones de CRM, pagos, analytics y LMS integradas desde el primer día — completamente configuradas." },
];

const launchFeatures = [
  { icon: Rocket, title: "Despliegue gestionado", desc: "Gestionamos el hosting, DNS y el go-live — sin trabajo técnico requerido de tu parte." },
  { icon: Zap, title: "Optimización de rendimiento", desc: "Core Web Vitals, compresión de imágenes y carga adaptativa preconfiguradas en el lanzamiento." },
  { icon: TrendingUp, title: "Soporte post-lanzamiento", desc: "Mantenimiento continuo, A/B testing e iteración para mantener tu academia en crecimiento." },
];

const proofPoints = [
  { icon: CheckCircle, text: "Ciclo de lanzamiento promedio de 2–4 semanas" },
  { icon: Users, text: "Equipo de expertos dedicado para cada proyecto" },
  { icon: Award, text: "Plena propiedad de activos e IP transferida a ti" },
];

const standardFeatures = [
  { icon: Zap, title: "Rendimiento siempre activo", desc: "SLA de 99.9% de uptime con infraestructura distribuida globalmente y failover instantáneo." },
  { icon: ShieldCheck, title: "Seguridad y cumplimiento", desc: "HTTPS obligatorio, GDPR-ready y manejo de datos encriptados en cada build." },
  { icon: HeartHandshake, title: "Asesoría de expertos", desc: "Un success partner dedicado guía la estrategia, revisa métricas e impulsa la mejora continua." },
];

const testimonials = [
  { quote: "El equipo de merahki.ai entregó nuestra academia en 3 semanas. El registro de estudiantes subió un 52% en el primer mes.", name: "Laura M.", role: "VP de Customer Success, SaaS Co." },
  { quote: "Intentamos construir esto internamente durante 6 meses. merahki.ai entregó un mejor producto en 4 semanas.", name: "Carlos R.", role: "Chief Learning Officer, Grupo Healthcare" },
  { quote: "El diseño enfocado en conversión marcó una diferencia real — nuestra tasa de registro se duplicó después del lanzamiento.", name: "Sofía T.", role: "Head of Partnerships, Plataforma Fintech" },
  { quote: "No solo un sitio web — un motor de crecimiento completo. Nuestro programa de educación se convirtió en un driver de pipeline de la noche a la mañana.", name: "James K.", role: "Director de Revenue, Agencia Tech" },
];

const faqs = [
  { question: "¿Qué incluye el servicio de creación de sitios web?", answer: "Cada engagement incluye discovery estratégico, wireframing de UX, diseño visual, desarrollo personalizado completo, configuración de integraciones, optimización de rendimiento, despliegue gestionado y 30 días de soporte post-lanzamiento." },
  { question: "¿Cuánto tiempo tarda todo el proceso?", answer: "La mayoría de proyectos se lanzan en 2–4 semanas desde el kickoff. Academias multi-curso complejas con integraciones personalizadas pueden tardar 6–8 semanas. Estableceremos el cronograma con precisión durante el discovery." },
  { question: "¿Necesito conocimiento técnico?", answer: "Para nada. Tú provees tus activos de marca, objetivos de contenido y dirección estratégica — nuestro equipo gestiona cada aspecto técnico desde el diseño hasta el despliegue." },
  { question: "¿Pueden migrar mi academia existente a merahki.ai?", answer: "Sí. Regularmente migramos academias desde otras plataformas, incluyendo contenido de cursos, datos de aprendices, matrículas y registros de pago. La migración se scope caso por caso durante el discovery." },
  { question: "¿Qué pasa después del lanzamiento del sitio?", answer: "Recibirás 30 días de soporte post-lanzamiento incluidos en cada proyecto. Después, ofrecemos retainers de crecimiento continuo que cubren A/B testing, revisiones de analytics, mejoras de conversión y nuevas funcionalidades." },
];

export default function WebsiteBuilderClientEs() {
  const { scrollY } = useScroll();

  const card1Y = useTransform(scrollY, [0, 600], [0, -130]);
  const card2Y = useTransform(scrollY, [0, 600], [0, -70]);
  const card3Y = useTransform(scrollY, [0, 600], [0, -180]);
  const glowY  = useTransform(scrollY, [0, 600], [0, -60]);

  const growRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: growProgress } = useScroll({ target: growRef, offset: ["start end", "end start"] });
  const imageParallax = useTransform(growProgress, [0, 1], [60, -60]);
  const textParallax  = useTransform(growProgress, [0, 1], [20, -20]);

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
              Entrega sitios web de academia{" "}
              <span className="text-gradient-blue-pink">conversion-first</span>{" "}
              para tu estrategia de education-led growth.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/60 leading-relaxed"
            >
              Construimos sitios web de academia conversion-first desde cero. Nuestro equipo experto gestiona todo el ciclo de vida — desde el diseño estratégico hasta el despliegue técnico — asegurando que tu plataforma esté optimizada para el máximo registro de estudiantes.
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
                Agenda un Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Floating parallax cards */}
          <div className="flex-1 relative h-[420px] hidden lg:block">
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
              <p className="text-white/40 text-xs mt-1">Registros de estudiantes tras el lanzamiento</p>
              <div className="mt-3 h-1 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-accent-purple to-accent-pink" />
              </div>
            </motion.div>

            <motion.div
              style={{ y: card2Y }}
              className="absolute top-40 left-0 w-52 glass-card rounded-2xl p-4 shadow-xl border border-white/10"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-full bg-accent-blue/20 flex items-center justify-center">
                  <CheckCircle className="w-3.5 h-3.5 text-accent-blue" />
                </div>
                <span className="text-white/60 text-xs">Nueva matrícula</span>
              </div>
              <p className="text-white font-semibold text-sm">Customer Academy Live</p>
              <p className="text-white/40 text-xs mt-1">Lanzada en 18 días</p>
            </motion.div>

            <motion.div
              style={{ y: card3Y }}
              className="absolute bottom-12 right-16 glass-card rounded-xl px-4 py-3 shadow-xl border border-white/10 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-accent-peach/20 flex items-center justify-center flex-shrink-0">
                <Zap className="w-4 h-4 text-accent-peach" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">94%</p>
                <p className="text-white/40 text-xs">Tasa de finalización promedio</p>
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
            { id: "design", label: "Diseño", ref: designRef },
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
              Diseña con <span className="text-gradient-blue-pink">propósito y precisión</span>
            </h2>
            <p className="text-white/50 mt-4 max-w-2xl mx-auto">Cada decisión de diseño tiene raíces en la estrategia de conversión — no solo en la estética.</p>
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
              Construido personalizado. <span className="text-gradient-blue-pink">Construido para rendir.</span>
            </h2>
            <p className="text-white/50 mt-4 max-w-2xl mx-auto">Sin templates. Sin atajos. Cada línea de código escrita para maximizar velocidad, confiabilidad y conversión.</p>
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
              Lanza rápido. <span className="text-gradient-blue-pink">Crece continuamente.</span>
            </h2>
            <p className="text-white/50 mt-4 max-w-2xl mx-auto">Gestionamos cada aspecto técnico del despliegue para que puedas enfocarte completamente en tus aprendices.</p>
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

      {/* ── Grow Your Academy ── */}
      <section ref={growRef} className="relative py-28 px-6 overflow-hidden">
        <GlowBackground indigoPosition={{ x: "30%", y: "50%" }} rustPosition={{ x: "70%", y: "40%" }} />
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">

          <motion.div style={{ y: textParallax }} className="flex-1 space-y-7">
            <motion.h2 initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold">
              Haz crecer tu academia,{" "}
              <span className="text-gradient-blue-pink">no tu overhead</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-white/60 text-lg leading-relaxed">
              Tú te enfocas en tu estrategia de educación. Nosotros gestionamos todo lo que la pone online.
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
                Inicia tu proyecto <ArrowRight className="w-4 h-4" />
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
              El estándar profesional para{" "}
              <span className="text-gradient-blue-pink">sitios web de academia</span>
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
            <h2 className="text-3xl md:text-4xl font-bold">De confianza para quienes construyen con educación</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold">Preguntas frecuentes</h2>
            <p className="text-white/50 mt-3">Todo lo que necesitas saber sobre nuestro servicio de creación de sitios web</p>
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
            <span className="section-badge text-white/30 mb-2 inline-block">Solo con merahki.ai</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Empieza a construir tu{" "}
              <span className="text-gradient-blue-pink">academia hoy</span>
            </h2>
            <p className="text-white/50 mt-4 leading-relaxed">
              Un sitio web conversion-first, construido por expertos en education growth — desde estrategia hasta lanzamiento en semanas, no meses.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
            <Link
              href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all"
            >
              Agenda un Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <ContactSection
        heading="Construyamos tu sitio web de academia"
        subheading="Cuéntanos sobre tu estrategia de educación y diseñaremos, construiremos y lanzaremos un sitio de academia conversion-first — desde cero."
      />
    </div>
  );
}
