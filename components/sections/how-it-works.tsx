const steps = [
  {
    title: "Diagnose",
    detail: "We map your funnel and identify the highest leverage opportunities across acquisition, conversion, and retention."
  },
  {
    title: "Deploy",
    detail: "ISNAP launches AI-powered experiments and automation workflows tailored to your brand goals."
  },
  {
    title: "Scale",
    detail: "Winning playbooks are operationalized into repeatable systems that compound growth month-over-month."
  }
];

export function HowItWorksSection() {
  return (
    <section className="bg-slate-950 py-20 text-slate-200">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl">How ISNAP works</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-400">Step {index + 1}</p>
              <h3 className="mt-3 font-heading text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
