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
  ShieldCheck,
  GraduationCap,
  Stethoscope,
  BarChart3,
  Gamepad2,
  ClipboardCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Educación Médica",
  description:
    "La plataforma de Educación Médica de merahki.ai ofrece Educación Médica Continua (EMC) impulsada por IA, gestión de acreditación, simulación clínica y evaluaciones basadas en competencias para profesionales de la salud. Reduce el tiempo de competencia, asegura el cumplimiento regulatorio y escala programas de formación clínica con resultados medibles de Kirkpatrick Nivel 4.",
  alternates: {
    canonical: "https://merahki.ai/es/medical-education",
    languages: { en: "https://merahki.ai/medical-education" },
  },
  openGraph: {
    title:
      "Educación Médica — EMC y Formación Clínica con IA | merahki.ai",
    description:
      "Transforma la educación médica con seguimiento de EMC impulsado por IA, gestión de acreditación, simulaciones clínicas y evaluaciones basadas en competencias.",
    url: "https://merahki.ai/es/medical-education",
    type: "website",
  },
};

const pillars = [
  {
    icon: ShieldCheck,
    label: "Cumplimiento EMC",
    color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  },
  {
    icon: Award,
    label: "Acreditación",
    color: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  },
  {
    icon: Stethoscope,
    label: "Simulación Clínica",
    color: "text-sky-400 bg-sky-400/10 border-sky-400/20",
  },
  {
    icon: ClipboardCheck,
    label: "Evaluación",
    color: "text-violet-400 bg-violet-400/10 border-violet-400/20",
  },
  {
    icon: Gamepad2,
    label: "Gamificación",
    color: "text-rose-400 bg-rose-400/10 border-rose-400/20",
  },
  {
    icon: BarChart3,
    label: "Analítica",
    color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Seguimiento y Cumplimiento de EMC",
    bullets: [
      "Automatiza el seguimiento de créditos, reportes y recordatorios de renovación para médicos, enfermeros y profesionales de la salud.",
      "Asegura el cumplimiento con juntas de licenciamiento, requisitos de especialidad y organismos reguladores a través de dashboards en tiempo real.",
    ],
    image: "/images/customer-education/ongoing-skills.jpg",
    imageAlt: "Dashboard de seguimiento de cumplimiento EMC",
    reverse: false,
  },
  {
    icon: Award,
    title: "Gestión de Acreditación",
    bullets: [
      "Agiliza los flujos de acreditación — desde la solicitud hasta la aprobación — con documentación asistida por IA y trazabilidad de auditoría.",
      "Mantén el cumplimiento continuo con los estándares cambiantes de organismos acreditadores y agencias reguladoras.",
    ],
    image: "/images/customer-education/customer-certification.jpg",
    imageAlt: "Flujo de gestión de acreditación",
    reverse: true,
  },
  {
    icon: Stethoscope,
    title: "Simulación de Casos Clínicos",
    bullets: [
      "Despliega escenarios clínicos interactivos con ramificación que se adaptan a las decisiones del aprendiz en tiempo real.",
      "Mide el razonamiento clínico y las habilidades de toma de decisiones con analítica de rendimiento calificada por IA.",
    ],
    image: "/images/customer-education/feature-adoption.png",
    imageAlt: "Interfaz de simulación de casos clínicos",
    reverse: false,
  },
];

const agents = [
  {
    name: "Creator Agent",
    availability: "available" as const,
    description:
      "Transforma guías clínicas, artículos de investigación y protocolos en cursos estructurados, casos de estudio y evaluaciones — en minutos, no en meses.",
    image: "/images/agents/creator-agent.jpg",
  },
  {
    name: "Manager Agent",
    availability: "early-access" as const,
    description:
      "Asigna rutas de formación por especialidad, rastrea créditos de EMC y genera reportes de cumplimiento usando comandos en lenguaje natural. En expansión mensual a través de nuestro modular intent framework.",
    image: "/images/agents/manager-agent.jpg",
  },
  {
    name: "Learner Agent",
    availability: "early-access" as const,
    description:
      "Ofrece a los clínicos un tutor de IA persistente que responde preguntas clínicas, recomienda recursos basados en evidencia y refuerza el aprendizaje mediante repetición espaciada.",
    image: "/images/agents/learner-agent.jpg",
  },
];

const stats = [
  {
    metric: "89%",
    desc: "de las organizaciones de salud reportan mejores resultados de cumplimiento con programas de EMC digital estructurados.",
    color: "from-accent-purple/20",
  },
  {
    metric: "3x",
    desc: "más rápido el tiempo de competencia para equipos clínicos usando rutas de aprendizaje adaptativas con IA vs. formación presencial tradicional.",
    color: "from-accent-blue/20",
  },
  {
    metric: "45%",
    desc: "de reducción en costos de formación al reemplazar talleres presenciales con educación digital escalable bajo demanda.",
    color: "from-emerald-500/20",
  },
];

