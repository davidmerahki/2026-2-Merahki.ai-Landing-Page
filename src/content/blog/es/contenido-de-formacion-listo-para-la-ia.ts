import type { Articulo } from "../types";

const INTELLUM_MAIN = "https://www.intellum.com/resources/blog/your-academy-is-invisible-to-ai";
const INTELLUM_READY = "https://www.intellum.com/resources/blog/is-your-learning-content-ready-for-ai";
const STANFORD = "https://hai.stanford.edu/assets/files/ai_index_report_2026_chapter_4_economy.pdf";
const TRAINING_MAG = "https://trainingmag.com/2025-training-industry-report/";
const GOOGLE_AI = "https://developers.google.com/search/docs/appearance/ai-features";
const GOOGLE_2025 = "https://developers.google.com/search/blog/2025/06/simplifying-search-results";
const SCHEMA_COURSE = "https://schema.org/Course";
const WCAG_CAPTIONS = "https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html";

export const articulo: Articulo = {
  slug: "contenido-de-formacion-listo-para-la-ia",
  lang: "es",
  altSlug: "learning-content-ready-for-ai",
  title:
    "Contenido de formación listo para la IA: cómo una universidad o empresa virtualiza sus cursos para que los usen las personas y los buscadores y asistentes con IA",
  seoTitle: "Contenido de formación listo para la IA: cómo virtualizar",
  description:
    "Cómo virtualizar cursos que sirvan a personas y a buscadores con IA: contenido accesible, estructurado, buscable y modular, etiquetado por competencia.",
  kicker: "Virtualización e IA",
  keywords: [
    "contenido de formación para inteligencia artificial",
    "virtualización de cursos",
    "contenido listo para la IA",
    "curso virtual por competencias",
    "diseño de cursos virtuales",
    "contenido modular e-learning",
  ],
  published: "2026-11-24",
  readingMinutes: 6,
  summary: [
    "Un <strong>contenido de formación listo para la IA</strong> es el que un buscador, un asistente o un tutor con IA puede leer, entender por partes y usar para responder una pregunta concreta.",
    "Intellum lo resume en cuatro rasgos: accesible, estructurado, buscable y modular. Un curso encerrado en un paquete SCORM o en videos sin transcripción no cumple ninguno fuera de su plataforma.",
    "El diseño por competencias ya trae la estructura que necesita la IA: competencia, resultado de aprendizaje, lección y pieza, con etiquetas que se heredan.",
    "Google dice que no hay requisitos ni marcado especial para aparecer en AI Overviews: pide texto, datos estructurados que coincidan con lo visible y buenos enlaces internos.",
    "Nadie puede garantizar que un curso aparezca en una respuesta de IA. Lo que sí se logra es contenido que las personas encuentran más rápido y que otros sistemas pueden reutilizar.",
  ],
  body: [
    {
      t: "p",
      html: "Un <strong>contenido de formación listo para la IA</strong> es el que un buscador, un asistente o un tutor con inteligencia artificial puede leer, entender por partes y usar para responder una pregunta concreta, sin que la persona tenga que recorrer el curso entero. En la práctica es contenido accesible, estructurado, buscable y modular.",
    },
    {
      t: "p",
      html: `Este artículo adapta dos textos de Intellum: <a href="${INTELLUM_MAIN}">«Your Academy is Invisible to AI»</a>, de Anderson Campbell (agosto de 2026), y <a href="${INTELLUM_READY}">«Is Your Learning Content Ready for AI?»</a>, de Shannon Howard (abril de 2026). Les suma la mirada de merahki: qué decisiones se toman dentro de un proyecto de virtualización de cursos diseñado por competencias para que el resultado sirva a dos lectores, la persona y la máquina.`,
    },
    { t: "h2", text: "Por qué buena parte del contenido de formación queda por fuera de la IA" },
    {
      t: "p",
      html: "El argumento de Campbell parte de una contradicción. La formación es digital desde hace años, pero mucho de ese contenido vive en formatos que la IA no puede leer: paquetes SCORM, archivos cerrados, videos sin transcripción y páginas detrás de un inicio de sesión. Al mismo tiempo, la búsqueda con IA se vuelve una forma principal de investigar, como antes lo fue la búsqueda orgánica.",
    },
    {
      t: "stats",
      items: [
        { value: "≈ 40 veces", label: "creció la inversión corporativa global en IA entre 2013 y 2025", source: "Stanford HAI, AI Index Report 2026, cap. 4", href: STANFORD },
        { value: "28 %", label: "de las horas de formación en empresas de Estados Unidos se dictó presencial en 2025", source: "Training Magazine, 2025 Training Industry Report", href: TRAINING_MAG },
        { value: "89 %", label: "de esas empresas usa un LMS", source: "Training Magazine, 2025 Training Industry Report", href: TRAINING_MAG },
      ],
    },
    {
      t: "p",
      html: "Las dos últimas cifras son de Estados Unidos, y la lectura sirve igual para una universidad o una empresa en Colombia. Casi toda la formación ya está en sistemas digitales, pero estar en un LMS no la hace legible. Un curso empaquetado en SCORM funciona dentro de la plataforma y es una caja cerrada para cualquier otro sistema.",
    },
    {
      t: "quote",
      text: "Un resumen de IA nunca reemplazará la formación de largo aliento.",
      cite: "Anderson Campbell, Intellum (2026), traducción propia",
      href: INTELLUM_MAIN,
    },
    {
      t: "p",
      html: "Estamos de acuerdo, y por eso la meta es que cada pieza del curso se encuentre, se entienda y se reutilice. La usa el estudiante que busca una respuesta a mitad de su trabajo, el tutor con IA de la plataforma y el buscador que lee la ficha pública del programa.",
    },
    { t: "h2", text: "Los cuatro rasgos del contenido listo para la IA" },
    {
      t: "p",
      html: "Howard propone cuatro preguntas para revisar un catálogo de formación. Esta tabla las traduce a decisiones de virtualización:",
    },
    {
      t: "table",
      head: ["Rasgo", "Pregunta", "Qué hacer al virtualizar"],
      rows: [
        ["Accesible", "¿La IA puede llegar al contenido?", "Sacar el conocimiento clave de los paquetes cerrados, publicar el texto fuente, transcribir los videos y decidir qué es público y qué va tras registro."],
        ["Estructurado", "¿La IA entiende de qué trata cada parte?", "Usar encabezados consistentes, una jerarquía de competencia a lección y metadatos por tema, rol y competencia."],
        ["Buscable", "¿La IA encuentra una respuesta puntual?", "Indexar por lección y por pregunta, con títulos que digan qué responde cada pieza y un glosario."],
        ["Modular", "¿La IA puede usar una parte sin el todo?", "Dividir en lecciones cortas y autocontenidas, una por resultado de aprendizaje, reutilizables en varias rutas."],
      ],
    },
    {
      t: "p",
      html: "Howard cierra con una idea que compartimos: el valor de la IA depende primero del contenido. Comprar un asistente no arregla un catálogo desordenado.",
    },
    { t: "h2", text: "El diseño por competencias ya trae la estructura que necesita la IA" },
    {
      t: "p",
      html: `En un curso diseñado por competencias, cada pieza nace con un lugar en una jerarquía: la competencia, el resultado de aprendizaje que la evidencia, la lección que lo enseña y las piezas de la lección. Si esas etiquetas se escriben desde el guion, cada video, lectura o actividad hereda de qué competencia es, qué resultado apoya, para qué rol sirve y en qué nivel está. En Colombia sumamos el nivel y el área del Marco Nacional de Cualificaciones y el código de la ocupación en la CUOC, como describe nuestra <a href="/es/methodology">metodología por competencias</a>.`,
    },
    {
      t: "table",
      head: ["Capa", "Ejemplo ilustrativo: academia de clientes de un software", "Etiqueta que hereda"],
      rows: [
        ["Competencia", "Configurar la facturación del producto para un cliente nuevo", "Competencia, rol: administrador"],
        ["Resultado de aprendizaje", "Configura el módulo de facturación según el plan contratado y la norma vigente", "Resultado, nivel, evidencia"],
        ["Lección", "Cómo activar la facturación electrónica", "Tema, versión del producto"],
        ["Piezas", "Video corto con transcripción, guía paso a paso en texto, ejercicio práctico y preguntas frecuentes", "Formato, duración, idioma"],
      ],
    },
    {
      t: "p",
      html: "Esa misma taxonomía le sirve a tres lectores. A la persona le da una navegación clara. Al tutor con IA le dice qué recomendar según lo que la persona ya sabe. Y al buscador le muestra de qué trata cada página.",
    },
    { t: "h2", text: "Lista de chequeo para virtualizar un curso para personas y para la IA" },
    {
      t: "ol",
      items: [
        "<strong>Una lección por resultado de aprendizaje,</strong> con un título que diga qué enseña.",
        "<strong>Etiquetas desde el guion:</strong> competencia, resultado, rol y nivel, no al final del montaje.",
        `<strong>Transcripción y subtítulos en cada video.</strong> Las pautas de accesibilidad <a href="${WCAG_CAPTIONS}">WCAG 2.2</a> exigen subtítulos para el audio pregrabado de los videos desde el nivel A, y la transcripción es texto que cualquier sistema puede leer.`,
        "<strong>Texto fuente abierto</strong> (HTML o Markdown) junto a cada interactivo o paquete SCORM.",
        "<strong>Encabezados y lenguaje simple:</strong> una idea por párrafo y los términos clave definidos en un glosario.",
        "<strong>Un resumen abierto por módulo</strong> con lo que la persona aprende y para qué le sirve.",
        `<strong>Una ficha pública del programa</strong> con datos estructurados de <a href="${SCHEMA_COURSE}">schema.org/Course</a> (por ejemplo teaches, educationalLevel, timeRequired y educationalCredentialAwarded) que coincidan con el texto visible.`,
        "<strong>Enlaces internos descriptivos</strong> entre lecciones, rutas y fichas de programa.",
        "<strong>Permisos claros:</strong> qué va abierto, qué tras registro y qué entra a una base de conocimiento para el asistente. Intellum propone esa base cuando el contenido está tras registro o la arquitectura exige mucho trabajo.",
        "<strong>Un LMS que exporte</strong> el contenido y sus metadatos, para no quedar atado a un formato.",
      ],
    },
    {
      t: "cta",
      html: "merahki virtualiza cursos por competencias con transcripciones, etiquetas y fichas abiertas desde el primer guion.",
    },
    { t: "h2", text: "Qué dice Google sobre aparecer en las respuestas con IA" },
    {
      t: "p",
      html: `La <a href="${GOOGLE_AI}">documentación de Google Search Central sobre funciones de IA</a> es directa: no hay requisitos adicionales ni optimizaciones especiales para aparecer en AI Overviews o en el modo IA, y no hace falta un marcado de schema.org especial. Pide lo de siempre: que el contenido importante esté en texto, que los datos estructurados coincidan con lo visible, que las páginas se encuentren por enlaces internos y que la experiencia de la página sea buena. También aclara que cumplir no garantiza aparecer.`,
    },
    {
      t: "p",
      html: `Un detalle para quien publica cursos. En <a href="${GOOGLE_2025}">junio de 2025</a> Google anunció que dejaría de mostrar varios resultados enriquecidos, entre ellos Course Info y Learning Video. Google aclaró que eso no afecta el uso de esos datos estructurados fuera de su buscador. El marcado de schema.org sigue siendo útil para describir bien un programa, pero no da un resultado especial en Google.`,
    },
    { t: "h2", text: "Qué cambia para universidades y para empresas" },
    {
      t: "ul",
      items: [
        `<strong>Universidades y educación continua.</strong> La ficha pública de cada programa y de cada microcredencial es lo primero que lee un futuro estudiante y lo que lee un asistente cuando alguien pregunta por cursos en su ciudad. Debe decir en texto qué competencias forma, en qué nivel, cuánto dura y qué credencial entrega. Así lo trabajamos en las <a href="/es/lifelong-learning">rutas de Lifelong Learning para universidades</a>.`,
        `<strong>Empresas.</strong> Una <a href="/es/customer-education">academia de clientes</a> con contenido modular puede alimentar al asistente de soporte, y la formación interna puede servir de fuente a un copiloto que responde dudas de los equipos. En los dos casos la pieza que se recupera tiene que tener sentido sola.`,
      ],
    },
    { t: "h2", text: "Lo que este trabajo no garantiza" },
    {
      t: "p",
      html: "Nadie puede prometer que un curso aparezca en la respuesta de un asistente de IA. El mismo Google lo dice. Lo que sí se logra con estas prácticas es contenido que la persona encuentra más rápido, que cumple las pautas de accesibilidad y que otros sistemas pueden reutilizar sin rehacerlo. La búsqueda con IA cambia rápido, así que conviene revisar estas prácticas cada seis meses.",
    },
    { t: "cta" },
  ],
  faq: [
    {
      q: "¿Qué es un contenido de formación listo para la IA?",
      a: "Es contenido que un buscador, un asistente o un tutor con IA puede leer, entender por partes y usar para responder una pregunta concreta. Cumple cuatro rasgos: accesible, estructurado, buscable y modular.",
    },
    {
      q: "¿Un curso en SCORM sirve para la IA?",
      a: "Dentro del LMS funciona, pero para otros sistemas es un paquete cerrado. Conviene publicar junto al paquete el texto fuente, las transcripciones y un resumen abierto de cada lección.",
    },
    {
      q: "¿Hay que agregar un marcado especial para salir en AI Overviews?",
      a: `No. Según <a href="${GOOGLE_AI}">Google</a>, no hay requisitos ni marcado especial. Pide contenido en texto, datos estructurados que coincidan con lo visible, enlaces internos y una buena experiencia de página, y aclara que cumplir no garantiza aparecer.`,
    },
    {
      q: "¿Tengo que publicar todo el curso abierto?",
      a: "No. Puedes dejar abiertas las fichas de programa, los resúmenes de módulo y las respuestas frecuentes, y mantener el curso completo tras registro. Para el asistente interno, una base de conocimiento con permisos resuelve el contenido cerrado.",
    },
    {
      q: "¿Cómo se etiqueta un curso por competencias?",
      a: "Cada pieza lleva la competencia, el resultado de aprendizaje que apoya, el rol, el nivel y el formato. Las etiquetas se definen en el guion, antes de producir, para que cada video o lectura las herede.",
    },
  ],
  sources: [
    { title: "Your Academy is Invisible to AI. Here's How to Change That.", publisher: "Intellum (Anderson Campbell)", url: INTELLUM_MAIN, date: "2026-08-05" },
    { title: "Is Your Learning Content Ready For AI?", publisher: "Intellum (Shannon Howard)", url: INTELLUM_READY, date: "2026-04-09" },
    { title: "AI Index Report 2026, capítulo 4: Economy", publisher: "Stanford HAI", url: STANFORD, date: "2026" },
    { title: "2025 Training Industry Report", publisher: "Training Magazine", url: TRAINING_MAG, date: "2025", note: "Empresas e instituciones de Estados Unidos con 100 o más empleados" },
    { title: "AI features and your website", publisher: "Google Search Central", url: GOOGLE_AI },
    { title: "Simplifying the search results page", publisher: "Google Search Central Blog", url: GOOGLE_2025, date: "2025-06-12" },
    { title: "Course", publisher: "Schema.org", url: SCHEMA_COURSE },
    { title: "Understanding SC 1.2.2: Captions (Prerecorded)", publisher: "W3C, WCAG 2.2", url: WCAG_CAPTIONS },
  ],
  adaptedFrom: { title: "Your Academy is Invisible to AI. Here's How to Change That.", publisher: "Intellum", url: INTELLUM_MAIN, date: "2026-08-05" },
  related: [
    "virtualizacion-de-cursos-proceso-y-tiempos",
    "diseno-instruccional-por-competencias",
    "plataforma-lms-como-elegir-implementar",
    "customer-education-formacion-de-clientes",
  ],
};
