import type { Metadata } from "next";
import WebsiteBuilderClientEs from "./WebsiteBuilderClientEs";

export const metadata: Metadata = {
  title: "Website Creation Service",
  description:
    "Construimos sitios web de academia conversion-first desde cero. Nuestro equipo experto gestiona todo el ciclo de vida — desde el diseño estratégico hasta el despliegue técnico.",
  openGraph: {
    title: "Website Creation Service — merahki.ai",
    description:
      "Sitios web de academia conversion-first construidos por expertos en education growth. Estrategia, diseño, desarrollo y despliegue — end to end.",
    url: "https://merahki.ai/es/website-builder",
    type: "website",
  },
  alternates: {
    canonical: "https://merahki.ai/es/website-builder",
    languages: { en: "https://merahki.ai/website-builder" },
  },
};

export default function WebsiteBuilderEsPage() {
  return <WebsiteBuilderClientEs />;
}
