import React from "react";
import {
  MessageSquareHeart,
  ShieldCheck,
  TrendingUp,
  Syringe,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyChooseSection() {
  const points = [
    {
      icon: <MessageSquareHeart className="w-5 h-5 text-brandBlue" />,
      title: "Listening-First Consultations",
      description:
        "Consultations begin by listening closely to your observations as a parent. We never rush through appointments, ensuring all your questions about sleep, feeding, and symptoms are thoroughly answered.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-brandBlue" />,
      title: "Rational Medicine & Zero Polypharmacy",
      description:
        "Strict antibiotic stewardship. Most common childhood colds and fevers are viral and resolve with gentle supportive care. We prescribe only what is medically essential, avoiding unnecessary antibiotics and syrups.",
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-brandBlue" />,
      title: "WHO-Standardised Milestone Tracking",
      description:
        "Systematic growth plotting on World Health Organization (WHO) percentile curves. We screen gross motor, speech, and cognitive milestones early so subtle delays receive timely, gentle intervention.",
    },
    {
      icon: <Syringe className="w-5 h-5 text-brandBlue" />,
      title: "Evidence-Based IAP Immunisation",
      description:
        "Vaccinations administered strictly under Indian Academy of Pediatrics (IAP) protocols. Stored under certified medical cold-chain refrigeration with clear post-vaccination home care.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-brandBlue" />,
      title: "Compassionate Parent Partnership",
      description:
        "Support for infant feeding, toddler food battles, and screen-time boundaries. Dr. Gupta (herself a mother) understands the daily dilemmas of raising children and offers practical, judgment-free advice.",
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-brandBlue" />,
      title: "Premier Teaching Hospital Pedigree",
      description:
        "MBBS from VMMC & Safdarjung Hospital and MD Pediatrics from Dr. Ram Manohar Lohia Hospital / PGIMER, backed by Senior Residency experience managing complex paediatric clinical conditions.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Clinical Principles & Parent Trust"
          title="Why Parents in Kamla Nagar Trust Dr. Shikha Gupta"
          description="Evidence-based medicine, rational antibiotic prescribing, unhurried consultations, and respectful communication for every family."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((p) => (
            <div
              key={p.title}
              className="flex flex-col p-6 rounded-card border border-borderSubtle bg-white hover:border-brandBlue/30 hover:bg-brandBlue-pale/20 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-element bg-brandBlue-soft flex items-center justify-center border border-borderSubtle mb-4 shrink-0">
                {p.icon}
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-bodyText-muted leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
