export type Locale = "en" | "es";

export type FaqItem = { question: string; answer: string };

/* FAQ (objeciones de junta) — copy validado, heredado de la home anterior */
const faqItemsByLocale: Record<Locale, FaqItem[]> = {
  en: [
    { question: "Does this compete with our faculty or replace them?", answer: "Neither. Your faculty are the protagonists: they bring the knowledge and academic voice. We design, produce, and measure. Content IP stays with your institution." },
    { question: "We already have Moodle, Canvas, or Blackboard. Why Merahki?", answer: "We work on top of the platform you have. We add what almost none of them carry: instructional design, AI-powered production, impact analytics, and verifiable credentials." },
    { question: "Can micro-credentials transfer toward academic credit?", answer: "Each one is mapped to the National Qualifications Framework (8 levels) so it stacks toward diplomas, specializations, and degrees. Formal equivalence is confirmed case by case; we deliver the mapping and the architecture." },
    { question: "How does this relate to our accreditation processes?", answer: "The analytics that accompany every micro-credential generate documentable evidence for high-quality accreditation: relevance, impact, and student mobility, all auditable by cohort." },
    { question: "How much does it cost and when does it pay off?", answer: "Programs start at $2,975 USD setup plus monthly operation. First cohorts begin generating revenue from week six." },
    { question: "Do we have to create content from scratch?", answer: "No. We leverage what you already have (syllabi, recordings, papers, presentations) and restructure it for micro-credentials with AI. What's missing, we produce." },
    { question: "Who owns the intellectual property?", answer: "You do. The brand, the content, and the data belong to your institution. Merahki is the team that puts them to work." },
    { question: "What makes a digital badge verifiable?", answer: "It validates a competency through assessment, not attendance. It's a blockchain record (Open Badge 3.0 + W3C Verifiable Credentials), impossible to forge, that the graduate shares on LinkedIn and any employer verifies in seconds." },
    { question: "Can you work with public universities?", answer: "Yes. We operate with public and private institutions across Colombia and LATAM, with Habeas Data compliance and negotiable data residency." },
    { question: "Data and security?", answer: "HTTPS enforced, GDPR-ready, compliant with Law 1581 (Habeas Data), SSO/SAML, and encrypted data handling." },
  ],
  es: [
    { question: "¿Esto compite con nuestros docentes o los reemplaza?", answer: "Ninguna de las dos. Tus docentes son los protagonistas: aportan el conocimiento y la voz académica. Nosotros diseñamos, producimos y medimos. La propiedad intelectual del contenido queda en tu institución." },
    { question: "Ya tenemos Moodle, Canvas o Blackboard. ¿Para qué Merahki?", answer: "Trabajamos sobre la plataforma que ya tienes. Sumamos las capas que casi ninguna trae: diseño instruccional, producción con IA, analítica de impacto y credenciales verificables." },
    { question: "¿Las microcredenciales se pueden homologar con créditos académicos?", answer: "Cada microcredencial se mapea al Marco Nacional de Cualificaciones (8 niveles) para que sea apilable hacia diplomados, especializaciones y títulos. La equivalencia formal se confirma caso a caso; nosotros entregamos el mapeo y la arquitectura." },
    { question: "¿Cómo se relaciona esto con nuestros procesos de acreditación?", answer: "La analítica que acompaña a cada microcredencial genera evidencia documentable para acreditación de alta calidad: pertinencia, impacto y movilidad estudiantil con datos auditables por cohorte." },
    { question: "¿Cuánto cuesta y cuándo se recupera la inversión?", answer: "Los programas arrancan desde $2.975 USD de setup más operación mensual. Las primeras cohortes empiezan a generar ingreso desde la semana 6." },
    { question: "¿Tenemos que crear el contenido desde cero?", answer: "No. Aprovechamos lo que ya tienes (syllabi, grabaciones, papers, presentaciones) y lo reestructuramos para microcredenciales con IA. Lo que falta lo producimos nosotros." },
    { question: "¿De quién es la propiedad intelectual?", answer: "Tuya. La marca, el contenido y los datos son de tu institución. Merahki es el equipo que los pone a funcionar." },
    { question: "¿Qué hace verificable a una insignia digital?", answer: "Valida una competencia mediante evaluación, no asistencia. Es un registro en blockchain (Open Badge 3.0 + W3C Verifiable Credentials), imposible de falsificar, que el egresado comparte en LinkedIn y cualquier empleador verifica en segundos." },
    { question: "¿Pueden trabajar con universidades públicas?", answer: "Sí. Operamos con instituciones públicas y privadas en Colombia y LATAM, con cumplimiento de Habeas Data y residencia de datos negociable." },
    { question: "¿Datos y seguridad?", answer: "HTTPS obligatorio, GDPR-ready, compatible con Ley 1581 (Habeas Data), SSO/SAML y datos encriptados." },
  ],
};

