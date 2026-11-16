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
  MapPin,
} from "lucide-react";
import { doctorData } from "@/data/doctor";
import { Button } from "@/components/ui/Button";

export function DoctorPreviewSection() {
  const credentialsTimeline = [
    {
      period: "MBBS Degree",
      institution: "Vardhman Mahavir Medical College (VMMC) & Safdarjung Hospital",
      detail: "Graduated with honors from one of India's premier central medical institutions.",
    },
    {
      period: "MD Pediatrics",
      institution: "Dr. Ram Manohar Lohia Hospital / PGIMER, New Delhi",
      detail: "Rigorous 3-year post-graduate clinical training covering acute and preventive child care.",
    },
    {
      period: "Senior Residency",
      institution: "Dr. RML Hospital, New Delhi",
      detail: "Extensive tertiary care experience across neonatal ICU, pediatric wards, and emergency management.",
    },
    {
      period: "Outpatient Clinic",
      institution: "Sethi Multispecialty Clinic, Bhatia Chowk, Kamla Nagar",
      detail: "Dedicated consulting paediatrician providing gentle, listening-first care for North Delhi families.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-borderSubtle/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Doctor Profile Portrait */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden border border-borderSubtle bg-white shadow-card">
                <div className="relative aspect-[4/4.4] w-full overflow-hidden bg-brandBlue-pale">
                  <Image
                    src="/images/doctor/dr-shikha-gupta.jpg"
                    alt="Dr. Shikha Gupta, Consultant Paediatrician (MBBS VMMC, MD Pediatrics RML Hospital) in Kamla Nagar, Delhi"
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover object-center"
                  />
                </div>

                <div className="p-5 bg-white border-t border-borderSubtle/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-brandBlue bg-brandBlue-soft px-2.5 py-0.5 rounded-full">
                      Consultant Paediatrician
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      DMC Registered
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy font-heading">
                      {doctorData.name}
                    </h3>
                    <p className="text-xs text-brandBlue font-medium mt-0.5">
                      MBBS (VMMC & Safdarjung) • MD Pediatrics (Dr. RML Hospital)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Academic-Clinical Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-semibold text-brandBlue uppercase tracking-wider">
                Meet Your Child&apos;s Paediatrician
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight mt-3 font-heading">
                Compassionate Child Healthcare Rooted in Premier Medical Training.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-bodyText leading-relaxed">
              Dr. Shikha Gupta completed her undergraduate medical training (MBBS) at <strong>Vardhman Mahavir Medical College (VMMC) & Safdarjung Hospital</strong>, followed by rigorous post-graduate residency (MD Pediatrics) at <strong>Dr. Ram Manohar Lohia Hospital / PGIMER, New Delhi</strong>.
            </p>

            <p className="text-sm sm:text-base text-bodyText-muted leading-relaxed">
              Serving as a Senior Resident Doctor at RML Hospital provided extensive clinical experience across neonatal care, childhood respiratory conditions, infectious diseases, and developmental milestone tracking. At Sethi Multispecialty Clinic in Kamla Nagar, Dr. Gupta combines that intensive hospital expertise with warm, unhurried bedside consultations for families across Kamla Nagar, Shakti Nagar, Roop Nagar, and Civil Lines.
            </p>

            {/* Academic-Clinical Milestones Continuum (Replaces Generic Boxes) */}
            <div className="pt-2 border-t border-borderSubtle/80 space-y-3.5">
              {credentialsTimeline.map((item, i) => (
                <div key={i} className="flex items-start gap-3.5 text-left">
                  <div className="w-2 h-2 rounded-full bg-brandBlue mt-2 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-navy">
                      <span className="text-brandBlue font-semibold mr-1.5">{item.period}:</span>
                      {item.institution}
                    </p>
                    <p className="text-[11px] text-bodyText-muted mt-0.5">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Button
                href="/about"
                variant="primary"
                size="md"
                className="rounded-full bg-brandBlue hover:bg-brandBlue-hover text-white shadow-soft font-semibold text-xs"
              >
                <span>Doctor&apos;s Full Profile & Credentials</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>

              <Button
                href="/appointment"
                variant="outline"
                size="md"
                className="rounded-full border-borderSubtle text-navy hover:bg-brandBlue-pale font-semibold text-xs"
              >
                <span>Book a Check-up</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
