"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type TestimonialQuote = {
  type: "quote";
  quote: string;
  name: string;
  role: string;
  company: string;
  highlight: boolean;
};

type TestimonialMetric = {
  type: "metric";
  value: string;
  label: string;
  desc: string;
};

type Testimonial = TestimonialQuote | TestimonialMetric;

const testimonials: Testimonial[] = [
  {
    type: "quote",
    quote: "ISNAP has fundamentally transformed our marketplace governance. Their automated orchestration layer allowed us to scale across 12 channels with 100% pricing parity and zero manual overhead.",
    name: "Arjun Mehta",
    role: "VP of Digital Commerce",
    company: "Global Retail Portfolios",
    highlight: true
  },
  {
    type: "metric",
    value: "3.5x",
    label: "Revenue Velocity",
    desc: "Average growth acceleration for enterprise partners within 12 months of platform activation."
  },
  {
    type: "quote",
    quote: "The technical precision of ISNAP's catalog mapping is unprecedented. We achieved a 70% reduction in time-to-market while maintaining absolute compliance across every major marketplace.",
    name: "Sarah Jenkins",
    role: "Director of Operations",
    company: "Nexus Consumer Brands",
    highlight: false
  },
  {
    type: "metric",
    value: "99.9%",
    label: "Inventory Accuracy",
    desc: "Real-time synchronization across global 3PL networks and marketplace nodes."
  },
  {
    type: "quote",
    quote: "In the era of AI-driven commerce, ISNAP is the only partner providing true Generative Engine Optimization. Our organic reach has increased by 140% since adopting their GEO framework.",
    name: "Vikram Singh",
    role: "Chief Growth Officer",
    company: "Apex Lifestyle Group",
    highlight: false
  }
];

export function TestimonialsSection() {
  return (
    <section className="relative section-spacing overflow-hidden bg-white">
      <div className="absolute inset-0 grid-subtle opacity-[0.4] pointer-events-none" />
      
      <div className="max-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-end mb-24">
           <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-enterprise-border bg-enterprise-bg px-4 py-1.5 mb-10">
                 <span className="h-1.5 w-1.5 rounded-full bg-enterprise-green" />
                 <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-enterprise-text">Market Validation</p>
              </div>
              <h2 className="section-heading mb-10">
                 Trusted by the world&apos;s <br/>most <span className="text-enterprise-green">ambitious commerce</span> leaders.
              </h2>
           </div>
           <div className="lg:col-span-4 lg:pb-12">
              <p className="text-xl text-enterprise-text-muted leading-relaxed">
                 We provide the institutional-grade support and technical rigor required for high-volume global operations.
              </p>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
           {/* Left Column: Metrics & Small Quotes */}
           <div className="lg:col-span-4 space-y-8">
              {testimonials.filter((t): t is TestimonialMetric => t.type === "metric").map((m, i) => (
                <div key={i} className="p-10 rounded-[32px] bg-enterprise-text text-white shadow-2xl relative overflow-hidden group">
                   <div className="absolute inset-0 opacity-[0.05] grid-subtle pointer-events-none" />
                   <p className="text-5xl font-bold text-enterprise-green mb-6 group-hover:scale-105 transition-transform origin-left">{m.value}</p>
                   <p className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-4">{m.label}</p>
                   <p className="text-sm text-white/60 leading-relaxed">{m.desc}</p>
                </div>
              ))}
              {testimonials.filter((t): t is TestimonialQuote => t.type === "quote" && !t.highlight).slice(0, 1).map((q, i) => (
                <div key={i} className="p-10 rounded-[32px] border border-enterprise-border bg-white shadow-premium">
                   <p className="text-lg font-medium text-enterprise-text leading-relaxed mb-10 italic">&ldquo;{q.quote}&rdquo;</p>
                   <div className="flex items-center gap-4">
                      <div className="h-1 w-8 bg-enterprise-green rounded-full" />
                      <div>
                         <p className="text-sm font-bold text-enterprise-text">{q.name}</p>
                         <p className="text-[10px] font-bold text-enterprise-text-muted uppercase tracking-widest">{q.company}</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>

           {/* Middle Column: Large Highlight Quote */}
           <div className="lg:col-span-8 space-y-8">
              {testimonials.filter((t): t is TestimonialQuote => t.type === "quote" && t.highlight).map((q, i) => (
                <div key={i} className="p-16 rounded-[48px] bg-enterprise-bg border border-enterprise-border relative overflow-hidden group">
                   <div className="absolute top-12 right-12 text-9xl font-serif text-enterprise-text/5 group-hover:text-enterprise-green/10 transition-colors pointer-events-none">&rdquo;</div>
                   <p className="text-3xl md:text-4xl font-bold text-enterprise-text leading-tight mb-16 relative z-10">
                      {q.quote}
                   </p>
                   <div className="flex items-center justify-between pt-12 border-t border-enterprise-border">
                      <div className="flex items-center gap-6">
                         <div className="h-16 w-16 rounded-full bg-enterprise-text flex items-center justify-center font-bold text-enterprise-green text-xl">
                            {q.name.charAt(0)}
                         </div>
                         <div>
                            <p className="text-lg font-bold text-enterprise-text">{q.name}</p>
                            <p className="text-[11px] font-bold text-enterprise-text-muted uppercase tracking-widest">{q.role}, {q.company}</p>
                         </div>
                      </div>
                      <div className="hidden md:flex gap-2">
                         {[1,2,3,4,5].map(star => (
                           <div key={star} className="h-1.5 w-6 rounded-full bg-enterprise-green" />
                         ))}
                      </div>
                   </div>
                </div>
              ))}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.filter((t): t is TestimonialQuote => t.type === "quote" && !t.highlight).slice(1).map((q, i) => (
                  <div key={i} className="p-10 rounded-[32px] border border-enterprise-border bg-white shadow-premium">
                     <p className="text-lg font-medium text-enterprise-text leading-relaxed mb-10 italic">&ldquo;{q.quote}&rdquo;</p>
                     <div className="flex items-center gap-4">
                        <div className="h-1 w-8 bg-enterprise-green rounded-full" />
                        <div>
                           <p className="text-sm font-bold text-enterprise-text">{q.name}</p>
                           <p className="text-[10px] font-bold text-enterprise-text-muted uppercase tracking-widest">{q.company}</p>
                        </div>
                     </div>
                  </div>
                ))}
                
                <div className="p-10 rounded-[32px] bg-enterprise-green flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-enterprise-text transition-all duration-500">
                   <p className="text-[11px] font-bold text-enterprise-text group-hover:text-enterprise-green uppercase tracking-widest mb-4">Case Studies</p>
                   <p className="text-xl font-bold text-enterprise-text group-hover:text-white mb-8">View all 200+ partner success stories</p>
                   <div className="h-12 w-12 rounded-full border border-enterprise-text/20 group-hover:border-white/20 flex items-center justify-center text-enterprise-text group-hover:text-white transition-all">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                   </div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
