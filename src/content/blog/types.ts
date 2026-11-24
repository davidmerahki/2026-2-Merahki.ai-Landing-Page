// Artículos del blog como datos (24-nov-2026). Cada artículo es un archivo .ts en
// src/content/blog/<lang>/<slug>.ts que exporta `articulo`, y se registra en registry.ts.
// La plantilla (src/components/blog/ArticleView.tsx) pinta el artículo y genera sola
// los metadatos, el JSON-LD (BlogPosting, FAQPage, BreadcrumbList), las fuentes y el hreflang.

export type Lang = "es" | "en";

/** Texto con HTML en línea permitido: <strong>, <em>, <a href="...">. Los enlaces externos reciben target y rel solos. */
export type Html = string;

export type Bloque =
  | { t: "p"; html: Html }
  | { t: "h2"; text: string; id?: string }
  | { t: "h3"; text: string }
  | { t: "ul"; items: Html[] }
  | { t: "ol"; items: Html[] }
  /** Cita textual corta (máximo una por artículo y menos de 15 palabras si es de un tercero). */
  | { t: "quote"; text: string; cite: string; href?: string }
  /** Cifras destacadas. Cada cifra lleva su fuente. */
  | { t: "stats"; items: { value: string; label: string; source: string; href?: string }[] }
  | { t: "table"; head: string[]; rows: Html[][]; caption?: string }
  | { t: "callout"; title?: string; html: Html }
  /** Llamado a la acción de merahki.ai (cotización a la medida). */
  | { t: "cta"; html?: Html };

export interface Fuente {
  title: string;
  publisher: string;
  url: string;
  date?: string;
  note?: string;
}

export interface Articulo {
  slug: string;
  lang: Lang;
  /** Slug de la versión en el otro idioma, si existe. */
  altSlug?: string;
  /** H1 visible: dice qué es, para quién y para qué (regla 19). */
  title: string;
  /** Título para Google (≤ 60 caracteres aprox., sin la marca: la plantilla añade « | merahki.ai»). */
  seoTitle: string;
  /** Meta descripción (≤ 155 caracteres). */
  description: string;
  /** Categoría corta que va sobre el título. */
  kicker: string;
  keywords: string[];
  /** Fechas ISO (AAAA-MM-DD). */
  published: string;
  updated?: string;
  readingMinutes: number;
  /** Respuesta corta: 3 a 5 viñetas que resumen el artículo (la leen personas, Google y los LLM). */
  summary: Html[];
  body: Bloque[];
  faq: { q: string; a: Html }[];
  sources: Fuente[];
  /** Si el artículo adapta otro texto, cuál es: se cita arriba y abajo con enlace a la fuente. */
  adaptedFrom?: { title: string; publisher: string; url: string; date?: string };
  /** Slugs (mismo idioma) de artículos relacionados. */
  related?: string[];
  /** Página de servicio (no artículo): ruta propia, JSON-LD Service, sin firma ni fecha. */
  servicio?: { path: string; altPath?: string; serviceType: string };
}
