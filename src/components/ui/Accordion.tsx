"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  id: string;
  title: string;
  content: string | React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({
  items,
  defaultOpenId,
  allowMultiple = false,
  className,
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(
    defaultOpenId ? [defaultOpenId] : []
  );

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn("divide-y divide-borderSubtle rounded-card border border-borderSubtle bg-white overflow-hidden shadow-soft", className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id} className="transition-colors hover:bg-brandBlue-pale/40">
            <h3>
              <button
                type="button"
                onClick={() => toggle(item.id)}
                aria-expanded={isOpen}
                aria-controls={`accordion-content-${item.id}`}
                id={`accordion-btn-${item.id}`}
                className="flex w-full items-center justify-between py-5 px-6 text-left text-base sm:text-lg font-medium text-navy transition-all focus-visible:outline-none focus-visible:bg-brandBlue-soft/50"
              >
                <span>{item.title}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-brandBlue transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={`accordion-content-${item.id}`}
              role="region"
              aria-labelledby={`accordion-btn-${item.id}`}
              hidden={!isOpen}
              className={cn(
                "px-6 pb-5 pt-1 text-sm sm:text-base leading-relaxed text-bodyText",
                !isOpen && "hidden"
              )}
            >
              {typeof item.content === "string" ? (
                <p className="text-bodyText">{item.content}</p>
              ) : (
                item.content
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

