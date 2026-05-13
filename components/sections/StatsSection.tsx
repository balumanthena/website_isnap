"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const telemetryNodes = [
  { value: 200, suffix: "+", label: "Manufacturers" },
  { value: 10, suffix: "+", label: "Categories" },
  { value: 48, suffix: "h", label: "Deployment" },
  { value: 3, suffix: "X", label: "Revenue Velocity" },
  { value: 99.9, suffix: "%", label: "Uptime" }
];

export function StatsSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-enterprise-text">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 grid-subtle opacity-[0.05] pointer-events-none" />
      
      <div className="max-container relative z-10">
         <div className="flex flex-col lg:flex-row items-center justify-between gap-16 md:gap-24">
            <div className="flex flex-col items-center lg:items-start shrink-0 text-center lg:text-left">
               <p className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em] mb-4">Enterprise Scale</p>
               <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-enterprise-green shadow-[0_0_12px_rgba(115,217,120,0.6)]" />
                  <span className="text-[11px] font-bold text-white uppercase tracking-widest">Active Operations</span>
               </div>
            </div>

            <div className="flex-1 w-full grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
               {telemetryNodes.slice(0, 4).map((node) => (
                 <div key={node.label} className="text-center md:text-left">
                    <p className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-3">
                       <AnimatedCounter value={node.value} suffix={node.suffix} />
                    </p>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-white/30">{node.label}</p>
                 </div>
               ))}
            </div>

            <div className="hidden xl:flex items-center gap-6 pl-16 border-l border-white/10 shrink-0">
               <p className="text-[11px] font-bold text-white/40 uppercase tracking-widest leading-loose text-right">
                  Centralized <br/>Marketplace <br/>Governance
               </p>
            </div>
         </div>
      </div>
    </section>
  );
}
