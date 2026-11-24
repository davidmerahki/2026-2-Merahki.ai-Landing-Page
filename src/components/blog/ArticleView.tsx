import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GlowBackground from "@/components/ui/GlowBackground";
import BlogBackLink from "@/components/blog/BlogBackLink";
import type { Articulo, Bloque } from "@/content/blog/types";
import { BASE_URL, alterno, getArticulo, pathDe, urlDe } from "@/content/blog/registry";

const MEETING = "https://meetings.hubspot.com/david5040?uuid=26d4db2a-ff58-48ff-be04-a74d169db651";

const T = {
  es: {
    blog: "Blog", home: "Inicio", short: "Respuesta corta", toc: "En este artículo", faq: "Preguntas frecuentes",
    sources: "Fuentes", adapted: "Adaptación de", adaptedNote: "Este artículo adapta y comenta un texto publicado originalmente por",
    readOriginal: "Lee el original", min: "min de lectura", updated: "Actualizado", by: "Por",
    authorRole: "Fundador de merahki.ai y Country Manager de POK en Colombia",
    ctaTitle: "¿Necesitas diseñar o virtualizar un programa a la medida?",
    ctaText: "merahki.ai diseña por competencias, virtualiza, opera y certifica programas para universidades y empresas.",
    ctaQuote: "Solicitar cotización a la medida", ctaMeet: "Agendar reunión de 30 minutos", related: "Sigue leyendo",
    homeQuote: "/es#cotizacion",
  },
  en: {
    blog: "Blog", home: "Home", short: "Short answer", toc: "In this article", faq: "Frequently asked questions",
    sources: "Sources", adapted: "Adapted from", adaptedNote: "This article adapts and comments on a text originally published by",
    readOriginal: "Read the original", min: "min read", updated: "Updated", by: "By",
    authorRole: "Founder of merahki.ai and POK Country Manager for Colombia",
    ctaTitle: "Need a custom program designed or built online?",
    ctaText: "merahki.ai designs by competencies, builds online, runs and certifies programs for universities and companies.",
    ctaQuote: "Request a custom quote", ctaMeet: "Book a 30-minute meeting", related: "Keep reading",
    homeQuote: "/#cotizacion",
  },
} as const;

const slugify = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/** Enlaces externos con target y rel; los internos quedan igual. */
function html(s: string) {
  return s.replace(/<a href="(https?:\/\/(?!merahki\.ai)[^"]+)"(?![^>]*target=)/g, '<a href="$1" target="_blank" rel="noopener"');
}

const fecha = (iso: string, lang: "es" | "en") =>
  new Date(iso + "T12:00:00Z").toLocaleDateString(lang === "es" ? "es-CO" : "en-US", { year: "numeric", month: "long", day: "numeric" });

export function articleMetadata(a: Articulo): Metadata {
  const alt = alterno(a);
  const url = urlDe(a);
  const image = `${BASE_URL}/og/og-default-${a.lang}.png`;
  const languages: Record<string, string> = { [a.lang === "es" ? "es" : "en-US"]: url };
  const altUrl = a.servicio?.altPath ? BASE_URL + a.servicio.altPath : alt ? urlDe(alt) : undefined;
  if (altUrl) languages[a.lang === "es" ? "en-US" : "es"] = altUrl;
  languages["x-default"] = a.lang === "en" ? url : altUrl || url;
  return {
    title: { absolute: `${a.seoTitle} | merahki.ai` },
    description: a.description,
    keywords: a.keywords,
    authors: [{ name: "David González", url: `${BASE_URL}${a.lang === "es" ? "/es" : ""}/david-gonzalez` }],
    alternates: { canonical: url, languages },
    openGraph: {
      title: a.title, description: a.description, url, type: a.servicio ? "website" : "article", siteName: "merahki.ai",
      locale: a.lang === "es" ? "es_CO" : "en_US", publishedTime: a.published, modifiedTime: a.updated || a.published,
      authors: ["David González"], images: [{ url: image, width: 1200, height: 630, alt: a.title }],
    },
    twitter: { card: "summary_large_image", title: a.title, description: a.description, images: [image], site: "@merahki_ai" },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  };
}

