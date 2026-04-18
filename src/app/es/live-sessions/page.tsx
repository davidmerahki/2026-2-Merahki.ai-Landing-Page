import type { Metadata } from "next";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import LogoCarousel from "@/components/sections/LogoCarousel";
import Link from "next/link";
import {
  ArrowRight,
  Video,
  Users,
  Calendar,
  Smartphone,
  BarChart2,
  Play,
  Mic,
  Share2,
  Monitor,
  BookOpen,
  Clock,
  Award,
  TrendingUp,
  Radio,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Live Sessions",
  description:
    "Conecta con tus aprendices usando el LMS de aula virtual de merahki.ai para sesiones en vivo y crea experiencias de aprendizaje compartidas y poderosas con Zoom, Webex, Microsoft Teams y Calendly.",
  openGraph: {
    title: "Live Sessions — merahki.ai",
    description:
      "LMS de aula virtual para sesiones en vivo. Sesiones individuales y grupales potenciadas por Zoom, Webex, Teams y Calendly.",
    url: "https://merahki.ai/es/live-sessions",
    type: "website",
  },
  alternates: {
    canonical: "https://merahki.ai/es/live-sessions",
    languages: { en: "https://merahki.ai/live-sessions" },
  },
};

const stats = [
  { value: "73,000+", label: "Horas de formación ahorradas" },
  { value: "+34%", label: "Incremento en adopción de features" },
  { value: "−42%", label: "Reducción de churn temprano" },
];

const liveBenefits = [
  {
    icon: Play,
    title: "Transforma cursos en experiencias en vivo valiosas",
    desc: "Reúne personas en experiencias de aprendizaje activo que despiertan curiosidad, habilitan feedback inmediato e inspiran a los participantes a construir nuevas habilidades.",
  },
  {
    icon: Users,
    title: "Personaliza el aprendizaje",
    desc: "Crea experiencias personales memorables con sesiones 1:1 y grupales. Habla con tus aprendices, muestra tu expertise, construye confianza y aumenta la retención de clientes.",
  },
  {
    icon: Mic,
    title: "Desarrolla habilidades con peer learning",
    desc: "Empodera a los participantes a aprender de pares y expertos levantando la mano, participando en breakout rooms y haciendo preguntas en Q&A.",
  },
  {
    icon: Radio,
    title: "La personalidad del instructor importa",
    desc: "Lleva el aprendizaje virtual a la vida, toma el escenario y agrega tu tono de voz personal en una experiencia en vivo conectada.",
  },
  {
    icon: BookOpen,
    title: "Rompe el anonimato del aprendizaje auto-dirigido",
    desc: "Vivifica tu academia con experiencias que rompen la monotonía del aprendizaje online. Aprovecha la exclusividad y la conectividad masiva con reuniones one-on-one y eventos en vivo.",
  },
  {
    icon: Smartphone,
    title: "Ve en vivo, ve mobile",
    desc: "Conecta y engancha a tus aprendices sin importar su ubicación, con tu app móvil iOS y Android.",
  },
  {
    icon: Share2,
    title: "Cultiva una comunidad de aprendizaje próspera",
    desc: "Fomenta la conexión, colaboración y engagement. Los aprendices interactúan a través de sesiones en vivo y actividades compartidas, construyendo mayor motivación y mejores resultados.",
  },
  {
    icon: Clock,
    title: "Impulsa la progresión grupal con hitos compartidos",
    desc: "Avanza a los aprendices juntos con timelines estructurados y sesiones en vivo programadas. Los objetivos compartidos mantienen a todos alineados y responsables.",
  },
  {
    icon: BarChart2,
    title: "Aumenta la responsabilidad y observa resultados reales",
    desc: "La interacción en tiempo real, el seguimiento de asistencia y el feedback en vivo impulsan el engagement de los aprendices y garantizan un progreso medible.",
  },
];

const featureRows = [
  {
    icon: Users,
    title: "Construye programas de formación ricos con nuestro aula virtual",
    bullets: [
      "Realiza un workshop de 7 días, una formación VIP o exclusiva, sesiones grupales o one-on-one; para coaching, educación de clientes, fitness o formación de empleados — todo es posible.",
      "Elige de una biblioteca completa de formatos y adapta las sesiones a los objetivos y tiempos de tus aprendices.",
    ],
    reverse: false,
  },
  {
    icon: Video,
    title: "Grabado en vivo una vez, disponible para siempre",
    bullets: [
      "Combina la intimidad de la interacción en vivo con la conveniencia evergreen del contenido grabado.",
      "Amplía tu alcance y haz que tus sesiones estén disponibles incluso cuando no estés presentando en vivo.",
    ],
    reverse: true,
  },
  {
    icon: Monitor,
    title: "Mantén el stack de herramientas que ya tienes",
    bullets: [
      "Sesiones de video networking ilimitadas one-to-one y grupales para fomentar conexiones entre tus aprendices.",
      "Integraciones nativas con Zoom, Webex, Microsoft Teams y Calendly — sin necesidad de cambiar herramientas.",
    ],
    reverse: false,
  },
];

