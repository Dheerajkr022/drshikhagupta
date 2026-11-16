import React from "react";
import { GraduationCap, Award, Stethoscope, MapPin } from "lucide-react";

export function TrustStrip() {
  const credentials = [
    {
      title: "MBBS Medical Alumni",
      sub: "VMMC & Safdarjung Hospital",
      tag: "Premier Medical College",
      icon: <GraduationCap className="w-5 h-5 text-brandBlue" />,
    },
    {
      title: "MD Pediatrics Specialist",
      sub: "Dr. RML Hospital / PGIMER",
      tag: "Post-Graduate Specialty",
      icon: <Award className="w-5 h-5 text-brandBlue" />,
    },
    {
      title: "Former Senior Resident",
      sub: "Dr. RML Hospital, New Delhi",
      tag: "Tertiary Paediatric Care",
      icon: <Stethoscope className="w-5 h-5 text-brandBlue" />,
    },
    {
      title: "Central North Delhi Clinic",
      sub: "Bhatia Chowk, Kamla Nagar",
      tag: "Near Delhi University",
      icon: <MapPin className="w-5 h-5 text-brandBlue" />,
    },
  ];

  return (
    <div className="bg-[#FAFBFD] border-b border-borderSubtle/70 py-6 sm:py-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-borderSubtle/70">
          {credentials.map((cred, index) => (
            <div
              key={index}
              className={`flex items-start gap-3.5 py-3 sm:py-0 ${
                index === 0 ? "sm:pr-6" : index === 3 ? "sm:pl-6" : "sm:px-6"
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-white shadow-soft border border-borderSubtle flex items-center justify-center shrink-0">
                {cred.icon}
              </div>
              <div className="min-w-0">
                <span className="inline-block text-[10px] font-semibold text-brandBlue uppercase tracking-wider">
                  {cred.tag}
                </span>
                <p className="font-bold text-navy text-sm leading-snug">
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
