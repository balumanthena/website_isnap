"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const executionPhases = [
  { 
    title: "Marketplace Integration", 
    desc: "Centralize your product catalog and brand architecture into our unified ecosystem." 
  },
  { 
    title: "Catalog Automation", 
    desc: "AI-powered mapping and attribute categorization for marketplace compliance." 
  },
  { 
    title: "Global Activation", 
    desc: "Simultaneous go-live across Amazon, Flipkart, Walmart, and your D2C store." 
  },
  { 
    title: "Growth Optimization", 
    desc: "Performance marketing and campaign scaling to drive revenue velocity." 
  },
  { 
    title: "Operational Insights", 
    desc: "Track sales, inventory, and fulfillment via a single centralized dashboard." 
  }
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative section-spacing overflow-hidden bg-white">
      <div className="absolute inset-0 grid-subtle opacity-[0.4] pointer-events-none" />
      
      <div className="max-container relative z-10">
        <div className="flex flex-col gap-24">
          {/* Section Header */}
          <div className="max-w-4xl">
             <div className="inline-flex items-center gap-2 rounded-full border border-enterprise-border bg-enterprise-bg px-4 py-1.5 mb-10">
                <span className="h-1.5 w-1.5 rounded-full bg-enterprise-green" />
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-enterprise-text">Enterprise Workflow</p>
             </div>
             <h2 className="section-heading mb-10">
                A roadmap to institutional <br/><span className="text-enterprise-green">marketplace dominance.</span>
             </h2>
             <p className="text-xl text-enterprise-text-muted leading-relaxed max-w-2xl">
                We replace fragmented manual processes with a streamlined, automated workflow designed for global high-volume brand portfolios.
             </p>
          </div>

          {/* Connected Pipeline */}
          <div className="relative">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-enterprise-border border border-enterprise-border rounded-[40px] overflow-hidden shadow-premium">
                {executionPhases.map((phase, i) => (
                  <div key={phase.title} className="bg-white p-12 flex flex-col group hover:bg-enterprise-bg/20 transition-all duration-500 relative">
                     {/* Connector Line (Desktop) */}
                     {i < executionPhases.length - 1 && (
                       <div className="hidden lg:block absolute top-16 -right-4 z-20">
                          <ArrowRightIcon className="h-4 w-4 text-enterprise-border" />
                       </div>
                     )}
                     
                     <div className="mb-12">
                        <div className="h-12 w-12 rounded-xl bg-enterprise-text flex items-center justify-center text-enterprise-green font-bold text-sm group-hover:scale-110 transition-all duration-500">
                           {String(i + 1).padStart(2, '0')}
                        </div>
                     </div>

                     <div className="flex-1">
                        <h3 className="text-lg font-bold text-enterprise-text tracking-tight mb-4 group-hover:text-enterprise-green transition-colors">{phase.title}</h3>
                        <p className="text-[15px] text-enterprise-text-muted leading-relaxed">
                           {phase.desc}
                        </p>
                     </div>
                  </div>
                ))}
             </div>
          </div>

          {/* Strategic CTA Banner */}
          <div className="mt-12">
             <div className="p-16 rounded-[48px] bg-enterprise-text text-white relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 grid-subtle opacity-[0.1] pointer-events-none" />
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-enterprise-green/10 to-transparent" />
                
                <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-16">
                   <div className="max-w-3xl text-center lg:text-left">
                      <div className="inline-flex items-center gap-2 mb-8 opacity-60">
                         <div className="h-px w-8 bg-enterprise-green" />
                         <span className="text-[11px] font-bold uppercase tracking-widest text-enterprise-green">Velocity Metric</span>
                      </div>
                      <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight max-w-xl text-white">
                         Scale across all channels in <span className="text-enterprise-green">under 48 hours.</span>
                      </h3>
                      <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
                         Our automated catalog mapping allows for rapid, compliant deployment across India&apos;s largest marketplaces with zero manual overhead.
                      </p>
                   </div>
                   
                   <div className="flex flex-col items-center gap-6">
                      <Button size="lg" className="h-[72px] px-12 rounded-full bg-enterprise-green text-enterprise-text font-bold text-[15px] uppercase tracking-widest hover:bg-white hover:text-enterprise-text transition-all shadow-2xl shadow-enterprise-green/30 active:scale-95">
                         Start Enterprise Audit
                      </Button>
                      <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">Institutional Grade SLA</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

