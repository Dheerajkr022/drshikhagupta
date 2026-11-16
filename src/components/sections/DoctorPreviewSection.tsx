import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  Stethoscope,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Star,
  MapPin,
} from "lucide-react";
import { doctorData } from "@/data/doctor";
import { Button } from "@/components/ui/Button";

export function DoctorPreviewSection() {
  return (
    <section className="py-16 sm:py-24 bg-white border-t border-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Doctor Photo & Accreditations Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              <div className="relative rounded-[28px] overflow-hidden border-2 border-borderSubtle bg-white shadow-xl">
                <div className="relative aspect-[4/4.2] w-full overflow-hidden bg-brandBlue-pale">
                  <Image
                    src="/images/doctor/dr-shikha-gupta.jpg"
                    alt="Dr. Shikha Gupta, Consultant Paediatrician (MBBS VMMC, MD Pediatrics RML Hospital) in Kamla Nagar, Delhi"
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover object-center"
                  />
                </div>

                <div className="p-4 sm:p-5 bg-white border-t border-borderSubtle space-y-1.5">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-brandBlue bg-brandBlue-soft px-2.5 py-0.5 rounded-pill">
                    Consultant Paediatrician
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-navy">
                    {doctorData.name}
                  </h3>
                  <p className="text-xs text-brandBlue font-semibold">
                    MBBS (VMMC & Safdarjung) • MD Pediatrics (RML Hospital)
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-xs text-status-success font-medium">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span>Delhi Medical Council Registered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Values */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brandBlue bg-brandBlue-soft px-3 py-1 rounded-pill">
                Meet Your Child&apos;s Paediatrician
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight mt-3">
                Compassionate Child Healthcare Rooted in Premier Medical Training.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-bodyText leading-relaxed">
              Dr. Shikha Gupta completed her undergraduate medical training (MBBS) at <strong>Vardhman Mahavir Medical College (VMMC) & Safdarjung Hospital</strong>, followed by rigorous post-graduate residency (MD Pediatrics) at <strong>Dr. Ram Manohar Lohia Hospital / PGIMER, New Delhi</strong>.
            </p>

            <p className="text-sm sm:text-base text-bodyText-muted leading-relaxed">
              Serving as a Senior Resident Doctor at RML Hospital provided extensive clinical experience across neonatal care, childhood respiratory conditions, infectious diseases, and developmental milestone tracking. At Sethi Multispecialty Clinic in Kamla Nagar, Dr. Gupta combines that intensive hospital expertise with warm, unhurried bedside consultations for families across Kamla Nagar, Shakti Nagar, Roop Nagar, and Civil Lines.
            </p>

            {/* Key Clinical Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-3.5 rounded-element bg-brandBlue-pale/60 border border-borderSubtle flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brandBlue shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-navy">Listening-First Consultations</p>
                  <p className="text-[11px] text-bodyText-muted">Unrushed discussions addressing every parental question.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-element bg-brandBlue-pale/60 border border-borderSubtle flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brandBlue shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-navy">Evidence-Based Medicine</p>
                  <p className="text-[11px] text-bodyText-muted">Strict antibiotic stewardship and child-safe treatments.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-element bg-brandBlue-pale/60 border border-borderSubtle flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brandBlue shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-navy">Milestone Tracking</p>
                  <p className="text-[11px] text-bodyText-muted">Standardised WHO growth percentiles & motor milestones.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-element bg-brandBlue-pale/60 border border-borderSubtle flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brandBlue shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-navy">Parent Partnership</p>
                  <p className="text-[11px] text-bodyText-muted">Practical feeding, sleep, and behavioural advice.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href="/about" variant="primary" size="lg" className="rounded-pill shadow-soft">
                <span>Doctor&apos;s Full Profile & Credentials</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>

              <Button href="/appointment" variant="outline" size="lg" className="rounded-pill">
                <span>Book a Check-up</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
