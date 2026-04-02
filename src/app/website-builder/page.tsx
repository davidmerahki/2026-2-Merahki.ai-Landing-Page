import type { Metadata } from "next";
import WebsiteBuilderClient from "./WebsiteBuilderClient";

export const metadata: Metadata = {
  title: "Website Builder",
  description:
    "We build conversion-first academy websites from the ground up. Our expert team handles the entire lifecycle — from strategic design to technical deployment.",
  openGraph: {
    title: "Website Builder — merahki.ai",
    description:
      "Conversion-first academy websites built by education growth experts. Strategy, design, development, and deployment — end to end.",
    url: "https://merahki.ai/website-builder",
    type: "website",
  },
};

export default function WebsiteBuilderPage() {
  return <WebsiteBuilderClient />;
}
