"use client";

import { type ElementRef, useRef, useState } from "react";
import { motion, useInView, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const channels = [
  { name: "Amazon", listings: "1,248", orders: "842", revenue: "₹12.4L", fill: 78 },
  { name: "Flipkart", listings: "980", orders: "516", revenue: "₹8.2L", fill: 62 },
  { name: "JioMart", listings: "412", orders: "189", revenue: "₹3.1L", fill: 44 },
  { name: "D2C site", listings: "324", orders: "267", revenue: "₹5.8L", fill: 91 }
];

const tags = ["Amazon", "Flipkart", "JioMart", "D2C"];

export default function SmartCommerceShowcase() {
  const ref = useRef<ElementRef<"section">>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [pipelinePercent, setPipelinePercent] = useState(0);
  const [hasEntered, setHasEntered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"]
  });

  // Smooth out scroll jitter for premium UI motion.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 26,
    mass: 0.35
  });
  const progressScale = useTransform(smoothProgress, [0, 1], [0, 1]);

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (!hasEntered && latest > 0) {
      setHasEntered(true);
    }
    const next = Math.max(0, Math.min(100, Math.round(latest * 100)));
    setPipelinePercent((prev) => (prev === next ? prev : next));
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-slate-200/60 bg-[#fafbfc] py-24 sm:py-28 lg:py-32"
    >
      {/* Mesh + soft Stripe-like atmosphere */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_15%_20%,rgba(99,102,241,0.07),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_85%_80%,rgba(34,197,94,0.09),transparent_58%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_100%,rgba(148,163,184,0.06),transparent_60%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(99,102,241,0.03)_0%,transparent_45%,rgba(34,197,94,0.04)_100%)]"
        aria-hidden
      />

      {/* Light noise overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease }}
            className="max-w-xl"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">
              Smart commerce engine
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.5rem]">
              List, sync, and sell across every channel
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
              One backbone for catalogue truth, channel execution, and revenue visibility—built for operators who need
              speed without losing control.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-200/90 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-600 shadow-sm backdrop-blur-sm transition-colors duration-300 hover:border-primary-200/80 hover:text-slate-900"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: dashboard + floating card */}
          <motion.div
            className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none"
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.08, ease }}
          >
            {/* Glow behind UI */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[min(28rem,90vw)] w-[min(36rem,120%)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.12)_0%,rgba(34,197,94,0.1)_35%,transparent_65%)] blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-8 right-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.2),transparent_70%)] blur-2xl"
              aria-hidden
            />

            {/* Floating sync card */}
            <motion.div
              className="absolute -left-2 top-0 z-20 w-[min(100%,17.5rem)] sm:-left-4 sm:top-2 sm:w-[19rem]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div
                className="rounded-2xl border border-white/80 bg-white/55 p-4 shadow-[0_24px_48px_-12px_rgba(15,23,42,0.18),0_0_0_1px_rgba(255,255,255,0.5)_inset] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_32px_64px_-16px_rgba(15,23,42,0.22)]"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-600">
                  Catalog synced successfully
                </p>
                <p className="mt-3 text-sm font-semibold text-slate-900">Organic Face Serum</p>
                <p className="mt-1 text-xs text-slate-500">
                  Channel: <span className="font-medium text-slate-700">Amazon + Flipkart</span>
                </p>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold tabular-nums text-slate-900">₹1,249</span>
                  <span className="rounded-full bg-emerald-500/12 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-700 ring-1 ring-emerald-500/25">
                    Synced
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Main dashboard */}
            <div className="relative z-10 mt-16 sm:mt-12 lg:mt-8">
              <div
                className="rounded-2xl border border-white/90 bg-white/45 p-1 shadow-[0_2px_4px_rgba(15,23,42,0.04),0_32px_64px_-28px_rgba(15,23,42,0.18),inset_0_1px_0_rgba(255,255,255,0.9)] ring-1 ring-slate-200/50 backdrop-blur-2xl transition-shadow duration-300 hover:shadow-[0_40px_80px_-32px_rgba(15,23,42,0.2)] sm:p-1.5"
              >
                <div className="rounded-[0.875rem] bg-gradient-to-b from-white/95 to-slate-50/90 p-5 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                        Live operations
                      </p>
                      <h3 className="mt-1.5 text-lg font-semibold tracking-tight text-slate-900">
                        Channel performance
                      </h3>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">Orders (24h)</p>
                      <p className="mt-1 text-2xl font-semibold tabular-nums text-slate-900">1,814</p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="mb-2 flex items-center justify-between text-[11px] font-medium text-slate-500">
                      <span>Fulfilment pipeline</span>
                      <span className="tabular-nums text-slate-700">{pipelinePercent}% of daily target</span>
                    </div>
                    <div className="relative h-2 overflow-hidden rounded-full bg-slate-100 shadow-inner">
                      <motion.div
                        className="pointer-events-none absolute inset-y-0 left-0 rounded-full bg-emerald-400/70 blur-[6px]"
                        style={{ scaleX: progressScale, transformOrigin: "left center" }}
                        transition={{ duration: 0.5, ease }}
                        aria-hidden
                      />
                      <motion.div
                        className="relative h-full rounded-full bg-gradient-to-r from-primary-500 via-primary-500 to-emerald-500 shadow-[0_0_12px_rgba(34,197,94,0.45)]"
                        style={{ scaleX: progressScale, transformOrigin: "left center" }}
                        initial={false}
                        animate={hasEntered ? { opacity: 1 } : { opacity: 0.85 }}
                        transition={{ duration: 0.45, ease }}
                      />
                    </div>
                  </div>

                  <div className="mt-6 overflow-hidden rounded-xl border border-slate-200/80 bg-white/60 shadow-inner">
                    <table className="w-full text-left text-sm">
                      <caption className="sr-only">
                        Channel performance: listings, orders, and revenue by sales channel
                      </caption>
                      <thead>
                        <tr className="border-b border-slate-200/80 bg-slate-50/80 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                          <th className="px-4 py-3 font-medium">Channel</th>
                          <th className="hidden px-2 py-3 font-medium sm:table-cell">Listings</th>
                          <th className="px-2 py-3 font-medium">Orders</th>
                          <th className="px-4 py-3 text-right font-medium">Revenue</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100/90 text-slate-800">
                        {channels.map((row) => (
                          <tr
                            key={row.name}
                            className="group transition-colors duration-300 hover:bg-primary-50/30"
                          >
                            <td className="px-4 py-3.5 font-medium">{row.name}</td>
                            <td className="hidden tabular-nums px-2 py-3.5 text-slate-600 sm:table-cell">
                              {row.listings}
                            </td>
                            <td className="px-2 py-3.5">
                              <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-3">
                                <span className="tabular-nums font-medium">{row.orders}</span>
                                <div className="h-1.5 w-full max-w-[5rem] overflow-hidden rounded-full bg-slate-100 sm:w-16">
                                  <div
                                    className="h-full rounded-full bg-gradient-to-r from-primary-400 to-primary-600 transition-all duration-300 group-hover:shadow-[0_0_8px_rgba(34,197,94,0.35)]"
                                    style={{ width: `${row.fill}%` }}
                                  />
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-3.5 text-right tabular-nums font-semibold text-slate-900">
                              {row.revenue}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
