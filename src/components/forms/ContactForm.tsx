"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Send, Shield } from "lucide-react";
import { contactFormSchema, ContactFormValues } from "@/lib/validation";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      enquiryType: "appointment",
      consentGiven: false,
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmittedName(data.fullName);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl border border-borderSubtle p-8 text-center shadow-soft animate-in fade-in duration-300">
        <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600 border border-emerald-200">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h4 className="text-xl font-bold text-navy mb-2 font-heading">Message Received</h4>
        <p className="text-xs sm:text-sm text-bodyText-muted max-w-md mx-auto mb-6 leading-relaxed">
          Thank you, <strong>{submittedName}</strong>. Your enquiry has been received. The clinic team will contact you using the details provided during clinic hours.
        </p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="rounded-full text-xs font-semibold"
          onClick={() => {
            setIsSubmitted(false);
            reset();
          }}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-2xl border border-borderSubtle p-6 sm:p-8 shadow-card space-y-5"
      noValidate
    >
      <div>
        <h3 className="text-xl font-bold text-navy font-heading">Send an Enquiry</h3>
        <p className="text-xs sm:text-sm text-bodyText-muted mt-1">
          Have a question about clinic timings, consultation availability, or routine services? Write to us below.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5 font-heading">
            Your Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="e.g. Ramesh Kumar"
            {...register("fullName")}
            className="w-full px-3.5 py-2.5 rounded-xl border border-borderSubtle text-sm text-bodyText placeholder:text-bodyText-muted focus:border-brandBlue focus:ring-1 focus:ring-brandBlue transition-colors outline-none bg-white"
          />
          {errors.fullName && (
            <p className="text-xs text-rose-500 mt-1">{errors.fullName.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phoneNumber" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5 font-heading">
              Phone Number <span className="text-rose-500">*</span>
            </label>
            <input
              id="phoneNumber"
              type="tel"
              placeholder="e.g. 98765 43210"
              {...register("phoneNumber")}
              className="w-full px-3.5 py-2.5 rounded-xl border border-borderSubtle text-sm text-bodyText placeholder:text-bodyText-muted focus:border-brandBlue focus:ring-1 focus:ring-brandBlue transition-colors outline-none bg-white"
            />
            {errors.phoneNumber && (
              <p className="text-xs text-rose-500 mt-1">{errors.phoneNumber.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5 font-heading">
              Email Address <span className="text-bodyText-muted font-normal text-[11px]">(Optional)</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="e.g. ramesh@example.com"
              {...register("email")}
              className="w-full px-3.5 py-2.5 rounded-xl border border-borderSubtle text-sm text-bodyText placeholder:text-bodyText-muted focus:border-brandBlue focus:ring-1 focus:ring-brandBlue transition-colors outline-none bg-white"
            />
            {errors.email && (
              <p className="text-xs text-rose-500 mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="enquiryType" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5 font-heading">
            Enquiry Topic <span className="text-rose-500">*</span>
          </label>
          <select
            id="enquiryType"
            {...register("enquiryType")}
            className="w-full px-3.5 py-2.5 rounded-xl border border-borderSubtle text-sm text-bodyText focus:border-brandBlue focus:ring-1 focus:ring-brandBlue transition-colors outline-none bg-white"
          >
            <option value="appointment">Appointment Availability</option>
            <option value="vaccination">Vaccination Guidance & Doses</option>
            <option value="timings">Clinic Timings & Directions</option>
            <option value="services">General Paediatric Enquiry</option>
            <option value="other">Other Question</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5 font-heading">
            Your Message <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="How can we help? (Please avoid submitting sensitive emergency records here)"
            {...register("message")}
            className="w-full px-3.5 py-2.5 rounded-xl border border-borderSubtle text-sm text-bodyText placeholder:text-bodyText-muted focus:border-brandBlue focus:ring-1 focus:ring-brandBlue transition-colors outline-none resize-none bg-white"
          />
          {errors.message && (
            <p className="text-xs text-rose-500 mt-1">{errors.message.message}</p>
          )}
        </div>

        <div className="pt-1">
          <div className="flex items-start gap-3">
            <input
              id="contactConsent"
              type="checkbox"
              {...register("consentGiven")}
              className="mt-1 h-4 w-4 rounded border-borderSubtle text-brandBlue focus:ring-brandBlue"
            />
            <label htmlFor="contactConsent" className="text-xs text-bodyText leading-relaxed">
              I agree to the clinic contacting me via phone, email or messaging regarding this enquiry. View our{" "}
              <Link href="/privacy-policy" className="text-brandBlue underline hover:text-navy">
                Privacy Policy
              </Link>
              .
            </label>
          </div>
          {errors.consentGiven && (
            <p className="text-xs text-rose-500 mt-1">{errors.consentGiven.message}</p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full justify-center rounded-full bg-brandBlue hover:bg-brandBlue-hover text-white shadow-soft font-semibold text-xs sm:text-sm"
      >
        {isSubmitting ? "Sending..." : (
          <>
            <Send className="w-4 h-4 mr-2" />
            <span>Send Enquiry</span>
          </>
        )}
      </Button>

      <div className="flex items-center justify-center gap-1.5 text-xs text-bodyText-muted pt-1">
        <Shield className="w-3.5 h-3.5 text-brandBlue shrink-0" />
        <span>No marketing spam. Your details are used strictly to answer your enquiry.</span>
      </div>
    </form>
  );
}
