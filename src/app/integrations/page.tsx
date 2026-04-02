import type { Metadata } from "next";
import Image from "next/image";
import GlowBackground from "@/components/ui/GlowBackground";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactSection from "@/components/sections/ContactSection";
import LogoCarousel from "@/components/sections/LogoCarousel";
import Link from "next/link";
import {
  ArrowRight,
  CreditCard,
  Video,
  Mail,
  BarChart3,
  Zap,
  Users,
  ShieldCheck,
  Globe,
  BadgeCheck,
  Headphones,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "The ultimate LMS integrations hub. 50+ native integrations for payments, CRM, video, marketing — plus API and webhooks for fully custom workflows.",
  openGraph: {
    title: "Integrations",
    description:
      "Connect merahki.ai to 50+ tools like Stripe, HubSpot, Zoom, and Mailchimp — or build custom workflows with API and webhooks.",
    url: "https://merahki.ai/integrations",
    type: "website",
  },
};

const tldrCards = [
  {
    img: "/images/integrations/50%20native%20officially%20supported%20integrations%20payments%20CRM%20video%20marketing%20etc.png",
    alt: "50+ native integrations",
    stat: "50+",
    text: "Native officially supported integrations spanning payments, CRM, video, and marketing.",
  },
  {
    img: "/images/integrations/3000%206000%20possible%20tools%20via%20automation%20native%20support.png",
    alt: "3000–6000 possible tools",
    stat: "3,000–6,000+",
    text: "Possible tools reachable via automation platforms plus native support.",
  },
  {
    img: "/images/integrations/Native%20support%20for%20major%20tools%20eg%20Stripe%20PayPal%20HubSpot%20Zoom%20MS%20Teams%20Shopify%20and%20email%20marketing%20tools.png",
    alt: "Native support for major tools",
    stat: "Native",
    text: "Support for Stripe, PayPal, HubSpot, Zoom, MS Teams, Shopify, and email-marketing tools.",
  },
  {
    img: "/images/integrations/API%20%26%20webhooks%20for%20fully%20custom%20workflows%20ideal%20for%20enterprise%20level%20automation%20data%20flow%20and%20integrations%20beyond%20native%20options.png",
    alt: "API and webhooks",
    stat: "API",
    text: "& webhooks for fully custom workflows — ideal for enterprise-level automation and data flow.",
  },
];

const categories = [
  {
    icon: CreditCard,
    name: "Payment gateways",
    tools: ["Stripe", "PayPal", "Shopify", "Stripe Tax", "Quaderno"],
  },
  {
    icon: Video,
    name: "Live sessions",
    tools: ["Zoom", "Webex", "Calendly", "Microsoft Teams", "Google Meet"],
  },
  {
    icon: Mail,
    name: "Email marketing",
    tools: ["Mailchimp", "ActiveCampaign", "Mailerlite", "GetResponse", "Kit", "Moosend", "AWeber", "Constant Contact"],
  },
  {
    icon: Users,
    name: "CRM",
    tools: ["HubSpot"],
  },
  {
    icon: BarChart3,
    name: "Analytics",
    tools: ["Google Analytics", "Google Tag Manager", "Facebook Pixel", "MixPanel"],
  },
  {
    icon: Zap,
    name: "Automations",
    tools: ["Zapier", "Make", "Integrately", "Pabbly"],
  },
  {
    icon: TrendingUp,
    name: "UX analytics",
    tools: ["Hotjar", "Fullstory", "Mouseflow", "Fullsession"],
  },
  {
    icon: BadgeCheck,
    name: "Digital credentials",
    tools: ["Accredible", "Credly"],
  },
  {
    icon: Headphones,
    name: "Customer service",
    tools: ["Freshchat", "Zendesk", "Olark", "Tawk.to"],
  },
  {
    icon: ShieldCheck,
    name: "User authentication",
    tools: ["OpenID", "SAML", "SSO", "Social apps"],
  },
  {
    icon: Globe,
    name: "Multiple languages",
    tools: ["Weglot"],
  },
  {
    icon: TrendingUp,
    name: "Growth & affiliates",
    tools: ["Google Search", "Intercom", "BDOW!", "Optinmonster", "ReferralCandy", "Refersion", "FOMO", "AccessiBe"],
  },
];

