"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { 
  ShoppingBagIcon, 
  RocketLaunchIcon, 
  CpuChipIcon, 
  MagnifyingGlassIcon, 
  ChartBarIcon, 
  TruckIcon, 
  UserGroupIcon,
  DevicePhoneMobileIcon,
  PresentationChartLineIcon,
  ArrowRightIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";

const services = [
  {
    title: "eCommerce Development",
    description: "Build high-performance brand stores designed for speed, mobile-first shopping, and enterprise-scale conversions.",
    icon: ShoppingBagIcon,
    href: "/services/ecommerce-website-development"
  },
  {
    title: "Key Account Management",
    description: "End-to-end operational excellence including performance tracking and automated marketplace governance.",
    icon: RocketLaunchIcon,
    href: "/services/key-account-management"
  },
  {
    title: "Marketplace Onboarding",
    description: "Launch across global marketplaces with automated compliance and accelerated go-live infrastructure.",
    icon: CpuChipIcon,
    href: "/services/marketplace-onboarding-automation"
  },
  {
    title: "SEO & GEO Optimization",
    description: "Institutional-grade visibility for both traditional search engines and emerging AI-powered search (GEO).",
    icon: MagnifyingGlassIcon,
    href: "/services/seo-performance-optimization"
  },
  {
    title: "Digital Growth Ads",
    description: "Full-funnel performance marketing across Meta, Google, and YouTube with a focus on high-ROI revenue velocity.",
    icon: ChartBarIcon,
    href: "/services/digital-marketing"
  },
  {
    title: "Logistics Automation",
    description: "Unified fulfillment infrastructure connecting your brand to global 3PL networks and last-mile delivery sync.",
    icon: TruckIcon,
    href: "/services/logistics-automation"
  },
  {
    title: "Catalogue Automation",
    description: "AI-powered product listing and data synchronization across multiple global marketplaces at scale.",
    icon: PresentationChartLineIcon,
    href: "/services/catalogue-listing-automation"
  },
  {
    title: "Creative Services",
    description: "High-fidelity product imagery, A+ content, and brand creatives designed for premium market positioning.",
    icon: SparklesIcon,
    href: "/services/product-image-editing-creatives"
  },
  {
    title: "Brand Growth Solutions",
    description: "Strategic scaling frameworks and multi-channel expansion protocols for long-term market dominance.",
    icon: UserGroupIcon,
    href: "/services/brand-growth-solutions"
  }
];

export function WhatWeDoSection() {
  return (
    <section id="capabilities" className="relative section-spacing overflow-hidden bg-white">
      <div className="absolute inset-0 grid-subtle opacity-[0.4] pointer-events-none" />
      
      <div className="max-container relative z-10">
        <div className="flex flex-col gap-16">
          {/* Header Layer */}
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-enterprise-border bg-enterprise-bg px-4 py-1.5 mb-10">
              <span className="h-1.5 w-1.5 rounded-full bg-enterprise-green" />
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-enterprise-text">Our Capabilities</p>
            </div>
            <h2 className="section-heading mb-10">
              Transforming commerce <br/><span className="text-enterprise-green">through enterprise-grade</span> automation.
            </h2>
            <p className="text-xl text-enterprise-text-muted leading-relaxed max-w-2xl">
              We provide the strategic infrastructure and technical orchestration required to scale high-performance brands across the global marketplace ecosystem.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link 
                key={service.title} 
                href={service.href}
                className="group relative p-10 rounded-[32px] bg-white border border-enterprise-border transition-all duration-500 hover:shadow-premium hover:-translate-y-2 overflow-hidden block"
              >
                {/* Subtle Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-enterprise-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="h-14 w-14 rounded-2xl bg-enterprise-bg border border-enterprise-border flex items-center justify-center text-enterprise-text group-hover:bg-enterprise-text group-hover:text-enterprise-green transition-all duration-500">
                    <service.icon className="h-7 w-7" />
                  </div>
                  
                  <div className="mt-10">
                    <h3 className="text-xl font-bold text-enterprise-text mb-4 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-base text-enterprise-text-muted leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="mt-12 flex items-center gap-2 text-enterprise-green font-bold text-[11px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                    <span>Explore Solution</span>
                    <ArrowRightIcon className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

