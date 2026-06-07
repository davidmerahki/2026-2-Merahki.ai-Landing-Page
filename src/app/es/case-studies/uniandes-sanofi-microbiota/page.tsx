import { buildArticleJsonLd, buildMetadata } from "@/lib/seo/metadata";
import UniandesSanofiCaseStudy from "@/components/case-studies/UniandesSanofiCaseStudy";

const slug = "case-studies/uniandes-sanofi-microbiota";

export const metadata = buildMetadata(slug, "es");

export default function Page() {
  const articleJsonLd = buildArticleJsonLd(slug, "es", "2022-01-01");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <UniandesSanofiCaseStudy locale="es" />
    </>
  );
}
