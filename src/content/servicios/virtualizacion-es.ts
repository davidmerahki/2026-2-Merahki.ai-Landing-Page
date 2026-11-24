import type { Articulo } from "../blog/types";

// Página de servicio indexable para «virtualización de cursos» (24-nov-2026). Antes no había
// ninguna URL de merahki.ai que pudiera aparecer en Google por esta búsqueda: el portafolio de
// virtualización es un deck en iframe con noindex. Sin precios (regla de David).
export const servicio: Articulo = {
  slug: "virtualizacion-de-cursos",
  lang: "es",
  servicio: { path: "/es/virtualizacion-de-cursos", altPath: "/course-virtualization", serviceType: "Virtualización de cursos y diseño instruccional" },
  title: "La virtualización de cursos de merahki.ai es el servicio para universidades y empresas que quieren convertir su formación presencial en programas virtuales que se miden",
  seoTitle: "Virtualización de cursos para universidades y empresas",
  description: "Diseño instruccional por competencias, video e interactivos producidos con IA, montaje en tu LMS, operación y medición. Para universidades y empresas.",
  kicker: "Servicio · Virtualización de cursos",
  keywords: ["virtualización de cursos", "empresa de virtualización de cursos", "diseño de cursos virtuales para empresas", "producción de contenidos e-learning", "cursos virtuales a la medida", "diseño instruccional"],
  published: "2026-11-24",
  readingMinutes: 5,
  summary: [
    "merahki.ai virtualiza cursos y programas completos para universidades, empresas y entidades públicas: diseño instruccional por competencias, producción con IA, montaje en el LMS, operación y medición.",
    "Un programa pasa de la planeación a la primera cohorte en un plazo de 6 a 12 semanas, según las horas, el número de módulos y el tipo de medios.",
    "Lo montamos en tu LMS (Moodle, Blackboard, Brightspace, SAP, Q10 o cualquier otro LMS) o en el LMS merahki.ai.",
    "Cada programa puede cerrar con una credencial verificable emitida con POK y un informe de resultados.",
    "Desde 2018 hemos virtualizado más de 20.000 horas de formación.",
  ],
  body: [
    { t: "h2", text: "¿Qué es la virtualización de cursos?" },
    { t: "p", html: "La virtualización de cursos es el proceso de convertir un curso presencial, o el saber de un experto que no está escrito, en un programa virtual con resultados de aprendizaje, actividades, evaluación y seguimiento. Incluye rediseñar el curso para que funcione sin el docente en el salón: cada persona sabe qué va a lograr, practica con casos de su trabajo, entrega una evidencia que se califica con rúbrica y recibe ayuda cuando se atrasa." },
    { t: "p", html: "En merahki.ai la virtualización es una de las siete fases del <a href=\"/es\">merahki model</a>. Por eso el curso virtual no queda suelto: sale con su diseño por competencias, su credencial y su medición." },
    { t: "h2", text: "¿Cómo cambia un curso presencial cuando lo virtualiza merahki.ai?" },
    {
      t: "table",
      caption: "El mismo curso, antes y después de virtualizarlo",
      head: ["Dimensión", "Hoy, en presencial", "Con merahki.ai, en virtual"],
      rows: [
        ["Diseño", "Las diapositivas del docente", "Un syllabus por competencias con resultados de aprendizaje y rúbrica, aprobado por tu experto"],
        ["Contenido", "Clases magistrales", "Video con tu experto, interactivos y casos de la operación real"],
        ["Alcance", "Un salón y un horario", "Cohortes en varias ciudades y países, cada persona a su ritmo"],
        ["Seguimiento", "Lista de asistencia", "Informe semanal con activos, en riesgo, avance y utilidad percibida"],
        ["Certificación", "Certificado en PDF", "Credencial verificable emitida con POK"],
        ["Resultado", "Encuesta de satisfacción", "Medición de los niveles 1 a 4 del modelo Kirkpatrick, cuando se pacta"],
      ],
    },
    { t: "h2", text: "Qué incluye el servicio de virtualización" },
    {
      t: "ol",
      items: [
        "<strong>Planeación.</strong> Partimos de lo que pide tu cliente o tu área: el resultado esperado y las conductas que se quieren cambiar.",
        "<strong>Diseño por competencias.</strong> Competencia, resultados de aprendizaje de saber, hacer y ser, evidencias y rúbricas, alineados con el Marco Nacional de Cualificaciones y la CUOC cuando aplica. Ver <a href=\"/es/methodology\">nuestra metodología</a>.",
        "<strong>Producción.</strong> Guiones, video con tu experto, animación y más de 55 tipos de actividades (ver el <a href=\"/es/tipos-de-contenido-interactivo\">catálogo de contenidos interactivos</a>), producidos con un equipo nativo en IA.",
        "<strong>Montaje en el LMS.</strong> Configuramos el programa en tu LMS o en el LMS merahki.ai, con sus reglas de avance y finalización.",
        "<strong>Operación.</strong> Inscripciones, mesa de ayuda, recordatorios y un informe semanal de la cohorte.",
        "<strong>Credencial.</strong> Emisión de credenciales verificables con POK, atadas a los resultados de aprendizaje. Ver <a href=\"/es/certification\">certificación con credenciales verificables</a>.",
        "<strong>Resultados.</strong> Cuando se pacta, seguimiento con el jefe a los 60 días y un informe del indicador de negocio.",
      ],
    },
    { t: "h2", text: "¿Cuánto tarda virtualizar un curso?" },
    { t: "p", html: "Un programa típico tarda entre 6 y 12 semanas desde la planeación hasta la primera cohorte. El plazo depende de cuatro cosas: las horas del programa, el número de módulos, la mezcla de medios (video, animación, simulaciones) y la disponibilidad de tu experto para aprobar guiones y grabar. En la solicitud de cotización te pedimos esos datos para darte un cronograma real." },
    { t: "callout", title: "Un caso con fecha", html: "Con la Universidad de los Andes y Sanofi CHC produjimos dos programas certificados de educación médica en 8 semanas, para más de 200 alergólogos de 8 países de América Latina. <a href=\"/es/case-studies/uniandes-sanofi-microbiota\">Lee el caso completo</a>." },
    { t: "h2", text: "Qué ganas al virtualizar con merahki.ai" },
    {
      t: "ul",
      items: [
        "<strong>Ahorras tiempo de tu equipo:</strong> tu experto aprueba y graba. Guiones, producción, montaje, operación e informes quedan a cargo de merahki.ai.",
        "<strong>Llegas a más personas:</strong> el mismo programa atiende cohortes en varias ciudades y países sin repetir la clase.",
        "<strong>Demuestras resultados:</strong> el programa se diseña desde el resultado esperado y deja evidencia en cada nivel, para que puedas mostrarle a tu cliente o a tu dirección qué cambió.",
      ],
    },
    { t: "h2", text: "Qué necesitamos de ti" },
    {
      t: "ul",
      items: [
        "Un experto temático que valide los guiones y grabe sus videos.",
        "El material que ya tienes: presentaciones, guías, casos o grabaciones.",
        "Acceso de administración a tu LMS, si el programa va en tu plataforma.",
        "El dato del resultado que quieres mover, si vas a medir el nivel 4.",
      ],
    },
    { t: "cta", html: "Cuéntanos qué programa quieres virtualizar, para cuántas personas es y para cuándo lo necesitas. Te respondemos con el alcance y el cronograma." },
  ],
  faq: [
    { q: "¿Qué diferencia hay entre virtualizar un curso y grabar las clases?", a: "Grabar las clases deja el mismo curso presencial en video. Virtualizar rediseña el curso para el entorno virtual: resultados de aprendizaje claros, actividades que la persona hace por su cuenta, evaluación con evidencia y seguimiento de cada participante." },
    { q: "¿Cuánto tarda virtualizar un curso?", a: "Entre 6 y 12 semanas desde la planeación hasta la primera cohorte, según las horas del programa, el número de módulos, la mezcla de medios y la disponibilidad del experto." },
    { q: "¿Pueden montar el curso en el LMS de mi universidad o empresa?", a: "Sí. Lo montamos en Moodle, Blackboard, Brightspace, SAP, Q10 o cualquier otro LMS. Si no tienes uno, usamos el LMS merahki.ai." },
    { q: "¿El curso virtual puede entregar una credencial verificable?", a: "Sí. Las credenciales se emiten con POK, en el estándar Open Badges 3.0, y certifican los resultados de aprendizaje del programa. Cualquier empleador las verifica en segundos." },
    { q: "¿Cómo se cotiza la virtualización?", a: "Con la solicitud de cotización a la medida: nos cuentas el programa, para cuántas personas es y la fecha límite. Con eso preparamos el alcance, el cronograma y la propuesta." },
  ],
  sources: [],
  related: [],
};
