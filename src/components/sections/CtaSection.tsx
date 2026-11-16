import React from "react";
import Image from "next/image";
import { Phone, MessageSquare, Calendar, Sparkles, Clock, MapPin } from "lucide-react";
import { clinicData } from "@/data/clinic";
import { doctorData } from "@/data/doctor";
import { Button } from "@/components/ui/Button";

export function CtaSection() {
  const whatsappUrl = `https://wa.me/${clinicData.contact.whatsappNumber}?text=${encodeURIComponent(
    clinicData.contact.whatsappPrefilledMessage
  )}`;

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-navy via-navy-light to-navy text-white relative overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brandBlue/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-brandCyan/20 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        {/* Doctor Avatar Strip */}
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/40 shadow-glow">
            <Image
              src="/images/doctor/dr-shikha-gupta.jpg"
              alt="Dr. Shikha Gupta"
              fill
              sizes="56px"
              className="object-cover object-top"
            />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-emerald-300">
                Accepting New Patients
              </span>
            </div>
            <p className="font-bold text-white text-sm">
              Dr. Shikha Gupta, MD Pediatrics
            </p>
          </div>
        </div>

        <div className="space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ready to Give Your Child Attentive, Expert Care?
          </h2>
          <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
            Whether it&apos;s your baby&apos;s first vaccination, tracking developmental milestones, or consultation for seasonal illness, we are here to support your family.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
          <Button
            href="/appointment"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto rounded-pill bg-gradient-to-r from-brandBlue to-brandCyan hover:from-brandBlue-hover hover:to-brandBlue shadow-glow text-white px-8"
          >
            <Calendar className="w-5 h-5 mr-2" />
            <span>Book Consultation</span>
          </Button>

          <Button
            href={whatsappUrl}
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto rounded-pill bg-emerald-600 text-white hover:bg-emerald-700 border-none px-7 shadow-soft"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            <span>Chat on WhatsApp</span>
          </Button>

          <Button
            href={`tel:${clinicData.contact.phone}`}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto rounded-pill bg-white/10 hover:bg-white/20 text-white border-white/20 px-6"
          >
            <Phone className="w-5 h-5 mr-2 text-brandCyan-light" />
            <span>Call {clinicData.contact.phoneDisplay}</span>
          </Button>
        </div>

        {/* Micro-info */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/70 pt-4">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-brandCyan-light" />
            Mon–Sat: 10:30 AM–12:30 PM & 6:00 PM–8:30 PM
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-brandCyan-light" />
            Bhatia Chowk, Kamla Nagar, Delhi – 110007
          </span>
        </div>
      </div>
    </section>
  );
}
