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
    tag: "SaaS",
    result: "+34% feature adoption in 60 days",
    detail: "Role-specific onboarding paths and behavioral triggers converted passive sign-ups into power users.",
    color: "from-accent-purple/20",
  },
  {
    tag: "MedTech",
    result: "73,000+ training hours saved",
    detail: "AI-driven onboarding eliminated manual education workflows, scaling adoption across global markets.",
    color: "from-accent-blue/20",
  },
  {
    tag: "B2B Platform",
    result: "−42% early churn",
    detail: "Structured onboarding academy ensured customers reached their first value milestone within week one.",
    color: "from-accent-pink/20",
  },
];

const caseStudiesEs: typeof caseStudiesEn = [
  {
    tag: "SaaS",
    result: "+34% de adopción de funcionalidades en 60 días",
    detail: "Las rutas de onboarding por cargo y los disparadores de comportamiento convirtieron registros pasivos en usuarios expertos.",
    color: "from-accent-purple/20",
  },
  {
    tag: "MedTech",
    result: "Más de 73.000 horas de capacitación ahorradas",
    detail: "El onboarding con IA eliminó los procesos manuales de educación y llevó la adopción a mercados de todo el mundo.",
    color: "from-accent-blue/20",
  },
  {
    tag: "Plataforma B2B",
    result: "−42% de abandono temprano",
    detail: "Una academia de onboarding estructurada hizo que los clientes alcanzaran su primer hito de valor en la primera semana.",
    color: "from-accent-pink/20",
  },
];

const stepsEn = [
  { icon: CalendarCheck, step: "01", title: "Schedule a Meeting", desc: "Reach out to arrange a conversation at your earliest convenience." },
  { icon: MessageSquare, step: "02", title: "Discuss Your Needs", desc: "Share your onboarding challenges — we'll map the right adoption strategy for your product." },
  { icon: FileSignature, step: "03", title: "Review & Sign", desc: "We'll walk you through the proposal, ensuring you're confident in the program before we begin." },
  { icon: PlayCircle, step: "04", title: "Begin Implementation", desc: "Our team mobilizes to deliver a world-class adoption academy in 8 weeks." },
];

const stepsEs: typeof stepsEn = [
  { icon: CalendarCheck, step: "01", title: "Reunión inicial", desc: "Nos escribes y agendamos una conversación en el momento que mejor te quede." },
  { icon: MessageSquare, step: "02", title: "Diagnóstico de necesidades", desc: "Nos cuentas tus retos de onboarding y con eso definimos la estrategia de adopción adecuada para tu producto." },
  { icon: FileSignature, step: "03", title: "Revisión y firma", desc: "Te explicamos la propuesta punto por punto para que tengas confianza en el programa antes de empezar." },
  { icon: PlayCircle, step: "04", title: "Inicio de la implementación", desc: "Nuestro equipo se pone en marcha y entrega en 8 semanas una academia de adopción de primer nivel." },
];

const villainItemsEn = [
  { label: "Irrelevance", desc: "Every user is forced through the same generic path regardless of their role, goals, or existing knowledge." },
  { label: "Stagnation", desc: "Onboarding is treated as a one-and-done event — never evolving as the product or the user's needs change." },
  { label: "The Content Gap", desc: "Outdated manuals and videos never reflect the current version of the software, leaving users perpetually behind." },
];

const villainItemsEs: typeof villainItemsEn = [
  { label: "Irrelevancia", desc: "Todos los usuarios pasan por la misma ruta genérica, sin importar su cargo, sus objetivos o lo que ya saben." },
  { label: "Estancamiento", desc: "El onboarding se trata como un evento único que nunca se actualiza cuando cambian el producto o las necesidades del usuario." },
  { label: "La brecha de contenido", desc: "Los manuales y videos desactualizados no muestran la versión actual del software, y los usuarios siempre van un paso atrás." },
];

