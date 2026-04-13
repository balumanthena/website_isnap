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
  return { big: line, rest: "" };
}

function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div
        className="pointer-events-none absolute -inset-8 rounded-[2rem] opacity-90 blur-3xl"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${accent}45 0%, transparent 65%)`
        }}
        aria-hidden
      />
      <div
        className="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white/80 p-6 shadow-[0_24px_48px_-28px_rgba(15,23,42,0.18)] backdrop-blur-sm transition-transform duration-500 ease-out hover:-translate-y-1"
        style={{ boxShadow: `0 24px 48px -28px rgba(15,23,42,0.18), 0 0 0 1px rgba(100,181,73,0.08)` }}
      >
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="h-9 flex-1 rounded-lg bg-slate-100/90" />
          <div className="h-9 w-20 rounded-full" style={{ backgroundColor: accent }} />
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-xl bg-slate-50/90 px-3 py-4">
              <div className="h-2 w-10 rounded bg-slate-200/90" />
              <div className="mt-3 h-6 w-14 rounded-md bg-slate-200/80" />
            </div>
          ))}
        </div>
        <div className="mt-5 space-y-2">
          <div className="flex items-center justify-between gap-3">
            <div className="h-2 flex-1 max-w-[40%] rounded bg-slate-200/80" />
            <div className="h-2 w-10 rounded bg-slate-200/80" />
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-[88%] rounded-full transition-all duration-500" style={{ backgroundColor: accent }} />
          </div>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2">
          <div className="h-16 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100/80" />
          <div className="h-16 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100/80" />
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
    <div className="min-h-screen bg-[#FAFBFC] font-body">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200/50">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(100,181,73,0.12),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-0 top-1/2 h-[min(32rem,70vw)] w-[min(32rem,70vw)] -translate-y-1/2 translate-x-1/4 rounded-full opacity-40 blur-[100px]"
          style={{ background: `radial-gradient(circle, ${accent}33 0%, transparent 70%)` }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">{serviceLabel}</p>
            <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              {title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">{overview}</p>
            <div className="mt-10 flex flex-wrap gap-3">
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
          <HeroMockup />
        </div>
      </section>

      {/* Process — vertical timeline */}
      <section id="process" className="relative scroll-mt-24 px-6 py-20 sm:py-28">
        <div
          className="pointer-events-none absolute left-0 top-0 h-64 w-full bg-[radial-gradient(ellipse_60%_100%_at_0%_0%,rgba(100,181,73,0.06),transparent_50%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Process</h2>
          <div className="relative mt-12 pl-8 sm:pl-10">
            <div
              className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-slate-200 via-slate-200 to-transparent sm:left-[13px]"
              aria-hidden
            />
            <ul className="space-y-10">
              {processSteps.map(({ step, text }) => (
                <li key={step} className="relative group">
                  <span
                    className="absolute left-0 top-1.5 flex h-6 w-6 -translate-x-[calc(0.5rem+11px)] items-center justify-center rounded-full border border-white bg-white shadow-sm transition group-hover:shadow-[0_0_0_6px_rgba(100,181,73,0.15)] sm:-translate-x-[calc(0.5rem+13px)]"
                    style={{ boxShadow: `0 0 0 1px ${accent}40` }}
                  >
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: accent }} />
                  </span>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">Step {step}</p>
                  <p className="mt-2 text-lg font-medium leading-snug text-slate-900 sm:text-xl">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Key Benefits — split */}
      <section id="benefits" className="scroll-mt-24 border-t border-slate-200/40 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Key Benefits</h2>
          <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-2xl font-semibold tracking-tight text-slate-900">Key Benefits</p>
              <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600">{benefitsSupportingText}</p>
            </div>
            <ul className="space-y-8">
            {benefits.map((item, i) => (
              <li
                key={item}
                className={`flex gap-4 transition-opacity duration-300 ${i % 2 === 1 ? "lg:pl-10" : ""}`}
              >
                <span
                  className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-slate-600"
                  style={{ backgroundColor: `${accent}18` }}
                  aria-hidden
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-lg leading-relaxed text-slate-800">{item}</span>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="scroll-mt-24 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Results / Proof Points</h2>
          <div className="mt-14 grid gap-12 sm:grid-cols-3 sm:gap-8">
            {results.map((line) => {
              const { big, rest } = parseResultStat(line);
              return (
                <div key={line} className="text-center sm:text-left">
                  <p className="text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">{big}</p>
                  {rest ? <p className="mt-3 text-base font-medium leading-snug text-slate-600">{rest}</p> : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools — text wordmarks row */}
      <section id="tools" className="scroll-mt-24 border-t border-slate-200/40 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Tools and Platforms</h2>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:justify-between lg:gap-x-14">
            {tools.map((name) => (
              <span
                key={name}
                className="text-center text-sm font-semibold uppercase tracking-[0.12em] text-slate-400 transition hover:text-slate-700"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-[#0B1220] px-6 py-24 sm:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 100%, ${accent}35 0%, transparent 55%)`
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_20%,rgba(100,181,73,0.12),transparent_50%)]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">{closingStatement}</p>
          <h2 className="mt-10 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Want this service implemented for your brand?
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
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
