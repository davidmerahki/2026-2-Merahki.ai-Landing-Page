import AnimatedSection from "@/components/ui/AnimatedSection";
import GlowBackground from "@/components/ui/GlowBackground";
import Link from "next/link";
import ScopePrice from "@/components/ui/ScopePrice";
import {
  ArrowRight,
  CalendarCheck,
  MessageSquare,
  FileSignature,
  PlayCircle,
  Video,
  BookOpen,
  Sparkles,
  Palette,
  Gift,
  TrendingUp,
  Share2,
  BarChart2,
  Monitor,
  Database,
  Smartphone,
  GraduationCap,
} from "lucide-react";

type Lang = "es" | "en";

const tiersEn = [
  {
    title: "Academy Setup",
    subtitle: "Initial setup per course — 1 course per feature or use case to guarantee effectiveness",
    headerIcon: GraduationCap,
    highlight: true,
    items: [
      { icon: CalendarCheck, title: "8-Week Guaranteed Delivery", desc: "No front-end or back-end development required — a turnkey solution ready to customize and implement." },
      { icon: Video, title: "100 Minutes of Premium Video", desc: "Production & editing of educational content for your Academy." },
      { icon: BookOpen, title: "Complete Program Design", desc: "Up to 12 lessons designed by industry experts working exclusively on your project." },
      { icon: Sparkles, title: "6 Interactive H5P Activities", desc: "Designed for in-lesson engagement and knowledge reinforcement." },
      { icon: Palette, title: "Design & Customization", desc: "Content tailored to your brand identity." },
      { icon: Gift, title: "Gamification & Behavioral Economics", desc: "Powered by the Octalysis Framework." },
      { icon: TrendingUp, title: "Education-Led Growth (ELG) Strategy", desc: "Education integrated directly into your Go-To-Market strategy to drive sales, adoption, and retention." },
      { icon: Share2, title: "CLG Flywheel Design & Activation", desc: "Transform your most passionate users into your main growth engine." },
    ],
  },
  {
    title: "Growth & Analytics",
    headerIcon: BarChart2,
    highlight: false,
    items: [
      { icon: BarChart2, title: "Learning Analytics", desc: "Every lesson guarantees adoption by measuring observable behaviors and learning outcomes." },
      { icon: Monitor, title: "LMS Platform", desc: "Your knowledge base becomes a resource that drives growth metrics." },
      { icon: Database, title: "Data Integration", desc: "Virtual machine sends data directly to your preferred visualization tools." },
    ],
  },
  {
    title: "Mobile App",
    headerIcon: Smartphone,
    highlight: false,
    items: [
      { icon: Smartphone, title: "iOS & Android App", desc: "Your content, adaptive and personalized for all types of devices." },
    ],
  },
];

