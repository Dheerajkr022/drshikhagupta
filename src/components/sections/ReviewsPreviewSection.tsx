import React from "react";
import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, ExternalLink, CheckCircle2 } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";
import { clinicData } from "@/data/clinic";
import { Button } from "@/components/ui/Button";

export function ReviewsPreviewSection() {
  const selectedReviews = testimonialsData.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-borderSubtle/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-semibold mb-3 border border-amber-200/80">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
              <span>4.9 ★ Rating on Google • 117+ Parent Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight font-heading">
              Words from Families in Our Care.
            </h2>
            <p className="text-base sm:text-lg text-bodyText mt-3 leading-relaxed">
              Authentic feedback from parents across Kamla Nagar, Shakti Nagar, Roop Nagar, and North Delhi who rely on Dr. Shikha Gupta for newborn care, vaccinations, and growth guidance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            {clinicData.contact.googleReviewsUrl && (
              <a
                href={clinicData.contact.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-borderSubtle bg-white hover:bg-surface-muted text-navy font-semibold text-xs shadow-soft transition-colors"
              >
                <span>Read 117+ Google Reviews</span>
                <ExternalLink className="w-3.5 h-3.5 text-brandBlue" />
              </a>
            )}

            <Button
              href="/reviews"
              variant="primary"
              size="md"
              className="rounded-full bg-brandBlue hover:bg-brandBlue-hover text-white shadow-soft font-semibold text-xs px-5"
            >
              <span>View All Reviews</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </div>
        </div>

        {/* 3 Editorial Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {selectedReviews.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col justify-between rounded-2xl border border-borderSubtle bg-white p-6 sm:p-7 shadow-soft hover:shadow-card hover:border-brandBlue/30 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* 5-Star Rating & Source */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-navy ml-1.5">5.0</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Google Verified
                  </span>
                </div>

                <blockquote className="text-xs sm:text-sm text-bodyText leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 mt-6 border-t border-borderSubtle/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brandBlue-soft text-brandBlue font-bold text-xs flex items-center justify-center shrink-0 border border-brandBlue/15 font-mono">
                  {testimonial.parentName.slice(0, 2).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-navy text-sm truncate font-heading">
                    {testimonial.parentName}
                  </p>
                  <p className="text-xs text-bodyText-muted truncate">
                    {testimonial.context}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Medical Ethical Disclaimer */}
        <div className="mt-10 flex items-center justify-center gap-2 text-xs text-bodyText-muted text-center max-w-2xl mx-auto">
          <ShieldCheck className="w-4 h-4 text-brandBlue shrink-0" />
          <span>
            Feedback reflects genuine, individual parent consultations on Google. Clinical outcomes vary based on individual diagnosis and paediatric conditions.
          </span>
        </div>
      </div>
    </section>
  );
}
