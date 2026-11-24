import type { Articulo } from "../types";

const INTELLUM_BRECHAS = "https://www.intellum.com/resources/blog/how-to-conduct-a-skills-gap-analysis";
const WEF = "https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf";
const DANE_CUOC = "https://www.dane.gov.co/index.php/sistema-estadistico-nacional-sen/normas-y-estandares/nomenclaturas-y-clasificaciones/clasificaciones/clasificacion-unica-de-ocupaciones-para-colombia-cuoc";
const OCUPACOL_33220 = "https://ocupacol.mintrabajo.gov.co/Profile/OccupationalProfile/33220";
const MNC = "https://especiales.colombiaaprende.edu.co/mnc/definicion.html";
const POK_GRAPHS = "https://www.pok.tech/es/productos/skills-graphs-mapa-competencias-malla-curricular";
const POK_INTELLIGENCE = "https://www.pok.tech/es/productos/skills-intelligence-brechas-competencias-empresas";

export const articulo: Articulo = {
  slug: "mapa-de-habilidades-empresa",
  lang: "es",
  altSlug: "skills-mapping-guide",
  title: "Mapa de habilidades: qué es y cómo una empresa o universidad lo construye para decidir qué formar, a quién y en qué orden",
  seoTitle: "Mapa de habilidades: qué es y cómo construirlo por rol",
  description: "Un mapa de habilidades muestra qué competencias exige cada rol y cuáles tiene tu equipo. Cómo construirlo con la CUOC y el MNC y usarlo para priorizar.",
  kicker: "Habilidades y brechas",
  keywords: [
    "mapa de habilidades",
    "mapa de competencias",
    "cómo hacer un mapa de competencias",
    "matriz de habilidades",
    "análisis de brechas de competencias",
    "mapa de competencias ejemplo",
    "cuoc competencias",
  ],
  published: "2026-11-24",
  readingMinutes: 7,
  summary: [
    `Un mapa de habilidades lista, para cada rol, las competencias que exige, el nivel requerido y el nivel que hoy tiene el equipo. La diferencia es la brecha de habilidades (skills gap).`,
    `Se construye en cinco pasos: partir de la estrategia, ubicar cada rol en una referencia ocupacional, fijar el nivel requerido, medir el nivel actual y priorizar las brechas.`,
    `En Colombia la referencia oficial es la <strong>CUOC</strong> del DANE para las funciones de cada ocupación y el <strong>MNC</strong> para el nivel de cualificación del programa que cierra la brecha.`,
    `Cada brecha priorizada se convierte en una competencia, una ruta de formación y una credencial verificable. Con POK Skills Graphs y Skills Intelligence esas credenciales vuelven al mapa como datos de habilidades.`,
  ],
  body: [
    {
      t: "p",
      html: `Un <strong>mapa de habilidades</strong> es el inventario de las competencias que exige cada rol de una organización, con el nivel requerido y el nivel que hoy tienen las personas que lo ocupan. La distancia entre los dos niveles es la brecha de habilidades, y es lo que decide qué formar, a quién y en qué orden.`,
    },
    {
      t: "p",
      html: `Esta guía adapta el artículo de Carla Yudhishthu, Chief People Officer de Intellum, sobre <a href="${INTELLUM_BRECHAS}">cómo hacer un análisis de brechas de habilidades</a> (enero de 2026). El paso que más le cuesta a una empresa es decidir contra qué se mide la brecha. En Colombia hay un catálogo público para eso, la CUOC, y un marco para el nivel de la formación, el MNC. Con esas dos referencias trabajamos el mapa en merahki.ai.`,
    },
    {
      t: "stats",
      items: [
        { value: "39 %", label: "de las habilidades de un trabajador promedio cambiará o quedará obsoleto entre 2025 y 2030", source: "Foro Económico Mundial, Future of Jobs Report 2025, p. 6", href: WEF },
        { value: "44 %", label: "de las habilidades centrales cambiaría en Colombia en el mismo periodo, según las empresas encuestadas en el país", source: "Foro Económico Mundial, Future of Jobs Report 2025, p. 128", href: WEF },
        { value: "65 %", label: "de las empresas encuestadas en Colombia ve las brechas de habilidades como barrera para transformar su negocio (63 % en el mundo)", source: "Foro Económico Mundial, Future of Jobs Report 2025, p. 76", href: WEF },
      ],
    },
    { t: "h2", text: "Qué es un mapa de habilidades y para qué sirve" },
    {
      t: "p",
      html: `El mapa responde tres preguntas que el presupuesto de formación necesita antes de aprobar cualquier curso. Qué competencias pide la estrategia en cada rol. Cuáles faltan y en cuántas personas. Cuál de esas faltas frena más un resultado del negocio. Sin mapa, la formación se compra por catálogo y la medición posterior no tiene contra qué comparar.`,
    },
    {
      t: "p",
      html: `Intellum insiste en que el análisis tiene que ser una práctica continua. Las habilidades de un puesto cambian rápido, y el dato del Foro Económico Mundial lo confirma: si casi cuatro de cada diez habilidades cambian en cinco años, un mapa que no se actualiza queda viejo antes de terminar la primera ruta.`,
    },
    { t: "h2", text: "Mapa, matriz y análisis de brechas: en qué se diferencian" },
    {
      t: "p",
      html: `Los tres términos se usan como sinónimos, pero son tres piezas distintas del mismo trabajo:`,
    },
    {
      t: "table",
      head: ["Pieza", "Qué muestra", "Unidad", "Para qué se usa"],
      rows: [
        ["Mapa de habilidades (o de competencias)", "Las competencias que exige cada rol y el nivel requerido", "Rol", "Definir el estándar de cada puesto"],
        ["Matriz de habilidades", "El nivel actual de cada persona en cada competencia", "Persona × competencia", "Ver dónde está el equipo hoy"],
        ["Análisis de brechas", "La diferencia entre lo requerido y lo actual, priorizada", "Rol o equipo", "Decidir qué formar, a quién y en qué orden"],
      ],
    },
    { t: "h2", text: "Contra qué se mide la brecha en Colombia: la CUOC y el MNC" },
    {
      t: "p",
      html: `La <a href="${DANE_CUOC}">Clasificación Única de Ocupaciones para Colombia (CUOC)</a>, que mantiene el DANE, es según la propia entidad el único referente ocupacional del país. Es un sistema de cinco niveles que organiza 682 ocupaciones, y cada perfil trae descripción, funciones, conocimientos, destrezas, ocupaciones afines y un nivel de competencia. Se estableció con el Decreto 654 y la Resolución 771 de 2021, y su actualización más reciente es la Resolución 1344 del 28 de octubre de 2026.`,
    },
    {
      t: "p",
      html: `La CUOC sirve para el lado del rol: qué funciones tiene el cargo y qué destrezas pide. El <a href="${MNC}">Marco Nacional de Cualificaciones (MNC)</a> sirve para el lado de la formación. Ordena las cualificaciones en ocho niveles descritos en conocimientos, destrezas y actitudes, y le da al programa que cierra la brecha un nivel que otras instituciones y empleadores pueden leer.`,
    },
    {
      t: "callout",
      title: "La CUOC describe el empleo, no a la persona",
      html: `El perfil de una ocupación es el punto de partida del mapa. Cada empresa ajusta las funciones a su contexto, suma las competencias propias de su producto o de su cultura y decide el nivel que necesita. Lo que gana con la CUOC es un vocabulario común y una referencia que un tercero puede verificar.`,
    },
    { t: "h2", text: "Cómo hacer un mapa de competencias en cinco pasos" },
    {
      t: "p",
      html: `Los cuatro pasos de Intellum (alinear con la estrategia, inventariar el talento, mapear las brechas contra los resultados y formar de forma escalable) se vuelven cinco cuando se agrega la referencia ocupacional:`,
    },
    {
      t: "ol",
      items: [
        "<strong>Parte de la estrategia.</strong> Escribe los resultados del negocio para los próximos 12 a 18 meses y quédate solo con los roles que los mueven. Intellum recomienda análisis pequeños y enfocados antes que uno de toda la empresa.",
        "<strong>Ubica cada rol en la CUOC.</strong> Busca la ocupación que corresponde al cargo, toma sus funciones, conocimientos y destrezas, y ajústalos a lo que de verdad hace la persona en tu empresa.",
        "<strong>Fija el nivel requerido.</strong> Para cada competencia, define el nivel con una escala corta y conductas observables. Por ejemplo: 1 lo hace con ayuda, 2 con supervisión, 3 de forma autónoma, 4 lo enseña a otros.",
        "<strong>Mide el nivel actual.</strong> Combina autoevaluación, calificación del jefe y evidencia: evaluaciones, desempeño y credenciales que la persona ya tiene. Con autoevaluación sola, el dato depende de qué tan bien se conoce cada persona.",
        "<strong>Prioriza y valida.</strong> Ordena las brechas por su efecto en el resultado del negocio y por el número de personas afectadas. Valida la lista con los jefes antes de diseñar cualquier formación.",
      ],
    },
    { t: "h2", text: "Ejemplo de mapa de competencias para un rol: representante comercial" },
    {
      t: "p",
      html: `En la CUOC, la ocupación <a href="${OCUPACOL_33220}">33220 Representantes comerciales</a> tiene nivel de competencia 3 (en la escala de 1 a 4 de la CUOC, que no es la misma del MNC). Su perfil lista funciones como identificar las necesidades del cliente, elaborar cotizaciones, hacer seguimiento posventa, contactar clientes potenciales y gestionar el cobro de cartera, y destrezas como escucha activa, persuasión, pensamiento crítico y resolución de problemas complejos.`,
    },
    {
      t: "table",
      head: ["Competencia del rol", "Función de la CUOC de donde sale", "Destrezas de la CUOC", "Nivel requerido", "Evidencia"],
      rows: [
        ["Diagnostica la necesidad del cliente y recomienda la solución", "Identificar necesidades y recursos de los clientes y recomendar productos", "Escucha activa, pensamiento crítico", "3", "Simulación de una reunión de diagnóstico evaluada con rúbrica"],
        ["Arma una cotización con condiciones de venta claras", "Elaborar cotizaciones, condiciones de venta, garantías y fechas de entrega", "Criterio y toma de decisiones", "3", "Cotización real revisada por el jefe"],
        ["Resuelve problemas en la posventa", "Hacer seguimiento al cliente después de la venta para resolver problemas", "Resolución de problemas complejos, orientación al servicio", "3", "Caso documentado de principio a fin"],
        ["Abre cuentas nuevas", "Identificar y contactar clientes potenciales", "Comunicación asertiva, persuasión", "2", "Plan de cuenta y registro en el CRM"],
        ["Hace seguimiento a la cartera", "Gestionar el cobro de cartera de sus clientes", "Relaciones interpersonales", "2", "Reporte de cartera con acciones"],
      ],
      caption: "Funciones y destrezas tomadas del perfil 33220 de la CUOC. Los niveles requeridos y las evidencias son un ejemplo de diseño, no un estándar.",
    },
    {
      t: "p",
      html: `Con el mapa listo, el paso siguiente es medir a cada asesor contra esa tabla. Si la mayoría está en 2 en diagnóstico y el resultado que importa es la tasa de cierre, esa es la primera ruta. Si el problema es la cartera vencida, el orden cambia. El mapa no decide solo, pero obliga a que la decisión se tome con datos.`,
    },
    { t: "cta" },
    { t: "h2", text: "Del mapa de habilidades a las rutas de formación y las credenciales" },
    {
      t: "p",
      html: `Cada brecha priorizada se vuelve una competencia, la competencia se vuelve resultados de aprendizaje con su evidencia y la evidencia se certifica con una microcredencial. Es la secuencia de nuestra <a href="/es/methodology">metodología de diseño por competencias</a>, y el mapa le da el punto de partida: el diseño arranca del nivel requerido y del nivel actual, no de un temario.`,
    },
    {
      t: "p",
      html: `La credencial cierra el círculo. En los programas de merahki.ai, <a href="/es/certification">la certificación se emite con POK</a> y cada credencial lleva sus criterios y su evidencia. POK convierte esas credenciales en datos de habilidades: <a href="${POK_GRAPHS}">POK Skills Graphs</a> vincula cursos y credenciales con las competencias que desarrolla cada trayecto y le arma a cada persona su propio mapa, que se actualiza con cada credencial nueva. <a href="${POK_INTELLIGENCE}">POK Skills Intelligence</a> parte de los roles y las competencias que define la empresa, muestra la brecha por rol y por persona y la vuelve a medir cuando termina la formación.`,
    },
    {
      t: "p",
      html: `La división del trabajo es clara: merahki.ai diseña, produce, opera y mide el programa que cierra la brecha. POK emite la credencial y la convierte en inteligencia de habilidades que la empresa puede consultar después.`,
    },
    { t: "h2", text: "Cómo usa una universidad el mapa de habilidades para decidir qué programas abrir" },
    {
      t: "p",
      html: `Una unidad de educación continua puede hacer el mismo ejercicio con el sector productivo de su región: tomar las ocupaciones CUOC que más contratan sus empresas aliadas, revisar qué funciones cubre su oferta actual y abrir programas donde no hay cobertura. El MNC le da el nivel al programa, y la ruta se puede diseñar en microcredenciales apilables. Así trabajamos la oferta para empresas dentro de <a href="/es/lifelong-learning">Lifelong Learning</a>.`,
    },
    { t: "h2", text: "Cada cuánto se actualiza un mapa de habilidades" },
    {
      t: "p",
      html: `No hay una frecuencia oficial. Nuestra recomendación es revisarlo cada vez que cambia la estrategia, cuando entra una tecnología que modifica las tareas del rol y, como mínimo, una vez al año. La matriz del equipo, en cambio, se actualiza después de cada ruta: si la persona terminó la formación y obtuvo la credencial, su nivel se vuelve a medir. Intellum recomienda tratar la plantilla como un documento vivo, y eso es lo que permite ver si la brecha se cerró.`,
    },
  ],
  faq: [
    {
      q: "¿Cómo se hace un mapa de competencias?",
      a: "Se parte de los resultados que busca la empresa, se eligen los roles que los mueven, se ubica cada rol en una referencia ocupacional como la CUOC, se fija el nivel requerido de cada competencia y se mide el nivel actual del equipo. La diferencia priorizada es la brecha que hay que formar.",
    },
    {
      q: "¿Qué diferencia hay entre un mapa de habilidades y una matriz de habilidades?",
      a: "El mapa define el estándar de cada rol: qué competencias exige y en qué nivel. La matriz muestra el nivel actual de cada persona en cada competencia. Las dos juntas dan el análisis de brechas.",
    },
    {
      q: "¿Para qué sirve la CUOC en un mapa de habilidades?",
      a: "Da una lista oficial de funciones, conocimientos y destrezas por ocupación, con un código que cualquiera puede consultar. La empresa la ajusta a su contexto, pero parte de un vocabulario común en lugar de una hoja en blanco.",
    },
    {
      q: "¿Qué ejemplo hay de un mapa de competencias?",
      a: "Para un representante comercial (CUOC 33220), el mapa puede incluir diagnóstico de necesidades, cotización, posventa, apertura de cuentas y cartera, cada una con su nivel requerido y la evidencia que la demuestra. La tabla de este artículo muestra ese ejemplo completo.",
    },
    {
      q: "¿Cada cuánto hay que actualizar el mapa de habilidades?",
      a: "Cada vez que cambia la estrategia o la tecnología del rol, y como mínimo una vez al año. El nivel de cada persona se vuelve a medir al terminar cada ruta de formación.",
    },
  ],
  sources: [
    { title: "How to Conduct a Skills Gap Analysis", publisher: "Intellum (Carla Yudhishthu)", url: INTELLUM_BRECHAS, date: "2026-01-30" },
    { title: "Future of Jobs Report 2025", publisher: "Foro Económico Mundial", url: WEF, date: "2025-01", note: "p. 6, 76 y 128" },
    { title: "Clasificación Única de Ocupaciones para Colombia (CUOC)", publisher: "DANE", url: DANE_CUOC, note: "Consultado el 24-nov-2026" },
    { title: "Perfil ocupacional 33220 Representantes comerciales", publisher: "Ocupacol, Ministerio del Trabajo", url: OCUPACOL_33220 },
    { title: "Definición del Marco Nacional de Cualificaciones", publisher: "Ministerio de Educación Nacional (Colombia Aprende)", url: MNC },
    { title: "POK Skills Graphs", publisher: "POK", url: POK_GRAPHS },
    { title: "POK Skills Intelligence", publisher: "POK", url: POK_INTELLIGENCE },
  ],
  adaptedFrom: {
    title: "How to Conduct a Skills Gap Analysis",
    publisher: "Intellum",
    url: INTELLUM_BRECHAS,
    date: "2026-01-30",
  },
  related: [
    "cuoc-clasificacion-ocupaciones-programas-formacion",
    "marco-nacional-de-cualificaciones-diseno-curricular",
    "upskilling-reskilling-programas-empresas",
    "modelo-kirkpatrick-medir-impacto-capacitacion",
  ],
};
