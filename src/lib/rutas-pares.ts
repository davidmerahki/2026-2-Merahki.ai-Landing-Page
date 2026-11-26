// Páginas cuyo slug cambia según el idioma (26-nov-2026). Clave: ruta en inglés; valor: ruta en español.
// La usan el middleware (redirección por idioma preferido), el selector de idioma, el menú y la metadata.
export const PARES_EN_ES: Readonly<Record<string, string>> = {
  "/companies": "/es/empresas",
};

export const PARES_ES_EN: Readonly<Record<string, string>> = Object.fromEntries(
  Object.entries(PARES_EN_ES).map(([en, es]) => [es, en])
);
