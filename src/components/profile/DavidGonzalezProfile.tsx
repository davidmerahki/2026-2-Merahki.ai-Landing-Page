import Image from "next/image";
import Link from "next/link";
import { Download, Mail, ArrowRight, Linkedin } from "lucide-react";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { buildFaqJsonLd } from "@/lib/seo/metadata";

/**
 * Página de perfil de David González — /david-gonzalez y /es/david-gonzalez.
 *
 * Objetivo: posicionar la entidad "David González" (fundador de merahki.ai,
 * Country Manager de POK Colombia) en buscadores y LLMs. No está en el menú
 * (se llega por búsqueda, sitemap o link directo), pero SÍ es indexable: vive
 * en seoEntries → sitemap con hreflang, y expone Person + ProfilePage + FAQ
 * en JSON-LD para el knowledge graph.
 *
 * La foto de prensa se sirve optimizada (next/image) y el JPG original
 * (3568×5352) queda descargable en /images/david/david-gonzalez.jpg.
 */

const PHOTO_PATH = "/images/david/david-gonzalez.jpg";
const PERSON_ID = "https://merahki.ai/david-gonzalez#person";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/david-gonzalez-educacion-edtech-inteligencia-artificial/";

/**
 * Fila descargable del kit de prensa. Señala la descarga explícitamente:
 * badge de formato + flecha ↓, con hover claro. El nombre del archivo lo
 * define `downloadName` (foto) o el propio archivo (bios .txt).
 */
function DownloadRow({
  href,
  downloadName,
  label,
  badge,
}: {
  href: string;
  downloadName?: string;
  label: string;
  badge: string;
}) {
  return (
    <a
      href={href}
      download={downloadName ?? true}
      className="group flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 hover:border-white/30 hover:bg-white/[0.05] transition-colors"
    >
      <span className="text-sm font-medium text-white/85 group-hover:text-white transition-colors">
        {label}
      </span>
      <span className="flex items-center gap-2 flex-shrink-0">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-white/45 border border-white/15 rounded px-1.5 py-0.5">
          {badge}
        </span>
        <Download className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" aria-hidden="true" />
      </span>
    </a>
  );
}

