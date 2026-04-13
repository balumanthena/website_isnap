import { cn } from "@/lib/utils";

export interface GreenDividerProps {
  children: React.ReactNode;
  className?: string;
}

export function GreenDivider({ children, className }: GreenDividerProps) {
  return (
    <div className={cn("border-l-2 border-primary-600 pl-4", className)}>
      {children}
    </div>
  );
}
