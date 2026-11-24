import type { Articulo } from "../types";

const PARTNER_ED = "https://www.intellum.com/resources/blog/what-is-partner-education";
const ELG2026 = "https://www.intellum.com/resources/education-led-growth-report-2026";
const CERTIFICACION = "https://www.intellum.com/resources/blog/certification-best-practices";

export const articulo: Articulo = {
  slug: "academia-de-partners-formacion-de-distribuidores",
  lang: "es",
  altSlug: "partner-enablement-academy",
  title: "Academia de partners: cómo una empresa forma y certifica a sus distribuidores y canales para que vendan e implementen mejor",
  seoTitle: "Academia de partners: formación y certificación del canal",
  description: "Qué es una academia de partners, qué rutas y certificaciones incluye por nivel de socio y qué indicadores conectan la formación del canal con las ventas.",
  kicker: "Partner enablement",
  keywords: [
    "academia de partners",
    "formación de distribuidores",
    "capacitación de canales de distribución",
    "certificación de partners",
    "partner enablement",
    "formación de aliados comerciales",
  ],
  published: "2026-11-24",
  readingMinutes: 6,
  summary: [
    "Una <strong>academia de partners</strong> es el programa con el que una empresa forma y certifica a los distribuidores, integradores y aliados que venden, implementan o dan soporte a su producto.",
    "Partner enablement es todo lo que el fabricante le entrega al canal (formación, contenido comercial, herramientas e incentivos). La academia es la parte de formación y certificación.",
    "Las rutas se diseñan por tipo de socio (el que vende, el que implementa, el que da soporte) y la certificación se conecta con los niveles del programa de socios.",
    "Según Intellum, en 2023 solo el 33 % de las empresas tenía un programa de formación de partners. En su encuesta de 2026, el 46,8 % de los equipos de educación ya forma a partners.",
    "Se mide con el tiempo a la primera venta del socio nuevo, las implementaciones sin escalamiento, los tickets del canal y las ventas de socios certificados frente a no certificados.",
  ],
  body: [
    {
      t: "p",
      html: "Una <strong>academia de partners</strong> es el programa con el que una empresa forma y certifica a los distribuidores, revendedores, integradores y aliados que venden, implementan o dan soporte a su producto. Su objetivo es que el canal venda con el mensaje correcto, implemente sin errores y dependa menos del equipo del fabricante.",
    },
    {
      t: "p",
      html: "Un distribuidor suele vender varias marcas a la vez, y empuja con más ganas la que sabe explicar e implementar con menos esfuerzo. La academia es la forma ordenada de que esa marca sea la tuya. Esta guía explica qué incluye, cómo se diseñan las rutas y la certificación por nivel de socio, cómo se integra con el PRM y el CRM y qué indicadores la conectan con las ventas.",
    },
    { t: "h2", text: "Qué es una academia de partners y qué es partner enablement" },
    {
      t: "table",
      head: ["Concepto", "Qué incluye", "Quién lo lidera"],
      rows: [
        ["Partner enablement", "Formación, contenido comercial, herramientas de venta, portal de socios, incentivos y fondos de mercadeo", "Canales o alianzas, con mercadeo y producto"],
        ["Academia de partners", "Rutas de formación por tipo y nivel de socio, evaluación, certificación y recertificación", "Educación o canales, con un equipo de diseño instruccional"],
        ["Programa de socios", "Niveles (por ejemplo registrado, plata y oro), requisitos, beneficios y márgenes", "Canales"],
      ],
      caption: "La academia alimenta el programa de socios: la certificación es uno de los requisitos para subir de nivel.",
    },
    {
      t: "p",
      html: "La formación de partners es menos común que la de empleados y clientes. Intellum, proveedor de software de formación, lo ha medido en dos momentos con muestras distintas.",
    },
    {
      t: "stats",
      items: [
        { value: "33 %", label: "de las empresas tenía un programa de formación de partners en 2023", source: "Intellum, «What is Partner Education?» (2023), citando su informe State of Education Initiative Ownership", href: PARTNER_ED },
        { value: "46,8 %", label: "de los equipos de educación encuestados en 2026 forma a partners (63,1 % forma a clientes)", source: "Intellum, 2026 State of Education-Led Growth Report (n = 190)", href: ELG2026 },
        { value: "54 %", label: "de las empresas con una iniciativa escalable de formación de partners reporta mejor desempeño de sus socios", source: "Intellum, «What is Partner Education?» (2023)", href: PARTNER_ED },
      ],
    },
    {
      t: "p",
      html: "Las dos primeras cifras no se pueden comparar como una serie, porque vienen de encuestas diferentes. Lo que sí muestran es que, en las dos muestras, menos de la mitad de las organizaciones forma a su canal.",
    },
    { t: "h2", text: "Rutas de formación por tipo de socio" },
    {
      t: "p",
      html: "Un mismo socio tiene personas que venden, que hacen preventa y que implementan. Por eso las rutas se diseñan por rol dentro del socio y cada persona toma la suya. Cada ruta parte de la competencia: qué debe saber hacer esa persona con tu producto, qué resultados de aprendizaje lo demuestran y qué evidencia lo comprueba.",
    },
    {
      t: "table",
      head: ["Tipo de socio o rol", "Qué necesita saber hacer", "Ruta típica", "Evidencia"],
      rows: [
        ["Distribuidor o revendedor", "Explicar el valor, calificar oportunidades y cotizar", "Producto y propuesta de valor, casos de uso por industria, proceso comercial y registro de oportunidades", "Una presentación de venta evaluada con rúbrica"],
        ["Integrador o implementador", "Instalar, configurar e integrar sin errores", "Arquitectura, implementación paso a paso, integraciones y casos difíciles", "Una implementación en ambiente de prueba revisada por un experto"],
        ["Soporte técnico o servicio", "Diagnosticar y resolver incidentes del cliente final", "Diagnóstico, procedimientos de solución y reglas de escalamiento", "Casos simulados resueltos en el tiempo acordado"],
        ["Referidor o consultor", "Reconocer cuándo el producto es la solución y presentar al fabricante", "Problemas que resuelve, perfil de cliente ideal y proceso para referir", "Un caso de cliente calificado"],
      ],
    },
    {
      t: "p",
      html: "La tentación es hacer una sola ruta para todo el canal. Shannon Howard, en la <a href=\"" + CERTIFICACION + "\">guía de certificaciones de Intellum</a>, lo resume en una línea.",
    },
    {
      t: "quote",
      text: "Si es «para todos», en realidad no es para nadie.",
      cite: "Shannon Howard, Intellum (traducción de merahki)",
      href: CERTIFICACION,
    },
    { t: "h2", text: "Certificación de partners y niveles del programa de socios" },
    {
      t: "p",
      html: "La misma guía de Intellum, construida con la experiencia de Meta Blueprint, plantea dos decisiones de diseño. La primera es si la certificación valida un rol completo o una habilidad que sirve en varios roles. La segunda es el nivel de rigor: una certificación de alto riesgo lleva examen supervisado y puntaje de corte fijado por expertos, mientras que una microcredencial de bajo riesgo se lanza más rápido y es más fácil de mantener. Se puede empezar con microcredenciales y subir el rigor cuando el programa madure.",
    },
    {
      t: "ul",
      items: [
        "<strong>Cada nivel exige certificaciones concretas por rol.</strong> Por ejemplo, el nivel oro pide un número mínimo de personas certificadas en implementación. Las horas de curso no cuentan como requisito.",
        "<strong>La credencial es de la persona y el nivel es de la empresa socia.</strong> Si el técnico certificado se va, el socio lo sabe y el fabricante también.",
        "<strong>La certificación se renueva con el producto.</strong> Meta Blueprint, según cuenta Intellum, revisa cada año las tareas del puesto que sus exámenes evalúan.",
        "<strong>La credencial es verificable.</strong> El cliente final puede comprobar que quien le implementa está certificado, lo que vuelve la certificación un argumento de venta para el socio.",
      ],
    },
    {
      t: "p",
      html: "En merahki las credenciales se emiten con POK, nuestro aliado de infraestructura de credenciales verificables y Skills Intelligence, en estándar Open Badges 3.0. El detalle está en la página de <a href=\"/es/certification\">certificación con credenciales verificables</a>.",
    },
    { t: "h2", text: "Integración de la academia con el PRM y el CRM" },
    {
      t: "p",
      html: "El PRM (<em>partner relationship management</em>) es el sistema donde el fabricante gestiona a sus socios: niveles, oportunidades registradas, beneficios. La academia tiene que hablar con él y con el CRM, o el programa de socios se administra en hojas de cálculo.",
    },
    {
      t: "ol",
      items: [
        "El socio registra a su gente y cada persona entra a la academia con su usuario, asociada a la empresa socia.",
        "Cada finalización y cada credencial llegan al registro del socio en el PRM, y el nivel del socio se actualiza con esos datos.",
        "El CRM recibe qué socios y qué personas están certificados, para comparar sus ventas, sus implementaciones y la renovación de sus clientes.",
        "El administrador de cada socio ve el avance de su equipo sin pedirle un reporte al fabricante.",
      ],
    },
    { t: "h2", text: "Indicadores de una academia de partners" },
    {
      t: "table",
      head: ["Indicador", "Qué muestra", "De dónde sale el dato"],
      rows: [
        ["Tiempo a la primera venta del socio nuevo", "Qué tan rápido produce el socio", "CRM o PRM"],
        ["Personas certificadas por socio y por rol", "Cobertura de la formación", "LMS"],
        ["Implementaciones sin escalamiento al fabricante", "Calidad técnica del canal", "Mesa de ayuda"],
        ["Tickets del canal al fabricante", "Costo de dar soporte al canal", "Mesa de ayuda"],
        ["Ventas y renovación de socios certificados frente a no certificados", "Efecto en ingresos", "CRM"],
        ["Satisfacción del cliente final atendido por el socio", "Experiencia del cliente", "Encuesta"],
      ],
    },
    {
      t: "p",
      html: "Una precaución al comparar. Los mejores socios tienden a certificarse más, así que una diferencia en ventas puede venir del socio y no de la formación. La comparación justa se hace entre socios de tamaño, nivel y antigüedad parecidos, y con el indicador medido antes y después de la ruta.",
    },
    {
      t: "callout",
      title: "El indicador del canal se acuerda antes de diseñar la ruta",
      html: "Si el problema son implementaciones que terminan en escalamiento, la primera ruta es la del implementador y el indicador es la tasa de escalamiento. Si el problema es que el canal no vende la línea nueva, la primera ruta es comercial y el indicador es el tiempo a la primera venta de esa línea.",
    },
    { t: "h2", text: "Academias de partners en América Latina: qué cambia" },
    {
      t: "ul",
      items: [
        "<strong>Varios países en un mismo canal.</strong> Un fabricante con socios en Colombia, México, Perú y Chile necesita contenido en español nativo, con términos, normas y casos de cada mercado, y en portugués si llega a Brasil.",
        "<strong>Rotación del personal del socio.</strong> El vendedor certificado cambia de empresa y llega otro. La ruta de ingreso tiene que funcionar sola cada vez.",
        "<strong>Poco tiempo para formarse.</strong> La gente del socio aprende entre visitas y cotizaciones. Lecciones cortas, acceso desde el celular y sesiones en vivo breves funcionan mejor que cursos largos.",
        "<strong>Competencia por la atención del socio.</strong> Otras marcas también lo forman. La academia que le sirve para la venta de esta semana es la que el socio usa.",
      ],
    },
    { t: "h2", text: "Cómo diseña merahki una academia de partners" },
    {
      t: "p",
      html: "merahki diseña, virtualiza, opera y mide academias de partners para empresas que venden a través de distribuidores e integradores. Definimos con tu equipo de canales el indicador y los tipos de socio, diseñamos las rutas por competencias con tus expertos de producto, producimos el contenido, operamos la academia en el LMS merahki.ai, emitimos las credenciales con POK y reportamos por socio y por nivel.",
    },
    {
      t: "p",
      html: "Como el socio muchas veces implementa al cliente final, la academia de partners se diseña junto con la de clientes. Más detalle en las páginas de <a href=\"/es/partner-academies\">academias de partners</a> y de <a href=\"/es/customer-education\">customer education</a>.",
    },
    { t: "cta" },
  ],
  faq: [
    {
      q: "¿Qué es partner enablement?",
      a: "Es todo lo que un fabricante le entrega a su canal para que venda e implemente su producto: formación, contenido comercial, herramientas de venta, portal de socios e incentivos. La academia de partners es la parte de formación y certificación dentro del partner enablement.",
    },
    {
      q: "¿Qué es una academia de partners?",
      a: "Es el programa con el que una empresa forma y certifica a sus distribuidores, integradores y aliados. Tiene rutas por tipo de socio, evaluaciones con evidencia y credenciales que se conectan con los niveles del programa de socios.",
    },
    {
      q: "¿Cuál es la diferencia entre una academia de partners y una academia de clientes?",
      a: "La academia de clientes enseña a usar el producto para lograr un resultado. La de partners enseña a venderlo, implementarlo y darle soporte a otros. Las dos se conectan, porque el socio que implementa mal le transmite al cliente una mala experiencia.",
    },
    {
      q: "¿Quién debe ser el dueño de la formación de partners?",
      a: "Depende de la empresa, pero conviene que tenga un dueño claro. En el informe de Intellum de 2023, el equipo de educación era el dueño en el 35 % de los casos, recursos humanos en el 32 % y en el 13 % se compartía entre equipos. En la práctica, canales define qué se necesita y un equipo de diseño instruccional construye y opera la academia.",
    },
    {
      q: "¿Se le debe cobrar al socio por la formación?",
      a: "La formación básica suele ser gratuita, porque el fabricante gana cuando el socio vende. Algunas empresas cobran las certificaciones avanzadas o los exámenes supervisados para recuperar costos y darles más valor. Lo importante es que el costo no frene a los socios nuevos.",
    },
    {
      q: "¿Cada cuánto se recertifica un partner?",
      a: "Cada vez que el producto cambia lo suficiente como para que la certificación anterior quede desactualizada. También se puede fijar una vigencia, por ejemplo de un año. Meta Blueprint, según Intellum, revisa cada año las tareas que evalúan sus exámenes.",
    },
  ],
  sources: [
    {
      title: "What is Partner Education?",
      publisher: "Intellum (Robyn Hazelton)",
      url: PARTNER_ED,
      date: "2023-06-27",
      note: "Cita el informe State of Education Initiative Ownership de Intellum (2023)",
    },
    { title: "The 2026 State of Education-Led Growth Report", publisher: "Intellum Research", url: ELG2026, date: "2026-04", note: "Encuesta a 190 líderes de educación, sobre todo de EE. UU." },
    {
      title: "Building Certifications That Actually Matter: A Practical Guide for Education Leaders",
      publisher: "Intellum (Shannon Howard)",
      url: CERTIFICACION,
      date: "2025-10-15",
      note: "Basada en la experiencia de Meta Blueprint",
    },
  ],
  related: [
    "customer-education-formacion-de-clientes",
    "credenciales-digitales-verificables",
    "universidad-corporativa-como-crearla",
    "modelo-kirkpatrick-medir-impacto-capacitacion",
    "plataforma-lms-como-elegir-implementar",
  ],
};
