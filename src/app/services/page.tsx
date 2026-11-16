import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Phone,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { clinicData } from "@/data/clinic";
import { constructMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = constructMetadata({
  title: "Paediatric Services | Dr. Shikha Gupta, Kamla Nagar",
  description:
    "Explore well-baby care, child vaccination, growth and development monitoring, childhood illness consultations, adolescent health, and parent counselling in North Delhi.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <div className="bg-brandBlue-pale/40 border-b border-borderSubtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={[{ label: "Services" }]} />
        </div>
      </div>

      {/* Header */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-brandBlue-pale/60 via-white to-white border-b border-borderSubtle/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-brandBlue-soft text-brandBlue text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Comprehensive Paediatric Clinical Practice</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-navy leading-tight">
              Paediatric Care for Every Stage of Childhood.
            </h1>
            <p className="text-base sm:text-lg text-bodyText leading-relaxed">
              From the earliest newborn milestones and vaccination guidance to common childhood illnesses and adolescent wellbeing, each service provides dedicated, unhurried paediatric care.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid with Real Photography */}
      <section className="py-16 bg-brandBlue-pale/30">
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
          <div className="mt-12 rounded-card bg-status-emergencyBg border border-status-emergency/20 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-status-emergency/10 flex items-center justify-center shrink-0 text-status-emergency">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div className="text-xs sm:text-sm text-bodyText leading-relaxed flex-1">
              <strong className="text-navy font-semibold">Emergency Notice:</strong> Routine outpatient consultations and website enquiries are not intended for acute emergency situations. If your child exhibits severe breathing distress, seizures, loss of consciousness, or severe dehydration, seek immediate hospital emergency care.
            </div>
            <a
              href="tel:112"
              className="text-xs font-bold text-status-emergency underline shrink-0 whitespace-nowrap"
            >
              Emergency Care Advice
            </a>
          </div>
        </div>
      </section>

      {/* What Parents Can Expect During Consultations */}
      <section className="py-16 bg-white border-t border-borderSubtle">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Consultation Standards"
            title="How Consultations Work"
            description="Clear steps designed to ensure you get the most out of your visit with Dr. Shikha Gupta."
            className="mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-card border border-borderSubtle bg-white shadow-soft">
              <span className="text-xs font-bold text-white bg-brandBlue px-2.5 py-1 rounded-pill inline-block mb-3">
                Step 01
              </span>
              <h3 className="font-bold text-navy text-lg mb-2">Listen & Understand</h3>
              <p className="text-sm text-bodyText-muted leading-relaxed">
                We begin by listening to your child&apos;s history, current symptoms, feeding habits, and your questions as a parent.
              </p>
            </div>

            <div className="p-6 rounded-card border border-borderSubtle bg-white shadow-soft">
              <span className="text-xs font-bold text-white bg-brandBlue px-2.5 py-1 rounded-pill inline-block mb-3">
                Step 02
              </span>
              <h3 className="font-bold text-navy text-lg mb-2">Gentle Examination</h3>
              <p className="text-sm text-bodyText-muted leading-relaxed">
                A thorough, child-friendly physical examination, checking growth charts and vital signs in a calm atmosphere.
              </p>
            </div>

            <div className="p-6 rounded-card border border-borderSubtle bg-white shadow-soft">
              <span className="text-xs font-bold text-white bg-brandBlue px-2.5 py-1 rounded-pill inline-block mb-3">
                Step 03
              </span>
              <h3 className="font-bold text-navy text-lg mb-2">Actionable Plan</h3>
              <p className="text-sm text-bodyText-muted leading-relaxed">
                Clear recommendations, age-appropriate guidance, rational prescription if indicated, and instructions on when to follow up.
              </p>
            </div>
          </div>

          {/* CTA Box */}
          <div className="mt-14 rounded-[24px] bg-gradient-to-r from-navy via-navy-light to-navy text-white p-8 sm:p-10 text-center space-y-4 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Ready to Discuss Your Child&apos;s Health?
            </h3>
            <p className="text-sm sm:text-base text-white/90 max-w-xl mx-auto leading-relaxed">
              Schedule an in-person consultation at our Kamla Nagar clinic or call our desk with any routine questions.
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
                href={`tel:${clinicData.contact.phone}`}
                variant="secondary"
                className="rounded-pill bg-white text-navy hover:bg-brandBlue-pale px-6"
              >
                <Phone className="w-4 h-4 mr-2 text-brandBlue" />
                <span>Call {clinicData.contact.phoneDisplay}</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
