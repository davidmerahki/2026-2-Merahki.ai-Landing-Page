import { notFound } from "next/navigation";
import ArticleView, { articleMetadata } from "@/components/blog/ArticleView";
import { articulosDe, getArticulo } from "@/content/blog/registry";

// Artículos del blog en inglés escritos como datos (src/content/blog/en). Las páginas
// hechas a mano en src/app/blog/<slug> tienen prioridad sobre esta ruta.
export const dynamicParams = false;

export function generateStaticParams() {
  return articulosDe("en").map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticulo("en", slug);
  return a ? articleMetadata(a) : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticulo("en", slug);
  if (!a) notFound();
  return <ArticleView a={a} />;
}
