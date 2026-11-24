import type { Articulo } from "../types";

const POK_EAN = "https://www.pok.tech/blog/es/posts/certificar-competencias-ia-microcredenciales-universidad-ean";
const UNESCO_DOC = "https://www.unesco.org/en/articles/ai-competency-framework-teachers";
const UNESCO_EST = "https://www.unesco.org/en/articles/ai-competency-framework-students";
const WEF = "https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf";
const GSR_LATAM = "https://assets.ctfassets.net/2pudprfttvy6/2t8yLdlsVhXxlDNLhMCJ9v/e0f1f43900959a941ff386a06a94efa9/2026_Informe_global-de_habilidades.pdf";
const MNC = "https://especiales.colombiaaprende.edu.co/mnc/definicion.html";

export const articulo: Articulo = {
  slug: "certificar-competencias-en-inteligencia-artificial",
  lang: "es",
  title:
    "Certificar competencias en inteligencia artificial: cómo diseñar microcredenciales de IA para docentes, estudiantes y equipos de empresa",
  seoTitle: "Certificar competencias en inteligencia artificial",
  description:
    "Cómo certificar competencias en IA con microcredenciales: nombrar la capacidad y no la herramienta, evaluar un entregable y alinear con UNESCO y el MNC.",
  kicker: "Inteligencia artificial",
  keywords: [
    "certificar competencias en inteligencia artificial",
    "competencias en inteligencia artificial para docentes",
    "marco de competencias en IA UNESCO",
    "microcredenciales de inteligencia artificial",
    "formación en IA para empresas",
    "programa de formación en IA por competencias",
  ],
  published: "2026-11-24",
  readingMinutes: 7,
  summary: [
    `<strong>Certificar competencias en inteligencia artificial</strong> es emitir una credencial que pruebe lo que una persona hizo con IA, evaluado con un entregable real y un criterio explícito.`,
    `Un certificado que nombra una herramienta caduca con ella. Uno que nombra una capacidad observable sigue vigente cuando la herramienta cambia.`,
    `Los marcos de competencias en IA de UNESCO (2024) dan el vocabulario para docentes y estudiantes. En Colombia, la CUOC y el MNC dicen a qué ocupación y a qué nivel aporta la competencia.`,
    `La Universidad Ean, en un caso documentado por POK, certifica la capacidad y no la herramienta, e incluye a sus docentes.`,
    `Lo que se mide desde el primer día es aprobación por entregable, transferencia al trabajo y uso real de la competencia.`,
  ],
  body: [
    {
      t: "p",
      html: `<strong>Certificar competencias en inteligencia artificial</strong> es emitir una credencial que pruebe lo que una persona hizo con IA, evaluado con un entregable real y un criterio explícito, en lugar de certificar que asistió a un curso sobre una herramienta. Para universidades y empresas, el reto está en el diseño: qué capacidad se nombra, qué evidencia se pide y quién la evalúa.`,
    },
    {
      t: "p",
      html: `Este artículo adapta el <a href="${POK_EAN}">caso de la Universidad Ean que documentó POK</a> en agosto de 2026. Es un caso de POK, no de merahki. Tomamos su principio de diseño y lo desarrollamos con lo que hacemos en merahki: redactar la competencia, diseñar la evidencia, alinear con marcos de referencia y medir.`,
    },
    {
      t: "p",
      html: `El contexto explica la prisa. Según el <a href="${WEF}">Future of Jobs Report 2025</a> del Foro Económico Mundial, en promedio el 39 % de las habilidades actuales de un trabajador cambiará o quedará obsoleto entre 2025 y 2030, y la IA y el big data encabezan las habilidades de mayor crecimiento. En Colombia la demanda de formación en IA crece rápido, pero las habilidades que permiten usarla con criterio casi no se mueven.`,
    },
    {
      t: "stats",
      items: [
        { value: "39 %", label: "de las habilidades de un trabajador cambiará o quedará obsoleto entre 2025 y 2030 (44 % en Colombia)", source: "WEF, Future of Jobs Report 2025, p. 6 y 128", href: WEF },
        { value: "+95 %", label: "crecieron en Colombia las inscripciones en microcredenciales de IA en Coursera", source: "Coursera, Informe global de habilidades 2026, Latinoamérica y el Caribe, p. 20", href: GSR_LATAM },
        { value: "+2 %", label: "crecieron en Colombia las inscripciones en pensamiento crítico (resolución de problemas complejos: −2 %)", source: "Coursera, Informe global de habilidades 2026, Latinoamérica y el Caribe, p. 20", href: GSR_LATAM },
      ],
    },
    { t: "h2", text: "Por qué un certificado de «curso de IA» prueba poco", id: "problema" },
    {
      t: "p",
      html: `La mayoría de instituciones arranca por el catálogo: arma el curso de IA generativa, lo dicta y al final entrega un certificado con el nombre del curso y las horas. Ese certificado dice que alguien asistió. No dice qué puede hacer. Y como nombra una herramienta, envejece al ritmo de la herramienta.`,
    },
    {
      t: "p",
      html: `Hay un problema adicional, propio de la IA. Hojas de vida, portafolios y código se pueden generar con la misma tecnología que se está certificando. La evidencia tradicional pierde fuerza. Lo que una IA no puede fabricar es el respaldo de la institución que evaluó el trabajo. Por eso, en este campo la credencial verificable pesa más que en otros: lo que el empleador comprueba es el respaldo de la institución.`,
    },
    {
      t: "quote",
      text: "Nadie puede hacer que la Universidad Ean la respalde.",
      cite: "POK, sobre una credencial fabricada con IA",
      href: POK_EAN,
    },
    { t: "h2", text: "Qué hizo la Universidad Ean, según POK", id: "caso-ean" },
    {
      t: "ul",
      items: [
        `<strong>Certifica la capacidad.</strong> Los nombres de las credenciales describen lo que la persona hizo. POK cita, entre otras, «Prototipado y Soluciones con IA» y «Consultoría en Innovación para la Sostenibilidad Empresarial».`,
        `<strong>Trabaja sobre producción real.</strong> Los programas de IA se construyen alrededor de entregables, lo que los vuelve evaluables.`,
        `<strong>Incluye a quien enseña.</strong> Emite credenciales para estudiantes, docentes y personal. Los docentes que hacen el programa adoptan mejor el modelo y calibran los criterios de evaluación.`,
        `<strong>Una credencial para varios países.</strong> Un mismo programa con participantes de Colombia, México y Ecuador entrega la misma credencial, que se verifica igual en los tres.`,
        `<strong>Emite con estándar.</strong> Las credenciales usan Open Badges 3.0 y se emiten con POK.`,
      ],
    },
    {
      t: "p",
      html: `POK es honesto con el alcance: los cambios que reporta son de proceso y de comportamiento, todavía no métricas de empleabilidad. Esa es justo la parte que conviene diseñar desde el inicio, y la tratamos al final.`,
    },
    { t: "h2", text: "Cómo nombrar una competencia en IA que no caduque con la herramienta", id: "nombrar" },
    {
      t: "p",
      html: `La regla práctica: si el nombre de la credencial deja de tener sentido cuando sale una versión nueva del software, está mal nombrada. Estos ejemplos ilustrativos muestran la diferencia.`,
    },
    {
      t: "table",
      head: ["Nombre que caduca", "Nombre que describe la capacidad", "Evidencia que se evalúa"],
      rows: [
        ["Curso de ChatGPT para docentes", "Diseña actividades de evaluación con apoyo de IA generativa y verifica su validez", "Una actividad aplicada en clase, con la rúbrica y el análisis de resultados"],
        ["Prompt engineering básico", "Formula instrucciones para modelos de lenguaje y evalúa la calidad de sus respuestas en tareas del cargo", "Un banco de instrucciones probado en casos reales, con criterios de calidad"],
        ["Automatización con IA", "Automatiza un proceso del área con herramientas de IA y mide el tiempo ahorrado", "El flujo funcionando, con medición antes y después"],
        ["IA para marketing", "Produce y valida piezas de contenido con IA según las políticas de marca y de datos de la empresa", "Piezas aprobadas, con registro de la revisión humana"],
      ],
      caption: "Ejemplos ilustrativos de merahki.",
    },
    {
      t: "p",
      html: `Después se redacta el resultado de aprendizaje con cuatro partes: verbo, objeto, condición y criterio. Por ejemplo: al terminar, el docente <em>diseña</em> un instrumento de evaluación <em>con apoyo de un modelo de lenguaje</em>, <em>para un curso que ya dicta</em>, y <em>documenta cómo verificó la validez de cada ítem</em>. Ese resultado se puede observar, se puede evaluar y no depende de qué modelo use la persona el año entrante.`,
    },
    { t: "h2", text: "Qué marcos de referencia usar: UNESCO, CUOC y MNC", id: "marcos" },
    {
      t: "p",
      html: `UNESCO publicó en 2024 dos marcos de competencias en IA, uno para <a href="${UNESCO_DOC}">docentes</a> y otro para <a href="${UNESCO_EST}">estudiantes</a>. Sirven como vocabulario común para nombrar competencias y para decidir qué tan profundo va cada programa. Los nombres en español de la tabla son traducción nuestra.`,
    },
    {
      t: "table",
      head: ["Marco", "Para quién", "Estructura", "Para qué sirve en el diseño"],
      rows: [
        ["UNESCO, marco de competencias en IA para docentes (2024)", "Docentes", "15 competencias en 5 dimensiones: mentalidad centrada en el ser humano, ética de la IA, fundamentos y aplicaciones de la IA, pedagogía de la IA e IA para el desarrollo profesional. Tres niveles: adquirir, profundizar y crear.", "Definir qué debe lograr un programa para profesores y en qué nivel."],
        ["UNESCO, marco de competencias en IA para estudiantes (2024)", "Estudiantes", "12 competencias en 4 dimensiones: mentalidad centrada en el ser humano, ética de la IA, técnicas y aplicaciones de la IA y diseño de sistemas de IA. Tres niveles: comprender, aplicar y crear.", "Ubicar los resultados de aprendizaje de un curso o una ruta de IA."],
        ["CUOC (Clasificación Única de Ocupaciones para Colombia)", "Empleadores y talento humano", "Ocupaciones con sus funciones.", "Decir a qué ocupación aporta la competencia certificada."],
        ["MNC (Marco Nacional de Cualificaciones)", "Sistema educativo colombiano", "Ocho niveles por conocimientos, destrezas y actitudes.", "Ubicar la complejidad del logro y preparar su reconocimiento."],
      ],
      caption: "Fuentes: UNESCO (2024) y Ministerio de Educación Nacional, portal del MNC.",
    },
    {
      t: "p",
      html: `Los marcos de UNESCO responden a «qué competencia» y la CUOC y el <a href="${MNC}">MNC</a> responden a «para qué ocupación y en qué nivel». Un programa bien alineado declara las tres cosas en la credencial. Así lo hacemos en la <a href="/es/methodology">metodología de diseño instruccional por competencias</a>.`,
    },
    { t: "h2", text: "Cómo se diseña la evidencia y quién la evalúa", id: "evidencia" },
    {
      t: "ol",
      items: [
        `<strong>Construye el programa alrededor de un entregable.</strong> Que venga del trabajo real del participante: su curso, su proceso, su área.`,
        `<strong>Escribe la rúbrica antes de producir el contenido.</strong> Niveles con descriptores observables y el nivel mínimo para emitir.`,
        `<strong>Pide el proceso, además del producto.</strong> Las instrucciones que usó, las verificaciones que hizo y las correcciones que aplicó a lo que entregó la IA. Así se evalúa el criterio de la persona.`,
        `<strong>Confirma la autoría.</strong> Una defensa corta del entregable, oral o en video, resuelve la mayoría de las dudas.`,
        `<strong>Calibra a los evaluadores.</strong> Los docentes que evalúan hacen primero el programa. Es lo que hizo la Ean y es lo que vuelve consistentes los criterios.`,
      ],
    },
    { t: "cta", html: `Si vas a lanzar un programa de IA para docentes, estudiantes o equipos, merahki diseña las competencias, la evidencia y la emisión verificable con POK.` },
    { t: "h2", text: "Cómo emitir y apilar las credenciales de IA", id: "emision" },
    {
      t: "p",
      html: `La credencial se emite desde el primer programa, sin esperar a que el catálogo esté completo. Con Open Badges 3.0, cada insignia lleva la competencia, los criterios, la evidencia y la alineación con los marcos. Conviene que salga dentro del recorrido, conectada al LMS, cuando la persona alcanza el nivel de la rúbrica. Si la idea es que varias credenciales sumen a un programa mayor, la regla de equivalencia se define antes de escalar. El detalle de emisión está en <a href="/es/certification">certificación con credenciales verificables</a>.`,
    },
    {
      t: "p",
      html: `En una empresa, la lógica es la misma. Cada rol tiene sus competencias en IA, el entregable sale del trabajo del equipo y la credencial alimenta la movilidad interna. Así trabajamos la <a href="/es/training-certification">capacitación y certificación para empresas</a>.`,
    },
    { t: "h2", text: "Qué medir desde el primer día", id: "medir" },
    {
      t: "p",
      html: `El caso de la Ean todavía no mide empleabilidad, y es normal en un programa nuevo. Lo que no conviene es lanzar sin un plan de medición. Usamos los niveles del modelo Kirkpatrick.`,
    },
    {
      t: "table",
      head: ["Nivel", "Qué medir en un programa de IA", "Cuándo"],
      rows: [
        ["1. Reacción", "Utilidad percibida para el trabajo", "Al cierre de cada módulo"],
        ["2. Aprendizaje", "Porcentaje que alcanza el nivel de emisión en la rúbrica del entregable", "Al evaluar el entregable"],
        ["3. Transferencia", "Uso real de la competencia en el trabajo, confirmado por el jefe o el coordinador", "Entre 30 y 90 días después"],
        ["4. Resultados", "Tiempo ahorrado, calidad o volumen en el proceso que se intervino", "Según el ciclo del proceso"],
        ["Credencial", "Emisiones, aceptación y credenciales compartidas", "Desde la emisión"],
      ],
    },
  ],
  faq: [
    {
      q: "¿Cómo se certifican competencias en inteligencia artificial?",
      a: `Se nombra la competencia aplicada, se evalúa un entregable concreto con una rúbrica y se emite una credencial digital verificable cuando la persona alcanza el nivel. La credencial debe declarar los criterios, la evidencia y el marco de referencia.`,
    },
    {
      q: "¿Sirve un certificado de un curso de inteligencia artificial?",
      a: `Sirve para probar asistencia. No prueba lo que la persona sabe hacer y, si nombra una herramienta, pierde vigencia cuando la herramienta cambia. Un empleador le da más peso a una credencial que describe la capacidad y la evidencia.`,
    },
    {
      q: "¿Qué es el marco de competencias en IA de UNESCO?",
      a: `Son dos marcos que UNESCO publicó en 2024. El de docentes tiene 15 competencias en 5 dimensiones y el de estudiantes, 12 competencias en 4 dimensiones, cada uno con tres niveles de progresión. Sirven como vocabulario común para diseñar programas de IA.`,
    },
    {
      q: "¿Conviene certificar también a los docentes en competencias de IA?",
      a: `Sí. Los docentes que hacen el programa entienden mejor el modelo, lo adoptan en sus cursos y evalúan con criterios más consistentes. En el caso de la Ean documentado por POK, la institución certifica a estudiantes, docentes y personal.`,
    },
    {
      q: "¿Cómo evitar que la IA haga el entregable por el participante?",
      a: `Pide el proceso además del producto: las instrucciones usadas, las verificaciones y las correcciones. Agrega una defensa corta del entregable. La meta es evaluar el criterio con que la persona usa la IA.`,
    },
    {
      q: "¿Una empresa puede usar el mismo modelo?",
      a: `Sí. Se definen las competencias en IA de cada rol, el entregable sale del trabajo real del equipo y la credencial queda en el registro de habilidades de la persona. La medición se enfoca en la transferencia al puesto y en el resultado del proceso.`,
    },
  ],
  sources: [
    { title: "Cómo certificar competencias en inteligencia artificial: el caso de la Universidad Ean", publisher: "POK", url: POK_EAN, date: "2026-08-21" },
    { title: "AI competency framework for teachers", publisher: "UNESCO", url: UNESCO_DOC, date: "2024" },
    { title: "AI competency framework for students", publisher: "UNESCO", url: UNESCO_EST, date: "2024" },
    { title: "Future of Jobs Report 2025", publisher: "World Economic Forum", url: WEF, date: "2025-01", note: "p. 6 y perfil de Colombia, p. 128" },
    { title: "Informe global de habilidades 2026. Latinoamérica y el Caribe", publisher: "Coursera", url: GSR_LATAM, date: "2026-10", note: "Ficha de Colombia, p. 20" },
    { title: "Definición del Marco Nacional de Cualificaciones", publisher: "Ministerio de Educación Nacional de Colombia", url: MNC },
  ],
  adaptedFrom: {
    title: "Cómo certificar competencias en inteligencia artificial: el caso de la Universidad Ean",
    publisher: "POK",
    url: POK_EAN,
    date: "2026-08-21",
  },
  related: [
    "microcredenciales-que-son-como-disenarlas",
    "diseno-instruccional-por-competencias",
    "credenciales-digitales-verificables",
    "modelo-kirkpatrick-medir-impacto-capacitacion",
  ],
};
