import Link from "next/link";

const footerLinks = {
  Solutions: [
    { label: "Education-Led Growth", href: "/education-led-growth" },
    { label: "Customer Education", href: "/customer-education" },
    { label: "Partner Academies", href: "/partner-academies" },
    { label: "Product Adoption", href: "/product-adoption" },
    { label: "Certification", href: "/certification" },
  ],
  Platform: [
    { label: "Rapid Studio", href: "/training-certification" },
    { label: "AI Agents", href: "/customer-education#agents" },
    { label: "Analytics", href: "/customer-education#analytics" },
    { label: "Certifications", href: "/certification" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center">
                <span className="text-white font-bold text-xs">M</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                merahki<span className="text-gradient-blue-pink">.ai</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Transform your education approach into a growth engine for lasting
              impact on customers, leads, and partners.
            </p>
            <Link
              href="https://reuniones.clientify.com/#/davidmerahki/1a1/?v2=true" target="_blank" rel="noopener noreferrer"
              className="inline-block px-5 py-2.5 rounded-full text-sm font-semibold bg-white text-black hover:bg-white/90 transition-all"
            >
              Book a Demo
            </Link>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="section-badge text-white/40">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} merahki.ai. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
