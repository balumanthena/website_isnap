"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

const marketplaceNodes = [
  { label: "Amazon India", type: "Marketplace Management", status: "Active" },
  { label: "Flipkart", type: "Distribution Sync", status: "Active" },
  { label: "Walmart India", type: "Channel Operations", status: "Active" },
  { label: "Direct-to-Consumer", type: "Order Fulfillment", status: "Active" }
];

export function EngagementProfileSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as any, { once: true, amount: 0.12 });

  return (
    <section ref={ref} className="relative section-spacing overflow-hidden rounded-[48px] bg-[#F7F8F4] border border-enterprise-border mx-4 md:mx-12 mb-24">
      <div className="absolute inset-0 grid-subtle opacity-[0.5] pointer-events-none" />
      
      <div className="max-container relative z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          {/* Left Col: Strategic Narrative */}
          <div className="lg:col-span-5 space-y-12">
            <div>
               <div className="inline-flex items-center gap-2 rounded-full border border-enterprise-border bg-white px-4 py-1.5 mb-10">
                  <span className="h-1.5 w-1.5 rounded-full bg-enterprise-green" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-enterprise-text">Operational Infrastructure</p>
               </div>
               <h3 className="section-heading mb-10">
                  Marketplace <br/>Growth <span className="text-enterprise-green">Orchestration.</span>
               </h3>
               <p className="text-xl text-enterprise-text-muted leading-relaxed">
                  Our unified operating system governs listings, channels, and fulfillment across global marketplace ecosystems.
               </p>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-enterprise-border">
               {[
                 { label: "Brands", value: "200+" },
                 { label: "Categories", value: "12+" },
                 { label: "Channels", value: "5" }
               ].map(stat => (
                 <div key={stat.label}>
                    <p className="text-[11px] font-bold text-enterprise-text-muted uppercase mb-2">{stat.label}</p>
                    <p className="text-3xl font-bold tracking-tight text-enterprise-text">{stat.value}</p>
                 </div>
               ))}
            </div>

            <div className="flex flex-col gap-6">
               <Button size="lg" className="h-[64px] rounded-full bg-enterprise-text text-white px-10 text-[14px] font-bold uppercase tracking-widest hover:bg-enterprise-green hover:text-enterprise-text transition-all shadow-xl shadow-enterprise-text/10">
                  Contact Our Enterprise Team
               </Button>
               <p className="text-[11px] font-bold text-enterprise-text-muted uppercase tracking-widest text-center">Certified Marketplace Partner</p>
            </div>
          </div>

          {/* Right Col: Dashboard Visual */}
          <div className="lg:col-span-7">
             <div className="rounded-[40px] p-2 bg-enterprise-text shadow-2xl overflow-hidden">
                <div className="bg-white rounded-[34px] overflow-hidden">
                   <div className="px-8 py-6 border-b border-enterprise-border bg-enterprise-bg/20 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                         <div className="flex gap-1.5">
                            {[1, 2, 3].map(i => <div key={i} className="h-2 w-2 rounded-full bg-enterprise-border" />)}
                         </div>
                         <span className="text-[11px] font-bold text-enterprise-text uppercase tracking-widest">Channel Operations Dashboard</span>
                      </div>
                      <span className="text-[10px] font-bold text-enterprise-green uppercase">Sync Active</span>
                   </div>
                   
                   <div className="p-10">
                      <div className="space-y-4">
                         {marketplaceNodes.map(node => (
                           <div key={node.label} className="p-6 rounded-[24px] border border-enterprise-border bg-enterprise-bg/20 flex items-center justify-between group hover:bg-white transition-all duration-500">
                              <div className="flex items-center gap-8">
                                 <div>
                                    <p className="text-sm font-bold text-enterprise-text mb-1">{node.label}</p>
                                    <p className="text-[12px] text-enterprise-text-muted opacity-70">{node.type}</p>
                                 </div>
                              </div>
                              <div className="flex items-center gap-3">
                                 <div className="h-2 w-2 rounded-full bg-enterprise-green" />
                                 <span className="text-[10px] font-bold text-enterprise-text uppercase">{node.status}</span>
                              </div>
                           </div>
                         ))}
                      </div>

                      <div className="mt-10 pt-10 border-t border-enterprise-border grid grid-cols-2 gap-12">
                         <div>
                            <p className="text-[11px] font-bold text-enterprise-text-muted uppercase tracking-widest mb-4">Operational Health</p>
                            <div className="h-2 w-full bg-enterprise-bg rounded-full overflow-hidden">
                               <div className="h-full bg-enterprise-green w-full" />
                            </div>
                         </div>
                         <div className="text-right">
                            <p className="text-[11px] font-bold text-enterprise-text-muted uppercase tracking-widest mb-2">Service SLA</p>
                            <p className="text-lg font-bold text-enterprise-text">99.98% Guaranteed</p>
                         </div>
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
