"use client";

// Menú principal (24-nov-2026). Escritorio: paneles anchos de varias columnas que caben
// completos en una pantalla de 1280 × 720 sin desplazamiento interno. Celular: cajón a pantalla
// completa con secciones plegables y los dos llamados a la acción fijos abajo.
// La estructura y los textos viven en nav-config.ts (español e inglés).
// Selector de audiencia (26-nov-2026), como el de Coursera: «Para universidades | Para empresas | Para gobiernos».
// La audiencia sale de la ruta (/es y / → universidades, /es/empresas y /companies → empresas) o de la última elección
// guardada, y ordena Soluciones y los enlaces al home (merahki model, clientes, cotización) para esa audiencia.
import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { NAV, meetingHref, type NavColumn, type NavFeatured, type NavLink, type NavMenu } from "./nav-config";

const isExternal = (href: string) => /^https?:\/\//.test(href);

type Aud = "universidades" | "empresas" | "gobiernos";
const AUD_KEY = "merahki-audiencia";
const audFromPath = (p: string): Aud | null =>
  p === "/es/empresas" || p.startsWith("/es/empresas/") || p === "/companies" || p.startsWith("/companies/")
    ? "empresas"
    : p === "/es/gobiernos" || p.startsWith("/es/gobiernos/") || p === "/governments" || p.startsWith("/governments/")
      ? "gobiernos"
    : p === "/es" || p === "/"
      ? "universidades"
      : null;
const AUD_HOME: Record<"es" | "en", Record<Aud, string>> = {
  es: { universidades: "/es", empresas: "/es/empresas", gobiernos: "/es/gobiernos" },
  en: { universidades: "/", empresas: "/companies", gobiernos: "/governments" },
};

/** Ajusta el menú a la audiencia: la columna de esa audiencia va primero en Soluciones y los enlaces al home
 *  (merahki model, clientes, cotización) llevan a su home, en español (/es#…) y en inglés (/#…). */
function menusPara(menus: NavMenu[], aud: Aud, isEs: boolean): NavMenu[] {
  if (aud === "universidades") return menus;
  const ancla = isEs ? "/es#" : "/#";
  const destino = `${AUD_HOME[isEs ? "es" : "en"][aud]}#`;
  const home = (h: string) => (h.startsWith(ancla) ? destino + h.slice(ancla.length) : h);
  const esDeEmpresas = (titulo: string) => Number(/empresas|companies/i.test(titulo));
  return menus.map((m) => {
    const columns = m.columns.map((c) => ({ ...c, links: c.links.map((l) => ({ ...l, href: home(l.href) })) }));
    if (m.id === "soluciones" && aud === "empresas") columns.sort((a, b) => esDeEmpresas(b.title) - esDeEmpresas(a.title));
    return { ...m, columns, featured: m.featured ? { ...m.featured, href: home(m.featured.href) } : undefined };
  });
}

