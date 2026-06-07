import { buildMetadata, buildServiceJsonLd } from "@/lib/seo/metadata";
import WebsiteBuilderClientEs from "./WebsiteBuilderClientEs";

export const metadata = buildMetadata("website-builder", "es");

const serviceJsonLd = buildServiceJsonLd("website-builder", "es");

export default function WebsiteBuilderEsPage() {
  return <WebsiteBuilderClientEs />;
}
