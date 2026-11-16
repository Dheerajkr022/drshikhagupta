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
  Sparkles,
} from "lucide-react";
import { clinicData } from "@/data/clinic";
import { doctorData } from "@/data/doctor";
import { constructMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = constructMetadata({
  title: "Contact Dr. Shikha Gupta | Child Clinic, Kamla Nagar",
  description:
    "Find clinic address, confirmed timings, phone numbers (+91 99586 83094), WhatsApp link, and directions for Dr. Shikha Gupta's clinic in Kamla Nagar, Delhi.",
  path: "/contact",
});

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${clinicData.contact.whatsappNumber}?text=${encodeURIComponent(
    clinicData.contact.whatsappPrefilledMessage
  )}`;

  return (
    <>
      <div className="bg-brandBlue-pale/40 border-b border-borderSubtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={[{ label: "Contact & Location" }]} />
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-brandBlue-pale/60 via-white to-white border-b border-borderSubtle/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-brandBlue-soft text-brandBlue text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Clinic Reach & Consultation Desk</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-navy leading-tight">
              We&apos;re Here to Help You Take the Next Step.
            </h1>
            <p className="text-base sm:text-lg text-bodyText leading-relaxed">
              For appointment enquiries, clinic timings, or questions regarding our paediatric services, contact the clinic using the direct phone numbers or form below.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Contact & Timing Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Doctor Card */}
              <div className="bg-white rounded-card border border-borderSubtle p-5 shadow-soft flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-brandBlue/30 shrink-0">
                  <Image
                    src="/images/doctor/dr-shikha-gupta.jpg"
                    alt="Dr. Shikha Gupta"
                    fill
                    sizes="56px"
                    className="object-cover object-center"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-base">{doctorData.name}</h3>
                  <p className="text-xs text-brandBlue font-semibold">{doctorData.credentials}</p>
                  <p className="text-xs text-bodyText-muted">Consultant Paediatrician</p>
                </div>
              </div>

              {/* Direct Actions Card */}
              <div className="bg-brandBlue-pale/60 rounded-card border border-borderSubtle p-6 space-y-4">
                <h2 className="text-base font-bold text-navy">
                  Quick Communication Channels
                </h2>

                <div className="space-y-3">
                  <a
                    href={`tel:${clinicData.contact.phone}`}
                    className="flex items-center gap-3.5 p-3.5 rounded-card bg-white border border-borderSubtle hover:border-brandBlue/40 transition-colors group shadow-soft"
                  >
                    <div className="w-10 h-10 rounded-full bg-brandBlue-soft flex items-center justify-center text-brandBlue shrink-0 group-hover:bg-brandBlue group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
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
                    className="flex items-center gap-3.5 p-3.5 rounded-card bg-white border border-borderSubtle hover:border-emerald-500/40 transition-colors group shadow-soft"
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <MessageSquare className="w-5 h-5" />
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
                    className="flex items-center gap-3.5 p-3.5 rounded-card bg-white border border-borderSubtle hover:border-brandBlue/40 transition-colors group shadow-soft"
                  >
                    <div className="w-10 h-10 rounded-full bg-brandBlue-soft flex items-center justify-center text-brandBlue shrink-0 group-hover:bg-brandBlue group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
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
              <div className="bg-white rounded-card border border-borderSubtle p-6 space-y-4 shadow-soft">
                <div className="flex items-center gap-2.5 text-navy font-bold text-base">
                  <Clock className="w-5 h-5 text-brandBlue" />
                  <h3>Consultation Hours</h3>
                </div>

                <div className="space-y-2 text-xs sm:text-sm divide-y divide-borderSubtle">
                  <div className="py-2 flex justify-between items-center">
                    <span className="font-medium text-navy">Morning (Mon–Sat):</span>
                    <span className="text-bodyText font-semibold">10:30 AM – 12:30 PM</span>
                  </div>
                  <div className="py-2 flex justify-between items-center">
                    <span className="font-medium text-navy">Evening (Mon–Sat):</span>
                    <span className="text-bodyText font-semibold">6:00 PM – 8:30 PM</span>
                  </div>
                  <div className="py-2 flex justify-between items-center text-bodyText-muted">
                    <span>Sunday:</span>
                    <span className="italic">By prior appointment only</span>
                  </div>
                </div>

                <p className="text-xs text-bodyText-muted bg-brandBlue-pale/60 p-3 rounded-element leading-relaxed">
                  Calling ahead to confirm doctor availability or slot reservation is strongly recommended.
                </p>
              </div>

              {/* Address & Landmark */}
              <div className="bg-white rounded-card border border-borderSubtle p-6 space-y-4 shadow-soft">
                <div className="flex items-center gap-2.5 text-navy font-bold text-base">
                  <MapPin className="w-5 h-5 text-brandBlue" />
                  <h3>Clinic Location</h3>
                </div>

                <div className="text-xs sm:text-sm text-bodyText leading-relaxed select-text">
                  <p className="font-bold text-navy">{clinicData.clinicName}</p>
                  <p>{clinicData.contact.addressLine1}</p>
                  <p>{clinicData.contact.addressLine2}</p>
                  <p>{clinicData.contact.city} – {clinicData.contact.pincode}</p>
                  <p className="text-xs text-bodyText-muted mt-2">
                    Landmark: Situated at Bhatia Chowk, Kamla Nagar.
                  </p>
                </div>

                <div className="pt-2">
                  <Button
                    href={clinicData.contact.googleMapsUrl}
                    variant="outline"
                    className="w-full justify-center rounded-pill"
                  >
                    <Navigation className="w-4 h-4 mr-2 text-brandBlue" />
                    <span>Open in Google Maps</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Enquiry Form */}
            <div className="lg:col-span-7 space-y-6">
              <ContactForm />

              {/* Clinic Interior Image Card */}
              <div className="relative rounded-card overflow-hidden border-2 border-borderSubtle aspect-[16/9] w-full bg-brandBlue-pale shadow-soft">
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
                  <p className="font-bold text-sm">Clean, Child-Friendly & Well-Equipped</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