const tiersEs: typeof tiersEn = [
  {
    title: "Montaje de la academia",
    subtitle: "Configuración inicial por curso. Un curso por funcionalidad o caso de uso para garantizar su efectividad.",
    headerIcon: GraduationCap,
    highlight: true,
    items: [
      { icon: CalendarCheck, title: "Entrega garantizada en 8 semanas", desc: "No requiere desarrollo de front-end ni de back-end. Es una solución llave en mano, lista para personalizar e implementar." },
      { icon: Video, title: "100 minutos de video premium", desc: "Producción y edición del contenido educativo de tu academia." },
      { icon: BookOpen, title: "Diseño completo del programa", desc: "Hasta 12 lecciones diseñadas por expertos de la industria dedicados solo a tu proyecto." },
      { icon: Sparkles, title: "6 actividades interactivas H5P", desc: "Pensadas para mantener la atención durante la lección y reforzar lo aprendido." },
      { icon: Palette, title: "Diseño y personalización", desc: "Contenido adaptado a la identidad de tu marca." },
      { icon: Gift, title: "Gamificación y economía del comportamiento", desc: "Basada en el framework Octalysis." },
      { icon: TrendingUp, title: "Estrategia de Education-Led Growth (ELG)", desc: "La educación se integra a tu estrategia Go-To-Market para impulsar ventas, adopción y retención." },
      { icon: Share2, title: "Diseño y activación del flywheel CLG", desc: "Tus usuarios más entusiastas se convierten en tu principal motor de crecimiento." },
    ],
  },
  {
    title: "Crecimiento y analítica",
    headerIcon: BarChart2,
    highlight: false,
    items: [
      { icon: BarChart2, title: "Analítica de aprendizaje", desc: "Cada lección mide comportamientos observables y resultados de aprendizaje para asegurar la adopción." },
      { icon: Monitor, title: "Plataforma LMS", desc: "Tu base de conocimiento se convierte en un recurso que mueve tus métricas de crecimiento." },
      { icon: Database, title: "Integración de datos", desc: "Una máquina virtual envía los datos directamente a tus herramientas de visualización preferidas." },
    ],
  },
  {
    title: "App móvil",
    headerIcon: Smartphone,
    highlight: false,
    items: [
      { icon: Smartphone, title: "App para iOS y Android", desc: "Tu contenido, adaptable y personalizado para todo tipo de dispositivos." },
    ],
  },
];

const stepsEn = [
  { icon: CalendarCheck, step: "01", title: "Schedule a Meeting", desc: "Reach out to arrange a conversation at your earliest convenience." },
  { icon: MessageSquare, step: "02", title: "Discuss Your Needs", desc: "Share your existing challenges — we'll refine the details of your proposed academy." },
  { icon: FileSignature, step: "03", title: "Review & Sign", desc: "We'll walk you through the proposal, ensuring you're comfortable and excited to partner." },
  { icon: PlayCircle, step: "04", title: "Begin Implementation", desc: "Our team mobilizes to deliver the ultimate partner education experience." },
];

const stepsEs: typeof stepsEn = [
  { icon: CalendarCheck, step: "01", title: "Reunión inicial", desc: "Nos escribes y agendamos una conversación en el momento que mejor te quede." },
  { icon: MessageSquare, step: "02", title: "Diagnóstico de necesidades", desc: "Nos cuentas tus retos actuales y con eso ajustamos los detalles de la academia que te proponemos." },
  { icon: FileSignature, step: "03", title: "Revisión y firma", desc: "Te explicamos la propuesta punto por punto para que decidas con total claridad." },
  { icon: PlayCircle, step: "04", title: "Inicio de la implementación", desc: "Nuestro equipo se pone en marcha para entregar la mejor experiencia de formación a tus aliados." },
];

const challengesEn = [
  { number: "01", title: "Inefficient Scaling & Time Constraints", desc: "Enabling a global partner ecosystem is inherently time-consuming. Manual training methods strain internal resources and can't keep pace as the partner network grows.", color: "text-accent-purple" },
  { number: "02", title: "Difficulty in Personalization", desc: "A one-size-fits-all approach fails across partner tiers (Gold vs. Silver), roles (Sales, Technical, Support), and regions with different market nuances.", color: "text-accent-blue" },
  { number: "03", title: "Slow Time-to-First-Sale", desc: "If partners can't quickly learn the product and pitch its value, ramp time delays their first sale — directly impacting revenue for both the company and the partner.", color: "text-accent-peach" },
  { number: "04", title: "Measurement & Attribution Gaps", desc: "Companies struggle to tie training data like course completions to tangible outcomes such as pipeline contribution and revenue impact.", color: "text-accent-pink" },
  { number: "05", title: "Complex Certification Management", desc: "Launching and maintaining certification programs involves heavy manual rework. Keeping partners certified as products evolve creates a significant operational burden.", color: "text-accent-purple" },
  { number: "06", title: "Content Localization & Consistency", desc: "Maintaining brand consistency while delivering content across geographies in 50+ languages is a constant challenge without losing the core messaging.", color: "text-accent-blue" },
  { number: "07", title: "Keeping Pace with Product Changes", desc: "In fast-moving SaaS, products change constantly. Manually updating partners on every new feature leaves them with outdated information that misaligns sales pitches.", color: "text-accent-peach" },
  { number: "08", title: "High Partner Churn", desc: "Partners who don't see early wins disengage quietly, draining your ecosystem of growth potential and compounding the cost of recruitment.", color: "text-accent-pink" },
  { number: "09", title: "No Revenue Attribution", desc: "Without data linking training to pipeline, you can't prove or optimize the ROI of your partner program — making it hard to justify further investment.", color: "text-accent-purple" },
];

