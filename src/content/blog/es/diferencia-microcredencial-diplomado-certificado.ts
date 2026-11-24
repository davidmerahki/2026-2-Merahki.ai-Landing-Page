import type { Articulo } from "../types";

const COURSERA = "https://assets.ctfassets.net/2pudprfttvy6/3P06Oe48cjFLCwxNo45yEB/53de4a32ceb2d09f553bb3d32dc17d84/Micro-Credentials_Impact_Report_2026.pdf";
const UNEVOC = "https://connect.unevoc.unesco.org/home/TVETipedia+Glossary/lang=e/show=term/term=micro-credential";
const UNESCO_PDF = "https://microcredenciales.uca.es/wp-content/uploads/2024/09/UNESCO_MICROCREDENCIALES.pdf";
const UE = "https://eur-lex.europa.eu/legal-content/ES/ALL/?uri=CELEX:32022H0627(02)";
const OCDE = "https://www.fisme.science.uu.nl/publicaties/literatuur/2023_oecd_micro_credentials.pdf";
const D1330 = "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=98270";
const MNC = "https://especiales.colombiaaprende.edu.co/mnc/definicion.html";
const OB3 = "https://www.1edtech.org/standards/open-badges";

export const articulo: Articulo = {
  slug: "diferencia-microcredencial-diplomado-certificado",
  lang: "es",
  altSlug: "micro-credentials-vs-certificates",
  title: "Diferencia entre microcredencial, diplomado, certificado y curso: comparación para universidades que rediseñan su oferta de educación continua",
  seoTitle: "Diferencia entre microcredencial, diplomado y certificado",
  description: "Tabla que compara microcredencial, diplomado, certificado y curso: qué acredita cada uno, cómo se evalúa, si se verifica y cuándo conviene cada formato.",
  kicker: "Microcredenciales",
  keywords: [
    "diferencia entre microcredencial y diplomado",
    "microcredencial vs certificado",
    "diferencia entre microcredencial y curso",
    "macrocredenciales",
    "una microcredencial es un título",
    "microcredencial e insignia digital",
  ],
  published: "2026-11-24",
  readingMinutes: 6,
  summary: [
    `Un <strong>curso</strong> y un <strong>certificado de asistencia</strong> acreditan participación. Un <strong>diplomado</strong> acredita que alguien completó un programa de educación continua. Una <strong>microcredencial</strong> acredita una competencia concreta, evaluada con evidencia y verificable en línea.`,
    `Ninguno de los cuatro es un título. Los títulos, diplomas y licencias son macrocredenciales, y una microcredencial solo suma a ellas si una universidad la reconoce en créditos.`,
    `Una insignia digital es el formato. Puede llevar una microcredencial o una simple constancia de asistencia, y lo que cambia es la evaluación que hay detrás.`,
    `Un diplomado se puede reorganizar en una ruta de microcredenciales cuando sus módulos ya corresponden a competencias distintas con evidencias propias. El criterio sale de un diagnóstico con el autor, nunca de una cifra meta.`,
  ],
  body: [
    {
      t: "p",
      html: `La diferencia entre una microcredencial, un diplomado, un certificado y un curso está en lo que cada uno acredita. Un curso y un certificado de asistencia acreditan que alguien participó. Un diplomado acredita que completó un programa de educación continua. Una <strong>microcredencial</strong> acredita una competencia concreta, evaluada con una evidencia y verificable en línea por cualquier persona.`,
    },
    {
      t: "p",
      html: `Esta comparación es para directores de educación continua y coordinadores académicos que están revisando su portafolio y quieren decidir qué formato usar para cada propósito. Al final explicamos cuándo un diplomado se reorganiza como ruta de microcredenciales y cuándo conviene dejarlo como está.`,
    },
    { t: "h2", text: "Qué es cada formato en una frase", id: "definiciones" },
    {
      t: "ul",
      items: [
        `<strong>Curso:</strong> una unidad de contenido con un propósito de aprendizaje. Puede tener evaluación o no tenerla.`,
        `<strong>Certificado de asistencia o participación:</strong> una constancia de que la persona estuvo presente durante cierto número de horas o sesiones.`,
        `<strong>Diplomado:</strong> un programa de educación continua más largo que un curso, organizado en módulos. No conduce a título y su duración la define cada institución.`,
        `<strong>Microcredencial:</strong> el registro de un logro de aprendizaje enfocado, evaluado con estándares claros y emitido por un proveedor confiable, según la <a href="${UNEVOC}">definición de UNESCO (2022)</a>.`,
        `<strong>Macrocredencial:</strong> títulos, diplomas, certificados y licencias que por lo general otorgan instituciones acreditadas o reguladas y que suelen tomar años, en la terminología del mismo <a href="${UNESCO_PDF}">informe de UNESCO</a>.`,
      ],
    },
    { t: "h2", text: "Tabla comparativa: microcredencial, diplomado, certificado y curso", id: "tabla" },
    {
      t: "table",
      head: ["Criterio", "Curso", "Certificado de asistencia", "Diplomado", "Microcredencial"],
      rows: [
        ["Qué acredita", "Que tomó el curso", "Horas o sesiones de presencia", "Que completó un programa de educación continua", "Una competencia concreta"],
        ["Evaluación", "Variable", "Ninguna sobre la competencia", "La define la institución, por módulos", "Evidencia y rúbrica con criterios públicos"],
        ["Duración", "Corta", "La del evento", "Más larga que un curso, la fija cada institución", "La que necesita la competencia"],
        ["Resultados de aprendizaje", "A veces", "No", "Por lo general, por módulo", "Siempre, explícitos"],
        ["Verificación en línea", "Rara vez", "Casi nunca, suele ser un PDF", "Depende de la institución", "Sí, con metadatos y enlace público"],
        ["Se apila con otras", "No por diseño", "No", "Puede ser el cierre de una ruta", "Sí, por diseño"],
        ["Cuenta hacia un título", "No", "No", "Solo si la universidad lo reconoce", "Solo si la universidad la reconoce en créditos"],
      ],
      caption: "Elaboración de merahki.ai con base en UNESCO (2022), la recomendación europea sobre microcredenciales (2022) y la práctica de educación continua en Colombia.",
    },
    { t: "h2", text: "Qué acredita cada formato y para qué sirve", id: "que-acredita" },
    {
      t: "p",
      html: `<strong>El curso</strong> es la pieza básica. Sirve para actualizar a alguien en un tema puntual o para abrir la puerta a una ruta más larga. Si no tiene una evaluación de la competencia, lo que entrega al final es una constancia.`,
    },
    {
      t: "p",
      html: `<strong>El certificado de asistencia</strong> cumple una función administrativa: prueba que la persona estuvo. Es útil para horas de formación obligatoria o para eventos, y no dice nada sobre lo que la persona puede hacer después. Por eso un reclutador le da poco peso.`,
    },
    {
      t: "p",
      html: `<strong>El diplomado</strong> es el formato más conocido de la educación continua en Colombia. Agrupa varios módulos alrededor de un tema y se entrega como una sola unidad. Su fortaleza es la profundidad. Su debilidad es que se compra, se cursa y se certifica completo, aunque la persona o la empresa necesite solo una parte.`,
    },
    {
      t: "p",
      html: `<strong>La microcredencial</strong> acredita una competencia y lleva por dentro la información que la respalda: los resultados de aprendizaje, el tipo de evaluación, la carga de trabajo y el nivel. La <a href="${UE}">recomendación europea de 2022</a> agrega que pertenece al estudiante, se puede compartir y es portable. Eso la hace legible para un empleador que nunca ha oído hablar del programa.`,
    },
    { t: "h2", text: "Qué formato conviene según el objetivo", id: "segun-objetivo" },
    {
      t: "table",
      head: ["Si el objetivo es", "Formato que conviene", "Por qué"],
      rows: [
        ["Registrar horas de formación obligatoria o la asistencia a un evento", "Certificado de asistencia", "Basta con probar la participación"],
        ["Actualizar a un público amplio en un tema puntual", "Curso", "Es corto y no necesita una evaluación de desempeño"],
        ["Formar a fondo en un campo con un recorrido integrado", "Diplomado", "El valor está en la secuencia completa de módulos"],
        ["Certificar que alguien puede hacer algo concreto en su trabajo", "Microcredencial", "Exige evidencia y el empleador la puede verificar"],
        ["Dar a la educación continua un camino hacia el pregrado o el posgrado", "Ruta de microcredenciales con regla de homologación", "Cada pieza suma créditos a un programa formal"],
      ],
    },
    { t: "h2", text: "¿Una microcredencial es un título?", id: "titulo" },
    {
      t: "p",
      html: `No. Una microcredencial es la credencial de un aprendizaje corto, y un título es una macrocredencial que corresponde a un programa formal completo. Lo que sí puede pasar es que una microcredencial cuente hacia un título. Para eso, la universidad que otorga el título tiene que reconocerla en créditos dentro de un programa formal, con sus propias reglas de homologación.`,
    },
    {
      t: "p",
      html: `En Colombia, la unidad de esa conversión es el crédito académico, que según el artículo 2.5.3.2.4.1 del <a href="${D1330}">Decreto 1330 de 2019</a> equivale a 48 horas en un periodo académico. Una microcredencial pensada para homologarse declara sus horas de trabajo del estudiante desde el diseño. El paso a paso está en <a href="/es/blog/homologacion-de-microcredenciales-creditos-academicos">homologación de microcredenciales en créditos académicos</a>.`,
    },
    { t: "h2", text: "Microcredencial e insignia digital: en qué se diferencian", id: "insignia" },
    {
      t: "p",
      html: `La insignia digital es el contenedor. Con <a href="${OB3}">Open Badges 3.0</a>, el estándar de 1EdTech, la insignia se firma como una credencial verificable y lleva metadatos que cualquier persona puede consultar. Esa misma tecnología sirve para emitir una constancia de asistencia a un webinar o una microcredencial evaluada con un proyecto. Por fuera se ven parecidas. La diferencia está detrás: resultados de aprendizaje, evidencia y criterios. Para entender el formato a fondo, lee <a href="/es/blog/credenciales-digitales-verificables">credenciales digitales verificables</a>.`,
    },
    { t: "h2", text: "Cuándo un diplomado se reorganiza en una ruta de microcredenciales", id: "diplomado-a-ruta" },
    {
      t: "p",
      html: `Reorganizar un diplomado en microcredenciales tiene sentido en algunos casos y en otros no. Estas señales indican que conviene:`,
    },
    {
      t: "ul",
      items: [
        "Los módulos ya corresponden a competencias distintas, y cada una se puede demostrar con una evidencia propia.",
        "Llegan participantes con necesidades diferentes, y muchos solo quieren una parte del programa.",
        "Hay empresas que quieren formar equipos en una competencia específica y no en el diplomado entero.",
        "Existe un programa de pregrado o posgrado dispuesto a reconocer las microcredenciales en créditos.",
      ],
    },
    {
      t: "p",
      html: `Y estas indican que el diplomado funciona mejor como una unidad: el valor está en la integración de los módulos, la evaluación final depende de todo el recorrido o el método del autor exige una secuencia que no se puede partir.`,
    },
    {
      t: "callout",
      title: "Cómo se decide, sin recortar el método del autor",
      html: `La decisión sale de un diagnóstico con quien diseñó el programa: cómo enseña, qué hay dentro de cada módulo, qué recursos ya existen (retos, bitácoras, evaluaciones) y qué función cumple cada pieza en el recorrido. Con eso se propone qué módulos pueden convertirse en microcredenciales y cuáles se mantienen juntos. Nada se recorta sin la aprobación del autor, y el diplomado completo puede seguir existiendo como la credencial que agrupa la ruta.`,
    },
    {
      t: "p",
      html: `Hay un argumento de demanda para hacerlo bien. En el <a href="${COURSERA}">informe de impacto de Coursera de 2026</a>, el 71 % de los estudiantes dice que probablemente se inscribiría en un programa con microcredenciales que dan crédito académico, frente al 35 % si el programa no tiene ninguna. Es una encuesta de un proveedor de microcredenciales hecha en siete países, sin Colombia en la muestra, así que conviene leerla como señal y no como pronóstico.`,
    },
    { t: "h2", text: "Macro y microcredenciales: cómo se conectan", id: "macro-micro" },
    {
      t: "p",
      html: `La relación entre las dos se construye con reglas de apilamiento. La <a href="${OCDE}">OCDE (2023)</a> describe el modelo suizo de educación continua: un adulto puede sumar un Certificate of Advanced Studies de al menos 10 créditos ECTS hacia un Diploma de al menos 30 y luego hacia un Master of Advanced Studies de al menos 60. La misma revisión recoge un estudio de Singapur en el que completar la cualificación entera se asoció a un aumento salarial real de 5,8 %, frente a 0,8 % de quienes solo certificaron módulos sueltos.`,
    },
    {
      t: "p",
      html: `En Colombia, el <a href="${MNC}">Marco Nacional de Cualificaciones</a> da el lenguaje común para conectar los dos mundos: cualificaciones, competencias, resultados de aprendizaje y niveles. Una ruta bien diseñada declara en qué nivel está cada microcredencial y a qué programa suma. Así se ve en la <a href="/es/blog/microcredenciales-que-son-como-disenarlas">guía de microcredenciales para universidades</a>.`,
    },
    {
      t: "cta",
      html: `merahki.ai acompaña a unidades de educación continua a decidir qué programas se quedan como diplomado y cuáles se convierten en rutas de microcredenciales, con diagnóstico, diseño por competencias, producción y emisión verificable con POK.`,
    },
    {
      t: "p",
      html: `Si quieres ver cómo trabajamos con universidades, entra a <a href="/es/lifelong-learning">Lifelong Learning para universidades</a>. Si tu interés es la emisión y la verificación, revisa <a href="/es/certification">certificación con credenciales verificables</a>.`,
    },
  ],
  faq: [
    {
      q: "¿Cuál es la diferencia entre microcredencial y diplomado?",
      a: "El diplomado acredita que la persona completó un programa de educación continua de varios módulos. La microcredencial acredita una competencia concreta, evaluada con evidencia y verificable en línea. Un diplomado puede organizarse como una ruta de microcredenciales si sus módulos corresponden a competencias distintas.",
    },
    {
      q: "¿Una microcredencial es un título?",
      a: "No. Es la credencial de un aprendizaje corto. Puede contar hacia un título si la universidad que lo otorga la reconoce en créditos, con sus propias reglas de homologación.",
    },
    {
      q: "¿Qué es una macrocredencial?",
      a: "Es el nombre que UNESCO usa para títulos, diplomas, certificados y licencias que por lo general otorgan instituciones acreditadas o reguladas y que suelen tomar años. Las microcredenciales pueden sumar hacia una macrocredencial cuando existe una regla de reconocimiento.",
    },
    {
      q: "¿Es lo mismo una microcredencial que una insignia digital?",
      a: "No. La insignia es el formato digital que lleva la información. La microcredencial es el logro evaluado que va dentro. Una insignia también puede emitirse por asistir a un evento, sin evaluación de la competencia.",
    },
    {
      q: "¿Cuál es la diferencia entre microcredencial y curso?",
      a: "Un curso es una unidad de contenido que puede terminar con o sin evaluación. Una microcredencial exige resultados de aprendizaje explícitos, una evidencia calificada con rúbrica y una credencial verificable. Un curso puede ser el camino para obtener una microcredencial.",
    },
  ],
  sources: [
    { title: "Towards a common definition of micro-credentials (definición en el glosario TVETipedia)", publisher: "UNESCO / UNESCO-UNEVOC", url: UNEVOC, date: "2022" },
    { title: "Towards a common definition of micro-credentials (informe completo)", publisher: "UNESCO", url: UNESCO_PDF, date: "2022", note: "Copia del documento original de UNESCO alojada por la Universidad de Cádiz. p. 5 (macrocredenciales)." },
    { title: "Recomendación del Consejo relativa a un enfoque europeo de las microcredenciales (2022/C 243/02)", publisher: "Consejo de la Unión Europea (EUR-Lex)", url: UE, date: "2022-06-16" },
    { title: "Micro-credentials for Lifelong Learning and Employability: Uses and Possibilities", publisher: "OCDE", url: OCDE, date: "2023", note: "Copia del PDF original alojada por la Universidad de Utrecht. pp. 7 y 16." },
    { title: "Micro-Credentials Impact Report 2026", publisher: "Coursera", url: COURSERA, date: "2026", note: "p. 9." },
    { title: "Decreto 1330 de 2019, artículo 2.5.3.2.4.1", publisher: "Función Pública, Gestor Normativo", url: D1330, date: "2019-07-25" },
    { title: "Marco Nacional de Cualificaciones: definición y glosario", publisher: "Ministerio de Educación Nacional", url: MNC },
    { title: "Open Badges", publisher: "1EdTech", url: OB3 },
  ],
  related: [
    "microcredenciales-que-son-como-disenarlas",
    "como-disenar-una-microcredencial",
    "homologacion-de-microcredenciales-creditos-academicos",
    "credenciales-digitales-verificables",
    "lifelong-learning-universidades-educacion-continua",
  ],
};
