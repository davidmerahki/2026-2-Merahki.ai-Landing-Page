import type { Articulo } from "../types";

const INTELLUM_ENCUESTAS = "https://www.intellum.com/resources/blog/training-survey-questions";
const INTELLUM_DISENO = "https://www.intellum.com/resources/blog/design-with-the-end-in-mind";
const ATD_2019 = "https://www.td.org/research-reports/effective-evaluation";

export const articulo: Articulo = {
  slug: "modelo-kirkpatrick-medir-impacto-capacitacion",
  lang: "es",
  altSlug: "kirkpatrick-model-training-impact",
  title: "Modelo Kirkpatrick: qué mide cada uno de sus cuatro niveles y cómo aplicarlo para evaluar el impacto de una capacitación en la empresa",
  seoTitle: "Modelo Kirkpatrick: los 4 niveles y cómo aplicarlos",
  description: "El modelo Kirkpatrick evalúa una capacitación en cuatro niveles: reacción, aprendizaje, conducta y resultados. Qué medir en cada uno y qué preguntar.",
  kicker: "Medición del impacto",
  keywords: [
    "modelo kirkpatrick",
    "niveles de kirkpatrick",
    "evaluación de impacto de la capacitación",
    "encuesta de evaluación de capacitación",
    "modelo kirkpatrick ejemplo",
    "medición del impacto de la capacitación",
  ],
  published: "2026-11-24",
  readingMinutes: 7,
  summary: [
    `El modelo Kirkpatrick evalúa una capacitación en cuatro niveles: <strong>reacción</strong> (¿le sirvió?), <strong>aprendizaje</strong> (¿aprendió?), <strong>conducta</strong> (¿lo aplica en el trabajo?) y <strong>resultados</strong> (¿se movió un indicador del negocio?).`,
    `Cada nivel tiene su momento: la reacción y el aprendizaje se miden en las primeras 24 horas, la conducta hacia los 30 días y los resultados entre los 60 y los 90 días.`,
    `La medición se diseña al revés: primero el resultado de negocio (nivel 4), después los comportamientos que lo producen (nivel 3), luego lo que hay que aprender (nivel 2) y al final la reacción (nivel 1).`,
    `En la investigación de ATD de 2019, el 83 % de las organizaciones medía la reacción y solo el 38 % los resultados de negocio.`,
    `El ROI es un quinto nivel que agrega la metodología de Phillips y exige datos de costo.`,
  ],
  body: [
    {
      t: "p",
      html: `El <strong>modelo Kirkpatrick</strong> es un método para evaluar una capacitación en cuatro niveles: la reacción de los participantes, lo que aprendieron, lo que cambiaron en su trabajo y los resultados que ese cambio produjo en la organización. Cada nivel responde una pregunta distinta, se mide en un momento distinto y lo responde una persona distinta.`,
    },
    {
      t: "p",
      html: `Esta guía adapta dos textos del blog de Intellum: la guía de preguntas de encuesta por nivel de <a href="${INTELLUM_ENCUESTAS}">Dr. Anderson Campbell (octubre de 2026)</a> y el artículo de Vanessa Alzate, CEO de Kirkpatrick Partners, sobre <a href="${INTELLUM_DISENO}">diseñar la formación empezando por el nivel 4</a> (septiembre de 2025). Las preguntas de ejemplo son nuestras y están escritas para programas en español. Le sumamos lo que hacemos en merahki.ai: conectar cada nivel con el diseño por competencias y con las cuatro familias de indicadores que usamos para reportar.`,
    },
    { t: "h2", text: "Cuáles son los cuatro niveles del modelo Kirkpatrick" },
    {
      t: "p",
      html: `Los niveles van de lo más fácil de medir a lo que más le importa a la dirección. Los dos primeros se miden al cerrar el curso. Los dos últimos exigen volver semanas después y preguntarle también al jefe.`,
    },
    {
      t: "table",
      head: ["Nivel", "Pregunta que responde", "Instrumento", "Cuándo", "Quién responde"],
      rows: [
        ["1. Reacción", "¿El curso fue relevante y claro?", "Encuesta corta", "Antes de 24 horas", "Participante"],
        ["2. Aprendizaje", "¿Puede hacer lo que el curso enseñó?", "Preguntas de escenario, evaluación con evidencia", "Al cierre", "Participante"],
        ["3. Conducta", "¿Lo aplica en su puesto?", "Encuesta al participante y al jefe, observación", "Hacia los 30 días", "Participante y jefe"],
        ["4. Resultados", "¿Se movió un indicador del negocio?", "Datos del negocio y encuesta al jefe", "Entre 60 y 90 días", "Jefe y área dueña del indicador"],
      ],
      caption: "Momentos sugeridos en la guía de Intellum (2026). Ajústalos a la duración del programa.",
    },
    { t: "h2", text: "Qué preguntar en cada nivel: ejemplos de encuesta" },
    {
      t: "p",
      html: `Una encuesta larga se responde mal. La guía de Intellum sugiere unas 12 preguntas al cierre, y a los 30 días unas seis para el participante y cuatro para el jefe. Una regla útil: si la respuesta no va a cambiar nada del curso, la pregunta sobra.`,
    },
    { t: "h3", text: "Nivel 1: reacción" },
    {
      t: "p",
      html: `La primera pregunta es la relevancia, porque predice si la persona va a usar lo aprendido. Gustar no basta. Pregunta también por la carga de contenido y la claridad.`,
    },
    {
      t: "ul",
      items: [
        "Del 1 al 5, ¿qué tan relacionado estuvo el contenido con las tareas que haces cada semana?",
        "Para el tiempo que tenías, ¿el contenido fue poco, suficiente o demasiado?",
        "¿Qué parte te costó entender y por qué?",
        "Del 0 al 10, ¿qué tan probable es que le recomiendes este curso a alguien de tu área?",
      ],
    },
    { t: "h3", text: "Nivel 2: aprendizaje" },
    {
      t: "p",
      html: `Aquí la autoevaluación («entendí el tema») dice poco. Funcionan mejor las preguntas de escenario, donde la persona tiene que decidir, y una pregunta de confianza para detectar a quien sabe la respuesta pero no se atreve a aplicarla.`,
    },
    {
      t: "ul",
      items: [
        "Escenario: un cliente pide un cambio de producto fuera del plazo de la política. ¿Cuál es tu primer paso? (cuatro opciones, una correcta).",
        "Ordena los pasos del procedimiento de cierre de caso.",
        "Del 1 al 5, ¿qué tan seguro te sientes de hacer esta tarea sin ayuda?",
        "¿Qué te impediría aplicar esto la próxima semana?",
      ],
    },
    { t: "h3", text: "Nivel 3: conducta" },
    {
      t: "p",
      html: `Cada pregunta se ata a una tarea concreta del puesto. Al participante se le pregunta si la hizo y qué lo frenó. Al jefe, qué ve distinto.`,
    },
    {
      t: "ul",
      items: [
        "Participante: en las últimas dos semanas, ¿hiciste [tarea] como se enseñó en el curso? Sí, en parte o no. Si no, ¿qué lo impidió?",
        "Participante: ¿qué te pidió el trabajo que el curso no cubrió?",
        "Participante: ¿tu jefe ha conversado contigo sobre lo que aprendiste?",
        "Jefe: ¿qué hace distinto esta persona desde el curso? Da un ejemplo.",
        "Jefe: ¿qué le impide aplicarlo más?",
      ],
    },
    { t: "h3", text: "Nivel 4: resultados" },
    {
      t: "p",
      html: `Primero se elige la métrica de negocio y después se escriben las preguntas. Al jefe se le pregunta por tiempo de tarea, errores o casos escalados, y por otros cambios que puedan explicar el resultado, como una herramienta nueva o una meta distinta.`,
    },
    {
      t: "ul",
      items: [
        "¿Cambió el tiempo que tu equipo tarda en [tarea]? Más, igual o menos.",
        "¿Bajaron los errores, reprocesos o casos escalados en [proceso]?",
        "¿Qué otros cambios hubo en estos meses (personal, herramientas, metas) que puedan explicar el resultado?",
      ],
    },
    { t: "h2", text: "Por qué la medición se cae en los niveles 3 y 4" },
    {
      t: "p",
      html: `La investigación <a href="${ATD_2019}">Effective Evaluation de ATD</a>, publicada en 2019 y citada por Intellum en 2026, mostró una escalera que baja rápido. Son datos de 2019. Sirven para ver el patrón, aunque las cifras de hoy pueden ser otras.`,
    },
    {
      t: "stats",
      items: [
        { value: "83 %", label: "medía la reacción (nivel 1)", source: "ATD, Effective Evaluation, 2019", href: ATD_2019 },
        { value: "54 %", label: "revisaba la aplicación en el puesto (nivel 3)", source: "ATD, Effective Evaluation, 2019", href: ATD_2019 },
        { value: "38 %", label: "medía resultados de negocio (nivel 4)", source: "ATD, Effective Evaluation, 2019", href: ATD_2019 },
        { value: "16 %", label: "calculaba el ROI (nivel 5)", source: "ATD, Effective Evaluation, 2019", href: ATD_2019 },
      ],
    },
    {
      t: "p",
      html: `Las razones que reportó ATD en ese estudio son prácticas: cuesta aislar el efecto de la formación, no hay acceso a los datos del negocio y la evaluación de niveles altos parece cara. Las tres tienen la misma raíz. La medición se pensó después de producir el curso, cuando ya nadie acordó con el área dueña del indicador qué se iba a medir ni contra qué línea base.`,
    },
    { t: "h2", text: "Cómo diseñar la medición desde el nivel 4 hacia atrás" },
    {
      t: "p",
      html: `La versión modernizada del modelo, que explica Vanessa Alzate en el blog de Intellum, propone invertir el orden: diseñar empezando por el resultado. En merahki.ai seguimos la misma lógica en el <a href="/es/methodology">diseño instruccional por competencias</a>: competencia, resultados de aprendizaje, evidencias y actividades. Así queda la secuencia:`,
    },
    {
      t: "ol",
      items: [
        "<strong>Nivel 4. Define el resultado.</strong> Una o dos métricas del negocio, con su línea base y el área que las reporta. Ejemplo: casos escalados a segundo nivel por mes.",
        "<strong>Nivel 3. Define los comportamientos críticos.</strong> Lo que la persona tiene que hacer distinto en su puesto para que esa métrica se mueva, escrito como conducta observable. Ejemplo: «cierra en la primera llamada los cinco motivos de contacto más frecuentes».",
        "<strong>Nivel 2. Define los resultados de aprendizaje y su evidencia.</strong> Qué tiene que poder demostrar al terminar, y con qué producto o desempeño lo demuestra.",
        "<strong>Nivel 1. Alinea la reacción con la relevancia.</strong> Las preguntas de satisfacción se enfocan en si el contenido sirve para esas tareas.",
        "<strong>Planea los apoyos y el calendario.</strong> Guías de trabajo, acompañamiento del jefe y recordatorios, más las fechas de envío: 24 horas, 30 días y 60 a 90 días.",
      ],
    },
    {
      t: "callout",
      title: "Regla práctica",
      html: `Si antes de producir el curso nadie puede nombrar la métrica de negocio y su línea base, el nivel 4 no se va a poder medir después. Ese acuerdo con el área dueña del indicador es el primer entregable del diseño.`,
    },
    { t: "h2", text: "Ejemplo: medición de un programa de inducción para asesores de servicio al cliente" },
    {
      t: "p",
      html: `Este ejemplo es ilustrativo y no trae cifras. Muestra cómo cada nivel se conecta con una de las cuatro familias de indicadores con las que reportamos: productividad, retención, costos y experiencia.`,
    },
    {
      t: "table",
      head: ["Nivel", "Qué se define", "Indicador", "Familia"],
      rows: [
        ["4. Resultados", "Menos casos escalados y mejor satisfacción del cliente", "Casos escalados por asesor al mes, CSAT", "Costos y experiencia"],
        ["3. Conducta", "El asesor resuelve en la primera llamada los cinco motivos de contacto más frecuentes", "Porcentaje de casos cerrados en primer contacto, observación del supervisor", "Productividad"],
        ["2. Aprendizaje", "Resuelve escenarios de esos cinco motivos con el procedimiento correcto", "Puntaje en escenarios, evidencia de desempeño", "Productividad"],
        ["1. Reacción", "El contenido corresponde a los casos reales del turno", "Relevancia de 1 a 5", "Experiencia"],
      ],
    },
    {
      t: "p",
      html: `Con esta tabla firmada por el área de servicio antes de producir, el curso se diseña alrededor de los cinco motivos de contacto, las evaluaciones replican esos casos y el reporte final habla de casos escalados y de satisfacción, que es lo que mira el jefe de servicio.`,
    },
    { t: "cta" },
    { t: "h2", text: "Cómo leer los resultados sin estadística avanzada" },
    {
      t: "p",
      html: `No hace falta un equipo de analítica para empezar. La guía de Intellum lo resume en dos operaciones: comparar el porcentaje de respuestas favorables contra la línea base y contar los temas que se repiten en las respuestas abiertas. Para que esa comparación sirva:`,
    },
    {
      t: "ul",
      items: [
        "Etiqueta cada respuesta por equipo, rol, curso y cohorte desde el envío. Sin etiqueta no hay forma de cruzarla con la métrica del negocio.",
        "Reporta por cohorte y no por persona. Así la encuesta puede ser anónima y la gente responde con más franqueza.",
        "Si puedes, forma al equipo por grupos escalonados. El grupo que todavía no se ha formado sirve de comparación para el que ya terminó.",
        "Registra los otros cambios del periodo. Una herramienta nueva o una meta distinta pueden explicar el resultado tanto como el curso.",
      ],
    },
    {
      t: "p",
      html: `Cuando merahki.ai opera el programa en el LMS merahki.ai, dejamos programados desde el inicio los envíos a 24 horas, 30 días y 60 a 90 días, y etiquetamos las respuestas por cohorte con el mismo código del curso que usa el reporte.`,
    },
    { t: "h2", text: "Kirkpatrick y el ROI de la capacitación" },
    {
      t: "p",
      html: `El modelo Kirkpatrick llega hasta los resultados. La <a href="https://roiinstitute.net/roi-methodology/">metodología ROI del ROI Institute</a>, conocida como modelo Phillips, agrega un quinto nivel que compara los beneficios monetarios del programa con sus costos totales. Para llegar ahí hay que aislar el efecto de la formación y convertir los resultados a dinero. Lo explicamos paso a paso en la guía sobre <a href="/es/blog/roi-de-la-capacitacion-como-medirlo">cómo medir el ROI de la capacitación</a>.`,
    },
    { t: "h2", text: "Qué aporta una microcredencial a la medición del nivel 2" },
    {
      t: "p",
      html: `Una microcredencial bien diseñada certifica el nivel 2 con evidencia: la insignia se gana al demostrar la competencia ante un criterio público, y la asistencia sola no alcanza. Esa evidencia, además, prepara el nivel 3, porque deja escrito qué se espera ver en el puesto. En los programas de merahki.ai, <a href="/es/certification">la certificación se emite con POK</a> como credencial verificable con Open Badges 3.0, y el estado de cada credencial (emitida y aceptada) se suma al reporte del programa.`,
    },
  ],
  faq: [
    {
      q: "¿Cuáles son los cuatro niveles del modelo Kirkpatrick?",
      a: "Reacción, aprendizaje, conducta y resultados. La reacción mide si el curso fue relevante, el aprendizaje si la persona puede hacer lo que se enseñó, la conducta si lo aplica en su puesto y los resultados si se movió un indicador del negocio.",
    },
    {
      q: "¿Cuánto tiempo después de la capacitación se mide la conducta?",
      a: "Hacia los 30 días, cuando la persona ya tuvo ocasión de aplicar lo aprendido. Los resultados de negocio se miden entre los 60 y los 90 días, porque los indicadores tardan más en moverse.",
    },
    {
      q: "¿Cuántas preguntas debe tener una encuesta de evaluación de capacitación?",
      a: "La guía de Intellum sugiere unas 12 al cierre del curso y, a los 30 días, unas seis para el participante y cuatro para el jefe. Si una pregunta no va a cambiar ninguna decisión sobre el curso, conviene quitarla.",
    },
    {
      q: "¿La encuesta puede ser anónima y aun así conectarse con resultados?",
      a: "Sí. Se etiqueta cada respuesta por cohorte, equipo, rol y curso, y se reporta por grupo, no por persona. Así se cruza con la métrica del negocio sin identificar a nadie.",
    },
    {
      q: "¿Qué diferencia hay entre el modelo Kirkpatrick y el modelo Phillips?",
      a: "Kirkpatrick evalúa en cuatro niveles y termina en los resultados de negocio. La metodología de Phillips, que promueve el ROI Institute, agrega un quinto nivel: el retorno de la inversión, que compara los beneficios monetarios con los costos del programa.",
    },
  ],
  sources: [
    { title: "Training Survey Questions That Measure More Than Reaction", publisher: "Intellum (Dr. Anderson Campbell)", url: INTELLUM_ENCUESTAS, date: "2026-10-23" },
    { title: "Design with the End in Mind: How to Future-Proof Training Using the Modernized Kirkpatrick Model", publisher: "Intellum (Vanessa Alzate, Kirkpatrick Partners)", url: INTELLUM_DISENO, date: "2025-09-24" },
    { title: "Effective Evaluation: Measuring Learning Programs for Success", publisher: "Association for Talent Development (ATD)", url: ATD_2019, date: "2019-11", note: "Cifras citadas por Intellum (2026)" },
    { title: "The Kirkpatrick Model", publisher: "Kirkpatrick Partners", url: "https://www.kirkpatrickpartners.com/the-kirkpatrick-model/" },
    { title: "ROI Methodology", publisher: "ROI Institute", url: "https://roiinstitute.net/roi-methodology/" },
  ],
  adaptedFrom: {
    title: "Training Survey Questions That Measure More Than Reaction",
    publisher: "Intellum",
    url: INTELLUM_ENCUESTAS,
    date: "2026-10-23",
  },
  related: [
    "roi-de-la-capacitacion-como-medirlo",
    "diseno-instruccional-por-competencias",
    "mapa-de-habilidades-empresa",
    "upskilling-reskilling-programas-empresas",
  ],
};
