import { buildFaqJsonLd, buildMetadata } from "@/lib/seo/metadata";
import HomeUniversidades from "@/components/landing/universidades/HomeUniversidades";
import { HOME_FAQ_GOBIERNOS } from "@/components/landing/universidades/home-faq-gobiernos";
import { HOME_HTML_GOBIERNOS } from "@/components/landing/universidades/home-html-gobiernos";

/** Home para gobiernos (27-nov-2026): mismo molde del home de universidades, con el copy, la sección de contratación y los loops de entidad pública. */
export const metadata = buildMetadata("gobiernos", "es");

export default function HomeGobiernosPageES() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(HOME_FAQ_GOBIERNOS)) }}
      />
      <HomeUniversidades lang="es" aud="gobiernos" html={HOME_HTML_GOBIERNOS} />
    </>
  );
}
