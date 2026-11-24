import type { Articulo } from "../types";

const WEF = "https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf";
const COURSERA = "https://www.coursera.org/enterprise/resources/pdf/micro-credentials-report-2026-pdf";
const OB3 = "https://www.imsglobal.org/spec/ob/v3p0";
const POK_VERIF = "https://www.pok.tech/blog/es/posts/como-verifican-empleadores-credenciales-digitales";
const POK_ACEPT = "https://www.pok.tech/blog/es/posts/tasa-aceptacion-credenciales-digitales-egresados-como-aumentarla";

export const articulo: Articulo = {
  slug: "credenciales-digitales-verificables",
  lang: "es",
  altSlug: "verifiable-digital-credentials-education",
  title:
    "Credenciales digitales verificables: qué son, qué tipos existen y cómo las usan universidades y empresas para certificar competencias",
  seoTitle: "Credenciales digitales verificables: qué son y tipos",
  description:
    "Qué es una credencial digital verificable, cómo se diferencia de un certificado PDF y de una insignia, cómo se verifica y qué debe diseñar tu institución.",
  kicker: "Credenciales verificables",
  keywords: [
    "credenciales digitales",
    "credenciales digitales verificables",
    "certificados digitales",
    "insignias digitales",
    "credencial verificable",
    "Open Badges 3.0",
    "W3C Verifiable Credentials",
  ],
  published: "2026-11-24",
  readingMinutes: 10,
  summary: [
    `Una <strong>credencial digital verificable</strong> es el registro firmado de un logro de aprendizaje que cualquier persona comprueba en línea: quién la emitió, a quién, cuándo y si alguien la alteró.`,
    `Hay cuatro formatos que se confunden: el certificado en PDF, la insignia digital, la credencial verificable con Open Badges 3.0 o W3C Verifiable Credentials 2.0 y la credencial anclada en blockchain.`,
    `La verificación prueba el origen y la integridad. Lo que el empleador entiende de la competencia depende del diseño: criterios, evidencia, nivel y ocupación.`,
    `Para emitir bien hacen falta datos del SIS, del LMS y del diseño del programa, y conviene que la credencial salga dentro del recorrido del curso.`,
    `merahki diseña, opera y mide el programa. POK, su aliado, emite las credenciales y las convierte en inteligencia de habilidades.`,
  ],
  body: [
    {
      t: "p",
      html: `Una <strong>credencial digital verificable</strong> es el registro electrónico de un logro de aprendizaje, firmado por quien lo otorga, que cualquier persona puede comprobar en línea: quién la emitió, a quién, cuándo y si alguien la modificó. Universidades y empresas la usan para certificar competencias, cursos y microcredenciales. Este artículo no trata de usuarios y contraseñas ni de la firma digital de documentos.`,
    },
    {
      t: "p",
      html: `El tema pesa porque los empleadores todavía usan poco los certificados en línea para contratar. En el <a href="${WEF}">Future of Jobs Report 2025</a> del Foro Económico Mundial, el 19 % de los empleadores planea quitar requisitos de título y contratar por habilidades, y solo el 14 % planea tener en cuenta certificados en línea al decidir una contratación. Una credencial que se puede comprobar y que describe la evidencia del logro cierra parte de esa distancia.`,
    },
    {
      t: "stats",
      items: [
        { value: "19 %", label: "de los empleadores planea quitar requisitos de título y contratar por habilidades", source: "WEF, Future of Jobs Report 2025, p. 53", href: WEF },
        { value: "14 %", label: "de los empleadores planea tener en cuenta certificados en línea al contratar", source: "WEF, Future of Jobs Report 2025, p. 61-62", href: WEF },
        { value: "98 %", label: "de los empleadores encuestados por Coursera usa contratación por habilidades en cargos de entrada", source: "Coursera, Micro-Credentials Impact Report 2026, p. 6", href: COURSERA },
      ],
    },
    { t: "h2", text: "Qué es una credencial digital y qué no es", id: "que-es" },
    {
      t: "p",
      html: `En tecnología, «credenciales digitales» suele querer decir usuario y contraseña. En Colombia, «certificado digital» se asocia además con la firma digital que emiten las entidades de certificación para firmar documentos con validez jurídica. Ninguno de los dos es el tema aquí. En educación, una credencial digital es la prueba de que una persona aprendió algo y lo demostró.`,
    },
    {
      t: "p",
      html: `La referencia más citada es la propuesta de definición de microcredencial que UNESCO publicó en 2022 después de consultar a 47 expertos: un registro de un logro de aprendizaje enfocado, evaluado con estándares claros y otorgado por un proveedor confiable (ver el <a href="https://connect.unevoc.unesco.org/home/TVETipedia+Glossary/lang=e/show=term/term=micro-credential">glosario de UNESCO-UNEVOC</a>). UNESCO aclara que es un consenso de expertos y no una posición oficial. El mismo documento precisa que «verificar» significa poder comprobar lo que el titular afirma haber logrado, sin atarse a una tecnología concreta. Esa es la prueba ácida: si un tercero no puede comprobar la credencial sin pedirle un favor a la institución, no es verificable.`,
    },
    { t: "h2", text: "Qué tipos de credenciales digitales existen", id: "tipos" },
    {
      t: "p",
      html: `Cuatro formatos se mezclan en las conversaciones entre registro académico, talento humano y mercadeo. Se diferencian en cómo se comprueban y en cuánta información llevan sobre el logro.`,
    },
    {
      t: "table",
      head: ["Formato", "Qué es", "Cómo se comprueba", "Qué le dice al empleador"],
      rows: [
        ["Certificado en PDF o imagen", "Un documento con nombre, programa, fecha y firma escaneada. A veces trae un código QR.", "Escribiendo a la institución, o con el QR si lleva a una página del emisor.", "Que la persona dice haber terminado algo. Se edita con facilidad."],
        ["Insignia digital con Open Badges 2.0", "Una imagen con metadatos: emisor, criterios, fecha y, a veces, evidencia.", "En la modalidad alojada, el verificador consulta el registro en el servidor del emisor. También existe la modalidad firmada.", "Qué criterios se cumplieron, mientras el registro del emisor siga disponible."],
        ["Credencial verificable con Open Badges 3.0 o W3C VC 2.0", "Un documento firmado digitalmente que guarda el titular, con la descripción del logro, los criterios y la evidencia.", "Con la firma criptográfica del emisor y la consulta de su estado: vigente, vencida o revocada.", "Quién la emitió, a quién, si fue alterada y qué competencia demostró la persona."],
        ["Credencial anclada en blockchain", "Una credencial verificable cuya huella (hash) queda registrada en una cadena de bloques pública. Es una capa adicional, no un estándar distinto.", "Con un verificador independiente que compara la huella con el registro público.", "Lo mismo que la anterior, con una prueba de integridad que no depende del proveedor."],
      ],
      caption: "Formatos de credenciales digitales en educación. Fuentes: especificaciones Open Badges 2.0 y 3.0 de 1EdTech y POK.",
    },
    {
      t: "p",
      html: `¿Y la microcredencial? Es un tipo de programa: un logro de aprendizaje corto, evaluado y con valor propio, que se puede entregar en cualquiera de los formatos de la tabla. Lo recomendable es emitirla como credencial verificable, porque así el empleador ve la competencia y la evidencia junto al nombre del curso. Cómo se diseña y se alinea con el Marco Nacional de Cualificaciones lo explicamos en el servicio de <a href="/es/certification">certificación con credenciales verificables</a>.`,
    },
    { t: "h2", text: "Qué estándares hacen verificable una credencial: Open Badges 3.0, W3C VC 2.0 y CLR 2.0", id: "estandares" },
    {
      t: "p",
      html: `Tres estándares abiertos sostienen las credenciales verificables en educación. Ninguno pertenece a un proveedor. Los mantienen consorcios con reglas públicas.`,
    },
    {
      t: "ul",
      items: [
        `<strong>W3C Verifiable Credentials Data Model 2.0.</strong> Es la base general. El W3C lo publicó como recomendación el 15 de mayo de 2025. Define tres papeles: el emisor que firma, el titular que guarda la credencial y el verificador que la comprueba (<a href="https://www.w3.org/TR/vc-data-model-2.0/">especificación del W3C</a>).`,
        `<strong>Open Badges 3.0.</strong> Es el estándar educativo de 1EdTech para insignias y logros. 1EdTech lo hizo público el <a href="https://www.1edtech.org/1edtech-article/new-open-badges-30-standard-provides-enhanced-security-and-mobility/411060">29 de mayo de 2024</a> y lo alinea con el modelo de datos 2.0 del W3C (<a href="${OB3}">especificación de Open Badges 3.0</a>). Cada insignia lleva la descripción del logro: nombre, criterios, tipo, créditos, evidencia y alineación con marcos de competencias.`,
        `<strong>CLR 2.0 (Comprehensive Learner Record).</strong> También es de 1EdTech. Agrupa varias credenciales de una misma persona en un solo registro firmado, parecido a un certificado de notas, y no lleva imagen (<a href="https://www.1edtech.org/standards/open-badges">1EdTech</a>).`,
      ],
    },
    {
      t: "p",
      html: `Un detalle que pocas instituciones revisan: decir «compatible con Open Badges 3.0» no equivale a estar certificado. 1EdTech prueba los productos y publica un <a href="https://site.imsglobal.org/certifications">directorio de certificaciones</a>. Según ese directorio, un producto que no aparece ahí no pasó las pruebas o tiene la certificación vencida. Qué cambió frente a la versión 2.0 y qué exigirle a la plataforma lo detallamos en <a href="/es/blog/open-badges-3-0-que-cambia">Open Badges 3.0: qué cambia frente a la versión 2.0</a>.`,
    },
    { t: "h2", text: "Cómo se verifica una credencial digital", id: "verificacion" },
    {
      t: "p",
      html: `Para el empleador, el proceso toma segundos. La persona comparte un enlace, un código QR o la credencial en su perfil de LinkedIn. El reclutador lo abre y ve una página pública de verificación. Por debajo, el software hace las comprobaciones que la <a href="${OB3}">especificación de Open Badges 3.0</a> describe paso a paso:`,
    },
    {
      t: "ol",
      items: [
        `Revisa que la credencial tenga la estructura del estándar.`,
        `Comprueba la firma digital con la llave pública del emisor. Si la firma no coincide, la credencial fue alterada o no la emitió quien dice.`,
        `Consulta el estado. Si la institución la revocó, eso aparece en una lista de estado que publica el emisor.`,
        `Revisa las fechas de inicio y de vencimiento, si la credencial las tiene.`,
        `De forma opcional, compara el titular con la persona que la presenta, por un identificador o por un correo cifrado.`,
      ],
    },
    {
      t: "p",
      html: `POK, la infraestructura de credenciales verificables y Skills Intelligence con la que emite merahki, describe <a href="${POK_VERIF}">tres niveles de verificación</a>. El primero es la credencial firmada con Open Badges 3.0 y W3C VC, que es la base. El segundo ancla una huella de la credencial en una cadena de bloques pública con el estándar Blockcerts, y cualquiera la valida con un verificador de terceros. El tercero es la credencial como NFT en la billetera del titular. Para contratación masiva, POK señala que los sistemas de selección (ATS) pueden leer los metadatos estandarizados sin contactar a cada emisor.`,
    },
    {
      t: "callout",
      title: "Lo que la verificación no prueba",
      html: `La verificación confirma el origen y la integridad de la credencial. No dice qué sabe hacer la persona. Eso depende de cómo se redactó la competencia, con qué evidencia se evaluó y con qué criterio se emitió. Una insignia firmada que dice «Curso de Excel, 20 horas» es verificable y casi no informa.`,
    },
    { t: "h2", text: "Qué debe diseñar una universidad o una empresa antes de emitir", id: "diseno" },
    {
      t: "p",
      html: `Open Badges 3.0 trae los campos. Llenarlos bien es trabajo de diseño instruccional. Esta es la anatomía que usamos en merahki, con los nombres de los campos de la especificación y un ejemplo ilustrativo de educación continua.`,
    },
    {
      t: "table",
      head: ["Campo de Open Badges 3.0", "Qué escribir", "Ejemplo ilustrativo"],
      rows: [
        ["name", "La competencia, en términos de lo que la persona hace. No el nombre del curso.", "Diseña tableros de indicadores comerciales para la gerencia"],
        ["description", "Para qué sirve la competencia y en qué contexto se aplica.", "Construye y presenta tableros con datos de ventas para decisiones semanales."],
        ["criteria", "Qué tuvo que demostrar la persona para recibirla y con qué criterio se aprobó.", "Entregó un tablero con datos reales y obtuvo el nivel «logrado» en la rúbrica."],
        ["evidence", "Enlace o descripción del entregable evaluado. Va en la credencial de cada persona.", "Enlace al tablero y a la retroalimentación del evaluador."],
        ["resultDescription", "Cómo se calificó: niveles de la rúbrica o puntaje.", "Rúbrica de cuatro niveles. Se emite desde «logrado»."],
        ["alignment", "El marco externo al que apunta: ocupación, nivel de cualificación o marco de competencias.", "Ocupación de la CUOC y nivel del MNC al que aporta."],
        ["creditsAvailable, fieldOfStudy, tag", "Créditos u horas, área y etiquetas de búsqueda.", "Horas de trabajo, área de analítica comercial, etiquetas de habilidades."],
      ],
      caption: "Campos tomados de la especificación Open Badges 3.0 de 1EdTech. El ejemplo es ilustrativo.",
    },
    {
      t: "p",
      html: `La alineación es donde un programa colombiano gana claridad. La <strong>CUOC</strong> (Clasificación Única de Ocupaciones para Colombia) dice a qué ocupación aporta la competencia. El <strong>MNC</strong> (Marco Nacional de Cualificaciones) ubica el logro en uno de sus ocho niveles. Con esos dos datos, el área de talento humano de una empresa conecta la credencial con sus perfiles de cargo, y una secretaría de educación entiende de qué nivel se habla.`,
    },
    {
      t: "p",
      html: `El orden del diseño es siempre el mismo: competencia, resultados de aprendizaje, evidencia, rúbrica y criterio de emisión. Si se empieza por la plantilla gráfica de la insignia, sale una imagen bonita que no dice nada. El método completo está en nuestra <a href="/es/methodology">metodología de diseño instruccional por competencias</a>.`,
    },
    {
      t: "cta",
      html: `Si necesitas definir las competencias, las evidencias y la emisión de tus credenciales verificables, merahki diseña y opera el programa contigo y POK emite las credenciales.`,
    },
    { t: "h2", text: "Para qué usan las credenciales verificables las universidades y las empresas", id: "usos" },
    { t: "h3", text: "Universidades y educación continua" },
    {
      t: "p",
      html: `En una unidad de educación continua, la credencial verificable cumple tres funciones. Hace visible cada logro intermedio de una ruta apilable. Sirve de base para homologar cursos cortos como créditos de un programa formal, cuando la universidad define la regla de equivalencia. Y lleva el nombre de la institución a cada perfil profesional donde el egresado la publica. Así lo trabajamos en <a href="/es/lifelong-learning">Lifelong Learning para universidades</a>.`,
    },
    {
      t: "p",
      html: `El diseño también pesa en lo que valoran los empleadores. En la encuesta de Coursera de 2026, el 82 % de los empleadores dice valorar más las microcredenciales co-diseñadas con la industria, y el 82 % de los estudiantes prefiere las basadas en proyectos frente a las de solo contenido (<a href="${COURSERA}">Micro-Credentials Impact Report 2026</a>, p. 13). Son percepciones declaradas en siete países, y Colombia no está entre ellos.`,
    },
    { t: "h3", text: "Empresas: empleados, clientes y aliados" },
    {
      t: "p",
      html: `En una empresa, la misma lógica sirve para tres públicos. Para los empleados, la credencial registra qué competencias tiene cada persona y facilita la movilidad interna. Para los clientes, certifica que alguien sabe usar el producto, lo que baja la carga de soporte y acelera la adopción. Para distribuidores y aliados, marca el nivel de socio con un criterio comprobable. Es el día a día de las academias de clientes y de partners que diseñamos.`,
    },
    { t: "h2", text: "Qué datos necesita la emisión: SIS, LMS y diseño del programa", id: "datos" },
    {
      t: "p",
      html: `La emisión se alimenta de tres fuentes. Si alguna falla, la credencial sale tarde, sale incompleta o sale de una lista manual en una hoja de cálculo.`,
    },
    {
      t: "table",
      head: ["Fuente", "Datos", "Para qué"],
      rows: [
        ["SIS (sistema de información estudiantil)", "Nombre legal, documento o correo, programa, cohorte y estado académico.", "Identificar bien al titular y no emitir a personas retiradas."],
        ["LMS", "Aprobación, nivel de la rúbrica, fecha de cierre y enlace a la evidencia.", "Emitir cuando se cumple el criterio, sin esperar al cierre del semestre."],
        ["Diseño del programa", "Competencia, criterios, horas, nivel del MNC y ocupación de la CUOC.", "Llenar los campos que el empleador lee después de verificar."],
      ],
    },
    {
      t: "p",
      html: `El momento de emisión cambia los resultados. POK documentó tres programas en Brasil con 30.441 credenciales emitidas: en los envíos a egresados, cerca del 20 % de las personas aceptó su credencial. En un programa de formación docente, donde la credencial llegó al terminar el curso, la aceptación fue del 68 % (<a href="${POK_ACEPT}">POK, octubre de 2026</a>). POK advierte que una sola comparación no aísla la causa. Aun así, la decisión de diseño se desprende sola: la credencial debe salir dentro del recorrido del curso, conectada al LMS. Y como la emisión trata datos personales, en Colombia la autorización de tratamiento de datos (Ley 1581 de 2012) se pide desde la inscripción.`,
    },
    { t: "h2", text: "Qué preguntar antes de elegir la infraestructura de emisión", id: "preguntas" },
    {
      t: "ul",
      items: [
        `¿Está certificada por 1EdTech para Open Badges 3.0? Compruébalo en el directorio de 1EdTech.`,
        `¿Cómo se revoca una credencial y qué ve el verificador cuando eso pasa?`,
        `¿El titular puede guardar la credencial en billeteras estándar y conservarla si deja la institución?`,
        `¿Qué pasa con las credenciales emitidas si cambias de proveedor o si el proveedor cierra?`,
        `¿Se conecta con tu LMS y con tu SIS para emitir por criterio, sin listas manuales?`,
        `¿Qué datos de habilidades te devuelve después de emitir?`,
      ],
    },
    {
      t: "p",
      html: `merahki trabaja con <a href="https://www.pok.tech/es">POK</a> como aliado emisor. merahki diseña, produce, opera y mide el programa. POK emite las credenciales verificables y convierte esas emisiones en inteligencia de habilidades: qué competencias tiene una red de personas y dónde están las brechas. POK informa que está certificada por 1EdTech para Open Badges 3.0.`,
    },
  ],
  faq: [
    {
      q: "¿Qué son las credenciales digitales y para qué sirven?",
      a: `Son registros electrónicos de un logro de aprendizaje. Sirven para que una persona demuestre lo que aprendió y para que un empleador o una universidad lo compruebe sin llamar a la institución. Las verificables llevan la firma digital del emisor y la descripción de la competencia.`,
    },
    {
      q: "¿Cuáles son los tipos de credenciales digitales?",
      a: `En educación se usan cuatro formatos: el certificado en PDF o imagen, la insignia digital, la credencial verificable con Open Badges 3.0 o W3C VC 2.0 y la credencial anclada en blockchain. La microcredencial es un tipo de programa que se puede emitir en cualquiera de ellos.`,
    },
    {
      q: "¿Qué es una insignia digital?",
      a: `Es una credencial con imagen y metadatos que describen el logro: emisor, criterios, fecha y evidencia. El estándar abierto más usado es Open Badges, de 1EdTech. En su versión 3.0, la insignia es además una credencial verificable firmada que guarda el titular.`,
    },
    {
      q: "¿Cómo se hacen credenciales digitales?",
      a: `Primero se diseñan la competencia, la evidencia y el criterio de emisión. Luego se configura la insignia en una infraestructura de emisión certificada y se conecta con el LMS para que salga cuando la persona cumple el criterio. El diseño toma más tiempo que la emisión, y es lo que define si la credencial informa algo.`,
    },
    {
      q: "¿Una credencial verificable necesita blockchain?",
      a: `No. Una credencial con Open Badges 3.0 se verifica con la firma digital del emisor y la consulta de su estado. El anclaje en blockchain es una capa opcional que agrega una prueba de integridad independiente del proveedor.`,
    },
    {
      q: "¿Un PDF con código QR es una credencial verificable?",
      a: `Solo en parte. El QR puede llevar a una página del emisor, pero el PDF se puede editar y la prueba depende de que esa página siga existiendo. Una credencial verificable lleva la prueba criptográfica dentro del propio registro.`,
    },
  ],
  sources: [
    { title: "Future of Jobs Report 2025", publisher: "World Economic Forum", url: WEF, date: "2025-01", note: "p. 53 y 61-62" },
    { title: "Micro-Credentials Impact Report 2026", publisher: "Coursera", url: COURSERA, date: "2026", note: "Encuesta de febrero y marzo de 2026 en siete países. p. 6 y 13" },
    { title: "Micro-credential (TVETipedia Glossary)", publisher: "UNESCO-UNEVOC", url: "https://connect.unevoc.unesco.org/home/TVETipedia+Glossary/lang=e/show=term/term=micro-credential", note: "Definición de Towards a common definition of micro-credentials (UNESCO, 2022)" },
    { title: "Verifiable Credentials Data Model v2.0", publisher: "W3C", url: "https://www.w3.org/TR/vc-data-model-2.0/", date: "2025-05-15" },
    { title: "Open Badges Specification 3.0", publisher: "1EdTech", url: OB3 },
    { title: "Open Badges 3.0: anuncio de la versión pública", publisher: "1EdTech", url: "https://www.1edtech.org/1edtech-article/new-open-badges-30-standard-provides-enhanced-security-and-mobility/411060", date: "2024-05-29" },
    { title: "Open Badges (página del estándar)", publisher: "1EdTech", url: "https://www.1edtech.org/standards/open-badges" },
    { title: "Open Badges v2.0 Final Release", publisher: "1EdTech (IMS Global)", url: "https://www.imsglobal.org/sites/default/files/Badges/OBv2p0Final/index.html", date: "2018-04-12" },
    { title: "Directorio de productos certificados", publisher: "1EdTech", url: "https://site.imsglobal.org/certifications" },
    { title: "Cómo verifican los empleadores las credenciales digitales en 2026", publisher: "POK", url: POK_VERIF, date: "2026-07-14" },
    { title: "Tasa de aceptación de credenciales digitales: qué esperar de tus egresados y cómo aumentarla", publisher: "POK", url: POK_ACEPT, date: "2026-10-20" },
  ],
  related: [
    "open-badges-3-0-que-cambia",
    "microcredenciales-que-son-como-disenarlas",
    "homologacion-de-microcredenciales-creditos-academicos",
    "certificar-competencias-en-inteligencia-artificial",
  ],
};
