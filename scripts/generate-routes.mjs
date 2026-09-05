#!/usr/bin/env node
/**
 * Genera src/lib/routes.generated.ts a partir de las páginas reales bajo src/app.
 *
 * Fuente de verdad: el filesystem. Así el middleware, el sitemap y el switcher de
 * idioma saben qué rutas tienen versión en español SIN listas mantenidas a mano
 * (el bug de 2026-09: se redirigía a /es/<ruta> aunque la página ES no existiera).
 *
 * Se ejecuta solo en `npm run dev` y `npm run build` (hooks predev / prebuild).
 * Manual: `npm run routes`.
 */
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const APP_DIR = join(ROOT, "src", "app");
const OUT_FILE = join(ROOT, "src", "lib", "routes.generated.ts");
const PAGE_FILES = new Set(["page.tsx", "page.ts", "page.jsx", "page.js", "page.mdx", "page.md"]);

/** Recorre src/app y devuelve las rutas públicas ("/" , "/blog/x", "/es/blog/x", ...). */
function collectRoutes(dir, segments = [], out = []) {
  const entries = readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name));
  if (entries.some((e) => e.isFile() && PAGE_FILES.has(e.name))) {
    out.push("/" + segments.join("/"));
  }
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const name = entry.name;
    if (name.startsWith("_") || name.startsWith("@")) continue; // carpetas privadas / parallel routes
    if (name.startsWith("[")) {
      console.warn(`[generate-routes] segmento dinámico ignorado: ${join(...segments, name)} (el middleware solo soporta rutas estáticas)`);
      continue;
    }
    const isGroup = name.startsWith("(") && name.endsWith(")"); // route groups no cuentan en la URL
    collectRoutes(join(dir, name), isGroup ? segments : [...segments, name], out);
  }
  return out;
}

const all = collectRoutes(APP_DIR);
const EN_ROUTES = all.filter((r) => r !== "/es" && !r.startsWith("/es/")).sort();
const ES_ROUTES = all
  .filter((r) => r === "/es" || r.startsWith("/es/"))
  .map((r) => r.slice(3) || "/")
  .sort();

const fmt = (list) => list.map((r) => `  ${JSON.stringify(r)},`).join("\n");
const content = `// ARCHIVO GENERADO por scripts/generate-routes.mjs — NO EDITAR A MANO.
// Se regenera en \`npm run dev\` y \`npm run build\` (hooks predev/prebuild) a partir
// de los page.tsx reales bajo src/app. Fuente de verdad: el filesystem.

/** Rutas públicas en inglés (raíz del sitio). */
export const EN_ROUTES: readonly string[] = [
${fmt(EN_ROUTES)}
];

/** Rutas que tienen versión en español bajo /es (sin el prefijo /es; "/" = home ES). */
export const ES_ROUTES: readonly string[] = [
${fmt(ES_ROUTES)}
];
`;

const previous = existsSync(OUT_FILE) ? readFileSync(OUT_FILE, "utf8") : null;
if (previous === content) {
  console.log(`[generate-routes] sin cambios (${EN_ROUTES.length} EN, ${ES_ROUTES.length} ES)`);
} else {
  writeFileSync(OUT_FILE, content);
  console.log(`[generate-routes] escrito src/lib/routes.generated.ts (${EN_ROUTES.length} EN, ${ES_ROUTES.length} ES)`);
}
