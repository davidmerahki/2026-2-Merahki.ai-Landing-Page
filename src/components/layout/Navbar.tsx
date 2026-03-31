"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

interface NavItem { label: string; desc: string; href: string; }
interface IndustrySector { sector: string; items: NavItem[]; }
interface NavGroup {
  label: string;
  columns?: number;
  items: NavItem[];
  industryGroups?: IndustrySector[];
}

const navGroups: NavGroup[] = [
  {
    label: "Features",
    columns: 3,
    items: [
      { label: "Flexible courses",       desc: "", href: "/flexible-courses" },
      { label: "Website builder",         desc: "", href: "#" },
      { label: "Marketing tools",         desc: "", href: "#" },
      { label: "AI Assistant",            desc: "", href: "/ai-assistant" },
      { label: "Mobile app builder",      desc: "", href: "/mobile-app-builder" },
      { label: "SCORM",                   desc: "", href: "#" },
      { label: "Interactive video",       desc: "", href: "/interactive-video" },
      { label: "Pop up builder",          desc: "", href: "#" },
      { label: "Checkout & payment",      desc: "", href: "#" },
      { label: "Live sessions",           desc: "", href: "#" },
      { label: "Custom user roles",       desc: "", href: "#" },
      { label: "Bundles & subscriptions", desc: "", href: "#" },
      { label: "Assessment builder",      desc: "", href: "#" },
      { label: "Analytics & reports",     desc: "", href: "/analytics-reports" },
      { label: "Affiliate programs",      desc: "", href: "#" },
      { label: "Survey builder",          desc: "", href: "#" },
      { label: "White-label website",     desc: "", href: "#" },
      { label: "Integrations",            desc: "", href: "/integrations" },
    ],
  },
  {
    label: "Solutions",
    items: [
      { label: "Customer Education", desc: "Drive retention and revenue with education.", href: "/customer-education" },
      { label: "Partner Education", desc: "Accelerate partner success with training.", href: "/partner-academies" },
      { label: "Training & Certification", desc: "Build and deliver training at speed.", href: "/training-certification" },
      { label: "Product Adoption & Onboarding", desc: "Increase product adoption with education.", href: "/product-adoption" },
      { label: "Certifications at Scale", desc: "Deliver training and certification at scale.", href: "/certification" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Blog", desc: "Explore learning trends, strategies, and best practices.", href: "/blog" },
      { label: "Case Studies", desc: "See how leading brands succeed with merahki.ai.", href: "/case-studies" },
      { label: "Reports & Resources", desc: "Access Education-Led Growth research & guides.", href: "/reports" },
      { label: "Webinar Library", desc: "Learn from experts in live & on-demand sessions.", href: "/webinars" },
      { label: "Upcoming Events", desc: "Connect with merahki.ai during upcoming events.", href: "/events" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About Us", desc: "Our mission and team", href: "#" },
      { label: "Careers", desc: "Join the merahki.ai team", href: "#" },
      { label: "Contact", desc: "Get in touch with us", href: "#contact" },
    ],
  },
  {
    label: "Industries",
    items: [],
    industryGroups: [
      {
        sector: "Healthcare & Pharmaceuticals",
        items: [
          { label: "Novartis",                     desc: "Global pharmaceutical industry specializing in innovative medicines.",                            href: "#" },
          { label: "Terumo",                       desc: "Medical technology and manufacturing of devices for cardiology and hematology.",                  href: "#" },
          { label: "Fundación Santa Fe de Bogotá", desc: "High-complexity hospital services and medical education.",                                        href: "#" },
          { label: "AstraZeneca",                  desc: "Biopharmaceuticals focused on the discovery and development of prescription drugs.",              href: "#" },
          { label: "Abbott",                       desc: "Health care, medical devices, diagnostics, and nutritional products.",                            href: "#" },
          { label: "ASMHOC",                       desc: "Medical association for homeopathic medicine and alternative health in Colombia.",                href: "#" },
          { label: "Heel",                         desc: "Bioregulatory medicine and natural-origin pharmaceuticals.",                                       href: "#" },
          { label: "Sanofi",                       desc: "Global pharmaceutical company focused on human health, vaccines, and innovative treatments.",     href: "#" },
        ],
      },
      {
        sector: "Education & Academia",
        items: [
          { label: "Universidad del Valle",          desc: "Public higher education and research.",                                      href: "#" },
          { label: "Universidad de los Andes",       desc: "Private higher education, research, and continuing education.",              href: "#" },
          { label: "Escuela Nacional del Deporte",   desc: "University institution specialized in sports science and health.",          href: "#" },
          { label: "UNICUCES",                       desc: "Technical and technological higher education institution.",                  href: "#" },
          { label: "Universidad César Vallejo",      desc: "Higher education with an international presence.",                          href: "#" },
          { label: "Advanz International Education", desc: "Consulting in international education and academic mobility.",              href: "#" },
          { label: "LearnWorlds",                    desc: "Educational technology (EdTech) and online training platform.",             href: "#" },
        ],
      },
      {
        sector: "Public Entities & Government",
        items: [
          { label: "UK PACT",                        desc: "UK government climate program to accelerate energy transition.",            href: "#" },
          { label: "IDARTES",                        desc: "Bogotá government entity dedicated to the promotion of arts and culture.",  href: "#" },
          { label: "BID",                            desc: "Multilateral banking and financing for economic and social development.",   href: "#" },
          { label: "Alcaldía Mayor de Bogotá / SCRD",desc: "Public administration and management of cultural and sports policies.",    href: "#" },
          { label: "Innpulsa",                       desc: "Government agency supporting entrepreneurship, innovation, and business productivity.", href: "#" },
        ],
      },
      {
        sector: "Technology & Software (ERP/SaaS)",
        items: [
          { label: "Query",          desc: "Enterprise Resource Planning (ERP) software solutions for business management.",            href: "#" },
          { label: "RaquetSuite",    desc: "SaaS platform focused on club management or sports facilities.",                            href: "#" },
          { label: "Franky",         desc: "Technology startup oriented toward service management and business optimization.",          href: "#" },
        ],
      },
      {
        sector: "Consumer Goods & Energy",
        items: [
          { label: "Luker Chocolate", desc: "Food industry, specifically the production of cocoa derivatives.",                        href: "#" },
          { label: "Bavaria",          desc: "Alcoholic beverage and malt industry.",                                                   href: "#" },
          { label: "Celsia",           desc: "Electric sector, generation, and commercialization of renewable energy.",                href: "#" },
        ],
      },
      {
        sector: "Telecommunications & Professional Services",
        items: [
          { label: "Claro",                       desc: "Telecommunications, data services, mobile telephony, and internet.",          href: "#" },
          { label: "Positiva Compañía de Seguros",desc: "Insurance sector and occupational risks.",                                    href: "#" },
          { label: "Codere",                      desc: "Gaming, luck, and gambling sector.",                                           href: "#" },
          { label: "Cafam",                       desc: "Family compensation fund: healthcare, recreation, tourism, and credit.",       href: "#" },
          { label: "Parque Arauco",               desc: "Real estate sector and shopping malls.",                                       href: "#" },
        ],
      },
      {
        sector: "Social, NGOs & Consulting",
        items: [
          { label: "Fundación Corona",   desc: "Non-profit organization focused on social development and education.",                  href: "#" },
          { label: "DRC",                desc: "International humanitarian organization for refugee support.",                          href: "#" },
          { label: "Fundación Aflora",   desc: "Institutional strengthening program for social entities.",                             href: "#" },
          { label: "Fundación FEMSA",    desc: "Social investment focused on water, early childhood, and culture.",                    href: "#" },
          { label: "PX Project / Management Institute", desc: "Project management consulting and process improvement.",                href: "#" },
          { label: "Vásquez Kennedy",    desc: "Career success consulting and talent search (Headhunting) services.",                  href: "#" },
        ],
      },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const hasActivePage = (items: { href: string }[]) =>
    items.some((item) => item.href === pathname);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center">
            <span className="text-white font-bold text-xs">M</span>
          </div>
          <span className="text-white font-bold text-lg tracking-tight">
            merahki<span className="text-gradient-blue-pink">.ai</span>
          </span>
        </Link>

        {/* Desktop Nav — each group wraps trigger + panel so mouse never leaves */}
        <div className="hidden md:flex items-center gap-1">
          {navGroups.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(group.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  hasActivePage(group.items) ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {group.label}
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === group.label ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* pt-2 creates visual gap while keeping the hover area continuous */}
              {activeDropdown === group.label && (
                <div
                  className={`absolute top-full pt-2 ${
                    "columns" in group && group.columns === 3
                      ? "left-0 min-w-[640px]"
                      : group.industryGroups
                      ? "right-0 min-w-[760px]"
                      : group.label === "Solutions"
                      ? "left-1/2 -translate-x-1/2 min-w-[280px]"
                      : "left-1/2 -translate-x-1/2 min-w-[240px]"
                  }`}
                >
                  <div className="rounded-xl border border-white/10 bg-black/95 backdrop-blur-xl p-3 shadow-2xl">
                    {"columns" in group && group.columns === 3 ? (
                      <div className="grid grid-cols-3 gap-0.5">
                        {group.items.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    ) : group.industryGroups ? (
                      <div className="grid grid-cols-2 gap-x-2 max-h-[70vh] overflow-y-auto pr-1">
                        {group.industryGroups.map((sector) => (
                          <div key={sector.sector} className="mb-1">
                            <p className="px-3 pt-2 pb-1 text-[10px] font-bold text-accent-purple/80 uppercase tracking-widest border-b border-white/5 mb-1">
                              {sector.sector}
                            </p>
                            {sector.items.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                className="group/item flex flex-col gap-0 px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors"
                              >
                                <span className="text-xs font-semibold text-white/80 group-hover/item:text-white transition-colors">
                                  {item.label}
                                </span>
                                <span className="text-[10px] text-white/35 leading-tight">{item.desc}</span>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    ) : (
                      group.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className={`group/item flex flex-col gap-0.5 px-4 py-3 rounded-lg transition-colors ${
                            pathname === item.href ? "bg-white/10" : "hover:bg-white/5"
                          }`}
                        >
                          <span
                            className={`flex items-center gap-1.5 text-sm font-semibold leading-tight ${
                              pathname === item.href ? "text-white" : "text-white/85 group-hover/item:text-white"
                            } transition-colors`}
                          >
                            {item.label}
                            <ArrowRight className="w-3 h-3 opacity-60 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all" />
                          </span>
                          <span className="text-xs text-white/40">{item.desc}</span>
                        </Link>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold bg-accent-purple text-white hover:bg-accent-purple/85 transition-all"
          >
            Book a Demo <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 px-6 py-4 space-y-1">
          {navGroups.map((group) => (
            <div key={group.label}>
              <button
                onClick={() =>
                  setMobileExpanded(mobileExpanded === group.label ? null : group.label)
                }
                className={`w-full flex items-center justify-between py-2.5 text-sm font-medium transition-colors ${
                  hasActivePage(group.items) ? "text-white" : "text-white/70"
                }`}
              >
                {group.label}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileExpanded === group.label ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileExpanded === group.label && (
                <div className="pl-4 pb-2 space-y-0.5 border-l border-white/10">
                  {group.industryGroups ? (
                    group.industryGroups.map((sector) => (
                      <div key={sector.sector}>
                        <p className="pt-2 pb-0.5 text-[10px] font-bold text-accent-purple/70 uppercase tracking-widest">
                          {sector.sector}
                        </p>
                        {sector.items.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block py-1.5 text-sm text-white/60 hover:text-white transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    ))
                  ) : (
                    group.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={`block py-2 text-sm transition-colors ${
                          pathname === item.href
                            ? "text-white font-medium"
                            : "text-white/60 hover:text-white"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))
                  )}
                </div>
              )}
            </div>
          ))}
          <div className="pt-3 border-t border-white/10">
            <Link
              href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-full text-sm font-semibold bg-accent-purple text-white hover:bg-accent-purple/85 transition-all"
            >
              Book a Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
