import Image from "next/image";
import { clsx } from "clsx";
import { Sparkles } from "lucide-react";
import SectionBadge from "./SectionBadge";

interface AgentCardProps {
  name: string;
  availability: "available" | "early-access";
  description: string;
  image?: string;
  className?: string;
}

export default function AgentCard({
  name,
  availability,
  description,
  image,
  className,
}: AgentCardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-transparent relative overflow-hidden flex flex-col h-full",
        "bg-gradient-to-b from-white/5 to-transparent",
        availability === "available"
          ? "border-accent-purple/30"
          : "border-white/10",
        className
      )}
    >
      {/* Glow overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background:
            availability === "available"
              ? "radial-gradient(ellipse at top left, #a855f7 0%, transparent 60%)"
              : "radial-gradient(ellipse at top left, #3b82f6 0%, transparent 60%)",
        }}
      />

      {/* Image (optional) */}
      {image && (
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-2xl flex-shrink-0">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <SectionBadge
            variant={availability === "available" ? "gradient" : "early-access"}
          >
            {availability === "available" ? "Available Now" : "Early Access Via Labs"}
          </SectionBadge>
        </div>
        <h3 className="text-white font-semibold text-base mb-2">{name}</h3>
        <p className="text-white/60 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
