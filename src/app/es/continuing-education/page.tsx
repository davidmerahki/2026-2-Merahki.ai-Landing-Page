import type { Metadata } from "next";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import OurProposal from "@/components/sections/OurProposal";
import LogoCarousel from "@/components/sections/LogoCarousel";
import TestimonialsES from "@/components/sections/TestimonialsES";
import Link from "next/link";
import {
  ArrowRight, Target, BookOpen, Gamepad2, Rocket, Headphones, BarChart3,
  TrendingUp, RefreshCcw, Sparkles, Star, ArrowDownRight, Zap, Clock,
  TrendingDown, EyeOff, AlertTriangle, GraduationCap, Users, Briefcase,
  Building2, CheckCircle2, ChevronRight, Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Outsourcing de Educación Continua B2B",
  description:
    "merahki.ai diseña, produce, lanza y opera programas virtuales de educación continua para instituciones de educación superior — impulsado por IA, ciencia del comportamiento y marcos de estrategia educativa.",
  alternates: {
    canonical: "https://merahki.ai/es/continuing-education",
    languages: { en: "https://merahki.ai/continuing-education" },
  },
  openGraph: {
    title: "Outsourcing de Educación Continua B2B — Operaciones Educativas | merahki.ai",
    description: "Escala tu línea de educación B2B sin escalar tu equipo. 8 semanas desde el inicio hasta el programa en vivo.",
    url: "https://merahki.ai/es/continuing-education",
    type: "website",
  },
};

const heroStats = [
  { value: "+40%", label: "Tasa de finalización promedio en programas operados por merahki.ai" },
  { value: "3×", label: "Más rápido que la producción interna" },
  { value: "−42%", label: "Reducción en abandono temprano de participantes" },
  { value: "8 sem", label: "Entrega garantizada desde el inicio hasta programa en vivo" },
];

const constraints = [
  { num: "01", icon: AlertTriangle, title: "Capacidad Operativa Limitada", desc: "Tu equipo gestiona diseño instruccional, producción de video, configuración LMS, flujos de inscripción y soporte a participantes simultáneamente. El cuello de botella no es la demanda — es la capacidad de entrega.", stat: "Más del 50% de la deserción se origina en un onboarding ineficaz (Weber)." },
  { num: "02", icon: TrendingDown, title: "Bajas Tasas de Finalización y Retención", desc: "Los programas virtuales genéricos pierden participantes después de la segunda semana. Sin estrategias de engagement basadas en economía conductual y gamificación, tus clientes corporativos no renuevan.", stat: "Estilo MOOC: 12–15%. Programas estructurados: 60–80%. Cohortes: 85–98%." },
  { num: "03", icon: Clock, title: "Lento Time to Market", desc: "Desde la concepción hasta el lanzamiento, pasan meses en ciclos de diseño, producción, configuración y revisión. El estándar de la industria es 20 semanas en seis fases.", stat: "merahki.ai comprime esto a 8 semanas — plataforma, equipo y metodología ya listos." },
  { num: "04", icon: EyeOff, title: "ROI Invisible", desc: "Sin analítica de aprendizaje integrada a métricas de negocio, tu unidad de educación continua no puede demostrar el valor real de sus programas.", stat: "La mayoría miden solo actividad (inscripciones) sin conectar con resultados de negocio (retención, ingresos)." },
];

