"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LogoMark } from "@/components/LogoMark";

type FooterLink = {
  label: string;
  href: string;
};

const servicesLinks: FooterLink[] = [
  { label: "Marketplace Onboarding", href: "/services/marketplace-onboarding-automation" },
  { label: "Catalogue Intelligence", href: "/services/catalogue-listing-automation" },
  { label: "Performance Marketing", href: "/services/digital-marketing" },
  { label: "Growth Solutions", href: "/services/brand-growth-solutions" }
];

const companyLinks: FooterLink[] = [
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" }
];

const resourcesLinks: FooterLink[] = [
  { label: "Blog", href: "/resources" },
  { label: "Case Studies", href: "/resources" },
  { label: "Playbooks", href: "/resources" },
  { label: "FAQs", href: "/resources" }
];

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm-2 6.75h4V21h-4V10.25ZM10 10.25h3.83v1.47h.06c.53-1.01 1.84-2.07 3.8-2.07 4.06 0 4.81 2.48 4.81 5.71V21h-4v-4.95c0-1.18-.03-2.7-1.78-2.7s-2.05 1.29-2.05 2.62V21h-4V10.25Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M18.901 3H21l-4.584 5.238L21.8 21h-4.22l-3.305-4.283L10.45 21H8.35l4.903-5.605L2.2 3h4.33l2.987 3.93L12.948 3h1.997l-4.49 5.157 3.998 5.255L18.9 3Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
    </svg>
  );
}

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <p className="font-heading text-sm font-semibold uppercase tracking-wide text-white">{title}</p>
      <div className="mt-4 space-y-2">
        {links.map((link) => (
          <Link key={link.label} href={link.href} className="block text-sm text-slate-300 transition-colors hover:text-white">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}


export function Footer() {
  return (
    <footer className="relative bg-enterprise-text pt-40 pb-20 text-white overflow-hidden">
      {/* Structural Anchor */}
      <div className="absolute inset-0 grid-subtle opacity-[0.05] pointer-events-none" />
      
      <div className="max-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12 lg:gap-24">
          <div className="md:col-span-4">
            <Link href="/" className="inline-block transition-opacity hover:opacity-80">
              <LogoMark light />
            </Link>
            <p className="mt-10 max-w-sm text-lg text-white/40 leading-relaxed">
              The AI-powered growth partner for high-volume brands in India. Launching and managing products across all major marketplaces from a single dashboard.
            </p>
            <div className="mt-12 flex items-center gap-6">
              {[LinkedInIcon, TwitterIcon].map((Icon, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="text-white/20 hover:text-enterprise-green transition-all duration-300"
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] font-bold uppercase tracking-widest text-enterprise-green mb-10">Solutions</p>
            <ul className="space-y-4">
              {servicesLinks.map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[14px] text-white/40 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] font-bold uppercase tracking-widest text-enterprise-green mb-10">Company</p>
            <ul className="space-y-4">
              {companyLinks.map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[14px] text-white/40 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-enterprise-green mb-10">Headquarters</p>
            <div className="space-y-8 text-[14px] text-white/40">
              <p className="leading-relaxed max-w-xs">HiTech City, Plot no. 90/3, Phase 3, Kavurihills, Madhapur, Hyderabad, Telangana 500081</p>
              <div className="space-y-2">
                <p className="font-bold text-white/60">+91 9052640916</p>
                <Link href="mailto:support@isnap.in" className="block text-enterprise-green hover:underline">support@isnap.in</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <p className="text-[12px] font-medium text-white/20">
              © {new Date().getFullYear()} ISNAP Operating Systems. All rights reserved.
            </p>
            <div className="flex items-center gap-10">
              <Link href="/privacy" className="text-[12px] font-medium text-white/20 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-[12px] font-medium text-white/20 hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/5">
            <span className="h-1.5 w-1.5 rounded-full bg-enterprise-green" />
            <p className="text-[11px] font-bold text-white/60 uppercase tracking-widest">Systems Operational</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
