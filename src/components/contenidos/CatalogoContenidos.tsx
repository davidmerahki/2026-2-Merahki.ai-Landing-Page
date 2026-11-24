import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CircleCheck, MousePointerClick, Repeat, Timer } from "lucide-react";
import GlowBackground from "@/components/ui/GlowBackground";
import ContentExplorer from "@/components/contenidos/ContentExplorer";
import { TIPOS, TOTAL_CATEGORIAS, TOTAL_DEMOS, TOTAL_TIPOS, getTipo, type Lang } from "@/content/contenidos/tipos";

/**
 * Catálogo de los 55 tipos de contenido interactivo (desarrolla la lámina 20 del showroom).
 * Rutas: /es/tipos-de-contenido-interactivo  ↔  /interactive-content-types
 * Los metadatos viven aquí mientras se integran a src/lib/seo/metadata.ts.
 */

const BASE = "https://merahki.ai";
const MEETING = "https://meetings.hubspot.com/david5040?uuid=26d4db2a-ff58-48ff-be04-a74d169db651";
export const RUTA = { es: "/es/tipos-de-contenido-interactivo", en: "/interactive-content-types" } as const;

type Copy = {
  seoTitle: string;
  description: string;
  ogAlt: string;
  home: string;
  crumb: string;
  kicker: string;
  h1: [string, string, string];
  sub: string;
  ctaCatalog: string;
  ctaQuote: string;
  ctaMeet: string;
  stats: [string, string, string, string];
  dataH2: string;
  dataP: string;
  dataTiles: { t: string; d: string }[];
  catalogH2: string;
  catalogP: string;
  howH2: string;
  howP: string;
  steps: { t: string; d: string }[];
  tableCaption: string;
  tableHead: [string, string];
  tableRows: { goal: string; ids: string[] }[];
  links: { href: string; t: string; d: string }[];
  faqH2: string;
  faq: { q: string; a: string }[];
  ctaKicker: string;
  ctaH2: string;
  ctaP: string;
  quoteHref: string;
  homeHref: string;
};

