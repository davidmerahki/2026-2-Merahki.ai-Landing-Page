import CatalogoExperiencias, { catalogoMetadata } from "@/components/contenidos/CatalogoExperiencias";

// Catalog of learning experiences (24-nov-2026; replaces the 55 content types). Spanish twin: /es/tipos-de-contenido-interactivo.
export const metadata = catalogoMetadata("en");

export default function Page() {
  return <CatalogoExperiencias lang="en" />;
}
