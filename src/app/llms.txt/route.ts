import { articulosDe, urlDe } from "@/content/blog/registry";

// llms.txt (https://llmstxt.org): resumen del sitio para modelos de lenguaje y buscadores con IA.
// Se genera en el build con los artículos del blog que existan en ese momento.
export const dynamic = "force-static";

const B = "https://merahki.ai";

export function GET() {
  const blog = (lang: "es" | "en") =>
    articulosDe(lang).map((a) => `- [${a.title}](${urlDe(a)}): ${a.description}`).join("\n");

  const body = `# merahki.ai

> merahki.ai is a Colombian education company (Meraki Media S.A.S., Bogotá) that designs, builds online, runs and certifies training programs for universities, companies and public entities in Latin America. It designs by competencies (aligned with Colombia's National Qualifications Framework, MNC, and the CUOC occupational classification), designs micro-credentials, virtualizes courses with an AI-native production team, operates the LMS and issues verifiable digital credentials (Open Badges 3.0 / W3C Verifiable Credentials) with its partner POK. It measures results with the Kirkpatrick model (levels 1 to 4).

merahki.ai es una empresa colombiana de educación (Meraki Media S.A.S., Bogotá) que diseña, virtualiza, opera y certifica programas de formación para universidades, empresas y entidades públicas de América Latina: diseño instruccional por competencias alineado con el MNC y la CUOC, diseño de microcredenciales, virtualización de cursos, operación del LMS, credenciales digitales verificables emitidas con POK y medición de resultados con el modelo Kirkpatrick.

Key facts:
- Founder: David González (Bogotá, Colombia), also POK Country Manager for Colombia.
- Buyers: university continuing education / Lifelong Learning units, corporate L&D and academies (customer, partner and employee education), public entities.
- Since 2018: more than 20,000 hours of training virtualized.
- Credentials are issued with POK, used by more than 1,100 organizations.
- Languages: Spanish (https://merahki.ai/es) and English (https://merahki.ai).
- Contact: https://merahki.ai/es#cotizacion (custom quote form).

## Main pages (English)
- [Home](${B}/): what merahki.ai does for universities and companies, the merahki model in 7 phases, cases and FAQ.
- [Course virtualization / online course development](${B}/course-virtualization)
- [Interactive content catalog: the 55 content types merahki.ai produces, with live examples](${B}/interactive-content-types)
- [Lifelong Learning (continuing education for universities)](${B}/lifelong-learning)
- [Customer Education](${B}/customer-education)
- [Training & Certification](${B}/training-certification)
- [Certifications at scale](${B}/certification)
- [Partner academies](${B}/partner-academies)
- [Medical education](${B}/medical-education)
- [Growth for universities](${B}/growth-for-universities)
- [Methodology](${B}/methodology)
- [Case study: Uniandes × Sanofi](${B}/case-studies/uniandes-sanofi-microbiota)
- [David González, founder](${B}/david-gonzalez)

## Páginas principales (español)
- [Inicio](${B}/es): qué hace merahki.ai para universidades y empresas, el merahki model en 7 fases, casos y preguntas frecuentes.
- [Virtualización de cursos](${B}/es/virtualizacion-de-cursos)
- [Catálogo de contenidos interactivos: los 55 tipos que produce merahki.ai, con ejemplos](${B}/es/tipos-de-contenido-interactivo)
- [Lifelong Learning (educación continua para universidades)](${B}/es/lifelong-learning)
- [Customer Education](${B}/es/customer-education)
- [Formación y certificación](${B}/es/training-certification)
- [Certificación a escala](${B}/es/certification)
- [Academias de partners](${B}/es/partner-academies)
- [Educación médica](${B}/es/medical-education)
- [Metodología](${B}/es/methodology)
- [Caso: Uniandes × Sanofi](${B}/es/case-studies/uniandes-sanofi-microbiota)

## Blog (español)
${blog("es")}

## Blog (English)
${blog("en")}

## Optional
- [Sitemap](${B}/sitemap.xml)
- [Privacy policy](${B}/privacy-policy)
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
