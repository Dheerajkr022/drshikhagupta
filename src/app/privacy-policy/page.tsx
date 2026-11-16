import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, EyeOff, FileText, CheckCircle2 } from "lucide-react";
import { clinicData } from "@/data/clinic";
import { constructMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy & Patient Data Notice | Dr. Shikha Gupta",
  description:
    "Read the privacy notice for Dr. Shikha Gupta's Child Clinic, explaining how enquiry information is collected, protected, and used in accordance with the Digital Personal Data Protection Act (DPDP), 2023.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="bg-surface-muted/60 border-b border-borderSubtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
        </div>
      </div>

      <div className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-3 border-b border-borderSubtle/70 pb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-brandBlue">
              Data Protection & Confidentiality
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight font-heading">
              Privacy Policy & Healthcare Data Notice
            </h1>
            <p className="text-xs sm:text-sm text-bodyText-muted">
              Last updated: November 2026 • Compliant with Indian healthcare privacy practices and the Digital Personal Data Protection Act (DPDP), 2023.
            </p>
          </div>

          {/* Core Principles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-surface-muted/60 border border-borderSubtle">
              <Lock className="w-5 h-5 text-brandBlue mb-2" />
              <h3 className="font-bold text-navy text-sm mb-1 font-heading">Minimal Collection</h3>
              <p className="text-xs text-bodyText-muted leading-relaxed">
                We only collect basic contact information necessary to schedule and coordinate your visit.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-muted/60 border border-borderSubtle">
              <EyeOff className="w-5 h-5 text-brandBlue mb-2" />
              <h3 className="font-bold text-navy text-sm mb-1 font-heading">No Ad Trackers</h3>
              <p className="text-xs text-bodyText-muted leading-relaxed">
                We do not sell data or feed parent/child enquiry information into advertising pixels or data brokers.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-muted/60 border border-borderSubtle">
              <ShieldCheck className="w-5 h-5 text-brandBlue mb-2" />
              <h3 className="font-bold text-navy text-sm mb-1 font-heading">Confidentiality</h3>
              <p className="text-xs text-bodyText-muted leading-relaxed">
                Patient records and consultation histories remain strictly between doctor and caregiver.
              </p>
            </div>
          </div>

          <div className="space-y-8 text-sm sm:text-base text-bodyText leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-navy font-heading">1. Information We Collect</h2>
              <p>
                When you interact with our website to request an appointment or make an enquiry, we collect the following minimal details:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-bodyText-muted">
                <li>Parent or guardian&apos;s name</li>
                <li>Contact telephone number / mobile number</li>
                <li>Email address (optional)</li>
                <li>Child&apos;s age or month (optional, for age-appropriate service coordination)</li>
                <li>Care area or reason for enquiry (e.g. well-baby checkup, vaccination guidance)</li>
                <li>Brief administrative notes provided voluntarily by the user</li>
              </ul>
              <div className="text-xs bg-amber-50/70 border border-amber-200/80 p-4 rounded-xl text-bodyText leading-relaxed">
                <strong className="text-navy font-semibold">Important Notice:</strong> Please do not submit confidential medical reports, hospital discharge files, or detailed clinical histories through general website forms. Clinical records should be presented in person at the clinic or via doctor-approved secure consultation channels.
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-navy font-heading">2. Purpose of Processing</h2>
              <p>The information submitted through this website is used solely to:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-bodyText-muted">
                <li>Contact you to confirm doctor availability and allocate an appointment slot</li>
                <li>Provide requested information regarding clinic timings and services</li>
                <li>Send logistical reminders or updates regarding scheduled clinic visits</li>
              </ul>
              <p className="text-xs sm:text-sm text-bodyText-muted">We do not use your contact information for commercial marketing campaigns, unsolicited automated calls, or unrelated marketing emails.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-navy font-heading">3. Information Security & Retention</h2>
              <p>
                All data transmission on this website is encrypted using industry-standard Transport Layer Security (HTTPS). Access to submitted enquiries is restricted exclusively to authorized clinic staff responsible for appointment scheduling.
              </p>
              <p className="text-xs sm:text-sm text-bodyText-muted">
                Enquiry details are retained only for the duration necessary to address your medical inquiry or appointment coordination, after which administrative records are periodically pruned.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-navy font-heading">4. Contact Clinic Information Officer</h2>
              <p>
                If you have questions regarding this notice or wish to have your submitted enquiry contact details deleted from our scheduling log, please contact us at:
              </p>
              <div className="bg-surface-muted/60 p-4 rounded-xl border border-borderSubtle text-xs sm:text-sm space-y-1">
                <p className="font-bold text-navy font-heading">Sethi Multispecialty Clinic</p>
                <p>Attention: Administrative Desk / Dr. Shikha Gupta</p>
                <p>{clinicData.contact.fullAddress}</p>
                <p>Phone: {clinicData.contact.phoneDisplay}</p>
                <p>Email: {clinicData.contact.email}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
