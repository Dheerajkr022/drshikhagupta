"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageSquare, Calendar } from "lucide-react";
import { clinicData } from "@/data/clinic";

export function MobileBottomBar() {
  const whatsappUrl = `https://wa.me/${clinicData.contact.whatsappNumber}?text=${encodeURIComponent(
    clinicData.contact.whatsappPrefilledMessage
  )}`;

  return (
    <aside
      aria-label="Quick contact actions"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-borderSubtle px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-dropdown"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${clinicData.contact.phone}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-element text-navy hover:bg-brandBlue-pale active:bg-brandBlue-soft transition-colors"
          aria-label="Call clinic directly"
        >
          <Phone className="w-5 h-5 text-brandBlue mb-0.5" aria-hidden="true" />
          <span className="text-[11px] font-medium leading-none">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-element text-navy hover:bg-brandBlue-pale active:bg-brandBlue-soft transition-colors"
          aria-label="Enquire via WhatsApp"
        >
          <MessageSquare className="w-5 h-5 text-emerald-600 mb-0.5" aria-hidden="true" />
          <span className="text-[11px] font-medium leading-none">WhatsApp</span>
        </a>

        {/* Appointment Button */}
        <Link
          href="/appointment"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-element bg-brandBlue text-white hover:bg-brandBlue-hover active:bg-brandBlue-hover transition-colors shadow-soft"
          aria-label="Request an Appointment"
        >
          <Calendar className="w-5 h-5 mb-0.5" aria-hidden="true" />
          <span className="text-[11px] font-semibold leading-none">Book</span>
        </Link>
      </div>
    </aside>
  );
}

