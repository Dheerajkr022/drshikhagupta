import React from "react";
import Image from "next/image";
import { Phone, MessageSquare, Calendar, Clock, MapPin } from "lucide-react";
import { clinicData } from "@/data/clinic";
import { doctorData } from "@/data/doctor";
import { Button } from "@/components/ui/Button";

export function CtaSection() {
  const whatsappUrl = `https://wa.me/${clinicData.contact.whatsappNumber}?text=${encodeURIComponent(
    clinicData.contact.whatsappPrefilledMessage
  )}`;

  return (
    <section className="py-16 sm:py-24 bg-navy text-white relative border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Doctor Verification Strip */}
        <div className="inline-flex items-center gap-3.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
          <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/20 shrink-0">
            <Image
              src="/images/doctor/dr-shikha-gupta.jpg"
              alt="Dr. Shikha Gupta, Consultant Paediatrician at Sethi Multispecialty Clinic, Kamla Nagar, Delhi"
              fill
              sizes="44px"
              className="object-cover object-center"
            />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-[11px] font-semibold text-emerald-300">
                Consultations Open in Kamla Nagar
              </span>
            </div>
            <p className="font-bold text-white text-xs sm:text-sm font-heading">
              Dr. Shikha Gupta, MD Pediatrics
            </p>
          </div>
        </div>

        {/* Editorial Heading */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading">
            Attentive, Evidence-Based Healthcare for Your Child.
          </h2>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal">
            Whether it&apos;s your infant&apos;s first routine checkup, catch-up vaccinations, or guidance for seasonal sickness, we provide a listening ear and unhurried medical expertise.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <Button
            href="/appointment"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto rounded-full bg-brandBlue hover:bg-brandBlue-hover text-white px-7 shadow-card font-semibold text-xs sm:text-sm"
          >
            <Calendar className="w-4 h-4 mr-2" />
            <span>Book Consultation</span>
          </Button>

          <Button
            href={whatsappUrl}
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-7 shadow-card font-semibold text-xs sm:text-sm border-none"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            <span>Chat on WhatsApp</span>
          </Button>

          <Button
            href={`tel:${clinicData.contact.phone}`}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto rounded-full bg-white/10 hover:bg-white/15 text-white border-white/20 px-6 font-semibold text-xs sm:text-sm"
          >
            <Phone className="w-4 h-4 mr-2 text-brandCyan-light" />
            <span>Call {clinicData.contact.phoneDisplay}</span>
          </Button>
        </div>

        {/* Clinic Landmark & Timing Strip */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 text-xs text-white/70">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-brandCyan-light" />
            Mon–Sat: 10:30 AM–12:30 PM & 6:00 PM–8:30 PM
          </span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-brandCyan-light" />
            Sethi Multispecialty Clinic, Bhatia Chowk, Kamla Nagar, Delhi – 110007
          </span>
        </div>
      </div>
    </section>
  );
}
