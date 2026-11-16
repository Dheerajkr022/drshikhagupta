import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ExternalLink, ShieldCheck, Heart } from "lucide-react";
import { clinicData } from "@/data/clinic";
import { doctorData } from "@/data/doctor";
import { servicesData } from "@/data/services";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-16 pb-24 lg:pb-16 border-t border-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Clinic & Doctor Identity */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block bg-white p-2.5 rounded-element shadow-soft hover:opacity-95 transition-opacity"
            >
              <div className="relative h-11 w-44">
                <Image
                  src="/images/logo/logo.png"
                  alt="Dr. Shikha Gupta Logo"
                  fill
                  sizes="176px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-sm text-white/80 leading-relaxed">
              Thoughtful paediatric consultations in Kamla Nagar, North Delhi. Focusing on preventive care, infant milestones, immunisation, and supportive guidance for parents.
            </p>

            <div className="text-xs text-white/70 space-y-1 pt-1 border-t border-white/10">
              <p>• MBBS: VMMC & Safdarjung Hospital</p>
              <p>• MD Pediatrics: RML Hospital / PGIMER</p>
              <p>• Former Senior Resident, RML Hospital</p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brandCyan-light mb-4">
              Explore Website
            </h4>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Dr. Shikha Gupta
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  All Paediatric Services
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-white transition-colors">
                  Parent Reviews & Feedback
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Directions
                </Link>
              </li>
              <li>
                <Link href="/appointment" className="hover:text-white transition-colors font-semibold text-brandCyan-light">
                  Book an Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Paediatric Care Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brandCyan-light mb-4">
              Care Services
            </h4>
            <ul className="space-y-2 text-sm text-white/75">
              {servicesData.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Clinic Hours & Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brandCyan-light mb-4">
              Clinic & Consultation Hours
            </h4>

            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brandCyan-light shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-white">{clinicData.contact.addressLine1}</p>
                  <p className="text-xs text-white/80">{clinicData.contact.addressLine2}, {clinicData.contact.city} – {clinicData.contact.pincode}</p>
                  <a
                    href={clinicData.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-brandCyan-light hover:underline mt-1 font-medium"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brandCyan-light shrink-0 mt-1" aria-hidden="true" />
                <div className="text-xs space-y-0.5">
                  <p className="text-white font-medium">Morning: {clinicData.timings.weekdayMorning}</p>
                  <p className="text-white font-medium">Evening: {clinicData.timings.weekdayEvening}</p>
                  <p className="text-white/70">Sunday: {clinicData.timings.sunday}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-brandCyan-light shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${clinicData.contact.phone}`}
                  className="hover:text-white font-bold"
                >
                  {clinicData.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brandCyan-light shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${clinicData.contact.email}`}
                  className="hover:text-white break-all text-xs"
                >
                  {clinicData.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Medical Advisory Note */}
        <div className="py-6 border-b border-white/10 text-xs text-white/70 leading-relaxed flex items-start gap-3">
          <ShieldCheck className="w-4 h-4 text-brandCyan-light shrink-0 mt-0.5" />
          <p>
            <strong className="text-white">Medical Disclaimer:</strong> Information published on this website is for general educational and enquiry purposes only and does not replace an in-person clinical assessment by a registered paediatrician. In case of acute breathing distress, seizures, or emergencies, visit the nearest hospital emergency casualty immediately.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Privacy */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>
            © {currentYear} {clinicData.clinicName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy & Data Notice
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Clinic Location
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
