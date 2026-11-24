import { buildFaqJsonLd, buildMetadata } from "@/lib/seo/metadata";
import HomeUniversidades from "@/components/landing/universidades/HomeUniversidades";
import { HOME_FAQ } from "@/components/landing/universidades/home-faq";
import { HOME_HTML } from "@/components/landing/universidades/home-html";

export const metadata = buildMetadata("home", "es");

export default function HomePageES() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(HOME_FAQ)) }}
      />
      <HomeUniversidades lang="es" html={HOME_HTML} />
    </>
  );
}
