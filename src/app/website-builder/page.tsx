import { buildMetadata, buildServiceJsonLd } from "@/lib/seo/metadata";
import WebsiteBuilderClient from "./WebsiteBuilderClient";

export const metadata = buildMetadata("website-builder", "en");

const serviceJsonLd = buildServiceJsonLd("website-builder", "en");

export default function WebsiteBuilderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <WebsiteBuilderClient />
    </>
  );
}