function jsonLd(a: Articulo) {
  const t = T[a.lang];
  const url = urlDe(a);
  const blogUrl = `${BASE_URL}${a.lang === "es" ? "/es" : ""}/blog`;
  const plain = (s: string) => s.replace(/<[^>]+>/g, "");
  if (a.servicio) {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": `${url}#service`,
          name: a.seoTitle,
          serviceType: a.servicio.serviceType,
          description: a.description,
          url,
          inLanguage: a.lang === "es" ? "es" : "en",
          provider: { "@id": `${BASE_URL}/#organization` },
          areaServed: ["CO", "MX", "PE", "CL", "EC", "AR", "US"],
          audience: { "@type": "Audience", audienceType: a.lang === "es" ? "Universidades, empresas y entidades públicas" : "Universities, companies and public entities" },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: t.home, item: `${BASE_URL}${a.lang === "es" ? "/es" : "/"}` },
            { "@type": "ListItem", position: 2, name: a.seoTitle, item: url },
          ],
        },
        ...(a.faq.length
          ? [{ "@type": "FAQPage", mainEntity: a.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: plain(f.a) } })) }]
          : []),
      ],
    };
  }
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: a.title,
        name: a.seoTitle,
        description: a.description,
        inLanguage: a.lang === "es" ? "es" : "en",
        datePublished: a.published,
        dateModified: a.updated || a.published,
        url,
        mainEntityOfPage: url,
        image: `${BASE_URL}/og/og-default-${a.lang}.png`,
        keywords: a.keywords.join(", "),
        articleSection: a.kicker,
        author: { "@type": "Person", "@id": `${BASE_URL}/david-gonzalez#person`, name: "David González", url: `${BASE_URL}/david-gonzalez`, jobTitle: t.authorRole },
        publisher: { "@id": `${BASE_URL}/#organization` },
        citation: a.sources.map((s) => ({ "@type": "CreativeWork", name: s.title, url: s.url, publisher: { "@type": "Organization", name: s.publisher } })),
        ...(a.adaptedFrom ? { isBasedOn: { "@type": "CreativeWork", name: a.adaptedFrom.title, url: a.adaptedFrom.url, publisher: { "@type": "Organization", name: a.adaptedFrom.publisher } } } : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t.home, item: `${BASE_URL}${a.lang === "es" ? "/es" : "/"}` },
          { "@type": "ListItem", position: 2, name: t.blog, item: blogUrl },
          { "@type": "ListItem", position: 3, name: a.title, item: url },
        ],
      },
      ...(a.faq.length
        ? [{ "@type": "FAQPage", mainEntity: a.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: plain(f.a) } })) }]
        : []),
    ],
  };
}

function Cta({ a, text }: { a: Articulo; text?: string }) {
  const t = T[a.lang];
  return (
    <aside className="my-12 rounded-2xl border border-white/10 bg-white/[0.04] p-8 space-y-4">
      <p className="text-xl font-semibold text-white">{t.ctaTitle}</p>
      <p className="text-white/65 leading-relaxed" dangerouslySetInnerHTML={{ __html: html(text || t.ctaText) }} />
      <div className="flex flex-wrap gap-3 pt-1">
        <a href={t.homeQuote} className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm">
          {t.ctaQuote} <ArrowRight className="w-4 h-4" />
        </a>
        <a href={MEETING} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white border border-white/25 hover:border-white/50 transition-all text-sm">
          {t.ctaMeet}
        </a>
      </div>
    </aside>
  );
}

