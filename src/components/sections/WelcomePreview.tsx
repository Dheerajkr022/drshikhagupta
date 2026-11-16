import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Heart } from "lucide-react";
import { doctorData } from "@/data/doctor";
import { Button } from "@/components/ui/Button";

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
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-pill bg-brandBlue-soft text-brandBlue text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Care for Every Chapter</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
            Comprehensive Support from First Breath to Teen Years.
          </h2>
          <p className="text-base sm:text-lg text-bodyText-muted leading-relaxed">
            Every child blossoms on their own schedule. Dr. Shikha Gupta partners with parents through each developmental phase with patience and medical expertise.
          </p>
        </div>

        {/* 4 Interactive Stages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {stages.map((stage, idx) => (
            <Link
              key={idx}
              href={stage.href}
              className="group rounded-card overflow-hidden border border-borderSubtle bg-white hover:border-brandBlue/40 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-brandBlue-pale">
                  <Image
                    src={stage.image}
                    alt={stage.alt || stage.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-pill bg-white/95 text-[11px] font-bold text-navy shadow-soft">
                    {stage.age}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="font-bold text-navy text-lg group-hover:text-brandBlue transition-colors">
                    {stage.title}
                  </h3>
                  <ul className="space-y-1.5 text-xs text-bodyText-muted">
                    {stage.points.map((pt, i) => (
                      <li key={i} className="flex items-center gap-1.5">
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

        {/* Doctor Quote Showcase Banner */}
        <div className="rounded-[24px] bg-gradient-to-r from-navy via-navy-light to-navy p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-brandBlue/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-3 flex justify-center md:justify-start">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-glow shrink-0">
                <Image
                  src="/images/doctor/dr-shikha-gupta.jpg"
                  alt="Dr. Shikha Gupta, Consultant Paediatrician at Sethi Multispecialty Clinic, Kamla Nagar, Delhi"
                  fill
                  sizes="128px"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="md:col-span-9 space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-white/10 text-xs text-brandCyan-light font-semibold">
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>Doctor&apos;s Bedside Philosophy</span>
              </div>
              <blockquote className="text-base sm:text-xl font-medium text-white/95 leading-relaxed italic">
                &ldquo;A parent&apos;s instinct is one of the most accurate diagnostic signals in paediatrics. My clinical commitment is to listen first, never rush through appointments, and provide gentle, rational medical care that brings peace of mind to your family.&rdquo;
              </blockquote>
              <div>
                <p className="font-bold text-white text-base">Dr. Shikha Gupta</p>
                <p className="text-xs text-white/70">
                  MBBS (VMMC & Safdarjung Hospital), MD Pediatrics (RML Hospital / PGIMER)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
