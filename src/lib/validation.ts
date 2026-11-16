import { z } from "zod";

export const appointmentFormSchema = z.object({
  parentName: z
    .string()
    .min(2, "Please enter parent or guardian name (minimum 2 characters)")
    .max(80, "Name is too long"),
  phoneNumber: z
    .string()
    .min(10, "Please enter a valid 10-digit mobile number")
    .max(15, "Phone number is too long")
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number format"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),
  childAge: z
    .string()
    .max(40, "Child age format is too long")
    .optional()
    .or(z.literal("")),
  serviceRequested: z
    .string()
    .min(1, "Please select the service or reason for your enquiry"),
  preferredDate: z
    .string()
    .optional()
    .or(z.literal("")),
  preferredTimeSlot: z
    .string()
    .optional()
    .or(z.literal("")),
  notes: z
    .string()
    .max(500, "Notes should be under 500 characters")
    .optional()
    .or(z.literal("")),
  consentGiven: z
    .boolean()
    .refine((val) => val === true, {
      message: "You must consent to being contacted regarding this enquiry",
    }),
});

export type AppointmentFormValues = z.infer<typeof appointmentFormSchema>;

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Please enter your name (minimum 2 characters)")
    .max(80, "Name is too long"),
  phoneNumber: z
    .string()
    .min(10, "Please enter a valid 10-digit mobile number")
    .max(15, "Phone number is too long")
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),
  enquiryType: z.string().min(1, "Please select an enquiry type"),
  message: z
    .string()
    .min(5, "Please enter your message or query")
    .max(600, "Message should be under 600 characters"),
  consentGiven: z
    .boolean()
    .refine((val) => val === true, {
      message: "Please agree to the privacy notice to submit",
    }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