const copy = {
  es: {
    eyebrow: "Perfil oficial",
    name: "David González",
    fullName: "David Mauricio González Roa",
    roles: "Fundador de merahki.ai · Country Manager Colombia de POK",
    location: "Bogotá, Colombia",
    photoAlt:
      "David González, fundador de merahki.ai y Country Manager de POK para Colombia — foto de prensa oficial",
    contact: "Escribir a David",
    pressKitTitle: "Kit de prensa",
    pressKitHint: "Descarga la bio y la foto listas para publicar.",
    pressKitPhoto: "Foto de prensa",
    pressKitFounderLabel: "Como fundador de merahki.ai",
    pressKitPokLabel: "Como Country Manager de POK",
    bioShortLabel: "Bio corta",
    bioFullLabel: "Bio completa",
    shortBioFile: "/bios/david-gonzalez-bio-corta.txt",
    fullBioFile: "/bios/david-gonzalez-bio-completa.txt",
    pokShortBioFile: "/bios/david-gonzalez-bio-pok-corta.txt",
    pokFullBioFile: "/bios/david-gonzalez-bio-pok-completa.txt",
    bioTitle: "Bio oficial",
    bio: [
      "David González defiende una idea simple: la formación que no se puede medir no se puede defender. Sobre esa convicción construyó su carrera.",
      "Es fundador de merahki.ai, compañía B2B de tecnología educativa que, con un criterio basado en datos, diseña, virtualiza, produce y mide programas de aprendizaje para universidades, gobiernos y empresas. Desde 2018 ha producido más de 20.000 horas de formación en línea que han capacitado a miles de profesionales en siete países de Latinoamérica. Su portafolio cruza tres mundos que rara vez se tocan: la educación médica continua de farmacéuticas como Novartis, AstraZeneca, Sanofi, Novo Nordisk y Abbott; los programas públicos de la Escuela de Gobierno de la Universidad de los Andes, el Banco Interamericano de Desarrollo y la Agencia Atenea; y la formación para el empleo con Colombia Productiva, el Consejo Danés para Refugiados y la Cámara Colombo-Japonesa de Comercio e Industria.",
      "Es además Country Manager para Colombia de POK (Proof of Knowledge), la infraestructura de Skills Intelligence que conecta educación, habilidades y empleo: más de 1.100 instituciones en 20 países la usan. Las credenciales de primera generación documentaban un logro; las de segunda generación generan datos e inteligencia, y POK construye esa segunda generación. Cada credencial deja de ser un punto final: se convierte en un nodo que conecta lo que la institución enseña, las habilidades que desarrolla y los resultados profesionales que genera.",
      "Desde Bogotá, David lidera la expansión de POK en el ecosistema educativo colombiano en tres frentes: las principales universidades del país, públicas y privadas; las cajas de compensación, que forman a decenas de miles de trabajadores cada año; y las entidades de gobierno que necesitan dejar evidencia auditable de su formación. Ese trabajo pasa por las redes donde el sector se encuentra — ACIET, ASCUN, ASCOFADE, RECLA y REALCUP — con una misma conversación: qué habilidades enseña realmente cada programa, qué demanda el mercado y qué debería aprender cada persona después.",
      "Las dos cosas son un solo trabajo: diseñar experiencias de aprendizaje que funcionan, medirlas con learning analytics e iterarlas con evidencia, y darle a quien aprende un reconocimiento que puede probar.",
    ],
    factsTitle: "Datos rápidos",
    facts: [
      ["Rol actual", "Fundador de merahki.ai y Country Manager para Colombia de POK (Proof of Knowledge)"],
      ["Trayectoria", "Diseño, virtualización, producción y medición de programas de aprendizaje desde 2018"],
      ["Enfoque", "Decisiones basadas en datos: learning analytics e iteración continua de cada programa"],
      ["Alcance", "Más de 20.000 horas de formación en línea producidas en 7 países de Latinoamérica"],
      ["POK", "Skills Intelligence & Credential Infrastructure — la infraestructura que conecta educación, habilidades y empleo. 1.100+ instituciones en 20 países"],
      ["Expansión POK", "Lidera la adopción de Skills Intelligence y credenciales verificables en universidades, cajas de compensación y sector público en Colombia"],
      ["Sectores", "Educación médica continua, gobierno y políticas públicas, formación corporativa y empleabilidad"],
      ["Base", "Bogotá, Colombia — trabaja en español e inglés"],
    ],
    topicsTitle: "Temas de charla y panel",
    topics: [
      "Microcredenciales: diseño, emisión y adopción institucional",
      "Education-Led Growth: la educación como motor de crecimiento B2B",
      "Skills Intelligence: de emitir credenciales a entender habilidades, brechas y empleabilidad",
      "Learning analytics: medir el impacto del aprendizaje con datos e iterar con evidencia",
      "Virtualización de programas de educación continua a escala",
    ],
    linksTitle: "En este sitio",
    links: [
      { href: "/es", label: "merahki.ai — qué hacemos" },
      { href: "/es/case-studies", label: "Casos de estudio" },
      { href: "/es/methodology", label: "Metodología" },
    ],
    faq: [
      {
        question: "¿Quién es David González?",
        answer:
          "David Mauricio González Roa es un emprendedor colombiano de tecnología educativa, fundador de merahki.ai y Country Manager para Colombia de POK (Proof of Knowledge). Desde 2018 ha diseñado y producido más de 20.000 horas de formación en línea para organizaciones como Novartis, AstraZeneca, Sanofi, el Banco Interamericano de Desarrollo y la Universidad de los Andes, en siete países de Latinoamérica.",
      },
      {
        question: "¿Qué es merahki.ai?",
        answer:
          "merahki.ai es una compañía B2B de tecnología educativa fundada por David González. Con un criterio basado en datos, diseña, virtualiza, produce y mide microcredenciales y programas de aprendizaje para universidades, gobiernos y empresas, usando learning analytics para medir cada etapa e iterar los programas con evidencia.",
      },
      {
        question: "¿Qué hace David González en POK?",
        answer:
          "Como Country Manager para Colombia de POK (Proof of Knowledge), David González lidera la expansión de la infraestructura de Skills Intelligence en el país. POK usa cada credencial como un nodo que conecta lo que una institución enseña con las habilidades que desarrolla y los resultados profesionales que genera; la emisión de credenciales verificables es la puerta de entrada gratuita, no el producto. Acompaña a las principales universidades, cajas de compensación y entidades del sector público, y participa en las redes del ecosistema: ACIET, ASCUN, ASCOFADE, RECLA y REALCUP.",
      },
      {
        question: "¿Sobre qué temas habla David González como speaker?",
        answer:
          "Microcredenciales, Education-Led Growth, credenciales digitales verificables (Open Badges 3.0 y blockchain), medición del impacto del aprendizaje y virtualización de educación continua a escala. Para invitarlo a un evento o panel: david@merahki.ai.",
      },
    ],
  },
  en: {
    eyebrow: "Official profile",
    name: "David González",
    fullName: "David Mauricio González Roa",
    roles: "Founder of merahki.ai · POK Country Manager, Colombia",
    location: "Bogotá, Colombia",
    photoAlt:
      "David González, founder of merahki.ai and POK Country Manager for Colombia — official press photo",
    contact: "Email David",
    pressKitTitle: "Press kit",
    pressKitHint: "Download a ready-to-publish bio and photo.",
    pressKitPhoto: "Press photo",
    pressKitFounderLabel: "As founder of merahki.ai",
    pressKitPokLabel: "As POK Country Manager",
    bioShortLabel: "Short bio",
    bioFullLabel: "Full bio",
    shortBioFile: "/bios/david-gonzalez-bio-short.txt",
    fullBioFile: "/bios/david-gonzalez-bio-full.txt",
    pokShortBioFile: "/bios/david-gonzalez-bio-pok-short.txt",
    pokFullBioFile: "/bios/david-gonzalez-bio-pok-full.txt",
    bioTitle: "Official bio",
    bio: [
      "David González stands behind one simple idea: learning you can't measure is learning you can't defend. He built his career on that conviction.",
      "He is the founder of merahki.ai, a B2B education technology company that, guided by data at every step, designs, virtualizes, produces, and measures learning programs for universities, governments, and enterprises. Since 2018 he has produced more than 20,000 hours of online learning that have trained thousands of professionals across seven Latin American countries. His portfolio spans three worlds that rarely meet: continuing medical education for pharmaceutical companies such as Novartis, AstraZeneca, Sanofi, Novo Nordisk, and Abbott; public programs with Universidad de los Andes' School of Government, the Inter-American Development Bank, and Agencia Atenea; and workforce training with Colombia Productiva, the Danish Refugee Council, and the Colombian-Japanese Chamber of Commerce and Industry.",
      "He is also POK's (Proof of Knowledge) Country Manager for Colombia. POK is the Skills Intelligence infrastructure connecting education, skills, and work: more than 1,100 institutions across 20 countries use it. First-generation credentials documented an achievement; second-generation credentials generate data and intelligence, and POK is building that second generation. Each credential stops being an endpoint: it becomes a node connecting what an institution teaches, the skills it develops, and the career outcomes it produces.",
      "From Bogotá, David leads POK's expansion across Colombia's education ecosystem on three fronts: the country's leading universities, public and private; the cajas de compensación — employer-funded welfare funds that train tens of thousands of workers every year; and the government institutions that need auditable evidence of their training. That work runs through the networks where the sector meets — ACIET, ASCUN, ASCOFADE, RECLA, and REALCUP — carrying one conversation: which skills each program actually teaches, what the labor market demands, and what each person should learn next.",
      "Both jobs are really one: designing learning experiences that work, measuring them with learning analytics, iterating on the evidence, and giving learners recognition they can prove.",
    ],
    factsTitle: "Quick facts",
    facts: [
      ["Current roles", "Founder of merahki.ai and POK (Proof of Knowledge) Country Manager for Colombia"],
      ["Track record", "Designing, virtualizing, producing, and measuring learning programs since 2018"],
      ["Approach", "Data-driven decisions: learning analytics and continuous iteration on every program"],
      ["Reach", "20,000+ hours of online learning produced across 7 Latin American countries"],
      ["POK", "Skills Intelligence & Credential Infrastructure — connecting education, skills, and work. 1,100+ institutions in 20 countries"],
      ["POK expansion", "Leads the adoption of Skills Intelligence and verifiable credentials across universities, cajas de compensación, and the public sector in Colombia"],
      ["Sectors", "Continuing medical education, government and public policy, corporate and workforce training"],
      ["Base", "Bogotá, Colombia — works in Spanish and English"],
    ],
    topicsTitle: "Speaking and panel topics",
    topics: [
      "Micro-credentials: design, issuance, and institutional adoption",
      "Education-Led Growth: education as a B2B growth engine",
      "Skills Intelligence: from issuing credentials to understanding skills, gaps, and employability",
      "Learning analytics: measuring learning impact with data and iterating on evidence",
      "Virtualizing continuing education programs at scale",
    ],
    linksTitle: "On this site",
    links: [
      { href: "/", label: "merahki.ai — what we do" },
      { href: "/case-studies", label: "Case studies" },
      { href: "/methodology", label: "Methodology" },
    ],
    faq: [
      {
        question: "Who is David González?",
        answer:
          "David Mauricio González Roa is a Colombian education technology entrepreneur, founder of merahki.ai and POK's (Proof of Knowledge) Country Manager for Colombia. Since 2018 he has designed and produced more than 20,000 hours of online learning for organizations including Novartis, AstraZeneca, Sanofi, the Inter-American Development Bank, and Universidad de los Andes, across seven Latin American countries.",
      },
      {
        question: "What is merahki.ai?",
        answer:
          "merahki.ai is a B2B education technology company founded by David González. Guided by data, it designs, virtualizes, produces, and measures micro-credentials and learning programs for universities, governments, and enterprises, using learning analytics to measure every stage and iterate on each program with evidence.",
      },
      {
        question: "What does David González do at POK?",
        answer:
          "As POK's (Proof of Knowledge) Country Manager for Colombia, David González leads the expansion of the Skills Intelligence infrastructure in the country. POK uses each credential as a node connecting what an institution teaches with the skills it develops and the career outcomes it produces; issuing verifiable credentials is the free entry point, not the product. He works with leading universities, cajas de compensación (employer-funded welfare and training funds), and public-sector institutions, and is active in the education ecosystem's networks: ACIET, ASCUN, ASCOFADE, RECLA, and REALCUP.",
      },
      {
        question: "What topics does David González speak about?",
        answer:
          "Micro-credentials, Education-Led Growth, verifiable digital credentials (Open Badges 3.0 and blockchain), measuring learning impact, and virtualizing continuing education at scale. To invite him to an event or panel: david@merahki.ai.",
      },
    ],
  },
} as const;

