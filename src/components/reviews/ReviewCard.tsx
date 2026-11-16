import React from "react";
import { Quote } from "lucide-react";
import { Testimonial } from "@/types";

interface ReviewCardProps {
  testimonial: Testimonial;
}

export function ReviewCard({ testimonial }: ReviewCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-card border border-borderSubtle bg-white p-6 sm:p-7 shadow-soft">
      <div>
        <div className="w-8 h-8 rounded-full bg-brandBlue-soft flex items-center justify-center text-brandBlue mb-4">
          <Quote className="w-4 h-4" />
        </div>
        <blockquote className="text-sm sm:text-base text-bodyText leading-relaxed mb-6">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
      </div>

      <div className="pt-4 border-t border-borderSubtle/60">
        <p className="font-bold text-navy text-sm">{testimonial.parentName}</p>
        <p className="text-xs text-bodyText-muted">{testimonial.context}</p>
        <p className="text-[11px] text-brandBlue font-medium mt-1">
          {testimonial.verifiedSource}
        </p>
      </div>
    </div>
  );
}

