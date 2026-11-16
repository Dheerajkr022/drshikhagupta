"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AlertCircle, Phone, Calendar, MessageSquare, Search, Sparkles, HelpCircle } from "lucide-react";
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

      <div className="bg-brandBlue-pale/40 border-b border-borderSubtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={[{ label: "Frequently Asked Questions" }]} />
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-brandBlue-pale/60 via-white to-white border-b border-borderSubtle/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-brandBlue-soft text-brandBlue text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Help & Information Center</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-navy leading-tight">
              Frequently Asked Questions.
            </h1>
            <p className="text-base sm:text-lg text-bodyText leading-relaxed">
              Find answers to common questions about clinic timings, booking procedures, vaccination reviews, well-baby visits, and what to bring to your consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Main FAQ Container */}
      <section className="py-16 bg-brandBlue-pale/30">
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
                className="w-full pl-12 pr-4 py-3.5 rounded-pill border border-borderSubtle bg-white text-sm text-bodyText placeholder:text-bodyText-subtle focus:border-brandBlue focus:ring-2 focus:ring-brandBlue/20 outline-none shadow-soft transition-all"
              />
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-1.5 rounded-pill text-xs font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? "bg-navy text-white shadow-soft"
                      : "bg-white text-bodyText hover:bg-brandBlue-pale border border-borderSubtle"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Emergency Safety Alert */}
          <div className="rounded-card bg-status-emergencyBg border border-status-emergency/20 p-5 flex items-start gap-3.5 text-xs sm:text-sm text-bodyText">
            <AlertCircle className="w-5 h-5 text-status-emergency shrink-0 mt-0.5" />
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
            <div className="bg-white rounded-card border border-borderSubtle p-8 text-center text-sm text-bodyText-muted shadow-soft">
              No matching questions found for &ldquo;{searchQuery}&rdquo;. Try another search term or browse by category.
            </div>
          )}

          {/* Bottom Help Box with Doctor Thumbnail */}
          <div className="rounded-[24px] bg-white border border-borderSubtle p-8 shadow-card flex flex-col sm:flex-row items-center gap-6">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-brandBlue/30 shrink-0">
              <Image
                src="/images/doctor/dr-shikha-gupta.jpg"
                alt="Dr. Shikha Gupta"
                fill
                sizes="64px"
                className="object-cover object-top"
              />
            </div>
            <div className="space-y-1 text-center sm:text-left flex-1">
              <h3 className="text-lg font-bold text-navy">
                Have a specific question about your child?
              </h3>
              <p className="text-xs sm:text-sm text-bodyText-muted">
                Our clinic receptionist is happy to assist you with consultation timings, vaccine stock enquiries, or booking guidance.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2.5 shrink-0">
              <Button href="/contact" variant="primary" className="rounded-pill px-5">
                <span>Contact Desk</span>
              </Button>
              <Button href={`tel:${clinicData.contact.phone}`} variant="outline" className="rounded-pill px-5">
                <Phone className="w-4 h-4 mr-1.5 text-brandBlue" />
                <span>Call Us</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
