import type { Articulo } from "../types";

const ACCME = "https://accme.org/rule/cme-content-definition-and-examples/";
const WFME = "https://wfme.org/standards/cpd/";
const MILLER = "https://doi.org/10.1097/00001888-199009000-00045";
const OCDE = "https://www.fisme.science.uu.nl/publicaties/literatuur/2023_oecd_micro_credentials.pdf";
const OB3 = "https://www.imsglobal.org/spec/ob/v3p0/";
const VC = "https://www.w3.org/TR/vc-data-model-2.0/";
const LEY1581 = "http://www.secretariasenado.gov.co/senado/basedoc/ley_1581_2012.html";
const CASO = "/es/case-studies/uniandes-sanofi-microbiota";

const a = (href: string, text: string) => `<a href="${href}">${text}</a>`;

export const articulo: Articulo = {
  slug: "educacion-medica-continua-virtual-diseno",
  lang: "es",
  title: "Educación médica continua virtual: cómo diseñar programas para profesionales de la salud con casos clínicos, evaluación por competencias, trazabilidad y credenciales verificables",
  seoTitle: "Educación médica continua virtual: cómo diseñarla",
  description: "Cómo diseñar educación médica continua virtual con casos clínicos, evaluación por competencias, trazabilidad y credenciales verificables, con un caso real.",
  kicker: "Educación médica",
  keywords: [
    "educación médica continua",
    "educación médica continua virtual",
    "desarrollo profesional continuo en salud",
    "formación para profesionales de la salud",
    "curso virtual para médicos",
    "evaluación de competencias clínicas",
    "credenciales verificables en salud",
  ],
  published: "2026-11-24",
  readingMinutes: 7,
  summary: [
    "La <strong>educación médica continua</strong> son las actividades educativas con las que un médico mantiene, desarrolla o amplía los conocimientos, las habilidades y el desempeño que usa con sus pacientes (definición del ACCME).",
    "Un programa virtual se diseña desde las competencias clínicas: resultados de aprendizaje con verbo observable y evaluación que suba por la pirámide de Miller, del saber al hacer.",
    "Los casos clínicos ramificados, las simulaciones y las sesiones en vivo con expertos evalúan la decisión clínica, más allá del recuerdo de conceptos.",
    "La trazabilidad registra inscripción, avance, evaluaciones, asistencia y credencial de cada participante, con reportes para la universidad, el aval académico y el patrocinador.",
    "La credencial verificable (Open Badges 3.0 y W3C Verifiable Credentials) lleva emisor, aval, criterios y fecha, y cualquiera la comprueba sin llamar a la institución.",
  ],
  body: [
    {
      t: "p",
      html: `La <strong>educación médica continua</strong> es el conjunto de actividades educativas con las que un médico mantiene, desarrolla o amplía los conocimientos, las habilidades y el desempeño profesional que usa para atender a sus pacientes, según la ${a(ACCME, "definición del ACCME")}. Hacerla virtual exige diseñar por competencias clínicas, evaluar con casos, dejar trazabilidad de cada participante y emitir una credencial que un tercero pueda verificar.`,
    },
    {
      t: "p",
      html: "Esta guía es para facultades de medicina, sociedades científicas y áreas médicas de la industria farmacéutica que diseñan programas para médicos y otros profesionales de la salud. Usa como ejemplo el programa que merahki.ai virtualizó con la Facultad de Medicina de la Universidad de los Andes y Sanofi CHC.",
    },

    { t: "h2", text: "Qué es la educación médica continua y qué le exige a un programa virtual" },
    {
      t: "p",
      html: `El ACCME (Accreditation Council for Continuing Medical Education, de Estados Unidos) define la educación médica continua por su propósito: mejorar lo que el médico sabe y hace al servicio de sus pacientes, del público o de la profesión. La Federación Mundial de Educación Médica (WFME) usa el término desarrollo profesional continuo y publica ${a(WFME, "estándares globales")}, en su versión de 2024, con un enfoque de principios que cada país adapta, sea la actualización obligatoria o voluntaria.`,
    },
    { t: "p", html: "Llevada a un entorno virtual, la educación médica continua le exige seis cosas al programa:" },
    {
      t: "ul",
      items: [
        "<strong>Respaldo académico.</strong> Una facultad o una sociedad científica responde por el contenido clínico.",
        "<strong>Tiempo corto.</strong> El participante tiene consulta, turnos y guardias. Los módulos deben ser breves y asincrónicos, con sesiones en vivo puntuales.",
        "<strong>Evaluación de la decisión clínica.</strong> Recordar conceptos es el punto de partida, y el programa tiene que llegar a lo que el médico decide frente a un paciente.",
        "<strong>Trazabilidad.</strong> El aval académico, el patrocinador y cualquier auditoría necesitan saber quién hizo qué y cuándo.",
        "<strong>Una credencial comprobable.</strong> El profesional la muestra y un tercero la verifica.",
        "<strong>Independencia del contenido.</strong> Cuando hay un patrocinador de la industria, el comité académico decide el contenido clínico y el mensaje comercial queda fuera del programa.",
      ],
    },

    { t: "h2", text: "Cómo se definen las competencias clínicas y los resultados de aprendizaje" },
    {
      t: "p",
      html: "El diseño empieza por el problema clínico que el profesional enfrenta en su consulta. Con el experto se define qué debe hacer distinto el médico al terminar, y eso se escribe como resultado de aprendizaje: un verbo observable, un contenido, una condición y un criterio. Por ejemplo: «Ante un caso clínico de [condición], el médico elige el manejo indicado y justifica su decisión con la guía de práctica clínica vigente».",
    },
    {
      t: "p",
      html: `Para decidir cómo se evalúa cada resultado sirve la pirámide que propuso George Miller en ${a(MILLER, "1990")}. Tiene cuatro niveles: sabe, sabe cómo, demuestra cómo y hace.`,
    },
    {
      t: "table",
      head: ["Nivel de Miller", "Qué demuestra el profesional", "Cómo se evalúa en un programa virtual"],
      rows: [
        ["Sabe", "Conoce los conceptos y la evidencia", "Preguntas de opción múltiple con retroalimentación inmediata"],
        ["Sabe cómo", "Aplica el conocimiento a un caso", "Casos clínicos con preguntas de decisión y justificación escrita"],
        ["Demuestra cómo", "Ejecuta en un entorno controlado", "Caso ramificado, simulación virtual, video del procedimiento o examen práctico en sesión sincrónica"],
        ["Hace", "Desempeña en su práctica real", "Registro de casos propios, auditoría de historias clínicas u observación en el servicio"],
      ],
      caption: "La pirámide de Miller aplicada a la evaluación de un programa de educación médica continua virtual.",
    },
    {
      t: "p",
      html: "En los programas que revisamos, la evaluación casi siempre se queda en los dos primeros niveles. Subir al tercero no exige un laboratorio de simulación. Un caso ramificado bien escrito, donde cada decisión cambia la evolución del paciente, ya obliga al médico a demostrar cómo actúa.",
    },

    { t: "h2", text: "Casos clínicos, simulación y evaluación en un curso virtual" },
    {
      t: "p",
      html: "El caso clínico es la pieza central de un curso virtual para profesionales de la salud. Revela la información por etapas (antecedentes, examen, paraclínicos), pide una decisión en cada punto y devuelve una retroalimentación que cita la evidencia. Así se escribe uno:",
    },
    {
      t: "ol",
      items: [
        "Elige un caso típico de la consulta del público objetivo, con la variante que más errores produce.",
        "Define la decisión que el profesional debe tomar y el error más frecuente frente a ella.",
        "Escribe la secuencia: presentación del paciente, datos que se revelan y puntos de decisión.",
        "Redacta la retroalimentación de cada opción con la referencia a la guía o al estudio que la respalda.",
        "Valida el caso con el experto académico y con un profesional del público objetivo.",
        `Anonimiza todo dato de pacientes reales. En Colombia, los datos de salud son datos sensibles según la ${a(LEY1581, "Ley 1581 de 2012")}.`,
      ],
    },
    {
      t: "p",
      html: "Alrededor de los casos van otras piezas. Un banco de preguntas validado por el comité académico. Rúbricas para las respuestas abiertas. Sesiones en vivo con el experto para los casos difíciles. Una prueba diagnóstica al inicio y otra al final, que muestran cuánto avanzó el grupo (nivel 2 de Kirkpatrick). Y una encuesta de transferencia dos o tres meses después, que pregunta qué cambió en la consulta (nivel 3).",
    },

    { t: "h2", text: "Trazabilidad: qué registrar de cada participante y para quién" },
    {
      t: "p",
      html: "En educación médica continua hay varios actores que piden cuentas: la universidad, la sociedad científica que avala, el patrocinador y el propio profesional. Cada uno necesita datos distintos del mismo programa.",
    },
    {
      t: "table",
      head: ["Dato", "Quién lo necesita", "Para qué"],
      rows: [
        ["Inscripción, país y especialidad", "Universidad y patrocinador", "Saber a quién llegó el programa"],
        ["Avance por módulo y tiempo de dedicación", "Equipo de operación", "Detectar el abandono a tiempo y enviar recordatorios"],
        ["Intentos y resultados de cada evaluación", "Comité académico", "Comprobar el logro de cada resultado de aprendizaje"],
        ["Asistencia a sesiones en vivo", "Universidad y aval académico", "Cumplir los requisitos de certificación"],
        ["Encuestas de satisfacción y de transferencia", "Universidad y patrocinador", "Medir los niveles 1 y 3 de Kirkpatrick"],
        ["Credencial emitida y sus verificaciones", "Profesional, universidad y empleador", "Probar la certificación ante terceros"],
      ],
      caption: "Datos de trazabilidad en un programa de educación médica continua virtual.",
    },
    {
      t: "p",
      html: "Estos datos salen del LMS y se entregan en reportes semanales mientras el programa corre. Un reporte que llega cuando el programa terminó ya no sirve para rescatar a nadie. Y como son datos personales, se tratan con autorización previa del participante y con finalidades claras, como exige la Ley 1581 de 2012.",
    },

    { t: "h2", text: "Credenciales verificables para el profesional de la salud" },
    {
      t: "p",
      html: "La credencial de un programa de educación médica continua debe llevar el emisor (la universidad), el aval (la sociedad científica), el nombre del programa, las competencias y los criterios con que se evaluaron, la intensidad horaria, la fecha y un enlace de verificación. Con ese contenido, un hospital o una aseguradora comprueban la certificación sin escribirle a nadie.",
    },
    {
      t: "p",
      html: `Los estándares que lo hacen posible son ${a(OB3, "Open Badges 3.0")} de 1EdTech, alineado con el ${a(VC, "modelo de W3C Verifiable Credentials")}. La credencial viaja con sus metadatos firmados y cualquiera la valida en segundos. La ${a(OCDE, "OCDE (2023)")} encontró, además, que las credenciales cortas se reconocen más en los sectores donde la industria participa en su diseño o hay escasez aguda de talento, y la salud es uno de ellos.`,
    },
    {
      t: "callout",
      title: "Lo que cambia en una auditoría",
      html: `Un certificado en PDF se puede editar y no dice qué se evaluó. Una credencial verificable lleva el emisor, el aval, los criterios y la fecha, y se comprueba en segundos. En merahki.ai la emitimos con nuestro aliado POK como parte de la ${a("/es/certification", "certificación de competencias")} de cada programa.`,
    },
    {
      t: "cta",
      html: "Si tu facultad, tu sociedad científica o tu área médica necesita lanzar un programa de educación médica continua virtual con trazabilidad y credenciales verificables, merahki.ai lo diseña, lo virtualiza, lo opera y lo certifica contigo.",
    },

    { t: "h2", text: "Caso Uniandes y Sanofi CHC: educación médica continua virtual en ocho semanas" },
    {
      t: "p",
      html: "En 2022, la Facultad de Medicina de la Universidad de los Andes tenía ocho semanas para virtualizar y lanzar un programa certificado sobre microbiota, probióticos y prebióticos para médicos de América Latina. Sanofi CHC fue el aliado corporativo y la Sociedad Iberoamericana de Microbiota, Probióticos y Prebióticos dio el aval académico. La capacidad académica estaba. Faltaba tiempo operativo.",
    },
    {
      t: "p",
      html: "merahki.ai trabajó con el experto de la universidad en cinco frentes: inmersión en el contenido, diseño instruccional acelerado, selección de herramientas interactivas, virtualización modular con montaje en el LMS de la universidad y automatización de comunicaciones, seguimiento y reportes semanales para los equipos de Uniandes y Sanofi. El contenido cubrió microbioma, colonización normal y patológica, cepas microbiológicas y los conceptos clínicos de probióticos, prebióticos, postbióticos y simbióticos.",
    },
    {
      t: "stats",
      items: [
        { value: "8 semanas", label: "de la producción al lanzamiento", source: "merahki.ai, caso Uniandes × Sanofi CHC", href: "https://merahki.ai/es/case-studies/uniandes-sanofi-microbiota" },
        { value: "95+", label: "insignias digitales para médicos generales y pediatras en la primera fase", source: "merahki.ai, caso Uniandes × Sanofi CHC", href: "https://merahki.ai/es/case-studies/uniandes-sanofi-microbiota" },
        { value: "8 países", label: "de América Latina alcanzados", source: "merahki.ai, caso Uniandes × Sanofi CHC", href: "https://merahki.ai/es/case-studies/uniandes-sanofi-microbiota" },
        { value: "+200", label: "alergólogos capacitados en la segunda fase", source: "merahki.ai, caso Uniandes × Sanofi CHC", href: "https://merahki.ai/es/case-studies/uniandes-sanofi-microbiota" },
      ],
    },
    {
      t: "p",
      html: "La segunda fase mostró el valor del diseño modular. La base producida para médicos generales y pediatras se reorganizó para una audiencia especializada, los alergólogos, con énfasis en las aplicaciones de los probióticos en la práctica alergológica, sin volver a producir desde cero. Tres lecciones sirven para cualquier programa médico:",
    },
    {
      t: "ul",
      items: [
        "Una base modular atiende a una segunda especialidad sin volver a producir desde cero.",
        "Cuatro actores (universidad, patrocinador, sociedad científica y operador) caben en un solo plan ejecutivo si los reportes llegan cada semana.",
        "La credencial digital se diseña como parte del entregable desde el primer día.",
      ],
    },
    {
      t: "p",
      html: `El detalle, con los testimonios de Sanofi CHC, de la universidad y de los participantes, está en el ${a(CASO, "caso Uniandes × Sanofi CHC")}. Lo que hacemos para facultades, sociedades y farmacéuticas está en ${a("/es/medical-education", "educación médica continua con merahki.ai")}.`,
    },

    { t: "h2", text: "Pasos para diseñar un programa de educación médica continua virtual" },
    {
      t: "ol",
      items: [
        "Define el público (especialidad, país, nivel de experiencia) y el problema clínico que el programa resuelve.",
        "Acuerda los roles: quién responde por el contenido, quién avala, quién patrocina y quién opera.",
        "Escribe los resultados de aprendizaje y decide en qué nivel de Miller se evalúa cada uno.",
        "Diseña los casos clínicos, el banco de preguntas y las rúbricas, y valídalos con el comité académico.",
        "Produce en módulos breves y reutilizables, pensando desde el inicio en la segunda audiencia.",
        "Configura el LMS con la trazabilidad completa y define los reportes semanales.",
        "Emite credenciales verificables y mide la transferencia a la práctica a los dos o tres meses.",
      ],
    },
  ],
  faq: [
    {
      q: "¿Qué es la educación médica continua?",
      a: "Es el conjunto de actividades educativas con las que un médico mantiene, desarrolla o amplía los conocimientos, las habilidades y el desempeño profesional que usa con sus pacientes, según el ACCME. La WFME la enmarca como desarrollo profesional continuo e incluye el aprendizaje formal e informal de los médicos en ejercicio.",
    },
    {
      q: "¿Cómo se diseña un curso virtual para profesionales de la salud?",
      a: "Se parte del problema clínico, se escriben resultados de aprendizaje con verbo observable y se decide cómo se evalúa cada uno. El contenido va en módulos breves con casos clínicos y sesiones en vivo con expertos, y el LMS registra el avance de cada participante para los reportes.",
    },
    {
      q: "¿Cómo se evalúan las competencias clínicas en un curso virtual?",
      a: "Con evaluaciones que suban por la pirámide de Miller: preguntas para el saber, casos con decisiones para el saber cómo, casos ramificados o simulaciones para el demostrar cómo, y registro de casos propios u observación para el hacer. Las rúbricas hacen comparable la evaluación de respuestas abiertas.",
    },
    {
      q: "¿Qué debe tener una credencial de educación médica continua?",
      a: "Emisor, aval académico, nombre del programa, competencias y criterios de evaluación, intensidad horaria, fecha y un enlace de verificación. Si se emite en Open Badges 3.0, cualquier tercero la comprueba sin contactar a la institución.",
    },
    {
      q: "¿Puede un laboratorio farmacéutico patrocinar un programa de educación médica continua?",
      a: "Sí, como aliado corporativo, que es como participó Sanofi CHC en el caso con Uniandes. La universidad y la sociedad científica responden por el contenido clínico, y el programa conviene diseñarlo para que el mensaje comercial quede fuera de él.",
    },
    {
      q: "¿Cuánto tiempo toma virtualizar un programa de educación médica continua?",
      a: "Depende del alcance y de la disponibilidad del experto. El programa de Uniandes y Sanofi CHC pasó de la producción al lanzamiento en ocho semanas, con un equipo que diseñó, virtualizó y operó en paralelo.",
    },
  ],
  sources: [
    { title: "CME Content: Definition and Examples", publisher: "Accreditation Council for Continuing Medical Education (ACCME)", url: ACCME },
    { title: "WFME Global Standards for Quality Improvement: Continuing Professional Development", publisher: "World Federation for Medical Education", url: WFME, date: "2024" },
    { title: "The assessment of clinical skills/competence/performance (Academic Medicine, 65[9])", publisher: "George E. Miller", url: MILLER, date: "1990" },
    { title: "Open Badges Specification 3.0", publisher: "1EdTech", url: OB3 },
    { title: "Verifiable Credentials Data Model v2.0", publisher: "W3C", url: VC },
    { title: "Micro-credentials for Lifelong Learning and Employability: Uses and Possibilities", publisher: "OCDE", url: OCDE, date: "2023" },
    { title: "Ley 1581 de 2012, por la cual se dictan disposiciones generales para la protección de datos personales", publisher: "Congreso de Colombia (Secretaría del Senado)", url: LEY1581, date: "2012" },
    { title: "Caso Uniandes × Sanofi CHC: educación médica multinacional en 8 semanas", publisher: "merahki.ai", url: "https://merahki.ai/es/case-studies/uniandes-sanofi-microbiota", date: "2022" },
  ],
  related: [
    "credenciales-digitales-verificables",
    "open-badges-3-0-que-cambia",
    "diseno-instruccional-por-competencias",
    "modelo-kirkpatrick-medir-impacto-capacitacion",
    "lifelong-learning-universidades-educacion-continua",
  ],
};
