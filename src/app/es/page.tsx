import type { Metadata } from "next";
import Image from "next/image";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import LogoCarousel from "@/components/sections/LogoCarousel";
import Accordion from "@/components/ui/Accordion";
import Collapsible from "@/components/ui/Collapsible";
import Link from "next/link";
import TestimonialsES from "@/components/sections/TestimonialsES";
import {
  ArrowRight,
  PenTool,
  Rocket,
  BarChart3,
  Shield,
  Heart,
  DollarSign,
  Factory,
  GraduationCap,
  Monitor,
} from "lucide-react";

export const metadata: Metadata = {
  title: "merahki.ai — Demuestra el ROI de cada programa de formación",
  description:
    "La plataforma con IA que te ayuda a medir el impacto real de tus programas de educación — del enrollment al reporte para el CFO. Diseña, lanza y prueba el ROI en semanas.",
  alternates: {
    canonical: "https://merahki.ai/es",
    languages: { en: "https://merahki.ai" },
  },
  keywords: [
    "ROI de formación",
    "plataforma de educación ROI",
    "analítica de educación",
    "micro-credenciales",
    "credenciales verificables",
    "certificación de partners",
    "analítica de aprendizaje",
    "impacto de negocio formación",
    "programa de credenciales",
    "education-led growth",
    "plataforma de academy",
    "diseño instruccional",
    "formación con IA",
    "analítica de cohortes",
    "ticket deflection formación",
    "plataforma educación B2B",
  ],
  openGraph: {
    title: "merahki.ai — Demuestra el ROI de cada programa de formación",
    description:
      "Diseña, lanza y prueba el impacto de negocio de cada programa de formación. Plataforma con IA para líderes de educación que necesitan mostrar resultados, no solo completions.",
    url: "https://merahki.ai/es",
    type: "website",
  },
};

