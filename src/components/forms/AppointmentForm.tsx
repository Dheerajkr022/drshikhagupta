"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar, CheckCircle2, Clock, Shield, AlertCircle, Send } from "lucide-react";
import { appointmentFormSchema, AppointmentFormValues } from "@/lib/validation";
import { servicesData } from "@/data/services";
import { clinicData } from "@/data/clinic";
import { Button } from "@/components/ui/Button";

interface AppointmentFormProps {
  initialServiceId?: string;
  onSuccess?: () => void;
}

export function AppointmentForm({ initialServiceId }: AppointmentFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionData, setSubmissionData] = useState<AppointmentFormValues | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: {
      serviceRequested: initialServiceId || "well-baby-care",
      consentGiven: false,
    },
  });

  const onSubmit = async (data: AppointmentFormValues) => {
    // Simulate network submission to server / action
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmissionData(data);
    setIsSubmitted(true);
  };

  if (isSubmitted && submissionData) {
    return (
      <div className="bg-white rounded-2xl border border-borderSubtle p-8 sm:p-10 shadow-soft text-center animate-in fade-in duration-300">
        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600 border border-emerald-200">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <span className="inline-block text-xs font-semibold tracking-wider uppercase text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-3">
          Enquiry Received
        </span>

        <h3 className="text-2xl font-bold text-navy mb-3 font-heading">
          Thank you, {submissionData.parentName}
        </h3>

        <div className="max-w-lg mx-auto bg-surface-muted border border-borderSubtle/60 rounded-xl p-4 mb-6 text-left text-sm text-bodyText space-y-2">
          <p className="flex items-center gap-2 text-navy font-semibold font-heading">
            <Clock className="w-4 h-4 text-brandBlue" />
            What happens next:
          </p>
          <p className="text-xs sm:text-sm text-bodyText-muted leading-relaxed">
            Our clinic receptionist will contact you at <strong>{submissionData.phoneNumber}</strong> during regular clinic hours to confirm doctor availability and allocate your consultation time slot.
          </p>
          <div className="pt-2 border-t border-borderSubtle/60 text-xs text-amber-800 font-medium flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>Reminder: This enquiry is a preliminary request and does not constitute a confirmed appointment until confirmed by our clinic.</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            type="button"
            variant="outline"
            className="rounded-full text-xs font-semibold"
            onClick={() => {
              setIsSubmitted(false);
              reset();
            }}
          >
            Submit Another Request
          </Button>
          <Button
            href={`https://wa.me/${clinicData.contact.whatsappNumber}?text=${encodeURIComponent(
              `Hello Dr. Shikha Gupta's Clinic, I have just submitted an appointment enquiry online for ${submissionData.parentName}.`
            )}`}
            variant="primary"
            className="rounded-full bg-brandBlue hover:bg-brandBlue-hover text-white shadow-soft text-xs font-semibold"
          >
            Connect on WhatsApp Now
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-2xl border border-borderSubtle p-6 sm:p-8 shadow-card space-y-6"
      noValidate
    >
      <div className="border-b border-borderSubtle/70 pb-4">
        <h3 className="text-xl font-bold text-navy font-heading">
          Appointment Enquiry
        </h3>
        <p className="text-xs sm:text-sm text-bodyText-muted mt-1">
          Share your preferred timing and concern. Our clinic desk will review and call you back to confirm.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {/* Parent / Guardian Name */}
        <div>
          <label htmlFor="parentName" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5 font-heading">
            Parent / Guardian Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="parentName"
            type="text"
            placeholder="e.g. Priya Sharma"
            {...register("parentName")}
            className="w-full px-3.5 py-2.5 rounded-xl border border-borderSubtle text-sm text-bodyText placeholder:text-bodyText-muted focus:border-brandBlue focus:ring-1 focus:ring-brandBlue transition-colors outline-none bg-white"
          />
          {errors.parentName && (
            <p className="text-xs text-rose-500 mt-1">{errors.parentName.message}</p>
          )}
        </div>

        {/* Contact Phone */}
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

        {/* Email Address (Optional) */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5 font-heading">
            Email Address <span className="text-bodyText-muted font-normal text-[11px]">(Optional)</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="e.g. priya@example.com"
            {...register("email")}
            className="w-full px-3.5 py-2.5 rounded-xl border border-borderSubtle text-sm text-bodyText placeholder:text-bodyText-muted focus:border-brandBlue focus:ring-1 focus:ring-brandBlue transition-colors outline-none bg-white"
          />
          {errors.email && (
            <p className="text-xs text-rose-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Child's Age */}
        <div>
          <label htmlFor="childAge" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5 font-heading">
            Child&apos;s Age / Month <span className="text-bodyText-muted font-normal text-[11px]">(Optional)</span>
          </label>
          <input
            id="childAge"
            type="text"
            placeholder="e.g. 6 months, 4 years"
            {...register("childAge")}
            className="w-full px-3.5 py-2.5 rounded-xl border border-borderSubtle text-sm text-bodyText placeholder:text-bodyText-muted focus:border-brandBlue focus:ring-1 focus:ring-brandBlue transition-colors outline-none bg-white"
          />
        </div>

        {/* Service Requested */}
        <div className="sm:col-span-2">
          <label htmlFor="serviceRequested" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5 font-heading">
            Care Area / Reason for Visit <span className="text-rose-500">*</span>
          </label>
          <select
            id="serviceRequested"
            {...register("serviceRequested")}
            className="w-full px-3.5 py-2.5 rounded-xl border border-borderSubtle text-sm text-bodyText focus:border-brandBlue focus:ring-1 focus:ring-brandBlue transition-colors outline-none bg-white"
          >
            {servicesData.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
            <option value="general-consultation">General Paediatric Consultation</option>
            <option value="other">Other Inquiry</option>
          </select>
          {errors.serviceRequested && (
            <p className="text-xs text-rose-500 mt-1">{errors.serviceRequested.message}</p>
          )}
        </div>

        {/* Preferred Date */}
        <div>
          <label htmlFor="preferredDate" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5 font-heading">
            Preferred Date <span className="text-bodyText-muted font-normal text-[11px]">(Optional)</span>
          </label>
          <input
            id="preferredDate"
            type="date"
            {...register("preferredDate")}
            className="w-full px-3.5 py-2.5 rounded-xl border border-borderSubtle text-sm text-bodyText focus:border-brandBlue focus:ring-1 focus:ring-brandBlue transition-colors outline-none bg-white"
          />
        </div>

        {/* Preferred Time Slot */}
        <div>
          <label htmlFor="preferredTimeSlot" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5 font-heading">
            Preferred Slot <span className="text-bodyText-muted font-normal text-[11px]">(Optional)</span>
          </label>
          <select
            id="preferredTimeSlot"
            {...register("preferredTimeSlot")}
            className="w-full px-3.5 py-2.5 rounded-xl border border-borderSubtle text-sm text-bodyText focus:border-brandBlue focus:ring-1 focus:ring-brandBlue transition-colors outline-none bg-white"
          >
            <option value="">Any available slot</option>
            <option value="morning">Morning (10:30 AM – 12:30 PM)</option>
            <option value="evening">Evening (6:00 PM – 8:30 PM)</option>
          </select>
        </div>

        {/* Additional Notes */}
        <div className="sm:col-span-2">
          <label htmlFor="notes" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5 font-heading">
            Brief Message or Specific Concern <span className="text-bodyText-muted font-normal text-[11px]">(Optional)</span>
          </label>
          <textarea
            id="notes"
            rows={3}
            placeholder="Please do not include confidential detailed medical files here. Routine questions or specific timings are welcome."
            {...register("notes")}
            className="w-full px-3.5 py-2.5 rounded-xl border border-borderSubtle text-sm text-bodyText placeholder:text-bodyText-muted focus:border-brandBlue focus:ring-1 focus:ring-brandBlue transition-colors outline-none resize-none bg-white"
          />
        </div>
      </div>

      {/* Consent Checkbox */}
      <div className="pt-2 border-t border-borderSubtle/70">
        <div className="flex items-start gap-3">
          <input
            id="consentGiven"
            type="checkbox"
            {...register("consentGiven")}
            className="mt-1 h-4 w-4 rounded border-borderSubtle text-brandBlue focus:ring-brandBlue"
          />
          <label htmlFor="consentGiven" className="text-xs text-bodyText leading-relaxed">
            I agree to be contacted by Dr. Shikha Gupta&apos;s clinic desk via phone, SMS, or WhatsApp regarding this enquiry. I understand this request is not a confirmed booking until verified by the clinic. Read our{" "}
            <Link href="/privacy-policy" className="text-brandBlue underline hover:text-navy">
              Privacy Notice
            </Link>
            .
          </label>
        </div>
        {errors.consentGiven && (
          <p className="text-xs text-rose-500 mt-1">{errors.consentGiven.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full justify-center rounded-full bg-brandBlue hover:bg-brandBlue-hover text-white shadow-soft font-semibold text-xs sm:text-sm"
        >
          {isSubmitting ? (
            <span>Submitting Request...</span>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              <span>Submit Appointment Request</span>
            </>
          )}
        </Button>
      </div>

      <div className="flex items-center justify-center gap-1.5 text-xs text-bodyText-muted pt-1">
        <Shield className="w-3.5 h-3.5 text-brandBlue shrink-0" />
        <span>Your contact details are kept strictly private and used solely to coordinate your visit.</span>
      </div>
    </form>
  );
}
