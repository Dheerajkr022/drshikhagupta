import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Clock, ShieldAlert, Phone, HelpCircle, CheckCircle2, MessageSquare, Star, Sparkles } from "lucide-react";
import { clinicData } from "@/data/clinic";
import { doctorData } from "@/data/doctor";
import { constructMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { AppointmentForm } from "@/components/forms/AppointmentForm";

export const metadata: Metadata = constructMetadata({
  title: "Book Paediatric Appointment in Kamla Nagar | Dr. Shikha Gupta",
  description:
    "Schedule an unhurried consultation with Dr. Shikha Gupta for newborn health checks, IAP vaccinations, fever care, and growth monitoring in Kamla Nagar, North Delhi.",
  path: "/appointment",
});

export default function AppointmentPage() {
  const whatsappUrl = `https://wa.me/${clinicData.contact.whatsappNumber}?text=${encodeURIComponent(
    clinicData.contact.whatsappPrefilledMessage
  )}`;

  return (
    <>
      <div className="bg-brandBlue-pale/40 border-b border-borderSubtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={[{ label: "Appointment Request" }]} />
        </div>
      </div>

      {/* Header */}
      <section className="py-12 bg-gradient-to-b from-brandBlue-pale/60 via-white to-white border-b border-borderSubtle/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-brandBlue-soft text-brandBlue text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Doctor Consultation Request</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-navy leading-tight">
              Book a Paediatric Consultation in Kamla Nagar, Delhi
            </h1>
            <p className="text-base sm:text-lg text-bodyText leading-relaxed">
              Share your details and preferred consultation slot below. Our clinic receptionist will review and contact you promptly via phone or WhatsApp to confirm doctor availability.
            </p>
          </div>
        </div>
      </section>

      {/* Form Container */}
      <section className="py-14 sm:py-16 bg-brandBlue-pale/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Form Column */}
            <div className="lg:col-span-8">
              <AppointmentForm />
            </div>

            {/* Reassurance & Timings Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Doctor Card */}
              <div className="bg-white rounded-card border border-borderSubtle p-5 shadow-soft flex items-center gap-3.5">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-brandBlue/30 shrink-0">
                  <Image
                    src="/images/doctor/dr-shikha-gupta.jpg"
                    alt="Dr. Shikha Gupta, Consultant Paediatrician at Sethi Multispecialty Clinic, Kamla Nagar, Delhi"
                    fill
                    sizes="56px"
                    className="object-cover object-center"
                  />
                </div>
                <div>
                  <p className="font-bold text-navy text-sm">{doctorData.name}</p>
                  <p className="text-xs text-brandBlue font-medium">{doctorData.credentials}</p>
                  <p className="text-[11px] text-bodyText-muted">Kamla Nagar, Delhi</p>
                </div>
              </div>

              {/* Process Card */}
              <div className="bg-white rounded-card border border-borderSubtle p-6 space-y-4 shadow-soft">
                <h3 className="text-base font-bold text-navy">
                  How Consultation Scheduling Works
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-bodyText">
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-brandBlue text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <p>
                      <strong>Submit Request:</strong> Share your name, phone number, and primary concern.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-brandBlue text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <p>
                      <strong>Desk Confirmation:</strong> We check schedule and call or WhatsApp you to confirm your slot.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-brandBlue text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <p>
                      <strong>Clinic Visit:</strong> Arrive at Sethi Multispecialty Clinic with your child&apos;s vaccination records.
                    </p>
                  </div>
                </div>
              </div>

              {/* Consultation Hours */}
              <div className="bg-white rounded-card border border-borderSubtle p-6 space-y-3 shadow-soft text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-navy font-bold">
                  <Clock className="w-4 h-4 text-brandBlue" />
                  <h4>Clinic Timings</h4>
                </div>
                <div className="space-y-1 text-bodyText-muted">
                  <p><strong>Morning:</strong> {clinicData.timings.weekdayMorning}</p>
                  <p><strong>Evening:</strong> {clinicData.timings.weekdayEvening}</p>
                  <p><strong>Sunday:</strong> {clinicData.timings.sunday}</p>
                </div>
              </div>

              {/* Emergency Advisory */}
              <div className="rounded-card bg-status-emergencyBg border border-status-emergency/20 p-5 text-xs text-bodyText space-y-2">
                <div className="flex items-center gap-2 text-status-emergency font-bold">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Not for Medical Emergencies</span>
                </div>
                <p className="leading-relaxed text-bodyText-muted">
                  If your child is experiencing severe acute symptoms such as breathing difficulty, seizures, loss of consciousness, or high fever with lethargy, please go directly to the nearest hospital casualty emergency ward.
                </p>
              </div>

              {/* Instant WhatsApp Link */}
              <div className="bg-emerald-50 rounded-card p-5 border border-emerald-200 text-center text-xs text-bodyText space-y-2">
                <p className="font-bold text-emerald-800 text-sm">Need a Same-Day Consultation?</p>
                <p className="text-emerald-700 text-xs">Reach our desk immediately on WhatsApp:</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-pill bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-colors shadow-soft"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
