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
      {metrics.map((metric) => (
        <div key={`${metric.value}-${metric.label}`} className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5 text-left">
          <dt className="text-sm text-white/50 leading-snug">{metric.label}</dt>
          <dd className="mt-2 text-3xl md:text-4xl font-bold text-white">{metric.value}</dd>
        </div>
      ))}
    </dl>
  );
}
