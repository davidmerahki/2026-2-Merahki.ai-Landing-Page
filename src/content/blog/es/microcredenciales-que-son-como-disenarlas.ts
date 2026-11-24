import type { Articulo } from "../types";

const COURSERA = "https://assets.ctfassets.net/2pudprfttvy6/3P06Oe48cjFLCwxNo45yEB/53de4a32ceb2d09f553bb3d32dc17d84/Micro-Credentials_Impact_Report_2026.pdf";
const UNEVOC = "https://connect.unevoc.unesco.org/home/TVETipedia+Glossary/lang=e/show=term/term=micro-credential";
const UE = "https://eur-lex.europa.eu/legal-content/ES/ALL/?uri=CELEX:32022H0627(02)";
const OCDE = "https://www.fisme.science.uu.nl/publicaties/literatuur/2023_oecd_micro_credentials.pdf";
const D1330 = "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=98270";
const MNC = "https://especiales.colombiaaprende.edu.co/mnc/definicion.html";
const MNC_NIVELES = "https://especiales.colombiaaprende.edu.co/mnc/estructura.html";
const OCUPACOL = "https://ocupacol.mintrabajo.gov.co/Profile/OccupationalProfile/24231";
const OB3 = "https://www.1edtech.org/standards/open-badges";
const POK_SANTOTO = "https://www.pok.tech/blog/es/posts/microcredenciales-homologables-universidad-santo-tomas-santotoup";
const POK_ACEPTACION = "https://www.pok.tech/blog/es/posts/tasa-aceptacion-credenciales-digitales-egresados-como-aumentarla";
const POK_IMPLEMENTAR = "https://www.pok.tech/blog/es/posts/como-implementar-microcredenciales-universidad-paso-a-paso";
const UNAB = "https://unab.edu.co/wp-content/uploads/2025/06/LineamientosESL_Aprendizaje_LV_23mayo20251.pdf";