const pillars = [
  { icon: Target, color: "text-violet-400", title: "Estrategia Educativa y Arquitectura de Programas", tagline: "Diseñamos programas orientados a resultados, no solo a contenido.", desc: "Comenzamos con una Auditoría de Fricción — un diagnóstico estructurado de dónde tus programas pierden participantes y no demuestran valor. Arquitectamos el programa usando el Onboarding Orquestado de Weber, los principios de Quick y los Siete Pilares de ELG de Intellum.", includes: ["Auditoría de Fricción de programas existentes o brief de nuevo programa", "Arquitectura completa del programa con estructura modular", "3–5 objetivos de aprendizaje medibles por módulo", "Diseño de rutas de aprendizaje (secuencial, libre o con prerequisitos)", "Selección de formato por módulo (video, ebook, evaluación, SCORM, H5P)", "Recomendación de modelo de monetización"], leadKpi: "Time-to-First-Course: <7 días", lagKpi: "Tasa de Finalización: 60–80%", timeline: "Semanas 1–4" },
  { icon: BookOpen, color: "text-sky-400", title: "Diseño Instruccional y Producción de Contenido", tagline: "De la idea al curso publicado — en semanas, no meses.", desc: "Transformamos tu expertise académico en experiencias de aprendizaje interactivas y multimedia. Aplicamos Merrill, Gagné y Cathy Moore según las necesidades. Sin desarrollo frontend ni backend — entrega llave en mano.", includes: ["Diseño instruccional completo: guiones, storyboards, evaluaciones", "Hasta 100 min de video premium (producción y edición)", "Hasta 12 lecciones por expertos dedicados", "6+ actividades interactivas H5P por curso", "Personalización alineada a tu marca institucional", "IA: esquemas, evaluaciones, ebooks, traducciones", "Video interactivo: quizzes, resúmenes, pop-ups, checkpoints"], leadKpi: "Tasa de Finalización por módulo", lagKpi: "CSAT: 85%+ best-in-class", timeline: "Semanas 5–7" },
  { icon: Gamepad2, color: "text-rose-400", title: "Gamificación y Economía Conductual", tagline: "Convertimos comportamientos deseados en hábitos — no en obligaciones.", desc: "Gamificación basada en el Framework Octalysis de Yu-kai Chou y economía conductual. Diseñamos los drives centrales que motivan finalización, participación activa y recompra. Duolingo: 37% DAU/MAU stickiness.", includes: ["Mapeo Octalysis: 8 drives centrales por programa", "Badges, certificaciones (Accredible/Credly), leaderboards", "Nudges conductuales: recordatorios, aversión a la pérdida, dotación", "Aprendizaje Comunitario: sesiones en vivo, breakout rooms, peer review", "Flywheel CLG: graduados → promotores → recompra"], leadKpi: "Tasa de Engagement", lagKpi: "Retención y recompra del cliente corporativo", timeline: "Semanas 8–12" },
  { icon: Rocket, color: "text-amber-400", title: "Lanzamiento y Operaciones de Inscripción", tagline: "Del programa listo al participante inscrito — sin fricción.", desc: "Operamos todo el go-to-market: configuración LMS, flujos de inscripción, comunicaciones automatizadas, onboarding y coordinación con tu equipo comercial. +40% tasa promedio de registro.", includes: ["Configuración completa del LMS: escuelas, cursos, usuarios, roles", "Flujos de inscripción optimizados (+40% tasa de registro)", "Integración de pasarela de pago (Stripe, PayPal, Shopify)", "Comunicaciones automatizadas: emails, recordatorios, push notifications", "Coordinación B2B: inscripción masiva, cohortes, reportes por empresa", "App móvil con marca (iOS + Android) en 2–4 semanas"], leadKpi: "Tasa de Registro; Time-to-First-Course", lagKpi: "Ingreso por programa", timeline: "Semana 8" },
  { icon: Headphones, color: "text-emerald-400", title: "Soporte al Participante", tagline: "Soporte que libera a tu equipo — no lo consume.", desc: "Soporte durante todo el ciclo de vida combinando IA con escalación humana. Costo por ticket asistido: $25–$35 vs. autoservicio $1–$4. Soporte que escala logarítmicamente, no linealmente.", includes: ["AI Learner Agent: resuelve 80% de consultas automáticamente", "Soporte humano de segundo nivel para casos complejos", "Gestión de incidentes técnicos", "Soporte multicanal: plataforma, email, chat", "Encuestas NPS post-módulo integradas (3× más respuestas)"], leadKpi: "Deflexión de Tickets: 45–60%", lagKpi: "NPS: +50+ (world-class)", timeline: "Inmediato" },
  { icon: BarChart3, color: "text-cyan-400", title: "Analítica de Datos y Learning Analytics", tagline: "Cada decisión basada en datos. Cada resultado demostrable.", desc: "Stack de analítica completo: Leading → Transicionales → Lagging → Terminales. El error fatal es medir solo una capa. Nosotros instrumentamos las cuatro.", includes: ["Dashboard: 95+ filtros, progresión, exámenes", "Insights con IA en lenguaje natural", "Reportes automatizados a stakeholders", "Integración con herramientas BI", "Análisis de cohortes: por empresa, instructor, cohorte", "Integración CRM desde día uno para atribución"], leadKpi: "Tasa de Finalización y Engagement", lagKpi: "ROI de Educación (140–372%)", timeline: "Leading sem 1; lagging mes 3; terminal mes 6–12" },
];

const courseWeeks = [
  { week: "Sem 0", phase: "Pre-Inscripción (Fase Embark)", desc: "Secuencia de bienvenida automatizada. Evaluación diagnóstica de 5 min personaliza el pathway. El engagement comienza antes del día uno.", highlights: ["Email de bienvenida", "Video del instructor", "Quiz diagnóstico", "Cuenta regresiva"] },
  { week: "Sem 1", phase: "Fundamentos (Kickoff + Adopt)", desc: "Video interactivo de 12 min con subtítulos IA y checkpoints. Actividades H5P refuerzan conceptos. Primer badge y leaderboard visible.", highlights: ["Video interactivo con quizzes", "Actividades H5P", "Primer badge", "Sesión en vivo 60 min"] },
  { week: "Sem 2–3", phase: "Aplicación (Deep Adopt)", desc: "Video → H5P → discusión entre pares → sesión en vivo. Gamificación escala con desafíos de equipo, peer review y AI Learner Agent 24/7.", highlights: ["Badges progresivos", "Contador de racha", "40+ participantes discutiendo", "Respuestas IA instantáneas"] },
  { week: "Sem 4", phase: "Certificación y Fase Expand", desc: "Evaluación integral (30 preguntas, 75%, 60 min). Certificado digital vía Accredible/Credly + LinkedIn. Fase Expand: testimonios, referidos, programa avanzado.", highlights: ["Evaluación calibrada con IA", "Credencial LinkedIn", "Upsell avanzado", "Comunidad alumni"] },
];

const beforeAfter = [
  { dimension: "Tiempo de lanzamiento", before: "4–6 meses", after: "8 semanas garantizadas" },
  { dimension: "Tasa de finalización", before: "20–35%", after: "60–80% (objetivo: 72%+)" },
  { dimension: "NPS participantes", before: "No medido", after: "Objetivo +45 a +55" },
  { dimension: "Resolución soporte", before: "Manual, lento", after: "80% auto-deflectado por IA" },
  { dimension: "Visibilidad ROI", before: "Ninguna", after: "Dashboard KPIs 4 capas" },
  { dimension: "Acceso móvil", before: "Ninguno", after: "App iOS + Android con marca" },
  { dimension: "Video", before: "Reproducción pasiva", after: "Interactivo: quizzes, pop-ups, IA" },
  { dimension: "Gamificación", before: "Ninguna", after: "Octalysis: badges, rachas, leaderboards" },
  { dimension: "Certificación", before: "PDF", after: "Credencial digital + LinkedIn" },
  { dimension: "Analítica", before: "Conteo inscripciones", after: "95+ filtros, IA, reportes auto" },
];

