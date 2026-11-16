import React from "react";
import Image from "next/image";
import { MapPin, Clock, Navigation, Phone, ShieldCheck, Check, Train } from "lucide-react";
import { clinicData } from "@/data/clinic";
import { Button } from "@/components/ui/Button";

export function ClinicExperienceSection() {
  return (
    <section className="py-16 sm:py-24 bg-brandBlue-pale/30 border-t border-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Clinic Narrative & Hours */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brandBlue bg-brandBlue-soft px-3 py-1 rounded-pill">
                Clinic Location & Ambience
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight mt-3">
                A Welcoming, Child-Friendly Clinic in Kamla Nagar.
              </h2>
              <p className="text-base text-bodyText leading-relaxed mt-3">
                Located centrally at Bhatia Chowk, our consultation facility provides a hygienic, calming environment designed to keep infants and young children comfortable during medical visits.
              </p>
            </div>

            {/* Address & Metro Proximity Cards */}
            <div className="space-y-4">
              <div className="p-4 rounded-card bg-white border border-borderSubtle shadow-soft flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-brandBlue-soft flex items-center justify-center text-brandBlue shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-sm sm:text-base">
                    Sethi Multispecialty Clinic
                  </h3>
                  <p className="text-xs sm:text-sm text-bodyText mt-0.5">
                    {clinicData.contact.fullAddress}
                  </p>
                  <p className="text-xs text-bodyText-muted mt-1">
                    Landmark: Right at Bhatia Chowk, near Kamla Nagar main market.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-card bg-white border border-borderSubtle shadow-soft flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-brandBlue-soft flex items-center justify-center text-brandBlue shrink-0">
                  <Train className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-sm sm:text-base">
                    Nearby Metro Connectivity
                  </h3>
                  <p className="text-xs sm:text-sm text-bodyText mt-0.5">
                    5–7 minutes from <strong>Vishwavidyalaya Metro (Yellow Line)</strong> & <strong>Pul Bangash (Red Line)</strong>.
                  </p>
                  <p className="text-xs text-bodyText-muted mt-1">
                    Convenient for families across North Delhi, Roop Nagar, Shakti Nagar, Civil Lines, and Delhi University Campus.
                  </p>
                </div>
              </div>

              {/* Consultation Timings Strip */}
              <div className="p-4 rounded-card bg-navy text-white shadow-soft flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-brandCyan-light shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <h3 className="font-bold text-white text-sm sm:text-base">
                    Consultation Hours
                  </h3>
                  <div className="mt-1.5 space-y-1 text-xs text-white/90">
                    <p className="flex justify-between">
                      <span>Morning:</span>
                      <span className="font-semibold">{clinicData.timings.weekdayMorning}</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Evening:</span>
                      <span className="font-semibold">{clinicData.timings.weekdayEvening}</span>
                    </p>
                    <p className="flex justify-between text-white/70">
                      <span>Sunday:</span>
                      <span>{clinicData.timings.sunday}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                href={clinicData.contact.googleMapsUrl}
                variant="primary"
                size="md"
                className="rounded-pill shadow-soft"
              >
                <Navigation className="w-4 h-4 mr-2" />
                <span>Open Google Maps</span>
              </Button>

              <Button
                href={`tel:${clinicData.contact.phone}`}
                variant="outline"
                size="md"
                className="rounded-pill bg-white"
              >
                <Phone className="w-4 h-4 mr-2 text-brandBlue" />
                <span>Call Clinic Reception</span>
              </Button>
            </div>
          </div>

          {/* Right Column: Real Clinic Photography Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[28px] overflow-hidden border-4 border-white shadow-2xl aspect-[4/3] w-full bg-brandBlue-pale">
              <Image
                src="/images/clinic/clinic-interior.jpg"
                alt="Child-friendly consultation room and paediatric examination clinic at Sethi Multispecialty Clinic, Bhatia Chowk, Kamla Nagar, Delhi"
                fill
                sizes="(max-width: 768px) 100vw, 550px"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-emerald-300 bg-white/20 backdrop-blur-md px-3 py-0.5 rounded-pill mb-1">
                  Clean & Safe Facility
                </span>
                <p className="font-bold text-lg text-white leading-tight">
                  Sethi Multispecialty Clinic
                </p>
                <p className="text-xs text-white/80">
                  D-26, Bhatia Chowk, Kamla Nagar, Delhi – 110007
                </p>
              </div>
            </div>

            {/* Reassurance pill */}
            <div className="mt-4 flex items-center justify-between text-xs text-bodyText-muted px-2">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                Sanitised & Child-Safe Setup
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                Dedicated Growth Charting
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
