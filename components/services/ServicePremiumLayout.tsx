"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { BoltIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { CTASection } from "@/components/sections/CTASection";

export type ProcessStep = {
  step: string;
  text: string;
};

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  stats?: { label: string; value: string }[];
}

interface FeatureSectionProps {
  title: string;
  items: { title: string; description: string; icon: any }[];
}

interface ServicePremiumLayoutProps {
  serviceLabel: string;
  title: string;
  overview: string;
  processSteps: ProcessStep[];
  benefits: string[];
  benefitsSupportingText: string;
  results: string[];
  tools: string[];
  closingStatement: string;
}

export function ServicePremiumLayout({
  serviceLabel,
  title,
  overview,
  processSteps,
  benefits,
  benefitsSupportingText,
  results,
  tools,
  closingStatement
}: ServicePremiumLayoutProps) {
  return (
    <main>
      <ServiceHero 
        title={title}
        subtitle={serviceLabel}
        description={overview}
        stats={results.map(r => ({ label: "Impact", value: r.split(' ')[0] }))}
      />
      
      <ServiceFeatures 
        title="Solutions & Benefits"
        items={benefits.map((b, i) => ({
          title: b,
          description: benefitsSupportingText,
          icon: i % 2 === 0 ? BoltIcon : SparklesIcon
        }))}
      />

      <section className="py-24 bg-white">
        <div className="max-container">
          <h2 className="section-heading mb-16 text-center">Process & Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="p-8 rounded-3xl border border-enterprise-border bg-enterprise-bg/20">
                <p className="text-enterprise-green font-bold text-lg mb-4">{step.step}</p>
                <p className="text-enterprise-text font-bold">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}

// Named exports for new pages
export function ServiceHero({ title, subtitle, description, image, stats }: ServiceHeroProps) {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-white">
      <div className="absolute inset-0 grid-subtle opacity-[0.5] pointer-events-none" />
      <div className="max-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-enterprise-border bg-enterprise-bg px-4 py-1.5 mb-10">
              <span className="h-1.5 w-1.5 rounded-full bg-enterprise-green" />
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-enterprise-text">{subtitle}</p>
            </div>
            <h1 className="hero-heading mb-10">{title}</h1>
            <p className="text-xl text-enterprise-text-muted leading-relaxed max-w-2xl mb-12">
              {description}
            </p>
            <div className="flex flex-wrap gap-4 mb-16">
              <Button size="lg" className="h-[64px] rounded-full bg-enterprise-text text-white px-10 text-[14px] font-bold uppercase tracking-widest hover:bg-enterprise-green hover:text-enterprise-text transition-all shadow-xl shadow-enterprise-text/10">
                Book an Enterprise Consultation
              </Button>
            </div>
            {stats && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-enterprise-border">
                {stats.map((stat, i) => (
                  <div key={`${stat.label}-${i}`}>
                    <p className="text-[11px] font-bold text-enterprise-text-muted uppercase mb-2">{stat.label}</p>
                    <p className="text-3xl font-bold tracking-tight text-enterprise-text">{stat.value}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="lg:col-span-5 relative">
             <div className="aspect-[4/5] rounded-[48px] bg-enterprise-text overflow-hidden relative shadow-2xl">
                <div className="absolute inset-0 opacity-[0.1] grid-subtle" />
                {image && (
                  <Image src={image} alt={title} fill className="object-cover opacity-80" priority />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-enterprise-text via-transparent to-transparent" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceFeatures({ title, items }: FeatureSectionProps) {
  return (
    <section className="relative section-spacing overflow-hidden bg-[#F7F8F4]">
      <div className="max-container relative z-10">
        <h2 className="section-heading mb-20 text-center">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-enterprise-border border border-enterprise-border rounded-[40px] overflow-hidden">
          {items.map((item, i) => (
            <div key={item.title} className="bg-white p-12 hover:bg-enterprise-bg/20 transition-all duration-500 group">
               <div className="h-14 w-14 rounded-2xl bg-enterprise-text flex items-center justify-center text-enterprise-green mb-10 group-hover:scale-110 transition-transform">
                  <item.icon className="h-6 w-6" />
               </div>
               <h3 className="text-xl font-bold text-enterprise-text mb-4 tracking-tight">{item.title}</h3>
               <p className="text-enterprise-text-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

