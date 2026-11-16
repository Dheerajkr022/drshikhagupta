import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "navy" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  target?: string;
  rel?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      href,
      variant = "primary",
      size = "md",
      disabled,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-element disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const sizeStyles = {
      sm: "text-xs px-3.5 py-2 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5",
    };

    const variantStyles = {
      primary:
        "bg-brandBlue text-white hover:bg-brandBlue-hover shadow-soft hover:shadow-card",
      navy:
        "bg-navy text-white hover:bg-navy-light shadow-soft hover:shadow-card",
      secondary:
        "bg-brandBlue-soft text-navy hover:bg-brandBlue-pale border border-borderSubtle hover:border-brandBlue/30",
      outline:
        "bg-transparent text-navy border border-borderSubtle hover:bg-brandBlue-pale hover:border-brandBlue/40",
      ghost:
        "bg-transparent text-bodyText hover:text-navy hover:bg-brandBlue-soft/60",
      link:
        "bg-transparent text-brandBlue underline-offset-4 hover:underline p-0 h-auto",
    };

    const combinedClasses = cn(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      className
    );

    if (href) {
      const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
      return (
        <Link
          href={href}
          className={combinedClasses}
          target={target || (isExternal && href.startsWith("http") ? "_blank" : undefined)}
          rel={rel || (isExternal && href.startsWith("http") ? "noopener noreferrer" : undefined)}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={combinedClasses}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

