import { clsx } from "clsx";

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "gradient" | "early-access";
}

export default function SectionBadge({
  children,
  className,
  variant = "default",
}: SectionBadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center px-3 py-1 rounded-full section-badge",
        variant === "default" && "bg-white/10 text-white/60 border border-white/10",
        variant === "gradient" && "border-gradient-blue-pink text-white/80",
        variant === "early-access" && "bg-accent-purple/20 text-accent-purple border border-accent-purple/30",
        className
      )}
    >
      {children}
    </span>
  );
}