const outcomes = [
  { icon: TrendingUp, title: "Ingresos", color: "text-emerald-400", desc: "Lanza programas 3× más rápido, acelerando pipeline e ingresos. +7.6% revenue lift y +35% Customer Lifetime Value." },
  { icon: RefreshCcw, title: "Retención de Clientes", color: "text-sky-400", desc: "Clientes que ven altas tasas de finalización renuevan. −42% abandono temprano. +56% mejora en onboarding y +21% CLV." },
  { icon: Sparkles, title: "Experiencia del Participante", color: "text-violet-400", desc: "Video IA, Octalysis, app móvil, soporte multicanal. Comparable a HubSpot Academy y Coursera — no al LMS estático." },
  { icon: Star, title: "Satisfacción (NPS)", color: "text-amber-400", desc: "NPS en cada módulo. Benchmark SaaS: +31 a +36. Objetivo: +50+. Encuestas in-flow: 3× más respuestas." },
  { icon: ArrowDownRight, title: "Reducción de Tickets", color: "text-rose-400", desc: "AI deflecta 80%. Costo ticket: $25–$35 vs. autoservicio $1–$4. Multiplicador 7–15× que libera tu equipo." },
  { icon: Zap, title: "Agilidad", color: "text-cyan-400", desc: "Idea a programa en vivo en 8 semanas. Sin desarrollo, sin contratar diseñadores, productores ni ingenieros." },
];

const phases = [
  { num: "01", title: "Diagnosticar y Diseñar", timeline: "Semanas 1–4", desc: "Auditoría de Fricción: dónde abandonan, dónde hay fricción, dónde hay oportunidades. Entrevistamos 10–15 stakeholders. Calificamos 6 dimensiones de madurez.", deliverables: "Arquitectura del programa, diseño instruccional, plan de gamificación, stack de integración y KPIs instrumentados." },
  { num: "02", title: "Producir y Configurar", timeline: "Semanas 5–7", desc: "Producimos contenido, configuramos LMS, integramos CRM y analítica, diseñamos flujos de inscripción y preparamos la app. Tu equipo revisa y aprueba — nosotros operamos.", deliverables: "Tres rutas de aprendizaje mapeadas a las brechas de mayor valor. Títulos activos, enfoque job-to-be-done." },
  { num: "03", title: "Lanzar y Operar", timeline: "Semana 8+", desc: "Soft-launch con cohorte piloto 10–20%. Feedback, iteración, lanzamiento completo. Soporte continuo, analítica, reportes automáticos y mejora continua.", deliverables: "Métricas de actividad desde semana 1. Engagement desde mes 3. Resultados de negocio desde mes 6–12." },
];

const setupPlans = [
  { name: "Starter", price: "$2,975", popular: false, features: ["Hasta 5 lecciones", "40 min video premium", "3 actividades H5P", "Branding básico", "Brief de estrategia", "Framework Gagné", "Entrega 4 semanas", "Esquema IA"] },
  { name: "Professional", price: "$4,575", popular: true, features: ["Hasta 12 lecciones", "100 min video premium", "6 actividades H5P", "Alineación completa de marca", "Gamificación Octalysis", "Estrategia ELG + CLG", "Gagné + Merrill", "Entrega 8 semanas", "IA: esquema + evaluaciones + subtítulos"] },
  { name: "Enterprise", price: "$8,500", popular: false, features: ["20+ lecciones", "200 min video premium", "12 actividades H5P", "Multi-idioma", "Octalysis + Certificación", "ELG + CLG + Partners", "Gagné + Merrill + Action Mapping", "12 semanas", "PM dedicado", "Suite IA completa"] },
];

const lmsPlans = [
  { name: "Starter", price: "$499/mes", popular: false, features: ["500 usuarios", "50+ filtros analítica", "1 portal", "Reportes básicos", "Soporte email"] },
  { name: "Professional", price: "$762/mes", popular: true, features: ["1,000 usuarios ($1/extra)", "95+ filtros analítica", "Hasta 3 portales", "CRM (HubSpot + Zapier)", "AI Learner Agent", "Reportes programados", "Webhooks", "Soporte prioritario"] },
  { name: "Enterprise", price: "$1,500/mes", popular: false, features: ["5,000 usuarios ($0.75/extra)", "95+ filtros + IA insights", "Portales ilimitados", "CRM + SSO/SAML", "AI Agent personalizado", "Dashboards ejecutivos", "API + webhooks avanzados", "CSM dedicado · SLA 99.9%"] },
];

const appPlans = [
  { name: "Starter", price: "$299/mes", popular: false, features: ["iOS O Android", "Acceso offline", "Push notifications"] },
  { name: "Professional", price: "$400/mes", popular: true, features: ["iOS + Android", "1,000 usuarios ($1/extra)", "Offline + push", "In-app purchases + biométrico"] },
  { name: "Enterprise", price: "$750/mes", popular: false, features: ["iOS + Android", "5,000 usuarios ($0.75/extra)", "Offline + push", "In-app + biométrico", "Soporte dedicado app"] },
];

