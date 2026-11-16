import React from "react";
import {
  MessageSquareHeart,
  ShieldCheck,
  TrendingUp,
  BookOpenCheck,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyChooseSection() {
  const points = [
    {
      icon: <MessageSquareHeart className="w-5 h-5 text-brandBlue" />,
      title: "A conversation-first approach",
      description:
        "Every consultation allows time for parents to voice their questions, share daily observations, and understand treatment decisions without feeling hurried.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-brandBlue" />,
      title: "Preventive care focus",
      description:
        "Routine health check-ups, early clinical screening, and timely immunisation help keep your child healthy and spot potential issues before they advance.",
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-brandBlue" />,
      title: "Growth beyond numbers",
      description:
        "We track developmental milestones alongside height and weight, offering guidance on speech, motor coordination, and age-appropriate behaviour.",
    },
    {
      icon: <BookOpenCheck className="w-5 h-5 text-brandBlue" />,
      title: "Clear guidance for parents",
      description:
        "Medical advice is communicated in transparent, everyday language so caregivers understand home-care steps, dosage schedules, and warning signs clearly.",
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-brandBlue" />,
      title: "Paediatric-focused credentials",
      description:
        "Dr. Shikha Gupta completed post-graduate training (MD Pediatrics) at Dr. Ram Manohar Lohia Hospital / PGIMER, following MBBS at VMMC & Safdarjung Hospital.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-brandBlue" />,
      title: "Care across childhood years",
      description:
        "Support tailored to each chapter of childhood—from newborn feeding and early infant care to preschool health, school-age illness, and adolescent wellbeing.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Clinical Approach"
          title="A Thoughtful Approach to Your Child's Care."
          description="Grounded in evidence, transparent communication, and respect for each family's unique journey."
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

