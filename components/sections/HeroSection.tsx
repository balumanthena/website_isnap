"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20 bg-white">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 grid-subtle opacity-[0.5] pointer-events-none" />
      
      <div className="max-container relative z-10">
        <div className="flex flex-col gap-24">
          {/* Top Layer: Centralized Operations Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-enterprise-border bg-enterprise-bg px-4 py-1.5 mb-10">
                <span className="h-1.5 w-1.5 rounded-full bg-enterprise-green" />
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-enterprise-text">Marketplace Operations Dashboard</p>
              </div>
              <h1 className="hero-heading mb-12 max-w-4xl">
                Launch and scale across <span className="text-enterprise-green">India's leading</span> marketplaces.
              </h1>
              <p className="text-xl text-enterprise-text-muted max-w-xl mb-12">
                The centralized platform for marketplace operations, inventory synchronization, and automated cataloging for 200+ global brands.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started
                </Button>
                <Link href="/contact" className="h-[54px] flex items-center px-10 border border-enterprise-border rounded-full text-[13px] font-bold uppercase tracking-widest text-enterprise-text hover:bg-enterprise-bg transition-all w-full sm:w-auto justify-center">
                  Book a Demo
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-5 flex flex-col gap-10 lg:pt-16">
              <div className="p-6 md:p-8 rounded-[32px]">
                <p className="text-[11px] font-bold text-enterprise-text-muted uppercase tracking-widest mb-6">Operational Performance</p>
                <div className="space-y-6">
                  {[
                    { label: "Marketplaces Integrated", value: "Amazon, Flipkart, Walmart, JioMart" },
                    { label: "Catalog Health", value: "99.9% Compliance" },
                    { label: "Monitoring", value: "24/7 Real-Time" }
                  ].map(item => (
                    <div key={item.label} className="pb-6 border-b border-enterprise-border last:border-0 last:pb-0">
                      <p className="text-[10px] font-bold text-enterprise-text-muted uppercase mb-1">{item.label}</p>
                      <p className="text-lg font-bold text-enterprise-text">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Middle Layer: Ecosystem Visualization */}
          <div className="relative">
             <div className="relative w-full aspect-[16/10] md:aspect-[16/9]">
                <div className="absolute inset-0 opacity-[0.05] grid-subtle pointer-events-none" />
                
                {/* Clean Ecosystem Visual */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/Frame 163 (1).svg"
                    alt="Marketplace Orchestration"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                <div className="absolute bottom-12 left-12 right-12 flex items-center justify-between z-10 pointer-events-none">
                   <div className="flex gap-4">
                      {["Inventory Sync", "Order Orchestration", "Catalog Intelligence"].map(tag => (
                        <span key={tag} className="px-4 py-2 rounded-full bg-white/50 backdrop-blur-md text-[10px] font-bold text-enterprise-text uppercase tracking-widest">{tag}</span>
                      ))}
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-enterprise-green animate-pulse" />
                      <span className="text-[10px] font-bold text-enterprise-text-muted uppercase tracking-widest">Systems Operational</span>
                   </div>
                </div>
             </div>
             
             {/* Floating Trust Card */}
             <div className="absolute -top-12 -right-6 hidden lg:block w-72 p-8 rounded-[32px] bg-white/80 backdrop-blur-xl border border-white shadow-2xl shadow-black/5 animate-float">
                <p className="text-[11px] font-bold text-enterprise-text-muted uppercase tracking-widest mb-4">Enterprise Growth</p>
                <p className="text-4xl font-bold tracking-tighter mb-2">3X <span className="text-lg text-enterprise-green">+</span></p>
                <p className="text-[12px] font-medium text-enterprise-text-muted leading-snug">Average revenue velocity increase for ISNAP partners.</p>
             </div>
          </div>

          {/* Bottom Layer: Strategic Partners */}
          <div className="pt-12 border-t border-enterprise-border flex flex-col md:flex-row md:items-center justify-between gap-12">
             <p className="text-[11px] font-bold text-enterprise-text-muted uppercase tracking-[0.2em]">Trusted by Global Brand Portfolios</p>
             <div className="flex flex-wrap items-center gap-12 opacity-30 grayscale contrast-125">
                {["SAMSUNG", "RITUAL", "MERCH", "CORE", "APEX"].map(logo => (
                  <span key={logo} className="text-sm font-black tracking-tighter">{logo}</span>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