function buildPersonJsonLd(locale: "es" | "en") {
  const t = copy[locale];
  const pageUrl =
    locale === "en"
      ? "https://merahki.ai/david-gonzalez"
      : "https://merahki.ai/es/david-gonzalez";
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: "David Mauricio González Roa",
        alternateName: ["David González", "David González Roa"],
        givenName: "David Mauricio",
        familyName: "González Roa",
        jobTitle: [
          locale === "en" ? "Founder, merahki.ai" : "Fundador, merahki.ai",
          locale === "en"
            ? "Country Manager Colombia, POK (Proof of Knowledge)"
            : "Country Manager Colombia, POK (Proof of Knowledge)",
        ],
        worksFor: [
          { "@id": "https://merahki.ai/#organization" },
          {
            "@type": "Organization",
            name: "POK (Proof of Knowledge)",
            url: "https://pok.tech",
          },
        ],
        image: {
          "@type": "ImageObject",
          url: `https://merahki.ai${PHOTO_PATH}`,
          width: 3568,
          height: 5352,
          caption: t.photoAlt,
        },
        url: pageUrl,
        email: "mailto:david@merahki.ai",
        sameAs: [LINKEDIN_URL],
        nationality: { "@type": "Country", name: "Colombia" },
        homeLocation: { "@type": "Place", name: "Bogotá, Colombia" },
        knowsLanguage: ["es", "en"],
        knowsAbout: [
          "Micro-credentials",
          "Verifiable digital credentials",
          "Open Badges 3.0",
          "Education-Led Growth",
          "Learning analytics",
          "Instructional design",
          "Continuing education",
          "EdTech",
          "Digital badges",
          "Corporate training",
        ],
      },
      {
        "@type": "ProfilePage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: copy[locale].name,
        inLanguage: locale === "en" ? "en-US" : "es-CO",
        mainEntity: { "@id": PERSON_ID },
        isPartOf: { "@id": "https://merahki.ai/#website" },
      },
    ],
  };
}