const yearTotals = [
  { tier: "Starter", setup: "$2,975", lms: "$5,988", app: "$3,588", total: "$12,551" },
  { tier: "Professional", setup: "$4,575", lms: "$9,144", app: "$4,800", total: "$18,519" },
  { tier: "Enterprise", setup: "$8,500", lms: "$18,000", app: "$9,000", total: "$35,500" },
];

const addOns = [
  { title: "Partner Academy", desc: "Para ecosistemas de distribuidores, franquiciados, revendedores. Partners certificados: 6× más ingresos. 353% ROI.", tiers: ["Desde $2,975", "Desde $5,500", "Desde $9,500"] },
  { title: "Programa de Certificación", desc: "Valida competencia, no solo finalización. Meta Blueprint: $99–$150/examen para 3M+ participantes.", tiers: ["Desde $2,475", "Desde $4,500", "Desde $9,000"] },
  { title: "Sitio Web de la Academia", desc: "Web optimizada para conversión. Strategy-first, IA. +40% tasa de registro promedio.", tiers: ["Desde $1,975", "Desde $4,500", "Desde $7,500"] },
  { title: "Retainer Estrategia ELG", desc: "Chief Learning Officer fraccional. Revisiones mensuales, KPIs, presentaciones ejecutivas trimestrales.", tiers: ["$2,500–$6,000 único", "$3,000/mes", ""] },
];


const audiences = [
  { icon: Briefcase, title: "Directores de Educación Continua", desc: "Más programas, más rápido, sin más personal." },
  { icon: Users, title: "Coordinadores de Programas Corporativos", desc: "Mejora finalización y satisfacción para renovar contratos." },
  { icon: Building2, title: "VPs de Extensión Académica", desc: "Demuestra el ROI ante el liderazgo institucional." },
  { icon: GraduationCap, title: "Instituciones de Educación Superior", desc: "Compite con bootcamps sin sacrificar tu ventaja académica." },
];

const industries = ["Salud", "Fintech", "Tecnología", "Manufactura", "Retail", "Servicios Profesionales", "Gobierno", "ONGs"];

