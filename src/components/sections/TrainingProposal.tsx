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
    tag: "Healthcare",
    result: "60% faster compliance certification",
    detail: "Automated compliance paths reduced manual tracking and cut certification time dramatically.",
    color: "from-accent-purple/20",
  },
  {
    tag: "Retail & Field Staff",
    result: "3x improvement in onboarding speed",
    detail: "Role-specific dynamic onboarding cut ramp time from months to weeks across 40+ locations.",
    color: "from-accent-blue/20",
  },
  {
    tag: "Manufacturing",
    result: "40% reduction in retraining costs",
    detail: "AI-driven reinforcement loops eliminated knowledge gaps and reduced repeat training sessions.",
    color: "from-accent-pink/20",
  },
];

const caseStudiesEs: typeof caseStudiesEn = [
  {
    tag: "Salud",
    result: "Certificación de cumplimiento 60% más rápida",
    detail: "Las rutas de cumplimiento automatizadas redujeron el seguimiento manual y acortaron mucho el tiempo de certificación.",
    color: "from-accent-purple/20",
  },
  {
    tag: "Retail y personal de campo",
    result: "Onboarding 3 veces más rápido",
    detail: "El onboarding dinámico por cargo bajó el tiempo de adaptación de meses a semanas en más de 40 sedes.",
    color: "from-accent-blue/20",
  },
  {
    tag: "Manufactura",
    result: "40% menos costos de recapacitación",
    detail: "Los ciclos de refuerzo con IA cerraron brechas de conocimiento y redujeron las sesiones de capacitación repetidas.",
    color: "from-accent-pink/20",
  },
];

const stepsEn = [
  { icon: CalendarCheck, step: "01", title: "Schedule a Meeting", desc: "Reach out to arrange a conversation at your earliest convenience." },
  { icon: MessageSquare, step: "02", title: "Discuss Your Needs", desc: "Share your existing training challenges — we'll map the right academy structure for your workforce." },
  { icon: FileSignature, step: "03", title: "Review & Sign", desc: "We'll walk you through the proposal, ensuring you're comfortable and excited to get started." },
  { icon: PlayCircle, step: "04", title: "Begin Implementation", desc: "Our team mobilizes to deliver a world-class training and certification experience in 8 weeks." },
];

const stepsEs: typeof stepsEn = [
  { icon: CalendarCheck, step: "01", title: "Reunión inicial", desc: "Nos escribes y agendamos una conversación en el momento que mejor te quede." },
  { icon: MessageSquare, step: "02", title: "Diagnóstico de necesidades", desc: "Nos cuentas tus retos de capacitación y con eso definimos la estructura de academia que necesita tu equipo." },
  { icon: FileSignature, step: "03", title: "Revisión y firma", desc: "Te explicamos la propuesta punto por punto para que arranques con total claridad." },
  { icon: PlayCircle, step: "04", title: "Inicio de la implementación", desc: "Nuestro equipo se pone en marcha y entrega en 8 semanas una experiencia de formación y certificación de primer nivel." },
];

const challengesEn = [
  {
    number: "01",
    title: "Inability to Keep Up with Business Speed",
    desc: "Static training materials become outdated as products, regulations, and market conditions change — leaving field staff under-equipped for current demands.",
    color: "text-accent-purple",
  },
  {
    number: "02",
    title: "Lack of Relevance & Personalization",
    desc: "Generic content that isn't tailored to a specific role, site, or performance level leads to low engagement and poor knowledge retention.",
    color: "text-accent-blue",
  },
  {
    number: "03",
    title: "High Administrative & Manual Burden",
    desc: "Managing compliance training, tracking expiring certifications, and updating onboarding paths across distributed workforces is too manual to scale.",
    color: "text-accent-peach",
  },
  {
    number: "04",
    title: "Fragmented Learning Access",
    desc: "Employees lack access to knowledge in the flow of work. Leaving their workspace to complete long-form courses disrupts productivity and kills adoption.",
    color: "text-accent-pink",
  },
  {
    number: "05",
    title: "Slow Ramp Time for New Hires",
    desc: "Without role-specific, dynamic onboarding paths, new hires take unnecessarily long to reach full productivity — draining resources and morale.",
    color: "text-accent-purple",
  },
  {
    number: "06",
    title: "Difficulty Measuring Business Impact",
    desc: "Organizations struggle to connect learning data to tangible KPIs — productivity levels, quality scores, and compliance rates remain disconnected from training activity.",
    color: "text-accent-blue",
  },
  {
    number: "07",
    title: "The Forgetting Curve",
    desc: "Without AI-driven reinforcement, employees quickly forget what they've learned — making one-time training events an expensive and ineffective investment.",
    color: "text-accent-peach",
  },
];

