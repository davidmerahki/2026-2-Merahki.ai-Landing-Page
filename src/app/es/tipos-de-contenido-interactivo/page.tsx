import CatalogoContenidos, { catalogoMetadata } from "@/components/contenidos/CatalogoContenidos";

// Catálogo de los 55 tipos de contenido interactivo (lámina 20 del showroom). Gemela en inglés: /interactive-content-types.
export const metadata = catalogoMetadata("es");

export default function Page() {
  return <CatalogoContenidos lang="es" />;
}
