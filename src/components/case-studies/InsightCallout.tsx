import { clsx } from "clsx";

interface InsightCalloutProps {
  title: string;
  children: React.ReactNode;
  variant?: "purple" | "blue";
}

export default function InsightCallout({ title, children, variant = "purple" }: InsightCalloutProps) {
  return (
    <aside
      className={clsx(
        "rounded-3xl border bg-white/[0.03] p-6 md:p-8",
        variant === "purple" && "border-accent-purple/40",
        variant === "blue" && "border-accent-blue/40",
      )}
    >
      <p className={clsx("text-sm font-semibold tracking-[0.2em] uppercase mb-4", variant === "purple" ? "text-accent-peach" : "text-accent-blue")}>{title}</p>
      <div className="text-white/75 text-base md:text-lg leading-relaxed">{children}</div>
    </aside>
  );
}
