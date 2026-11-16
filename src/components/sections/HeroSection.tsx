import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Calendar,
  ShieldCheck,
  Star,
  Award,
  MessageSquare,
  MapPin,
  Heart,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { clinicData } from "@/data/clinic";
import { doctorData } from "@/data/doctor";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  const whatsappUrl = `https://wa.me/${clinicData.contact.whatsappNumber}?text=${encodeURIComponent(
    clinicData.contact.whatsappPrefilledMessage
  )}`;

  return (
    <section className="relative bg-gradient-to-b from-[#F7FAFD] via-white to-white pt-8 sm:pt-14 pb-14 sm:pb-20 border-b border-borderSubtle/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Brand Headline, Clinical Narrative & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Clinical Practice Locator Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-borderSubtle shadow-soft">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-navy">
                Consultant Paediatrician
              </span>
              <span className="text-borderSubtle">•</span>
              <span className="text-xs font-medium text-bodyText-muted">
                Kamla Nagar, North Delhi
              </span>
            </div>

            {/* Main Primary Headline (Preserved Exact SEO H1) */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-navy leading-[1.12] text-balance font-heading">
                Dedicated Paediatrician in Kamla Nagar for Your Child&apos;s{" "}
                <span className="text-brandBlue">
                  Health & Milestones.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-bodyText leading-relaxed max-w-2xl font-normal">
                From newborn feeding checkups and painless vaccination to seasonal illness care and milestone tracking, <strong>{doctorData.name}</strong> (MBBS VMMC, MD Pediatrics RML Hospital) provides attentive, evidence-based consultations where parents feel heard and children feel comfortable.
              </p>
            </div>

            {/* Consultation Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <Button
                href="/appointment"
                variant="primary"
                size="lg"
                className="rounded-full shadow-soft bg-brandBlue hover:bg-brandBlue-hover text-white px-7 font-bold text-sm"
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>Book Appointment</span>
              </Button>

              <Button
                href={whatsappUrl}
                variant="secondary"
                size="lg"
                className="rounded-full bg-emerald-600 text-white hover:bg-emerald-700 border-none shadow-soft px-6 font-semibold text-sm"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                <span>WhatsApp Enquiry</span>
              </Button>

              <Button
                href={`tel:${clinicData.contact.phone}`}
                variant="outline"
                size="lg"
                className="rounded-full bg-white text-navy hover:bg-brandBlue-pale border-borderSubtle px-5 font-semibold text-sm"
              >
                <Phone className="w-4 h-4 mr-2 text-brandBlue" />
                <span>Call Desk</span>
              </Button>
            </div>

            {/* Clinical Pedigree Ribbon (Refined Editorial Dividers) */}
            <div className="pt-6 border-t border-borderSubtle/80 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-brandBlue-soft flex items-center justify-center shrink-0 text-brandBlue mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-navy">VMMC & Safdarjung</p>
                  <p className="text-[11px] text-bodyText-muted mt-0.5">MBBS Medical Alumni</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:border-l sm:border-borderSubtle/60 sm:pl-5">
                <div className="w-9 h-9 rounded-lg bg-brandBlue-soft flex items-center justify-center shrink-0 text-brandBlue mt-0.5">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-navy">RML Hospital / PGIMER</p>
                  <p className="text-[11px] text-bodyText-muted mt-0.5">MD Pediatrics Specialist</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:border-l sm:border-borderSubtle/60 sm:pl-5">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0 text-emerald-600 mt-0.5">
                  <Heart className="w-5 h-5 fill-emerald-100" />
                </div>
                <div>
                  <p className="text-xs font-bold text-navy">Unhurried Visits</p>
                  <p className="text-[11px] text-bodyText-muted mt-0.5">Zero Polypharmacy Care</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Doctor Profile Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              {/* Doctor Portrait Container with Dignified Elevation */}
              <div className="relative rounded-2xl overflow-hidden bg-white border border-borderSubtle shadow-card">
                {/* Clean Doctor Headshot */}
                <div className="relative aspect-[4/4.2] w-full overflow-hidden bg-brandBlue-pale">
                  <Image
                    src="/images/doctor/dr-shikha-gupta.jpg"
                    alt="Dr. Shikha Gupta, Consultant Paediatrician (MBBS VMMC, MD Pediatrics RML Hospital) at Sethi Multispecialty Clinic, Kamla Nagar, Delhi"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                    className="object-cover object-center"
                  />
                  {/* Subtle top rating indicator */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md rounded-full px-3 py-1 border border-borderSubtle shadow-soft flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span className="text-xs font-bold text-navy">4.9</span>
                    <span className="text-[11px] text-bodyText-muted">(117+ Reviews)</span>
                  </div>
                </div>

                {/* Integrated Clinical Details Plate */}
                <div className="p-5 bg-white border-t border-borderSubtle/80 space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-semibold border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      In-Clinic Consultations Available
                    </span>
                    <span className="text-[11px] font-semibold text-brandBlue bg-brandBlue-soft px-2.5 py-0.5 rounded-full">
                      Kamla Nagar
                    </span>
                  </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-navy leading-tight font-heading">
                      {doctorData.name}
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold text-brandBlue mt-0.5">
                      {doctorData.role} • {doctorData.credentials}
                    </p>
                    <p className="text-xs text-bodyText-muted mt-1 leading-relaxed">
                      VMMC & Safdarjung Hospital • Dr. RML Hospital / PGIMER, New Delhi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