const integrationFeatures = [
  {
    icon: Calendar,
    title: "Configura el evento y deja que merahki.ai se encargue del resto",
    desc: "Simplemente agrega tus reuniones como actividades de aprendizaje en un curso, y solo los aprendices matriculados tendrán acceso para asistir o registrarse.",
  },
  {
    icon: Users,
    title: "Múltiples instructores, múltiples sesiones en vivo",
    desc: "Ejecuta múltiples sesiones en vivo simultáneamente dando a los instructores el poder de planificar sus sesiones a través de Zoom, Google Meet, Microsoft Teams y Webex.",
  },
  {
    icon: BarChart2,
    title: "Rastrea la asistencia y exporta reportes de eventos",
    desc: "Extrae automáticamente la asistencia de Zoom y Microsoft Teams y accede a reportes de rendimiento útiles. También puedes gestionar la asistencia manualmente.",
  },
];

const calendlyFeatures = [
  {
    title: "Sesiones individuales",
    desc: "Dale a cada aprendiz el trato VIP. Conecta Calendly con merahki.ai, configura tu disponibilidad una vez y deja que los clientes reserven el momento perfecto — dentro del course player. Ideal para coaching profundo, establecimiento de objetivos personales y consultas personalizadas sin idas y vueltas.",
    highlight: true,
  },
  {
    title: "Sesiones grupales",
    desc: "Convierte las lecciones en vivo en workshops enfocados y de alta energía. Limita plazas, crea salas por temas y deja que los aprendices elijan la sesión que se ajusta a su path — las funcionalidades de aula virtual impulsan la asistencia y la dinámica grupal más allá de un webinar básico.",
    highlight: false,
  },
];

const engagementTools = [
  "Compartir pantalla",
  "Encuestas",
  "Chat segmentado",
  "Breakout rooms",
  "Q&A",
  "Levantar la mano",
  "Grabación de sesiones",
  "Pizarra virtual",
  "Reacciones",
];

const efficiencyBenefits = [
  {
    icon: Clock,
    title: "Ahorra tiempo y dinero",
    desc: "Evita el costo de producir videos de formación profesional realizando sesiones de formación online en vivo con una de las mejores plataformas de aula virtual del mercado.",
  },
  {
    icon: Award,
    title: "Cobra por experiencias VIP",
    desc: "Ofrece formación genuina one-to-one y proporciona a cada trainee la atención adecuada y el tiempo ideal que necesita.",
  },
  {
    icon: TrendingUp,
    title: "Aumenta tu retención de clientes",
    desc: "Juntos, todos logran más. Las conexiones humanas exitosas fomentan más aprendizaje y promueven la retención.",
  },
];