const layersEn = [
  {
    tag: "External",
    tagClass: "text-accent-purple",
    title: "The Feature Gap & Churn",
    items: [
      { title: "Low Engagement", desc: "Users sign up but only touch a fraction of features, never reaching full adoption or realizing the product's full ROI." },
      { title: "High Early Churn", desc: "Without a fast path to first value, users abandon before the product has a chance to prove itself." },
      { title: "Support Overload", desc: "The absence of self-service learning floods CS teams with basic how-to tickets, blocking strategic work." },
    ],
  },
  {
    tag: "Internal · Company",
    tagClass: "text-accent-blue",
    title: "Untapped Potential",
    items: [
      { title: "Innovation Being Wasted", desc: "Deep frustration that your best features go undiscovered because users simply \"don't get it\" — not for lack of quality, but lack of guidance." },
      { title: "Manual Management Stress", desc: "Manually identifying stuck users and patching gaps with limited resources is an unsustainable drain on every team involved." },
      { title: "No ROI Attribution", desc: "Without connecting onboarding to retention and expansion, it's impossible to justify or optimize education investment." },
    ],
  },
  {
    tag: "Internal · User",
    tagClass: "text-accent-peach",
    title: "Lost in the Product",
    items: [
      { title: "Overwhelm & Confusion", desc: "Users feel lost navigating a product that doesn't explain itself — leading to anxiety, avoidance, and eventual abandonment." },
      { title: "ROI Skepticism", desc: "When users can't find answers in the flow of work, they question whether the product is worth the time investment at all." },
      { title: "No In-Workflow Support", desc: "Forcing users to leave their workspace to find help disrupts productivity and erodes confidence in the product." },
    ],
  },
];

const layersEs: typeof layersEn = [
  {
    tag: "Externo",
    tagClass: "text-accent-purple",
    title: "Funcionalidades sin usar y abandono de clientes",
    items: [
      { title: "Poca participación", desc: "Los usuarios se registran pero solo usan una parte de las funcionalidades. Nunca llegan a la adopción completa ni ven todo el ROI del producto." },
      { title: "Alto abandono temprano", desc: "Sin un camino rápido al primer valor, los usuarios se van antes de que el producto pueda demostrar lo que vale." },
      { title: "Soporte saturado", desc: "Sin aprendizaje autoservicio, el equipo de Customer Success se llena de tickets básicos sobre cómo usar el producto y le queda poco tiempo para el trabajo estratégico." },
    ],
  },
  {
    tag: "Interno · Empresa",
    tagClass: "text-accent-blue",
    title: "Potencial desaprovechado",
    items: [
      { title: "Innovación desperdiciada", desc: "Frustra ver que tus mejores funcionalidades pasan desapercibidas porque los usuarios no las entienden. Lo que les falta es guía para usarlas." },
      { title: "Desgaste por la gestión manual", desc: "Detectar a mano a los usuarios estancados y tapar huecos con pocos recursos desgasta a todos los equipos involucrados y no se puede sostener." },
      { title: "Sin atribución de ROI", desc: "Si el onboarding no se conecta con la retención y la expansión, es imposible justificar o mejorar la inversión en educación." },
    ],
  },
  {
    tag: "Interno · Usuario",
    tagClass: "text-accent-peach",
    title: "Usuarios perdidos en el producto",
    items: [
      { title: "Agobio y confusión", desc: "Los usuarios se sienten perdidos en un producto que no se explica solo. Eso genera ansiedad, evasión y, al final, abandono." },
      { title: "Dudas sobre el ROI", desc: "Cuando los usuarios no encuentran respuestas mientras trabajan, dudan de que el producto valga el tiempo que le dedican." },
      { title: "Sin ayuda dentro del flujo de trabajo", desc: "Obligar a los usuarios a salir de su espacio de trabajo para buscar ayuda frena la productividad y desgasta su confianza en el producto." },
    ],
  },
];

