"use client";

import { Button } from "@/components/ui/button";

import Link from "next/link";

export function CTASection() {
  return (
    <section className="relative bg-enterprise-text py-20 md:py-28 overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 opacity-[0.1] grid-subtle pointer-events-none" />
      
      <div className="max-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-10">
              <span className="h-1.5 w-1.5 rounded-full bg-enterprise-green" />
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-white">Scale your enterprise</p>
            </div>
            
            <h2 className="hero-heading text-white max-w-3xl mb-12">
              Launch and scale <br/>across India's leading <br/><span className="text-enterprise-green">Marketplaces.</span>
            </h2>
            
            <p className="max-w-2xl text-xl text-white/40 leading-relaxed mb-12">
              Join 200+ global brands orchestrating their commerce operations at scale. Book a demo with our enterprise team to audit your marketplace strategy.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="p-12 rounded-[48px] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
               <p className="text-[11px] font-bold text-enterprise-green uppercase tracking-widest mb-10">Request a Consultation</p>
               
               <div className="space-y-6 mb-12">
                  {[
                    "Marketplace Operations Audit",
                    "Catalog Automation Strategy",
                    "Inventory Sync Review",
                    "Revenue Velocity Roadmap"
                  ].map(item => (
                    <div key={item} className="flex items-center gap-4">
                       <div className="h-px w-8 bg-white/20" />
                       <span className="text-[14px] font-bold text-white/80 uppercase tracking-tight">{item}</span>
                    </div>
                  ))}
               </div>

               <div className="flex flex-col gap-6">
                  <Link href="/contact">
                    <Button size="lg" className="h-[64px] w-full rounded-full bg-enterprise-green text-enterprise-text font-bold text-[14px] uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-enterprise-green/20">
                       Book a Strategic Demo
                    </Button>
                  </Link>
                  <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] text-center">Standard SLA Guaranteed</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
