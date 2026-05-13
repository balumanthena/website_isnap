"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { Button } from "@/components/ui/button";
import { 
  Bars3Icon, 
  XMarkIcon, 
  ChevronDownIcon,
  BoltIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  ArrowTrendingUpIcon,
  GlobeAltIcon,
  SparklesIcon,
  PaintBrushIcon,
  CodeBracketIcon,
  ShoppingBagIcon
} from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { LogoMark } from "@/components/LogoMark";

const megaMenuData = [
  {
    title: "Marketplace Solutions",
    items: [
      { label: "Onboarding Automation", href: "/services/marketplace-onboarding-automation", icon: BoltIcon, desc: "Accelerate your launch across India's largest marketplaces." },
      { label: "Catalogue Automation", href: "/services/catalogue-listing-automation", icon: CpuChipIcon, desc: "AI-powered data mapping and multi-channel listing sync." },
      { label: "Account Management", href: "/services/key-account-management", icon: RocketLaunchIcon, desc: "Full-cycle governance and performance monitoring." }
    ]
  },
  {
    title: "Brand Growth",
    items: [
      { label: "Performance Marketing", href: "/services/digital-marketing", icon: ChartBarIcon, desc: "High-ROI revenue velocity across Meta, Google, and YouTube." },
      { label: "SEO & GEO Optimization", href: "/services/seo-performance-optimization", icon: GlobeAltIcon, desc: "Visibility for traditional and AI-powered search engines." },
      { label: "Growth Solutions", href: "/services/brand-growth-solutions", icon: ArrowTrendingUpIcon, desc: "Strategic scaling frameworks for long-term expansion." }
    ]
  },
  {
    title: "Commerce & Creative",
    items: [
      { label: "Store Development", href: "/services/ecommerce-website-development", icon: ShoppingBagIcon, desc: "High-performance brand stores on Shopify and custom stacks." },
      { label: "Creative Services", href: "/services/product-image-editing-creatives", icon: PaintBrushIcon, desc: "High-fidelity product imagery and brand storytelling." },
      { label: "Logistics Automation", href: "/services/logistics-automation", icon: RocketLaunchIcon, desc: "Unified 3PL integration and last-mile fulfillment." }
    ]
  }
];


function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const MotionDiv = motion.div as any;

  return (
    <div 
      className="relative h-full flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] text-enterprise-text hover:text-enterprise-green transition-colors py-8">
        <span>Solutions</span>
        <ChevronDownIcon className={cn("h-3 w-3 transition-transform duration-300", isOpen && "rotate-180")} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-[100%] -left-64 w-[900px] bg-white border border-enterprise-border shadow-2xl rounded-[32px] overflow-hidden p-10 grid grid-cols-3 gap-12"
          >
            {megaMenuData.map((category) => (
              <div key={category.title} className="space-y-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-enterprise-green border-b border-enterprise-border pb-4">{category.title}</p>
                <div className="space-y-6">
                  {category.items.map((item) => (
                    <Link 
                      key={item.label} 
                      href={item.href}
                      className="group flex gap-4 hover:bg-enterprise-bg/20 p-3 -m-3 rounded-2xl transition-all"
                    >
                      <div className="h-10 w-10 shrink-0 rounded-xl bg-enterprise-bg border border-enterprise-border flex items-center justify-center text-enterprise-text group-hover:bg-enterprise-text group-hover:text-enterprise-green transition-all">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[13px] font-bold text-enterprise-text mb-1 tracking-tight">{item.label}</p>
                        <p className="text-[11px] text-enterprise-text-muted leading-relaxed line-clamp-2">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="col-span-3 mt-4 pt-8 border-t border-enterprise-border flex items-center justify-between">
              <div className="flex items-center gap-6 grayscale opacity-30">
                {["AMAZON", "FLIPKART", "SHOPIFY", "WALMART"].map(p => (
                  <span key={p} className="text-[10px] font-black tracking-widest">{p}</span>
                ))}
              </div>
              <Link href="/services" className="text-[11px] font-bold uppercase tracking-widest text-enterprise-text hover:text-enterprise-green transition-colors">View All Services →</Link>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const isScrolled = useScrollPosition(20);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const MotionDiv = motion.div as any;

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
      isScrolled ? "py-4 bg-white/80 backdrop-blur-xl border-b border-enterprise-border shadow-enterprise-nav" : "py-8 bg-transparent"
    )}>
      <div className="max-container flex items-center justify-between">
        <Link href="/" className="transition-opacity hover:opacity-80">
          <LogoMark />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-16 h-full">
          <MegaMenu />
          <Link href="/how-it-works" className="text-[12px] font-bold uppercase tracking-[0.2em] text-enterprise-text hover:text-enterprise-green transition-colors">Methodology</Link>
          <Link href="/blogs" className="text-[12px] font-bold uppercase tracking-[0.2em] text-enterprise-text hover:text-enterprise-green transition-colors">Editorial</Link>
          <Link href="/contact" className="text-[12px] font-bold uppercase tracking-[0.2em] text-enterprise-text hover:text-enterprise-green transition-colors">Contact</Link>
        </div>

        <div className="hidden lg:flex items-center">
          <Link href="/get-started">
            <Button className="h-[54px] px-10 rounded-full bg-enterprise-text text-white text-[12px] font-bold uppercase tracking-widest hover:bg-enterprise-green hover:text-enterprise-text transition-all shadow-xl shadow-enterprise-text/10">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-enterprise-text"
          onClick={() => setIsMobileOpen(true)}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <MotionDiv
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-[200] bg-white p-10 flex flex-col"
          >
            <div className="flex items-center justify-between mb-20">
              <LogoMark />
              <button onClick={() => setIsMobileOpen(false)}>
                <XMarkIcon className="h-8 w-8 text-enterprise-text" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-16">
              {megaMenuData.map(category => (
                <div key={category.title} className="space-y-8">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-enterprise-green">{category.title}</p>
                  <div className="space-y-8">
                    {category.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block text-2xl font-bold text-enterprise-text tracking-tight hover:text-enterprise-green transition-colors"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-12 border-t border-enterprise-border">
              <Link href="/get-started" onClick={() => setIsMobileOpen(false)}>
                <Button className="h-16 w-full rounded-full bg-enterprise-text text-white font-bold uppercase tracking-widest text-sm">
                  Get Started
                </Button>
              </Link>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </nav>
  );
}
