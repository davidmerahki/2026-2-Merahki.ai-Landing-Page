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
        "relative overflow-hidden rounded-[2rem] border bg-white/[0.045] p-6 md:p-8 shadow-2xl shadow-black/20 backdrop-blur-xl",
        variant === "purple" && "border-accent-purple/35",
        variant === "blue" && "border-accent-blue/35",
      )}
    >
      <div className={clsx("absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent", variant === "purple" ? "via-accent-peach/70" : "via-accent-blue/70")} />
      <div className={clsx("absolute -right-12 -top-12 h-32 w-32 rounded-full blur-3xl", variant === "purple" ? "bg-accent-purple/15" : "bg-accent-blue/15")} />
      <p className={clsx("relative text-sm font-semibold tracking-[0.2em] uppercase mb-4", variant === "purple" ? "text-accent-peach" : "text-accent-blue")}>{title}</p>
      <div className="relative text-white/78 text-base md:text-lg leading-relaxed">{children}</div>
    </aside>
  );
}
