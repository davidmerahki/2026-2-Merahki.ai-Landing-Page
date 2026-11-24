import type { Metadata } from "next";
import GuiaCredencialesDigitales from "@/app/blog/guia-credenciales-digitales/page";

export const metadata: Metadata = {
  title: "Guía Integral: Cómo Evaluar una Plataforma de Credenciales Digitales",
  description:
    "Marco completo de due diligence, auditoría técnica, validación funcional, pruebas de verificabilidad, checklist documental y matriz comparativa para universidades.",
  openGraph: {
    title: "Guía Integral: Cómo Evaluar una Plataforma de Credenciales Digitales",
    description:
      "Marco completo para que universidades evalúen plataformas de credenciales digitales con rigor técnico, operativo, legal y funcional.",
    url: "https://merahki.ai/es/blog/guia-credenciales-digitales",
    type: "article",
  },
  // Traducciones declaradas (24-nov-2026): hreflang para Google y para el botón de idioma.
  alternates: { canonical: "https://merahki.ai/es/blog/guia-credenciales-digitales", languages: { es: "https://merahki.ai/es/blog/guia-credenciales-digitales", "en-US": "https://merahki.ai/blog/how-to-evaluate-digital-credentials-platform", "x-default": "https://merahki.ai/blog/how-to-evaluate-digital-credentials-platform" } },
};

export default GuiaCredencialesDigitales;
