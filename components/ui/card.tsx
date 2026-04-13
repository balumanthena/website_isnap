import { cn } from "@/lib/utils";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverLift?: boolean;
}

export function Card({ children, className, hoverLift = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-slate-200 bg-white p-6 transition-all duration-200",
        hoverLift ? "hover:-translate-y-0.5 hover:shadow-sm" : "",
        className
      )}
    >
      {children}
    </div>
  );
}
