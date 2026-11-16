import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "navy" | "subtle" | "success" | "warning";
  className?: string;
}

export function Badge({
  children,
  variant = "blue",
  className,
}: BadgeProps) {
  const variantStyles = {
    blue: "bg-brandBlue-soft text-brandBlue border-brandBlue/20",
    navy: "bg-navy/10 text-navy border-navy/20",
    subtle: "bg-brandBlue-pale text-bodyText-muted border-borderSubtle",
    success: "bg-status-successBg text-status-success border-status-success/20",
    warning: "bg-status-warningBg text-status-warning border-status-warning/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-pill text-xs font-medium border",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

