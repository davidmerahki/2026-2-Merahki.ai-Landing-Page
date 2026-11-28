// Páginas cuyo slug cambia según el idioma (26-nov-2026). Clave: ruta en inglés; valor: ruta en español.
// La usan el middleware (redirección por idioma preferido), el selector de idioma, el menú y la metadata.
export const PARES_EN_ES: Readonly<Record<string, string>> = {
  "/companies": "/es/empresas",
};

// Páginas que solo existen en español: el botón de idioma lleva a esta ruta en inglés (27-nov-2026).
export const SOLO_ES: Readonly<Record<string, string>> = {
  "/es/gobiernos": "/",
};

export const PARES_ES_EN: Readonly<Record<string, string>> = Object.fromEntries(
  Object.entries(PARES_EN_ES).map(([en, es]) => [es, en])
);
