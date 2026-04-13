import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

function ArrowCircle() {
  return (
    <span
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-slate-500 shadow-md ring-1 ring-slate-200/80 transition group-hover:bg-slate-50 group-hover:text-primary-600"
      aria-hidden="true"
    >
      <ArrowRightIcon className="h-5 w-5" />
    </span>
  );
}

function DarkArrowCircle() {
  return (
    <span
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-white shadow-[0_10px_20px_-12px_rgba(2,6,23,0.55)] ring-1 ring-white/25 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:bg-white/25 group-hover:shadow-[0_16px_30px_-12px_rgba(2,6,23,0.65)]"
      aria-hidden="true"
    >
      <ArrowRightIcon className="h-5 w-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5" />
    </span>
  );
}

export function SpotlightGridSection() {
  return (
    <section className="bg-[#F4F6F8] py-10 sm:py-14 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-4 lg:grid-cols-2 lg:grid-rows-2 lg:gap-5">
          {/* Large primary card */}
          <Link
            href="/contact"
            className={cn(
              "group relative flex min-h-[22rem] flex-col overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-primary-600 via-primary-600 to-[#0E8A82] p-7 text-left shadow-lg shadow-primary-900/10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:min-h-[26rem] sm:p-8 lg:row-span-2 lg:min-h-0",
              "hover:-translate-y-1.5 hover:shadow-[0_30px_50px_-24px_rgba(6,78,59,0.62)]"
            )}
          >
            <div className="pointer-events-none absolute -right-16 top-1/4 h-64 w-64 rounded-full bg-white/10 blur-3xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:-translate-y-1" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-primary-900/20 blur-3xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-1 group-hover:translate-y-1" />
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
              aria-hidden
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/10 via-transparent to-primary-200/10" />
            </div>

            <p className="relative text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5">
              ISNAP Launch
            </p>
            <h2 className="relative mt-3 max-w-[16ch] font-sans text-2xl font-bold leading-tight tracking-tight text-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 sm:text-3xl md:text-4xl">
              Start selling on marketplaces with confidence
            </h2>
            <p className="relative mt-4 max-w-md text-sm leading-relaxed text-white/88 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 sm:text-base">
              AI-assisted cataloging, listing quality, and channel setup—so your brand goes live faster with less manual
              rework.
            </p>

            <div className="relative mt-auto flex items-end justify-between gap-2 pt-2">
              <div className="relative -ml-10 w-[260%] sm:-ml-12 sm:w-[235%]">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/images/ChatGPT Image Apr 10, 2026, 12_43_51 PM.png"
                    alt="ISNAP commerce visual"
                    fill
                    sizes="(min-width: 1024px) 1100px, (min-width: 640px) 900px, 210vw"
                    className="object-cover object-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  />
                </div>
              </div>
              <DarkArrowCircle />
            </div>
          </Link>

          {/* Top right */}
          <Link
            href="/services"
            className="group flex min-h-[12.5rem] flex-col justify-between rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-sm transition hover:border-primary-200 hover:shadow-md sm:p-7"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-600">ISNAP Scale</p>
              <h2 className="mt-3 max-w-[18ch] font-sans text-xl font-bold leading-snug tracking-tight text-slate-900 sm:text-2xl">
                Grow revenue with continuous optimization
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
                Experiments, ads, and storefront tuning tied to one performance snapshot—so every sprint moves the
                needle.
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <ArrowCircle />
            </div>
          </Link>

          {/* Bottom right */}
          <Link
            href="/contact"
            className="group flex min-h-[12.5rem] flex-col justify-between rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-sm transition hover:border-primary-200 hover:shadow-md sm:p-7"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-600">Catalog migration</p>
              <h2 className="mt-3 max-w-[22ch] font-sans text-xl font-bold leading-snug tracking-tight text-slate-900 sm:text-2xl">
                Move listings from any stack without losing momentum
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
                Structured imports, attribute mapping, and QA checkpoints keep your catalog accurate as you switch tools
                or partners.
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <ArrowCircle />
            </div>
          </Link>
        </div>

        {/* Full-width strip */}
        <div className="mt-4 grid overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-sm lg:grid-cols-2 lg:gap-0">
          <div className="flex flex-col justify-center p-7 sm:p-8 lg:p-10">
            <h2 className="max-w-xl font-sans text-xl font-bold leading-snug tracking-tight text-slate-900 sm:text-2xl md:text-3xl">
              Sell across regions. Price and settle in the currencies your buyers expect.
            </h2>
            <Link
              href="/services"
              className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary-600 transition hover:text-primary-700"
            >
              See cross-border readiness
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="relative min-h-[220px] border-t border-slate-100 bg-slate-50/80 lg:border-l lg:border-t-0">
            <div
              className="absolute inset-0 opacity-[0.35]"
              style={{
                backgroundImage: `radial-gradient(circle, rgb(148 163 184) 1px, transparent 1px)`,
                backgroundSize: "12px 12px"
              }}
            />
            <div className="relative flex h-full items-center justify-center p-6 lg:justify-end lg:pr-10">
              <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-900/5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Channel health</p>
                <p className="mt-1 font-sans text-sm font-semibold text-slate-900">Orders by marketplace</p>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-center justify-between gap-3 text-sm">
                    <span className="flex items-center gap-2 text-slate-600">
                      <span className="text-base" aria-hidden="true">
                        🇮🇳
                      </span>
                      Domestic · INR
                    </span>
                    <span className="rounded-full bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-800">
                      Active
                    </span>
                  </li>
                  <li className="flex items-center justify-between gap-3 text-sm">
                    <span className="flex items-center gap-2 text-slate-600">
                      <span className="text-base" aria-hidden="true">
                        🇪🇺
                      </span>
                      EU · EUR
                    </span>
                    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-900">
                      Syncing
                    </span>
                  </li>
                  <li className="flex items-center justify-between gap-3 text-sm">
                    <span className="flex items-center gap-2 text-slate-600">
                      <span className="text-base" aria-hidden="true">
                        🇬🇧
                      </span>
                      UK · GBP
                    </span>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                      Setup
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
