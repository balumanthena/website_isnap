import Link from "next/link";

const accent = "#64B549";

export type ProcessStep = { step: string; text: string };

type ServicePremiumLayoutProps = {
  serviceLabel: string;
  title: string;
  overview: string;
  processSteps: ProcessStep[];
  benefits: string[];
  benefitsSupportingText: string;
  results: string[];
  tools: string[];
  closingStatement: string;
};

function parseResultStat(line: string): { big: string; rest: string } {
  const reduced = line.match(/^Reduced manual dependency by\s+(\d+%)$/i);
  if (reduced) return { big: reduced[1], rest: "Reduced manual dependency by" };
  const leadPct = line.match(/^(\d+%)\s+(.+)$/);
  if (leadPct) return { big: leadPct[1], rest: leadPct[2] };
  const leadRange = line.match(/^(\d+\s*[xX](?:\s*[-–]\s*\d+\s*[xX])?(?:\+)?)\s+(.+)$/);
  if (leadRange) return { big: leadRange[1].replace(/\s+/g, ""), rest: leadRange[2] };
  const leadPctPlus = line.match(/^(\d+%\+?)\s+(.+)$/);
  if (leadPctPlus) return { big: leadPctPlus[1], rest: leadPctPlus[2] };
  return { big: line, rest: "" };
}

