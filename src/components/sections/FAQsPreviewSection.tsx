import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { faqsData } from "@/data/faqs";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQsPreviewSection() {
  // Select top 6 preview questions for the homepage
  const previewFaqs = faqsData.slice(0, 6).map((faq) => ({
    id: faq.id,
    title: faq.question,
    content: faq.answer,
  }));

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-borderSubtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Common Questions from Parents."
          description="Find quick answers regarding consultation timings, appointment requests, infant check-ups, and clinic visits."
          align="center"
          className="mb-12"
        />

        <Accordion items={previewFaqs} defaultOpenId={previewFaqs[0]?.id} />

        <div className="mt-8 text-center">
          <Link
            href="/faqs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brandBlue hover:text-navy transition-colors"
          >
            <span>Have more questions? View the complete FAQs directory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

