import CatalogoExperiencias, { catalogoMetadata } from "@/components/contenidos/CatalogoExperiencias";

// Catálogo de experiencias de aprendizaje (24-nov-2026; reemplaza los 55 tipos). Gemela en inglés: /interactive-content-types.
export const metadata = catalogoMetadata("es");

export default function Page() {
  return <CatalogoExperiencias lang="es" />;
}