const challengesEs: typeof challengesEn = [
  { number: "01", title: "Escalar la formación toma demasiado tiempo", desc: "Habilitar un ecosistema global de aliados consume mucho tiempo. Los métodos manuales agotan los recursos internos y no alcanzan a seguir el crecimiento de la red.", color: "text-accent-purple" },
  { number: "02", title: "Dificultad para personalizar", desc: "Un mismo programa para todos falla entre niveles de aliados (Gold y Silver), cargos (ventas, técnico, soporte) y regiones con mercados distintos.", color: "text-accent-blue" },
  { number: "03", title: "La primera venta tarda demasiado", desc: "Si los aliados no aprenden rápido el producto ni saben explicar su valor, su primera venta se demora. Eso golpea los ingresos de tu empresa y los del aliado.", color: "text-accent-peach" },
  { number: "04", title: "Vacíos de medición y atribución", desc: "A las empresas les cuesta conectar datos como los cursos completados con resultados concretos, como el aporte al pipeline y el impacto en los ingresos.", color: "text-accent-pink" },
  { number: "05", title: "Gestión compleja de certificaciones", desc: "Lanzar y mantener programas de certificación exige mucho reproceso manual. Mantener certificados a los aliados mientras el producto cambia es una carga operativa grande.", color: "text-accent-purple" },
  { number: "06", title: "Localización y coherencia del contenido", desc: "Mantener la coherencia de marca al llevar el contenido a distintas regiones en más de 50 idiomas, sin perder el mensaje central, es un reto constante.", color: "text-accent-blue" },
  { number: "07", title: "Seguirle el ritmo a los cambios del producto", desc: "En SaaS el producto cambia todo el tiempo. Actualizar a mano a los aliados en cada funcionalidad nueva los deja con información vieja y desalinea su discurso de venta.", color: "text-accent-peach" },
  { number: "08", title: "Alta rotación de aliados", desc: "Los aliados que no ven resultados tempranos se desconectan en silencio. Tu ecosistema pierde potencial de crecimiento y el costo de reclutar aliados nuevos se multiplica.", color: "text-accent-pink" },
  { number: "09", title: "Sin atribución de ingresos", desc: "Sin datos que conecten la formación con el pipeline, no puedes demostrar ni mejorar el ROI de tu programa de aliados. Así es difícil justificar más inversión.", color: "text-accent-purple" },
];

const planEn = [
  { step: "01", title: "Rapid Onboarding", desc: "We deliver tailored learning journeys by role or region, cutting the time-to-first-sale.", color: "from-accent-purple/20", accent: "text-accent-purple" },
  { step: "02", title: "Scalable Certification", desc: "We deploy automated systems that build partner credibility and customer trust without manual rework.", color: "from-accent-blue/20", accent: "text-accent-blue" },
  { step: "03", title: "Performance Insights", desc: "We turn education data into a driver for pipeline contribution and measurable ROI.", color: "from-accent-peach/15", accent: "text-accent-peach" },
];

