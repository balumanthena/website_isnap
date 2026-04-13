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
    <section id="industries" className="border-b border-slate-200/80 bg-white py-24 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Categories We Work With"
          subtitle="From niche crafts to global FMCG — if it can be sold online, ISNAP can handle it."
        />

        <div className="mt-14 grid gap-14 lg:mt-16 lg:grid-cols-12 lg:gap-16 lg:gap-y-0">
          <div className="lg:col-span-5">
            <p className="max-w-md text-[15px] leading-[1.75] text-slate-600 sm:text-base sm:leading-[1.7]">
              ISNAP&apos;s platform is built to onboard and manage products across any industry vertical, whether
              you&apos;re in fashion, electronics, pharma, furniture, or something entirely unique. We currently
              serve 200+ manufacturers across more than 10 major product categories and we&apos;re equipped to take on
              more.
            </p>

            <div className="mt-12 flex gap-12 border-t border-slate-200 pt-10">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Manufacturers</p>
                <p className="mt-2 font-heading text-3xl font-semibold tabular-nums tracking-tight text-slate-900">
                  200+
                </p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Categories</p>
                <p className="mt-2 font-heading text-3xl font-semibold tabular-nums tracking-tight text-slate-900">
                  10+
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Sectors &amp; verticals</p>
            <ul className="mt-5 grid grid-cols-1 gap-0 sm:grid-cols-2">
              {industries.map((industry) => (
                <li
                  key={industry}
                  className="border-b border-slate-200 py-3.5 text-sm text-slate-700 sm:border-slate-100"
                >
                  {industry}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <EngagementProfileSection />
      </div>
    </section>
  );
}
