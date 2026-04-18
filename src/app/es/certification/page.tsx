import type { Metadata } from "next";
import Image from "next/image";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FeatureCard from "@/components/ui/FeatureCard";
import ContactSection from "@/components/sections/ContactSection";
import LogoCarousel from "@/components/sections/LogoCarousel";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BarChart3,
  Globe,
  Layers,
  Shield,
  Zap,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Certifications at Scale",
  description:
    "Emite credenciales digitales verificables y microcredenciales como NFTs en la blockchain con merahki.ai y POK. Soportamos Open Badges 3.0, W3C VC, ELM/Europass, ISO 27001 y SOC 2. 1,100+ instituciones en 19+ países. Versión 100% gratuita e ilimitada disponible ahora.",
  alternates: {
    canonical: "https://merahki.ai/es/certification",
    languages: { en: "https://merahki.ai/certification" },
  },
  openGraph: {
    title: "Certifications at Scale — Credenciales digitales verificables | merahki.ai",
    description:
      "Emite credenciales digitales verificables y microcredenciales como NFTs en la blockchain. POK + merahki.ai: Open Badges 3.0, W3C VC, Europass, ISO 27001 & SOC 2.",
    url: "https://merahki.ai/es/certification",
    type: "website",
  },
};

const features = [
  {
    icon: Zap,
    title: "Evaluaciones generadas por IA",
    desc: "Crea cuestionarios, simulaciones y escenarios ramificados en minutos a partir de contenido existente. La dificultad adaptativa mantiene a los aprendices comprometidos.",
    color: "text-accent-peach",
    bg: "bg-accent-peach/10",
  },
  {
    icon: Award,
    title: "Certification Management",
    desc: "Emite certificados digitales con tu marca al instante. Configura vencimientos, criterios de renovación y rastrea el estado en toda tu base de aprendices.",
    color: "text-accent-purple",
    bg: "bg-accent-purple/10",
  },
  {
    icon: Shield,
    title: "Credenciales a prueba de fraude",
    desc: "Credenciales verificables e inviolables vinculadas a la identidad del aprendiz y a los datos de finalización del programa.",
    color: "text-accent-blue",
    bg: "bg-accent-blue/10",
  },
  {
    icon: Layers,
    title: "Programas multi-nivel",
    desc: "Construye rutas de certificación escalonadas — desde fundamentos hasta experto — con acceso por prerrequisitos y tracks basados en roles.",
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
  {
    icon: Globe,
    title: "Distribución global",
    desc: "Localiza evaluaciones en 50+ idiomas. Asegura que cada aprendiz en el mundo tenga el mismo camino hacia la certificación.",
    color: "text-accent-peach",
    bg: "bg-accent-peach/10",
  },
  {
    icon: BarChart3,
    title: "Certification Analytics",
    desc: "Rastrea tasas de aprobación, velocidad de finalización e intentos repetidos. Identifica gaps antes de que se conviertan en riesgos de retención.",
    color: "text-accent-purple",
    bg: "bg-accent-purple/10",
  },
];

const useCases = [
  {
    title: "Customer Certification",
    desc: "Valida la experiencia del cliente con programas de certificación de producto que impulsan la fidelización y reducen el churn.",
    icon: "👤",
  },
  {
    title: "Partner Certification",
    desc: "Acredita tu red de partners para construir confianza, aumentar la preparación para ventas y desbloquear beneficios por tier.",
    icon: "🤝",
  },
  {
    title: "Certificación de Empleados",
    desc: "Mantén el cumplimiento normativo, demuestra competencias y apoya el desarrollo profesional con certificación interna estructurada.",
    icon: "🏢",
  },
  {
    title: "Certificación de Industria",
    desc: "Lanza credenciales estándar de la industria que posicionan a tu organización como la autoridad en tu campo.",
    icon: "🌍",
  },
];

const standards = [
  {
    label: "Open Badges 3.0",
    desc: "Estándar global para credenciales verificables — compatible con las principales plataformas educativas y de empleabilidad del mundo.",
  },
  {
    label: "European Learning Model (Europass)",
    desc: "Garantiza el reconocimiento en los estados miembros de la UE y países asociados, con integración automática al perfil Europass.",
  },
  {
    label: "GDPR Compliant",
    desc: "Cumplimiento estricto con las regulaciones de protección de datos más exigentes del mundo.",
  },
  {
    label: "LTI Integration",
    desc: "Integración fluida y segura con cualquier LMS mediante Learning Tools Interoperability — sin interrumpir los flujos de trabajo existentes.",
  },
  {
    label: "ISO 27001 & SOC 2",
    desc: "Certificaciones de seguridad de nivel enterprise que garantizan la protección completa de los datos de tu institución.",
  },
  {
    label: "Verificación en Blockchain",
    desc: "Credenciales registradas on-chain como NFTs — inviolables, criptográficamente únicas e independientemente verificables en cualquier lugar.",
  },
];

const faqs = [
  {
    q: "¿Qué es una credencial digital verificable?",
    a: "Una credencial digital verificable es un registro de logro firmado criptográficamente e inviolable. Cada credencial contiene todos los metadatos relevantes — nombre del receptor, fecha de emisión, identidad del emisor y criterios del logro — y puede ser verificada de forma independiente por cualquier persona, en cualquier lugar, sin necesidad de que la plataforma emisora esté activa.",
  },
  {
    q: "¿Qué es el European Learning Model (ELM / Europass)?",
    a: "El European Learning Model es el marco oficial de la UE para credenciales digitales. merahki.ai emite credenciales compatibles con ELM, lo que significa que son reconocidas en los estados miembros de la UE, se integran automáticamente con los perfiles Europass y apoyan la movilidad académica y profesional de los aprendices en todo el mundo.",
  },
  {
    q: "¿Las credenciales están verificadas en blockchain y son inviolables?",
    a: "Sí. Las credenciales pueden registrarse on-chain como NFTs — tokens únicos, no reproducibles con un rastro de auditoría completo. Son criptográficamente validadas, verificables de forma independiente y permanentemente rastreables, sin dependencia del uptime de ninguna plataforma.",
  },
  {
    q: "¿Cómo se integra merahki.ai con las plataformas existentes?",
    a: "merahki.ai soporta LTI (Learning Tools Interoperability), APIs abiertas e integraciones nativas con Moodle, Canvas, Blackboard, Google Classroom, Open edX y Brightspace — además de CRMs como Salesforce y HubSpot. Puedes empezar a emitir credenciales en minutos sin interrumpir los flujos de trabajo existentes.",
  },
];

const comparisonRows = [
  { feature: "Evaluaciones generadas por IA", us: true, them: false },
  { feature: "Credenciales digitales con tu marca", us: true, them: true },
  { feature: "Recordatorios automáticos de renovación", us: true, them: false },
  { feature: "Analytics vinculado a revenue", us: true, them: false },
  { feature: "Rutas de certificación multi-nivel", us: true, them: true },
  { feature: "Soporte multi-idioma", us: true, them: false },
  { feature: "LMS completo + cursos, sesiones en vivo, AI assistant y Ecosystem de analytics", us: true, them: false },
];

export default function CertificationPageES() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      {/* Hero — text left / image right */}
      <section className="relative pt-32 pb-20 px-6">
        <GlowBackground
          indigoPosition={{ x: "30%", y: "40%" }}
          rustPosition={{ x: "70%", y: "60%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col gap-12 items-center md:flex-row">
            {/* Text */}
            <div className="flex-1 space-y-6">
              <AnimatedSection immediate>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-purple/30 bg-accent-purple/10 text-accent-purple text-xs font-medium tracking-widest uppercase">
                  Certifications at Scale
                </span>
              </AnimatedSection>
              <AnimatedSection immediate delay={0.1}>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Emite credenciales digitales verificables y microcredenciales como NFTs en la blockchain.{" "}
                  <span className="text-gradient-peach-purple">¡Prueba la versión 100% gratuita e ilimitada ahora!</span>
                </h1>
              </AnimatedSection>
              <AnimatedSection immediate delay={0.2}>
                <p className="text-lg text-white/60 leading-relaxed">
                  POK es el partner global de merahki.ai para la emisión de credenciales digitales verificables y microcredenciales.
                </p>
              </AnimatedSection>
              <AnimatedSection immediate delay={0.25}>
                <div className="flex flex-wrap gap-2">
                  {[
                    "1,100+ universidades, gobiernos y empresas",
                    "19 países",
                    "ISO 27001 · SOC 2 · 1EdTech certificados",
                    "Open Badges 3.0 · W3C VC · ELM/Europass",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </AnimatedSection>
              <AnimatedSection immediate delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
                  >
                    Accede a la versión 100% gratuita ahora <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="https://certificates.the-world-university.com/c/5b7dd714-80e5-4c21-8beb-13130c3d0478" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white border border-white/20 hover:bg-white/5 transition-all text-sm"
                  >
                    Ver un ejemplo <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </AnimatedSection>
              <AnimatedSection immediate delay={0.4}>
                <div className="flex items-center gap-2">
                  <span className="text-white/30 text-xs">Powered by</span>
                  <div className="relative h-5 w-20">
                    <Image
                      src="/images/certifications%20at%20scale/Pok-tech%20(1).png"
                      alt="POK.tech"
                      fill
                      className="object-contain brightness-0 invert opacity-30"
                      sizes="80px"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
            {/* Hero image */}
            <AnimatedSection immediate delay={0.2} className="flex-1 w-full">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/certifications%20at%20scale/hero%20image%20for%20certification%20at%20scale.webp"
                  alt="Credenciales digitales verificables en la blockchain"
                  width={900}
                  height={720}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <LogoCarousel />

      {/* Stats Bar */}
      <section className="py-12 px-6 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "1,100+", label: "Instituciones en todo el mundo" },
                { value: "19+", label: "Países" },
                { value: "1.5M+", label: "Credenciales emitidas" },
                { value: "1M+", label: "Credenciales compartidas" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-3xl md:text-4xl font-bold text-gradient-peach-purple">
                    {stat.value}
                  </p>
                  <p className="text-white/50 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-20 px-6">
        <GlowBackground
          indigoPosition={{ x: "80%", y: "40%" }}
          rustPosition={{ x: "15%", y: "60%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Todo lo que necesitas para ejecutar una{" "}
                <span className="text-gradient-blue-pink">
                  certificación de clase mundial
                </span>
              </h2>
              <p className="text-white/50">
                Desde la creación de evaluaciones impulsada por IA hasta la entrega de credenciales a prueba de fraude.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.08}>
                <FeatureCard
                  icon={f.icon}
                  title={f.title}
                  description={f.desc}
                  iconClassName={f.color}
                  iconBg={f.bg}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="relative py-20 px-6">
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Construido con los{" "}
                <span className="text-gradient-peach-purple">más altos estándares</span>
              </h2>
              <p className="text-white/50">
                Certificado, conforme e interoperable — a nivel global.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {standards.map((std, i) => (
              <AnimatedSection key={std.label} delay={i * 0.07}>
                <div className="glass-card rounded-2xl p-5 space-y-2 h-full">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-accent-purple flex-shrink-0" />
                    <span className="text-white font-semibold text-sm">{std.label}</span>
                  </div>
                  <p className="text-white/50 text-xs leading-relaxed">{std.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative py-20 px-6">
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Una plataforma,{" "}
                <span className="text-gradient-peach-purple">para todas las audiencias</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {useCases.map((uc, i) => (
              <AnimatedSection key={uc.title} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-6 flex gap-4 items-start h-full hover:border-white/15 transition-all">
                  <span className="text-3xl">{uc.icon}</span>
                  <div className="space-y-2">
                    <h3 className="text-white font-semibold">{uc.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{uc.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 px-6">
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Preguntas{" "}
                <span className="text-gradient-blue-pink">frecuentes</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={faq.q} delay={i * 0.08}>
                <details className="glass-card rounded-2xl group">
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-white font-semibold text-sm select-none">
                    {faq.q}
                    <ChevronDown className="w-4 h-4 text-white/40 flex-shrink-0 transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-5 text-white/55 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="relative py-20 px-6">
        <GlowBackground
          indigoPosition={{ x: "50%", y: "50%" }}
          rustPosition={{ x: "20%", y: "40%" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Por qué{" "}
                <span className="text-gradient-peach-purple">POK + merahki.ai</span>
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <div className="grid grid-cols-3 bg-white/5 px-6 py-4 border-b border-white/10">
                <span className="text-white/40 text-sm font-medium">Feature</span>
                <span className="text-center text-accent-purple text-sm font-semibold">
                  POK + merahki.ai
                </span>
                <span className="text-center text-white/30 text-sm font-medium">
                  Otros
                </span>
              </div>
              {comparisonRows.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 px-6 py-4 items-center ${
                    i % 2 === 0 ? "bg-white/[0.02]" : ""
                  } border-b border-white/5 last:border-0`}
                >
                  <span className="text-white/60 text-sm">{row.feature}</span>
                  <div className="flex justify-center">
                    {row.us ? (
                      <CheckCircle2 className="w-5 h-5 text-accent-purple" />
                    ) : (
                      <span className="text-white/20 text-lg">—</span>
                    )}
                  </div>
                  <div className="flex justify-center">
                    {row.them ? (
                      <CheckCircle2 className="w-5 h-5 text-white/30" />
                    ) : (
                      <span className="text-white/20 text-lg">—</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* NFT Credentials Pricing */}
      <section className="relative py-20 px-6">
        <GlowBackground
          indigoPosition={{ x: "60%", y: "40%" }}
          rustPosition={{ x: "30%", y: "60%" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-8 space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold">
                NFT{" "}
                <span className="text-gradient-peach-purple">Credentials</span>
              </h2>
              <p className="text-white/60 font-medium">
                Condiciones especiales de prepago *
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <div className="grid grid-cols-3 bg-white/5 px-6 py-4 border-b border-white/10">
                <span className="text-white/50 text-sm font-medium">
                  Cantidad de certificados
                </span>
                <span className="text-center text-white/50 text-sm font-medium">
                  Precio por pack **
                </span>
                <span className="text-center text-white/50 text-sm font-medium">
                  Precio por certificado **
                </span>
              </div>
              {[
                { qty: "1,000",   pack: "$2,500",   unit: "$2.50" },
                { qty: "5,000",   pack: "$10,000",  unit: "$2.00" },
                { qty: "10,000",  pack: "$16,500",  unit: "$1.65" },
                { qty: "50,000",  pack: "$62,500",  unit: "$1.25" },
                { qty: "100,000", pack: "$100,000", unit: "$1.00" },
              ].map((row, i) => (
                <div
                  key={row.qty}
                  className={`grid grid-cols-3 px-6 py-4 items-center border-b border-white/5 last:border-0 ${
                    i % 2 === 0 ? "bg-white/[0.02]" : ""
                  }`}
                >
                  <span className="text-white/70 text-sm font-medium">
                    {row.qty}
                  </span>
                  <span className="text-center text-white font-semibold text-sm">
                    {row.pack}
                  </span>
                  <span className="text-center text-accent-purple font-bold text-sm">
                    {row.unit}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="mt-5 text-white/30 text-xs text-center leading-relaxed">
              * Aplican condiciones de prepago. Los precios se fijan al momento de la compra y son válidos para el tamaño de pack acordado.
              <br />
              ** Todos los precios en USD. Pedido mínimo: 1,000 certificados.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Partner logo — POK.tech */}
      <section className="relative py-12 px-6">
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="text-center text-white/50 text-sm mb-6 font-medium">
              Somos partners de la mejor infraestructura de credenciales del mundo
            </p>
            <div className="flex justify-center">
              <div className="bg-white rounded-2xl px-10 py-6 flex items-center justify-center shadow-xl">
                <div className="relative h-14 w-44">
                  <Image
                    src="/images/certifications%20at%20scale/Pok-tech%20(1).png"
                    alt="POK.tech — Partner de infraestructura de credenciales"
                    fill
                    className="object-contain"
                    sizes="176px"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Premium */}
      <section className="relative py-16 px-6">
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-8 space-y-1">
              <h2 className="text-3xl md:text-4xl font-bold">
                Features{" "}
                <span className="text-gradient-peach-purple">Premium</span>
              </h2>
              <p className="text-accent-purple font-semibold">
                Más poder, más control, más impacto
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="glass-card rounded-2xl p-8 space-y-5">
              {[
                {
                  title: "Learning Path Analytics:",
                  body: "rastrea cuántos usuarios inician, completan y avanzan a través de cada learning path.",
                },
                {
                  title: "Leads on Pages:",
                  body: "recopila datos de visitantes en tus páginas de visualización de certificados a través de formularios de leads personalizables.",
                },
                {
                  title: "AdPages Performance Metrics:",
                  body: "mide los clics y el engagement dentro de tus credenciales para optimizar tus campañas.",
                },
                {
                  title: "Employability Insights:",
                  body: "descubre cuántos aprendices consiguieron empleo o fueron promovidos tras compartir sus credenciales en LinkedIn.",
                },
                {
                  title: "Advanced Email Customization:",
                  body: "personaliza contenido, idioma y diseño usando campos dinámicos y edición impulsada por IA.",
                },
                {
                  title: "Custom Email Sender Domain:",
                  body: "envía emails desde el dominio de tu institución en lugar de noreply@pok.tech para fortalecer tu marca.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="text-accent-purple mt-1 flex-shrink-0">●</span>
                  <p className="text-white/70 text-sm leading-relaxed">
                    <span className="font-bold text-white">{item.title}</span>{" "}
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="mt-6 text-center space-y-1">
              <p className="font-bold text-white text-base">
                Features Premium incluidas con tu{" "}
                <span className="text-gradient-peach-purple">
                  compra de créditos de $1,000
                </span>
              </p>
              <p className="text-white/50 text-sm">
                Desbloquea todas las herramientas Premium para tu institución — más alcance, más impacto, más control.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Advocacy */}
      <section className="relative py-20 px-6">
        <GlowBackground
          indigoPosition={{ x: "70%", y: "40%" }}
          rustPosition={{ x: "30%", y: "60%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-col gap-12 items-center md:flex-row">
              <div className="flex-1 space-y-6">
                <div className="w-11 h-11 rounded-xl bg-accent-purple/20 flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent-purple" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                  Cada credencial se transforma en un{" "}
                  <span className="text-gradient-peach-purple">
                    activo digital que impulsa mayor defensibilidad y fidelización.
                  </span>
                </h2>
                <p className="text-white/60 leading-relaxed">
                  Ve más allá de los certificados estáticos. Construye un Ecosystem verificable donde cada logro fortalece tu posición en el mercado y convierte a los usuarios en tus promotores más poderosos.
                </p>
              </div>
              <div className="flex-1 w-full">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
                  <Image
                    src="/images/certifications%20at%20scale/Guido%20credential.png"
                    alt="Credencial digital — activo de fidelización"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 text-center">
        <GlowBackground
          indigoPosition={{ x: "40%", y: "50%" }}
          rustPosition={{ x: "60%", y: "50%" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <AnimatedSection>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-purple to-accent-blue mb-4 mx-auto">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Cada credencial se transforma en un activo digital que impulsa{" "}
              <span className="text-gradient-peach-purple">
                mayor defensibilidad y fidelización.
              </span>
            </h2>
            <p className="text-white/50 mt-4 leading-relaxed">
              Ve más allá de los certificados estáticos. Construye un Ecosystem verificable donde cada logro fortalece tu posición en el mercado y convierte a los usuarios en tus promotores más poderosos.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all"
              >
                Comenzar <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white border border-white/20 hover:bg-white/5 transition-all"
              >
                Hablar con Ventas
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection
        heading="Lanza tu programa de certificación"
        subheading="Únete a organizaciones de todo el mundo que usan merahki.ai para validar la expertise y construir confianza."
      />
    </div>
  );
}
