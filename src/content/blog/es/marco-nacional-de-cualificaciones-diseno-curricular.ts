import type { Articulo } from "../types";

const PORTAL_DEF = "https://especiales.colombiaaprende.edu.co/mnc/definicion.html";
const PORTAL_EST = "https://especiales.colombiaaprende.edu.co/mnc/estructura.html";
const PORTAL_CAT = "https://especiales.colombiaaprende.edu.co/mnc/catalogo.html";
const GUIA_MEN = "https://snies.mineducacion.gov.co/1778/articles-400474_recurso_41.pdf";
const MEN_2025 = "https://www.mineducacion.gov.co/1780/articles-424601_recurso_01.pdf";
const DANE_CUOC =
  "https://www.dane.gov.co/index.php/sistema-estadistico-nacional-sen/normas-y-estandares/nomenclaturas-y-clasificaciones/clasificaciones/clasificacion-unica-de-ocupaciones-para-colombia-cuoc";

export const articulo: Articulo = {
  slug: "marco-nacional-de-cualificaciones-diseno-curricular",
  lang: "es",
  title:
    "Marco Nacional de Cualificaciones de Colombia: qué es, cómo se leen sus ocho niveles y cómo lo usan universidades y empresas para diseñar programas y microcredenciales",
  seoTitle: "Marco Nacional de Cualificaciones y diseño curricular",
  description:
    "Qué es el Marco Nacional de Cualificaciones (MNC), cómo se leen sus 8 niveles y el catálogo, y cómo usar una cualificación para diseñar un programa.",
  kicker: "Marcos de Colombia",
  keywords: [
    "marco nacional de cualificaciones",
    "MNC Colombia",
    "catálogo nacional de cualificaciones",
    "diseño curricular marco nacional de cualificaciones",
    "niveles del MNC",
    "diseño curricular por competencias",
    "cualificaciones Colombia",
  ],
  published: "2026-11-24",
  readingMinutes: 9,
  summary: [
    "El <strong>Marco Nacional de Cualificaciones (MNC)</strong> clasifica las cualificaciones de Colombia en ocho niveles, descritos por conocimientos, destrezas y actitudes. Lo dirigen el Ministerio de Educación y el Ministerio del Trabajo.",
    "El catálogo de cualificaciones se descarga por sector en el portal del MNC del Ministerio de Educación. Para la educación formal es un referente, y para la formación para el trabajo y el reconocimiento de aprendizajes previos es obligatorio.",
    "La guía del MEN de 2021 propone cuatro momentos para diseñar un programa con una cualificación: aproximación al MNC, valoración institucional, revisión de pertinencia y diseño curricular.",
    "Los resultados de aprendizaje de la cualificación no se fragmentan. En los niveles 6 a 8 la institución define los criterios de evaluación.",
    "Una microcredencial se puede diseñar sobre una competencia completa de una cualificación. El MEN no tiene una definición oficial de microcredencial, así que esa alineación es una decisión de diseño de la institución.",
  ],
  body: [
    {
      t: "p",
      html: "El <strong>Marco Nacional de Cualificaciones (MNC)</strong> es el instrumento con el que Colombia ordena las cualificaciones en ocho niveles, descritos en conocimientos, destrezas y actitudes, para que la educación formal, la formación para el trabajo y el reconocimiento de aprendizajes previos usen un mismo referente. Lo dirigen el Ministerio de Educación Nacional y el Ministerio del Trabajo.",
    },
    {
      t: "p",
      html: "Esta guía es para vicerrectorías, unidades de educación continua, instituciones de educación para el trabajo y áreas de formación de empresas. Explica cómo se leen los niveles, qué trae el catálogo, qué pide la guía del MEN y cómo pasar de una cualificación a una microcredencial con un ejemplo real.",
    },
    { t: "h2", text: "Qué es el Marco Nacional de Cualificaciones y quién lo dirige" },
    {
      t: "p",
      html: `El MNC es un componente del Sistema Nacional de Cualificaciones (SNC). Según el <a href="${PORTAL_DEF}">portal del MNC del Ministerio de Educación</a>, clasifica las cualificaciones en ocho niveles ordenados por la secuencia y la complejidad de los aprendizajes, y aplica al estudio, al trabajo o a ambos.`,
    },
    {
      t: "p",
      html: `Un <a href="${MEN_2025}">documento del MEN de mayo de 2025</a> resume la base legal. El SNC lo creó el artículo 194 de la Ley 1955 de 2019 y lo modificó el artículo 81 de la Ley 2294 de 2023. El Decreto 1649 de 2021 adoptó y reglamentó el MNC. Mientras no exista una institucionalidad permanente, el MEN y el Ministerio del Trabajo son sus rectores, con un Comité Ejecutivo y un Comité Técnico de Cualificaciones.`,
    },
    { t: "p", html: "El portal le asigna tres rasgos:" },
    {
      t: "ul",
      items: [
        "<strong>Inclusivo:</strong> cubre todas las ocupaciones, los sectores económicos y los subsistemas de educación y formación.",
        "<strong>Flexible:</strong> parte de principios generales y admite diferencias entre sectores cuando hacen falta.",
        "<strong>No abarcativo:</strong> sirve de referente para el diseño curricular, pero no fija la organización, los objetivos ni los contenidos de la formación.",
      ],
    },
    {
      t: "p",
      html: "El tercer rasgo es el que más se malinterpreta. El MNC no entrega un plan de estudios. Entrega un lenguaje común para decir qué sabe hacer una persona y en qué nivel.",
    },
    { t: "h2", text: "Los ocho niveles del MNC y cómo se leen" },
    {
      t: "p",
      html: `Cada nivel tiene tres descriptores: conocimientos, destrezas y actitudes, que se leen como autonomía y responsabilidad. La matriz completa está en el Decreto 1649 de 2021 y en la <a href="${GUIA_MEN}">guía metodológica del MEN</a>. La tabla resume lo que cambia de un nivel al siguiente.`,
    },
    {
      t: "table",
      head: ["Nivel", "Conocimientos", "Destrezas", "Autonomía y responsabilidad"],
      rows: [
        ["1", "Hechos elementales", "Tareas simples y repetitivas con instrucciones detalladas", "Bajo supervisión directa"],
        ["2", "Teóricos y de hechos, básicos", "Actividades rutinarias y problemas sencillos en contextos conocidos", "Con supervisión moderada"],
        ["3", "Generales: conceptos, técnicas y procedimientos", "Aplica técnicas y opera equipos en contextos conocidos", "Autónomo en lo asignado, con supervisión de resultados"],
        ["4", "Para interpretar y desarrollar procedimientos y técnicas", "Selecciona y aplica procedimientos en actividades rutinarias y no rutinarias", "Supervisa el trabajo rutinario de otros"],
        ["5", "Teóricos, prácticos y tecnológicos específicos", "Aplica métodos especializados y coordina procesos", "Supervisa a otros y responde por recursos físicos y tecnológicos"],
        ["6", "Amplios e integrados de un campo", "Define y gestiona proyectos y procesos, diseña o mejora procesos", "Decide sobre talento y recursos, orienta y evalúa equipos"],
        ["7", "Avanzados, para investigar o dirigir áreas", "Formula soluciones innovadoras a problemas complejos en contextos impredecibles", "Responde por proyectos estratégicos, recursos y grupos"],
        ["8", "En la frontera de un campo", "Crea o redefine conocimientos y metodologías", "Toma decisiones estratégicas con efecto social, económico y cultural"],
      ],
      caption: "Resumen propio de la matriz del Decreto 1649 de 2021.",
    },
    {
      t: "p",
      html: "Para ubicar un resultado de aprendizaje en un nivel, mira tres señales: qué tan predecible es el contexto, qué hace la persona (ejecuta, aplica, gestiona, formula o crea) y por quién responde. En el catálogo se ve la relación con la oferta: hay cualificaciones de nivel 5 que conducen a títulos de tecnólogo, de nivel 6 que conducen a profesional universitario o especialización universitaria y de nivel 7 que conducen a maestría.",
    },
    {
      t: "callout",
      title: "El nivel del MNC no es el nivel de competencia de la CUOC",
      html: `La <a href="${DANE_CUOC}">CUOC</a> ubica cada ocupación en un nivel de competencia de 1 a 4, con la escala internacional de la OIT. El MNC usa ocho niveles. La ocupación 22640 Fisioterapeutas tiene nivel de competencia 4 en la CUOC, y sus cualificaciones en el catálogo son de niveles 6 y 7 del MNC. Las dos escalas no se traducen una a una.`,
    },
    { t: "h2", text: "Las tres vías de cualificación y qué papel juega el catálogo en cada una" },
    {
      t: "p",
      html: "El MNC reconoce tres caminos para que una persona obtenga una cualificación. La guía del MEN dice qué papel tiene el Catálogo Nacional de Cualificaciones en cada uno:",
    },
    {
      t: "table",
      head: ["Vía", "Qué es", "Papel del catálogo"],
      rows: [
        ["Educativa", "Los programas de las instituciones de educación, incluida la superior", "Referente para el diseño curricular, sin perjuicio de la autonomía de las instituciones de educación superior"],
        ["Formación para el trabajo", "El Subsistema de Formación para el Trabajo", "Referente obligatorio para diseñar sus programas"],
        ["Reconocimiento de aprendizajes previos", "Evaluación y certificación de lo aprendido en el trabajo, la comunidad o la vida diaria", "Referente obligatorio. Lo reglamenta el Ministerio del Trabajo"],
      ],
    },
    {
      t: "p",
      html: "Para una universidad, alinearse al catálogo es una decisión de diseño. Si dices que tu programa está alineado, tienes que poder mostrar con qué cualificación y con qué resultados de aprendizaje.",
    },
    { t: "h2", text: "Cualificación, catálogo y área de cualificación: qué es cada cosa" },
    {
      t: "table",
      head: ["Término", "Qué es"],
      rows: [
        ["Cualificación", "La descripción oficial de lo que una persona debe saber hacer en un campo, ubicada en un nivel y un área del MNC. Cada una tiene un código, por ejemplo 7-SABI-FIS-22640-E-015."],
        ["Catálogo Nacional de Cualificaciones", "Reúne los catálogos sectoriales que relacionan, ordenan y describen las cualificaciones según los niveles y descriptores del MNC."],
        ["Área de cualificación", "Agrupa ocupaciones con afinidad en competencias y actividades económicas afines. La página del catálogo lista 26 áreas."],
        ["Competencia", "Para el MEN, la capacidad demostrada de poner en acción conocimientos, habilidades, destrezas y actitudes. Se evidencia con el logro de resultados de aprendizaje."],
        ["Resultado de aprendizaje", "Lo que la persona demuestra al terminar. En las cualificaciones se redacta con un verbo, un objeto y una condición."],
      ],
    },
    { t: "p", html: "Según la guía del MEN, toda cualificación sigue un modelo estándar de cuatro componentes:" },
    {
      t: "ol",
      items: [
        "<strong>Identificación:</strong> denominación, código, nivel, área, duración y a qué título o certificado conduce.",
        "<strong>Perfil de competencias:</strong> competencia general, ámbito productivo, ocupaciones relacionadas y competencias específicas con sus elementos y criterios de desempeño.",
        "<strong>Referentes para la educación y la formación:</strong> los resultados de aprendizaje de cada competencia y, en los niveles 1 a 5, sus criterios de evaluación.",
        "<strong>Parámetros de calidad:</strong> perfil de docentes, ambientes de aprendizaje y requisitos de ingreso.",
      ],
    },
    { t: "h2", text: "Dónde encontrar el catálogo de cualificaciones" },
    {
      t: "p",
      html: `El catálogo se publica en la <a href="${PORTAL_CAT}">página del Catálogo Nacional de Cualificaciones</a>, dentro del portal del MNC del Ministerio de Educación. Mucha gente lo busca como «catálogo del Ministerio del Trabajo» porque los dos ministerios dirigen el marco, pero los catálogos sectoriales se descargan desde ese portal. Según el sector, cada bloque trae:`,
    },
    {
      t: "ul",
      items: [
        "La caracterización del sector, el análisis de brechas de capital humano y los insumos clave.",
        "Las cualificaciones, en un archivo comprimido con un PDF por cualificación.",
        "Una cartilla del sector y, en algunos casos, un tablero de datos en Power BI.",
      ],
    },
    {
      t: "p",
      html: "Revisa si tu área ya tiene cualificaciones publicadas, porque el avance no es igual en todas. Las cualificaciones más antiguas citan las clasificaciones de ocupaciones anteriores (CIUO-08 y CNO) y las más recientes citan la CUOC.",
    },
    { t: "h2", text: "Cómo usar una cualificación como referente curricular: los cuatro momentos de la guía del MEN" },
    {
      t: "p",
      html: `La <a href="${GUIA_MEN}"><em>Guía de orientaciones metodológicas para el diseño de programas de educación superior basados en catálogos sectoriales de cualificación del MNC</em></a> (MEN, agosto de 2021) propone una ruta de cuatro momentos:`,
    },
    {
      t: "ol",
      items: [
        "<strong>Aproximación al MNC.</strong> Entender el marco y el modelo estándar, consultar el catálogo y preseleccionar cualificaciones.",
        "<strong>Valoración institucional.</strong> Revisar las capacidades de la institución para alinearse.",
        "<strong>Revisión de pertinencia.</strong> Identificar las necesidades del entorno, valorar la oferta actual y proyectada, revisar la cadena de formación y elegir la cualificación base.",
        "<strong>Diseño curricular.</strong> Definir el perfil, identificar los resultados de aprendizaje que vienen de la cualificación, organizar el mapa de competencias, armar la malla, desarrollar los contenidos y definir la evaluación y el reporte de resultados.",
      ],
    },
    {
      t: "p",
      html: "Dos reglas de la guía cambian la forma de diseñar. Los resultados de aprendizaje deben ser los de la cualificación y nunca se fragmentan, aunque pueden repartirse en unidades curriculares distintas. Y las cualificaciones de niveles 6 a 8 solo traen resultados de aprendizaje, así que la institución redacta sus criterios de evaluación.",
    },
    {
      t: "cta",
      html: "merahki diseña programas y microcredenciales por competencias con el MNC y la CUOC como referentes.",
    },
    { t: "h2", text: "MNC, CUOC y CINE: cómo se conectan" },
    {
      t: "p",
      html: `La <a href="${DANE_CUOC}">CUOC</a>, que mantiene el DANE, dice qué ocupaciones existen y qué hace cada una. El MNC dice qué cualificación prepara para ellas y en qué nivel. La CINE, de la UNESCO adaptada para Colombia, ubica la oferta en niveles educativos comparables entre países.`,
    },
    {
      t: "p",
      html: `El puente entre la CUOC y el MNC está en los datos. Cada perfil de la CUOC trae un campo de área de cualificación del MNC, y cada cualificación del catálogo trae sus ocupaciones relacionadas. La página de <a href="${PORTAL_EST}">estructura del MNC</a> muestra cómo se corresponden el sistema educativo, la CINE, las ocupaciones y los descriptores.`,
    },
    {
      t: "p",
      html: "Si debes comparar tu programa con el Marco Europeo de Cualificaciones, ten presente que no encontramos una referenciación oficial publicada del MNC con ese marco. Una equivalencia nivel a nivel es una lectura propia.",
    },
    { t: "h2", text: "Ejemplo: de una cualificación del catálogo a una microcredencial" },
    {
      t: "p",
      html: `El catálogo de Salud y bienestar (SABI) incluye la cualificación <strong>7-SABI-FIS-22640-E-015, Fisioterapia en seguridad y salud en el trabajo y ergonomía</strong>: nivel 7, conduce a maestría y se relaciona con la ocupación CUOC 22640 Fisioterapeutas. Una de sus competencias es gestionar programas de intervención centrados en el movimiento corporal y el funcionamiento humano en el entorno laboral, con cuatro elementos de competencia, tres resultados de aprendizaje y 2 créditos sugeridos.`,
    },
    { t: "p", html: "Una facultad o una sociedad científica podría diseñar una microcredencial sobre esa competencia así:" },
    {
      t: "ol",
      items: [
        "Tomar la competencia completa como unidad y conservar sus tres resultados de aprendizaje tal como están.",
        "Definir las evidencias a partir de las que sugiere el catálogo: un programa de intervención diseñado e implementado, el material educativo para los trabajadores y un informe que evalúe los resultados.",
        "Redactar los criterios de evaluación, porque en el nivel 7 la cualificación no los trae.",
        "Registrar en la ficha de la credencial el código de la cualificación, el nivel del MNC, el área y la ocupación CUOC, para que quien la verifique sepa a qué responde.",
        "Diseñar las demás competencias como microcredenciales hermanas, de modo que la suma forme una ruta hacia el programa completo.",
      ],
    },
    {
      t: "p",
      html: "Una advertencia. El MNC habla de cualificaciones, no de microcredenciales, y no encontramos una definición oficial del MEN sobre microcredenciales. Usar los resultados de aprendizaje de una cualificación es una decisión defendible de la institución, pero no equivale a que el MEN haya aprobado la credencial.",
    },
    { t: "h2", text: "Errores comunes al alinear un programa al MNC" },
    {
      t: "ul",
      items: [
        "<strong>Decir «alineado al MNC» sin nombrar la cualificación.</strong> La alineación se demuestra con el código y los resultados de aprendizaje.",
        "<strong>Fijar el nivel por la duración.</strong> El nivel lo dan los descriptores: contexto, tipo de acción y responsabilidad.",
        "<strong>Partir un resultado de aprendizaje</strong> para que quepa en un módulo. La guía del MEN lo prohíbe.",
        "<strong>Confundir el nivel de competencia de la CUOC (1 a 4) con el nivel del MNC (1 a 8).</strong>",
        "<strong>Saltarse la revisión de pertinencia.</strong> Que la cualificación exista no prueba que tu entorno la necesite.",
      ],
    },
    { t: "h2", text: "Cómo trabaja merahki la alineación con el MNC y la CUOC" },
    {
      t: "p",
      html: `merahki mantiene una base de consulta con los perfiles de la CUOC y las cualificaciones publicadas en el catálogo. Con ella ubica cada programa frente a una ocupación, una cualificación y un nivel, y revisa qué cubre cada resultado de aprendizaje. Ese análisis entra a nuestra <a href="/es/methodology">metodología de diseño por competencias</a>, a las <a href="/es/lifelong-learning">rutas de educación continua para universidades</a> y a la ficha de cada <a href="/es/certification">credencial verificable</a> que emite POK con Open Badges 3.0. La base propone y el diseñador decide.`,
    },
    { t: "cta" },
  ],
  faq: [
    {
      q: "¿Qué es el Marco Nacional de Cualificaciones?",
      a: "Es el instrumento del Sistema Nacional de Cualificaciones que clasifica las cualificaciones de Colombia en ocho niveles, descritos por conocimientos, destrezas y actitudes. Lo adoptó el Decreto 1649 de 2021 y lo dirigen el Ministerio de Educación y el Ministerio del Trabajo.",
    },
    {
      q: "¿Dónde puedo encontrar el catálogo de cualificaciones?",
      a: `En la <a href="${PORTAL_CAT}">página del Catálogo Nacional de Cualificaciones</a> del portal del MNC del Ministerio de Educación. Cada sector publica su caracterización, sus brechas de capital humano, los insumos clave y las cualificaciones en archivos descargables.`,
    },
    {
      q: "¿Una universidad está obligada a usar el catálogo del MNC?",
      a: "No. Para la vía educativa el catálogo es un referente y la guía del MEN respeta la autonomía curricular de las instituciones de educación superior. Es obligatorio para la formación para el trabajo y para el reconocimiento de aprendizajes previos.",
    },
    {
      q: "¿Qué debe tener un diseño curricular basado en una cualificación?",
      a: "El perfil de egreso, los resultados de aprendizaje que vienen de la cualificación sin fragmentar, el mapa de competencias, la malla, los contenidos y la estrategia de evaluación. En los niveles 6 a 8 la institución redacta los criterios de evaluación porque la cualificación no los trae.",
    },
    {
      q: "¿Cuál es la diferencia entre el MNC y la CUOC?",
      a: "La CUOC clasifica ocupaciones del mercado laboral y la mantiene el DANE. El MNC clasifica cualificaciones en ocho niveles y lo dirigen el MEN y el Ministerio del Trabajo. Se conectan porque cada ocupación de la CUOC tiene un área de cualificación y cada cualificación nombra sus ocupaciones relacionadas.",
    },
    {
      q: "¿Una microcredencial puede estar alineada al MNC?",
      a: "Puede diseñarse con los resultados de aprendizaje de una competencia de una cualificación y declarar su nivel y su área. El MNC no regula microcredenciales y no encontramos una definición oficial del MEN, así que esa alineación es una decisión de diseño de la institución y se presenta como tal.",
    },
  ],
  sources: [
    { title: "Definición del Marco Nacional de Cualificaciones", publisher: "Ministerio de Educación Nacional (portal MNC, Colombia Aprende)", url: PORTAL_DEF, note: "Consultado el 24-nov-2026" },
    { title: "Estructura y arquitectura del MNC", publisher: "Ministerio de Educación Nacional (portal MNC, Colombia Aprende)", url: PORTAL_EST, note: "Consultado el 24-nov-2026" },
    { title: "Catálogo Nacional de Cualificaciones", publisher: "Ministerio de Educación Nacional (portal MNC, Colombia Aprende)", url: PORTAL_CAT, note: "Incluye el catálogo de Salud y bienestar (SABI) del ejemplo" },
    {
      title: "Guía de orientaciones metodológicas para el diseño de programas de educación superior basados en catálogos sectoriales de cualificación del MNC",
      publisher: "Ministerio de Educación Nacional",
      url: GUIA_MEN,
      date: "2021-08",
    },
    {
      title: "Convocatoria pública: representantes de las IETDH ante el Comité Ejecutivo y el Comité Técnico del MNC",
      publisher: "Ministerio de Educación Nacional, Viceministerio de Educación Superior",
      url: MEN_2025,
      date: "2025-05",
      note: "Resume la base legal: Ley 1955 de 2019, Ley 2294 de 2023, Decreto 1649 de 2021 y Resolución 0610 de 2022",
    },
    { title: "Clasificación Única de Ocupaciones para Colombia (CUOC)", publisher: "DANE", url: DANE_CUOC, note: "Consultado el 24-nov-2026" },
  ],
  related: [
    "cuoc-clasificacion-ocupaciones-programas-formacion",
    "diseno-instruccional-por-competencias",
    "como-disenar-una-microcredencial",
    "homologacion-de-microcredenciales-creditos-academicos",
  ],
};
