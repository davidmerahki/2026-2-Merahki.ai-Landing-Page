import { MetadataRoute } from "next";
import { getPath, pairedSeoRoutes } from "@/lib/seo/metadata";
import { EN_ROUTES, ES_ROUTES } from "@/lib/routes.generated";

const BASE_URL = "https://merahki.ai";
// Rutas con página ES real (generadas desde src/app/es). Solo se publica /es/<ruta> si existe.
const ES_ROUTE_SET = new Set<string>(ES_ROUTES);

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Páginas con copy SEO en seoEntries (EN + ES). Si la página ES no existe, solo va la EN.
  const pairedRoutes = pairedSeoRoutes.flatMap((entry) => {
    const enPath = getPath(entry.slug, "en");
    const esPath = getPath(entry.slug, "es");
    const enUrl = `${BASE_URL}${enPath === "/" ? "/" : enPath}`;

    if (!ES_ROUTE_SET.has(enPath)) {
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
      "es-CO": `${BASE_URL}${esPath}`,
      "x-default": enUrl,
    };

    return [
      {
        url: languages["en-US"],
        lastModified,
        changeFrequency: "monthly" as const,
        priority: entry.slug === "" ? 1 : 0.8,
        alternates: { languages },
      },
      {
        url: languages["es-CO"],
        lastModified,
        changeFrequency: "monthly" as const,
        priority: entry.slug === "" ? 0.9 : 0.7,
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
        "es-CO": `${BASE_URL}/es${enPath}`,
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
          url: languages["es-CO"],
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

  // Posts del blog: todos los src/app/blog/<slug>/page.tsx reales.
  const blogPosts = EN_ROUTES.filter((route) => route.startsWith("/blog/"));

  return [...pairedRoutes, ...localized(staticRoutes, 0.6), ...localized(blogPosts, 0.6)];
}
