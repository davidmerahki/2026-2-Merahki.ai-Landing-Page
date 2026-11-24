import type { Articulo } from "../types";

const WEF = "https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf";
const ELG2026 = "https://www.intellum.com/resources/education-led-growth-report-2026";
const POK_TALENTO = "https://www.pok.tech/blog/es/posts/credenciales-digitales-potencial-talento-pok";
const OCUPACOL = "https://ocupacol.mintrabajo.gov.co/";
const MNC = "https://especiales.colombiaaprende.edu.co/mnc/definicion.html";

export const articulo: Articulo = {
  slug: "universidad-corporativa-como-crearla",
  lang: "es",
  altSlug: "corporate-university-how-to-build",
  title: "Universidad corporativa: qué es y cómo una empresa la crea en cinco fases, desde el mapa de habilidades hasta la medición de impacto",
  seoTitle: "Universidad corporativa: qué es y cómo crearla en 5 fases",
  description: "Qué es una universidad o academia corporativa, en qué se diferencia de un catálogo de cursos y cómo se crea en cinco fases con indicadores desde el inicio.",
  kicker: "Formación corporativa",
  keywords: [
    "universidad corporativa",
    "academia corporativa",
    "qué es una universidad corporativa",
    "cómo crear una academia corporativa",
    "universidad corporativa ejemplos",
    "formación por competencias en empresas",
  ],
  published: "2026-11-24",
  readingMinutes: 7,
  summary: [
    "Una <strong>universidad corporativa</strong> es la unidad de formación de una empresa que organiza por roles y competencias lo que su gente necesita aprender para cumplir la estrategia, y que certifica y mide ese aprendizaje.",
    "Se diferencia de un catálogo de cursos o de un LMS porque tiene mandato de la dirección, gobierno, rutas por rol e indicadores del negocio.",
    "Se crea en cinco fases: mandato y gobierno, mapa de habilidades por rol, rutas diseñadas por competencias, plataforma y operación, y medición.",
    "Según las empresas encuestadas en Colombia por el Foro Económico Mundial, 65 % ve las brechas de habilidades como barrera clave y 55 de cada 100 trabajadores necesitarán formación para 2030.",
    "El error más común es empezar por comprar la plataforma. La plataforma se elige cuando ya existen el mapa y las rutas.",
  ],
  body: [
    {
      t: "p",
      html: "Una <strong>universidad corporativa</strong> (o academia corporativa) es la unidad de formación de una empresa que organiza, por roles y competencias, lo que su gente necesita aprender para cumplir la estrategia. Además de dar cursos, certifica lo aprendido y lo mide con indicadores del negocio, como productividad, rotación o calidad.",
    },
    {
      t: "p",
      html: "En Colombia, «universidad corporativa» y «academia corporativa» se usan casi como sinónimos. Algunas empresas reservan «universidad» para un sistema con varias escuelas (liderazgo, comercial, técnica) y «academia» para el programa de un área o de una audiencia, como clientes o distribuidores. Lo que define a las dos es la función que cumplen en la empresa.",
    },
    { t: "h2", text: "Por qué una empresa crea una universidad corporativa" },
    {
      t: "p",
      html: "La razón de fondo es que las habilidades que la empresa necesita cambian más rápido de lo que el mercado laboral las ofrece. El <a href=\"" + WEF + "\">Future of Jobs Report 2025 del Foro Económico Mundial</a> lo muestra con las respuestas de las empresas encuestadas en Colombia.",
    },
    {
      t: "stats",
      items: [
        { value: "65 %", label: "de las empresas encuestadas en Colombia ve las brechas de habilidades como barrera clave para transformar su negocio", source: "WEF, Future of Jobs Report 2025, p. 76", href: WEF },
        { value: "44 %", label: "de las habilidades centrales de los trabajadores en Colombia cambiaría a 2030 (39 % en el promedio global)", source: "WEF, Future of Jobs Report 2025, p. 128", href: WEF },
        { value: "55 de 100", label: "trabajadores en Colombia necesitarían formación para 2030", source: "WEF, Future of Jobs Report 2025, p. 129", href: WEF },
      ],
    },
    {
      t: "p",
      html: "Casi todas las empresas ya capacitan. El problema está en cómo lo hacen: cursos comprados a proveedores distintos, cada área con su presupuesto, certificados en PDF que nadie verifica y ningún dato que conecte la formación con el desempeño. La universidad corporativa ordena todo eso en un sistema con dueño.",
    },
    { t: "h2", text: "Universidad corporativa, academia, área de capacitación y LMS" },
    {
      t: "table",
      head: ["Concepto", "Qué es", "Qué decide", "Qué le falta si va solo"],
      rows: [
        ["Universidad corporativa", "Sistema de formación con mandato de la alta dirección, varias escuelas y gobierno propio", "Qué capacidades necesita la estrategia y en qué orden se forman", "Si no mide, termina como un catálogo grande"],
        ["Academia corporativa", "Programa de formación de un área o de una audiencia (comercial, técnica, clientes, partners)", "Las rutas y certificaciones de esa audiencia", "Conexión con el resto de la empresa"],
        ["Área de capacitación", "Equipo que gestiona el plan anual de formación y los proveedores", "Qué cursos se compran y cuándo", "Rutas por rol y medición de resultados"],
        ["LMS", "Software donde se publica, se cursa y se registra la formación", "Cómo se entrega el contenido y qué se registra", "Diseño, contenido, operación y criterio"],
      ],
      caption: "Una universidad corporativa usa un LMS y trabaja con el área de capacitación, pero ninguno de los dos la reemplaza.",
    },
    { t: "h2", text: "Cómo crear una universidad corporativa en cinco fases" },
    {
      t: "p",
      html: "Las fases van en orden. Cada una produce la información que necesita la siguiente, y saltarse una es la causa más frecuente de academias que se lanzan con anuncio y que a los seis meses nadie usa.",
    },
    { t: "h3", text: "Fase 1. Mandato y gobierno" },
    {
      t: "p",
      html: "La universidad corporativa empieza con una pregunta de la dirección: qué capacidad le falta a la empresa para cumplir su estrategia en los próximos dos o tres años. De ahí salen el patrocinador (un vicepresidente o un miembro del comité directivo), un consejo académico con los líderes de las áreas y las reglas básicas: quién aprueba una ruta, quién la paga y cuánto tiempo de la jornada se protege para aprender.",
    },
    {
      t: "p",
      html: "El patrocinio pesa más de lo que parece. En la <a href=\"" + ELG2026 + "\">encuesta de Intellum de 2026</a> a 190 líderes de educación, solo el 22,2 % de los programas tiene liderazgo de nivel ejecutivo. Sin esa voz, la formación compite por tiempo con la operación y casi siempre pierde.",
    },
    { t: "h3", text: "Fase 2. Mapa de habilidades por rol" },
    {
      t: "p",
      html: "Se eligen los roles que más mueven el negocio (los que venden, los que producen, los que asumen riesgo) y para cada uno se definen las competencias que necesita. No hace falta partir de cero. En Colombia, la Clasificación Única de Ocupaciones (CUOC) describe ocupaciones y sus funciones, y se puede consultar en <a href=\"" + OCUPACOL + "\">Ocupacol</a>, el catálogo del Ministerio del Trabajo. El <a href=\"" + MNC + "\">Marco Nacional de Cualificaciones</a> ayuda a fijar el nivel de cada competencia con sus ocho niveles.",
    },
    {
      t: "p",
      html: "Con las competencias definidas, se mide el nivel actual de las personas en cada rol. La diferencia entre lo que el rol exige y lo que la gente demuestra es la brecha de habilidades, y es la que decide qué rutas se diseñan primero.",
    },
    { t: "h3", text: "Fase 3. Rutas diseñadas por competencias" },
    {
      t: "p",
      html: "Cada competencia del mapa se convierte en resultados de aprendizaje, cada resultado en una evidencia que lo comprueba y cada evidencia en las actividades que preparan para lograrla. Una ruta por rol es una secuencia de microcredenciales apilables. POK, nuestro aliado de credenciales verificables, explica en su <a href=\"" + POK_TALENTO + "\">blog sobre talento en empresas</a> cómo esas rutas de credenciales apilables por rol le dan a talento humano un registro objetivo de quién domina qué.",
    },
    {
      t: "ul",
      items: [
        "<strong>Ejemplo de ruta de líder nuevo.</strong> Conversación de desempeño, delegación y seguimiento, lectura de los indicadores del equipo.",
        "<strong>Evidencias de esa ruta.</strong> Una conversación de desempeño simulada con retroalimentación, un plan de delegación aplicado durante un mes y un tablero del equipo analizado con su líder.",
        "<strong>Lo que se certifica.</strong> Cada microcredencial acredita una competencia con su evidencia. La ruta completa acredita el rol.",
      ],
    },
    { t: "h3", text: "Fase 4. Plataforma, producción y operación" },
    {
      t: "p",
      html: "La mayor parte del conocimiento que la empresa necesita enseñar ya está en la cabeza de sus expertos. La producción consiste en sacarlo de ahí y convertirlo en cursos virtuales, casos, simulaciones y sesiones en vivo. Los expertos internos aportan el contenido y un equipo de diseño instruccional lo estructura y lo virtualiza. Según la misma encuesta de Intellum, el 83,1 % de los equipos de educación trabaja con proveedores o aliados externos.",
    },
    {
      t: "p",
      html: "La operación necesita calendario de cohortes, tutoría, recordatorios, soporte a los participantes y un ciclo de actualización cuando cambian los procesos. Algunas rutas no hay que producirlas: el portafolio de educación continua de una universidad aliada puede cubrirlas, siempre que sus resultados de aprendizaje correspondan a las competencias del mapa.",
    },
    { t: "h3", text: "Fase 5. Medición desde el primer día" },
    {
      t: "p",
      html: "La medición se diseña junto con la ruta. El modelo Kirkpatrick ordena cuatro niveles, y cada uno se conecta con un indicador que la empresa ya reporta.",
    },
    {
      t: "table",
      head: ["Nivel", "Qué mide", "Ejemplo en una universidad corporativa"],
      rows: [
        ["1 · Reacción", "Si la formación fue útil y pertinente", "Encuesta al cerrar cada módulo"],
        ["2 · Aprendizaje", "Si la persona domina la competencia", "Evidencia evaluada con rúbrica y credencial emitida"],
        ["3 · Comportamiento", "Si aplica lo aprendido en el puesto", "Observación del líder a los 30 y 90 días"],
        ["4 · Resultados", "Si se movió el negocio", "Tiempo a productividad, rotación, reprocesos o ventas del grupo formado frente a uno no formado"],
      ],
    },
    { t: "h2", text: "Cómo se ve por dentro: escuelas y rutas típicas" },
    {
      t: "table",
      head: ["Escuela", "Audiencia", "Ejemplo de ruta", "Indicador que mueve"],
      rows: [
        ["Comercial", "Asesores y ejecutivos de cuenta", "Prospección, conversación de venta, uso del CRM, negociación y producto", "Tiempo a la primera venta del asesor nuevo"],
        ["Liderazgo", "Líderes nuevos y mandos medios", "Conversación de desempeño, delegación, lectura de indicadores", "Rotación del equipo y resultados de clima"],
        ["Técnica u operativa", "Personal de planta, servicio o campo", "Procedimientos críticos, seguridad y calidad", "Incidentes, reprocesos y no conformidades"],
        ["Clientes y aliados", "Clientes y distribuidores", "Onboarding, uso avanzado, certificación de partners", "Adopción, tickets y ventas del canal"],
      ],
      caption: "Cada escuela tiene su consejo, sus rutas y un indicador del negocio que la justifica.",
    },
    {
      t: "p",
      html: "La escuela de clientes y aliados es la que más se olvida. Formar a los distribuidores que venden e implementan el producto tiene un efecto directo en ventas, y lo explicamos en la página de <a href=\"/es/partner-academies\">academias de partners</a>.",
    },
    { t: "h2", text: "El error más común: empezar por la plataforma" },
    {
      t: "p",
      html: "La secuencia típica es esta. La empresa compra un LMS, sube los cursos que tiene, lo lanza con un correo del presidente y a los seis meses el uso es bajo. La conclusión suele ser que la plataforma no sirvió. Casi nunca es la plataforma. Faltaron el mandato, el mapa y las rutas, y la gente encontró un catálogo sin razón para entrar.",
    },
    {
      t: "callout",
      title: "La plataforma se elige cuando ya existen el mapa y las rutas",
      html: "Las fases 1 a 3 dicen qué tiene que hacer la plataforma: qué formatos entrega, qué evidencias recibe, qué datos envía al sistema de talento humano y qué credenciales emite. Con esa lista, elegir el LMS es una decisión de pocas semanas y sin sorpresas.",
    },
    { t: "h2", text: "Cómo apoya merahki la creación de una universidad corporativa" },
    {
      t: "p",
      html: "merahki diseña, virtualiza, opera y mide programas de formación para empresas. En una universidad corporativa trabajamos con tus expertos internos en las cinco fases: el mapa de competencias por rol con la CUOC y el MNC como referencia, el diseño de cada ruta con la <a href=\"/es/methodology\">metodología de diseño por competencias</a>, la producción de los cursos virtuales, la operación en el LMS merahki.ai y la medición con Kirkpatrick.",
    },
    {
      t: "p",
      html: "Las competencias se certifican con credenciales verificables emitidas con POK, que cualquier persona puede comprobar y que el empleado comparte en LinkedIn. El detalle está en las páginas de <a href=\"/es/training-certification\">capacitación y certificación para empresas</a> y de <a href=\"/es/certification\">certificación con credenciales verificables</a>.",
    },
    { t: "cta" },
  ],
  faq: [
    {
      q: "¿Qué es una universidad corporativa?",
      a: "Es la unidad de formación de una empresa que organiza por roles y competencias lo que su gente necesita aprender para cumplir la estrategia. Tiene mandato de la dirección, rutas por rol, certificación y medición con indicadores del negocio. Puede llamarse también academia corporativa.",
    },
    {
      q: "¿Cómo se crea una academia corporativa?",
      a: "Se crea en cinco fases: mandato y gobierno, mapa de habilidades por rol, rutas diseñadas por competencias, plataforma y operación, y medición. Conviene empezar con una o dos rutas para los roles que más pesan en el negocio y escalar cuando haya resultados.",
    },
    {
      q: "¿Qué diferencia hay entre una universidad corporativa y el área de capacitación?",
      a: "El área de capacitación gestiona el plan anual y los proveedores de cursos. La universidad corporativa decide qué capacidades necesita la estrategia, diseña rutas por rol y mide su efecto en el negocio. En muchas empresas el área de capacitación es el equipo que opera la universidad.",
    },
    {
      q: "¿Una universidad corporativa puede otorgar títulos?",
      a: "En Colombia, los títulos académicos oficiales los otorgan las instituciones de educación superior reconocidas por el Ministerio de Educación. Una universidad corporativa certifica competencias con credenciales verificables. Si necesita aval académico, se alía con una universidad para que ciertas rutas sean programas de su educación continua.",
    },
    {
      q: "¿Una empresa mediana necesita una universidad corporativa?",
      a: "Necesita la función, aunque no use el nombre. Una academia con dos o tres rutas para los roles críticos, con evidencias y un indicador por ruta, ya cumple el papel. El sistema de escuelas llega cuando la empresa crece.",
    },
  ],
  sources: [
    { title: "Future of Jobs Report 2025", publisher: "Foro Económico Mundial (WEF)", url: WEF, date: "2025-01", note: "Perfil de Colombia, p. 76 y 128-129" },
    { title: "The 2026 State of Education-Led Growth Report", publisher: "Intellum Research", url: ELG2026, date: "2026-04", note: "Encuesta a 190 líderes de educación, sobre todo de EE. UU." },
    { title: "Por qué las credenciales digitales son la clave para potenciar el talento en tu empresa", publisher: "POK", url: POK_TALENTO, date: "2025-09-10" },
    { title: "Ocupacol: Catálogo de Ocupaciones para Colombia (CUOC)", publisher: "Ministerio del Trabajo de Colombia", url: OCUPACOL },
    { title: "Definición del Marco Nacional de Cualificaciones", publisher: "Ministerio de Educación Nacional de Colombia", url: MNC },
  ],
  related: [
    "upskilling-reskilling-programas-empresas",
    "mapa-de-habilidades-empresa",
    "diseno-instruccional-por-competencias",
    "modelo-kirkpatrick-medir-impacto-capacitacion",
    "plataforma-lms-como-elegir-implementar",
  ],
};
