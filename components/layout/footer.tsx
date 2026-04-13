"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type FooterLink = {
  label: string;
  href: string;
};

const servicesLinks: FooterLink[] = [
  { label: "Growth Strategy", href: "/services" },
  { label: "Performance Marketing", href: "/services" },
  { label: "Conversion Optimization", href: "/services" },
  { label: "Lifecycle Automation", href: "/services" }
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
    <motion.footer
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="mt-16 border-t-2 border-primary-500 bg-slate-900"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-5">
          <div>
            <p className="font-heading text-2xl font-bold text-white">ISNAP</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-300">
              Empowering 200+ manufacturers across India.
            </p>
            <div className="mt-5 flex items-center gap-3 text-slate-300">
              <Link href="https://www.linkedin.com" aria-label="LinkedIn" className="transition-colors hover:text-white">
                <LinkedInIcon />
              </Link>
              <Link href="https://twitter.com" aria-label="Twitter" className="transition-colors hover:text-white">
                <TwitterIcon />
              </Link>
              <Link href="https://www.instagram.com" aria-label="Instagram" className="transition-colors hover:text-white">
                <InstagramIcon />
              </Link>
            </div>
          </div>

          <FooterColumn title="Services" links={servicesLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Resources" links={resourcesLinks} />

          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-white">Contact</p>
            <div className="mt-4 space-y-2 text-sm text-slate-300">
              <p>Hitech City, Hyderabad</p>
              <p>+91 90000 00000</p>
              <p>hello@isnap.ai</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-800 pt-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ISNAP. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="transition-colors hover:text-slate-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-slate-200">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
