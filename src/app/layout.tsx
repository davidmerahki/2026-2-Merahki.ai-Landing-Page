import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "merahki.ai — Education-Led Growth Platform",
    template: "%s — merahki.ai",
  },
  description:
    "Transform your education approach into a growth engine for lasting impact on customers, leads and partners.",
  keywords: "education-led growth, LMS, customer education, partner training, AI learning platform",
  metadataBase: new URL("https://merahki.ai"),
  openGraph: {
    title: "merahki.ai — Education-Led Growth Platform",
    description:
      "Transform your education approach into a growth engine for lasting impact on customers, leads and partners.",
    type: "website",
    url: "https://merahki.ai",
    siteName: "merahki.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "merahki.ai — Education-Led Growth Platform",
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
        <Footer />
      </body>
    </html>
  );
}
