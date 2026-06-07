import { MetadataRoute } from "next";
import { getPath, pairedSeoRoutes } from "@/lib/seo/metadata";

const BASE_URL = "https://merahki.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/case-studies",
    "/careers",
    "/events",
    "/webinars",
    "/privacy-policy",
  ];

  const pairedRoutes = pairedSeoRoutes.flatMap((entry) => {
    const enPath = getPath(entry.slug, "en");
    const esPath = getPath(entry.slug, "es");
    const languages = {
      "en-US": `${BASE_URL}${enPath === "/" ? "/" : enPath}`,
      "es-CO": `${BASE_URL}${esPath}`,
      "x-default": `${BASE_URL}${enPath === "/" ? "/" : enPath}`,
    };

    return [
      {
        url: languages["en-US"],
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: entry.slug === "" ? 1 : 0.8,
        alternates: { languages },
      },
      {
        url: languages["es-CO"],
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: entry.slug === "" ? 0.9 : 0.7,
        alternates: { languages },
      },
    ];
  });

  return [
    ...pairedRoutes,
    ...staticRoutes.map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
