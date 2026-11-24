import type { Articulo } from "../types";

const WEF = "https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf";
const QS = "https://insights.qs.com/hubfs/Reports/QS_World_Future_Skills_Index_2027.pdf";
const QS_WEBINAR = "https://insights.qs.com/hubfs/Webinar%20Presentations/World%20Future%20Skills%20Index%202027/World%20Future%20Skills%20Index%202027.pdf";
const QS_2018 = "https://www.topuniversities.com/sites/default/files/qsglobalskillsgapreport.pdf";
const HOLONIQ = "https://www.holoniq.com/notes/2026-latin-america-edtech-100";
const HOLONIQ_BID = "https://www.holoniq.com/notes/education-technology-in-latin-america-and-the-caribbean";
const UNESCO_MC = "https://connect.unevoc.unesco.org/home/UNESCO+Publications/lang=en/akt=detail/qs=6648";
const OCDE = "https://www.fisme.science.uu.nl/publicaties/literatuur/2023_oecd_micro_credentials.pdf";

const a = (href: string, text: string) => `<a href="${href}">${text}</a>`;

export const articulo: Articulo = {
  slug: "habilidades-que-piden-los-empleadores-2026",
  lang: "es",
  altSlug: "skills-employers-want-2026",
  title: "Habilidades que piden los empleadores en 2026 según el WEF, QS y HolonIQ: datos de Colombia y cómo formarlas y certificarlas con evidencia",
  seoTitle: "Habilidades que piden los empleadores en 2026",
  description: "Las habilidades que piden los empleadores en 2026 según el WEF, QS y HolonIQ, con datos de Colombia y cómo formarlas y certificarlas con evidencia.",
  kicker: "Habilidades y empleo",
  keywords: [
    "habilidades que piden los empleadores",
    "habilidades más demandadas 2026",
    "habilidades del futuro",
    "future of jobs 2025 Colombia",
    "brecha de habilidades Colombia",
    "habilidades blandas empleadores",
    "skills gap",
  ],
  published: "2026-11-24",
  readingMinutes: 8,
  summary: [
    "Según el <strong>Future of Jobs Report 2025</strong> del Foro Económico Mundial, el pensamiento analítico es la habilidad central más buscada, y las que más crecen a 2030 son IA y big data, redes y ciberseguridad, alfabetización tecnológica, pensamiento creativo, resiliencia y curiosidad.",
    "En Colombia, el 65 % de las empresas encuestadas ve la brecha de habilidades como barrera clave, cambiará el 44 % de las habilidades centrales y 55 de cada 100 trabajadores necesitarán formación para 2030.",
    "Cuatro de las cinco habilidades de uso creciente en Colombia son humanas: gestión del talento, liderazgo e influencia social, pensamiento creativo y empatía. QS confirma que las brechas en habilidades humanas igualan o superan a las técnicas.",
    "Solo el 14 % de los empleadores planea tener en cuenta los certificados en línea al contratar. El 81 % confía en la experiencia y el 48 % en pruebas de habilidades.",
    "La respuesta es diseñar por comportamientos observables y emitir credenciales verificables con criterios y evidencia de desempeño.",
  ],
  body: [
    {
      t: "p",
      html: `Las habilidades que más piden los empleadores para 2026 a 2030 son el pensamiento analítico, la IA y el big data, las redes y la ciberseguridad y la alfabetización tecnológica, junto con habilidades humanas como el pensamiento creativo, la resiliencia, la flexibilidad y la curiosidad, según el ${a(WEF, "Future of Jobs Report 2025")} del Foro Económico Mundial. En Colombia, el 65 % de las empresas encuestadas ve la brecha de habilidades como la primera barrera para transformar su negocio.`,
    },
    {
      t: "p",
      html: "Este artículo adapta el informe del Foro Económico Mundial (WEF) y lo cruza con el World Future Skills Index 2027 de QS y con las notas de HolonIQ sobre el mercado de formación en América Latina. Es para directores de talento humano, de educación continua y de universidades corporativas que tienen que decidir qué formar en 2026 y cómo demostrar que se aprendió.",
    },

    { t: "h2", text: "Qué habilidades piden los empleadores según el Foro Económico Mundial" },
    {
      t: "p",
      html: "El WEF encuestó a más de 1.000 empleadores que representan a más de 14 millones de trabajadores en 22 sectores y 55 economías. El pensamiento analítico sigue siendo la habilidad central más buscada: siete de cada diez empresas la consideran esencial. Estas son las que más crecen hacia 2030:",
    },
    {
      t: "ul",
      items: [
        "<strong>IA y big data</strong>, la de mayor crecimiento en la lista global.",
        "<strong>Redes y ciberseguridad</strong>.",
        "<strong>Alfabetización tecnológica</strong>.",
        "<strong>Pensamiento creativo</strong>.",
        "<strong>Resiliencia, flexibilidad y agilidad</strong>.",
        "<strong>Curiosidad y aprendizaje a lo largo de la vida</strong>.",
      ],
    },
    {
      t: "p",
      html: "La lista mezcla tecnología con criterio humano, y esa mezcla es el dato que importa. Una empresa que solo forma en herramientas de IA deja por fuera la mitad de lo que el mercado está pidiendo.",
    },
    {
      t: "stats",
      items: [
        { value: "39 %", label: "de las habilidades centrales de un trabajador cambiará o quedará obsoleto entre 2025 y 2030", source: "WEF, Future of Jobs Report 2025, p. 6", href: WEF },
        { value: "59 de 100", label: "trabajadores del mundo necesitarán formación para 2030", source: "WEF, Future of Jobs Report 2025, p. 6", href: WEF },
        { value: "63 %", label: "de los empleadores ve las brechas de habilidades como la mayor barrera para transformar su negocio", source: "WEF, Future of Jobs Report 2025, p. 6", href: WEF },
        { value: "85 %", label: "de los empleadores planea priorizar el upskilling de su gente", source: "WEF, Future of Jobs Report 2025, p. 6", href: WEF },
      ],
    },
    {
      t: "p",
      html: "El ritmo de cambio se moderó: en la edición 2023 el WEF esperaba que cambiara el 44 % de las habilidades, y en 2020, el 57 %. Aun así, de cada 100 trabajadores en el mundo, 29 necesitarán formación en su cargo actual, 19 serán formados y reubicados, y 11 probablemente no recibirán la formación que necesitan.",
    },

    { t: "h2", text: "Qué habilidades piden las empresas en Colombia" },
    {
      t: "p",
      html: "El perfil de Colombia del informe (p. 128 y 129) muestra una presión mayor que el promedio mundial. Sale de las empresas encuestadas en el país, y el WEF no publica el tamaño de esa submuestra, así que conviene leerlo como la opinión de esas empresas.",
    },
    {
      t: "table",
      head: ["Puesto", "Habilidad central en 2025 (% de empresas)", "Habilidad de uso creciente a 2030 (indicador del perfil)"],
      rows: [
        ["1", "Pensamiento analítico (88 %)", "IA y big data (94 %)"],
        ["2", "Resiliencia, flexibilidad y agilidad (81 %)", "Gestión del talento (88 %)"],
        ["3", "Liderazgo e influencia social (81 %)", "Liderazgo e influencia social (88 %)"],
        ["4", "Pensamiento creativo (75 %)", "Pensamiento creativo (88 %)"],
        ["5", "Empatía y escucha activa (69 %)", "Empatía y escucha activa (81 %)"],
      ],
      caption: "Perfil de Colombia en el Future of Jobs Report 2025 del WEF, p. 128. La columna central es la proporción de empresas que considera la habilidad central para su fuerza laboral.",
    },
    {
      t: "p",
      html: "Cuatro de las cinco habilidades que más crecen en Colombia son humanas: gestión del talento, liderazgo, pensamiento creativo y empatía. Solo una es técnica. Para un área de formación, eso pide programas que junten la herramienta con el trabajo con personas.",
    },
    {
      t: "stats",
      items: [
        { value: "65 %", label: "de las empresas en Colombia ve la brecha de habilidades como barrera clave (63 % en el mundo)", source: "WEF, Future of Jobs Report 2025, p. 129", href: WEF },
        { value: "44 %", label: "de las habilidades centrales cambiará en Colombia a 2030 (39 % en el mundo)", source: "WEF, Future of Jobs Report 2025, p. 128", href: WEF },
        { value: "55 de 100", label: "trabajadores en Colombia necesitarán formación: 26 en su cargo, 21 reubicados y 8 que probablemente no la recibirán", source: "WEF, Future of Jobs Report 2025, p. 129", href: WEF },
        { value: "71 %", label: "de las empresas en Colombia planea recalificar a su gente para trabajar con IA (77 % en el mundo)", source: "WEF, Future of Jobs Report 2025, p. 129", href: WEF },
      ],
    },
    {
      t: "p",
      html: "Las empresas colombianas también le piden al Estado. El 60 % quiere financiación para recalificar y otro 60 % pide que se ofrezcan programas para hacerlo, por encima del promedio global (55 % y 52 %).",
    },

    { t: "h2", text: "Por qué las habilidades humanas pesan tanto como las técnicas, según QS" },
    {
      t: "p",
      html: `El ${a(QS, "QS World Future Skills Index 2027")} mide 89 economías y usa la encuesta de reputación de QS, en la que más de 92.000 empleadores responden si los graduados que contratan pueden hacer el trabajo. Su conclusión: las habilidades humanas son las más buscadas y sus brechas son iguales o mayores que las técnicas. Hasta los países líderes tienen brechas de dos dígitos en habilidades cognitivas humanas y en liderazgo centrado en personas. En el ${a(QS_WEBINAR, "lanzamiento del índice")}, QS mostró que en el 51 % de los países la demanda de habilidades futuras supera la oferta.`,
    },
    {
      t: "p",
      html: "Colombia aparece en la gráfica de QS del lado del exceso de oferta: su oferta de talento puntúa por encima de lo que demanda su economía, cerca de Chile y México. QS advierte que, cuando los graduados superan lo que la economía absorbe, aparecen la migración de talento y los salarios de entrada más bajos, como en partes de América Latina. La lectura para Colombia es incómoda: sumar graduados genéricos agranda el problema, y lo que falta es formación alineada con lo que las empresas demandan.",
    },
    {
      t: "p",
      html: `El dato tiene historia. En la ${a(QS_2018, "encuesta global de empleadores de QS de 2018")}, los empleadores latinoamericanos eran los menos satisfechos con las habilidades de los graduados. Las que más valoraban eran resolución de problemas, trabajo en equipo y comunicación, y con las que estaban más satisfechos eran las técnicas.`,
    },

    { t: "h2", text: "Qué está cambiando en el mercado de formación de América Latina, según HolonIQ" },
    {
      t: "p",
      html: `En el ${a(HOLONIQ, "2026 Latin America EdTech 100")} de HolonIQ, la formación para el trabajo es el 37 % de la lista de empresas, frente a 28 % en 2020. HolonIQ observa que el upskilling genérico perdió peso como categoría y lo lee como un mercado que pasa de cursos generales a formación atada a un resultado laboral. Crece también el apoyo y desarrollo de carrera.`,
    },
    {
      t: "p",
      html: `La demanda es grande. En su estudio con el Grupo BID de 2022, ${a(HOLONIQ_BID, "HolonIQ estimó")} que más de 300 millones de trabajadores y personas que buscan empleo en la región quieren recalificarse o actualizar sus habilidades. El comprador de formación ya no pregunta cuántos cursos incluye un programa. Pregunta qué resultado laboral produce.`,
    },

    { t: "h2", text: "Por qué solo el 14 % de los empleadores tiene en cuenta los certificados en línea al contratar" },
    {
      t: "p",
      html: "El WEF preguntó cómo evaluarán los empleadores las habilidades de los candidatos entre 2025 y 2030. Las respuestas ordenan la confianza del mercado:",
    },
    {
      t: "table",
      head: ["Cómo evalúan las habilidades al contratar", "Empleadores que lo usarán (2025 a 2030)"],
      rows: [
        ["Experiencia laboral", "81 %"],
        ["Pruebas de habilidades", "48 %"],
        ["Título universitario como requisito", "43 %"],
        ["Pruebas psicométricas", "34 %"],
        ["Prioridad a aprendices", "17 %"],
        ["Certificados en línea", "14 %"],
      ],
      caption: "WEF, Future of Jobs Report 2025, p. 61 y 62.",
    },
    {
      t: "p",
      html: "El empleador confía en lo que muestra desempeño, como la experiencia o una prueba de habilidades. Un certificado en línea, en la mayoría de los casos, solo dice que alguien terminó un curso. Y aunque el 63 % de los empleadores ve en la recalificación efectiva una práctica para aumentar el talento disponible, solo el 19 % piensa quitar requisitos de título y contratar por habilidades (WEF, p. 53).",
    },
    {
      t: "p",
      html: `La salida es una credencial que se comporte como una prueba de habilidades. Eso exige cinco cosas: la competencia descrita en términos del cargo, los criterios con que se evaluó, la evidencia del desempeño (un proyecto, un caso resuelto), un emisor identificable y una verificación que un tercero hace en segundos. Los estándares Open Badges 3.0 y W3C Verifiable Credentials permiten llevar todo eso dentro de la credencial. La definición de microcredencial que propuso la ${a(UNESCO_MC, "UNESCO en 2022")} apunta a lo mismo: verificar es poder comprobar lo que el titular afirma, sin importar la tecnología.`,
    },
    {
      t: "callout",
      title: "El estándar que vale la pena diseñar",
      html: `Una credencial que un reclutador puede abrir, leer y comprobar se parece más a una prueba de habilidades que a un certificado de asistencia. Así diseñamos la ${a("/es/certification", "certificación de competencias con credenciales verificables")} en merahki.ai.`,
    },

    { t: "h2", text: "Cómo convertir estas habilidades en programas de formación y credenciales" },
    {
      t: "p",
      html: "Una habilidad de la lista del WEF no se puede enseñar ni evaluar tal como está escrita. Primero hay que bajarla a comportamientos observables del cargo y decidir qué evidencia la prueba.",
    },
    {
      t: "table",
      head: ["Habilidad (WEF)", "Comportamiento observable", "Evidencia para la credencial"],
      rows: [
        ["Pensamiento analítico", "Descompone un problema del área y justifica una decisión con datos", "Informe de caso evaluado con rúbrica"],
        ["IA y big data", "Usa una herramienta de IA en un flujo real de su cargo y valida el resultado", "Entregable con bitácora de instrucciones y verificación"],
        ["Liderazgo e influencia social", "Conduce una reunión de seguimiento y acuerda compromisos con su equipo", "Simulación o video evaluado por el líder y un par"],
        ["Empatía y escucha activa", "Reformula la necesidad de un cliente antes de proponer una solución", "Simulación de conversación con rúbrica"],
        ["Gestión del talento", "Da retroalimentación con un modelo explícito y deja un plan de desarrollo", "Plan de desarrollo de un colaborador revisado por talento humano"],
      ],
      caption: "Ejemplos de cómo una habilidad se convierte en comportamiento observable y en evidencia.",
    },
    {
      t: "ol",
      items: [
        "Elige los roles y la brecha con datos de tu empresa. La lista global orienta, pero no reemplaza tu diagnóstico.",
        "Traduce cada habilidad en comportamientos observables del cargo, con la CUOC como referencia de la ocupación y el MNC para el nivel.",
        "Escribe los resultados de aprendizaje y define la evidencia de cada uno.",
        "Diseña actividades aplicadas al trabajo real: casos, proyectos y simulaciones.",
        "Emite una credencial verificable que lleve los criterios y la evidencia.",
        "Mide con Kirkpatrick: aprendizaje (nivel 2), cambio en el puesto (nivel 3) y resultado del negocio (nivel 4).",
      ],
    },
    {
      t: "p",
      html: `Si eres una empresa, el punto de partida es un ${a("/es/training-certification", "programa de formación y certificación de colaboradores")} por rol. Si eres una universidad, es una ruta corta de ${a("/es/lifelong-learning", "Lifelong Learning")} co-diseñada con las empresas del sector.`,
    },
    {
      t: "cta",
      html: "merahki.ai diseña por competencias, virtualiza, opera y certifica programas que convierten estas habilidades en evidencia que un empleador puede verificar.",
    },

    { t: "h2", text: "Qué significa para empresas y universidades en Colombia" },
    {
      t: "p",
      html: "Para las empresas, el número que manda es 55 de cada 100 trabajadores que necesitarán formación antes de 2030. La prioridad es empezar por los roles donde el cambio llega primero, con programas que unan IA y habilidades humanas y que terminen en evidencia de desempeño.",
    },
    {
      t: "p",
      html: `Para las universidades, el dato de QS es una alerta: formar más de lo mismo agranda el exceso de oferta. La ${a(OCDE, "OCDE (2023)")} encontró que las credenciales cortas pesan más en los sectores donde la industria participa en su diseño o hay escasez aguda de talento, como tecnología, salud y manufactura. Ahí está la oportunidad de la educación continua colombiana.`,
    },
  ],
  faq: [
    {
      q: "¿Cuáles son las habilidades más demandadas por los empleadores en 2026?",
      a: "Según el Future of Jobs Report 2025 del WEF, el pensamiento analítico es la habilidad central más buscada. Las de mayor crecimiento a 2030 son IA y big data, redes y ciberseguridad y alfabetización tecnológica, seguidas de pensamiento creativo, resiliencia, flexibilidad y agilidad, y curiosidad y aprendizaje a lo largo de la vida.",
    },
    {
      q: "¿Qué habilidades piden las empresas en Colombia?",
      a: "En el perfil de Colombia del WEF, las habilidades centrales de 2025 son pensamiento analítico, resiliencia, liderazgo, pensamiento creativo y empatía. Las de uso creciente a 2030 son IA y big data, gestión del talento, liderazgo e influencia social, pensamiento creativo y empatía y escucha activa.",
    },
    {
      q: "¿Qué habilidades blandas buscan los empleadores?",
      a: "Las que el WEF y QS llaman habilidades humanas: pensamiento creativo, liderazgo e influencia social, empatía y escucha activa, resiliencia y flexibilidad, y gestión del talento. QS encontró que sus brechas son iguales o mayores que las de las habilidades técnicas.",
    },
    {
      q: "¿Los empleadores valoran los certificados en línea?",
      a: "Poco, por ahora. Solo el 14 % de los empleadores encuestados por el WEF planea tenerlos en cuenta al contratar, frente al 81 % que confía en la experiencia y el 48 % que usa pruebas de habilidades. Una credencial verificable con criterios y evidencia de desempeño se acerca más a lo que el empleador sí confía.",
    },
    {
      q: "¿Qué es la brecha de habilidades o skills gap?",
      a: "Es la diferencia entre las habilidades que una empresa necesita y las que tiene su gente o encuentra en el mercado. En Colombia, el 65 % de las empresas encuestadas por el WEF la señala como barrera clave para transformar su negocio.",
    },
    {
      q: "¿Cómo se demuestra una habilidad ante un empleador?",
      a: "Con evidencia de desempeño: un proyecto, un caso resuelto o una simulación evaluada con criterios claros. Esa evidencia puede ir dentro de una credencial verificable en Open Badges 3.0, para que el empleador la compruebe sin llamar a la institución.",
    },
  ],
  sources: [
    { title: "Future of Jobs Report 2025", publisher: "World Economic Forum", url: WEF, date: "enero de 2025", note: "Resumen ejecutivo (p. 6), evaluación de habilidades (p. 53, 61 y 62) y perfil de Colombia (p. 128 y 129)" },
    { title: "QS World Future Skills Index 2027", publisher: "QS Quacquarelli Symonds", url: QS, date: "junio de 2026" },
    { title: "Global Webinar: QS World Future Skills Index 2027 (presentación)", publisher: "QS Quacquarelli Symonds", url: QS_WEBINAR, date: "julio de 2026" },
    { title: "The Global Skills Gap in the 21st Century", publisher: "QS Quacquarelli Symonds e Institute of Student Employers", url: QS_2018, date: "2018" },
    { title: "2026 Latin America EdTech 100", publisher: "HolonIQ", url: HOLONIQ, date: "octubre de 2026" },
    { title: "Education Technology in Latin America and the Caribbean", publisher: "HolonIQ y Grupo BID", url: HOLONIQ_BID, date: "abril de 2022" },
    { title: "Towards a common definition of micro-credentials", publisher: "UNESCO", url: UNESCO_MC, date: "2022" },
    { title: "Micro-credentials for Lifelong Learning and Employability: Uses and Possibilities", publisher: "OCDE", url: OCDE, date: "2023" },
  ],
  adaptedFrom: { title: "Future of Jobs Report 2025", publisher: "World Economic Forum", url: WEF, date: "enero de 2025" },
  related: [
    "mapa-de-habilidades-empresa",
    "upskilling-reskilling-programas-empresas",
    "credenciales-digitales-verificables",
    "lifelong-learning-universidades-educacion-continua",
    "coursera-global-skills-report-2026-colombia-america-latina",
  ],
};
