"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export function LogoMark({ light = false, className }: { light?: boolean, className?: string }) {
  return (
    <div className={cn("relative h-11 w-44 sm:w-56 group transition-all duration-300", className)}>
      <Image
        src="/images/logo-14-2.3-removebg-preview.png"
        alt="ISNAP Logo"
        fill
        className={cn(
          "object-contain transition-all duration-300",
          light && "brightness-0 invert"
        )}
        priority
      />
    </div>
  );
}
