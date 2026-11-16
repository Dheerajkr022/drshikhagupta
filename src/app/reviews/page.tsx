import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Calendar,
  Phone,
  Star,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { testimonialsData } from "@/data/testimonials";
import { clinicData } from "@/data/clinic";
import { constructMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = constructMetadata({
  title: "Parent Reviews & Feedback | Dr. Shikha Gupta, Kamla Nagar",
  description:
    "Read genuine, 5-star verified Google Reviews and parent feedback for Dr. Shikha Gupta's clinic in Kamla Nagar, Delhi. Rated 4.9/5.0 across 117+ reviews.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <div className="bg-surface-muted/60 border-b border-borderSubtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={[{ label: "Parent Reviews" }]} />
        </div>
      </div>

      {/* Hero with Official Google Rating Banner */}
      <section className="py-12 sm:py-16 bg-white border-b border-borderSubtle/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-900 text-xs font-semibold border border-amber-200/80">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                <span>Verified Google Reviews • Kamla Nagar Clinic</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-navy leading-tight font-heading">
                Words from Families We Care For.
              </h1>
              <p className="text-base sm:text-lg text-bodyText leading-relaxed">
                We believe in transparent, rational paediatric care. Below are authentic testimonials from parents who consult Dr. Shikha Gupta for newborn visits, vaccination milestones, and childhood illnesses.
              </p>
            </div>

            {/* Google Rating Highlights Card */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl p-6 bg-white border border-borderSubtle shadow-card space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-bodyText-muted">
                    Google Business Rating
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified
                  </span>
                </div>

                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-extrabold text-navy font-heading">4.9</span>
                  <div className="space-y-1">
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs text-bodyText-muted font-medium">
                      Based on 117+ Google Reviews
                    </p>
                  </div>
                </div>

                {clinicData.contact.googleReviewsUrl && (
                  <a
                    href={clinicData.contact.googleReviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-navy hover:bg-navy-light text-white text-xs font-semibold shadow-soft transition-colors"
                  >
                    <span>Read on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-brandCyan-light" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials List */}
      <section className="py-16 bg-surface-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {testimonialsData.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex flex-col justify-between rounded-2xl border border-borderSubtle bg-white p-6 sm:p-7 shadow-soft hover:shadow-card transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                      <span className="text-xs font-bold text-navy ml-2">5.0 / 5.0</span>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {testimonial.verifiedSource.includes("Google") ? "Google Verified" : "Clinic Verified"}
                    </span>
                  </div>

                  <blockquote className="text-xs sm:text-sm text-bodyText leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-borderSubtle/60 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brandBlue-soft text-brandBlue font-bold text-xs flex items-center justify-center shrink-0 border border-brandBlue/15 font-mono">
                    {testimonial.parentName.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-bold text-navy text-sm font-heading">{testimonial.parentName}</p>
                    <p className="text-xs text-bodyText-muted">{testimonial.context}</p>
                    <p className="text-[11px] text-brandBlue font-medium mt-0.5">
                      {testimonial.verifiedSource}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Ethics & Transparency Notice */}
          <div className="mt-12 rounded-2xl bg-white border border-borderSubtle p-6 sm:p-8 space-y-3 shadow-soft max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-navy font-bold text-base font-heading">
              <ShieldCheck className="w-5 h-5 text-brandBlue shrink-0" />
              <span>Feedback Transparency & Healthcare Standards</span>
            </div>
            <p className="text-xs sm:text-sm text-bodyText-muted leading-relaxed">
              In accordance with Indian medical ethics and healthcare communication principles, these comments represent genuine feedback from parents who consult Dr. Shikha Gupta at Sethi Multispecialty Clinic, Bhatia Chowk, Kamla Nagar. They are published for informational purposes and do not constitute guarantees of medical outcomes. Clinical assessments and treatment decisions are made individually during in-clinic visits.
            </p>
          </div>
        </div>
      </section>

      {/* Doctor Philosophy Banner */}
      <section className="py-16 bg-white border-t border-borderSubtle/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-navy text-white p-8 sm:p-10 flex flex-col md:flex-row items-center gap-8 shadow-card">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white/20 shrink-0">
              <Image
                src="/images/doctor/dr-shikha-gupta.jpg"
                alt="Dr. Shikha Gupta"
                fill
                sizes="96px"
                className="object-cover object-center"
              />
            </div>
            <div className="space-y-3 text-center md:text-left flex-1">
              <h3 className="text-xl sm:text-2xl font-bold font-heading">
                Experience Patient-First Paediatric Care
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Consult with Dr. Shikha Gupta at Sethi Multispecialty Clinic, Bhatia Chowk, Kamla Nagar. We are here to answer your questions and guide your child&apos;s growth.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
                <Button
                  href="/appointment"
                  variant="primary"
                  size="md"
                  className="rounded-full bg-brandBlue hover:bg-brandBlue-hover text-white shadow-soft font-semibold text-xs px-5"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Book Consultation</span>
                </Button>
                <Button
                  href={`tel:${clinicData.contact.phone}`}
                  variant="outline"
                  size="md"
                  className="rounded-full bg-white/10 hover:bg-white/20 text-white border-white/20 font-semibold text-xs px-5"
                >
                  <Phone className="w-4 h-4 mr-2 text-brandCyan-light" />
                  <span>Call Desk</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