const challengesEs: typeof challengesEn = [
  {
    number: "01",
    title: "La capacitación no va al ritmo del negocio",
    desc: "Los materiales estáticos se desactualizan cada vez que cambian los productos, la regulación o el mercado. El personal de campo queda sin las herramientas que pide el trabajo de hoy.",
    color: "text-accent-purple",
  },
  {
    number: "02",
    title: "Contenido poco relevante y sin personalizar",
    desc: "El contenido genérico, que no se adapta al cargo, la sede ni el nivel de desempeño, genera poca participación y se olvida rápido.",
    color: "text-accent-blue",
  },
  {
    number: "03",
    title: "Mucha carga administrativa y manual",
    desc: "Gestionar la capacitación obligatoria, seguir las certificaciones que vencen y actualizar las rutas de onboarding de equipos distribuidos es un trabajo demasiado manual para escalar.",
    color: "text-accent-peach",
  },
  {
    number: "04",
    title: "Acceso fragmentado al aprendizaje",
    desc: "Los empleados no encuentran el conocimiento en el momento en que lo necesitan. Salir de su espacio de trabajo para hacer cursos largos frena la productividad y acaba con la adopción.",
    color: "text-accent-pink",
  },
  {
    number: "05",
    title: "Los nuevos empleados tardan en ser productivos",
    desc: "Sin rutas de onboarding dinámicas y por cargo, los nuevos empleados tardan más de la cuenta en alcanzar su productividad plena. Eso consume recursos y desgasta la motivación.",
    color: "text-accent-purple",
  },
  {
    number: "06",
    title: "Dificultad para medir el impacto en el negocio",
    desc: "A las organizaciones les cuesta conectar los datos de aprendizaje con KPI concretos. La productividad, los indicadores de calidad y las tasas de cumplimiento siguen desconectados de la capacitación.",
    color: "text-accent-blue",
  },
  {
    number: "07",
    title: "La curva del olvido",
    desc: "Sin refuerzo con IA, los empleados olvidan rápido lo que aprendieron. Por eso las capacitaciones de una sola vez son una inversión costosa y poco efectiva.",
    color: "text-accent-peach",
  },
];

const planEn = [
  {
    step: "01",
    title: "Automated Administration",
    desc: "Natural-language commands handle complex logistics — role-based assignments, regional certifications, and compliance tracking — instantly, with no manual effort.",
    color: "from-accent-purple/20",
    accent: "text-accent-purple",
  },
  {
    step: "02",
    title: "Rapid Content Conversion",
    desc: "Raw materials — SOPs, manuals, and decks — are automatically transformed into structured, interactive modules in minutes, so training always matches the speed of change.",
    color: "from-accent-blue/20",
    accent: "text-accent-blue",
  },
  {
    step: "03",
    title: "Just-in-Time Learning",
    desc: "Shifts from memorization to in-flow support. Role-aware AI tutors answer questions in real-time within the tools employees already use — no workspace disruption.",
    color: "from-accent-peach/15",
    accent: "text-accent-peach",
  },
  {
    step: "04",
    title: "Performance-Linked ROI",
    desc: "Training data is tied directly to KPIs — productivity, quality scores, and compliance rates — bridging the gap between learning activity and measurable business impact.",
    color: "from-accent-pink/15",
    accent: "text-accent-pink",
  },
];

