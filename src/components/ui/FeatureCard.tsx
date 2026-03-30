import { clsx } from "clsx";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  className?: string;
  variant?: "dark" | "white";
  iconClassName?: string;
  iconBg?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  variant = "dark",
  iconClassName,
  iconBg,
}: FeatureCardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl p-6 transition-all duration-300 group",
        variant === "dark" && "glass-card hover:bg-white/8 hover:border-white/15",
        variant === "white" && "bg-white text-black shadow-2xl",
        className
      )}
    >
      {Icon && (
        <div
          className={clsx(
            "w-10 h-10 rounded-xl flex items-center justify-center mb-4",
            iconBg ?? (variant === "dark" ? "bg-white/10" : "bg-black/5")
          )}
        >
          <Icon
            className={clsx(
              "w-5 h-5",
              iconClassName ?? (variant === "dark" ? "text-accent-purple" : "text-black")
            )}
          />
        </div>
      )}
      <h3
        className={clsx(
          "font-semibold text-base mb-2",
          variant === "dark" && "text-white",
          variant === "white" && "text-black"
        )}
      >
        {title}
      </h3>
      <p
        className={clsx(
          "text-sm leading-relaxed",
          variant === "dark" && "text-white/60",
          variant === "white" && "text-black/60"
        )}
      >
        {description}
      </p>
    </div>
  );
}
