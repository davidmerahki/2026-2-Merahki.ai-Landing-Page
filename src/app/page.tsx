import { buildFaqJsonLd, buildMetadata } from "@/lib/seo/metadata";
import HomeV4 from "@/components/landing/HomeV4";
import { getHomeFaqItems } from "@/components/landing/home-v4-copy";

export const metadata = buildMetadata("home", "en");

export default function HomePage() {
  const faqItems = getHomeFaqItems("en");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(faqItems)) }}
      />
      <HomeV4 locale="en" />
    </>
  );
}
