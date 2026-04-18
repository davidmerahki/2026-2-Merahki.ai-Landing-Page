import type { Metadata } from "next";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import MarketingProposal from "@/components/sections/MarketingProposal";
import LogoCarousel from "@/components/sections/LogoCarousel";
import Link from "next/link";
import {
  ArrowRight,
  Tag,
  RefreshCw,
  Users,
  BarChart2,
  FileText,
  Plug,
  MousePointerClick,
  Smartphone,
  Globe,
  PieChart,
  MessageSquare,
  Bookmark,
  Zap,
  TrendingUp,
  Search,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Marketing Your Courses",
  description:
    "El Managed Growth Squad de merahki.ai gestiona todo tu funnel de academy: infraestructura de conversión, integración de stack y automatización, tráfico y visibilidad, y atribución de revenue. Ejecución end-to-end sin aumentar tu headcount interno.",
  alternates: {
    canonical: "https://merahki.ai/es/marketing-your-courses",
    languages: { en: "https://merahki.ai/marketing-your-courses" },
  },
  openGraph: {
    title: "Marketing Your Courses — Tu Growth Engine tercerizado | merahki.ai",
    description:
      "Tu Growth Engine tercerizado para academies. Un squad dedicado que gestiona tu motor de marketing de extremo a extremo — desde el tráfico calificado hasta la retención de estudiantes.",
    url: "https://merahki.ai/es/marketing-your-courses",
    type: "website",
  },
};

const pillars = [
  { icon: TrendingUp, text: "Convertimos tu tráfico en un pipeline de estudiantes calificados." },
  { icon: Zap, text: "Orquestamos tu stack tecnológico existente para que funcione en piloto automático." },
  { icon: PieChart, text: "Datos limpios y ROI tracking. Sin métricas de vanidad — solo revenue engineering." },
];

const salesFeatures = [
  {
    icon: MousePointerClick,
    title: "Assets de alta conversión",
    desc: "Construimos los formularios, pop-ups y scarcity triggers que realmente mueven la aguja.",
  },
  {
    icon: Plug,
    title: "Workflow architecture",
    desc: "Sincronizamos tu stack — Mailchimp, ActiveCampaign o ConvertKit — y gestionamos la automatización por ti.",
  },
  {
    icon: Globe,
    title: "Dominancia en búsqueda",
    desc: "SEO técnico resuelto. Optimizamos tus URLs y código para que tu academy aparezca donde está la intención.",
  },
];

const campaignFeatures = [
  {
    icon: BarChart2,
    title: "Optimización del funnel y eliminación de fricciones",
    desc: "No solo miramos los clics. Analizamos cómo los usuarios se mueven por tu funnel de ventas, identificamos dónde estás perdiendo dinero e implementamos las soluciones de inmediato. Tu performance es nuestra responsabilidad.",
    reverse: false,
  },
  {
    icon: FileText,
    title: "Reportes para C-Suite en piloto automático",
    desc: "Olvida las exportaciones manuales. Automatizamos la distribución de tus reportes, entregando las métricas que importan — CAC, LTV y NRR — directamente en las bandejas de entrada de tus stakeholders.",
    reverse: true,
  },
];

