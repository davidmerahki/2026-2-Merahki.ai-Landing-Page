import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Check } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlowBackground from "@/components/ui/GlowBackground";
import HubSpotForm from "@/components/HubSpotForm";
import Accordion from "@/components/ui/Accordion";

export type Locale = "en" | "es";

export type FaqItem = {
  question: string;
  answer: string;
};

const demoUrl = "https://ulaiz.share.hsforms.com/2E5fbICR4QJejlPcle2rN1w";

const faqItemsByLocale: Record<Locale, FaqItem[]> = {
  en: [
    {
      question: "Does this compete with our faculty or replace them?",
      answer:
        "Neither. Your faculty are the protagonists: they bring the knowledge and academic voice. We design, produce, and measure. Content IP stays with your institution.",
    },
    {
      question: "We already have Moodle, Canvas, or Blackboard. Why Merahki?",
      answer:
        "We work on top of the platform you have. We add what almost none of them carry: instructional design, AI-powered production, impact analytics, and verifiable credentials.",
    },
    {
      question: "Can micro-credentials transfer toward academic credit?",
      answer:
        "Each one is mapped to the National Qualifications Framework (8 levels) so it stacks toward diplomas, specializations, and degrees. Formal equivalence is confirmed case by case; we deliver the mapping and the architecture.",
    },
    {
      question: "How does this relate to our accreditation processes?",
      answer:
        "The analytics that accompany every micro-credential generate documentable evidence for high-quality accreditation: relevance, impact, and student mobility, all auditable by cohort.",
    },
    {
      question: "How much does it cost and when does it pay off?",
      answer:
        "Programs start at $2,975 USD setup plus monthly operation. First cohorts begin generating revenue from week six.",
    },
    {
      question: "Do we have to create content from scratch?",
      answer:
        "No. We leverage what you already have —syllabi, recordings, papers, presentations— and restructure it for micro-credentials with AI. What's missing, we produce.",
    },
    {
      question: "Who owns the intellectual property?",
      answer:
        "You do. The brand, the content, and the data belong to your institution. Merahki is the team that puts them to work.",
    },
    {
      question: "What makes a digital badge verifiable?",
      answer:
        "It validates a competency through assessment, not attendance. It's a blockchain record (Open Badge 3.0 + W3C Verifiable Credentials), impossible to forge, that the graduate shares on LinkedIn and any employer verifies in seconds.",
    },
    {
      question: "Can you work with public universities?",
      answer:
        "Yes. We operate with public and private institutions across Colombia and LATAM, with Habeas Data compliance and negotiable data residency.",
    },
    {
      question: "Data and security?",
      answer:
        "HTTPS enforced, GDPR-ready, compliant with Law 1581 (Habeas Data), SSO/SAML, and encrypted data handling.",
    },
  ],
  es: [
    {
      question: "¿Esto compite con nuestros docentes o los reemplaza?",
      answer:
        "Ninguna de las dos. Tus docentes son los protagonistas: aportan el conocimiento y la voz académica. Nosotros diseñamos, producimos y medimos. La propiedad intelectual del contenido queda en tu institución.",
    },
    {
      question: "Ya tenemos Moodle, Canvas o Blackboard. ¿Para qué Merahki?",
      answer:
        "Trabajamos sobre la plataforma que ya tienes. Sumamos las capas que casi ninguna trae: diseño instruccional, producción con IA, analítica de impacto y credenciales verificables.",
    },
    {
      question: "¿Las microcredenciales se pueden homologar con créditos académicos?",
      answer:
        "Cada microcredencial se mapea al Marco Nacional de Cualificaciones (8 niveles) para que sea apilable hacia diplomados, especializaciones y títulos. La equivalencia formal se confirma caso a caso; nosotros entregamos el mapeo y la arquitectura.",
    },
    {
      question: "¿Cómo se relaciona esto con nuestros procesos de acreditación?",
      answer:
        "La analítica que acompaña a cada microcredencial genera evidencia documentable para acreditación de alta calidad: pertinencia, impacto y movilidad estudiantil con datos auditables por cohorte.",
    },
    {
      question: "¿Cuánto cuesta y cuándo se recupera la inversión?",
      answer:
        "Los programas arrancan desde $2.975 USD de setup más operación mensual. Las primeras cohortes empiezan a generar ingreso desde la semana 6.",
    },
    {
      question: "¿Tenemos que crear el contenido desde cero?",
      answer:
        "No. Aprovechamos lo que ya tienes —syllabi, grabaciones, papers, presentaciones— y lo reestructuramos para microcredenciales con IA. Lo que falta lo producimos nosotros.",
    },
    {
      question: "¿De quién es la propiedad intelectual?",
      answer:
        "Tuya. La marca, el contenido y los datos son de tu institución. Merahki es el equipo que los pone a funcionar.",
    },
    {
      question: "¿Qué hace verificable a una insignia digital?",
      answer:
        "Valida una competencia mediante evaluación, no asistencia. Es un registro en blockchain (Open Badge 3.0 + W3C Verifiable Credentials), imposible de falsificar, que el egresado comparte en LinkedIn y cualquier empleador verifica en segundos.",
    },
    {
      question: "¿Pueden trabajar con universidades públicas?",
      answer:
        "Sí. Operamos con instituciones públicas y privadas en Colombia y LATAM, con cumplimiento de Habeas Data y residencia de datos negociable.",
    },
    {
      question: "¿Datos y seguridad?",
      answer:
        "HTTPS obligatorio, GDPR-ready, compatible con Ley 1581 (Habeas Data), SSO/SAML y datos encriptados.",
    },
  ],
};

