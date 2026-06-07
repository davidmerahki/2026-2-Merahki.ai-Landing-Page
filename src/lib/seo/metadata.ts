import type { Metadata } from "next";

type Language = "en" | "es";
type PageType = "feature" | "solution" | "home" | "resource" | "case-study";

type SeoEntry = {
  slug: string;
  type: PageType;
  audience?: string;
  en?: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogImageAlt: string;
  };
  es?: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogImageAlt: string;
  };
};

const BASE_URL = "https://merahki.ai";
const TWITTER_HANDLE = "@merahki_ai";

export const seoEntries: Record<string, SeoEntry> = {
  home: {
    slug: "",
    type: "home",
    en: {
      title: "Merahki | Design and measure micro-credentials",
      description: "Design, virtualize and measure verifiable micro-credentials under your brand. Turn continuing education into growth and recurring revenue.",
      ogTitle: "People and companies already buy micro-credentials. The only question is who from.",
      ogDescription: "Merahki designs, virtualizes and measures your micro-credentials, and closes them with blockchain-verifiable digital badges. Turn your continuing education into a growth engine and recurring revenue stream.",
      ogImageAlt: "Merahki — The end-to-end micro-credentials ecosystem",
    },
    es: {
      title: "Merahki | Diseña y mide microcredenciales",
      description: "Diseña, virtualiza y mide microcredenciales verificables bajo tu marca. Convierte tu educación continua en crecimiento e ingreso recurrente.",
      ogTitle: "Personas y empresas ya compran microcredenciales. La única pregunta es a quién.",
      ogDescription: "Merahki diseña, virtualiza y mide tus microcredenciales, y las cierra con insignias digitales verificables en blockchain. Convierte tu educación continua en un motor de crecimiento e ingreso recurrente.",
      ogImageAlt: "Merahki — Ecosistema de microcredenciales end-to-end",
    },
  },
  "flexible-courses": {
    slug: "flexible-courses",
    type: "feature",
    en: {
      title: "Adaptive courses with AI | Merahki",
      description: "Create personalized learning experiences that adapt to each learner's pace and style. AI-powered adaptive courses with a drag-and-drop builder.",
      ogTitle: "Adaptive courses that meet every learner where they are",
      ogDescription: "AI-powered adaptive learning with a drag-and-drop builder. Boost completion rates and measurable outcomes.",
      ogImageAlt: "Merahki — Flexible adaptive courses",
    },
    es: {
      title: "Cursos adaptativos con IA | Merahki",
      description: "Crea experiencias de aprendizaje que se adaptan al ritmo y estilo de cada estudiante. Cursos adaptativos con IA y editor drag-and-drop.",
      ogTitle: "Cursos adaptativos que se ajustan a cada estudiante",
      ogDescription: "Aprendizaje adaptativo con IA y editor drag-and-drop. Sube tus tasas de finalización y prueba resultados medibles.",
      ogImageAlt: "Merahki — Cursos flexibles y adaptativos",
    },
  },
  "mobile-app-builder": {
    slug: "mobile-app-builder",
    type: "feature",
    en: {
      title: "Branded mobile learning app | Merahki",
      description: "Launch your white-label learning app on iOS and Android in under a month, no code required. Offline access, push notifications, and in-app purchases included.",
      ogTitle: "Your branded learning app on iOS and Android — in under a month",
      ogDescription: "App users generate +311% more revenue. No code, fully white-label, published to both stores.",
      ogImageAlt: "Merahki — White-label mobile learning app",
    },
    es: {
      title: "App móvil de aprendizaje | Merahki",
      description: "Lanza tu app móvil de aprendizaje en iOS y Android con tu marca, sin código, en menos de un mes. Offline, push, biometría e in-app purchases incluidos.",
      ogTitle: "Tu app de aprendizaje con marca propia en iOS y Android",
      ogDescription: "Los usuarios de app generan +311% más revenue. Sin código, white-label, publicada en ambas tiendas.",
      ogImageAlt: "Merahki — App móvil de aprendizaje white-label",
    },
  },
  "analytics-reports": {
    slug: "analytics-reports",
    type: "feature",
    en: {
      title: "Learning analytics and reports | Merahki",
      description: "Measure the real impact of your education programs. Dashboards with 95+ filters, automated reports, and AI insights to defend your program with data.",
      ogTitle: "Stop reporting hours taught. Start reporting impact.",
      ogDescription: "Learning analytics with 95+ filters, automated reports, and conversational AI insights — all from one dashboard.",
      ogImageAlt: "Merahki — Learning analytics and reports",
    },
    es: {
      title: "Learning analytics y reportes | Merahki",
      description: "Mide el impacto real de tus programas de educación. Dashboards con 95+ filtros, reportes automáticos e insights con IA para defender tu programa con datos.",
      ogTitle: "Deja de reportar horas. Empieza a reportar impacto.",
      ogDescription: "Learning analytics con 95+ filtros, reportes automáticos e insights conversacionales con IA — todo en un dashboard.",
      ogImageAlt: "Merahki — Learning analytics y reportes",
    },
  },
  "website-builder": {
    slug: "website-builder",
    type: "feature",
    en: {
      title: "Academy websites that convert | Merahki",
      description: "Your branded academy website, no templates, built to convert visitors into students. 120+ academies delivered, +40% average registration rate.",
      ogTitle: "Academy websites built by education growth experts",
      ogDescription: "120+ academies delivered. 3× faster than in-house. +40% registration rates. Full IP transferred to you.",
      ogImageAlt: "Merahki — Conversion-first academy websites",
    },
    es: {
      title: "Sitios de academia que convierten | Merahki",
      description: "Tu academia con marca propia, sin templates, lista para convertir visitantes en estudiantes. +120 academias entregadas y +40% de tasa de registro.",
      ogTitle: "Sitios de academia construidos por expertos en crecimiento educativo",
      ogDescription: "+120 academias entregadas. 3× más rápido que in-house. +40% en tasa de registro. Propiedad intelectual transferida a ti.",
      ogImageAlt: "Merahki — Sitios de academia conversion-first",
    },
  },
  "interactive-video": {
    slug: "interactive-video",
    type: "feature",
    en: {
      title: "Interactive video for learning | Merahki",
      description: "Turn every video into a measurable learning experience. AI-powered subtitles, translations, quizzes, and pop-ups — no extra post-production hours.",
      ogTitle: "Every video becomes a learning experience",
      ogDescription: "AI-generated subtitles, quizzes, summaries, and pop-ups — all built in, all trackable, no extra tools.",
      ogImageAlt: "Merahki — Interactive video for learning",
    },
    es: {
      title: "Video interactivo para aprender | Merahki",
      description: "Convierte cada video en una experiencia de aprendizaje medible. Subtítulos, traducciones, quizzes y pop-ups con IA — sin horas extra de postproducción.",
      ogTitle: "Cada video se vuelve una experiencia de aprendizaje",
      ogDescription: "Subtítulos, quizzes, resúmenes y pop-ups con IA — integrados, medibles, sin herramientas adicionales.",
      ogImageAlt: "Merahki — Video interactivo para aprendizaje",
    },
  },
  "survey-builder": {
    slug: "survey-builder",
    type: "feature",
    en: {
      title: "Forms and surveys for academies | Merahki",
      description: "Capture leads, measure NPS, assess courses, and collect consents without leaving your academy. No-code AI-powered forms with 10+ question types.",
      ogTitle: "Capture leads, feedback, and insights — where learning happens",
      ogDescription: "No-code forms and surveys with AI-guided dialogue. 3× higher completion with conditional logic.",
      ogImageAlt: "Merahki — Forms and surveys for academies",
    },
    es: {
      title: "Encuestas para tu academia | Merahki",
      description: "Captura leads, mide NPS, evalúa cursos y recoge consentimientos sin salir de tu academia. Formularios sin código con IA y 10+ tipos de pregunta.",
      ogTitle: "Captura leads, feedback e insights donde sucede el aprendizaje",
      ogDescription: "Formularios y encuestas sin código con diálogo guiado por IA. 3× más tasa de completitud con lógica condicional.",
      ogImageAlt: "Merahki — Encuestas y formularios para academias",
    },
  },
  "ai-assistant": {
    slug: "ai-assistant",
    type: "feature",
    en: {
      title: "AI assistant for course creation | Merahki",
      description: "Generate course outlines, assessments, and insights in minutes. Your team brings the expertise, AI accelerates production 10×. Your content stays yours.",
      ogTitle: "Higher-quality learning experiences, built with AI",
      ogDescription: "Course Planner, Assessment Designer, and AI Insights — all in one platform. 10× faster content creation.",
      ogImageAlt: "Merahki — AI assistant for course creation",
    },
    es: {
      title: "Asistente de IA para cursos | Merahki",
      description: "Genera outlines, evaluaciones e insights en minutos. Tu equipo aporta la experiencia, la IA acelera la producción 10×. Tu contenido sigue siendo tuyo.",
      ogTitle: "Experiencias de aprendizaje de mayor calidad, con IA",
      ogDescription: "Course Planner, Assessment Designer y AI Insights — en una sola plataforma. Creación de contenido 10× más rápida.",
      ogImageAlt: "Merahki — Asistente de IA para crear cursos",
    },
  },
  "live-sessions": {
    slug: "live-sessions",
    type: "feature",
    en: {
      title: "Virtual classroom and live sessions | Merahki",
      description: "Connect your learners with instructors and peers in live sessions. Native integration with Zoom, Webex, Microsoft Teams, Google Meet, and Calendly.",
      ogTitle: "Break the isolation of self-paced learning",
      ogDescription: "Live sessions, 1:1 coaching, breakout rooms, polls, and attendance tracking — all inside your academy. +34% feature adoption.",
      ogImageAlt: "Merahki — Virtual classroom and live sessions",
    },
    es: {
      title: "Aula virtual y sesiones en vivo | Merahki",
      description: "Conecta a tus estudiantes con instructores y pares en sesiones en vivo. Integración nativa con Zoom, Webex, Microsoft Teams, Google Meet y Calendly.",
      ogTitle: "Rompe el aislamiento del aprendizaje autodirigido",
      ogDescription: "Sesiones en vivo, coaching 1:1, breakout rooms, polls y attendance tracking — dentro de tu academia. +34% en adopción.",
      ogImageAlt: "Merahki — Aula virtual y sesiones en vivo",
    },
  },
  integrations: {
    slug: "integrations",
    type: "feature",
    en: {
      title: "Integrations with your stack | Merahki",
      description: "Connect Merahki to 50+ native tools — payments, CRM, video, and marketing — or build custom workflows with API and webhooks. Zapier and Make included.",
      ogTitle: "Connect everything you already use",
      ogDescription: "50+ native integrations: Stripe, HubSpot, Zoom, Mailchimp, Shopify, and more. Plus full API and webhooks for enterprise workflows.",
      ogImageAlt: "Merahki — Integrations hub",
    },
    es: {
      title: "Integraciones con tu stack | Merahki",
      description: "Conecta Merahki con +50 herramientas nativas — pagos, CRM, video y marketing — o construye workflows custom con API y webhooks. Zapier y Make incluidos.",
      ogTitle: "Conecta todo lo que ya usas",
      ogDescription: "+50 integraciones nativas: Stripe, HubSpot, Zoom, Mailchimp, Shopify y más. API completa y webhooks para workflows enterprise.",
      ogImageAlt: "Merahki — Hub de integraciones",
    },
  },
  certification: {
    slug: "certification",
    type: "feature",
    en: {
      title: "Certification with verifiable badges | Merahki",
      description: "Design certification programs with rigorous assessments and blockchain-verifiable digital badges. Validate competencies, not just attendance.",
      ogTitle: "Certifications that validate competency, not attendance",
      ogDescription: "Assessment-based certification, verifiable digital badges, automatic LinkedIn share, and a recertification path. Powered by POK.",
      ogImageAlt: "Merahki — Certification programs with verifiable badges",
    },
    es: {
      title: "Certificación con insignias verificables | Merahki",
      description: "Diseña programas de certificación con evaluaciones rigurosas e insignias digitales verificables en blockchain. Validas competencias, no solo asistencia.",
      ogTitle: "Certificaciones que validan competencia, no asistencia",
      ogDescription: "Certificación por evaluación, insignias digitales verificables, auto-share en LinkedIn y ruta de recertificación. Con tecnología POK.",
      ogImageAlt: "Merahki — Programas de certificación con insignias verificables",
    },
  },
  "customer-education": {
    slug: "customer-education",
    type: "solution",
    audience: "Customer Education and SaaS leaders",
    en: {
      title: "Customer Education that lifts adoption | Merahki",
      description: "Accelerate adoption, reduce early churn, and certify your customers with measurable education programs. Link learning to renewals and NRR.",
      ogTitle: "Turn customer education into expansion revenue",
      ogDescription: "Onboarding, product adoption, and customer certification — tied to NRR, ticket deflection, and time-to-value.",
      ogImageAlt: "Merahki — Customer Education for SaaS",
    },
    es: {
      title: "Customer Education que sube adopción | Merahki",
      description: "Acelera la adopción, reduce el churn temprano y certifica a tus clientes con programas educativos medibles. Conecta formación con renovaciones y NRR.",
      ogTitle: "Convierte la educación de clientes en revenue de expansión",
      ogDescription: "Onboarding, adopción de producto y certificación de clientes — atados a NRR, ticket deflection y time-to-value.",
      ogImageAlt: "Merahki — Customer Education para SaaS",
    },
  },
  "partner-academies": {
    slug: "partner-academies",
    type: "solution",
    audience: "Partner Education and channel leaders",
    en: {
      title: "Partner Academies and certification | Merahki",
      description: "Certify your partners by competency and scale beyond direct sales. Automated tiers, PRM-LMS integration, and 6× revenue from certified partners.",
      ogTitle: "Certified partners generate 6× more revenue",
      ogDescription: "Partner certification gated by competency, PRM-LMS integration, monthly tier recalculation. 353% ROI on partner training (PartnerAwesome 2025).",
      ogImageAlt: "Merahki — Partner Academies and channel certification",
    },
    es: {
      title: "Partner Academies y certificación | Merahki",
      description: "Certifica a tus partners por competencia y escala más allá de la venta directa. Tiers automáticos, integración PRM-LMS y revenue 6× con canales certificados.",
      ogTitle: "Los partners certificados generan 6× más revenue",
      ogDescription: "Certificación por competencia, integración PRM-LMS y recálculo mensual de tier. 353% ROI en partner training (PartnerAwesome 2025).",
      ogImageAlt: "Merahki — Partner Academies y certificación de canales",
    },
  },
  "product-adoption": {
    slug: "product-adoption",
    type: "solution",
    audience: "Product, growth, and customer success leaders",
    en: {
      title: "Product adoption through education | Merahki",
      description: "Increase feature adoption and shorten time-to-value with measurable product education. +38% average adoption lift in structured programs.",
      ogTitle: "+38% feature adoption lift — measured, not estimated",
      ogDescription: "Product education tied to in-app adoption, NRR, and ticket deflection. From onboarding to power user, in weeks.",
      ogImageAlt: "Merahki — Product adoption through education",
    },
    es: {
      title: "Adopción de producto con educación | Merahki",
      description: "Aumenta la adopción de funcionalidades y reduce el time-to-value con educación de producto medible. +38% de adopción promedio en programas estructurados.",
      ogTitle: "+38% de adopción de features — medido, no estimado",
      ogDescription: "Educación de producto atada a adopción in-app, NRR y ticket deflection. De onboarding a power user, en semanas.",
      ogImageAlt: "Merahki — Adopción de producto a través de educación",
    },
  },
  "training-certification": {
    slug: "training-certification",
    type: "solution",
    audience: "L&D and certification leaders",
    en: {
      title: "Training and certification programs | Merahki",
      description: "Build training, compliance, and certification programs in weeks. AI-accelerated production, rigorous assessments, and verifiable credentials.",
      ogTitle: "Training and certification, designed for measurable outcomes",
      ogDescription: "Compliance, upskilling, onboarding, and certification — produced with AI, validated by assessment, closed with verifiable credentials.",
      ogImageAlt: "Merahki — Training and certification programs",
    },
    es: {
      title: "Training y certificación | Merahki",
      description: "Crea programas de formación, compliance y certificación en semanas. Producción acelerada con IA, evaluaciones rigurosas y credenciales verificables.",
      ogTitle: "Training y certificación, diseñados para resultados medibles",
      ogDescription: "Compliance, upskilling, onboarding y certificación — producidos con IA, validados por evaluación, cerrados con credenciales verificables.",
      ogImageAlt: "Merahki — Programas de training y certificación",
    },
  },
  "marketing-your-courses": {
    slug: "marketing-your-courses",
    type: "solution",
    audience: "Education marketing and academy growth leaders",
    en: {
      title: "Marketing and growth for courses | Merahki",
      description: "Turn your education programs into a growth engine. SEO, conversion-first landing pages, marketing integrations, and +40% registration rates.",
      ogTitle: "Make your academy your #1 growth channel",
      ogDescription: "SEO-ready academy, conversion-first landing pages, marketing integrations, and analytics from first click to course completion.",
      ogImageAlt: "Merahki — Marketing and growth for online courses",
    },
    es: {
      title: "Marketing y crecimiento de cursos | Merahki",
      description: "Convierte tus programas educativos en motor de crecimiento. SEO, landing pages que convierten, integraciones de marketing y +40% en tasa de registro.",
      ogTitle: "Convierte tu academia en tu canal de crecimiento #1",
      ogDescription: "Academia lista para SEO, landings que convierten, integraciones de marketing y analítica desde el primer clic hasta el certificado.",
      ogImageAlt: "Merahki — Marketing y crecimiento para cursos online",
    },
  },
  "continuing-education": {
    slug: "continuing-education",
    type: "solution",
    audience: "Continuing education and university leaders",
    en: {
      title: "Continuing education revenue | Merahki",
      description: "Launch and scale branded continuing education programs. Micro-credentials, learning analytics, and recurring revenue from cohort one.",
      ogTitle: "Continuing education that pays for itself by cohort one",
      ogDescription: "Branded micro-credentials, learning analytics, and verifiable badges — designed to turn alumni into a recurring revenue stream.",
      ogImageAlt: "Merahki — Continuing education and micro-credentials",
    },
    es: {
      title: "Educación continua recurrente | Merahki",
      description: "Lanza y escala programas de educación continua con marca propia. Microcredenciales, learning analytics e ingreso recurrente desde la cohorte uno.",
      ogTitle: "Educación continua que se paga sola desde la primera cohorte",
      ogDescription: "Microcredenciales con marca propia, learning analytics e insignias verificables — diseñadas para convertir egresados en ingreso recurrente.",
      ogImageAlt: "Merahki — Educación continua y microcredenciales",
    },
  },
  "growth-for-universities": {
    slug: "growth-for-universities",
    type: "solution",
    audience: "University rectors and continuing education leaders",
    en: {
      title: "Growth and revenue for universities | Merahki",
      description: "Turn your academic authority into revenue. Branded micro-credentials, measurable continuing education, and verifiable badges for your graduates.",
      ogTitle: "Your university is already an authority. Make it the one that validates skills, too.",
      ogDescription: "Branded micro-credentials, learning analytics, and verifiable badges — mapped to the National Qualifications Framework. Live in 6–12 weeks.",
      ogImageAlt: "Merahki — Growth and revenue for universities",
    },
    es: {
      title: "Crecimiento para universidades | Merahki",
      description: "Convierte tu autoridad académica en ingresos. Microcredenciales con marca propia, educación continua medible e insignias verificables para tus egresados.",
      ogTitle: "Tu universidad ya es una autoridad. Conviértela también en la que valida competencias.",
      ogDescription: "Microcredenciales con marca propia, learning analytics e insignias verificables — mapeadas al Marco Nacional de Cualificaciones. En 6 a 12 semanas.",
      ogImageAlt: "Merahki — Crecimiento e ingresos para universidades",
    },
  },
  "medical-education": {
    slug: "medical-education",
    type: "solution",
    audience: "Healthcare and life sciences education leaders",
    en: {
      title: "Medical education and training | Merahki",
      description: "Design medical education programs with full audit trail, regulatory compliance, and verifiable credentials tied to clinical competency.",
      ogTitle: "Medical education with audit trail and clinical-competency credentials",
      ogDescription: "Compliance-grade programs for healthcare and life sciences. Audit trail, regulated content workflows, and competency-bound verifiable credentials.",
      ogImageAlt: "Merahki — Medical and healthcare education",
    },
    es: {
      title: "Educación médica y formación regulada | Merahki",
      description: "Diseña programas de educación médica con audit trail completo, compliance regulatorio y credenciales verificables atadas a competencia clínica.",
      ogTitle: "Educación médica con audit trail y credenciales de competencia clínica",
      ogDescription: "Programas con grado de compliance para salud y life sciences. Audit trail, workflows regulados y credenciales verificables atadas a competencia.",
      ogImageAlt: "Merahki — Educación médica y healthcare",
    },
  },
  "education-led-growth": {
    slug: "education-led-growth",
    type: "solution",
    audience: "Growth, education, and revenue leaders",
    en: {
      title: "Education-Led Growth strategy | Merahki",
      description: "Education as the measurable engine for revenue, retention, and adoption. Frameworks, cases, and data to turn your academy into your #1 growth channel.",
      ogTitle: "Education-Led Growth: the strategy turning academies into growth engines",
      ogDescription: "Frameworks, case studies, and 2026 data on how leading SaaS and education companies are using education as their #1 growth channel.",
      ogImageAlt: "Merahki — Education-Led Growth",
    },
    es: {
      title: "Education-Led Growth con educación | Merahki",
      description: "La educación como motor medible de ingresos, retención y adopción. Frameworks, casos y datos para convertir tu academia en tu canal de crecimiento #1.",
      ogTitle: "Education-Led Growth: la estrategia que convierte academias en motores de crecimiento",
      ogDescription: "Frameworks, casos y datos 2026 sobre cómo las empresas de SaaS y educación líderes usan la educación como su canal #1 de crecimiento.",
      ogImageAlt: "Merahki — Education-Led Growth",
    },
  },
  methodology: {
    slug: "methodology",
    type: "solution",
    audience: "Education program leaders",
    en: {
      title: "Merahki methodology: 5 layers | Merahki",
      description: "How we design, produce, run, and measure education programs. Five integrated layers — from diagnosis to ROI — in 6 to 8 weeks.",
      ogTitle: "Five layers, one delivery",
      ogDescription: "Instructional design, AI-powered production, LMS operation, learning analytics, and verifiable credentials — orchestrated as a single delivery.",
      ogImageAlt: "Merahki — Methodology: five layers, one delivery",
    },
    es: {
      title: "Metodología Merahki: 5 capas | Merahki",
      description: "Cómo diseñamos, producimos, operamos y medimos programas educativos. Cinco capas integradas — del diagnóstico al ROI — en 6 a 8 semanas.",
      ogTitle: "Cinco capas. Una sola entrega.",
      ogDescription: "Diseño instruccional, producción con IA, operación de LMS, learning analytics y credenciales verificables — orquestados como una sola entrega.",
      ogImageAlt: "Merahki — Metodología: cinco capas, una entrega",
    },
  },
  blog: {
    slug: "blog",
    type: "resource",
    en: {
      title: "Insights on micro-credentials | Merahki",
      description: "Strategy, frameworks, and data on micro-credentials, continuing education, learning analytics, and Education-Led Growth. From the Merahki team.",
      ogTitle: "Insights on education-led growth and micro-credentials",
      ogDescription: "Strategy, frameworks, and data on micro-credentials, continuing education, learning analytics, and Education-Led Growth. From the Merahki team.",
      ogImageAlt: "Merahki — Insights and articles",
    },
    es: {
      title: "Insights sobre microcredenciales | Merahki",
      description: "Estrategia, frameworks y datos sobre microcredenciales, educación continua, learning analytics y Education-Led Growth. Por el equipo Merahki.",
      ogTitle: "Insights sobre microcredenciales y educación continua",
      ogDescription: "Estrategia, frameworks y datos sobre microcredenciales, educación continua, learning analytics y Education-Led Growth. Por el equipo Merahki.",
      ogImageAlt: "Merahki — Insights y artículos",
    },
  },
  reports: {
    slug: "reports",
    type: "resource",
    en: {
      title: "Strategy reports for education growth | Merahki",
      description: "Research and strategic reports on micro-credentials, continuing education, learning analytics, and Education-Led Growth.",
      ogTitle: "Strategy reports for education-led growth",
      ogDescription: "Research and strategic reports on micro-credentials, continuing education, learning analytics, and Education-Led Growth.",
      ogImageAlt: "Merahki — Strategy reports",
    },
    es: {
      title: "Reportes sobre crecimiento educativo | Merahki",
      description: "Investigación y reportes estratégicos sobre microcredenciales, educación continua, learning analytics y Education-Led Growth.",
      ogTitle: "Reportes estratégicos sobre crecimiento educativo",
      ogDescription: "Investigación y reportes estratégicos sobre microcredenciales, educación continua, learning analytics y Education-Led Growth.",
      ogImageAlt: "Merahki — Reportes estratégicos",
    },
  },
  "case-studies/uniandes-sanofi-microbiota": {
    slug: "case-studies/uniandes-sanofi-microbiota",
    type: "case-study",
    audience: "Medical education and university continuing education leaders",
    en: {
      title: "Uniandes × Sanofi CHC: Multinational Medical Education in 8 Weeks | Case Study | Merahki",
      description: "How Merahki orchestrated two certified medical education programs in 8 weeks for Universidad de los Andes and Sanofi CHC. 200+ allergists, 95+ digital badges, 8 LATAM countries — and the start of a relationship that has driven ~USD $550K in continuing-education revenue.",
      ogTitle: "Uniandes × Sanofi CHC: medical education in 8 weeks",
      ogDescription: "Two clinical tracks, 200+ allergists, 95+ digital badges, 8 LATAM countries, and a relationship that has driven ~USD $550K in continuing-education revenue.",
      ogImageAlt: "Uniandes × Sanofi CHC microbiota case study by Merahki",
    },
    es: {
      title: "Uniandes × Sanofi CHC: educación médica multinacional en 8 semanas | Case Study | Merahki",
      description: "Cómo merahki.ai orquestó dos programas certificados de educación médica continua en 8 semanas para la Universidad de los Andes y Sanofi CHC. +200 alergólogos, 95+ insignias digitales, 8 países de Latinoamérica — y el inicio de una relación que ha contribuido a ~USD $550K en facturación de educación continua.",
      ogTitle: "Uniandes × Sanofi CHC: educación médica en 8 semanas",
      ogDescription: "Dos tracks clínicos, +200 alergólogos, 95+ insignias digitales, 8 países de Latinoamérica y una relación que ha contribuido a ~USD $550K.",
      ogImageAlt: "Case study Uniandes × Sanofi CHC microbiota por Merahki",
    },
  },
};

