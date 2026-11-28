import { buildFaqJsonLd, buildMetadata } from "@/lib/seo/metadata";
import HomeUniversidades from "@/components/landing/universidades/HomeUniversidades";
import { HOME_FAQ_GOVERNMENTS } from "@/components/landing/universidades/home-faq-governments";
import { HOME_HTML_GOVERNMENTS } from "@/components/landing/universidades/home-html-governments";

/** Home para gobiernos en inglés (27-nov-2026): la versión de /es/gobiernos, con el copy y los loops de entidad pública en inglés. */
export const metadata = buildMetadata("gobiernos", "en");

export default function HomeGovernmentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(HOME_FAQ_GOVERNMENTS)) }}
      />
      <HomeUniversidades lang="en" aud="gobiernos" html={HOME_HTML_GOVERNMENTS} />
    </>
  );
}
