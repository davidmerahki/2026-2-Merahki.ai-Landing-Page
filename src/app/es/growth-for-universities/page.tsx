import type { Metadata } from "next";
import Image from "next/image";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AgentCard from "@/components/ui/AgentCard";
import ContactSection from "@/components/sections/ContactSection";
import OurProposal from "@/components/sections/OurProposal";
import LogoCarousel from "@/components/sections/LogoCarousel";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Brain,
  GraduationCap,
  Users,
  BarChart3,
  Megaphone,
  BookOpen,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  RefreshCcw,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Crecimiento para Universidades",
  description:
    "merahki.ai ayuda a universidades e instituciones de educación superior a escalar la matrícula, mejorar la retención estudiantil y ofrecer programas de aprendizaje permanente con academias impulsadas por IA. Desde el reclutamiento de pregrado hasta la educación continua.",
  alternates: {
    canonical: "https://merahki.ai/es/growth-for-universities",
    languages: { en: "https://merahki.ai/growth-for-universities" },
  },
  openGraph: {
    title:
      "Crecimiento para Universidades — Escala Matrícula y Aprendizaje Permanente | merahki.ai",
    description:
      "Plataforma impulsada por IA que ayuda a universidades a escalar la matrícula, mejorar la retención estudiantil, lanzar programas de educación continua y convertir a los egresados en aprendices permanentes.",
    url: "https://merahki.ai/es/growth-for-universities",
    type: "website",
  },
};

const capabilities = [
  {
    icon: Megaphone,
    title: "Marketing de Matrícula y Reclutamiento",
    desc: "Funnels optimizados por IA que convierten prospectos en estudiantes matriculados — desde el primer clic hasta la primera clase.",
    color: "text-rose-400",
  },
  {
    icon: BookOpen,
    title: "Programas Académicos Flexibles",
    desc: "Crea y lanza programas de pregrado, posgrado y micro-credenciales que se adaptan al horario y las metas de cada aprendiz.",
    color: "text-sky-400",
  },
  {
    icon: Brain,
    title: "Creación de Contenido con IA",
    desc: "Transforma planes de estudio, artículos de investigación y grabaciones de clases en cursos digitales atractivos en minutos — no en semestres.",
    color: "text-violet-400",
  },
  {
    icon: Users,
    title: "Engagement y Retención Estudiantil",
    desc: "Detecta estudiantes en riesgo tempranamente con analítica comportamental y despliega intervenciones personalizadas que mejoran las tasas de finalización.",
    color: "text-emerald-400",
  },
  {
    icon: Award,
    title: "Credenciales Digitales y Certificación",
    desc: "Emite certificados verificados en blockchain, micro-credenciales y Open Badges que los empleadores confían y los egresados comparten.",
    color: "text-amber-400",
  },
  {
    icon: BarChart3,
    title: "Analítica Institucional",
    desc: "Dashboards en tiempo real que conectan matrícula, engagement, finalización y resultados de empleabilidad para decisiones basadas en datos.",
    color: "text-cyan-400",
  },
];

const programTypes = [
  {
    label: "Pregrado",
    icon: GraduationCap,
    bullets: [
      "Onboarding interactivo que reduce la deserción de primer año hasta un 35%.",
      "Rutas de aprendizaje adaptativas alineadas a los requisitos del programa.",
      "Engagement gamificado que mantiene a los estudiantes motivados hasta la graduación.",
    ],
  },
  {
    label: "Posgrado y Profesional",
    icon: BookOpen,
    bullets: [
      "Programas flexibles basados en cohortes para profesionales activos.",
      "Módulos de desarrollo de habilidades de investigación y tesis impulsados por IA.",
      "Certificaciones reconocidas por la industria integradas en el currículo.",
    ],
  },
  {
    label: "Educación Continua",
    icon: RefreshCcw,
    bullets: [
      "Lanza programas de micro-credenciales listos para el mercado en semanas.",
      "Convierte redes de egresados en revenue recurrente a través del aprendizaje permanente.",
      "Alianzas de formación corporativa potenciadas por tu marca institucional.",
    ],
  },
];

