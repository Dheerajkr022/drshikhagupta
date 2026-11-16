import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  Stethoscope,
  Heart,
  CheckCircle2,
  Calendar,
  Phone,
  ShieldCheck,
  Star,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { doctorData } from "@/data/doctor";
import { clinicData } from "@/data/clinic";
import { constructMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getPhysicianStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = constructMetadata({
  title: "About Dr. Shikha Gupta | Consultant Paediatrician in Kamla Nagar, Delhi",
  description:
    "Learn about Dr. Shikha Gupta's paediatric medical qualifications (MBBS VMMC & Safdarjung Hospital, MD Pediatrics RML Hospital / PGIMER), senior clinical experience, and gentle patient-care approach in North Delhi.",
  path: "/about",
});

export default function AboutPage() {
  const physicianSchema = getPhysicianStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />

      <div className="bg-surface-muted/60 border-b border-borderSubtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={[{ label: "About Dr. Shikha Gupta" }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-white border-b border-borderSubtle/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-semibold text-brandBlue uppercase tracking-wider">
                Consultant Paediatrician • Kamla Nagar, Delhi
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-navy leading-tight font-heading">
                Dr. Shikha Gupta — Consultant Paediatrician & Child Specialist.
              </h1>
              <p className="text-base sm:text-lg text-bodyText leading-relaxed max-w-2xl">
                MBBS (VMMC & Safdarjung Hospital), MD Pediatrics (RML Hospital / PGIMER). Providing compassionate, evidence-based care where parents feel heard and children receive unhurried, gentle medical attention.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Button
                href="/appointment"
                variant="primary"
                size="lg"
                className="w-full justify-center rounded-full bg-brandBlue hover:bg-brandBlue-hover text-white shadow-soft font-semibold text-xs sm:text-sm"
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>Request Appointment</span>
              </Button>
              <Button
                href={`tel:${clinicData.contact.phone}`}
                variant="outline"
                size="lg"
                className="w-full justify-center rounded-full bg-white border-borderSubtle text-navy hover:text-brandBlue hover:border-brandBlue shadow-soft font-semibold text-xs sm:text-sm"
              >
                <Phone className="w-4 h-4 mr-2 text-brandBlue" />
                <span>Call Reception</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Profile & Full Biography */}
      <section className="py-16 bg-surface-muted/30 border-b border-borderSubtle/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Card: Doctor Overview with Real Photo */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl overflow-hidden border border-borderSubtle bg-white shadow-card p-5 space-y-5">
                <div className="relative aspect-[4/4.4] w-full rounded-xl overflow-hidden bg-brandBlue-pale/50">
                  <Image
                    src="/images/doctor/dr-shikha-gupta.jpg"
                    alt="Dr. Shikha Gupta, Consultant Paediatrician (MBBS VMMC, MD Pediatrics RML Hospital) at Sethi Multispecialty Clinic, Kamla Nagar, Delhi"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center"
                  />
                </div>

                <div className="space-y-3">
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
                    <h2 className="text-xl font-bold text-navy font-heading">{doctorData.name}</h2>
                    <p className="text-xs text-brandBlue font-semibold mt-0.5">{doctorData.credentials}</p>
                  </div>

                  <div className="rounded-xl bg-surface-muted p-4 border border-borderSubtle/60 space-y-2">
                    <p className="text-xs font-bold text-navy uppercase tracking-wider">
                      Specialised Clinical Exposure
                    </p>
                    <ul className="text-xs text-bodyText space-y-1.5">
                      {doctorData.subspecialtyExposure.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brandBlue shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Biography & Background */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mb-4 font-heading">
                  Clinical Training & Background
                </h2>
                <div className="space-y-4 text-base text-bodyText leading-relaxed">
                  {doctorData.biography.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Verified Qualifications Timeline */}
              <div className="pt-6 border-t border-borderSubtle">
                <h3 className="text-xl font-bold text-navy mb-4 font-heading">
                  Verified Academic & Hospital Experience
                </h3>
                <div className="space-y-3">
                  {doctorData.qualifications.map((q, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-2xl border border-borderSubtle bg-white flex items-start gap-4 hover:border-brandBlue/30 transition-all shadow-soft"
                    >
                      <div className="w-10 h-10 rounded-xl bg-brandBlue-soft flex items-center justify-center shrink-0 text-brandBlue border border-brandBlue/15">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-navy text-sm sm:text-base font-heading">
                          {q.degree}
                        </h4>
                        <p className="text-xs sm:text-sm text-bodyText font-medium mt-0.5">
                          {q.institution}
                        </p>
                        {q.details && (
                          <p className="text-xs text-bodyText-muted mt-1 leading-relaxed">
                            {q.details}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Care Philosophy */}
      <section className="py-16 sm:py-20 bg-white border-b border-borderSubtle/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold text-brandBlue uppercase tracking-wider">
              Approach to Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight mt-3 font-heading">
              Helping Parents Feel Informed, Not Overwhelmed.
            </h2>
            <p className="text-base text-bodyText mt-3 leading-relaxed">
              Our consultations are built on mutual respect, transparent medical explanations, and supporting parents with practical, actionable guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {doctorData.carePhilosophy.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-borderSubtle p-6 sm:p-7 shadow-soft hover:shadow-card transition-all flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-lg bg-brandBlue-soft text-brandBlue flex items-center justify-center font-bold text-xs shrink-0 font-mono border border-brandBlue/15">
                  0{idx + 1}
                </div>
                <div className="space-y-1.5 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-navy font-heading">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-bodyText leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Families Visit */}
      <section className="py-16 bg-surface-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs font-semibold text-brandBlue uppercase tracking-wider">
              Care Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-2 font-heading">
              What Families Can Expect During Every Visit
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {doctorData.whyFamiliesVisit.map((reason, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl border border-borderSubtle bg-white shadow-soft"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-bodyText font-medium">{reason}</span>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-12 rounded-2xl bg-navy text-white p-8 sm:p-10 text-center space-y-4 shadow-card">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
              Let&apos;s Talk About Your Child&apos;s Care.
            </h3>
            <p className="text-xs sm:text-sm text-white/80 max-w-lg mx-auto leading-relaxed">
              Whether you are scheduling your baby&apos;s early milestone check, an immunisation update, or have questions about nutrition, we are here to support you.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                href="/appointment"
                variant="primary"
                className="rounded-full bg-brandBlue hover:bg-brandBlue-hover text-white shadow-soft font-semibold text-xs px-6"
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>Request an Appointment</span>
              </Button>
              <Button
                href="/contact"
                variant="outline"
                className="rounded-full bg-white/10 hover:bg-white/20 text-white border-white/20 px-6 font-semibold text-xs"
              >
                <span>View Clinic Timings & Location</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
