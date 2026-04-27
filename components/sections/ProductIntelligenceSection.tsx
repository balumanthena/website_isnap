"use client";

import { cn } from "@/lib/utils";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useId, useRef, type ReactNode } from "react";

const PRIMARY = "#64b549";
const TEAL = "#00C4B4";
/** Deep green accent (replaces legacy violet) */
const ACCENT_DEEP = "#15803D";

const channels = [
  { name: "Amazon", sub: "Marketplace", color: "#FF9900", icon: "A", orders: "2.4k" },
  { name: "Shopify", sub: "D2C Store", color: "#96BF47", icon: "S", orders: "1.1k" },
  { name: "Instagram", sub: "Social shop", color: "#E1306C", icon: "I", orders: "842" },
  { name: "Campaign", sub: "Spring drop", color: "#64b549", icon: "C", orders: "Live" },
];

const products = [
  { id: 1, title: "Casual Flex Hoodie", price: "₹2,499", stock: 124, img: "👕", sizes: ["S", "M", "L", "XL"] as const },
  { id: 2, title: "Urban Trail Sneakers", price: "₹3,899", stock: 67, img: "👟", sizes: ["7", "8", "9", "10"] as const },
  { id: 3, title: "Classic Denim Jacket", price: "₹4,299", stock: 0, img: "🧥", sizes: ["M", "L", "XL"] as const },
  { id: 4, title: "Performance Polo", price: "₹1,899", stock: 203, img: "👔", sizes: ["S", "M", "L"] as const },
  { id: 5, title: "Crossbody Mini Bag", price: "₹1,499", stock: 89, img: "👜", sizes: ["OS"] as const },
  { id: 6, title: "Graphic Tee Vol.3", price: "₹999", stock: 312, img: "👚", sizes: ["S", "M", "L", "XL"] as const },
];

const shipments = [
  { id: "SH-4821", tag: "Shipped", status: "Delivered", city: "Mumbai", eta: "Apr 10" },
  { id: "SH-4822", tag: "In motion", status: "In Transit", city: "Delhi", eta: "Apr 13" },
  { id: "SH-4823", tag: "Queued", status: "Processing", city: "Bangalore", eta: "Apr 15" },
];

const analyticsChips = [
  { label: "Conversion", value: "4.2%", delta: "+0.3%" },
  { label: "Return rate", value: "2.1%", delta: "−0.5%" },
  { label: "Avg. order", value: "₹2,847", delta: "+₹124" },
];

const card =
  "rounded-[18px] border border-black/[0.06] bg-white/[0.78] shadow-[0_12px_48px_-18px_rgba(15,23,42,0.12)] backdrop-blur-xl";

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

function StockBadge({ stock }: { stock: number }) {
  if (stock === 0)
    return <span className="rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-semibold text-red-500">Out of stock</span>;
  if (stock < 80)
    return <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-600">Low stock</span>;
  return <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">In stock</span>;
}

function StatusDot({ status }: { status: string }) {
  const c =
    status === "Delivered" ? "bg-emerald-400" : status === "In Transit" ? "bg-amber-400" : "bg-slate-300";
  return <span className={cn("inline-block h-1.5 w-1.5 rounded-full ring-2 ring-white", c)} />;
}

