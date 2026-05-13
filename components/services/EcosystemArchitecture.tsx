"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const partners = [
  { name: "Amazon", logo: "AMZN", color: "#FF9900" },
  { name: "Flipkart", logo: "FKRT", color: "#2874F0" },
  { name: "Walmart", logo: "WLMT", color: "#0071CE" },
  { name: "Shopify", logo: "SHPF", color: "#96BF48" },
  { name: "Meta", logo: "META", color: "#0668E1" },
  { name: "Google", logo: "GOOG", color: "#4285F4" }
];

export function EcosystemArchitecture() {
  const MotionDiv = motion.div as any;
  const MotionPath = motion.path as any;
  const MotionCircle = motion.circle as any;

  return (
    <div className="relative h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Central Hub */}
      <div className="relative z-20">
         <MotionDiv 
           animate={{ 
             boxShadow: ["0 0 0 0px rgba(115, 217, 120, 0)", "0 0 0 20px rgba(115, 217, 120, 0.1)", "0 0 0 40px rgba(115, 217, 120, 0)"]
           }}
           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
           className="h-40 w-40 rounded-[48px] bg-enterprise-text border border-enterprise-green/30 flex items-center justify-center shadow-2xl relative"
         >
            <div className="text-center">
               <p className="text-[10px] font-bold text-enterprise-green uppercase tracking-[0.2em] mb-1">Central</p>
               <p className="text-xl font-bold text-white tracking-widest uppercase">ISNAP</p>
               <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mt-1">Orchestrator</p>
            </div>
            
            {/* Pulsing Core */}
            <div className="absolute inset-0 bg-enterprise-green/5 rounded-[48px] animate-pulse" />
         </MotionDiv>
      </div>

      {/* Connection Lines & Partners */}
      <div className="absolute inset-0 z-10">
         {partners.map((partner, i) => {
           const angle = (i / partners.length) * (Math.PI * 2);
           const radius = 240;
           const x = Math.cos(angle) * radius;
           const y = Math.sin(angle) * radius;

           return (
             <div key={partner.name} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <MotionDiv 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  style={{ x, y }}
                  className="h-24 w-24 rounded-3xl bg-white border border-enterprise-border shadow-xl flex items-center justify-center group hover:border-enterprise-green transition-colors"
                >
                   <p className="text-[10px] font-bold tracking-widest text-enterprise-text/60 group-hover:text-enterprise-green transition-colors uppercase">{partner.name}</p>
                   
                   {/* Data Flow Line */}
                   <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none -z-10 overflow-visible">
                      <MotionPath 
                        d={`M 200 200 L ${200 - x} ${200 - y}`}
                        stroke="rgba(115, 217, 120, 0.4)"
                        strokeWidth="1"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                      <MotionCircle 
                        r="3"
                        fill="#73D978"
                        animate={{ 
                          offsetDistance: ["0%", "100%"]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                        style={{ offsetPath: `path('M 200 200 L ${200 - x} ${200 - y}')` }}
                      />
                   </svg>
                </MotionDiv>
             </div>
           );
         })}
      </div>

      {/* Background Aura */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-enterprise-green/5 to-transparent pointer-events-none" />
    </div>
  );
}
