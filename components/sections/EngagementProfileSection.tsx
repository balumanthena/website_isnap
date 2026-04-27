"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ShoppingBag, Factory, Landmark, Sprout, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/** Stripe / Linear-style easing */
const easePremium = [0.22, 1, 0.36, 1] as const;
const twEase = "duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easePremium }
  }
};

type PersonaCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const personas: PersonaCard[] = [
  {
    icon: ShoppingBag,
    title: "Mass-market goods",
    description: "Apparel, cosmetics, and high-volume SKUs tuned for marketplace algorithms and conversion."
  },
  {
    icon: Factory,
    title: "B2B & industrial",
    description: "Specialized components and long-tail catalogues with compliance-ready listings and fulfilment."
  },
  {
    icon: Landmark,
    title: "Handcrafted & supported",
    description: "Artisan and programme-backed products with documentation that satisfies platform and policy checks."
  },
  {
    icon: Sprout,
    title: "Emerging categories",
    description: "Eco-first and digital-native assortments positioned for discovery and trust at launch."
  }
];

const engagementHighlights = [
  { label: "Manufacturers onboarded", value: "200+" },
  { label: "Active categories", value: "10+" },
  { label: "Managed channels", value: "5" }
];

function DuotoneIconWell({ Icon }: { Icon: LucideIcon }) {
  return (
    <span className="relative inline-flex h-[3.25rem] w-[3.25rem] shrink-0 items-center justify-center">
      {/* Outer glow ring — duotone base */}
      <span
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-600/35 via-emerald-500/20 to-sky-500/15 opacity-90 blur-[0.5px]"
        aria-hidden
      />
      <span
        className="absolute inset-[1px] rounded-[15px] bg-gradient-to-br from-slate-800/[0.06] via-primary-600/12 to-[#0E8A82]/10"
        aria-hidden
      />
      {/* Inner lit surface */}
      <span
        className={cn(
          "relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl",
          "bg-gradient-to-b from-white via-white to-slate-50/95",
          "shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(15,23,42,0.04)]",
          "ring-1 ring-slate-200/60"
        )}
      >
        <span
          className="pointer-events-none absolute -right-1 -top-1 h-8 w-8 rounded-full bg-gradient-to-br from-white/80 to-transparent opacity-70"
          aria-hidden
        />
        <Icon
          className="relative z-[1] h-[22px] w-[22px] text-primary-600 [filter:drop-shadow(0_1px_2px_rgba(22,163,74,0.35))]"
          strokeWidth={1.55}
          aria-hidden
        />
      </span>
    </span>
  );
}

function PersonaCardItem({ card, index }: { card: PersonaCard; index: number }) {
  const Icon = card.icon;
  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.3, ease: easePremium }}
      className={cn(
        "group relative min-w-0 overflow-hidden rounded-2xl p-5 sm:p-6",
        "border border-slate-200/65 bg-gradient-to-b from-white to-slate-50/95",
        "shadow-[0_1px_2px_rgba(15,23,42,0.05),0_16px_48px_-20px_rgba(15,23,42,0.1),inset_0_1px_0_rgba(255,255,255,0.9)]",
        twEase,
        "will-change-transform",
        "hover:border-primary-300/70 hover:shadow-[0_8px_24px_-8px_rgba(15,23,42,0.12),0_28px_56px_-24px_rgba(22,163,74,0.14),inset_0_1px_0_rgba(255,255,255,1)]",
        "hover:ring-1 hover:ring-primary-400/20",
        "focus-within:ring-2 focus-within:ring-primary-500/40 focus-within:ring-offset-[3px]"
      )}
      tabIndex={0}
      role="group"
      aria-labelledby={`persona-title-${index}`}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-95"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_-30%,rgba(34,197,94,0.1),transparent_58%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/40 via-transparent to-sky-50/20" />
      </div>

      <div className="relative flex flex-col gap-4">
        <DuotoneIconWell Icon={Icon} />
        <div className="space-y-2">
          <h4
            id={`persona-title-${index}`}
            className="font-sans text-base font-semibold tracking-tight text-slate-900 sm:text-[17px]"
          >
            {card.title}
          </h4>
          <p className="text-[13px] leading-relaxed text-slate-600 sm:text-sm sm:leading-[1.65]">{card.description}</p>
        </div>
      </div>
    </motion.article>
  );
}

