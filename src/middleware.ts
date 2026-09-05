import { NextRequest, NextResponse } from "next/server";
import { ES_ROUTES } from "@/lib/routes.generated";

const LANG_COOKIE = "preferred-lang";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

// Rutas con versión ES real (generadas desde src/app/es por scripts/generate-routes.mjs).
// Si una página solo existe en inglés, se sirve tal cual en vez de redirigir a un 404.
const ES_ROUTE_SET = new Set<string>(ES_ROUTES);

function hasEsVersion(pathname: string): boolean {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  return ES_ROUTE_SET.has(normalized);
}

function detectLanguage(acceptLanguage: string | null): "es" | "en" {
  if (!acceptLanguage) return "en";
  const langs = acceptLanguage
    .split(",")
    .map((l) => l.split(";")[0].trim().toLowerCase());
  for (const lang of langs) {
    if (lang.startsWith("es")) return "es";
    if (lang.startsWith("en")) return "en";
  }
  return "en";
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isEsPath = pathname === "/es" || pathname.startsWith("/es/");

  // Cookie preference takes priority; fall back to Accept-Language on first visit
  const cookieVal = request.cookies.get(LANG_COOKIE)?.value;
  const hasCookie = cookieVal === "es" || cookieVal === "en";
  const lang: "es" | "en" = hasCookie
    ? (cookieVal as "es" | "en")
    : detectLanguage(request.headers.get("accept-language"));

  if (lang === "es" && !isEsPath && hasEsVersion(pathname)) {
    // clone() conserva el query string (UTMs) en el redirect
    const url = request.nextUrl.clone();
    url.pathname = "/es" + (pathname === "/" ? "" : pathname);
    const res = NextResponse.redirect(url);
    if (!hasCookie)
      res.cookies.set(LANG_COOKIE, "es", { path: "/", maxAge: COOKIE_MAX_AGE, sameSite: "lax" });
    return res;
  }

  if (lang === "en" && isEsPath) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    const res = NextResponse.redirect(url);
    if (!hasCookie)
      res.cookies.set(LANG_COOKIE, "en", { path: "/", maxAge: COOKIE_MAX_AGE, sameSite: "lax" });
    return res;
  }

  // No redirect needed (o la ruta solo existe en EN) — persist detected lang if cookie not set yet
  const res = NextResponse.next();
  if (!hasCookie)
    res.cookies.set(LANG_COOKIE, lang, { path: "/", maxAge: COOKIE_MAX_AGE, sameSite: "lax" });
  return res;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|images|videos|api|sitemap\\.xml|robots\\.txt|decks|showroom|portafolio-virtualizacion).*)",
  ],
};