/** Barra de audiencia encima del menú: universidades, empresas y gobiernos, en español y en inglés (27-nov-2026). */
function BarraAudiencia({ isEs, aud, pathname, onPick }: { isEs: boolean; aud: Aud; pathname: string; onPick: (a: Aud) => void }) {
  const items: { key: string; label: string; href?: string }[] = isEs
    ? [
        { key: "universidades", label: "universidades", href: "/es" },
        { key: "empresas", label: "empresas", href: "/es/empresas" },
        { key: "gobiernos", label: "gobiernos", href: "/es/gobiernos" },
      ]
    : [
        { key: "universidades", label: "universities", href: "/" },
        { key: "empresas", label: "companies", href: "/companies" },
        { key: "gobiernos", label: "governments", href: "/governments" },
      ];
  const para = isEs ? "Para" : "For";
  const pronto = isEs ? "pronto" : "soon";
  return (
    <div className="border-b border-white/[0.07] bg-[#05000A]">
      <div className="mx-auto flex h-9 max-w-7xl items-stretch gap-1 overflow-x-auto px-4 text-[13px] [scrollbar-width:none] sm:px-6 [&::-webkit-scrollbar]:hidden" role="group" aria-label={isEs ? "¿Para quién es merahki.ai?" : "Who is merahki.ai for?"}>
        {items.map((it) => {
          const on = it.key === aud;
          if (!it.href)
            return (
              <span key={it.key} className="flex items-center gap-1.5 whitespace-nowrap px-3 text-white/45">
                <span className="text-white/35">{para}</span> {it.label}
                <em className="rounded-full bg-white/[0.07] px-1.5 py-px text-[10px] font-bold uppercase not-italic tracking-wider text-[#C084FC]">{pronto}</em>
              </span>
            );
          return (
            <Link
              key={it.key}
              href={it.href}
              onClick={() => onPick(it.key as Aud)}
              aria-current={pathname === it.href ? "page" : undefined}
              className={`flex items-center gap-1.5 whitespace-nowrap border-b-2 px-3 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#C084FC]/60 ${
                on ? "border-[#C084FC] font-semibold text-white" : "border-transparent text-white/75 hover:text-white"
              }`}
            >
              <span className={on ? "font-normal text-white/50" : "text-white/40"}>{para}</span> {it.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

/** Link de Next para rutas internas; <a> nativo para enlaces externos o con #ancla
 *  (Next no dispara hashchange al navegar dentro de la misma página, y el home abre
 *  el formulario de cotización al recibir #cotizacion). */
function Href(props: React.ComponentProps<"a"> & { href: string }) {
  const { href, ...rest } = props;
  if (isExternal(href) || href.includes("#")) return <a href={href} {...rest} />;
  return <Link href={href} {...rest} />;
}

function ItemLink({ link, active, onNavigate, compact }: { link: NavLink; active: boolean; onNavigate: () => void; compact?: boolean }) {
  const Icon = link.icon;
  const ext = isExternal(link.href);
  if (compact) {
    return (
      <Href
        href={link.href}
        onClick={onNavigate}
        aria-current={active ? "page" : undefined}
        className={`group flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm outline-none transition-colors hover:bg-white/[0.06] focus-visible:bg-white/[0.08] focus-visible:ring-2 focus-visible:ring-[#C084FC]/60 ${active ? "text-white" : "text-white/75 hover:text-white"}`}
      >
        <Icon className="h-4 w-4 shrink-0 text-[#C084FC]/80 group-hover:text-[#C084FC]" aria-hidden />
        <span className="truncate">{link.label}</span>
      </Href>
    );
  }
  return (
    <Href
      href={link.href}
      onClick={onNavigate}
      target={ext ? "_blank" : undefined}
      rel={ext ? "noopener noreferrer" : undefined}
      aria-current={active ? "page" : undefined}
      className="group flex items-start gap-3 rounded-xl p-2.5 outline-none transition-colors hover:bg-white/[0.06] focus-visible:bg-white/[0.08] focus-visible:ring-2 focus-visible:ring-[#C084FC]/60"
    >
      <span className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ring-1 ring-inset ring-white/10 transition-colors ${active ? "bg-[#7C3AED]/40 text-white" : "bg-[#7C3AED]/15 text-[#C084FC] group-hover:bg-[#7C3AED]/30"}`}>
        <Icon className="h-[18px] w-[18px]" aria-hidden />
      </span>
      <span className="min-w-0">
        <span className={`block text-sm font-semibold leading-tight ${active ? "text-white" : "text-white/90 group-hover:text-white"}`}>{link.label}</span>
        {link.desc && <span className="mt-0.5 block text-[13px] leading-snug text-white/50 group-hover:text-white/65">{link.desc}</span>}
      </span>
    </Href>
  );
}

function Column({ col, isActive, onNavigate }: { col: NavColumn; isActive: (h: string) => boolean; onNavigate: () => void }) {
  return (
    <div className="min-w-0">
      <p className="mb-2 px-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/40">{col.title}</p>
      <ul className={col.compact ? "grid grid-cols-2 gap-0.5" : "space-y-0.5"}>
        {col.links.map((l) => (
          <li key={l.href + l.label}>
            <ItemLink link={l} active={isActive(l.href)} onNavigate={onNavigate} compact={col.compact} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Featured({ f, onNavigate }: { f: NavFeatured; onNavigate: () => void }) {
  const ext = isExternal(f.href);
  return (
    <Href
      href={f.href}
      onClick={onNavigate}
      target={ext ? "_blank" : undefined}
      rel={ext ? "noopener noreferrer" : undefined}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[radial-gradient(120%_90%_at_100%_0%,rgba(124,58,237,0.45),transparent_60%),radial-gradient(90%_80%_at_0%_100%,rgba(219,39,119,0.25),transparent_60%)] p-5 outline-none transition-colors hover:border-white/25 focus-visible:ring-2 focus-visible:ring-[#C084FC]/60"
    >
      <span>
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#F0ABFC]">{f.kicker}</span>
        <span className="mt-2 block text-lg font-bold leading-snug text-white">{f.title}</span>
        <span className="mt-2 block text-sm leading-relaxed text-white/65">{f.text}</span>
      </span>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
        {f.cta}
        {ext ? <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden /> : <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />}
      </span>
    </Href>
  );
}

export default function Navbar() {
  const pathname = usePathname() || "/";
  const isEs = pathname === "/es" || pathname.startsWith("/es/");
  // La audiencia de la ruta entra desde el primer render: así el HTML estático de /companies y /es/empresas
  // ya trae «empresas» marcado y no parpadea «universidades» antes de hidratar.
  const [aud, setAud] = useState<Aud>(() => audFromPath(pathname) ?? "universidades");
  useEffect(() => {
    const desdeRuta = audFromPath(pathname);
    if (desdeRuta) {
      setAud(desdeRuta);
      try { localStorage.setItem(AUD_KEY, desdeRuta); } catch {}
      return;
    }
    try {
      const g = localStorage.getItem(AUD_KEY);
      if (g === "empresas" || g === "universidades" || g === "gobiernos") setAud(g);
    } catch {}
  }, [pathname]);
  const pick = (a: Aud) => { setAud(a); try { localStorage.setItem(AUD_KEY, a); } catch {} };
  const menus = menusPara(NAV[isEs ? "es" : "en"], aud, isEs);
  const t = isEs
    ? { main: "Menú principal", open: "Abrir menú", close: "Cerrar menú", cta: "Agendar reunión de 30 minutos", quote: "Solicitar cotización a la medida", quoteHref: `${AUD_HOME.es[aud]}#cotizacion`, home: "merahki.ai, inicio", need: "¿Tienes un proyecto en mente?" }
    : { main: "Main menu", open: "Open menu", close: "Close menu", cta: "Book a 30-minute meeting", quote: "Request a custom quote", quoteHref: `${AUD_HOME.en[aud]}#cotizacion`, home: "merahki.ai home", need: "Have a project in mind?" };

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const timer = useRef<number | undefined>(undefined);
  const navRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggers = useRef<Record<string, HTMLButtonElement | null>>({});
  const uid = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Al cambiar de página se cierra todo.
  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
    setMobileSection(null);
  }, [pathname]);

  // Esc cierra y devuelve el foco al botón; un clic fuera del menú también lo cierra.
  useEffect(() => {
    if (!open && !mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (open) { const id = open; setOpen(null); triggers.current[id]?.focus(); }
      if (mobileOpen) setMobileOpen(false);
    };
    const onDown = (e: PointerEvent) => { if (open && navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null); };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("pointerdown", onDown); };
  }, [open, mobileOpen]);

  // Con el cajón abierto en celular, la página de fondo no se desplaza.
  useEffect(() => {
    if (!mobileOpen) return;
    const el = document.documentElement;
    const prev = el.style.overflow;
    el.style.overflow = "hidden";
    return () => { el.style.overflow = prev; };
  }, [mobileOpen]);

  const clear = () => window.clearTimeout(timer.current);
  // Intención de hover: abre con un pequeño retraso (o al instante si ya hay un panel abierto) y cierra con margen.
  const openSoon = useCallback((id: string) => { clear(); timer.current = window.setTimeout(() => setOpen(id), open ? 0 : 90); }, [open]);
  const closeSoon = useCallback(() => { clear(); timer.current = window.setTimeout(() => setOpen(null), 200); }, []);
  const closeAll = useCallback(() => { clear(); setOpen(null); setMobileOpen(false); }, []);

  const path = (h: string) => h.split("#")[0] || "/";
  const isActive = (href: string) => !isExternal(href) && !href.includes("#") && path(href) === pathname;
  const menuActive = (m: NavMenu) => m.columns.some((c) => c.links.some((l) => isActive(l.href)));
  const current = menus.find((m) => m.id === open) || null;

  const focusFirst = () => requestAnimationFrame(() => panelRef.current?.querySelector<HTMLElement>("a")?.focus());

  return (
    <nav
      ref={navRef}
      aria-label={t.main}
      className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-300 ${
        // Con el cajón abierto, fondo sólido y SIN backdrop-blur: un backdrop-filter convierte la barra en el
        // contenedor de los hijos con position: fixed y el cajón dejaba de cubrir la pantalla.
        mobileOpen ? "border-b border-white/10 bg-[#07040C]" : scrolled || open ? "border-b border-white/10 bg-black/85 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <BarraAudiencia isEs={isEs} aud={aud} pathname={pathname} onPick={pick} />
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href={AUD_HOME[isEs ? "es" : "en"][aud]} className="flex flex-shrink-0 items-center" aria-label={t.home} onClick={closeAll}>
          <span className="text-lg font-bold tracking-tight text-white">
            merahki<span className="text-gradient-blue-pink">.ai</span>
          </span>
        </Link>

        {/* Escritorio */}
        <ul className="hidden items-center gap-1 lg:flex" onMouseLeave={closeSoon}>
          {menus.map((m) => {
            const isOpen = open === m.id;
            return (
              <li key={m.id}>
                <button
                  ref={(el) => { triggers.current[m.id] = el; }}
                  id={`${uid}-t-${m.id}`}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`${uid}-p-${m.id}`}
                  onMouseEnter={() => openSoon(m.id)}
                  onClick={() => { clear(); setOpen(isOpen ? null : m.id); }}
                  onKeyDown={(e) => { if (e.key === "ArrowDown") { e.preventDefault(); setOpen(m.id); focusFirst(); } }}
                  className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#C084FC]/60 ${isOpen ? "bg-white/[0.08] text-white" : menuActive(m) ? "text-white" : "text-white/70 hover:text-white"}`}
                >
                  {m.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} aria-hidden />
                </button>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Link
            href={meetingHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent-purple px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-accent-purple/85"
          >
            {t.cta} <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>

        <button
          type="button"
          className="rounded-full p-2 text-white outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC]/60 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? t.close : t.open}
          aria-expanded={mobileOpen}
          aria-controls={`${uid}-mobile`}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Panel de escritorio: uno solo, centrado, con el contenido del menú abierto */}
      {current && (
        <div className="absolute left-0 right-0 top-[100px] hidden px-4 lg:block" onMouseEnter={clear} onMouseLeave={closeSoon}>
          <div
            ref={panelRef}
            id={`${uid}-p-${current.id}`}
            role="region"
            aria-labelledby={`${uid}-t-${current.id}`}
            onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node) && !Object.values(triggers.current).includes(e.relatedTarget as HTMLButtonElement)) closeSoon(); }}
            className="nav-panel-in mx-auto mt-2 overflow-y-auto rounded-2xl border border-white/10 bg-[#0D0817] shadow-[0_30px_80px_rgba(0,0,0,0.65)]"
            style={{ width: `min(${current.width}px, calc(100vw - 32px))`, maxHeight: "calc(100vh - 132px)" }}
          >
            <div className="grid gap-6 p-5" style={{ gridTemplateColumns: `${current.columns.map((c) => (c.compact ? "1.5fr" : "1fr")).join(" ")}${current.featured ? " 250px" : ""}` }}>
              {current.columns.map((c) => <Column key={c.title} col={c} isActive={isActive} onNavigate={closeAll} />)}
              {current.featured && <Featured f={current.featured} onNavigate={closeAll} />}
            </div>
            <div className="flex items-center justify-between gap-4 border-t border-white/10 px-5 py-3 text-sm">
              <span className="text-white/50">{t.need}</span>
              <span className="flex items-center gap-5">
                <a href={t.quoteHref} onClick={closeAll} className="font-semibold text-white/85 outline-none hover:text-white focus-visible:underline">{t.quote}</a>
                <Link href={meetingHref} target="_blank" rel="noopener noreferrer" onClick={closeAll} className="inline-flex items-center gap-1 font-semibold text-[#C084FC] outline-none hover:text-white focus-visible:underline">
                  {t.cta} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Celular y tableta: cajón a pantalla completa */}
      {mobileOpen && (
        <div id={`${uid}-mobile`} className="fixed inset-x-0 bottom-0 top-[100px] flex flex-col border-t border-white/10 bg-[#07040C] lg:hidden">
          <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-3">
            {menus.map((m) => {
              const exp = mobileSection === m.id;
              return (
                <div key={m.id} className="border-b border-white/[0.07]">
                  <button
                    type="button"
                    aria-expanded={exp}
                    onClick={() => setMobileSection(exp ? null : m.id)}
                    className={`flex w-full items-center justify-between py-4 text-left text-base font-semibold outline-none focus-visible:text-[#C084FC] ${menuActive(m) ? "text-white" : "text-white/85"}`}
                  >
                    {m.label}
                    <ChevronDown className={`h-5 w-5 text-white/50 transition-transform duration-200 ${exp ? "rotate-180" : ""}`} aria-hidden />
                  </button>
                  {exp && (
                    <div className="space-y-4 pb-4">
                      {m.columns.map((c) => <Column key={c.title} col={c} isActive={isActive} onNavigate={closeAll} />)}
                      {m.featured && <div className="pt-1"><Featured f={m.featured} onNavigate={closeAll} /></div>}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="space-y-2 border-t border-white/10 bg-black/60 px-5 pb-[max(env(safe-area-inset-bottom),16px)] pt-3">
            <Link href={meetingHref} target="_blank" rel="noopener noreferrer" onClick={closeAll} className="flex w-full items-center justify-center gap-2 rounded-full bg-accent-purple px-4 py-3 text-sm font-semibold text-white">
              {t.cta} <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a href={t.quoteHref} onClick={closeAll} className="flex w-full items-center justify-center rounded-full border border-white/20 px-4 py-3 text-sm font-semibold text-white">
              {t.quote}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
