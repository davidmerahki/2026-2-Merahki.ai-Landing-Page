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
    "El hub de integraciones LMS definitivo. Más de 50 integraciones nativas para pagos, CRM, video y marketing — más API y webhooks para flujos de trabajo completamente personalizados.",
  openGraph: {
    title: "Integrations — merahki.ai",
    description:
      "Conecta merahki.ai a más de 50 herramientas como Stripe, HubSpot, Zoom y Mailchimp — o construye flujos de trabajo personalizados con API y webhooks.",
    url: "https://merahki.ai/es/integrations",
    type: "website",
  },
  alternates: {
    canonical: "https://merahki.ai/es/integrations",
    languages: { en: "https://merahki.ai/integrations" },
  },
};

const tldrCards = [
  {
    img: "/images/integrations/50%20native%20officially%20supported%20integrations%20payments%20CRM%20video%20marketing%20etc.png",
    alt: "50+ integraciones nativas",
    stat: "50+",
    text: "Integraciones nativas oficialmente soportadas que abarcan pagos, CRM, video y marketing.",
  },
  {
    img: "/images/integrations/3000%206000%20possible%20tools%20via%20automation%20native%20support.png",
    alt: "3000–6000 herramientas posibles",
    stat: "3,000–6,000+",
    text: "Herramientas alcanzables vía plataformas de automatización más soporte nativo.",
  },
  {
    img: "/images/integrations/Native%20support%20for%20major%20tools%20eg%20Stripe%20PayPal%20HubSpot%20Zoom%20MS%20Teams%20Shopify%20and%20email%20marketing%20tools.png",
    alt: "Soporte nativo para herramientas principales",
    stat: "Nativo",
    text: "Soporte para Stripe, PayPal, HubSpot, Zoom, MS Teams, Shopify y herramientas de email marketing.",
  },
  {
    img: "/images/integrations/API%20%26%20webhooks%20for%20fully%20custom%20workflows%20ideal%20for%20enterprise%20level%20automation%20data%20flow%20and%20integrations%20beyond%20native%20options.png",
    alt: "API y webhooks",
    stat: "API",
    text: "& webhooks para flujos de trabajo completamente personalizados — ideal para automatización a nivel enterprise y flujo de datos.",
  },
];

const categories = [
  {
    icon: CreditCard,
    name: "Pagos",
    tools: ["Stripe", "PayPal", "Shopify", "Stripe Tax", "Quaderno"],
  },
  {
    icon: Video,
    name: "Sesiones en vivo",
    tools: ["Zoom", "Webex", "Calendly", "Microsoft Teams", "Google Meet"],
  },
  {
    icon: Mail,
    name: "Email marketing",
    tools: [
      "Mailchimp",
      "ActiveCampaign",
      "Mailerlite",
      "GetResponse",
      "Kit",
      "Moosend",
      "AWeber",
      "Constant Contact",
    ],
  },
  {
    icon: Users,
    name: "CRM",
    tools: ["HubSpot"],
  },
  {
    icon: BarChart3,
    name: "Analytics",
    tools: [
      "Google Analytics",
      "Google Tag Manager",
      "Facebook Pixel",
      "MixPanel",
    ],
  },
  {
    icon: Zap,
    name: "Automatizaciones",
    tools: ["Zapier", "Make", "Integrately", "Pabbly"],
  },
  {
    icon: TrendingUp,
    name: "UX analytics",
    tools: ["Hotjar", "Fullstory", "Mouseflow", "Fullsession"],
  },
  {
    icon: BadgeCheck,
    name: "Credenciales digitales",
    tools: ["Accredible", "Credly"],
  },
  {
    icon: Headphones,
    name: "Servicio al cliente",
    tools: ["Freshchat", "Zendesk", "Olark", "Tawk.to"],
  },
  {
    icon: ShieldCheck,
    name: "Autenticación de usuarios",
    tools: ["OpenID", "SAML", "SSO", "Social apps"],
  },
  {
    icon: Globe,
    name: "Múltiples idiomas",
    tools: ["Weglot"],
  },
  {
    icon: TrendingUp,
    name: "Growth y afiliados",
    tools: [
      "Google Search",
      "Intercom",
      "BDOW!",
      "Optinmonster",
      "ReferralCandy",
      "Refersion",
      "FOMO",
      "AccessiBe",
    ],
  },
];

const automationTools = [
  {
    img: "/images/integrations/zapier.png",
    alt: "Zapier",
    title: "Zapier",
    body: "Zapier conecta merahki.ai con miles de apps, automatiza tareas y simplifica los flujos de trabajo. Solo configura triggers y acciones — sin código requerido.",
  },
  {
    img: "/images/integrations/Make.png",
    alt: "Make",
    title: "Make",
    body: "Make simplifica la automatización con su interfaz drag-and-drop. Es ideal para mapear flujos de trabajo y conectar merahki.ai con apps esenciales.",
  },
];

