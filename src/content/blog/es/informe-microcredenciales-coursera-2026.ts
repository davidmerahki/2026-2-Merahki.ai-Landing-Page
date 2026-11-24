import type { Articulo } from "../types";

const LANDING = "https://www.coursera.org/enterprise/resources/pdf/micro-credentials-report-2026-pdf";
const PDF = "https://assets.ctfassets.net/2pudprfttvy6/3P06Oe48cjFLCwxNo45yEB/53de4a32ceb2d09f553bb3d32dc17d84/Micro-Credentials_Impact_Report_2026.pdf";
const BLOG = "https://blog.coursera.org/coursera-micro-credentials-impact-report-2026/";
const WEF = "https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf";

export const articulo: Articulo = {
  slug: "informe-microcredenciales-coursera-2026",
  lang: "es",
  altSlug: "coursera-micro-credentials-impact-report-2026",
  title:
    "Informe de microcredenciales de Coursera 2026: qué dicen empleadores, estudiantes y universidades, y qué significa para América Latina",
  seoTitle: "Informe de microcredenciales de Coursera 2026",
  description:
    "Las cifras del Micro-Credentials Impact Report 2026 de Coursera con su página, qué mide la encuesta y qué significan para universidades y empresas latinas.",
  kicker: "Estudios y datos",
  keywords: [
    "informe de microcredenciales Coursera 2026",
    "estadísticas de microcredenciales 2026",
    "microcredenciales empleadores",
    "Micro-Credentials Impact Report 2026",
    "microcredenciales en América Latina",
    "microcredenciales con crédito académico",
  ],
  published: "2026-11-24",
  readingMinutes: 6,
  summary: [
    `El <strong>Micro-Credentials Impact Report 2026</strong> de Coursera encuestó a más de 3.500 estudiantes, empleadores y líderes de educación superior en siete países entre febrero y marzo de 2026.`,
    `El 94 % de los empleadores dice estar dispuesto a ofrecer un salario inicial más alto a graduados con microcredenciales, y el 95 % las ve como un diferenciador entre candidatos.`,
    `Pesan más las microcredenciales con crédito académico, co-diseñadas con la industria y evaluadas por proyectos.`,
    `México es el único país de América Latina en la muestra. Colombia no está, así que los datos se leen como referencia regional.`,
    `Son percepciones declaradas en una encuesta de un proveedor de microcredenciales, no resultados medidos.`,
  ],
  body: [
    {
      t: "p",
      html: `El <strong>Micro-Credentials Impact Report 2026</strong> de Coursera es una encuesta a más de 3.500 estudiantes, empleadores y líderes de educación superior en siete países, hecha en febrero y marzo de 2026. Su conclusión central es que los empleadores dicen valorar las microcredenciales al contratar, sobre todo las que tienen crédito académico, co-diseño con la industria y evaluación por proyectos. México es el único país latinoamericano de la muestra.`,
    },
    {
      t: "p",
      html: `Este artículo resume y comenta el <a href="${LANDING}">informe de Coursera</a>, que también tiene versión en español latinoamericano en la misma página. Cada cifra lleva su página del <a href="${PDF}">PDF original</a>. Al final explicamos qué significa para una universidad o una empresa en Colombia, que no aparece en la muestra.`,
    },
    { t: "h2", text: "Qué mide el informe y a quién encuestó", id: "muestra" },
    {
      t: "p",
      html: `La encuesta la hizo Coursera con la firma Rep Data en Estados Unidos, Reino Unido, India, Arabia Saudita, México, Indonesia y Filipinas. En cada país participaron unos 300 estudiantes o recién graduados que ya tienen una microcredencial, 100 empleadores de empresas de más de 500 empleados que conocen las microcredenciales y 100 líderes de educación superior (p. 23). El margen de error de la muestra global es de ±3,7 % con 95 % de confianza.`,
    },
    {
      t: "stats",
      items: [
        { value: "3.500+", label: "personas encuestadas entre estudiantes, empleadores y líderes de educación superior", source: "Coursera, Micro-Credentials Impact Report 2026, p. 1 y 23", href: PDF },
        { value: "7", label: "países en la muestra. México es el único de América Latina", source: "Coursera, Micro-Credentials Impact Report 2026, p. 23", href: PDF },
        { value: "±3,7 %", label: "margen de error de la muestra global, con 95 % de confianza", source: "Coursera, Micro-Credentials Impact Report 2026, p. 23", href: PDF },
      ],
    },
    {
      t: "p",
      html: `El informe define la microcredencial a partir de la propuesta de UNESCO de 2022: verifica habilidades específicas que la persona demuestra en evaluaciones alineadas a estándares claros, la emite un proveedor confiable, tiene valor propio y puede sumar a una cualificación mayor, como un título (p. 7).`,
    },
    { t: "h2", text: "Qué dicen los empleadores sobre las microcredenciales", id: "empleadores" },
    {
      t: "ul",
      items: [
        `El 98 % usa contratación por habilidades para cargos de entrada y el 86 % la usa de forma extensa (p. 4 y 6).`,
        `El 95 % dice que las microcredenciales distinguen a los candidatos, y el 87 % las califica como muy importantes al contratar (p. 6).`,
        `El 94 % está dispuesto a ofrecer un salario inicial más alto a graduados con microcredenciales (p. 4 y 7). Es una disposición declarada, no un aumento medido.`,
        `El 92 % dice que quienes entran con microcredenciales rinden mejor el primer año. El 73 % dice que avanzan más rápido en el proceso de selección y el 73 % que tienen más probabilidad de ascender. El 58 % dice que reducen el riesgo de contratación (p. 8).`,
        `Con formación dirigida por rol, el 62 % reporta un aumento significativo de productividad y el 52 % un impacto significativo en rentabilidad (p. 6).`,
        `El 60 % elegiría a un candidato con menos experiencia y una credencial de IA generativa sobre uno con más experiencia y sin ella (p. 11).`,
      ],
    },
    { t: "h2", text: "Qué dicen los estudiantes y los egresados", id: "estudiantes" },
    {
      t: "ul",
      items: [
        `El 71 % probablemente se inscribiría en un programa con microcredenciales que dan crédito académico, frente al 35 % si el programa no tiene ninguna (p. 9).`,
        `El 91 % se motiva más cuando el curso lleva a una credencial reconocida por la industria (p. 9).`,
        `El 87 % de los graduados con microcredenciales consiguió un empleo en su campo en 12 meses, y el 83 % de los empleados dice que la microcredencial pesó en su contratación (p. 8).`,
        `El 75 % buscaría microcredenciales con recomendación formal de crédito, frente al 18 % si no la tienen. El 82 % de quienes tienen credenciales con crédito reporta aumentos salariales de 10 % o más, frente al 60 % sin crédito (p. 12-13).`,
        `El 82 % de los estudiantes y el 88 % de los graduados prefiere microcredenciales basadas en proyectos frente a las de solo contenido (p. 13).`,
      ],
    },
    { t: "h2", text: "Qué dicen los líderes de educación superior", id: "universidades" },
    {
      t: "p",
      html: `El 81 % de los líderes dice que integrar microcredenciales acelera la actualización del currículo, y el 79 % que permite probar habilidades nuevas con bajo riesgo. El 59 % ve un riesgo estratégico moderado o alto en no integrarlas. El 76 % asocia el crédito académico con mayor retención (p. 10 y 12-13). Para una vicerrectoría, el dato útil es el segundo: la microcredencial funciona como piloto de un contenido nuevo antes de llevarlo a un programa formal.`,
    },
    { t: "h2", text: "Qué dice el informe sobre México", id: "mexico" },
    {
      t: "table",
      head: ["Indicador", "México", "Global"],
      rows: [
        ["Empleadores que usan contratación por habilidades de forma extensa en cargos de entrada", "85 %", "86 %"],
        ["Empleadores que la usan de alguna forma", "98 %", "98 %"],
        ["Empleadores que dicen que los contratados con microcredenciales rinden mejor el primer año", "92 %", "92 %"],
        ["Graduados con microcredenciales que consiguieron empleo en su campo en 12 meses", "82 %", "87 %"],
        ["Estudiantes que buscarían microcredenciales con crédito formal, frente a sin crédito", "74 % frente a 20 %", "75 % frente a 18 %"],
        ["Empleadores que confían más en las microcredenciales que dan crédito", "63 %", "58 %"],
        ["Estudiantes que ven las microcredenciales de la industria que cuentan para un título como la mejor señal de rigor y valor", "59 %", "51 %"],
        ["Líderes que dicen que integrarlas acelera la actualización del currículo", "73 %", "81 %"],
      ],
      caption: "Fuente: Coursera, Micro-Credentials Impact Report 2026, p. 4-17. En México respondieron unos 300 estudiantes, 100 empleadores y 100 líderes.",
    },
    {
      t: "p",
      html: `La lectura para la región: en México el crédito académico pesa más que en el promedio global, tanto para empleadores como para estudiantes. Las universidades mexicanas, en cambio, van un poco detrás en la percepción de agilidad curricular. Con 100 empleadores y 100 líderes por país, el margen de error de México es mayor que el global.`,
    },
    { t: "h2", text: "Lo que estos datos no dicen", id: "limites" },
    {
      t: "quote",
      text: "Not all micro-credentials deliver equal value.",
      cite: "Coursera, Micro-Credentials Impact Report 2026, p. 4",
      href: PDF,
    },
    {
      t: "ul",
      items: [
        `<strong>Son percepciones.</strong> El informe mide lo que la gente dice, no salarios ni desempeño medidos en nómina.`,
        `<strong>La muestra de estudiantes solo incluye a quienes ya tienen una microcredencial.</strong> Es natural que la valoren.`,
        `<strong>Coursera vende microcredenciales.</strong> No invalida el estudio, pero obliga a leerlo con cuidado.`,
        `<strong>Colombia no está en la muestra.</strong> Cualquier uso para Colombia debe decir que la referencia es México.`,
        `<strong>Hay contrapeso en otras encuestas.</strong> En el <a href="${WEF}">Future of Jobs Report 2025</a> del Foro Económico Mundial, solo el 14 % de los empleadores planea tener en cuenta certificados en línea al contratar (p. 61-62). La distancia entre los dos estudios es la que separa una microcredencial bien diseñada de un certificado suelto.`,
      ],
    },
    { t: "h2", text: "Confianza, evidencia y resultados: el marco que propone Coursera", id: "marco" },
    {
      t: "p",
      html: `El informe cierra con tres preguntas para evaluar una microcredencial (p. 13). Las cruzamos con lo que significan en diseño y con la forma de resolverlas en Colombia.`,
    },
    {
      t: "table",
      head: ["Pregunta de Coursera", "Qué significa en diseño", "Cómo se resuelve en Colombia"],
      rows: [
        ["Confianza: ¿la credencial pesa?", "Crédito académico, co-diseño con empresas y un emisor reconocido.", "Regla de homologación en créditos, alineación con el Marco Nacional de Cualificaciones y empresas en el diseño."],
        ["Evidencia: ¿produce prueba observable de la habilidad aplicada?", "Evaluación por proyecto con rúbrica, y la evidencia dentro de la credencial.", "Resultados de aprendizaje observables y credencial verificable con Open Badges 3.0, emitida con POK."],
        ["Resultados: ¿mejora las métricas que importan?", "Indicadores definidos antes de lanzar.", "Medición con Kirkpatrick: aprendizaje, transferencia al trabajo y resultado en la empresa."],
      ],
    },
    { t: "cta" },
    { t: "h2", text: "Qué significa para las universidades de América Latina", id: "implicaciones-universidades" },
    {
      t: "p",
      html: `Si el crédito académico es la señal más fuerte, la tarea de una universidad es definir cómo una microcredencial de educación continua cuenta para un programa formal. Eso exige una regla de equivalencia y resultados de aprendizaje comparables. La educación continua sirve de laboratorio: allí se prueba un contenido nuevo con bajo riesgo, como dice el 79 % de los líderes encuestados, y lo que funciona se lleva al pregrado o al posgrado. Así trabajamos el servicio de <a href="/es/lifelong-learning">Lifelong Learning para universidades</a>.`,
    },
    {
      t: "p",
      html: `El segundo frente es el diseño con empresas. El 82 % de los empleadores valora más lo co-diseñado con la industria. En Colombia, la CUOC ofrece un lenguaje común para hablar de ocupaciones con las empresas y el MNC uno para hablar de niveles con el sistema educativo.`,
    },
    { t: "h2", text: "Qué significa para los empleadores", id: "implicaciones-empresas" },
    {
      t: "p",
      html: `Contratar por habilidades obliga a leer credenciales. Un área de talento humano necesita saber qué competencia certifica una credencial, con qué evidencia y si la puede verificar sin llamar a la institución. Eso pide credenciales verificables con criterios y evidencia. Lo explicamos en la guía de <a href="/es/blog/credenciales-digitales-verificables">credenciales digitales verificables</a>. La misma lógica sirve dentro de la empresa: las academias corporativas pueden emitir microcredenciales por rol y usarlas para movilidad interna, como hacemos en <a href="/es/training-certification">capacitación y certificación para empresas</a>.`,
    },
  ],
  faq: [
    {
      q: "¿Qué es el Micro-Credentials Impact Report 2026?",
      a: `Es una encuesta de Coursera hecha con Rep Data en febrero y marzo de 2026 a más de 3.500 estudiantes, empleadores y líderes de educación superior en siete países. Mide qué valor le dan a las microcredenciales al contratar, al estudiar y al diseñar programas.`,
    },
    {
      q: "¿El informe incluye datos de Colombia?",
      a: `No. Los países son Estados Unidos, Reino Unido, India, Arabia Saudita, México, Indonesia y Filipinas. México es el único latinoamericano, así que sirve como referencia regional, no como dato de Colombia.`,
    },
    {
      q: "¿Es cierto que las microcredenciales suben el salario?",
      a: `El informe dice que el 94 % de los empleadores está dispuesto a ofrecer un salario inicial más alto a graduados con microcredenciales. Es una disposición declarada en una encuesta, no un aumento medido. Entre quienes tienen credenciales con crédito, el 82 % reporta aumentos de 10 % o más.`,
    },
    {
      q: "¿Qué microcredenciales valoran más los empleadores?",
      a: `Según el informe, las co-diseñadas con la industria, las que dan crédito académico y las evaluadas por proyectos. El 82 % de los empleadores valora más las co-diseñadas con la industria y el 58 % confía más en las que dan crédito.`,
    },
    {
      q: "¿Qué debe hacer una universidad colombiana con estos datos?",
      a: `Definir cómo sus microcredenciales cuentan para programas formales, diseñarlas con empresas y evaluarlas con un entregable. Además, emitirlas como credenciales verificables y medir resultados desde el primer programa.`,
    },
  ],
  sources: [
    { title: "Micro-Credentials Impact Report 2026 (página del informe)", publisher: "Coursera", url: LANDING, date: "2026" },
    { title: "Micro-Credentials Impact Report 2026 (PDF)", publisher: "Coursera", url: PDF, date: "2026", note: "Encuesta Coursera y Rep Data, febrero y marzo de 2026" },
    { title: "Introducing Coursera's Micro-Credentials Report 2026", publisher: "Coursera Blog", url: BLOG, date: "2026-06-04" },
    { title: "Future of Jobs Report 2025", publisher: "World Economic Forum", url: WEF, date: "2025-01", note: "p. 61-62" },
  ],
  adaptedFrom: {
    title: "Micro-Credentials Impact Report 2026",
    publisher: "Coursera",
    url: LANDING,
    date: "2026",
  },
  related: [
    "microcredenciales-que-son-como-disenarlas",
    "homologacion-de-microcredenciales-creditos-academicos",
    "credenciales-digitales-verificables",
    "coursera-global-skills-report-2026-colombia-america-latina",
  ],
};
