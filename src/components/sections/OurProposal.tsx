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

const statsEn = [
  { value: "+30.3%", label: "increase in product adoption" },
  { value: "+28.7%", label: "boost in user engagement" },
  { value: "+34.6%", label: "growth in Customer Lifetime Value (LTV)" },
  { value: "−8.1%", label: "reduction in the sales cycle" },
  { value: "−7.2%", label: "decrease in support tickets" },
];

const statsEs: typeof statsEn = [
  { value: "+30,3%", label: "en la adopción del producto" },
  { value: "+28,7%", label: "en el engagement de los usuarios" },
  { value: "+34,6%", label: "en el valor de vida del cliente (LTV)" },
  { value: "−8,1%", label: "en la duración del ciclo de ventas" },
  { value: "−7,2%", label: "en los tickets de soporte" },
];

const caseStudiesEn = [
  {
    client: "Client A",
    tag: "Fintech",
    result: "40% reduction in onboarding time",
    detail: "Drastically reduced onboarding time, enhancing user adoption and decreasing churn.",
    color: "from-accent-purple/20",
  },
  {
    client: "Client B",
    tag: "Global Sales Organization",
    result: "150% increase in partner revenue",
    detail: "Partner Academy model delivered a 150% revenue increase within six months.",
    color: "from-accent-blue/20",
  },
  {
    client: "Client C",
    tag: "SaaS",
    result: "60% increase in user engagement",
    detail: "Transformed customer education, leading to 60% higher engagement and stronger retention.",
    color: "from-accent-pink/20",
  },
];

const caseStudiesEs: typeof caseStudiesEn = [
  {
    client: "Cliente A",
    tag: "Fintech",
    result: "40% menos tiempo de onboarding",
    detail: "El tiempo de onboarding bajó de forma drástica, la adopción de los usuarios subió y el abandono de clientes disminuyó.",
    color: "from-accent-purple/20",
  },
  {
    client: "Cliente B",
    tag: "Organización global de ventas",
    result: "150% más ingresos por aliados",
    detail: "El modelo de academia para aliados aumentó los ingresos un 150% en seis meses.",
    color: "from-accent-blue/20",
  },
  {
    client: "Cliente C",
    tag: "SaaS",
    result: "60% más engagement de los usuarios",
    detail: "La nueva educación de clientes subió el engagement un 60% y fortaleció la retención.",
    color: "from-accent-pink/20",
  },
];

const stepsEn = [
  { icon: CalendarCheck, step: "01", title: "Schedule a Meeting", desc: "Reach out to arrange a conversation at your earliest convenience." },
  { icon: MessageSquare, step: "02", title: "Discuss Your Needs", desc: "Share your existing challenges — we'll refine the details of your proposed academy." },
  { icon: FileSignature, step: "03", title: "Review & Sign", desc: "We'll walk you through the proposal, ensuring you're comfortable and excited to partner." },
  { icon: PlayCircle, step: "04", title: "Begin Implementation", desc: "Our team mobilizes to deliver the ultimate customer education experience." },
];

const stepsEs: typeof stepsEn = [
  { icon: CalendarCheck, step: "01", title: "Reunión inicial", desc: "Nos escribes y agendamos una conversación en el momento que mejor te quede." },
  { icon: MessageSquare, step: "02", title: "Diagnóstico de necesidades", desc: "Nos cuentas tus retos actuales y con eso ajustamos los detalles de la academia que te proponemos." },
  { icon: FileSignature, step: "03", title: "Revisión y firma", desc: "Te explicamos la propuesta punto por punto para que decidas con total claridad." },
  { icon: PlayCircle, step: "04", title: "Inicio de la implementación", desc: "Nuestro equipo se pone en marcha para entregar la mejor experiencia de Customer Education a tus clientes." },
];