const copy = {
  en: {
    game: {
      id: "the-game-change",
      eyebrow: "THE GAME CHANGE",
      title: "Your university is already an academic authority. Make it the authority that validates skills, too.",
      body: [
        "You don't need another platform. You need the mechanism that connects what you already have —experienced faculty, a respected brand, an alumni network that values your seal— with what the market wants to buy.",
        "Merahki is that mechanism. We design, virtualize, run, and measure micro-credentials under your brand, on top of the platform you already use (Moodle, Canvas, Blackboard). We close them with blockchain-verifiable digital badges through POK.",
        "Your university stays the voice that says \"this person can do this.\" What changes is the speed, the scale, and the proof that it works.",
      ],
      closing: "Five layers. One delivery.",
    },
    deliveriesEyebrow: "WHAT YOU GET",
    deliveriesTitle: "Four deliveries that change the conversation with your board.",
    deliveries: [
      {
        title: "Micro-credential design and virtualization",
        body: "We take your faculty's knowledge and turn it into programs people actually finish. Instructional design backed by recognized frameworks —Gagné, Merrill, Action Mapping—, premium AI-produced video, rigorous assessments, and adaptive learning paths.",
        highlight: "In 6 to 12 weeks, not the 18 to 36 months of traditional curriculum design.",
        footer: "In the Professional tier, completion rates climb from 20–35% to 60–80%.",
      },
      {
        title: "Recurring revenue for your institution",
        body: "Your alumni network and the companies in your region are a market that already wants to buy. We turn your continuing education into a revenue stream that grows with every cohort, on branded academies that lift registration rates by 40%.",
        footer: "70% of your graduates are already willing to keep learning with you. The question is whether you have something to offer them before they look elsewhere.",
      },
      {
        title: "Learning analytics your leadership signs off without extra meetings",
        body: "Stop reporting hours taught. Start reporting completion, employability, revenue per program, and real relevance to the job market.",
        footer: "Dashboards with 95+ filters, automated reports per cohort, and indicators aligned with the National Qualifications Framework. Your next board review stops being a defense and becomes a case.",
      },
      {
        title: "Verifiable digital badges on blockchain",
        body: "We issue credentials that validate competencies —not attendance—, stackable toward diplomas and degrees, mapped to the National Qualifications Framework.",
        footer: "Blockchain-verifiable, portable, permanent, ready to share on LinkedIn. Powered by POK: Open Badge 3.0, W3C Verifiable Credentials, 1,100+ institutions, 19+ countries.",
      },
    ],
    pathsTitle: "Every micro-credential you issue opens three paths for your graduate. Your brand is on all three.",
    paths: [
      { title: "The path to employment.", body: "The graduate shows their badge on LinkedIn. The employer's hiring system verifies it in milliseconds. Your university is the last authority that validated the skill that lands them the job." },
      { title: "Academic mobility.", body: "They use the badge to transfer credit into a graduate program —at your institution or another. Each micro-credential is a step toward a diploma, a specialization, or the equivalent of a technical-technological degree." },
      { title: "Professional growth.", body: "They stack validated competencies across their working life. Your seal stays with them when they get promoted, change careers, lead a project. For decades." },
    ],
    pathsClosing: "Your university stops being a closed chapter in your graduate's life. It becomes a relationship that lasts decades.",
    stackTitle: "A micro-credential is not an attendance certificate. It's the smallest building block of an academic program.",
    stackAria: "Stackable architecture levels for micro-credentials",
    levels: [
      { title: "LEVEL 1: Events · Webinars · Bootcamps · Conferences", label: "attract" },
      { title: "LEVEL 2: Courses", label: "certify a topic" },
      { title: "LEVEL 3: Micro-credentials", label: "120 hours · one validated competency · certify a role" },
      { title: "LEVEL 4: Macro-credential", label: "equivalent to a degree or technical-technological program" },
    ],
    stackBody: "Every level mapped to the National Qualifications Framework (Decree 1649/2021, 8 levels). Every badge portable, owned by the graduate, with your seal behind it.",
    stackClosing: "Colombia and Chile are today the only LATAM countries with the formal infrastructure to stack micro-credentials toward degree-level education. The window is open now.",
    workId: "how-we-work",
    workEyebrow: "HOW WE WORK",
    workTitle: "From a conversation to your first credential issued. In under two months.",
    workCta: "Book my 30-min demo",
    steps: [
      { step: "01", time: "Week 1–2", title: "Co-design", body: "We understand which credential you need to issue and for whom: the B2C market of your graduates, the B2B market of companies in your region, or both. Together with your academic experts, we define the learning outcomes, the competency indicators, and the observable behaviors the micro-credential will validate.", deliverable: "a co-designed micro-credential with learning outcomes, indicators, and assessment rubrics." },
      { step: "02", time: "Week 3–6", title: "Production and launch", body: "We produce the full experience with AI: adaptive courses, interactive video, interactive activities and content, rigorous assessments, and learning paths. Your branded academy goes live, with active analytics from day one.", deliverable: "a working academy with your micro-credential ready for enrollments." },
      { step: "03", time: "Week 6 onward", title: "Measurement and certification", body: "We connect each cohort's data with the credential infrastructure. We issue verifiable digital badges to the graduates who demonstrate the competency. We build cohort dashboards and quarterly reports in the language your board speaks.", deliverable: "badges issued, active dashboards, and continuous impact reports." },
    ],
    deliverableLabel: "Deliverable:",
    faqTitle: "What your board will ask.",
    closingId: "closing",
    closingH2: "Let's start co-designing your micro-credential. Book a 30-minute call.",
    closingH2Gradient: "co-designing your micro-credential.",
    closingSubtitle: "A working session to understand what makes micro-credentials actually work, with insights drawn from 20 countries. You leave the call with the blueprint for your first micro-credential and the estimated ROI per cohort.",
    closingFormTitle: "Book a call with Merahki",
    closingBullets: [
      { lead: "Live co-design, not a slide deck.", body: "We come with questions about your institution. You leave with a draft blueprint." },
      { lead: "You talk to the person who designs micro-credentials with Uniandes, Universidad del Valle, and Escuela Nacional del Deporte.", body: "Not an SDR." },
      { lead: "You leave with three concrete deliverables.", body: "A map of your first micro-credential · estimated ROI per cohort · the next operational step." },
      { lead: "30 minutes flat. No commitment, no contract.", body: "If it's not for you, you say so and we move on." },
    ],
  },
  es: {
    game: {
      id: "el-cambio-de-juego",
      eyebrow: "EL CAMBIO DE JUEGO",
      title: "Tu universidad ya es una autoridad académica. Conviértela también en una autoridad que valida competencias.",
      body: [
        "No necesitas otra plataforma. Necesitas el mecanismo que conecta lo que ya tienes —docentes con experiencia, una marca con peso, una red de egresados que respeta tu sello— con lo que el mercado quiere comprar.",
        "Merahki es ese mecanismo. Diseñamos, virtualizamos, operamos y medimos microcredenciales bajo tu marca, sobre la plataforma que ya usas (Moodle, Canvas, Blackboard). Las cerramos con insignias digitales verificables en blockchain a través de POK.",
        "Tu universidad sigue siendo la voz que dice \"esta persona puede hacer esto\". Cambia la velocidad, la escala y la prueba de que funciona.",
      ],
      closing: "Cinco capas. Una sola entrega.",
    },
    deliveriesEyebrow: "LO QUE RECIBES",
    deliveriesTitle: "Cuatro entregas que cambian la conversación con tu junta.",
    deliveries: [
      {
        title: "Diseño y virtualización de microcredenciales",
        body: "Tomamos el conocimiento de tus docentes y lo convertimos en programas que la gente sí termina. Diseño instruccional con frameworks reconocidos —Gagné, Merrill, Action Mapping—, video premium producido con IA, evaluaciones rigurosas y rutas adaptativas.",
        highlight: "En 6 a 12 semanas, no los 18 a 36 meses del diseño curricular tradicional.",
        footer: "En el tier Professional, las tasas de finalización pasan de 20–35% a 60–80%.",
      },
      {
        title: "Ingreso recurrente para tu institución",
        body: "Tu red de egresados y las empresas de tu región son un mercado que ya quiere comprar. Convertimos tu educación continua en una fuente de ingresos que crece con cada cohorte, sobre academias de marca propia que aumentan la tasa de registro en 40%.",
        footer: "El 70% de tus egresados ya está dispuesto a seguir aprendiendo contigo. La pregunta es si tienes algo que ofrecerles antes de que lo busquen en otro lado.",
      },
      {
        title: "Learning analytics que tu rectoría firma sin pedir reuniones extra",
        body: "Deja de reportar horas dictadas. Empieza a reportar finalización, empleabilidad, ingresos por programa y pertinencia real ante el sector productivo.",
        footer: "Dashboards con 95+ filtros, reportes automatizados por cohorte e indicadores alineados al Marco Nacional de Cualificaciones. Tu próxima sustentación deja de ser una defensa y se vuelve un caso.",
      },
      {
        title: "Insignias digitales verificables en blockchain",
        body: "Emitimos credenciales que validan competencias —no asistencia—, apilables hacia diplomados y títulos, mapeadas al Marco Nacional de Cualificaciones.",
        footer: "Verificables en blockchain, portables, permanentes y listas para compartir en LinkedIn. Sobre POK: Open Badge 3.0, W3C Verifiable Credentials, +1.100 instituciones, +19 países.",
      },
    ],
    pathsTitle: "Cada microcredencial que emites abre tres caminos para tu egresado. Tu marca está en los tres.",
    paths: [
      { title: "Camino al empleo.", body: "El egresado presenta su insignia en LinkedIn. El sistema de selección de la empresa la verifica en milisegundos. Tu universidad es la última instancia que validó la habilidad que le consigue el puesto." },
      { title: "Movilidad académica.", body: "Usa la insignia para homologar créditos en un posgrado —en tu institución o en otra—. Cada microcredencial es un peldaño hacia un diplomado, una especialización o el equivalente a un título técnico-tecnológico." },
      { title: "Crecimiento profesional.", body: "Apila competencias validadas a lo largo de su vida laboral. Tu sello sigue ahí cuando lo ascienden, cuando cambia de carrera, cuando lidera un proyecto. Para siempre." },
    ],
    pathsClosing: "Tu universidad deja de ser un capítulo cerrado en la vida del egresado. Se vuelve una relación que dura décadas.",
    stackTitle: "Una microcredencial no es un certificado de asistencia. Es la unidad mínima de un programa académico.",
    stackAria: "Niveles de arquitectura apilable para microcredenciales",
    levels: [
      { title: "NIVEL 1: Eventos · Webinars · Bootcamps · Congresos", label: "atraen" },
      { title: "NIVEL 2: Cursos", label: "certifican un tema" },
      { title: "NIVEL 3: Microcredenciales", label: "120 horas · una competencia validada · certifican un rol" },
      { title: "NIVEL 4: Macrocredencial", label: "equivalente a título o programa técnico-tecnológico" },
    ],
    stackBody: "Cada nivel mapeado al Marco Nacional de Cualificaciones (Decreto 1649/2021, 8 niveles). Cada insignia portable, propiedad del egresado, con tu sello detrás.",
    stackClosing: "Colombia y Chile son hoy los únicos países de LATAM con la infraestructura formal para apilar microcredenciales hacia educación de grado. La ventana está abierta ahora.",
    workId: "como-trabajamos",
    workEyebrow: "CÓMO TRABAJAMOS",
    workTitle: "De una conversación a la primera credencial emitida. En menos de dos meses.",
    workCta: "Agendar mi demo de 30 min",
    steps: [
      { step: "01", time: "Semana 1–2", title: "Co-diseño", body: "Entendemos qué credencial necesitas emitir y para quién: el mercado B2C de tus egresados, el B2B de las empresas de tu región o ambos. Con tus expertos académicos definimos los resultados de aprendizaje, los indicadores de competencia y las conductas observables que la microcredencial va a validar.", deliverable: "microcredencial co-diseñada con resultados de aprendizaje, indicadores y rúbricas de evaluación." },
      { step: "02", time: "Semana 3–6", title: "Producción y lanzamiento", body: "Producimos la experiencia completa con IA: cursos adaptativos, video interactivo, actividades y contenidos interactivos, evaluaciones rigurosas y rutas de aprendizaje. Tu academia de marca propia sale en vivo, con analítica activa desde el día uno.", deliverable: "academia funcionando con la microcredencial lista para inscripciones." },
      { step: "03", time: "Semana 6 en adelante", title: "Medición y certificación", body: "Conectamos los datos de cada cohorte con la infraestructura de credenciales. Emitimos las insignias digitales verificables al egresado que demuestra la competencia. Construimos dashboards de cohorte y reportes trimestrales en el idioma que habla tu junta.", deliverable: "insignias emitidas, dashboards activos y reportes continuos de impacto." },
    ],
    deliverableLabel: "Entregable:",
    faqTitle: "Lo que tu junta va a preguntar.",
    closingId: "cierre",
    closingH2: "Empecemos a co-diseñar tu microcredencial. Agenda una llamada de 30 minutos.",
    closingH2Gradient: "co-diseñar tu microcredencial.",
    closingSubtitle: "Una sesión para entender qué tienen las microcredenciales que sí funcionan e insights de 20 países en todo el mundo. Sales del call con el blueprint de tu primera microcredencial y el ROI estimado por cohorte.",
    closingFormTitle: "Agenda una llamada con Merahki",
    closingBullets: [
      { lead: "Co-diseño en vivo, no presentación de slides.", body: "Llegamos con preguntas sobre tu institución. Sales con un blueprint borrador." },
      { lead: "Hablas con quien diseña microcredenciales con Uniandes, Univalle y la Escuela Nacional del Deporte.", body: "No con un SDR." },
      { lead: "Te llevas tres entregables concretos.", body: "Mapa de tu primera microcredencial · ROI estimado por cohorte · siguiente paso operativo." },
      { lead: "30 minutos exactos. Sin compromiso, sin contrato.", body: "Si no es para ti, lo dices y seguimos." },
    ],
  },
};

