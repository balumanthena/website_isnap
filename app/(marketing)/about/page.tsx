"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CTASection } from "@/components/sections/CTASection";

const values = [
  {
    title: "Algorithmic Precision",
    desc: "We replace manual guesswork with high-fidelity automation protocols. Every operation is governed by technical accuracy and marketplace logic.",
    icon: "01"
  },
  {
    title: "Institutional Scaling",
    desc: "Our frameworks are built for global scale. We move beyond fragmented growth into unified, multi-channel commerce dominance.",
    icon: "02"
  },
  {
    title: "Operational Integrity",
    desc: "We maintain absolute governance over account health, pricing parity, and compliance. Trust is engineered into every workflow.",
    icon: "03"
  }
];

export default function AboutPage() {
  const MotionDiv = motion.div as any;
  const MotionH1 = motion.h1 as any;
  const MotionP = motion.p as any;

  return (
    <main className="bg-white pt-40 md:pt-60">
      {/* 1. Cinematic Mission Hero */}
      <section className="relative pb-32 md:pb-48 overflow-hidden">
        <div className="absolute inset-0 grid-subtle opacity-[0.4] pointer-events-none" />
        
        <div className="max-container relative z-10">
          <div className="max-w-4xl">
            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-enterprise-border bg-enterprise-bg px-4 py-1.5 mb-10"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-enterprise-green" />
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-enterprise-text">Operational DNA</p>
            </MotionDiv>
            
            <MotionH1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="hero-heading mb-12"
            >
              The Architecture of <br/><span className="text-enterprise-green">Global Commerce.</span>
            </MotionH1>
            
            <MotionP 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-enterprise-text-muted leading-relaxed mb-16"
            >
              ISNAP was founded to solve the fragmentation of the global marketplace ecosystem. We provide the institutional infrastructure and technical orchestration required for high-performance brands to achieve multi-channel dominance.
            </MotionP>
          </div>
        </div>
      </section>

      {/* 2. Principles Layer (Asymmetrical Grid) */}
      <section className="relative section-spacing overflow-hidden bg-enterprise-bg">
        <div className="absolute inset-0 grid-subtle opacity-[0.5] pointer-events-none" />
        <div className="max-container relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
              <div className="lg:col-span-4">
                 <h2 className="text-4xl font-bold tracking-tight text-enterprise-text mb-8">Our Operational <br/><span className="text-enterprise-green">Philosophy.</span></h2>
                 <p className="text-lg text-enterprise-text-muted leading-relaxed">
                    We don&apos;t just manage accounts; we engineer growth systems. Our DNA is rooted in technical rigor and algorithmic performance.
                 </p>
              </div>
              
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                 {values.map((v, i) => (
                   <div key={v.title} className={cn(
                     "p-10 rounded-[32px] bg-white border border-enterprise-border shadow-premium group",
                     i === 2 && "md:col-span-2"
                   )}>
                      <div className="h-14 w-14 rounded-2xl bg-enterprise-text flex items-center justify-center text-enterprise-green mb-8 group-hover:scale-110 transition-transform font-display text-xl font-bold">
                         {v.icon}
                      </div>
                      <h3 className="text-xl font-bold text-enterprise-text mb-4 tracking-tight">{v.title}</h3>
                      <p className="text-base text-enterprise-text-muted leading-relaxed">{v.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* 3. Strategic Context Section */}
      <section className="relative section-spacing overflow-hidden bg-white">
        <div className="max-container relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
              <div className="lg:col-span-6">
                 <div className="aspect-square rounded-[48px] bg-enterprise-text overflow-hidden relative shadow-2xl">
                    <div className="absolute inset-0 opacity-[0.1] grid-subtle" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="text-center">
                          <p className="text-6xl font-bold text-enterprise-green mb-2">2018</p>
                          <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Protocol Established</p>
                       </div>
                    </div>
                 </div>
              </div>
              
              <div className="lg:col-span-6">
                 <h2 className="section-heading mb-10">Scaling with <br/><span className="text-enterprise-green">Purpose.</span></h2>
                 <p className="text-xl text-enterprise-text-muted leading-relaxed mb-12">
                    Since our inception, we have focused on one goal: creating the most robust operational layer for commerce brands. Our teams are composed of software engineers, marketplace experts, and performance architects.
                 </p>
                 <div className="space-y-8">
                    {[
                      { l: "Platform Reliability", v: "99.9% Uptime" },
                      { l: "Operational Reach", value: "20+ Marketplaces" },
                      { l: "Capital Managed", value: "Institutional Scale" }
                    ].map((s, i) => (
                      <div key={i} className="flex justify-between items-center py-4 border-b border-enterprise-border">
                         <span className="text-[11px] font-bold text-enterprise-text-muted uppercase tracking-widest">{s.l}</span>
                         <span className="text-lg font-bold text-enterprise-text">{s.v || s.value}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
