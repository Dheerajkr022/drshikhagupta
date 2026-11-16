import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Phone,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { clinicData } from "@/data/clinic";
import { constructMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = constructMetadata({
  title: "Paediatric Services in Kamla Nagar, Delhi | Dr. Shikha Gupta",
  description:
    "Explore specialized paediatric services including well-baby checkups, IAP child vaccination, growth monitoring, fever consultation, and breastfeeding support in Kamla Nagar, North Delhi.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <div className="bg-surface-muted/60 border-b border-borderSubtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={[{ label: "Services" }]} />
        </div>
      </div>

      {/* Header */}
      <section className="py-12 sm:py-16 bg-white border-b border-borderSubtle/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold text-brandBlue uppercase tracking-wider">
              Comprehensive Paediatric Clinical Practice • North Delhi
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-navy leading-tight font-heading">
              Paediatric Care for Every Stage of Childhood.
            </h1>
            <p className="text-base sm:text-lg text-bodyText leading-relaxed">
              From newborn well-baby exams and IAP vaccinations to fever care and adolescent health, Dr. Shikha Gupta provides dedicated, unhurried paediatric care at Sethi Multispecialty Clinic, Kamla Nagar.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid with Real Photography */}
      <section className="py-16 bg-surface-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                featured={index === 0 || index === 1}
              />
            ))}
          </div>

          {/* Emergency Disclaimer Banner */}
          <div className="mt-12 rounded-2xl bg-amber-50/70 border border-amber-200/80 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 text-amber-800 border border-amber-200">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div className="text-xs sm:text-sm text-bodyText leading-relaxed flex-1">
              <strong className="text-navy font-semibold">Emergency Notice:</strong> Routine outpatient consultations and website enquiries are not intended for acute emergency situations. If your child exhibits severe breathing distress, seizures, loss of consciousness, or severe dehydration, seek immediate hospital emergency care.
            </div>
            <a
              href="tel:112"
              className="text-xs font-bold text-amber-900 underline shrink-0 whitespace-nowrap hover:text-navy transition-colors"
            >
              Emergency Care Advice
            </a>
          </div>
        </div>
      </section>

      {/* What Parents Can Expect During Consultations */}
      <section className="py-16 bg-white border-t border-borderSubtle/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold text-brandBlue uppercase tracking-wider">
              Consultation Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-2 font-heading">
              How Consultations Work
            </h2>
            <p className="text-xs sm:text-sm text-bodyText-muted mt-2">
              Clear steps designed to ensure you get the most out of your visit with Dr. Shikha Gupta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-borderSubtle bg-white shadow-soft">
              <span className="text-xs font-bold text-brandBlue bg-brandBlue-soft px-2.5 py-1 rounded-full inline-block mb-3 font-mono">
                Step 01
              </span>
              <h3 className="font-bold text-navy text-base sm:text-lg mb-2 font-heading">
                Listen & Understand
              </h3>
              <p className="text-xs sm:text-sm text-bodyText-muted leading-relaxed">
                We begin by listening to your child&apos;s history, current symptoms, feeding habits, and your questions as a parent.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-borderSubtle bg-white shadow-soft">
              <span className="text-xs font-bold text-brandBlue bg-brandBlue-soft px-2.5 py-1 rounded-full inline-block mb-3 font-mono">
                Step 02
              </span>
              <h3 className="font-bold text-navy text-base sm:text-lg mb-2 font-heading">
                Gentle Examination
              </h3>
              <p className="text-xs sm:text-sm text-bodyText-muted leading-relaxed">
                A thorough, child-friendly physical examination, checking growth charts and vital signs in a calm atmosphere.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-borderSubtle bg-white shadow-soft">
              <span className="text-xs font-bold text-brandBlue bg-brandBlue-soft px-2.5 py-1 rounded-full inline-block mb-3 font-mono">
                Step 03
              </span>
              <h3 className="font-bold text-navy text-base sm:text-lg mb-2 font-heading">
                Actionable Plan
              </h3>
              <p className="text-xs sm:text-sm text-bodyText-muted leading-relaxed">
                Clear recommendations, age-appropriate guidance, rational prescription if indicated, and instructions on when to follow up.
              </p>
            </div>
          </div>

          {/* CTA Box */}
          <div className="mt-12 rounded-2xl bg-navy text-white p-8 sm:p-10 text-center space-y-4 shadow-card">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
              Ready to Discuss Your Child&apos;s Health?
            </h3>
            <p className="text-xs sm:text-sm text-white/80 max-w-xl mx-auto leading-relaxed">
              Schedule an in-person consultation at our Kamla Nagar clinic or call our desk with any routine questions.
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
                href={`tel:${clinicData.contact.phone}`}
                variant="secondary"
                className="rounded-full bg-white/10 hover:bg-white/20 text-white border-white/20 px-6 font-semibold text-xs"
              >
                <Phone className="w-4 h-4 mr-2 text-brandCyan-light" />
                <span>Call {clinicData.contact.phoneDisplay}</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
