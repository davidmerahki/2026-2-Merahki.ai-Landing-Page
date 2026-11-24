import { buildFaqJsonLd, buildMetadata } from "@/lib/seo/metadata";
import HomeUniversidades from "@/components/landing/universidades/HomeUniversidades";
import { HOME_HTML_EN } from "@/components/landing/universidades/home-html-en";
import { HOME_FAQ_EN } from "@/components/landing/universidades/home-faq-en";

export const metadata = buildMetadata("home", "en");

// Home en inglés (24-nov-2026): la misma v8 del merahki model que /es, traducida (prototipo v8-en del vault).
// El home anterior (HomeV4) sigue en el repo, pero ya no tiene ruta.
export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(HOME_FAQ_EN)) }}
      />
      <HomeUniversidades lang="en" html={HOME_HTML_EN} />
    </>
  );
}
