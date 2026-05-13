"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { servicesContent } from "./services-data";
import { motion } from "framer-motion";

// --- Sub-Components for Operational Realism ---

function OnboardingPipeline() {
  const steps = [
    { id: "01", label: "Audit", status: "Complete" },
    { id: "02", label: "Logic", status: "Active" },
    { id: "03", label: "Sync", status: "Queued" },
    { id: "04", label: "Scale", status: "Queued" }
  ];

  return (
    <div className="enterprise-card p-6 bg-enterprise-text shadow-2xl">
      <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Execution Pipeline v4.0</span>
        <div className="flex gap-1">
          {[1, 2, 3].map(i => <div key={i} className="h-1.5 w-1.5 rounded-full bg-enterprise-green/40" />)}
        </div>
      </div>
      <div className="space-y-6">
        {steps.map((step, i) => (
          <div key={step.id} className="relative flex items-center gap-6 group">
            <div className={cn(
              "z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold transition-all",
              step.status === "Complete" ? "bg-enterprise-green border-enterprise-green text-enterprise-text" :
              step.status === "Active" ? "border-enterprise-green text-enterprise-green bg-enterprise-green/10" :
              "border-white/10 text-white/20"
            )}>
              {step.id}
            </div>
            {i !== steps.length - 1 && (
              <div className="absolute left-4 top-8 h-6 w-px bg-white/10" />
            )}
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className={cn(
                  "text-[12px] font-bold uppercase tracking-widest",
                  step.status === "Queued" ? "text-white/20" : "text-white"
                )}>{step.label}</span>
                <span className={cn(
                  "text-[9px] font-bold uppercase",
                  step.status === "Complete" ? "text-enterprise-green" :
                  step.status === "Active" ? "text-enterprise-green/60 animate-pulse" :
                  "text-white/10"
                )}>{step.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OperationalMetrics() {
  const metrics = [
    { label: "Approval Latency", value: "< 48h", delta: "-40%" },
    { label: "Compliance Index", value: "99.98%", delta: "Optimal" },
    { label: "SKU Activation", value: "3.4s", delta: "High-Freq" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {metrics.map(m => (
        <div key={m.label} className="p-6 rounded-xl border border-enterprise-border bg-white shadow-premium">
          <p className="text-[9px] font-bold text-enterprise-text-muted uppercase tracking-widest mb-4">{m.label}</p>
          <div className="flex items-end justify-between">
            <p className="text-3xl font-bold tracking-hero text-enterprise-text">{m.value}</p>
            <span className="text-[10px] font-bold text-enterprise-green uppercase">{m.delta}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

// --- Main Page ---

export default function ServicesPage() {
  return (
    <div className="relative">
      {/* Background System */}
      <div className="institutional-bg" />

      {/* Hero Section: Operational Overview (Section A) */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden border-b border-enterprise-border section-a">
        <div className="absolute inset-0 grid-subtle opacity-[0.03] pointer-events-none" />
        <div className="max-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-6 pt-4">
              <nav className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-enterprise-text-muted mb-12">
                <Link href="/" className="hover:text-enterprise-text transition-colors">Infrastructure</Link>
                <span className="opacity-20">/</span>
                <span className="text-enterprise-text">Solutions</span>
              </nav>

              <h1 className="hero-heading mt-6 max-w-2xl" style={{ fontSize: 'clamp(3rem, 4vw, 4.8rem)' }}>
                Mission-Critical <br/>Enterprise <span className="text-enterprise-green">Architecture.</span>
              </h1>
              
              <p className="mt-10 text-lg text-enterprise-text-muted leading-relaxed max-w-xl">
                ISNAP provides the underlying orchestration layer for global commerce. We replace legacy service models with a unified, automation-first execution framework.
              </p>

              <div className="mt-14 flex flex-wrap items-center gap-8">
                <Button size="lg" className="h-[50px] rounded-button bg-enterprise-text text-white px-10 text-[13px] font-bold uppercase tracking-institutional hover:bg-enterprise-green hover:text-enterprise-text transition-all">
                  Onboarding Protocol
                </Button>
                <Link href="/contact" className="text-[13px] font-bold uppercase tracking-institutional text-enterprise-text hover:text-enterprise-green transition-colors">
                  System Review
                </Link>
              </div>

              <div className="mt-20 flex gap-12 pt-10 border-t border-enterprise-border">
                {[
                  { l: "Platform Nodes", v: "10" },
                  { l: "SLA Standard", v: "99.9%" },
                  { l: "Latency", v: "< 2.4s" }
                ].map(s => (
                  <div key={s.l}>
                    <p className="text-[9px] font-bold text-enterprise-text-muted uppercase tracking-widest mb-1">{s.l}</p>
                    <p className="text-xl font-bold tracking-hero text-enterprise-text">{s.v}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative">
                 {/* Visual Depth Elements */}
                 <div className="absolute -inset-10 bg-enterprise-green/5 blur-3xl rounded-full opacity-30" />
                 <OnboardingPipeline />
                 <div className="absolute -bottom-10 -right-10 w-64 translate-y-1/2">
                    <div className="enterprise-card p-5 bg-white shadow-2xl">
                       <p className="text-[9px] font-bold text-enterprise-text-muted uppercase tracking-widest mb-3">Sync Integrity</p>
                       <div className="flex gap-1 h-8 items-end">
                          {Array.from({ length: 20 }).map((_, i) => (
                            <div key={i} className="flex-1 bg-enterprise-green/20 rounded-sm" style={{ height: `${30 + Math.random() * 70}%` }} />
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Index (Section B) */}
      <section className="relative section-b py-24 md:py-32">
        <div className="max-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20 border-b border-enterprise-border pb-16">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-enterprise-border bg-enterprise-bg px-3 py-1 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-enterprise-green" />
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-enterprise-text">Operational Framework</p>
              </div>
              <h2 className="hero-heading mt-8">Capability <br/><span className="text-enterprise-green">Infrastructure.</span></h2>
            </div>
            <p className="text-base text-enterprise-text-muted leading-relaxed max-w-sm pb-2">
              A comprehensive stack of orchestration services designed for institutional commerce scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesContent.map((service, i) => (
              <article
                key={service.slug}
                className="group relative enterprise-card p-10 hover:shadow-premium transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-10">
                  <span className="text-[10px] font-mono font-bold text-enterprise-text/20 group-hover:text-enterprise-green transition-colors uppercase">Node {service.number}</span>
                  <div className="h-1.5 w-1.5 rounded-full bg-enterprise-bg group-hover:bg-enterprise-green transition-all" />
                </div>
                
                <h3 className="text-2xl font-bold tracking-hero text-enterprise-text leading-tight max-w-[20ch]">
                  {service.title}
                </h3>
                
                <p className="mt-6 text-sm text-enterprise-text-muted leading-relaxed max-w-md">
                  {service.overview}
                </p>

                <div className="mt-10 grid grid-cols-2 gap-6 pt-8 border-t border-enterprise-border">
                  <div>
                    <p className="text-[9px] font-bold text-enterprise-text-muted uppercase tracking-widest mb-2">Primary Outcome</p>
                    <p className="text-sm font-bold text-enterprise-text">{service.results[0]}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-enterprise-text-muted uppercase tracking-widest mb-2">Governance</p>
                    <p className="text-sm font-bold text-enterprise-text">{service.benefits[0]}</p>
                  </div>
                </div>

                <div className="mt-10 flex items-center justify-between pt-8">
                   <span className="text-[10px] font-bold text-enterprise-text-muted uppercase tracking-widest">Integrity Check v2.4</span>
                   <Link href={`/services/${service.slug}`} className="text-[11px] font-bold uppercase tracking-institutional text-enterprise-text hover:text-enterprise-green transition-colors">
                      Solution Architecture →
                   </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Analytics (Section C) */}
      <section className="relative section-c py-24 md:py-32 border-y border-enterprise-border overflow-hidden">
        <div className="absolute inset-0 grid-subtle opacity-[0.02] pointer-events-none" />
        <div className="max-container relative z-10">
           <div className="max-w-2xl mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-enterprise-border bg-white px-3 py-1 shadow-sm mb-8">
                <span className="h-1.5 w-1.5 rounded-full bg-enterprise-green" />
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-enterprise-text">Real-time Analytics</p>
              </div>
              <h2 className="hero-heading">Execution <br/><span className="text-enterprise-green">Analytics.</span></h2>
           </div>
           
           <OperationalMetrics />

           <div className="mt-12 p-10 rounded-2xl border border-enterprise-border bg-white shadow-premium overflow-hidden">
              <div className="flex items-center justify-between mb-10 pb-6 border-b border-enterprise-border">
                 <p className="text-[10px] font-bold text-enterprise-text-muted uppercase tracking-widest">Global Onboarding Velocity</p>
                 <div className="flex gap-4">
                    {["30D", "90D", "1Y"].map(t => <span key={t} className="text-[9px] font-bold text-enterprise-text-muted hover:text-enterprise-text cursor-pointer">{t}</span>)}
                 </div>
              </div>
              <div className="h-48 relative">
                 <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 1000 100">
                    <path 
                      d="M0,80 L100,70 L200,85 L300,50 L400,60 L500,30 L600,45 L700,10 L800,25 L900,5 L1000,15" 
                      fill="none" 
                      stroke="#73D978" 
                      strokeWidth="2"
                    />
                    <path 
                      d="M0,80 L100,70 L200,85 L300,50 L400,60 L500,30 L600,45 L700,10 L800,25 L900,5 L1000,15 L1000,100 L0,100 Z" 
                      fill="url(#gradient)" 
                      opacity="0.1"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#73D978" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                 </svg>
              </div>
           </div>
        </div>
      </section>

      {/* Deployment Consultation (Section D) */}
      <section className="relative section-d py-40 overflow-hidden bg-enterprise-text text-white">
        <div className="absolute inset-0 opacity-[0.03] grid-subtle pointer-events-none" />
        <div className="max-container relative z-10">
           <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-enterprise-green" />
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white">Enterprise Deployment Consultation</p>
              </div>
              
              <h2 className="hero-heading mt-12 text-white max-w-4xl">
                Architect your <br/>global <span className="text-enterprise-green">rollout.</span>
              </h2>
              
              <p className="mt-10 max-w-xl text-lg text-white/40 leading-relaxed">
                Join institutional brands orchestrating commerce with ISNAP. Schedule an architecture review with our solution engineering team.
              </p>
              
              <div className="mt-16 flex flex-wrap justify-center gap-8">
                <Button size="lg" className="h-[50px] px-12 rounded-button bg-enterprise-green text-enterprise-text font-bold uppercase tracking-institutional hover:bg-white transition-all shadow-premium">
                  Initiate Deployment
                </Button>
                <Button size="lg" className="h-[50px] px-12 rounded-button border border-white/20 bg-transparent text-white font-bold uppercase tracking-institutional hover:bg-white/5 transition-all">
                  Strategy Deep-Dive
                </Button>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
