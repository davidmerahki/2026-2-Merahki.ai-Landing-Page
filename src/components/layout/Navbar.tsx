"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

const navGroups = [
  {
    label: "Features",
    columns: 3,
    items: [
      { label: "Flexible courses",       desc: "", href: "/flexible-courses" },
      { label: "Website builder",         desc: "", href: "#" },
      { label: "Marketing tools",         desc: "", href: "#" },
      { label: "AI Assistant",            desc: "", href: "/ai-assistant" },
      { label: "Mobile app builder",      desc: "", href: "#" },
      { label: "SCORM",                   desc: "", href: "#" },
      { label: "Interactive video",       desc: "", href: "#" },
      { label: "Pop up builder",          desc: "", href: "#" },
      { label: "Checkout & payment",      desc: "", href: "#" },
      { label: "Live sessions",           desc: "", href: "#" },
      { label: "Custom user roles",       desc: "", href: "#" },
      { label: "Bundles & subscriptions", desc: "", href: "#" },
      { label: "Assessment builder",      desc: "", href: "#" },
      { label: "Analytics & reports",     desc: "", href: "#" },
      { label: "Affiliate programs",      desc: "", href: "#" },
      { label: "Survey builder",          desc: "", href: "#" },
      { label: "White-label website",     desc: "", href: "#" },
      { label: "Integrations",            desc: "", href: "#" },
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
    items: [
      { label: "SaaS", desc: "Scale customer education in tech", href: "#" },
      { label: "Healthcare", desc: "Compliance and clinical training", href: "#" },
      { label: "Financial Services", desc: "Regulatory and product training", href: "#" },
      { label: "Manufacturing", desc: "Workforce enablement at scale", href: "#" },
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
                    ) : (
                      group.items.map((item) => (
                        <Link
                          key={item.href}
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
            href="#contact"
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
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block py-2 text-sm transition-colors ${
                        pathname === item.href
                          ? "text-white font-medium"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-3 border-t border-white/10">
            <Link
              href="#contact"
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
