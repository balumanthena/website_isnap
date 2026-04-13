import Link from "next/link";
import { closingPositioningStatement, servicesContent } from "./services-data";

export default function ServicesPage() {
  return (
    <div className="bg-[#F8FAFC]">
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_65%_at_0%_0%,rgba(22,163,74,0.08),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(15,23,42,0.05),transparent_60%)]" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-14 sm:py-20">
          <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
            <Link href="/" className="transition hover:text-slate-700">
              Home
            </Link>{" "}
            / Services
          </p>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
            Automation-first services built to scale modern commerce
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            A complete operating stack spanning onboarding, catalog, creative, growth, and fulfillment. Each service is
            documented with clear process, measurable outcomes, and implementation tools.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">Total services</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">10</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">Coverage</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">End-to-end</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">Model</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">Automation-first</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-14 sm:py-16">
        <div className="grid gap-5 lg:grid-cols-2">
          {servicesContent.map((service) => (
            <article
              key={service.slug}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-7 shadow-[0_10px_30px_-20px_rgba(15,23,42,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-200/80 hover:shadow-[0_24px_50px_-24px_rgba(15,23,42,0.24)] sm:p-8"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/70 via-transparent to-slate-50/60" />
              </div>
              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-600">Service {service.number}</p>
                <h2 className="mt-3 max-w-[26ch] font-heading text-[1.7rem] font-semibold leading-tight tracking-tight text-slate-900">
                  {service.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[15px]">{service.overview}</p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Key benefit</p>
                    <p className="mt-2 text-sm font-medium text-slate-700">{service.benefits[0]}</p>
                  </div>
                  <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Proof point</p>
                    <p className="mt-2 text-sm font-medium text-slate-700">{service.results[0]}</p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    {service.process.length} process steps
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary-700 transition hover:text-primary-600"
                  >
                    View full service <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200/80 bg-slate-900 py-12">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="max-w-4xl text-sm leading-relaxed text-slate-300">{closingPositioningStatement}</p>
            <p className="mt-2 text-xl font-semibold tracking-tight text-white">
              Need a tailored execution plan for your category?
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/70 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-900"
          >
            Book a strategy call
          </Link>
        </div>
      </section>
    </div>
  );
}
