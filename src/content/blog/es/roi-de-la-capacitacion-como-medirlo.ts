import type { Articulo } from "../types";

const INTELLUM_ROI = "https://www.intellum.com/resources/blog/roi-of-learning-and-development";
const ROI_INSTITUTE = "https://roiinstitute.net/roi-methodology/";
const BRANDON_HALL = "https://brandonhall.com/how-to-measure-the-business-impact-of-learning/";
const GALLUP = "https://www.gallup.com/workplace/247391/fixable-problem-costs-businesses-trillion.aspx";

export const articulo: Articulo = {
  slug: "roi-de-la-capacitacion-como-medirlo",
  lang: "es",
  altSlug: "how-to-measure-training-roi",
  title: "ROI de la capacitación: cómo lo mide un área de formación con siete métodos agrupados en productividad, retención, costos y experiencia",
  seoTitle: "ROI de la capacitación: cómo medirlo con 7 métodos",
  description: "El ROI de la capacitación compara el beneficio neto de un programa con lo que costó. Fórmula, siete métodos de medición y cómo aislar el efecto del curso.",
  kicker: "Medición del impacto",
  keywords: [
    "roi de la capacitación",
    "cómo medir el roi de la formación",
    "retorno de la inversión en capacitación",
    "indicadores de capacitación",
    "metodología roi phillips",
    "fórmula del roi de la capacitación",
  ],
  published: "2026-11-24",
  readingMinutes: 6,
  summary: [
    `El ROI de la capacitación es el beneficio neto de un programa dividido entre su costo total, expresado como porcentaje. La metodología del ROI Institute (modelo Phillips) lo trata como el quinto nivel de evaluación, después de reacción, aprendizaje, aplicación e impacto.`,
    `Hay siete formas prácticas de medirlo, y caben en cuatro familias de indicadores: <strong>productividad</strong> (tiempo a productividad, desempeño, habilidades), <strong>retención</strong> (rotación, movilidad interna), <strong>costos</strong> (errores e incidentes evitados) y <strong>experiencia</strong> (participación y satisfacción).`,
    `Antes de calcular dinero hay que aislar el efecto de la formación: grupo de control, cohortes escalonadas, tendencia o estimaciones de los jefes.`,
    `Se empieza con una o dos métricas que le importen a la dirección, con línea base tomada antes de lanzar el programa.`,
  ],
  body: [
    {
      t: "p",
      html: `El <strong>ROI de la capacitación</strong> es el retorno de la inversión de un programa de formación: el beneficio neto que produjo (beneficios menos costos) dividido entre lo que costó, expresado como porcentaje. Un ROI de 0 % quiere decir que el programa recuperó lo invertido. Un ROI positivo quiere decir que devolvió más.`,
    },
    {
      t: "p",
      html: `Esta guía adapta el artículo de Shannon Howard en el blog de Intellum sobre <a href="${INTELLUM_ROI}">siete métodos para medir el ROI de la formación</a> (noviembre de 2025). Intellum no nombra marcos de evaluación. Nosotros ordenamos sus siete métodos dentro de las cuatro familias de indicadores con las que merahki.ai reporta cada programa, y los conectamos con Kirkpatrick y con la metodología ROI de Phillips.`,
    },
    {
      t: "quote",
      text: "La formación que no muestra impacto es el primer recorte del presupuesto.",
      cite: "Intellum, 2025",
      href: INTELLUM_ROI,
    },
    { t: "h2", text: "Cómo se calcula el ROI de la capacitación" },
    {
      t: "p",
      html: `La <a href="${ROI_INSTITUTE}">metodología ROI del ROI Institute</a> usa dos cuentas. La relación beneficio-costo (BCR) divide los beneficios del programa entre sus costos. El ROI divide los beneficios netos entre los costos y se expresa como porcentaje.`,
    },
    {
      t: "callout",
      title: "Las dos fórmulas",
      html: `Relación beneficio-costo: <strong>BCR = beneficios del programa ÷ costos del programa</strong>. Retorno de la inversión: <strong>ROI (%) = (beneficios − costos) ÷ costos × 100</strong>.`,
    },
    {
      t: "p",
      html: `La división es lo fácil. Lo difícil es llenar los dos lados con datos que la dirección acepte. El ROI Institute lo ordena en pasos:`,
    },
    {
      t: "ol",
      items: [
        "<strong>Recoger datos de los niveles anteriores:</strong> reacción, aprendizaje, aplicación en el puesto e impacto en el negocio.",
        "<strong>Aislar el efecto del programa</strong> para no atribuirle a la formación lo que hizo otra cosa.",
        "<strong>Convertir a dinero</strong> los cambios del negocio, con valores estándar, costos históricos o estimaciones de expertos.",
        "<strong>Sumar los costos completos:</strong> diagnóstico, diseño, producción, operación, tiempo de los participantes y evaluación.",
        "<strong>Reportar los beneficios intangibles</strong> que no se convierten a dinero, como la satisfacción del cliente o el trabajo en equipo.",
      ],
    },
    { t: "h2", text: "Por qué medir el retorno antes de que alguien pida recortar" },
    {
      t: "stats",
      items: [
        {
          value: "Casi 40 %",
          label: "de los líderes de aprendizaje no sabe cómo su forma de medir refleja el impacto de la formación",
          source: "Brandon Hall Group, Think Like a CEO Study (citado en 2024)",
          href: BRANDON_HALL,
        },
      ],
    },
    {
      t: "p",
      html: `Cuando la medición se queda en finalizaciones y encuestas de satisfacción, el área de formación llega al comité de presupuesto sin un número que el gerente financiero reconozca. Medir el retorno obliga a hablar en tiempo, rotación, errores y clientes, que son los términos de quien aprueba el presupuesto.`,
    },
    { t: "h2", text: "Los siete métodos para medir el ROI, agrupados en cuatro familias de indicadores" },
    {
      t: "p",
      html: `Los siete métodos de Intellum responden preguntas distintas. Agruparlos por familia ayuda a escoger: primero eliges qué familia le duele a la empresa y después el método que la mide.`,
    },
    {
      t: "table",
      head: ["Familia", "Método", "Qué comparas", "Dato que pides y a quién"],
      rows: [
        ["Productividad", "1. Tiempo a productividad", "Días hasta el primer hito antes y después de la inducción estructurada", "Fechas de ingreso e hitos, a RR. HH. y al jefe"],
        ["Productividad", "3. Desempeño", "Uno o dos KPI antes y después, con grupo de control si se puede", "Ventas, tiempo de ciclo o CSAT, al área dueña"],
        ["Productividad", "4. Crecimiento de habilidades", "Nivel de entrada, formación, reevaluación", "Evaluaciones y calificación del jefe"],
        ["Retención", "2. Retención y compromiso", "Rotación de quienes terminaron frente a quienes no, en roles comparables", "Retiros por cohorte, a nómina"],
        ["Retención", "5. Movilidad interna", "Ascensos y traslados de quienes completaron una ruta", "Movimientos internos, a RR. HH."],
        ["Costos", "6. Costos evitados", "Errores, reprocesos, incidentes e incumplimientos antes y después", "Registros de calidad, seguridad o soporte"],
        ["Experiencia", "7. Participación y uso", "Finalización y tiempo dedicado, cruzados con desempeño y retención", "Reportes del LMS"],
      ],
      caption: "Métodos según Intellum (2025). La agrupación por familias es de merahki.ai.",
    },
    { t: "h3", text: "Productividad: tiempo, desempeño y habilidades" },
    {
      t: "p",
      html: `El tiempo a productividad pesa más en roles ligados a ingresos o producción, como ventas o ingeniería. La cuenta básica es: días ahorrados para llegar al hito × valor de la contribución diaria de una persona × número de personas formadas. El valor de la contribución diaria sale de los datos de la empresa, no de un promedio de mercado.`,
    },
    {
      t: "p",
      html: `Para el desempeño, escoge uno o dos indicadores que el curso pueda mover de verdad y compáralos antes y después. Para las habilidades, usa el modelo de línea base, formación y reevaluación. Aquí una evaluación con evidencia o una certificación da un dato más firme que la autoevaluación.`,
    },
    { t: "h3", text: "Retención: rotación y movilidad interna" },
    {
      t: "p",
      html: `Reemplazar a una persona cuesta, según <a href="${GALLUP}">Gallup (2019)</a>, entre la mitad y dos veces su salario anual. Es una referencia de Estados Unidos. Para una empresa en Colombia lo correcto es calcular su propio costo: tiempo de vacante, selección, inducción y los meses en que la persona nueva todavía no rinde. Con ese costo, cada retiro evitado en la cohorte formada se convierte en ahorro.`,
    },
    {
      t: "p",
      html: `La movilidad interna se mide contando ascensos y traslados de quienes completaron una ruta de prerrequisito, por ejemplo una de liderazgo, y comparando ese costo con el de contratar afuera.`,
    },
    { t: "h3", text: "Costos: errores, incidentes y casos evitados" },
    {
      t: "p",
      html: `Se cuentan los incidentes antes y después del programa y se multiplica la diferencia por el costo promedio de cada uno. Aplica a reprocesos, accidentes, sanciones por incumplimiento y, en formación de clientes, a los tickets de soporte que dejan de llegar porque el cliente ya sabe usar el producto. Ese último caso lo trabajamos en los programas de <a href="/es/customer-education">customer education</a>.`,
    },
    { t: "h3", text: "Experiencia: participación como indicador adelantado" },
    {
      t: "p",
      html: `Finalizaciones, tiempo dedicado y satisfacción llegan primero, semanas antes que los datos del negocio. Sirven como señal temprana, pero no son retorno. Su valor aparece cuando se cruzan con desempeño o retención: si quienes más participan son también quienes más mejoran, la relación empieza a sostenerse.`,
    },
    {
      t: "callout",
      title: "Ojo con las cifras de ejemplo",
      html: `El artículo de Intellum ilustra cada método con porcentajes de ejemplo, como «20 % más rápido». Son hipotéticos. No los uses como referencia para tu caso: tu línea base es la única cifra que vale.`,
    },
    { t: "h2", text: "Cómo aislar el efecto de la formación" },
    {
      t: "p",
      html: `Si el indicador mejoró, falta probar que fue por el curso y no por un cambio de herramienta, de meta o de temporada. Estas son las técnicas que lista el ROI Institute:`,
    },
    {
      t: "ul",
      items: [
        "<strong>Grupo de control:</strong> un grupo comparable que todavía no se forma. Las cohortes escalonadas lo dan sin costo extra.",
        "<strong>Línea de tendencia:</strong> proyectar el indicador con su comportamiento anterior y comparar con lo que pasó.",
        "<strong>Pronóstico:</strong> modelar el indicador con las otras variables que lo mueven.",
        "<strong>Estimaciones:</strong> preguntar a participantes y jefes qué parte del cambio atribuyen a la formación y con qué nivel de confianza.",
      ],
    },
    { t: "h2", text: "Kirkpatrick, Phillips y las cuatro familias en una sola tabla" },
    {
      t: "table",
      head: ["Nivel", "Pregunta", "Familia que suele medir", "Ejemplo de dato"],
      rows: [
        ["1. Reacción", "¿Fue relevante?", "Experiencia", "Relevancia de 1 a 5, NPS del curso"],
        ["2. Aprendizaje", "¿Lo puede hacer?", "Productividad", "Puntaje en escenarios, credencial obtenida"],
        ["3. Aplicación", "¿Lo hace en el puesto?", "Productividad", "Observación del jefe a 30 días"],
        ["4. Impacto", "¿Se movió el negocio?", "Retención, costos, productividad", "Rotación, incidentes, tiempo de ciclo"],
        ["5. ROI", "¿Valió lo que costó?", "Las cuatro, convertidas a dinero", "BCR y ROI (%)"],
      ],
    },
    {
      t: "p",
      html: `Los niveles 1 a 4 los explicamos con preguntas de encuesta para cada uno en la guía del <a href="/es/blog/modelo-kirkpatrick-medir-impacto-capacitacion">modelo Kirkpatrick</a>.`,
    },
    { t: "cta" },
    { t: "h2", text: "Por dónde empezar si tus datos están en sistemas distintos" },
    {
      t: "p",
      html: `Los datos casi nunca viven en un solo lugar. El LMS tiene la participación, nómina tiene los retiros, el CRM tiene las ventas y la mesa de ayuda tiene los tickets. No hace falta integrarlo todo para empezar:`,
    },
    {
      t: "ol",
      items: [
        "Escoge una o dos métricas que la dirección ya revise cada mes.",
        "Toma la línea base antes de lanzar el programa, con el área dueña del dato.",
        "Define en el diseño del curso qué comportamiento debería mover esa métrica.",
        "Acuerda desde el inicio cuándo y en qué formato te van a entregar el dato.",
        "Suma métricas en la siguiente cohorte, cuando la primera ya tenga resultados.",
      ],
    },
    {
      t: "p",
      html: `En los programas de <a href="/es/training-certification">capacitación y certificación para empresas</a> que diseña y opera merahki.ai, esa línea base y el indicador se acuerdan en la fase de diseño, junto con la competencia y los resultados de aprendizaje, y el reporte final se entrega en esos términos.`,
    },
    { t: "h2", text: "El ROI de un programa de educación continua para empresas" },
    {
      t: "p",
      html: `Cuando una universidad le vende un programa a una empresa, el retorno que importa es el de la empresa compradora. Una unidad de educación continua que llega con el indicador propuesto (por ejemplo, tiempo a productividad de los asesores nuevos) y con el plan para medirlo compite con algo más que el catálogo. Así trabajamos el componente corporativo de <a href="/es/lifelong-learning">Lifelong Learning</a>.`,
    },
  ],
  faq: [
    {
      q: "¿Cuál es la fórmula del ROI de la capacitación?",
      a: "ROI (%) = (beneficios del programa − costos del programa) ÷ costos del programa × 100. Los beneficios son los cambios del negocio convertidos a dinero y los costos incluyen diseño, producción, operación, tiempo de los participantes y evaluación.",
    },
    {
      q: "¿Qué diferencia hay entre ROI y relación beneficio-costo?",
      a: "La relación beneficio-costo (BCR) divide los beneficios totales entre los costos. El ROI usa los beneficios netos, es decir, los beneficios menos los costos, y se expresa como porcentaje.",
    },
    {
      q: "¿Cómo se mide el ROI de la formación si no hay grupo de control?",
      a: "Se puede formar por cohortes escalonadas, proyectar la tendencia del indicador o pedir a participantes y jefes que estimen qué parte del cambio se debe al programa. Las estimaciones son menos rigurosas, pero sirven si se reportan con su nivel de confianza.",
    },
    {
      q: "¿Cuánto tiempo después del curso se puede calcular el ROI?",
      a: "Depende del indicador. Los cambios de conducta se ven hacia los 30 días y los de negocio entre los 60 y los 90 días. La rotación y la movilidad interna conviene medirlas a seis meses o más.",
    },
    {
      q: "¿Qué hago con los beneficios que no se pueden convertir a dinero?",
      a: "Se reportan como beneficios intangibles, al lado del ROI. La metodología del ROI Institute lo recomienda para cosas como la satisfacción del cliente o el trabajo en equipo.",
    },
  ],
  sources: [
    { title: "How to Measure L&D ROI: 7 Proven Methods That Work", publisher: "Intellum (Shannon Howard)", url: INTELLUM_ROI, date: "2025-11-13" },
    { title: "ROI Methodology", publisher: "ROI Institute", url: ROI_INSTITUTE },
    { title: "How to Measure the Business Impact of Learning", publisher: "Brandon Hall Group", url: BRANDON_HALL, date: "2024-06-10", note: "Cita el Think Like a CEO Study" },
    { title: "This Fixable Problem Costs U.S. Businesses $1 Trillion", publisher: "Gallup", url: GALLUP, date: "2019-03-13" },
  ],
  adaptedFrom: {
    title: "How to Measure L&D ROI: 7 Proven Methods That Work",
    publisher: "Intellum",
    url: INTELLUM_ROI,
    date: "2025-11-13",
  },
  related: [
    "modelo-kirkpatrick-medir-impacto-capacitacion",
    "upskilling-reskilling-programas-empresas",
    "customer-education-formacion-de-clientes",
    "universidad-corporativa-como-crearla",
  ],
};
