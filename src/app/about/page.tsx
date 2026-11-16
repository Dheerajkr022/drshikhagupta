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
  Sparkles,
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

      <div className="bg-brandBlue-pale/40 border-b border-borderSubtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={[{ label: "About Dr. Shikha Gupta" }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-brandBlue-pale/60 via-white to-white border-b border-borderSubtle/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-brandBlue-soft text-brandBlue text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>Consultant Paediatrician • Kamla Nagar, Delhi</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-navy leading-tight">
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
                className="w-full justify-center rounded-pill shadow-glow bg-gradient-to-r from-brandBlue to-brandCyan"
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>Request Appointment</span>
              </Button>
              <Button
                href={`tel:${clinicData.contact.phone}`}
                variant="outline"
                size="lg"
                className="w-full justify-center rounded-pill bg-white"
              >
                <Phone className="w-4 h-4 mr-2 text-brandBlue" />
                <span>Call Reception</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Profile & Full Biography */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Card: Doctor Overview with Real Photo */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-[28px] overflow-hidden border border-borderSubtle bg-white shadow-card p-4 space-y-6">
                <div className="relative aspect-[4/4.2] w-full rounded-[20px] overflow-hidden bg-brandBlue-pale">
                  <Image
                    src="/images/doctor/dr-shikha-gupta.jpg"
                    alt="Dr. Shikha Gupta, Consultant Paediatrician (MBBS VMMC, MD Pediatrics RML Hospital) at Sethi Multispecialty Clinic, Kamla Nagar, Delhi"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center"
                  />
                </div>

                <div className="px-2 space-y-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brandBlue bg-brandBlue-soft px-2.5 py-0.5 rounded-pill inline-block mb-1">
                      Consultant Paediatrician
                    </span>
                    <h2 className="text-xl font-bold text-navy">{doctorData.name}</h2>
                    <p className="text-xs text-brandBlue font-semibold mt-0.5">{doctorData.credentials}</p>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-status-success font-semibold">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span>State Medical Council Registered Paediatrician</span>
                  </div>

                  <div className="rounded-element bg-brandBlue-pale/60 p-4 border border-borderSubtle space-y-2">
                    <p className="text-xs font-bold text-navy uppercase tracking-wider">
                      Specialised Clinical Exposure
                    </p>
                    <ul className="text-xs text-bodyText-muted space-y-1.5">
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
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mb-4">
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
                <h3 className="text-xl font-bold text-navy mb-4">
                  Verified Academic & Hospital Experience
                </h3>
                <div className="space-y-4">
                  {doctorData.qualifications.map((q, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-card border border-borderSubtle bg-gradient-to-b from-brandBlue-pale/20 to-white flex items-start gap-3.5 hover:border-brandBlue/30 transition-all shadow-soft"
                    >
                      <div className="w-10 h-10 rounded-element bg-brandBlue-soft flex items-center justify-center shrink-0 mt-0.5 text-brandBlue">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-navy text-base">
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
      <section className="py-16 sm:py-20 bg-brandBlue-pale/40 border-y border-borderSubtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Approach to Care"
            title="Helping Parents Feel Informed, Not Overwhelmed."
            description="Our consultations are built on mutual respect, transparent medical explanations, and supporting parents with practical, actionable guidance."
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {doctorData.carePhilosophy.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-card border border-borderSubtle p-6 sm:p-7 shadow-soft hover:shadow-card transition-all"
              >
                <div className="w-9 h-9 rounded-full bg-brandBlue text-white flex items-center justify-center font-bold text-sm mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-bodyText-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Families Visit */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Care Standards"
            title="What Families Can Expect"
            className="mb-8"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {doctorData.whyFamiliesVisit.map((reason, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-card border border-borderSubtle bg-white shadow-soft"
              >
                <CheckCircle2 className="w-5 h-5 text-brandBlue shrink-0 mt-0.5" />
                <span className="text-sm text-bodyText font-medium">{reason}</span>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-12 rounded-[24px] bg-gradient-to-r from-navy via-navy-light to-navy text-white p-8 sm:p-10 text-center space-y-4 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Let&apos;s Talk About Your Child&apos;s Care.
            </h3>
            <p className="text-sm sm:text-base text-white/90 max-w-lg mx-auto leading-relaxed">
              Whether you are scheduling your baby&apos;s early milestone check, an immunisation update, or have questions about nutrition, we are here to support you.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                href="/appointment"
                variant="primary"
                className="rounded-pill bg-gradient-to-r from-brandBlue to-brandCyan shadow-glow px-6"
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>Request an Appointment</span>
              </Button>
              <Button
                href="/contact"
                variant="outline"
                className="rounded-pill bg-white/10 hover:bg-white/20 text-white border-white/20 px-6"
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