const digitalFeatures = [
  { icon: MousePointerClick, title: "Construimos y desplegamos conversion assets", desc: "Formularios, pop-ups, scarcity triggers y landing pages — diseñados y desplegados por nuestro equipo, sin dejarlo para que tú lo descifres." },
  { icon: Plug, title: "Integramos y gestionamos tu stack actual", desc: "Conectamos y operamos las herramientas que ya tienes para que tu stack funcione como un sistema de crecimiento unificado, no como un conjunto de software desconectado." },
  { icon: Target, title: "Gestionamos el conversion tracking y la atribución", desc: "Cada pixel, cada touchpoint, cada fuente de revenue — rastreado, atribuido y reportado con total claridad." },
  { icon: Globe, title: "Escalamos la visibilidad de tu academy vía SEO y Paid Media", desc: "Desde SEO técnico hasta campañas de ads dirigidas, construimos los canales orgánicos y de pago que mantienen el tráfico calificado llegando." },
  { icon: PieChart, title: "Proporcionamos inteligencia accionable, no solo datos crudos", desc: "Sin dashboards volcados en tu escritorio. Traducimos tus datos en acciones de crecimiento específicas y las implementamos por ti." },
  { icon: MessageSquare, title: "Diseñamos y ejecutamos tus secuencias de email nurturing", desc: "Flows de email de extremo a extremo — desde la captación de leads hasta el re-engagement — redactados, construidos y gestionados por nuestro equipo." },
  { icon: RefreshCw, title: "Gestionamos A/B tests e iteramos en cada etapa del funnel", desc: "Optimización continua en tus landing pages, emails y CTAs — para que cada ciclo mejore tu tasa de inscripción." },
  { icon: Smartphone, title: "Configuramos campañas de retargeting y remarketing", desc: "Re-engageamos a los visitantes y leads warm que no convirtieron la primera vez, usando flows de retargeting estructurados en múltiples canales." },
  { icon: Bookmark, title: "Rastreamos el LTV del estudiante y construimos revenue expansion programs", desc: "Desde upsells y renovaciones hasta mecánicas de referidos — construimos los sistemas que aumentan el lifetime value de cada aprendiz." },
];

const funnelSteps = [
  {
    icon: Search,
    step: "01",
    title: "Generación de tráfico calificado",
    desc: "Encontramos a tu audiencia donde vive — búsqueda, ads y redes sociales — y la llevamos a landing pages de alto rendimiento diseñadas para una sola cosa: la acción.",
  },
  {
    icon: Target,
    step: "02",
    title: "Transformación de lead a cliente",
    desc: "Usamos tu LMS para capturar el interés a través de previews y mini-cursos. Nuestro equipo gestiona las secuencias de nurturing que convierten leads fríos en estudiantes leales con ofertas que no pueden ignorar.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Retención y expansión",
    desc: "La educación es la herramienta de retención definitiva. Gestionamos tu presencia en app móvil y push notifications para mantener a los aprendices comprometidos, impulsando in-app purchases y aumentando tu Net Revenue Retention.",
  },
];

const industries = [
  { name: "Finanzas", desc: "Construimos funnels de calificación de leads, automatizamos el nurturing de asesores y rastreamos la atribución desde el webinar hasta la inscripción." },
  { name: "Salud", desc: "Ejecutamos campañas de formación en cumplimiento normativo, gestionamos secuencias de re-engagement y medimos el CAC y el LTV en todos los programas." },
  { name: "Corporativo", desc: "Orquestamos campañas de formación interna, segmentamos por departamento y entregamos reportes de ROI de aprendizaje para el C-Suite." },
  { name: "Fitness", desc: "Lanzamos funnels de suscripción, gestionamos promociones de temporada y convertimos usuarios de prueba en miembros de pago con alto LTV." },
  { name: "Educación", desc: "Construimos funnels completos de inscripción, ejecutamos campañas de early-access y atribuimos el revenue a cada touchpoint de marketing." },
  { name: "Coaching", desc: "Automatizamos el seguimiento de leads, promovemos programas grupales y ejecutamos las secuencias de conversión que cierran prospectos calificados." },
];

