import React from "react";
import Image from "next/image";
import { MapPin, Clock, Navigation, Phone, Train, ShieldCheck, CheckCircle2 } from "lucide-react";
import { clinicData } from "@/data/clinic";
import { Button } from "@/components/ui/Button";

export function ClinicExperienceSection() {
  const highlights = [
    "Dedicated pediatric examination table with sanitised protective sheets",
    "Calibrated digital infant weighing scale and infantometer for precise tracking",
    "Comfortable parent seating allowing unhurried medical discussions",
    "Certified medical refrigeration maintaining vaccines at 2°C to 8°C",
  ];

  return (
    <section className="py-16 sm:py-24 bg-surface-muted/40 border-b border-borderSubtle/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Clinic Facility Guide & Access Information */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-semibold text-brandBlue uppercase tracking-wider">
                Clinic Location & Facility Standards
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight mt-3 font-heading">
                A Welcoming, Child-Friendly Consultation Clinic in Kamla Nagar.
              </h2>
              <p className="text-base text-bodyText leading-relaxed mt-4">
                Conveniently situated at Bhatia Chowk, Sethi Multispecialty Clinic offers a calm, clean, and unhurried clinical environment designed to help children feel relaxed and parents feel heard.
              </p>
            </div>

            {/* Address & Metro Proximity Guide */}
            <div className="space-y-4">
              {/* Location Card */}
              <div className="p-5 rounded-2xl bg-white border border-borderSubtle shadow-soft flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brandBlue-soft flex items-center justify-center text-brandBlue shrink-0 border border-brandBlue/15">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-navy text-sm sm:text-base font-heading">
                    Sethi Multispecialty Clinic
                  </h3>
                  <p className="text-xs sm:text-sm text-bodyText">
                    {clinicData.contact.fullAddress}
                  </p>
                  <p className="text-xs text-bodyText-muted pt-1">
                    <strong className="text-navy font-semibold">Landmark:</strong> Prominently located right at Bhatia Chowk, near Kamla Nagar main market.
                  </p>
                </div>
              </div>

              {/* Transit & Metro Connectivity */}
              <div className="p-5 rounded-2xl bg-white border border-borderSubtle shadow-soft flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brandBlue-soft flex items-center justify-center text-brandBlue shrink-0 border border-brandBlue/15">
                  <Train className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-navy text-sm sm:text-base font-heading">
                    Metro & Transit Connectivity
                  </h3>
                  <p className="text-xs sm:text-sm text-bodyText">
                    5 to 7 minutes from <strong>Vishwavidyalaya Metro Station (Yellow Line)</strong> and <strong>Pul Bangash Metro Station (Red Line)</strong>.
                  </p>
                  <p className="text-xs text-bodyText-muted pt-1">
                    Easily accessible by auto, taxi, or e-rickshaw for families across Shakti Nagar, Roop Nagar, Civil Lines, Model Town, and Delhi University North Campus.
                  </p>
                </div>
              </div>

              {/* Consultation Timings Table */}
              <div className="p-5 rounded-2xl bg-white border border-borderSubtle shadow-soft space-y-3">
                <div className="flex items-center justify-between pb-2.5 border-b border-borderSubtle/70">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brandBlue" />
                    <h3 className="font-bold text-navy text-sm font-heading">
                      Consultation Hours (Mon – Sat)
                    </h3>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Walk-ins & By Appointment
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-surface-muted border border-borderSubtle/60">
                    <p className="text-bodyText-muted font-medium">Morning Session</p>
                    <p className="font-bold text-navy text-sm mt-0.5">{clinicData.timings.weekdayMorning}</p>
                    <p className="text-[11px] text-bodyText-muted mt-0.5">Infant checkups & general reviews</p>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-muted border border-borderSubtle/60">
                    <p className="text-bodyText-muted font-medium">Evening Session</p>
                    <p className="font-bold text-navy text-sm mt-0.5">{clinicData.timings.weekdayEvening}</p>
                    <p className="text-[11px] text-bodyText-muted mt-0.5">Vaccinations & evening consults</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-bodyText-muted pt-1 px-1">
                  <span>Sunday Consultations:</span>
                  <span className="font-semibold text-navy">{clinicData.timings.sunday}</span>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                href={clinicData.contact.googleMapsUrl}
                variant="primary"
                size="md"
                className="rounded-full bg-brandBlue hover:bg-brandBlue-hover text-white shadow-soft font-semibold text-xs px-5"
              >
                <Navigation className="w-4 h-4 mr-2" />
                <span>Open in Google Maps</span>
              </Button>

              <Button
                href={`tel:${clinicData.contact.phone}`}
                variant="outline"
                size="md"
                className="rounded-full bg-white border-borderSubtle text-navy hover:text-brandBlue hover:border-brandBlue shadow-soft font-semibold text-xs px-5"
              >
                <Phone className="w-4 h-4 mr-2 text-brandBlue" />
                <span>Call Clinic Reception</span>
              </Button>
            </div>
          </div>

          {/* Right Column: Real Clinic Photography & Facility Standards */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-borderSubtle shadow-card aspect-[4/3] w-full bg-brandBlue-pale/50">
              <Image
                src="/images/clinic/clinic-interior.jpg"
                alt="Child-friendly consultation room and paediatric examination clinic at Sethi Multispecialty Clinic, Bhatia Chowk, Kamla Nagar, Delhi"
                fill
                sizes="(max-width: 768px) 100vw, 550px"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-300 bg-navy/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 mb-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Medical Facility</span>
                </div>
                <p className="font-bold text-lg sm:text-xl text-white font-heading leading-snug">
                  Sethi Multispecialty Clinic
                </p>
                <p className="text-xs text-white/85 mt-0.5">
                  D-26, Bhatia Chowk, Kamla Nagar, North Delhi – 110007
                </p>
              </div>
            </div>

            {/* Hygiene & Clinical Highlights List */}
            <div className="rounded-2xl bg-white border border-borderSubtle p-5 shadow-soft space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-navy">
                Clinical Facility Safeguards
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-bodyText">
                {highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug text-bodyText-muted">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
