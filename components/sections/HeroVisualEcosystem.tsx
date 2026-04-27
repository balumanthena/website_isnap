"use client";

/**
 * AI commerce platform hero visual — asymmetric floating cards, data-flow lines, subtle motion.
 * Straight-on layout (no perspective). Brand greens + #00C4B4 flow/progress.
 */

import { cn } from "@/lib/utils";
import { useState } from "react";

const cardBase =
  "rounded-[22px] border border-[#EAEAEA] bg-white/75 shadow-[0_10px_40px_-18px_rgba(15,23,42,0.12)] backdrop-blur-[6px] transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_48px_-16px_rgba(22,163,74,0.14)]";

const badge = "inline-flex items-center rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide";
const fulfillmentRows = [
  { label: "Shipped", base: 72 },
  { label: "Processing", base: 48 },
  { label: "In transit", base: 64 }
];

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export function HeroVisualEcosystem() {
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });

  const handlePointerMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const nx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    setMouseTilt({ x: clamp(nx, -1, 1), y: clamp(ny, -1, 1) });
  };

  const handlePointerLeave = () => setMouseTilt({ x: 0, y: 0 });

  const getFulfillmentWidth = (base: number, index: number) => {
    const verticalInfluence = index === 0 ? -1 : index === 1 ? 0.2 : 1;
    const delta = mouseTilt.y * 8 * verticalInfluence + mouseTilt.x * 2;
    return `${clamp(base + delta, 28, 92)}%`;
  };

  return (
    <div
      className="relative mx-auto w-full max-w-[520px] overflow-hidden lg:max-w-none"
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
    >
      {/* Canvas — white so hero stays one flat surface with the page */}
      <div className="pointer-events-none absolute inset-0 -m-4 rounded-[28px] bg-white lg:-m-6" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 h-40 -translate-y-1/2 bg-gradient-to-r from-[#22c55e]/[0.06] via-transparent to-[#00C4B4]/[0.04] blur-3xl"
        aria-hidden
      />

      {/* Connection layer — behind cards */}
      <svg
        className="pointer-events-none absolute left-1/2 top-[42%] z-0 h-[min(100%,380px)] w-full max-w-[440px] -translate-x-1/2 -translate-y-1/2 overflow-visible md:h-[400px] md:max-w-[460px] lg:top-[45%] lg:h-[420px] lg:max-w-[480px]"
        viewBox="0 0 400 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="flowStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C4B4" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#15803D" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        {/* Inventory → Orders */}
        <path
          id="path-io"
          d="M 72 108 C 130 72 200 88 268 96"
          stroke="url(#flowStroke)"
          strokeWidth="1"
          strokeOpacity="0.55"
        />
        {/* Inventory → Channel */}
        <path
          id="path-ic"
          d="M 56 168 C 56 240 88 300 108 352"
          stroke="url(#flowStroke)"
          strokeWidth="1"
          strokeOpacity="0.45"
        />
        {/* Orders → Fulfillment */}
        <path
          id="path-of"
          d="M 292 168 L 300 248 C 302 300 268 340 220 368"
          stroke="url(#flowStroke)"
          strokeWidth="1"
          strokeOpacity="0.5"
        />
        {/* Channel → Fulfillment */}
        <path
          id="path-cf"
          d="M 148 392 C 180 380 210 372 248 368"
          stroke="url(#flowStroke)"
          strokeWidth="1"
          strokeOpacity="0.4"
        />

        {/* Moving dots — AI automation */}
        <circle r="3" fill="#00C4B4">
          <animateMotion dur="5s" repeatCount="indefinite" path="M 72 108 C 130 72 200 88 268 96" />
        </circle>
        <circle r="2.5" fill="#22c55e" opacity="0.9">
          <animateMotion dur="6.5s" repeatCount="indefinite" path="M 56 168 C 56 240 88 300 108 352" begin="0.5s" />
        </circle>
        <circle r="2.5" fill="#00C4B4">
          <animateMotion dur="5.5s" repeatCount="indefinite" path="M 292 168 L 300 248 C 302 300 268 340 220 368" begin="1s" />
        </circle>
      </svg>

      {/* Desktop: asymmetric float */}
      <div className="relative z-10 hidden min-h-[420px] md:block md:min-h-[440px] lg:min-h-[480px]">
        {/* Inventory */}
        <div className={`absolute left-0 top-6 w-[min(100%,220px)] ${cardBase} z-30 p-4`}>
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Inventory</span>
            <span className={`${badge} bg-primary-100/90 text-primary-700`}>AI Active</span>
          </div>
          <p className="mt-3 text-sm font-semibold text-slate-900">
            Active SKUs: <span className="tabular-nums">1,248</span>
          </p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-[78%] rounded-full bg-[#00C4B4]/85" />
          </div>
        </div>

        {/* Orders + sparkline */}
        <div className={`absolute right-0 top-0 z-40 w-[min(100%,230px)] ${cardBase} p-4`}>
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Orders</span>
            <span className={`${badge} bg-[#00C4B4]/12 text-[#00A896]`}>Optimizing</span>
          </div>
          <p className="mt-3 text-sm font-semibold text-slate-900">
            Orders processed: <span className="tabular-nums">312</span>
          </p>
          <svg className="mt-3 h-10 w-full" viewBox="0 0 120 36" preserveAspectRatio="none" aria-hidden>
            <path
              d="M0 28 L18 22 L36 26 L54 14 L72 18 L90 8 L108 12 L120 6"
              fill="none"
              stroke="#00C4B4"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.85"
            />
            <path
              d="M0 28 L18 22 L36 26 L54 14 L72 18 L90 8 L108 12 L120 6 L120 36 L0 36 Z"
              fill="url(#isnapHeroSparkFill)"
              opacity="0.12"
            />
            <defs>
              <linearGradient id="isnapHeroSparkFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00C4B4" />
                <stop offset="100%" stopColor="#00C4B4" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Channel */}
        <div className={`absolute bottom-28 left-4 z-20 w-[min(100%,210px)] ${cardBase} p-4`}>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Channels</span>
          <p className="mt-3 text-sm font-semibold text-slate-900">
            Live Channels: <span className="tabular-nums">5</span>
          </p>
          <div className="mt-3 flex items-center justify-between gap-2">
            <span className="text-xs font-medium text-slate-600">Status</span>
            <span className="rounded-md bg-[#00C4B4]/10 px-2 py-1 text-[11px] font-semibold text-[#009688]">Synced</span>
          </div>
        </div>

        {/* Fulfillment */}
        <div className={`absolute bottom-6 right-2 z-30 w-[min(100%,260px)] ${cardBase} p-4`}>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Fulfillment</span>
          <ul className="mt-3 space-y-3">
            {fulfillmentRows.map((row, index) => (
              <li key={row.label}>
                <div className="flex items-center justify-between gap-2 text-[11px]">
                  <span className="font-medium text-slate-600">{row.label}</span>
                </div>
                <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#00C4B4] to-[#22c55e] transition-[width] duration-300 ease-out"
                    style={{ width: getFulfillmentWidth(row.base, index) }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile: stacked, same cards, no overlapping */}
      <div className="relative z-10 flex flex-col gap-4 md:hidden">
        <div className={`${cardBase} p-4`}>
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Inventory</span>
            <span className={`${badge} bg-primary-100/90 text-primary-700`}>AI Active</span>
          </div>
          <p className="mt-3 text-sm font-semibold text-slate-900">
            Active SKUs: <span className="tabular-nums">1,248</span>
          </p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-[78%] rounded-full bg-[#00C4B4]/85" />
          </div>
        </div>
        <div className={`${cardBase} p-4`}>
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Orders</span>
            <span className={`${badge} bg-[#00C4B4]/12 text-[#00A896]`}>Optimizing</span>
          </div>
          <p className="mt-3 text-sm font-semibold text-slate-900">
            Orders processed: <span className="tabular-nums">312</span>
          </p>
          <svg className="mt-3 h-10 w-full" viewBox="0 0 120 36" preserveAspectRatio="none" aria-hidden>
            <path
              d="M0 28 L18 22 L36 26 L54 14 L72 18 L90 8 L108 12 L120 6"
              fill="none"
              stroke="#00C4B4"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className={`${cardBase} p-4`}>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Channels</span>
          <p className="mt-3 text-sm font-semibold text-slate-900">
            Live Channels: <span className="tabular-nums">5</span>
          </p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-xs text-slate-600">Status</span>
            <span className="rounded-md bg-[#00C4B4]/10 px-2 py-1 text-[11px] font-semibold text-[#009688]">Synced</span>
          </div>
        </div>
        <div className={`${cardBase} p-4`}>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Fulfillment</span>
          <ul className="mt-3 space-y-3">
            {fulfillmentRows.map((row) => (
              <li key={row.label}>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-medium text-slate-600">{row.label}</span>
                </div>
                <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-gradient-to-r from-[#00C4B4] to-[#22c55e]" style={{ width: `${row.base}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