export function getHomeFaqItems(locale: Locale) {
  return faqItemsByLocale[locale];
}

/* Cursos virtualizados reales (fuente: "Cursos Virtualizados.xlsx", Drive) */
type CourseArea = "salud" | "gobierno" | "negocios" | "ia" | "sostenibilidad";

const AREA_LABEL: Record<Locale, Record<CourseArea, string>> = {
  es: { salud: "Salud", gobierno: "Gobierno", negocios: "Negocios", ia: "Inteligencia Artificial", sostenibilidad: "Sostenibilidad" },
  en: { salud: "Health", gobierno: "Government", negocios: "Business", ia: "Artificial Intelligence", sostenibilidad: "Sustainability" },
};

/* Casos con logo de cliente final real disponible en el repo. Clientes diversos;
   Universidad de los Andes una sola vez (su programa insignia de IA).
   Fuente: "Cursos Virtualizados.xlsx" (hoja SOAR). */
const COURSES: { title: string; client: string; year: string; area: CourseArea; logo?: string }[] = [
  { title: "Alergología para Médicos no Alergólogos", client: "Sanofi × Universidad de los Andes", year: "2023", area: "salud", logo: "/images/logos/sanofi.png" },
  { title: "Políticas Públicas para la Productividad y el Crecimiento", client: "BID × Universidad de los Andes", year: "2024", area: "gobierno", logo: "/images/logos/bid.png" },
  { title: "Actualización en Insuficiencia Cardíaca", client: "AstraZeneca × Universidad de los Andes", year: "2022", area: "salud", logo: "/images/logos/astrazeneca.png" },
  { title: "Dolor Lumbar y Espondiloartritis", client: "Novartis × Universidad de los Andes", year: "2022", area: "salud", logo: "/images/logos/novartis.png" },
  { title: "Emprendimiento y toma de decisiones", client: "Abbott × Innovandes", year: "2020", area: "negocios", logo: "/images/logos/abbott.png" },
  { title: "Ciclo de Gestión de Proyectos", client: "Fundación Aflora", year: "2023", area: "negocios", logo: "/images/logos/fundacion-aflora.png" },
  { title: "Academia de formación corporativa", client: "Parque Arauco", year: "2022", area: "negocios", logo: "/images/logos/parque-arauco.png" },
  { title: "Programa Virtual de Emprendimiento", client: "DRC", year: "2023", area: "negocios", logo: "/images/logos/drc.png" },
  { title: "Programa de Empleabilidad", client: "DRC", year: "2023", area: "gobierno", logo: "/images/logos/drc.png" },
  { title: "Certificación en Gestión de Proyectos", client: "PMI Colombia", year: "2024", area: "negocios", logo: "/images/logos/pmi.png" },
  { title: "Integración Ambiental, Social y de Gobernanza (ESG)", client: "UK PACT × Universidad de los Andes", year: "2024", area: "sostenibilidad", logo: "/images/logos/uk-pact.png" },
  { title: "Programa de formación ejecutiva", client: "Consultoría Vásquez Kennedy", year: "2024", area: "negocios", logo: "/images/logos/vasquez-kennedy.png" },
  { title: "Liderazgo por Bogotá", client: "Alcaldía Mayor de Bogotá", year: "2023", area: "gobierno", logo: "/images/logos/alcaldia-mayor-bogota.png" },
  { title: "Estrategias de Marketing para el Sector de las Artes", client: "Idartes · Secretaría de Cultura", year: "2024", area: "negocios", logo: "/images/logos/idartes.png" },
  { title: "Dirección de Proyectos", client: "PMI Colombia", year: "2025", area: "negocios", logo: "/images/logos/pmi.png" },
  { title: "Inteligencia Artificial para la Administración de Justicia", client: "Universidad de los Andes", year: "2024", area: "ia", logo: "/images/logos/universidad-de-los-andes.png" },
];

