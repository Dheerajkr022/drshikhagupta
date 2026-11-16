import React from "react";
import Link from "next/link";
import {
  MessageSquareHeart,
  ShieldCheck,
  TrendingUp,
  Syringe,
  GraduationCap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export function WhyChooseSection() {
  const pillars = [
    {
      num: "01",
      title: "Listening-First Consultations",
      description:
        "Consultations begin by listening closely to your observations as a parent. We never rush through appointments, ensuring all your questions about sleep, feeding, and symptoms are thoroughly answered.",
    },
    {
      num: "02",
      title: "Rational Medicine & Zero Polypharmacy",
      description:
        "Strict antibiotic stewardship. Most common childhood colds and fevers are viral and resolve with gentle supportive care. We prescribe only what is medically essential, avoiding unnecessary antibiotics and syrups.",
    },
    {
      num: "03",
      title: "WHO-Standardised Milestone Tracking",
      description:
        "Systematic growth plotting on World Health Organization (WHO) percentile curves. We screen gross motor, speech, and cognitive milestones early so subtle delays receive timely, gentle intervention.",
    },
    {
      num: "04",
      title: "Evidence-Based IAP Immunisation",
      description:
        "Vaccinations administered strictly under Indian Academy of Pediatrics (IAP) protocols. Stored under certified medical cold-chain refrigeration with clear post-vaccination home care.",
    },
    {
      num: "05",
      title: "Compassionate Parent Partnership",
      description:
        "Support for infant feeding, toddler food battles, and screen-time boundaries. Dr. Gupta (herself a mother) understands the daily dilemmas of raising children and offers practical, judgment-free advice.",
    },
    {
      num: "06",
      title: "Premier Teaching Hospital Pedigree",
      description:
        "MBBS from VMMC & Safdarjung Hospital and MD Pediatrics from Dr. Ram Manohar Lohia Hospital / PGIMER, backed by Senior Residency experience managing complex paediatric clinical conditions.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAFCFE] border-b border-borderSubtle/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Philosophy & Anchor */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div>
              <span className="text-xs font-semibold text-brandBlue uppercase tracking-wider">
                Clinical Principles & Parent Trust
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight mt-3 font-heading">
                Why Parents in Kamla Nagar Trust Dr. Shikha Gupta
              </h2>
              <p className="text-base text-bodyText leading-relaxed mt-4">
                Paediatric healthcare requires more than clinical diagnosis—it demands patient listening, evidence-based medication, and honest partnership with families.
              </p>
              <p className="text-sm text-bodyText-muted leading-relaxed mt-3">
                Serving families across Kamla Nagar, Shakti Nagar, Roop Nagar, and Civil Lines, Dr. Gupta emphasizes unhurried consultations where parents leave with clarity and peace of mind.
              </p>
            </div>

            {/* Practice Highlights Checklist */}
            <div className="space-y-2.5 pt-2 border-t border-borderSubtle/80">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-navy">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Polypharmacy & Safe Antibiotic Stewardship</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-navy">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Delhi Medical Council Registered Paediatrician</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-navy">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Certified Medical Cold-Chain Vaccine Storage</span>
              </div>
            </div>

            <div className="pt-2">
              <Button
                href="/appointment"
                variant="primary"
                size="md"
                className="rounded-full bg-brandBlue hover:bg-brandBlue-hover text-white shadow-soft font-semibold text-xs"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>
          </div>

          {/* Right Column: Numbered Clinical Pillars Manifesto */}
          <div className="lg:col-span-7 divide-y divide-borderSubtle/80">
            {pillars.map((p) => (
              <div
                key={p.num}
                className="py-6 first:pt-0 last:pb-0 flex items-start gap-4 sm:gap-6 group"
              >
                <span className="text-sm font-bold text-brandBlue/60 font-mono tracking-wider pt-0.5 shrink-0 group-hover:text-brandBlue transition-colors">
                  {p.num}
                </span>
                <div className="space-y-1.5 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-navy group-hover:text-brandBlue transition-colors font-heading">
                    {p.title}
                  </h3>
                  <p className="text-sm text-bodyText-muted leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
