interface GlowBackgroundProps {
  indigoPosition?: { x: string; y: string };
  rustPosition?: { x: string; y: string };
}

export default function GlowBackground({
  indigoPosition = { x: "25%", y: "45%" },
  rustPosition = { x: "78%", y: "65%" },
}: GlowBackgroundProps) {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Large indigo-violet orb — drifts on glowDriftA (24s) */}
      <div
        className="glow-orb-indigo absolute rounded-full blur-[130px] opacity-55"
        style={{
          width: "72vw",
          height: "65vh",
          left: indigoPosition.x,
          top: indigoPosition.y,
          background:
            "radial-gradient(ellipse, #5525d0 0%, #3a18a8 45%, transparent 70%)",
        }}
      />
      {/* Smaller rust-magenta orb — drifts on glowDriftB (30s) */}
      <div
        className="glow-orb-rust absolute rounded-full blur-[110px] opacity-40"
        style={{
          width: "48vw",
          height: "50vh",
          left: rustPosition.x,
          top: rustPosition.y,
          background:
            "radial-gradient(ellipse, #b03260 0%, #801840 45%, transparent 70%)",
        }}
      />
    </div>
  );
}
