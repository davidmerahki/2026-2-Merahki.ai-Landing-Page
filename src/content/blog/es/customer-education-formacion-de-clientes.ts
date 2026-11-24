import type { Articulo } from "../types";

const ACADEMIA = "https://www.intellum.com/resources/blog/customer-academy";
const ELG2026 = "https://www.intellum.com/resources/education-led-growth-report-2026";
const FORRESTER = "https://www.intellum.com/resources/2024-customer-education-forrester-report";

export const articulo: Articulo = {
  slug: "customer-education-formacion-de-clientes",
  lang: "es",
  altSlug: "customer-education-program-guide",
  title: "Customer education: qué es la formación de clientes y cómo una empresa B2B la diseña para acelerar la adopción y la renovación",
  seoTitle: "Customer education: qué es la formación de clientes B2B",
  description: "Qué es customer education, qué programas incluye (onboarding, academia, certificación) y qué indicadores conectan la formación de clientes con renovación.",
  kicker: "Customer education",
  keywords: [
    "customer education",
    "formación de clientes",
    "qué es customer education",
    "academia de clientes",
    "capacitación de clientes",
    "educación del cliente",
    "customer academy",
  ],
  published: "2026-11-24",
  readingMinutes: 10,
  summary: [
    "<strong>Customer education</strong> es la formación que una empresa da a sus clientes para que usen su producto, logren con él su objetivo y renueven.",
    "Se diferencia del soporte: el soporte resuelve un problema cuando aparece, la formación enseña a sacar valor para que el problema no llegue.",
    "Los programas más comunes son el onboarding formativo, la academia de clientes, la certificación de clientes y la formación de partners.",
    "Se mide con adopción del producto, tickets de soporte, renovación y NRR. En el estudio de Forrester para Intellum (2024), la adopción de los productos sobre los que se formó al cliente subió 38,3 % en promedio.",
    "En una empresa B2B de América Latina conviene empezar por una ruta que mueva un indicador que ya se puede medir, y escalar a la academia con ese dato.",
  ],
  body: [
    {
      t: "p",
      html: "<strong>Customer education</strong> (formación de clientes o educación del cliente) es el conjunto de programas con los que una empresa enseña a sus clientes a usar su producto o servicio y a lograr con él el resultado por el que pagaron. Su meta es de negocio: que el cliente adopte más, pida menos soporte y renueve.",
    },
    {
      t: "p",
      html: "Esta guía explica qué incluye, en qué se diferencia del soporte y del onboarding, qué indicadores la conectan con los ingresos y cómo la diseña una empresa B2B en América Latina. La sección sobre academias de clientes adapta el artículo <a href=\"" + ACADEMIA + "\">«What Is a Customer Academy?»</a> de Intellum (2026) y le suma el método de merahki: diseño por competencias, virtualización, operación y medición.",
    },
    { t: "h2", text: "Qué es customer education y qué no es" },
    {
      t: "p",
      html: "Customer education se define por lo que logra en el ciclo de vida del cliente, no por el formato. Un webinar, un curso, una guía dentro del producto o una certificación son salidas posibles. La función es mover tres cosas: cuánto usa el cliente el producto, cuánto le cuesta a la empresa atenderlo y si decide quedarse.",
    },
    {
      t: "p",
      html: "Un centro de ayuda lleno de videos, sin diseño ni medición, deja al cliente buscando solo. Si nadie definió qué debe saber hacer, en qué orden y cómo se comprueba, el cliente aprende a pedazos y vuelve a escribirle a soporte. Lo que convierte ese material en un programa es el diseño de rutas y la medición de su efecto.",
    },
    {
      t: "p",
      html: "Intellum, que promueve el enfoque de <em>Education-Led Growth</em> (crecimiento impulsado por la educación), pone la formación de clientes al lado de la de empleados y aliados como motor de ingresos. En su <a href=\"" + ELG2026 + "\">encuesta de 2026 a 190 líderes de educación</a>, sobre todo de Estados Unidos, el 81,6 % dice que el crecimiento de ingresos es el objetivo principal de su programa.",
    },
    { t: "h2", text: "Diferencia entre customer education, soporte, onboarding y servicio al cliente" },
    {
      t: "p",
      html: "Las cuatro funciones se tocan, pero responden preguntas distintas. Confundirlas lleva a pedirle a soporte que forme a los clientes o a pedirle a una academia que apague incendios.",
    },
    {
      t: "table",
      head: ["Función", "Qué resuelve", "Cuándo actúa", "Cómo se mide"],
      rows: [
        ["Soporte", "Un problema puntual que el cliente reporta", "Cuando el cliente pregunta", "Tiempo de respuesta y tickets resueltos"],
        ["Servicio al cliente", "Solicitudes, cambios y relación comercial", "Durante todo el contrato", "Satisfacción (CSAT) y tiempos de atención"],
        ["Onboarding", "El arranque: configurar el producto y lograr el primer resultado", "Primeras semanas", "Tiempo al primer valor y activación"],
        ["Customer education", "Que el cliente sepa usar el producto para lograr su objetivo y lo siga logrando", "Antes de comprar, en el arranque y en cada renovación", "Adopción, tickets evitados, renovación y NRR"],
      ],
      caption: "Customer education incluye el onboarding formativo y le quita carga a soporte, pero se mide con indicadores propios.",
    },
    {
      t: "p",
      html: "El onboarding es la primera ruta de customer education y la más urgente. La formación sigue después: cuando el producto lanza una función nueva, cuando el cliente cambia de usuarios o cuando quiere hacer algo más avanzado con la herramienta.",
    },
    { t: "h2", text: "Tipos de programa de formación de clientes" },
    {
      t: "ul",
      items: [
        "<strong>Onboarding formativo.</strong> Una ruta corta que lleva al cliente nuevo a su primer resultado con el producto. Es el programa que devuelve la inversión más rápido.",
        "<strong>Academia de clientes.</strong> El conjunto ordenado de rutas por perfil (administrador, usuario final, líder que lee los reportes) que acompaña todo el ciclo del cliente.",
        "<strong>Certificación de clientes.</strong> Una evaluación que acredita que el usuario domina el producto. Al cliente le sirve para mostrar su competencia y a la empresa para identificar a sus usuarios avanzados.",
        "<strong>Formación de partners.</strong> Rutas para distribuidores, integradores y aliados que venden o implementan el producto. Tiene su propia lógica de niveles y certificación, que explicamos en la página de <a href=\"/es/partner-academies\">academias de partners</a>.",
        "<strong>Educación de prospectos.</strong> Contenido formativo para quien todavía evalúa la compra. Atrae y filtra a los compradores que entienden el problema que resuelve el producto.",
      ],
    },
    {
      t: "stats",
      items: [
        { value: "63,1 %", label: "de los equipos de educación encuestados forma a clientes", source: "Intellum, 2026 State of Education-Led Growth Report (n = 190)", href: ELG2026 },
        { value: "46,8 %", label: "forma a partners o aliados", source: "Intellum, 2026 State of Education-Led Growth Report (n = 190)", href: ELG2026 },
        { value: "43,1 %", label: "forma a prospectos que todavía no compran", source: "Intellum, 2026 State of Education-Led Growth Report (n = 190)", href: ELG2026 },
      ],
    },
    {
      t: "p",
      html: "La mayoría empieza por los empleados (87,4 % en la misma encuesta) y después extiende la formación a clientes, aliados y prospectos. Son datos de un proveedor de software de formación, con una muestra de su mercado. Sirven como señal de hacia dónde va la práctica, no como medida del mercado latinoamericano.",
    },
    { t: "h2", text: "Qué es una academia de clientes (customer academy)" },
    {
      t: "p",
      html: "Una academia de clientes es el programa estructurado que ordena la formación a lo largo de todo el recorrido del cliente, desde que conoce el producto hasta que deja de usarlo. Así la describe Shannon Howard en el <a href=\"" + ACADEMIA + "\">blog de Intellum</a>, con una comparación útil: los cursos y contenidos ponen la energía, y la academia es el motor que la convierte en avance.",
    },
    {
      t: "p",
      html: "Sin academia, la formación queda en piezas sueltas: un video en YouTube, un PDF en el correo de bienvenida, un webinar grabado que nadie encuentra. El cliente no sabe por dónde empezar ni qué sigue. Según el mismo artículo, una academia bien hecha trae tres beneficios: más adopción del producto, menos costo de soporte porque llegan menos tickets reactivos y una marca más fuerte, porque el cliente que aprende confía y recomienda.",
    },
    {
      t: "quote",
      text: "No todo el contenido para clientes pertenece a tu academia.",
      cite: "Shannon Howard, Intellum (traducción de merahki)",
      href: ACADEMIA,
    },
    { t: "h2", text: "Cómo se diseña un programa de customer education en cinco pasos" },
    {
      t: "p",
      html: "Intellum propone cinco pasos para construir una academia. Los tomamos como base y explicamos qué se decide en cada uno cuando el diseño parte de las competencias del cliente, como lo trabajamos en merahki.",
    },
    { t: "h3", text: "Paso 1. El resultado del cliente y el indicador del negocio" },
    {
      t: "p",
      html: "Intellum empieza por conocer a la audiencia y el objetivo que quiere lograr con el producto. Nosotros agregamos una segunda pregunta en la misma reunión: qué indicador de la empresa se va a mover si el cliente lo logra. Puede ser el uso de una función, el volumen de tickets o el tiempo de onboarding. Sin ese indicador, la ruta se produce, pero nadie puede decir si funcionó.",
    },
    { t: "h3", text: "Paso 2. Auditoría del contenido que ya existe" },
    {
      t: "p",
      html: "Casi toda empresa tiene manuales, grabaciones y presentaciones. Pasarlos todos a la academia es el error típico. Cada pieza se revisa contra lo que el cliente debe saber hacer: se conserva, se rehace, se virtualiza en un formato mejor o se descarta. La auditoría suele mostrar mucho material sobre funciones y poco sobre las tareas reales del cliente.",
    },
    { t: "h3", text: "Paso 3. Rutas por perfil diseñadas desde competencias" },
    {
      t: "p",
      html: "Intellum recomienda rutas por perfil que combinen aprendizaje guiado y autodirigido. En merahki cada ruta se diseña desde la competencia: qué debe saber hacer el usuario con el producto, qué resultados de aprendizaje lo demuestran y qué evidencia lo comprueba. El índice del manual no sirve como guion. Una ruta para administradores enseña a configurar y a resolver los casos frecuentes. Una para líderes enseña a leer los reportes y a decidir con ellos.",
    },
    { t: "h3", text: "Paso 4. Las métricas se definen antes de producir" },
    {
      t: "p",
      html: "Intellum sugiere medir finalización, satisfacción y recomendación, y conectarlas con resultados del negocio. Nosotros las ordenamos en cuatro familias de indicadores (productividad, retención, costos y experiencia) y en los cuatro niveles del modelo Kirkpatrick. La regla práctica es simple. Si la métrica no está definida antes de grabar el primer video, después no hay línea base con qué comparar.",
    },
    { t: "h3", text: "Paso 5. Entrega, operación y certificación" },
    {
      t: "p",
      html: "La plataforma importa por cómo entrega el contenido, cómo lo encuentra el usuario y cómo se personaliza, además de cómo se crea. A eso se suma la operación: quién responde las dudas de los usuarios, quién actualiza las lecciones cuando cambia el producto y quién arma el reporte del mes. Si la ruta termina en una evaluación, el cliente puede recibir una credencial verificable que comparte en LinkedIn y que hace visible la marca del producto.",
    },
    {
      t: "callout",
      title: "La primera ruta va antes que la academia completa",
      html: "Una academia completa puede tomar meses y diluir el esfuerzo. Una ruta para un perfil y un indicador (por ejemplo, la adopción de la función que más tickets genera) se lanza antes, se compara contra clientes no formados a los 60 o 90 días y da el dato para decidir si se escala.",
    },
    { t: "h2", text: "Indicadores de customer education: adopción, tickets, renovación y NRR" },
    {
      t: "p",
      html: "Un programa de formación de clientes se defiende con indicadores del negocio. El número de cursos terminados es un dato de operación. Estas son las cuatro familias que usamos para conectar la formación con resultados, del enrollment al reporte.",
    },
    {
      t: "table",
      head: ["Familia", "Indicador", "Cómo se mide", "Nivel Kirkpatrick"],
      rows: [
        ["Productividad", "Adopción de funciones y tiempo al primer valor", "Uso del producto de clientes formados frente a no formados", "3 · comportamiento"],
        ["Retención", "Renovación, churn, NRR y GRR", "Cohortes formadas frente a no formadas a 60, 90 y 120 días", "4 · resultados"],
        ["Costos", "Tickets por cliente y tickets evitados", "Volumen de soporte antes y después de la ruta", "4 · resultados"],
        ["Experiencia", "Satisfacción (CSAT), NPS y recomendación", "Encuesta al terminar la ruta y a los 30 días", "1 · reacción"],
      ],
      caption: "El nivel 2 de Kirkpatrick (aprendizaje) se comprueba con la evaluación de la ruta y la credencial.",
    },
    {
      t: "p",
      html: "NRR (<em>net revenue retention</em>) mide cuánto ingreso conserva la empresa de sus clientes actuales después de sumar las expansiones y restar las bajas. Es el indicador que más le importa a un CFO en un negocio de suscripción y el que más tarda en moverse. Por eso conviene reportar primero adopción y tickets, que reaccionan antes.",
    },
    {
      t: "stats",
      items: [
        { value: "38,3 %", label: "aumento promedio en la adopción de los productos sobre los que se formó al cliente", source: "Forrester Consulting para Intellum, 2024", href: FORRESTER },
        { value: "96 %", label: "de las organizaciones llegó al punto de equilibrio o tuvo retorno positivo con su programa", source: "Forrester Consulting para Intellum, 2024", href: FORRESTER },
        { value: "372 %", label: "ROI a tres años en el modelo de impacto económico del estudio, con recuperación de la inversión en 7 meses", source: "Forrester Consulting para Intellum, 2024", href: FORRESTER },
      ],
    },
    {
      t: "p",
      html: "Una advertencia honesta sobre estas cifras. Intellum encargó el estudio a Forrester Consulting, y la muestra son 300 responsables de customer education en Estados Unidos. Los datos muestran la dirección del efecto, no lo que va a pasar en una empresa colombiana o mexicana. La forma de saberlo es medir tus propias cohortes.",
    },
    {
      t: "p",
      html: "La medición también se adelantó. En la <a href=\"" + ELG2026 + "\">encuesta de Intellum de 2026</a>, el 27 % de los equipos mide el impacto desde el lanzamiento y otro 49 % empieza en los primeros tres meses. Solo el 5 % no lo mide de forma consistente, frente al 28 % de la edición anterior. El principal obstáculo para medir, según el 31 %, es que los sistemas no están conectados.",
    },
    { t: "h2", text: "Plataforma y operación de la formación de clientes" },
    {
      t: "p",
      html: "El LMS es la base, pero el dato que convence vive en otros sistemas: el CRM, la plataforma de soporte y la analítica del producto. Para comparar cohortes, cada finalización y cada credencial tienen que llegar al registro del cliente en el CRM. Si eso no se diseña desde el inicio, el reporte termina siendo un conteo de inscritos.",
    },
    {
      t: "p",
      html: "La operación es la parte que más se subestima. Una academia necesita calendario de sesiones en vivo, alguien que responda a los usuarios, recordatorios a quienes abandonan una ruta y un ciclo de actualización cada vez que el producto cambia. En merahki operamos el programa en el LMS merahki.ai y reportamos con los indicadores acordados en el paso 1.",
    },
    {
      t: "p",
      html: "La certificación cierra el ciclo. Con POK, nuestro aliado de infraestructura de credenciales verificables y Skills Intelligence, el cliente que aprueba recibe una insignia en estándar Open Badges 3.0 que cualquiera puede verificar. Así lo trabajamos en la página de <a href=\"/es/certification\">certificación con credenciales verificables</a>.",
    },
    {
      t: "cta",
      html: "Diseñamos contigo la primera ruta de formación de clientes, con el indicador que quieres mover definido desde el día uno.",
    },
    { t: "h2", text: "Customer education en América Latina: qué cambia para una empresa B2B" },
    {
      t: "p",
      html: "Casi toda la literatura y los datos de customer education vienen de empresas de software de Estados Unidos. En América Latina el principio es el mismo, pero cambian cinco condiciones del diseño.",
    },
    {
      t: "ul",
      items: [
        "<strong>Idioma nativo.</strong> El cliente aprende mejor con contenido escrito y grabado en su español (o en portugués), con ejemplos de su mercado. La academia traducida de la casa matriz trae términos, casos y normas que no le dicen nada.",
        "<strong>Rotación de usuarios.</strong> En muchas cuentas cambian las personas que operan el producto. La ruta de onboarding se vuelve a usar cada vez que llega alguien nuevo, así que debe funcionar sin un consultor al lado.",
        "<strong>Equipos de Customer Success pequeños.</strong> Un CSM atiende muchas cuentas. La formación le da alcance de uno a muchos sin contratar más personas.",
        "<strong>Canales.</strong> Además del LMS, el cliente responde a recordatorios por correo y por WhatsApp y a sesiones en vivo cortas. El diseño tiene que contar con esos canales desde el inicio.",
        "<strong>Implementación a través de aliados.</strong> Cuando un distribuidor o integrador hace la implementación, la calidad de la formación del cliente depende de la formación del aliado. Las dos academias se diseñan juntas.",
      ],
    },
    {
      t: "p",
      html: "Por eso un programa de formación de clientes en la región se diseña con las competencias del usuario real, se produce en su idioma y se opera al ritmo de sus equipos. Una página traducida no resuelve ninguna de esas tres cosas.",
    },
    { t: "h2", text: "Cómo trabaja merahki la formación de clientes" },
    {
      t: "p",
      html: "merahki diseña, produce, opera y mide programas de formación de clientes para empresas B2B. El trabajo sigue el mismo orden de esta guía.",
    },
    {
      t: "ol",
      items: [
        "Diagnóstico del resultado que busca el cliente y del indicador del negocio que se va a mover.",
        "Diseño instruccional por competencias de la primera ruta, con evidencias de aprendizaje, según la <a href=\"/es/methodology\">metodología de merahki</a>.",
        "Producción y virtualización del contenido con un equipo nativo en IA y los expertos de tu producto.",
        "Operación en el LMS merahki.ai, con sesiones, recordatorios y acompañamiento a los usuarios.",
        "Credenciales verificables emitidas con POK y reporte con las cuatro familias de indicadores.",
      ],
    },
    {
      t: "p",
      html: "El detalle de cómo se arma una academia de clientes completa está en la página de <a href=\"/es/customer-education\">customer education de merahki</a>.",
    },
  ],
  faq: [
    {
      q: "¿Qué es customer education?",
      a: "Customer education es la formación que una empresa da a sus clientes para que usen su producto y logren con él el resultado por el que pagaron. Incluye onboarding formativo, academias de clientes y certificaciones. Se mide con adopción del producto, tickets de soporte y renovación.",
    },
    {
      q: "¿Qué hace un especialista en customer education?",
      a: "Diseña las rutas de formación de los clientes, coordina la producción del contenido con los expertos del producto y mide su efecto en adopción, soporte y renovación. En equipos pequeños también opera la plataforma y arma los reportes. Suele trabajar dentro del área de Customer Success o de producto.",
    },
    {
      q: "¿Cuál es la diferencia entre una academia de clientes y customer education?",
      a: "Customer education es la disciplina completa. La academia de clientes es el programa estructurado donde se ordenan sus rutas, cursos y certificaciones. Una empresa puede empezar con un onboarding guiado sin academia, pero al crecer la academia evita que la formación quede en piezas sueltas.",
    },
    {
      q: "¿Customer education es lo mismo que customer success?",
      a: "No. Customer Success es el área que acompaña a cada cuenta para que logre resultados y renueve. Customer education es una de sus herramientas más fuertes, porque enseña a muchos clientes al mismo tiempo lo que un CSM enseñaría uno por uno.",
    },
    {
      q: "¿Cómo se mide si un programa de formación de clientes funciona?",
      a: "Se compara una cohorte de clientes formados con una de clientes no formados de características parecidas. Los indicadores son la adopción de funciones, los tickets por cliente y, a más plazo, la renovación y el NRR. La satisfacción con el curso ayuda, pero por sí sola no prueba impacto.",
    },
    {
      q: "¿La formación de clientes debe ser gratuita?",
      a: "Depende del modelo. Muchas academias son gratuitas porque se pagan con más adopción y retención, y otras cobran por certificaciones avanzadas o formación en vivo para recuperar costos. En la <a href=\"" + ELG2026 + "\">encuesta de Intellum de 2026</a>, el 53,6 % de los programas externos cobra tanto por formación a demanda como por formación en vivo.",
    },
  ],
  sources: [
    { title: "What Is a Customer Academy?", publisher: "Intellum (Shannon Howard)", url: ACADEMIA, date: "2026-10-01" },
    {
      title: "The 2026 State of Education-Led Growth Report",
      publisher: "Intellum Research",
      url: ELG2026,
      date: "2026-04",
      note: "Encuesta a 190 líderes de educación, sobre todo de EE. UU. (nov-2025 a feb-2026)",
    },
    {
      title: "Customer Education Benchmarks, Trends & Total Economic Impact",
      publisher: "Forrester Consulting para Intellum",
      url: FORRESTER,
      date: "2024-05",
      note: "Estudio comisionado por Intellum. Encuesta a 300 decisores de customer education en EE. UU.",
    },
  ],
  adaptedFrom: { title: "What Is a Customer Academy?", publisher: "Intellum", url: ACADEMIA, date: "2026-10-01" },
  related: [
    "academia-de-partners-formacion-de-distribuidores",
    "modelo-kirkpatrick-medir-impacto-capacitacion",
    "credenciales-digitales-verificables",
    "roi-de-la-capacitacion-como-medirlo",
    "universidad-corporativa-como-crearla",
  ],
};
