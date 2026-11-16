import React from "react";
import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, ExternalLink, Sparkles } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";
import { clinicData } from "@/data/clinic";
import { Button } from "@/components/ui/Button";

export function ReviewsPreviewSection() {
  const selectedReviews = testimonialsData.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-pill bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-200">
              <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
              <span>4.9 ★ on Google • 117+ Parent Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
              Words from Families We Care For.
            </h2>
            <p className="text-base sm:text-lg text-bodyText-muted mt-2 max-w-2xl leading-relaxed">
              Genuine feedback from parents across Kamla Nagar and North Delhi who rely on Dr. Shikha Gupta for newborn care, vaccinations, and growth guidance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            {clinicData.contact.googleReviewsUrl && (
              <a
                href={clinicData.contact.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-pill border border-borderSubtle bg-white hover:bg-brandBlue-pale/60 text-navy font-bold text-xs shadow-soft transition-colors"
              >
                <span>Read 117+ Google Reviews</span>
                <ExternalLink className="w-3.5 h-3.5 text-brandBlue" />
              </a>
            )}

            <Link
              href="/reviews"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-pill bg-brandBlue text-white hover:bg-brandBlue-hover font-bold text-xs shadow-soft transition-colors"
            >
              <span>View All Reviews</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {selectedReviews.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col justify-between rounded-card border border-borderSubtle bg-gradient-to-b from-brandBlue-pale/30 to-white p-6 sm:p-7 shadow-soft hover:shadow-card hover:border-brandBlue/30 transition-all duration-300"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-navy ml-1.5">5.0</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-pill border border-emerald-200">
                    Google Verified
                  </span>
                </div>

                <blockquote className="text-sm text-bodyText leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-borderSubtle/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brandBlue-soft text-brandBlue font-bold text-sm flex items-center justify-center shrink-0 border border-brandBlue/20">
                  {testimonial.parentName.slice(0, 2).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-navy text-sm truncate">
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

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-bodyText-muted text-center max-w-2xl mx-auto">
          <ShieldCheck className="w-4 h-4 text-brandBlue shrink-0" />
          <span>
            Feedback reflects genuine, individual parent consultations on Google. Clinical outcomes vary based on individual diagnosis and paediatric conditions.
          </span>
        </div>
      </div>
    </section>
  );
}
