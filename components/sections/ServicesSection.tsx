"use client";

import { cn } from "@/lib/utils";

const infrastructureCapabilities = [
  { group: "Strategic", nodes: ["Marketplace Management", "D2C Brand Creation", "AI-Powered Onboarding"] },
  { group: "Execution", nodes: ["SEO & GEO Optimisation", "Digital Growth Ads", "Logistics & Fulfillment"] },
  { group: "Intelligence", nodes: ["Sales Analytics", "Unified CRM Hub", "Inventory Intelligence"] }
];

export function ServicesSection() {
  return (
    <section className="relative section-a section-spacing overflow-hidden border-t border-enterprise-border">
      <div className="absolute inset-0 grid-subtle opacity-[0.02] pointer-events-none" />
      
      <div className="max-container relative z-10">
        <div className="flex flex-col gap-20">
          {/* Section Header: Proprietary Composition */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-md border border-enterprise-border bg-white px-3 py-1 mb-8">
                <span className="h-1 w-1 rounded-full bg-enterprise-green" />
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-enterprise-text">Capability Infrastructure</p>
              </div>
              <h2 className="section-heading">
                Operational <span className="text-enterprise-green">Infrastructure</span> Ecosystem.
              </h2>
            </div>
            <p className="text-sm text-enterprise-text-muted leading-relaxed max-w-sm text-left md:text-right pb-1">
              Our capability matrix provides the underlying software-driven programs for institutional commerce scale.
            </p>
          </div>

          {/* Infrastructure Matrix: Layered Architecture Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-12">
               <div className="enterprise-card bg-enterprise-bg/20 p-1.5 border border-enterprise-border overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-1.5">
                     {infrastructureCapabilities.map((group) => (
                       <div key={group.group} className="bg-white rounded-[14px] p-10 border border-enterprise-border flex flex-col hover:bg-enterprise-bg/20 transition-all">
                          <div className="flex items-center justify-between mb-12">
                             <h3 className="text-[10px] font-bold text-enterprise-text uppercase tracking-[0.3em]">{group.group} Infrastructure</h3>
                             <div className="h-1.5 w-8 bg-enterprise-bg rounded-full" />
                          </div>
                          
                          <div className="space-y-4 flex-1">
                             {group.nodes.map((node) => (
                               <div key={node} className="flex items-center justify-between p-4 rounded-lg border border-enterprise-border bg-white group hover:border-enterprise-green transition-all cursor-default">
                                  <span className="text-[13px] font-bold text-enterprise-text group-hover:text-enterprise-green transition-colors">{node}</span>
                                  <div className="h-1.5 w-1.5 rounded-full bg-enterprise-bg group-hover:bg-enterprise-green transition-all" />
                               </div>
                             ))}
                          </div>

                          <div className="mt-12 pt-8 border-t border-enterprise-border flex items-center justify-between">
                             <span className="text-[9px] font-mono text-enterprise-text-muted">ID: CAP_{group.group.toUpperCase()}</span>
                             <div className="flex gap-1">
                                {Array.from({ length: 3 }).map((_, i) => <div key={i} className="h-1 w-1 rounded-full bg-enterprise-border" />)}
                             </div>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>

          {/* System Status Analytics Strip (Density Variation) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-10 border-t border-enterprise-border opacity-60">
             {[
               { l: "Platform Uptime", v: "99.99%" },
               { l: "Execution Nodes", v: "1,248" },
               { l: "SLA Compliant", v: "Optimal" },
               { l: "Architecture", v: "v4.2.0" }
             ].map(stat => (
               <div key={stat.l} className="flex flex-col items-center md:items-start">
                  <p className="text-[9px] font-bold text-enterprise-text-muted uppercase tracking-widest mb-1">{stat.l}</p>
                  <p className="text-sm font-bold text-enterprise-text">{stat.v}</p>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
