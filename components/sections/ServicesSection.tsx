import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    title: "Accelerated onboarding",
    description:
      "Structured workflows and catalog readiness so your assortment is launch-ready without internal bottlenecks or rework."
  },
  {
    title: "Marketplace management",
    description:
      "Day-to-day operations, listings, compliance, and governance across major marketplaces—managed as a single program."
  },
  {
    title: "Brand store creation",
    description:
      "Platform-native storefront experiences aligned to category norms, conversion patterns, and brand standards."
  },
  {
    title: "SEO & geo optimisation",
    description:
      "Search and geography-led optimisation to improve discoverability where demand and competition intersect."
  },
  {
    title: "Digital growth",
    description:
      "Evidence-led planning across acquisition, conversion, and retention—with reporting tied to commercial outcomes."
  },
  {
    title: "Mobile storefront development",
    description:
      "Performance-oriented mobile commerce experiences focused on speed, stability, and checkout clarity."
  },
  {
    title: "Paid media management",
    description:
      "Channel execution and spend discipline with attribution visibility appropriate to your stack and partners."
  },
  {
    title: "Logistics & fulfilment",
    description:
      "Planning and coordination that supports reliable fulfilment, SLAs, and customer trust at scale."
  },
  {
    title: "CRM & executive dashboards",
    description:
      "Unified visibility for commercial, operations, and leadership teams—one reference set of metrics and signals."
  }
];

export function ServicesSection() {
  return (
    <section className="border-b border-slate-200/80 bg-[#FAFAFA] py-24 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What We Do"
          eyebrowClassName="text-slate-500"
          title="End-to-end commerce operations"
          subtitle="Structured programs spanning onboarding, marketplace execution, growth, and fulfilment—so leadership has one accountable partner."
        />

        <div className="mt-14 border-t border-slate-200">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="grid gap-6 border-b border-slate-200 py-8 sm:grid-cols-12 sm:gap-8 sm:py-9"
            >
              <div className="sm:col-span-2 sm:pt-0.5">
                <span className="font-mono text-[11px] font-medium tabular-nums text-slate-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="sm:col-span-10">
                <h3 className="font-sans text-base font-semibold tracking-tight text-slate-900 sm:text-[17px]">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-[15px] sm:leading-[1.65]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-slate-200 pt-10 sm:justify-between">
          <p className="max-w-lg text-sm text-slate-500">
            Engagement models and scope are aligned to your categories, channels, and internal stakeholders.
          </p>
          <Link
            href="/services"
            className="shrink-0 text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-[5px] transition hover:decoration-slate-900"
          >
            Services overview
          </Link>
        </div>
      </div>
    </section>
  );
}
