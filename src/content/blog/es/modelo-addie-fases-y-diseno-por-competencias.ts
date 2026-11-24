import type { Articulo } from "../types";

// Artículo 7 · Modelo ADDIE (W3, 24-nov-2026). Origen verificado en ERIC (IPISD, Florida State
// University, 1975). El ejemplo usa datos ficticios (los mismos del merahki model del home).
const IPISD = "https://eric.ed.gov/?id=ED122022";
const IPISD_ANALIZAR = "https://eric.ed.gov/?id=ED122018";
const IPISD_CONTROL = "https://eric.ed.gov/?id=ED122021";
const SAM = "https://learn.alleninteractions.com/services/custom-learning/sam/elearning-development";
const KIRKPATRICK = "https://www.kirkpatrickpartners.com/the-kirkpatrick-model/";

export const articulo: Articulo = {
  slug: "modelo-addie-fases-y-diseno-por-competencias",
  lang: "es",
  altSlug: "addie-model-vs-competency-based-design",
  title: "Modelo ADDIE: las cinco fases del diseño instruccional con un ejemplo, y cuándo conviene combinarlo con el diseño por competencias",
  seoTitle: "Modelo ADDIE: fases, ejemplo y diseño por competencias",
  description: "Qué es el modelo ADDIE, qué se hace en análisis, diseño, desarrollo, implementación y evaluación, un ejemplo resuelto y cuándo sumarle competencias.",
  kicker: "Modelos de diseño instruccional",
  keywords: ["modelo addie", "fases del modelo addie", "diseño instruccional addie", "diseño instruccional addie ejemplo", "modelos de diseño instruccional", "addie y diseño por competencias"],
  published: "2026-11-24",
  readingMinutes: 6,
  summary: [
    "ADDIE es un modelo de diseño instruccional de cinco fases: análisis, diseño, desarrollo, implementación y evaluación. Ordena un proyecto de formación desde la necesidad hasta la revisión del curso.",
    "Su origen más citado es el modelo IPISD que Florida State University preparó en 1975 para la formación militar de Estados Unidos. Su quinta fase se llamaba control e incluía evaluar a los egresados en el puesto.",
    "ADDIE dice en qué orden trabajar, pero no dice cómo redactar resultados de aprendizaje ni qué evidencia pedir. Para eso se combina con el diseño por competencias.",
    "Conviene en proyectos con alcance claro y aprobaciones formales. Cuando el cliente necesita ver prototipos pronto, SAM lo complementa con ciclos cortos.",
  ],
  body: [
    { t: "p", html: "El modelo ADDIE es un marco de diseño instruccional que organiza un proyecto de formación en cinco fases: análisis, diseño, desarrollo, implementación y evaluación. Cada fase produce un entregable que alimenta la siguiente, desde la necesidad de formación hasta la revisión del curso con datos de los participantes." },
    { t: "p", html: "Lo usan universidades, empresas y entidades públicas porque da un orden fácil de explicar a un comité. Esta guía explica cada fase con un ejemplo corporativo, sus límites y la forma de combinarlo con el diseño por competencias." },
    { t: "h2", text: "¿De dónde viene el modelo ADDIE?" },
    { t: "p", html: `El antecedente más citado es <em>Interservice Procedures for Instructional Systems Development</em> (IPISD), una serie de cinco documentos que el Centro de Tecnología Educativa de Florida State University publicó en 1975, con patrocinio del Comando de Educación y Entrenamiento Naval de Estados Unidos. Sus fases eran analizar, diseñar, desarrollar, implementar y controlar (<a href="${IPISD}">ERIC, 1975</a>).` },
    { t: "p", html: `La fase de control tenía tres pasos: evaluación interna del desempeño en el curso, evaluación externa del desempeño de los egresados en el puesto y revisión del sistema con esos datos (<a href="${IPISD_CONTROL}">ERIC, 1975</a>). El modelo original ya miraba lo que hacían las personas en su trabajo después de la formación. Hoy se conoce con la sigla ADDIE, con la evaluación como quinta fase.` },
    { t: "h2", text: "¿Cuáles son las cinco fases del modelo ADDIE?" },
    { t: "h3", text: "1. Análisis" },
    { t: "p", html: `Se define el problema de desempeño y se decide si la formación lo resuelve. Se estudia la audiencia, lo que ya sabe, el contexto de trabajo, las tareas del puesto y las restricciones de tiempo, presupuesto, tecnología y fecha. En el IPISD esta fase incluía analizar el puesto, seleccionar las tareas, construir medidas de desempeño, revisar los cursos existentes y elegir el entorno de formación (<a href="${IPISD_ANALIZAR}">ERIC, 1975</a>). <strong>Entregable:</strong> informe de análisis con la necesidad, la audiencia y el resultado esperado.` },
    { t: "h3", text: "2. Diseño" },
    { t: "p", html: "Se escriben los resultados de aprendizaje, la estructura de módulos, la estrategia de evaluación y la secuencia de actividades. También se eligen la modalidad y los medios. <strong>Entregable:</strong> documento de diseño o blueprint aprobado por el experto." },
    { t: "h3", text: "3. Desarrollo" },
    { t: "p", html: "Se producen los materiales: guiones, video, interactivos, guías, bancos de preguntas y rúbricas. El experto revisa cada pieza y un grupo pequeño de usuarios prueba el curso antes de abrirlo. <strong>Entregable:</strong> curso completo, listo para montar." },
    { t: "h3", text: "4. Implementación" },
    { t: "p", html: "Se monta el curso en el LMS, se prepara a facilitadores y tutores, se abren inscripciones y se opera la primera cohorte. <strong>Entregable:</strong> curso en operación con su plan de soporte." },
    { t: "h3", text: "5. Evaluación" },
    { t: "p", html: `Se mide si el curso logró lo que prometía y se ajusta. La evaluación formativa acompaña las fases anteriores y la sumativa llega al final. Para la sumativa se usa con frecuencia el modelo Kirkpatrick, con sus cuatro niveles: reacción, aprendizaje, conducta y resultados (<a href="${KIRKPATRICK}">Kirkpatrick Partners</a>). <strong>Entregable:</strong> informe de evaluación con las mejoras para la siguiente versión.` },
    { t: "h2", text: "Ejemplo del modelo ADDIE aplicado a un curso corporativo" },
    { t: "p", html: "Datos de ejemplo: una empresa del sector financiero quiere que sus 40 analistas cierren el informe mensual en 3 días y no en 5. El área de formación propone una microcredencial virtual de 32 horas en 8 semanas." },
    {
      t: "table",
      caption: "Las cinco fases de ADDIE en el ejemplo (datos ficticios)",
      head: ["Fase", "Qué se hizo", "Entregable"],
      rows: [
        ["Análisis", "Entrevistas con jefes y analistas. Hallazgo: los datos llegan sin validar y el cierre se presenta en hojas sueltas. La formación ataca esas dos causas. Una tercera, de proceso, se escala al área", "Informe de necesidad con la línea base de 5 días"],
        ["Diseño", "Competencia, resultados de saber, hacer y ser, cuatro módulos y una evidencia por módulo. Evidencia final: el tablero del cierre real de cada analista", "Blueprint aprobado por el experto"],
        ["Desarrollo", "Guiones aprobados antes de grabar, videos con el experto, ejercicios con datos de ejemplo y rúbricas", "Paquete del curso por módulo"],
        ["Implementación", "Montaje en el LMS, cohorte de 40 analistas e informe semanal de activos y en riesgo", "Curso en operación"],
        ["Evaluación", "Encuesta de utilidad, diagnóstico inicial y final, seguimiento con el jefe a los 60 días y medición del tiempo de cierre", "Informe con el resultado medido"],
      ],
    },
    { t: "p", html: "En el ejemplo, el cierre bajó a 3,4 días. Quedó cerca de la meta, y el informe explica por qué no la alcanzó: la causa de proceso seguía abierta. Esa lectura es la que vuelve creíble una evaluación." },
    { t: "h2", text: "¿Qué ventajas y qué límites tiene el modelo ADDIE?" },
    { t: "p", html: "Sus ventajas:" },
    {
      t: "ul",
      items: [
        "Es fácil de explicar a un comité y a un cliente.",
        "Cada fase cierra con un entregable que se aprueba.",
        "Ordena proyectos grandes con varios responsables.",
      ],
    },
    { t: "p", html: "Sus límites:" },
    {
      t: "ul",
      items: [
        "Aplicado fase por fase, deja las pruebas con usuarios para el final, cuando cambiar cuesta más.",
        "No dice cómo redactar un resultado de aprendizaje ni qué evidencia pedir.",
        "No obliga a fijar el resultado del negocio antes de diseñar.",
      ],
    },
    { t: "p", html: `Por el primer límite existe SAM, el modelo de aproximaciones sucesivas de Michael Allen, que trabaja con una fase de preparación y ciclos cortos de diseño y desarrollo con prototipos tempranos (<a href="${SAM}">Allen Interactions</a>). Para los otros dos, ADDIE se combina con el diseño por competencias.` },
    { t: "h2", text: "Errores frecuentes al aplicar el modelo ADDIE" },
    {
      t: "ul",
      items: [
        "<strong>Saltarse el análisis porque el cliente ya pidió un curso.</strong> Si el problema es de proceso o de herramientas, ningún curso lo arregla. El análisis sirve para decir eso a tiempo.",
        "<strong>Escribir objetivos del docente en lugar de resultados del participante.</strong> «Enseñar a priorizar indicadores» describe lo que hace el profesor. «Prioriza qué indicadores monitorear y justifica los que descarta» describe lo que hace el participante y se puede evaluar.",
        "<strong>Grabar antes de aprobar el guion.</strong> Cada regrabación consume la agenda del experto, que es el recurso más escaso del proyecto.",
        "<strong>Dejar la evaluación para el final.</strong> Si el indicador de negocio y su línea base no se fijaron en el análisis, la fase de evaluación solo puede medir satisfacción.",
      ],
    },
    { t: "h2", text: "ADDIE, SAM y diseño por competencias: ¿en qué se diferencian?" },
    {
      t: "table",
      caption: "Comparación de tres formas de diseñar un programa",
      head: ["Criterio", "ADDIE", "SAM", "Diseño por competencias"],
      rows: [
        ["Qué ordena", "Las fases del proyecto", "Las fases del proyecto, en ciclos", "El contenido y la evaluación"],
        ["Punto de partida", "El análisis de la necesidad", "Una sesión de arranque con el cliente y un prototipo", "La competencia que exige el puesto"],
        ["Cómo avanza", "Fase por fase, con aprobaciones", "Iteraciones con versiones alfa, beta y final", "De la competencia a resultados, evidencias y actividades"],
        ["Qué entrega", "Un curso y su evaluación", "Versiones sucesivas del curso", "Un blueprint con la trazabilidad de cada resultado"],
        ["Riesgo", "Detectar tarde lo que no funciona", "Perder el hilo del diseño entre iteraciones", "Forzar una alineación normativa que no calza"],
      ],
    },
    { t: "h2", text: "¿Cuándo conviene combinar ADDIE con el diseño por competencias?" },
    { t: "p", html: "Siempre que el programa certifica algo o tiene que mostrar resultados. La combinación es directa: ADDIE ordena el proyecto y el diseño por competencias define qué se hace dentro de cada fase." },
    {
      t: "ul",
      items: [
        "<strong>En el análisis</strong>, además de la necesidad, se identifica la ocupación (en Colombia, con la CUOC) y la conducta que debe cambiar en el puesto.",
        "<strong>En el diseño</strong>, los objetivos se redactan como resultados de aprendizaje de saber, hacer y ser, cada uno con su evidencia y su rúbrica.",
        "<strong>En el desarrollo</strong>, cada actividad practica una pieza de la evidencia que viene.",
        "<strong>En la evaluación</strong>, se mide desde el nivel 4 hacia abajo, con los indicadores que se fijaron en el análisis.",
      ],
    },
    { t: "p", html: `Así trabaja la <a href="/es/methodology">metodología de merahki.ai</a>. El paso a paso para redactar resultados de aprendizaje, evidencias y rúbricas está en la guía de <a href="/es/blog/diseno-instruccional-por-competencias">diseño instruccional por competencias</a>. Para programas de empresas por rol, mira <a href="/es/training-certification">capacitación y certificación para empresas</a>.` },
    { t: "cta", html: "Cuéntanos qué programa quieres diseñar o auditar, para quién es y qué resultado debe mover." },
  ],
  faq: [
    { q: "¿Qué es el modelo ADDIE?", a: "Es un modelo de diseño instruccional que organiza un proyecto de formación en cinco fases: análisis, diseño, desarrollo, implementación y evaluación. Cada fase cierra con un entregable que alimenta la siguiente." },
    { q: "¿Cuáles son las fases del modelo ADDIE?", a: "Análisis de la necesidad y la audiencia, diseño de resultados y evaluación, desarrollo de los materiales, implementación del curso con la primera cohorte y evaluación de lo que se logró para ajustar la siguiente versión." },
    { q: "¿Qué ejemplo hay de diseño instruccional ADDIE?", a: "Un curso para que un equipo de analistas cierre el informe mensual en menos días. El análisis fija la línea base, el diseño define resultados y evidencias, el desarrollo produce el curso, la implementación opera la cohorte y la evaluación mide el tiempo de cierre." },
    { q: "¿ADDIE es un modelo lineal?", a: "Se puede aplicar fase por fase o con revisiones entre fases. El IPISD de 1975 cerraba con una revisión del sistema basada en datos de evaluación, y SAM propone ciclos cortos con prototipos para detectar problemas antes." },
    { q: "¿Qué diferencia hay entre ADDIE y el diseño por competencias?", a: "ADDIE ordena las fases del proyecto. El diseño por competencias define qué entra en cada fase: parte de lo que la persona debe hacer en su trabajo y de ahí deriva resultados de aprendizaje, evidencias y actividades. Funcionan mejor juntos." },
  ],
  sources: [
    { title: "Interservice Procedures for Instructional Systems Development: Executive Summary and Model (Branson, R. K.)", publisher: "Florida State University, Center for Educational Technology (ERIC ED122022)", url: IPISD, date: "1975" },
    { title: "Interservice Procedures for Instructional Systems Development. Phase I: Analyze (Branson, R. K. y otros)", publisher: "Florida State University, Center for Educational Technology (ERIC ED122018)", url: IPISD_ANALIZAR, date: "1975" },
    { title: "Interservice Procedures for Instructional Systems Development. Phase IV: Implement and Phase V: Control (Branson, R. K. y otros)", publisher: "Florida State University, Center for Educational Technology (ERIC ED122021)", url: IPISD_CONTROL, date: "1975" },
    { title: "SAM: the Successive Approximation Model", publisher: "Allen Interactions", url: SAM },
    { title: "The Kirkpatrick Model", publisher: "Kirkpatrick Partners", url: KIRKPATRICK },
  ],
  related: ["diseno-instruccional-por-competencias", "virtualizacion-de-cursos-proceso-y-tiempos", "modelo-kirkpatrick-medir-impacto-capacitacion", "como-disenar-una-microcredencial"],
};
