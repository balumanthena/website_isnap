import EngagementProfileSection from "@/components/sections/EngagementProfileSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

const industries = [
  "Apparel",
  "Electronics",
  "FMCG",
  "Handloom",
  "Furniture",
  "Pharma",
  "Cosmetics",
  "Industrial",
  "Food & Beverages",
  "Eco Products",
  "Home Decor",
  "Automotive",
  "Pet Care",
  "Baby Care",
  "Ayurveda",
  "Digital Goods"
];

export function IndustriesSection() {
  return (
    <section id="industries" className="border-b border-slate-200/80 bg-white py-14 sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Categories We Work With"
          subtitle="From niche crafts to global FMCG — if it can be sold online, ISNAP can handle it."
        />

        <div className="mt-8 grid gap-8 sm:mt-10 sm:gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-14 lg:gap-y-0">
          <div className="lg:col-span-5">
            <p className="max-w-md text-[14px] leading-[1.75] text-slate-600 sm:text-[15px] sm:leading-[1.75] md:text-base md:leading-[1.7]">
              ISNAP&apos;s platform is built to onboard and manage products across any industry vertical, whether
              you&apos;re in fashion, electronics, pharma, furniture, or something entirely unique. We currently
              serve 200+ manufacturers across more than 10 major product categories and we&apos;re equipped to take on
              more.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-200 pt-6 sm:mt-10 sm:gap-8 sm:pt-8">
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Manufacturers</p>
                <p className="mt-2 font-heading text-2xl font-semibold tabular-nums tracking-tight text-slate-900 sm:text-3xl">
                  200+
                </p>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Categories</p>
                <p className="mt-2 font-heading text-2xl font-semibold tabular-nums tracking-tight text-slate-900 sm:text-3xl">
                  10+
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Sectors &amp; verticals</p>
            <ul className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-5 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              {industries.map((industry) => (
                <li
                  key={industry}
                  className="rounded-xl border border-slate-200/80 bg-slate-50/70 px-3 py-2.5 text-[12px] font-medium text-slate-700 shadow-[0_1px_2px_rgba(15,23,42,0.03)] sm:text-[13px]"
                >
                  {industry}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 min-w-0 sm:mt-10 lg:mt-14">
          <EngagementProfileSection />
        </div>
      </div>
    </section>
  );
}
