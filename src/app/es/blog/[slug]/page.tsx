import { notFound } from "next/navigation";
import ArticleView, { articleMetadata } from "@/components/blog/ArticleView";
import { articulosDe, getArticulo } from "@/content/blog/registry";

// Artículos del blog en español escritos como datos (src/content/blog/es). Las páginas
// hechas a mano en src/app/es/blog/<slug> tienen prioridad sobre esta ruta.
export const dynamicParams = false;

export function generateStaticParams() {
  return articulosDe("es").map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticulo("es", slug);
  return a ? articleMetadata(a) : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticulo("es", slug);
  if (!a) notFound();
  return <ArticleView a={a} />;
}
