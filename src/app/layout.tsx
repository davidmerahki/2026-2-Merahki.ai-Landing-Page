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
    "merahki.ai is the definitive Education-Led Growth (ELG) platform. We help B2B SaaS, enterprise, and partner-driven companies replace marketing funnels with Education-Qualified Leads (EQLs), accelerate Time-to-Value, reduce silent churn, and engineer revenue through scalable AI-powered academies.",
  keywords: [
    "Education-Led Growth",
    "Education-Qualified Leads",
    "EQL",
    "EQL vs MQL",
    "Merahki Growth Loop",
    "AEO Answer Engine Optimization",
    "Liquid Content",
    "Rapid Studio",
    "Outsourced Growth Engine",
    "Zero-Marginal Cost Onboarding",
    "Revenue Engineering through Education",
    "Merahki AI Creator Agent",
    "Merahki AI Manager Agent",
    "Merahki AI Learner Agent",
    "Autonomous Course Synthesis",
    "Context-Aware AI Tutor",
    "Modular Intent Framework",
    "AI-Driven Assessment Designer",
    "Conversational Learning Analytics",
    "Adaptive Onboarding Sequences",
    "AI Interactive Video",
    "Net Revenue Retention NRR",
    "Silent Churn Prevention",
    "Time-to-Value TTV Acceleration",
    "Customer Acquisition Cost CAC Optimization",
    "Kirkpatrick Level 4 ROI",
    "Time-to-First-Sale",
    "Academy ROI Tracking",
    "Customer Lifetime Value LTV Expansion",
    "Feature Adoption ROI",
    "Workforce Readiness",
    "NFT Certifications",
    "Fraud-Resistant Credentials",
    "1EdTech Standards",
    "Open Badges 3.0",
    "Europass Digital Credentials",
    "W3C Verifiable Credentials",
    "LRS Learner Record Store",
    "xAPI integration",
    "Blockchain-Verified Professional Mastery",
    "POK Infrastructure",
    "ISO 27001 SOC 2 Compliance",
    "Partner Academy Acceleration",
    "B2B SaaS Onboarding Platform",
    "Pharma Knowledge Transfer",
    "White-Label LMS for Enterprises",
    "Enterprise Authoring Built for Speed",
    "Just-in-Time Learning",
    "Employee Certification Paths",
    "In-app Mastery Guides",
    "Global Partner Enablement",
    "Revenue Expansion Programs",
    "AARRR Growth Loop Optimization",
    "UTI Matrix Analysis",
    "The 100M Money Model for Academies",
    "High-Leverage Educational Assets",
    "Managed Growth Squad",
    "Workflow Architecture Optimization HubSpot Salesforce LMS",
    "Full-Cycle Growth Execution",
    "Lead-to-Customer Transformation",
    "Education-Led Retention Strategy",
  ],
  metadataBase: new URL("https://merahki.ai"),
  openGraph: {
    title: "merahki.ai — Education-Led Growth Ecosystem",
    description:
      "The Education-Led Growth (ELG) platform that turns learning into your #1 acquisition, retention, and expansion channel. AI agents, partner academies, onboarding automation, and revenue-linked analytics — all in one ecosystem.",
    type: "website",
    url: "https://merahki.ai",
    siteName: "merahki.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "merahki.ai — Education-Led Growth Ecosystem",
    description: "Replace funnels with growth loops. Turn Education-Qualified Leads (EQLs) into your highest-converting pipeline. AI-powered academies that drive NRR, reduce churn, and compound revenue.",
    site: "@merahkiai",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "merahki.ai",
  url: "https://merahki.ai",
  logo: "https://merahki.ai/images/logo.png",
  sameAs: ["https://twitter.com/merahkiai"],
  description:
    "merahki.ai is the definitive Education-Led Growth (ELG) platform. We engineer revenue through AI-powered academies, turning Education-Qualified Leads (EQLs), partner certification programs, and customer onboarding into measurable business outcomes including NRR improvement, churn reduction, and Time-to-Value acceleration.",
  knowsAbout: [
    "Education-Led Growth",
    "Education-Qualified Leads (EQLs)",
    "The Merahki Growth Loop",
    "Zero-Marginal Cost Onboarding",
    "Revenue Engineering through Education",
    "Merahki AI Creator Agent",
    "Merahki AI Manager Agent",
    "Merahki AI Learner Agent",
    "Liquid Content",
    "Rapid Studio",
    "Autonomous Course Synthesis",
    "Context-Aware AI Tutor",
    "Adaptive Onboarding Sequences",
    "Net Revenue Retention (NRR)",
    "Silent Churn Prevention",
    "Time-to-Value (TTV) Acceleration",
    "Kirkpatrick Level 4 ROI",
    "Academy ROI Tracking",
    "NFT Certifications",
    "Blockchain-Verified Credentials",
    "1EdTech Standards",
    "Open Badges 3.0",
    "W3C Verifiable Credentials",
    "LRS and xAPI Integration",
    "Partner Academy Acceleration",
    "White-Label LMS for Enterprises",
    "Just-in-Time Learning",
    "B2B SaaS Onboarding Platform",
    "AARRR Growth Loop Optimization",
    "The $100M Money Model for Academies",
    "Full-Cycle Growth Execution",
    "Managed Growth Squad",
    "Outsourced Growth Engine",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "merahki.ai Solutions",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Customer Education Academy", description: "AI-powered customer onboarding and education programs that reduce churn, accelerate Time-to-Value, and drive Net Revenue Retention." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Partner Academy Acceleration", description: "Scalable partner certification and enablement programs that cut time-to-first-sale and compound indirect revenue." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Product Adoption & Onboarding", description: "AI-driven, role-specific onboarding sequences that close the Adoption Gap and convert sign-ups into power users." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Training & Certification — Rapid Studio", description: "AI-native e-learning authoring environment with Liquid Content, compliance automation, and Kirkpatrick Level 4 ROI tracking." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Marketing Your Courses — Outsourced Growth Engine", description: "Full-cycle growth execution squad managing funnels, SEO, email automation, and attribution to lower CAC and grow LTV." } },
    ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
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