export function getHomeFaqItems(locale: Locale) {
  return faqItemsByLocale[locale];
}

export default function HomeBodyV2({
  children,
  locale,
}: {
  children?: ReactNode;
  locale: Locale;
}) {
  const t = copy[locale];

  return (
    <>
      <section id={t.game.id} className="relative py-20 md:py-32 px-6 bg-white/[0.03] border-y border-white/5">
        <div className="max-w-[760px] mx-auto text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold tracking-[0.28em] uppercase text-accent-peach mb-5">{t.game.eyebrow}</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">{t.game.title}</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="mt-10 space-y-7 text-left text-white/70 text-base md:text-lg leading-[1.7]">
              {t.game.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-14 md:mt-16 text-center text-3xl md:text-4xl font-bold text-gradient-peach-purple">{t.game.closing}</p>
          </AnimatedSection>
        </div>
      </section>

      <section id={locale === "es" ? "cuatro-entregas" : "four-deliveries"} className="relative py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold tracking-[0.28em] uppercase text-accent-purple mb-5">{t.deliveriesEyebrow}</p>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto text-white">{t.deliveriesTitle}</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {t.deliveries.map((item, index) => (
              <AnimatedSection key={item.title} delay={(index % 2) * 0.1}>
                <article className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-9 flex flex-col">
                  <h3 className="text-2xl md:text-[28px] font-semibold text-white leading-tight">{item.title}</h3>
                  <p className="mt-5 text-white/65 text-base md:text-lg leading-[1.65]">{item.body}</p>
                  {item.highlight && <p className="mt-6 border-l-4 border-accent-peach bg-accent-peach/10 rounded-r-2xl px-5 py-4 text-white font-semibold leading-relaxed">{item.highlight}</p>}
                  <p className="mt-6 pt-5 border-t border-white/10 text-white/55 text-sm md:text-base leading-relaxed italic">{item.footer}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id={locale === "es" ? "tres-caminos" : "three-paths"} className="relative py-20 md:py-32 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto text-center text-white">{t.pathsTitle}</h2>
          </AnimatedSection>
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
            {t.paths.map((path, index) => (
              <AnimatedSection key={path.title} delay={index * 0.1}>
                <article className="lg:border-l lg:border-white/10 lg:pl-8">
                  <p className="text-5xl md:text-6xl font-bold text-accent-peach/80">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-6 text-2xl font-semibold text-white">{path.title}</h3>
                  <p className="mt-4 text-white/65 text-base md:text-lg leading-[1.65]">{path.body}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.25}>
            <p className="mt-16 md:mt-20 max-w-[720px] mx-auto text-center text-xl md:text-2xl leading-relaxed text-white/80 italic">{t.pathsClosing}</p>
          </AnimatedSection>
        </div>
      </section>

      <section id={locale === "es" ? "arquitectura-apilable" : "stackable-architecture"} className="relative py-20 md:py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white max-w-4xl mx-auto">{t.stackTitle}</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <ol aria-label={t.stackAria} className="mt-14 max-w-[720px] mx-auto space-y-4">
              {t.levels.map((level, index) => (
                <li key={level.title} className="relative">
                  <div className={`rounded-3xl border p-6 md:p-8 ${index >= 2 ? "border-accent-purple/40 bg-accent-purple/10" : "border-white/10 bg-white/[0.03]"}`}>
                    <p className="text-lg md:text-2xl font-semibold text-white">{level.title}</p>
                    <p className="mt-2 text-white/55 text-sm md:text-base italic">{level.label}</p>
                  </div>
                  {index < t.levels.length - 1 && <div aria-hidden="true" className="py-3 text-accent-peach text-3xl leading-none">↓</div>}
                </li>
              ))}
            </ol>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="mt-12 max-w-[720px] mx-auto space-y-6 text-white/70 text-base md:text-lg leading-[1.7]">
              <p>{t.stackBody}</p>
              <p className="text-white font-semibold border-t border-white/10 pt-6">{t.stackClosing}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id={t.workId} className="relative py-20 md:py-32 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold tracking-[0.28em] uppercase text-accent-peach mb-5">{t.workEyebrow}</p>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto text-white">{t.workTitle}</h2>
            </div>
          </AnimatedSection>
          <div className="relative">
            <div className="hidden lg:block absolute top-11 left-[calc(16.67%-1px)] right-[calc(16.67%-1px)] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {t.steps.map((step, index) => (
                <AnimatedSection key={step.step} delay={index * 0.12}>
                  <article className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-8 flex flex-col gap-5">
                    <span aria-hidden="true" className="text-6xl md:text-7xl font-bold leading-none text-accent-peach">{step.step}</span>
                    <p className="inline-flex w-fit rounded-full border border-accent-purple/30 bg-accent-purple/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">{step.time}</p>
                    <div className="space-y-4 flex-1">
                      <h3 className="text-2xl md:text-[28px] font-semibold text-white">{step.title}</h3>
                      <p className="text-white/60 text-base leading-relaxed">{step.body}</p>
                    </div>
                    <p className="border-t border-white/10 bg-white/[0.03] rounded-2xl px-4 py-3 text-sm text-white/65 leading-relaxed"><span className="text-white font-semibold">{t.deliverableLabel}</span> {step.deliverable}</p>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </div>
          <AnimatedSection delay={0.3}>
            <div className="text-center mt-14">
              <Link href={demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm">
                {t.workCta} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {children}

      <section id="faq" className="relative py-20 md:py-32 px-6">
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">{t.faqTitle}</h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <Accordion items={faqItemsByLocale[locale]} />
          </AnimatedSection>
        </div>
      </section>

      <section id={t.closingId} className="relative py-20 md:py-32 px-6 overflow-hidden">
        <GlowBackground
          indigoPosition={{ x: "20%", y: "30%" }}
          rustPosition={{ x: "80%", y: "70%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mx-auto max-w-[840px]">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight">{t.closingH2}</h2>
              <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed max-w-[720px] mx-auto">{t.closingSubtitle}</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              {/* Left: HubSpot form */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-2 md:p-4 order-1">
                <HubSpotForm />
              </div>
              {/* Right: benefits */}
              <ul className="space-y-8 order-2">
                {t.closingBullets.map((bullet, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-accent-peach" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-white font-medium text-base md:text-lg leading-snug">{bullet.lead}</p>
                      <p className="mt-2 text-white/60 text-sm md:text-base leading-relaxed">{bullet.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
