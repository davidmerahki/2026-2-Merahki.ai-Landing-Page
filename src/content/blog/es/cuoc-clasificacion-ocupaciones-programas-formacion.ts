import type { Articulo } from "../types";

const DANE_CUOC =
  "https://www.dane.gov.co/index.php/sistema-estadistico-nacional-sen/normas-y-estandares/nomenclaturas-y-clasificaciones/clasificaciones/clasificacion-unica-de-ocupaciones-para-colombia-cuoc";
const DANE_CONSULTA = "https://clasificaciones.dane.gov.co/cuoc/cuoc_descripcion";
const DANE_DOC_2025 = "https://www.dane.gov.co/files/sen/nomenclatura/cuoc/documento-clasificacion-unica-ocupaciones-colombia-CUOC-2025.pdf";
const DECRETO_654 = "https://www.dane.gov.co/files/acerca/Normatividad/decretos/DECRETO-654-DE-2021.pdf";
const OCUPACOL = "https://ocupacol.mintrabajo.gov.co/";
const OCUPACOL_ABC = "https://ocupacol.mintrabajo.gov.co/pdf/ABEC%C3%89%20OCUPACOL%2020220126VF.pdf";
const OCUPACOL_TEC = "https://ocupacol.mintrabajo.gov.co/pdf/DOCUMENTACI%C3%93N%20T%C3%89CNICA%20METODOL%C3%93GICA%20180422.pdf";
const PORTAL_CAT = "https://especiales.colombiaaprende.edu.co/mnc/catalogo.html";