const planEs: typeof planEn = [
  { step: "01", title: "Onboarding rápido", desc: "Entregamos rutas de aprendizaje por cargo o región que acortan el tiempo hasta la primera venta.", color: "from-accent-purple/20", accent: "text-accent-purple" },
  { step: "02", title: "Certificación escalable", desc: "Implementamos sistemas automáticos que dan credibilidad a tus aliados y confianza a sus clientes, sin reprocesos manuales.", color: "from-accent-blue/20", accent: "text-accent-blue" },
  { step: "03", title: "Datos de desempeño", desc: "Convertimos los datos de formación en aporte al pipeline y en un ROI medible.", color: "from-accent-peach/15", accent: "text-accent-peach" },
];

export default function PartnerProposal({ lang = "en" }: { lang?: Lang }) {
  const es = lang === "es";
  const tiers = es ? tiersEs : tiersEn;
  const steps = es ? stepsEs : stepsEn;
  const challenges = es ? challengesEs : challengesEn;
  const plan = es ? planEs : planEn;

  return (
    <section className="relative py-28 px-6" id="partner-proposal">
      <GlowBackground
        indigoPosition={{ x: "15%", y: "20%" }}
        rustPosition={{ x: "85%", y: "70%" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto space-y-24">

        {/* ── Header ── */}
        <AnimatedSection>
          <div className="text-center space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">
              {es ? "Nuestra propuesta" : "Our Proposal"}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4">
              <span className="text-gradient-peach-purple">{es ? "Formación de aliados" : "Partners Education"}</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-1 text-sm text-white/40 mt-2">
              {es ? (
                <>
                  <span><span className="text-white/60 font-medium">Preparada para:</span> Líderes de Growth · Go-To-Market · Customer Success</span>
                  <span><span className="text-white/60 font-medium">Preparada por:</span> merahki.ai</span>
                </>
              ) : (
                <>
                  <span><span className="text-white/60 font-medium">Prepared for:</span> Heads of Growth · Go-To-Market · Customer Success</span>
                  <span><span className="text-white/60 font-medium">Prepared by:</span> merahki.ai</span>
                </>
              )}
            </div>
          </div>
        </AnimatedSection>

        {/* ── The Challenge ── */}
        <AnimatedSection delay={0.1}>
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {es ? "Nueve problemas que frenan la formación de tus aliados" : "The Challenge You Face"}
              </h3>
              <p className="text-white/40 max-w-xl mx-auto text-sm">
                {es
                  ? "Formar a cientos de aliados con métodos manuales retrasa su primera venta y le cuesta ingresos a tu empresa."
                  : <>Partner enablement is broken at scale — and it&apos;s costing you revenue.</>}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {challenges.map((item) => (
                <div key={item.number} className="glass-card rounded-2xl p-6 space-y-4">
                  <span className={`text-4xl font-bold leading-none ${item.color} opacity-40`}>{item.number}</span>
                  <h4 className="text-white font-semibold leading-snug">{item.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ── Intro narrative ── */}
        <AnimatedSection delay={0.1}>
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-purple via-accent-blue to-accent-pink" />
              <div className="narrative-card rounded-2xl pl-10 pr-8 py-9 flex items-start gap-5">
                <span className="text-4xl flex-shrink-0 mt-0.5" role="img" aria-label={es ? "apretón de manos" : "handshake"}>&#x1F91D;</span>
                <div className="space-y-1">
                  <h4 className="text-white text-xl md:text-2xl font-bold leading-snug">
                    {es
                      ? "El desempeño de tus aliados se puede planear y medir."
                      : <>Partner performance shouldn&apos;t be a gamble.</>}
                  </h4>
                  <p className="text-white/55 text-sm leading-relaxed">
                    {es
                      ? "Muchos líderes de canal ven cómo se les escapan las metas de ingresos mientras los aliados siguen atascados en la etapa de onboarding. Es frustrante construir un ecosistema de aliados sólido y ver que tus socios se sienten perdidos, sin herramientas y al final se desconectan."
                      : <>Most channel leaders watch their revenue targets slip while partners stay stuck in the &ldquo;onboarding phase.&rdquo; It&apos;s frustrating to build a powerful partner ecosystem only to see your collaborators feel lost, unequipped, and eventually disengaged.</>}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 px-8 py-7 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-red-400 text-xs font-bold tracking-widest uppercase">{es ? "El problema de fondo" : "The Villain"}</span>
                <div className="h-px flex-1 bg-red-500/20" />
              </div>
              {es ? (
                <>
                  <h4 className="text-white text-lg font-bold">La fricción en la habilitación de aliados.</h4>
                  <p className="text-white/65 leading-relaxed">
                    Un aliado que no cierra su primera venta pronto tiene un <span className="text-red-400 font-semibold">alto riesgo de abandono</span>. La adopción lenta de los aliados cuesta trimestres de ventas y, con el tiempo, erosiona tu participación de mercado y la confianza en tu marca.
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    En merahki.ai hemos visto ecosistemas globales estancados por la complejidad. Por eso trabajamos para que tus aliados <span className="text-white font-medium">queden preparados para vender</span>. Los acompañamos desde la firma del acuerdo hasta que generan ingresos de forma constante.
                  </p>
                </>
              ) : (
                <>
                  <h4 className="text-white text-lg font-bold">The &ldquo;Enablement Friction.&rdquo;</h4>
                  <p className="text-white/65 leading-relaxed">
                    If a partner doesn&apos;t feel the &ldquo;win&rdquo; of their first sale quickly, they aren&apos;t just &ldquo;ramping up&rdquo; — they are a <span className="text-red-400 font-semibold">churn risk</span>. The cost of slow partner adoption isn&apos;t just a missed quarter; it&apos;s the slow erosion of your market share and brand trust.
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    At merahki.ai, we&apos;ve seen global ecosystems struggle because of complexity. We believe your partners deserve to be <span className="text-white font-medium">enabled, not just enrolled</span>. We act as the bridge between &ldquo;signed the agreement&rdquo; and &ldquo;driving consistent revenue.&rdquo;
                  </p>
                </>
              )}
            </div>

            <div className="space-y-4">
              <p className="text-white/60 text-xs font-bold tracking-widest uppercase text-center">
                {es ? "El plan de merahki.ai para acelerar el crecimiento de tus aliados" : "The Plan to accelerate partner growth"}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {plan.map((p) => (
                  <div key={p.step} className={`rounded-2xl p-6 border border-white/10 bg-gradient-to-br ${p.color} to-transparent space-y-3`}>
                    <span className={`text-3xl font-bold leading-none ${p.accent} opacity-50`}>{p.step}</span>
                    <h5 className="text-white font-semibold">{p.title}</h5>
                    <p className="text-white/55 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-accent-purple/15 to-accent-blue/10 border border-accent-purple/25 px-8 py-7 space-y-4">
              {es ? (
                <>
                  <p className="text-accent-purple text-xs font-bold tracking-widest uppercase">El resultado para tu empresa</p>
                  <p className="text-white text-lg font-semibold leading-relaxed">
                    La meta es que los ingresos de tus aliados crezcan entre 3 y 15 veces y que tu equipo deje de administrar hojas de cálculo a mano.
                  </p>
                  <p className="text-white/60 leading-relaxed">
                    Los aliados que dominan tu producto venden más y se convierten en tu motor de crecimiento más fuerte.
                  </p>
                  <div className="pt-3 border-t border-white/10">
                    <p className="text-white/80 font-semibold">merahki.ai diseña el programa que activa más rápido a tus aliados.</p>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-accent-purple text-xs font-bold tracking-widest uppercase">The Transformation</p>
                  <p className="text-white text-lg font-semibold leading-relaxed">
                    Imagine watching your partner revenue grow by 3x to 15x while your team stops manually managing spreadsheets.
                  </p>
                  <p className="text-white/60 leading-relaxed">
                    When partners feel like experts in your product, they don&apos;t just sell — they become your most powerful growth engine.
                  </p>
                  <div className="pt-3 border-t border-white/10">
                    <p className="text-white/80 font-semibold">Ready to activate your partners faster?</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </AnimatedSection>

        {/* ── Deliverables / Tiers ── */}
        <AnimatedSection delay={0.1}>
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold">
                {es ? (
                  <>
                    Lo que incluye{" "}
                    <span className="text-gradient-blue-pink">tu academia</span>
                  </>
                ) : (
                  <>
                    What&apos;s Included in{" "}
                    <span className="text-gradient-blue-pink">Your Academy</span>
                  </>
                )}
              </h3>
              <p className="text-white/50 max-w-2xl mx-auto">
                {es
                  ? "Un ecosistema completo de tecnología y talento para activar tu red de aliados, entregado en 8 semanas."
                  : "A complete ecosystem of technology and talent ready to activate your partner network — delivered in 8 weeks."}
              </p>
            </div>
            <div className="space-y-10">
              {tiers.map((tier, i) => (
                <AnimatedSection key={tier.title} delay={i * 0.1}>
                  <div className="space-y-6">
                    <div className={`rounded-2xl px-8 py-6 flex items-start gap-4 ${
                      i === 0
                        ? "bg-gradient-to-r from-accent-purple/25 to-accent-pink/15 border border-accent-purple/35"
                        : i === 1
                        ? "bg-gradient-to-r from-accent-blue/20 to-accent-purple/10 border border-accent-blue/30"
                        : "bg-gradient-to-r from-accent-peach/15 to-accent-purple/8 border border-accent-peach/25"
                    }`}>
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        i === 0 ? "bg-accent-purple/20 border border-accent-purple/30"
                        : i === 1 ? "bg-accent-blue/20 border border-accent-blue/30"
                        : "bg-accent-peach/15 border border-accent-peach/25"
                      }`}>
                        <tier.headerIcon className={`w-4 h-4 ${i === 0 ? "text-accent-purple" : i === 1 ? "text-accent-blue" : "text-accent-peach"}`} />
                      </div>
                      <div>
                        <ScopePrice />
                        {tier.subtitle && (
                          <p className="text-white/35 text-xs mt-2 max-w-lg">{tier.subtitle}</p>
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-7 px-2">
                      {tier.items.map((item) => (
                        <div key={item.title} className="space-y-2.5">
                          <div className="w-8 h-8 rounded-lg bg-accent-purple/12 border border-accent-purple/20 flex items-center justify-center">
                            <item.icon className="w-4 h-4 text-accent-purple" />
                          </div>
                          <h5 className="text-white font-semibold text-sm leading-snug">{item.title}</h5>
                          <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ── Next Steps ── */}
        <AnimatedSection delay={0.1}>
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold">
                {es ? (
                  <>
                    Próximos pasos para <span className="text-gradient-blue-pink">crear tu academia</span>
                  </>
                ) : (
                  <>
                    Next Steps to <span className="text-gradient-blue-pink">Take Action</span>
                  </>
                )}
              </h3>
              <p className="text-white/50">
                {es
                  ? "Así trabajamos contigo desde la primera reunión hasta el lanzamiento de tu academia de aliados."
                  : <>We&apos;re eager to partner with you on this journey towards educational excellence.</>}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((s, i) => (
                <AnimatedSection key={s.step} delay={i * 0.1}>
                  <div className="glass-card rounded-2xl p-6 space-y-4 h-full">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold text-gradient-peach-purple leading-none">{s.step}</span>
                      <div className="w-9 h-9 rounded-xl bg-accent-purple/15 flex items-center justify-center">
                        <s.icon className="w-4 h-4 text-accent-purple" />
                      </div>
                    </div>
                    <h4 className="text-white font-semibold">{s.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            <div className="text-center pt-4">
              <Link
                href="https://meetings.hubspot.com/david5040?uuid=26d4db2a-ff58-48ff-be04-a74d169db651"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all"
              >
                {es ? "Activa a tus aliados" : "Activate Your Partners"} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
