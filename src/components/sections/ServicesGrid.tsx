import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Baby, Syringe, CheckCircle2, ShieldCheck } from "lucide-react";
import { servicesData } from "@/data/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Button } from "@/components/ui/Button";

export function ServicesGrid() {
  const featuredServices = servicesData.slice(0, 2);
  const remainingServices = servicesData.slice(2);

  return (
    <section className="py-16 sm:py-24 bg-surface-muted/50 border-b border-borderSubtle/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-brandBlue uppercase tracking-wider">
              Consultant Paediatric Care • Kamla Nagar, Delhi
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight mt-3 font-heading">
              Dedicated Paediatric Care Areas for Every Stage of Childhood.
            </h2>
            <p className="text-base sm:text-lg text-bodyText mt-3 leading-relaxed">
              From routine newborn evaluations and WHO growth tracking to IAP immunisation schedules and acute sickness management, Dr. Shikha Gupta provides attentive, evidence-based care tailored to your child.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button
              href="/services"
              variant="outline"
              size="md"
              className="bg-white border-borderSubtle text-navy hover:text-brandBlue hover:border-brandBlue rounded-full shadow-soft font-semibold text-xs"
            >
              <span>Explore All 7 Care Areas</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </div>
        </div>

        {/* Primary Cornerstone Services (Featured 2-Column Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
          {featuredServices.map((service, idx) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group relative flex flex-col md:flex-row rounded-2xl overflow-hidden border border-borderSubtle hover:border-brandBlue/40 bg-white shadow-card hover:shadow-xl transition-all duration-300"
            >
              {/* Photo Side */}
              <div className="relative md:w-5/12 aspect-[16/10] md:aspect-auto min-h-[220px] overflow-hidden bg-brandBlue-pale/60 shrink-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent md:hidden" />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-semibold text-navy shadow-soft border border-white/60">
                    {idx === 0 ? (
                      <Baby className="w-3.5 h-3.5 text-brandBlue shrink-0" />
                    ) : (
                      <Syringe className="w-3.5 h-3.5 text-brandBlue shrink-0" />
                    )}
                    <span>{idx === 0 ? "Foundational Care" : "Preventive Protection"}</span>
                  </span>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-6 md:w-7/12 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[11px] font-semibold text-brandBlue uppercase tracking-wider">
                    {service.eyebrow}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-navy group-hover:text-brandBlue transition-colors font-heading mt-1 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-bodyText mt-2 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-3 mt-3 border-t border-borderSubtle/60">
                    {(service.cardHighlights || service.whatWeCover.slice(0, 2)).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-bodyText-muted">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-semibold text-brandBlue group-hover:text-navy transition-colors">
                  <span>View clinical consultation details</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Secondary Specialized Services (Balanced 3-Column Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {remainingServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom Clinical Guidance Banner */}
        <div className="mt-12 rounded-2xl bg-white border border-borderSubtle p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-soft">
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-brandBlue">
              <ShieldCheck className="w-4 h-4 text-brandBlue" />
              <span>Personalised Paediatric Consultations</span>
            </div>
            <h3 className="font-bold text-navy text-base sm:text-lg font-heading">
              Not sure which consultation is right for your child?
            </h3>
            <p className="text-xs sm:text-sm text-bodyText-muted max-w-xl">
              Contact our clinic reception desk or discuss your child&apos;s symptoms directly with Dr. Shikha Gupta at Sethi Multispecialty Clinic, Bhatia Chowk, Kamla Nagar.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button
              href="/appointment"
              variant="primary"
              size="md"
              className="rounded-full bg-brandBlue hover:bg-brandBlue-hover text-white shadow-soft font-semibold text-xs px-5"
            >
              <Calendar className="w-4 h-4 mr-2" />
              <span>Schedule a Visit</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
