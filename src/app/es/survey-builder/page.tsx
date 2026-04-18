import type { Metadata } from "next";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import LogoCarousel from "@/components/sections/LogoCarousel";
import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  Sparkles,
  LayoutDashboard,
  UserCheck,
  GitBranch,
  ShieldCheck,
  MousePointerClick,
  Share2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Survey Builder",
  description:
    "Crea formularios y encuestas con tu marca con merahki.ai. Captura leads, recopila feedback, mide NPS y analiza respuestas — todo desde un dashboard.",
  openGraph: {
    title: "Survey Builder — merahki.ai",
    description:
      "Captura leads, feedback e insights sin salir de tu academia. Formularios y encuestas impulsados por IA construidos para education-led growth.",
    url: "https://merahki.ai/es/survey-builder",
    type: "website",
  },
  alternates: {
    canonical: "https://merahki.ai/es/survey-builder",
    languages: { en: "https://merahki.ai/survey-builder" },
  },
};

const stats = [
  { value: "10+", label: "Tipos de preguntas soportados" },
  { value: "3×", label: "Mayor finalización con lógica condicional" },
  { value: "100%", label: "Formularios con tu marca, sin código" },
];

const buildFeatures = [
  {
    icon: ClipboardList,
    title: "Encuestas poderosas para recopilar datos clave de clientes",
    desc: "Ya sea que quieras capturar y calificar leads, evaluar preferencias de aprendices, recopilar puntuaciones NPS o evaluar un curso, hay un formato de encuesta que lo soporta. Elige los formatos que necesitas o crea tu propio formulario o encuesta única.",
  },
  {
    icon: Sparkles,
    title: "Créalos desde cero o con IA en minutos",
    desc: "Crea formularios y encuestas elegantes con un constructor que no requiere código. Agrega condiciones, personaliza el flujo, o usa diálogos guiados por IA para crear encuestas más atractivas y guarda la conversación como respuesta.",
  },
  {
    icon: LayoutDashboard,
    title: "Gestiona todo desde un único dashboard",
    desc: "Visualiza, edita y reutiliza tus formularios y encuestas de marketing o relacionados con cursos. Consulta respuestas, rastrea dónde se usa cada formulario en tu academia y actualiza todo en pocos clics.",
  },
];

const marketingFeatures = [
  {
    icon: UserCheck,
    title: "Captura y califica leads con facilidad",
    desc: "Recopila la información exacta de la audiencia que necesitas — caso de uso, rol, objetivos, presupuesto, timeline — para personalizar tu mensajería y ofertas.",
  },
  {
    icon: GitBranch,
    title: "Convierte formularios en un embudo de ventas efectivo",
    desc: "Usa formularios para redirigir prospectos al siguiente paso correcto: un bundle de cursos, una repetición de webinar, una reserva de consulta o una oferta de alta intención. Haz cross-sell y upsell con menos fricción.",
  },
  {
    icon: ShieldCheck,
    title: "Obtén consentimiento fácilmente con formularios listos para usar",
    desc: "Mantén la seguridad y la claridad al frente con formularios de consentimiento personalizables que refuerzan tus normas y expectativas.",
  },
];

const useCases = [
  "Registro pre-lanzamiento",
  "Evalúa cursos",
  "Captura de leads",
  "Suscripción a newsletter",
  "Conoce tu audiencia",
  "Recopila feedback",
  "Recolección de demografía",
  "Reseñas de social proof",
  "Onboarding de aprendices",
  "Mide Net Promoter Score",
];

const steps = [
  {
    number: "01",
    icon: MousePointerClick,
    title: "Comienza desde cero o usa plantillas listas",
    desc: "Elige un lienzo en blanco para control total, o impulsa tu formulario con una plantilla diseñada profesionalmente adaptada a tu caso de uso.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Personaliza con drag & drop o IA",
    desc: "Haz clic, arrastra y suelta para personalizar y ubicar el formulario, o usa nuestro asistente de IA para poblarlo con preguntas inteligentes adaptadas a tu audiencia.",
  },
  {
    number: "03",
    icon: Share2,
    title: "Publica, inserta o comparte en cualquier lugar",
    desc: "Convierte tu formulario en una actividad de aprendizaje, insértalo en cualquier lugar de tu sitio, o comparte un enlace para capturar leads a través de tus canales de marketing.",
  },
];

const industries = [
  { name: "Finanzas", desc: "Califica inversores, recopila consentimientos de cumplimiento y mide la efectividad de la formación de asesores." },
  { name: "Salud", desc: "Haz onboarding de pacientes, captura informes de incidentes y mide los resultados de la formación clínica." },
  { name: "Corporativo", desc: "Realiza encuestas pulse, recopila feedback de onboarding y segmenta empleados por rol o nivel de habilidad." },
  { name: "Fitness", desc: "Captura objetivos de nuevos miembros, mide la satisfacción de clases y califica prospectos de coaching." },
  { name: "Educación", desc: "Evalúa conocimientos previos, recopila feedback de cursos y segmenta aprendices por nivel de experiencia." },
  { name: "Coaching", desc: "Califica leads, recopila detalles de intake de clientes y mide puntuaciones de satisfacción de sesiones." },
];

