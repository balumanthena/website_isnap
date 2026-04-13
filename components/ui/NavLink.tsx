"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, children, className }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-center gap-2 py-2 text-sm font-body font-medium text-slate-600 transition-colors hover:text-slate-900",
        isActive ? "text-slate-900" : "",
        className
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {isActive ? <span className="h-1.5 w-1.5 rounded-full bg-primary-600" aria-hidden="true" /> : null}
      <span>{children}</span>
      <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-primary-600 transition-transform duration-200 group-hover:scale-x-100" />
    </Link>
  );
}