const pillarsEn = [
  {
    numeral: "I",
    bgClass: "from-accent-purple/20",
    accentClass: "text-accent-purple",
    title: "Dynamic, Role-Specific Onboarding",
    desc: "Replaces the generic tour with tailored onboarding flows based on each user's segment, role, and real-time behavior — ensuring maximum relevance from the first login.",
    solves: "Eliminates irrelevance by adjusting content dynamically based on the user's specific role, progress, and behavior — no two onboarding journeys are the same.",
  },
  {
    numeral: "II",
    bgClass: "from-accent-blue/20",
    accentClass: "text-accent-blue",
    title: "Automated Adoption & Engagement Triggers",
    bullets: [
      { label: "Feature Adoption Triggers", desc: "Automatically identifies users not engaging with high-value features before disengagement becomes permanent." },
      { label: "Targeted Campaigns", desc: "Launches automated adoption campaigns that increase awareness and usage of specific tools at the right moment." },
    ],
    solves: "Prevents churn by proactively pulling users back into the product before they lose interest — replacing reactive CS with proactive intelligence.",
  },
  {
    numeral: "III",
    bgClass: "from-accent-peach/15",
    accentClass: "text-accent-peach",
    title: "AI-Driven Resource Creation & Management",
    bullets: [
      { label: "Creator Agent", desc: "Instantly converts release notes, product guides, and videos into structured onboarding programs — keeping training always current." },
      { label: "Manager Agent", desc: "Uses natural-language commands to assign onboarding or adoption campaigns to specific audiences based on usage triggers. No manual work." },
    ],
    solves: "Eliminates the “too slow” and “too manual” failures of legacy systems — training always reflects the current product, with zero content lag.",
  },
  {
    numeral: "IV",
    bgClass: "from-accent-pink/15",
    accentClass: "text-accent-pink",
    title: "Just-in-Time, In-Flow Support",
    bullets: [
      { label: "Learner Agent (AI Tutor)", desc: "A personal coach inside the product — answers feature questions and recommends next steps in real-time, directly within the user's workflow." },
      { label: "Self-Service Hub", desc: "AI-powered search across all learning and support assets so users get instant answers without ever leaving their workspace." },
    ],
    solves: "Reduces support ticket volume and eliminates the friction of “stopping work to learn” — help lives where the user already is.",
  },
];

const pillarsEs: typeof pillarsEn = [
  {
    numeral: "I",
    bgClass: "from-accent-purple/20",
    accentClass: "text-accent-purple",
    title: "Onboarding dinámico por cargo",
    desc: "Reemplaza el recorrido genérico por flujos de onboarding adaptados al segmento, el cargo y el comportamiento en tiempo real de cada usuario. Así el contenido es relevante desde el primer inicio de sesión.",
    solves: "Elimina la irrelevancia porque ajusta el contenido según el cargo, el avance y el comportamiento de cada usuario. Cada recorrido de onboarding es distinto.",
  },
  {
    numeral: "II",
    bgClass: "from-accent-blue/20",
    accentClass: "text-accent-blue",
    title: "Disparadores automáticos de adopción y engagement",
    bullets: [
      { label: "Disparadores de adopción de funcionalidades", desc: "Detecta de forma automática a los usuarios que no usan las funcionalidades de más valor, antes de que se desconecten del todo." },
      { label: "Campañas segmentadas", desc: "Lanza campañas automáticas de adopción que dan a conocer herramientas específicas y aumentan su uso en el momento justo." },
    ],
    solves: "Previene el abandono porque trae de vuelta a los usuarios antes de que pierdan el interés. Así Customer Success se anticipa con datos.",
  },
  {
    numeral: "III",
    bgClass: "from-accent-peach/15",
    accentClass: "text-accent-peach",
    title: "Creación y gestión de recursos con IA",
    bullets: [
      { label: "Agente creador", desc: "Convierte al instante notas de versión, guías de producto y videos en programas de onboarding estructurados. La capacitación siempre está al día." },
      { label: "Agente gestor", desc: "Con instrucciones en lenguaje natural asigna campañas de onboarding o de adopción a públicos específicos según disparadores de uso. Sin trabajo manual." },
    ],
    solves: "Elimina la lentitud y el trabajo manual de los sistemas tradicionales. La capacitación siempre refleja la versión actual del producto, sin retrasos en el contenido.",
  },
  {
    numeral: "IV",
    bgClass: "from-accent-pink/15",
    accentClass: "text-accent-pink",
    title: "Ayuda justo a tiempo dentro del flujo de trabajo",
    bullets: [
      { label: "Agente de aprendizaje (tutor con IA)", desc: "Un coach personal dentro del producto. Responde preguntas sobre las funcionalidades y recomienda los siguientes pasos en tiempo real, dentro del flujo de trabajo del usuario." },
      { label: "Centro de autoservicio", desc: "Búsqueda con IA en todos los recursos de aprendizaje y soporte, para que los usuarios tengan respuestas al instante sin salir de su espacio de trabajo." },
    ],
    solves: "Reduce el volumen de tickets de soporte y elimina la fricción de parar el trabajo para aprender. La ayuda está donde ya está el usuario.",
  },
];