const faqs = [
  {
    question: "¿Qué incluye el servicio de ejecución de marketing de merahki.ai?",
    answer: "Nuestro servicio cubre el ciclo completo de marketing: estrategia, creación de assets, integración de stack, configuración de automatización, gestión de campañas, conversion tracking, SEO, paid media, reporting y optimización continua. Obtienes un squad dedicado — no una suscripción de software.",
  },
  {
    question: "¿En qué se diferencia esto de comprar software de marketing?",
    answer: "No obtienes otro dashboard que gestionar. Obtienes un equipo que opera dentro de tu stack existente y ejecuta cada actividad de crecimiento por ti — desde construir landing pages hasta ejecutar A/B tests — mientras tú monitorizas los resultados.",
  },
  {
    question: "¿Con qué herramientas trabaja merahki.ai?",
    answer: "Trabajamos con Mailchimp, ActiveCampaign, ConvertKit, HubSpot, Zapier, Make, Google Analytics, Facebook Pixel, Google Tag Manager, Stripe y más. Nos adaptamos a tu stack actual — no te forzamos a cambiar de herramientas.",
  },
  {
    question: "¿Cómo gestionáis el reporting y la atribución?",
    answer: "Rastreamos CAC, LTV, NRR, tasas de conversión del funnel y atribución de revenue en cada canal. Los reportes se automatizan y se entregan directamente a tus stakeholders — sin exportaciones manuales, sin métricas de vanidad.",
  },
  {
    question: "¿Cuánto tiempo se tarda en ver resultados?",
    answer: "La mayoría de los clientes ven mejoras medibles en la calidad de los leads y la conversión del funnel en los primeros 30–60 días. El SEO y el crecimiento orgánico se compone a lo largo de 90–180 días. Priorizamos los quick wins primero mientras construimos infraestructura de crecimiento a largo plazo en paralelo.",
  },
  {
    question: "¿Mantenemos la propiedad de nuestros assets y datos de marketing?",
    answer: "Sí. Cada asset que construimos — landing pages, secuencias de email, automatizaciones, creativos de anuncios — es de tu propiedad total. Todos los datos viven en tus cuentas. Los operamos en tu nombre, pero todo te pertenece en cualquier momento.",
  },
];