/** Subtle float + parallax on hover region */
function FloatingCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 280, damping: 22 });
  const springY = useSpring(my, { stiffness: 280, damping: 22 });
  const rotateX = useTransform(springY, [-40, 40], [3, -3]);
  const rotateY = useTransform(springX, [-40, 40], [-3, 3]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      mx.set((e.clientX - r.left - r.width / 2) * 0.15);
      my.set((e.clientY - r.top - r.height / 2) * 0.15);
    };
    const onLeave = () => {
      mx.set(0);
      my.set(0);
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [mx, my]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ProductIntelligenceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });
  const uid = useId();
  const gid = (s: string) => `${uid.replace(/:/g, "")}-${s}`;

  return (
    <section
      ref={ref}
      className="relative overflow-x-hidden overflow-y-visible bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* noise + mesh */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.2] mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:88px_88px]"
        aria-hidden
      />

      {/* faint arcs across section */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.28]" aria-hidden>
        <defs>
          <linearGradient id={gid("arcGrad")} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={PRIMARY} stopOpacity="0" />
            <stop offset="50%" stopColor={TEAL} stopOpacity="0.2" />
            <stop offset="100%" stopColor={ACCENT_DEEP} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M -80 180 Q 400 80 900 200 T 1900 160"
          stroke={`url(#${gid("arcGrad")})`}
          strokeWidth="1"
          fill="none"
          strokeDasharray="6 10"
        />
        <path
          d="M -40 420 Q 500 320 1100 440 T 2000 380"
          stroke={`url(#${gid("arcGrad")})`}
          strokeWidth="1"
          fill="none"
          strokeDasharray="4 14"
          opacity="0.6"
        />
      </svg>

      <div className="pointer-events-none absolute left-[10%] top-[18%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_center,rgba(100,181,73,0.06),transparent_62%)] blur-2xl" aria-hidden />
      <div className="pointer-events-none absolute right-[6%] top-[34%] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle_at_center,rgba(22,163,74,0.06),transparent_62%)] blur-3xl" aria-hidden />

      <div className="relative mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* asymmetric header — not dead center */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="max-w-2xl pl-0 sm:pl-2 lg:max-w-[42rem] lg:pl-4"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#64b549]">Product Intelligence</p>
          <h2 className="mt-3 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
            Every product. Every channel. One brain.
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-slate-500">
            Real-time catalog, stock, and performance signals — orchestrated with AI so your team ships faster than the
            market shifts.
          </p>
        </motion.div>

        {/* Full-width grid — no CSS scale (scale shrinks layout box and clipped with overflow-hidden) */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mt-14 grid w-full grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-[minmax(0,220px)_minmax(0,1fr)_minmax(0,240px)] lg:items-start lg:gap-10"
        >
          {/* ── LEFT: floating channels ── */}
          <motion.div variants={fadeUp} className="relative hidden min-h-[420px] lg:block">
            {channels.map((ch, i) => (
              <motion.div
                key={ch.name}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                className={cn(
                  "absolute w-[min(100%,188px)]",
                  i === 0 && "left-0 top-0",
                  i === 1 && "left-2 top-[88px]",
                  i === 2 && "left-0 top-[176px]",
                  i === 3 && "left-5 top-[268px]"
                )}
              >
                <div className={cn(card, "flex items-start gap-3 px-3.5 py-3")}>
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[13px] font-bold text-white shadow-lg shadow-black/10"
                    style={{ backgroundColor: ch.color }}
                  >
                    {ch.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold text-slate-800">{ch.name}</p>
                    <p className="text-[10px] text-slate-400">{ch.sub}</p>
                    <p className="mt-1 text-[11px] font-medium tabular-nums text-slate-500">{ch.orders}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <svg
              className="pointer-events-none absolute bottom-8 right-[-4px] top-8 w-[72px] overflow-visible"
              viewBox="0 0 72 400"
              preserveAspectRatio="none"
              aria-hidden
            >
              <defs>
                <linearGradient id={gid("flowL")} x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor={PRIMARY} stopOpacity="0.55" />
                  <stop offset="100%" stopColor={TEAL} stopOpacity="0.2" />
                </linearGradient>
              </defs>
              {[32, 112, 200, 288].map((y, i) => (
                <g key={i}>
                  <path
                    d={`M 0 ${y} C 24 ${y - 20} 48 ${y + 12} 72 ${y + (i % 2 ? -8 : 8)}`}
                    stroke={`url(#${gid("flowL")})`}
                    strokeWidth="1.2"
                    strokeDasharray="5 6"
                    fill="none"
                  />
                  <circle r="2.2" fill={PRIMARY}>
                    <animateMotion
                      dur={`${3.2 + i * 0.35}s`}
                      repeatCount="indefinite"
                      path={`M 0 ${y} C 24 ${y - 20} 48 ${y + 12} 72 ${y + (i % 2 ? -8 : 8)}`}
                    />
                  </circle>
                </g>
              ))}
            </svg>
          </motion.div>

          {/* ── CENTER: intelligence panel ── */}
          <motion.div variants={fadeUp} className="relative z-10 min-w-0">
            <FloatingCard className="relative">
              <div
                className={cn(
                  "relative overflow-hidden rounded-[24px] p-1",
                  "shadow-[0_32px_100px_-28px_rgba(100,181,73,0.22),inset_0_1px_0_0_rgba(255,255,255,0.85)]"
                )}
                style={{
                  background: `linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(240,250,240,0.9) 45%, rgba(255,255,255,0.88) 100%)`,
                }}
              >
                <div className="absolute inset-0 rounded-[23px] bg-gradient-to-br from-[#64b549]/[0.12] via-transparent to-[#15803D]/[0.08]" />
                <div className="relative rounded-[22px] border border-white/60 bg-white/40 p-5 backdrop-blur-md sm:p-6">
                  <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-[15px] font-semibold tracking-tight text-slate-900">Live catalog</h3>
                      <p className="mt-1 text-[12px] text-slate-500">6 SKUs · sync health 99.2%</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#64b549]/15 to-[#00C4B4]/10 px-3 py-1 text-[10px] font-semibold text-[#3d8a2e] ring-1 ring-[#64b549]/20">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#64b549] opacity-40" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#64b549]" />
                        </span>
                        AI optimizing
                      </span>
                      <span className="rounded-full bg-slate-900/[0.04] px-2.5 py-1 text-[10px] font-medium text-slate-500">
                        Live
                      </span>
                    </div>
                  </div>

                  {/* 2×3 grid — first cell is visual anchor; overlay detail floats above */}
                  <div className="relative min-h-[300px] sm:min-h-[330px]">
                    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">
                      {products.map((p, i) => (
                        <motion.div
                          key={p.id}
                          whileHover={{
                            y: -3,
                            scale: 1.02,
                            transition: { type: "spring", stiffness: 400, damping: 22 },
                          }}
                          className={cn(
                            "relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-2.5 shadow-sm transition-shadow",
                            "hover:border-[#64b549]/35 hover:shadow-[0_16px_40px_-12px_rgba(100,181,73,0.2)]",
                            i === 0 && "col-span-2 row-span-2 min-h-[200px] sm:col-span-1 sm:row-span-2 sm:min-h-[220px]"
                          )}
                        >
                          <div
                            className={cn(
                              "flex items-center justify-center rounded-xl bg-gradient-to-b from-slate-50 to-slate-100/80 text-3xl",
                              i === 0 ? "mb-2.5 h-[calc(100%-120px)] min-h-[100px] sm:h-32" : "mb-2 h-14 sm:h-16"
                            )}
                          >
                            {p.img}
                          </div>
                          <p
                            className={cn(
                              "line-clamp-2 font-semibold leading-snug text-slate-800",
                              i === 0 ? "text-[13px]" : "text-[11px]"
                            )}
                          >
                            {p.title}
                          </p>
                          <div className="mt-1 flex items-center justify-between gap-1">
                            <span className="text-[11px] font-semibold tabular-nums text-slate-700">{p.price}</span>
                            <StockBadge stock={p.stock} />
                          </div>
                          {i === 0 && (
                            <p className="mt-2 text-[10px] text-slate-400">Selected · detail on card →</p>
                          )}
                        </motion.div>
                      ))}
                    </div>

                    {/* Overlapping intelligence card — 3D tilt */}
                    <motion.div
                      initial={{ opacity: 0, y: 28, rotateX: 8 }}
                      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                      transition={{ delay: 0.45, duration: 0.55, ease: "easeOut" }}
                      className={cn(
                        card,
                        "absolute right-2 bottom-3 z-20 w-[min(92%,260px)] p-4 sm:right-3 sm:bottom-4 sm:w-[280px]",
                        "border-[#64b549]/15 shadow-[0_24px_60px_-16px_rgba(100,181,73,0.25)]"
                      )}
                      style={{
                        transform: "perspective(900px) rotateY(-4deg) rotateX(2deg) translateZ(12px)",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#64b549]/20 to-[#00C4B4]/15 text-2xl shadow-inner">
                          👕
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-[13px] font-semibold text-slate-900">Casual Flex Hoodie</p>
                          <p className="text-[11px] text-slate-500">SKU-HD-4821 · ₹2,499</p>
                        </div>
                      </div>
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        {[
                          { label: "Views", val: "2.4k" },
                          { label: "Adds", val: "312" },
                          { label: "Conv.", val: "4.8%" },
                        ].map((m) => (
                          <div key={m.label} className="rounded-xl bg-slate-50/90 px-2 py-2 text-center ring-1 ring-slate-100">
                            <p className="text-[9px] font-medium uppercase tracking-wide text-slate-400">{m.label}</p>
                            <p className="text-[14px] font-semibold tabular-nums text-slate-900">{m.val}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 flex flex-wrap gap-1">
                        {products[0].sizes.map((s) => (
                          <span
                            key={s}
                            className="rounded-md border border-slate-200/90 bg-white px-2 py-0.5 text-[10px] font-medium text-slate-600"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      <button
                        type="button"
                        className="mt-3 w-full rounded-xl bg-[#64b549] py-2.5 text-[11px] font-semibold text-white shadow-md shadow-[#64b549]/30 transition hover:bg-[#58a740] active:scale-[0.98]"
                      >
                        Sync & optimize
                      </button>
                      <p className="mt-2 flex items-start gap-2 text-[10px] font-medium leading-snug text-[#64b549]">
                        <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#64b549]" />
                        Suggested: +8% on Amazon · high elasticity
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </FloatingCard>
          </motion.div>

          {/* ── RIGHT: fulfillment + abstract flow ── */}
          <motion.div variants={fadeUp} className="relative hidden min-h-[420px] lg:block">
            <svg
              className="pointer-events-none absolute left-[-8px] top-12 bottom-12 w-14 overflow-visible"
              viewBox="0 0 56 360"
              preserveAspectRatio="none"
              aria-hidden
            >
              <defs>
                <linearGradient id={gid("flowR")} x1="1" y1="0" x2="0" y2="0">
                  <stop offset="0%" stopColor={TEAL} stopOpacity="0.55" />
                  <stop offset="100%" stopColor={ACCENT_DEEP} stopOpacity="0.25" />
                </linearGradient>
              </defs>
              {[48, 140, 232].map((y, i) => (
                <g key={i}>
                  <path
                    d={`M 56 ${y} C 32 ${y + 10} 16 ${y - 14} 0 ${y}`}
                    stroke={`url(#${gid("flowR")})`}
                    strokeWidth="1.2"
                    strokeDasharray="5 6"
                    fill="none"
                  />
                  <circle r="2" fill={TEAL}>
                    <animateMotion
                      dur={`${3.4 + i * 0.4}s`}
                      repeatCount="indefinite"
                      path={`M 56 ${y} C 32 ${y + 10} 16 ${y - 14} 0 ${y}`}
                      begin={`${i * 0.15}s`}
                    />
                  </circle>
                </g>
              ))}
            </svg>

            {shipments.map((s, i) => (
              <motion.div
                key={s.id}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 * i }}
                className={cn(
                  "absolute w-[min(100%,208px)]",
                  i === 0 && "right-0 top-0",
                  i === 1 && "right-3 top-[100px]",
                  i === 2 && "right-0 top-[200px]"
                )}
              >
                <div className={cn(card, "px-3.5 py-3")}>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-md bg-slate-900/[0.04] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-slate-500">
                      {s.tag}
                    </span>
                    <span className="text-[10px] font-medium tabular-nums text-slate-400">{s.id}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <StatusDot status={s.status} />
                      <span className="text-[12px] font-semibold text-slate-800">{s.status}</span>
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500">
                    {s.city} · ETA {s.eta}
                  </p>
                </div>
              </motion.div>
            ))}

            <div className={cn(card, "absolute right-0 top-[300px] w-full max-w-[208px] space-y-2.5 px-3.5 py-3.5")}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">Analytics</p>
              {analyticsChips.map((a) => (
                <div key={a.label} className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2 last:border-0 last:pb-0">
                  <span className="text-[12px] text-slate-600">{a.label}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[13px] font-semibold tabular-nums text-slate-900">{a.value}</span>
                    <span
                      className={cn(
                        "text-[10px] font-semibold tabular-nums",
                        a.delta.startsWith("+") || a.delta.startsWith("−")
                          ? a.delta.startsWith("+")
                            ? "text-emerald-500"
                            : "text-rose-400"
                          : "text-slate-400"
                      )}
                    >
                      {a.delta}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* abstract network — not a map */}
            <div className={cn(card, "absolute bottom-0 right-0 w-full max-w-[208px] overflow-hidden px-3 py-3")}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">Network flow</p>
              <svg className="mt-2 h-20 w-full" viewBox="0 0 200 72" fill="none" aria-hidden>
                <path
                  d="M20 56 Q 50 20 100 40 T 180 24"
                  stroke={PRIMARY}
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeDasharray="4 6"
                  opacity="0.45"
                />
                <circle cx="100" cy="40" r="4" fill={PRIMARY} opacity="0.9" />
                <circle cx="40" cy="52" r="3" fill={TEAL} opacity="0.85" />
                <circle cx="170" cy="28" r="3" fill={ACCENT_DEEP} opacity="0.7" />
                <line x1="100" y1="40" x2="40" y2="52" stroke={TEAL} strokeWidth="0.8" opacity="0.35" />
                <line x1="100" y1="40" x2="170" y2="28" stroke={ACCENT_DEEP} strokeWidth="0.8" opacity="0.35" />
              </svg>
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile fallbacks */}
        <div className="mt-12 grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:hidden">
          {channels.map((ch) => (
            <div key={ch.name} className={cn(card, "flex items-center gap-2 px-3 py-2.5")}>
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold text-white"
                style={{ backgroundColor: ch.color }}
              >
                {ch.icon}
              </span>
              <div className="min-w-0">
                <p className="truncate text-[12px] font-semibold text-slate-800">{ch.name}</p>
                <p className="text-[10px] text-slate-400">{ch.orders}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 lg:hidden">
          {analyticsChips.map((a) => (
            <div key={a.label} className={cn(card, "px-2.5 py-2 text-center")}>
              <p className="text-[9px] text-slate-400">{a.label}</p>
              <p className="text-sm font-semibold tabular-nums text-slate-900">{a.value}</p>
              <p className={cn("text-[9px] font-semibold", a.delta.startsWith("+") ? "text-emerald-500" : "text-rose-400")}>
                {a.delta}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
