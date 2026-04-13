import { cn } from "@/lib/utils";
import { displayTitleClasses, displayTitleMdClasses } from "@/lib/typography";

type HeadingSize = "md" | "lg" | "xl";

export interface SectionHeadingProps {
  eyebrow?: string;
  /** Merged after default eyebrow styles (e.g. `text-slate-500` for neutral / corporate tone). */
  eyebrowClassName?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  size?: HeadingSize;
  className?: string;
}

const titleSizes: Record<HeadingSize, string> = {
  md: displayTitleMdClasses,
  lg: displayTitleClasses,
  xl: displayTitleClasses
};

export function SectionHeading({
  eyebrow,
  eyebrowClassName,
  title,
  subtitle,
  align = "left",
  size = "lg",
  className
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "font-heading text-[11px] font-semibold uppercase tracking-widest text-primary-600",
            eyebrowClassName
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn("mt-3", titleSizes[size])}>{title}</h2>
      {subtitle ? <p className="mt-4 max-w-3xl text-lg font-body text-slate-500">{subtitle}</p> : null}
    </div>
  );
}
