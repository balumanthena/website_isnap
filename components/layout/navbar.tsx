"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
  CpuChipIcon,
  ShoppingBagIcon,
  SparklesIcon,
  FunnelIcon,
  BoltIcon,
  ArrowTrendingUpIcon,
  UserGroupIcon,
  CommandLineIcon
} from "@heroicons/react/24/outline";
import { useState, type ComponentType, type SVGProps } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/hooks/use-scroll-position";

type ServiceItem = {
  title: string;
  description: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const services: ServiceItem[] = [
  {
    title: "Growth Strategy",
    description: "AI-informed roadmap for sustained eCommerce growth.",
    href: "/services",
    icon: ChartBarIcon
  },
  {
    title: "Performance Marketing",
    description: "Acquire profitable customers across paid channels.",
    href: "/services",
    icon: ArrowTrendingUpIcon
  },
  {
    title: "Conversion Optimization",
    description: "Lift conversion with structured experiment loops.",
    href: "/services",
    icon: FunnelIcon
  },
  {
    title: "AI Personalization",
    description: "Dynamic recommendations tailored to intent.",
    href: "/services",
    icon: SparklesIcon
  },
  {
    title: "Lifecycle Automation",
    description: "Automate retention with behavior-based journeys.",
    href: "/services",
    icon: BoltIcon
  },
  {
    title: "Marketplace Scaling",
    description: "Accelerate sales across marketplaces and D2C.",
    href: "/services",
    icon: ShoppingBagIcon
  },
  {
    title: "Data Engineering",
    description: "Unify attribution and revenue intelligence.",
    href: "/services",
    icon: CpuChipIcon
  },
  {
    title: "CRM & Loyalty",
    description: "Increase LTV with segmented loyalty programs.",
    href: "/services",
    icon: UserGroupIcon
  },
  {
    title: "Growth Ops",
    description: "Operational systems that compound team output.",
    href: "/services",
    icon: CommandLineIcon
  }
];

type SimpleLink = { label: string; href: string; description?: string };

const solutionsLinks: SimpleLink[] = [
  { label: "How it works", href: "/#how-it-works", description: "Our launch and scale framework" },
  { label: "Industries", href: "/#industries", description: "Categories we support end-to-end" }
];

const resourcesLinks: SimpleLink[] = [
  { label: "Services overview", href: "/services", description: "What we deliver for brands" },
  { label: "About ISNAP", href: "/about", description: "Mission, team, and approach" }
];

const companyLinks: SimpleLink[] = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

type MenuKey = "platform" | "solutions" | "resources" | "company";

function LogoMark() {
  return (
    <Image
      src="/images/logo-14-2.3-removebg-preview.png"
      alt="ISNAP"
      width={140}
      height={40}
      className="h-8 w-auto shrink-0 sm:h-9"
      priority
    />
  );
}

function NavChevron({ open }: { open: boolean }) {
  return (
    <ChevronDownIcon
      className={cn("h-3.5 w-3.5 text-slate-500 transition-transform duration-200", open && "rotate-180")}
    />
  );
}

export function Navbar() {
  const isScrolled = useScrollPosition(12);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white transition-shadow duration-200",
        isScrolled ? "shadow-sm shadow-slate-900/5" : "border-b border-slate-100"
      )}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className="relative z-50 mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between gap-4 bg-white px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center">
          <LogoMark />
        </Link>

        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center lg:flex">
          <div className="flex items-center gap-1">
            {/* Services — opens full-width mega below header (centered to page grid) */}
            <div className="relative" onMouseEnter={() => setOpenMenu("platform")}>
              <button
                type="button"
                className={cn(
                  "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50",
                  openMenu === "platform" && "bg-slate-50"
                )}
                aria-expanded={openMenu === "platform"}
              >
                Services
                <NavChevron open={openMenu === "platform"} />
              </button>
            </div>

            {/* Solutions */}
            <div className="relative" onMouseEnter={() => setOpenMenu("solutions")}>
              <button
                type="button"
                className={cn(
                  "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50",
                  openMenu === "solutions" && "bg-slate-50"
                )}
                aria-expanded={openMenu === "solutions"}
              >
                Solutions
                <NavChevron open={openMenu === "solutions"} />
              </button>
              <AnimatePresence>
                {openMenu === "solutions" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute left-1/2 top-full z-50 min-w-[17rem] -translate-x-1/2 pt-3"
                  >
                    <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-900/10">
                      {solutionsLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block rounded-lg px-3 py-3 transition hover:bg-slate-50"
                        >
                          <span className="block text-sm font-semibold text-slate-900">{item.label}</span>
                          {item.description ? (
                            <span className="mt-0.5 block text-xs text-slate-500">{item.description}</span>
                          ) : null}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            {/* Resources */}
            <div className="relative" onMouseEnter={() => setOpenMenu("resources")}>
              <button
                type="button"
                className={cn(
                  "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50",
                  openMenu === "resources" && "bg-slate-50"
                )}
                aria-expanded={openMenu === "resources"}
              >
                Resources
                <NavChevron open={openMenu === "resources"} />
              </button>
              <AnimatePresence>
                {openMenu === "resources" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute left-1/2 top-full z-50 min-w-[17rem] -translate-x-1/2 pt-3"
                  >
                    <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-900/10">
                      {resourcesLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block rounded-lg px-3 py-3 transition hover:bg-slate-50"
                        >
                          <span className="block text-sm font-semibold text-slate-900">{item.label}</span>
                          {item.description ? (
                            <span className="mt-0.5 block text-xs text-slate-500">{item.description}</span>
                          ) : null}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            {/* Company */}
            <div className="relative" onMouseEnter={() => setOpenMenu("company")}>
              <button
                type="button"
                className={cn(
                  "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50",
                  openMenu === "company" && "bg-slate-50"
                )}
                aria-expanded={openMenu === "company"}
              >
                Company
                <NavChevron open={openMenu === "company"} />
              </button>
              <AnimatePresence>
                {openMenu === "company" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute left-1/2 top-full z-50 min-w-[12rem] -translate-x-1/2 pt-3"
                  >
                    <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-900/10">
                      {companyLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </div>
        </nav>

        <div className="flex shrink-0 items-center gap-1 sm:gap-3">
          <div className="hidden items-center gap-4 md:flex">
            <Link href="/contact" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              Contact
            </Link>
            <Link href="/contact" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              Login
            </Link>
          </div>
          <button
            type="button"
            aria-label="Search"
            className="hidden h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 md:inline-flex"
          >
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>
          <div className="hidden lg:block">
            <Button size="sm" className="rounded-full px-5 font-semibold">
              Get started
            </Button>
          </div>
          <button
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 lg:hidden"
            aria-label="Open menu"
            onClick={() => setIsMobileOpen(true)}
            type="button"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Services mega-menu: full-bleed under bar, content aligned with max-w-7xl */}
      <AnimatePresence mode="wait">
        {openMenu === "platform" ? (
          <motion.div
            key="platform-mega"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-0 right-0 top-full z-40 hidden origin-top border-t border-slate-100 bg-white lg:block"
            onMouseEnter={() => setOpenMenu("platform")}
          >
            <div className="-mt-1 pt-1">
              <div className="mx-auto w-full max-w-7xl px-4 pb-6 pt-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-[#F3FDF6] shadow-lg shadow-slate-900/[0.06]">
                  <div className="p-6 md:p-8">
                    <p className="font-heading text-lg text-slate-900 md:text-xl">Services</p>
                    <p className="mt-2 max-w-2xl text-sm text-slate-600">
                      End-to-end capabilities for onboarding, marketplace operations, growth, and fulfillment.
                    </p>
                    <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                      {services.map((s) => (
                        <Link
                          key={s.title}
                          href={s.href}
                          className="flex gap-3 rounded-xl bg-white/85 p-3 ring-1 ring-slate-200/80 transition hover:bg-white hover:ring-primary-200"
                        >
                          <s.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                          <span>
                            <span className="block text-sm font-semibold text-slate-900">{s.title}</span>
                            <span className="mt-0.5 block text-xs text-slate-600">{s.description}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/services"
                      className="mt-6 inline-flex text-sm font-semibold text-primary-700 hover:text-primary-600"
                    >
                      View all capabilities →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileOpen ? (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-slate-950/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed right-0 top-0 z-[60] flex h-full w-full max-w-md flex-col bg-white px-5 pb-8 pt-4 shadow-2xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <Link href="/" className="flex items-center" onClick={() => setIsMobileOpen(false)}>
                  <LogoMark />
                </Link>
                <button
                  className="rounded-lg p-2 text-slate-700"
                  aria-label="Close menu"
                  onClick={() => setIsMobileOpen(false)}
                  type="button"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              <div className="flex-1 space-y-6 overflow-y-auto">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Services</p>
                  <div className="mt-2 space-y-1">
                    <Link
                      href="/services"
                      className="block rounded-lg px-3 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      All capabilities
                    </Link>
                    {services.map((s) => (
                      <Link
                        key={s.title}
                        href={s.href}
                        className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Solutions</p>
                  <div className="mt-2 space-y-1">
                    {solutionsLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-lg px-3 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Resources</p>
                  <div className="mt-2 space-y-1">
                    {resourcesLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-lg px-3 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Company</p>
                  <div className="mt-2 space-y-1">
                    {companyLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-lg px-3 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3 border-t border-slate-100 pt-6">
                <Button className="w-full rounded-full font-semibold" size="md" onClick={() => setIsMobileOpen(false)}>
                  Get started
                </Button>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
