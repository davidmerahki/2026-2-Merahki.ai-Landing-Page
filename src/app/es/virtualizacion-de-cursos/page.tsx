import ArticleView, { articleMetadata } from "@/components/blog/ArticleView";
import { servicio } from "@/content/servicios/virtualizacion-es";

// Página de servicio indexable (24-nov-2026). Gemela en inglés: /course-virtualization.
export const metadata = articleMetadata(servicio);

export default function Page() {
  return <ArticleView a={servicio} />;
}
