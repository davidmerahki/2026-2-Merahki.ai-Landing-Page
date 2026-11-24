import type { Articulo } from "../types";

const POK_SANTOTO = "https://www.pok.tech/blog/es/posts/microcredenciales-homologables-universidad-santo-tomas-santotoup";
const LANZAMIENTO = "https://santotostereo.co/gran-lanzamiento-de-santotoup-credenciales-que-summan/";
const D1330 = "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=98270";
const EMEF = "https://especiales.colombiaaprende.edu.co/mnc/movilidad.html";
const MNC = "https://especiales.colombiaaprende.edu.co/mnc/definicion.html";
const MNC_NIVELES = "https://especiales.colombiaaprende.edu.co/mnc/estructura.html";
const COURSERA = "https://assets.ctfassets.net/2pudprfttvy6/3P06Oe48cjFLCwxNo45yEB/53de4a32ceb2d09f553bb3d32dc17d84/Micro-Credentials_Impact_Report_2026.pdf";
const UE = "https://eur-lex.europa.eu/legal-content/ES/ALL/?uri=CELEX:32022H0627(02)";
const OCDE = "https://www.fisme.science.uu.nl/publicaties/literatuur/2023_oecd_micro_credentials.pdf";

export const articulo: Articulo = {
  slug: "homologacion-de-microcredenciales-creditos-academicos",
  lang: "es",
  title: "Homologación de microcredenciales en créditos académicos: cómo una universidad colombiana diseña la equivalencia para que la educación continua sume en pregrado y posgrado",
  seoTitle: "Homologación de microcredenciales en créditos académicos",
  description: "Cómo se homologa una microcredencial en créditos en Colombia: la regla de 48 horas del Decreto 1330, los resultados de aprendizaje y el caso SantotoUP.",
  kicker: "Homologación",
  keywords: [
    "homologación de microcredenciales",
    "microcredenciales homologables",
    "cuántos créditos vale una microcredencial",
    "microcredenciales apilables",
    "rutas de aprendizaje apilables",
    "créditos académicos Colombia",
  ],
  published: "2026-11-24",
  readingMinutes: 8,
  summary: [
    `Una microcredencial se homologa cuando una universidad la reconoce en créditos dentro de un programa formal. La decisión es académica y la toma la institución que la recibe, con sus propias reglas.`,
    `En Colombia, un crédito académico equivale a 48 horas en un periodo académico, y los créditos de cada actividad se expresan en números enteros (<a href="${D1330}">Decreto 1330 de 2019</a>).`,
    `Las horas no bastan. Para homologar, los resultados de aprendizaje de la microcredencial tienen que cubrir los del curso que reemplaza, con un nivel de exigencia equivalente.`,
    `La Universidad Santo Tomás, seccional Tunja, lo resolvió con tres niveles apilables, un instructivo de emisión y reglas de homologación aprobadas, según un <a href="${POK_SANTOTO}">caso documentado por POK</a>.`,
    `No encontramos una norma nacional específica para homologar microcredenciales. El MEN describe el Esquema de Movilidad Educativa y Formativa como un componente que sigue en construcción.`,
  ],
  body: [
    {
      t: "p",
      html: `La <strong>homologación de microcredenciales</strong> es el proceso por el cual una universidad reconoce una microcredencial como parte de un programa formal y le asigna créditos académicos. En Colombia la conversión parte de una regla fija: un crédito equivale a 48 horas de trabajo del estudiante. Lo demás lo decide cada institución: qué curso se reemplaza, qué resultados de aprendizaje deben coincidir y quién aprueba.`,
    },
    {
      t: "p",
      html: `Este artículo adapta y comenta el caso de la Universidad Santo Tomás, seccional Tunja, que POK publicó en agosto de 2026 en <a href="${POK_SANTOTO}">Microcredenciales homologables: cómo la Universidad Santo Tomás Seccional Tunja construyó SantotoUP</a>. Es un caso documentado por POK, no un proyecto de merahki.ai. Lo usamos para explicar a vicerrectorías y unidades de educación continua cómo se diseña la regla de equivalencia, con una plantilla de ruta apilable y el reparto de decisiones dentro de la universidad.`,
    },
    { t: "h2", text: "Por qué las universidades emiten microcredenciales pero no las reconocen", id: "problema" },
    {
      t: "p",
      html: `Emitir una insignia digital toma poco tiempo. Reconocerla en créditos toma mucho más, porque toca el reglamento estudiantil, a las facultades, al registro académico y a la instancia que aprueba los cambios curriculares. El artículo de POK lo plantea así: el valor de apilar microcredenciales depende de que exista una regla institucional que diga cuánto valen, y no de la tecnología con la que se emiten.`,
    },
    {
      t: "quote",
      text: "Hasta entonces es un certificado con mejor tecnología.",
      cite: "POK Team, sobre la microcredencial que todavía no vale créditos",
      href: POK_SANTOTO,
    },
    {
      t: "p",
      html: `Los estudiantes sí notan la diferencia. En el <a href="${COURSERA}">informe de impacto de las microcredenciales de Coursera (2026)</a>, el 74 % de los estudiantes encuestados en México buscaría microcredenciales con recomendación formal de crédito, frente al 20 % sin ella (p. 17). En la muestra global, el 76 % de los líderes de educación superior asocia las microcredenciales con crédito a una mayor retención de estudiantes (p. 13). Son percepciones de una encuesta de un proveedor y Colombia no está en la muestra, pero apuntan en la misma dirección que el caso.`,
    },
    { t: "h2", text: "Qué dice la norma colombiana sobre los créditos académicos", id: "norma" },
    {
      t: "p",
      html: `La regla de conversión está en el <a href="${D1330}">Decreto 1330 de 2019</a>, que reglamenta el registro calificado de los programas de educación superior. Tres artículos importan para homologar:`,
    },
    {
      t: "ul",
      items: [
        "<strong>Artículo 2.5.3.2.4.1.</strong> Define el crédito académico como la unidad de medida del trabajo académico del estudiante para alcanzar los resultados de aprendizaje. Un crédito equivale a 48 horas en un periodo académico, y la institución determina la proporción entre el acompañamiento directo del profesor y el trabajo independiente.",
        "<strong>Artículo 2.5.3.2.4.2.</strong> El número de créditos de una actividad resulta de dividir entre 48 el total de horas que el estudiante necesita, y siempre se expresa en números enteros.",
        "<strong>Artículo 2.5.3.2.4.3.</strong> La institución debe tener lineamientos que separen las horas de trabajo independiente de las de acompañamiento docente y que permitan evidenciar los resultados de aprendizaje y la movilidad de los estudiantes.",
      ],
    },
    {
      t: "p",
      html: `El decreto no menciona las microcredenciales ni la homologación. Tampoco encontramos una norma nacional específica sobre el tema. El Ministerio de Educación describe el <a href="${EMEF}">Esquema de Movilidad Educativa y Formativa</a> como el componente del Sistema Nacional de Cualificaciones que debe permitir el tránsito, el reconocimiento, la acumulación, la homologación y la equivalencia de aprendizajes, y aclara que sigue en construcción. El <a href="${MNC}">Marco Nacional de Cualificaciones</a>, por su parte, define el reconocimiento de aprendizajes previos como una vía de cualificación que reglamentará el Ministerio del Trabajo. Hoy la regla de homologación la escribe cada universidad dentro de su reglamento.`,
    },
    { t: "h2", text: "El caso SantotoUP en breve", id: "caso" },
    {
      t: "p",
      html: `La Universidad Santo Tomás, seccional Tunja, lanzó SantotoUP en público el 24 de noviembre de 2025, según la <a href="${LANZAMIENTO}">nota de lanzamiento de Santoto Stereo</a>. El caso que documentó POK describe estas piezas:`,
    },
    {
      t: "ul",
      items: [
        "<strong>Dos líneas separadas.</strong> Santoto Summa acredita actividades puntuales, como cursos, congresos y talleres, con una credencial por rol. SantotoUP acredita trayectorias académicas con niveles, acumulación y homologación.",
        "<strong>Tres niveles apilables.</strong> CITIUS de 4 a 48 horas, ALTIUS de 48 a 144 horas y FORTIUS de hasta 480 horas. Cada nivel se apoya en el anterior.",
        "<strong>Un simulador de homologación.</strong> El estudiante ve qué beneficio le da la credencial antes de inscribirse.",
        "<strong>Un instructivo.</strong> Un procedimiento institucional regula validación, aprobación, emisión, publicación, custodia y verificación, con cuatro pasos y cuatro responsables distintos.",
        "<strong>Credenciales con datos.</strong> Cada una muestra el titular, la competencia, el tipo, la fecha, la duración y un enlace público de verificación, en Open Badges 3.0.",
        "<strong>Una macrocredencial de regreso.</strong> La Amnistía 2026 permite a egresados no graduados volver y obtener el título completando una macrocredencial, algo que solo funciona porque las reglas de homologación ya estaban autorizadas.",
      ],
    },
    {
      t: "p",
      html: `POK reporta 2 líneas de acreditación, 9 rutas apilables y más de 800 credenciales emitidas. El propio artículo insiste en que pesa más la estructura que el volumen, y coincidimos: la regla de reconocimiento es lo difícil de copiar.`,
    },
    { t: "h2", text: "Cómo leer esos niveles en créditos", id: "creditos" },
    {
      t: "p",
      html: `Si se aplica la regla de 48 horas por crédito a los rangos de SantotoUP, los niveles quedan así. La lectura en créditos es de merahki.ai, no un dato del caso.`,
    },
    {
      t: "table",
      head: ["Nivel", "Horas (caso SantotoUP)", "Créditos con 48 h por crédito", "Lectura para el diseño"],
      rows: [
        ["CITIUS", "4 a 48", "Hasta 1", "Solo la parte alta del rango completa un crédito por sí sola"],
        ["ALTIUS", "48 a 144", "1 a 3", "Encaja con un curso disciplinar o una electiva"],
        ["FORTIUS", "Hasta 480", "Hasta 10", "Puede cubrir varios cursos o un componente del plan de estudios"],
      ],
      caption: "Lectura de merahki.ai con base en el artículo 2.5.3.2.4.1 del Decreto 1330 de 2019 y los rangos publicados por POK.",
    },
    {
      t: "p",
      html: `La regla de números enteros tiene una consecuencia práctica. Una microcredencial de 30 horas no completa un crédito sola. Para homologarla hay dos caminos: sumarla con otra para cubrir un curso, o diseñarla desde el principio con una carga que dé créditos completos.`,
    },
    { t: "h2", text: "Cómo se diseña la regla de equivalencia", id: "regla" },
    {
      t: "p",
      html: `En merahki.ai diseñamos la microcredencial homologable hacia atrás, desde el curso que va a reconocer. El orden es este:`,
    },
    {
      t: "ol",
      items: [
        "<strong>Elegir el programa y el curso receptor.</strong> Sin un curso concreto, la equivalencia se queda en la intención.",
        "<strong>Comparar resultados de aprendizaje.</strong> Se pone la matriz de resultados del curso al lado de la de la microcredencial. Cada resultado del curso tiene que estar cubierto por un resultado y una evidencia de la microcredencial.",
        "<strong>Verificar el nivel.</strong> Los <a href=\"" + MNC_NIVELES + "\">descriptores de nivel del MNC</a> ayudan a comprobar que la exigencia corresponde. Una evidencia que pide aplicar un procedimiento no cubre un curso que pide formular y desarrollar soluciones a problemas complejos.",
        "<strong>Cuadrar horas y créditos.</strong> Las horas de la microcredencial, con su reparto entre acompañamiento y trabajo independiente, se ajustan a los lineamientos de la institución y a créditos enteros.",
        "<strong>Fijar las condiciones.</strong> Calificación mínima, vigencia de la credencial para homologar, número máximo de créditos homologables por programa y tipo de verificación de identidad en la evaluación.",
        "<strong>Aprobar y publicar la regla.</strong> La instancia académica la aprueba y se le muestra al estudiante antes de inscribirse, como hace el simulador de SantotoUP.",
      ],
    },
    {
      t: "callout",
      title: "La equivalencia se diseña antes de producir el curso",
      html: `Si la regla de homologación se define después de producir la microcredencial, lo usual es descubrir que sus resultados no coinciden con los del curso receptor y que hay que rehacer evidencias. Definirla primero cuesta una reunión con la facultad y ahorra una segunda producción.`,
    },
    { t: "h2", text: "Plantilla de ruta apilable de tres niveles", id: "plantilla" },
    {
      t: "table",
      head: ["Nivel", "Qué acredita", "Horas y créditos", "Evidencia", "A qué suma"],
      rows: [
        ["1. Competencia", "Una competencia puntual de una ocupación", "48 horas, 1 crédito", "Un producto aplicado con rúbrica", "Una electiva o parte de un curso"],
        ["2. Bloque", "Dos o tres competencias relacionadas", "96 a 144 horas, 2 a 3 créditos", "Un proyecto integrador", "Un curso disciplinar del programa receptor"],
        ["3. Ruta completa", "El conjunto de bloques de un campo", "Según el componente que reemplaza", "Proyecto final con sustentación", "Un componente del plan de estudios o una macrocredencial"],
      ],
      caption: "Plantilla ilustrativa de merahki.ai. Las cargas finales las fija el diseño de cada competencia y la regla de la institución.",
    },
    {
      t: "p",
      html: `El apilamiento tiene respaldo en la evidencia. Uno de los estudios que recoge la <a href="${OCDE}">OCDE (2023)</a>, en Singapur, asoció completar la cualificación entera con un aumento salarial real de 5,8 %, frente a 0,8 % de quienes solo certificaron módulos sueltos. La <a href="${UE}">recomendación europea de 2022</a> incluye entre los datos de cada microcredencial sus opciones de integración o acumulabilidad, es decir, si es autónoma o si suma a otra credencial.`,
    },
    { t: "h2", text: "Quién decide qué dentro de la universidad", id: "quien-decide" },
    {
      t: "table",
      head: ["Instancia", "Qué decide"],
      rows: [
        ["Vicerrectoría académica", "La política: qué tipos de microcredenciales se pueden homologar, en qué programas y con qué topes"],
        ["Consejo académico o la instancia que fije el estatuto", "Aprueba la regla de homologación y sus condiciones"],
        ["Facultad y programa receptor", "Compara resultados de aprendizaje y define el curso equivalente"],
        ["Educación continua", "Diseña, produce y opera la ruta, y lleva los indicadores"],
        ["Registro académico o secretaría general", "Aplica la homologación en la historia académica y custodia el registro"],
      ],
      caption: "Reparto sugerido por merahki.ai. Cada universidad lo ajusta a su estatuto y a su reglamento.",
    },
    {
      t: "p",
      html: `El orden importa: primero la política, luego el diseño con la facultad, después la aprobación, un piloto con una cohorte y al final la publicación de la regla. Saltarse la política obliga a negociar cada homologación como un caso aparte.`,
    },
    { t: "h2", text: "Qué medir en una ruta homologable", id: "medicion" },
    {
      t: "p",
      html: `Una ruta homologable se mide por lo que logra en el estudiante y en la universidad. En merahki.ai seguimos estos indicadores, del enrollment al reporte: inscripciones por nivel, avance y aprobación, credenciales emitidas y aceptadas, solicitudes de homologación, créditos homologados y cuántas personas pasan de educación continua a un programa de pregrado o posgrado. El último es el que le muestra a la rectoría si la ruta funciona.`,
    },
    {
      t: "cta",
      html: `merahki.ai diseña rutas de microcredenciales homologables con la facultad receptora, las produce, las opera en el LMS y las emite con POK. Si tu universidad quiere que la educación continua sume créditos, te enviamos una propuesta a la medida.`,
    },
    {
      t: "p",
      html: `Conoce cómo trabajamos con unidades de educación continua en <a href="/es/lifelong-learning">Lifelong Learning para universidades</a> y cómo emitimos en <a href="/es/certification">certificación con credenciales verificables</a>. Para el diseño campo por campo, lee <a href="/es/blog/como-disenar-una-microcredencial">cómo diseñar una microcredencial</a>, y para el panorama completo, la <a href="/es/blog/microcredenciales-que-son-como-disenarlas">guía de microcredenciales</a>.`,
    },
  ],
  faq: [
    {
      q: "¿Cuántos créditos vale una microcredencial?",
      a: "Depende de sus horas de trabajo del estudiante y de la decisión del programa que la recibe. En Colombia, un crédito equivale a 48 horas y los créditos se expresan en números enteros, así que una microcredencial de 96 horas podría valer 2 créditos si sus resultados de aprendizaje cubren los del curso receptor.",
    },
    {
      q: "¿Se puede homologar una microcredencial en un posgrado?",
      a: "Sí, si el reglamento de la universidad lo permite y el programa receptor encuentra que los resultados de aprendizaje y el nivel de exigencia corresponden. La evidencia tiene que mostrar el desempeño que pide el curso de posgrado, no solo las horas.",
    },
    {
      q: "¿Quién decide la homologación de una microcredencial?",
      a: "La universidad que la recibe. Por lo general, la vicerrectoría fija la política, el consejo académico o la instancia que diga el estatuto aprueba la regla, la facultad compara resultados de aprendizaje y el registro académico la aplica.",
    },
    {
      q: "¿Qué pasa si la microcredencial tiene menos de 48 horas?",
      a: "No completa un crédito sola. Se puede sumar con otra microcredencial para cubrir un curso, o rediseñar su carga para que dé créditos completos. Por eso conviene definir la regla de equivalencia antes de producirla.",
    },
    {
      q: "¿Existe una norma del MEN para homologar microcredenciales?",
      a: "No encontramos una norma nacional específica. El Decreto 1330 de 2019 fija la regla del crédito académico y el MEN describe el Esquema de Movilidad Educativa y Formativa como un componente en construcción. Hoy cada universidad define la homologación en su reglamento.",
    },
  ],
  sources: [
    { title: "Microcredenciales homologables: cómo la Universidad Santo Tomás Seccional Tunja construyó SantotoUP", publisher: "POK", url: POK_SANTOTO, date: "2026-08-13", note: "Caso documentado por POK. Cifras autodeclaradas por la institución." },
    { title: "Gran lanzamiento de SantotoUP: credenciales que SUMMAN", publisher: "Santoto Stereo, Universidad Santo Tomás Tunja", url: LANZAMIENTO, date: "2025-11-24" },
    { title: "Decreto 1330 de 2019, artículos 2.5.3.2.4.1 a 2.5.3.2.4.3 (créditos académicos)", publisher: "Función Pública, Gestor Normativo", url: D1330, date: "2019-07-25" },
    { title: "Esquema de Movilidad Educativa y Formativa (EMEF)", publisher: "Ministerio de Educación Nacional, portal del MNC", url: EMEF },
    { title: "Marco Nacional de Cualificaciones: definición y glosario", publisher: "Ministerio de Educación Nacional", url: MNC },
    { title: "Marco Nacional de Cualificaciones: estructura y descriptores de nivel", publisher: "Ministerio de Educación Nacional", url: MNC_NIVELES },
    { title: "Micro-Credentials Impact Report 2026", publisher: "Coursera", url: COURSERA, date: "2026", note: "pp. 13 y 17." },
    { title: "Recomendación del Consejo relativa a un enfoque europeo de las microcredenciales (2022/C 243/02), anexo I", publisher: "Consejo de la Unión Europea (EUR-Lex)", url: UE, date: "2022-06-16" },
    { title: "Micro-credentials for Lifelong Learning and Employability: Uses and Possibilities", publisher: "OCDE", url: OCDE, date: "2023", note: "Copia del PDF original alojada por la Universidad de Utrecht. p. 7." },
  ],
  adaptedFrom: {
    title: "Microcredenciales homologables: cómo la Universidad Santo Tomás Seccional Tunja construyó SantotoUP",
    publisher: "POK",
    url: POK_SANTOTO,
    date: "2026-08-13",
  },
  related: [
    "microcredenciales-que-son-como-disenarlas",
    "como-disenar-una-microcredencial",
    "diferencia-microcredencial-diplomado-certificado",
    "marco-nacional-de-cualificaciones-diseno-curricular",
    "lifelong-learning-universidades-educacion-continua",
  ],
};
