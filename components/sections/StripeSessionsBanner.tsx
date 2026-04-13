"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function StripeSessionsBanner() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
          className="group relative overflow-hidden rounded-2xl shadow-[0_40px_90px_-44px_rgba(2,6,23,0.7)] ring-1 ring-slate-900/10"
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/images/sessions-banner.jpg"
              alt="Conference-style keynote presentation background"
              fill
              priority={false}
              sizes="(min-width: 1024px) 1100px, 100vw"
              className="object-cover object-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
            />
          </div>

          {/* Cinematic overlays */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0b1020]/88 via-[#0b1020]/52 to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_70%_40%,rgba(34,197,94,0.16),transparent_62%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_30%_25%,rgba(99,102,241,0.18),transparent_60%)]"
            aria-hidden
          />

          {/* Optional grain */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.28] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E")`
            }}
            aria-hidden
          />

          {/* Content */}
          <div className="relative flex min-h-[22rem] flex-col justify-between px-6 py-10 sm:min-h-[26rem] sm:px-10 sm:py-12">
            <div className="max-w-xl">
              <h2 className="text-balance font-heading text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                The future of commerce is unified
              </h2>
              <div className="mt-7">
                <Link
                  href="/"
                  className="inline-flex h-12 items-center justify-center rounded-2xl bg-white px-6 text-sm font-semibold text-slate-900 shadow-[0_12px_28px_-14px_rgba(0,0,0,0.7)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[0_18px_38px_-16px_rgba(0,0,0,0.75)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1020]"
                >
                  Explore ISNAP <span aria-hidden>→</span>
                </Link>
              </div>
            </div>

            {/* Bottom overlay strip */}
            <div className="mt-10 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xl sm:px-5">
              <div className="flex flex-col gap-2 text-sm text-white/85 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-semibold text-white">ISNAP Commerce Platform</p>
                <p className="text-white/75 sm:text-center">Powering brands across marketplaces</p>
                <p className="text-white/75 sm:text-right">Amazon • Flipkart • JioMart • D2C</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

