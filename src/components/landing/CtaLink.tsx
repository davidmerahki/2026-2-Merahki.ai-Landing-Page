"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { track } from "@vercel/analytics";
import { ArrowRight } from "lucide-react";

const styles = {
  primary:
    "inline-flex min-h-12 items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-void bg-gradient-peach-purple hover:scale-[1.03] hover:shadow-[0_0_36px_rgba(168,85,247,0.45)] active:scale-[0.99] transition-all text-sm",
  secondary:
    "inline-flex min-h-12 items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white border border-white/20 hover:bg-white/5 hover:border-white/40 transition-all text-sm",
} as const;

export default function CtaLink({
  href,
  event,
  variant = "primary",
  children,
  arrow = true,
  target,
  rel,
}: {
  href: string;
  event: string;
  variant?: keyof typeof styles;
  children: ReactNode;
  arrow?: boolean;
  target?: string;
  rel?: string;
}) {
  return (
    <Link href={href} target={target} rel={rel} className={styles[variant]} onClick={() => track(event)}>
      {children}
      {arrow && <ArrowRight className="w-4 h-4" />}
    </Link>
  );
}
