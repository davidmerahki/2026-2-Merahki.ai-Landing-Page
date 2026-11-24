"use client";

// Pie de página bilingüe (24-nov-2026). Reemplaza el pie solo en inglés con enlaces "#".
// Los enlaces salen de la misma arquitectura del menú (nav-config.ts) para que no se desalineen.
// "Términos de servicio" vuelve cuando exista el texto aprobado por legal.
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, meetingHref, type NavLink } from "./nav-config";

const COPY = {
  es: {
    pitch: "merahki.ai diseña, produce y certifica programas de formación para universidades y empresas, del diseño instruccional al informe de resultados.",
    meeting: "Agendar reunión",
    quote: "Solicitar cotización",
    quoteHref: "/es#cotizacion",
    rights: "Todos los derechos reservados.",
    privacy: "Política de privacidad",
    privacyHref: "/es/privacy-policy",
    home: "/es",
  },
  en: {
    pitch: "merahki.ai designs, produces and certifies training programs for universities and companies, from instructional design to the results report.",
    meeting: "Book a meeting",
    quote: "Request a quote",
    quoteHref: "/#cotizacion",
    rights: "All rights reserved.",
    privacy: "Privacy policy",
    privacyHref: "/privacy-policy",
    home: "/",
  },
};

function FooterLink({ link }: { link: NavLink }) {
  const cls = "text-sm text-white/60 hover:text-white transition-colors";
  // Los enlaces con # y los externos van con <a>: Link de Next no dispara hashchange.
  if (link.href.includes("#") || link.href.startsWith("http")) {
    return <a href={link.href} className={cls}>{link.label}</a>;
  }
  return <Link href={link.href} className={cls}>{link.label}</Link>;
}

export default function Footer() {
  const pathname = usePathname() || "/";
  const lang = pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";
  const t = COPY[lang];
  const columns = NAV[lang].map((menu) => ({
    title: menu.label,
    links: menu.columns.flatMap((c) => (c.compact ? c.links.slice(0, 3) : c.links)),
  }));

  return (
    <footer className="border-t border-white/10 bg-black/60 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2 space-y-4">
            <Link href={t.home} className="inline-block">
              <span className="text-white font-bold text-lg tracking-tight">
                merahki<span className="text-gradient-blue-pink">.ai</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">{t.pitch}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={meetingHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2.5 rounded-full text-sm font-semibold bg-white text-black hover:bg-white/90 transition-all"
              >
                {t.meeting}
              </a>
              <a
                href={t.quoteHref}
                className="inline-block px-5 py-2.5 rounded-full text-sm font-semibold border border-white/20 text-white hover:bg-white/10 transition-all"
              >
                {t.quote}
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="space-y-4">
              <h4 className="section-badge text-white/40">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <FooterLink link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Meraki Media S.A.S. · merahki.ai. {t.rights}
          </p>
          <Link href={t.privacyHref} className="text-white/30 hover:text-white/60 text-xs transition-colors">
            {t.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}
