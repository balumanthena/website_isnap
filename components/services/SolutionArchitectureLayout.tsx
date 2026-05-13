"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { CTASection } from "@/components/sections/CTASection";

export type ProcessStep = {
  step: string;
  title: string;
  text: string;
};

interface SolutionArchitectureLayoutProps {
  label: string;
  title: string;
  description: string;
  heroImage: string;
  metrics: { label: string; value: string; trend?: string }[];
  processSteps: ProcessStep[];
  features: { title: string; description: string; visual?: React.ReactNode }[];
  orchestrationVisual?: React.ReactNode;
  children?: React.ReactNode;
}

import { LogoMark } from "@/components/LogoMark";

export function SolutionArchitectureLayout({
  label,
  title,
  description,
  heroImage,
  metrics,
  processSteps,
  features,
  orchestrationVisual,
  children
}: SolutionArchitectureLayoutProps) {
  const MotionDiv = motion.div as any;
  const MotionH1 = motion.h1 as any;
  const MotionP = motion.p as any;

  return (
    <main className="bg-white">
      {/* 1. Cinematic Solution Hero */}
      <section className="relative pt-40 pb-32 md:pt-60 md:pb-48 overflow-hidden">
        <div className="absolute inset-0 grid-subtle opacity-[0.4] pointer-events-none" />
        
        <div className="max-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-7">
              <MotionDiv 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 rounded-full border border-enterprise-border bg-enterprise-bg px-4 py-1.5 mb-10"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-enterprise-green" />
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-enterprise-text">{label}</p>
              </MotionDiv>
              
              <MotionH1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="hero-heading mb-12"
              >
                {title}
              </MotionH1>
              
              <MotionP 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl text-enterprise-text-muted leading-relaxed max-w-2xl mb-16"
              >
                {description}
              </MotionP>
              
              <MotionDiv 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-6"
              >
                <Link href="/contact">
                  <Button size="lg" className="h-[72px] rounded-full bg-enterprise-text text-white px-12 text-[15px] font-bold uppercase tracking-widest hover:bg-enterprise-green hover:text-enterprise-text transition-all shadow-2xl shadow-enterprise-text/20">
                    Book Enterprise Consultation
                  </Button>
                </Link>
              </MotionDiv>
            </div>

            <div className="lg:col-span-5 relative lg:pt-12">
               <MotionDiv 
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.8, ease: "easeOut" }}
                 className="relative aspect-[4/5] rounded-[64px] bg-enterprise-text overflow-hidden shadow-2xl group"
               >
                  <div className="absolute inset-0 opacity-[0.1] grid-subtle pointer-events-none" />
                  <Image src={heroImage} alt={title} fill className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-[2s]" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-enterprise-text via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Metric */}
                  <div className="absolute bottom-10 left-10 right-10 p-8 rounded-[32px] bg-white/5 backdrop-blur-xl border border-white/10">
                     <div className="grid grid-cols-2 gap-8">
                        {metrics.slice(0, 2).map(m => (
                          <div key={m.label}>
                             <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">{m.label}</p>
                             <div className="flex items-end gap-2">
                                <p className="text-3xl font-bold text-white">{m.value}</p>
                                {m.trend && <span className="text-[10px] font-bold text-enterprise-green mb-1">{m.trend}</span>}
                             </div>
                          </div>
                        ))}
                     </div>
                  </div>
               </MotionDiv>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Orchestration Architecture Section (The "Moments") */}
      <section className="relative section-spacing overflow-hidden bg-enterprise-bg">
        <div className="absolute inset-0 grid-subtle opacity-[0.5] pointer-events-none" />
        <div className="max-container relative z-10">
           <div className="text-center max-w-4xl mx-auto mb-24">
              <h2 className="section-heading mb-8 leading-tight max-w-2xl mx-auto">
                Unified Command Orchestration.
              </h2>
              <p className="text-xl text-enterprise-text-muted leading-relaxed max-w-2xl mx-auto">
                 We connect your internal brand architecture with the world&apos;s leading commerce networks, synchronized through a single operational hub.
              </p>
           </div>
           
           <div className="relative">
              {orchestrationVisual}
           </div>
        </div>
      </section>

      {/* 3. Operational Depth Section (Layered Grids) */}
      <section className="relative section-spacing overflow-hidden bg-white">
        <div className="max-container relative z-10">
           <div className="grid grid-cols-1 gap-40">
              {features.map((feature, i) => (
                <div key={feature.title} className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
                   <div className={cn(
                     "lg:col-span-5",
                     i % 2 === 1 ? "lg:order-2" : "lg:order-1"
                   )}>
                      <div className="inline-flex items-center gap-3 mb-8">
                         <div className="h-px w-10 bg-enterprise-green" />
                         <p className="text-[11px] font-bold uppercase tracking-widest text-enterprise-green">0{i+1} Solution Layer</p>
                      </div>
                      <h3 className="text-4xl font-bold tracking-tight text-enterprise-text mb-8">{feature.title}</h3>
                      <p className="text-lg text-enterprise-text-muted leading-relaxed mb-12">
                         {feature.description}
                      </p>
                      <Button variant="ghost" className="p-0 h-auto font-bold text-[12px] uppercase tracking-widest text-enterprise-text hover:text-enterprise-green group">
                         Technical Specifications <ChevronRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                   </div>
                   
                   <div className={cn(
                     "lg:col-span-7",
                     i % 2 === 1 ? "lg:order-1" : "lg:order-2"
                   )}>
                      <div className="relative">
                         {feature.visual}
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 4. Workflow Storyline Section (Vertical Interaction) */}
      <section className="relative section-spacing overflow-hidden bg-enterprise-text text-white">
        <div className="absolute inset-0 grid-subtle opacity-[0.05] pointer-events-none" />
        <div className="max-container relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
              <div className="lg:col-span-5">
                 <div className="sticky top-40">
                    <p className="text-[11px] font-bold text-enterprise-green uppercase tracking-widest mb-10">Operational Protocol</p>
                    <h2 className="text-5xl font-bold tracking-tight mb-10">The Execution <br/><span className="text-enterprise-green">Framework.</span></h2>
                    <p className="text-xl text-white/40 leading-relaxed max-w-md">
                       A standardized, institutional-grade process for scaling brands from business audit to global activation.
                    </p>
                 </div>
              </div>
              
              <div className="lg:col-span-7 space-y-px bg-white/5 border border-white/10 rounded-[48px] overflow-hidden backdrop-blur-xl">
                 {processSteps.map((step, idx) => (
                   <div key={step.step} className="p-12 hover:bg-white/[0.02] transition-colors border-b border-white/5 last:border-0 group">
                      <div className="flex items-start gap-10">
                         <span className="text-6xl font-bold text-white/5 group-hover:text-enterprise-green/20 transition-colors duration-500 font-display">{step.step}</span>
                         <div>
                            <h4 className="text-xl font-bold text-white mb-4 tracking-tight">{step.title}</h4>
                            <p className="text-white/40 leading-relaxed">{step.text}</p>
                         </div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {children}

      <CTASection />
    </main>
  );
}
