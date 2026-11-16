import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "",
        className
      )}
    >
      {eyebrow && (
        <p className="text-xs font-semibold tracking-wider uppercase text-brandBlue mb-2">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-navy leading-tight",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base sm:text-lg text-bodyText-muted leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

