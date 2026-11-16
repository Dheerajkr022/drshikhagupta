import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Calendar,
  ShieldCheck,
  Star,
  CheckCircle2,
  Award,
  Sparkles,
  MessageSquare,
  MapPin,
  Heart,
} from "lucide-react";
import { clinicData } from "@/data/clinic";
import { doctorData } from "@/data/doctor";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  const whatsappUrl = `https://wa.me/${clinicData.contact.whatsappNumber}?text=${encodeURIComponent(
    clinicData.contact.whatsappPrefilledMessage
  )}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brandBlue-pale/80 via-white to-white pt-10 sm:pt-16 pb-16 sm:pb-24 border-b border-borderSubtle/60">
      {/* Decorative Aura / Mesh Glow Background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brandBlue-light/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-brandCyan/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Brand Headline & Story */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-white border border-brandBlue/20 shadow-soft">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-navy">
                Consultant Paediatrician • Kamla Nagar, Delhi
              </span>
              <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy leading-[1.12] text-balance">
                Dedicated Paediatrician in Kamla Nagar for Your Child&apos;s{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandBlue to-brandCyan">
                  Health & Milestones.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-bodyText leading-relaxed max-w-2xl font-normal">
                From newborn feeding checkups and painless vaccination to seasonal illness care and milestone tracking, <strong>{doctorData.name}</strong> (MBBS VMMC, MD Pediatrics RML Hospital) provides attentive, evidence-based consultations where parents feel heard and children feel comfortable.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Button
                href="/appointment"
                variant="primary"
                size="lg"
                className="rounded-pill shadow-glow bg-gradient-to-r from-brandBlue to-brandCyan hover:from-brandBlue-hover hover:to-brandBlue px-7"
              >
                <Calendar className="w-5 h-5 mr-2" />
                <span>Book Appointment</span>
              </Button>

              <Button
                href={whatsappUrl}
                variant="secondary"
                size="lg"
                className="rounded-pill bg-emerald-600 text-white hover:bg-emerald-700 border-none shadow-soft px-6"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                <span>WhatsApp Enquiry</span>
              </Button>

              <Button
                href={`tel:${clinicData.contact.phone}`}
                variant="outline"
                size="lg"
                className="rounded-pill bg-white text-navy hover:bg-brandBlue-pale px-5"
              >
                <Phone className="w-4 h-4 mr-2 text-brandBlue" />
                <span>Call Desk</span>
              </Button>
            </div>

            {/* Trust Badges Strip */}
            <div className="pt-6 border-t border-borderSubtle grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-brandBlue-soft flex items-center justify-center shrink-0 text-brandBlue">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-navy">VMMC & Safdarjung</p>
                  <p className="text-[11px] text-bodyText-muted">MBBS Medical Alumni</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-brandBlue-soft flex items-center justify-center shrink-0 text-brandBlue">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-navy">RML Hospital / PGIMER</p>
                  <p className="text-[11px] text-bodyText-muted">MD Pediatrics Specialist</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 text-emerald-600">
                  <Heart className="w-5 h-5 fill-emerald-100" />
                </div>
                <div>
                  <p className="text-xs font-bold text-navy">Unhurried Visits</p>
                  <p className="text-[11px] text-bodyText-muted">Zero Polypharmacy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase featuring Dr. Shikha Gupta */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              {/* Outer Decorative Gradient Ring */}
              <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-tr from-brandBlue/20 via-brandCyan/20 to-brandBlue-soft/40 -rotate-1 -z-10 blur-sm" />

              {/* Floating Badge 1: Top Right (Verified Doctor Badge) */}
              <div className="absolute -top-3 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md rounded-element p-3 shadow-card border border-borderSubtle flex items-center gap-2.5 animate-float-slow z-20">
                <div className="w-9 h-9 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-500 shrink-0">
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-navy leading-none">4.9 / 5.0 Rating</p>
                  <p className="text-[11px] text-bodyText-muted mt-1 leading-none">Parent Reviewed</p>
                </div>
              </div>

              {/* Floating Badge 2: Top Left (Hospital Credentials) */}
              <div className="absolute top-8 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md rounded-element p-3 shadow-card border border-borderSubtle flex items-center gap-2.5 animate-float-delayed z-20 max-w-[210px]">
                <div className="w-8 h-8 rounded-full bg-brandBlue-soft flex items-center justify-center text-brandBlue shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-navy leading-tight">VMMC & RML Trained</p>
                  <p className="text-[10px] text-bodyText-muted leading-tight mt-0.5">Senior Resident Experience</p>
                </div>
              </div>

              {/* Main Photo Card Container with Clean Profile Plate */}
              <div className="relative rounded-[28px] overflow-hidden bg-white border-2 border-white shadow-2xl">
                {/* Doctor Portrait - Clean and Unobstructed */}
                <div className="relative aspect-[4/4.2] w-full overflow-hidden bg-brandBlue-pale">
                  <Image
                    src="/images/doctor/dr-shikha-gupta.jpg"
                    alt="Dr. Shikha Gupta, Consultant Paediatrician (MBBS VMMC, MD Pediatrics RML Hospital) at Sethi Multispecialty Clinic, Kamla Nagar, Delhi"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                    className="object-cover object-center hover:scale-103 transition-transform duration-500"
                  />
                </div>

                {/* Dedicated Profile Details Section - Zero Overlap, Perfect Readability */}
                <div className="p-4 sm:p-5 bg-white border-t border-borderSubtle space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-pill bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      In-Clinic Consultations Available
                    </span>
                    <span className="text-[11px] font-semibold text-brandBlue bg-brandBlue-soft px-2.5 py-0.5 rounded-pill shrink-0">
                      Kamla Nagar
                    </span>
                  </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-navy leading-tight">
                      {doctorData.name}
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold text-brandBlue mt-0.5">
                      {doctorData.role} • {doctorData.credentials}
                    </p>
                    <p className="text-xs text-bodyText-muted mt-1 leading-relaxed">
                      VMMC & Safdarjung Hospital • Dr. RML Hospital / PGIMER
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
