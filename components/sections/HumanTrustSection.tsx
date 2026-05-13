"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function HumanTrustSection() {
  return (
    <section className="relative section-spacing overflow-hidden bg-white">
      <div className="absolute inset-0 grid-subtle opacity-[0.4] pointer-events-none" />
      
      <div className="max-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          {/* Left: Strategic Governance Narrative */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-enterprise-border bg-enterprise-bg px-4 py-1.5 mb-10">
              <span className="h-1.5 w-1.5 rounded-full bg-enterprise-green" />
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-enterprise-text">Operational Integrity</p>
            </div>
            
            <h2 className="section-heading mb-10">
              The institutional standard <br/>for <span className="text-enterprise-green">global governance.</span>
            </h2>
            
            <p className="text-xl text-enterprise-text-muted leading-relaxed max-w-xl mb-12">
              We provide the technical orchestration and strategic oversight required for high-volume brands to achieve multi-channel dominance. Our platform ensures absolute data integrity and marketplace compliance at enterprise scale.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-enterprise-border">
               {[
                 { label: "Technical Rigor", desc: "Every operation is governed by automated validation protocols that ensure 100% marketplace compliance." },
                 { label: "Strategic Oversight", desc: "Institutional-grade monitoring of pricing parity, inventory sync, and account health across every node." }
               ].map(item => (
                 <div key={item.label}>
                    <p className="text-lg font-bold text-enterprise-text mb-4 tracking-tight">{item.label}</p>
                    <p className="text-base text-enterprise-text-muted leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
          </div>

          {/* Right: Platform Governance Visual */}
          <div className="lg:col-span-6">
             <div className="relative group">
                {/* Subtle Glow Aura */}
                <div className="absolute -inset-4 bg-enterprise-green/5 rounded-[60px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                
                <div className="relative rounded-[48px] p-12 bg-enterprise-bg border border-enterprise-border shadow-2xl overflow-hidden">
                   <div className="absolute inset-0 opacity-[0.2] grid-subtle pointer-events-none" />
                   
                   <div className="relative z-10 text-center mb-16">
                      <div className="h-24 w-24 rounded-3xl bg-white border border-enterprise-border flex items-center justify-center mb-8 mx-auto shadow-sm group-hover:scale-105 transition-transform duration-700">
                         <div className="h-4 w-4 rounded-full bg-enterprise-green shadow-[0_0_15px_rgba(115,217,120,0.8)] animate-pulse" />
                      </div>
                      <p className="text-[11px] font-bold text-enterprise-text-muted uppercase tracking-[0.2em] mb-4">Centralized Command Status</p>
                      <p className="text-4xl font-bold text-enterprise-text tracking-tighter">Systems Operational</p>
                   </div>
                   
                   <div className="grid grid-cols-2 gap-4 text-left relative z-10">
                      {[
                        { label: "Data Integrity", value: "Verified", desc: "100% Sync" },
                        { label: "Marketplace SLA", value: "99.98%", desc: "Institutional" },
                        { label: "Security Protocol", value: "Active", desc: "Enterprise" },
                        { label: "Global Reach", value: "20+ Nodes", desc: "Connected" }
                      ].map(item => (
                        <div key={item.label} className="p-8 rounded-[32px] bg-white border border-enterprise-border hover:shadow-premium transition-all duration-500">
                           <p className="text-[10px] font-bold text-enterprise-text-muted uppercase mb-1 tracking-widest">{item.label}</p>
                           <p className="text-xl font-bold text-enterprise-text mb-1">{item.value}</p>
                           <p className="text-[10px] font-medium text-enterprise-green uppercase tracking-widest">{item.desc}</p>
                        </div>
                      ))}
                   </div>

                   <div className="mt-12 pt-8 border-t border-enterprise-border flex items-center justify-between opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                      <p className="text-[10px] font-bold text-enterprise-text-muted uppercase tracking-widest">Compliance Partners</p>
                      <div className="flex gap-6 text-[10px] font-black tracking-tighter text-enterprise-text">
                         <span>AMAZON</span>
                         <span>FLIPKART</span>
                         <span>WALMART</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