function ProgramFrame({
  processCount,
  benefitsCount,
  toolsCount
}: {
  processCount: number;
  benefitsCount: number;
  toolsCount: number;
}) {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div
        className="pointer-events-none absolute -inset-6 rounded-[2rem] opacity-90 blur-3xl"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${accent}33 0%, transparent 65%)`
        }}
        aria-hidden
      />
      <div
        className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_16px_42px_-24px_rgba(15,23,42,0.2)] sm:p-6"
        style={{ boxShadow: `0 16px 42px -24px rgba(15,23,42,0.2), 0 0 0 1px rgba(100,181,73,0.08)` }}
      >
        <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Execution program</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">Delivery control center</p>
          </div>
          <span
            className="inline-flex h-8 items-center justify-center rounded-full px-3 text-[10px] font-semibold uppercase tracking-wide text-white"
            style={{ backgroundColor: accent }}
          >
            Active
          </span>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2.5">
          {[
            { label: "Steps", value: String(processCount) },
            { label: "Benefits", value: String(benefitsCount) },
            { label: "Tools", value: String(toolsCount) }
          ].map((metric) => (
            <div key={metric.label} className="rounded-xl border border-slate-200/80 bg-slate-50/80 px-3 py-3.5">
              <p className="text-[10px] uppercase tracking-wide text-slate-500">{metric.label}</p>
              <p className="mt-1 text-xl font-semibold tracking-tight text-slate-900">{metric.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-xl border border-slate-200/80 bg-white p-3.5">
          <div className="flex items-center justify-between text-[11px] text-slate-500">
            <span>Program readiness</span>
            <span className="font-semibold text-slate-700">88%</span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-[88%] rounded-full" style={{ backgroundColor: accent }} />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2.5">
          <div className="rounded-xl border border-slate-200/70 bg-slate-50/70 p-3">
            <p className="text-[10px] uppercase tracking-wide text-slate-500">Governance</p>
            <p className="mt-1 text-xs font-medium leading-snug text-slate-700">Compliance and approval workflow locked.</p>
          </div>
          <div className="rounded-xl border border-slate-200/70 bg-slate-50/70 p-3">
            <p className="text-[10px] uppercase tracking-wide text-slate-500">Velocity</p>
            <p className="mt-1 text-xs font-medium leading-snug text-slate-700">Execution cadence maintained across channels.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServicePremiumLayout({
  serviceLabel,
  title,
  overview,
  processSteps,
  benefits,
  benefitsSupportingText,
  results,
  tools,
  closingStatement
}: ServicePremiumLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F8FAF9] font-body">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200/50">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(100,181,73,0.14),transparent_56%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:72px_72px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-0 top-1/2 h-[min(32rem,70vw)] w-[min(32rem,70vw)] -translate-y-1/2 translate-x-1/4 rounded-full opacity-40 blur-[100px]"
          style={{ background: `radial-gradient(circle, ${accent}33 0%, transparent 70%)` }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">{serviceLabel}</p>
            <h1 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[3.2rem] lg:leading-[1.06]">
              {title}
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-base lg:text-lg">{overview}</p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="rounded-full border border-primary-200/80 bg-primary-50/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-700">
                Automation-first
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-600">
                Enterprise delivery
              </span>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
                style={{ backgroundColor: accent }}
              >
                Get started
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300/80 bg-white/60 px-8 text-sm font-semibold text-slate-800 backdrop-blur-sm transition hover:border-slate-400 hover:bg-white"
              >
                Talk to expert
              </Link>
            </div>
          </div>
          <ProgramFrame processCount={processSteps.length} benefitsCount={benefits.length} toolsCount={tools.length} />
        </div>
      </section>

      {/* Process */}
      <section id="process" className="relative scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div
          className="pointer-events-none absolute left-0 top-0 h-64 w-full bg-[radial-gradient(ellipse_60%_100%_at_0%_0%,rgba(100,181,73,0.06),transparent_50%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Process</h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map(({ step, text }) => (
              <article
                key={step}
                className="group rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition duration-200 ease-out hover:border-primary-200/80 hover:shadow-[0_16px_30px_-22px_rgba(15,23,42,0.4)] sm:p-5"
              >
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-primary-50 px-1.5 text-[10px] font-semibold tracking-wide text-primary-700 ring-1 ring-primary-100">
                    {step}
                  </span>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Step</p>
                </div>
                <p className="mt-2.5 text-base font-semibold leading-snug text-slate-900 sm:text-[17px]">{text}</p>
                <span className="mt-3 block h-px w-full bg-gradient-to-r from-primary-100/80 via-primary-200/30 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits + Tools */}
      <section id="benefits" className="scroll-mt-24 border-t border-slate-200/40 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Key Benefits</h2>
          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-12">
            <div>
              <p className="text-2xl font-semibold tracking-tight text-slate-900">Outcomes your leadership can track</p>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600 sm:text-base">{benefitsSupportingText}</p>
              <ul className="mt-6 grid gap-3">
                {benefits.map((item) => (
                  <li key={item} className="flex gap-3 rounded-xl border border-slate-200/80 bg-white px-4 py-3.5">
                    <span
                      className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white"
                      style={{ backgroundColor: accent }}
                    >
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm leading-relaxed text-slate-700 sm:text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_10px_30px_-24px_rgba(15,23,42,0.3)] sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Tools and platforms</p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {tools.map((name) => (
                  <span
                    key={name}
                    className="rounded-full border border-slate-200 bg-slate-50/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-600"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-700">Results / Proof Points</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {results.map((line) => {
              const { big, rest } = parseResultStat(line);
              return (
                <article key={line} className="rounded-2xl border border-primary-100 bg-white p-5 shadow-[0_10px_30px_-20px_rgba(22,163,74,0.35)] sm:p-6">
                  <p className="text-4xl font-semibold tracking-tight text-primary-700 sm:text-5xl lg:text-6xl">{big}</p>
                  {rest ? <p className="mt-2 text-sm font-medium leading-snug text-primary-800/80 sm:text-base">{rest}</p> : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-[#0B1220] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 100%, ${accent}35 0%, transparent 55%)`
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_20%,rgba(100,181,73,0.12),transparent_50%)]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-[15px] leading-relaxed text-slate-300 sm:text-base lg:text-lg">{closingStatement}</p>
          <h2 className="mt-8 text-2xl font-semibold tracking-tight text-white sm:mt-10 sm:text-3xl">
            Want this service implemented for your brand?
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
            <Link
              href="/contact"
              className="inline-flex h-12 min-w-[10rem] items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Talk to an expert
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 min-w-[10rem] items-center justify-center rounded-full px-8 text-sm font-semibold text-white shadow-lg transition hover:opacity-95"
              style={{ backgroundColor: accent, boxShadow: `0 12px 40px -12px ${accent}99` }}
            >
              Get started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
