import { buildFaqJsonLd, buildMetadata } from "@/lib/seo/metadata";
import HomeUniversidades from "@/components/landing/universidades/HomeUniversidades";
import { HOME_FAQ_EMPRESAS } from "@/components/landing/universidades/home-faq-empresas";
import { HOME_HTML_EMPRESAS } from "@/components/landing/universidades/home-html-empresas";

/** Home para empresas (26-nov-2026): mismo molde del home de universidades, con el copy y los loops de empresa. */
export const metadata = buildMetadata("empresas", "es");

export default function HomeEmpresasPageES() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(HOME_FAQ_EMPRESAS)) }}
      />
      <HomeUniversidades lang="es" aud="empresas" html={HOME_HTML_EMPRESAS} />
    </>
  );
}
