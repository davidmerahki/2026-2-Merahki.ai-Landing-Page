/**
 * Catálogo de los 55 tipos de contenido interactivo que produce merahki.ai
 * (lámina 20 del showroom). Fuente de la lista: auditoria-home/v3/tipos-55.txt.
 *
 * Ojo: tailwind.config.ts no escanea src/content, así que aquí NO van clases de Tailwind.
 * Los íconos y colores viven en src/components/contenidos/ContentExplorer.tsx.
 *
 * Programa de muestra que recorre todos los ejemplos:
 * «Analítica de Datos para la Toma de Decisiones» / "Data Analytics for Decision Making".
 */

export type Lang = "es" | "en";
export type Bi = { es: string; en: string };

export type CategoriaId =
  | "video"
  | "inmersivas"
  | "juegos"
  | "evaluacion"
  | "texto"
  | "arrastrar"
  | "imagenes"
  | "voz"
  | "estudio"
  | "estructura";

export type ObjetivoId = "presentar" | "explorar" | "practicar" | "evaluar" | "repasar" | "reflexionar";
export type SectorId = "universidad" | "banca" | "salud" | "industria" | "retail" | "gobierno";
export type DatoId = "clics" | "tiempo" | "respuestas" | "intentos" | "puntaje" | "ruta" | "progreso" | "texto" | "vistas";
export type VerboXapi = "answered" | "interacted" | "completed" | "experienced" | "progressed";

export type DemoId =
  | "video-interactivo"
  | "linea-tiempo"
  | "recorrido-360"
  | "busqueda-tesoro-ra"
  | "escenario-ramificado"
  | "juego-memoria"
  | "cuestionario"
  | "test-personalidad"
  | "rellenar-espacios"
  | "marcar-palabras"
  | "arrastrar-soltar"
  | "arrastrar-palabras"
  | "ordenar-parrafos"
  | "hotspots-imagenes"
  | "yuxtaposicion-imagenes"
  | "flashcards"
  | "tarjetas-dialogo"
  | "acordeon";

export type TipoContenido = {
  id: string;
  categoria: CategoriaId;
  nombre: Bi;
  queEs: Bi;
  ejemplo: { sector: SectorId } & Bi;
  idealPara: ObjetivoId[];
  captura: DatoId[];
  verbo: VerboXapi;
  demo?: DemoId;
  /** Variante de la demo cuando varios tipos comparten componente (p. ej. el cuestionario). */
  variante?: string;
  /** Videos oficiales de plataformas del mercado que muestran este tipo en su versión más avanzada. */
  referencias?: Referencia[];
};

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

export const PROGRAMA: Bi = {
  es: "Analítica de Datos para la Toma de Decisiones",
  en: "Data Analytics for Decision Making",
};

export const CATEGORIAS: { id: CategoriaId; nombre: Bi; descripcion: Bi }[] = [
  {
    id: "video",
    nombre: { es: "Video y presentaciones", en: "Video and presentations" },
    descripcion: {
      es: "Formatos para presentar el contenido con preguntas y actividades dentro del mismo recorrido.",
      en: "Formats that present content with questions and activities built into the flow.",
    },
  },
  {
    id: "inmersivas",
    nombre: { es: "Experiencias inmersivas: 360°, VR y realidad aumentada", en: "Immersive experiences: 360°, VR and augmented reality" },
    descripcion: {
      es: "Espacios reales o simulados que el participante recorre para reconocer lo que verá en su trabajo.",
      en: "Real or simulated spaces that learners walk through to recognize what they will see at work.",
    },
  },
  {
    id: "juegos",
    nombre: { es: "Escenarios y juegos", en: "Scenarios and games" },
    descripcion: {
      es: "Casos con decisiones y juegos con reglas claras para practicar sin riesgo.",
      en: "Decision cases and games with clear rules for risk-free practice.",
    },
  },
  {
    id: "evaluacion",
    nombre: { es: "Preguntas y evaluación", en: "Questions and assessment" },
    descripcion: {
      es: "Preguntas con retroalimentación inmediata y puntaje, para practicar y para calificar.",
      en: "Questions with instant feedback and scoring, for practice and for grading.",
    },
  },
  {
    id: "texto",
    nombre: { es: "Texto y escritura", en: "Text and writing" },
    descripcion: {
      es: "Actividades para leer con atención, completar textos y escribir con estructura.",
      en: "Activities to read closely, complete texts and write with structure.",
    },
  },
  {
    id: "arrastrar",
    nombre: { es: "Arrastrar, ordenar y emparejar", en: "Drag, sort and match" },
    descripcion: {
      es: "Clasificar, ordenar y relacionar elementos con el mouse, el dedo o el teclado.",
      en: "Classify, order and connect items with a mouse, a finger or the keyboard.",
    },
  },
  {
    id: "imagenes",
    nombre: { es: "Imágenes y hotspots", en: "Images and hotspots" },
    descripcion: {
      es: "Imágenes con puntos explicativos, comparaciones y preguntas sobre lo que se ve.",
      en: "Images with explanatory points, comparisons and questions about what is shown.",
    },
  },
  {
    id: "voz",
    nombre: { es: "Voz y audio", en: "Voice and audio" },
    descripcion: {
      es: "Actividades para escuchar, hablar y grabar respuestas orales.",
      en: "Activities to listen, speak and record spoken answers.",
    },
  },
  {
    id: "estudio",
    nombre: { es: "Organización y estudio", en: "Study and note taking" },
    descripcion: {
      es: "Herramientas para repasar, tomar notas y documentar un proyecto paso a paso.",
      en: "Tools to review, take notes and document a project step by step.",
    },
  },
  {
    id: "estructura",
    nombre: { es: "Integraciones y estructura", en: "Embeds and layout" },
    descripcion: {
      es: "Piezas para ordenar la página e integrar gráficos, códigos QR y herramientas externas.",
      en: "Pieces that organize the page and bring in charts, QR codes and external tools.",
    },
  },
];

export const OBJETIVOS: { id: ObjetivoId; nombre: Bi }[] = [
  { id: "presentar", nombre: { es: "Presentar", en: "Present" } },
  { id: "explorar", nombre: { es: "Explorar", en: "Explore" } },
  { id: "practicar", nombre: { es: "Practicar", en: "Practice" } },
  { id: "evaluar", nombre: { es: "Evaluar", en: "Assess" } },
  { id: "repasar", nombre: { es: "Repasar", en: "Review" } },
  { id: "reflexionar", nombre: { es: "Reflexionar", en: "Reflect" } },
];

