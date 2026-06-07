type Metric = {
  value: string;
  label: string;
};

interface MetricStripProps {
  metrics: Metric[];
}

export default function MetricStrip({ metrics }: MetricStripProps) {
  return (
    <dl className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
      {metrics.map((metric, index) => (
        <div
          key={`${metric.value}-${metric.label}`}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] px-5 py-5 text-left shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-peach/60 to-transparent opacity-70" />
          <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent-purple/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
          <dt className="relative text-xs md:text-sm font-medium uppercase tracking-[0.14em] text-white/45 leading-snug">{metric.label}</dt>
          <dd className="relative mt-3 flex items-end justify-between gap-4">
            <span className="text-3xl md:text-5xl font-bold tracking-tight text-white">{metric.value}</span>
            <span className="mb-1 text-xs font-semibold text-accent-peach/60">0{index + 1}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
