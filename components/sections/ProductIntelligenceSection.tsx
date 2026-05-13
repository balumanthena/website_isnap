"use client";

import { ComparisonSlider } from "@/components/ui/ComparisonSlider";

export function ProductIntelligenceSection() {
  return (
    <section className="relative section-spacing overflow-hidden bg-white">
      <div className="absolute inset-0 grid-subtle opacity-[0.5] pointer-events-none" />
      
      <div className="max-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          {/* Left: Interactive AI Automation Slider */}
          <div className="lg:col-span-7">
             <div className="relative">
                <ComparisonSlider 
                  beforeImage="/raw-listing.png"
                  afterImage="/isnap-optimized.png"
                />
                
                {/* Floating Diagnostics */}
                <div className="absolute -bottom-8 -right-8 w-64 p-6 rounded-[32px] bg-enterprise-text text-white shadow-2xl z-30 animate-float">
                   <div className="flex items-center gap-3 mb-4">
                      <div className="h-2 w-2 rounded-full bg-enterprise-green animate-pulse" />
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">Live Diagnosis</p>
                   </div>
                   <div className="space-y-3">
                      {[
                        { label: "Contrast Ratio", status: "Optimized" },
                        { label: "Context Accuracy", status: "100%" },
                        { label: "Marketplace Sync", status: "Ready" }
                      ].map(item => (
                        <div key={item.label} className="flex justify-between items-center text-[11px]">
                           <span className="text-white/40">{item.label}</span>
                           <span className="font-bold text-enterprise-green">{item.status}</span>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>

          {/* Right: Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-center">
             <div className="inline-flex items-center gap-2 rounded-full border border-enterprise-border bg-enterprise-bg px-4 py-1.5 mb-10 self-start">
                <span className="h-1.5 w-1.5 rounded-full bg-enterprise-green" />
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-enterprise-text">Catalog Intelligence</p>
             </div>
             
             <h2 className="section-heading mb-10">
                Transform raw data <br/>into <span className="text-enterprise-green">AI-powered</span> <br/>catalog excellence.
             </h2>
             
             <p className="text-xl text-enterprise-text-muted leading-relaxed mb-12">
                Our AI automates the complex process of product mapping, visual optimization, and attribute categorization, reducing time-to-market from weeks to hours.
             </p>

             <div className="grid grid-cols-2 gap-8 pt-12 border-t border-enterprise-border">
                {[
                  { label: "Efficiency", value: "85%", desc: "Reduced Manual Overhead" },
                  { label: "Accuracy", value: "99.9%", desc: "Validation Protocol" }
                ].map(stat => (
                  <div key={stat.label}>
                    <p className="text-[11px] font-bold text-enterprise-text-muted uppercase mb-2">{stat.label}</p>
                    <p className="text-3xl font-bold tracking-tight text-enterprise-text mb-1">{stat.value}</p>
                    <p className="text-[11px] text-enterprise-text-muted opacity-70 leading-tight">{stat.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