const plans = [
  {
    name: "Essentials",
    description: "Para clínicas y consultorios que lanzan su primer programa de EMC digital.",
    features: [
      "Hasta 500 aprendices",
      "Seguimiento y reportes de créditos EMC",
      "Constructor de cursos con plantillas",
      "Dashboard de analítica básica",
      "Soporte por email",
    ],
  },
  {
    name: "Professional",
    description: "Para hospitales y sistemas de salud que escalan la formación entre departamentos.",
    features: [
      "Hasta 5,000 aprendices",
      "Todo lo de Essentials",
      "Gestión de flujos de acreditación",
      "Constructor de simulación clínica",
      "Acceso al AI Creator Agent",
      "Analítica avanzada y reportes de cumplimiento",
      "Soporte prioritario",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "Para farmacéuticas, asociaciones médicas y grandes redes de salud.",
    features: [
      "Aprendices ilimitados",
      "Todo lo de Professional",
      "Suite completa de AI Agents (Creator, Manager, Learner)",
      "Integraciones personalizadas (EHR, LRS, xAPI)",
      "Academia white-label",
      "Success manager dedicado",
      "SLA y cumplimiento personalizado",
    ],
  },
];

export default function MedicalEducationPageES() {
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
              Educación Médica
            </span>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Empoderando a los profesionales{" "}
              <span className="text-gradient-peach-purple">de la salud</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Programas de EMC impulsados por IA, gestión de acreditación y
              formación clínica que escalan — manteniendo cada credencial en
              cumplimiento.
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

      {/* Revolucionando la Educación Médica */}
      <section className="relative py-16 px-6">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="narrative-card rounded-2xl p-10 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Revolucionando la educación médica
              </h2>
              <p className="text-white/60 leading-relaxed max-w-2xl mx-auto">
                La educación médica tradicional es lenta en actualizarse, difícil
                de escalar y desconectada de los resultados clínicos reales.
                merahki.ai cierra la brecha entre la adquisición de conocimiento
                y el desempeño clínico — con IA que se adapta a cada aprendiz,
                cada especialidad y cada requisito regulatorio.
              </p>
              <div className="flex flex-wrap gap-3 justify-center pt-2">
                {pillars.map((p) => (
                  <span
                    key={p.label}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold tracking-wide ${p.color}`}
                  >
                    <p.icon className="w-3.5 h-3.5" />
                    {p.label}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Capacidades de Plataforma */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "20%", y: "50%" }}
          rustPosition={{ x: "80%", y: "40%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Capacidades de plataforma
                <br />
                <span className="text-gradient-peach-purple">
                  para la excelencia clínica
                </span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-28">
            {features.map((f) => (
              <AnimatedSection key={f.title} delay={0.1}>
                <div
                  className={`flex flex-col gap-10 items-center ${
                    f.reverse ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  <div className="flex-1 space-y-6">
                    <div className="w-11 h-11 rounded-xl bg-accent-purple/20 flex items-center justify-center">
                      <f.icon className="w-5 h-5 text-accent-purple" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {f.title}
                    </h3>
                    <ul className="space-y-3">
                      {f.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <span className="text-accent-purple text-lg leading-none mt-0.5">
                            ✦
                          </span>
                          <span className="text-white/65 leading-relaxed">
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex-1 w-full">
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl aspect-[16/10]">
                      <Image
                        src={f.image}
                        alt={f.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
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
                  educación en salud
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

      {/* Estadísticas */}
      <section className="relative py-20 px-6">
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold">
                Impacto{" "}
                <span className="text-gradient-peach-purple">comprobado</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((s, i) => (
              <AnimatedSection key={s.metric} delay={i * 0.15}>
                <div
                  className={`rounded-2xl p-8 border border-white/10 bg-gradient-to-br ${s.color} to-transparent space-y-3`}
                >
                  <p className="text-5xl font-bold text-gradient-peach-purple">
                    {s.metric}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
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
                <span className="text-gradient-peach-purple">organización</span>
              </h2>
              <p className="text-white/50 mt-4 max-w-xl mx-auto">
                Desde consultorios independientes hasta redes de salud globales —
                elige el plan que se adapta a tu escala.
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
                diseñada para la educación médica
              </span>
            </h2>
            <p className="text-white/50 mt-4 leading-relaxed">
              Desde el cumplimiento de EMC hasta la competencia clínica — una
              plataforma que conecta la educación con los resultados en
              pacientes.
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
        heading="Lanza tu programa de educación médica"
        subheading="Descubre cómo merahki.ai ayuda a las organizaciones de salud a ofrecer formación efectiva, escalable y en cumplimiento."
      />
    </div>
  );
}