function BloqueView({ b, a }: { b: Bloque; a: Articulo }) {
  switch (b.t) {
    case "p":
      return <p dangerouslySetInnerHTML={{ __html: html(b.html) }} />;
    case "h2":
      return <h2 id={b.id || slugify(b.text)}>{b.text}</h2>;
    case "h3":
      return <h3>{b.text}</h3>;
    case "ul":
      return <ul>{b.items.map((i, k) => <li key={k} dangerouslySetInnerHTML={{ __html: html(i) }} />)}</ul>;
    case "ol":
      return <ol>{b.items.map((i, k) => <li key={k} dangerouslySetInnerHTML={{ __html: html(i) }} />)}</ol>;
    case "quote":
      return (
        <blockquote>
          <p>“{b.text}”</p>
          <cite>— {b.href ? <a href={b.href} target="_blank" rel="noopener">{b.cite}</a> : b.cite}</cite>
        </blockquote>
      );
    case "stats":
      return (
        <div className="art-stats not-prose">
          {b.items.map((s, k) => (
            <figure key={k}>
              <strong>{s.value}</strong>
              <figcaption>
                {s.label}
                <span>{s.href ? <a href={s.href} target="_blank" rel="noopener">{s.source}</a> : s.source}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      );
    case "table":
      return (
        <div className="art-table">
          <table>
            {b.caption && <caption>{b.caption}</caption>}
            <thead><tr>{b.head.map((h, k) => <th key={k} scope="col">{h}</th>)}</tr></thead>
            <tbody>{b.rows.map((r, k) => <tr key={k}>{r.map((c, j) => <td key={j} dangerouslySetInnerHTML={{ __html: html(c) }} />)}</tr>)}</tbody>
          </table>
        </div>
      );
    case "callout":
      return (
        <div className="art-callout">
          {b.title && <p className="art-callout-t">{b.title}</p>}
          <p dangerouslySetInnerHTML={{ __html: html(b.html) }} />
        </div>
      );
    case "cta":
      return <Cta a={a} text={b.html} />;
  }
}

export default function ArticleView({ a }: { a: Articulo }) {
  const t = T[a.lang];
  const toc = a.body.filter((b): b is Extract<Bloque, { t: "h2" }> => b.t === "h2");
  const related = (a.related || []).map((s) => getArticulo(a.lang, s)).filter((x): x is Articulo => !!x);
  const hasCta = a.body.some((b) => b.t === "cta");
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden" lang={a.lang}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(a)) }} />
      <section className="relative pt-32 pb-10 px-6">
        <GlowBackground indigoPosition={{ x: "25%", y: "35%" }} rustPosition={{ x: "75%", y: "65%" }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <nav aria-label="breadcrumb" className="text-sm text-white/45 mb-6 flex gap-2 flex-wrap">
            <Link href={a.lang === "es" ? "/es" : "/"} className="hover:text-white/80">{t.home}</Link>
            {!a.servicio && (<><span>/</span><Link href={a.lang === "es" ? "/es/blog" : "/blog"} className="hover:text-white/80">{t.blog}</Link></>)}
          </nav>
          <span className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-white/80 text-xs font-semibold tracking-widest uppercase mb-5">{a.kicker}</span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">{a.title}</h1>
          <p className="mt-5 text-lg md:text-xl text-white/65 leading-relaxed">{a.description}</p>
          {!a.servicio && <div className="mt-7 flex items-center gap-3 text-sm text-white/55">
            <div className="w-10 h-10 rounded-full bg-accent-purple/20 flex items-center justify-center text-sm font-bold text-accent-purple" aria-hidden>DG</div>
            <div>
              <p className="text-white/85">{t.by} <Link href={a.lang === "es" ? "/es/david-gonzalez" : "/david-gonzalez"} className="underline decoration-white/30 hover:decoration-white">David González</Link></p>
              <p>
                <time dateTime={a.published}>{fecha(a.published, a.lang)}</time>
                {a.updated && a.updated !== a.published && <> · {t.updated} <time dateTime={a.updated}>{fecha(a.updated, a.lang)}</time></>}
                {" "}· {a.readingMinutes} {t.min}
              </p>
            </div>
          </div>}
          {a.adaptedFrom && (
            <p className="mt-6 text-sm text-white/60 border-l-2 border-accent-purple/60 pl-4">
              {t.adapted} <a href={a.adaptedFrom.url} target="_blank" rel="noopener" className="underline text-white/85">«{a.adaptedFrom.title}»</a>, {a.adaptedFrom.publisher}.
            </p>
          )}
        </div>
      </section>

      <article className="relative px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-7 mb-10">
            <p className="text-xs font-bold tracking-widest uppercase text-accent-purple mb-3">{t.short}</p>
            <ul className="space-y-2 text-white/80 leading-relaxed list-disc pl-5">
              {a.summary.map((s, k) => <li key={k} dangerouslySetInnerHTML={{ __html: html(s) }} />)}
            </ul>
          </div>

          {toc.length > 2 && (
            <nav aria-label={t.toc} className="mb-10 text-sm">
              <p className="text-white/45 uppercase tracking-widest text-xs font-bold mb-3">{t.toc}</p>
              <ol className="space-y-1.5 list-decimal pl-5 text-white/70">
                {toc.map((h, k) => <li key={k}><a href={`#${h.id || slugify(h.text)}`} className="hover:text-white">{h.text}</a></li>)}
              </ol>
            </nav>
          )}

          <div className="art-body">
            {a.body.map((b, k) => <BloqueView key={k} b={b} a={a} />)}
          </div>

          {!hasCta && <Cta a={a} />}

          {a.faq.length > 0 && (
            <section className="mt-14" aria-labelledby="faq">
              <h2 id="faq" className="text-2xl md:text-3xl font-bold mb-6">{t.faq}</h2>
              <div className="space-y-3">
                {a.faq.map((f, k) => (
                  <details key={k} className="rounded-xl border border-white/10 bg-white/[0.03] p-5 group" open={k === 0}>
                    <summary className="cursor-pointer font-semibold text-white/90">{f.q}</summary>
                    <p className="mt-3 text-white/70 leading-relaxed" dangerouslySetInnerHTML={{ __html: html(f.a) }} />
                  </details>
                ))}
              </div>
            </section>
          )}

          {(a.sources.length > 0 || a.adaptedFrom) && <section className="mt-14 text-sm" aria-labelledby="fuentes">
            <h2 id="fuentes" className="text-xl font-bold mb-4">{t.sources}</h2>
            {a.adaptedFrom && (
              <p className="mb-4 text-white/65">
                {t.adaptedNote} {a.adaptedFrom.publisher}: <a href={a.adaptedFrom.url} target="_blank" rel="noopener" className="underline text-white/85">{a.adaptedFrom.title}</a>{a.adaptedFrom.date ? ` (${a.adaptedFrom.date})` : ""}. {t.readOriginal} →
              </p>
            )}
            <ol className="space-y-2 list-decimal pl-5 text-white/65">
              {a.sources.map((s, k) => (
                <li key={k}>
                  <a href={s.url} target="_blank" rel="noopener" className="underline decoration-white/30 hover:text-white">{s.title}</a> — {s.publisher}{s.date ? `, ${s.date}` : ""}{s.note ? `. ${s.note}` : ""}
                </li>
              ))}
            </ol>
          </section>}

          {!a.servicio && <div className="mt-12 flex items-start gap-4 rounded-2xl border border-white/10 p-6">
            <div className="w-12 h-12 shrink-0 rounded-full bg-accent-purple/20 flex items-center justify-center font-bold text-accent-purple" aria-hidden>DG</div>
            <div className="text-sm text-white/65 leading-relaxed">
              <p className="text-white font-semibold"><Link href={a.lang === "es" ? "/es/david-gonzalez" : "/david-gonzalez"}>David González</Link></p>
              <p>{t.authorRole}.</p>
            </div>
          </div>}

          {related.length > 0 && (
            <section className="mt-14">
              <h2 className="text-xl font-bold mb-4">{t.related}</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={pathDe(r)} className="block h-full rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:border-white/25">
                      <span className="text-xs uppercase tracking-widest text-accent-purple font-bold">{r.kicker}</span>
                      <span className="block mt-2 font-semibold text-white/90">{r.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {!a.servicio && <div className="mt-12"><BlogBackLink /></div>}
        </div>
      </article>
    </div>
  );
}
