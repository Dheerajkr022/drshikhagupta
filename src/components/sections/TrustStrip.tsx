import React from "react";
import { GraduationCap, Award, Stethoscope, Building2, MapPin, CheckCircle } from "lucide-react";

export function TrustStrip() {
  const credentials = [
    {
      title: "MBBS Degree",
      sub: "VMMC & Safdarjung Hospital",
      tag: "Top Delhi Medical College",
      icon: <GraduationCap className="w-5 h-5 text-brandBlue" />,
    },
    {
      title: "MD Pediatrics",
      sub: "Dr. RML Hospital / PGIMER",
      tag: "Post-Graduate Specialty",
      icon: <Award className="w-5 h-5 text-brandBlue" />,
    },
    {
      title: "Former Senior Resident",
      sub: "RML Hospital, New Delhi",
      tag: "Tertiary Paediatric Exposure",
      icon: <Stethoscope className="w-5 h-5 text-brandBlue" />,
    },
    {
      title: "Clinic Location",
      sub: "Bhatia Chowk, Kamla Nagar",
      tag: "Central North Delhi",
      icon: <MapPin className="w-5 h-5 text-brandBlue" />,
    },
  ];

  return (
    <div className="bg-white border-b border-borderSubtle py-8 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="text-[11px] font-bold uppercase tracking-wider text-bodyText-muted bg-brandBlue-pale px-3 py-1 rounded-pill border border-borderSubtle">
            Academic Pedigree & Clinical Accreditation
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {credentials.map((cred, index) => (
            <div
              key={index}
              className="group p-4 rounded-card border border-borderSubtle bg-gradient-to-b from-brandBlue-pale/30 to-white hover:border-brandBlue/40 hover:shadow-card transition-all duration-300 flex items-start gap-3.5"
            >
              <div className="w-11 h-11 rounded-element bg-white shadow-soft border border-borderSubtle flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-brandBlue/30 transition-transform">
                {cred.icon}
              </div>
              <div className="min-w-0">
                <span className="inline-block text-[10px] font-semibold text-brandBlue uppercase tracking-wider mb-0.5">
                  {cred.tag}
                </span>
                <p className="font-bold text-navy text-sm sm:text-base leading-snug truncate">
                  {cred.title}
                </p>
                <p className="text-xs text-bodyText-muted mt-0.5 leading-tight">
                  {cred.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
