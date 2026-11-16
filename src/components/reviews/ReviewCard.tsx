import React from "react";
import { Star, ShieldCheck } from "lucide-react";
import { Testimonial } from "@/types";

interface ReviewCardProps {
  testimonial: Testimonial;
}

export function ReviewCard({ testimonial }: ReviewCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-borderSubtle bg-white p-6 sm:p-7 shadow-soft hover:shadow-card hover:border-brandBlue/30 transition-all duration-300">
      <div className="space-y-4">
        {/* Rating & Verification Ribbon */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
            ))}
            <span className="text-xs font-bold text-navy ml-1.5">5.0</span>
          </div>
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            Verified Review
          </span>
        </div>

        {/* Quote Content */}
        <blockquote className="text-xs sm:text-sm text-bodyText leading-relaxed italic">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
      </div>

      {/* Author Footer */}
      <div className="pt-4 mt-4 border-t border-borderSubtle/60 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-brandBlue-soft text-brandBlue font-bold text-xs flex items-center justify-center shrink-0 border border-brandBlue/15 font-mono">
          {testimonial.parentName.slice(0, 2).toUpperCase()}
        </div>
        <div className="min-w-0">
          <p className="font-bold text-navy text-xs sm:text-sm truncate font-heading">
            {testimonial.parentName}
          </p>
          <p className="text-[11px] text-bodyText-muted truncate">
            {testimonial.context}
          </p>
        </div>
      </div>
    </div>
  );
}
