import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

type Step = {
  number: string;
  title: string;
  description: string;
  cta?: string;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Submit Details",
    description: "Share your brand profile, catalog, and current sales channels. We map your goals, constraints, and growth readiness.",
    cta: "Start onboarding"
  },
  {
    number: "02",
    title: "AI Mapping & Catalog",
    description: "ISNAP structures your product data and enriches listing quality using AI to improve search relevance and conversion outcomes."
  },
  {
    number: "03",
    title: "Go Live on Platforms",
    description: "We activate your brand across marketplaces with channel-specific configurations, pricing controls, and operational readiness."
  },
  {
    number: "04",
    title: "Launch Campaigns",
    description: "Performance campaigns go live with clear KPI ownership, rapid experimentation cycles, and budget discipline."
  },
  {
    number: "05",
    title: "Track from Dashboard",
    description: "Monitor orders, revenue, and channel-level performance from a single source of truth built for daily decision-making."
  }
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative border-b border-slate-200/80 bg-[#F8FBF9] py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_12%_0%,rgba(100,181,73,0.09),transparent_55%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:72px_72px]" aria-hidden />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How It Works"
          title="A proven 5-step launch and growth system"
          subtitle="Structured execution from initial onboarding to measurable multi-platform scale."
        />

        <div className="mt-6 grid grid-cols-1 gap-2.5 sm:mt-8 sm:grid-cols-3 sm:gap-3">
          {[
            { label: "Launch speed", value: "70% faster" },
            { label: "Approval quality", value: "98% success" },
            { label: "Team visibility", value: "Single dashboard" }
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-slate-200/80 bg-white/90 px-3.5 py-3 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">{item.label}</p>
              <p className="mt-1 text-sm font-semibold tracking-tight text-slate-900">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-12 lg:gap-6">
          {steps.map((step, index) => {
            const cardSpan = [
              "lg:col-span-7",
              "lg:col-span-5",
              "lg:col-span-12",
              "lg:col-span-6",
              "lg:col-span-6"
            ][index];

            const visual = (
              <div
                className={cn(
                  "mt-5 rounded-xl border border-slate-200/75 bg-gradient-to-br from-slate-50 to-white",
                  index === 2 ? "p-4 sm:p-5" : "p-3.5 sm:p-4"
                )}
              >
                {index === 0 ? (
                  <div className="space-y-2.5">
                    <div className="h-2.5 w-2/3 rounded-full bg-slate-200" />
                    <div className="h-8 rounded-md bg-white ring-1 ring-slate-200" />
                    <div className="ml-8 h-8 rounded-md bg-white ring-1 ring-slate-200" />
                    <div className="h-8 w-4/5 rounded-md bg-white ring-1 ring-slate-200" />
                  </div>
                ) : null}

                {index === 1 ? (
                  <div className="flex h-[112px] items-center justify-center rounded-lg bg-white ring-1 ring-slate-200">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 ring-1 ring-primary-200">
                      <div className="h-5 w-5 rounded-full bg-primary-500/85" />
                    </div>
                  </div>
                ) : null}

                {index === 2 ? (
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="rounded-lg bg-white p-3 ring-1 ring-slate-200">
                      <div className="h-2 w-1/2 rounded-full bg-slate-200" />
                      <div className="mt-3 space-y-2">
                        <div className="h-2 rounded-full bg-slate-100" />
                        <div className="h-2 w-4/5 rounded-full bg-slate-100" />
                        <div className="h-2 w-2/3 rounded-full bg-slate-100" />
                      </div>
                    </div>
                    <div className="rounded-lg bg-[#0F172A] p-3 ring-1 ring-slate-700">
                      <div className="h-2 w-1/3 rounded-full bg-slate-600" />
                      <div className="mt-3 h-20 rounded-md bg-slate-800" />
                      <div className="mt-3 h-2 w-2/3 rounded-full bg-primary-500/80" />
                    </div>
                  </div>
                ) : null}

                {index === 3 ? (
                  <div className="flex h-[112px] items-end gap-2 rounded-lg bg-white p-3 ring-1 ring-slate-200">
                    {[32, 48, 40, 60, 72].map((h, i) => (
                      <span key={i} className="flex-1 rounded-sm bg-gradient-to-t from-primary-500 to-primary-300" style={{ height: `${h}px` }} />
                    ))}
                  </div>
                ) : null}

                {index === 4 ? (
                  <div className="space-y-3 rounded-lg bg-white p-3 ring-1 ring-slate-200">
                    <div className="flex items-center justify-between">
                      <div className="h-2 w-1/3 rounded-full bg-slate-200" />
                      <div className="h-2 w-12 rounded-full bg-rose-300" />
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-[76%] rounded-full bg-primary-500/85" />
                    </div>
                    <div className="h-2 w-2/3 rounded-full bg-slate-100" />
                  </div>
                ) : null}
              </div>
            );

            return (
              <article
                key={step.number}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition duration-200 ease-out hover:border-primary-200/70 hover:shadow-[0_16px_30px_-22px_rgba(15,23,42,0.35)] sm:p-5 lg:p-6",
                  cardSpan
                )}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50/40 via-transparent to-slate-50/40" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full border border-primary-200/70 bg-primary-50 px-2 font-mono text-[10px] font-semibold text-primary-700">
                    {step.number}
                  </span>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">Step {step.number}</p>
                </div>

                <h3 className="relative mt-3 font-sans text-xl font-semibold tracking-tight text-slate-900">{step.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                {step.cta ? (
                  <Link href="/contact" className="relative mt-3 inline-flex text-sm font-semibold text-primary-700 transition hover:text-primary-600">
                    {step.cta} <span aria-hidden className="ml-1">→</span>
                  </Link>
                ) : null}

                {visual}
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white/85 p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:mt-10 sm:p-5 lg:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-600">
              Every step is managed by one accountable team with clear milestones and weekly reporting.
            </p>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-1 text-sm font-semibold text-primary-700 transition hover:text-primary-600"
            >
              Start your launch plan <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
