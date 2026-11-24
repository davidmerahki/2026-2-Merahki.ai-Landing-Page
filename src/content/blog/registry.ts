import type { Articulo, Lang } from "./types";
import { ARTICULOS } from "./registry.generated";

export const BASE_URL = "https://merahki.ai";

export function articulosDe(lang: Lang): Articulo[] {
  return ARTICULOS.filter((a) => a.lang === lang).sort((a, b) => (b.published + b.slug).localeCompare(a.published + a.slug));
}

export function getArticulo(lang: Lang, slug: string): Articulo | undefined {
  return ARTICULOS.find((a) => a.lang === lang && a.slug === slug);
}

export function pathDe(a: Pick<Articulo, "lang" | "slug" | "servicio">): string {
  if (a.servicio) return a.servicio.path;
  return a.lang === "es" ? `/es/blog/${a.slug}` : `/blog/${a.slug}`;
}

export function urlDe(a: Pick<Articulo, "lang" | "slug" | "servicio">): string {
  return `${BASE_URL}${pathDe(a)}`;
}

/** Versión del artículo en el otro idioma, si existe y apunta de vuelta. */
export function alterno(a: Articulo): Articulo | undefined {
  if (!a.altSlug) return undefined;
  const otro = getArticulo(a.lang === "es" ? "en" : "es", a.altSlug);
  return otro && otro.altSlug === a.slug ? otro : undefined;
}
