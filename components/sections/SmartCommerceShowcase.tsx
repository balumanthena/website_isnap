"use client";

import { cn } from "@/lib/utils";

const distributionNodes = [
  { label: "Amazon Marketplace", state: "Connected", volume: "1.2M+", sync: "Real-time" },
  { label: "Flipkart Ecosystem", state: "Connected", volume: "840K+", sync: "Real-time" },
  { label: "Walmart Compliance", state: "Active", volume: "412K+", sync: "Synced" },
  { label: "JioMart Operations", state: "Active", volume: "220K+", sync: "Synced" }
];

export function SmartCommerceShowcase() {
  return (
    <section className="relative section-spacing overflow-hidden bg-[#F7F8F4]">
      <div className="absolute inset-0 grid-subtle opacity-[0.5] pointer-events-none" />
      
      <div className="max-container relative z-10">
        <div className="flex flex-col gap-24">
          {/* Header Layer: Strategic Positioning */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
            <div className="lg:col-span-8">
               <div className="inline-flex items-center gap-2 rounded-full border border-enterprise-border bg-white px-4 py-1.5 mb-10">
                  <span className="h-1.5 w-1.5 rounded-full bg-enterprise-green" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-enterprise-text">Centralized Governance</p>
               </div>
               <h2 className="section-heading mb-10">
                  Unified Channel <br/>Infrastructure & <span className="text-enterprise-green">Marketplace Operations.</span>
               </h2>
               <p className="text-xl text-enterprise-text-muted leading-relaxed max-w-2xl">
                  Replace fragmented workflows with a single orchestration layer that governs every major marketplace from one dashboard.
               </p>
            </div>
          </div>

          {/* Infrastructure Visualization */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Operations Dashboard Surface */}
            <div className="lg:col-span-8">
               <div className="rounded-[40px] p-2 bg-enterprise-text shadow-2xl overflow-hidden">
                  <div className="bg-white rounded-[34px] overflow-hidden">
                     <div className="px-8 py-6 border-b border-enterprise-border bg-enterprise-bg/20 flex items-center justify-between">
                        <span className="text-[11px] font-bold text-enterprise-text uppercase tracking-widest">Marketplace Operations Control</span>
                        <div className="flex items-center gap-6">
                           <div className="flex gap-1.5">
                              {Array.from({ length: 3 }).map((_, i) => <div key={i} className="h-1.5 w-1.5 rounded-full bg-enterprise-border" />)}
                           </div>
                           <span className="text-[10px] font-bold text-enterprise-text-muted uppercase tracking-widest">Systems Operational</span>
                        </div>
                     </div>
                     
                     <div className="p-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           {distributionNodes.map(node => (
                             <div key={node.label} className="p-8 rounded-[24px] border border-enterprise-border bg-enterprise-bg/10 hover:bg-white transition-all duration-500 group">
                                <div className="flex items-center justify-between mb-8">
                                   <div className="flex items-center gap-2">
                                      <div className="h-2 w-2 rounded-full bg-enterprise-green" />
                                      <span className="text-[10px] font-bold text-enterprise-text uppercase tracking-widest">{node.state}</span>
                                   </div>
                                   <span className="text-[10px] font-bold text-enterprise-text-muted uppercase tracking-widest">{node.sync}</span>
                                </div>
                                <p className="text-xl font-bold text-enterprise-text mb-6">{node.label}</p>
                                <div className="space-y-4 pt-6 border-t border-enterprise-border">
                                   <div className="flex justify-between items-center">
                                      <span className="text-[10px] font-bold text-enterprise-text-muted uppercase">Volume</span>
                                      <span className="text-sm font-bold text-enterprise-text">{node.volume}</span>
                                   </div>
                                </div>
                             </div>
                           ))}
                        </div>

                        <div className="mt-8 p-10 rounded-[32px] bg-enterprise-text text-white relative overflow-hidden">
                           <div className="absolute inset-0 grid-subtle opacity-[0.1] pointer-events-none" />
                           <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
                              <div>
                                 <p className="text-[11px] font-bold text-enterprise-green uppercase tracking-widest mb-4">Inventory Synchronization</p>
                                 <p className="text-4xl font-bold tracking-tighter">99.9% <span className="text-white/20 text-xl font-medium">Real-Time Accuracy</span></p>
                              </div>
                              <div className="flex gap-4">
                                 <div className="px-6 py-3 rounded-full bg-white/10 border border-white/10 text-[10px] font-bold uppercase tracking-widest">Global Parity</div>
                                 <div className="px-6 py-3 rounded-full bg-enterprise-green text-enterprise-text text-[10px] font-bold uppercase tracking-widest">Monitoring Active</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Right: Operational Summary */}
            <div className="lg:col-span-4 space-y-8">
               <div className="p-10 rounded-[32px] border border-enterprise-border bg-white shadow-premium">
                  <p className="text-[11px] font-bold text-enterprise-text-muted uppercase tracking-widest mb-8">Operational Integrity</p>
                  <p className="text-xl font-bold text-enterprise-text leading-tight mb-8">
                     Unified governance that eliminates pricing fragmentation.
                  </p>
                  <div className="space-y-6">
                     {[
                       { label: "Price Parity", value: "100.0%" },
                       { label: "Stock Accuracy", value: "Real-Time" },
                       { label: "Order Logic", value: "Automated" }
                     ].map(item => (
                       <div key={item.label} className="flex justify-between items-center py-4 border-b border-enterprise-border last:border-0">
                          <span className="text-[11px] font-bold text-enterprise-text-muted uppercase">{item.label}</span>
                          <span className="text-sm font-bold text-enterprise-text">{item.value}</span>
                       </div>
                     ))}
                  </div>
               </div>

               <div className="p-10 rounded-[32px] border border-enterprise-border bg-white flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-enterprise-bg flex items-center justify-center mb-8 border border-enterprise-border">
                     <span className="h-2.5 w-2.5 rounded-full bg-enterprise-green animate-pulse" />
                  </div>
                  <p className="text-[11px] font-bold text-enterprise-text-muted uppercase tracking-widest mb-3">Live Operations</p>
                  <p className="text-lg font-bold text-enterprise-text">All Systems Operational</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