export const articulo: Articulo = {
  slug: "microcredenciales-que-son-como-disenarlas",
  lang: "es",
  altSlug: "micro-credentials-what-they-are-how-to-design",
  title: "Microcredenciales para universidades y empresas: qué son, cómo se diseñan por competencias y cómo se emiten como credencial verificable",
  seoTitle: "Microcredenciales: qué son y cómo se diseñan",
  description: "Qué es una microcredencial, en qué se diferencia de un diplomado y cómo una universidad o empresa la diseña por competencias y la emite verificable.",
  kicker: "Microcredenciales",
  keywords: [
    "microcredenciales",
    "qué es una microcredencial",
    "microcredenciales en Colombia",
    "quién puede emitir microcredenciales",
    "diseño de microcredenciales",
    "microcredenciales universidades",
    "credenciales verificables",
  ],
  published: "2026-11-24",
  readingMinutes: 11,
  summary: [
    `Una <strong>microcredencial</strong> es el registro verificable de un aprendizaje corto y evaluado. Certifica una competencia concreta, demostrada con evidencia y calificada con criterios claros.`,
    `Se diferencia de un diplomado o de un certificado de asistencia en dos cosas: acredita una competencia evaluada y cualquiera puede verificarla en línea.`,
    `En Colombia no encontramos una definición oficial del MEN. La puede emitir una universidad, una empresa o un gremio, y su valor depende del diseño, de la evaluación y de la verificación.`,
    `Se diseña en cinco decisiones: ocupación de referencia (CUOC), competencia y resultados de aprendizaje, evidencia y rúbrica, nivel y carga horaria (MNC y créditos) y metadatos de la credencial (Open Badges 3.0).`,
    `Para que cuente hacia un título, la universidad la reconoce en créditos. En Colombia un crédito académico equivale a 48 horas de trabajo del estudiante (<a href="${D1330}">Decreto 1330 de 2019</a>).`,
  ],
  body: [
    {
      t: "p",
      html: `Una <strong>microcredencial</strong> es el registro verificable de un aprendizaje corto y evaluado. Certifica que una persona domina una competencia concreta, que la demostró con una evidencia y que fue calificada con criterios claros, y la emite una institución en la que otros confían. Puede valer sola o sumarse a un diplomado, a un posgrado o a un título.`,
    },
    {
      t: "p",
      html: `Esta guía es para directores de educación continua, vicerrectorías académicas y equipos de formación de empresas que quieren lanzar microcredenciales con rigor. Explica qué dicen las definiciones internacionales, qué cambia frente a un diplomado, quién puede emitirlas en Colombia y cómo se diseñan paso a paso con los marcos que usamos en merahki.ai: la CUOC, el Marco Nacional de Cualificaciones (MNC) y Open Badges 3.0.`,
    },
    { t: "h2", text: "Qué es una microcredencial según UNESCO y la Unión Europea", id: "que-es" },
    {
      t: "p",
      html: `No existe una definición única, pero las dos más citadas coinciden en lo esencial. En 2022, UNESCO publicó una propuesta construida con un panel de 47 expertos. Según ese texto, una microcredencial es el registro de un logro de aprendizaje enfocado, que verifica lo que la persona sabe, comprende o puede hacer. Incluye una evaluación con estándares definidos, la otorga un proveedor confiable, tiene valor propio y puede sumar a otras microcredenciales o a credenciales mayores, como un título. UNESCO aclara que es una propuesta de expertos y no una posición oficial de la organización (<a href="${UNEVOC}">glosario de UNESCO-UNEVOC</a>).`,
    },
    {
      t: "p",
      html: `El Consejo de la Unión Europea adoptó el 16 de junio de 2022 una <a href="${UE}">recomendación sobre microcredenciales</a>. La define como el registro de los resultados de aprendizaje que alguien obtiene tras un volumen pequeño de aprendizaje, evaluados con criterios transparentes. Agrega tres rasgos que importan para el diseño: la microcredencial pertenece al estudiante, se puede compartir y es portable. Su anexo fija 11 elementos obligatorios para describirla, entre ellos los resultados de aprendizaje, la carga de trabajo, el nivel y el tipo de evaluación.`,
    },
    {
      t: "p",
      html: `De las dos definiciones salen cinco rasgos mínimos. Si a una credencial le falta alguno, cuesta defenderla como microcredencial ante un empleador o ante un comité curricular.`,
    },
    {
      t: "ul",
      items: [
        `<strong>Resultados de aprendizaje explícitos.</strong> Lo que la persona sabe, hace y cómo actúa al terminar, escrito con verbos que se pueden observar.`,
        `<strong>Evaluación con criterios claros.</strong> Una evidencia (proyecto, caso, desempeño) calificada con una rúbrica que se conoce de antemano.`,
        `<strong>Carga de trabajo declarada.</strong> Las horas de trabajo del estudiante y, si se va a homologar, su equivalencia en créditos.`,
        `<strong>Verificación.</strong> Cualquiera puede comprobar quién la emitió, a quién y qué acredita, sin tener que llamar a la institución.`,
        `<strong>Apilabilidad.</strong> Se diseña para sumarse a otras y formar una ruta, o para contar hacia un programa mayor.`,
      ],
    },
    {
      t: "p",
      html: `En Colombia no encontramos una definición oficial de microcredencial en el portal del Ministerio de Educación ni en el del <a href="${MNC}">Marco Nacional de Cualificaciones</a> (consulta del 24 de noviembre de 2026). El MNC habla de cualificaciones, competencias y resultados de aprendizaje, y ese es el lenguaje que conviene usar al diseñar. Algunas universidades ya tienen reglas propias. La Universidad Autónoma de Bucaramanga aprobó en mayo de 2025 unos <a href="${UNAB}">lineamientos para programas de corta duración</a> que adoptan la definición de UNESCO y citan el MNC como referente.`,
    },
    { t: "h2", text: "Microcredencial, diplomado, certificado y curso: en qué se diferencian", id: "diferencias" },
    {
      t: "p",
      html: `La confusión más común es tratar la microcredencial como un curso corto con insignia. La diferencia está en lo que se acredita y en cómo se prueba.`,
    },
    {
      t: "table",
      head: ["Formato", "Qué acredita", "Cómo se evalúa", "Verificación en línea"],
      rows: [
        ["Curso libre", "Que la persona tomó el curso", "Varía, a veces solo con asistencia", "Rara vez"],
        ["Certificado de asistencia", "Presencia en horas o sesiones", "No evalúa la competencia", "Casi nunca, suele ser un PDF"],
        ["Diplomado", "Que completó un programa de educación continua de mayor duración", "Lo define cada institución", "Depende de la institución"],
        ["Microcredencial", "Una competencia concreta, con sus resultados de aprendizaje", "Evidencia y rúbrica con criterios públicos", "Sí, con metadatos y enlace público"],
        ["Título (macrocredencial)", "Un programa formal completo", "Plan de estudios del programa", "Según la institución"],
      ],
      caption: "Comparación resumida. Elaboración de merahki.ai con base en UNESCO (2022) y la recomendación europea (2022).",
    },
    {
      t: "p",
      html: `El artículo <a href="/es/blog/diferencia-microcredencial-diplomado-certificado">diferencia entre microcredencial, diplomado, certificado y curso</a> compara los formatos en detalle y explica cuándo conviene reorganizar un diplomado como ruta de microcredenciales.`,
    },
    { t: "h2", text: "Quién puede emitir microcredenciales en Colombia", id: "quien-emite" },
    {
      t: "p",
      html: `Las emiten universidades, instituciones de educación para el trabajo, empresas con academias corporativas, gremios y entidades públicas. La definición de UNESCO solo pide que la otorgue un proveedor confiable, sin restringir quién puede serlo, y en Colombia no encontramos una norma que limite quién las emite.`,
    },
    {
      t: "p",
      html: `La pregunta útil es quién va a confiar en ella. Una microcredencial vale lo que vale la confianza en su emisor, en su evaluación y en su verificación. Tres cosas pesan más que el logo:`,
    },
    {
      t: "ul",
      items: [
        "Que la competencia responda a una necesidad real de un sector o de un cargo, y que eso quede escrito.",
        "Que la evaluación tenga evidencia y criterios que un tercero pueda revisar.",
        "Que la credencial se pueda verificar en línea con estándares abiertos, sin depender de que la institución conteste un correo.",
      ],
    },
    {
      t: "p",
      html: `Una microcredencial de educación continua no otorga un título académico. Para que sume hacia un pregrado o un posgrado, la universidad tiene que reconocerla en créditos dentro de un programa que sí conduce a título, y ese reconocimiento lo decide cada institución con sus propias reglas. Lo explicamos en <a href="/es/blog/homologacion-de-microcredenciales-creditos-academicos">cómo se homologan las microcredenciales en créditos académicos</a>.`,
    },
    { t: "h2", text: "Cómo se diseña una microcredencial por competencias", id: "como-se-disena" },
    {
      t: "p",
      html: `El diseño empieza por el final: qué debe poder hacer la persona, en qué trabajo y cómo lo va a demostrar. El contenido llega después. Es el diseño inverso de Wiggins y McTighe, que sigue la <a href="/es/methodology">metodología de merahki.ai</a> y que explicamos en <a href="/es/blog/diseno-instruccional-por-competencias">diseño instruccional por competencias</a>. En la práctica son cinco decisiones.`,
    },
    { t: "h3", text: "1. De la necesidad del sector a la ocupación (CUOC)" },
    {
      t: "p",
      html: `Toda microcredencial responde a una pregunta: qué brecha de habilidades cierra y para quién. En Colombia, la Clasificación Única de Ocupaciones (CUOC) ordena las ocupaciones del país con sus funciones, conocimientos y destrezas. Ubicar la microcredencial en una ocupación hace que su propósito se entienda fuera de la universidad. Una microcredencial de selección de personal por competencias, por ejemplo, apunta a la ocupación 24231, Profesionales de talento humano. Su ficha en <a href="${OCUPACOL}">Ocupacol, del Ministerio del Trabajo</a>, incluye entre sus funciones los procesos de atracción, evaluación, selección y contratación de personal.`,
    },
    { t: "h3", text: "2. De la competencia a los resultados de aprendizaje" },
    {
      t: "p",
      html: `La competencia se escribe como una capacidad completa y evaluable, con verbo, objeto y condición. Luego se descompone en resultados de aprendizaje de tres tipos, que en merahki llamamos saber, hacer y ser: lo que la persona conoce, lo que ejecuta y la actitud con la que actúa. El MNC define la competencia como la capacidad demostrada de poner en acción conocimientos, habilidades, destrezas y actitudes, y dice que se evidencia con el logro de los resultados de aprendizaje. Esa definición es la base del diseño.`,
    },
    {
      t: "p",
      html: `Una regla práctica: un verbo por resultado, y un verbo que se pueda observar. «Comprender la entrevista por competencias» no se puede evaluar. «Formula preguntas de evento conductual alineadas a una competencia del cargo» sí se puede.`,
    },
    { t: "h3", text: "3. Evidencia evaluable y rúbrica" },
    {
      t: "p",
      html: `Cada resultado necesita una evidencia: un producto, un caso resuelto, una simulación grabada, un informe. La rúbrica dice qué se considera suficiente en cada criterio y se publica antes de que la persona empiece. La evidencia separa una microcredencial de una constancia y le da a quien contrata algo que revisar. En el <a href="${COURSERA}">informe de impacto de las microcredenciales de Coursera (2026)</a>, el 82 % de los estudiantes y el 88 % de los graduados encuestados prefiere las microcredenciales basadas en proyectos sobre las de solo contenido.`,
    },
    { t: "h3", text: "4. Nivel y carga horaria (MNC y créditos)" },
    {
      t: "p",
      html: `El nivel dice qué tan compleja es la competencia. El MNC organiza las cualificaciones en <a href="${MNC_NIVELES}">ocho niveles</a> descritos por conocimientos, destrezas y actitudes. El nivel 6, por ejemplo, describe a quien define y gestiona proyectos y procesos en contextos variados. Ubicar la microcredencial en un nivel ayuda a decidir a qué programa puede sumar y evita rutas que mezclan exigencias que no se corresponden.`,
    },
    {
      t: "p",
      html: `La carga horaria se declara en horas de trabajo del estudiante, con el acompañamiento del docente y el trabajo independiente. Si la microcredencial se va a homologar, conviene pensar en créditos desde el principio. Según el artículo 2.5.3.2.4.1 del <a href="${D1330}">Decreto 1330 de 2019</a>, un crédito académico equivale a 48 horas en un periodo académico, y el artículo siguiente pide expresar los créditos de cada actividad en números enteros.`,
    },
    { t: "h3", text: "5. Metadatos de la credencial (Open Badges 3.0)" },
    {
      t: "p",
      html: `La credencial digital lleva por dentro la información del diseño. Con <a href="${OB3}">Open Badges 3.0</a>, el estándar de 1EdTech, cada insignia se firma como una credencial verificable compatible con el modelo de datos 2.0 de W3C. La recomendación europea pide, entre sus elementos obligatorios, el título de la microcredencial, los resultados de aprendizaje, la carga de trabajo, el nivel, el tipo de evaluación y la forma de participación. Casi todos esos datos salen del diseño instruccional y no de la herramienta que emite.`,
    },
    {
      t: "callout",
      title: "Lo que hace confiable una microcredencial se decide en el diseño",
      html: `En la encuesta de <a href="${COURSERA}">Coursera de 2026</a>, el 82 % de los empleadores valora más las microcredenciales creadas con la industria, y el 75 % de los estudiantes buscaría las que tienen una recomendación formal de crédito, frente al 18 % sin ella. Con quién se define la competencia y cómo se conecta con los créditos de un programa son decisiones de diseño, anteriores a la emisión.`,
    },
    { t: "h2", text: "Ejemplo resumido: una microcredencial de selección de personal", id: "ejemplo" },
    {
      t: "table",
      head: ["Decisión", "Cómo queda en el ejemplo"],
      rows: [
        ["Ocupación (CUOC)", "24231 Profesionales de talento humano"],
        ["Competencia", "Seleccionar personal por competencias con entrevistas estructuradas y criterios de evaluación definidos para el cargo"],
        ["Resultados de aprendizaje", "Saber: explica los tipos de entrevista y sus sesgos. Hacer: formula preguntas de evento conductual y califica respuestas con una escala. Ser: actúa con trato equitativo y confidencialidad"],
        ["Evidencia y rúbrica", "Entrevista simulada grabada más el informe de selección, calificados con una rúbrica de cuatro criterios"],
        ["Nivel y carga", "Nivel de referencia MNC 6. 48 horas de trabajo del estudiante, equivalentes a un crédito"],
        ["Metadatos", "Nombre por competencia, emisor, criterios, evidencia, fecha y enlace de verificación"],
      ],
      caption: "Ejemplo ilustrativo de merahki.ai. El nivel y la carga los propone la institución con los descriptores del MNC.",
    },
    {
      t: "p",
      html: `La plantilla completa, campo por campo, está en <a href="/es/blog/como-disenar-una-microcredencial">cómo diseñar una microcredencial por competencias</a>.`,
    },
    { t: "h2", text: "Cuánto dura una microcredencial", id: "duracion" },
    {
      t: "p",
      html: `No hay una duración fija. La recomendación europea habla de un volumen pequeño de aprendizaje, y la <a href="${OCDE}">OCDE (2023)</a> reconoce que las microcredenciales varían mucho en duración y en nivel. Lo que define la duración es la competencia: cuántas horas de trabajo necesita una persona para alcanzar los resultados y producir la evidencia.`,
    },
    {
      t: "p",
      html: `Un caso colombiano sirve de referencia. La Universidad Santo Tomás, seccional Tunja, organizó su sistema SantotoUP en tres niveles: de 4 a 48 horas, de 48 a 144 horas y hasta 480 horas, según el <a href="${POK_SANTOTO}">caso documentado por POK</a>. Con la regla de 48 horas por crédito, el primer nivel llega hasta un crédito, el segundo va de uno a tres y el tercero llega hasta diez. Esa lectura en créditos es nuestra y no un dato del caso.`,
    },
    { t: "h2", text: "Cómo se emite y se verifica una microcredencial", id: "emision" },
    {
      t: "p",
      html: `Cuando la evidencia se aprueba, la credencial se emite en formato digital y la persona la recibe en su correo o en su billetera digital. Desde ahí la comparte en LinkedIn o la adjunta a una postulación, y quien la recibe la verifica con un enlace público. En merahki.ai la emisión la hace POK, la infraestructura de credenciales verificables y Skills Intelligence con la que trabajamos. POK emite en Open Badges 3.0 y W3C Verifiable Credentials y convierte las credenciales emitidas en inteligencia de habilidades. Su <a href="${POK_IMPLEMENTAR}">guía para implementar microcredenciales en una universidad</a> cubre la parte técnica y de adopción.`,
    },
    {
      t: "p",
      html: `El momento de la emisión también es diseño. POK publicó datos de tres programas en Brasil: en los envíos masivos a egresados la aceptación rondó el 20 %, y un programa de formación docente que emitió con los participantes todavía activos llegó al 68 % (<a href="${POK_ACEPTACION}">POK, 2026</a>). Por eso diseñamos el cierre del curso para que la credencial llegue en el momento del logro. Hay más detalle en <a href="/es/blog/credenciales-digitales-verificables">credenciales digitales verificables</a> y en nuestro servicio de <a href="/es/certification">certificación con credenciales verificables</a>.`,
    },
    { t: "h2", text: "Qué dicen los datos sobre el valor de las microcredenciales", id: "datos" },
    {
      t: "stats",
      items: [
        { value: "92 %", label: "de los empleadores en México dice que quienes entran con microcredenciales rinden mejor el primer año", source: "Coursera, Micro-Credentials Impact Report 2026, p. 17", href: COURSERA },
        { value: "74 %", label: "de los estudiantes en México buscaría microcredenciales con recomendación formal de crédito, frente al 20 % sin ella", source: "Coursera, Micro-Credentials Impact Report 2026, p. 17", href: COURSERA },
        { value: "81 %", label: "de los líderes de educación superior dice que integrar microcredenciales acelera la actualización del currículo", source: "Coursera, Micro-Credentials Impact Report 2026, p. 10", href: COURSERA },
      ],
    },
    {
      t: "p",
      html: `Son percepciones declaradas en una encuesta de Coursera, que vende microcredenciales, hecha entre febrero y marzo de 2026. México es el único país latinoamericano de la muestra y Colombia no está. La OCDE es más cauta: en su revisión de 2023 encuentra que la evidencia sobre resultados laborales todavía es limitada y que el efecto depende de que el programa corresponda al perfil de quien lo toma. Uno de los estudios que recoge, en Singapur, asocia completar la cualificación entera con un aumento salarial real de 5,8 %, frente a 0,8 % entre quienes solo certificaron módulos sueltos (<a href="${OCDE}">OCDE, 2023, p. 7</a>). Para el diseño, eso significa planear desde el principio a qué ruta o a qué programa suma cada microcredencial.`,
    },
    { t: "h2", text: "Errores frecuentes al lanzar microcredenciales", id: "errores" },
    {
      t: "ul",
      items: [
        "<strong>Certificar asistencia con formato de insignia.</strong> Sin evidencia ni rúbrica, el empleador no tiene nada que verificar.",
        "<strong>Nombrar la credencial por el curso.</strong> «Módulo 3» no le dice nada a un reclutador. «Selección de personal por competencias» le dice qué sabe hacer la persona.",
        "<strong>Lanzar sin regla de reconocimiento.</strong> Si la universidad no decidió cómo suma la microcredencial en créditos, el estudiante no sabe qué gana al apilarla.",
        "<strong>Reorganizar el curso de un autor sin entender su método.</strong> Antes de convertir un programa en microcredenciales hay que conocer cómo enseña el autor, qué piezas tiene y para qué sirve cada una.",
        "<strong>Medir solo cuántas credenciales se emitieron.</strong> Lo útil es el recorrido completo: inscripción, avance, aprobación, emisión, aceptación y transferencia al trabajo, que en merahki medimos con el modelo Kirkpatrick.",
      ],
    },
    {
      t: "cta",
      html: `merahki.ai diseña rutas de microcredenciales por competencias para universidades y empresas, las produce, las opera en el LMS y las emite con POK. Cuéntanos qué quieres certificar y te enviamos una propuesta a la medida.`,
    },
    { t: "h2", text: "Qué hace merahki.ai y qué hace POK en una microcredencial", id: "merahki-pok" },
    {
      t: "p",
      html: `merahki.ai diseña, produce, opera y mide el programa. Define la competencia con la CUOC y el MNC, escribe los resultados de aprendizaje, diseña la evidencia y la rúbrica, virtualiza el curso, lo opera en el LMS y mide del enrollment al reporte. POK emite la credencial verificable y convierte las credenciales en inteligencia de habilidades. Si diriges una unidad de educación continua, en <a href="/es/lifelong-learning">Lifelong Learning para universidades</a> explicamos cómo armamos rutas apilables con la marca de tu institución.`,
    },
  ],
  faq: [
    {
      q: "¿Qué es una microcredencial?",
      a: "Es el registro verificable de un aprendizaje corto y evaluado que certifica una competencia concreta. Incluye resultados de aprendizaje, una evaluación con criterios claros y la emite una institución confiable. Puede valer sola o sumarse a un programa mayor.",
    },
    {
      q: "¿Quién puede emitir microcredenciales en Colombia?",
      a: "Universidades, instituciones de educación para el trabajo, empresas, gremios y entidades públicas. No encontramos una norma del MEN que limite quién las emite. Su valor depende de la confianza en el emisor, de la calidad de la evaluación y de que se puedan verificar en línea.",
    },
    {
      q: "¿Cuánto dura una microcredencial?",
      a: "No hay una duración fija: depende de las horas que necesita la competencia. Como referencia, la Universidad Santo Tomás de Tunja usa niveles que van de 4 a 480 horas, según un caso documentado por POK. Si va a homologarse, conviene que la carga cuadre con créditos de 48 horas.",
    },
    {
      q: "¿Quién valida las microcredenciales?",
      a: "La valida la institución que la emite, con su evaluación y su aseguramiento de la calidad. Cualquier tercero puede verificarla en línea con el enlace público de la credencial. El reconocimiento en créditos lo decide la universidad que la recibe.",
    },
    {
      q: "¿Una microcredencial es un título?",
      a: "No. Es la credencial de un aprendizaje corto. Puede contar hacia un título si la universidad la reconoce en créditos dentro de un programa formal, con sus propias reglas de homologación.",
    },
  ],
  sources: [
    { title: "Towards a common definition of micro-credentials (definición en el glosario TVETipedia)", publisher: "UNESCO / UNESCO-UNEVOC", url: UNEVOC, date: "2022", note: "Propuesta de consenso de expertos, no posición oficial de UNESCO." },
    { title: "Recomendación del Consejo relativa a un enfoque europeo de las microcredenciales para el aprendizaje permanente y la empleabilidad (2022/C 243/02)", publisher: "Consejo de la Unión Europea (EUR-Lex)", url: UE, date: "2022-06-16", note: "Definición y anexo I con los elementos obligatorios." },
    { title: "Micro-Credentials Impact Report 2026", publisher: "Coursera", url: COURSERA, date: "2026", note: "Encuesta a más de 3.500 personas en 7 países, febrero y marzo de 2026. pp. 10, 12-13 y 17." },
    { title: "Micro-credentials for Lifelong Learning and Employability: Uses and Possibilities (Education Policy Perspectives No. 66)", publisher: "OCDE", url: OCDE, date: "2023", note: "Copia del PDF original de la OCDE alojada por la Universidad de Utrecht. pp. 1-8." },
    { title: "Decreto 1330 de 2019, artículos 2.5.3.2.4.1 y 2.5.3.2.4.2 (créditos académicos)", publisher: "Función Pública, Gestor Normativo", url: D1330, date: "2019-07-25" },
    { title: "Marco Nacional de Cualificaciones: definición y glosario", publisher: "Ministerio de Educación Nacional", url: MNC },
    { title: "Marco Nacional de Cualificaciones: estructura y descriptores de nivel", publisher: "Ministerio de Educación Nacional", url: MNC_NIVELES },
    { title: "Perfil ocupacional 24231 Profesionales de talento humano", publisher: "Ocupacol, Ministerio del Trabajo", url: OCUPACOL },
    { title: "Open Badges", publisher: "1EdTech", url: OB3 },
    { title: "Microcredenciales homologables: cómo la Universidad Santo Tomás Seccional Tunja construyó SantotoUP", publisher: "POK", url: POK_SANTOTO, date: "2026-08-13", note: "Caso documentado por POK." },
    { title: "Tasa de aceptación de credenciales digitales: qué esperar de tus egresados y cómo aumentarla", publisher: "POK", url: POK_ACEPTACION, date: "2026-10-20", note: "Datos de tres programas en Brasil." },
    { title: "Cómo implementar microcredenciales en una universidad paso a paso", publisher: "POK", url: POK_IMPLEMENTAR, date: "2026-05-07" },
    { title: "Educación sin límites: lineamientos para programas de corta duración", publisher: "Universidad Autónoma de Bucaramanga", url: UNAB, date: "2025-05-23" },
  ],
  related: [
    "diferencia-microcredencial-diplomado-certificado",
    "como-disenar-una-microcredencial",
    "homologacion-de-microcredenciales-creditos-academicos",
    "credenciales-digitales-verificables",
    "marco-nacional-de-cualificaciones-diseno-curricular",
    "informe-microcredenciales-coursera-2026",
  ],
};
