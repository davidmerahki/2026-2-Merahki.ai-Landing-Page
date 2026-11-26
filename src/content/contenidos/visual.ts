import type { FamiliaId } from "./experiencias";

/** Fondo de la vista previa de cada familia: dos halos de color sobre un fondo casi negro (catálogo, 25-nov-2026). */
export const FONDO: Record<FamiliaId, string> = {
  conversar: "radial-gradient(120% 95% at 88% -5%, rgba(124,58,237,.62), transparent 62%), radial-gradient(90% 80% at -5% 105%, rgba(219,39,119,.28), transparent 60%), #0C0618",
  construir: "radial-gradient(120% 95% at 88% -5%, rgba(14,165,233,.5), transparent 62%), radial-gradient(90% 80% at -5% 105%, rgba(124,58,237,.34), transparent 60%), #050F1C",
  vivir: "radial-gradient(120% 95% at 88% -5%, rgba(219,39,119,.55), transparent 62%), radial-gradient(90% 80% at -5% 105%, rgba(124,58,237,.34), transparent 60%), #13061A",
  practicar: "radial-gradient(120% 95% at 88% -5%, rgba(245,158,11,.45), transparent 62%), radial-gradient(90% 80% at -5% 105%, rgba(219,39,119,.28), transparent 60%), #130A07",
};

/** Color de acento de cada familia (número de la sección, borde y halo al pasar el mouse). */
export const ACENTO: Record<FamiliaId, string> = { conversar: "#C4B5FD", construir: "#7DD3FC", vivir: "#F9A8D4", practicar: "#FCD34D" };
