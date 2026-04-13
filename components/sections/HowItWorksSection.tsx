import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

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
    <section id="how-it-works" className="bg-white py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="How It Works"
          title="A proven 5-step launch and growth system"
          subtitle="Structured execution from initial onboarding to measurable multi-platform scale."
        />

        <div className="mt-12 space-y-8">
          {steps.map((step, index) => {
            const isEven = index % 2 === 1;
            return (
              <div key={step.number} className="grid items-center gap-6 rounded-xl border border-slate-200 bg-[#FAFAFA] p-6 md:grid-cols-2">
                <div className={isEven ? "md:order-2" : ""}>
                  <div className="relative">
                    <span className="pointer-events-none absolute -top-10 left-0 font-heading text-[80px] font-bold leading-none text-primary-600/15">
                      {step.number}
                    </span>
                    <h3 className="relative pt-6 font-heading text-2xl font-bold text-slate-900">{step.title}</h3>
                  </div>
                  <p className="mt-4 max-w-xl text-slate-600">{step.description}</p>
                  {step.cta ? (
                    <Link href="/contact" className="mt-4 inline-block text-sm font-medium text-primary-600">
                      {step.cta} -&gt;
                    </Link>
                  ) : null}
                </div>
                <div className={isEven ? "md:order-1" : ""}>
                  <div className="rounded-xl border border-slate-200 bg-white p-6">
                    <p className="text-xs uppercase tracking-widest text-slate-400">Step {step.number}</p>
                    <p className="mt-2 font-heading text-lg font-semibold text-slate-900">Execution Layer</p>
                    <p className="mt-2 text-sm text-slate-500">
                      Clear workflows, platform readiness checks, and measurable milestone tracking.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
