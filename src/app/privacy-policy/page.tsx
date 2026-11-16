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
      <div className="bg-brandBlue-pale/40 border-b border-borderSubtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
        </div>
      </div>

      <div className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-3 border-b border-borderSubtle pb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-brandBlue">
              Data Protection & Confidentiality
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Privacy Policy & Healthcare Data Notice
            </h1>
            <p className="text-sm text-bodyText-muted">
              Last updated: November 2026 • Compliant with Indian healthcare privacy practices and the Digital Personal Data Protection Act (DPDP), 2023.
            </p>
          </div>

          {/* Core Principles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-element bg-brandBlue-pale/40 border border-borderSubtle">
              <Lock className="w-5 h-5 text-brandBlue mb-2" />
              <h3 className="font-bold text-navy text-sm mb-1">Minimal Collection</h3>
              <p className="text-xs text-bodyText-muted">
                We only collect basic contact information necessary to schedule and coordinate your visit.
              </p>
            </div>

            <div className="p-4 rounded-element bg-brandBlue-pale/40 border border-borderSubtle">
              <EyeOff className="w-5 h-5 text-brandBlue mb-2" />
              <h3 className="font-bold text-navy text-sm mb-1">No Ad Trackers</h3>
              <p className="text-xs text-bodyText-muted">
                We do not sell data or feed parent/child enquiry information into advertising pixels or data brokers.
              </p>
            </div>

            <div className="p-4 rounded-element bg-brandBlue-pale/40 border border-borderSubtle">
              <ShieldCheck className="w-5 h-5 text-brandBlue mb-2" />
              <h3 className="font-bold text-navy text-sm mb-1">Confidentiality</h3>
              <p className="text-xs text-bodyText-muted">
                Patient records and consultation histories remain strictly between doctor and caregiver.
              </p>
            </div>
          </div>

          <div className="space-y-8 text-sm sm:text-base text-bodyText leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-navy">1. Information We Collect</h2>
              <p>
                When you interact with our website to request an appointment or make an enquiry, we collect the following minimal details:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-bodyText-muted">
                <li>Parent or guardian&apos;s name</li>
                <li>Contact telephone number / mobile number</li>
                <li>Email address (optional)</li>
                <li>Child&apos;s age or month (optional, for age-appropriate service coordination)</li>
                <li>Care area or reason for enquiry (e.g. well-baby checkup, vaccination guidance)</li>
                <li>Brief administrative notes provided voluntarily by the user</li>
              </ul>
              <p className="text-xs bg-brandBlue-pale/60 p-3 rounded-element text-bodyText">
                <strong>Important Notice:</strong> Please do not submit confidential medical reports, hospital discharge files, or detailed clinical histories through general website forms. Clinical records should be presented in person at the clinic or via doctor-approved secure consultation channels.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-navy">2. Purpose of Processing</h2>
              <p>The information submitted through this website is used solely to:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-bodyText-muted">
                <li>Contact you to confirm doctor availability and allocate an appointment slot</li>
                <li>Provide requested information regarding clinic timings and services</li>
                <li>Send logistical reminders or updates regarding scheduled clinic visits</li>
              </ul>
              <p>We do not use your contact information for commercial marketing campaigns, unsolicited automated calls, or unrelated marketing emails.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-navy">3. Information Security & Retention</h2>
              <p>
                All data transmission on this website is encrypted using industry-standard Transport Layer Security (HTTPS). Access to submitted enquiries is restricted exclusively to authorized clinic staff responsible for appointment scheduling.
              </p>
              <p>
                General web enquiries that do not result in clinical consultations are periodically purged from temporary digital storage in accordance with standard clinic retention protocols.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-navy">4. Third-Party Sharing</h2>
              <p>
                We do not sell, rent, trade, or share your personal data with third-party advertising platforms, commercial data aggregators, or unauthorized external companies. Data is disclosed only if required by applicable Indian law, court order, or official health authority mandate.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-navy">5. Consent & Your Rights</h2>
              <p>
                Under the Digital Personal Data Protection Act, 2023, you have the right to request access to the personal data we hold about you, request corrections to inaccurate records, or withdraw your consent for contact. To exercise any of these rights, please contact our clinic desk directly.
              </p>
            </section>

            <section className="space-y-3 pt-4 border-t border-borderSubtle">
              <h2 className="text-xl font-bold text-navy">6. Contacting the Clinic Regarding Privacy</h2>
              <p>
                If you have questions or concerns regarding this privacy notice or how your information is handled, please reach out to us:
              </p>
              <div className="bg-brandBlue-pale/40 p-4 rounded-card border border-borderSubtle text-xs sm:text-sm text-bodyText space-y-1">
                <p><strong>Clinic:</strong> {clinicData.clinicName}</p>
                <p><strong>Address:</strong> {clinicData.contact.fullAddress}</p>
                <p><strong>Phone:</strong> {clinicData.contact.phoneDisplay}</p>
                <p><strong>Email:</strong> {clinicData.contact.email}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

