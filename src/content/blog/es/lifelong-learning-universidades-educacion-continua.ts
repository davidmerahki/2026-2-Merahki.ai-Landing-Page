import type { Articulo } from "../types";

const UIL = "https://connect.unevoc.unesco.org/home/TVETipedia+Glossary/lang=e/show=term/term=lifelong+learning";
const UNESCO_MC = "https://connect.unevoc.unesco.org/home/UNESCO+Publications/lang=en/akt=detail/qs=6648";
const MNC = "https://especiales.colombiaaprende.edu.co/mnc/definicion.html";
const WEF = "https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf";
const QS = "https://insights.qs.com/hubfs/Reports/QS_World_Future_Skills_Index_2027.pdf";
const HOLONIQ = "https://www.holoniq.com/notes/2026-latin-america-edtech-100";
const OCDE = "https://www.fisme.science.uu.nl/publicaties/literatuur/2023_oecd_micro_credentials.pdf";
const COURSERA = "https://assets.ctfassets.net/2pudprfttvy6/3P06Oe48cjFLCwxNo45yEB/53de4a32ceb2d09f553bb3d32dc17d84/Micro-Credentials_Impact_Report_2026.pdf";
const UNAB = "https://unab.edu.co/wp-content/uploads/2025/06/LineamientosESL_Aprendizaje_LV_23mayo20251.pdf";
const CASO = "/es/case-studies/uniandes-sanofi-microbiota";

const a = (href: string, text: string) => `<a href="${href}">${text}</a>`;

