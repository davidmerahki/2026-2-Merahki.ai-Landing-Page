import type { LucideIcon } from "lucide-react";

/**
 * Panel de marca para las páginas de funciones.
 * Reemplaza los videos que se cargaban desde el sitio del proveedor del LMS
 * (regla: el proveedor nunca se nombra ni se muestra hacia afuera).
 * Usa solo tokens de tailwind.config.ts.
 */
export default function FeaturePanel({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-gradient-to-br from-glow-indigo/40 via-deep to-glow-rust/25 flex items-center justify-center"
    >
      <div className="absolute -top-1/4 -left-1/4 w-2/3 h-2/3 rounded-full bg-glow-indigo/30 blur-3xl" aria-hidden="true" />
      <div className="relative text-center px-8">
        <Icon className="w-12 h-12 text-white/80 mx-auto mb-4" aria-hidden="true" />
        <p className="text-white/85 text-lg md:text-xl font-semibold leading-snug">{label}</p>
      </div>
    </div>
  );
}