export default function SurveyBuilderEsPage() {
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
              Survey Builder
            </span>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Captura leads, feedback e insights —{" "}
              <span className="text-gradient-blue-pink">
                sin salir de tu academia
              </span>
            </h1>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Crea formularios y encuestas con tu marca con merahki.ai. Captura
              leads, recopila feedback, mide NPS y analiza respuestas — todo
              desde un dashboard.
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

      {/* ── Stats Bar ── */}
      <section className="py-12 px-6 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-3 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-3xl md:text-4xl font-bold text-gradient-blue-pink">
                    {stat.value}
                  </p>
                  <p className="text-white/50 text-sm">{stat.label}</p>
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
                Los datos que necesitas, recopilados donde ocurre el aprendizaje
              </h2>
              <p className="text-white/60 leading-relaxed">
                La mayoría de las academias dependen de herramientas
                desconectadas para capturar feedback, calificar leads y medir
                la satisfacción. El resultado son datos fragmentados, señales
                perdidas y decisiones lentas.
              </p>
              <p className="text-white/60 leading-relaxed">
                merahki.ai integra formularios y encuestas directamente en tu
                experiencia de academia — para que captures los datos correctos
                en cada etapa del journey del aprendiz, sin fricción.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Build Forms Section ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "20%", y: "50%" }}
          rustPosition={{ x: "80%", y: "30%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Construye formularios y encuestas{" "}
                <span className="text-gradient-blue-pink">
                  que la gente realmente quiere completar
                </span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {buildFeatures.map((f, i) => (
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

      {/* ── Marketing Section ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "80%", y: "40%" }}
          rustPosition={{ x: "20%", y: "60%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Maximiza tus esfuerzos de marketing{" "}
                <span className="text-gradient-blue-pink">e impulsa tus ventas</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marketingFeatures.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-8 space-y-4 h-full">
                  <div className="w-11 h-11 rounded-xl bg-accent-blue/20 flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-accent-blue" />
                  </div>
                  <h3 className="text-white font-semibold leading-snug">{f.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases Chips ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "50%", y: "50%" }}
          rustPosition={{ x: "30%", y: "30%" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Usa formularios y encuestas para{" "}
              <span className="text-gradient-blue-pink">
                marketing, eLearning y propósitos de negocio
              </span>
            </h2>
            <p className="text-white/50 mt-4 max-w-2xl mx-auto leading-relaxed">
              Desde captura de leads y registro pre-lanzamiento hasta onboarding
              y feedback post-curso — el survey builder de merahki.ai te ayuda
              a recopilar los datos correctos en cada etapa.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {useCases.map((uc) => (
                <span
                  key={uc}
                  className="px-4 py-2 rounded-full border border-accent-purple/30 bg-accent-purple/10 text-white/70 text-sm font-medium"
                >
                  {uc}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 3 Steps ── */}
      <section className="relative py-24 px-6">
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                3 pasos sencillos para crear{" "}
                <span className="text-gradient-blue-pink">tus propios formularios</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.1}>
                <div className="relative glass-card rounded-2xl p-8 space-y-4 h-full">
                  <span className="text-5xl font-bold text-white/8 absolute top-6 right-6 leading-none select-none">
                    {step.number}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-accent-purple/20 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-accent-purple" />
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
        <GlowBackground
          indigoPosition={{ x: "70%", y: "50%" }}
          rustPosition={{ x: "20%", y: "40%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                Cómo usan diferentes industrias los{" "}
                <span className="text-gradient-blue-pink">formularios y encuestas de merahki.ai</span>
              </h2>
              <p className="text-white/50 mt-4 max-w-2xl mx-auto">
                Cada industria necesita mejores datos para tomar mejores decisiones de aprendizaje y negocio.
                merahki.ai te permite capturar intención, segmentar audiencias, personalizar la formación
                y probar el impacto fácilmente.
              </p>
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

      {/* ── CTA ── */}
      <section className="relative py-24 px-6 text-center">
        <GlowBackground
          indigoPosition={{ x: "50%", y: "50%" }}
          rustPosition={{ x: "70%", y: "40%" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <AnimatedSection>
            <span className="section-badge text-white/30 mb-2 inline-block">
              Solo con merahki.ai
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Obtén el #1 constructor de formularios y encuestas{" "}
              <span className="text-gradient-blue-pink">dentro de tu academia online</span>
            </h2>
            <p className="text-white/50 mt-4 leading-relaxed">
              Captura leads, recopila feedback y mide el impacto — todo sin
              salir de tu academia.
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

      <ContactSection
        heading="Empieza a recopilar insights más inteligentes"
        subheading="Construye formularios y encuestas que capturen los datos correctos en cada etapa del journey de tu aprendiz — con merahki.ai."
      />
    </div>
  );
}
