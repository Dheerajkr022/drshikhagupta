import React from "react";
import { AlertCircle } from "lucide-react";

export function EmergencyBanner() {
  return (
    <aside
      aria-label="Medical emergency advisory"
      className="bg-brandBlue-pale border-b border-borderSubtle text-bodyText text-xs sm:text-[13px] py-2 px-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-brandBlue shrink-0" aria-hidden="true" />
          <span>
            <strong className="font-semibold text-navy">Emergency Note:</strong>{" "}
            Website enquiries are for routine consultations. In case of acute breathing distress, seizures, or trauma, please visit an emergency hospital immediately.
          </span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-xs font-medium text-navy shrink-0">
          <span>Kamla Nagar, Delhi</span>
          <span>•</span>
          <span>Mon–Sat: 10:30 AM–12:30 PM & 6:00 PM–8:30 PM</span>
        </div>
      </div>
    </aside>
  );
}