const faqs = [
  { q: "¿Reemplazan a nuestro equipo académico?", a: "No. merahki.ai es una extensión operativa. Tus SMEs aportan conocimiento y validan contenido. Nosotros manejamos diseño, producción, configuración, lanzamiento, soporte y analítica." },
  { q: "¿Qué pasa si ya tenemos un LMS?", a: "Podemos trabajar en merahki.ai (recomendado) o integrarnos con tu LMS vía API y webhooks. Lo evaluamos en la Auditoría de Fricción." },
  { q: "¿Cuánto tiempo toma lanzar?", a: "Starter: 4 semanas. Professional: 8 semanas. Enterprise: 12 semanas. Tiempos garantizados desde kickoff hasta programa en vivo." },
  { q: "¿Con qué tier empiezo?", a: "Primer programa: Starter ($12,551/año). Calidad HubSpot Academy: Professional ($18,519/año). Múltiples programas: Enterprise ($35,500/año)." },
  { q: "¿Operan en múltiples idiomas?", a: "Sí. Traducción IA, localización y multi-idioma vía Weglot. Inglés, español, portugués y otros bajo demanda." },
  { q: "¿Cómo miden el ROI?", a: "Jerarquía KPI de 4 capas: Leading → Transicionales → Lagging → Terminales. Fórmula Avramescu. Reportes automáticos." },
  { q: "¿Qué incluye el soporte?", a: "AI Learner Agent 24/7 (80% auto-deflexión) + soporte humano nivel 2 + gestión técnica + encuestas integradas." },
  { q: "¿Diferencia con freelancers?", a: "Freelancers: diseño individual. Nosotros: ciclo completo (estrategia → producción → lanzamiento → operaciones → analítica → mejora continua) + plataforma + IA + gamificación + app + CRM." },
  { q: "¿Necesito los add-ons?", a: "No para empezar. Los 3 servicios core cubren el ciclo completo. La mayoría añade Certificación en los primeros 6 meses." },
  { q: "¿Hay descuento bundle?", a: "Sí. Bundle 'Full Program Launch' (Professional en todo): 8% descuento — $17,037 vs. $18,519, ahorro de $1,482." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question", name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/* ────────────────────────────── COMPONENT ────────────────────────────── */

export default function ContinuingEducationPageES() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-6 text-center">
        <GlowBackground indigoPosition={{ x: "30%", y: "40%" }} rustPosition={{ x: "70%", y: "60%" }} />
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <AnimatedSection immediate>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">
              Outsourcing de Educación Continua B2B
            </span>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Escala Tu Línea de Educación B2B{" "}
              <span className="text-gradient-peach-purple">Sin Escalar Tu Equipo.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.2}>
            <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
              Diseñamos, producimos, lanzamos y operamos programas virtuales de educación continua para tu institución — impulsados por IA, ciencia del comportamiento y los mismos marcos usados por HubSpot Academy, Salesforce Trailhead y Asana Academy. Tú aportas la marca y los expertos. Nosotros entregamos todo lo demás.
            </p>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://meetings.hubspot.com/david5040?uuid=26d4db2a-ff58-48ff-be04-a74d169db651" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm">
                Agenda un Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="https://ulaiz.share.hsforms.com/2E5fbICR4QJejlPcle2rN1w" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold border border-white/15 text-white/80 hover:bg-white/5 hover:text-white transition-all text-sm">
                Descarga el Reporte <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.4}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
              {heroStats.map((s) => (
                <div key={s.value} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-gradient-peach-purple">{s.value}</p>
                  <p className="text-xs text-white/40 mt-1 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.5}>
            <p className="text-xs text-white/30 mt-6 tracking-wide">Confiado por unidades de educación continua y universidades corporativas en más de 8 industrias</p>
          </AnimatedSection>
        </div>
      </section>

      <LogoCarousel />

      {/* EL PROBLEMA */}
      <section className="relative py-24 px-6">
        <GlowBackground indigoPosition={{ x: "20%", y: "30%" }} rustPosition={{ x: "80%", y: "70%" }} />
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Las Unidades de Educación Continua Están Atrapadas en un{" "}
                <span className="text-gradient-peach-purple">Modelo Que No Escala.</span>
              </h2>
              <p className="text-white/55 mt-6 max-w-3xl mx-auto leading-relaxed">
                Los equipos internos están distribuidos entre diseño instruccional, producción, inscripciones, soporte y reportes — todo mientras preservan el rigor académico. El resultado: programas que tardan meses, finalización que decepciona y un pipeline B2B que nunca alcanza su potencial.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {constraints.map((c, i) => (
              <AnimatedSection key={c.num} delay={i * 0.08}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 space-y-3 h-full hover:bg-white/[0.04] transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-accent-purple/60">{c.num}</span>
                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center"><c.icon className="w-4 h-4 text-white/50" /></div>
                    <h3 className="text-base font-bold text-white">{c.title}</h3>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{c.desc}</p>
                  <p className="text-xs text-accent-purple/70 font-medium leading-relaxed border-t border-white/5 pt-3">{c.stat}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.4}>
            <div className="mt-12 rounded-2xl border border-accent-purple/20 bg-accent-purple/5 p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Lightbulb className="w-5 h-5 text-accent-purple" />
                <span className="text-sm font-bold text-accent-purple uppercase tracking-widest">El Insight</span>
              </div>
              <p className="text-lg font-semibold text-white max-w-2xl mx-auto">El problema no es tu contenido académico — es tu infraestructura de entrega.</p>
              <p className="text-white/50 text-sm mt-3 max-w-2xl mx-auto leading-relaxed">La mayoría tienen excelentes expertos y marcas fuertes. Lo que falta es una máquina operativa que transforme esa expertise en experiencias diseñadas para finalización, satisfacción y recompra.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* EL VILLANO */}
      <section className="relative py-20 px-6">
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="narrative-card rounded-2xl p-10 space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold text-white text-center">La &ldquo;Brecha de Capacidad.&rdquo;</h2>
              <p className="text-white/55 leading-relaxed">Las unidades de educación continua fueron diseñadas para un mundo presencial. La transformación digital exige que operen como una edtech — con UX, multimedia, gamificación, analítica y automatización — pero con el mismo equipo y presupuesto.</p>
              <p className="text-white/55 leading-relaxed">Hemos visto instituciones con décadas de reputación perder contratos B2B frente a bootcamps con una décima de su expertise pero diez veces su velocidad operativa.</p>
              <div className="border-t border-white/10 pt-5">
                <p className="text-white/80 font-medium leading-relaxed text-center">
                  Tu institución merece mantener su ventaja académica sin sacrificar velocidad ni escala.{" "}
                  <span className="text-gradient-peach-purple font-bold">Actuamos como la extensión operativa</span>{" "}
                  que convierte tu expertise en experiencias que retienen, certifican y generan recompra.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SEIS PILARES */}
      <section className="relative py-24 px-6">
        <GlowBackground indigoPosition={{ x: "70%", y: "30%" }} rustPosition={{ x: "30%", y: "70%" }} />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="section-badge text-white/30 mb-4 inline-block">Seis Pilares de Servicio</span>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Un Equipo Dedicado de Operaciones Educativas{" "}
                <span className="text-gradient-peach-purple">— Sin Contratar Uno.</span>
              </h2>
              <p className="text-white/50 mt-5 max-w-3xl mx-auto leading-relaxed">merahki.ai es tu socio estratégico de outsourcing. No reemplazamos a tu equipo académico — lo amplificamos. Gestionamos el ciclo completo de tus programas B2B.</p>
            </div>
          </AnimatedSection>
          <div className="space-y-6">
            {pillars.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.06}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center"><p.icon className={`w-5 h-5 ${p.color}`} /></div>
                        <div>
                          <h3 className="text-lg font-bold text-white">{p.title}</h3>
                          <p className="text-sm text-white/40 italic">{p.tagline}</p>
                        </div>
                      </div>
                      <p className="text-white/55 text-sm leading-relaxed">{p.desc}</p>
                      <div className="flex flex-wrap gap-3 pt-1">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Lead: {p.leadKpi}</span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">Lag: {p.lagKpi}</span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-white/40 border border-white/10">{p.timeline}</span>
                      </div>
                    </div>
                    <div className="lg:w-[380px] shrink-0">
                      <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-3">Qué incluye</p>
                      <ul className="space-y-2">
                        {p.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-white/55">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent-purple shrink-0 mt-0.5" />{item}
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

      {/* VITRINA DEL CURSO */}
      <section className="relative py-24 px-6" id="course-showcase">
        <GlowBackground indigoPosition={{ x: "50%", y: "30%" }} rustPosition={{ x: "50%", y: "70%" }} />
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-4">
              <span className="section-badge text-white/30 mb-4 inline-block">Vitrina del Curso</span>
              <h2 className="text-3xl md:text-4xl font-bold">Mira Lo Que Tus Clientes B2B{" "}<span className="text-gradient-blue-pink">Realmente Reciben.</span></h2>
              <p className="text-white/50 mt-4 max-w-2xl mx-auto">Curso ejemplo: &ldquo;Reduce Roturas de Stock en 40% con Planificación Demand-Driven&rdquo; — 12 horas, 4 semanas, blended.</p>
            </div>
          </AnimatedSection>
          <div className="mt-14 space-y-6">
            {courseWeeks.map((w, i) => (
              <AnimatedSection key={w.week} delay={i * 0.1}>
                <div className="relative flex gap-6">
                  <div className="hidden sm:flex flex-col items-center pt-1">
                    <div className="w-10 h-10 rounded-full bg-accent-purple/20 border border-accent-purple/40 flex items-center justify-center text-xs font-bold text-accent-purple shrink-0">{w.week.replace("Sem ", "S")}</div>
                    {i < courseWeeks.length - 1 && <div className="w-px flex-1 bg-white/10 mt-2" />}
                  </div>
                  <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="sm:hidden text-xs font-bold text-accent-purple bg-accent-purple/10 px-2 py-0.5 rounded-full">{w.week}</span>
                      <h3 className="text-base font-bold text-white">{w.phase}</h3>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed mb-4">{w.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {w.highlights.map((h) => (
                        <span key={h} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 text-white/50 border border-white/10">
                          <CheckCircle2 className="w-3 h-3 text-accent-purple" />{h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.5}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 space-y-3">
                <h3 className="text-base font-bold text-white">Lo Que Ve el Cliente Corporativo</h3>
                <ul className="space-y-2">
                  {["Progreso de cohorte en tiempo real con gráficos radar", "Embudo de finalización con análisis de abandono", "Resultados por módulo, equipo y ubicación", "NPS y satisfacción por cohorte", "Narrativa ROI conectando aprendizaje con impacto de negocio"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/55"><span className="text-accent-purple mt-0.5">✦</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 space-y-3">
                <h3 className="text-base font-bold text-white">Lo Que Ve el Liderazgo Institucional</h3>
                <ul className="space-y-2">
                  {["ROI por trimestre e ingreso por programa", "Retención de clientes (renovados vs. perdidos)", "Deflexión de tickets y ahorro en costos", "Inscripciones, finalización, aprobación por programa", "Ingresos por cliente, industria y tipo de programa"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/55"><span className="text-accent-purple mt-0.5">✦</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.6}>
            <div className="mt-14">
              <h3 className="text-xl font-bold text-white text-center mb-6">Comparación Antes / Después</h3>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
                <div className="grid grid-cols-3 text-xs font-bold uppercase tracking-widest text-white/30 border-b border-white/10 px-5 py-3">
                  <span>Dimensión</span><span>Antes (In-House)</span><span>Después (merahki.ai)</span>
                </div>
                {beforeAfter.map((row, i) => (
                  <div key={row.dimension} className={`grid grid-cols-3 text-sm px-5 py-3 ${i % 2 === 0 ? "bg-white/[0.01]" : ""} ${i < beforeAfter.length - 1 ? "border-b border-white/5" : ""}`}>
                    <span className="text-white/70 font-medium text-xs">{row.dimension}</span>
                    <span className="text-white/35 text-xs">{row.before}</span>
                    <span className="text-emerald-400/80 text-xs font-medium">{row.after}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* RESULTADOS DE NEGOCIO */}
      <section className="relative py-24 px-6">
        <GlowBackground indigoPosition={{ x: "60%", y: "40%" }} rustPosition={{ x: "30%", y: "60%" }} />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Un Servicio.{" "}<span className="text-gradient-peach-purple">Seis Resultados de Negocio.</span></h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {outcomes.map((o, i) => (
              <AnimatedSection key={o.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 space-y-3 h-full hover:bg-white/[0.04] transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center"><o.icon className={`w-5 h-5 ${o.color}`} /></div>
                    <h3 className="text-base font-bold text-white">{o.title}</h3>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{o.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="relative py-24 px-6">
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">De la Idea al Programa en Vivo:{" "}<span className="text-gradient-blue-pink">Tres Fases Claras.</span></h2>
            </div>
          </AnimatedSection>
          <div className="space-y-6">
            {phases.map((p, i) => (
              <AnimatedSection key={p.num} delay={i * 0.12}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center">
                        <span className="text-xl font-bold text-accent-purple">{p.num}</span>
                      </div>
                    </div>
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-bold text-white">{p.title}</h3>
                        <span className="text-xs font-bold text-white/30 uppercase tracking-widest bg-white/5 px-2.5 py-1 rounded-full">{p.timeline}</span>
                      </div>
                      <p className="text-white/55 text-sm leading-relaxed">{p.desc}</p>
                      <p className="text-xs text-white/40 border-t border-white/5 pt-3"><span className="font-semibold text-white/55">Entregables:</span> {p.deliverables}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PLANES Y PRECIOS */}
      <section className="relative py-24 px-6">
        <GlowBackground indigoPosition={{ x: "40%", y: "30%" }} rustPosition={{ x: "60%", y: "70%" }} />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Elige el Plan Correcto{" "}<span className="text-gradient-peach-purple">para Tu Institución.</span></h2>
              <p className="text-white/50 mt-4 max-w-2xl mx-auto">Tres niveles desde un primer piloto hasta una academia B2B a escala. Cada nivel incluye metodología, plataforma y soporte operativo.</p>
            </div>
          </AnimatedSection>

          {/* Setup del Programa */}
          <AnimatedSection delay={0.1}>
            <div className="mb-16">
              <h3 className="text-xl font-bold text-white mb-2">Setup del Programa <span className="text-white/40 text-sm font-normal">(Único por Curso)</span></h3>
              <p className="text-white/40 text-sm mb-6">Cada curso es una experiencia autocontenida. Múltiples cursos componen un programa.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {setupPlans.map((plan) => (
                  <div key={plan.name} className={`rounded-2xl p-7 border space-y-4 h-full flex flex-col ${plan.popular ? "border-accent-purple/50 bg-accent-purple/5" : "border-white/10 bg-white/[0.02]"}`}>
                    {plan.popular && <span className="inline-flex self-start items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-accent-purple/20 text-accent-purple">Más Popular</span>}
                    <h4 className="text-lg font-bold text-white">{plan.name}</h4>
                    <p className="text-2xl font-bold text-gradient-peach-purple">{plan.price} <span className="text-xs text-white/30 font-normal">+ IVA</span></p>
                    <ul className="space-y-2 flex-1">
                      {plan.features.map((f) => (<li key={f} className="flex items-start gap-2 text-xs text-white/60"><CheckCircle2 className="w-3.5 h-3.5 text-accent-purple shrink-0 mt-0.5" />{f}</li>))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Operaciones Mensuales */}
          <AnimatedSection delay={0.15}>
            <div className="mb-16">
              <h3 className="text-xl font-bold text-white mb-2">Operaciones Mensuales <span className="text-white/40 text-sm font-normal">(Plataforma LMS)</span></h3>
              <p className="text-white/40 text-sm mb-6">La columna vertebral: LMS, analítica, integraciones y soporte.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {lmsPlans.map((plan) => (
                  <div key={plan.name} className={`rounded-2xl p-7 border space-y-4 h-full flex flex-col ${plan.popular ? "border-accent-purple/50 bg-accent-purple/5" : "border-white/10 bg-white/[0.02]"}`}>
                    {plan.popular && <span className="inline-flex self-start items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-accent-purple/20 text-accent-purple">Más Popular</span>}
                    <h4 className="text-lg font-bold text-white">{plan.name}</h4>
                    <p className="text-2xl font-bold text-gradient-peach-purple">{plan.price} <span className="text-xs text-white/30 font-normal">+ IVA</span></p>
                    <ul className="space-y-2 flex-1">
                      {plan.features.map((f) => (<li key={f} className="flex items-start gap-2 text-xs text-white/60"><CheckCircle2 className="w-3.5 h-3.5 text-accent-purple shrink-0 mt-0.5" />{f}</li>))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* App Móvil */}
          <AnimatedSection delay={0.2}>
            <div className="mb-16">
              <h3 className="text-xl font-bold text-white mb-2">App Móvil con Marca <span className="text-white/40 text-sm font-normal">(Opcional)</span></h3>
              <p className="text-white/40 text-sm mb-6">Tu contenido, tu marca, en cada dispositivo. 311% más ingresos y 10× crecimiento vs. solo web.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {appPlans.map((plan) => (
                  <div key={plan.name} className={`rounded-2xl p-7 border space-y-4 h-full flex flex-col ${plan.popular ? "border-accent-purple/50 bg-accent-purple/5" : "border-white/10 bg-white/[0.02]"}`}>
                    {plan.popular && <span className="inline-flex self-start items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-accent-purple/20 text-accent-purple">Más Popular</span>}
                    <h4 className="text-lg font-bold text-white">{plan.name}</h4>
                    <p className="text-2xl font-bold text-gradient-peach-purple">{plan.price} <span className="text-xs text-white/30 font-normal">+ IVA</span></p>
                    <ul className="space-y-2 flex-1">
                      {plan.features.map((f) => (<li key={f} className="flex items-start gap-2 text-xs text-white/60"><CheckCircle2 className="w-3.5 h-3.5 text-accent-purple shrink-0 mt-0.5" />{f}</li>))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Inversión Total Año 1 */}
          <AnimatedSection delay={0.25}>
            <div className="mb-16">
              <h3 className="text-xl font-bold text-white mb-6">Inversión Total Año 1</h3>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
                <div className="grid grid-cols-5 text-xs font-bold uppercase tracking-widest text-white/30 border-b border-white/10 px-5 py-3">
                  <span>Tier</span><span>Setup</span><span>LMS (12 m)</span><span>App (12 m)</span><span>Total Año 1</span>
                </div>
                {yearTotals.map((row, i) => (
                  <div key={row.tier} className={`grid grid-cols-5 text-sm px-5 py-3.5 ${i % 2 === 0 ? "bg-white/[0.01]" : ""} ${i < yearTotals.length - 1 ? "border-b border-white/5" : ""}`}>
                    <span className="text-white/70 font-semibold text-xs">{row.tier}</span>
                    <span className="text-white/50 text-xs">{row.setup}</span>
                    <span className="text-white/50 text-xs">{row.lms}</span>
                    <span className="text-white/50 text-xs">{row.app}</span>
                    <span className="text-white font-bold text-xs">{row.total}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Bundle Recomendado */}
          <AnimatedSection delay={0.3}>
            <div className="mb-16 rounded-2xl border border-accent-purple/30 bg-accent-purple/5 p-8">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-accent-purple" />
                <h3 className="text-xl font-bold text-white">Recomendado: Bundle &ldquo;Full Program Launch&rdquo;</h3>
              </div>
              <p className="text-white/55 text-sm mb-6 max-w-2xl">El paquete más común para lanzar tu primer programa B2B serio. Tier Professional en los tres servicios con 8% de descuento.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center">
                  <p className="text-xs text-white/30 uppercase tracking-widest mb-1">Setup del Programa</p>
                  <p className="text-lg font-bold text-white">$4,209</p>
                  <p className="text-xs text-white/30 line-through">$4,575</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center">
                  <p className="text-xs text-white/30 uppercase tracking-widest mb-1">LMS + App Mensual</p>
                  <p className="text-lg font-bold text-white">$1,069/mes</p>
                  <p className="text-xs text-white/30 line-through">$1,162/mes</p>
                </div>
                <div className="rounded-xl border border-accent-purple/30 bg-accent-purple/10 p-5 text-center">
                  <p className="text-xs text-accent-purple uppercase tracking-widest mb-1 font-bold">Total Año 1</p>
                  <p className="text-lg font-bold text-gradient-peach-purple">$17,037</p>
                  <p className="text-xs text-emerald-400 font-semibold">Ahorra $1,482</p>
                </div>
              </div>
              <Link href="https://meetings.hubspot.com/david5040?uuid=26d4db2a-ff58-48ff-be04-a74d169db651" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm bg-accent-purple text-white hover:bg-accent-purple/85 transition-all">
                Agenda un Demo para Asegurar el Precio Bundle <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Add-Ons */}
          <AnimatedSection delay={0.35}>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Servicios Adicionales</h3>
              <p className="text-white/40 text-sm mb-6">Servicios especializados disponibles como add-ons a cualquier tier.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {addOns.map((addon) => (
                  <div key={addon.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-3 hover:bg-white/[0.04] transition-colors">
                    <h4 className="text-base font-bold text-white">{addon.title}</h4>
                    <p className="text-white/45 text-xs leading-relaxed">{addon.desc}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {addon.tiers.filter(Boolean).map((t, i) => (
                        <span key={i} className="text-xs font-medium text-white/50 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                          {["Starter", "Professional", "Enterprise"][i]}: {t}
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

      {/* PRUEBA SOCIAL */}
      <TestimonialsES />

      {/* PARA QUIÉN ES */}
      <section className="relative py-24 px-6">
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold">Diseñado para Unidades de Educación Continua{" "}<span className="text-gradient-blue-pink">Listas para Escalar.</span></h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            {audiences.map((a, i) => (
              <AnimatedSection key={a.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 flex items-start gap-4 hover:bg-white/[0.04] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-accent-purple/15 flex items-center justify-center shrink-0"><a.icon className="w-5 h-5 text-accent-purple" /></div>
                  <div>
                    <h3 className="text-base font-bold text-white">{a.title}</h3>
                    <p className="text-white/50 text-sm mt-1">{a.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.4}>
            <div className="text-center">
              <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-4">Industrias Donde los Clientes Corporativos Demandan Capacitación</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {industries.map((ind) => (<span key={ind} className="px-4 py-1.5 rounded-full text-xs font-medium text-white/50 border border-white/10 bg-white/[0.03]">{ind}</span>))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQs */}
      <section className="relative py-24 px-6">
        <GlowBackground indigoPosition={{ x: "30%", y: "50%" }} rustPosition={{ x: "70%", y: "50%" }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold">Todo Lo Que Necesitas{" "}<span className="text-gradient-peach-purple">Saber.</span></h2>
            </div>
          </AnimatedSection>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors">
                  <h3 className="text-sm font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-24 px-6 text-center">
        <GlowBackground indigoPosition={{ x: "50%", y: "50%" }} rustPosition={{ x: "30%", y: "60%" }} />
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold">Deja de Competir{" "}<span className="text-gradient-peach-purple">Con Las Manos Atadas.</span></h2>
            <p className="text-white/50 mt-4 leading-relaxed max-w-xl mx-auto">Tu institución tiene la expertise, la marca y la reputación. Lo que falta es una máquina operativa que convierta ese capital en programas B2B virtuales que generen ingresos, retención y reputación. merahki.ai es esa máquina.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Link href="https://meetings.hubspot.com/david5040?uuid=26d4db2a-ff58-48ff-be04-a74d169db651" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all">
              Agenda un Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap gap-4 justify-center text-xs text-white/35 mt-4">
              <span>Walkthrough personalizado de 30 min</span><span>·</span>
              <span>Habla con un experto en estrategia educativa</span><span>·</span>
              <span>Roadmap de implementación incluido</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.25}>
            <p className="text-lg font-semibold text-white/70 mt-6">Escala tu educación continua B2B.{" "}<span className="text-gradient-peach-purple">Nosotros operamos. Tú creces.</span></p>
          </AnimatedSection>
        </div>
      </section>

      <OurProposal />

      <ContactSection
        heading="Escala tu educación continua"
        subheading="Descubre cómo merahki.ai ayuda a instituciones de educación superior a lanzar, operar y crecer programas virtuales B2B."
        badge="Empieza Ahora"
        trustItems={[
          { title: "Demo personalizado de 30 min", desc: "Una demostración adaptada a tu caso de uso específico." },
          { title: "Habla con un experto, no con un vendedor", desc: "Conversarás con alguien que entiende profundamente el crecimiento impulsado por educación." },
          { title: "Roadmap de implementación incluido", desc: "Sal con un plan claro para lanzar tu primer programa." },
          { title: "Usado por equipos en 8+ industrias", desc: "Desde salud hasta SaaS — hemos visto y resuelto tus desafíos." },
        ]}
      />
    </div>
  );
}