export const SECTORES: Record<SectorId, Bi> = {
  universidad: { es: "Universidad", en: "University" },
  banca: { es: "Banca", en: "Banking" },
  salud: { es: "Salud", en: "Healthcare" },
  industria: { es: "Industria", en: "Manufacturing" },
  retail: { es: "Retail", en: "Retail" },
  gobierno: { es: "Gobierno", en: "Government" },
};

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

const BASE: TipoContenido[] = [
  // ── Video y presentaciones ──
  {
    id: "video-interactivo",
    categoria: "video",
    nombre: { es: "Video interactivo", en: "Interactive video" },
    queEs: {
      es: "Un video con preguntas, enlaces y resúmenes que aparecen en momentos definidos. Puede pausarse hasta que el participante responda.",
      en: "A video with questions, links and summaries that appear at set moments. It can pause until the learner answers.",
    },
    ejemplo: {
      sector: "universidad",
      es: "En una universidad, el video de 6 minutos sobre medidas de tendencia central se detiene en el minuto 4 y le pide al estudiante elegir entre la media y la mediana para un caso con un salario atípico.",
      en: "At a university, a 6-minute video on measures of central tendency stops at minute 4 and asks students to choose between the mean and the median for a case with an outlier salary.",
    },
    idealPara: ["presentar", "evaluar"],
    captura: ["respuestas", "tiempo", "intentos", "progreso"],
    verbo: "answered",
    demo: "video-interactivo",
  },
  {
    id: "presentacion-curso",
    categoria: "video",
    nombre: { es: "Presentación de curso", en: "Course presentation" },
    queEs: {
      es: "Diapositivas que incluyen preguntas, videos y actividades dentro de cada lámina, con navegación y puntaje al final.",
      en: "Slides with questions, videos and activities inside each slide, plus navigation and a final score.",
    },
    ejemplo: {
      sector: "banca",
      es: "En un banco, la presentación de 12 láminas sobre indicadores de cartera le pide al analista de crédito calcular la tasa de mora de una cartera de ejemplo en la lámina 8 antes de avanzar.",
      en: "At a bank, a 12-slide presentation on portfolio indicators asks credit analysts to calculate the delinquency rate of a sample portfolio on slide 8 before moving on.",
    },
    idealPara: ["presentar", "practicar"],
    captura: ["vistas", "respuestas", "puntaje", "tiempo"],
    verbo: "progressed",
  },
  {
    id: "presentacion-impresionante",
    categoria: "video",
    nombre: { es: "Presentación impresionante", en: "Impressive presentation" },
    queEs: {
      es: "Una presentación con escenas ubicadas en un espacio de tres dimensiones. La cámara se mueve de una escena a la siguiente.",
      en: "A presentation with scenes placed in a three-dimensional space. The camera moves from one scene to the next.",
    },
    ejemplo: {
      sector: "salud",
      es: "En un hospital, el recorrido de un dato clínico desde el registro en urgencias hasta el tablero de gerencia se presenta como cinco escenas conectadas, una por cada sistema por el que pasa.",
      en: "At a hospital, the journey of a clinical data point from the emergency room record to the management dashboard is shown as five connected scenes, one for each system it passes through.",
    },
    idealPara: ["presentar", "explorar"],
    captura: ["vistas", "tiempo", "progreso"],
    verbo: "experienced",
  },
  {
    id: "libro-interactivo",
    categoria: "video",
    nombre: { es: "Libro interactivo", en: "Interactive book" },
    queEs: {
      es: "Un libro de varios capítulos que combina texto, video y actividades, con barra de progreso y un resumen de resultados al final.",
      en: "A multi-chapter book that combines text, video and activities, with a progress bar and a results summary at the end.",
    },
    ejemplo: {
      sector: "industria",
      es: "En una planta de manufactura, el manual de indicadores se convierte en un libro de cuatro capítulos con un ejercicio de eficiencia general de los equipos (OEE) al cierre de cada uno.",
      en: "At a manufacturing plant, the indicators manual becomes a four-chapter book with an overall equipment effectiveness (OEE) exercise at the end of each chapter.",
    },
    idealPara: ["presentar", "practicar"],
    captura: ["progreso", "vistas", "respuestas", "puntaje"],
    verbo: "progressed",
  },
  {
    id: "linea-tiempo",
    categoria: "video",
    nombre: { es: "Línea de tiempo", en: "Timeline" },
    queEs: {
      es: "Eventos ordenados por fecha, cada uno con texto, imagen o video. El participante los recorre en orden o salta al que necesita.",
      en: "Events ordered by date, each with text, an image or a video. Learners move through them in order or jump to the one they need.",
    },
    ejemplo: {
      sector: "retail",
      es: "En una cadena de tiendas, el año comercial se muestra como una línea de tiempo con los picos de demanda, las promociones y lo que mostraron los datos en cada fecha.",
      en: "At a retail chain, the sales year is shown as a timeline with demand peaks, promotions and what the data showed on each date.",
    },
    idealPara: ["presentar", "explorar"],
    captura: ["clics", "vistas", "tiempo"],
    verbo: "experienced",
    demo: "linea-tiempo",
  },
  {
    id: "muro-informacion",
    categoria: "video",
    nombre: { es: "Muro de información", en: "Information wall" },
    queEs: {
      es: "Un muro de paneles con imagen y texto que el participante filtra con un buscador.",
      en: "A wall of panels with an image and text that learners filter with a search box.",
    },
    ejemplo: {
      sector: "gobierno",
      es: "En una alcaldía, un muro reúne los 30 indicadores del plan de desarrollo y el funcionario lo filtra por secretaría o por meta.",
      en: "At a city government, a wall gathers the 30 indicators of the development plan, and staff filter it by department or by goal.",
    },
    idealPara: ["explorar", "repasar"],
    captura: ["clics", "tiempo", "vistas"],
    verbo: "interacted",
  },

  // ── Experiencias inmersivas ──
  {
    id: "recorrido-360",
    categoria: "inmersivas",
    nombre: { es: "Recorrido virtual 360°", en: "360° virtual tour" },
    queEs: {
      es: "Fotos o videos en 360 grados con puntos de interés, preguntas y saltos entre escenas. Se recorren arrastrando la imagen o con un visor.",
      en: "360-degree photos or videos with points of interest, questions and jumps between scenes. Learners explore by dragging the image or with a headset.",
    },
    ejemplo: {
      sector: "universidad",
      es: "En una universidad, el estudiante recorre en 360° la sala de control de una planta aliada y encuentra los tres puntos donde se generan los datos de producción.",
      en: "At a university, students explore a partner plant's control room in 360° and find the three points where production data is generated.",
    },
    idealPara: ["explorar", "practicar"],
    captura: ["clics", "ruta", "tiempo", "respuestas"],
    verbo: "experienced",
    demo: "recorrido-360",
  },
  {
    id: "vr-learning",
    categoria: "inmersivas",
    nombre: { es: "VR Learning", en: "VR learning" },
    queEs: {
      es: "Escenas de realidad virtual que el participante vive con un visor o desde el navegador, con preguntas y puntos de interacción dentro de la escena.",
      en: "Virtual reality scenes that learners experience with a headset or in the browser, with questions and interaction points inside the scene.",
    },
    ejemplo: {
      sector: "banca",
      es: "En un banco, el asesor entra a una oficina virtual y atiende a un cliente que pide un crédito. Antes de responder debe leer el tablero de riesgo que aparece en la pantalla.",
      en: "At a bank, an advisor walks into a virtual branch and serves a customer asking for a loan. Before answering, the advisor has to read the risk dashboard on screen.",
    },
    idealPara: ["explorar", "practicar"],
    captura: ["ruta", "respuestas", "tiempo", "clics"],
    verbo: "experienced",
  },
  {
    id: "busqueda-tesoro-ra",
    categoria: "inmersivas",
    nombre: { es: "Búsqueda del tesoro RA", en: "AR scavenger hunt" },
    queEs: {
      es: "El participante apunta la cámara del celular a marcadores impresos y en la pantalla aparecen objetos, datos o preguntas sobre el espacio real.",
      en: "Learners point their phone camera at printed markers, and objects, data or questions appear on screen over the real space.",
    },
    ejemplo: {
      sector: "salud",
      es: "En una clínica, el personal nuevo recorre la farmacia con el celular y escanea tres marcadores que muestran la rotación de inventario, la temperatura de la nevera y el registro de dispensación.",
      en: "At a clinic, new staff walk through the pharmacy with their phones and scan three markers that show inventory turnover, refrigerator temperature and the dispensing log.",
    },
    idealPara: ["explorar", "practicar"],
    captura: ["clics", "progreso", "tiempo"],
    verbo: "interacted",
    demo: "busqueda-tesoro-ra",
  },

  // ── Escenarios y juegos ──
  {
    id: "escenario-ramificado",
    categoria: "juegos",
    nombre: { es: "Escenario ramificado", en: "Branching scenario" },
    queEs: {
      es: "Un caso en el que cada decisión del participante lleva a una consecuencia distinta y a un final diferente.",
      en: "A case where each learner decision leads to a different consequence and a different ending.",
    },
    ejemplo: {
      sector: "industria",
      es: "En una empresa de alimentos, el analista debe explicar para el lunes por qué las ventas de la regional Norte cayeron 18 %. Cada decisión que toma con los datos cambia lo que pasa en la reunión con el gerente.",
      en: "At a food manufacturer, an analyst has until Monday to explain why sales in the North region fell 18%. Every decision about the data changes what happens in the meeting with the manager.",
    },
    idealPara: ["practicar", "reflexionar"],
    captura: ["ruta", "respuestas", "tiempo", "intentos"],
    verbo: "answered",
    demo: "escenario-ramificado",
  },
  {
    id: "mapa-juego",
    categoria: "juegos",
    nombre: { es: "Mapa de juego", en: "Game map" },
    queEs: {
      es: "Un mapa con etapas que se desbloquean a medida que el participante completa actividades. Puede tener vidas, tiempo y puntos.",
      en: "A map with stages that unlock as learners complete activities. It can include lives, a timer and points.",
    },
    ejemplo: {
      sector: "retail",
      es: "En una cadena de retail, los administradores de tienda avanzan por un mapa de cinco estaciones, de la pregunta de negocio al informe, y cada estación se abre al aprobar la anterior.",
      en: "At a retail chain, store managers move through a five-station map, from the business question to the report. Each station opens when they pass the previous one.",
    },
    idealPara: ["practicar", "evaluar"],
    captura: ["ruta", "puntaje", "intentos", "progreso"],
    verbo: "progressed",
  },
  {
    id: "juego-memoria",
    categoria: "juegos",
    nombre: { es: "Juego de memoria", en: "Memory game" },
    queEs: {
      es: "Cartas boca abajo que el participante voltea de dos en dos para encontrar las parejas.",
      en: "Face-down cards that learners flip two at a time to find matching pairs.",
    },
    ejemplo: {
      sector: "gobierno",
      es: "En una entidad pública, los funcionarios emparejan cada tipo de gráfico con su nombre antes de construir su primer tablero de seguimiento.",
      en: "At a public agency, staff match each chart type with its name before building their first tracking dashboard.",
    },
    idealPara: ["repasar", "practicar"],
    captura: ["intentos", "tiempo", "puntaje"],
    verbo: "completed",
    demo: "juego-memoria",
  },
  {
    id: "crucigrama",
    categoria: "juegos",
    nombre: { es: "Crucigrama", en: "Crossword" },
    queEs: {
      es: "Un crucigrama que se arma con los términos del curso y sus pistas.",
      en: "A crossword built from the course terms and their clues.",
    },
    ejemplo: {
      sector: "universidad",
      es: "En una universidad, el estudiante cierra el módulo de estadística descriptiva con un crucigrama de 10 términos, como percentil, varianza y moda.",
      en: "At a university, students close the descriptive statistics module with a 10-term crossword that includes words like percentile, variance and mode.",
    },
    idealPara: ["repasar"],
    captura: ["respuestas", "intentos", "tiempo", "puntaje"],
    verbo: "completed",
  },
  {
    id: "sopa-letras",
    categoria: "juegos",
    nombre: { es: "Sopa de letras", en: "Word search" },
    queEs: {
      es: "Una cuadrícula de letras en la que el participante encuentra los términos escondidos.",
      en: "A letter grid where learners find the hidden terms.",
    },
    ejemplo: {
      sector: "banca",
      es: "En un banco, la inducción del equipo de datos incluye una sopa de letras con los nombres de los indicadores que el área reporta cada mes.",
      en: "At a bank, the data team onboarding includes a word search with the names of the indicators the team reports every month.",
    },
    idealPara: ["repasar"],
    captura: ["respuestas", "tiempo", "puntaje"],
    verbo: "completed",
  },
  {
    id: "calendario-adviento",
    categoria: "juegos",
    nombre: { es: "Calendario de Adviento", en: "Advent calendar" },
    queEs: {
      es: "Un calendario de puertas que se abren por fecha. Cada puerta guarda un contenido, un video o un reto.",
      en: "A calendar of doors that open by date. Each door holds a piece of content, a video or a challenge.",
    },
    ejemplo: {
      sector: "salud",
      es: "En una red de clínicas, una campaña de 10 días abre cada mañana un reto corto sobre calidad del dato en la historia clínica.",
      en: "At a clinic network, a 10-day campaign opens a short challenge each morning on data quality in medical records.",
    },
    idealPara: ["repasar", "practicar"],
    captura: ["clics", "progreso", "tiempo"],
    verbo: "experienced",
  },

  // ── Preguntas y evaluación ──
  {
    id: "conjunto-preguntas",
    categoria: "evaluacion",
    nombre: { es: "Conjunto de preguntas", en: "Question set" },
    queEs: {
      es: "Una secuencia de preguntas de distintos tipos, con retroalimentación en cada una y puntaje final.",
      en: "A sequence of questions of different types, with feedback on each one and a final score.",
    },
    ejemplo: {
      sector: "industria",
      es: "En una planta, el examen del módulo de calidad de datos combina preguntas de verdadero o falso, de opción múltiple y de arrastrar, y exige 80 % para aprobar.",
      en: "At a plant, the data quality module exam mixes true or false, multiple choice and drag questions, and requires 80% to pass.",
    },
    idealPara: ["evaluar", "practicar"],
    captura: ["respuestas", "puntaje", "intentos", "tiempo"],
    verbo: "answered",
    demo: "cuestionario",
    variante: "set",
  },
  {
    id: "opcion-multiple",
    categoria: "evaluacion",
    nombre: { es: "Opción múltiple", en: "Multiple choice" },
    queEs: {
      es: "Una pregunta con una o varias respuestas correctas y retroalimentación para cada opción.",
      en: "A question with one or more correct answers and feedback for each option.",
    },
    ejemplo: {
      sector: "retail",
      es: "En una cadena de tiendas, el jefe de categoría elige cuáles de cuatro problemas de una base de ventas son de calidad de datos.",
      en: "At a retail chain, category managers pick which of four problems in a sales dataset are data quality issues.",
    },
    idealPara: ["evaluar", "practicar"],
    captura: ["respuestas", "intentos", "puntaje"],
    verbo: "answered",
    demo: "cuestionario",
    variante: "multiple",
  },
  {
    id: "opcion-unica",
    categoria: "evaluacion",
    nombre: { es: "Opción única", en: "Single choice set" },
    queEs: {
      es: "Una serie rápida de preguntas con una sola respuesta correcta. Avanza sola cuando el participante responde.",
      en: "A quick series of questions with one correct answer each. It moves on by itself when the learner answers.",
    },
    ejemplo: {
      sector: "gobierno",
      es: "En una secretaría de planeación, una ronda de cinco preguntas al inicio de cada sesión mide qué recuerdan los funcionarios del módulo anterior.",
      en: "At a planning department, a five-question round at the start of each session checks what staff remember from the previous module.",
    },
    idealPara: ["evaluar", "repasar"],
    captura: ["respuestas", "puntaje", "tiempo"],
    verbo: "answered",
    demo: "cuestionario",
    variante: "unica",
  },
  {
    id: "verdadero-falso",
    categoria: "evaluacion",
    nombre: { es: "Verdadero / Falso", en: "True / False" },
    queEs: {
      es: "Afirmaciones que el participante marca como verdaderas o falsas, con la explicación de la respuesta.",
      en: "Statements that learners mark as true or false, with an explanation of the answer.",
    },
    ejemplo: {
      sector: "universidad",
      es: "En una universidad, el estudiante decide si una correlación alta prueba causalidad y recibe la explicación con un ejemplo de ventas de helado y uso de aire acondicionado.",
      en: "At a university, students decide whether a high correlation proves causation and get the explanation through an example about ice cream sales and air conditioning use.",
    },
    idealPara: ["evaluar", "repasar"],
    captura: ["respuestas", "intentos", "puntaje"],
    verbo: "answered",
    demo: "cuestionario",
    variante: "vf",
  },
  {
    id: "eleccion-multimedia",
    categoria: "evaluacion",
    nombre: { es: "Elección multimedia", en: "Multimedia choice" },
    queEs: {
      es: "Una pregunta en la que las opciones de respuesta son imágenes o videos.",
      en: "A question where the answer options are images or videos.",
    },
    ejemplo: {
      sector: "banca",
      es: "En un banco, el analista ve cuatro gráficos de la misma cartera y elige el que muestra mejor la evolución de la mora.",
      en: "At a bank, analysts see four charts of the same portfolio and choose the one that best shows how delinquency changed.",
    },
    idealPara: ["evaluar", "practicar"],
    captura: ["respuestas", "intentos", "puntaje"],
    verbo: "answered",
  },
  {
    id: "adivinar-respuesta",
    categoria: "evaluacion",
    nombre: { es: "Adivinar la respuesta", en: "Guess the answer" },
    queEs: {
      es: "Una imagen con una pregunta. La respuesta queda oculta hasta que el participante decide verla.",
      en: "An image with a question. The answer stays hidden until the learner chooses to reveal it.",
    },
    ejemplo: {
      sector: "salud",
      es: "En un hospital, el coordinador mira el gráfico de ocupación de camas de una semana y piensa qué día fue el más crítico antes de revelar la respuesta.",
      en: "At a hospital, coordinators look at a week of bed occupancy and think about which day was the most critical before revealing the answer.",
    },
    idealPara: ["repasar", "reflexionar"],
    captura: ["clics", "tiempo"],
    verbo: "interacted",
  },
  {
    id: "test-personalidad",
    categoria: "evaluacion",
    nombre: { es: "Test de personalidad", en: "Personality quiz" },
    queEs: {
      es: "Preguntas que asignan al participante un perfil según sus respuestas, con una recomendación para cada perfil.",
      en: "Questions that assign learners a profile based on their answers, with a recommendation for each profile.",
    },
    ejemplo: {
      sector: "industria",
      es: "En una empresa industrial, el ingeniero responde cuatro preguntas y recibe su perfil de analista con los módulos del programa que más le sirven.",
      en: "At an industrial company, engineers answer four questions and get their analyst profile with the program modules that fit them best.",
    },
    idealPara: ["reflexionar", "explorar"],
    captura: ["respuestas", "tiempo"],
    verbo: "completed",
    demo: "test-personalidad",
  },
  {
    id: "cuestionario-aritmetico",
    categoria: "evaluacion",
    nombre: { es: "Cuestionario aritmético", en: "Arithmetic quiz" },
    queEs: {
      es: "Ejercicios de cálculo que se generan al azar, con tiempo y puntaje.",
      en: "Randomly generated calculation exercises with a timer and a score.",
    },
    ejemplo: {
      sector: "retail",
      es: "En una cadena de tiendas, el equipo de caja practica operaciones rápidas en rondas de un minuto antes de empezar el módulo de indicadores de venta.",
      en: "At a retail chain, cashiers practice quick calculations in one-minute rounds before starting the sales indicators module.",
    },
    idealPara: ["practicar"],
    captura: ["respuestas", "puntaje", "tiempo", "intentos"],
    verbo: "answered",
  },
  {
    id: "cuestionario-encuesta",
    categoria: "evaluacion",
    nombre: { es: "Cuestionario / Encuesta", en: "Questionnaire / Survey" },
    queEs: {
      es: "Preguntas abiertas y de selección para recoger opiniones, percepciones o datos del participante. No tiene respuestas correctas.",
      en: "Open and multiple-choice questions to collect learner opinions, perceptions or information. There are no right answers.",
    },
    ejemplo: {
      sector: "gobierno",
      es: "En una gobernación, la encuesta de entrada les pregunta a los funcionarios qué datos usan hoy para decidir y con qué herramientas.",
      en: "At a state government, the intake survey asks staff what data they use to make decisions today and with which tools.",
    },
    idealPara: ["reflexionar"],
    captura: ["respuestas", "texto", "tiempo"],
    verbo: "answered",
  },
  {
    id: "resumen",
    categoria: "evaluacion",
    nombre: { es: "Resumen", en: "Summary" },
    queEs: {
      es: "El participante elige la afirmación correcta de cada grupo. Al final queda armado el resumen del tema.",
      en: "Learners pick the correct statement from each group. At the end, the topic summary is complete.",
    },
    ejemplo: {
      sector: "universidad",
      es: "En una universidad, el estudiante cierra la unidad de visualización escogiendo las cinco afirmaciones correctas sobre cuándo usar cada gráfico.",
      en: "At a university, students close the visualization unit by choosing the five correct statements about when to use each chart.",
    },
    idealPara: ["repasar", "evaluar"],
    captura: ["respuestas", "intentos", "puntaje"],
    verbo: "answered",
  },

  // ── Texto y escritura ──
  {
    id: "ensayo",
    categoria: "texto",
    nombre: { es: "Ensayo", en: "Essay" },
    queEs: {
      es: "Una respuesta escrita libre que se revisa contra palabras clave definidas por el docente, con retroalimentación inmediata.",
      en: "A free written answer checked against keywords set by the instructor, with immediate feedback.",
    },
    ejemplo: {
      sector: "banca",
      es: "En un banco, el analista escribe en 150 palabras qué le recomendaría al comité de riesgo después de leer el tablero de mora.",
      en: "At a bank, analysts write 150 words on what they would recommend to the risk committee after reading the delinquency dashboard.",
    },
    idealPara: ["reflexionar", "evaluar"],
    captura: ["texto", "puntaje", "tiempo", "intentos"],
    verbo: "answered",
  },
  {
    id: "rellenar-espacios",
    categoria: "texto",
    nombre: { es: "Rellenar espacios", en: "Fill in the blanks" },
    queEs: {
      es: "Un texto con espacios en blanco que el participante completa escribiendo la palabra o el número.",
      en: "A text with blanks that learners complete by typing the word or number.",
    },
    ejemplo: {
      sector: "salud",
      es: "En una EPS, el analista completa el cálculo de la tasa de reingreso hospitalario de un mes con los datos de un caso.",
      en: "At a health insurer, analysts complete a month's hospital readmission rate calculation with the data from a case.",
    },
    idealPara: ["practicar", "evaluar"],
    captura: ["respuestas", "intentos", "puntaje"],
    verbo: "answered",
    demo: "rellenar-espacios",
  },
  {
    id: "rellenar-espacios-avanzado",
    categoria: "texto",
    nombre: { es: "Rellenar espacios (avanzado)", en: "Advanced fill in the blanks" },
    queEs: {
      es: "Una versión con listas desplegables, pistas y retroalimentación específica para los errores más comunes.",
      en: "A version with drop-down lists, hints and specific feedback for the most common mistakes.",
    },
    ejemplo: {
      sector: "industria",
      es: "En una planta, el operario completa el procedimiento de registro de paros. Si confunde un paro planeado con uno no planeado, recibe la explicación de la diferencia.",
      en: "At a plant, operators complete the downtime logging procedure. If they confuse planned and unplanned downtime, they get an explanation of the difference.",
    },
    idealPara: ["practicar"],
    captura: ["respuestas", "intentos", "puntaje"],
    verbo: "answered",
  },
  {
    id: "marcar-palabras",
    categoria: "texto",
    nombre: { es: "Marcar las palabras", en: "Mark the words" },
    queEs: {
      es: "El participante selecciona en un texto las palabras que cumplen un criterio.",
      en: "Learners select the words in a text that meet a criterion.",
    },
    ejemplo: {
      sector: "retail",
      es: "En una cadena de tiendas, el jefe de zona marca en el informe semanal las palabras que nombran medidas estadísticas.",
      en: "At a retail chain, area managers mark the words in the weekly report that name statistical measures.",
    },
    idealPara: ["practicar", "evaluar"],
    captura: ["respuestas", "intentos", "puntaje"],
    verbo: "answered",
    demo: "marcar-palabras",
  },
  {
    id: "tira-estructura",
    categoria: "texto",
    nombre: { es: "Tira de estructura", en: "Structure strip" },
    queEs: {
      es: "Una guía de escritura por secciones, cada una con su color y una extensión sugerida.",
      en: "A writing guide split into color-coded sections, each with a suggested length.",
    },
    ejemplo: {
      sector: "gobierno",
      es: "En una entidad pública, el funcionario redacta su informe de gestión en cuatro partes: contexto, dato, hallazgo y recomendación.",
      en: "At a public agency, staff write their performance report in four parts: context, data, finding and recommendation.",
    },
    idealPara: ["practicar", "reflexionar"],
    captura: ["texto", "progreso", "tiempo"],
    verbo: "completed",
  },

  // ── Arrastrar, ordenar y emparejar ──
  {
    id: "arrastrar-soltar",
    categoria: "arrastrar",
    nombre: { es: "Arrastrar y soltar", en: "Drag and drop" },
    queEs: {
      es: "Elementos que el participante arrastra a las zonas correctas de una imagen o un esquema.",
      en: "Items that learners drag onto the correct areas of an image or diagram.",
    },
    ejemplo: {
      sector: "universidad",
      es: "En una universidad, el estudiante lleva cada pregunta de negocio al tipo de gráfico que mejor la responde.",
      en: "At a university, students drag each business question onto the chart type that answers it best.",
    },
    idealPara: ["practicar", "evaluar"],
    captura: ["respuestas", "intentos", "puntaje", "tiempo"],
    verbo: "answered",
    demo: "arrastrar-soltar",
  },
  {
    id: "arrastrar-palabras",
    categoria: "arrastrar",
    nombre: { es: "Arrastrar las palabras", en: "Drag the words" },
    queEs: {
      es: "Frases incompletas en las que el participante arrastra la palabra que falta.",
      en: "Incomplete sentences where learners drag in the missing word.",
    },
    ejemplo: {
      sector: "banca",
      es: "En un banco, el analista completa las definiciones del informe de riesgo arrastrando términos como mora, provisión y cosecha.",
      en: "At a bank, analysts complete the definitions in the risk report by dragging in terms like delinquency, provisions and vintage.",
    },
    idealPara: ["practicar", "repasar"],
    captura: ["respuestas", "intentos", "puntaje"],
    verbo: "answered",
    demo: "arrastrar-palabras",
  },
  {
    id: "ordenar-parrafos",
    categoria: "arrastrar",
    nombre: { es: "Ordenar los párrafos", en: "Sort the paragraphs" },
    queEs: {
      es: "Párrafos o pasos desordenados que el participante pone en la secuencia correcta.",
      en: "Shuffled paragraphs or steps that learners put in the right order.",
    },
    ejemplo: {
      sector: "salud",
      es: "En un hospital, el equipo de calidad ordena los pasos para investigar un aumento en el tiempo de espera de urgencias.",
      en: "At a hospital, the quality team orders the steps to investigate an increase in emergency room waiting times.",
    },
    idealPara: ["practicar", "evaluar"],
    captura: ["respuestas", "intentos", "puntaje"],
    verbo: "answered",
    demo: "ordenar-parrafos",
  },
  {
    id: "emparejamiento-imagenes",
    categoria: "arrastrar",
    nombre: { es: "Emparejamiento de imágenes", en: "Image pairing" },
    queEs: {
      es: "Parejas de imágenes relacionadas que el participante une.",
      en: "Pairs of related images that learners connect.",
    },
    ejemplo: {
      sector: "industria",
      es: "En una planta, el técnico une cada máquina con el sensor que registra su dato principal.",
      en: "At a plant, technicians match each machine with the sensor that records its main data point.",
    },
    idealPara: ["practicar", "repasar"],
    captura: ["respuestas", "intentos", "puntaje"],
    verbo: "answered",
  },
  {
    id: "secuenciacion-imagenes",
    categoria: "arrastrar",
    nombre: { es: "Secuenciación de imágenes", en: "Image sequencing" },
    queEs: {
      es: "Imágenes que el participante ordena según un proceso o una cronología.",
      en: "Images that learners put in order according to a process or a timeline.",
    },
    ejemplo: {
      sector: "retail",
      es: "En una cadena de tiendas, el equipo ordena las fotos del recorrido de un producto, desde la bodega hasta el tiquete de venta.",
      en: "At a retail chain, the team orders photos of a product's journey from the warehouse to the sales receipt.",
    },
    idealPara: ["practicar"],
    captura: ["respuestas", "intentos", "puntaje"],
    verbo: "answered",
  },

  // ── Imágenes y hotspots ──
  {
    id: "hotspots-imagenes",
    categoria: "imagenes",
    nombre: { es: "Hotspots en imágenes", en: "Image hotspots" },
    queEs: {
      es: "Una imagen con puntos que se abren con explicaciones, textos, imágenes o videos.",
      en: "An image with points that open explanations, text, images or videos.",
    },
    ejemplo: {
      sector: "gobierno",
      es: "En una secretaría de hacienda, el funcionario abre los puntos del tablero de recaudo para entender qué muestra cada indicador.",
      en: "At a city finance department, staff open the points on the tax collection dashboard to understand what each indicator shows.",
    },
    idealPara: ["explorar", "presentar"],
    captura: ["clics", "tiempo", "vistas"],
    verbo: "interacted",
    demo: "hotspots-imagenes",
  },
  {
    id: "encontrar-hotspot",
    categoria: "imagenes",
    nombre: { es: "Encontrar el hotspot", en: "Find the hotspot" },
    queEs: {
      es: "El participante señala en una imagen el área que responde la pregunta.",
      en: "Learners point to the area of an image that answers the question.",
    },
    ejemplo: {
      sector: "universidad",
      es: "En una universidad, el estudiante señala en un gráfico de dispersión el punto que es un valor atípico.",
      en: "At a university, students point to the outlier in a scatter plot.",
    },
    idealPara: ["evaluar", "practicar"],
    captura: ["clics", "respuestas", "intentos"],
    verbo: "answered",
  },
  {
    id: "encontrar-multiples-hotspots",
    categoria: "imagenes",
    nombre: { es: "Encontrar múltiples hotspots", en: "Find multiple hotspots" },
    queEs: {
      es: "El participante encuentra varias áreas correctas en una misma imagen.",
      en: "Learners find several correct areas in the same image.",
    },
    ejemplo: {
      sector: "banca",
      es: "En un banco, el analista encuentra en un tablero de riesgo los tres errores de diseño que pueden llevar a una mala decisión.",
      en: "At a bank, analysts find the three design mistakes on a risk dashboard that could lead to a bad decision.",
    },
    idealPara: ["evaluar", "practicar"],
    captura: ["clics", "respuestas", "intentos", "puntaje"],
    verbo: "answered",
  },
  {
    id: "yuxtaposicion-imagenes",
    categoria: "imagenes",
    nombre: { es: "Yuxtaposición de imágenes", en: "Image juxtaposition" },
    queEs: {
      es: "Dos imágenes superpuestas con un deslizador para comparar el antes y el después.",
      en: "Two overlapping images with a slider to compare before and after.",
    },
    ejemplo: {
      sector: "salud",
      es: "En una clínica, el equipo compara el informe mensual de atenciones antes y después de rediseñarlo con las reglas del módulo de visualización.",
      en: "At a clinic, the team compares the monthly patient visits report before and after redesigning it with the rules from the visualization module.",
    },
    idealPara: ["explorar", "reflexionar"],
    captura: ["clics", "tiempo"],
    verbo: "interacted",
    demo: "yuxtaposicion-imagenes",
  },
  {
    id: "carrusel-imagenes",
    categoria: "imagenes",
    nombre: { es: "Carrusel de imágenes", en: "Image carousel" },
    queEs: {
      es: "Una galería de imágenes que el participante recorre una a una.",
      en: "An image gallery that learners browse one picture at a time.",
    },
    ejemplo: {
      sector: "industria",
      es: "En una planta, el carrusel muestra los seis tableros de la reunión diaria de producción, con una nota sobre qué mirar en cada uno.",
      en: "At a plant, the carousel shows the six boards used in the daily production meeting, with a note on what to look at in each one.",
    },
    idealPara: ["presentar", "explorar"],
    captura: ["vistas", "clics", "tiempo"],
    verbo: "experienced",
  },
  {
    id: "agamotto",
    categoria: "imagenes",
    nombre: { es: "Agamotto", en: "Agamotto" },
    queEs: {
      es: "Una secuencia de imágenes que cambia con un deslizador para mostrar cómo evoluciona algo, con un texto para cada paso.",
      en: "A sequence of images that changes with a slider to show how something evolves, with a text for each step.",
    },
    ejemplo: {
      sector: "retail",
      es: "En una cadena de tiendas, el deslizador muestra cómo cambia el mapa de calor de ventas de una tienda a lo largo del día.",
      en: "At a retail chain, the slider shows how a store's sales heat map changes throughout the day.",
    },
    idealPara: ["explorar", "presentar"],
    captura: ["clics", "tiempo", "vistas"],
    verbo: "interacted",
  },
  {
    id: "collage",
    categoria: "imagenes",
    nombre: { es: "Collage", en: "Collage" },
    queEs: {
      es: "Varias imágenes compuestas en una sola plantilla.",
      en: "Several images arranged in a single layout.",
    },
    ejemplo: {
      sector: "gobierno",
      es: "En una alcaldía, un collage reúne las fotos de las obras que respaldan cada indicador del informe de gestión.",
      en: "At a city government, a collage gathers photos of the public works behind each indicator in the performance report.",
    },
    idealPara: ["presentar"],
    captura: ["vistas", "tiempo"],
    verbo: "experienced",
  },

  // ── Voz y audio ──
  {
    id: "grabadora-audio",
    categoria: "voz",
    nombre: { es: "Grabadora de audio", en: "Audio recorder" },
    queEs: {
      es: "El participante graba su voz en el navegador, se escucha y puede descargar la grabación para entregarla.",
      en: "Learners record their voice in the browser, listen back and can download the recording to submit it.",
    },
    ejemplo: {
      sector: "universidad",
      es: "En una universidad, el estudiante graba en dos minutos la recomendación que le daría a un gerente a partir de un tablero.",
      en: "At a university, students record a two-minute recommendation for a manager based on a dashboard.",
    },
    idealPara: ["practicar", "reflexionar"],
    captura: ["clics", "tiempo", "progreso"],
    verbo: "interacted",
  },
  {
    id: "decir-palabras",
    categoria: "voz",
    nombre: { es: "Decir las palabras", en: "Speak the words" },
    queEs: {
      es: "Una pregunta que se responde en voz alta. El navegador reconoce la respuesta y la compara con la esperada.",
      en: "A question answered out loud. The browser recognizes the answer and compares it with the expected one.",
    },
    ejemplo: {
      sector: "banca",
      es: "En un banco, el asesor dice en voz alta cuál es el indicador que mide la proporción de créditos vencidos.",
      en: "At a bank, advisors say out loud which indicator measures the share of overdue loans.",
    },
    idealPara: ["practicar", "repasar"],
    captura: ["respuestas", "intentos", "puntaje"],
    verbo: "answered",
  },
  {
    id: "conjunto-decir-palabras",
    categoria: "voz",
    nombre: { es: "Conjunto de decir palabras", en: "Speak the words set" },
    queEs: {
      es: "Una serie de preguntas de respuesta oral, con puntaje al final.",
      en: "A series of spoken-answer questions with a score at the end.",
    },
    ejemplo: {
      sector: "salud",
      es: "En una red de clínicas, el personal administrativo responde en voz alta cinco preguntas sobre los indicadores de oportunidad de citas.",
      en: "At a clinic network, administrative staff answer five spoken questions about appointment wait time indicators.",
    },
    idealPara: ["practicar", "evaluar"],
    captura: ["respuestas", "intentos", "puntaje"],
    verbo: "answered",
  },
  {
    id: "dictado",
    categoria: "voz",
    nombre: { es: "Dictado", en: "Dictation" },
    queEs: {
      es: "El participante escucha un audio y escribe lo que oye. El texto se compara con el original.",
      en: "Learners listen to an audio clip and type what they hear. The text is compared with the original.",
    },
    ejemplo: {
      sector: "industria",
      es: "En una planta, el operario escucha el reporte de turno y transcribe las cifras de producción para practicar el registro sin errores.",
      en: "At a plant, operators listen to the shift report and type the production figures to practice error-free logging.",
    },
    idealPara: ["practicar"],
    captura: ["texto", "respuestas", "intentos", "puntaje"],
    verbo: "answered",
  },

  // ── Organización y estudio ──
  {
    id: "flashcards",
    categoria: "estudio",
    nombre: { es: "Flashcards", en: "Flashcards" },
    queEs: {
      es: "Tarjetas con un término o una pregunta de un lado y la respuesta del otro, para repasar al propio ritmo.",
      en: "Cards with a term or question on one side and the answer on the other, for self-paced review.",
    },
    ejemplo: {
      sector: "retail",
      es: "En una cadena de tiendas, los vendedores repasan en el celular los seis indicadores de su tablero antes de la reunión semanal.",
      en: "At a retail chain, sales staff review the six indicators on their dashboard on their phones before the weekly meeting.",
    },
    idealPara: ["repasar"],
    captura: ["respuestas", "intentos", "tiempo"],
    verbo: "answered",
    demo: "flashcards",
  },
  {
    id: "tarjetas-dialogo",
    categoria: "estudio",
    nombre: { es: "Tarjetas de diálogo", en: "Dialog cards" },
    queEs: {
      es: "Tarjetas con una situación al frente y la respuesta sugerida al reverso, para practicar qué decir.",
      en: "Cards with a situation on the front and a suggested answer on the back, to practice what to say.",
    },
    ejemplo: {
      sector: "gobierno",
      es: "En una entidad pública, el funcionario practica cómo responder cuando el concejo pregunta por qué un indicador no cumplió la meta.",
      en: "At a public agency, staff practice how to answer when the city council asks why an indicator missed its target.",
    },
    idealPara: ["repasar", "practicar"],
    captura: ["clics", "tiempo", "progreso"],
    verbo: "interacted",
    demo: "tarjetas-dialogo",
  },
  {
    id: "notas-cornell",
    categoria: "estudio",
    nombre: { es: "Notas de Cornell", en: "Cornell notes" },
    queEs: {
      es: "Una plantilla de notas en tres zonas (ideas clave, notas y resumen) que acompaña un video, un texto o una lectura.",
      en: "A three-part note template (key ideas, notes and summary) placed next to a video, text or reading.",
    },
    ejemplo: {
      sector: "universidad",
      es: "En una universidad, el estudiante toma notas de Cornell mientras ve la clase grabada sobre pruebas A/B y las descarga para estudiar.",
      en: "At a university, students take Cornell notes while watching the recorded lecture on A/B testing and download them to study.",
    },
    idealPara: ["reflexionar", "repasar"],
    captura: ["texto", "tiempo", "progreso"],
    verbo: "completed",
  },
  {
    id: "herramienta-documentacion",
    categoria: "estudio",
    nombre: { es: "Herramienta de documentación", en: "Documentation tool" },
    queEs: {
      es: "Un formulario por pasos que guía al participante en un proyecto y genera un documento descargable al final.",
      en: "A step-by-step form that guides learners through a project and produces a downloadable document at the end.",
    },
    ejemplo: {
      sector: "banca",
      es: "En un banco, el analista documenta su proyecto final en cinco pasos, de la pregunta de negocio a la recomendación, y descarga el informe para el comité.",
      en: "At a bank, analysts document their final project in five steps, from the business question to the recommendation, and download the report for the committee.",
    },
    idealPara: ["practicar", "reflexionar"],
    captura: ["texto", "progreso", "tiempo"],
    verbo: "completed",
  },

  // ── Integraciones y estructura ──
  {
    id: "grafico",
    categoria: "estructura",
    nombre: { es: "Gráfico", en: "Chart" },
    queEs: {
      es: "Gráficos de barras o de torta construidos dentro del curso con los datos del caso.",
      en: "Bar or pie charts built inside the course with the case data.",
    },
    ejemplo: {
      sector: "salud",
      es: "En un hospital, la lección sobre ocupación incluye un gráfico de barras con las camas ocupadas por servicio en la última semana.",
      en: "At a hospital, the occupancy lesson includes a bar chart with occupied beds by unit over the last week.",
    },
    idealPara: ["presentar"],
    captura: ["vistas", "tiempo"],
    verbo: "experienced",
  },
  {
    id: "codigo-qr",
    categoria: "estructura",
    nombre: { es: "Código KewAr / QR", en: "KewAr / QR code" },
    queEs: {
      es: "Códigos QR que conectan el material impreso o el espacio físico con una lección del curso.",
      en: "QR codes that connect printed material or a physical space to a lesson in the course.",
    },
    ejemplo: {
      sector: "industria",
      es: "En una planta, cada máquina tiene un QR que abre el video de dos minutos sobre cómo leer su indicador de disponibilidad.",
      en: "At a plant, each machine has a QR code that opens a two-minute video on how to read its availability indicator.",
    },
    idealPara: ["explorar", "presentar"],
    captura: ["clics", "vistas"],
    verbo: "interacted",
  },
  {
    id: "incrustador-iframe",
    categoria: "estructura",
    nombre: { es: "Incrustador iframe", en: "Iframe embedder" },
    queEs: {
      es: "Una página web o una herramienta externa dentro del curso, como un tablero de Power BI, una hoja de cálculo o un simulador.",
      en: "A web page or an external tool inside the course, such as a Power BI dashboard, a spreadsheet or a simulator.",
    },
    ejemplo: {
      sector: "retail",
      es: "En una cadena de tiendas, la lección de lectura de tableros abre dentro del curso el tablero de ventas de la regional, con datos anonimizados.",
      en: "At a retail chain, the dashboard reading lesson opens the regional sales dashboard inside the course, with anonymized data.",
    },
    idealPara: ["explorar", "practicar"],
    captura: ["vistas", "tiempo"],
    verbo: "experienced",
  },
  {
    id: "acordeon",
    categoria: "estructura",
    nombre: { es: "Acordeón", en: "Accordion" },
    queEs: {
      es: "Bloques de texto plegables que muestran la información por partes, cuando el participante la necesita.",
      en: "Collapsible text blocks that show information in parts, when the learner needs it.",
    },
    ejemplo: {
      sector: "gobierno",
      es: "En una gobernación, el glosario del programa se presenta como un acordeón con las 12 definiciones del módulo 1.",
      en: "At a state government, the program glossary is an accordion with the 12 definitions from module 1.",
    },
    idealPara: ["presentar", "repasar"],
    captura: ["clics", "vistas", "tiempo"],
    verbo: "interacted",
    demo: "acordeon",
  },
  {
    id: "pagina-columna",
    categoria: "estructura",
    nombre: { es: "Página / Columna", en: "Page / Column" },
    queEs: {
      es: "Una página que organiza varios tipos de contenido uno debajo del otro, como texto, video y preguntas.",
      en: "A page that stacks several content types one after another, such as text, video and questions.",
    },
    ejemplo: {
      sector: "universidad",
      es: "En una universidad, cada lección del módulo 3 es una página con una lectura corta, un video interactivo y tres preguntas de cierre.",
      en: "At a university, each lesson in module 3 is one page with a short reading, an interactive video and three closing questions.",
    },
    idealPara: ["presentar"],
    captura: ["progreso", "vistas", "respuestas"],
    verbo: "progressed",
  },
];