const apiTools = [
  {
    img: "/images/integrations/Extended%20API.png",
    alt: "Extended API",
    title: "Extended API",
    body: "Conecta merahki.ai con tu stack tecnológico existente de manera fluida. Nuestra API garantiza personalización, automatización y eficiencia sin complicaciones para todas las necesidades de tu negocio.",
  },
  {
    img: "/images/integrations/Advanced%20webhooks.png",
    alt: "Advanced webhooks",
    title: "Advanced webhooks",
    body: "Actualizaciones dinámicas en tiempo real que te permiten reaccionar instantáneamente a eventos críticos — registros de usuarios, compras de cursos o capturas de leads — y automatizar flujos de trabajo con facilidad.",
  },
];

export default function IntegrationsEsPage() {
  return (
    <div className="relative min-h-screen bg-void overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <GlowBackground
          indigoPosition={{ x: "30%", y: "40%" }}
          rustPosition={{ x: "70%", y: "60%" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col gap-12 items-center md:flex-row">
            <div className="flex-1 space-y-6">
              <AnimatedSection immediate>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium tracking-widest uppercase">
                  Integrations
                </span>
              </AnimatedSection>
              <AnimatedSection immediate delay={0.1}>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  El hub de integraciones LMS definitivo{" "}
                  <span className="text-gradient-blue-pink">
                    para ventas, marketing, RRHH y más
                  </span>
                </h1>
              </AnimatedSection>
              <AnimatedSection immediate delay={0.2}>
                <p className="text-lg text-white/60 leading-relaxed">
                  Conecta merahki.ai a más de 50 herramientas nativas — pagos,
                  CRM, video, marketing y ecommerce — o construye flujos de
                  trabajo completamente personalizados con nuestra API y
                  webhooks.
                </p>
              </AnimatedSection>
              <AnimatedSection immediate delay={0.3}>
                <Link
                  href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all text-sm"
                >
                  Agenda un Demo <ArrowRight className="w-4 h-4" />
                </Link>
              </AnimatedSection>
            </div>
            <AnimatedSection immediate delay={0.2} className="flex-1 w-full">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[16/10]">
                <Image
                  src="/images/integrations/The%20ultimate%20LMS%20integrations%20hub%20for%20sales%20marketing%20HR%20and%20more.png"
                  alt="El hub de integraciones LMS definitivo"
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

      {/* TL;DR */}
      <section className="relative py-20 px-6">
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="mb-3">
              <span className="text-2xl font-bold text-white">TL;DR</span>
            </div>
            <p className="text-white/60 mb-10 max-w-2xl">
              merahki.ai soporta un Ecosystem completo de integraciones que te
              ayuda a:
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
              <span className="font-semibold text-white/70">Ideal para: </span>
              Proveedores de formación, creadores de cursos online, equipos de
              L&amp;D corporativo, instituciones educativas y coaches o creadores
              que buscan insights basados en datos sobre el comportamiento de los
              aprendices y la efectividad de los cursos.
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
                Conecta tu stack tecnológico existente — sin la complejidad
              </h2>
              <p className="text-white/60 leading-relaxed">
                Cambiar de plataforma no debería significar abandonar las
                herramientas de las que depende tu equipo. Los datos aislados,
                las exportaciones manuales y los flujos de trabajo rotos
                ralentizan la entrega de formación y oscurecen el impacto en
                el negocio.
              </p>
              <p className="text-white/60 leading-relaxed">
                merahki.ai se integra de forma nativa con más de 50 herramientas
                en pagos, CRM, video, email marketing y analytics — y abre
                flujos de datos completamente personalizados vía API y webhooks.
                Tu stack funciona de manera coordinada, sin fisuras.
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
                Más de 50 integraciones en
                <br />
                <span className="text-gradient-blue-pink">
                  cada categoría que necesitas
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

      {/* Automations section */}
      <section className="relative py-24 px-6">
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                ¿No encuentras una integración?{" "}
                <span className="text-gradient-blue-pink">
                  Tenemos la solución.
                </span>
              </h2>
              <p className="text-white/50 mt-4 max-w-xl mx-auto">
                Con estas herramientas de automatización, conecta cualquier
                producto, servicio o app en tu stack tecnológico.
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
                Conecta tu stack tecnológico existente con{" "}
                <span className="text-gradient-blue-pink">
                  API y webhooks
                </span>
              </h2>
              <p className="text-white/50 mt-4 max-w-xl mx-auto">
                Para un rendimiento LMS integrado — ideal para automatización a
                nivel enterprise, flujo de datos e integraciones más allá de las
                opciones nativas.
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
              Solo con merahki.ai
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Construido para escalar{" "}
              <span className="text-gradient-blue-pink">con tu negocio</span>
            </h2>
            <p className="text-white/50 mt-4 leading-relaxed">
              Más de 50 integraciones nativas, automatización vía Zapier y Make,
              y una API completa — para que merahki.ai encaje perfectamente en
              tus flujos de trabajo existentes desde el primer día.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Link
              href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-black bg-white hover:bg-white/90 transition-all"
            >
              Explora las Integraciones <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection
        heading="Conecta todo lo que ya usas"
        subheading="Más de 50 integraciones nativas y una API completa — merahki.ai trabaja con tu stack tecnológico existente desde el primer día."
      />
    </div>
  );
}
