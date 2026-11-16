"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AlertCircle, Phone, Calendar, Search, HelpCircle } from "lucide-react";
import { faqsData } from "@/data/faqs";
import { clinicData } from "@/data/clinic";
import { doctorData } from "@/data/doctor";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { getFaqStructuredData } from "@/lib/structured-data";

export default function FAQsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "clinic", label: "Clinic & Timings" },
    { id: "services", label: "Services & Care" },
    { id: "vaccination", label: "Vaccination" },
    { id: "appointments", label: "Appointments" },
    { id: "urgent", label: "Urgent Concerns" },
  ];

  const filteredFaqs = faqsData.filter((faq) => {
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const structuredData = getFaqStructuredData(faqsData);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="bg-surface-muted/60 border-b border-borderSubtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={[{ label: "Frequently Asked Questions" }]} />
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-12 sm:py-16 bg-white border-b border-borderSubtle/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold text-brandBlue uppercase tracking-wider">
              Parent Help & Guidance Center • Kamla Nagar
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-navy leading-tight font-heading">
              Frequently Asked Questions.
            </h1>
            <p className="text-base sm:text-lg text-bodyText leading-relaxed">
              Find answers to common questions about clinic timings, booking procedures, vaccination reviews, well-baby visits, and what to bring to your consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Main FAQ Container */}
      <section className="py-16 bg-surface-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Search & Category Filter */}
          <div className="space-y-4">
            <div className="relative">
              <Search className="w-5 h-5 text-bodyText-muted absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by topic (e.g. vaccination, timings, newborn, records)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-full border border-borderSubtle bg-white text-sm text-bodyText placeholder:text-bodyText-muted focus:border-brandBlue focus:ring-2 focus:ring-brandBlue/20 outline-none shadow-soft transition-all"
              />
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? "bg-brandBlue text-white shadow-soft"
                      : "bg-white text-bodyText hover:bg-surface-muted border border-borderSubtle"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Emergency Safety Alert */}
          <div className="rounded-2xl bg-amber-50/70 border border-amber-200/80 p-5 flex items-start gap-3.5 text-xs sm:text-sm text-bodyText">
            <AlertCircle className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
            <div>
              <strong className="text-navy font-semibold">In Case of Medical Emergency:</strong>
              <p className="mt-0.5 text-bodyText-muted">
                Do not wait for website replies if your child has severe difficulty breathing, seizures, unresponsiveness, or heavy bleeding. Seek immediate emergency room attention at the nearest hospital casualty.
              </p>
            </div>
          </div>

          {/* Accordion list */}
          {filteredFaqs.length > 0 ? (
            <Accordion
              items={filteredFaqs.map((f) => ({
                id: f.id,
                title: f.question,
                content: f.answer,
              }))}
              defaultOpenId={filteredFaqs[0]?.id}
            />
          ) : (
            <div className="bg-white rounded-2xl border border-borderSubtle p-8 text-center text-sm text-bodyText-muted shadow-soft">
              No matching questions found for &ldquo;{searchQuery}&rdquo;. Try another search term or browse by category.
            </div>
          )}

          {/* Bottom Help Box with Doctor Thumbnail */}
          <div className="rounded-2xl bg-white border border-borderSubtle p-8 shadow-card flex flex-col sm:flex-row items-center gap-6">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border border-brandBlue/20 shrink-0">
              <Image
                src="/images/doctor/dr-shikha-gupta.jpg"
                alt="Dr. Shikha Gupta, Consultant Paediatrician in Kamla Nagar, Delhi"
                fill
                sizes="56px"
                className="object-cover object-center"
              />
            </div>
            <div className="space-y-1 text-center sm:text-left flex-1">
              <h3 className="text-base sm:text-lg font-bold text-navy font-heading">
                Have a specific question about your child?
              </h3>
              <p className="text-xs sm:text-sm text-bodyText-muted">
                Our clinic receptionist is happy to assist you with consultation timings, vaccine stock enquiries, or booking guidance.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2.5 shrink-0">
              <Button
                href="/contact"
                variant="primary"
                className="rounded-full bg-brandBlue hover:bg-brandBlue-hover text-white shadow-soft font-semibold text-xs px-5"
              >
                <span>Contact Desk</span>
              </Button>
              <Button
                href={`tel:${clinicData.contact.phone}`}
                variant="outline"
                className="rounded-full bg-white border-borderSubtle text-navy hover:text-brandBlue hover:border-brandBlue shadow-soft font-semibold text-xs px-5"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5 text-brandBlue" />
                <span>Call Us</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