export function getPath(slug: string, lang: Language) {
  if (slug === "") return lang === "en" ? "/" : "/es/";
  return lang === "en" ? `/${slug}` : `/es/${slug}`;
}

function getUrl(slug: string, lang: Language) {
  const path = getPath(slug, lang);
  return `${BASE_URL}${path === "/" ? "/" : path}`;
}

function getImage(slug: string, lang: Language) {
  const pageSlug = slug || "home";
  return `${BASE_URL}/og/${pageSlug}-${lang}.png`;
}

function getFallbackImage(lang: Language) {
  return `${BASE_URL}/og/og-default-${lang}.png`;
}

export function buildMetadata(key: keyof typeof seoEntries, lang: Language): Metadata {
  const entry = seoEntries[key];
  const content = entry[lang];
  const other = entry[lang === "en" ? "es" : "en"];

  if (!content) {
    throw new Error(`Missing SEO content for ${String(key)} in ${lang}`);
  }

  const canonical = getUrl(entry.slug, lang);
  const image =
    entry.slug === "case-studies/uniandes-sanofi-microbiota"
      ? getFallbackImage(lang)
      : entry.slug === ""
        ? getImage("", lang)
        : getFallbackImage(lang);

  const languages = other
    ? {
        "es-CO": getUrl(entry.slug, "es"),
        "en-US": getUrl(entry.slug, "en"),
        "x-default": getUrl(entry.slug, "en"),
      }
    : undefined;

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      title: content.ogTitle,
      description: content.ogDescription,
      url: canonical,
      siteName: "Merahki",
      locale: lang === "en" ? "en_US" : "es_CO",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: content.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.ogTitle,
      description: content.ogDescription,
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function buildServiceJsonLd(key: keyof typeof seoEntries, lang: Language) {
  const entry = seoEntries[key];
  const content = entry[lang];

  if (!content) {
    throw new Error(`Missing SEO content for ${String(key)} in ${lang}`);
  }

  return {
    "@context": "https://schema.org",
    "@type": entry.type === "feature" ? "SoftwareApplication" : "Service",
    "@id": `${getUrl(entry.slug, lang)}#service`,
    name: content.title.replace(" | Merahki", ""),
    description: content.description,
    url: getUrl(entry.slug, lang),
    provider: { "@id": "https://merahki.ai/#organization" },
    ...(entry.type === "feature" ? { applicationCategory: "EducationalApplication" } : {}),
    ...(entry.audience ? { audience: { "@type": "Audience", audienceType: entry.audience } } : {}),
  };
}

export function buildArticleJsonLd(
  key: keyof typeof seoEntries,
  lang: Language,
  datePublished: string,
) {
  const entry = seoEntries[key];
  const content = entry[lang];

  if (!content) {
    throw new Error(`Missing SEO content for ${String(key)} in ${lang}`);
  }

  const image = getFallbackImage(lang);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${getUrl(entry.slug, lang)}#article`,
    headline: content.ogTitle,
    description: content.description,
    author: { "@id": "https://merahki.ai/#organization" },
    publisher: { "@id": "https://merahki.ai/#organization" },
    datePublished,
    image,
    inLanguage: lang === "en" ? "en-US" : "es-CO",
    mainEntityOfPage: getUrl(entry.slug, lang),
  };
}

export function buildFaqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export const pairedSeoRoutes = Object.values(seoEntries).filter((entry) => entry.en && entry.es);