const challengesEn = [
  {
    number: "01",
    title: "Low feature adoption",
    desc: "Customers log in but never discover advanced features — limiting their perceived value and your expansion revenue.",
    color: "text-accent-purple",
  },
  {
    number: "02",
    title: "High support volume",
    desc: "Repeated how-to questions flood your support team, driving up costs and slowing response times across the board.",
    color: "text-accent-blue",
  },
  {
    number: "03",
    title: "Slow time-to-value",
    desc: "Manual, inconsistent onboarding means customers take weeks to see results — increasing early churn risk dramatically.",
    color: "text-accent-peach",
  },
  {
    number: "04",
    title: "Invisible ROI",
    desc: "Without measurable learning outcomes, you can't prove the impact of education on retention, adoption, or revenue growth.",
    color: "text-accent-pink",
  },
];

const challengesEs: typeof challengesEn = [
  {
    number: "01",
    title: "Baja adopción de funcionalidades",
    desc: "Los clientes inician sesión pero nunca descubren las funcionalidades avanzadas. Así perciben menos valor y tú pierdes ingresos por expansión.",
    color: "text-accent-purple",
  },
  {
    number: "02",
    title: "Alto volumen de soporte",
    desc: "Las mismas preguntas de cómo usar el producto llenan a tu equipo de soporte, suben los costos y hacen más lentas todas las respuestas.",
    color: "text-accent-blue",
  },
  {
    number: "03",
    title: "Tiempo lento hasta el primer valor",
    desc: "Con un onboarding manual e irregular, los clientes tardan semanas en ver resultados y el riesgo de abandono temprano crece mucho.",
    color: "text-accent-peach",
  },
  {
    number: "04",
    title: "ROI invisible",
    desc: "Sin resultados de aprendizaje medibles no puedes demostrar el impacto de la educación en la retención, la adopción o el crecimiento de ingresos.",
    color: "text-accent-pink",
  },
];

const planEn = [
  {
    step: "01",
    title: "Friction Audit",
    desc: "We identify exactly where your users are getting lost.",
    color: "from-accent-purple/20",
    accent: "text-accent-purple",
  },
  {
    step: "02",
    title: "The Academy Framework",
    desc: "We deploy a scalable education system tailored to your UI.",
    color: "from-accent-blue/20",
    accent: "text-accent-blue",
  },
  {
    step: "03",
    title: "Retention Loop",
    desc: "We turn education into a driver for product mastery and expansion.",
    color: "from-accent-peach/15",
    accent: "text-accent-peach",
  },
];

const planEs: typeof planEn = [
  {
    step: "01",
    title: "Auditoría de fricción",
    desc: "Identificamos el punto exacto en el que se pierden tus usuarios.",
    color: "from-accent-purple/20",
    accent: "text-accent-purple",
  },
  {
    step: "02",
    title: "Modelo de academia",
    desc: "Implementamos un sistema de educación escalable, adaptado a la interfaz de tu producto.",
    color: "from-accent-blue/20",
    accent: "text-accent-blue",
  },
  {
    step: "03",
    title: "Ciclo de retención",
    desc: "Usamos la educación para que tus clientes dominen el producto y amplíen su uso.",
    color: "from-accent-peach/15",
    accent: "text-accent-peach",
  },
];