const kpisEn = [
  { kpi: "Reduced Time-to-Value", desc: "Measure how much faster a user becomes fully productive after onboarding." },
  { kpi: "Increased Retention", desc: "Track churn reduction driven by deeper product engagement and mastery." },
  { kpi: "Expansion Opportunities", desc: "Identify ready-to-upgrade users based on their mastery of current features." },
];

const kpisEs: typeof kpisEn = [
  { kpi: "Menor tiempo hasta el primer valor", desc: "Cuánto más rápido llega un usuario a ser plenamente productivo después del onboarding." },
  { kpi: "Mayor retención", desc: "La reducción del abandono que logran un uso más profundo y un mejor dominio del producto." },
  { kpi: "Oportunidades de expansión", desc: "Los usuarios listos para pasar a un plan superior, según su dominio de las funcionalidades actuales." },
];

export default function ProductAdoptionProposal({ lang = "en" }: { lang?: Lang }) {
  const es = lang === "es";
  const tiers = es ? tiersEs : tiersEn;
  const stats = es ? statsEs : statsEn;
  const caseStudies = es ? caseStudiesEs : caseStudiesEn;
  const steps = es ? stepsEs : stepsEn;
  const villainItems = es ? villainItemsEs : villainItemsEn;
  const layers = es ? layersEs : layersEn;
  const pillars = es ? pillarsEs : pillarsEn;
  const kpis = es ? kpisEs : kpisEn;

  return (
    <section className="relative py-28 px-6" id="product-adoption-proposal">
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
              <span className="text-gradient-peach-purple">{es ? "Adopción de producto y onboarding" : <>Product Adoption &amp; Onboarding</>}</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-1 text-sm text-white/40 mt-2">
              {es ? (
                <>
                  <span><span className="text-white/60 font-medium">Preparada para:</span> Producto · Customer Success · Growth</span>
                  <span><span className="text-white/60 font-medium">Preparada por:</span> merahki.ai</span>
                </>
              ) : (
                <>
                  <span><span className="text-white/60 font-medium">Prepared for:</span> Product · Customer Success · Growth</span>
                  <span><span className="text-white/60 font-medium">Prepared by:</span> merahki.ai</span>
                </>
              )}
            </div>
          </div>
        </AnimatedSection>

        {/* ── The Challenge ── */}
        <AnimatedSection delay={0.1}>
          <div className="space-y-8">

            {/* Header */}
            <div className="text-center space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {es ? "Los problemas que frenan la adopción de tu producto" : "The Challenge You Face"}
              </h3>
              <p className="text-white/40 max-w-xl mx-auto text-sm">
                {es
                  ? "Los usuarios se registran, se confunden y se van antes de conocer el valor que entrega tu producto."
                  : "Users sign up, get confused, and churn — before they ever experience the value your product delivers."}
              </p>
            </div>

            {/* Philosophical root cause */}
            <div className="rounded-2xl border border-white/10 bg-white/3 px-8 py-7 space-y-3">
              {es ? (
                <>
                  <p className="text-white/50 text-xs font-bold tracking-widest uppercase">La causa de fondo</p>
                  <h4 className="text-white text-lg font-bold">
                    Un cliente con acceso a tu producto todavía necesita aprender a dominarlo.
                  </h4>
                  <p className="text-white/60 leading-relaxed">
                    Una venta solo se gana de verdad cuando tu cliente domina tu producto. El error más común de las empresas es dejar la educación como un extra para después de la venta, cuando la educación es el motor central del valor de un producto. Si a tus clientes les cuesta obtener el valor por el que ya pagaron, lo que falta es un sistema diseñado para guiarlos hacia el éxito.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-white/50 text-xs font-bold tracking-widest uppercase">The Root Cause</p>
                  <h4 className="text-white text-lg font-bold">
                    Access is not the same as mastery.
                  </h4>
                  <p className="text-white/60 leading-relaxed">
                    A sale is only a true win if your customer achieves mastery of your product. The fundamental mistake most companies make is treating education as a post-sale extra rather than the core engine of product value. When customers struggle to realize the value they&apos;ve already paid for, the problem isn&apos;t the product — it&apos;s the absence of a system designed to guide them to success.
                  </p>
                </>
              )}
            </div>

            {/* The Villain */}
            <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 px-8 py-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">{es ? "El problema de fondo" : "The Villain"}</span>
                <div className="h-px flex-1 bg-orange-500/20" />
              </div>
              <h4 className="text-white text-lg font-bold">{es ? "El onboarding estático." : "Static Onboarding."}</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                {es
                  ? "El onboarding tradicional, igual para todos, es el principal freno de la adopción. Falla de tres formas que se suman:"
                  : "The traditional one-size-fits-all onboarding model is the real enemy of adoption. It fails in three compounding ways:"}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                {villainItems.map((v) => (
                  <div key={v.label} className="rounded-xl bg-orange-500/8 border border-orange-500/15 p-4 space-y-2">
                    <p className="text-orange-300 font-semibold text-sm">{v.label}</p>
                    <p className="text-white/50 text-xs leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Three problem dimensions */}
            <div className="space-y-4">
              <p className="text-white/40 text-xs font-bold tracking-widest uppercase text-center">{es ? "Las tres capas del impacto" : "The Three Layers of Impact"}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {layers.map((layer) => (
                  <div key={layer.tag} className="glass-card rounded-2xl p-6 space-y-4">
                    <div className="space-y-1">
                      <span className={`text-xs font-bold tracking-widest uppercase ${layer.tagClass} opacity-70`}>{layer.tag}</span>
                      <h4 className="text-white font-semibold">{layer.title}</h4>
                    </div>
                    <ul className="space-y-3">
                      {layer.items.map((p) => (
                        <li key={p.title} className="space-y-0.5">
                          <p className="text-white/80 text-sm font-medium">{p.title}</p>
                          <p className="text-white/45 text-xs leading-relaxed">{p.desc}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
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
                <span className="text-4xl flex-shrink-0 mt-0.5" role="img" aria-label={es ? "cohete" : "rocket"}>&#x1F680;</span>
                <div className="space-y-1">
                  <h4 className="text-white text-xl md:text-2xl font-bold leading-snug">
                    {es
                      ? "La mayoría de los usuarios nunca llega al momento en que entiende el valor de tu producto."
                      : <>Most users never make it to their &ldquo;aha!&rdquo; moment.</>}
                  </h4>
                  <p className="text-white/55 text-sm leading-relaxed">
                    {es
                      ? "Tu producto resuelve un problema real. Si los usuarios no descubren ese valor por su cuenta, se van antes de comprobarlo. El onboarding va mucho más allá de un correo de bienvenida. Es la etapa más importante de todo tu motor de ingresos."
                      : <>Your product solves a real problem — but if users can&apos;t discover that value on their own, they won&apos;t stay long enough to find out. Onboarding is not a welcome email. It&apos;s the most critical stage of your entire revenue engine.</>}
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
                  <h4 className="text-white text-lg font-bold">La brecha de adopción entre el registro y la activación.</h4>
                  <p className="text-white/65 leading-relaxed">
                    Entre el registro y la activación se pierde la mayor parte de los ingresos de un SaaS. Cada usuario que se va antes de ver el valor es un <span className="text-red-400 font-semibold">costo de adquisición pagado completo y sin retorno</span>. Lo que falta es un sistema que guíe a los usuarios hacia el éxito.
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    En merahki.ai cerramos la brecha de adopción con un onboarding diseñado como un <span className="text-white font-medium">sistema de crecimiento continuo y medible</span>, que escala con tu producto.
                  </p>
                </>
              ) : (
                <>
                  <h4 className="text-white text-lg font-bold">The &ldquo;Adoption Gap.&rdquo;</h4>
                  <p className="text-white/65 leading-relaxed">
                    The space between &ldquo;signed up&rdquo; and &ldquo;activated&rdquo; is where most SaaS revenue is lost. Every user who churns before reaching value is a <span className="text-red-400 font-semibold">fully paid acquisition cost with zero return</span>. The problem isn&apos;t your product — it&apos;s the absence of a system that guides users to success.
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    At merahki.ai, we close the adoption gap by transforming onboarding from a one-time event into a <span className="text-white font-medium">continuous, measurable growth system</span> that scales with your product.
                  </p>
                </>
              )}
            </div>

            {/* The Plan */}
            <div className="space-y-6">

              {/* Strategy framing */}
              <div className="text-center space-y-1">
                {es ? (
                  <>
                    <p className="text-white/60 text-xs font-bold tracking-widest uppercase">El plan de merahki.ai para cerrar la brecha de adopción</p>
                    <p className="text-white/35 text-xs max-w-lg mx-auto">Un ecosistema de habilitación AI-native que automatiza el camino del usuario nuevo al usuario experto.</p>
                  </>
                ) : (
                  <>
                    <p className="text-white/60 text-xs font-bold tracking-widest uppercase">The Plan to close the adoption gap</p>
                    <p className="text-white/35 text-xs max-w-lg mx-auto">Transitioning from static access to an AI-native enablement ecosystem — automating the path from new user to power user.</p>
                  </>
                )}
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/3 px-7 py-5 flex items-start gap-4">
                <span className="text-2xl mt-0.5">&#x1F3AF;</span>
                <div className="space-y-1">
                  {es ? (
                    <>
                      <p className="text-white font-semibold">La estrategia: que cada usuario obtenga el valor de tu producto lo antes posible</p>
                      <p className="text-white/50 text-sm leading-relaxed">Desde su primer inicio de sesión, cada usuario aprende a dominar el producto y obtiene su valor lo más rápido posible. El sistema automatiza todo el recorrido del usuario nuevo al usuario experto, sin intervención manual.</p>
                    </>
                  ) : (
                    <>
                      <p className="text-white font-semibold">The Strategy: Shift from &ldquo;Access&rdquo; to &ldquo;Value Realization&rdquo;</p>
                      <p className="text-white/50 text-sm leading-relaxed">Every user — from their first login — achieves mastery and realizes product value as quickly as possible. The system automates the entire journey from &ldquo;new user&rdquo; to &ldquo;power user,&rdquo; without manual intervention.</p>
                    </>
                  )}
                </div>
              </div>

              {/* Four pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {pillars.map((pillar) => (
                  <div key={pillar.numeral} className={`rounded-2xl p-6 border border-white/10 bg-gradient-to-br ${pillar.bgClass} to-transparent space-y-4`}>
                    <div className="flex items-center gap-3">
                      <span className={`text-3xl font-bold ${pillar.accentClass} opacity-50 leading-none`}>{pillar.numeral}</span>
                      <h5 className="text-white font-semibold">{pillar.title}</h5>
                    </div>
                    {pillar.desc && (
                      <p className="text-white/55 text-sm leading-relaxed">{pillar.desc}</p>
                    )}
                    {pillar.bullets && (
                      <ul className="space-y-2">
                        {pillar.bullets.map((b) => (
                          <li key={b.label} className="space-y-0.5">
                            <p className="text-white/75 text-sm font-medium">{b.label}</p>
                            <p className="text-white/40 text-xs leading-relaxed">{b.desc}</p>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="pt-3 border-t border-white/10 space-y-1.5">
                      <p className={`${pillar.accentClass} text-xs font-semibold`}>{es ? "Resuelve" : "Solves"}</p>
                      <p className="text-white/40 text-xs leading-relaxed">{pillar.solves}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* ROI Measurement */}
              <div className="rounded-2xl border border-accent-purple/25 bg-gradient-to-br from-accent-purple/10 to-transparent px-7 py-6 space-y-4">
                <div className="flex items-center gap-2">
                  <p className="text-accent-purple text-xs font-bold tracking-widest uppercase">{es ? "Cómo se mide el éxito" : "Measuring Success"}</p>
                  <div className="h-px flex-1 bg-accent-purple/20" />
                </div>
                {es ? (
                  <>
                    <p className="text-white font-semibold">Medimos el impacto de la educación en los ingresos de tu empresa.</p>
                    <p className="text-white/50 text-sm leading-relaxed">Cada resultado se conecta directamente con KPI del negocio, además de las métricas de aprendizaje.</p>
                  </>
                ) : (
                  <>
                    <p className="text-white font-semibold">From &ldquo;completion rates&rdquo; to revenue impact.</p>
                    <p className="text-white/50 text-sm leading-relaxed">Every outcome is tied directly to business KPIs — not just learning metrics.</p>
                  </>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                  {kpis.map((k) => (
                    <div key={k.kpi} className="rounded-xl bg-accent-purple/8 border border-accent-purple/15 p-4 space-y-1.5">
                      <p className="text-white font-semibold text-sm">{k.kpi}</p>
                      <p className="text-white/45 text-xs leading-relaxed">{k.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* The Transformation */}
            <div className="rounded-2xl bg-gradient-to-br from-accent-purple/15 to-accent-blue/10 border border-accent-purple/25 px-8 py-7 space-y-4">
              {es ? (
                <>
                  <p className="text-accent-purple text-xs font-bold tracking-widest uppercase">El resultado para tu empresa</p>
                  <p className="text-white text-lg font-semibold leading-relaxed">
                    La meta es reducir un 40% el abandono temprano, ver crecer la adopción de funcionalidades mes a mes y liberar a tu equipo de Customer Success para que se concentre en el crecimiento estratégico.
                  </p>
                  <p className="text-white/60 leading-relaxed">
                    Los clientes que dominan tu producto se quedan, amplían su uso, lo recomiendan y se vuelven tu prueba social más creíble.
                  </p>
                  <div className="pt-3 border-t border-white/10">
                    <p className="text-white/80 font-semibold">merahki.ai convierte tu onboarding en tu palanca de crecimiento más fuerte.</p>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-accent-purple text-xs font-bold tracking-widest uppercase">The Transformation</p>
                  <p className="text-white text-lg font-semibold leading-relaxed">
                    Imagine cutting early churn by 40%, watching feature adoption climb month over month, and freeing your CS team to focus on strategic growth — not how-to tickets.
                  </p>
                  <p className="text-white/60 leading-relaxed">
                    When customers master your product, they don&apos;t just retain — they expand, refer, and become your most credible source of social proof.
                  </p>
                  <div className="pt-3 border-t border-white/10">
                    <p className="text-white/80 font-semibold">Ready to turn onboarding into your strongest growth lever?</p>
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
                  ? "Un ecosistema completo de tecnología y talento para activar a tus usuarios, entregado en 8 semanas."
                  : "A complete ecosystem of technology and talent ready to activate your users — delivered in 8 weeks."}
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
                  ? "Así construimos contigo un sistema de onboarding que tus usuarios completen de principio a fin."
                  : <>We&apos;re ready to build an onboarding system your users will actually complete.</>}
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
                {es ? "Agendar una llamada sobre adopción" : "Start Driving Adoption"} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
