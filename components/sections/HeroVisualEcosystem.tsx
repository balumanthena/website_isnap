"use client";

import { cn } from "@/lib/utils";

export function HeroVisualEcosystem() {
  return (
    <div className="relative w-full h-full bg-white rounded-xl overflow-hidden shadow-premium">
      {/* Dashboard Top Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-enterprise-border bg-enterprise-bg/40">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            {[1, 2, 3].map(i => <div key={i} className="h-2 w-2 rounded-full bg-enterprise-border" />)}
          </div>
          <div className="h-4 w-px bg-enterprise-border" />
          <span className="text-[10px] font-bold text-enterprise-text-muted uppercase tracking-widest">Global Terminal</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-enterprise-green" />
            <span className="text-[9px] font-bold text-enterprise-green uppercase">Sync: Active</span>
          </div>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Col: System Integrity Nodes */}
        <div className="md:col-span-4 space-y-6">
          <div className="p-5 rounded-xl border border-enterprise-border bg-white shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <span className="text-[9px] font-bold uppercase tracking-widest text-enterprise-text-muted">Node Status</span>
              <span className="text-[9px] font-mono font-bold text-enterprise-text opacity-40">UTC-04</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className={cn(
                  "h-5 rounded-sm transition-all",
                  i === 4 || i === 9 ? "bg-enterprise-green/40" : "bg-enterprise-bg"
                )} />
              ))}
            </div>
          </div>

          <div className="p-5 rounded-xl border border-enterprise-border bg-enterprise-bg/40">
            <p className="text-[9px] font-bold uppercase tracking-widest text-enterprise-text-muted mb-4">Metric Distribution</p>
            <div className="space-y-3">
              {[
                { l: "Platform", v: 84 },
                { l: "Execution", v: 62 },
                { l: "Network", v: 91 }
              ].map(bar => (
                <div key={bar.l}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-[9px] font-bold text-enterprise-text">{bar.l}</span>
                    <span className="text-[9px] font-mono text-enterprise-text-muted">{bar.v}%</span>
                  </div>
                  <div className="h-0.5 w-full bg-enterprise-border rounded-full overflow-hidden">
                    <div className="h-full bg-enterprise-text" style={{ width: `${bar.v}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center/Right: Multi-Node Analytics */}
        <div className="md:col-span-8">
          <div className="h-full p-6 rounded-xl border border-enterprise-border bg-white flex flex-col">
            <div className="flex items-center justify-between mb-10 pb-6 border-b border-enterprise-border">
              <div>
                <p className="text-[9px] font-bold text-enterprise-text-muted uppercase tracking-widest mb-1">Operational Revenue</p>
                <p className="text-3xl font-bold tracking-hero text-enterprise-text">₹12.4M</p>
              </div>
              <div className="text-right">
                <p className="text-[9px] font-bold text-enterprise-green uppercase tracking-widest mb-1">+14.2%</p>
                <p className="text-[9px] font-bold text-enterprise-text-muted uppercase tracking-widest">Growth Vector</p>
              </div>
            </div>

            <div className="flex-1 min-h-[160px] relative mt-4">
              {/* Institutional Graph Lines */}
              <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                <path
                  d="M0 140 L 40 130 L 80 150 L 120 110 L 160 120 L 200 90 L 240 100 L 280 60 L 320 80 L 360 40 L 400 50"
                  fill="none"
                  stroke="#0B1020"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.15"
                />
                <path
                  d="M0 140 L 40 130 L 80 150 L 120 110 L 160 120 L 200 90 L 240 100 L 280 60 L 320 80 L 360 40 L 400 50"
                  fill="none"
                  stroke="#7BE07B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="animate-[draw_2s_ease-out]"
                />
              </svg>
              
              <div className="absolute inset-0 grid grid-cols-5 pointer-events-none">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="h-full border-r border-enterprise-border last:border-0" />
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-8 pt-6 border-t border-enterprise-border">
              {[
                { l: "Active SKUs", v: "1,248" },
                { l: "Order Velocity", v: "28/min" },
                { l: "SLA Status", v: "99.9%" }
              ].map(stat => (
                <div key={stat.l}>
                  <p className="text-[8px] font-bold text-enterprise-text-muted uppercase tracking-widest mb-1">{stat.l}</p>
                  <p className="text-sm font-bold text-enterprise-text">{stat.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-4 bg-enterprise-bg/20 border-t border-enterprise-border flex items-center justify-between">
        <div className="flex gap-6">
          {["Inventory", "Distribution", "Analytics", "Settlement"].map(tab => (
            <span key={tab} className="text-[9px] font-bold text-enterprise-text/40 uppercase tracking-widest cursor-default hover:text-enterprise-text transition-colors">
              {tab}
            </span>
          ))}
        </div>
        <div className="h-5 w-5 rounded bg-enterprise-text flex items-center justify-center">
          <div className="h-1.5 w-1.5 rounded-full bg-enterprise-green shadow-[0_0_8px_rgba(123,224,123,0.8)]" />
        </div>
      </div>
    </div>
  );
}
