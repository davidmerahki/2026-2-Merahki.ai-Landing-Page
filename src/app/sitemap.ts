import { MetadataRoute } from "next";
import { getPath, pairedSeoRoutes } from "@/lib/seo/metadata";
import { EN_ROUTES, ES_ROUTES } from "@/lib/routes.generated";
import { ARTICULOS } from "@/content/blog/registry.generated";
import { alterno, urlDe } from "@/content/blog/registry";

const BASE_URL = "https://merahki.ai";
// Rutas con página ES real (generadas desde src/app/es). Solo se publica /es/<ruta> si existe.
const ES_ROUTE_SET = new Set<string>(ES_ROUTES);

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Páginas con copy SEO en seoEntries (EN + ES). Si la página ES no existe, solo va la EN.
  const pairedRoutes = pairedSeoRoutes.flatMap((entry) => {
    const enPath = getPath(entry.slug, "en");
    const esPath = getPath(entry.slugEs ?? entry.slug, "es");
    const enUrl = `${BASE_URL}${enPath === "/" ? "/" : enPath}`;
    // ES_ROUTES guarda las rutas en español sin el prefijo /es ("/empresas"); el home es "/".
    const esKey = esPath === "/es" ? "/" : esPath.slice(3);

    if (!ES_ROUTE_SET.has(esKey)) {
      return [
        {
          url: enUrl,
          lastModified,
          changeFrequency: "monthly" as const,
          priority: 0.8,
        },
      ];
    }

    const languages = {
      "en-US": enUrl,
      es: `${BASE_URL}${esPath}`,
      "x-default": enUrl,
    };

    return [
      {
        url: languages["en-US"],
        lastModified,
        changeFrequency: "monthly" as const,
        priority: entry.slug === "" ? 1 : entry.type === "home" ? 0.9 : 0.8,
        alternates: { languages },
      },
      {
        url: languages.es,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: entry.slug === "" || entry.type === "home" ? 0.9 : 0.7,
        alternates: { languages },
      },
    ];
  });

  // Páginas con metadata propia (sin entrada en seoEntries). Se emite la versión ES
  // con hreflang solo cuando la página existe bajo src/app/es.
  const localized = (paths: readonly string[], priority: number) =>
    paths.flatMap((enPath) => {
      const enUrl = `${BASE_URL}${enPath}`;
      if (!ES_ROUTE_SET.has(enPath)) {
        return [{ url: enUrl, lastModified, changeFrequency: "monthly" as const, priority }];
      }
      const languages = {
        "en-US": enUrl,
        es: `${BASE_URL}/es${enPath}`,
        "x-default": enUrl,
      };
      return [
        {
          url: languages["en-US"],
          lastModified,
          changeFrequency: "monthly" as const,
          priority,
          alternates: { languages },
        },
        {
          url: languages.es,
          lastModified,
          changeFrequency: "monthly" as const,
          priority: Math.round((priority - 0.1) * 10) / 10,
          alternates: { languages },
        },
      ];
    });

  const staticRoutes = [
    "/education-led-growth",
    "/case-studies",
    "/careers",
    "/events",
    "/webinars",
    "/privacy-policy",
  ];

  // Posts del blog: todos los src/app/blog/<slug>/page.tsx reales, salvo los que solo existen en español
  // (redirigen a /es/blog/<slug> en next.config.ts): esos se publican solo con su URL en español.
  const SOLO_ES = new Set(["guia-credenciales-digitales", "microcredenciales-nueva-arquitectura-aprendizaje", "que-hace-merahki", "reporte-2026-education-led-growth"].map((s) => `/blog/${s}`));
  const blogPosts = EN_ROUTES.filter((route) => route.startsWith("/blog/") && !SOLO_ES.has(route));
  const blogEs = [...SOLO_ES].filter((route) => ES_ROUTE_SET.has(route)).map((route) => ({
    url: `${BASE_URL}/es${route}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  // Artículos escritos como datos (src/content/blog): cada idioma con su URL y su hreflang.
  const articulos = ARTICULOS.map((a) => {
    const alt = alterno(a);
    const languages: Record<string, string> = { [a.lang === "es" ? "es" : "en-US"]: urlDe(a) };
    if (alt) languages[alt.lang === "es" ? "es" : "en-US"] = urlDe(alt);
    return {
      url: urlDe(a),
      lastModified: new Date((a.updated || a.published) + "T12:00:00Z"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      ...(alt ? { alternates: { languages } } : {}),
    };
  });

  // Páginas de servicio con ruta propia en cada idioma (24-nov-2026).
  const servicios = [["/course-virtualization", "/es/virtualizacion-de-cursos"], ["/interactive-content-types", "/es/tipos-de-contenido-interactivo"]].flatMap(([en, es]) => {
    const languages = { "en-US": `${BASE_URL}${en}`, es: `${BASE_URL}${es}`, "x-default": `${BASE_URL}${en}` };
    return [
      { url: languages["en-US"], lastModified, changeFrequency: "monthly" as const, priority: 0.8, alternates: { languages } },
      { url: languages.es, lastModified, changeFrequency: "monthly" as const, priority: 0.8, alternates: { languages } },
    ];
  });

  return [...pairedRoutes, ...localized(staticRoutes, 0.6), ...localized(blogPosts, 0.6), ...blogEs, ...articulos, ...servicios];
}
