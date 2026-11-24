/**
 * Catálogo de experiencias de aprendizaje de merahki.ai (24-nov-2026).
 * Reemplaza los 55 tipos de contenido. Diseño aprobado por David:
 * «🚀 merahki.ai/Sitio merahki.ai - Catálogo de experiencias de aprendizaje (diseño 2026-11-24).md».
 *
 * Criterio (ICAP, Chi y Wylie 2014): cada experiencia tiene un mecanismo con fuente primaria verificada
 * (DOI resuelto en Crossref el 24-nov), una demo que se puede tocar y un dato que deja para medir.
 * Si no hay fuente, `porQue` describe el uso sin afirmar un efecto.
 *
 * Ojo: tailwind.config.ts no escanea src/content, así que aquí NO van clases de Tailwind.
 * Programa de muestra de todas las demos: «Analítica de Datos para la Toma de Decisiones».
 */

export type Lang = "es" | "en";
export type Bi = { es: string; en: string };

export type FamiliaId = "conversar" | "construir" | "vivir" | "practicar";
export type DatoId = "clics" | "tiempo" | "respuestas" | "intentos" | "puntaje" | "ruta" | "progreso" | "texto" | "vistas";

export type DemoId =
  | "copiloto"
  | "escenario-ramificado"
  | "proyecto-sql"
  | "simulador-explorable"
  | "storytelling"
  | "recorrido-360"
  | "busqueda-tesoro-ra"
  | "video-presentador"
  | "practica"
  | "diagnostico";

/**
 * Ejemplo de referencia en el mercado: video oficial del fabricante o de la institución.
 * Ningún fabricante es aliado de merahki.ai. El texto público dice «Ejemplo de referencia en el mercado».
 * Investigación y verificación de cada video (oEmbed 200): ~/.claude/work/seo-merahki/referencias-video.json
 */
export type Referencia = {
  plataforma: string;
  /** Sitio oficial del fabricante o de la institución. */
  url: string;
  provider: "youtube" | "vimeo";
  videoId: string;
  /** Tamaño de miniatura de YouTube que existe para este video. */
  miniatura?: "maxresdefault" | "sddefault" | "hqdefault";
  /** Miniatura directa (Vimeo). */
  thumb?: string;
  tituloVideo: string;
  canal: string;
  duracion?: string;
  wow: Bi;
  merahki: Bi;
  modo: "desarrollar" | "integrar" | "licenciar";
};

export type Fuente = { cita: string; url: string };

export type Experiencia = {
  /** Slug estable: se usa en el enlace profundo #exp-<id>. */
  id: string;
  familia: FamiliaId;
  nombre: Bi;
  nuevo?: boolean;
  /** Qué hace el participante. */
  queHace: Bi;
  /** Por qué funciona, en una frase. Sin cifras sin fuente. */
  porQue: Bi;
  fuente?: Fuente;
  ejemplo: Bi;
  captura: DatoId[];
  demo: DemoId;
  /** La demo ocupa todo el ancho de la ficha y la información va debajo (demos con panel propio). */
  ancho?: boolean;
  variante?: string;
  referencias?: Referencia[];
};

export const PROGRAMA: Bi = {
  es: "Analítica de Datos para la Toma de Decisiones",
  en: "Data Analytics for Decision Making",
};

export const ICAP: Fuente = {
  cita: "Chi y Wylie (2014), Educational Psychologist",
  url: "https://doi.org/10.1080/00461520.2014.965823",
};

export const FAMILIAS: { id: FamiliaId; nombre: Bi; descripcion: Bi }[] = [
  {
    id: "conversar",
    nombre: { es: "Conversar con IA", en: "Talk with AI" },
    descripcion: {
      es: "El participante pregunta, responde y ensaya con una IA que conoce el curso y le da retroalimentación en cada turno.",
      en: "Learners ask, answer and rehearse with an AI that knows the course and gives feedback on every turn.",
    },
  },
  {
    id: "construir",
    nombre: { es: "Construir con retroalimentación", en: "Build with feedback" },
    descripcion: {
      es: "El participante produce algo, lo prueba y ve de inmediato qué funciona y qué no.",
      en: "Learners produce something, test it and see right away what works and what does not.",
    },
  },
  {
    id: "vivir",
    nombre: { es: "Vivir la situación", en: "Step into the situation" },
    descripcion: {
      es: "El participante entra al lugar o al momento donde va a usar lo que aprende.",
      en: "Learners step into the place or the moment where they will use what they learn.",
    },
  },
  {
    id: "practicar",
    nombre: { es: "Ver, practicar y medir", en: "Watch, practice and measure" },
    descripcion: {
      es: "Contenido que se detiene para preguntar, práctica con explicación al instante y una ruta que se ajusta a cada participante.",
      en: "Content that stops to ask, practice with instant explanations and a path that adapts to each learner.",
    },
  },
];

