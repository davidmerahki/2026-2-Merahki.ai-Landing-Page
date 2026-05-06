"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

export default function BlogBackLink() {
  const pathname = usePathname();
  const isEs = pathname.startsWith("/es/");
  return (
    <Link
      href={isEs ? "/es/blog" : "/blog"}
      className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm mb-8 transition-colors"
    >
      <ArrowLeft className="w-4 h-4" />
      {isEs ? "Blog & Artículos" : "Blog & Articles"}
    </Link>
  );
}
