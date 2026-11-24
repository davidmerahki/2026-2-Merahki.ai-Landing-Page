import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CircleCheck, MousePointerClick, Repeat, Timer } from "lucide-react";
import GlowBackground from "@/components/ui/GlowBackground";
import GaleriaExperiencias from "@/components/contenidos/GaleriaExperiencias";
import { EXPERIENCIAS, FAMILIAS, ICAP, TOTAL_EXPERIENCIAS, type Lang } from "@/content/contenidos/experiencias";

/**
 * Catálogo de experiencias de aprendizaje (24-nov-2026). Reemplaza el catálogo de 55 tipos.
 * Rutas: /es/tipos-de-contenido-interactivo  ↔  /interactive-content-types (se conservan por posicionamiento).
 * Diseño aprobado: «🚀 merahki.ai/Sitio merahki.ai - Catálogo de experiencias de aprendizaje (diseño 2026-11-24).md».
 */

const BASE = "https://merahki.ai";
const MEETING = "https://meetings.hubspot.com/david5040?uuid=26d4db2a-ff58-48ff-be04-a74d169db651";
export const RUTA = { es: "/es/tipos-de-contenido-interactivo", en: "/interactive-content-types" } as const;

const N = TOTAL_EXPERIENCIAS;
const CON_FUENTE = EXPERIENCIAS.filter((e) => e.fuente).length;

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
  howH2: string;
  howP: string;
  steps: { t: string; d: string }[];
  catalogH2: string;
  catalogP: string;
  formatos: string;
  dataH2: string;
  dataP: string;
  dataTiles: { t: string; d: string }[];
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
    seoTitle: "Experiencias interactivas para cursos virtuales, con demo",
    description: "Copiloto estudiantil con IA, simuladores, 360°, realidad aumentada y diagnóstico de entrada: experiencias con demo que merahki.ai produce para tus cursos.",
    ogAlt: "merahki.ai · Catálogo de experiencias de aprendizaje con demo",
    home: "Inicio",
    crumb: "Experiencias de aprendizaje",
    kicker: "¿Qué experiencias puede tener tu curso virtual?",
    h1: ["El catálogo de merahki.ai reúne ", `${N} experiencias de aprendizaje con demo`, " para universidades y empresas que quieren cursos en los que el participante practica y cada avance se mide"],
    sub: "Cada experiencia tiene una demo que puedes probar aquí mismo, la investigación que explica por qué funciona y los datos que deja para medir el avance de cada participante.",
    ctaCatalog: "Ver las experiencias",
    ctaQuote: "Solicitar cotización a la medida",
    ctaMeet: "Agendar reunión de 30 minutos",
    stats: ["experiencias de aprendizaje con demo", "familias según lo que hace el participante", "experiencias con investigación citada", "cada interacción queda registrada"],
    howH2: "merahki.ai eligió estas experiencias con el marco ICAP, que relaciona lo que hace el participante con lo que aprende",
    howP: "Según el marco ICAP, se aprende más cuando el participante conversa o construye algo que cuando solo mira o lee. Cada experiencia del catálogo cumple tres condiciones.",
    steps: [
      { t: "Evidencia publicada", d: "Un mecanismo de aprendizaje con investigación citada y verificada en su fuente original." },
      { t: "Demo que se puede probar", d: "Una versión funcional con el programa de ejemplo, para que veas lo que va a vivir tu participante." },
      { t: "Datos para medir", d: "Cada interacción queda registrada con el estándar xAPI y llega al informe de resultados." },
    ],
    catalogH2: "Las experiencias de aprendizaje están organizadas en cuatro familias según lo que hace el participante",
    catalogP: "Abre cualquier experiencia para probar la demo con el programa de ejemplo «Analítica de Datos para la Toma de Decisiones», ver un caso por sector y los videos de referencia del mercado.",
    formatos: "También producimos los formatos estándar de cualquier LMS, en SCORM y H5P: cuestionarios, arrastrar y soltar, líneas de tiempo, flashcards y más.",
    dataH2: "Cada experiencia deja datos para medir el avance de cada participante",
    dataP: "Las experiencias registran clics, tiempos, respuestas, intentos y rutas con el estándar xAPI. Esos datos alimentan el seguimiento semanal de la cohorte y el informe de resultados del programa.",
    dataTiles: [
      { t: "Interacciones", d: "Qué abrió, qué tocó y qué decisiones tomó cada participante." },
      { t: "Tiempo", d: "Cuánto se quedó en cada actividad y dónde se detuvo." },
      { t: "Respuestas y puntaje", d: "Qué respondió, qué acertó y qué temas le cuestan." },
      { t: "Intentos y rutas", d: "Cuántas veces lo intentó y por qué camino llegó al resultado." },
    ],
    links: [
      { href: "/es/virtualizacion-de-cursos", t: "Virtualización de cursos", d: "Cómo llevamos un curso presencial a un programa virtual que se mide." },
      { href: "/es/methodology", t: "Metodología", d: "Diseño instruccional por competencias, del resultado de aprendizaje a la evidencia." },
    ],
    faqH2: "Preguntas frecuentes sobre las experiencias de aprendizaje",
    faq: [
      { q: "¿Qué es una experiencia de aprendizaje interactiva?", a: "Es una actividad en la que el participante hace algo con el contenido: conversa con una IA, mueve una variable, decide en un caso o responde y recibe una explicación al instante. Así practica lo que va a usar en su trabajo, y cada interacción queda registrada para medir su avance." },
      { q: "¿El copiloto estudiantil usa IA de verdad?", a: "Sí. En los programas, el copiloto responde con IA conectada al contenido del curso y con barandas: no da las respuestas de los talleres calificados y le avisa al docente cuando alguien se atasca. En esta página la demo usa un guion para mostrar cómo se comporta." },
      { q: "¿Funcionan en mi LMS?", a: "Sí. Las experiencias se entregan en SCORM, xAPI o como página embebida, y funcionan en Moodle, Blackboard, Brightspace, Canvas o cualquier otro LMS. Si no tienes uno, las montamos en el LMS merahki.ai." },
      { q: "¿Las empresas de los videos de referencia son aliadas de merahki.ai?", a: "No. Son ejemplos públicos de lo que hoy existe en el mercado. Según el caso, merahki.ai desarrolla una experiencia parecida, integra la herramienta en tu LMS o la licencia para tu programa." },
      { q: "¿Cómo se cotizan las experiencias?", a: "Con la solicitud de cotización a la medida. Nos cuentas el programa, los módulos y cuántas personas lo van a tomar, y te enviamos la propuesta con las experiencias que encajan en cada módulo." },
    ],
    ctaKicker: "¿Cómo empezamos?",
    ctaH2: "merahki.ai cotiza las experiencias de tu curso según tus módulos y tus participantes",
    ctaP: "En una reunión de 30 minutos revisamos tu programa, te mostramos las experiencias que encajan en cada módulo y después te enviamos la cotización.",
    quoteHref: "/es#cotizacion",
    homeHref: "/es",
  },
  en: {
    seoTitle: "Interactive learning experiences for online courses",
    description: "Student AI copilot, simulations, 360° tours, augmented reality and entry diagnostics: learning experiences with live demos that merahki.ai builds for your courses.",
    ogAlt: "merahki.ai · Catalog of learning experiences with live demos",
    home: "Home",
    crumb: "Learning experiences",
    kicker: "What experiences can your online course include?",
    h1: ["The merahki.ai catalog brings together ", `${N} learning experiences with live demos`, " for universities and companies that want courses where learners practice and every step of progress is measured"],
    sub: "Each experience comes with a demo you can try right here, the research that explains why it works and the data it records to measure each learner's progress.",
    ctaCatalog: "See the experiences",
    ctaQuote: "Request a custom quote",
    ctaMeet: "Book a 30-minute meeting",
    stats: ["learning experiences with a demo", "families based on what the learner does", "experiences backed by cited research", "every interaction is recorded"],
    howH2: "merahki.ai chose these experiences with the ICAP framework, which links what learners do to what they learn",
    howP: "According to the ICAP framework, people learn more when they talk through ideas or build something than when they only watch or read. Every experience in the catalog meets three conditions.",
    steps: [
      { t: "Published evidence", d: "A learning mechanism backed by research, cited and checked against its original source." },
      { t: "A demo you can try", d: "A working version with the sample program, so you can see what your learners will experience." },
      { t: "Data to measure", d: "Every interaction is recorded with the xAPI standard and feeds the results report." },
    ],
    catalogH2: "The learning experiences are grouped into four families based on what the learner does",
    catalogP: "Open any experience to try the demo with the sample program “Data Analytics for Decision Making”, see an industry example and watch market reference videos.",
    formatos: "We also produce the standard formats for any LMS, in SCORM and H5P: quizzes, drag and drop, timelines, flashcards and more.",
    dataH2: "Every experience records data to measure each learner's progress",
    dataP: "The experiences record clicks, time, answers, attempts and paths with the xAPI standard. That data feeds the weekly cohort follow-up and the program's results report.",
    dataTiles: [
      { t: "Interactions", d: "What each learner opened, touched and decided." },
      { t: "Time", d: "How long they spent on each activity and where they stopped." },
      { t: "Answers and score", d: "What they answered, what they got right and which topics are hard for them." },
      { t: "Attempts and paths", d: "How many tries it took and which path led them to the result." },
    ],
    links: [
      { href: "/course-virtualization", t: "Course virtualization", d: "How we turn a face-to-face course into an online program you can measure." },
      { href: "/methodology", t: "Methodology", d: "Competency-based instructional design, from learning outcome to evidence." },
    ],
    faqH2: "Frequently asked questions about the learning experiences",
    faq: [
      { q: "What is an interactive learning experience?", a: "It is an activity where learners do something with the content: talk with an AI, move a variable, decide in a case, or answer and get an instant explanation. They practice what they will use at work, and every interaction is recorded to measure their progress." },
      { q: "Does the student copilot use real AI?", a: "Yes. In our programs, the copilot answers with AI connected to the course content and with guardrails: it does not give away graded assignment answers and it alerts the teacher when someone gets stuck. On this page the demo follows a script to show how it behaves." },
      { q: "Do they work in my LMS?", a: "Yes. The experiences are delivered as SCORM, xAPI or an embedded page, and they work in Moodle, Blackboard, Brightspace, Canvas or any other LMS. If you do not have one, we set them up in the merahki.ai LMS." },
      { q: "Are the companies in the reference videos merahki.ai partners?", a: "No. They are public examples of what exists in the market today. Depending on the case, merahki.ai builds a similar experience, integrates the tool into your LMS or licenses it for your program." },
      { q: "How are the experiences quoted?", a: "Through the custom quote request. Tell us about the program, its modules and how many people will take it, and we send you a proposal with the experiences that fit each module." },
    ],
    ctaKicker: "How do we start?",
    ctaH2: "merahki.ai quotes the experiences for your course based on your modules and your learners",
    ctaP: "In a 30-minute meeting we review your program, show you the experiences that fit each module and then send you the quote.",
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
        mainEntity: { "@id": `${url}#experiencias` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "ItemList",
        "@id": `${url}#experiencias`,
        name: c.crumb,
        numberOfItems: EXPERIENCIAS.length,
        itemListOrder: "https://schema.org/ItemListUnordered",
        itemListElement: EXPERIENCIAS.map((e, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: e.nombre[lang],
          description: e.queHace[lang],
          url: `${url}#exp-${e.id}`,
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

export default function CatalogoExperiencias({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const stats = [String(N), String(FAMILIAS.length), String(CON_FUENTE), "xAPI"];
  const btnWhite =
    "inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC] focus-visible:ring-offset-2 focus-visible:ring-offset-black";
  const btnLine =
    "inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC]";

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
            <a href="#experiencias" className={btnWhite}>
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

      {/* ── Cómo elegimos ── */}
      <section id="como-elegimos" className="relative px-6 pb-20" aria-labelledby="como-titulo">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h2 id="como-titulo" className="text-3xl font-bold leading-tight tracking-tight text-white [text-wrap:balance] md:text-4xl">{c.howH2}</h2>
            <p className="mt-4 leading-relaxed text-white/65">
              {c.howP}{" "}
              <a href={ICAP.url} target="_blank" rel="noopener" className="text-[#C4B5FD] underline-offset-4 hover:underline">
                {ICAP.cita}
              </a>
            </p>
          </div>
          <ol className="mt-8 grid gap-3 md:grid-cols-3">
            {c.steps.map((s, i) => (
              <li key={s.t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <span className="text-xs font-bold tabular-nums text-[#C084FC]">0{i + 1}</span>
                <p className="mt-2 font-semibold text-white">{s.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Experiencias por familia ── */}
      <section id="experiencias" className="relative scroll-mt-24 px-4 pb-24 sm:px-6" aria-labelledby="experiencias-titulo">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <h2 id="experiencias-titulo" className="text-3xl font-bold leading-tight tracking-tight text-white [text-wrap:balance] md:text-4xl">{c.catalogH2}</h2>
            <p className="mt-4 leading-relaxed text-white/65">{c.catalogP}</p>
          </div>
          <GaleriaExperiencias lang={lang} />
          <p className="mt-14 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-relaxed text-white/65">{c.formatos}</p>
        </div>
      </section>

      {/* ── Datos que deja cada experiencia ── */}
      <section className="relative px-6 pb-24" aria-labelledby="datos">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-[#7C3AED]/[0.14] via-white/[0.02] to-[#DB2777]/[0.08] p-6 md:grid-cols-[1.1fr_1fr] md:p-10">
          <div>
            <h2 id="datos" className="text-2xl font-bold leading-tight tracking-tight text-white [text-wrap:balance] md:text-3xl">{c.dataH2}</h2>
            <p className="mt-4 leading-relaxed text-white/65">{c.dataP}</p>
            <div className="mt-8 grid gap-3">
              {c.links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-black/30 p-4 transition-colors hover:border-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC]"
                >
                  <span>
                    <span className="block font-semibold text-white">{l.t}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-white/60">{l.d}</span>
                  </span>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-white/35 transition-colors group-hover:text-white" aria-hidden />
                </Link>
              ))}
            </div>
          </div>
          <ul className="grid grid-cols-2 content-start gap-3">
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