export const articulo: Articulo = {
  slug: "lifelong-learning-universidades-educacion-continua",
  lang: "es",
  altSlug: "lifelong-learning-strategy-universities",
  title: "Lifelong Learning en universidades: qué es y cómo una unidad de educación continua lo organiza en rutas, microcredenciales y servicios para empresas",
  seoTitle: "Lifelong learning en universidades y educación continua",
  description: "Qué es lifelong learning en una universidad y cómo la educación continua organiza rutas apilables, microcredenciales y programas para empresas.",
  kicker: "Educación continua",
  keywords: [
    "lifelong learning",
    "aprendizaje a lo largo de la vida",
    "qué es lifelong learning",
    "lifelong learning universidades",
    "educación continua universidades",
    "estrategia de educación continua",
    "rutas apilables",
    "microcredenciales universidad",
  ],
  published: "2026-11-24",
  readingMinutes: 10,
  summary: [
    "<strong>Lifelong learning</strong> es el aprendizaje a lo largo de la vida: a cualquier edad, en cualquier contexto y por vías formales, no formales e informales, según el Instituto de la UNESCO para el Aprendizaje a lo Largo de la Vida.",
    "En una universidad, la estrategia de Lifelong Learning la ejecuta la unidad de educación continua con tres líneas: rutas apilables con microcredenciales, formación a la medida para empresas y oferta para egresados.",
    "La presión viene del empleo: en Colombia cambiará el 44 % de las habilidades centrales entre 2025 y 2030 y 55 de cada 100 trabajadores necesitarán formación, según el Foro Económico Mundial.",
    "El modelo operativo tiene cinco capas: diseño por competencias (MNC y CUOC), producción, operación del LMS, credenciales verificables y medición con Kirkpatrick.",
    "Los indicadores van del enrollment al reporte: conversión, finalización, evidencia aprobada, credenciales verificadas, transferencia al trabajo y recompra corporativa.",
  ],
  body: [
    {
      t: "p",
      html: "<strong>Lifelong learning</strong> (aprendizaje a lo largo de la vida) es el principio de que una persona aprende durante toda su vida, a cualquier edad, en cualquier contexto y por vías formales, no formales e informales. En una universidad, esa estrategia la ejecuta la unidad de educación continua: organiza la oferta en rutas apilables, microcredenciales y programas para empresas, y la mide del enrollment al reporte.",
    },
    {
      t: "p",
      html: "Esta guía es para rectores, vicerrectores y directores de educación continua que quieren pasar de un catálogo de cursos sueltos a una oferta con estructura. Explica la definición de la UNESCO, por qué el tema subió en la agenda universitaria, cómo se arma la oferta, qué modelo operativo necesita y qué indicadores conviene seguir.",
    },

    { t: "h2", text: "Qué es el lifelong learning según la UNESCO" },
    {
      t: "p",
      html: `El Instituto de la UNESCO para el Aprendizaje a lo Largo de la Vida (UIL) describe el lifelong learning como un principio que une el aprendizaje con la vida. Abarca a personas de todas las edades, en todos los espacios donde se aprende (la familia, la escuela, la comunidad, el trabajo) y en tres modalidades: formal, no formal e informal. La definición, recogida en el ${a(UIL, "glosario TVETipedia de UNESCO-UNEVOC")}, nombra cinco elementos: todos los grupos de edad, todos los niveles educativos, todas las modalidades, todos los espacios de aprendizaje y una variedad de propósitos.`,
    },
    {
      t: "p",
      html: "Para una universidad, la consecuencia práctica es una sola: la relación con el estudiante ya no termina en el grado. El egresado vuelve a los 30, a los 45 y a los 60 años, muchas veces enviado por su empresa, y la institución necesita algo que ofrecerle en cada regreso.",
    },
    {
      t: "p",
      html: `En Colombia, el ${a(MNC, "Marco Nacional de Cualificaciones")} (MNC) recoge la misma idea con el reconocimiento de aprendizajes previos: lo que una persona aprendió en el trabajo, en la comunidad o por su cuenta puede evaluarse y certificarse frente a resultados de aprendizaje. Eso le da a la educación continua un referente nacional para diseñar su oferta y reconocer lo que el estudiante ya sabe.`,
    },

    { t: "h2", text: "Por qué las universidades están organizando su educación continua como Lifelong Learning" },
    {
      t: "p",
      html: `La presión viene del mercado laboral. El ${a(WEF, "Future of Jobs Report 2025")} del Foro Económico Mundial calcula que el 39 % de las habilidades centrales de un trabajador cambiará entre 2025 y 2030. Entre las empresas encuestadas en Colombia, la cifra sube a 44 %.`,
    },
    {
      t: "stats",
      items: [
        { value: "44 %", label: "de las habilidades centrales cambiará en Colombia entre 2025 y 2030 (39 % en el mundo)", source: "WEF, Future of Jobs Report 2025, p. 128", href: WEF },
        { value: "55 de 100", label: "trabajadores en Colombia necesitarán formación para 2030", source: "WEF, Future of Jobs Report 2025, p. 129", href: WEF },
        { value: "85 %", label: "de los empleadores del mundo planea priorizar el upskilling de su gente", source: "WEF, Future of Jobs Report 2025, p. 6", href: WEF },
        { value: "81 %", label: "de los líderes de educación superior encuestados dice que integrar microcredenciales acelera la actualización del currículo", source: "Coursera, Micro-Credentials Impact Report 2026, p. 10", href: COURSERA },
      ],
    },
    {
      t: "p",
      html: "Las empresas también piden respuesta. En Colombia, el 60 % de las empresas encuestadas por el WEF quiere que se financie la recalificación y otro 60 % pide que se ofrezcan programas para hacerla. Una universidad con oferta estructurada para adultos que trabajan está en el lugar correcto para responder.",
    },
    {
      t: "p",
      html: `Del lado académico, el ${a(QS, "QS World Future Skills Index 2027")} advierte que la demanda de habilidades humanas, digitales, verdes y de IA avanza más rápido que la respuesta de la educación superior, y pide más inversión en aprendizaje a lo largo de la vida. El mercado ya se movió: en el ${a(HOLONIQ, "2026 Latin America EdTech 100")} de HolonIQ, la formación para el trabajo es el 37 % de las empresas de la lista, y el upskilling genérico pierde peso frente a la formación atada a un resultado laboral.`,
    },
    {
      t: "p",
      html: `Sobre el 81 % de la tabla: el ${a(COURSERA, "estudio de Coursera")} encuestó a líderes de siete países (México es el único latinoamericano) y Coursera vende microcredenciales. Son percepciones declaradas por los encuestados, sin medición de resultados.`,
    },

    { t: "h2", text: "Educación continua y Lifelong Learning: en qué se diferencian" },
    {
      t: "p",
      html: "La educación continua es la unidad que ya existe en casi todas las universidades. Lifelong Learning es la manera de organizarla para que el estudiante vuelva y para que la empresa compre más de una vez. La diferencia se ve en siete decisiones.",
    },
    {
      t: "table",
      head: ["Decisión", "Catálogo de educación continua", "Estrategia de Lifelong Learning"],
      rows: [
        ["Unidad de oferta", "Curso o diplomado suelto", "Ruta apilable hecha de microcredenciales con valor propio"],
        ["Punto de partida del diseño", "El tema que domina un profesor", "La ocupación, el nivel del MNC y los resultados de aprendizaje"],
        ["Cliente", "La persona que se inscribe", "La persona, la empresa que la forma y la entidad pública que financia"],
        ["Relación con el egresado", "Termina en el certificado", "Vuelve en cada etapa de su carrera"],
        ["Credencial", "Certificado en PDF", "Credencial verificable con criterios y evidencia"],
        ["Medición", "Inscritos y encuesta de satisfacción", "Del enrollment al reporte: finalización, evidencia, transferencia y recompra"],
        ["Producción", "Cada programa se produce desde cero", "Piezas modulares que se reutilizan para nuevas audiencias"],
      ],
      caption: "Siete decisiones que separan un catálogo de cursos de una estrategia de Lifelong Learning.",
    },

    { t: "h2", text: "Cómo organiza la oferta una unidad de educación continua" },
    {
      t: "p",
      html: "Una oferta de Lifelong Learning tiene tres líneas que comparten diseño, plataforma y credenciales: rutas apilables para personas, formación a la medida para empresas y oferta para egresados.",
    },
    { t: "h3", text: "Rutas apilables y microcredenciales" },
    {
      t: "p",
      html: `Una microcredencial es el registro de un logro de aprendizaje enfocado, evaluado con estándares claros y emitido por un proveedor confiable. Tiene valor propio y puede sumarse a otras credenciales o a un título. Es la definición que propuso en 2022 un grupo de expertos convocado por la ${a(UNESCO_MC, "UNESCO")}, como propuesta de consenso y no como posición oficial de la organización.`,
    },
    {
      t: "p",
      html: `Apilar es lo que convierte cursos sueltos en ruta. La ${a(OCDE, "OCDE (2023)")} describe el caso de Suiza, donde un adulto suma un Certificate of Advanced Studies (10 o más créditos ECTS) hacia un Diploma (30 o más) y luego hacia un Master of Advanced Studies (60 o más). Y según estudios recopilados por la OCDE, en Singapur quienes completaron la cualificación entera tuvieron un aumento salarial real de 5,8 %, frente a 0,8 % de quienes solo certificaron módulos sueltos. La ruta completa vale más que las piezas.`,
    },
    { t: "p", html: "En una universidad colombiana, una ruta apilable se diseña en cinco pasos:" },
    {
      t: "ol",
      items: [
        "Elige la ocupación y el nivel. La <strong>CUOC</strong> describe qué hace la persona en su trabajo y el <strong>MNC</strong> ubica la complejidad en uno de sus ocho niveles.",
        "Escribe los resultados de aprendizaje y la evidencia que demuestra cada uno: un proyecto, un caso resuelto, una simulación.",
        "Corta la ruta en microcredenciales que tengan sentido solas, para el estudiante y para su empleador.",
        "Acuerda con registro académico las reglas de apilamiento: qué pieza suma a qué programa, con cuántos créditos y bajo qué reglamento.",
        "Define la credencial verificable de cada pieza y la de la ruta completa.",
      ],
    },
    {
      t: "p",
      html: `La Universidad Autónoma de Bucaramanga aprobó en mayo de 2025 sus ${a(UNAB, "lineamientos de aprendizaje a lo largo de la vida")} para programas de corta duración, con la definición de microcredencial de la UNESCO y el MNC como referentes. Es un ejemplo útil de una universidad que escribe las reglas antes de abrir la oferta.`,
    },
    { t: "h3", text: "Formación a la medida para empresas: upskilling y reskilling" },
    {
      t: "p",
      html: "La segunda línea le vende a empresas. Las empresas de América Latina encuestadas por el WEF planean recalificar a su propia gente (84 %) más que contratar perfiles con habilidades nuevas (68 %). Ese upskilling y reskilling necesita a alguien que lo diseñe por rol y lo certifique, y la universidad tiene el respaldo académico que la empresa no tiene.",
    },
    {
      t: "p",
      html: "El programa corporativo arranca con un diagnóstico de la brecha de habilidades del área, se diseña por competencias del cargo, corre por cohortes y termina en un informe para talento humano con avance, evidencia aprobada y cambios observados en el puesto. Las mismas microcredenciales de la oferta abierta se pueden armar en rutas cerradas para cada cliente corporativo.",
    },
    { t: "h3", text: "Oferta para egresados" },
    {
      t: "p",
      html: "La tercera línea es la que menos esfuerzo comercial pide y la más olvidada. El egresado ya confía en la institución. Una oferta de actualización por cohortes, con reconocimiento de lo que ya cursó y una ruta de regreso a un posgrado, convierte la base de egresados en matrícula recurrente.",
    },

    { t: "h2", text: "El modelo operativo: diseño, producción, LMS, credenciales y medición" },
    {
      t: "p",
      html: "La estrategia suele fallar en la operación. Una ruta apilable exige cinco capacidades que pocas unidades de educación continua tienen completas dentro de su equipo.",
    },
    {
      t: "table",
      head: ["Capacidad", "Qué incluye", "Qué pasa si falta"],
      rows: [
        ["Diseño por competencias", "Resultados de aprendizaje alineados al MNC y la CUOC, evidencias, rúbricas y reglas de apilamiento", "Cursos que no suman a nada y que registro académico no puede reconocer"],
        ["Producción y virtualización", "Guiones, video, actividades interactivas y piezas modulares", "Cada programa nuevo se produce desde cero y tarda meses"],
        ["Operación en el LMS", "Inscripción, cohortes, comunicaciones, soporte a participantes y seguimiento", "Abandono en las primeras semanas que nadie ve a tiempo"],
        ["Credenciales verificables", "Emisión en Open Badges 3.0 o W3C Verifiable Credentials, con criterios y evidencia", "Un PDF que nadie puede comprobar"],
        ["Medición", "Kirkpatrick niveles 1 a 4 y reportes por cohorte y por cliente corporativo", "Una unidad que no puede defender su presupuesto ante la rectoría"],
      ],
      caption: "Las cinco capacidades que necesita una unidad de educación continua para operar rutas apilables.",
    },
    {
      t: "p",
      html: `En merahki.ai cubrimos esas cinco capas para unidades de educación continua: diseñamos por competencias, virtualizamos con un equipo nativo en IA, operamos el LMS, emitimos credenciales verificables con nuestro aliado POK y medimos con Kirkpatrick. El detalle está en ${a("/es/lifelong-learning", "Lifelong Learning para universidades")} y en ${a("/es/methodology", "nuestra metodología de diseño por competencias")}.`,
    },
    {
      t: "callout",
      title: "La decisión de fondo",
      html: "La pregunta para la rectoría es qué capacidades construye dentro y cuáles opera con un aliado. El criterio académico y la relación con las empresas suelen quedarse en casa. La producción, la operación del LMS y la emisión de credenciales se pueden delegar sin perder el control, siempre que el aliado entregue datos y reportes cada semana.",
    },

    { t: "h2", text: "Qué indicadores usa la educación continua, del enrollment al reporte" },
    {
      t: "p",
      html: `Medir solo inscritos y satisfacción deja a la unidad a ciegas. Según la ${a(OCDE, "OCDE")}, los cursos totalmente en línea de las plataformas MOOC tienen tasas de finalización de entre 3 % y 15 %. Sin indicadores de avance, nadie sabe en qué semana se cae una cohorte ni por qué.`,
    },
    {
      t: "table",
      head: ["Etapa", "Indicador", "Pregunta que responde"],
      rows: [
        ["Inscripción", "Conversión de interesados a matriculados y peso de las empresas en la matrícula", "¿La oferta encuentra comprador?"],
        ["Avance", "Activación en la primera semana y finalización por cohorte", "¿Dónde se pierde la gente?"],
        ["Aprendizaje", "Evidencias aprobadas y logro de cada resultado de aprendizaje (Kirkpatrick 2)", "¿Aprendieron lo que la ruta promete?"],
        ["Credencial", "Credenciales emitidas, compartidas y verificadas por terceros", "¿La credencial circula y alguien la consulta?"],
        ["Transferencia", "Cambios observados en el puesto de trabajo (Kirkpatrick 3)", "¿Lo aplican en su trabajo?"],
        ["Resultado", "Recompra corporativa, regreso de egresados e indicador de negocio del cliente (Kirkpatrick 4)", "¿Vuelven a comprar?"],
      ],
      caption: "Indicadores de una unidad de educación continua, del enrollment al reporte.",
    },
    {
      t: "p",
      html: `Agrupamos estos indicadores en cuatro familias que le importan a quien paga: productividad, retención, costos y experiencia. Un director de educación continua que reporta así habla el mismo idioma que el área de talento humano de sus clientes corporativos. Y cuando la credencial es verificable, cada ${a("/es/certification", "certificación con evidencia")} deja un dato más en el tablero: quién la compartió y quién la consultó.`,
    },
    {
      t: "cta",
      html: "Si tu unidad de educación continua quiere lanzar su primera ruta apilable o un programa para empresas, merahki.ai la diseña, la virtualiza, la opera y la certifica contigo.",
    },

    { t: "h2", text: "Caso Uniandes y Sanofi CHC: una base modular para dos audiencias clínicas" },
    {
      t: "p",
      html: "En 2022, la Facultad de Medicina de la Universidad de los Andes tenía ocho semanas para virtualizar y lanzar un programa certificado sobre microbiota, probióticos y prebióticos, con Sanofi CHC como aliado corporativo y el aval académico de la Sociedad Iberoamericana de Microbiota, Probióticos y Prebióticos. merahki.ai hizo el diseño instruccional, la virtualización modular, el montaje en el LMS de la universidad, las comunicaciones automatizadas y los reportes semanales para los equipos de la universidad y de Sanofi.",
    },
    {
      t: "p",
      html: `La primera fase entregó más de 95 insignias digitales a médicos generales y pediatras de 8 países de América Latina. En la segunda, la misma base de contenido se reorganizó para una audiencia especializada y se capacitó a más de 200 alergólogos sin volver a producir desde cero. Es Lifelong Learning a escala de un programa: piezas modulares, rutas distintas para públicos distintos y una credencial en cada salida. El detalle está en el ${a(CASO, "caso Uniandes × Sanofi CHC")}.`,
    },

    { t: "h2", text: "Cómo empezar una estrategia de Lifelong Learning en tu universidad" },
    {
      t: "ol",
      items: [
        "Haz el inventario de la oferta actual: qué cursos se venden, a quién y cuáles comparten contenido.",
        "Elige uno o dos sectores donde la universidad ya tiene prestigio y empresas cercanas.",
        "Diseña una ruta piloto con pocas microcredenciales, alineadas al MNC y con evidencia de desempeño.",
        "Acuerda las reglas de apilamiento y reconocimiento con registro académico antes de lanzar.",
        "Define el tablero de indicadores del enrollment al reporte y quién lo recibe cada semana.",
        "Vende la ruta a una empresa como programa cerrado y usa ese resultado para abrirla al público.",
      ],
    },
    {
      t: "p",
      html: "El orden importa. Primero la regla académica, después la producción. Una ruta producida sin reglas de apilamiento termina siendo un catálogo más, con mejor diseño gráfico.",
    },
  ],
  faq: [
    {
      q: "¿Qué es el lifelong learning?",
      a: "Es el aprendizaje a lo largo de la vida: aprender a cualquier edad, en cualquier contexto y por vías formales, no formales e informales. El Instituto de la UNESCO para el Aprendizaje a lo Largo de la Vida lo describe como un principio que une el aprendizaje con la vida. Para una universidad, implica ofrecer formación al estudiante y al egresado en cada etapa de su carrera.",
    },
    {
      q: "¿Qué significa lifelong learning en español?",
      a: "Significa aprendizaje a lo largo de la vida o aprendizaje permanente. En muchas universidades de habla hispana el término en inglés también nombra la estrategia o el área que organiza la educación continua.",
    },
    {
      q: "¿Qué es la educación continua en una universidad?",
      a: "Es la unidad que ofrece cursos, diplomados y programas que no conducen a un título académico, dirigidos a profesionales, egresados y empresas. Cuando organiza su oferta en rutas apilables, microcredenciales y servicios para empresas, se convierte en la estrategia de Lifelong Learning de la institución.",
    },
    {
      q: "¿En qué se diferencian la educación continua y el lifelong learning?",
      a: "La educación continua es el área y su catálogo. Lifelong learning es el principio que orienta cómo se organiza: rutas que se apilan, credenciales verificables, relación permanente con el egresado y venta a empresas. Una unidad puede tener mucha oferta y ninguna estrategia de Lifelong Learning.",
    },
    {
      q: "¿Qué indicadores debe medir una unidad de educación continua?",
      a: "Conversión de interesados a matriculados, activación en la primera semana, finalización por cohorte, evidencias aprobadas, credenciales verificadas, transferencia al puesto de trabajo y recompra corporativa. Los cuatro niveles de Kirkpatrick ordenan la parte de aprendizaje y resultado.",
    },
    {
      q: "¿Una microcredencial de educación continua puede sumar créditos académicos?",
      a: "Puede, si la universidad lo define en su reglamento: qué microcredenciales suman a qué programa y con cuántos créditos. Esa regla la decide cada institución con su área de registro académico. Sin ella, la microcredencial tiene valor propio pero no abre la puerta a un posgrado.",
    },
  ],
  sources: [
    { title: "TVETipedia Glossary: Lifelong learning (definición del UNESCO Institute for Lifelong Learning)", publisher: "UNESCO-UNEVOC", url: UIL, note: "Definición del UIL consultada por UNEVOC en septiembre de 2023" },
    { title: "Towards a common definition of micro-credentials", publisher: "UNESCO", url: UNESCO_MC, date: "2022" },
    { title: "Definición del Marco Nacional de Cualificaciones", publisher: "Ministerio de Educación Nacional de Colombia", url: MNC },
    { title: "Future of Jobs Report 2025", publisher: "World Economic Forum", url: WEF, date: "enero de 2025", note: "Perfil de Colombia en las p. 128 y 129" },
    { title: "QS World Future Skills Index 2027", publisher: "QS Quacquarelli Symonds", url: QS, date: "junio de 2026" },
    { title: "2026 Latin America EdTech 100", publisher: "HolonIQ", url: HOLONIQ, date: "octubre de 2026" },
    { title: "Micro-credentials for Lifelong Learning and Employability: Uses and Possibilities (Education Policy Perspectives No. 66)", publisher: "OCDE", url: OCDE, date: "2023" },
    { title: "Micro-Credentials Impact Report 2026", publisher: "Coursera", url: COURSERA, date: "2026", note: "Encuesta en siete países, sin Colombia" },
    { title: "Educación sin límites: Aprendizaje a lo largo de la vida. Lineamientos para programas de corta duración", publisher: "Universidad Autónoma de Bucaramanga", url: UNAB, date: "mayo de 2025" },
    { title: "Caso Uniandes × Sanofi CHC: educación médica multinacional en 8 semanas", publisher: "merahki.ai", url: "https://merahki.ai/es/case-studies/uniandes-sanofi-microbiota", date: "2022" },
  ],
  related: [
    "microcredenciales-que-son-como-disenarlas",
    "homologacion-de-microcredenciales-creditos-academicos",
    "upskilling-reskilling-programas-empresas",
    "modelo-kirkpatrick-medir-impacto-capacitacion",
    "habilidades-que-piden-los-empleadores-2026",
  ],
};
