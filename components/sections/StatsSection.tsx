import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 200, suffix: "+", label: "Manufacturers" },
  { value: 10, suffix: "+", label: "Categories" },
  { value: 5, suffix: "", label: "Major Platforms" },
  { value: 3, suffix: "X", label: "Average Growth" }
];

export function StatsSection() {
  return (
    <section className="relative border-b border-slate-200/80 bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-slate-200/80 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.05)]">
          <div className="px-6 py-10 sm:px-8 sm:py-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-500">
              Scale snapshot
            </p>
            <h2 className="mt-3 max-w-[22ch] font-sans text-3xl font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              The backbone of global commerce
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600 sm:text-base">
              A single operating layer for catalogue, channels, and fulfilment—built to handle high-volume commerce with
              enterprise-grade reliability.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px border-t border-slate-200/80 bg-slate-200/80 sm:grid-cols-4">
            {stats.map((stat) => (
              <article key={stat.label} className="bg-white px-6 py-7 sm:px-8">
                <p className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1.5 text-[12px] font-medium text-slate-500 sm:text-[13px]">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