const stats = [
  {
    metric: "35%",
    desc: "de mejora en la retención estudiantil de primer año con programas de engagement impulsados por IA.",
    color: "from-accent-purple/20",
  },
  {
    metric: "5x",
    desc: "más rápido en la creación de cursos a partir de planes de estudio existentes usando el AI Creator Agent.",
    color: "from-accent-blue/20",
  },
  {
    metric: "70%",
    desc: "de los egresados expresan interés en aprendizaje permanente cuando se les ofrecen micro-credenciales relevantes.",
    color: "from-emerald-500/20",
  },
  {
    metric: "2.4x",
    desc: "de retorno sobre la inversión en marketing con funnels de matrícula optimizados por IA.",
    color: "from-amber-500/20",
  },
];

const agents = [
  {
    name: "Creator Agent",
    availability: "available" as const,
    description:
      "Transforma planes de estudio, grabaciones de clases y artículos académicos en cursos digitales estructurados, evaluaciones y contenido interactivo — en minutos.",
    image: "/images/agents/creator-agent.jpg",
  },
  {
    name: "Manager Agent",
    availability: "early-access" as const,
    description:
      "Gestiona cohortes de estudiantes, rastrea hitos de finalización y genera reportes institucionales usando comandos en lenguaje natural. En expansión mensual a través de nuestro modular intent framework.",
    image: "/images/agents/manager-agent.jpg",
  },
  {
    name: "Learner Agent",
    availability: "early-access" as const,
    description:
      "Dale a cada estudiante un tutor de IA persistente que responde preguntas, recomienda recursos y refuerza el aprendizaje mediante repetición espaciada — 24/7.",
    image: "/images/agents/learner-agent.jpg",
  },
];

