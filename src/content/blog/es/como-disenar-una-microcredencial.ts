import type { Articulo } from "../types";

const COURSERA = "https://assets.ctfassets.net/2pudprfttvy6/3P06Oe48cjFLCwxNo45yEB/53de4a32ceb2d09f553bb3d32dc17d84/Micro-Credentials_Impact_Report_2026.pdf";
const UNEVOC = "https://connect.unevoc.unesco.org/home/TVETipedia+Glossary/lang=e/show=term/term=micro-credential";
const UE = "https://eur-lex.europa.eu/legal-content/ES/ALL/?uri=CELEX:32022H0627(02)";
const D1330 = "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=98270";
const MNC = "https://especiales.colombiaaprende.edu.co/mnc/definicion.html";
const MNC_NIVELES = "https://especiales.colombiaaprende.edu.co/mnc/estructura.html";
const OCUPACOL = "https://ocupacol.mintrabajo.gov.co/Profile/OccupationalProfile/24231";
const OB3 = "https://www.1edtech.org/standards/open-badges";
const POK_SANTOTO = "https://www.pok.tech/blog/es/posts/microcredenciales-homologables-universidad-santo-tomas-santotoup";
const POK_ACEPTACION = "https://www.pok.tech/blog/es/posts/tasa-aceptacion-credenciales-digitales-egresados-como-aumentarla";
const POK_IMPLEMENTAR = "https://www.pok.tech/blog/es/posts/como-implementar-microcredenciales-universidad-paso-a-paso";