export default function HomePageES() {
  const demoUrl =
    "https://ulaiz.share.hsforms.com/2E5fbICR4QJejlPcle2rN1w";

  const faqItems = [
    {
      question: "Ya tenemos un LMS. ¿Para qué necesitamos Merahki?",
      answer:
        "Merahki trabaja CON tu LMS, no lo reemplaza. Agregamos las capas que la mayoría de plataformas no tienen: diseño instruccional, producción de contenido, credenciales verificables y analítica de atribución de outcomes. Somos el equipo que cierra la brecha entre \u201Ctenemos plataforma\u201D y \u201Cpodemos probar que funciona.\u201D",
    },
    {
      question: "¿Cómo miden el ROI — no solo completions?",
      answer:
        "Etiquetamos cohortes entrenadas vs. no entrenadas en tu CRM y rastreamos métricas de negocio — ticket deflection, adoption lift, NRR, tasas de renovación — a 30, 60, 90 y 120 días. El dashboard automatiza el cálculo. Obtienes ROI en números reales, no estimados.",
    },
    {
      question: "¿Cuánto cuesta y cuándo se recupera la inversión?",
      answer:
        "Los programas arrancan desde $2.975 por setup más operación mensual. La mayoría de clientes ven primeros resultados medibles en 6 semanas. Datos de Forrester muestran que programas de educación estructurados alcanzan payback en 7 meses y retornan $6,71 por cada $1 en el año tres.",
      cta: { label: "Ver pricing completo", href: "/reports" },
    },
    {
      question: "¿Qué pasa con seguridad de datos y compliance?",
      answer:
        "HTTPS obligatorio, GDPR-ready, compatible con Habeas Data (crítico para LATAM), autenticación SSO/SAML y manejo de datos encriptado. Podemos hablar de residencia de datos y requisitos regulatorios específicos en la demo.",
    },
    {
      question: "¿Cuánto se demora ir a producción?",
      answer:
        "Seis a ocho semanas: dos para discovery y outcome mapping, cuatro para diseño y producción, una a dos para setup de plataforma y lanzamiento. El dashboard de analítica está activo desde el día uno.",
    },
    {
      question: "¿Tenemos que crear el contenido del curso?",
      answer:
        "No. Tú aportas los expertos de dominio (SMEs). Nosotros manejamos diseño instruccional, producción de contenido, video interactivo, assessments y arquitectura de credenciales. Herramientas de IA aceleran cada etapa.",
    },
    {
      question: "¿Qué es una micro-credencial vs. un curso normal?",
      answer:
        "Una micro-credencial valida competencias específicas a través de assessments — no solo asistencia. El badge digital es verificable, compartible en LinkedIn y relevante para empleadores y equipos de compliance. Prueba que el participante puede hacer la tarea, no solo que se sentó a verla.",
    },
    {
      question: "¿Sirve para programas de Partner Education?",
      answer:
        "Sí. Diseñamos programas de partner certification con credenciales por competencia y recálculo automático de tiers vía API. Dato de industria: partners certificados generan 6× más revenue y cierran deals 46% más rápido.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      {/* ── SECCIÓN 1 — HERO ── */}
      <section className="relative min-h-screen flex items-center px-6 pt-24 pb-16">
        <GlowBackground
          indigoPosition={{ x: "25%", y: "40%" }}
          rustPosition={{ x: "75%", y: "55%" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="flex-1 space-y-8">
              <AnimatedSection immediate delay={0.1}>
                <h1 className="text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight">
                  Demuestra el ROI de cada{" "}
                  <span className="text-gradient-peach-purple">programa de formación.</span>
                </h1>
              </AnimatedSection>
              <AnimatedSection immediate delay={0.2}>
                <p className="text-xl text-white/60 max-w-xl leading-relaxed">
                  La plataforma con IA que te ayuda a medir el impacto real de tus programas de educación — del enrollment al reporte para el CFO.
                </p>
              </AnimatedSection>
              <AnimatedSection immediate delay={0.25}>
                <div className="flex flex-wrap gap-8 py-4">
                  {[
                    { value: "372%", label: "ROI a 3 años de programas de educación estructurados" },
                    { value: "$6.71", label: "Retorno por cada $1 invertido en el año 3" },
                    { value: "96%", label: "De los programas reportan ROI positivo" },
                  ].map((stat) => (
                    <div key={stat.value} className="flex flex-col">
                      <span className="text-2xl font-bold text-gradient-peach-purple">{stat.value}</span>
                      <span className="text-xs text-white/40 max-w-[160px] leading-tight mt-1">{stat.label}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-white/25 mt-1">Fuente: Forrester/Intellum 2024</p>
              </AnimatedSection>
              <AnimatedSection immediate delay={0.3}>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Link href={demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm">
                    Agendar mi demo de 20 min <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/reports" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white border border-white/20 hover:bg-white/5 transition-all text-sm">
                    Quiero el Framework de ROI gratis
                  </Link>
                </div>
              </AnimatedSection>
            </div>
            <AnimatedSection immediate delay={0.2} className="flex-1 w-full">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                <Image src="/images/feature-adoption-tracker.png" alt="Dashboard de analítica Merahki — comparación de cohortes entrenadas vs. no entrenadas" width={900} height={720} className="w-full h-auto" sizes="(max-width: 768px) 100vw, 50vw" priority />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 2 — LOGO BAR ── */}
      <LogoCarousel heading="Equipos que ya miden el impacto con Merahki" />

      {/* ── SECCIÓN 3 — PROBLEMA / DOLOR (PAS) ── */}
      <section className="relative py-24 px-6">
        <GlowBackground indigoPosition={{ x: "50%", y: "50%" }} rustPosition={{ x: "80%", y: "30%" }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              El 70% de los programas de formación{" "}
              <span className="text-gradient-blue-pink">no pueden defender su presupuesto</span>{" "}
              ante el CFO.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="space-y-6 text-white/60 text-base leading-relaxed">
              <p>Tu equipo crea cursos. Los participantes los completan. Los reportes muestran enrollments y tasas de aprobación. Llega la temporada de presupuesto — y el CFO pregunta: &ldquo;¿Qué cambió realmente?&rdquo;</p>
              <p>No puedes decir cuántos tickets de soporte bajaron. No puedes mostrar qué cuentas renovaron porque fueron entrenadas. No puedes probar que los $200K que gastaste en educación de partners generaron un solo dólar de ingreso nuevo.</p>
              <p>Sin esa conexión entre aprendizaje y resultados de negocio, formación es la primera línea que se recorta cuando hay presión.</p>
              <p className="text-white/80 font-medium border-l-2 border-accent-purple/50 pl-5 italic">Cada trimestre sin datos de impacto es otro trimestre defendiendo tu programa con intuición en vez de prueba.</p>
              <p className="text-white font-semibold">Merahki construye esa conexión. Del diseño a la credencial al dashboard de ROI — en semanas.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SECCIÓN 4 — SOLUCIÓN: 3 PILARES ── */}
      <section className="relative py-24 px-6">
        <GlowBackground indigoPosition={{ x: "80%", y: "50%" }} rustPosition={{ x: "20%", y: "70%" }} />
        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Lo diseñamos. Lo producimos.{" "}
                <span className="text-gradient-peach-purple">Probamos que funciona.</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: PenTool, title: "Diseño y producción", desc: "Construimos el programa completo — cursos, videos, assessments y credenciales — con IA y frameworks de diseño instruccional. Tú traes la experiencia. Nosotros nos encargamos de todo lo demás.", link: { label: "Ver cómo construimos", href: "/methodology" }, color: "text-accent-peach", bg: "bg-accent-peach/10" },
              { icon: Rocket, title: "Lanzamiento y credencial", desc: "Tu academy con marca propia sale en vivo en semanas — con adaptive learning, app móvil, sesiones en vivo y micro-credenciales verificables que tus participantes comparten en LinkedIn.", link: { label: "Ver una academy en vivo", href: "/case-studies" }, color: "text-accent-purple", bg: "bg-accent-purple/10" },
              { icon: BarChart3, title: "Medición y prueba de ROI", desc: "Nuestra analítica conecta datos de aprendizaje con resultados de negocio. Compara cohortes entrenadas vs. no entrenadas. Ve ticket deflection, adoption lift y tasas de renovación — en tiempo real, no trimestralmente.", link: { label: "Ver el dashboard", href: "/analytics-reports" }, color: "text-accent-blue", bg: "bg-accent-blue/10" },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="relative rounded-2xl p-7 border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all h-full flex flex-col">
                  <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center mb-5 flex-shrink-0`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed flex-1">{item.desc}</p>
                  <Link href={item.link.href} className="inline-flex items-center gap-1 text-xs font-medium text-white/40 hover:text-white/70 transition-colors mt-5">
                    {item.link.label} <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 5 — CASO DE ESTUDIO DESTACADO ── */}
      <section className="relative py-24 px-6">
        <GlowBackground indigoPosition={{ x: "30%", y: "40%" }} rustPosition={{ x: "70%", y: "60%" }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-8 md:p-12">
              <span className="inline-block section-badge text-white/30 mb-4">Caso de Estudio</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Cómo un vendor de ciberseguridad probó que{" "}
                <span className="text-gradient-peach-purple">$50 en formación evitan el 25% de los incidentes.</span>
              </h2>
              <div className="space-y-4 text-white/60 text-sm leading-relaxed mb-8">
                <p><span className="text-white font-semibold">Reto:</span> Una empresa de ciberseguridad que vende a operadores de telecomunicaciones no tenía forma de demostrar que entrenar a los equipos de sus clientes realmente reducía las brechas de seguridad. Los clientes cuestionaban el valor. Las renovaciones se estancaban.</p>
                <p><span className="text-white font-semibold">Solución:</span> Merahki construyó un programa de cinco módulos con micro-credenciales — phishing, gestión de accesos, reporte de incidentes, protocolos seguros — con assessment gates y credenciales verificables. La analítica rastreó tasas de incidentes por cohorte entrenada vs. no entrenada desde el día uno.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { value: "\u201325%", label: "Incidentes de seguridad en la cohorte entrenada" },
                  { value: "90 días", label: "Del lanzamiento al primer reporte de ROI" },
                  { value: "$50", label: "Inversión por participante para producir el resultado" },
                ].map((kpi) => (
                  <div key={kpi.value} className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center">
                    <p className="text-2xl font-bold text-gradient-peach-purple mb-1">{kpi.value}</p>
                    <p className="text-white/40 text-xs">{kpi.label}</p>
                  </div>
                ))}
              </div>
              <blockquote className="border-l-2 border-accent-purple/50 pl-5 mb-6">
                <p className="text-white/70 text-sm italic leading-relaxed">&ldquo;Ahora cada propuesta comercial incluye la línea: &lsquo;Nuestros clientes certificados tienen 25% menos incidentes.&rsquo; Eso cambió cómo vendemos.&rdquo;</p>
                <footer className="mt-3">
                  <p className="text-white font-medium text-sm">VP of Customer Success</p>
                  <p className="text-white/40 text-xs">Empresa de Ciberseguridad</p>
                </footer>
              </blockquote>
              <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-medium text-accent-purple hover:text-accent-purple/80 transition-colors">
                Leer el caso completo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CORTE CTA #1 ── */}
      <section className="py-20 px-6 border-y border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mira cómo se ve el ROI de tu programa.</h2>
            <Link href={demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm">
              Agendar mi demo de 20 min <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SECCIÓN 6 — CÓMO FUNCIONA ── */}
      <section className="relative py-24 px-6">
        <GlowBackground indigoPosition={{ x: "20%", y: "60%" }} rustPosition={{ x: "80%", y: "40%" }} />
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Tres pasos. Seis semanas.{" "}
                <span className="text-gradient-peach-purple">Primer reporte de ROI.</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-[calc(16.67%-1px)] right-[calc(16.67%-1px)] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Diagnosticar", desc: "Mapeamos tus objetivos de negocio a resultados de aprendizaje. ¿Qué métrica necesita moverse? ¿Quién necesita aprender qué? Definimos la línea base y etiquetamos cohortes antes de construir nada.", deliverable: "Program Blueprint", time: "Semana 1–2", color: "text-accent-peach", border: "border-accent-peach/30", bg: "bg-accent-peach/10" },
                { step: "02", title: "Diseñar y lanzar", desc: "Nuestro equipo produce la experiencia completa — cursos adaptativos, video interactivo, assessments, credenciales — con herramientas potenciadas por IA. Tu academy sale en vivo con analítica activa desde el día uno.", deliverable: "Academy en vivo + app móvil", time: "Semana 3–6", color: "text-accent-purple", border: "border-accent-purple/30", bg: "bg-accent-purple/10" },
                { step: "03", title: "Medir y optimizar", desc: "Dashboards automatizados rastrean leading indicators semanalmente. Las métricas de business outcomes se actualizan mensualmente. Reportes ejecutivos trimestrales conectan el gasto del programa con el ROI en el idioma que habla tu CFO.", deliverable: "Reportes de ROI continuos", time: "Semana 6+ continuo", color: "text-accent-blue", border: "border-accent-blue/30", bg: "bg-accent-blue/10" },
              ].map((item, i) => (
                <AnimatedSection key={item.step} delay={i * 0.15}>
                  <div className="flex flex-col items-start gap-5">
                    <div className={`w-14 h-14 rounded-2xl ${item.bg} border ${item.border} flex items-center justify-center flex-shrink-0`}>
                      <span className={`font-bold text-lg ${item.color}`}>{item.step}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed mb-3">{item.desc}</p>
                      <p className="text-xs text-white/30"><span className="text-white/50 font-medium">Entregable:</span> {item.deliverable}</p>
                      <p className="text-xs text-white/30 mt-1">{item.time}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 7 — TESTIMONIOS ── */}
      <TestimonialsES />

      {/* ── CORTE CTA #2 ── */}
      <section className="py-20 px-6 border-y border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tu CFO quiere números.{" "}
              <span className="text-gradient-peach-purple">Dale números.</span>
            </h2>
            <Link href={demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm">
              Agendar mi demo de 20 min <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SECCIÓN 8 — INDUSTRIAS ── */}
      <section className="relative py-24 px-6">
        <GlowBackground indigoPosition={{ x: "80%", y: "50%" }} rustPosition={{ x: "20%", y: "70%" }} />
        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Hecho para tu industria.{" "}
                <span className="text-gradient-blue-pink">Medido en tus KPIs.</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Monitor, title: "SaaS", desc: "Reduce el tiempo de onboarding. Aumenta feature adoption. Demuestra que las cuentas entrenadas renuevan a tasas más altas.", metric: "+38,3% product adoption lift", metricSource: "Forrester/Intellum 2024", href: "/es/customer-education", color: "text-accent-purple", bg: "bg-accent-purple/10" },
              { icon: Shield, title: "Ciberseguridad", desc: "Entrena a los equipos de tus clientes. Mide la reducción de incidentes. Emite credenciales verificables que se convierten en un argumento de venta en cada propuesta.", metric: "–25% incidentes por $50 invertidos por participante", metricSource: "", href: "/case-studies", color: "text-accent-blue", bg: "bg-accent-blue/10" },
              { icon: Heart, title: "Healthcare y Life Sciences", desc: "Certifica equipos de distribuidores. Rastrea compliance. Mantén audit trails. Credenciales atadas a validación de competencia regulatoria — no a tiempo de asiento.", metric: "100% visibilidad de audit trail", metricSource: "", href: "/es/medical-education", color: "text-accent-pink", bg: "bg-accent-pink/10" },
              { icon: DollarSign, title: "Financial Services", desc: "Certifica redes de partners. Gatea los tiers por competencia, no solo por revenue. El dashboard recalcula elegibilidad de tier mensualmente.", metric: "Partners certificados generan 6× más revenue", metricSource: "PartnerStack", href: "/es/partner-academies", color: "text-accent-peach", bg: "bg-accent-peach/10" },
              { icon: Factory, title: "Manufactura", desc: "Haz upskill de equipos de primera línea. Rastrea time-to-competency. Emite credenciales que prueban habilidades para compliance de seguridad y calidad.", metric: "", metricSource: "", href: "/es/training-certification", color: "text-accent-purple", bg: "bg-accent-purple/10" },
              { icon: GraduationCap, title: "Educación Superior", desc: "Lanza programas de educación continua. Emite micro-credenciales que tus egresados y clientes corporativos valoran. Mide la pertinencia del programa con datos reales de outcomes.", metric: "", metricSource: "", href: "/es/continuing-education", color: "text-accent-blue", bg: "bg-accent-blue/10" },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={(i % 3) * 0.1}>
                <Link href={item.href} className="block group h-full">
                  <div className="relative rounded-2xl p-7 border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all h-full flex flex-col">
                    <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center mb-5 flex-shrink-0`}>
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed flex-1">{item.desc}</p>
                    {item.metric && (
                      <p className="text-xs font-medium text-accent-purple/80 mt-3">
                        {item.metric}
                        {item.metricSource && <span className="text-white/25 font-normal"> ({item.metricSource})</span>}
                      </p>
                    )}
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-white/40 group-hover:text-white/70 transition-colors mt-4">
                      Ver casos <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 9 — FAQ / OBJECIONES ── */}
      <section className="relative py-24 px-6">
        <GlowBackground indigoPosition={{ x: "40%", y: "50%" }} rustPosition={{ x: "70%", y: "60%" }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Preguntas que el comité de compra{" "}
                <span className="text-gradient-peach-purple">siempre hace.</span>
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <Accordion items={faqItems} />
          </AnimatedSection>
        </div>
      </section>

      {/* ── SECCIÓN 10 — EL MOTOR DE ROI ── */}
      <section className="relative py-24 px-6">
        <GlowBackground indigoPosition={{ x: "50%", y: "50%" }} rustPosition={{ x: "20%", y: "40%" }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <Collapsible
              trigger={
                <h2 className="text-2xl md:text-3xl font-bold">
                  Cómo funciona la analítica{" "}
                  <span className="text-gradient-blue-pink">— en detalle.</span>
                </h2>
              }
            >
              <div className="space-y-10">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-6">La jerarquía de medición de cuatro niveles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { tier: "Nivel 1 — Leading indicators", freq: "rastreo diario", items: "Velocidad de enrollment, time-to-first-course, tasas de completion por módulo, pass rates en assessments, profundidad de engagement, puntos de abandono." },
                      { tier: "Nivel 2 — Transitional indicators", freq: "rastreo semanal", items: "Feature adoption post-formación, señales de cambio de comportamiento, patrones de tickets de soporte, cambios en uso de producto en la cohorte entrenada." },
                      { tier: "Nivel 3 — Lagging business outcomes", freq: "rastreo mensual", items: "Diferencial de NRR y GRR (cohorte entrenada vs. no entrenada), tasa de ticket deflection, lift en CSAT y NPS, revenue de expansión en cuentas educadas, reducción de incidentes." },
                      { tier: "Nivel 4 — Terminal financial metrics", freq: "reporte trimestral", items: "ROI del programa, LTV lift por usuario entrenado, valor de deflection, compresión de CAC payback, tendencia de costo por credencial." },
                    ].map((t) => (
                      <div key={t.tier} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                        <p className="text-white font-semibold text-sm">{t.tier}</p>
                        <p className="text-white/30 text-xs mb-2">{t.freq}</p>
                        <p className="text-white/50 text-xs leading-relaxed">{t.items}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-accent-purple/20 bg-accent-purple/5 p-6">
                  <h3 className="text-sm font-semibold text-white mb-3">La Fórmula</h3>
                  <p className="text-white/80 text-sm font-mono leading-relaxed">ROI de Educación = (Valor de Retención + Valor de Expansión + Ahorro en Soporte + Valor de Adquisición − Costo del Programa) ÷ Costo del Programa</p>
                  <p className="text-white/30 text-xs mt-2 italic">Fuente: Avramescu Customer Education ROI Framework</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-3">Flujo de integración</h3>
                  <p className="text-white/50 text-sm leading-relaxed">Sync con CRM (HubSpot nativo; Zapier/Make para otros) → Etiquetado de cohortes al completar curso → Event flows por webhooks → Dashboard automatizado → Reportes ejecutivos programados al inbox.</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-4">Benchmarks de la industria</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left text-white/50 font-medium py-2 pr-4">Métrica</th>
                          <th className="text-left text-white/50 font-medium py-2 pr-4">Benchmark</th>
                          <th className="text-left text-white/50 font-medium py-2">Fuente</th>
                        </tr>
                      </thead>
                      <tbody className="text-white/60 text-xs">
                        {[
                          ["ROI del programa (3 años)", "372%", "Forrester/Intellum 2024"],
                          ["Retorno por $1 invertido (Año 3)", "$6,71", "Forrester/Intellum 2024"],
                          ["Período de payback", "7 meses", "Forrester/Intellum 2024"],
                          ["Product adoption lift", "+38,3%", "Forrester/Intellum 2024"],
                          ["LTV lift por usuario entrenado", "+35%", "Forrester/Intellum 2024"],
                          ["Reducción de costos de soporte", "−15,5%", "Forrester/Intellum 2024"],
                          ["Mejora en CSAT", "+26,2%", "Forrester/Intellum 2024"],
                          ["Mejora en tiempo de onboarding", "56% más rápido", "Thought Industries 2024"],
                          ["Multiplicador de ticket deflection", "7–15×", "HDI; Fullview"],
                          ["Revenue de partners certificados", "6× vs. no certificados", "PartnerStack"],
                          ["Velocidad de cierre de deals (partners)", "46% más rápido", "PartnerAwesome 2025"],
                        ].map((row) => (
                          <tr key={row[0]} className="border-b border-white/5">
                            <td className="py-2 pr-4">{row[0]}</td>
                            <td className="py-2 pr-4 text-white font-medium">{row[1]}</td>
                            <td className="py-2 text-white/30">{row[2]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Collapsible>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SECCIÓN 11 — CTA FINAL ── */}
      <section className="relative py-24 px-6">
        <GlowBackground indigoPosition={{ x: "30%", y: "50%" }} rustPosition={{ x: "70%", y: "50%" }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              La próxima temporada de presupuesto,{" "}
              <span className="text-gradient-peach-purple">muestra los números.</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Cada programa que Merahki construye viene con la analítica para probar su impacto. Deja de defender educación con intuición. Empieza a defenderla con datos que tu CFO firma sin pedir reuniones adicionales.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link href={demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm">
                Agendar mi demo de 20 min <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/reports" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white border border-white/20 hover:bg-white/5 transition-all text-sm">
                Quiero el Framework de ROI gratis <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="glass-card rounded-xl p-5 max-w-md mx-auto">
              <p className="text-white/60 text-sm italic">&ldquo;La demo fue directa al grano. Sin relleno, sin presión.&rdquo;</p>
              <p className="text-white/40 text-xs mt-2">— <span className="text-white/60 font-medium">Daniela V.</span>, Head of L&D, Empresa de Manufactura</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
