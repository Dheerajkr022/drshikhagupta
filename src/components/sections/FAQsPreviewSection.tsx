import React from "react";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import { faqsData } from "@/data/faqs";
import { Accordion } from "@/components/ui/Accordion";

export function FAQsPreviewSection() {
  // Select top 6 preview questions for the homepage
  const previewFaqs = faqsData.slice(0, 6).map((faq) => ({
    id: faq.id,
    title: faq.question,
    content: faq.answer,
  }));

  return (
    <section className="py-16 sm:py-24 bg-surface-muted/30 border-b border-borderSubtle/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-brandBlue uppercase tracking-wider">
            Parent Inquiries & Clinic Guidance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight mt-3 font-heading">
            Common Questions from Parents.
          </h2>
          <p className="text-base text-bodyText mt-3 leading-relaxed">
            Quick, reliable answers regarding consultation timings, appointment requests, newborn evaluations, and clinic visits in Kamla Nagar.
          </p>
        </div>

        <Accordion items={previewFaqs} defaultOpenId={previewFaqs[0]?.id} />

        <div className="mt-10 text-center">
          <Link
            href="/faqs"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brandBlue hover:text-navy transition-colors group"
          >
            <span>Have more questions? View the complete FAQs directory</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