function ChannelMockup() {
  return (
    <motion.div
      className="relative mx-auto w-full min-w-0 max-w-lg overflow-x-clip lg:max-w-none"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: easePremium }}
    >
      {/* Soft radial glow — hero light behind panel */}
      <div
        className="pointer-events-none absolute left-1/2 top-[42%] h-[min(28rem,85%)] w-[min(36rem,130%)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.28)_0%,rgba(34,197,94,0.08)_35%,transparent_68%)] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-[48%] h-[min(22rem,70%)] w-[min(28rem,110%)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.5)_0%,transparent_55%)] blur-2xl"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute -inset-x-10 -bottom-6 top-1/3 rounded-[2.5rem] bg-gradient-to-b from-slate-300/0 via-slate-300/25 to-slate-400/20 blur-2xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-2 top-2 h-60 w-60 rounded-full bg-primary-500/14 blur-[58px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-8 -left-4 h-52 w-52 rounded-full bg-emerald-400/14 blur-[52px]"
        aria-hidden
      />

      <motion.div
        className="relative min-w-0 [perspective:1200px]"
        animate={{
          y: [0, -12, 0],
          rotateZ: [-0.9, -0.45, -0.9]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className={cn(
            "relative min-w-0 rounded-2xl p-4 sm:p-5 md:p-6",
            "border border-white/95 bg-white/50",
            "shadow-[0_2px_0_rgba(255,255,255,0.65)_inset,0_4px_8px_rgba(15,23,42,0.04),0_40px_80px_-32px_rgba(15,23,42,0.22),0_24px_48px_-20px_rgba(22,163,74,0.1)]",
            "ring-1 ring-slate-200/45 backdrop-blur-2xl",
            twEase
          )}
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
            aria-hidden
          />
          <div className="mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">Live catalogue</p>
              <p className="mt-1.5 text-sm font-semibold tracking-tight text-slate-900 sm:mt-2 sm:text-base">
                Channel preview
              </p>
            </div>
            <span className="w-fit shrink-0 rounded-full bg-slate-900/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-slate-600 shadow-sm ring-1 ring-slate-200/90">
              Synced
            </span>
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            <div
              className={cn(
                "relative overflow-hidden rounded-2xl border border-white/95 p-3.5",
                "bg-gradient-to-b from-white via-white to-slate-50/95",
                "shadow-[inset_0_1px_0_rgba(255,255,255,1),0_12px_32px_-12px_rgba(15,23,42,0.12)]"
              )}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 shadow-inner">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_18%,rgba(255,255,255,0.98),transparent_62%)]" />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/90 via-slate-100 to-slate-200/90" />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-slate-900/8 to-transparent" />
              </div>
              <div className="mt-3.5 flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-slate-900">Organic serum set</p>
                  <p className="text-[11px] text-slate-500">Health &amp; beauty</p>
                </div>
                <span className="shrink-0 rounded-md bg-gradient-to-b from-primary-500 to-primary-600 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white shadow-md shadow-primary-900/25">
                  Sponsored
                </span>
              </div>
              <div className="mt-2.5 flex items-center justify-between border-t border-slate-100/80 pt-2.5">
                <span className="text-sm font-semibold tabular-nums text-slate-900">₹1,249</span>
                <span className="text-[11px] font-medium text-amber-600">★ 4.8</span>
              </div>
            </div>

            <div className="flex flex-col gap-3.5">
              <div
                className={cn(
                  "rounded-2xl border border-white/95 bg-white/75 p-3.5 backdrop-blur-md",
                  "shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_8px_24px_-10px_rgba(15,23,42,0.1)]"
                )}
              >
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Orders (24h)</p>
                <p className="mt-1.5 text-3xl font-semibold tabular-nums tracking-tight text-slate-900">842</p>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100 shadow-inner">
                  <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-primary-500 via-primary-500 to-primary-600 shadow-[0_0_16px_rgba(22,163,74,0.45)]" />
                </div>
              </div>
              <div
                className={cn(
                  "flex-1 rounded-2xl border border-dashed border-primary-300/50 bg-primary-50/40 p-3.5 backdrop-blur-sm",
                  "shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]"
                )}
              >
                <p className="text-[10px] font-semibold uppercase tracking-wider text-primary-800/90">Next publish</p>
                <p className="mt-2 text-xs font-medium leading-snug text-slate-700">
                  12 SKUs queued · Amazon &amp; Flipkart
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-1.5 border-t border-slate-200/75 pt-5 sm:mt-6 sm:gap-2 sm:pt-6">
            {["Amazon", "Flipkart", "Walmart", "Jiomart", "D2C"].map((ch) => (
              <span
                key={ch}
                className="rounded-full border border-transparent bg-gradient-to-b from-white to-slate-50/95 px-2.5 py-1 text-[9px] font-medium text-slate-600 shadow-sm ring-1 ring-slate-200/90 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary-200/60 hover:text-slate-800 sm:px-3 sm:py-1.5 sm:text-[10px]"
              >
                {ch}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function EngagementProfileSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });

  const ctaBase = cn(
    "inline-flex h-12 min-h-[48px] items-center justify-center rounded-2xl px-8 text-sm font-semibold",
    twEase,
    "active:scale-[0.98]"
  );

  return (
    <div
      ref={ref}
      className={cn(
        "relative w-full min-w-0 max-w-full overflow-x-clip overflow-y-visible rounded-[1.4rem] border border-slate-200/70",
        "bg-gradient-to-br from-[#f8fbf9] via-white to-[#f4faf6]",
        "shadow-[0_1px_0_rgba(255,255,255,0.95)_inset,0_-1px_0_rgba(15,23,42,0.04)_inset,0_40px_90px_-44px_rgba(15,23,42,0.16),0_24px_56px_-34px_rgba(22,163,74,0.1)]",
        "ring-1 ring-slate-900/[0.03]"
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_12%_-8%,rgba(34,197,94,0.09),transparent_60%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_100%_105%,rgba(148,163,184,0.07),transparent_58%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,rgba(34,197,94,0.03)_0%,transparent_42%,rgba(14,138,130,0.04)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-95"
        aria-hidden
      />

      <div className="relative px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-12 lg:py-[4.5rem]">
        <div className="grid min-w-0 items-start gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <motion.div
            className="flex min-w-0 flex-col"
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: easePremium }}
          >
            <header className="min-w-0 max-w-xl space-y-4 sm:space-y-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                Engagement profile
              </p>
              <h3 className="font-heading text-[1.55rem] font-semibold leading-[1.13] tracking-tight text-slate-900 min-[380px]:text-[1.7rem] sm:text-3xl sm:leading-[1.1] lg:text-[2.25rem] lg:leading-[1.06]">
                Built for every kind of seller
              </h3>
              <p className="text-[15px] leading-relaxed text-slate-500 sm:text-base sm:leading-relaxed md:text-[17px] md:leading-[1.65]">
                One operating system for listings, channels, and growth—no matter how your catalogue is built.
              </p>
            </header>

            <div className="mt-4 grid grid-cols-1 gap-2.5 sm:mt-5 sm:grid-cols-3 sm:gap-3">
              {engagementHighlights.map((item) => (
                <div key={item.label} className="rounded-xl border border-slate-200/80 bg-white/80 px-3.5 py-3 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">{item.label}</p>
                  <p className="mt-1 text-lg font-semibold tracking-tight text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>

            <motion.div
              className="mt-10 grid min-w-0 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-14"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              {personas.map((card, index) => (
                <PersonaCardItem key={card.title} card={card} index={index} />
              ))}
            </motion.div>

            <div className="mt-10 flex w-full min-w-0 flex-col gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-4 lg:mt-14">
              <Link
                href="/contact"
                className={cn(
                  ctaBase,
                  "w-full sm:w-auto sm:min-w-[10rem]",
                  "bg-gradient-to-b from-primary-500 to-primary-600 text-white",
                  "shadow-[0_1px_0_rgba(255,255,255,0.22)_inset,0_10px_32px_-8px_rgba(22,163,74,0.48)]",
                  "hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-10px_rgba(22,163,74,0.55)] hover:brightness-[1.04]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                )}
              >
                Start selling
              </Link>
              <Link
                href="/services"
                className={cn(
                  ctaBase,
                  "w-full sm:w-auto sm:min-w-[10rem]",
                  "border border-slate-200/95 bg-gradient-to-b from-white to-slate-50/95 text-slate-800",
                  "shadow-[0_1px_2px_rgba(15,23,42,0.06),inset_0_1px_0_rgba(255,255,255,1)]",
                  "hover:-translate-y-0.5 hover:border-primary-200/80 hover:shadow-[0_12px_32px_-12px_rgba(15,23,42,0.12)]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/45 focus-visible:ring-offset-2"
                )}
              >
                View demo
              </Link>
            </div>
          </motion.div>

          <div className="relative min-w-0 lg:pt-4">
            <ChannelMockup />
          </div>
        </div>

        <motion.footer
          className="relative mt-12 min-w-0 max-w-4xl border-t border-slate-200/80 pt-8 sm:mt-16 sm:pt-10 md:mt-20 md:pt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.5, ease: easePremium }}
        >
          <p className="text-[15px] leading-[1.7] text-slate-600 sm:text-base sm:leading-[1.75] md:text-[17px] md:leading-[1.7]">
            We ensure you&apos;re live, optimized, and selling fast across{" "}
            <span className="font-semibold text-slate-900">Amazon</span>,{" "}
            <span className="font-semibold text-slate-900">Flipkart</span>,{" "}
            <span className="font-semibold text-slate-900">Walmart</span>,{" "}
            <span className="font-semibold text-slate-900">Jiomart</span>, and your own{" "}
            <span className="font-semibold text-slate-900">D2C site</span>.
          </p>
          <p className="mt-4 break-words text-[11px] font-medium tracking-[0.06em] text-slate-500 sm:mt-5 sm:text-xs">
            <span className="text-slate-400">Channels · </span>
            Amazon · Flipkart · Walmart · Jiomart · D2C
          </p>
        </motion.footer>
      </div>
    </div>
  );
}
