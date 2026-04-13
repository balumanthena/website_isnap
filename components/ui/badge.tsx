import { cn } from "@/lib/utils";

type BadgeVariant = "green" | "gray" | "blue" | "amber";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  green: "border-primary-100 bg-primary-50 text-primary-700",
  gray: "border-slate-200 bg-slate-100 text-slate-700",
  blue: "border-blue-100 bg-blue-50 text-blue-700",
  amber: "border-amber-100 bg-amber-50 text-amber-700"
};

export function Badge({ children, variant = "green", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[20px] border px-3 py-1 text-xs font-body font-medium tracking-wide",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