const COPY: Record<Lang, Copy> = {
  es: {
    seoTitle: "55 tipos de contenido interactivo para cursos virtuales",
    description: "Los 55 tipos de contenido interactivo que merahki.ai produce para cursos virtuales: video interactivo, escenarios, 360°, RA y quizzes, con demos en vivo.",
    ogAlt: "merahki.ai · Catálogo de 55 tipos de contenido interactivo",
    home: "Inicio",
    crumb: "Tipos de contenido interactivo",
    kicker: "¿Qué actividades puede tener tu curso virtual?",
    h1: ["El catálogo de contenidos interactivos de merahki.ai reúne ", "los 55 tipos de actividades", " que producimos para los cursos virtuales de universidades y empresas, con ejemplos que puedes probar"],
    sub: `Cada tipo trae qué es, un ejemplo de uso en el programa de muestra «Analítica de Datos para la Toma de Decisiones» y los datos que registra de cada participante. ${TOTAL_DEMOS} tienen una demo en vivo en esta página.`,
    ctaCatalog: "Ver el catálogo",
    ctaQuote: "Solicitar cotización a la medida",
    ctaMeet: "Agendar reunión de 30 minutos",
    stats: ["tipos de contenido interactivo", "categorías según la interacción", "demos en vivo para probar", "registro de cada interacción"],
    dataH2: "Cada interactividad captura la data de interacción del participante: clics, tiempos, respuestas e intentos",
    dataP: "Esos registros salen en formato xAPI y alimentan los reportes del programa por participante, por cohorte y por actividad. Con ellos ves qué contenido funciona y cuál hay que ajustar.",
    dataTiles: [
      { t: "Clics", d: "Qué abrió, qué tocó y en qué orden." },
      { t: "Tiempos", d: "Cuánto tardó en cada actividad y dónde se detuvo." },
      { t: "Respuestas", d: "Qué eligió o escribió en cada pregunta." },
      { t: "Intentos", d: "Cuántas veces lo intentó hasta lograrlo." },
    ],
    catalogH2: `Los ${TOTAL_TIPOS} tipos de contenido interactivo de merahki.ai, organizados en ${TOTAL_CATEGORIAS} categorías`,
    catalogP: "Filtra por categoría o por objetivo de aprendizaje. Abre cualquier tipo para ver el ejemplo y los datos que registra, y prueba los que tienen demo en vivo.",
    howH2: "merahki.ai elige el formato de cada actividad según la competencia que el participante debe demostrar",
    howP: "Primero definimos el resultado de aprendizaje y la evidencia. Después escogemos el tipo de contenido que produce esa evidencia y la deja registrada.",
    steps: [
      { t: "Resultado de aprendizaje", d: "Partimos de la competencia y de lo que el participante debe saber hacer al terminar cada módulo." },
      { t: "Evidencia", d: "Definimos qué tiene que producir para demostrarlo: una decisión, un cálculo, un texto o una explicación oral." },
      { t: "Formato", d: "Elegimos el tipo de contenido que genera esa evidencia y registra los datos de interacción." },
      { t: "Medición", d: "Revisamos los datos por cohorte y ajustamos las actividades que no logran el resultado." },
    ],
    tableCaption: "Formatos que solemos usar según lo que el participante debe lograr",
    tableHead: ["Lo que el participante debe lograr", "Formatos que solemos usar"],
    tableRows: [
      { goal: "Recordar conceptos y términos", ids: ["flashcards", "juego-memoria", "crucigrama"] },
      { goal: "Aplicar un procedimiento", ids: ["ordenar-parrafos", "arrastrar-soltar", "rellenar-espacios"] },
      { goal: "Tomar decisiones con información incompleta", ids: ["escenario-ramificado", "vr-learning"] },
      { goal: "Reconocer situaciones en su contexto real", ids: ["recorrido-360", "busqueda-tesoro-ra", "hotspots-imagenes"] },
      { goal: "Argumentar y comunicar", ids: ["ensayo", "grabadora-audio", "tira-estructura"] },
    ],
    links: [
      { href: "/es/methodology", t: "Metodología de diseño instruccional de merahki.ai", d: "Cómo pasamos de la competencia a los resultados de aprendizaje, las evidencias y las actividades." },
      { href: "/es/virtualizacion-de-cursos", t: "Virtualización de cursos con merahki.ai", d: "Cómo convertimos un curso presencial o un material que ya tienes en un curso virtual con estos formatos." },
    ],
    faqH2: "Preguntas frecuentes sobre los contenidos interactivos de merahki.ai",
    faq: [
      {
        q: "¿Pueden producir estos contenidos para un curso que ya tenemos?",
        a: "Sí. Revisamos contigo el curso completo, módulo por módulo, y para cada resultado de aprendizaje proponemos el formato que mejor lo evidencia. Tu equipo aprueba cada cambio antes de que lo produzcamos.",
      },
      {
        q: "¿Funcionan en nuestro LMS?",
        a: "Muchos de estos tipos se construyen sobre H5P, un estándar abierto, y funcionan en Moodle, Brightspace, Blackboard, Canvas o cualquier otro LMS que lo soporte. También funcionan en el LMS merahki.ai, que podemos operar por ti si no tienes plataforma.",
      },
      {
        q: "¿Qué datos registra cada actividad?",
        a: "Cada interactividad captura la data de interacción del participante: clics, tiempos, respuestas e intentos. Esos datos salen como registros xAPI y alimentan los reportes del programa por participante y por cohorte. Antes de producir acordamos contigo qué se mide.",
      },
      {
        q: "¿Cuántos tipos de contenido debe tener un curso?",
        a: "No hay un número fijo. Depende de lo que cada módulo debe lograr. Un módulo suele combinar un formato para presentar el contenido, otro para practicar y otro para evaluar.",
      },
      {
        q: "¿Los participantes pueden usarlos desde el celular?",
        a: "Sí. La mayoría se adapta a pantallas táctiles y funciona en el navegador del celular. Los recorridos 360° se pueden ver en el celular o con un visor, y la búsqueda del tesoro con realidad aumentada usa la cámara del teléfono. Las demos de esta página funcionan con el dedo, el mouse o el teclado.",
      },
      {
        q: "¿Cómo se cotiza la producción?",
        a: "Cotizamos por curso, según el número de módulos, la cantidad de actividades y la complejidad de cada formato. Solicita la cotización a la medida o agenda una reunión de 30 minutos y la armamos con tu programa.",
      },
    ],
    ctaKicker: "¿Cómo empezamos?",
    ctaH2: "merahki.ai cotiza los contenidos interactivos de tu curso a la medida de tus módulos y tus participantes",
    ctaP: "En una reunión de 30 minutos revisamos tu programa, te mostramos los formatos que sirven para cada módulo y después te enviamos la cotización.",
    quoteHref: "/es#cotizacion",
    homeHref: "/es",
  },
  en: {
    seoTitle: "55 interactive content types for online courses",
    description: "The 55 interactive content types merahki.ai builds for online courses: interactive video, branching scenarios, 360° tours, AR and quizzes, with live demos.",
    ogAlt: "merahki.ai · Catalog of 55 interactive content types",
    home: "Home",
    crumb: "Interactive content types",
    kicker: "What activities can your online course include?",
    h1: ["The merahki.ai interactive content catalog brings together ", "the 55 activity types", " we build for university and corporate online courses, with examples you can try"],
    sub: `Each type shows what it is, a use case from the sample program Data Analytics for Decision Making and the data it records for each learner. ${TOTAL_DEMOS} of them have a live demo on this page.`,
    ctaCatalog: "Browse the catalog",
    ctaQuote: "Request a custom quote",
    ctaMeet: "Book a 30-minute meeting",
    stats: ["interactive content types", "categories by type of interaction", "live demos to try", "record of every interaction"],
    dataH2: "Every interactive activity captures each learner's interaction data: clicks, time, answers and attempts",
    dataP: "Those records are sent as xAPI statements and feed the program reports by learner, cohort and activity. They show you which content works and which needs adjusting.",
    dataTiles: [
      { t: "Clicks", d: "What they opened, tapped and in what order." },
      { t: "Time", d: "How long each activity took and where they stopped." },
      { t: "Answers", d: "What they chose or wrote for each question." },
      { t: "Attempts", d: "How many tries it took to get it right." },
    ],
    catalogH2: `The ${TOTAL_TIPOS} merahki.ai interactive content types, grouped into ${TOTAL_CATEGORIAS} categories`,
    catalogP: "Filter by category or learning goal. Open any type to see the use case and the data it records, and try the ones marked with a live demo.",
    howH2: "merahki.ai picks the format of each activity based on the competency the learner has to demonstrate",
    howP: "We define the learning outcome and the evidence first. Then we choose the content type that produces that evidence and records it.",
    steps: [
      { t: "Learning outcome", d: "We start from the competency and what learners must be able to do at the end of each module." },
      { t: "Evidence", d: "We define what they have to produce to show it: a decision, a calculation, a text or a spoken explanation." },
      { t: "Format", d: "We choose the content type that generates that evidence and records the interaction data." },
      { t: "Measurement", d: "We review the data by cohort and adjust the activities that do not reach the outcome." },
    ],
    tableCaption: "Formats we usually use based on what the learner has to achieve",
    tableHead: ["What the learner has to achieve", "Formats we usually use"],
    tableRows: [
      { goal: "Remember concepts and terms", ids: ["flashcards", "juego-memoria", "crucigrama"] },
      { goal: "Apply a procedure", ids: ["ordenar-parrafos", "arrastrar-soltar", "rellenar-espacios"] },
      { goal: "Make decisions with incomplete information", ids: ["escenario-ramificado", "vr-learning"] },
      { goal: "Recognize situations in their real context", ids: ["recorrido-360", "busqueda-tesoro-ra", "hotspots-imagenes"] },
      { goal: "Argue and communicate", ids: ["ensayo", "grabadora-audio", "tira-estructura"] },
    ],
    links: [
      { href: "/methodology", t: "merahki.ai instructional design methodology", d: "How we go from the competency to learning outcomes, evidence and activities." },
      { href: "/course-virtualization", t: "Course virtualization with merahki.ai", d: "How we turn an in-person course or material you already have into an online course with these formats." },
    ],
    faqH2: "Frequently asked questions about merahki.ai interactive content",
    faq: [
      {
        q: "Can you build this content for a course we already have?",
        a: "Yes. We review the whole course with you, module by module, and for each learning outcome we propose the format that best shows it. Your team approves every change before we produce it.",
      },
      {
        q: "Do they work in our LMS?",
        a: "Many of these types are built on H5P, an open standard, and run in Moodle, Brightspace, Blackboard, Canvas or any other LMS that supports it. They also run in the merahki.ai LMS, which we can operate for you if you do not have a platform.",
      },
      {
        q: "What data does each activity record?",
        a: "Every interactive activity captures the learner's interaction data: clicks, time, answers and attempts. That data is sent as xAPI statements and feeds the program reports by learner and by cohort. Before production we agree with you on what gets measured.",
      },
      {
        q: "How many content types should a course have?",
        a: "There is no fixed number. It depends on what each module has to achieve. A module usually combines one format to present the content, one to practice and one to assess.",
      },
      {
        q: "Can learners use them on a phone?",
        a: "Yes. Most types adapt to touch screens and run in the phone's browser. 360° tours can be viewed on a phone or with a headset, and the augmented reality scavenger hunt uses the phone camera. The demos on this page work with a finger, a mouse or the keyboard.",
      },
      {
        q: "How is production quoted?",
        a: "We quote per course, based on the number of modules, the number of activities and the complexity of each format. Request a custom quote or book a 30-minute meeting and we will put it together with your program.",
      },
    ],
    ctaKicker: "How do we start?",
    ctaH2: "merahki.ai quotes the interactive content for your course based on your modules and your learners",
    ctaP: "In a 30-minute meeting we review your program, show you the formats that fit each module and then send you the quote.",
    quoteHref: "/#cotizacion",
    homeHref: "/",
  },
};

