import { MetadataRoute } from "next";

const BASE_URL = "https://merahki.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/education-led-growth",
    "/customer-education",
    "/partner-academies",
    "/product-adoption",
    "/training-certification",
    "/certification",
    "/flexible-courses",
    "/ai-assistant",
    "/mobile-app-builder",
    "/interactive-video",
    "/analytics-reports",
    "/integrations",
    "/blog",
    "/case-studies",
    "/reports",
    "/webinars",
    "/events",
  ];

  const esRoutes = [
    "/es",
    "/es/customer-education",
    "/es/partner-academies",
    "/es/product-adoption",
    "/es/training-certification",
    "/es/certification",
    "/es/marketing-your-courses",
    "/es/flexible-courses",
    "/es/mobile-app-builder",
    "/es/analytics-reports",
    "/es/website-builder",
    "/es/interactive-video",
    "/es/survey-builder",
    "/es/ai-assistant",
    "/es/live-sessions",
    "/es/integrations",
  ];

  return [
    ...routes.map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...esRoutes.map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "/es" ? 0.9 : 0.7,
    })),
  ];
}
