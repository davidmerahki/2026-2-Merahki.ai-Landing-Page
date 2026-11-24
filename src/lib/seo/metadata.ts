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
      title: "Micro-credentials and online course development | merahki.ai",
      description: "merahki.ai designs micro-credentials by competencies, builds online courses with AI, runs your LMS and issues verifiable credentials with POK.",
      ogTitle: "Micro-credentials and online course development",
      ogDescription: "merahki.ai designs micro-credentials by competencies, builds online courses with AI, runs your LMS and issues verifiable credentials with POK.",
      ogImageAlt: "merahki.ai — Training programs for universities and companies",
    },
    es: {
      title: "Microcredenciales y virtualización de cursos | merahki.ai",
      description: "merahki.ai diseña microcredenciales por competencias, virtualiza cursos con IA, opera tu LMS y emite credenciales verificables con POK.",
      ogTitle: "Microcredenciales y virtualización de cursos",
      ogDescription: "merahki.ai diseña microcredenciales por competencias, virtualiza cursos con IA, opera tu LMS y emite credenciales verificables con POK.",
      ogImageAlt: "merahki.ai — Soluciones de formación para universidades",
    },
  },
  "flexible-courses": {
    slug: "flexible-courses",
    type: "feature",
    en: {
      title: "Adaptive courses with AI | merahki.ai",
      description: "Create personalized learning experiences that adapt to each learner's pace and style. AI-powered adaptive courses with a drag-and-drop builder.",
      ogTitle: "Adaptive courses that meet every learner where they are",
      ogDescription: "AI-powered adaptive learning with a drag-and-drop builder. Boost completion rates and measurable outcomes.",
      ogImageAlt: "merahki.ai — Flexible adaptive courses",
    },
    es: {
      title: "Cursos adaptativos con IA | merahki.ai",
      description: "Crea experiencias de aprendizaje que se adaptan al ritmo y estilo de cada estudiante. Cursos adaptativos con IA y editor drag-and-drop.",
      ogTitle: "Cursos adaptativos que se ajustan a cada estudiante",
      ogDescription: "Aprendizaje adaptativo con IA y editor drag-and-drop. Sube tus tasas de finalización y prueba resultados medibles.",
      ogImageAlt: "merahki.ai — Cursos flexibles y adaptativos",
    },
  },
  "mobile-app-builder": {
    slug: "mobile-app-builder",
    type: "feature",
    en: {
      title: "Branded mobile learning app | merahki.ai",
      description: "Launch your white-label learning app on iOS and Android in under a month, no code required. Offline access, push notifications, and in-app purchases included.",
      ogTitle: "Your branded learning app on iOS and Android — in under a month",
      ogDescription: "App users generate +311% more revenue. No code, fully white-label, published to both stores.",
      ogImageAlt: "merahki.ai — White-label mobile learning app",
    },
    es: {
      title: "App móvil de aprendizaje | merahki.ai",
      description: "Lanza tu app móvil de aprendizaje en iOS y Android con tu marca, sin código, en menos de un mes. Offline, push, biometría e in-app purchases incluidos.",
      ogTitle: "Tu app de aprendizaje con marca propia en iOS y Android",
      ogDescription: "Los usuarios de app generan +311% más revenue. Sin código, white-label, publicada en ambas tiendas.",
      ogImageAlt: "merahki.ai — App móvil de aprendizaje white-label",
    },
  },
  "analytics-reports": {
    slug: "analytics-reports",
    type: "feature",
    en: {
      title: "Learning analytics and reports | merahki.ai",
      description: "Measure the real impact of your education programs. Dashboards with 95+ filters, automated reports, and AI insights to defend your program with data.",
      ogTitle: "Stop reporting hours taught. Start reporting impact.",
      ogDescription: "Learning analytics with 95+ filters, automated reports, and conversational AI insights — all from one dashboard.",
      ogImageAlt: "merahki.ai — Learning analytics and reports",
    },
    es: {
      title: "Learning analytics y reportes | merahki.ai",
      description: "Mide el impacto real de tus programas de educación. Dashboards con 95+ filtros, reportes automáticos e insights con IA para defender tu programa con datos.",
      ogTitle: "Deja de reportar horas. Empieza a reportar impacto.",
      ogDescription: "Learning analytics con 95+ filtros, reportes automáticos e insights conversacionales con IA — todo en un dashboard.",
      ogImageAlt: "merahki.ai — Learning analytics y reportes",
    },
  },
  "website-builder": {
    slug: "website-builder",
    type: "feature",
    en: {
      title: "Academy websites that convert | merahki.ai",
      description: "Your branded academy website, no templates, built to convert visitors into students. 120+ academies delivered, +40% average registration rate.",
      ogTitle: "Academy websites built by education growth experts",
      ogDescription: "120+ academies delivered. 3× faster than in-house. +40% registration rates. Full IP transferred to you.",
      ogImageAlt: "merahki.ai — Conversion-first academy websites",
    },
    es: {
      title: "Sitios de academia que convierten | merahki.ai",
      description: "Tu academia con marca propia, sin templates, lista para convertir visitantes en estudiantes. +120 academias entregadas y +40% de tasa de registro.",
      ogTitle: "Sitios de academia construidos por expertos en crecimiento educativo",
      ogDescription: "+120 academias entregadas. 3× más rápido que in-house. +40% en tasa de registro. Propiedad intelectual transferida a ti.",
      ogImageAlt: "merahki.ai — Sitios de academia conversion-first",
    },
  },
  "interactive-video": {
    slug: "interactive-video",
    type: "feature",
    en: {
      title: "Interactive video for learning | merahki.ai",
      description: "Turn every video into a measurable learning experience. AI-powered subtitles, translations, quizzes, and pop-ups — no extra post-production hours.",
      ogTitle: "Every video becomes a learning experience",
      ogDescription: "AI-generated subtitles, quizzes, summaries, and pop-ups — all built in, all trackable, no extra tools.",
      ogImageAlt: "merahki.ai — Interactive video for learning",
    },
    es: {
      title: "Video interactivo para aprender | merahki.ai",
      description: "Convierte cada video en una experiencia de aprendizaje medible. Subtítulos, traducciones, quizzes y pop-ups con IA — sin horas extra de postproducción.",
      ogTitle: "Cada video se vuelve una experiencia de aprendizaje",
      ogDescription: "Subtítulos, quizzes, resúmenes y pop-ups con IA — integrados, medibles, sin herramientas adicionales.",
      ogImageAlt: "merahki.ai — Video interactivo para aprendizaje",
    },
  },
  "survey-builder": {
    slug: "survey-builder",
    type: "feature",
    en: {
      title: "Forms and surveys for academies | merahki.ai",
      description: "Capture leads, measure NPS, assess courses, and collect consents without leaving your academy. No-code AI-powered forms with 10+ question types.",
      ogTitle: "Capture leads, feedback, and insights — where learning happens",
      ogDescription: "No-code forms and surveys with AI-guided dialogue. 3× higher completion with conditional logic.",
      ogImageAlt: "merahki.ai — Forms and surveys for academies",
    },
    es: {
      title: "Encuestas para tu academia | merahki.ai",
      description: "Captura leads, mide NPS, evalúa cursos y recoge consentimientos sin salir de tu academia. Formularios sin código con IA y 10+ tipos de pregunta.",
      ogTitle: "Captura leads, feedback e insights donde sucede el aprendizaje",
      ogDescription: "Formularios y encuestas sin código con diálogo guiado por IA. 3× más tasa de completitud con lógica condicional.",
      ogImageAlt: "merahki.ai — Encuestas y formularios para academias",
    },
  },
  "ai-assistant": {
    slug: "ai-assistant",
    type: "feature",
    en: {
      title: "AI assistant for course creation | merahki.ai",
      description: "Generate course outlines, assessments, and insights in minutes. Your team brings the expertise, AI accelerates production 10×. Your content stays yours.",
      ogTitle: "Higher-quality learning experiences, built with AI",
      ogDescription: "Course Planner, Assessment Designer, and AI Insights — all in one platform. 10× faster content creation.",
      ogImageAlt: "merahki.ai — AI assistant for course creation",
    },
    es: {
      title: "Asistente de IA para cursos | merahki.ai",
      description: "Genera outlines, evaluaciones e insights en minutos. Tu equipo aporta la experiencia, la IA acelera la producción 10×. Tu contenido sigue siendo tuyo.",
      ogTitle: "Experiencias de aprendizaje de mayor calidad, con IA",
      ogDescription: "Course Planner, Assessment Designer y AI Insights — en una sola plataforma. Creación de contenido 10× más rápida.",
      ogImageAlt: "merahki.ai — Asistente de IA para crear cursos",
    },
  },
  "live-sessions": {
    slug: "live-sessions",
    type: "feature",
    en: {
      title: "Virtual classroom and live sessions | merahki.ai",
      description: "Connect your learners with instructors and peers in live sessions. Native integration with Zoom, Webex, Microsoft Teams, Google Meet, and Calendly.",
      ogTitle: "Break the isolation of self-paced learning",
      ogDescription: "Live sessions, 1:1 coaching, breakout rooms, polls, and attendance tracking — all inside your academy. +34% feature adoption.",
      ogImageAlt: "merahki.ai — Virtual classroom and live sessions",
    },
    es: {
      title: "Aula virtual y sesiones en vivo | merahki.ai",
      description: "Conecta a tus estudiantes con instructores y pares en sesiones en vivo. Integración nativa con Zoom, Webex, Microsoft Teams, Google Meet y Calendly.",
      ogTitle: "Rompe el aislamiento del aprendizaje autodirigido",
      ogDescription: "Sesiones en vivo, coaching 1:1, breakout rooms, polls y attendance tracking — dentro de tu academia. +34% en adopción.",
      ogImageAlt: "merahki.ai — Aula virtual y sesiones en vivo",
    },
  },
  integrations: {
    slug: "integrations",
    type: "feature",
    en: {
      title: "Integrations with your stack | merahki.ai",
      description: "Connect merahki.ai to 50+ native tools — payments, CRM, video, and marketing — or build custom workflows with API and webhooks. Zapier and Make included.",
      ogTitle: "Connect everything you already use",
      ogDescription: "50+ native integrations: Stripe, HubSpot, Zoom, Mailchimp, Shopify, and more. Plus full API and webhooks for enterprise workflows.",
      ogImageAlt: "merahki.ai — Integrations hub",
    },
    es: {
      title: "Integraciones con tu stack | merahki.ai",
      description: "Conecta merahki.ai con +50 herramientas nativas — pagos, CRM, video y marketing — o construye workflows custom con API y webhooks. Zapier y Make incluidos.",
      ogTitle: "Conecta todo lo que ya usas",
      ogDescription: "+50 integraciones nativas: Stripe, HubSpot, Zoom, Mailchimp, Shopify y más. API completa y webhooks para workflows enterprise.",
      ogImageAlt: "merahki.ai — Hub de integraciones",
    },
  },
  certification: {
    slug: "certification",
    type: "feature",
    en: {
      title: "Certification programs with verifiable credentials | merahki.ai",
      description: "Competency-based certification: assessment, levels and Open Badges 3.0 credentials issued with POK that any employer can verify.",
      ogTitle: "Certification programs with verifiable credentials",
      ogDescription: "Competency-based certification: assessment, levels and Open Badges 3.0 credentials issued with POK that any employer can verify.",
      ogImageAlt: "merahki.ai — Certification programs with verifiable badges",
    },
    es: {
      title: "Certificación con credenciales verificables | merahki.ai",
      description: "Certificación por competencias: evaluación, niveles e insignias Open Badges 3.0 emitidas con POK, verificables por cualquier empleador.",
      ogTitle: "Certificación con credenciales verificables",
      ogDescription: "Certificación por competencias: evaluación, niveles e insignias Open Badges 3.0 emitidas con POK, verificables por cualquier empleador.",
      ogImageAlt: "merahki.ai — Programas de certificación con insignias verificables",
    },
  },
  "customer-education": {
    slug: "customer-education",
    type: "solution",
    audience: "Customer Education and SaaS leaders",
    en: {
      title: "Customer education programs and academies | merahki.ai",
      description: "Customer academies, onboarding and certifications designed by competencies, with adoption, support ticket and renewal indicators.",
      ogTitle: "Customer education programs and academies",
      ogDescription: "Customer academies, onboarding and certifications designed by competencies, with adoption, support ticket and renewal indicators.",
      ogImageAlt: "merahki.ai — Customer Education for SaaS",
    },
    es: {
      title: "Customer education y formación de clientes | merahki.ai",
      description: "Academias de clientes, onboarding y certificaciones diseñadas por competencias, con indicadores de adopción, tickets y renovación.",
      ogTitle: "Customer education y formación de clientes",
      ogDescription: "Academias de clientes, onboarding y certificaciones diseñadas por competencias, con indicadores de adopción, tickets y renovación.",
      ogImageAlt: "merahki.ai — Customer Education para SaaS",
    },
  },
  "partner-academies": {
    slug: "partner-academies",
    type: "solution",
    audience: "Partner Education and channel leaders",
    en: {
      title: "Partner enablement academies | merahki.ai",
      description: "Partner academies that train and certify distributors and channels by partner tier, connected to your CRM and channel sales indicators.",
      ogTitle: "Partner enablement academies",
      ogDescription: "Partner academies that train and certify distributors and channels by partner tier, connected to your CRM and channel sales indicators.",
      ogImageAlt: "merahki.ai — Partner Academies and channel certification",
    },
    es: {
      title: "Academia de partners y formación de canales | merahki.ai",
      description: "Academias que forman y certifican a distribuidores y canales por nivel de socio, conectadas al CRM y a los indicadores de venta del canal.",
      ogTitle: "Academia de partners y formación de canales",
      ogDescription: "Academias que forman y certifican a distribuidores y canales por nivel de socio, conectadas al CRM y a los indicadores de venta del canal.",
      ogImageAlt: "merahki.ai — Partner Academies y certificación de canales",
    },
  },
  "product-adoption": {
    slug: "product-adoption",
    type: "solution",
    audience: "Product, growth, and customer success leaders",
    en: {
      title: "Product adoption through education | merahki.ai",
      description: "Increase feature adoption and shorten time-to-value with measurable product education. +38% average adoption lift in structured programs.",
      ogTitle: "+38% feature adoption lift — measured, not estimated",
      ogDescription: "Product education tied to in-app adoption, NRR, and ticket deflection. From onboarding to power user, in weeks.",
      ogImageAlt: "merahki.ai — Product adoption through education",
    },
    es: {
      title: "Adopción de producto con educación | merahki.ai",
      description: "Aumenta la adopción de funcionalidades y reduce el time-to-value con educación de producto medible. +38% de adopción promedio en programas estructurados.",
      ogTitle: "+38% de adopción de features — medido, no estimado",
      ogDescription: "Educación de producto atada a adopción in-app, NRR y ticket deflection. De onboarding a power user, en semanas.",
      ogImageAlt: "merahki.ai — Adopción de producto a través de educación",
    },
  },
  "training-certification": {
    slug: "training-certification",
    type: "solution",
    audience: "L&D and certification leaders",
    en: {
      title: "Corporate training and certification programs | merahki.ai",
      description: "Custom online courses, role-based learning paths, assessments and verifiable credentials for corporate training and corporate universities.",
      ogTitle: "Corporate training and certification programs",
      ogDescription: "Custom online courses, role-based learning paths, assessments and verifiable credentials for corporate training and corporate universities.",
      ogImageAlt: "merahki.ai — Training and certification programs",
    },
    es: {
      title: "Capacitación y certificación para empresas | merahki.ai",
      description: "Cursos virtuales a la medida, rutas por rol, evaluaciones y credenciales verificables para capacitación y universidades corporativas.",
      ogTitle: "Capacitación y certificación para empresas",
      ogDescription: "Cursos virtuales a la medida, rutas por rol, evaluaciones y credenciales verificables para capacitación y universidades corporativas.",
      ogImageAlt: "merahki.ai — Programas de training y certificación",
    },
  },
  "lifelong-learning": {
    slug: "lifelong-learning",
    type: "solution",
    audience: "Continuing education and university leaders",
    en: {
      title: "Lifelong Learning: continuing education for universities | merahki.ai",
      description: "Lifelong Learning by merahki.ai designs, produces and runs continuing education programs and micro-credentials that universities sell to companies.",
      ogTitle: "Lifelong Learning: continuing education programs universities sell to companies",
      ogDescription: "Branded micro-credentials, learning analytics, and verifiable badges — designed to turn alumni into a recurring revenue stream.",
      ogImageAlt: "merahki.ai — Continuing education and micro-credentials",
    },
    es: {
      title: "Lifelong Learning: educación continua para universidades | merahki.ai",
      description: "Lifelong Learning de merahki.ai diseña, produce y opera los programas de educación continua y las microcredenciales que tu universidad vende a empresas.",
      ogTitle: "Lifelong Learning: los programas de educación continua que tu universidad vende a empresas",
      ogDescription: "Microcredenciales con marca propia, learning analytics e insignias verificables — diseñadas para convertir egresados en ingreso recurrente.",
      ogImageAlt: "merahki.ai — Educación continua y microcredenciales",
    },
  },
  "growth-for-universities": {
    slug: "growth-for-universities",
    type: "solution",
    audience: "University rectors and continuing education leaders",
    en: {
      title: "Micro-credentials for universities | merahki.ai",
      description: "Branded micro-credentials for universities: stackable learning paths, verifiable credentials issued with POK and enrollment indicators.",
      ogTitle: "Micro-credentials for universities",
      ogDescription: "Branded micro-credentials for universities: stackable learning paths, verifiable credentials issued with POK and enrollment indicators.",
      ogImageAlt: "merahki.ai — Growth and revenue for universities",
    },
    es: {
      title: "Microcredenciales para universidades | merahki.ai",
      description: "Microcredenciales con la marca de tu universidad: rutas apilables alineadas al MNC, credenciales verificables con POK e indicadores de matrícula.",
      ogTitle: "Microcredenciales para universidades",
      ogDescription: "Microcredenciales con la marca de tu universidad: rutas apilables alineadas al MNC, credenciales verificables con POK e indicadores de matrícula.",
      ogImageAlt: "merahki.ai — Crecimiento e ingresos para universidades",
    },
  },
  "medical-education": {
    slug: "medical-education",
    type: "solution",
    audience: "Healthcare and life sciences education leaders",
    en: {
      title: "Continuing medical education online | merahki.ai",
      description: "Online CME for medical schools, societies and pharma: clinical cases, competency assessment, traceability and verifiable credentials.",
      ogTitle: "Continuing medical education online",
      ogDescription: "Online CME for medical schools, societies and pharma: clinical cases, competency assessment, traceability and verifiable credentials.",
      ogImageAlt: "merahki.ai — Medical and healthcare education",
    },
    es: {
      title: "Educación médica continua virtual | merahki.ai",
      description: "Educación médica continua virtual para facultades, sociedades científicas y farmacéuticas: casos clínicos, evaluación y trazabilidad.",
      ogTitle: "Educación médica continua virtual",
      ogDescription: "Educación médica continua virtual para facultades, sociedades científicas y farmacéuticas: casos clínicos, evaluación y trazabilidad.",
      ogImageAlt: "merahki.ai — Educación médica y healthcare",
    },
  },
  "education-led-growth": {
    slug: "education-led-growth",
    type: "solution",
    audience: "Growth, education, and revenue leaders",
    en: {
      title: "Education-Led Growth strategy | merahki.ai",
      description: "Education as the measurable engine for revenue, retention, and adoption. Frameworks, cases, and data to turn your academy into your #1 growth channel.",
      ogTitle: "Education-Led Growth: the strategy turning academies into growth engines",
      ogDescription: "Frameworks, case studies, and 2026 data on how leading SaaS and education companies are using education as their #1 growth channel.",
      ogImageAlt: "merahki.ai — Education-Led Growth",
    },
  },
  methodology: {
    slug: "methodology",
    type: "solution",
    audience: "Education program leaders",
    en: {
      title: "Competency-based instructional design method | merahki.ai",
      description: "Competency-based design aligned with qualification frameworks, AI-native course production, LMS operation and Kirkpatrick measurement.",
      ogTitle: "Competency-based instructional design method",
      ogDescription: "Competency-based design aligned with qualification frameworks, AI-native course production, LMS operation and Kirkpatrick measurement.",
      ogImageAlt: "merahki.ai — Methodology: five layers, one delivery",
    },
    es: {
      title: "Diseño instruccional por competencias: metodología | merahki.ai",
      description: "Diseño por competencias alineado al MNC y la CUOC, producción con IA, operación en el LMS y medición con el modelo Kirkpatrick.",
      ogTitle: "Diseño instruccional por competencias: metodología",
      ogDescription: "Diseño por competencias alineado al MNC y la CUOC, producción con IA, operación en el LMS y medición con el modelo Kirkpatrick.",
      ogImageAlt: "merahki.ai — Metodología: cinco capas, una entrega",
    },
  },
  blog: {
    slug: "blog",
    type: "resource",
    en: {
      title: "Blog on micro-credentials and instructional design | merahki.ai",
      description: "Guides on micro-credentials, competency-based design, course development, verifiable credentials, the Kirkpatrick model and customer education.",
      ogTitle: "Blog on micro-credentials and instructional design",
      ogDescription: "Guides on micro-credentials, competency-based design, course development, verifiable credentials, the Kirkpatrick model and customer education.",
      ogImageAlt: "merahki.ai — Insights and articles",
    },
    es: {
      title: "Blog sobre microcredenciales y diseño instruccional | merahki.ai",
      description: "Guías sobre microcredenciales, diseño por competencias, MNC, CUOC, virtualización de cursos, credenciales verificables y customer education.",
      ogTitle: "Blog sobre microcredenciales y diseño instruccional",
      ogDescription: "Guías sobre microcredenciales, diseño por competencias, MNC, CUOC, virtualización de cursos, credenciales verificables y customer education.",
      ogImageAlt: "merahki.ai — Insights y artículos",
    },
  },
  reports: {
    slug: "reports",
    type: "resource",
    en: {
      title: "Strategy reports for education growth | merahki.ai",
      description: "Research and strategic reports on micro-credentials, continuing education, learning analytics, and Education-Led Growth.",
      ogTitle: "Strategy reports for education-led growth",
      ogDescription: "Research and strategic reports on micro-credentials, continuing education, learning analytics, and Education-Led Growth.",
      ogImageAlt: "merahki.ai — Strategy reports",
    },
    es: {
      title: "Reportes sobre crecimiento educativo | merahki.ai",
      description: "Investigación y reportes estratégicos sobre microcredenciales, educación continua, learning analytics y Education-Led Growth.",
      ogTitle: "Reportes estratégicos sobre crecimiento educativo",
      ogDescription: "Investigación y reportes estratégicos sobre microcredenciales, educación continua, learning analytics y Education-Led Growth.",
      ogImageAlt: "merahki.ai — Reportes estratégicos",
    },
  },
  "david-gonzalez": {
    slug: "david-gonzalez",
    type: "resource",
    audience: "Event organizers, press, partners, and anyone searching for David González",
    en: {
      title: "David González — Founder of merahki.ai & POK Country Manager Colombia",
      description:
        "David González is the founder of merahki.ai and Country Manager for Colombia at POK (Proof of Knowledge). Since 2018 he has produced 20,000+ hours of online learning for Novartis, AstraZeneca, Sanofi, the IDB, and Universidad de los Andes across 7 Latin American countries. Official bio and press photo.",
      ogTitle: "David González — micro-credentials and verifiable learning in Latin America",
      ogDescription:
        "Founder of merahki.ai and POK Country Manager for Colombia. 20,000+ hours of online learning produced since 2018. Official bio, speaking topics, and press photo.",
      ogImageAlt: "David González, founder of merahki.ai and POK Country Manager Colombia",
    },
    es: {
      title: "David González — Fundador de merahki.ai y Country Manager de POK Colombia",
      description:
        "David González es el fundador de merahki.ai y Country Manager para Colombia de POK (Proof of Knowledge). Desde 2018 ha producido más de 20.000 horas de formación en línea para Novartis, AstraZeneca, Sanofi, el BID y la Universidad de los Andes en 7 países de Latinoamérica. Bio oficial y foto de prensa.",
      ogTitle: "David González — microcredenciales y aprendizaje verificable en Latinoamérica",
      ogDescription:
        "Fundador de merahki.ai y Country Manager de POK para Colombia. Más de 20.000 horas de formación en línea producidas desde 2018. Bio oficial, temas de charla y foto de prensa.",
      ogImageAlt: "David González, fundador de merahki.ai y Country Manager de POK Colombia",
    },
  },
  "case-studies/uniandes-sanofi-microbiota": {
    slug: "case-studies/uniandes-sanofi-microbiota",
    type: "case-study",
    audience: "Medical education and university continuing education leaders",
    en: {
      title: "Uniandes × Sanofi CHC: Multinational Medical Education in 8 Weeks | Case Study | merahki.ai",
      description: "How merahki.ai orchestrated two certified medical education programs in 8 weeks for Universidad de los Andes and Sanofi CHC. 200+ allergists, 95+ digital badges, 8 LATAM countries — and the start of a relationship that has driven ~USD $550K in continuing-education revenue.",
      ogTitle: "Uniandes × Sanofi CHC: medical education in 8 weeks",
      ogDescription: "Two clinical tracks, 200+ allergists, 95+ digital badges, 8 LATAM countries, and a relationship that has driven ~USD $550K in continuing-education revenue.",
      ogImageAlt: "Uniandes × Sanofi CHC microbiota case study by merahki.ai",
    },
    es: {
      title: "Uniandes × Sanofi CHC: educación médica multinacional en 8 semanas | Case Study | merahki.ai",
      description: "Cómo merahki.ai orquestó dos programas certificados de educación médica continua en 8 semanas para la Universidad de los Andes y Sanofi CHC. +200 alergólogos, 95+ insignias digitales, 8 países de Latinoamérica — y el inicio de una relación que ha contribuido a ~USD $550K en facturación de educación continua.",
      ogTitle: "Uniandes × Sanofi CHC: educación médica en 8 semanas",
      ogDescription: "Dos tracks clínicos, +200 alergólogos, 95+ insignias digitales, 8 países de Latinoamérica y una relación que ha contribuido a ~USD $550K.",
      ogImageAlt: "Case study Uniandes × Sanofi CHC microbiota por merahki.ai",
    },
  },
};

export function getPath(slug: string, lang: Language) {
  if (slug === "") return lang === "en" ? "/" : "/es";  // sin barra final: /es/ redirige (308)
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
        es: getUrl(entry.slug, "es"),
        "en-US": getUrl(entry.slug, "en"),
        "x-default": getUrl(entry.slug, "en"),
      }
    : undefined;

  return {
    // Los títulos de seoEntries ya incluyen la marca; `absolute` evita que el template
    // "%s | merahki.ai" del layout raíz la duplique ("... | merahki.ai | merahki.ai").
    title: { absolute: content.title },
    description: content.description,
    alternates: {
      canonical,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      title: content.ogTitle,
      description: content.ogDescription,
      url: canonical,
      siteName: "merahki.ai",
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
    name: content.title.replace(" | merahki.ai", ""),
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