export function catalogoMetadata(lang: Lang): Metadata {
  const c = COPY[lang];
  const url = BASE + RUTA[lang];
  const image = `${BASE}/og/og-default-${lang}.png`;
  return {
    title: { absolute: `${c.seoTitle} | merahki.ai` },
    description: c.description,
    alternates: {
      canonical: url,
      languages: { es: BASE + RUTA.es, "en-US": BASE + RUTA.en, "x-default": BASE + RUTA.en },
    },
    openGraph: {
      title: c.seoTitle,
      description: c.description,
      url,
      siteName: "merahki.ai",
      locale: lang === "es" ? "es_CO" : "en_US",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: c.ogAlt }],
    },
    twitter: { card: "summary_large_image", title: c.seoTitle, description: c.description, site: "@merahki_ai", creator: "@merahki_ai", images: [image] },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  };
}

function jsonLd(lang: Lang) {
  const c = COPY[lang];
  const url = BASE + RUTA[lang];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: c.seoTitle,
        description: c.description,
        inLanguage: lang === "es" ? "es" : "en",
        publisher: { "@id": `${BASE}/#organization` },
        about: { "@id": `${BASE}/#organization` },
        mainEntity: { "@id": `${url}#tipos` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "ItemList",
        "@id": `${url}#tipos`,
        name: c.crumb,
        numberOfItems: TIPOS.length,
        itemListOrder: "https://schema.org/ItemListUnordered",
        itemListElement: TIPOS.map((t, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: t.nombre[lang],
          description: t.queEs[lang],
          url: `${url}#tipo-${t.id}`,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: c.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: c.home, item: `${BASE}${lang === "es" ? "/es" : "/"}` },
          { "@type": "ListItem", position: 2, name: c.crumb, item: url },
        ],
      },
    ],
  };
}

