"use client";

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
    <section className="relative overflow-hidden bg-enterprise-bg section-spacing">
      <div className="noise-overlay" />
      <div className="absolute inset-0 grid-subtle opacity-30" />
      
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:grid-rows-2 lg:gap-10">
          {/* Primary Enterprise Feature Card */}
          <Link
            href="/contact"
            className="group relative flex flex-col overflow-hidden enterprise-card bg-enterprise-text p-10 lg:row-span-2 min-h-[600px]"
          >
            <div className="absolute inset-0 ambient-gradient opacity-20" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-enterprise-lime/20 bg-enterprise-lime/5 px-3 py-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-enterprise-green">Operational Excellence</p>
              </div>
              <h2 className="mt-8 text-5xl font-bold tracking-tight text-white leading-[0.95]">
                Start selling with <span className="text-enterprise-green">operational confidence.</span>
              </h2>
              <p className="mt-8 text-lg text-white/60 leading-relaxed max-w-md">
                AI-assisted cataloging and automated channel setup—engineered to reduce manual rework and accelerate global deployment.
              </p>
            </div>
            
            <div className="mt-auto relative">
              <div className="relative aspect-[16/10] w-[140%] -ml-[20%] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
                <Image
                  src="/images/ChatGPT Image Apr 10, 2026, 12_43_51 PM.png"
                  alt="ISNAP commerce visual"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-enterprise-text to-transparent opacity-40" />
              </div>
              <div className="absolute bottom-6 right-6">
                <DarkArrowCircle />
              </div>
            </div>
          </Link>

          {/* Secondary Features */}
          <Link
            href="/services"
            className="group enterprise-card p-10 flex flex-col justify-between bg-white/60 hover:bg-white transition-all duration-500 hover:-translate-y-2"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-enterprise-green mb-6">ISNAP Scale</p>
              <h2 className="text-3xl font-bold text-enterprise-text leading-tight">
                Continuous revenue optimization engine.
              </h2>
              <p className="mt-6 text-enterprise-text-muted leading-relaxed">
                Structured experiments and storefront tuning integrated into a single performance matrix.
              </p>
            </div>
            <div className="mt-8 flex justify-end">
              <ArrowCircle />
            </div>
          </Link>

          <Link
            href="/contact"
            className="group enterprise-card p-10 flex flex-col justify-between bg-white/60 hover:bg-white transition-all duration-500 hover:-translate-y-2"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-enterprise-green mb-6">Catalog Migration</p>
              <h2 className="text-3xl font-bold text-enterprise-text leading-tight">
                High-fidelity stack migration.
              </h2>
              <p className="mt-6 text-enterprise-text-muted leading-relaxed">
                Attribute mapping and QA checkpoints to maintain integrity during platform transitions.
              </p>
            </div>
            <div className="mt-8 flex justify-end">
              <ArrowCircle />
            </div>
          </Link>
        </div>

        {/* Global Settlement Dashboard */}
        <div className="mt-10 enterprise-card overflow-hidden bg-white/60 grid lg:grid-cols-2">
          <div className="p-10 lg:p-16 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-enterprise-text tracking-tight leading-[0.95]">
              Settle in the currencies <span className="text-enterprise-green">your buyers expect.</span>
            </h2>
            <Link
              href="/services"
              className="mt-10 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-enterprise-text hover:text-enterprise-green transition-colors"
            >
              See Cross-Border Framework
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="bg-enterprise-bg/50 p-10 lg:p-16 border-l border-enterprise-border relative">
            <div className="absolute inset-0 grid-subtle opacity-20" />
            <div className="relative enterprise-card p-8 bg-white border-white shadow-premium">
              <div className="flex items-center justify-between mb-8">
                <p className="text-[10px] font-bold text-enterprise-text-muted uppercase tracking-widest">Settlement Health</p>
                <div className="h-2 w-12 rounded-full bg-enterprise-lime/20 overflow-hidden">
                  <div className="h-full bg-enterprise-green w-3/4" />
                </div>
              </div>
              <ul className="space-y-6">
                {[
                  {c: "🇮🇳 Domestic · INR", s: "Live", cl: "text-enterprise-green"},
                  {c: "🇪🇺 EU · EUR", s: "Syncing", cl: "text-enterprise-lime"},
                  {c: "🇬🇧 UK · GBP", s: "Setup", cl: "text-enterprise-text-muted"}
                ].map(item => (
                  <li key={item.c} className="flex items-center justify-between">
                    <span className="text-sm font-bold text-enterprise-text">{item.c}</span>
                    <span className={cn("font-mono text-[10px] font-bold uppercase tracking-widest", item.cl)}>{item.s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