export const DATOS: Record<DatoId, Bi> = {
  clics: { es: "Clics", en: "Clicks" },
  tiempo: { es: "Tiempo en la actividad", en: "Time on task" },
  respuestas: { es: "Respuestas", en: "Answers" },
  intentos: { es: "Intentos", en: "Attempts" },
  puntaje: { es: "Puntaje", en: "Score" },
  ruta: { es: "Ruta y decisiones", en: "Path and choices" },
  progreso: { es: "Progreso y finalización", en: "Progress and completion" },
  texto: { es: "Texto escrito", en: "Written text" },
  vistas: { es: "Secciones vistas", en: "Sections viewed" },
};

export const EXPERIENCIAS: Experiencia[] = [
  {
    id: "copiloto-estudiantil",
    familia: "conversar",
    nuevo: true,
    nombre: { es: "Copiloto estudiantil", en: "Student copilot" },
    queHace: {
      es: "El estudiante le pregunta a un tutor de IA que conoce el curso. El copiloto no le da la respuesta: le devuelve la pregunta, le da pistas, le cita la lección y el minuto del video, y le avisa al docente cuando alguien se atasca.",
      en: "Learners ask an AI tutor that knows the course. The copilot does not hand over the answer. It asks back, gives hints, points to the lesson and the video minute, and alerts the teacher when someone gets stuck.",
    },
    porQue: {
      es: "En un ensayo aleatorizado en Harvard, estudiantes de física aprendieron más con un tutor de IA diseñado con principios pedagógicos que en una clase de aprendizaje activo.",
      en: "In a randomized trial at Harvard, physics students learned more with an AI tutor built on pedagogical principles than in an active-learning class.",
    },
    fuente: { cita: "Kestin et al. (2025), Scientific Reports", url: "https://doi.org/10.1038/s41598-025-97652-6" },
    ejemplo: {
      es: "En una universidad, el copiloto del curso de analítica atiende las dudas de 300 estudiantes a medianoche, y en la mañana el docente encuentra un tablero con las tres dudas que más se repitieron.",
      en: "At a university, the analytics course copilot handles questions from 300 students at midnight, and in the morning the teacher finds a dashboard with the three most repeated questions.",
    },
    captura: ["texto", "respuestas", "tiempo", "ruta"],
    demo: "copiloto",
    ancho: true,
  },
  {
    id: "simulador-conversaciones",
    familia: "conversar",
    nombre: { es: "Simulador de conversaciones con IA", en: "AI conversation simulator" },
    queHace: {
      es: "El participante conversa, por texto o en voz alta, con un cliente, un paciente o un colaborador simulado. Cada decisión cambia cómo sigue la conversación, y la IA califica sus respuestas con una rúbrica.",
      en: "Learners talk, in writing or out loud, with a simulated customer, patient or team member. Every choice changes where the conversation goes, and the AI scores their answers against a rubric.",
    },
    porQue: {
      es: "Un metaanálisis de cientos de estudios en educación en salud asocia el entrenamiento con simulación con mejoras grandes en conocimientos, habilidades y comportamientos frente a no entrenar.",
      en: "A meta-analysis of hundreds of studies in health professions education links simulation training to large gains in knowledge, skills and behaviors compared with no training.",
    },
    fuente: { cita: "Cook et al. (2011), JAMA", url: "https://doi.org/10.1001/jama.2011.1234" },
    ejemplo: {
      es: "En un banco, los asesores practican cómo explicarle a un cliente molesto por qué le negaron un crédito antes de atender su primera llamada real.",
      en: "At a bank, advisors practice explaining to an upset customer why a loan was declined before they take their first real call.",
    },
    captura: ["respuestas", "ruta", "puntaje", "intentos"],
    demo: "escenario-ramificado",
    referencias: [
    {
      plataforma: "Mursion",
      url: "https://www.mursion.com",
      provider: "youtube",
      videoId: "yRD4Hbn3EUM",
      miniatura: "maxresdefault",
      tituloVideo: "Mursion Experience Video October 2025",
      canal: "Mursion",
      duracion: "2:22",
      wow: { es: "Avatares que reaccionan en vivo a lo que dice el participante para ensayar conversaciones de liderazgo y servicio.", en: "Avatars that react live to what learners say, to rehearse leadership and service conversations." },
      merahki: { es: "Licenciar simulaciones como estas o desarrollar el escenario a la medida de tu caso.", en: "License simulations like these or build the scenario around your own case." },
      modo: "licenciar",
    },
    {
      plataforma: "Second Nature",
      url: "https://secondnature.ai",
      provider: "youtube",
      videoId: "Gt1t_smOwDs",
      miniatura: "maxresdefault",
      tituloVideo: "Bring Your Trainings to Life with Second Nature",
      canal: "Second Nature AI",
      duracion: "1:40",
      wow: { es: "Un cliente virtual con IA conversa con el participante, le pone objeciones y califica cada respuesta.", en: "An AI virtual customer talks with the learner, raises objections and scores every answer." },
      merahki: { es: "Integrar en tu programa juegos de rol con IA construidos con tus propios casos.", en: "Integrate AI role-plays built from your own cases into your program." },
      modo: "integrar",
    },
    {
      plataforma: "Yoodli",
      url: "https://yoodli.ai",
      provider: "youtube",
      videoId: "eiSNMVLJj28",
      miniatura: "maxresdefault",
      tituloVideo: "Bank Customer Service Training With AI Roleplays",
      canal: "Yoodli",
      duracion: "3:40",
      wow: { es: "El asesor de un banco le responde en voz alta a un cliente simulado y la IA le da retroalimentación al instante.", en: "A bank advisor answers a simulated customer out loud and the AI gives instant feedback." },
      merahki: { es: "Integrar en tu LMS juegos de rol por voz con IA para tus equipos de atención.", en: "Integrate AI voice role-plays into your LMS for your service teams." },
      modo: "integrar",
    },
    {
      plataforma: "Virti",
      url: "https://www.virti.com",
      provider: "youtube",
      videoId: "40bFDOXc2GI",
      miniatura: "sddefault",
      tituloVideo: "Virti - AI Roleplay and Interactive Video Overview",
      canal: "Virti",
      duracion: "1:15",
      wow: { es: "Video interactivo con ramificaciones y personajes de IA con los que el participante conversa.", en: "Branching interactive video with AI characters that learners talk to." },
      merahki: { es: "Integrar en tu LMS escenarios de video interactivo con conversación por IA.", en: "Integrate interactive video scenarios with AI conversation into your LMS." },
      modo: "integrar",
    },
    {
      plataforma: "Bodyswaps",
      url: "https://bodyswaps.co",
      provider: "youtube",
      videoId: "XtsHXFwbbCU",
      miniatura: "sddefault",
      tituloVideo: "VR & AI soft skills training for nurses with Bodyswaps",
      canal: "Bodyswaps",
      duracion: "1:22",
      wow: { es: "El participante ensaya conversaciones difíciles con personajes virtuales en VR y recibe retroalimentación de IA.", en: "Learners rehearse difficult conversations with virtual characters in VR and get AI feedback." },
      merahki: { es: "Licenciar e integrar en tu LMS simulaciones de habilidades blandas en VR.", en: "License VR soft skills simulations and integrate them into your LMS." },
      modo: "licenciar",
    },
  ],
  },
  {
    id: "proyectos-retroalimentacion",
    familia: "construir",
    nuevo: true,
    nombre: { es: "Proyectos con retroalimentación al instante", en: "Projects with instant feedback" },
    queHace: {
      es: "El participante escribe su solución, ya sea código, una fórmula o un informe, la ejecuta y recibe al instante pruebas automáticas y un comentario que le dice qué falla y por qué. Corrige y vuelve a intentar hasta que pasa.",
      en: "Learners write their solution, whether code, a formula or a report, run it and instantly get automated tests and a comment that tells them what fails and why. They fix it and try again until it passes.",
    },
    porQue: {
      es: "Un metaanálisis de 435 estudios encontró que la retroalimentación mejora el aprendizaje, y que su efecto depende de la información que le da al estudiante sobre su trabajo.",
      en: "A meta-analysis of 435 studies found that feedback improves learning, and that its effect depends on the information it gives learners about their work.",
    },
    fuente: { cita: "Wisniewski, Zierer y Hattie (2020), Frontiers in Psychology", url: "https://doi.org/10.3389/fpsyg.2019.03087" },
    ejemplo: {
      es: "En una universidad, los estudiantes del curso de analítica resuelven tres retos de SQL sobre la base de ventas de una empresa, y el docente ve qué conceptos fallan más en la cohorte.",
      en: "At a university, analytics students solve three SQL challenges on a company's sales database, and the teacher sees which concepts the cohort misses most.",
    },
    captura: ["texto", "intentos", "respuestas", "tiempo"],
    demo: "proyecto-sql",
    ancho: true,
  },
  {
    id: "simuladores-explorables",
    familia: "construir",
    nuevo: true,
    nombre: { es: "Simuladores explorables", en: "Explorable simulations" },
    queHace: {
      es: "El participante mueve una variable y ve el efecto en vivo. Así construye el modelo mental en vez de memorizar la regla. Sirve para tasas, dosis, precios o riesgo.",
      en: "Learners move a variable and watch the effect live, so they build the mental model instead of memorizing the rule. It works for rates, doses, prices or risk.",
    },
    porQue: {
      es: "Según el equipo de las simulaciones PhET de la Universidad de Colorado, en Science, las simulaciones en las que el estudiante manipula variables y ve el efecto mejoran el aprendizaje de conceptos.",
      en: "According to the University of Colorado PhET team, writing in Science, simulations where students manipulate variables and see the effect improve conceptual learning.",
    },
    fuente: { cita: "Wieman, Adams y Perkins (2008), Science", url: "https://doi.org/10.1126/science.1161948" },
    ejemplo: {
      es: "En un programa de finanzas para una cooperativa, el asesor mueve la tasa y el plazo de un crédito y ve cómo cambian la cuota y el total de intereses.",
      en: "In a finance program for a credit union, advisors move a loan's rate and term and see how the payment and total interest change.",
    },
    captura: ["clics", "tiempo", "respuestas"],
    demo: "simulador-explorable",
  },
  {
    id: "storytelling-aprendizaje",
    familia: "vivir",
    nuevo: true,
    nombre: { es: "Storytelling para el Aprendizaje", en: "Learning through storytelling" },
    queHace: {
      es: "El participante sigue a un personaje en una historia corta en video, hecha con IA en el contexto de su trabajo, y en el momento clave decide qué hace. Su decisión cambia el final y le muestra la consecuencia.",
      en: "Learners follow a character through a short AI-made video story set in their own work context, and at the key moment they decide what to do. Their choice changes the ending and shows them the consequence.",
    },
    porQue: {
      es: "Según los estudios de transporte narrativo, cuanto más se involucra una persona en una historia, más cambian sus creencias en la dirección que la historia propone.",
      en: "According to research on narrative transportation, the more people get absorbed in a story, the more their beliefs shift in the direction the story proposes.",
    },
    fuente: { cita: "Green y Brock (2000), Journal of Personality and Social Psychology", url: "https://doi.org/10.1037/0022-3514.79.5.701" },
    ejemplo: {
      es: "En un banco, los analistas de crédito viven la historia de Laura antes de presentar un informe a la junta y ven qué pasa cuando eligen la medida equivocada.",
      en: "At a bank, credit analysts live through Laura's story before presenting a report to the board and see what happens when they choose the wrong measure.",
    },
    captura: ["ruta", "respuestas", "tiempo", "vistas"],
    demo: "storytelling",
    ancho: true,
    referencias: [
      {
        plataforma: "Primordial Soup × Google DeepMind",
        url: "https://deepmind.google",
        provider: "youtube",
        videoId: "HEs9miwtwh4",
        miniatura: "maxresdefault",
        tituloVideo: "ANCESTRA by Eliza McNitt",
        canal: "Primordial Soup",
        duracion: "8:05",
        wow: { es: "Un cortometraje que combina actores reales con escenas generadas con IA para contar una historia íntima. Se estrenó en el Festival de Tribeca.", en: "A short film that blends live actors with AI-generated scenes to tell an intimate story. It premiered at the Tribeca Festival." },
        merahki: { es: "Producir con IA las escenas de las historias de tu curso, con tus casos y tus personajes.", en: "Produce the scenes of your course stories with AI, using your cases and your characters." },
        modo: "desarrollar",
      },
      {
        plataforma: "Google DeepMind",
        url: "https://deepmind.google",
        provider: "youtube",
        videoId: "WLDARkKs-T4",
        miniatura: "maxresdefault",
        tituloVideo: "The Making of ANCESTRA | Darren Aronofsky x Google DeepMind",
        canal: "Google",
        duracion: "8:33",
        wow: { es: "Cómo un equipo de cine combinó rodaje real y video generado con IA, paso a paso.", en: "How a film team combined live shooting and AI-generated video, step by step." },
        merahki: { es: "Aplicar el mismo flujo, con guion, imágenes de referencia y escenas generadas, a las historias de tu programa.", en: "Apply the same workflow, with script, reference images and generated scenes, to your program's stories." },
        modo: "desarrollar",
      },
      {
        plataforma: "Higgsfield",
        url: "https://higgsfield.ai",
        provider: "youtube",
        videoId: "ZncA70OAgPw",
        miniatura: "maxresdefault",
        tituloVideo: "Passport Rush | AI Animated Short Film | Higgsfield Originals(2026)",
        canal: "Higgsfield Animation",
        duracion: "4:35",
        wow: { es: "Un cortometraje animado hecho por completo con IA en Higgsfield, la herramienta con la que merahki.ai produce sus historias.", en: "An animated short made entirely with AI on Higgsfield, the tool merahki.ai uses to produce its stories." },
        merahki: { es: "Producir historias animadas con tus personajes y tu contexto, sin un estudio de animación.", en: "Produce animated stories with your characters and context, without an animation studio." },
        modo: "desarrollar",
      },
    ],
  },
  {
    id: "recorridos-360",
    familia: "vivir",
    nombre: { es: "Recorridos 360° y gemelos digitales", en: "360° tours and digital twins" },
    queHace: {
      es: "El participante recorre una planta, una sucursal o un quirófano reales, fotografiados o reconstruidos en 3D, y encuentra los puntos que va a ver en su trabajo antes del primer día.",
      en: "Learners walk through a real plant, branch or operating room, photographed or rebuilt in 3D, and find the spots they will see at work before day one.",
    },
    porQue: {
      es: "Sirve cuando el lugar es costoso, peligroso o difícil de visitar: cada participante lo recorre las veces que necesite, desde el celular o el computador.",
      en: "It fits places that are costly, dangerous or hard to visit: each learner can walk through them as many times as needed, from a phone or a computer.",
    },
    ejemplo: {
      es: "En una cadena de retail, los nuevos jefes de tienda recorren la sucursal modelo y marcan los cinco puntos donde más se pierde inventario.",
      en: "At a retail chain, new store managers walk through the model branch and mark the five spots where inventory is lost most often.",
    },
    captura: ["clics", "ruta", "tiempo", "vistas"],
    demo: "recorrido-360",
    referencias: [
    {
      plataforma: "3DVista",
      url: "https://www.3dvista.com",
      provider: "youtube",
      videoId: "DYv12nRw_hg",
      miniatura: "maxresdefault",
      tituloVideo: "3DVista Gaussian Splatting",
      canal: "3DVista",
      duracion: "2:55",
      wow: { es: "Espacios reales reconstruidos en 3D fotorrealista que se recorren con libertad, con puntos de interés y preguntas.", en: "Real spaces rebuilt in photorealistic 3D that learners explore freely, with points of interest and questions." },
      merahki: { es: "Desarrollar con esta herramienta el recorrido de tu planta, hospital o campus y publicarlo en tu LMS.", en: "Build a tour of your plant, hospital or campus with this tool and publish it in your LMS." },
      modo: "desarrollar",
    },
    {
      plataforma: "Matterport",
      url: "https://matterport.com",
      provider: "youtube",
      videoId: "-vFeJ8y7hro",
      miniatura: "maxresdefault",
      tituloVideo: "Retail VR Develops Immersive Brand and Shopping Experiences with Matterport Digital Twins",
      canal: "Matterport",
      duracion: "1:13",
      wow: { es: "Gemelos digitales de espacios reales que se recorren como si estuvieras ahí.", en: "Digital twins of real spaces that you walk through as if you were there." },
      merahki: { es: "Integrar el gemelo digital de tus instalaciones como escenario de práctica dentro del curso.", en: "Integrate a digital twin of your facilities as a practice setting inside the course." },
      modo: "integrar",
    },
  ],
  },
  {
    id: "realidad-aumentada",
    familia: "vivir",
    nombre: { es: "Realidad aumentada en el puesto de trabajo", en: "Augmented reality on the job" },
    queHace: {
      es: "El participante apunta el celular al equipo o al espacio real y ve encima las instrucciones, paso a paso, sin descargar ninguna app.",
      en: "Learners point their phone at the real equipment or space and see the instructions on top of it, step by step, with no app to download.",
    },
    porQue: {
      es: "La instrucción llega en el lugar y en el momento de la tarea, cuando el participante la necesita, en vez de quedarse en un manual.",
      en: "Instruction arrives at the place and moment of the task, when the learner needs it, instead of sitting in a manual.",
    },
    ejemplo: {
      es: "En una planta de manufactura, el operario nuevo escanea un código en la máquina y ve sobre ella los pasos del arranque seguro.",
      en: "At a manufacturing plant, a new operator scans a code on the machine and sees the safe start-up steps on top of it.",
    },
    captura: ["clics", "progreso", "tiempo"],
    demo: "busqueda-tesoro-ra",
    referencias: [
    {
      plataforma: "Scope AR (WorkLink)",
      url: "https://www.scopear.com/products/worklink/",
      provider: "youtube",
      videoId: "r9g2WCcnHnc",
      miniatura: "maxresdefault",
      tituloVideo: "Scope AR: Productivity Accelerated",
      canal: "Scope AR",
      duracion: "1:25",
      wow: { es: "Instrucciones en realidad aumentada sobre la máquina real, paso a paso, desde un celular o una tableta.", en: "Step-by-step augmented reality instructions over the real machine, from a phone or tablet." },
      merahki: { es: "Licenciar e integrar guías de trabajo en RA para la formación en planta.", en: "License and integrate AR work instructions for on-site training." },
      modo: "licenciar",
    },
    {
      plataforma: "ZapWorks (Zappar)",
      url: "https://zap.works",
      provider: "youtube",
      videoId: "b5z48zdZp9Y",
      miniatura: "maxresdefault",
      tituloVideo: "Zapworks | The all-in-one WebAR platform",
      canal: "Zappar",
      duracion: "1:23",
      wow: { es: "Realidad aumentada que se abre en el navegador del celular al escanear un código, sin descargar ninguna app.", en: "Augmented reality that opens in the phone browser by scanning a code, with no app to download." },
      merahki: { es: "Desarrollar a la medida búsquedas del tesoro en RA para tu campus, tu tienda o tu planta.", en: "Build custom AR scavenger hunts for your campus, store or plant." },
      modo: "desarrollar",
    },
  ],
  },
  {
    id: "video-presentador-ia",
    familia: "practicar",
    nuevo: true,
    nombre: { es: "Video con presentador de IA", en: "AI-presenter video" },
    queHace: {
      es: "El docente aparece como avatar de IA, con su cara y su voz, presenta cada lámina y el video se detiene para preguntar. Si el contenido cambia, se actualiza sin volver a grabar.",
      en: "The teacher appears as an AI avatar, with their own face and voice, presents each slide, and the video stops to ask questions. When the content changes, it is updated without filming again.",
    },
    porQue: {
      es: "En dos experimentos, intercalar preguntas en una clase en video redujo la divagación mental, aumentó la toma de notas y mejoró el aprendizaje.",
      en: "In two experiments, interpolating questions into a video lecture reduced mind wandering, increased note-taking and improved learning.",
    },
    fuente: { cita: "Szpunar, Khan y Schacter (2013), PNAS", url: "https://doi.org/10.1073/pnas.1221764110" },
    ejemplo: {
      es: "En una universidad, el video de 6 minutos sobre medidas de tendencia central se detiene en el minuto 4 y le pide al estudiante elegir entre la media y la mediana para un caso con un salario atípico.",
      en: "At a university, a 6-minute video on measures of central tendency stops at minute 4 and asks students to choose between the mean and the median for a case with an outlier salary.",
    },
    captura: ["respuestas", "tiempo", "intentos", "progreso"],
    demo: "video-presentador",
    ancho: true,
    referencias: [
    {
      plataforma: "HeyGen",
      url: "https://www.heygen.com",
      provider: "youtube",
      videoId: "8ZVeOsIFUPg",
      miniatura: "maxresdefault",
      tituloVideo: "HeyGen Avatar 6: Show Up as Your Best Self, Every Time",
      canal: "HeyGen",
      duracion: "1:10",
      wow: { es: "Un avatar de IA con la cara y la voz del docente presenta cada lámina del curso.", en: "An AI avatar with the instructor's face and voice presents every slide of the course." },
      merahki: { es: "Licenciar la herramienta para que el docente presente sus láminas con su avatar y en varios idiomas.", en: "License the tool so instructors present their slides with their own avatar and in several languages." },
      modo: "licenciar",
    },
    {
      plataforma: "Synthesia",
      url: "https://www.synthesia.io",
      provider: "youtube",
      videoId: "c0U0zENVVgs",
      miniatura: "maxresdefault",
      tituloVideo: "NEW: Create AI Avatars That Talk, Walk & Act!",
      canal: "Synthesia",
      duracion: "2:18",
      wow: { es: "Avatares de IA que hablan, caminan y gesticulan frente a cámara sin que nadie tenga que grabarse.", en: "AI avatars that talk, walk and gesture on camera without anyone having to be filmed." },
      merahki: { es: "Licenciar la herramienta y producir con ella los videos del curso, con las preguntas interactivas encima.", en: "License the tool and produce the course videos with it, with the interactive questions on top." },
      modo: "licenciar",
    },
  ],
  },
  {
    id: "practica-inmediata",
    familia: "practicar",
    nombre: { es: "Práctica con retroalimentación inmediata", en: "Practice with instant feedback" },
    queHace: {
      es: "El participante responde preguntas cortas, completa textos, ordena conceptos y repasa con tarjetas, y recibe la explicación en el momento en que responde.",
      en: "Learners answer short questions, fill in texts, sort concepts and review with flashcards, and get the explanation the moment they answer.",
    },
    porQue: {
      es: "Recuperar lo aprendido con preguntas de práctica lo fija mejor en la memoria a largo plazo que volver a estudiarlo.",
      en: "Retrieving what was learned through practice questions locks it into long-term memory better than studying it again.",
    },
    fuente: { cita: "Roediger y Karpicke (2006), Psychological Science", url: "https://doi.org/10.1111/j.1467-9280.2006.01693.x" },
    ejemplo: {
      es: "En una aseguradora, los asesores responden cinco preguntas al día sobre las coberturas nuevas y ven la explicación de cada error.",
      en: "At an insurance company, advisors answer five questions a day about the new coverages and see the explanation for each mistake.",
    },
    captura: ["respuestas", "puntaje", "intentos"],
    demo: "practica",
  },
  {
    id: "diagnostico-ruta",
    familia: "practicar",
    nuevo: true,
    nombre: { es: "Diagnóstico y ruta personalizada", en: "Diagnostic and personalized path" },
    queHace: {
      es: "Un diagnóstico de entrada ubica a cada participante y le arma la ruta: lo que ya domina se lo salta y empieza donde le hace falta.",
      en: "An entry diagnostic places each learner and builds their path: they skip what they already master and start where they need to.",
    },
    porQue: {
      es: "Lo que ayuda a un principiante puede estorbarle a quien ya sabe, un fenómeno conocido como efecto de inversión de la pericia. Por eso la instrucción se ajusta al nivel de cada persona.",
      en: "What helps a beginner can get in the way of someone who already knows, an effect known as expertise reversal. That is why instruction adapts to each person's level.",
    },
    fuente: { cita: "Kalyuga (2007), Educational Psychology Review", url: "https://doi.org/10.1007/s10648-007-9054-3" },
    ejemplo: {
      es: "En una empresa de energía, los analistas que ya manejan tablas dinámicas pasan directo al módulo de tableros y terminan el programa una semana antes.",
      en: "At an energy company, analysts who already handle pivot tables go straight to the dashboards module and finish the program a week early.",
    },
    captura: ["respuestas", "ruta", "progreso"],
    demo: "diagnostico",
  },
];

export const getExperiencia = (id: string) => EXPERIENCIAS.find((e) => e.id === id);
export const TOTAL_EXPERIENCIAS = EXPERIENCIAS.length;