export default function OurProposal({ lang = "en" }: { lang?: Lang }) {
  const es = lang === "es";
  const tiers = es ? tiersEs : tiersEn;
  const stats = es ? statsEs : statsEn;
  const caseStudies = es ? caseStudiesEs : caseStudiesEn;
  const steps = es ? stepsEs : stepsEn;
  const challenges = es ? challengesEs : challengesEn;
  const plan = es ? planEs : planEn;

  return (
    <section className="relative py-28 px-6" id="our-proposal">
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
              <span className="text-gradient-peach-purple">Customer Education</span>
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
                {es ? "Cuatro problemas que frenan la educación de tus clientes" : "The Challenge You Face"}
              </h3>
              <p className="text-white/40 max-w-xl mx-auto text-sm">
                {es
                  ? "Educar a miles de clientes con métodos manuales deja funcionalidades sin usar y le cuesta crecimiento a tu empresa."
                  : <>Customer education is broken at scale — and it&apos;s costing you growth.</>}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

            {/* Hero headline */}
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-purple via-accent-blue to-accent-pink" />
              <div className="narrative-card rounded-2xl pl-10 pr-8 py-9 flex items-start gap-5">
                <span className="text-4xl flex-shrink-0 mt-0.5" role="img" aria-label={es ? "bombillo" : "idea"}>&#x1F4A1;</span>
                <div className="space-y-1">
                  <h4 className="text-white text-xl md:text-2xl font-bold leading-snug">
                    {es
                      ? "El momento en que un cliente entiende el valor de tu producto se puede diseñar y medir."
                      : <>The &ldquo;Aha! Moment&rdquo; shouldn&apos;t be a mystery.</>}
                  </h4>
                  <p className="text-white/55 text-sm leading-relaxed">
                    {es
                      ? "Muchos fundadores de SaaS ven cómo sube el abandono de clientes mientras los usuarios se quedan atascados en la pantalla de inicio de sesión. Es frustrante construir un producto de primer nivel y ver que los clientes se sienten abrumados y al final se rinden."
                      : <>Most SaaS founders watch their churn rates climb while users get stuck at the login screen. It&apos;s frustrating to build a world-class product only to see customers feel overwhelmed and eventually give up.</>}
                  </p>
                </div>
              </div>
            </div>

            {/* The Villain */}
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 px-8 py-7 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-red-400 text-xs font-bold tracking-widest uppercase">{es ? "El problema de fondo" : "The Villain"}</span>
                <div className="h-px flex-1 bg-red-500/20" />
              </div>
              {es ? (
                <>
                  <h4 className="text-white text-lg font-bold">La brecha de valor entre la compra y el primer resultado del cliente.</h4>
                  <p className="text-white/65 leading-relaxed">
                    Un cliente que no ve un resultado concreto en sus primeras sesiones tiene un <span className="text-red-400 font-semibold">alto riesgo de abandono</span>. La adopción estancada cuesta renovaciones y, con el tiempo, desgasta la reputación de tu producto.
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    En merahki.ai hemos visto software excelente fracasar por su complejidad. Por eso trabajamos para que tus clientes <span className="text-white font-medium">dominen tu producto y lo usen a fondo</span>. Los acompañamos desde el día en que se registran hasta que tu producto se vuelve parte de su trabajo diario.
                  </p>
                </>
              ) : (
                <>
                  <h4 className="text-white text-lg font-bold">The &ldquo;Value Gap.&rdquo;</h4>
                  <p className="text-white/65 leading-relaxed">
                    If a customer doesn&apos;t feel the &ldquo;win&rdquo; within their first few sessions, they aren&apos;t just &ldquo;slow&rdquo; — they are a <span className="text-red-400 font-semibold">churn risk</span>. The cost of stagnant adoption isn&apos;t just a missed renewal; it&apos;s the slow death of your product&apos;s reputation.
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    At merahki.ai, we&apos;ve seen brilliant software fail because of complexity. We believe your product deserves to be <span className="text-white font-medium">mastered, not just subscribed to</span>. We act as the bridge between &ldquo;I just signed up&rdquo; and &ldquo;I can&apos;t live without this.&rdquo;
                  </p>
                </>
              )}
            </div>

            {/* The Plan */}
            <div className="space-y-4">
              <p className="text-white/60 text-xs font-bold tracking-widest uppercase text-center">
                {es ? "El plan de merahki.ai para acelerar tu crecimiento" : "The Plan to accelerate your growth"}
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

            {/* The Transformation */}
            <div className="rounded-2xl bg-gradient-to-br from-accent-purple/15 to-accent-blue/10 border border-accent-purple/25 px-8 py-7 space-y-4">
              {es ? (
                <>
                  <p className="text-accent-purple text-xs font-bold tracking-widest uppercase">El resultado para tu empresa</p>
                  <p className="text-white text-lg font-semibold leading-relaxed">
                    La meta es reducir a la mitad tus tickets de soporte y bajar el tiempo hasta el primer valor (time-to-value) de semanas a minutos.
                  </p>
                  <p className="text-white/60 leading-relaxed">
                    Los clientes que se sienten expertos en tu producto se quedan y además lo recomiendan.
                  </p>
                  <div className="pt-3 border-t border-white/10">
                    <p className="text-white/80 font-semibold">merahki.ai diseña el onboarding que evita que pierdas clientes en las primeras semanas.</p>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-accent-purple text-xs font-bold tracking-widest uppercase">The Transformation</p>
                  <p className="text-white text-lg font-semibold leading-relaxed">
                    Imagine cutting your support tickets in half and watching your &ldquo;Time-to-Value&rdquo; shrink from weeks to minutes.
                  </p>
                  <p className="text-white/60 leading-relaxed">
                    When customers feel like experts, they don&apos;t just stay — they become your loudest advocates.
                  </p>
                  <div className="pt-3 border-t border-white/10">
                    <p className="text-white/80 font-semibold">Ready to stop the &ldquo;Onboarding Leak&rdquo;?</p>
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
                  ? "La academia aumenta la adopción de funcionalidades, la satisfacción de tus clientes y la recomendación de tu marca, y reduce los costos de soporte."
                  : "Increase feature adoption, customer satisfaction, and brand advocacy — while decreasing support costs."}
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

        {/* ── Why merahki.ai — Stats ── */}
        <AnimatedSection delay={0.1}>
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold">
                {es ? (
                  <>
                    Resultados de las empresas que trabajan con{" "}
                    <span className="text-gradient-peach-purple">merahki.ai</span>
                  </>
                ) : (
                  <>
                    Why{" "}
                    <span className="text-gradient-peach-purple">merahki.ai?</span>
                  </>
                )}
              </h3>
              <p className="text-white/50 max-w-2xl mx-auto">
                {es
                  ? "Más de 73.000 horas de capacitación ahorradas. Estrategias probadas en distintas industrias, con una educación que crece sin que tengas que agrandar tu equipo."
                  : "Over 73,000+ training hours saved. Proven strategies across industries, delivering education that scales without scaling your team."}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <AnimatedSection key={s.label} delay={i * 0.08}>
                  <div className="glass-card rounded-2xl p-6 text-center space-y-2">
                    <p className="text-4xl font-bold text-gradient-peach-purple">{s.value}</p>
                    <p className="text-white/55 text-sm leading-snug">{s.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ── Case Studies ── */}
        <AnimatedSection delay={0.1}>
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white/80 text-center">{es ? "Resultados por industria" : "Results by industry"}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {caseStudies.map((c, i) => (
                <AnimatedSection key={c.client} delay={i * 0.1}>
                  <div className={`rounded-2xl p-7 border border-white/10 bg-gradient-to-br ${c.color} to-transparent space-y-3`}>
                    <span className="section-badge text-white/40">{c.tag}</span>
                    <p className="text-2xl font-bold text-white mt-2 leading-tight">{c.result}</p>
                    <p className="text-white/55 text-sm leading-relaxed">{c.detail}</p>
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
                    Próximos pasos para{" "}
                    <span className="text-gradient-blue-pink">crear tu academia</span>
                  </>
                ) : (
                  <>
                    Next Steps to{" "}
                    <span className="text-gradient-blue-pink">Take Action</span>
                  </>
                )}
              </h3>
              <p className="text-white/50">
                {es
                  ? "Así trabajamos contigo desde la primera reunión hasta el lanzamiento de tu academia."
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
                {es ? "Agenda una reunión" : "Schedule a Meeting"} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
