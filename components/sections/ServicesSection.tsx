import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
  {
    number: "01",
    title: "Accelerated onboarding",
    description: "Structured workflows and catalog readiness so your assortment is launch-ready without internal bottlenecks or rework."
  },
  {
    number: "02",
    title: "Marketplace management",
    description: "Day-to-day operations, listings, compliance, and governance across major marketplaces managed as a single program."
  },
  {
    number: "03",
    title: "Brand store creation",
    description: "Platform-native storefront experiences aligned to category norms, conversion patterns, and brand standards."
  },
  {
    number: "04",
    title: "SEO & geo optimisation",
    description: "Search and geography-led optimisation to improve discoverability where demand and competition intersect."
  },
  {
    number: "05",
    title: "Digital growth",
    description: "Evidence-led planning across acquisition, conversion, and retention with reporting tied to commercial outcomes."
  },
  {
    number: "06",
    title: "Mobile storefront development",
    description: "Performance-oriented mobile commerce experiences focused on speed, stability, and checkout clarity."
  },
  {
    number: "07",
    title: "Paid media management",
    description: "Channel execution and spend discipline with attribution visibility appropriate to your stack and partners."
  },
  {
    number: "08",
    title: "Logistics & fulfilment",
    description: "Planning and coordination that supports reliable fulfilment, SLAs, and customer trust at scale."
  },
  {
    number: "09",
    title: "CRM & executive dashboards",
    description: "Unified visibility for commercial, operations, and leadership teams with one reference set of metrics and signals."
  }
];

export function ServicesSection() {
  const desktopSpans = ["md:col-span-4", "md:col-span-4", "md:col-span-4", "md:col-span-5", "md:col-span-3", "md:col-span-4", "md:col-span-4", "md:col-span-4", "md:col-span-4"];

  return (
    <section className="border-b border-slate-200/80 bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="border-b border-slate-200 pb-8 sm:pb-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">What We Do</p>
          <div className="mt-3 grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] md:items-end md:gap-10">
            <h2 className="font-sans text-[2.2rem] font-semibold uppercase leading-[0.92] tracking-tight text-slate-900 sm:text-[3.4rem] lg:text-[4.4rem]">
              End-to-end commerce operations
            </h2>
            <p className="max-w-md text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
              Structured programs spanning onboarding, marketplace execution, growth, and fulfilment so leadership has
              one accountable partner.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 md:grid-cols-12 md:gap-0">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={cn(
                "group border border-slate-200 bg-white p-4 transition duration-200 ease-out hover:bg-[#F8FBF9] sm:p-5 md:min-h-[150px] md:border-l-0 md:border-t-0",
                index < 3 && "md:border-t",
                index % 3 === 0 && "md:border-l",
                desktopSpans[index] ?? "md:col-span-6"
              )}
            >
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400">{service.number}</p>
              <h3 className="mt-3 max-w-[16ch] font-sans text-[1.35rem] font-semibold leading-[1.02] tracking-tight text-slate-900 sm:text-[1.55rem]">
                {service.title}
              </h3>
              <p className="mt-3 max-w-[34ch] text-[13px] leading-relaxed text-slate-600 sm:text-[14px]">{service.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 border-t border-slate-200 pt-7 sm:mt-10 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:gap-6 sm:pt-9">
          <p className="max-w-xl font-sans text-[1.5rem] font-semibold leading-[1.03] tracking-tight text-slate-900 sm:text-[1.9rem]">
            Engagement models and scope are aligned to your categories, channels, and internal stakeholders.
          </p>
          <Link
            href="/services"
            className="inline-flex w-fit shrink-0 items-center gap-1 text-sm font-semibold text-primary-700 transition hover:text-primary-600"
          >
            Services overview <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
