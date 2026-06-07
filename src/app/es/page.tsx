import { buildFaqJsonLd, buildMetadata } from "@/lib/seo/metadata";
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
  Check,
} from "lucide-react";

export const metadata = buildMetadata("home", "es");

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(faqItems)) }}
      />
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
                <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight">
                  Personas y empresas ya están comprando microcredenciales.{" "}
                  <span className="text-gradient-peach-purple">La única pregunta es a quién.</span>
                </h1>
              </AnimatedSection>
              <AnimatedSection immediate delay={0.2}>
                <p className="text-xl text-white/60 max-w-xl leading-relaxed">
                  Merahki diseña y virtualiza tus microcredenciales, mide su impacto con learning analytics y emite insignias digitales verificables. Convierte tu educación continua en un motor de crecimiento e ingreso recurrente.
                </p>
              </AnimatedSection>
              <AnimatedSection immediate delay={0.25}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 py-2 max-w-xl">
                  {[
                    "Diseño y virtualización en 6–12 semanas",
                    "Ingreso recurrente para tu institución",
                    "Learning analytics con 95+ filtros",
                    "Insignias verificables en blockchain",
                  ].map((pillar) => (
                    <div key={pillar} className="flex items-start gap-2">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent-peach" />
                      <span className="text-sm text-white/70 leading-snug">{pillar}</span>
                    </div>
                  ))}
                </div>
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
              <AnimatedSection immediate delay={0.35}>
                <p className="text-sm text-white/40 max-w-xl leading-relaxed border-l-2 border-accent-peach/40 pl-4">
                  UNESCO abrió una ventana de 18–36 meses para que las universidades tomen posición. Las que se muevan primero se quedan con la última milla hacia el empleo. El resto se la cede a Google y a los bootcamps.
                </p>
              </AnimatedSection>
            </div>
            <AnimatedSection immediate delay={0.2} className="flex-1 w-full">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                <Image src="/images/Micro-credenciales microcredentials.png" alt="Dashboard de analítica Merahki — comparación de cohortes entrenadas vs. no entrenadas" width={900} height={720} className="w-full h-auto" sizes="(max-width: 768px) 100vw, 50vw" priority />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 2 — LOGO BAR ── */}
      <LogoCarousel heading="Equipos que ya miden el impacto con Merahki" />

      {/* ── SECCIÓN 3 — SOLUCIÓN: 3 PILARES ── */}
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

      {/* ── SECCIÓN 4 — PROBLEMA / DOLOR (PAS) ── */}
      <section id="nueva-realidad" className="relative py-20 md:py-32 px-6 bg-white/[0.03] border-y border-white/5">
        <div className="relative z-10 max-w-[760px] mx-auto">
          <AnimatedSection>
            <div className="text-center mb-10">
              <p className="text-xs font-semibold tracking-[0.28em] uppercase text-accent-purple mb-4">La nueva realidad</p>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">Pierdes a tus estudiantes dos veces.</h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="space-y-7 text-white/70 text-lg md:text-xl leading-[1.7]">
              <p>Primero cuando se gradúan y no vuelven. Después cuando deciden seguir aprendiendo —y lo hacen en Coursera, en Google, en un bootcamp de seis semanas.</p>
              <p>Cada vez que pasa, no pierdes solo el ingreso. Pierdes la relevancia que define a tu institución.</p>
              <p>La matrícula de pregrado cae. Solo 2 de cada 10 jóvenes terminan la educación tradicional. El 70% de tus egresados quiere seguir aprendiendo —si les ofreces algo relevante—. Y las empresas no encuentran el talento que las universidades no certifican: la escasez global llega al 75%.</p>
              <p className="text-white font-medium border-l-4 border-accent-purple/70 bg-white/[0.04] rounded-r-2xl px-6 py-5">Coursera tiene 13 años. Tu institución lleva décadas construyendo autoridad académica. Pero hoy es Coursera la que pone su sello sobre el egresado que tú formaste.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                { value: "2 de 10", label: "jóvenes que terminan la educación tradicional" },
                { value: "70%", label: "de egresados quiere seguir aprendiendo" },
                { value: "75%", label: "escasez global de talento" },
              ].map((stat) => (
                <div key={stat.value} className="border-t border-white/15 pt-5 text-center md:text-left">
                  <p className="text-4xl md:text-5xl font-bold text-gradient-blue-pink">{stat.value}</p>
                  <p className="text-white/55 text-sm leading-relaxed mt-2">{stat.label}</p>
                </div>
              ))}
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
      <section id="como-trabajamos" className="relative py-20 md:py-32 px-6">
        <GlowBackground indigoPosition={{ x: "20%", y: "60%" }} rustPosition={{ x: "80%", y: "40%" }} />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold tracking-[0.28em] uppercase text-accent-peach mb-4">Cómo trabajamos contigo</p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">
                De una conversación a la primera credencial emitida.{" "}
                <span className="text-gradient-peach-purple">En menos de dos meses.</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="relative">
            <div className="hidden lg:block absolute top-11 left-[calc(16.67%-1px)] right-[calc(16.67%-1px)] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                { step: "01", title: "Diagnóstico", desc: "Mapeamos los objetivos de tu institución —ingresos, empleabilidad, pertinencia— a competencias específicas. Definimos qué microcredencial lanzar primero y el programa académico que la sostiene.", deliverable: "Program Blueprint listo para sustentar.", time: "Semana 1–2", color: "text-accent-peach", border: "border-accent-peach/30", bg: "bg-accent-peach/10" },
                { step: "02", title: "Diseño y lanzamiento", desc: "Producimos la experiencia completa con IA: cursos adaptativos, video interactivo, evaluaciones, rutas de aprendizaje y arquitectura de credencial. Tu academia de marca propia sale en vivo, con analítica activa desde el día uno.", deliverable: "academia funcionando y primeras inscripciones.", time: "Semana 3–6", color: "text-accent-purple", border: "border-accent-purple/30", bg: "bg-accent-purple/10" },
                { step: "03", title: "Medir y crecer", desc: "Dashboards automáticos rastrean cohorte a cohorte: ingresos, finalización, empleabilidad y NPS. Optimizamos en tiempo real. Reportes trimestrales en el idioma que habla tu junta.", deliverable: "sustento continuo de impacto.", time: "Semana 6 en adelante", color: "text-accent-blue", border: "border-accent-blue/30", bg: "bg-accent-blue/10" },
              ].map((item, i) => (
                <AnimatedSection key={item.step} delay={i * 0.15}>
                  <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-8 flex flex-col gap-5">
                    <div>
                      <span aria-hidden="true" className={`text-6xl md:text-7xl font-bold leading-none ${item.color}`}>{item.step}</span>
                    </div>
                    <p className={`inline-flex w-fit rounded-full border ${item.border} ${item.bg} px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70`}>{item.time}</p>
                    <div className="space-y-4 flex-1">
                      <h3 className="text-2xl md:text-[28px] font-semibold text-white">{item.title}</h3>
                      <p className="text-white/60 text-base leading-relaxed">{item.desc}</p>
                    </div>
                    <p className="border-t border-white/10 bg-white/[0.03] rounded-2xl px-4 py-3 text-sm text-white/65 leading-relaxed"><span className="text-white font-semibold">Entregable:</span> {item.deliverable}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
          <AnimatedSection delay={0.3}>
            <div className="text-center mt-14">
              <Link href={demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm">
                Agendar mi demo de 20 min <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
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