const plans = [
  {
    name: "Starter",
    description: "Para instituciones pequeñas y departamentos que lanzan sus primeros programas digitales.",
    features: [
      "Hasta 1,000 aprendices",
      "Constructor de cursos con plantillas",
      "Emisión de certificados digitales",
      "Dashboard de analítica básica",
      "Soporte por email",
    ],
  },
  {
    name: "Growth",
    description: "Para universidades que escalan la matrícula y se expanden a educación continua.",
    features: [
      "Hasta 10,000 aprendices",
      "Todo lo de Starter",
      "Acceso al AI Creator Agent",
      "Constructor de funnels de matrícula",
      "Analítica de retención estudiantil",
      "Programas de micro-credenciales",
      "Soporte prioritario",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "Para grandes universidades y sistemas multi-campus con requisitos complejos.",
    features: [
      "Aprendices ilimitados",
      "Todo lo de Growth",
      "Suite completa de AI Agents (Creator, Manager, Learner)",
      "Integraciones personalizadas (SIS, LRS, xAPI, CRM)",
      "Academia white-label",
      "Success manager dedicado",
      "SLA y soporte de cumplimiento",
    ],
  },
];

export default function GrowthForUniversitiesPageES() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 text-center">
        <GlowBackground
          indigoPosition={{ x: "30%", y: "40%" }}
          rustPosition={{ x: "70%", y: "60%" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <AnimatedSection immediate>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">
              Crecimiento para Universidades
            </span>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Un motor de crecimiento{" "}
              <span className="text-gradient-peach-purple">centrado en el estudiante</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Escala la matrícula, mejora la retención y convierte a cada
              egresado en un aprendiz permanente — con programas impulsados por
              IA que se adaptan al recorrido de cada estudiante.
            </p>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
              >
                Agenda un Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <LogoCarousel />

      {/* Narrativa del Problema */}
      <section className="relative py-16 px-6">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <div className="narrative-card rounded-2xl p-10 space-y-4">
              <h2 className="text-2xl font-bold text-white">
                El desafío que enfrentan las universidades hoy
              </h2>
              <p className="text-white/60 leading-relaxed">
                La matrícula es cada vez más competitiva. Las expectativas de los
                estudiantes son más altas que nunca. Y la demanda de educación
                flexible y relevante para la carrera se extiende mucho más allá
                del título tradicional de cuatro años.
              </p>
              <p className="text-white/60 leading-relaxed">
                merahki.ai le da a las universidades las herramientas para
                atraer, involucrar y retener estudiantes en cada etapa — desde la
                primera consulta hasta el aprendizaje permanente de egresados —
                con IA que escala el impacto de tu institución sin escalar tu
                equipo.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Grid de 6 Capacidades */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "20%", y: "50%" }}
          rustPosition={{ x: "80%", y: "40%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Capacidades de plataforma
                <br />
                <span className="text-gradient-peach-purple">
                  para el crecimiento académico
                </span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {capabilities.map((cap, i) => (
              <AnimatedSection key={cap.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 space-y-3 h-full hover:bg-white/[0.04] transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                      <cap.icon className={`w-5 h-5 ${cap.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {cap.title}
                    </h3>
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed pl-[52px]">
                    {cap.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de Programa */}
      <section className="relative py-20 px-6">
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold">
                Diseñado para cada{" "}
                <span className="text-gradient-blue-pink">tipo de programa</span>
              </h2>
              <p className="text-white/50 mt-4 max-w-xl mx-auto">
                Desde títulos tradicionales hasta micro-credenciales — una
                plataforma para todo el ciclo de vida del aprendiz.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programTypes.map((pt, i) => (
              <AnimatedSection key={pt.label} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 space-y-4 h-full">
                  <div className="w-10 h-10 rounded-xl bg-accent-purple/15 flex items-center justify-center">
                    <pt.icon className="w-5 h-5 text-accent-purple" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{pt.label}</h3>
                  <ul className="space-y-2.5">
                    {pt.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-white/60"
                      >
                        <span className="text-accent-purple mt-0.5">✦</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="relative py-20 px-6">
        <GlowBackground
          indigoPosition={{ x: "60%", y: "50%" }}
          rustPosition={{ x: "30%", y: "40%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold">
                Impacto{" "}
                <span className="text-gradient-peach-purple">medible</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <AnimatedSection key={s.metric} delay={i * 0.1}>
                <div
                  className={`rounded-2xl p-7 border border-white/10 bg-gradient-to-br ${s.color} to-transparent space-y-2`}
                >
                  <p className="text-4xl font-bold text-gradient-peach-purple">
                    {s.metric}
                  </p>
                  <p className="text-white/55 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents */}
      <section className="relative py-20 px-6" id="agents">
        <GlowBackground
          indigoPosition={{ x: "70%", y: "40%" }}
          rustPosition={{ x: "20%", y: "60%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="section-badge text-white/30 mb-4 inline-block">
                Powered by merahki.ai
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                AI agents diseñados para la{" "}
                <span className="text-gradient-blue-pink">
                  educación superior
                </span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {agents.map((agent, i) => (
              <AnimatedSection
                key={agent.name}
                delay={i * 0.1}
                className="h-full"
              >
                <AgentCard
                  name={agent.name}
                  availability={agent.availability}
                  description={agent.description}
                  image={agent.image}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Planes */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "50%", y: "40%" }}
          rustPosition={{ x: "50%", y: "60%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold">
                Planes para cada{" "}
                <span className="text-gradient-peach-purple">institución</span>
              </h2>
              <p className="text-white/50 mt-4 max-w-xl mx-auto">
                Desde departamentos individuales hasta sistemas universitarios
                multi-campus — elige el plan que se adapta a tu escala.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <AnimatedSection key={plan.name} delay={i * 0.1}>
                <div
                  className={`rounded-2xl p-8 border space-y-5 h-full flex flex-col ${
                    plan.highlighted
                      ? "border-accent-purple/50 bg-accent-purple/5"
                      : "border-white/10 bg-white/[0.02]"
                  }`}
                >
                  {plan.highlighted && (
                    <span className="inline-flex self-start items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-accent-purple/20 text-accent-purple">
                      Más Popular
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                  <ul className="space-y-2.5 flex-1">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-white/65"
                      >
                        <span className="text-accent-purple mt-0.5">✦</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full text-sm font-semibold transition-all ${
                      plan.highlighted
                        ? "bg-accent-purple text-white hover:bg-accent-purple/85"
                        : "border border-white/15 text-white/80 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    Comenzar <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Solo con merahki.ai */}
      <section className="relative py-24 px-6 text-center">
        <GlowBackground
          indigoPosition={{ x: "50%", y: "50%" }}
          rustPosition={{ x: "30%", y: "60%" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <AnimatedSection>
            <span className="section-badge text-white/30 mb-2 inline-block">
              Solo con merahki.ai
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              La plataforma AI-native{" "}
              <span className="text-gradient-peach-purple">
                diseñada para la educación superior
              </span>
            </h2>
            <p className="text-white/50 mt-4 leading-relaxed">
              Desde la matrícula hasta los egresados — una plataforma que
              convierte cada etapa del recorrido estudiantil en crecimiento
              medible.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Link
              href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all"
            >
              Comenzar <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <OurProposal />

      <ContactSection
        heading="Escala el crecimiento de tu universidad"
        subheading="Descubre cómo merahki.ai ayuda a las instituciones a aumentar la matrícula, mejorar la retención y lanzar programas de aprendizaje permanente."
      />
    </div>
  );
}