export const articulo: Articulo = {
  slug: "como-disenar-una-microcredencial",
  lang: "es",
  altSlug: "how-to-design-a-micro-credential",
  title: "Cómo diseñar una microcredencial por competencias: plantilla y ejemplo completo para universidades y empresas que certifican habilidades",
  seoTitle: "Cómo diseñar una microcredencial: plantilla y ejemplo",
  description: "Plantilla para diseñar una microcredencial por competencias: ocupación CUOC, resultados de aprendizaje, evidencia, rúbrica, nivel MNC, horas y metadatos.",
  kicker: "Diseño de microcredenciales",
  keywords: [
    "diseño de microcredenciales",
    "cómo diseñar una microcredencial",
    "cómo crear microcredenciales",
    "plantilla de microcredencial",
    "microcredenciales por competencias",
    "rúbrica de evaluación por competencias",
  ],
  published: "2026-11-24",
  readingMinutes: 7,
  summary: [
    `Una microcredencial se diseña de atrás hacia adelante: ocupación, competencia, resultados de aprendizaje, evidencia y rúbrica. El contenido del curso va al final.`,
    `La plantilla cubre el nombre por competencia, la ocupación CUOC, la competencia, los resultados de saber, hacer y ser, las evidencias, la rúbrica, el nivel MNC, las horas y créditos, la modalidad y los metadatos.`,
    `Si se va a homologar, la carga se calcula en créditos de 48 horas, como fija el <a href="${D1330}">Decreto 1330 de 2019</a>, y la proporción entre acompañamiento docente y trabajo independiente la define la institución.`,
    `Los metadatos de la insignia salen del diseño: la recomendación europea pide título, resultados de aprendizaje, carga de trabajo, nivel, tipo de evaluación y forma de participación.`,
  ],
  body: [
    {
      t: "p",
      html: `Para diseñar una microcredencial se parte de la ocupación y de la competencia, y se avanza en este orden: resultados de aprendizaje de saber, hacer y ser, evidencia evaluable, rúbrica, nivel y carga horaria, y metadatos de la credencial. El contenido del curso se diseña al final, cuando ya está claro qué debe demostrar la persona y cómo se va a calificar.`,
    },
    {
      t: "p",
      html: `Esta guía trae la plantilla que usamos en merahki.ai, campo por campo, y un ejemplo completo. Sirve a unidades de educación continua y a áreas de formación de empresas. La parte técnica de la emisión está bien cubierta en la <a href="${POK_IMPLEMENTAR}">guía de POK para implementar microcredenciales en una universidad</a>. Aquí nos concentramos en el diseño, que es donde se va la mayor parte del tiempo del proyecto.`,
    },
    { t: "h2", text: "Qué decide la institución antes de diseñar", id: "decisiones-previas" },
    {
      t: "ol",
      items: [
        "<strong>Para qué brecha y para quién.</strong> Qué no sabe hacer hoy el público objetivo y en qué cargo lo necesita.",
        "<strong>Si va a homologarse.</strong> Si la respuesta es sí, hay que saber desde el inicio cuál es el programa receptor y qué curso de ese programa podría reconocerla.",
        "<strong>Con quién se define la competencia.</strong> En la encuesta de <a href=\"" + COURSERA + "\">Coursera de 2026</a>, el 82 % de los empleadores valora más las microcredenciales creadas con la industria. Conviene sentar a un empleador o a un gremio en la definición.",
        "<strong>Quién aprueba.</strong> Qué instancia académica firma el diseño y la regla de emisión.",
        "<strong>Si es una pieza suelta o parte de una ruta.</strong> Una microcredencial que se apila necesita un lugar declarado en la secuencia.",
      ],
    },
    { t: "h2", text: "La plantilla de una microcredencial, campo por campo", id: "plantilla" },
    { t: "h3", text: "Nombre y ocupación de referencia" },
    {
      t: "p",
      html: `La credencial se nombra por la competencia y no por el curso. «Selección de personal por competencias» le dice a un reclutador qué sabe hacer la persona. «Módulo 3 del diplomado de gestión humana» no le dice nada. Junto al nombre va la ocupación de referencia de la Clasificación Única de Ocupaciones (CUOC). Su ficha en Ocupacol trae las funciones, los conocimientos y las destrezas de esa ocupación, y sirve para justificar la pertinencia frente a un comité.`,
    },
    { t: "h3", text: "Competencia y resultados de aprendizaje" },
    {
      t: "p",
      html: `La competencia se escribe con un verbo, un objeto y una condición. Debe describir una capacidad completa que se pueda observar en el trabajo. Luego se descompone en resultados de aprendizaje de tres tipos: saber (lo que la persona conoce y explica), hacer (lo que ejecuta) y ser (la actitud con la que actúa). El <a href="${MNC}">Marco Nacional de Cualificaciones</a> define la competencia como una capacidad demostrada que se evidencia con el logro de los resultados de aprendizaje, así que cada resultado tiene que poder demostrarse. Un verbo por resultado, y siempre un verbo observable.`,
    },
    { t: "h3", text: "Evidencias y rúbrica" },
    {
      t: "p",
      html: `Cada resultado se conecta con al menos una evidencia: un producto, un caso resuelto, una simulación, un informe. La rúbrica tiene criterios, que salen de los resultados, y niveles de desempeño, que describen qué se ve en cada nivel. Se publica antes de que la persona empiece. Las evidencias aplicadas pesan: en el mismo <a href="${COURSERA}">informe de Coursera</a>, el 82 % de los estudiantes y el 88 % de los graduados prefiere las microcredenciales basadas en proyectos sobre las de solo contenido.`,
    },
    { t: "h3", text: "Nivel MNC, horas y créditos" },
    {
      t: "p",
      html: `El nivel se ubica con los <a href="${MNC_NIVELES}">descriptores de los ocho niveles del MNC</a>, que describen conocimientos, destrezas y actitudes. Las horas se declaran como trabajo del estudiante, con acompañamiento docente y trabajo independiente. Si la microcredencial va a homologarse, se calcula en créditos: según el <a href="${D1330}">Decreto 1330 de 2019</a>, un crédito equivale a 48 horas en un periodo académico, el número de créditos resulta de dividir las horas totales entre 48 y se expresa en números enteros. La proporción entre horas con el profesor y trabajo independiente la define la institución.`,
    },
    { t: "h3", text: "Modalidad, requisitos y metadatos" },
    {
      t: "p",
      html: `La <a href="${UE}">recomendación europea sobre microcredenciales</a> sirve como lista de chequeo, aunque no rija en Colombia. Sus 11 elementos obligatorios incluyen, además de los ya vistos, la forma de participación (presencial, virtual o mixta), el tipo de evaluación y el tipo de aseguramiento de la calidad. Entre los opcionales están los requisitos previos y las opciones de apilamiento. Todo eso viaja como metadato en la insignia, que con <a href="${OB3}">Open Badges 3.0</a> se firma como credencial verificable.`,
    },
    { t: "h2", text: "Ejemplo completo: microcredencial en selección de personal por competencias", id: "ejemplo" },
    {
      t: "p",
      html: `El ejemplo es ilustrativo. Lo armamos para mostrar cómo se llena la plantilla, con una ocupación real de la CUOC: la 24231, Profesionales de talento humano, cuya <a href="${OCUPACOL}">ficha en Ocupacol</a> incluye los procesos de atracción, evaluación, selección y contratación de personal.`,
    },
    {
      t: "table",
      head: ["Campo", "Contenido"],
      rows: [
        ["Nombre", "Selección de personal por competencias"],
        ["Ocupación de referencia", "CUOC 24231 Profesionales de talento humano"],
        ["Necesidad", "Equipos de talento humano que entrevistan sin criterios comunes y no pueden justificar sus decisiones de contratación"],
        ["Competencia", "Seleccionar personal mediante entrevistas estructuradas por competencias, con criterios de evaluación definidos para el cargo"],
        ["Nivel de referencia", "MNC 6, propuesto por la institución con los descriptores de nivel"],
        ["Carga horaria", "48 horas de trabajo del estudiante (1 crédito): 16 con acompañamiento docente y 32 de trabajo independiente"],
        ["Modalidad", "Virtual con una sesión sincrónica de práctica"],
        ["Requisito previo", "Experiencia en procesos de talento humano o formación en el área"],
        ["Apilamiento", "Primera pieza de una ruta de gestión del talento. Homologable en un curso de selección de un programa receptor"],
      ],
      caption: "Ficha de la microcredencial. Ejemplo ilustrativo de merahki.ai.",
    },
    {
      t: "table",
      head: ["Tipo", "Resultado de aprendizaje", "Evidencia", "Criterio de la rúbrica (nivel suficiente)"],
      rows: [
        ["Saber", "Explica los tipos de entrevista y los sesgos más comunes del evaluador", "Cuestionario de casos cortos", "Identifica el sesgo en al menos cuatro de cinco casos y explica cómo evitarlo"],
        ["Hacer", "Formula preguntas de evento conductual alineadas a las competencias del perfil del cargo", "Guía de entrevista para un cargo real", "Cada competencia del perfil tiene al menos dos preguntas de evento conductual"],
        ["Hacer", "Califica las respuestas con una escala de comportamientos observables", "Entrevista simulada grabada", "Las calificaciones coinciden con las del evaluador experto en al menos un punto de la escala"],
        ["Hacer", "Redacta una recomendación de selección sustentada en la evidencia de la entrevista", "Informe de selección", "La recomendación cita comportamientos observados y no impresiones generales"],
        ["Ser", "Actúa con trato equitativo y confidencialidad durante el proceso", "Entrevista simulada e informe", "No hay preguntas discriminatorias y el informe protege los datos del candidato"],
      ],
      caption: "Resultados, evidencias y rúbrica. La rúbrica completa tiene cuatro niveles: insuficiente, en desarrollo, suficiente y destacado.",
    },
    {
      t: "table",
      head: ["Metadato de la insignia", "Valor"],
      rows: [
        ["Título", "Selección de personal por competencias"],
        ["Emisor", "La universidad o la empresa que dicta y evalúa"],
        ["Descripción y criterios", "La competencia, los cinco resultados y el criterio de aprobación: nivel suficiente en todos los criterios"],
        ["Carga de trabajo y nivel", "48 horas, 1 crédito, MNC 6 de referencia"],
        ["Tipo de evaluación", "Evaluación de desempeño con entrevista simulada e informe, calificada con rúbrica"],
        ["Forma de participación", "Virtual"],
        ["Evidencia", "Enlace al informe de selección, si el titular decide hacerlo público"],
        ["Verificación", "Enlace público de verificación"],
      ],
      caption: "Metadatos de la credencial, alineados con los elementos de la recomendación europea y con Open Badges 3.0.",
    },
    {
      t: "callout",
      title: "Cómo revisar el diseño antes de aprobarlo",
      html: `El <a href="${COURSERA}">informe de Coursera de 2026</a> propone tres preguntas para juzgar una microcredencial: si la credencial pesa para quien la recibe, si produce una prueba observable de la habilidad aplicada y si mejora los indicadores que le importan a la organización. Si el diseño no responde las tres, todavía no está listo.`,
    },
    { t: "h2", text: "Cómo se aprueba internamente una microcredencial", id: "aprobacion" },
    {
      t: "p",
      html: `Cada universidad tiene su propia ruta, que depende de su reglamento. Lo que no puede faltar es que alguien con autoridad académica apruebe el diseño y que exista un procedimiento escrito para emitir. Un orden que funciona:`,
    },
    {
      t: "ol",
      items: [
        "El equipo de diseño presenta la ficha, la matriz de resultados y evidencias y la rúbrica.",
        "Un par académico o un representante del sector revisa la pertinencia de la competencia.",
        "La instancia académica que corresponda aprueba el diseño y, si aplica, la regla de homologación.",
        "Se deja escrito quién valida cada emisión, quién la aprueba, quién la emite y quién custodia el registro.",
      ],
    },
    {
      t: "p",
      html: `La Universidad Santo Tomás, seccional Tunja, resolvió ese último punto con un instructivo de cuatro pasos y cuatro responsables distintos, según el <a href="${POK_SANTOTO}">caso documentado por POK</a>. Esa separación de funciones es la que permite emitir en volumen sin perder trazabilidad. En las empresas la ruta es más corta, pero la lógica es la misma: el área de formación diseña, el área dueña de la competencia valida y alguien responde por la emisión.`,
    },
    { t: "h2", text: "Cómo se vuelve una credencial verificable", id: "emision" },
    {
      t: "p",
      html: `Cuando la persona alcanza el nivel suficiente en todos los criterios, el LMS registra la aprobación y la credencial se emite. En merahki.ai la emisión la hace POK, la infraestructura de credenciales verificables y Skills Intelligence con la que trabajamos, en Open Badges 3.0 y W3C Verifiable Credentials. La persona la recibe, la acepta y la comparte, y cualquier empleador la verifica con un enlace público.`,
    },
    {
      t: "p",
      html: `El momento de emisión cambia los resultados. POK publicó datos de tres programas en Brasil: los envíos masivos a egresados tuvieron cerca de 20 % de aceptación, y un programa de formación docente que emitió con los participantes todavía activos llegó al 68 % (<a href="${POK_ACEPTACION}">POK, 2026</a>). Por eso el diseño incluye el cierre: la credencial llega en el momento del logro, con instrucciones para aceptarla y compartirla. Después medimos el recorrido completo, de la inscripción a la transferencia al trabajo, con el modelo Kirkpatrick.`,
    },
    {
      t: "cta",
      html: `merahki.ai diseña microcredenciales por competencias con la CUOC y el MNC, las produce, las opera en el LMS y las emite con POK. Si quieres certificar una competencia de tu equipo o de tu oferta de educación continua, te enviamos una propuesta a la medida.`,
    },
    {
      t: "p",
      html: `Más sobre el método en nuestra <a href="/es/methodology">metodología de diseño instruccional</a> y sobre la emisión en <a href="/es/certification">certificación con credenciales verificables</a>. Si eres una empresa, revisa <a href="/es/training-certification">capacitación y certificación para empresas</a>. Para el panorama completo, lee la <a href="/es/blog/microcredenciales-que-son-como-disenarlas">guía de microcredenciales</a>, y para la equivalencia en créditos, <a href="/es/blog/homologacion-de-microcredenciales-creditos-academicos">homologación de microcredenciales</a>.`,
    },
  ],
  faq: [
    {
      q: "¿Cómo hacer una microcredencial?",
      a: "Se define la ocupación y la competencia, se escriben los resultados de aprendizaje de saber, hacer y ser, se diseña una evidencia para cada resultado y una rúbrica, se fijan el nivel y las horas, y al final se diseña el contenido. La credencial se emite cuando la persona alcanza el nivel suficiente en la rúbrica.",
    },
    {
      q: "¿Quién puede emitir una microcredencial?",
      a: "Cualquier institución en la que otros confíen: universidades, instituciones de educación para el trabajo, empresas, gremios o entidades públicas. Su valor depende de la calidad de la evaluación y de que se pueda verificar en línea.",
    },
    {
      q: "¿Quién valida las microcredenciales?",
      a: "La valida la institución que la emite, con la instancia académica que aprueba el diseño y el procedimiento de emisión. Cualquier tercero puede verificarla con su enlace público. Si se va a homologar, el programa receptor decide si la reconoce en créditos.",
    },
    {
      q: "¿Cuántas horas debe tener una microcredencial?",
      a: "Las que necesite la competencia para que la persona alcance los resultados y produzca la evidencia. Si se va a homologar en Colombia, conviene que las horas sumen créditos completos de 48 horas, porque los créditos de una actividad académica se expresan en números enteros.",
    },
    {
      q: "¿Qué debe llevar la insignia de una microcredencial?",
      a: "Como mínimo el título, el emisor, la descripción de la competencia y los criterios, los resultados de aprendizaje, la carga de trabajo, el nivel, el tipo de evaluación, la fecha y un enlace de verificación. La recomendación europea de 2022 es una buena lista de chequeo.",
    },
  ],
  sources: [
    { title: "Micro-Credentials Impact Report 2026", publisher: "Coursera", url: COURSERA, date: "2026", note: "pp. 12-13: preferencia por microcredenciales basadas en proyectos, valor de la co-creación con la industria y marco de evaluación." },
    { title: "Recomendación del Consejo relativa a un enfoque europeo de las microcredenciales (2022/C 243/02), anexo I", publisher: "Consejo de la Unión Europea (EUR-Lex)", url: UE, date: "2022-06-16" },
    { title: "Decreto 1330 de 2019, artículos 2.5.3.2.4.1 a 2.5.3.2.4.3", publisher: "Función Pública, Gestor Normativo", url: D1330, date: "2019-07-25" },
    { title: "Marco Nacional de Cualificaciones: definición y glosario", publisher: "Ministerio de Educación Nacional", url: MNC },
    { title: "Marco Nacional de Cualificaciones: estructura y descriptores de nivel", publisher: "Ministerio de Educación Nacional", url: MNC_NIVELES },
    { title: "Perfil ocupacional 24231 Profesionales de talento humano", publisher: "Ocupacol, Ministerio del Trabajo", url: OCUPACOL },
    { title: "Open Badges", publisher: "1EdTech", url: OB3 },
    { title: "Towards a common definition of micro-credentials (definición en el glosario TVETipedia)", publisher: "UNESCO / UNESCO-UNEVOC", url: UNEVOC, date: "2022" },
    { title: "Cómo implementar microcredenciales en una universidad paso a paso", publisher: "POK", url: POK_IMPLEMENTAR, date: "2026-05-07" },
    { title: "Microcredenciales homologables: cómo la Universidad Santo Tomás Seccional Tunja construyó SantotoUP", publisher: "POK", url: POK_SANTOTO, date: "2026-08-13", note: "Caso documentado por POK." },
    { title: "Tasa de aceptación de credenciales digitales: qué esperar de tus egresados y cómo aumentarla", publisher: "POK", url: POK_ACEPTACION, date: "2026-10-20", note: "Datos de tres programas en Brasil." },
  ],
  related: [
    "microcredenciales-que-son-como-disenarlas",
    "homologacion-de-microcredenciales-creditos-academicos",
    "diferencia-microcredencial-diplomado-certificado",
    "diseno-instruccional-por-competencias",
    "marco-nacional-de-cualificaciones-diseno-curricular",
    "cuoc-clasificacion-ocupaciones-programas-formacion",
  ],
};
