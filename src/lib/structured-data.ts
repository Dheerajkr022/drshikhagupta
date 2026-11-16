import { clinicData } from "@/data/clinic";
import { doctorData } from "@/data/doctor";
import { FAQ } from "@/types";

export function getClinicStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    "@id": "https://drshikhagupta.com/#clinic",
    name: clinicData.clinicName,
    description: clinicData.clinicTagline,
    url: "https://drshikhagupta.com",
    telephone: clinicData.contact.phone,
    email: clinicData.contact.email,
    medicalSpecialty: "Pediatrics",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${clinicData.contact.addressLine1}, ${clinicData.contact.addressLine2}`,
      addressLocality: "Kamla Nagar, Delhi",
      postalCode: clinicData.contact.pincode,
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:30",
        closes: "12:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "18:00",
        closes: "20:30",
      },
    ],
    physician: {
      "@type": "Physician",
      "@id": "https://drshikhagupta.com/#doctor",
      name: doctorData.name,
      jobTitle: doctorData.role,
      medicalSpecialty: "Pediatrics",
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Vardhman Mahavir Medical College & Safdarjung Hospital",
        },
        {
          "@type": "EducationalOrganization",
          name: "Post Graduate Institute of Medical Education and Research (PGIMER) / Dr. Ram Manohar Lohia Hospital",
        },
      ],
    },
  };
}

export function getPhysicianStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": "https://drshikhagupta.com/#doctor",
    name: doctorData.name,
    jobTitle: doctorData.role,
    medicalSpecialty: "Pediatrics",
    telephone: clinicData.contact.phone,
    workLocation: {
      "@type": "MedicalClinic",
      name: clinicData.clinicName,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${clinicData.contact.addressLine1}, ${clinicData.contact.addressLine2}`,
        addressLocality: "Kamla Nagar, Delhi",
        postalCode: clinicData.contact.pincode,
        addressCountry: "IN",
      },
    },
    alumniOf: doctorData.qualifications.map((q) => ({
      "@type": "EducationalOrganization",
      name: q.institution,
    })),
  };
}

export function getFaqStructuredData(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbStructuredData(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

