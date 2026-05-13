"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CheckCircleIcon, ArrowPathIcon, CloudArrowUpIcon, ChartBarIcon } from "@heroicons/react/24/outline";

export function OnboardingStatusUI() {
  return (
    <div className="p-8 rounded-[32px] bg-enterprise-text text-white shadow-2xl border border-white/5 backdrop-blur-xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-24 h-24 bg-enterprise-green/10 rounded-full blur-3xl -mr-12 -mt-12 group-hover:bg-enterprise-green/20 transition-colors" />
      
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-enterprise-green mb-1">Status Report</p>
          <h4 className="text-lg font-bold">Amazon India</h4>
        </div>
        <div className="h-10 w-10 rounded-full bg-enterprise-green/20 flex items-center justify-center text-enterprise-green">
          <CheckCircleIcon className="h-6 w-6" />
        </div>
      </div>

      <div className="space-y-4">
        {[
          { label: "Business Verification", status: "Verified" },
          { label: "GTIN Exemption", status: "Approved" },
          { label: "Category Approval", status: "Active" }
        ].map(item => (
          <div key={item.label} className="flex justify-between items-center text-[11px] border-b border-white/5 pb-3">
            <span className="text-white/40">{item.label}</span>
            <span className="font-bold text-enterprise-green">{item.status}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
        <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Onboarding Velocity</p>
        <p className="text-xs font-bold text-enterprise-green">+42% Above Avg</p>
      </div>
    </div>
  );
}

export function CatalogIntelligenceUI() {
  const MotionDiv = motion.div as any;

  return (
    <div className="p-8 rounded-[40px] bg-white border border-enterprise-border shadow-premium relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-enterprise-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="flex items-center gap-4 mb-10">
        <div className="h-12 w-12 rounded-2xl bg-enterprise-bg border border-enterprise-border flex items-center justify-center text-enterprise-text">
          <ArrowPathIcon className="h-6 w-6 animate-spin-slow" />
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-enterprise-text-muted">AI Data Mapping</p>
          <h4 className="text-base font-bold">Multi-Marketplace Sync</h4>
        </div>
      </div>

      <div className="space-y-6">
        <div className="p-4 rounded-2xl bg-enterprise-bg border border-enterprise-border relative">
           <div className="flex justify-between items-center mb-3">
              <span className="text-[10px] font-bold text-enterprise-text uppercase">Attributes Identified</span>
              <span className="text-[10px] font-bold text-enterprise-green">100% Match</span>
           </div>
           <div className="h-1.5 w-full bg-white rounded-full overflow-hidden">
              <MotionDiv 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                className="h-full bg-enterprise-green"
              />
           </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
           {[
             { label: "Amazon", val: "A+ Content Ready" },
             { label: "Flipkart", val: "Smart Sync active" }
           ].map(site => (
             <div key={site.label} className="p-4 rounded-2xl border border-enterprise-border">
                <p className="text-[9px] font-bold text-enterprise-text-muted uppercase mb-1">{site.label}</p>
                <p className="text-[11px] font-bold text-enterprise-text">{site.val}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}

export function PerformancePulseUI() {
  const MotionDiv = motion.div as any;

  return (
    <div className="p-10 rounded-[48px] bg-enterprise-text text-white shadow-2xl relative overflow-hidden">
       <div className="absolute inset-0 opacity-[0.05] grid-subtle pointer-events-none" />
       
       <div className="relative z-10">
          <div className="flex items-center justify-between mb-12">
             <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-enterprise-green animate-pulse" />
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/80">Growth Velocity</p>
             </div>
             <ChartBarIcon className="h-6 w-6 text-enterprise-green" />
          </div>

          <div className="space-y-10">
             <div>
                <p className="text-[11px] font-bold text-white/40 uppercase mb-2">Revenue Scale</p>
                <div className="flex items-end gap-3">
                   <p className="text-4xl font-bold tracking-tight text-white">4.2Cr</p>
                   <p className="text-xs font-bold text-enterprise-green mb-1.5">+14% MoM</p>
                </div>
             </div>

             <div className="flex gap-4">
                {[40, 70, 50, 90, 60, 80, 100].map((h, i) => (
                  <MotionDiv 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    className="flex-1 w-2 bg-enterprise-green/40 rounded-full"
                    transition={{ delay: i * 0.1 }}
                  />
                ))}
             </div>
          </div>
       </div>
    </div>
  );
}