const DATA_ICONS = [MousePointerClick, Timer, CircleCheck, Repeat];

export default function CatalogoContenidos({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const stats = [String(TOTAL_TIPOS), String(TOTAL_CATEGORIAS), String(TOTAL_DEMOS), "xAPI"];
  const btnWhite = "inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC] focus-visible:ring-offset-2 focus-visible:ring-offset-black";
  const btnLine = "inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC]";

  return (
    <div className="relative min-h-screen overflow-x-clip bg-void" lang={lang}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(lang)) }} />

      {/* ── Encabezado ── */}
      <section className="relative px-6 pb-16 pt-32 md:pb-20 md:pt-40">
        <GlowBackground indigoPosition={{ x: "30%", y: "35%" }} rustPosition={{ x: "78%", y: "60%" }} />
        <div className="relative z-10 mx-auto max-w-6xl">
          <nav aria-label="breadcrumb" className="mb-8 flex flex-wrap gap-2 text-sm text-white/45">
            <Link href={c.homeHref} className="hover:text-white/80">{c.home}</Link>
            <span aria-hidden>/</span>
            <span aria-current="page" className="text-white/70">{c.crumb}</span>
          </nav>
          <span className="mb-6 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/80">{c.kicker}</span>
          <h1 className="max-w-5xl text-[2rem] font-bold leading-[1.12] tracking-tight text-white [text-wrap:balance] sm:text-5xl md:text-[3.4rem]">
            {c.h1[0]}
            <span className="bg-gradient-to-r from-[#C084FC] to-[#F472B6] bg-clip-text text-transparent">{c.h1[1]}</span>
            {c.h1[2]}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/65 md:text-xl">{c.sub}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#catalogo" className={btnWhite}>
              {c.ctaCatalog} <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a href={c.quoteHref} className={btnLine}>
              {c.ctaQuote}
            </a>
          </div>
          <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
            {stats.map((v, i) => (
              <div key={i} className="bg-[#07000d]/90 p-5 md:p-6">
                <dt className="sr-only">{c.stats[i]}</dt>
                <dd>
                  <span className="block bg-gradient-to-r from-[#C084FC] to-[#F472B6] bg-clip-text text-3xl font-extrabold tracking-tight text-transparent md:text-4xl">{v}</span>
                  <span className="mt-1 block text-sm leading-snug text-white/60">{c.stats[i]}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Datos que registra cada actividad ── */}
      <section className="relative px-6 pb-20" aria-labelledby="datos">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-[#7C3AED]/[0.14] via-white/[0.02] to-[#DB2777]/[0.08] p-6 md:grid-cols-[1.1fr_1fr] md:p-10">
          <div>
            <h2 id="datos" className="text-2xl font-bold leading-tight tracking-tight text-white [text-wrap:balance] md:text-3xl">{c.dataH2}</h2>
            <p className="mt-4 leading-relaxed text-white/65">{c.dataP}</p>
          </div>
          <ul className="grid grid-cols-2 gap-3">
            {c.dataTiles.map((d, i) => {
              const Icon = DATA_ICONS[i];
              return (
                <li key={d.t} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <Icon className="h-5 w-5 text-[#F472B6]" aria-hidden />
                  <p className="mt-3 font-semibold text-white">{d.t}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">{d.d}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── Catálogo ── */}
      <section id="catalogo" className="relative scroll-mt-24 px-4 pb-24 sm:px-6" aria-labelledby="catalogo-titulo">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-3xl">
            <h2 id="catalogo-titulo" className="text-3xl font-bold leading-tight tracking-tight text-white [text-wrap:balance] md:text-4xl">{c.catalogH2}</h2>
            <p className="mt-4 leading-relaxed text-white/65">{c.catalogP}</p>
          </div>
          <ContentExplorer lang={lang} />
        </div>
      </section>

      {/* ── Cómo elegimos el formato ── */}
      <section id="como-elegimos" className="relative px-6 pb-24" aria-labelledby="como-titulo">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h2 id="como-titulo" className="text-3xl font-bold leading-tight tracking-tight text-white [text-wrap:balance] md:text-4xl">{c.howH2}</h2>
            <p className="mt-4 leading-relaxed text-white/65">{c.howP}</p>
          </div>
          <ol className="mt-10 grid gap-3 md:grid-cols-4">
            {c.steps.map((s, i) => (
              <li key={s.t} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <span className="text-xs font-bold tabular-nums text-[#C084FC]">0{i + 1}</span>
                <p className="mt-2 font-semibold text-white">{s.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{s.d}</p>
              </li>
            ))}
          </ol>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <caption className="px-5 pt-4 text-left text-sm text-white/55">{c.tableCaption}</caption>
              <thead>
                <tr>
                  <th scope="col" className="bg-white/[0.04] px-5 py-3 font-semibold text-white">{c.tableHead[0]}</th>
                  <th scope="col" className="bg-white/[0.04] px-5 py-3 font-semibold text-white">{c.tableHead[1]}</th>
                </tr>
              </thead>
              <tbody>
                {c.tableRows.map((r) => (
                  <tr key={r.goal} className="border-t border-white/[0.08]">
                    <th scope="row" className="px-5 py-3.5 align-top font-medium text-white/85">{r.goal}</th>
                    <td className="px-5 py-3.5">
                      <ul className="flex flex-wrap gap-2">
                        {r.ids.map((id) => {
                          const tp = getTipo(id);
                          if (!tp) return null;
                          return (
                            <li key={id}>
                              <a href={`#tipo-${id}`} className="inline-flex items-center gap-1 rounded-full border border-white/15 px-3 py-1 text-white/80 transition-colors hover:border-[#C084FC] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC]">
                                {tp.nombre[lang]}
                                {tp.demo && <span className="h-1.5 w-1.5 rounded-full bg-[#F472B6]" aria-hidden />}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {c.links.map((l) => (
              <Link key={l.href} href={l.href} className="group flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC]">
                <span>
                  <span className="block font-semibold text-white">{l.t}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-white/60">{l.d}</span>
                </span>
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-white/35 transition-colors group-hover:text-white" aria-hidden />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Preguntas frecuentes ── */}
      <section className="relative px-6 pb-24" aria-labelledby="faq">
        <div className="mx-auto max-w-3xl">
          <h2 id="faq" className="text-3xl font-bold leading-tight tracking-tight text-white [text-wrap:balance] md:text-4xl">{c.faqH2}</h2>
          <div className="mt-8 space-y-3">
            {c.faq.map((f, i) => (
              <details key={f.q} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 open:bg-white/[0.05]" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC] [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="mt-0.5 text-xl leading-none text-[#C084FC] transition-transform group-open:rotate-45 motion-reduce:transition-none" aria-hidden>+</span>
                </summary>
                <p className="mt-3 leading-relaxed text-white/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cotización ── */}
      <section className="relative px-6 pb-28" aria-labelledby="cta">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(ellipse_at_15%_0%,rgba(124,58,237,0.38),transparent_60%),radial-gradient(ellipse_at_90%_100%,rgba(219,39,119,0.25),transparent_55%),#07000d] p-8 md:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C084FC]">{c.ctaKicker}</p>
          <h2 id="cta" className="mt-3 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white [text-wrap:balance] md:text-[2.6rem]">{c.ctaH2}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/70">{c.ctaP}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={c.quoteHref} className={btnWhite}>
              {c.ctaQuote} <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a href={MEETING} target="_blank" rel="noopener" className={btnLine}>
              {c.ctaMeet}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
