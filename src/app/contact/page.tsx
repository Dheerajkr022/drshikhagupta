import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  MessageSquare,
  Navigation,
  ShieldCheck,
  Train,
} from "lucide-react";
import { clinicData } from "@/data/clinic";
import { doctorData } from "@/data/doctor";
import { constructMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = constructMetadata({
  title: "Contact Dr. Shikha Gupta | Child Clinic in Kamla Nagar, Delhi",
  description:
    "Clinic address, consultation hours, direct phone number (+91 99586 83094), and transit directions for Dr. Shikha Gupta at Sethi Multispecialty Clinic, Bhatia Chowk, Kamla Nagar, Delhi.",
  path: "/contact",
});

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${clinicData.contact.whatsappNumber}?text=${encodeURIComponent(
    clinicData.contact.whatsappPrefilledMessage
  )}`;

  return (
    <>
      <div className="bg-surface-muted/60 border-b border-borderSubtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={[{ label: "Contact & Location" }]} />
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-12 sm:py-16 bg-white border-b border-borderSubtle/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold text-brandBlue uppercase tracking-wider">
              Clinic Reach & Consultation Desk • Kamla Nagar, Delhi
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-navy leading-tight font-heading">
              Contact Dr. Shikha Gupta&apos;s Clinic in Kamla Nagar.
            </h1>
            <p className="text-base sm:text-lg text-bodyText leading-relaxed">
              Find our exact address at Bhatia Chowk, consultation hours, direct phone numbers, and WhatsApp links. Conveniently accessible for families across Kamla Nagar, Shakti Nagar, Roop Nagar, and Civil Lines.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 bg-surface-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Contact & Timing Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Doctor Card */}
              <div className="bg-white rounded-2xl border border-borderSubtle p-5 shadow-soft flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border border-brandBlue/20 shrink-0">
                  <Image
                    src="/images/doctor/dr-shikha-gupta.jpg"
                    alt="Dr. Shikha Gupta, Consultant Paediatrician at Sethi Multispecialty Clinic, Kamla Nagar, Delhi"
                    fill
                    sizes="56px"
                    className="object-cover object-center"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-base font-heading">{doctorData.name}</h3>
                  <p className="text-xs text-brandBlue font-semibold">{doctorData.credentials}</p>
                  <p className="text-xs text-bodyText-muted">Consultant Paediatrician</p>
                </div>
              </div>

              {/* Direct Actions Card */}
              <div className="bg-white rounded-2xl border border-borderSubtle p-6 space-y-4 shadow-soft">
                <h2 className="text-sm font-bold uppercase tracking-wider text-navy font-heading">
                  Direct Communication Channels
                </h2>

                <div className="space-y-3">
                  <a
                    href={`tel:${clinicData.contact.phone}`}
                    className="flex items-center gap-3.5 p-3.5 rounded-xl bg-surface-muted/60 border border-borderSubtle/60 hover:border-brandBlue/40 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brandBlue-soft flex items-center justify-center text-brandBlue shrink-0 group-hover:bg-brandBlue group-hover:text-white transition-colors border border-brandBlue/15">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-bodyText-muted font-medium">Telephone / Reception</p>
                      <p className="text-sm font-bold text-navy group-hover:text-brandBlue transition-colors">
                        {clinicData.contact.phoneDisplay}
                      </p>
                    </div>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3.5 rounded-xl bg-surface-muted/60 border border-borderSubtle/60 hover:border-emerald-500/40 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors border border-emerald-200">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-bodyText-muted font-medium">WhatsApp Message</p>
                      <p className="text-sm font-bold text-navy group-hover:text-emerald-700 transition-colors">
                        Chat directly on WhatsApp
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${clinicData.contact.email}`}
                    className="flex items-center gap-3.5 p-3.5 rounded-xl bg-surface-muted/60 border border-borderSubtle/60 hover:border-brandBlue/40 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brandBlue-soft flex items-center justify-center text-brandBlue shrink-0 group-hover:bg-brandBlue group-hover:text-white transition-colors border border-brandBlue/15">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] text-bodyText-muted font-medium">Email Enquiries</p>
                      <p className="text-sm font-bold text-navy truncate group-hover:text-brandBlue transition-colors">
                        {clinicData.contact.email}
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Consultation Timings */}
              <div className="bg-white rounded-2xl border border-borderSubtle p-6 space-y-4 shadow-soft">
                <div className="flex items-center gap-2.5 text-navy font-bold text-base font-heading">
                  <Clock className="w-4 h-4 text-brandBlue" />
                  <h3>Consultation Hours</h3>
                </div>

                <div className="space-y-2 text-xs sm:text-sm divide-y divide-borderSubtle/70">
                  <div className="py-2 flex justify-between items-center">
                    <span className="font-medium text-navy">Morning (Mon–Sat):</span>
                    <span className="text-bodyText font-semibold">{clinicData.timings.weekdayMorning}</span>
                  </div>
                  <div className="py-2 flex justify-between items-center">
                    <span className="font-medium text-navy">Evening (Mon–Sat):</span>
                    <span className="text-bodyText font-semibold">{clinicData.timings.weekdayEvening}</span>
                  </div>
                  <div className="py-2 flex justify-between items-center text-bodyText-muted">
                    <span>Sunday:</span>
                    <span className="italic">{clinicData.timings.sunday}</span>
                  </div>
                </div>

                <p className="text-xs text-bodyText-muted bg-surface-muted p-3 rounded-xl leading-relaxed border border-borderSubtle/60">
                  Calling ahead to confirm doctor availability or slot reservation is strongly recommended.
                </p>
              </div>

              {/* Address & Landmark */}
              <div className="bg-white rounded-2xl border border-borderSubtle p-6 space-y-4 shadow-soft">
                <div className="flex items-center gap-2.5 text-navy font-bold text-base font-heading">
                  <MapPin className="w-4 h-4 text-brandBlue" />
                  <h3>Clinic Location</h3>
                </div>

                <div className="text-xs sm:text-sm text-bodyText leading-relaxed select-text space-y-0.5">
                  <p className="font-bold text-navy">{clinicData.clinicName}</p>
                  <p>{clinicData.contact.addressLine1}</p>
                  <p>{clinicData.contact.addressLine2}</p>
                  <p>{clinicData.contact.city} – {clinicData.contact.pincode}</p>
                  <p className="text-xs text-bodyText-muted pt-1">
                    <strong className="text-navy font-semibold">Landmark:</strong> Situated right at Bhatia Chowk, Kamla Nagar.
                  </p>
                </div>

                <div className="pt-2">
                  <Button
                    href={clinicData.contact.googleMapsUrl}
                    variant="outline"
                    className="w-full justify-center rounded-full bg-surface-muted hover:bg-surface border-borderSubtle text-navy font-semibold text-xs"
                  >
                    <Navigation className="w-3.5 h-3.5 mr-2 text-brandBlue" />
                    <span>Open in Google Maps</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Enquiry Form & Facility Image */}
            <div className="lg:col-span-7 space-y-6">
              <ContactForm />

              {/* Clinic Interior Image Card */}
              <div className="relative rounded-2xl overflow-hidden border border-borderSubtle aspect-[16/9] w-full bg-brandBlue-pale shadow-soft">
                <Image
                  src="/images/clinic/clinic-interior.jpg"
                  alt="Sethi Multispecialty Clinic Interior"
                  fill
                  sizes="600px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-semibold text-brandCyan-light">Kamla Nagar Consultation Facility</p>
                  <p className="font-bold text-sm font-heading">Clean, Child-Friendly & Well-Equipped</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
