import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Heart, Quote } from "lucide-react";
import { doctorData } from "@/data/doctor";

export function WelcomePreview() {
  const stages = [
    {
      title: "Newborn Care",
      age: "0 to 12 Months",
      image: "/images/services/well-baby.jpg",
      alt: "Dr. Shikha Gupta examining an infant during a well-baby consultation in Kamla Nagar",
      points: ["Feeding & latch guidance", "WHO weight & length charting", "IAP primary immunisations"],
      href: "/services/well-baby-care",
    },
    {
      title: "Toddler Milestones",
      age: "1 to 3 Years",
      image: "/images/services/growth.jpg",
      alt: "Toddler height and developmental milestone evaluation at Sethi Clinic, North Delhi",
      points: ["Speech & motor screening", "Balanced child nutrition", "Sleep routine support"],
      href: "/services/growth-development",
    },
    {
      title: "Childhood Health",
      age: "4 to 10 Years",
      image: "/images/services/childhood-illness.jpg",
      alt: "Paediatrician checking a young child for cough, fever, and seasonal allergies in Kamla Nagar",
      points: ["Seasonal cough & fever care", "Allergy assessments", "Rational medicine approach"],
      href: "/services/childhood-illness",
    },
    {
      title: "Adolescent Care",
      age: "11 to 18 Years",
      image: "/images/services/adolescent.jpg",
      alt: "Doctor providing supportive health guidance and posture advice for a teenager in North Delhi",
      points: ["Pubertal growth checkups", "Anaemia & diet screening", "Ergonomics & lifestyle"],
      href: "/services/adolescent-care",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-borderSubtle/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-semibold text-brandBlue uppercase tracking-wider">
            Paediatric Care Pathway
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight font-heading">
            Comprehensive Support from First Breath to Teen Years.
          </h2>
          <p className="text-base sm:text-lg text-bodyText-muted leading-relaxed">
            Every child blossoms on their own schedule. Dr. Shikha Gupta partners with parents through each developmental phase with patience and medical expertise.
          </p>
        </div>

        {/* 4 Developmental Stages - Clean Editorial Continuum */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stages.map((stage, idx) => (
            <Link
              key={idx}
              href={stage.href}
              className="group flex flex-col justify-between rounded-xl overflow-hidden border border-borderSubtle bg-white hover:border-brandBlue/50 transition-all duration-200"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-brandBlue-pale">
                  <Image
                    src={stage.image}
                    alt={stage.alt || stage.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-sm text-[11px] font-bold text-navy shadow-soft">
                    {stage.age}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="font-bold text-navy text-base group-hover:text-brandBlue transition-colors font-heading">
                    {stage.title}
                  </h3>
                  <ul className="space-y-1.5 text-xs text-bodyText-muted">
                    {stage.points.map((pt, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brandBlue shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-5 pb-5 pt-1">
                <span className="text-xs font-bold text-brandBlue inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Doctor Bedside Philosophy - High-End Editorial Feature */}
        <div className="rounded-2xl bg-[#F7FAFD] border border-borderSubtle/80 p-7 sm:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-3 flex justify-center md:justify-start">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-brandBlue/20 shadow-soft shrink-0">
                <Image
                  src="/images/doctor/dr-shikha-gupta.jpg"
                  alt="Dr. Shikha Gupta, Consultant Paediatrician at Sethi Multispecialty Clinic, Kamla Nagar, Delhi"
                  fill
                  sizes="112px"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="md:col-span-9 space-y-3 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brandBlue uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 fill-brandBlue text-brandBlue" />
                <span>Doctor&apos;s Bedside Philosophy</span>
              </div>
              <blockquote className="text-base sm:text-lg font-medium text-navy leading-relaxed italic">
                &ldquo;A parent&apos;s instinct is one of the most accurate diagnostic signals in paediatrics. My clinical commitment is to listen first, never rush through appointments, and provide gentle, rational medical care that brings peace of mind to your family.&rdquo;
              </blockquote>
              <div>
                <p className="font-bold text-navy text-sm sm:text-base">{doctorData.name}</p>
                <p className="text-xs text-bodyText-muted mt-0.5">
                  MBBS (VMMC & Safdarjung Hospital) • MD Pediatrics (Dr. RML Hospital / PGIMER, New Delhi)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
