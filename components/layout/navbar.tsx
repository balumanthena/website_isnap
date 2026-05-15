"use client";

import React, { useState, useEffect } from "react";
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
  ShoppingBagIcon,
  Squares2X2Icon,
  BuildingOfficeIcon,
  NewspaperIcon,
  UserGroupIcon,
  EnvelopeIcon,
  ArrowRightIcon
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

const mobileNavItems = [
  { label: "Solutions", href: "/services", icon: Squares2X2Icon },
  { label: "Industries", href: "/#industries", icon: BuildingOfficeIcon },
  { label: "Insights", href: "/blogs", icon: NewspaperIcon },
  { label: "About", href: "/about", icon: UserGroupIcon },
  { label: "Contact", href: "/contact", icon: EnvelopeIcon },
];

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm-2 6.75h4V21h-4V10.25ZM10 10.25h3.83v1.47h.06c.53-1.01 1.84-2.07 3.8-2.07 4.06 0 4.81 2.48 4.81 5.71V21h-4v-4.95c0-1.18-.03-2.7-1.78-2.7s-2.05 1.29-2.05 2.62V21h-4V10.25Z" />
    </svg>
  );
}

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

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileOpen]);

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
        isScrolled ? "py-4 bg-white/80 backdrop-blur-xl border-b border-enterprise-border shadow-enterprise-nav" : "py-8 bg-transparent"
      )}>
        <div className="max-container flex items-center justify-between">
          <Link href="/" className="transition-opacity hover:opacity-80">
            <LogoMark className="h-9" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-16 h-full">
            <MegaMenu />
            <Link href="/about" className="text-[12px] font-bold uppercase tracking-[0.2em] text-enterprise-text hover:text-enterprise-green transition-colors">About</Link>
            <Link href="/blogs" className="text-[12px] font-bold uppercase tracking-[0.2em] text-enterprise-text hover:text-enterprise-green transition-colors">Editorial</Link>
            <Link href="/contact" className="text-[12px] font-bold uppercase tracking-[0.2em] text-enterprise-text hover:text-enterprise-green transition-colors">Contact</Link>
          </div>

          <div className="hidden lg:flex items-center">
            <Link href="/get-started">
              <Button size="lg">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-enterprise-text group relative"
            onClick={() => setIsMobileOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" />
            <div className="absolute inset-0 bg-enterprise-text/5 scale-0 group-hover:scale-100 rounded-full transition-transform" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 z-[150] bg-enterprise-text/40 backdrop-blur-sm"
            />

            <MotionDiv
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.05}
              onDragEnd={(_: any, info: any) => {
                if (info.offset.x > 100) setIsMobileOpen(false);
              }}
              className="fixed inset-y-0 right-0 z-[200] w-[88vw] bg-white/95 backdrop-blur-2xl p-6 flex flex-col shadow-premium-lg border-l border-white/20 rounded-l-[40px] overflow-hidden"
            >
              {/* Drawer Top Section */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-enterprise-border/50">
                <LogoMark className="h-8" />
                <button 
                  onClick={() => setIsMobileOpen(false)}
                  className="p-3 bg-enterprise-text/5 hover:bg-enterprise-text/10 rounded-full transition-colors group"
                >
                  <XMarkIcon className="h-6 w-6 text-enterprise-text group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>

              {/* Company Statement */}
              <div className="mb-10 px-2">
                <p className="text-[13px] font-medium text-enterprise-text-muted leading-relaxed">
                  Institutional-grade marketplace infrastructure for high-growth brands in India.
                </p>
              </div>

              {/* Navigation Sections */}
              <div className="flex-1 overflow-y-auto custom-scrollbar -mx-2 px-2 pb-12">
                <div className="space-y-2">
                  {mobileNavItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center justify-between p-4 rounded-2xl hover:bg-enterprise-text/[0.03] transition-all group active:scale-[0.98]"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-xl bg-enterprise-bg border border-enterprise-border flex items-center justify-center text-enterprise-text-muted group-hover:text-enterprise-green group-hover:border-enterprise-green/30 transition-all">
                            <item.icon className="h-5 w-5" />
                          </div>
                          <span className="text-lg font-bold text-enterprise-text tracking-tight group-hover:translate-x-1 transition-transform">{item.label}</span>
                        </div>
                        <ArrowRightIcon className="h-4 w-4 text-enterprise-text/20 group-hover:text-enterprise-green group-hover:translate-x-1 transition-all" />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Additional Trust Badge in Menu */}
                <div className="mt-12 p-6 rounded-3xl bg-enterprise-green/5 border border-enterprise-green/10">
                   <div className="flex items-center gap-2 mb-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-enterprise-green animate-pulse" />
                      <span className="text-[10px] font-bold text-enterprise-green uppercase tracking-widest">Global Operations</span>
                   </div>
                   <p className="text-[12px] font-bold text-enterprise-text mb-1">Systems Active</p>
                   <p className="text-[11px] text-enterprise-text-muted leading-snug">Monitoring 2.4k+ marketplace nodes across India.</p>
                </div>
              </div>

              {/* Drawer Bottom Section */}
              <div className="mt-auto pt-8 border-t border-enterprise-border">
                <div className="flex items-center justify-between mb-8 px-2">
                  <div className="flex gap-4">
                    {[LinkedInIcon].map((Icon, i) => (
                      <Link key={i} href="#" className="h-10 w-10 rounded-full bg-enterprise-bg flex items-center justify-center text-enterprise-text-muted hover:text-enterprise-green transition-all">
                        <Icon />
                      </Link>
                    ))}
                  </div>
                  <Link href="mailto:support@isnap.in" className="text-[11px] font-bold text-enterprise-text-muted hover:text-enterprise-text transition-colors">support@isnap.in</Link>
                </div>

                <Link href="/get-started" onClick={() => setIsMobileOpen(false)}>
                  <Button className="w-full h-[58px] rounded-2xl bg-enterprise-text text-white font-bold uppercase tracking-[0.1em] text-[13px] shadow-premium hover:bg-enterprise-green hover:text-enterprise-text transition-all active:scale-[0.98]">
                    Start Building With ISNAP
                  </Button>
                </Link>
              </div>
            </MotionDiv>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
