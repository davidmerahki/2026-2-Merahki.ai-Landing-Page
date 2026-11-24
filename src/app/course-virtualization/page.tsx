import ArticleView, { articleMetadata } from "@/components/blog/ArticleView";
import { servicio } from "@/content/servicios/virtualizacion-en";

// Página de servicio indexable (24-nov-2026). Gemela en español: /es/virtualizacion-de-cursos.
export const metadata = articleMetadata(servicio);

export default function Page() {
  return <ArticleView a={servicio} />;
}
