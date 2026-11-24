import type { Articulo } from "../types";

const WEF = "https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf";
const GSR_LATAM = "https://assets.ctfassets.net/2pudprfttvy6/2t8yLdlsVhXxlDNLhMCJ9v/e0f1f43900959a941ff386a06a94efa9/2026_Informe_global-de_habilidades.pdf";
const MCIR = "https://assets.ctfassets.net/2pudprfttvy6/3P06Oe48cjFLCwxNo45yEB/53de4a32ceb2d09f553bb3d32dc17d84/Micro-Credentials_Impact_Report_2026.pdf";
const POK_TALENTO = "https://www.pok.tech/blog/es/posts/credenciales-digitales-potencial-talento-pok";
const OCUPACOL = "https://ocupacol.mintrabajo.gov.co/";
const MNC = "https://especiales.colombiaaprende.edu.co/mnc/definicion.html";

export const articulo: Articulo = {
  slug: "upskilling-reskilling-programas-empresas",
  lang: "es",
  altSlug: "upskilling-reskilling-programs-companies",
  title: "Upskilling y reskilling: qué son y cómo una empresa diseña un programa que cierra brechas de habilidades medibles",
  seoTitle: "Upskilling y reskilling: qué son y cómo diseñar un programa",
  description: "Diferencia entre upskilling y reskilling, cómo detectar la brecha de habilidades por rol y cómo diseñar, certificar y medir un programa en tu empresa.",
  kicker: "Formación corporativa",
  keywords: [
    "upskilling",
    "reskilling",
    "qué es upskilling",
    "upskilling y reskilling",
    "programas de upskilling para empresas",
    "brecha de habilidades",
    "recalificación laboral",
  ],
  published: "2026-11-24",
  readingMinutes: 7,
  summary: [
    "<strong>Upskilling</strong> es formar a una persona para que haga mejor su cargo actual. <strong>Reskilling</strong> es formarla para un cargo distinto.",
    "Según las empresas encuestadas en Colombia por el Foro Económico Mundial, de cada 100 trabajadores 26 necesitarán upskilling en su cargo y 21 reskilling hacia otro cargo antes de 2030.",
    "Un programa empieza por la brecha de habilidades de cada rol, se diseña por competencias con evidencias sobre tareas reales y termina en credenciales verificables.",
    "Muchas empresas arman sus rutas con el portafolio de educación continua de universidades aliadas, más módulos a la medida para lo que esa oferta no cubre.",
    "El cambio se mide con una línea base tomada antes del primer módulo y con indicadores de productividad, retención, costos y experiencia.",
  ],
  body: [
    {
      t: "p",
      html: "<strong>Upskilling</strong> (mejora de habilidades) es formar a una persona para que haga mejor su trabajo actual o asuma tareas nuevas dentro de su mismo cargo. <strong>Reskilling</strong> (recalificación) es formarla para un cargo distinto, cuando el suyo cambia o deja de existir. Las dos son la respuesta de una empresa a la brecha de habilidades: la distancia entre lo que un rol exige y lo que su gente sabe hacer hoy.",
    },
    {
      t: "p",
      html: "Esta guía explica cómo una empresa en Colombia o en América Latina detecta esa brecha, diseña el programa, certifica lo aprendido y mide el cambio. También explica cómo usar el portafolio de universidades aliadas para armar las rutas.",
    },
    { t: "h2", text: "Qué es upskilling y qué es reskilling: diferencias con ejemplos" },
    {
      t: "table",
      head: ["", "Upskilling", "Reskilling"],
      rows: [
        ["Objetivo", "Hacer mejor el cargo actual o ampliarlo", "Pasar a otro cargo"],
        ["Cuándo se usa", "El cargo cambia por nuevas herramientas, IA o normas", "El cargo pierde peso o la empresa necesita perfiles que no encuentra afuera"],
        ["Ejemplo", "Un analista contable aprende a automatizar conciliaciones con IA", "Una asistente administrativa se forma como analista de datos"],
        ["Qué se certifica", "Las competencias nuevas del mismo rol", "Las competencias del rol de destino"],
        ["Indicador principal", "Productividad y calidad en el cargo", "Vacantes cubiertas con talento interno y tiempo a productividad en el rol nuevo"],
      ],
    },
    {
      t: "p",
      html: "El <a href=\"" + WEF + "\">Future of Jobs Report 2025 del Foro Económico Mundial</a> pone cifras a las dos necesidades en el perfil de Colombia, construido con las respuestas de las empresas encuestadas en el país.",
    },
    {
      t: "stats",
      items: [
        { value: "26 de 100", label: "trabajadores en Colombia necesitarían upskilling en su cargo actual para 2030", source: "WEF, Future of Jobs Report 2025, p. 129", href: WEF },
        { value: "21 de 100", label: "necesitarían reskilling para ser reubicados en otro cargo", source: "WEF, Future of Jobs Report 2025, p. 129", href: WEF },
        { value: "8 de 100", label: "necesitarían formación y no la recibirían", source: "WEF, Future of Jobs Report 2025, p. 129", href: WEF },
      ],
    },
    {
      t: "p",
      html: "El mismo perfil muestra hacia dónde se mueven los cargos. Entre los que más crecen en Colombia están los especialistas en IA y aprendizaje automático y los analistas y científicos de datos. Entre los que caen, los asistentes administrativos y los secretarios ejecutivos. Es el ejemplo de reskilling de la tabla.",
    },
    { t: "h2", text: "Por qué la brecha de habilidades en Colombia exige programas propios" },
    {
      t: "p",
      html: "El 65 % de las empresas encuestadas en Colombia por el WEF ve las brechas de habilidades como barrera clave para transformar su negocio, y el 71 % planea recalificar a su gente para trabajar con IA. La demanda de formación en IA ya se nota: según el <a href=\"" + GSR_LATAM + "\">Informe global de habilidades 2026 de Coursera para América Latina</a>, las inscripciones de colombianos en microcredenciales de IA crecieron 95 %.",
    },
    {
      t: "p",
      html: "El mismo informe trae el dato que más preocupa. En Colombia, las inscripciones en pensamiento crítico subieron solo 2 % y las de resolución de problemas complejos cayeron 2 %, mientras en la región crecieron 32 % y 19 %. Los datos sugieren que la gente se inscribe para aprender herramientas y mucho menos para el criterio con que se decide con ellas. Un buen programa de upskilling une las dos cosas en la misma ruta.",
    },
    { t: "h2", text: "Cómo detectar la brecha de habilidades por rol" },
    {
      t: "ol",
      items: [
        "Elige los roles críticos: los que más pesan en ingresos, calidad o riesgo, y los que tu plan estratégico señala como roles que van a cambiar.",
        "Define las competencias de cada rol. La Clasificación Única de Ocupaciones (CUOC), que puedes consultar en <a href=\"" + OCUPACOL + "\">Ocupacol</a>, describe las funciones de cada ocupación, y el <a href=\"" + MNC + "\">Marco Nacional de Cualificaciones</a> ayuda a fijar el nivel.",
        "Mide el nivel actual con tres fuentes: una autoevaluación, la evaluación del líder y una prueba práctica sobre una tarea real del cargo.",
        "Prioriza las brechas por impacto: cuánto le cuesta al negocio que esa competencia falte y cuántas personas la necesitan.",
      ],
    },
    {
      t: "p",
      html: "El resultado es un mapa de habilidades por rol. Ese mapa define qué rutas se diseñan primero y contra qué se mide el avance.",
    },
    { t: "h2", text: "Cómo diseñar un programa de upskilling o reskilling" },
    {
      t: "p",
      html: "El diseño parte de la competencia que hay que cerrar, y el catálogo de cursos disponible se revisa después. Cada competencia se traduce en resultados de aprendizaje, cada resultado en una evidencia y cada evidencia en las actividades que preparan para lograrla. Estos cuatro criterios separan un programa que cierra brechas de uno que solo suma horas de formación.",
    },
    {
      t: "ul",
      items: [
        "<strong>Rutas cortas y apilables.</strong> Cada módulo certifica una competencia, y la persona puede aplicarla en su trabajo antes de seguir con el siguiente.",
        "<strong>Evidencia sobre una tarea real.</strong> La evaluación pide un producto del trabajo: un reporte, un procedimiento aplicado, una conversación con un cliente.",
        "<strong>Tiempo protegido.</strong> Si la formación queda para después de la jornada, compite con la operación y casi siempre pierde.",
        "<strong>Práctica en el rol de destino.</strong> En reskilling, la ruta incluye una rotación o un acompañamiento con alguien del área nueva antes del cambio formal de cargo.",
      ],
    },
    {
      t: "p",
      html: "La formación dirigida por rol tiene respaldo en la percepción de los empleadores. En el <a href=\"" + MCIR + "\">Micro-Credentials Impact Report 2026 de Coursera</a>, el 62 % de los empleadores reporta un aumento significativo de productividad con formación por rol basada en microcredenciales, y el 52 % un impacto significativo en rentabilidad. Es una encuesta a empleadores de siete países, con México como único país latino, y recoge lo que declaran, sin un resultado auditado.",
    },
    { t: "h2", text: "Upskilling y reskilling con el portafolio de universidades aliadas" },
    {
      t: "p",
      html: "Una parte de lo que una empresa necesita enseñar ya existe en la oferta de educación continua de las universidades: diplomados, cursos cortos y microcredenciales en analítica, gestión, IA, finanzas o liderazgo. En merahki, varias empresas nos piden articular el portafolio de universidades para sus procesos de upskilling y reskilling. El trabajo tiene cuatro pasos.",
    },
    {
      t: "ol",
      items: [
        "Mapa de brechas por rol, con las competencias que el programa debe cerrar.",
        "Lectura del portafolio de una o varias universidades para encontrar los cursos cuyos resultados de aprendizaje corresponden a esas competencias. La ficha comercial de un curso no alcanza: hay que revisar su sílabo y sus evaluaciones.",
        "Armado de la ruta con módulos de universidades distintas en un orden lógico, más los módulos a la medida que esa oferta no cubre, como los procesos internos de la empresa.",
        "Evidencias y certificación comunes para toda la ruta, para que la empresa vea el avance con un solo criterio y la persona reciba credenciales verificables.",
      ],
    },
    {
      t: "table",
      head: ["Parte", "Qué aporta", "Qué decide"],
      rows: [
        ["Empresa", "Los roles, las brechas, los datos del negocio y el tiempo de su gente", "Qué rutas se priorizan y quién participa"],
        ["Universidad", "Programas con respaldo académico y docentes expertos", "El contenido y la evaluación de sus cursos"],
        ["merahki", "Diseño de la ruta por competencias, módulos a la medida, operación y medición", "Cómo se articulan las piezas y cómo se reporta el avance"],
      ],
      caption: "Cada parte decide sobre lo suyo. La ruta articulada tiene un solo tablero de avance.",
    },
    {
      t: "p",
      html: "Para la universidad, este modelo abre una línea de ingresos B2B en su educación continua. Así lo trabajamos con las unidades de <a href=\"/es/lifelong-learning\">Lifelong Learning de las universidades</a>.",
    },
    { t: "h2", text: "Cómo certificar lo aprendido en un programa de upskilling" },
    {
      t: "p",
      html: "Un certificado interno en PDF no le dice nada a nadie fuera del área que lo emitió. Una credencial verificable dice qué competencia se acreditó, con qué criterios y con qué evidencia, y cualquiera puede comprobarla. POK lo explica en su <a href=\"" + POK_TALENTO + "\">artículo sobre credenciales para el talento en empresas</a>: las credenciales apilables por rol le dan a talento humano un registro objetivo para decidir ascensos y movimientos internos.",
    },
    {
      t: "p",
      html: "El criterio de la credencial importa. En el mercado laboral, el certificado en línea suelto todavía pesa poco: solo el 14 % de los empleadores encuestados por el WEF planea considerarlo al contratar. Por eso cada credencial debe llevar sus criterios y su evidencia. En merahki las emitimos con POK en estándar Open Badges 3.0, como explicamos en la página de <a href=\"/es/certification\">certificación con credenciales verificables</a>.",
    },
    { t: "h2", text: "Cómo medir el cambio de un programa de upskilling o reskilling" },
    {
      t: "table",
      head: ["Familia de indicadores", "Upskilling", "Reskilling"],
      rows: [
        ["Productividad", "Tiempo por tarea, volumen y errores", "Tiempo a productividad en el rol nuevo"],
        ["Retención", "Rotación de las personas formadas", "Vacantes cubiertas con talento interno"],
        ["Costos", "Reprocesos y horas extra", "Contratación externa evitada"],
        ["Experiencia", "Satisfacción con la formación y clima del equipo", "Satisfacción del líder que recibe a la persona"],
      ],
    },
    {
      t: "p",
      html: "Los niveles 3 y 4 del modelo Kirkpatrick (comportamiento y resultados) se revisan a los 30 y a los 90 días. La comparación más honesta es contra un grupo de personas del mismo rol que todavía no ha pasado por la ruta.",
    },
    {
      t: "callout",
      title: "La línea base se toma antes del primer módulo",
      html: "Si el indicador no se mide antes de empezar, al final no hay contra qué comparar y el programa solo puede reportar inscritos y horas. Elegir uno o dos indicadores por ruta y medirlos desde el día uno es lo que permite defender el presupuesto del año siguiente.",
    },
    {
      t: "p",
      html: "merahki diseña, virtualiza, opera y mide programas de upskilling y reskilling para empresas, con rutas propias o articuladas con universidades. El detalle está en la página de <a href=\"/es/training-certification\">capacitación y certificación para empresas</a> y en nuestra <a href=\"/es/methodology\">metodología de diseño por competencias</a>.",
    },
    { t: "cta" },
  ],
  faq: [
    {
      q: "¿Qué es upskilling?",
      a: "Upskilling es formar a una persona para que haga mejor su trabajo actual o asuma tareas nuevas dentro de su mismo cargo. Se usa cuando el cargo cambia por nuevas herramientas, normas o procesos. En español también se dice mejora de habilidades.",
    },
    {
      q: "¿Cuál es la diferencia entre upskilling y reskilling?",
      a: "El upskilling forma para el mismo cargo y el reskilling forma para un cargo distinto. Un analista que aprende a automatizar su trabajo con IA hace upskilling. Una asistente administrativa que se forma como analista de datos hace reskilling.",
    },
    {
      q: "¿Qué es la brecha de habilidades?",
      a: "Es la distancia entre las competencias que un rol exige y las que su gente demuestra hoy. Se detecta definiendo las competencias del rol y midiendo el nivel actual con autoevaluación, evaluación del líder y una prueba práctica.",
    },
    {
      q: "¿Se puede hacer upskilling con cursos de universidades?",
      a: "Sí. Muchas empresas arman sus rutas con diplomados y cursos cortos de la educación continua de universidades aliadas. Lo que hace falta es revisar que los resultados de aprendizaje de esos cursos correspondan a las competencias del rol y completar con módulos a la medida lo que la oferta no cubre.",
    },
    {
      q: "¿Qué habilidades conviene priorizar en un programa de upskilling?",
      a: "Las que pide tu mapa de roles. Como referencia, las empresas encuestadas en Colombia por el WEF ponen al frente IA y big data, gestión del talento, liderazgo e influencia social, pensamiento creativo, y empatía y escucha activa.",
    },
    {
      q: "¿Cómo se mide el resultado de un programa de reskilling?",
      a: "Con indicadores del rol de destino: el tiempo que tarda la persona en ser productiva en el cargo nuevo, las vacantes que se cubren con talento interno y la contratación externa que se evita. Se mide contra una línea base tomada antes de empezar.",
    },
  ],
  sources: [
    { title: "Future of Jobs Report 2025", publisher: "Foro Económico Mundial (WEF)", url: WEF, date: "2025-01", note: "Perfil de Colombia, p. 76 y 128-129. Certificados en línea, p. 61-62" },
    { title: "Informe global de habilidades 2026: Latinoamérica y el Caribe", publisher: "Coursera", url: GSR_LATAM, date: "2026-10", note: "Perfil de Colombia, p. 20" },
    { title: "Micro-Credentials Impact Report 2026", publisher: "Coursera", url: MCIR, date: "2026", note: "Encuesta a más de 3.500 personas en 7 países (feb-mar 2026), p. 6" },
    { title: "Por qué las credenciales digitales son la clave para potenciar el talento en tu empresa", publisher: "POK", url: POK_TALENTO, date: "2025-09-10" },
    { title: "Ocupacol: Catálogo de Ocupaciones para Colombia (CUOC)", publisher: "Ministerio del Trabajo de Colombia", url: OCUPACOL },
    { title: "Definición del Marco Nacional de Cualificaciones", publisher: "Ministerio de Educación Nacional de Colombia", url: MNC },
  ],
  related: [
    "universidad-corporativa-como-crearla",
    "mapa-de-habilidades-empresa",
    "habilidades-que-piden-los-empleadores-2026",
    "microcredenciales-que-son-como-disenarlas",
    "roi-de-la-capacitacion-como-medirlo",
  ],
};
