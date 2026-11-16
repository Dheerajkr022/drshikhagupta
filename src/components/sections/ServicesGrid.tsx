import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Calendar } from "lucide-react";
import { servicesData } from "@/data/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function ServicesGrid() {
  return (
    <section className="py-16 sm:py-24 bg-brandBlue-pale/40 border-y border-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-brandBlue-soft text-brandBlue text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dedicated Paediatric Care Areas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
              Care for the Little Things That Matter.
            </h2>
            <p className="text-base sm:text-lg text-bodyText-muted mt-2 max-w-2xl leading-relaxed">
              Explore our doctor-led services, from routine newborn check-ups and national immunisation guidelines to growth evaluation and compassionate parental counselling.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button href="/services" variant="outline" className="bg-white">
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </div>

        {/* Services Grid with Real Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              featured={index === 0 || index === 1}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 rounded-card bg-white border border-borderSubtle p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-soft">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-bold text-navy text-lg">
              Not sure which consultation is right for your child?
            </h3>
            <p className="text-xs sm:text-sm text-bodyText-muted">
              Call our reception desk or send a quick WhatsApp message to discuss your child&apos;s symptoms.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button href="/appointment" variant="primary" size="md">
              <Calendar className="w-4 h-4 mr-1.5" />
              <span>Book Consultation</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
