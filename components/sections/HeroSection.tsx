import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { HeroVisualEcosystem } from "@/components/sections/HeroVisualEcosystem";

const bullets = [
  "Unified listings, inventory, and fulfilment visibility",
  "Channel-specific performance without spreadsheet drift",
  "Governance-ready workflows for manufacturers and brand teams"
];

/** Strict paths — encode mobile filename */
const MOBILE_ART = encodeURI("/images/iPhone 16 & 17 Pro Max - 1.svg");
const DESKTOP_ART = "/images/fram%20main.svg";

export function HeroSection() {
  return (
    <section className="relative isolate w-full overflow-x-hidden border-b border-slate-200/80 bg-white">
      <div className="relative px-4 py-10 sm:px-6 sm:py-12 md:py-14 lg:px-8">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(280px,1.1fr)] md:gap-12 lg:gap-16">
          {/* Copy + CTAs (narrow); mobile SVG uses full row width below — not max-w-[540px] */}
          <div className={cn("relative flex min-w-0 flex-col md:max-w-none")}>
            <div className="max-w-[540px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">ISNAP FOR BRANDS</p>
            <h1 className="mt-5 font-sans text-4xl font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Turn every sales channel into <span className="text-[#6A00FF]">scalable revenue</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-600">
              Launch, optimize, and scale across major marketplaces with AI-led execution and one operational backbone
              for your team.
            </p>

            <ul className="mt-8 space-y-2 text-[15px] leading-relaxed text-slate-700">
              {bullets.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#64B549]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className={cn(
                  "inline-flex items-center justify-center rounded-xl bg-[#64B549] px-6 py-3 text-sm font-semibold text-white",
                  "shadow-sm transition duration-200 ease-out",
                  "hover:scale-[1.02] hover:bg-[#5aad3f] hover:shadow-md active:scale-[0.99]"
                )}
              >
                Get started
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800",
                  "border-[#64B549]/30 transition duration-200 ease-out",
                  "hover:scale-[1.02] hover:border-[#64B549]/50 hover:shadow-md active:scale-[0.99]"
                )}
              >
                Talk to us
              </Link>
            </div>
            </div>

            {/* Mobile: edge-to-edge width (break out of section padding) so SVG scales to screen */}
            <div
              className={cn(
                "relative mt-8 w-[calc(100%+2rem)] max-w-[100vw] min-w-0 md:hidden",
                "-mx-4 sm:w-[calc(100%+3rem)] sm:-mx-6"
              )}
              aria-hidden
            >
              <Image
                src={MOBILE_ART}
                alt=""
                width={440}
                height={956}
                className="mx-auto h-auto w-full max-w-full select-none object-contain object-center object-bottom"
                style={{ maxHeight: "min(88dvh, 900px)" }}
                sizes="100vw"
                unoptimized
                priority
              />
            </div>
          </div>

          {/* md+: floating metric cards */}
          <div className="relative z-10 hidden min-h-0 min-w-0 md:block md:pb-2 md:pr-1 lg:pr-2">
            <HeroVisualEcosystem />
          </div>
        </div>

        {/* Desktop: full viewport width (breaks out of padded column) — matches mobile edge-to-edge */}
        <div
          className="relative left-1/2 z-0 mt-8 hidden w-screen max-w-[100vw] -translate-x-1/2 md:mt-12 md:block lg:mt-14"
          aria-hidden
        >
          <div className="mx-auto w-full max-w-[min(1600px,100%)] px-4 sm:px-6 lg:px-8">
            <Image
              src={DESKTOP_ART}
              alt=""
              width={1344}
              height={405}
              className="h-auto w-full object-contain object-center object-bottom opacity-[0.96] saturate-[0.95]"
              style={{ maxHeight: "min(62vh, 760px)" }}
              sizes="(min-width: 768px) min(1600px, 100vw), 0px"
              unoptimized
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
