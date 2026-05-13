"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function StripeSessionsBanner() {
  return (
    <section className="relative overflow-hidden bg-enterprise-bg section-spacing">
      <div className="noise-overlay" />
      <div className="absolute inset-0 grid-subtle opacity-30" />
      
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="group relative overflow-hidden enterprise-card bg-enterprise-text min-h-[500px]">
          <div className="absolute inset-0">
            <Image
              src="/images/sessions-banner.jpg"
              alt="Conference-style keynote presentation background"
              fill
              className="object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-enterprise-text via-enterprise-text/40 to-transparent" />
          <div className="absolute inset-0 ambient-gradient opacity-20" />

          <div className="relative z-10 flex h-full flex-col justify-between p-10 lg:p-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-enterprise-lime/20 bg-enterprise-lime/5 px-3 py-1 mb-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-enterprise-green">Unified Infrastructure</p>
              </div>
              <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[0.95]">
                The future of commerce <span className="text-enterprise-green">is unified.</span>
              </h2>
              <div className="mt-12">
                <Link
                  href="/"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-[11px] font-bold uppercase tracking-[0.2em] text-enterprise-text hover:bg-enterprise-green transition-all"
                >
                  Explore ISNAP Core
                </Link>
              </div>
            </div>

            <div className="mt-16 enterprise-glass border-white/10 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-sm font-bold text-white uppercase tracking-widest">ISNAP Operational Backbone</p>
              <div className="h-px flex-1 bg-white/10 hidden md:block" />
              <div className="flex items-center gap-6 font-mono text-[10px] font-bold text-white/60 uppercase tracking-widest">
                <span>Amazon</span>
                <span className="h-1 w-1 rounded-full bg-enterprise-green" />
                <span>Flipkart</span>
                <span className="h-1 w-1 rounded-full bg-enterprise-green" />
                <span>JioMart</span>
                <span className="h-1 w-1 rounded-full bg-enterprise-green" />
                <span>D2C</span>
              </div>
            </div>
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

