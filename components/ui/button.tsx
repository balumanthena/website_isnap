"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "destructive";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-enterprise-text text-white hover:bg-enterprise-green hover:text-enterprise-text shadow-premium",
  secondary: "bg-enterprise-bg text-enterprise-text border border-enterprise-border hover:bg-enterprise-text hover:text-white",
  outline: "border border-enterprise-border bg-transparent text-enterprise-text hover:bg-enterprise-bg",
  ghost: "bg-transparent text-enterprise-text-muted hover:bg-enterprise-bg hover:text-enterprise-text",
  destructive: "bg-red-500 text-white hover:bg-red-600"
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-[11px] font-bold uppercase tracking-widest",
  md: "h-12 px-6 text-[12px] font-bold uppercase tracking-widest",
  lg: "h-[54px] px-10 text-[13px] font-bold uppercase tracking-widest rounded-full"
};

function Spinner() {
  return (
    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle className="opacity-30" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
      <path
        className="opacity-90"
        d="M22 12a10 10 0 0 0-10-10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", loading = false, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-md font-body font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? <Spinner /> : null}
        <span>{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";
