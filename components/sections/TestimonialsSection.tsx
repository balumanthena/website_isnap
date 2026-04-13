import { Button } from "@/components/ui/button";

type QuoteCard = {
  type: "quote";
  quote: string;
  name: string;
  company: string;
};

type MetricCard = {
  type: "metric";
  title: string;
  subtitle: string;
};

type TestimonialCard = QuoteCard | MetricCard;

const cards: TestimonialCard[] = [
  {
    type: "quote",
    quote:
      "The ISNAP consultant gave us structured support from day one. We had every listing and operations answer we needed to launch fast.",
    name: "Magnifact Foundation",
    company: "katakuribus.pl"
  },
  {
    type: "metric",
    title: "CSAT 94%",
    subtitle: "Seller satisfaction after contacting the support team."
  },
  {
    type: "quote",
    quote:
      "Very strong consultation quality. The team explained each decision clearly and solved issues without slowing our channel performance.",
    name: "Iwona Krol",
    company: "bymoana.com"
  },
  {
    type: "metric",
    title: "30 seconds",
    subtitle: "Average waiting time for a call on the premium support line."
  },
  {
    type: "quote",
    quote:
      "Professional assistance at every stage. Information was clear, actionable, and aligned with our internal operations workflow.",
    name: "Patrick Augustyniak",
    company: "storyofnature.pl"
  },
  {
    type: "metric",
    title: "Dedicated support",
    subtitle: "You get specific answers, not generic copy-paste responses."
  }
];

export function TestimonialsSection() {
  return (
    <section className="border-b border-slate-200/80 bg-[#f5f7f6] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">Client support</p>
          <h2 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            We listen, solve, and execute with the same care your operators expect from an internal commerce team.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) =>
            card.type === "quote" ? (
              <article
                key={`${card.name}-${index}`}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-[0_12px_26px_-18px_rgba(15,23,42,0.25)]"
              >
                <p className="text-xl font-bold leading-none text-primary-600/90" aria-hidden>
                  "
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-800 sm:text-base">{card.quote}</p>
                <div className="mt-8">
                  <p className="text-sm font-semibold text-slate-900">{card.name}</p>
                  <p className="mt-1 text-xs text-slate-500">{card.company}</p>
                </div>
              </article>
            ) : (
              <article
                key={`${card.title}-${index}`}
                className="relative overflow-hidden rounded-2xl border border-primary-700/40 bg-gradient-to-br from-primary-700 via-primary-600 to-[#0f8a4b] p-6 text-white shadow-[0_20px_36px_-20px_rgba(22,163,74,0.58)]"
              >
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_15%_15%,rgba(255,255,255,0.18),transparent_58%)]"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -bottom-8 right-0 h-24 w-24 rounded-full bg-white/10 blur-2xl"
                  aria-hidden
                />
                <p className="relative text-3xl font-semibold tracking-tight text-white">{card.title}</p>
                <p className="relative mt-3 max-w-[24ch] text-sm leading-relaxed text-white/90">{card.subtitle}</p>
              </article>
            )
          )}
        </div>

        <div className="mt-10 flex justify-center">
          <Button size="lg" className="rounded-full px-7 font-semibold">
            Talk to our team
          </Button>
        </div>
      </div>
    </section>
  );
}
