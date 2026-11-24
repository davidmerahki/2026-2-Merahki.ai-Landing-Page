import type { Articulo } from "../types";

const TRAINING_MAG = "https://trainingmag.com/2025-training-industry-report/";
const LTI = "https://www.1edtech.org/standards/lti";
const OPEN_BADGES = "https://www.1edtech.org/standards/open-badges";
const XAPI = "https://github.com/adlnet/xAPI-Spec";
const WCAG = "https://www.w3.org/TR/WCAG22/";

export const articulo: Articulo = {
  slug: "plataforma-lms-como-elegir-implementar",
  lang: "es",
  title: "Plataforma LMS: qué es, para qué sirve y cómo una universidad o empresa la elige, la implementa y la opera",
  seoTitle: "Plataforma LMS: qué es y cómo elegirla e implementarla",
  description:
    "Qué es una plataforma LMS, para qué sirve, cómo elegirla (estándares, integraciones, credenciales) y qué incluyen su implementación y operación.",
  kicker: "Plataformas de aprendizaje",
  keywords: [
    "plataforma lms",
    "qué es un lms",
    "para qué sirve una plataforma lms",
    "lms para universidades",
    "implementación de lms",
    "cómo elegir un lms",
  ],
  published: "2026-11-24",
  readingMinutes: 6,
  summary: [
    "Una <strong>plataforma LMS</strong> es el software donde una institución publica cursos, inscribe a los participantes, registra su avance y evaluaciones y saca los reportes de formación.",
    "Un LMS gestiona formación asignada y evaluada. Una LXP recomienda contenido para que cada persona elija. Una plataforma de cursos se enfoca en publicar y vender.",
    "Para elegir, revisa estándares (SCORM, xAPI, LTI 1.3), credenciales verificables (Open Badges 3.0), integraciones con SIS, CRM y SSO, analítica exportable, accesibilidad y protección de datos.",
    "La implementación va del diagnóstico al piloto con una cohorte real. La operación diaria (matrícula, soporte, seguimiento, credenciales y reportes) decide si el programa funciona.",
    "Si tu institución ya tiene Moodle, Canvas, Blackboard, Brightspace o SAP SuccessFactors Learning, la primera pregunta es si lo estás aprovechando y operando bien.",
  ],
  body: [
    {
      t: "p",
      html: "Una <strong>plataforma LMS</strong> (<em>Learning Management System</em>, o sistema de gestión del aprendizaje) es el software donde una institución publica sus cursos, inscribe a los participantes, registra su avance y sus evaluaciones y obtiene los reportes de quién aprendió qué. Es la base de la formación virtual de universidades, empresas y entidades públicas.",
    },
    {
      t: "p",
      html: "Esta guía es para quien tiene que decidir sobre un LMS en una unidad de educación continua, un área de formación corporativa o una academia de clientes. Explica en qué se diferencia de otras plataformas, qué criterios usar para elegirlo y qué trabajo hay detrás de implementarlo y operarlo. No trae un ranking de proveedores: la mejor plataforma depende de tus programas, tus integraciones y tu equipo.",
    },
    {
      t: "stats",
      items: [
        { value: "89 %", label: "de las empresas de Estados Unidos con 100 o más empleados usa un LMS (2025)", source: "Training Magazine, 2025 Training Industry Report", href: TRAINING_MAG },
        { value: "97 %", label: "de las empresas medianas de ese estudio usa un LMS, frente a 84 % de las pequeñas", source: "Training Magazine, 2025 Training Industry Report", href: TRAINING_MAG },
      ],
    },
    { t: "h2", text: "Qué es un LMS y para qué sirve" },
    { t: "p", html: "Un LMS cumple seis funciones básicas:" },
    {
      t: "ul",
      items: [
        "<strong>Alojar el contenido:</strong> videos, lecturas, actividades interactivas, paquetes SCORM y evaluaciones.",
        "<strong>Inscribir y organizar:</strong> participantes por curso, cohorte, rol o empresa cliente.",
        "<strong>Ordenar el recorrido:</strong> rutas, requisitos previos y fechas.",
        "<strong>Evaluar:</strong> cuestionarios, entregas, rúbricas y calificaciones.",
        "<strong>Comunicar:</strong> anuncios, foros, mensajes y recordatorios automáticos.",
        "<strong>Certificar y reportar:</strong> certificados o credenciales al aprobar, y reportes de avance, notas y finalización.",
      ],
    },
    {
      t: "p",
      html: "Para qué sirve en la práctica depende de quién lo usa. Una universidad lo usa para su oferta virtual y para cursos de educación continua abiertos o hechos a la medida de una empresa. Una empresa lo usa para el onboarding, la formación obligatoria, las rutas por rol y las academias de clientes o de distribuidores. Una entidad pública lo usa para formar a sus funcionarios o a la ciudadanía.",
    },
    { t: "h2", text: "LMS, LXP y plataforma de cursos: en qué se diferencian" },
    {
      t: "table",
      head: ["Tipo", "Para qué está hecho", "Quién decide qué se aprende", "Cuándo conviene"],
      rows: [
        ["LMS", "Gestionar, evaluar y registrar formación", "La institución", "Programas con evaluación, certificación y reportes"],
        ["LXP (<em>learning experience platform</em>)", "Descubrir y recomendar contenido", "La persona, con sugerencias", "Bibliotecas grandes para el desarrollo libre de empleados"],
        ["Plataforma de cursos", "Publicar y vender cursos a público abierto", "Quien compra el curso", "Oferta abierta de educación continua o de creadores"],
      ],
    },
    {
      t: "p",
      html: "Muchas herramientas mezclan funciones de los tres tipos. Más que la categoría del software, importa lo que necesita tu programa. Si debes certificar y reportar a un cliente, necesitas las funciones de un LMS, aunque la herramienta se venda con otro nombre.",
    },
    { t: "h2", text: "Criterios para elegir una plataforma LMS" },
    {
      t: "table",
      head: ["Criterio", "Qué preguntar"],
      rows: [
        ["Estándares de contenido", "¿Importa y reporta paquetes SCORM? ¿Registra actividad con xAPI?"],
        ["Herramientas externas", "¿Es compatible con LTI 1.3 para conectar herramientas y devolver notas al libro de calificaciones?"],
        ["Credenciales", "¿Emite o se conecta con un emisor de credenciales verificables en Open Badges 3.0?"],
        ["Integraciones", "¿Se conecta con el SIS, el CRM, el sistema de talento humano y el inicio de sesión único (SSO)?"],
        ["Analítica", "¿Qué reportes trae y puedes exportar los datos en bruto para cruzarlos con otros sistemas?"],
        ["Accesibilidad", "¿Cumple las pautas WCAG 2.2? ¿Admite subtítulos, transcripciones y lectores de pantalla?"],
        ["Datos personales", "¿Dónde se alojan los datos y cómo se cumple la Ley 1581 de 2012 de protección de datos?"],
        ["Experiencia", "¿Funciona bien en el celular, en español y con la marca y el dominio de la institución?"],
        ["Comercio", "Si vendes cursos abiertos: ¿maneja pagos, cupones e inscripción en línea?"],
        ["Operación", "¿Cuánto trabajo manual exige abrir una cohorte? ¿Quién da soporte, en qué idioma y en qué horario?"],
        ["Costo total", "Licencia, implementación, integraciones y equipo de operación. La licencia es solo una parte."],
      ],
    },
    {
      t: "p",
      html: `Los estándares merecen una línea cada uno, porque deciden si tu contenido y tus datos pueden salir de la plataforma. SCORM empaqueta un curso para que cualquier LMS compatible lo ejecute y registre el resultado. <a href="${XAPI}">xAPI</a>, de la iniciativa ADL, describe la actividad de aprendizaje entre tecnologías y va en la versión 2.0. <a href="${LTI}">LTI 1.3</a>, de 1EdTech, conecta herramientas externas al LMS sin un segundo inicio de sesión, y sus servicios LTI Advantage permiten devolver notas y consultar listas de estudiantes. <a href="${OPEN_BADGES}">Open Badges 3.0</a>, también de 1EdTech, firma cada insignia como una credencial verificable compatible con el modelo de datos del W3C.`,
    },
    { t: "h2", text: "Si tu institución ya tiene un LMS" },
    {
      t: "p",
      html: "Muchas universidades ya trabajan con Moodle, Canvas, Blackboard o Brightspace, y muchas empresas grandes con SAP SuccessFactors Learning. En esos casos, la primera pregunta es si el LMS que tienes cubre el programa nuevo. Cambiar de plataforma implica migrar contenidos, historiales y usuarios, y volver a formar a docentes y administradores. Con frecuencia la falla está en la arquitectura de los cursos o en la operación.",
    },
    {
      t: "p",
      html: "merahki monta y opera programas en el LMS que la institución ya usa, o en el <strong>LMS merahki.ai</strong> cuando el programa necesita un espacio propio: una academia de clientes con marca, una oferta abierta de educación continua con venta en línea o un programa para una empresa que no tiene plataforma.",
    },
    { t: "h2", text: "Qué incluye la implementación de un LMS" },
    {
      t: "ol",
      items: [
        "<strong>Diagnóstico:</strong> públicos, programas, volumen de participantes, integraciones necesarias y reportes que pide cada interesado.",
        "<strong>Arquitectura:</strong> catálogo, rutas, roles, cohortes, nombres de cursos y plantillas para que todo se vea y funcione igual.",
        "<strong>Configuración:</strong> marca, dominio, idioma, notificaciones, certificados y reglas de finalización.",
        "<strong>Integraciones:</strong> inicio de sesión único, SIS o sistema de talento humano, CRM, emisor de credenciales y pagos, si aplica.",
        "<strong>Montaje de contenidos:</strong> paquetes SCORM, videos con subtítulos, lecturas y evaluaciones, con una revisión de calidad curso por curso.",
        "<strong>Piloto con una cohorte real</strong> para corregir antes de abrir a todos.",
        "<strong>Formación</strong> de administradores, docentes y tutores.",
        "<strong>Lanzamiento</strong> con un tablero de indicadores acordado desde el diagnóstico.",
      ],
    },
    {
      t: "cta",
      html: "merahki diseña, virtualiza y opera tus programas en tu LMS o en el LMS merahki.ai, con credenciales verificables y medición de impacto.",
    },
    { t: "h2", text: "Qué incluye la operación diaria del LMS" },
    {
      t: "ul",
      items: [
        "Matrícula de participantes y apertura de cohortes.",
        "Soporte a estudiantes y docentes: accesos, dudas técnicas y casos especiales.",
        "Seguimiento del avance y recordatorios a quien se atrasa, antes de que abandone.",
        "Calificación, retroalimentación y cierre de notas.",
        "Emisión de certificados o credenciales al aprobar.",
        "Reportes al cliente o a la dirección: inscritos, avance, finalización, satisfacción y aprendizaje.",
        "Mantenimiento del contenido: enlaces rotos, actualizaciones y mejoras con los datos de cada cohorte.",
      ],
    },
    {
      t: "callout",
      title: "La operación decide si el programa funciona",
      html: "Los problemas más visibles de un programa virtual, como el abandono, los reportes que nadie lee o los contenidos desactualizados, se resuelven en la operación. Un LMS sirve para medir la reacción y el aprendizaje (niveles 1 y 2 de Kirkpatrick). La aplicación en el trabajo y el resultado de negocio (niveles 3 y 4) necesitan datos que viven fuera de la plataforma.",
    },
    { t: "h2", text: "Integración con SIS, CRM y credenciales" },
    {
      t: "p",
      html: "Un LMS aislado obliga a copiar datos a mano. Tres integraciones evitan ese trabajo:",
    },
    {
      t: "ul",
      items: [
        "<strong>SIS (sistema de información estudiantil).</strong> En una universidad es la fuente de verdad administrativa: Banner, PeopleSoft, Universitas XXI o Q10, entre otros. Del SIS al LMS viajan estudiantes, programas y matrículas, y del LMS al SIS vuelven las notas.",
        `<strong>CRM.</strong> En <a href="/es/lifelong-learning">educación continua</a> conecta a los interesados con la inscripción y a las empresas cliente con sus cohortes. En una <a href="/es/customer-education">academia de clientes</a> permite cruzar la formación con el uso del producto y la renovación.`,
        `<strong>Credenciales.</strong> Cuando el participante aprueba, el LMS dispara la emisión de una <a href="/es/certification">credencial verificable</a>. En los programas de merahki, merahki diseña la credencial y POK la emite con Open Badges 3.0 y la convierte en datos de habilidades.`,
      ],
    },
    { t: "h2", text: "Errores frecuentes al elegir e implementar un LMS" },
    {
      t: "ul",
      items: [
        "<strong>Elegir por la demo.</strong> Una demostración muestra funciones. Pide montar uno de tus cursos reales y abrir una cohorte de prueba.",
        "<strong>No preguntar por la salida de los datos.</strong> Si no puedes exportar notas, avance e historiales, quedas atado a la plataforma.",
        "<strong>Subestimar la operación.</strong> Alguien tiene que matricular, responder, recordar y reportar cada semana.",
        "<strong>Comprar antes de diseñar.</strong> La plataforma se elige según los programas, no al revés.",
        "<strong>Dejar la accesibilidad para después.</strong> Subtitular y etiquetar al montar cuesta menos que corregir cientos de piezas.",
      ],
    },
    { t: "cta" },
  ],
  faq: [
    {
      q: "¿Qué es un LMS?",
      a: "Un LMS (Learning Management System) es el software donde una institución publica cursos, inscribe a los participantes, registra su avance y evaluaciones y genera reportes de formación. Lo usan universidades, empresas y entidades públicas.",
    },
    {
      q: "¿Para qué sirve una plataforma LMS?",
      a: "Sirve para ofrecer formación virtual de forma ordenada: alojar contenidos, organizar rutas y cohortes, evaluar, comunicar, emitir certificados o credenciales y medir quién avanzó y quién aprobó. En empresas se usa para onboarding, formación obligatoria y academias de clientes, y en universidades para la oferta virtual y la educación continua.",
    },
    {
      q: "¿Cuál es la plataforma LMS más utilizada?",
      a: "No conocemos una medición pública y neutral que compare todas las plataformas. Entre los LMS que una universidad o una empresa suele tener ya instalados están Moodle, Canvas, Blackboard, Brightspace y SAP SuccessFactors Learning. Más útil que buscar la más usada es probar cuál cubre tus programas, tus integraciones y tu operación.",
    },
    {
      q: "¿Qué es SCORM y por qué importa al elegir un LMS?",
      a: "SCORM es un estándar para empaquetar cursos de modo que cualquier LMS compatible los ejecute y registre el resultado. Importa porque te permite mover tus cursos entre plataformas. Para registrar actividad fuera del LMS existe xAPI.",
    },
    {
      q: "¿Conviene cambiar de LMS?",
      a: "Solo si el LMS actual no puede cubrir un requisito clave del programa, como una integración, la venta en línea o un espacio con marca propia. Antes de cambiar, revisa si el problema está en la arquitectura de los cursos o en la operación, porque migrar cuesta tiempo y usuarios.",
    },
  ],
  sources: [
    { title: "2025 Training Industry Report", publisher: "Training Magazine", url: TRAINING_MAG, date: "2025", note: "Empresas e instituciones de Estados Unidos con 100 o más empleados" },
    { title: "Learning Tools Interoperability (LTI)", publisher: "1EdTech", url: LTI },
    { title: "Open Badges", publisher: "1EdTech", url: OPEN_BADGES },
    { title: "xAPI Specification", publisher: "ADL Initiative", url: XAPI },
    { title: "Web Content Accessibility Guidelines (WCAG) 2.2", publisher: "W3C", url: WCAG },
  ],
  related: [
    "virtualizacion-de-cursos-proceso-y-tiempos",
    "contenido-de-formacion-listo-para-la-ia",
    "customer-education-formacion-de-clientes",
    "universidad-corporativa-como-crearla",
  ],
};
