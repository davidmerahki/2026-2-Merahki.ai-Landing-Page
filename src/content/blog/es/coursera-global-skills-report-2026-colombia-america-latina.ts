import type { Articulo } from "../types";

const GSR_LATAM_ES = "https://assets.ctfassets.net/2pudprfttvy6/2t8yLdlsVhXxlDNLhMCJ9v/e0f1f43900959a941ff386a06a94efa9/2026_Informe_global-de_habilidades.pdf";
const GSR_LATAM_PAGINA = "https://www.coursera.org/skills-reports/global/pdf/gsr-2026-latam-es";
const GSR_GLOBAL = "https://assets.ctfassets.net/2pudprfttvy6/3mZxZaJwIW5MA1ZkQHxnzH/9a273e6e888617e1ae22376338438daf/Global_Skills_Report_2026.pdf";
const GSR_LANDING = "https://www.coursera.org/skills-reports/global";
const GSR_2025 = "https://assets.ctfassets.net/2pudprfttvy6/2ROtnxoKY4HO0RlZqIh2q7/f4210ef336812af456c2b5382f34171c/Global_Skills_Report_2025_-_Latin_America_and_the_Caribbean.pdf";
const WEF = "https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf";

export const articulo: Articulo = {
  slug: "coursera-global-skills-report-2026-colombia-america-latina",
  lang: "es",
  altSlug: "coursera-global-skills-report-2026-latin-america",
  title: "Global Skills Report 2026 de Coursera: qué dice sobre Colombia y América Latina y qué deberían hacer las universidades y las empresas",
  seoTitle: "Global Skills Report 2026: Colombia y América Latina",
  description: "Global Skills Report 2026 de Coursera: Colombia es 4.ª de 18 en América Latina y 51 de 98 en el mundo. Qué mide el índice y qué hacer con estos datos.",
  kicker: "Informes y datos",
  keywords: [
    "global skills report 2026",
    "coursera global skills report colombia",
    "informe global de habilidades 2026",
    "habilidades en colombia",
    "habilidades de ia en américa latina",
    "microcredenciales de ia",
  ],
  published: "2026-11-24",
  readingMinutes: 7,
  summary: [
    `En el Global Skills Report 2026 de Coursera y Udemy, Colombia ocupa el puesto <strong>4 de 18</strong> en América Latina y el Caribe y el <strong>51 de 98</strong> en el mundo, en el nuevo Índice de sinergia entre habilidades humanas y de IA.`,
    `En Colombia las inscripciones en microcredenciales de IA crecieron 95 %, pero las de pensamiento crítico subieron solo 2 % y las de resolución de problemas complejos bajaron 2 %.`,
    `El puesto de 2026 no se puede comparar con el de 2025: la edición anterior usaba otro índice, con otros países y otros pesos.`,
    `El informe pide a la educación superior vincular currículo, práctica y evaluación con el trabajo, y a los empleadores formar y evaluar en el contexto real de cada rol.`,
  ],
  body: [
    {
      t: "p",
      html: `El <strong>Global Skills Report 2026</strong> de Coursera y Udemy ubica a <strong>Colombia en el puesto 4 de 18 países de América Latina y el Caribe, y en el 51 de 98 en el mundo</strong>, en su nuevo Índice de sinergia entre habilidades humanas y de IA. El índice mide qué tanto los estudiantes de la plataforma combinan habilidades de IA con habilidades humanas, como el pensamiento crítico, y lo cruza con la preparación del gobierno de cada país para la IA.`,
    },
    {
      t: "p",
      html: `Este artículo resume el <a href="${GSR_LATAM_PAGINA}">resumen regional del informe para América Latina y el Caribe</a>, publicado en español en octubre de 2026, y el <a href="${GSR_GLOBAL}">informe global</a> de septiembre de 2026. Las cifras son de Coursera y Udemy, con la página donde aparece cada una. La lectura sobre qué hacer en universidades y empresas es de merahki.ai, a partir de lo que diseñamos y operamos en Colombia.`,
    },
    {
      t: "stats",
      items: [
        { value: "51 de 98", label: "puesto de Colombia en el Índice de sinergia entre habilidades humanas y de IA", source: "Coursera y Udemy, GSR 2026, resumen LatAm, p. 12", href: GSR_LATAM_ES },
        { value: "4.ª de 18", label: "posición de Colombia en América Latina y el Caribe", source: "Coursera y Udemy, GSR 2026, resumen LatAm, p. 12", href: GSR_LATAM_ES },
        { value: "+95 %", label: "crecimiento de las inscripciones en microcredenciales de IA en Colombia", source: "Coursera y Udemy, GSR 2026, resumen LatAm, p. 20", href: GSR_LATAM_ES },
        { value: "+2 %", label: "crecimiento del pensamiento crítico en Colombia (región: +32 %)", source: "Coursera y Udemy, GSR 2026, resumen LatAm, p. 20", href: GSR_LATAM_ES },
      ],
    },
    { t: "h2", text: "Qué es el Global Skills Report 2026 y qué mide su índice" },
    {
      t: "p",
      html: `Es la octava edición del informe y la primera que combina datos de Coursera y Udemy, dos empresas que se están uniendo. Se basa en más de 300 millones de estudiantes registrados en las dos plataformas y compara abril de 2025 a marzo de 2026 con el año anterior (resumen LatAm, p. 3 y 32).`,
    },
    {
      t: "p",
      html: `El Índice de sinergia entre habilidades humanas y de IA clasifica 98 países. El 60 % del puntaje sale del comportamiento de aprendizaje en Coursera: qué tanto dominan los estudiantes las habilidades, cuántas personas desarrollan a la vez habilidades de IA y humanas, y qué tan amplio es el abanico de habilidades. El otro 40 % es el Government AI Readiness Index 2025 de Oxford Insights, que mide la preparación del gobierno (p. 32).`,
    },
    {
      t: "callout",
      title: "Lo que el índice no dice",
      html: `El índice no mide la habilidad de toda la población colombiana. Combina señales de quienes aprenden en una plataforma con un índice de preparación del gobierno. La lectura correcta es «Colombia es 51 de 98 en el Índice de sinergia de Coursera». Decir «Colombia es 51 del mundo en habilidades» es un error.`,
    },
    { t: "h2", text: "En qué puesto está Colombia y cómo se compara con América Latina" },
    {
      t: "p",
      html: `Solo tres de los 18 países de la región están en la mitad superior del índice: Puerto Rico, Brasil y Perú. Nueve están en el cuartil inferior (p. 10). Colombia queda de cuarta y abre el tramo que el informe llama emergente (puestos 51 a 75).`,
    },
    {
      t: "table",
      head: ["País", "Puesto regional", "Puesto global"],
      rows: [
        ["Puerto Rico", "1", "23"],
        ["Brasil", "2", "45"],
        ["Perú", "3", "49"],
        ["<strong>Colombia</strong>", "<strong>4</strong>", "<strong>51</strong>"],
        ["Uruguay", "5", "54"],
        ["Chile", "6", "59"],
        ["Costa Rica", "7", "62"],
        ["Argentina", "8", "68"],
        ["Ecuador", "9", "74"],
        ["México", "14", "88"],
      ],
      caption: "Fuente: Coursera y Udemy, Global Skills Report 2026, resumen de América Latina y el Caribe, p. 12. La tabla completa tiene 18 países.",
    },
    {
      t: "p",
      html: `El informe explica que la posición de Colombia se sostiene más en el indicador de sus estudiantes en Coursera, que está por encima del punto medio global, que en su resultado de preparación del gobierno, que está por debajo (p. 20). Dicho de otro modo: a Colombia la sostienen sus estudiantes más que la preparación de su gobierno.`,
    },
    { t: "h2", text: "Qué estudian los colombianos: la IA crece y el pensamiento crítico casi no se mueve" },
    {
      t: "table",
      head: ["Inscripciones (crecimiento anual)", "Colombia", "América Latina y el Caribe"],
      rows: [
        ["Todos los cursos de IA", "+53 %", "+68 %"],
        ["Microcredenciales de IA", "+95 %", "+115 %"],
        ["Seguridad de IA", "+409 %", "+248 %"],
        ["IA generativa", "+72 %", "+122 %"],
        ["Flujos de trabajo agénticos", "+37 %", "+154 %"],
        ["Innovación", "+50 %", "+57 %"],
        ["Pensamiento crítico", "+2 %", "+32 %"],
        ["Resolución de problemas complejos", "−2 %", "+19 %"],
      ],
      caption: "Fuente: Coursera y Udemy, GSR 2026, resumen LatAm, p. 12 y 20.",
    },
    {
      t: "p",
      html: `Para quien diseña formación, lo que más pesa son las dos últimas filas. Las habilidades de IA suben en todas las líneas, y las habilidades humanas que permiten usar bien la IA casi no crecen. El informe lo dice para Colombia: el interés en seguridad de la IA es una oportunidad para ampliar el acceso a las habilidades humanas que exige un uso responsable (p. 20).`,
    },
    {
      t: "p",
      html: `Entre los temas en tendencia en Colombia, el informe destaca en IA la escritura de instrucciones (prompts), la IA generativa, el uso de asistentes concretos y los fundamentos de IA. En habilidades humanas, la alineación con los interesados, la inteligencia emocional, el liderazgo de personas, la comunicación y la colaboración entre áreas (p. 21). El propio informe aclara que son señales del interés de los estudiantes y no de la demanda del mercado laboral.`,
    },
    { t: "h2", text: "Qué dice el informe sobre América Latina" },
    {
      t: "p",
      html: `En la región, las inscripciones en cursos de IA crecieron 68 % y las de microcredenciales de IA 115 %, cerca del 122 % mundial (p. 10). En el informe global, las microcredenciales en general crecieron 33 % (informe global, p. 31). El diagnóstico regional es que hay mucho interés y una preparación desigual: el acceso a formación avanzada, la infraestructura digital, la inversión y la ejecución de políticas varían mucho de un país a otro (p. 30). El informe cita además el índice de IA 2025 de la CEPAL, según el cual 13 de 19 países estudiados todavía no ofrecen materias de IA en la educación básica (p. 3).`,
    },
    { t: "h2", text: "Por qué el puesto de 2026 no se compara con el de 2025" },
    {
      t: "p",
      html: `En la <a href="${GSR_2025}">edición 2025 del resumen regional</a>, Colombia aparecía en el puesto 85 de 109 y 17 de 20 en la región. Ese ranking medía otra cosa: la proficiencia de los estudiantes en negocios, tecnología y ciencia de datos, con un peso de 25 % para los datos de Coursera y 75 % para indicadores de terceros como el Índice Global de Innovación y el PIB per cápita (edición 2025, p. 10 y 22).`,
    },
    {
      t: "p",
      html: `Pasar del 85 al 51 no quiere decir que Colombia haya ganado 34 puestos. Cambiaron el índice, el número de países y los pesos. Cualquier titular que compare los dos puestos está mezclando dos mediciones distintas.`,
    },
    { t: "cta" },
    { t: "h2", text: "Qué deberían hacer las universidades colombianas con este informe" },
    {
      t: "p",
      html: `El informe le pide a la educación superior incorporar la IA más temprano, ampliar la formación avanzada y vincular más los planes de estudio, el aprendizaje aplicado y la evaluación con las necesidades del trabajo (p. 30). Para una unidad de educación continua eso se traduce en tres decisiones de diseño:`,
    },
    {
      t: "ol",
      items: [
        "<strong>Diseñar en pares: una habilidad de IA con una habilidad humana.</strong> El informe muestra los pares que los estudiantes colombianos desarrollan juntos con más frecuencia que el promedio mundial, como aplicación de modelos de lenguaje con inteligencia emocional, con liderazgo de personas o con resolución de problemas complejos (p. 22). Un programa de IA que no evalúa el criterio deja por fuera justo lo que menos está creciendo.",
        "<strong>Certificar con evidencia de desempeño.</strong> Coursera propone cuatro rasgos de una microcredencial valiosa: un propósito ligado a un rol, un emisor confiable, estándares vigentes y resultados visibles (informe global, p. 32). Los cuatro se deciden en el diseño del programa.",
        "<strong>Alinear con el MNC y apilar.</strong> Una ruta de microcredenciales con resultados de aprendizaje alineados al Marco Nacional de Cualificaciones se puede actualizar por módulos sin rehacer un programa entero.",
      ],
    },
    {
      t: "p",
      html: `El informe global cita la encuesta de microcredenciales de Coursera de 2026: el 81 % de los líderes de educación superior dice que integrar microcredenciales acelera la actualización del currículo (informe global, p. 32). Así trabajamos el diseño de rutas en <a href="/es/lifelong-learning">Lifelong Learning</a>, con <a href="/es/certification">certificación verificable emitida con POK</a>.`,
    },
    { t: "h2", text: "Qué deberían hacer las empresas en Colombia" },
    {
      t: "p",
      html: `Para los empleadores, la recomendación del informe es identificar en qué roles y flujos de trabajo está cambiando la IA, dar espacio para practicar y evaluar la formación en el contexto del trabajo real (p. 30). En el informe global, Coursera reporta que el 62 % de los empleadores encuestados vio un aumento significativo de productividad con formación por rol a través de microcredenciales (informe global, p. 29). El Foro Económico Mundial apunta en la misma dirección: el 65 % de las empresas encuestadas en Colombia ve las brechas de habilidades como barrera para transformar su negocio (<a href="${WEF}">Future of Jobs Report 2025</a>, p. 76).`,
    },
    {
      t: "p",
      html: `En la práctica, eso pide tres cosas. Un <a href="/es/blog/mapa-de-habilidades-empresa">mapa de habilidades por rol</a>, para saber dónde cambia el trabajo y qué falta. Rutas que enseñen la herramienta y el criterio para usarla, con casos del propio negocio. Y medición más allá de la satisfacción: si el curso de IA no cambió una tarea a los 30 días ni un indicador a los 90, no cumplió. Es lo que hacemos en los programas de <a href="/es/training-certification">capacitación y certificación para empresas</a>.`,
    },
  ],
  faq: [
    {
      q: "¿Qué puesto ocupa Colombia en el Global Skills Report 2026?",
      a: "Colombia es 51 de 98 países en el Índice de sinergia entre habilidades humanas y de IA de Coursera y Udemy, y cuarta de 18 en América Latina y el Caribe, detrás de Puerto Rico, Brasil y Perú.",
    },
    {
      q: "¿Qué mide el Índice de sinergia entre habilidades humanas y de IA?",
      a: "Mide qué tanto los estudiantes de Coursera desarrollan juntas habilidades de IA y habilidades humanas (60 % del puntaje) y lo combina con el índice de preparación del gobierno para la IA de Oxford Insights (40 %). No mide la habilidad de toda la población.",
    },
    {
      q: "¿Por qué Colombia aparece en el puesto 85 en 2025 y en el 51 en 2026?",
      a: "Porque son índices distintos. La edición 2025 medía proficiencia en negocios, tecnología y ciencia de datos en 109 países, con 75 % de indicadores de terceros. La de 2026 usa el nuevo índice de sinergia en 98 países. Los dos puestos no se pueden comparar.",
    },
    {
      q: "¿Qué habilidades crecen más en Colombia según Coursera?",
      a: "La seguridad de IA (+409 %), la IA generativa (+72 %) y las microcredenciales de IA (+95 %). En cambio, el pensamiento crítico creció solo 2 % y la resolución de problemas complejos bajó 2 %.",
    },
    {
      q: "¿Dónde se descarga el Global Skills Report 2026?",
      a: "En la página de informes de Coursera (coursera.org/skills-reports/global), que pide un formulario. El resumen de América Latina y el Caribe tiene versión en español y en inglés.",
    },
  ],
  sources: [
    { title: "Informe global de habilidades 2026: América Latina y el Caribe", publisher: "Coursera y Udemy", url: GSR_LATAM_ES, date: "2026-10", note: "p. 3, 10, 12, 20, 21, 22, 30 y 32" },
    { title: "Global Skills Report 2026: The AI-Human Skills Advantage", publisher: "Coursera y Udemy", url: GSR_GLOBAL, date: "2026-09", note: "p. 29, 31 y 32" },
    { title: "Global Skills Report 2026 (página del informe)", publisher: "Coursera", url: GSR_LANDING },
    { title: "Global Skills Report 2025: Latin America and the Caribbean", publisher: "Coursera", url: GSR_2025, date: "2025-05", note: "Edición anterior, otro índice. p. 10 y 22" },
    { title: "Future of Jobs Report 2025", publisher: "Foro Económico Mundial", url: WEF, date: "2025-01", note: "p. 76" },
  ],
  adaptedFrom: {
    title: "Informe global de habilidades 2026: América Latina y el Caribe",
    publisher: "Coursera y Udemy",
    url: GSR_LATAM_PAGINA,
    date: "2026-10",
  },
  related: [
    "habilidades-que-piden-los-empleadores-2026",
    "informe-microcredenciales-coursera-2026",
    "mapa-de-habilidades-empresa",
    "certificar-competencias-en-inteligencia-artificial",
  ],
};
