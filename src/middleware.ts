import { NextRequest, NextResponse } from "next/server";

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
  const isEsPath = pathname.startsWith("/es");
  const lang = detectLanguage(request.headers.get("accept-language"));

  if (lang === "es" && !isEsPath) {
    const esPath = "/es" + (pathname === "/" ? "" : pathname);
    return NextResponse.redirect(new URL(esPath, request.url));
  }

  if (lang !== "es" && isEsPath) {
    const enPath = pathname.slice(3) || "/";
    return NextResponse.redirect(new URL(enPath, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|images|api|sitemap\\.xml|robots\\.txt).*)",
  ],
};