const automationTools = [
  {
    img: "/images/integrations/zapier.png",
    alt: "Zapier",
    title: "Zapier",
    body: "Zapier connects merahki.ai to thousands of apps, automates tasks, and simplifies workflows. Just set triggers and actions — no code needed.",
  },
  {
    img: "/images/integrations/Make.png",
    alt: "Make",
    title: "Make",
    body: "Make simplifies automation with its drag-and-drop interface. It's ideal for mapping workflows and linking merahki.ai to essential apps.",
  },
];

const apiTools = [
  {
    img: "/images/integrations/Extended%20API.png",
    alt: "Extended API",
    title: "Extended API",
    body: "Connect merahki.ai with your existing tech stack seamlessly. Our API ensures effortless customization, automation, and efficiency for all your business needs.",
  },
  {
    img: "/images/integrations/Advanced%20webhooks.png",
    alt: "Advanced webhooks",
    title: "Advanced webhooks",
    body: "Dynamic, real-time updates that let you react instantly to critical events — user registrations, course purchases, or lead captures — and automate workflows with ease.",
  },
];

export default function IntegrationsPage() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      {/* Hero — text left / image right */}
      <section className="relative pt-32 pb-20 px-6">
        <GlowBackground
          indigoPosition={{ x: "30%", y: "40%" }}
          rustPosition={{ x: "70%", y: "60%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col gap-12 items-center md:flex-row">
            {/* Text */}
            <div className="flex-1 space-y-6">
              <AnimatedSection immediate>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">
                  Integrations
                </span>
              </AnimatedSection>
              <AnimatedSection immediate delay={0.1}>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  The ultimate{" "}
                  <span className="text-gradient-blue-pink">
                    LMS integrations hub
                  </span>{" "}
                  for sales, marketing, HR, and more
                </h1>
              </AnimatedSection>
              <AnimatedSection immediate delay={0.2}>
                <p className="text-lg text-white/60 leading-relaxed">
                  Connect merahki.ai to 50+ native tools — payments, CRM,
                  video, marketing, and ecommerce — or build fully custom
                  workflows with our API and webhooks.
                </p>
              </AnimatedSection>
              <AnimatedSection immediate delay={0.3}>
                <Link
                  href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
                >
                  Book a Demo <ArrowRight className="w-4 h-4" />
                </Link>
              </AnimatedSection>
            </div>
            {/* Hero image */}
            <AnimatedSection immediate delay={0.2} className="flex-1 w-full">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[16/10]">
                <Image
                  src="/images/integrations/The%20ultimate%20LMS%20integrations%20hub%20for%20sales%20marketing%20HR%20and%20more.png"
                  alt="The ultimate LMS integrations hub"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <LogoCarousel />

      {/* TL;DR — 4 cards with images */}
      <section className="relative py-20 px-6">
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="mb-3">
              <span className="text-2xl font-bold text-white">TL;DR</span>
            </div>
            <p className="text-white/60 mb-10 max-w-2xl">
              merahki.ai supports a complete ecosystem of integrations that
              help you:
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {tldrCards.map((card) => (
                <div
                  key={card.alt}
                  className="glass-card rounded-2xl overflow-hidden flex flex-col"
                >
                  <div className="relative aspect-[4/3] w-full bg-white/5">
                    <Image
                      src={card.img}
                      alt={card.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-5 space-y-1">
                    <p className="text-lg font-bold text-gradient-blue-pink">
                      {card.stat}
                    </p>
                    <p className="text-white/65 text-sm leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="mt-8 text-white/50 text-sm">
              <span className="font-semibold text-white/70">Best for: </span>
              Training providers, online course creators, L&amp;D corporate
              training teams, educational institutions, and online coaches or
              creators seeking data-driven insights into learner behavior and
              course effectiveness.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Narrative */}
      <section className="relative py-10 px-6">
        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="narrative-card rounded-2xl p-10 space-y-4 text-center">
              <h2 className="text-2xl font-bold text-white">
                Connect your existing tech stack — without the complexity
              </h2>
              <p className="text-white/60 leading-relaxed">
                Switching platforms shouldn&apos;t mean abandoning the tools
                your team relies on. Siloed data, manual exports, and broken
                workflows slow down training delivery and obscure business
                impact.
              </p>
              <p className="text-white/60 leading-relaxed">
                merahki.ai integrates natively with 50+ tools across payments,
                CRM, video, email marketing, and analytics — and opens fully
                custom data flows via API and webhooks. Your stack works
                together, seamlessly.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Integration categories grid */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "80%", y: "30%" }}
          rustPosition={{ x: "20%", y: "70%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                50+ integrations across
                <br />
                <span className="text-gradient-blue-pink">
                  every category you need
                </span>
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {categories.map((cat) => (
                <div
                  key={cat.name}
                  className="glass-card rounded-2xl p-6 space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-accent-purple/20 flex items-center justify-center flex-shrink-0">
                      <cat.icon className="w-4 h-4 text-accent-purple" />
                    </div>
                    <h3 className="font-semibold text-white">{cat.name}</h3>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {cat.tools.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Automations section — Zapier + Make side by side */}
      <section className="relative py-24 px-6">
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Can&apos;t find an integration?{" "}
                <span className="text-gradient-blue-pink">We&apos;ve got you.</span>
              </h2>
              <p className="text-white/50 mt-4 max-w-xl mx-auto">
                With these automation tools, connect any product, service, or
                app in your tech stack.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {automationTools.map((tool) => (
                <div
                  key={tool.title}
                  className="glass-card rounded-2xl overflow-hidden flex flex-col"
                >
                  <div className="relative aspect-[16/9] w-full bg-white/5">
                    <Image
                      src={tool.img}
                      alt={tool.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-8 space-y-3">
                    <h3 className="text-xl font-bold text-white">
                      {tool.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">{tool.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* API & Webhooks section */}
      <section className="relative py-24 px-6">
        <GlowBackground
          indigoPosition={{ x: "30%", y: "60%" }}
          rustPosition={{ x: "70%", y: "40%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Connect your existing tech stack with{" "}
                <span className="text-gradient-blue-pink">
                  API and webhooks
                </span>
              </h2>
              <p className="text-white/50 mt-4 max-w-xl mx-auto">
                For integrated LMS performance — ideal for enterprise-level
                automation, data flow, and integrations beyond native options.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {apiTools.map((tool) => (
                <div
                  key={tool.title}
                  className="glass-card rounded-2xl overflow-hidden flex flex-col"
                >
                  <div className="relative aspect-[16/9] w-full bg-white/5">
                    <Image
                      src={tool.img}
                      alt={tool.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-8 space-y-3">
                    <h3 className="text-xl font-bold text-white">
                      {tool.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">{tool.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 text-center">
        <GlowBackground
          indigoPosition={{ x: "50%", y: "50%" }}
          rustPosition={{ x: "70%", y: "40%" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <AnimatedSection>
            <span className="section-badge text-white/30 mb-2 inline-block">
              Only with merahki.ai
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Built to scale{" "}
              <span className="text-gradient-blue-pink">with your business</span>
            </h2>
            <p className="text-white/50 mt-4 leading-relaxed">
              50+ native integrations, automation via Zapier and Make, and a
              full API — so merahki.ai fits perfectly into your existing
              workflows from day one.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Link
              href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all"
            >
              Explore Integrations <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection
        heading="Connect everything you already use"
        subheading="50+ native integrations and a full API — merahki.ai works with your existing tech stack from day one."
      />
    </div>
  );
}