const planEs: typeof planEn = [
  {
    step: "01",
    title: "Administración automatizada",
    desc: "Con instrucciones en lenguaje natural se resuelve al instante y sin trabajo manual la logística compleja: asignaciones por cargo, certificaciones por región y seguimiento del cumplimiento.",
    color: "from-accent-purple/20",
    accent: "text-accent-purple",
  },
  {
    step: "02",
    title: "Conversión rápida de contenido",
    desc: "Los materiales que ya tienes, como procedimientos, manuales y presentaciones, se convierten en minutos en módulos interactivos y estructurados. Así la capacitación siempre va al ritmo del cambio.",
    color: "from-accent-blue/20",
    accent: "text-accent-blue",
  },
  {
    step: "03",
    title: "Aprendizaje justo a tiempo",
    desc: "El apoyo llega en el flujo de trabajo y la memorización pasa a segundo plano. Tutores de IA que conocen el cargo de cada persona responden preguntas en tiempo real dentro de las herramientas que ya usa, sin sacarla de su espacio de trabajo.",
    color: "from-accent-peach/15",
    accent: "text-accent-peach",
  },
  {
    step: "04",
    title: "ROI ligado al desempeño",
    desc: "Los datos de la capacitación se conectan directamente con KPI de productividad, calidad y cumplimiento. Así ves el impacto medible de la formación en el negocio.",
    color: "from-accent-pink/15",
    accent: "text-accent-pink",
  },
];

