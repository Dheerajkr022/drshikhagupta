export interface ClinicTimings {
  weekdayMorning: string;
  weekdayEvening: string;
  sunday: string;
  notes: string;
  /** Flags whether timings have had final verified confirmation by clinic */
  isVerified: boolean;
}

export interface ClinicContact {
  phone: string;
  phoneDisplay: string;
  email: string;
  whatsappNumber: string;
  whatsappPrefilledMessage: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  pincode: string;
  landmark: string;
  fullAddress: string;
  googleMapsUrl: string;
  googleReviewsUrl?: string;
  googleMapsEmbedUrl?: string;
  emergencyDisclaimer: string;
}

export interface ClinicData {
  clinicName: string;
  clinicTagline: string;
  locationArea: string;
  doctorName: string;
  doctorCredentials: string;
  doctorRole: string;
  registrationNumberNotice: string;
  experienceStatement: string;
  experienceVerificationNote: string;
  timings: ClinicTimings;
  contact: ClinicContact;
}

export interface DoctorQualification {
  degree: string;
  institution: string;
  details?: string;
}

export interface DoctorData {
  name: string;
  credentials: string;
  role: string;
  image: string;
  experienceSummary: string;
  experienceNote: string;
  qualifications: DoctorQualification[];
  subspecialtyExposure: string[];
  carePhilosophy: {
    title: string;
    description: string;
  }[];
  biography: string[];
  whyFamiliesVisit: string[];
}

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  eyebrow: string;
  shortDescription: string;
  leadParagraph: string;
  image: string;
  detailedContent: string[];
  whoItIsFor: string[];
  whatWeCover: string[];
  whatParentsShouldBring: string[];
  importantNotice?: string;
  faqIds: string[];
  metaTitle: string;
  metaDescription: string;
  cardHighlights?: string[];
}

export interface Testimonial {
  id: string;
  parentName: string;
  context: string;
  quote: string;
  verifiedSource: string;
  date?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "appointments" | "services" | "clinic" | "vaccination" | "urgent";
}

export interface AppointmentFormData {
  parentName: string;
  phoneNumber: string;
  email?: string;
  childAge?: string;
  serviceRequested: string;
  preferredDate?: string;
  preferredTimeSlot?: string;
  notes?: string;
  consentGiven: boolean;
}

