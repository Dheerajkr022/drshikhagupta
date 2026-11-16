import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Home,
  Calendar,
  MessageSquare,
  ArrowRight,
  AlertTriangle,
  Baby,
  Syringe,
  TrendingUp,
  Stethoscope,
  Compass,
} from "lucide-react";
import { clinicData } from "@/data/clinic";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Dr. Shikha Gupta Child Clinic",
  description:
    "The page you are looking for could not be found. Explore our paediatric services, book an appointment, or contact Dr. Shikha Gupta's clinic in Kamla Nagar, Delhi.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  const quickServices = [
    {
      title: "Well-Baby Care",
      href: "/services/well-baby-care",
      icon: <Baby className="w-4 h-4 text-brandBlue" />,
      desc: "Routine infant checks & feeding guidance",
    },
    {
      title: "Child Vaccination",
      href: "/services/vaccination",
      icon: <Syringe className="w-4 h-4 text-brandBlue" />,
      desc: "IAP-recommended immunization schedules",
    },
    {
      title: "Growth & Development",
      href: "/services/growth-development",
      icon: <TrendingUp className="w-4 h-4 text-brandBlue" />,
      desc: "WHO percentiles & motor milestone screening",
    },
    {
      title: "Childhood Illnesses",
      href: "/services/childhood-illness",
      icon: <Stethoscope className="w-4 h-4 text-brandBlue" />,
      desc: "Fever, cough, colds & rational medication",
    },
  ];

  const whatsappUrl = `https://wa.me/${clinicData.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello Dr. Shikha Gupta's Clinic, I was on your website and need some assistance."
  )}`;

  return (
    <div className="min-h-[80vh] flex flex-col justify-center bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full text-center space-y-10">
        {/* Clean 404 Badge & Heading */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-muted border border-borderSubtle text-brandBlue text-xs font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>Navigation Guide • 404 Error</span>
          </div>

          <div>
            <span className="text-7xl sm:text-8xl font-black tracking-tight text-navy select-none font-mono">
              404
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-navy tracking-tight font-heading">
            This Page Seems to Have Wandered Off.
          </h1>
          <p className="text-base sm:text-lg text-bodyText-muted max-w-xl mx-auto leading-relaxed">
            The page you are looking for may have been moved, updated, or does not exist. Don&apos;t worry—your child&apos;s healthcare journey is always close at hand.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
          <Button
            href="/"
            variant="primary"
            size="lg"
            className="rounded-full bg-brandBlue hover:bg-brandBlue-hover text-white shadow-soft font-semibold text-xs sm:text-sm px-6"
          >
            <Home className="w-4 h-4 mr-2" />
            <span>Back to Home</span>
          </Button>

          <Button
            href="/appointment"
            variant="outline"
            size="lg"
            className="rounded-full bg-white border-borderSubtle text-navy hover:text-brandBlue hover:border-brandBlue shadow-soft font-semibold text-xs sm:text-sm px-6"
          >
            <Calendar className="w-4 h-4 mr-2 text-brandBlue" />
            <span>Book Appointment</span>
          </Button>

          <Button
            href={whatsappUrl}
            variant="secondary"
            size="lg"
            className="rounded-full bg-emerald-600 text-white hover:bg-emerald-700 border-none shadow-soft font-semibold text-xs sm:text-sm px-6"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            <span>WhatsApp Enquiry</span>
          </Button>
        </div>

        {/* Popular Pediatric Services Links */}
        <div className="pt-8 border-t border-borderSubtle/70 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-navy font-heading">
            Looking for a specific paediatric service?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {quickServices.map((svc) => (
              <Link
                key={svc.title}
                href={svc.href}
                className="group p-4 rounded-2xl border border-borderSubtle bg-white hover:border-brandBlue/40 hover:shadow-card transition-all flex flex-col justify-between shadow-soft"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-brandBlue-soft flex items-center justify-center mb-2.5 group-hover:bg-brandBlue group-hover:text-white transition-colors border border-brandBlue/15">
                    {svc.icon}
                  </div>
                  <h3 className="text-sm font-bold text-navy group-hover:text-brandBlue transition-colors font-heading">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-bodyText-muted mt-1 leading-snug">
                    {svc.desc}
                  </p>
                </div>
                <div className="pt-3 flex items-center text-xs font-semibold text-brandBlue group-hover:translate-x-1 transition-transform">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Other Helpful Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-bodyText-muted">
          <span>Helpful shortcuts:</span>
          <Link href="/about" className="text-brandBlue hover:underline">
            About Dr. Shikha Gupta
          </Link>
          <span>•</span>
          <Link href="/reviews" className="text-brandBlue hover:underline">
            Parent Reviews (4.9 ★)
          </Link>
          <span>•</span>
          <Link href="/faqs" className="text-brandBlue hover:underline">
            Clinic FAQs
          </Link>
          <span>•</span>
          <Link href="/contact" className="text-brandBlue hover:underline">
            Location & Timings
          </Link>
        </div>

        {/* Emergency Medical Disclaimer */}
        <div className="max-w-2xl mx-auto rounded-xl bg-amber-50/70 border border-amber-200/80 p-4 text-xs text-amber-900 flex items-start gap-3 text-left">
          <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold text-navy">Urgent Medical Notice:</strong> If your child is facing an emergency (such as severe breathing distress, seizures, or acute dehydration), please do not wait. Call 112 or visit the nearest hospital casualty immediately.
          </div>
        </div>
      </div>
    </div>
  );
}
