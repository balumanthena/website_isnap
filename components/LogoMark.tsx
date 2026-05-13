"use client";

import { cn } from "@/lib/utils";

export function LogoMark({ light = false, className }: { light?: boolean, className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5 group", className)}>
      <div className="flex items-center">
        <div className="h-6 w-[2px] bg-enterprise-green rounded-full group-hover:scale-y-110 transition-transform duration-500" />
      </div>
      <span className={cn(
        "text-xl font-bold tracking-[0.08em] uppercase font-display transition-colors",
        light ? "text-white" : "text-enterprise-text"
      )}>ISNAP</span>
    </div>
  );
}
