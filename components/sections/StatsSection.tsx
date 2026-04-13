import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 200, suffix: "+", label: "Manufacturers" },
  { value: 10, suffix: "+", label: "Categories" },
  { value: 5, suffix: "", label: "Major Platforms" },
  { value: 3, suffix: "X", label: "Average Growth" }
];

export function StatsSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/80 bg-[#f5f7f6] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-slate-200/80 bg-[#f8faf9]">
          <div className="border-b border-slate-200/80 px-6 py-12 sm:px-8 sm:py-14">
            <h2 className="mx-auto max-w-[12ch] text-center font-sans text-4xl font-semibold leading-[1.06] tracking-tight text-slate-900 sm:text-6xl">
              The backbone of global commerce
            </h2>
          </div>

          <div className="grid md:grid-cols-4">
            {stats.map((stat, index) => (
              <article
                key={stat.label}
                className="group relative border-t border-slate-200/80 px-6 py-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary-200/70 hover:bg-primary-50/55 hover:shadow-[0_14px_26px_-18px_rgba(22,163,74,0.45)] sm:px-8"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
                  aria-hidden
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50/90 via-white to-primary-50/55" />
                </div>
                <p className="relative text-4xl font-semibold tracking-tight text-slate-500 transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:text-primary-700 sm:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="relative mt-2 max-w-[20ch] text-sm leading-snug text-slate-500 transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:text-primary-700">
                  {stat.label}
                </p>
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-primary-400 to-primary-600 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                {index < stats.length - 1 ? (
                  <span className="pointer-events-none absolute right-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-primary-100 md:block" />
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
