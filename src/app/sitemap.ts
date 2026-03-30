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
    "/blog",
    "/case-studies",
    "/reports",
    "/webinars",
    "/events",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
