import { buildFaqJsonLd, buildMetadata } from "@/lib/seo/metadata";
import HomeV4 from "@/components/landing/HomeV4";
import { getHomeFaqItems } from "@/components/landing/home-v4-copy";

export const metadata = buildMetadata("home", "es");

export default function HomePageES() {
  const faqItems = getHomeFaqItems("es");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(faqItems)) }}
      />
      <HomeV4 locale="es" />
    </>
  );
}
