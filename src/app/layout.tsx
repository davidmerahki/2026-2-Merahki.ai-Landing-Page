import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PerksCarousel from "@/components/sections/PerksCarousel";

export const metadata: Metadata = {
  title: {
    default: "merahki.ai — Education-Led Growth Ecosystem",
    template: "%s — merahki.ai",
  },
  description:
    "Transform your education approach into a growth engine for lasting impact on customers, leads and partners.",
  keywords: "education-led growth, LMS, customer education, partner training, AI learning platform",
  metadataBase: new URL("https://merahki.ai"),
  openGraph: {
    title: "merahki.ai — Education-Led Growth Ecosystem",
    description:
      "Transform your education approach into a growth engine for lasting impact on customers, leads and partners.",
    type: "website",
    url: "https://merahki.ai",
    siteName: "merahki.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "merahki.ai — Education-Led Growth Ecosystem",
    description: "AI-powered education that drives retention, adoption, and revenue at scale.",
    site: "@merahkiai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-void text-white font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <PerksCarousel />
        <Footer />
        <Script
          src="https://apps.clientify.net/widget-whatsapp2.0/app/assets/index-5yccDyx4.js?id=359676c1-a1ad-463d-8061-00a7b3de531f&path=https://plus.clientify.com"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