export default function LiveSessionsEsPage() {
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
              Ecosistema de aula virtual merahki.ai
            </span>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Aprovecha el poder de la{" "}
              <span className="text-gradient-blue-pink">conexión humana</span>{" "}
              con reuniones en vivo
            </h1>
          </AnimatedSection>
          <AnimatedSection immediate delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Usa nuestro LMS de aula virtual para comunicarte con tus aprendices
              de manera efectiva y crear conexiones significativas one-on-one y
              grupales. Aprovecha el poder de Zoom, Webex, Microsoft Teams y
              Calendly para potenciar experiencias de aprendizaje compartidas y
              conversaciones en tiempo real.
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
                Rompe el aislamiento del aprendizaje auto-dirigido
              </h2>
              <p className="text-white/60 leading-relaxed">
                Los cursos auto-dirigidos son poderosos — pero dejan a los
                aprendices desconectados, anónimos y desenganchados. Sin
                interacción humana real, la motivación cae y las tasas de
                finalización se ven afectadas.
              </p>
              <p className="text-white/60 leading-relaxed">
                El LMS de aula virtual de merahki.ai devuelve el elemento
                humano. Conecta aprendices con instructores y pares a través de
                sesiones en vivo, llamadas de coaching y workshops grupales —
                todo integrado de manera fluida en los learning paths de tu
                academia.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Live Benefits Grid ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "20%", y: "50%" }}
          rustPosition={{ x: "80%", y: "30%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Sesiones en vivo, experiencias de aprendizaje{" "}
                <span className="text-gradient-blue-pink">vívidas</span>
              </h2>
              <p className="text-white/50 mt-4 max-w-2xl mx-auto">
                Un LMS potente con capacidades de aula virtual — diseñado para
                conexión real a cualquier escala.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveBenefits.map((benefit, i) => (
              <AnimatedSection key={benefit.title} delay={i * 0.05}>
                <div className="glass-card rounded-2xl p-6 space-y-4 h-full">
                  <div className="w-10 h-10 rounded-xl bg-accent-purple/20 flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-accent-purple" />
                  </div>
                  <h3 className="text-white font-semibold leading-snug">{benefit.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Alternating Feature Rows ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "80%", y: "40%" }}
          rustPosition={{ x: "20%", y: "60%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Agrega eventos en vivo, one-on-one
                <br />
                <span className="text-gradient-blue-pink">
                  y sesiones grupales en tus cursos
                </span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="space-y-28">
            {featureRows.map((f) => (
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
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{f.title}</h3>
                    <ul className="space-y-3">
                      {f.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <span className="text-accent-purple text-lg leading-none mt-0.5">✦</span>
                          <span className="text-white/65 leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="relative rounded-2xl border border-white/10 bg-white/5 shadow-2xl aspect-[16/10] flex items-center justify-center">
                      <div className="text-center space-y-2 pointer-events-none">
                        <f.icon className="w-10 h-10 text-white/15 mx-auto" />
                        <p className="text-white/20 text-xs tracking-widest uppercase">
                          Image coming soon
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Webinar Integration Cards ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "50%", y: "50%" }}
          rustPosition={{ x: "80%", y: "20%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Un LMS con aula virtual e integración de webinars
                <br />
                <span className="text-gradient-blue-pink">
                  hace tu vida más fácil y vivaz
                </span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {integrationFeatures.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-8 space-y-4 h-full">
                  <div className="w-11 h-11 rounded-xl bg-accent-blue/20 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-accent-blue" />
                  </div>
                  <h3 className="text-white font-semibold leading-snug">{feature.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Calendly Section ── */}
      <section className="relative py-24 px-6">
        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Programa sesiones de coaching{" "}
                <span className="text-gradient-blue-pink">con Calendly</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {calendlyFeatures.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.1}>
                <div
                  className={`rounded-2xl p-8 space-y-4 h-full ${
                    feature.highlight
                      ? "bg-gradient-to-br from-accent-purple/20 to-accent-pink/10 border border-accent-purple/30"
                      : "glass-card"
                  }`}
                >
                  <h3 className="text-white font-bold text-xl">{feature.title}</h3>
                  <p className="text-white/60 leading-relaxed">{feature.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engagement Tools ── */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "60%", y: "50%" }}
          rustPosition={{ x: "30%", y: "30%" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Explora las{" "}
              <span className="text-gradient-blue-pink">herramientas de engagement en vivo</span>{" "}
              en tus cursos
            </h2>
            <p className="text-white/50 mt-4 max-w-2xl mx-auto leading-relaxed">
              Los participantes en cursos son más que asistentes — escuchan y
              participan. Aprovecha compartir pantalla, encuestas, chat
              segmentado, breakout rooms e involucra a toda la audiencia.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {engagementTools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-full border border-accent-purple/30 bg-accent-purple/10 text-white/70 text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Efficiency Benefits ── */}
      <section className="relative py-24 px-6">
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Usa nuestro LMS de aula virtual para
                <br />
                <span className="text-gradient-blue-pink">
                  hacer crecer tu academia con eficiencia
                </span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {efficiencyBenefits.map((benefit, i) => (
              <AnimatedSection key={benefit.title} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-8 space-y-4 h-full">
                  <div className="w-11 h-11 rounded-xl bg-accent-peach/20 flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-accent-peach" />
                  </div>
                  <h3 className="text-white font-semibold text-lg">{benefit.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Only with merahki.ai CTA ── */}
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
              Lanza tu{" "}
              <span className="text-gradient-blue-pink">
                comunidad de aprendizaje en vivo hoy
              </span>
            </h2>
            <p className="text-white/50 mt-4 leading-relaxed">
              Conexiones humanas reales, programación flexible y analytics
              AI-native — todo en una plataforma de aula virtual.
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
        heading="Empieza a entregar experiencias de aprendizaje en vivo"
        subheading="Conecta a tus aprendices con instructores y pares a través de sesiones poderosas de aula virtual — a cualquier escala."
      />
    </div>
  );
}