/* ── Ejemplos de referencia en el mercado (videos oficiales, verificados el 24-nov-2026) ── */
const REFERENCIAS: Record<string, Referencia[]> = {
  "video-interactivo": [
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
  ],
  "presentacion-curso": [
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
  ],
  "vr-learning": [
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
    {
      plataforma: "1000 Cut Journey (Stanford VHIL y Columbia University)",
      url: "https://brown.stanford.edu/portfolio/1000cut/",
      provider: "youtube",
      videoId: "rA6fOMSx2yk",
      miniatura: "hqdefault",
      tituloVideo: "1000 Cut Journey Official Trailer",
      canal: "Virtual Human Interaction Lab",
      duracion: "0:27",
      wow: { es: "En VR, el participante vive en primera persona el racismo que enfrenta un hombre negro desde niño hasta adulto.", en: "In VR, learners live through the racism a Black man faces from childhood to adulthood, in the first person." },
      merahki: { es: "Desarrollar a la medida una experiencia inmersiva de empatía para tu programa.", en: "Build a custom immersive empathy experience for your program." },
      modo: "desarrollar",
    },
  ],
  "escenario-ramificado": [
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
  ],
  "recorrido-360": [
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
  "busqueda-tesoro-ra": [
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
  "decir-palabras": [
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
  ],
};

export const TIPOS: TipoContenido[] = BASE.map((t) => (REFERENCIAS[t.id] ? { ...t, referencias: REFERENCIAS[t.id] } : t));

export const TOTAL_TIPOS = TIPOS.length;
export const TOTAL_DEMOS = TIPOS.filter((t) => t.demo).length;
export const TOTAL_CATEGORIAS = CATEGORIAS.length;
export const TOTAL_REFERENCIAS = TIPOS.filter((t) => t.referencias?.length).length;

export const getTipo = (id: string) => TIPOS.find((t) => t.id === id);
