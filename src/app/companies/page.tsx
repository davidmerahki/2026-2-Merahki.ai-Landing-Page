import { buildFaqJsonLd, buildMetadata } from "@/lib/seo/metadata";
import HomeUniversidades from "@/components/landing/universidades/HomeUniversidades";
import { HOME_FAQ_COMPANIES } from "@/components/landing/universidades/home-faq-companies";
import { HOME_HTML_COMPANIES } from "@/components/landing/universidades/home-html-companies";

/** Home para empresas en inglés (26-nov-2026): la versión de /es/empresas, con el copy y los loops de empresa en inglés. */
export const metadata = buildMetadata("empresas", "en");

export default function HomeCompaniesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(HOME_FAQ_COMPANIES)) }}
      />
      <HomeUniversidades lang="en" aud="empresas" html={HOME_HTML_COMPANIES} />
    </>
  );
}
