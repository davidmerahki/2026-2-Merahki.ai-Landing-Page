import CatalogoContenidos, { catalogoMetadata } from "@/components/contenidos/CatalogoContenidos";

// Catalog of the 55 interactive content types (showroom slide 20). Spanish twin: /es/tipos-de-contenido-interactivo.
export const metadata = catalogoMetadata("en");

export default function Page() {
  return <CatalogoContenidos lang="en" />;
}
