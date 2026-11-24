import type { Articulo } from "../types";

const POK_OB3 = "https://www.pok.tech/blog/es/posts/open-badge-3-0-guia-completa-credenciales-digitales";
const OB3 = "https://www.imsglobal.org/spec/ob/v3p0";
const OB3_IMPL = "https://www.imsglobal.org/spec/ob/v3p0/impl";
const OB2 = "https://www.imsglobal.org/sites/default/files/Badges/OBv2p0Final/index.html";
const ANUNCIO = "https://www.1edtech.org/1edtech-article/new-open-badges-30-standard-provides-enhanced-security-and-mobility/411060";

export const articulo: Articulo = {
  slug: "open-badges-3-0-que-cambia",
  lang: "es",
  altSlug: "open-badges-3-0-explained",
  title:
    "Open Badges 3.0: qué cambia frente a la versión 2.0 y qué debe exigir una institución a su plataforma de credenciales",
  seoTitle: "Open Badges 3.0: qué cambia frente a la versión 2.0",
  description:
    "Qué es Open Badges 3.0, cómo se alinea con W3C Verifiable Credentials, qué cambia frente a la 2.0 y qué preguntar a una plataforma antes de emitir.",
  kicker: "Estándares de credenciales",
  keywords: [
    "Open Badges 3.0",
    "open badges",
    "qué es Open Badges 3.0",
    "W3C Verifiable Credentials",
    "insignias digitales",
    "CLR 2.0",
    "cómo diseñar insignias digitales",
  ],
  published: "2026-11-24",
  readingMinutes: 6,
  summary: [
    `<strong>Open Badges 3.0</strong> es la versión del estándar de insignias digitales de 1EdTech que convierte cada insignia en una credencial verificable según el modelo 2.0 del W3C. Se hizo pública en mayo de 2024.`,
    `El cambio central está en la verificación: la insignia lleva una prueba criptográfica y ya no depende de una copia alojada en el servidor del emisor.`,
    `La versión 3.0 suma identificadores descentralizados, listas de estado para revocar, conexión con billeteras y más campos para describir el logro.`,
    `Las insignias 2.0 no desaparecen: 1EdTech recomienda una transición en la que el emisor mantiene la 2.0 mientras reemite en 3.0.`,
    `El estándar resuelve el contenedor. Qué competencia certifica la insignia, con qué evidencia y con qué criterio sigue siendo trabajo de diseño.`,
  ],
  body: [
    {
      t: "p",
      html: `<strong>Open Badges 3.0</strong> es la versión del estándar abierto de insignias digitales de 1EdTech que convierte cada insignia en una credencial verificable según el modelo de datos 2.0 del W3C. La insignia se firma al emitirse, la guarda el titular y se comprueba con la firma del emisor, en lugar de consultar una copia alojada en su servidor. 1EdTech la <a href="${ANUNCIO}">hizo pública el 29 de mayo de 2024</a>.`,
    },
    {
      t: "p",
      html: `Este artículo adapta la <a href="${POK_OB3}">guía de Open Badge 3.0 que publicó POK</a> en mayo de 2026 y contrasta sus afirmaciones técnicas con la <a href="${OB3}">especificación</a> y la <a href="${OB3_IMPL}">guía de implementación</a> oficiales de 1EdTech. POK explica el contenedor. Aquí sumamos lo que va adentro: cómo se diseña la información de cada insignia para que le diga algo a quien la lee.`,
    },
    {
      t: "quote",
      text: "La credencial seguía existiendo, pero ya no se podía probar que era verdadera.",
      cite: "POK, sobre las insignias que dependían del servidor del emisor",
      href: POK_OB3,
    },
    { t: "h2", text: "Qué es Open Badges", id: "que-es" },
    {
      t: "p",
      html: `Open Badges es un estándar abierto para describir logros de aprendizaje en un formato que cualquier sistema puede leer. Lo mantiene 1EdTech, el consorcio que antes se llamaba IMS Global. La versión 2.0 salió en <a href="${OB2}">abril de 2018</a> y sigue muy extendida. En ella, una insignia tiene tres piezas: la aserción, que es la entrega a una persona, la clase de insignia, que dice qué se logró y con qué criterios, y el perfil del emisor.`,
    },
    {
      t: "p",
      html: `La versión 3.0 conserva la idea y cambia la arquitectura. La especificación dice que las insignias emitidas con ella no cumplen todos los requisitos de la 2.x, porque la estructura de la aserción ahora sigue el modelo de credenciales verificables del W3C.`,
    },
    { t: "h2", text: "Qué cambia en la versión 3.0", id: "cambios" },
    {
      t: "table",
      head: ["Aspecto", "Open Badges 2.0", "Open Badges 3.0"],
      rows: [
        ["Modelo de datos", "Formato propio: aserción (Assertion), clase de insignia (BadgeClass) y perfil del emisor.", "Credencial verificable del W3C, modelo 2.0. La aserción pasa a ser OpenBadgeCredential y BadgeClass pasa a llamarse Achievement."],
        ["Verificación", "Dos modalidades: alojada, que consulta la aserción en su URL, o firmada.", "Siempre con prueba criptográfica: VC-JWT con RS256 como mínimo, o Data Integrity con EdDSA."],
        ["Identidad del emisor", "Perfil con URL HTTP.", "Ya no exige URL HTTP. Admite identificadores descentralizados (DID)."],
        ["Titular", "Correo u otro identificador, idealmente cifrado.", "DID en el sujeto de la credencial o identificador cifrado con sal."],
        ["Estado y vigencia", "Revocación publicada por el emisor y fecha de vencimiento.", "Lista de estado Bitstring Status List v1.0, fechas validFrom y validUntil, y servicio de actualización."],
        ["Transporte", "Mochilas de insignias y, desde la versión 2.1, la API Badge Connect.", "Billeteras de credenciales verificables (CHAPI, DIDComm, OpenID for Verifiable Credentials) y la API de Open Badges con OAuth 2.0."],
        ["Descripción del logro", "Criterios, evidencia y alineación.", "Suma tipo de logro, créditos, área de estudio, especialización, código legible y descripción de resultados con niveles de rúbrica."],
      ],
      caption: "Fuentes: especificación Open Badges 2.0 (2018), especificación y guía de implementación de Open Badges 3.0 de 1EdTech.",
    },
    {
      t: "p",
      html: `En la práctica, el cambio que más se nota es el de la verificación. En la 2.0, una insignia alojada se comprobaba consultando la aserción en el servidor del emisor. Si la institución cambiaba de proveedor o el servidor dejaba de responder, la insignia seguía existiendo pero nadie podía probarla. En la 3.0, la credencial lleva su propia prueba criptográfica y el verificador la contrasta con la llave pública del emisor. La especificación exige al menos un mecanismo de prueba y describe los pasos: revisar la estructura, validar la firma, consultar el estado de revocación y revisar las fechas de vigencia.`,
    },
    {
      t: "p",
      html: `Sobre privacidad, la guía de implementación menciona la divulgación selectiva como capacidad de algunos mecanismos de prueba. No la describe como un requisito del estándar, así que conviene preguntarle al proveedor si la soporta y con qué método.`,
    },
    { t: "h2", text: "Cómo se relaciona con W3C Verifiable Credentials y CLR 2.0", id: "w3c-clr" },
    {
      t: "p",
      html: `El modelo de credenciales verificables del W3C es la base general para cualquier credencial digital firmada: un emisor la firma, un titular la guarda y un verificador la comprueba. El W3C publicó la versión 2.0 como recomendación el <a href="https://www.w3.org/TR/vc-data-model-2.0/">15 de mayo de 2025</a>. Open Badges 3.0 se alinea con esa versión y, según su especificación, ofrece esquemas compatibles con la 1.1 para emisores que todavía no migran. Por eso una insignia 3.0 puede convivir con otras credenciales verificables en la misma billetera.`,
    },
    {
      t: "p",
      html: `CLR 2.0 (Comprehensive Learner Record) agrupa varias credenciales de una persona en un solo registro firmado, parecido a un certificado de notas. Se firma igual que una insignia y no lleva imagen (<a href="https://www.1edtech.org/standards/open-badges">1EdTech</a>). Para una universidad con rutas apilables, CLR permite entregar el recorrido completo en un solo registro.`,
    },
    { t: "h2", text: "Qué información debe llevar cada insignia", id: "diseno" },
    {
      t: "p",
      html: `La guía de POK es clara en lo técnico. Lo que define si un empleador entiende la insignia es otra cosa: lo que se escribe en cada campo. Esta es la lista de chequeo que usamos en merahki antes de emitir, con un ejemplo ilustrativo de un curso de educación continua en gestión de proyectos.`,
    },
    {
      t: "ul",
      items: [
        `<strong>name:</strong> la competencia, con verbo. «Elabora la matriz de riesgos de un proyecto y define respuestas», no «Diplomado en gerencia de proyectos, módulo 3».`,
        `<strong>description:</strong> para qué sirve y en qué contexto se aplica, en dos o tres frases.`,
        `<strong>criteria:</strong> qué tuvo que demostrar la persona y cuál fue el estándar de aprobación.`,
        `<strong>achievementType:</strong> el tipo de logro, por ejemplo competencia, curso o certificación.`,
        `<strong>resultDescription:</strong> cómo se calificó, con los niveles de la rúbrica.`,
        `<strong>evidence:</strong> el entregable evaluado o su descripción, en la credencial de cada persona. La guía de 1EdTech advierte que resultados y evidencias pueden contener datos confidenciales, así que hay que decidir qué se publica.`,
        `<strong>alignment:</strong> el marco externo. La guía de implementación muestra alineaciones con elementos de CASE y con competencias de CTDL. En Colombia, lo útil es apuntar a la ocupación de la CUOC y al nivel del Marco Nacional de Cualificaciones, con su enlace y su código.`,
        `<strong>creditsAvailable, fieldOfStudy, humanCode, tag:</strong> créditos u horas, área, código del curso y etiquetas de habilidades.`,
      ],
    },
    {
      t: "p",
      html: `Todo esto sale del diseño por competencias: competencia, resultados de aprendizaje, evidencia, rúbrica y criterio de emisión. Si el programa no tiene ese diseño, los campos se llenan con el nombre del curso y las horas. Así trabajamos la <a href="/es/certification">certificación con credenciales verificables</a> y la <a href="/es/methodology">metodología de diseño por competencias</a>.`,
    },
    {
      t: "callout",
      title: "Lo que el estándar no resuelve",
      html: `Open Badges 3.0 define cómo se firma, se guarda y se verifica la insignia. Qué competencia certifica, con qué evidencia y con qué criterio depende del programa. Una insignia 3.0 que solo dice «Curso de liderazgo, 16 horas» queda bien firmada y le dice poco a un empleador.`,
    },
    { t: "cta" },
    { t: "h2", text: "Qué preguntar a una plataforma antes de emitir", id: "preguntas" },
    {
      t: "p",
      html: `POK propone cinco preguntas para elegir plataforma. Las retomamos y sumamos las de diseño, que suelen quedar por fuera de la compra.`,
    },
    {
      t: "ol",
      items: [
        `¿Aparece certificada para Open Badges 3.0 en el <a href="https://site.imsglobal.org/certifications">directorio de 1EdTech</a>? El directorio aclara que un producto ausente no pasó las pruebas o tiene la certificación vencida.`,
        `¿Qué método de firma usa y dónde publica sus llaves públicas?`,
        `¿Cómo revoca una credencial y con qué lista de estado?`,
        `¿Qué billeteras y protocolos soporta para que el titular se lleve sus credenciales?`,
        `¿Soporta divulgación selectiva?`,
        `¿Qué pasa con las credenciales si cambias de proveedor? ¿Puede reemitir tus insignias 2.0 como 3.0?`,
        `¿Deja llenar todos los campos del logro (criterios, resultados, evidencia, alineación) o solo nombre, imagen y descripción?`,
        `¿Se conecta con tu LMS para emitir cuando se cumple el criterio?`,
      ],
    },
    { t: "h2", text: "Qué pasa con las insignias 2.0 ya emitidas", id: "migracion" },
    {
      t: "p",
      html: `La <a href="${OB3_IMPL}">guía de implementación</a> reconoce que los objetos 3.0 no son compatibles hacia atrás con la 2.0. Su propuesta es una transición sin rupturas. El emisor puede exponer los mismos datos del logro en los dos formatos, desde endpoints distintos, sin guardarlos dos veces. Puede reemitir una insignia 2.0 como 3.0, con un identificador nuevo. Y recomienda mantener una ventana de soporte para la 2.0 mientras quienes reciben las insignias se actualizan. Quien consulte una insignia reemitida puede verificar la aserción 2.0 original con los protocolos de esa versión.`,
    },
    {
      t: "p",
      html: `Para una universidad con insignias 2.0 emitidas, la tarea práctica es hacer inventario: cuántas hay, en qué plataforma viven, qué campos tienen llenos y cuáles valen la pena reemitir con mejor descripción. Es buen momento para corregir los nombres que solo dicen el título del curso. El panorama general de formatos está en nuestra guía de <a href="/es/blog/credenciales-digitales-verificables">credenciales digitales verificables</a>.`,
    },
  ],
  faq: [
    {
      q: "¿Qué es Open Badges?",
      a: `Es un estándar abierto de 1EdTech para describir logros de aprendizaje en un formato que cualquier sistema puede leer. Cada insignia dice quién la emitió, a quién, qué se logró, con qué criterios y, si se incluye, con qué evidencia.`,
    },
    {
      q: "¿Qué es Open Badges 3.0?",
      a: `Es la versión del estándar que 1EdTech hizo pública en mayo de 2024. Convierte cada insignia en una credencial verificable según el modelo 2.0 del W3C: se firma al emitirse, la guarda el titular y se verifica con la firma del emisor.`,
    },
    {
      q: "¿Open Badges 3.0 usa blockchain?",
      a: `No lo exige. Open Badges 3.0 es un estándar de formato y de verificación por firma digital. Algunos emisores agregan un anclaje en blockchain como capa adicional de integridad, pero el estándar funciona sin ella.`,
    },
    {
      q: "¿Las insignias Open Badges 2.0 siguen sirviendo?",
      a: `Sí, siguen existiendo y circulando. La guía de 1EdTech recomienda que los emisores mantengan una ventana de soporte para la 2.0 mientras reemiten en 3.0. Lo que no hay es compatibilidad automática entre los dos formatos.`,
    },
    {
      q: "¿Qué diferencia hay entre Open Badges 3.0 y W3C Verifiable Credentials?",
      a: `W3C Verifiable Credentials es el modelo general para cualquier credencial digital firmada. Open Badges 3.0 aplica ese modelo a los logros educativos y agrega los campos para describirlos: criterios, resultados, evidencia y alineación con marcos.`,
    },
    {
      q: "¿Cómo sé si una plataforma está certificada para Open Badges 3.0?",
      a: `Búscala en el directorio de productos certificados de 1EdTech. La compatibilidad que declara un proveedor no equivale a haber pasado las pruebas de certificación.`,
    },
  ],
  sources: [
    { title: "Open Badge 3.0: qué es, cómo funciona y por qué es el estándar global de credenciales digitales", publisher: "POK", url: POK_OB3, date: "2026-05-18" },
    { title: "Open Badges Specification 3.0", publisher: "1EdTech", url: OB3 },
    { title: "Open Badges 3.0 Implementation Guide", publisher: "1EdTech", url: OB3_IMPL },
    { title: "New Open Badges 3.0 standard provides enhanced security and mobility", publisher: "1EdTech", url: ANUNCIO, date: "2024-05-29" },
    { title: "Open Badges (página del estándar)", publisher: "1EdTech", url: "https://www.1edtech.org/standards/open-badges" },
    { title: "Open Badges v2.0 Final Release", publisher: "1EdTech (IMS Global)", url: OB2, date: "2018-04-12" },
    { title: "Verifiable Credentials Data Model v2.0", publisher: "W3C", url: "https://www.w3.org/TR/vc-data-model-2.0/", date: "2025-05-15" },
    { title: "Directorio de productos certificados", publisher: "1EdTech", url: "https://site.imsglobal.org/certifications" },
  ],
  adaptedFrom: {
    title: "Open Badge 3.0: qué es, cómo funciona y por qué es el estándar global de credenciales digitales",
    publisher: "POK",
    url: POK_OB3,
    date: "2026-05-18",
  },
  related: [
    "credenciales-digitales-verificables",
    "como-disenar-una-microcredencial",
    "certificar-competencias-en-inteligencia-artificial",
    "homologacion-de-microcredenciales-creditos-academicos",
  ],
};