export default function MarketingYourCoursesPageES() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 px-6 text-center">
        <GlowBackground
          indigoPosition={{ x: "30%", y: "40%" }}
          rustPosition={{ x: "70%", y: "60%" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <AnimatedSection immediate>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">
              Marketing Your Courses
            </span>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Tu{" "}
              <span className="text-gradient-blue-pink">
                Growth Engine tercerizado para academies
              </span>
            </h1>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Deja de comprar software que no tienes tiempo de gestionar. Somos el equipo de ejecución de marketing que escala tu academy usando el stack best-in-class. merahki.ai no te da otro dashboard; te da un squad dedicado para gestionar tu crecimiento de extremo a extremo.
            </p>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.3}>
            <Link
              href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
            >
              Agenda un Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <LogoCarousel />

      {/* ── Pillars ── */}
      <section className="py-14 px-6 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((p) => (
                <div key={p.text} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <p.icon className="w-5 h-5 text-accent-purple" />
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Narrative ── */}
      <section className="relative py-16 px-6">
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="narrative-card rounded-2xl p-10 space-y-4 text-center">
              <h2 className="text-2xl font-bold text-white">
                Nosotros gestionamos la ejecución. Tú monitorizas el ROI.
              </h2>
              <p className="text-white/60 leading-relaxed">
                La mayoría de las academies compran software que nunca usan completamente — herramientas que se quedan inactivas mientras el tráfico se pierde y los leads se enfrían.
              </p>
              <p className="text-white/60 leading-relaxed">
                merahki.ai despliega un squad de crecimiento dedicado para gestionar tu motor de marketing de extremo a extremo. Nosotros ejecutamos. Tú escala.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Sales Features ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "20%", y: "50%" }}
          rustPosition={{ x: "80%", y: "30%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                merahki.ai despliega un squad de crecimiento dedicado{" "}
                <span className="text-gradient-blue-pink">para gestionar tu motor de marketing</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {salesFeatures.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-8 space-y-4 h-full">
                  <div className="w-11 h-11 rounded-xl bg-accent-purple/20 flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-accent-purple" />
                  </div>
                  <h3 className="text-white font-semibold leading-snug">{f.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Campaign Features (alternating rows) ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "80%", y: "40%" }}
          rustPosition={{ x: "20%", y: "60%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Nosotros gestionamos la ejecución.{" "}
                <span className="text-gradient-blue-pink">Tú monitorizas el ROI.</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="space-y-24">
            {campaignFeatures.map((f) => (
              <AnimatedSection key={f.title} delay={0.1}>
                <div className={`flex flex-col gap-10 items-center ${f.reverse ? "md:flex-row-reverse" : "md:flex-row"}`}>
                  <div className="flex-1 space-y-6">
                    <div className="w-11 h-11 rounded-xl bg-accent-purple/20 flex items-center justify-center">
                      <f.icon className="w-5 h-5 text-accent-purple" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{f.title}</h3>
                    <p className="text-white/65 leading-relaxed">{f.desc}</p>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="relative rounded-2xl border border-white/10 bg-white/5 shadow-2xl aspect-[16/10] flex items-center justify-center">
                      <div className="text-center space-y-2 pointer-events-none">
                        <f.icon className="w-10 h-10 text-white/15 mx-auto" />
                        <p className="text-white/20 text-xs tracking-widest uppercase">Imagen próximamente</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Digital Features Grid ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "50%", y: "50%" }}
          rustPosition={{ x: "20%", y: "30%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Ejecución de crecimiento{" "}
                <span className="text-gradient-blue-pink">full-cycle</span>
              </h2>
              <p className="text-white/50 mt-4 max-w-2xl mx-auto">
                Cada palanca de crecimiento — construida, operada y optimizada por nuestro equipo para que nunca tengas que gestionarla solo.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {digitalFeatures.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.06}>
                <div className="glass-card rounded-2xl p-6 space-y-3 h-full">
                  <div className="w-10 h-10 rounded-xl bg-accent-blue/20 flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-accent-blue" />
                  </div>
                  <h3 className="text-white font-semibold text-sm leading-snug">{f.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Marketing Automation Funnel ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "70%", y: "40%" }}
          rustPosition={{ x: "30%", y: "60%" }}
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ejecución automatizada para{" "}
                <span className="text-gradient-blue-pink">maximizar el LTV del estudiante</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {funnelSteps.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.1}>
                <div className="relative glass-card rounded-2xl p-8 space-y-4 h-full">
                  <span className="text-5xl font-bold text-white/8 absolute top-6 right-6 leading-none select-none">
                    {step.step}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-accent-peach/20 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-accent-peach" />
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">{step.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="relative py-24 px-6">
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                Cómo diferentes industrias usan las{" "}
                <span className="text-gradient-blue-pink">herramientas de marketing de merahki.ai</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind, i) => (
              <AnimatedSection key={ind.name} delay={i * 0.08}>
                <div className="glass-card rounded-2xl p-6 space-y-3 h-full">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-purple" />
                    <h3 className="text-white font-semibold">{ind.name}</h3>
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed">{ind.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "20%", y: "50%" }}
          rustPosition={{ x: "80%", y: "60%" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">FAQs</h2>
              <p className="text-white/50 mt-3">
                Todo lo que necesitas saber sobre el marketing de tus cursos con merahki.ai
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="space-y-3">
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
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 px-6 text-center">
        <GlowBackground
          indigoPosition={{ x: "50%", y: "50%" }}
          rustPosition={{ x: "70%", y: "40%" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <AnimatedSection>
            <span className="section-badge text-white/30 mb-2 inline-block">Solo con merahki.ai</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Deja de gestionar herramientas.{" "}
              <span className="text-gradient-blue-pink">Empieza a monitorizar el crecimiento.</span>
            </h2>
            <p className="text-white/50 mt-4 leading-relaxed">
              Un squad dedicado para gestionar tu motor de marketing — desde el tráfico calificado hasta la retención de estudiantes — de extremo a extremo.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Link
              href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all"
            >
              Agenda un Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <MarketingProposal />

      <ContactSection
        heading="Empieza a hacer marketing de tus cursos de forma más inteligente"
        subheading="Conecta tu stack de marketing con tu academy e impulsa la inscripción, la retención y el revenue desde una sola plataforma."
      />
    </div>
  );
}