export const articulo: Articulo = {
  slug: "cuoc-clasificacion-ocupaciones-programas-formacion",
  lang: "es",
  title:
    "CUOC en Colombia: qué es la Clasificación Única de Ocupaciones, cómo se lee un código y cómo la usan universidades y empresas para diseñar programas de formación pertinentes",
  seoTitle: "CUOC: qué es y cómo usarla para diseñar programas",
  description:
    "Qué es la CUOC, cómo se lee un código de ocupación, dónde se consulta y cómo usarla con el MNC para que un programa forme para ocupaciones reales.",
  kicker: "Marcos de Colombia",
  keywords: [
    "cuoc",
    "cuoc qué es",
    "clasificación única de ocupaciones",
    "códigos cuoc",
    "ocupaciones cuoc",
    "cuoc y mnc",
    "ocupacol",
  ],
  published: "2026-11-24",
  readingMinutes: 7,
  summary: [
    "La <strong>CUOC (Clasificación Única de Ocupaciones para Colombia)</strong> es la clasificación oficial de ocupaciones del país. La mantiene el DANE y su uso es obligatorio desde el Decreto 654 de 2021.",
    "Tiene cinco niveles. Según el DANE, la actualización 2026 organiza 682 ocupaciones en 449 grupos primarios, 136 subgrupos, 43 subgrupos principales y 10 grandes grupos.",
    "Un código de cinco dígitos se lee de izquierda a derecha: gran grupo, subgrupo principal, subgrupo, grupo primario (igual a la CIUO-08) y ocupación.",
    "Cada perfil trae funciones, conocimientos, destrezas, nivel de competencia y área de cualificación del MNC. Ese último campo es el puente hacia el catálogo de cualificaciones.",
    "Se consulta en el sistema del DANE y en Ocupacol, del Ministerio del Trabajo, que suma indicadores del mercado laboral por ocupación.",
  ],
  body: [
    {
      t: "p",
      html: "La <strong>CUOC (Clasificación Única de Ocupaciones para Colombia)</strong> es la clasificación oficial que ordena las ocupaciones del país en una estructura de cinco niveles. Para cada ocupación trae un perfil con sus funciones, los conocimientos y destrezas que pide, su nivel de competencia y el área de cualificación del Marco Nacional de Cualificaciones (MNC) a la que pertenece.",
    },
    {
      t: "p",
      html: "Mucha gente busca la CUOC para clasificar un cargo, publicar una vacante o llenar un formulario de empleo. Esta guía está escrita para otro lector: quien diseña programas de formación en una universidad, una institución de educación para el trabajo o el área de talento de una empresa, y necesita que el programa forme para ocupaciones que existen en el mercado laboral.",
    },
    { t: "h2", text: "Qué es la CUOC y quién la mantiene" },
    {
      t: "p",
      html: `La <a href="${DANE_CUOC}">página de la CUOC en el sitio del DANE</a> la presenta como la adaptación para Colombia de la Clasificación Internacional Uniforme de Ocupaciones (CIUO) de la OIT y como el único referente ocupacional del país. El <a href="${DANE_DOC_2025}">documento metodológico de 2025</a> cuenta su origen: en 2018, el DANE, el Ministerio del Trabajo, el SENA, la Unidad del Servicio Público de Empleo, el DNP, el MEN y la Presidencia empezaron a construirla en cumplimiento del artículo 194 del Plan Nacional de Desarrollo, el mismo que creó el Sistema Nacional de Cualificaciones.`,
    },
    {
      t: "p",
      html: `La CUOC conservó la estructura de la CIUO-08 hasta el cuarto dígito y agregó un quinto, la ocupación, que conecta la CIUO-08 con la Clasificación Nacional de Ocupaciones del SENA. Con el <a href="${DECRETO_654}">Decreto 654 de 2021</a>, el Ministerio del Trabajo la oficializó como la única clasificación ocupacional de uso obligatorio en Colombia, y el DANE quedó como custodio encargado de actualizarla cada año. La actualización más reciente que publica el DANE es la de 2026, adoptada con la Resolución 1344 del 28 de octubre de 2026.`,
    },
    {
      t: "stats",
      items: [
        { value: "682", label: "ocupaciones en la actualización 2026 de la CUOC", source: "DANE", href: DANE_CUOC },
        { value: "449", label: "grupos primarios, equivalentes al cuarto dígito de la CIUO-08", source: "DANE", href: DANE_CUOC },
        { value: "10", label: "grandes grupos, del 0 (fuerzas militares) al 9 (ocupaciones elementales)", source: "DANE", href: DANE_CUOC },
      ],
    },
    { t: "h2", text: "Cómo se lee un código CUOC" },
    {
      t: "p",
      html: "El código crece un dígito por nivel. Este es el camino de la ocupación de fisioterapeutas en la CUOC 2025:",
    },
    {
      t: "table",
      head: ["Nivel", "Dígitos", "Código", "Nombre"],
      rows: [
        ["Gran grupo", "1", "2", "Profesionales, científicos e intelectuales"],
        ["Subgrupo principal", "2", "22", "Profesionales de la salud"],
        ["Subgrupo", "3", "226", "Otros profesionales de la salud"],
        ["Grupo primario", "4", "2264", "Fisioterapeutas (igual a la CIUO-08)"],
        ["Ocupación", "5", "22640", "Fisioterapeutas"],
        ["Denominación ocupacional", "5 + consecutivo", "22640.002", "Fisioterapeuta"],
      ],
      caption: "Fuente: perfiles ocupacionales de la CUOC 2025 (DANE).",
    },
    {
      t: "p",
      html: "Dos convenciones ayudan a leer rápido. Cuando un grupo primario tiene una sola ocupación, el quinto dígito es 0, como en 22640. Y las ocupaciones residuales, las que agrupan lo que no cabe en otra, suelen terminar en 9 y llevan la frase «no clasificados en otras ocupaciones». Las denominaciones son los nombres reales de los cargos: en 22640 aparecen, entre otras, kinesiólogo, terapeuta físico y fisioterapeuta en terapia manual.",
    },
    { t: "h2", text: "Qué trae cada perfil ocupacional" },
    {
      t: "p",
      html: "Según el documento del DANE, cada perfil se organiza en once campos: código, nombre, descripción, funciones, denominaciones, ocupaciones afines, nivel de competencia, conocimientos, destrezas, área de cualificación y equivalencias con otras clasificaciones. Para quien diseña formación, cinco pesan más:",
    },
    {
      t: "ul",
      items: [
        "<strong>Funciones:</strong> qué hace la persona y para qué. Son la materia prima de las competencias del programa.",
        "<strong>Conocimientos y destrezas:</strong> qué tiene que saber y qué habilidades pone en juego.",
        "<strong>Nivel de competencia:</strong> la complejidad del empleo, en una escala de 1 a 4.",
        "<strong>Área de cualificación:</strong> el área del MNC donde buscar cualificaciones relacionadas.",
        "<strong>Equivalencias:</strong> el código en la CIUO-08 y en la clasificación del SENA. Un asterisco indica que la equivalencia es parcial.",
      ],
    },
    { t: "h2", text: "Los cuatro niveles de competencia de la CUOC" },
    {
      t: "p",
      html: "La CUOC clasifica el empleo, no a la persona que lo ocupa. El nivel de competencia mide la naturaleza del trabajo, la formación que exige y la autonomía que requiere. El documento del DANE usa cuatro niveles:",
    },
    {
      t: "table",
      head: ["Nivel", "Qué caracteriza al empleo", "Educación de referencia (CINE)"],
      rows: [
        ["1", "Funciones físicas o manuales, simples y rutinarias", "Nivel 1"],
        ["2", "Operar maquinaria, conducir, mantener equipos o manejar información, con lectura y cálculo", "Niveles 2 a 4"],
        ["3", "Funciones técnicas y prácticas complejas en un área especializada", "Nivel 5"],
        ["4", "Resolver problemas complejos y tomar decisiones con un conocimiento teórico amplio", "Nivel 6 o superior"],
      ],
    },
    {
      t: "callout",
      title: "No es el nivel del MNC",
      html: `El nivel de competencia de la CUOC va de 1 a 4. El del <a href="/es/blog/marco-nacional-de-cualificaciones-diseno-curricular">Marco Nacional de Cualificaciones</a> va de 1 a 8. Una ocupación de nivel 4 en la CUOC, como fisioterapeuta, se relaciona en el catálogo con cualificaciones de niveles 6 y 7 del MNC. Úsalo como una pista del rango, nunca como una conversión exacta.`,
    },
    { t: "h2", text: "Para qué usan la CUOC empresas, SENA y universidades" },
    {
      t: "p",
      html: "El documento del DANE lista los usos oficiales. Además de producir estadísticas laborales, la CUOC es el insumo único de ocupaciones para:",
    },
    {
      t: "ul",
      items: [
        "La planificación de la educación y la formación.",
        "El diseño curricular de los programas de formación.",
        "El diseño de catálogos de cualificaciones.",
        "La evaluación y certificación de competencias laborales.",
        "La gestión del talento humano, la intermediación laboral y la orientación vocacional.",
        "Los manuales de funciones del empleo público y privado.",
      ],
    },
    {
      t: "p",
      html: "Que el diseño curricular figure en esa lista importa. Cuando una universidad o una empresa justifica un programa con un código CUOC, usa el mismo lenguaje que el Estado, el SENA y los catálogos del MNC.",
    },
    { t: "h2", text: "Cómo buscar una ocupación en la CUOC" },
    {
      t: "ol",
      items: [
        `<strong>Busca en el <a href="${DANE_CONSULTA}">sistema de consulta del DANE</a>.</strong> Permite buscar por término, por código o recorriendo la estructura. Revisa qué versión muestra: al 24 de noviembre de 2026 reportaba 680 ocupaciones y 14.462 denominaciones, las cifras de la edición 2025.`,
        "<strong>Descarga el Excel de perfiles ocupacionales</strong> desde la página de la CUOC del DANE si vas a trabajar con muchas ocupaciones. Trae los once campos en hojas planas.",
        `<strong>Consulta <a href="${OCUPACOL}">Ocupacol</a></strong>, la herramienta del Ministerio del Trabajo. Ofrece búsqueda por jerarquía, por categoría y una búsqueda avanzada que mira título, denominación, descripción y funciones. Su <a href="${OCUPACOL_ABC}">abecé</a> describe cuatro indicadores estratégicos por ocupación, calculados con la Gran Encuesta Integrada de Hogares del DANE y las vacantes del Servicio Público de Empleo.`,
        "<strong>Lee todas las candidatas, no solo la primera.</strong> Un mismo cargo puede aparecer como denominación en una ocupación y parecerse a las funciones de otra. Compara las funciones antes de elegir.",
        "<strong>Anota el código, la versión y el área de cualificación.</strong> Son los datos que vas a citar en el programa.",
      ],
    },
    {
      t: "p",
      html: `Un cuidado con Ocupacol: sus fichas y sus series no siempre van al día con la última versión del DANE. La <a href="${OCUPACOL_TEC}">documentación técnica</a> describe, por ejemplo, una tendencia de ocupados calculada entre 2008 y 2019. Úsalo como argumento de pertinencia y confirma el código contra la versión vigente.`,
    },
    {
      t: "cta",
      html: "merahki usa la CUOC y el MNC para ubicar cada programa frente a una ocupación real antes de diseñarlo.",
    },
    { t: "h2", text: "De la ocupación a la competencia y al programa" },
    { t: "p", html: "Así pasa un equipo de diseño de un código CUOC a un programa de formación:" },
    {
      t: "ol",
      items: [
        "<strong>Elegir la ocupación destino</strong> y justificarla con datos de demanda del sector o del cliente.",
        "<strong>Leer sus funciones</strong> y quedarse con las que el programa va a formar. Cada función elegida se redacta como competencia, con un verbo observable y su condición.",
        "<strong>Cruzar conocimientos y destrezas</strong> con los contenidos y actividades del programa.",
        "<strong>Usar el nivel de competencia</strong> para acotar el rango de niveles del MNC donde caerá el programa.",
        `<strong>Ir al área de cualificación</strong> y buscar en el <a href="${PORTAL_CAT}">catálogo del MNC</a> si ya hay una cualificación para esa ocupación. Si la hay, sus resultados de aprendizaje son el referente más fuerte.`,
        "<strong>Escribir la alineación</strong> en la ficha del programa y en la de cada credencial: código CUOC, versión, área y, si aplica, código de la cualificación.",
      ],
    },
    { t: "h2", text: "CUOC y MNC: en qué se diferencian y cómo se complementan" },
    {
      t: "table",
      head: ["", "CUOC", "MNC"],
      rows: [
        ["Qué clasifica", "Ocupaciones del mercado laboral", "Cualificaciones: lo que una persona debe saber hacer"],
        ["Quién la mantiene", "DANE, por mandato del Ministerio del Trabajo", "MEN y Ministerio del Trabajo"],
        ["Niveles", "4 niveles de competencia", "8 niveles de cualificación"],
        ["Unidad", "Ocupación de cinco dígitos", "Cualificación con código propio"],
        ["Qué le aporta al diseño", "Funciones reales y nombres de cargos", "Competencias, resultados de aprendizaje y criterios"],
      ],
    },
    {
      t: "p",
      html: "Se conectan en los dos sentidos. Cada ocupación de la CUOC trae su área de cualificación del MNC, y cada cualificación del catálogo nombra sus ocupaciones relacionadas. La ocupación 22640 Fisioterapeutas pertenece al área de Salud y bienestar, y en ese catálogo aparecen cualificaciones de fisioterapia de niveles 6 y 7, entre ellas una de seguridad y salud en el trabajo y ergonomía. Desde ahí se puede diseñar una ruta de microcredenciales por competencia, como explicamos en nuestra guía sobre el MNC.",
    },
    { t: "h2", text: "Cómo la usa merahki" },
    {
      t: "p",
      html: `merahki tiene los perfiles de la CUOC y las cualificaciones del catálogo en una base de consulta propia. Con ella ubica un programa frente a una ocupación, revisa qué funciones cubre cada resultado de aprendizaje y deja la alineación escrita en el diseño. Ese paso abre nuestra <a href="/es/methodology">metodología de diseño por competencias</a> y se aplica tanto a la <a href="/es/training-certification">capacitación y certificación para empresas</a> como a la <a href="/es/medical-education">educación médica continua</a>. La base propone candidatas por coincidencia de palabras, y la decisión final la toma un diseñador que lee las funciones.`,
    },
    { t: "cta" },
  ],
  faq: [
    {
      q: "¿Qué es la CUOC?",
      a: "Es la Clasificación Única de Ocupaciones para Colombia, la clasificación oficial que ordena las ocupaciones del país en cinco niveles y describe cada una con un perfil. La mantiene el DANE y es de uso obligatorio desde el Decreto 654 de 2021.",
    },
    {
      q: "¿Cómo se busca una ocupación en la CUOC?",
      a: `En el <a href="${DANE_CONSULTA}">sistema de consulta del DANE</a> puedes buscar por término, por código o por estructura. En <a href="${OCUPACOL}">Ocupacol</a>, del Ministerio del Trabajo, la búsqueda avanzada revisa título, denominaciones, descripción y funciones. Lee varias candidatas y compara las funciones antes de elegir.`,
    },
    {
      q: "¿Cuántas ocupaciones tiene la CUOC?",
      a: "Según la página del DANE, la actualización 2026 organiza 682 ocupaciones en 449 grupos primarios, 136 subgrupos, 43 subgrupos principales y 10 grandes grupos. La edición 2025 tenía 680 ocupaciones, así que cita siempre la versión que usaste.",
    },
    {
      q: "¿Qué diferencia hay entre la CUOC y la CIUO-08?",
      a: "La CIUO-08 es la clasificación internacional de la OIT. La CUOC la adapta a Colombia, conserva su estructura hasta el cuarto dígito y agrega un quinto dígito para la ocupación, con perfiles más detallados.",
    },
    {
      q: "¿Qué relación tiene la CUOC con el Marco Nacional de Cualificaciones?",
      a: "Cada ocupación de la CUOC tiene un área de cualificación del MNC, y las cualificaciones del catálogo nombran sus ocupaciones relacionadas. La CUOC dice para qué trabajo se forma y el MNC dice qué competencias y en qué nivel.",
    },
  ],
  sources: [
    { title: "Clasificación Única de Ocupaciones para Colombia (CUOC)", publisher: "DANE", url: DANE_CUOC, note: "Actualización 2026, Resolución 1344 del 28-oct-2026. Consultado el 24-nov-2026" },
    { title: "Sistema de consulta CUOC", publisher: "DANE", url: DANE_CONSULTA, note: "Consultado el 24-nov-2026" },
    { title: "Clasificación Única de Ocupaciones para Colombia, CUOC 2025: documento metodológico", publisher: "DANE", url: DANE_DOC_2025, date: "2025" },
    { title: "Decreto 654 de 2021", publisher: "Ministerio del Trabajo (copia en el sitio del DANE)", url: DECRETO_654, date: "2021" },
    { title: "Ocupacol, Catálogo de Ocupaciones para Colombia", publisher: "Ministerio del Trabajo", url: OCUPACOL },
    { title: "Abecé Ocupacol", publisher: "Ministerio del Trabajo", url: OCUPACOL_ABC, date: "2022" },
    { title: "Ocupacol: documentación técnica metodológica", publisher: "Ministerio del Trabajo", url: OCUPACOL_TEC },
    { title: "Catálogo Nacional de Cualificaciones", publisher: "Ministerio de Educación Nacional (portal MNC)", url: PORTAL_CAT },
  ],
  related: [
    "marco-nacional-de-cualificaciones-diseno-curricular",
    "diseno-instruccional-por-competencias",
    "mapa-de-habilidades-empresa",
    "educacion-medica-continua-virtual-diseno",
  ],
};