export function getCourses(locale: Locale) {
  return COURSES.map((c) => ({ ...c, areaLabel: AREA_LABEL[locale][c.area] }));
}

export const homeCopy = {
  es: {
    anchor: "agenda",
    hero: {
      h1a: "Co-diseñamos y virtualizamos",
      h1b: "tus cursos y microcredenciales.",
      h1c: "Del enrollment al reporte.",
      sub: "Diseño, producción, ejecución, analítica y credenciales verificables. Un solo equipo.",
      ctaPrimary: "Agenda 30 min",
      scrollHint: "Desliza para ver el trabajo",
      scrollHintShort: "Desliza",
      marquee: ["Co-diseño", "Virtualización", "Motion graphics", "Learning analytics", "Credenciales verificables", "Storytelling", "Assessments"],
    },
    logosHeading: "Equipos que ya miden el impacto con Merahki",
    reel: {
      title: "Diseñamos formación para el impacto. Compruébalo tú mismo.",
      videoTitle: "Reel de producción Merahki",
      caption: "Programa real: Microbiota, Prebióticos y Probióticos · Uniandes × Sanofi CHC.",
    },
    work: {
      eyebrow: "Casos",
      title: "Trabajo real, medido.",
      sub: "+20.000 horas de formación virtualizadas en 7 países de LATAM.",
      carouselPrev: "Curso anterior",
      carouselNext: "Curso siguiente",
      proofChips: [
        { label: "Caso Uniandes × Sanofi: 95+ insignias, 8 países, 8 semanas", href: "/es/case-studies/uniandes-sanofi-microbiota", linkLabel: "Ver el caso completo" },
        { label: "Ciberseguridad: −25% de incidentes a USD $50 por participante" },
      ],
      allLabel: "Ver todo el trabajo",
      allHref: "/es/case-studies",
    },
    useCases: {
      eyebrow: "Para cada institución",
      title: "Universidades, gobiernos y empresas confían en Merahki.",
      sub: "Merahki se adapta a instituciones de cualquier tamaño y sector: diseñamos, producimos, operamos y medimos tu formación de punta a punta, con un solo equipo.",
      cards: [
        { key: "uni", title: "Universidades y educación continua", desc: "Convierte tu educación continua en ingreso recurrente con microcredenciales apilables bajo tu sello.", tags: ["Educación continua", "Ingreso recurrente", "Acreditación", "Academias de marca propia"] },
        { key: "corp", title: "Empresas y universidades corporativas", desc: "Capacitación interna y customer education con ROI medible, del onboarding al NRR.", tags: ["Customer education", "Universidad corporativa", "ROI medible", "Adopción de producto"] },
        { key: "gov", title: "Gobiernos y multilaterales", desc: "Formación pública a escala con evidencia auditable: transparencia, políticas públicas y capacidad estatal.", tags: ["Escala nacional", "Evidencia auditable", "Políticas públicas", "BID · Escuela de Gobierno"] },
      ],
    },
    features: {
      eyebrow: "Capacidades",
      title: "Todo lo que necesitas para operar microcredenciales, en un solo equipo.",
      items: [
        { key: "id", title: "Diseño instruccional con frameworks", desc: "Gagné, Merrill y Action Mapping: rutas que la gente sí termina." },
        { key: "av", title: "Producción audiovisual y motion con IA", desc: "Video premium, animación y storytelling de clase." },
        { key: "adaptive", title: "Cursos adaptativos e interactivos", desc: "Video interactivo, actividades y assessments rigurosos." },
        { key: "academy", title: "Academias de marca propia", desc: "Tu academy, tu dominio, tu sello. Nosotros la operamos." },
        { key: "cohorts", title: "Operación de cohortes", desc: "Convocatoria, engagement, sesiones en vivo y soporte." },
        { key: "analytics", title: "Learning analytics con 95+ filtros", desc: "Entrenados vs. no entrenados, en los 4 niveles de Kirkpatrick." },
        { key: "credentials", title: "Credenciales verificables vía POK", desc: "Open Badge 3.0 + W3C VC en blockchain. Verificables por terceros." },
        { key: "lms", title: "Integración con tu LMS", desc: "Moodle, Canvas, Blackboard: trabajamos sobre lo que ya tienes." },
        { key: "reports", title: "Reportes para tu junta", desc: "Del enrollment al reporte, cohorte a cohorte." },
      ],
    },
    services: {
      eyebrow: "Servicios",
      title: "Cinco capas. Una sola entrega.",
      items: [
        { num: "001", title: "Diseño", desc: "Resultados de aprendizaje, indicadores y rúbricas con tus expertos." },
        { num: "002", title: "Producción e implementación", desc: "Video, motion y cursos adaptativos sobre tu LMS." },
        { num: "003", title: "Ejecución y comunicaciones", desc: "Operamos tus cohortes de punta a punta." },
        { num: "004", title: "Analítica", desc: "Entrenados vs. no entrenados, en el idioma de tu junta." },
        { num: "005", title: "Credenciales verificables", desc: "Emitidas vía POK. Cualquier tercero las verifica en segundos." },
      ],
    },
    orchestration: {
      eyebrow: "Cómo funciona",
      title: "Tus insumos entran. Sale una microcredencial.",
      sub: "Virtualizada, medible y verificable. Tú pones el conocimiento; nosotros el motor que lo convierte en producto.",
      inputsLabel: "Entra: lo que tú pones",
      inputsBadge: "Entra",
      inputs: [
        { num: "01", title: "Experto técnico", desc: "El experto de dominio de tu institución." },
        { num: "02", title: "Metodología institucional", desc: "Tus estándares y tu sello." },
        { num: "03", title: "Resultados de aprendizaje", desc: "Las competencias que esperas." },
      ],
      engineName: "Motor de virtualización",
      engineBadge: "Procesa",
      engineParts: ["Talento", "Sistemas", "Agentes"],
      outputsLabel: "Sale: lo que recibes",
      outputsBadge: "Sale",
      outputs: [
        { title: "Microcredencial virtualizada", desc: "Diseñada, producida y montada — lista para la cohorte." },
        { title: "Dashboard con learning analytics", desc: "Progreso, riesgo y brecha en vivo, no en un PDF." },
        { title: "Credenciales verificables", desc: "Blockchain y NFT, emitidas vía POK." },
        { title: "Agentes de soporte", desc: "Acompañan a la cohorte hasta la finalización." },
      ],
      layerLabel: "Capa de orquestación",
      layerItems: ["LMS", "CRM", "Automatizaciones"],
      closer: "merahki orquesta, POK emite.",
      closerSub: "Dos marcas, una sola entrega.",
    },
    personalization: {
      eyebrow: "Personalización por IA",
      title: "Virtualizas una vez. La IA rearma rutas infinitas.",
      sub: "Cada ficha lleva metadata profunda. El motor lee los contenidos que ya produjiste y arma rutas nuevas para cada perfil, sin que vuelvas a pagar producción.",
      coursesLabel: "Cursos ya virtualizados",
      courses: [
        { name: "Curso 1", chips: ["A", "B", "C", "D"] },
        { name: "Curso 2", chips: ["E", "F", "G", "H"] },
        { name: "Curso 3", chips: ["I", "J", "K", "L"] },
      ],
      engineLabel: "Motor IA",
      engineDesc: "Lee la metadata de cada ficha y arma la ruta exacta para este perfil.",
      engineReading: "Leyendo el perfil de",
      criteria: ["Rol objetivo", "Industria", "Empresa destino", "Interés"],
      profilesLabel: "1 · Elige un perfil",
      profilesHint: "Cambia de persona y mira cómo cambia la ruta",
      routeLabel: "2 · La ruta que arma la IA",
      routeFor: "Ruta para",
      catalogLabel: "3 · Las mismas 12 fichas, ya producidas",
      stepsWord: "pasos",
      profiles: [
        {
          name: "Valentina",
          role: "Analista de datos",
          sector: "Salud",
          traits: ["Rol: Analista de datos", "Industria: Salud", "Interés: Datos clínicos"],
          route: ["B", "F", "K", "C"],
        },
        {
          name: "Andrés",
          role: "Product manager",
          sector: "Fintech",
          traits: ["Rol: Product manager", "Industria: Fintech", "Interés: Producto digital"],
          route: ["A", "I", "G"],
        },
        {
          name: "María José",
          role: "Consultora",
          sector: "Gobierno",
          traits: ["Rol: Consultora", "Industria: Gobierno", "Interés: Política pública"],
          route: ["E", "J", "D", "H"],
        },
      ],
      resultValue: "3 rutas nuevas",
      resultLabel: "armadas con 12 fichas de 3 cursos ya virtualizados, sin re-pagar producción.",
    },
    manifesto: {
      lines: [
        "La formación que no se mide, se recorta.",
        "La nuestra se mide del enrollment al reporte.",
        "Y cierra con una credencial que cualquiera puede verificar.",
      ],
      stats: [
        { value: "372%", label: "ROI a 3 años · Forrester TEI" },
        { value: "6–8 sem", label: "al primer reporte de impacto" },
        { value: "60–80%", label: "de finalización · tier Professional" },
        { value: "+1.100", label: "instituciones verifican vía POK" },
      ],
    },
    faqTitle: "Lo que tu junta va a preguntar.",
    closing: {
      h2: "Diseñemos tu primera microcredencial.",
      subtitle: "Agenda una sesión de co-diseño de 30 minutos. Llegamos con las preguntas; tú sales con el blueprint de tu programa, el mercado al que le vende y el ROI estimado por cohorte.",
      bullets: [
        { lead: "Co-diseño en vivo, no presentación de slides.", body: "Llegamos con preguntas sobre tu institución. Sales con un blueprint borrador." },
        { lead: "Hablas con quien diseña microcredenciales con Uniandes, Univalle y la Escuela Nacional del Deporte.", body: "No con un SDR." },
        { lead: "30 minutos exactos. Sin compromiso, sin contrato.", body: "Si no es para ti, lo dices y seguimos." },
      ],
    },
  },
  en: {
    anchor: "agenda",
    hero: {
      h1a: "We co-design and virtualize",
      h1b: "your courses and micro-credentials.",
      h1c: "From enrollment to report.",
      sub: "Design, production, delivery, analytics, and verifiable credentials. One team.",
      ctaPrimary: "Book 30 min",
      scrollHint: "Scroll to see the work",
      scrollHintShort: "Scroll",
      marquee: ["Co-design", "Virtualization", "Motion graphics", "Learning analytics", "Verifiable credentials", "Storytelling", "Assessments"],
    },
    logosHeading: "Teams already measuring impact with Merahki",
    reel: {
      title: "We design education for impact. See for yourself.",
      videoTitle: "Merahki production reel",
      caption: "Real program: Microbiota, Prebiotics & Probiotics · Uniandes × Sanofi CHC.",
    },
    work: {
      eyebrow: "Cases",
      title: "Real work, measured.",
      sub: "20,000+ hours of virtualized training across 7 LATAM countries.",
      carouselPrev: "Previous course",
      carouselNext: "Next course",
      proofChips: [
        { label: "Uniandes × Sanofi case: 95+ badges, 8 countries, 8 weeks", href: "/case-studies/uniandes-sanofi-microbiota", linkLabel: "See the full case" },
        { label: "Cybersecurity: −25% incidents at USD $50 per participant" },
      ],
      allLabel: "See all work",
      allHref: "/case-studies",
    },
    useCases: {
      eyebrow: "For every institution",
      title: "Universities, governments, and companies trust Merahki.",
      sub: "Merahki adapts to institutions of any size and sector: we design, produce, run, and measure your training end to end, with a single team.",
      cards: [
        { key: "uni", title: "Universities and continuing education", desc: "Turn continuing education into recurring revenue with stackable micro-credentials under your seal.", tags: ["Continuing education", "Recurring revenue", "Accreditation", "Branded academies"] },
        { key: "corp", title: "Companies and corporate universities", desc: "Internal training and customer education with measurable ROI, from onboarding to NRR.", tags: ["Customer education", "Corporate university", "Measurable ROI", "Product adoption"] },
        { key: "gov", title: "Governments and multilaterals", desc: "Public-sector education at scale with auditable evidence: transparency, public policy, and state capacity.", tags: ["National scale", "Auditable evidence", "Public policy", "IDB · School of Government"] },
      ],
    },
    features: {
      eyebrow: "Capabilities",
      title: "Everything you need to run micro-credentials, in one team.",
      items: [
        { key: "id", title: "Framework-based instructional design", desc: "Gagné, Merrill, and Action Mapping: paths people actually finish." },
        { key: "av", title: "AI-powered video and motion production", desc: "Premium video, animation, and classroom storytelling." },
        { key: "adaptive", title: "Adaptive, interactive courses", desc: "Interactive video, activities, and rigorous assessments." },
        { key: "academy", title: "Branded academies", desc: "Your academy, your domain, your seal. We run it." },
        { key: "cohorts", title: "Cohort operations", desc: "Enrollment campaigns, engagement, live sessions, and support." },
        { key: "analytics", title: "Learning analytics with 95+ filters", desc: "Trained vs. untrained, across Kirkpatrick's 4 levels." },
        { key: "credentials", title: "Verifiable credentials via POK", desc: "Open Badge 3.0 + W3C VC on blockchain. Third-party verifiable." },
        { key: "lms", title: "Integration with your LMS", desc: "Moodle, Canvas, Blackboard: we build on what you have." },
        { key: "reports", title: "Board-ready reports", desc: "From enrollment to report, cohort after cohort." },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "Five layers. One delivery.",
      items: [
        { num: "001", title: "Design", desc: "Learning outcomes, indicators, and rubrics with your experts." },
        { num: "002", title: "Production & implementation", desc: "Video, motion, and adaptive courses on your LMS." },
        { num: "003", title: "Delivery & communications", desc: "We run your cohorts end to end." },
        { num: "004", title: "Analytics", desc: "Trained vs. untrained, in the language your board speaks." },
        { num: "005", title: "Verifiable credentials", desc: "Issued via POK. Any third party verifies them in seconds." },
      ],
    },
    orchestration: {
      eyebrow: "How it works",
      title: "Your inputs go in. A micro-credential comes out.",
      sub: "Virtualized, measurable, and verifiable. You bring the knowledge; we bring the engine that turns it into a product.",
      inputsLabel: "In: what you bring",
      inputsBadge: "In",
      inputs: [
        { num: "01", title: "Subject-matter expert", desc: "Your institution's domain expert." },
        { num: "02", title: "Institutional methodology", desc: "Your standards and your seal." },
        { num: "03", title: "Learning outcomes", desc: "The competencies you expect." },
      ],
      engineName: "Virtualization engine",
      engineBadge: "Processes",
      engineParts: ["Talent", "Systems", "Agents"],
      outputsLabel: "Out: what you get",
      outputsBadge: "Out",
      outputs: [
        { title: "Virtualized micro-credential", desc: "Designed, produced, and deployed — ready for the cohort." },
        { title: "Learning analytics dashboard", desc: "Progress, risk, and gaps live, not in a PDF." },
        { title: "Verifiable credentials", desc: "Blockchain and NFT, issued via POK." },
        { title: "Support agents", desc: "They walk the cohort through to completion." },
      ],
      layerLabel: "Orchestration layer",
      layerItems: ["LMS", "CRM", "Automations"],
      closer: "merahki orchestrates, POK issues.",
      closerSub: "Two brands, one delivery.",
    },
    personalization: {
      eyebrow: "AI personalization",
      title: "Virtualize once. AI rebuilds infinite paths.",
      sub: "Every module carries deep metadata. The engine reads the content you already produced and assembles new paths for each profile, without you paying for production again.",
      coursesLabel: "Courses already virtualized",
      courses: [
        { name: "Course 1", chips: ["A", "B", "C", "D"] },
        { name: "Course 2", chips: ["E", "F", "G", "H"] },
        { name: "Course 3", chips: ["I", "J", "K", "L"] },
      ],
      engineLabel: "AI engine",
      engineDesc: "Reads each module's metadata and assembles the exact path for this profile.",
      engineReading: "Reading the profile of",
      criteria: ["Target role", "Industry", "Destination company", "Interest"],
      profilesLabel: "1 · Pick a profile",
      profilesHint: "Switch person and watch the path change",
      routeLabel: "2 · The path the AI assembles",
      routeFor: "Path for",
      catalogLabel: "3 · The same 12 modules, already produced",
      stepsWord: "steps",
      profiles: [
        {
          name: "Valentina",
          role: "Data analyst",
          sector: "Healthcare",
          traits: ["Role: Data analyst", "Industry: Healthcare", "Interest: Clinical data"],
          route: ["B", "F", "K", "C"],
        },
        {
          name: "Andrés",
          role: "Product manager",
          sector: "Fintech",
          traits: ["Role: Product manager", "Industry: Fintech", "Interest: Digital product"],
          route: ["A", "I", "G"],
        },
        {
          name: "María José",
          role: "Consultant",
          sector: "Government",
          traits: ["Role: Consultant", "Industry: Government", "Interest: Public policy"],
          route: ["E", "J", "D", "H"],
        },
      ],
      resultValue: "3 new paths",
      resultLabel: "assembled from 12 modules across 3 already-virtualized courses, with no repeat production cost.",
    },
    manifesto: {
      lines: [
        "Education that isn't measured gets cut.",
        "Ours is measured from enrollment to report.",
        "And it closes with a credential anyone can verify.",
      ],
      stats: [
        { value: "372%", label: "3-year ROI · Forrester TEI" },
        { value: "6–8 wks", label: "to the first impact report" },
        { value: "60–80%", label: "completion · Professional tier" },
        { value: "1,100+", label: "institutions verify via POK" },
      ],
    },
    faqTitle: "What your board will ask.",
    closing: {
      h2: "Let's design your first micro-credential.",
      subtitle: "Book a 30-minute co-design session. We bring the questions; you leave with your program's blueprint, the market it sells to, and the estimated ROI per cohort.",
      bullets: [
        { lead: "Live co-design, not a slide deck.", body: "We come with questions about your institution. You leave with a draft blueprint." },
        { lead: "You talk to the person who designs micro-credentials with Uniandes, Universidad del Valle, and Escuela Nacional del Deporte.", body: "Not an SDR." },
        { lead: "30 minutes flat. No commitment, no contract.", body: "If it's not for you, you say so and we move on." },
      ],
    },
  },
} as const;