export default function DavidGonzalezProfile({ locale }: { locale: "es" | "en" }) {
  const t = copy[locale];
  const personJsonLd = buildPersonJsonLd(locale);
  const faqJsonLd = buildFaqJsonLd([...t.faq]);

  return (
    <div className="relative min-h-screen bg-void text-white overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── Hero del perfil ── */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="absolute inset-0" aria-hidden="true">
          <GlowBackground
            indigoPosition={{ x: "20%", y: "20%" }}
            rustPosition={{ x: "85%", y: "80%" }}
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-[280px_1fr] gap-10 items-start">
          <AnimatedSection>
            <figure className="space-y-4">
              <Image
                src={PHOTO_PATH}
                alt={t.photoAlt}
                width={280}
                height={420}
                sizes="280px"
                priority
                className="rounded-3xl border border-white/15 shadow-2xl w-full max-w-[280px] mx-auto"
              />
              <figcaption className="sr-only">{t.photoAlt}</figcaption>
            </figure>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <p className="text-xs uppercase tracking-[0.25em] text-accent-peach mb-4">
              {t.eyebrow}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {t.name}
            </h1>
            <p className="mt-2 text-white/40 text-sm">{t.fullName}</p>
            <p className="mt-4 text-lg md:text-xl text-white/80 leading-relaxed">
              {t.roles}
            </p>
            <p className="mt-1 text-white/50">{t.location}</p>
            {/* Contacto */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="mailto:david@merahki.ai"
                className="inline-flex items-center gap-2 rounded-full bg-white text-black font-semibold px-5 py-2.5 text-sm hover:bg-white/90 transition-colors"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                {t.contact}
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 text-white/80 font-medium px-5 py-2.5 text-sm hover:border-white/45 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
                LinkedIn
              </a>
            </div>

            {/* Kit de prensa — descargas agrupadas por rol */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-6">
              <div className="flex items-center gap-2 mb-1">
                <Download className="w-4 h-4 text-accent-peach" aria-hidden="true" />
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                  {t.pressKitTitle}
                </h2>
              </div>
              <p className="text-sm text-white/45 mb-5">{t.pressKitHint}</p>

              <DownloadRow
                href={PHOTO_PATH}
                downloadName="david-gonzalez-merahki-pok.jpg"
                label={t.pressKitPhoto}
                badge="JPG"
              />

              <p className="mt-5 mb-2 text-sm font-medium text-white/55">
                {t.pressKitFounderLabel}
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                <DownloadRow href={t.shortBioFile} label={t.bioShortLabel} badge="TXT" />
                <DownloadRow href={t.fullBioFile} label={t.bioFullLabel} badge="TXT" />
              </div>

              <p className="mt-4 mb-2 text-sm font-medium text-white/55">
                {t.pressKitPokLabel}
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                <DownloadRow href={t.pokShortBioFile} label={t.bioShortLabel} badge="TXT" />
                <DownloadRow href={t.pokFullBioFile} label={t.bioFullLabel} badge="TXT" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Bio larga ── */}
      <section className="relative py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">{t.bioTitle}</h2>
          </AnimatedSection>
          <div className="space-y-6">
            {t.bio.map((paragraph) => (
              <AnimatedSection key={paragraph.slice(0, 40)}>
                <p className="text-white/75 text-lg leading-relaxed">{paragraph}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Datos rápidos ── */}
      <section className="relative py-14 px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">{t.factsTitle}</h2>
          </AnimatedSection>
          <dl className="space-y-5">
            {t.facts.map(([label, value]) => (
              <AnimatedSection key={label}>
                <div className="grid sm:grid-cols-[180px_1fr] gap-1 sm:gap-6">
                  <dt className="text-white/45 text-sm uppercase tracking-wider pt-0.5">
                    {label}
                  </dt>
                  <dd className="text-white/80 leading-relaxed">{value}</dd>
                </div>
              </AnimatedSection>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Temas de charla ── */}
      <section className="relative py-14 px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">{t.topicsTitle}</h2>
          </AnimatedSection>
          <ul className="space-y-3">
            {t.topics.map((topic) => (
              <AnimatedSection key={topic}>
                <li className="flex items-start gap-3 text-white/80 leading-relaxed">
                  <ArrowRight
                    className="w-4 h-4 mt-1.5 text-accent-peach shrink-0"
                    aria-hidden="true"
                  />
                  {topic}
                </li>
              </AnimatedSection>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ visible (espejo del JSON-LD) ── */}
      <section className="relative py-14 px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto space-y-8">
          {t.faq.map((item) => (
            <AnimatedSection key={item.question}>
              <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
              <p className="text-white/70 leading-relaxed">{item.answer}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── Links internos (entidad ↔ sitio) ── */}
      <section className="relative py-14 px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl font-bold mb-6">{t.linksTitle}</h2>
            <ul className="space-y-2">
              {t.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-accent-blue hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
