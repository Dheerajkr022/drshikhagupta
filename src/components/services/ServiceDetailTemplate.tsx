import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Phone,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  FileText,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { ServiceDetail } from "@/types";
import { clinicData } from "@/data/clinic";
import { faqsData } from "@/data/faqs";
import { servicesData } from "@/data/services";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { AppointmentForm } from "@/components/forms/AppointmentForm";

interface ServiceDetailTemplateProps {
  service: ServiceDetail;
}

export function ServiceDetailTemplate({ service }: ServiceDetailTemplateProps) {
  const relatedFaqs = faqsData.filter((f) => service.faqIds.includes(f.id));
  const otherServices = servicesData.filter((s) => s.id !== service.id).slice(0, 3);

  const whatsappUrl = `https://wa.me/${clinicData.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hello Dr. Shikha Gupta's Clinic, I have a question regarding ${service.title}.`
  )}`;

  return (
    <>
      {/* Breadcrumbs Navigation */}
      <div className="bg-surface-muted/60 border-b border-borderSubtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
          />
        </div>
      </div>

      {/* Visual Service Hero with Photography */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-16 border-b border-borderSubtle/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block text-xs font-semibold text-brandBlue uppercase tracking-wider">
                {service.eyebrow}
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-navy leading-tight font-heading">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-bodyText leading-relaxed">
                {service.leadParagraph}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button
                  href="/appointment"
                  variant="primary"
                  className="rounded-full bg-brandBlue hover:bg-brandBlue-hover text-white shadow-soft font-semibold text-xs px-6"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Book this Consultation</span>
                </Button>
                <Button
                  href={whatsappUrl}
                  variant="secondary"
                  className="rounded-full bg-emerald-600 text-white hover:bg-emerald-700 border-none px-5 shadow-soft font-semibold text-xs"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  <span>WhatsApp Enquiry</span>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full rounded-2xl overflow-hidden border border-borderSubtle shadow-card bg-brandBlue-pale/50">
                <Image
                  src={service.image}
                  alt={`${service.title} consultation with Dr. Shikha Gupta at Sethi Multispecialty Clinic, Kamla Nagar, Delhi`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-medium text-white/80">Dr. Shikha Gupta&apos;s Clinic • Kamla Nagar</p>
                  <p className="text-sm font-bold font-heading">{service.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 bg-surface-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content Body */}
            <div className="lg:col-span-7 space-y-10">
              {/* Detailed Overview */}
              <div className="bg-white rounded-2xl border border-borderSubtle p-6 sm:p-8 shadow-soft space-y-4">
                <h2 className="text-2xl font-bold text-navy font-heading">
                  About this Consultation
                </h2>
                <div className="space-y-4 text-base text-bodyText leading-relaxed">
                  {service.detailedContent.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              {/* What We Cover */}
              <div className="bg-white rounded-2xl border border-borderSubtle p-6 sm:p-8 shadow-soft space-y-4">
                <h3 className="text-xl font-bold text-navy font-heading">
                  What We Cover During the Visit
                </h3>
                <ul className="space-y-3">
                  {service.whatWeCover.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-bodyText">
                      <span className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who It Is For */}
              <div className="bg-white rounded-2xl border border-borderSubtle p-6 sm:p-8 shadow-soft space-y-4">
                <h3 className="text-xl font-bold text-navy font-heading">
                  Who Can Benefit from this Visit
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.whoItIsFor.map((item, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl border border-borderSubtle bg-surface-muted/60 text-xs sm:text-sm text-bodyText leading-relaxed"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* What Parents Should Bring */}
              <div className="bg-white rounded-2xl border border-borderSubtle p-6 sm:p-8 shadow-soft space-y-4">
                <h3 className="text-xl font-bold text-navy font-heading flex items-center gap-2">
                  <FileText className="w-5 h-5 text-brandBlue" />
                  <span>What to Bring to Your Consultation</span>
                </h3>
                <div className="bg-surface-muted/60 rounded-xl border border-borderSubtle/60 p-5">
                  <ul className="space-y-2.5 text-xs sm:text-sm text-bodyText">
                    {service.whatParentsShouldBring.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brandBlue mt-2 shrink-0" />
                        <span className="leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Important Medical / Scope Notice */}
              {service.importantNotice && (
                <div className="rounded-2xl bg-amber-50/70 border border-amber-200/80 p-5 text-xs sm:text-sm text-bodyText flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold text-navy">Important Notice:</strong>
                    <p className="mt-1 leading-relaxed text-bodyText-muted">
                      {service.importantNotice}
                    </p>
                  </div>
                </div>
              )}

              {/* Related FAQs if any */}
              {relatedFaqs.length > 0 && (
                <div className="bg-white rounded-2xl border border-borderSubtle p-6 sm:p-8 shadow-soft space-y-4">
                  <h3 className="text-xl font-bold text-navy font-heading flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-brandBlue" />
                    <span>Frequently Asked Questions</span>
                  </h3>
                  <Accordion
                    items={relatedFaqs.map((f) => ({
                      id: f.id,
                      title: f.question,
                      content: f.answer,
                    }))}
                  />
                </div>
              )}
            </div>

            {/* Right Sticky Sidebar: Quick Booking Form & Actions */}
            <div className="lg:col-span-5 space-y-6">
              <div className="sticky top-24 space-y-6">
                <AppointmentForm initialServiceId={service.id} />

                {/* Direct Contact Options */}
                <div className="bg-white rounded-2xl border border-borderSubtle p-6 space-y-4 shadow-soft">
                  <h4 className="font-bold text-navy text-xs uppercase tracking-wider font-heading">
                    Need Direct Assistance?
                  </h4>
                  <div className="space-y-2.5">
                    <Button
                      href={`tel:${clinicData.contact.phone}`}
                      variant="outline"
                      className="w-full justify-center bg-white border-borderSubtle text-navy hover:text-brandBlue rounded-full text-xs font-semibold"
                    >
                      <Phone className="w-3.5 h-3.5 mr-2 text-brandBlue" />
                      <span>Call {clinicData.contact.phoneDisplay}</span>
                    </Button>

                    <Button
                      href={whatsappUrl}
                      variant="secondary"
                      className="w-full justify-center bg-emerald-600 text-white hover:bg-emerald-700 border-none rounded-full text-xs font-semibold shadow-soft"
                    >
                      <MessageSquare className="w-3.5 h-3.5 mr-2" />
                      <span>WhatsApp Reception</span>
                    </Button>
                  </div>

                  <p className="text-[11px] text-bodyText-muted text-center pt-1 border-t border-borderSubtle/60">
                    Mon–Sat: 10:30 AM–12:30 PM & 6:00 PM–8:30 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Other Services */}
      <section className="py-14 bg-white border-t border-borderSubtle/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-navy font-heading">
              Explore Other Paediatric Services
            </h3>
            <Link
              href="/services"
              className="text-xs font-bold text-brandBlue hover:text-navy inline-flex items-center gap-1 group"
            >
              <span>View all 7 services</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <div
                key={s.id}
                className="bg-white rounded-2xl border border-borderSubtle overflow-hidden hover:shadow-card hover:border-brandBlue/30 transition-all flex flex-col justify-between shadow-soft"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-brandBlue-pale">
                  <Image
                    src={s.image}
                    alt={`${s.title} - Dr. Shikha Gupta, Paediatrician in Kamla Nagar`}
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                  <p className="absolute bottom-2.5 left-3.5 right-3.5 text-xs font-bold text-white truncate font-heading">
                    {s.title}
                  </p>
                </div>
                <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-bodyText-muted line-clamp-2 leading-relaxed">
                    {s.shortDescription}
                  </p>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-xs font-bold text-brandBlue hover:text-navy inline-flex items-center gap-1 pt-2 group"
                  >
                    <span>Read clinical details</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