export default function TrainingProposal({ lang = "en" }: { lang?: Lang }) {
  const es = lang === "es";
  const tiers = es ? tiersEs : tiersEn;
  const stats = es ? statsEs : statsEn;
  const caseStudies = es ? caseStudiesEs : caseStudiesEn;
  const steps = es ? stepsEs : stepsEn;
  const challenges = es ? challengesEs : challengesEn;
  const plan = es ? planEs : planEn;

  return (
    <section className="relative py-28 px-6" id="training-proposal">
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
              <span className="text-gradient-peach-purple">{es ? "Formación y certificación" : <>Training &amp; Certification</>}</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-1 text-sm text-white/40 mt-2">
              {es ? (
                <>
                  <span><span className="text-white/60 font-medium">Preparada para:</span> Líderes de formación (L&amp;D) · Directores de Recursos Humanos · Operaciones</span>
                  <span><span className="text-white/60 font-medium">Preparada por:</span> merahki.ai</span>
                </>
              ) : (
                <>
                  <span><span className="text-white/60 font-medium">Prepared for:</span> L&amp;D Leaders · HR Directors · Operations</span>
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
                {es ? "Siete problemas que frenan la formación de tus empleados" : "The Challenge You Face"}
              </h3>
              <p className="text-white/40 max-w-xl mx-auto text-sm">
                {es
                  ? "La capacitación tradicional de empleados es lenta, genérica y difícil de medir, y eso le cuesta desempeño a tu empresa."
                  : <>Traditional employee training is too slow, too generic, and too hard to measure — and it&apos;s costing you performance.</>}
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

            {/* Hero headline */}
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-purple via-accent-blue to-accent-pink" />
              <div className="narrative-card rounded-2xl pl-10 pr-8 py-9 flex items-start gap-5">
                <span className="text-4xl flex-shrink-0 mt-0.5" role="img" aria-label={es ? "birrete de graduación" : "graduation"}>&#x1F393;</span>
                <div className="space-y-1">
                  <h4 className="text-white text-xl md:text-2xl font-bold leading-snug">
                    {es
                      ? "Tu equipo necesita capacitarse en semanas para responder a lo que pide el negocio."
                      : <>Your workforce can&apos;t wait months to be trained.</>}
                  </h4>
                  <p className="text-white/55 text-sm leading-relaxed">
                    {es
                      ? "La mayoría de los equipos de L&D lanzan la capacitación cuando el cambio ya pasó, corren a actualizar contenido viejo y ven cómo se estancan las tasas de finalización. Un gran producto rinde poco si tu equipo no sabe ejecutarlo."
                      : <>Most L&amp;D teams are fighting a losing battle — deploying training after the fact, scrambling to update outdated content, and watching completion rates flatline. Building a great product means nothing if your team can&apos;t execute on it.</>}
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
                  <h4 className="text-white text-lg font-bold">Tus empleados trabajan con conocimiento desactualizado.</h4>
                  <p className="text-white/65 leading-relaxed">
                    Cada día que tus empleados trabajan con información vieja, tu empresa acumula una <span className="text-red-400 font-semibold">deuda de desempeño que crece sola</span>. Ese costo incluye plazos regulatorios vencidos, fallas de calidad, curvas de aprendizaje más largas y un equipo que nunca llega a su máximo potencial.
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    En merahki.ai hemos visto organizaciones de alto desempeño frenadas por una capacitación que no les sigue el ritmo. Por eso diseñamos una <span className="text-white font-medium">formación continua, que acompaña a tu equipo todos los días</span>. Acompañamos a cada persona desde su contratación hasta que se vuelve parte del grupo de mejor desempeño.
                  </p>
                </>
              ) : (
                <>
                  <h4 className="text-white text-lg font-bold">The &ldquo;Stale Knowledge Problem.&rdquo;</h4>
                  <p className="text-white/65 leading-relaxed">
                    Every day your employees operate on outdated information, you accumulate <span className="text-red-400 font-semibold">compounding performance debt</span>. The cost isn&apos;t just a missed compliance deadline — it&apos;s quality failures, longer ramp times, and a workforce that never reaches full potential.
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    At merahki.ai, we&apos;ve seen high-performing organizations crippled by training that can&apos;t keep pace. We believe your team deserves to be <span className="text-white font-medium">continuously enabled, not periodically certified</span>. We bridge the gap between &ldquo;hired&rdquo; and &ldquo;high-performer.&rdquo;
                  </p>
                </>
              )}
            </div>

            {/* The Plan */}
            <div className="space-y-5">
              <div className="text-center space-y-1">
                {es ? (
                  <>
                    <p className="text-white/60 text-xs font-bold tracking-widest uppercase">Un ecosistema de desempeño AI-native para tu equipo</p>
                    <p className="text-white/35 text-xs max-w-lg mx-auto">Reemplaza el modelo de catálogo de cursos por un ecosistema dinámico de cuatro pilares, hecho para la velocidad del negocio actual.</p>
                  </>
                ) : (
                  <>
                    <p className="text-white/60 text-xs font-bold tracking-widest uppercase">An AI-Native Performance Ecosystem</p>
                    <p className="text-white/35 text-xs max-w-lg mx-auto">Replaces the &ldquo;course-catalog&rdquo; model with a dynamic, four-pillar ecosystem built for the speed of modern business.</p>
                  </>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    La meta es reducir a la mitad el tiempo de adaptación de los nuevos empleados, cerrar las brechas de cumplimiento y subir los indicadores de desempeño de tu equipo sin contratar más personas en L&amp;D.
                  </p>
                  <p className="text-white/60 leading-relaxed">
                    Los empleados que se sienten acompañados y preparados todo el tiempo cumplen con lo que se les pide y rinden más.
                  </p>
                  <div className="pt-3 border-t border-white/10">
                    <p className="text-white/80 font-semibold">merahki.ai construye contigo un programa para que tu equipo aprenda de forma continua.</p>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-accent-purple text-xs font-bold tracking-widest uppercase">The Transformation</p>
                  <p className="text-white text-lg font-semibold leading-relaxed">
                    Imagine cutting ramp time in half, eliminating compliance gaps, and watching your team&apos;s performance metrics climb — without adding a single L&amp;D headcount.
                  </p>
                  <p className="text-white/60 leading-relaxed">
                    When employees feel continuously supported and equipped, they don&apos;t just comply — they perform.
                  </p>
                  <div className="pt-3 border-t border-white/10">
                    <p className="text-white/80 font-semibold">Ready to build a workforce that never stops learning?</p>
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
                  ? "Un ecosistema completo de tecnología y talento para hacer upskilling de tu equipo, entregado en 8 semanas."
                  : "A complete ecosystem of technology and talent ready to upskill your workforce — delivered in 8 weeks."}
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
                    Resultados de las empresas que trabajan con <span className="text-gradient-peach-purple">merahki.ai</span>
                  </>
                ) : (
                  <>
                    Why <span className="text-gradient-peach-purple">merahki.ai?</span>
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
                <AnimatedSection key={c.tag} delay={i * 0.1}>
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
                  ? "Así construimos contigo un programa de capacitación que tu equipo use en su trabajo diario."
                  : <>We&apos;re ready to build a training program your team will actually use.</>}
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
                {es ? "Agenda tu llamada de estrategia" : "Book Your Strategy Call"} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
