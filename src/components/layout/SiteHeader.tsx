"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  Calendar,
  Menu,
  X,
  ChevronDown,
  Clock,
  ShieldCheck,
  AlertCircle,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { clinicData } from "@/data/clinic";
import { servicesData } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsServicesOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services", hasChildren: true },
    { label: "Reviews", href: "/reviews" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact", href: "/contact" },
  ];

  const whatsappUrl = `https://wa.me/${clinicData.contact.whatsappNumber}?text=${encodeURIComponent(
    clinicData.contact.whatsappPrefilledMessage
  )}`;

  return (
    <>
      {/* Consolidated Top Clinic Announcement Bar */}
      <div className="bg-gradient-to-r from-navy via-navy-light to-navy text-white text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Active Timings & Live Status */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-pill bg-emerald-500/20 text-emerald-300 font-medium text-[11px] border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Consultations Available Today
            </span>
            <span className="text-white/40">•</span>
            <span className="text-white/80 flex items-center gap-1 text-[11px]">
              <Clock className="w-3.5 h-3.5 text-brandCyan-light" />
              Mon–Sat: 10:30 AM–12:30 PM & 6:00 PM–8:30 PM
            </span>
          </div>

          {/* Right: Emergency Advisory & Quick Call */}
          <div className="flex items-center gap-4 text-white/90 text-xs">
            <span className="text-white/70 flex items-center gap-1 text-[11px]">
              <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
              Emergency? Visit hospital casualty directly
            </span>
            <span className="text-white/40">•</span>
            <a
              href={`tel:${clinicData.contact.phone}`}
              className="text-white font-bold hover:text-brandCyan-light transition-colors flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-brandCyan-light" />
              <span>{clinicData.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-200",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-card py-2 border-b border-borderSubtle"
            : "bg-white py-3 border-b border-borderSubtle/60"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Official Logo */}
            <Link
              href="/"
              className="flex items-center group focus-visible:outline-none shrink-0"
              aria-label="Dr. Shikha Gupta's Child Clinic - Home"
            >
              <div className="transition-transform group-hover:scale-[1.02]">
                <Image
                  src="/images/logo/logo.png"
                  alt="Dr. Shikha Gupta - Child Clinic Logo"
                  width={240}
                  height={117}
                  priority
                  className="h-11 sm:h-13 md:h-14 w-auto object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              aria-label="Main Navigation"
              className="hidden lg:flex items-center gap-1 xl:gap-2"
            >
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                if (link.hasChildren) {
                  return (
                    <div
                      key={link.href}
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "inline-flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-pill transition-all",
                          isActive
                            ? "text-brandBlue bg-brandBlue-soft"
                            : "text-bodyText hover:text-navy hover:bg-brandBlue-pale"
                        )}
                      >
                        {link.label}
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform duration-200 text-bodyText-muted",
                            isServicesOpen && "rotate-180 text-brandBlue"
                          )}
                          aria-hidden="true"
                        />
                      </Link>

                      {/* Dropdown Menu */}
                      {isServicesOpen && (
                        <div
                          className="absolute left-0 top-full w-80 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                          role="menu"
                        >
                          <div className="bg-white rounded-card border border-borderSubtle shadow-dropdown p-2.5">
                            <Link
                              href="/services"
                              className="flex items-center justify-between px-3 py-2 text-xs font-bold text-brandBlue uppercase tracking-wider hover:bg-brandBlue-soft rounded-element transition-colors mb-1"
                            >
                              <span>All Paediatric Care Overview</span>
                              <span>→</span>
                            </Link>
                            <div className="h-px bg-borderSubtle mb-1.5" />
                            {servicesData.map((service) => (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="group flex items-center gap-3 px-3 py-2 text-xs sm:text-sm text-bodyText hover:text-navy hover:bg-brandBlue-pale rounded-element transition-colors"
                              >
                                <div className="relative w-8 h-8 rounded-element overflow-hidden shrink-0 border border-borderSubtle bg-brandBlue-pale">
                                  <Image
                                    src={service.image}
                                    alt=""
                                    fill
                                    sizes="32px"
                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                  />
                                </div>
                                <div className="min-w-0">
                                  <p className="font-semibold text-navy group-hover:text-brandBlue transition-colors truncate">
                                    {service.title}
                                  </p>
                                  <p className="text-[11px] text-bodyText-muted truncate">
                                    {service.eyebrow}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-3.5 py-2 text-sm font-semibold rounded-pill transition-all",
                      isActive
                        ? "text-brandBlue bg-brandBlue-soft"
                        : "text-bodyText hover:text-navy hover:bg-brandBlue-pale"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-2.5 shrink-0">
              <a
                href={`tel:${clinicData.contact.phone}`}
                className="inline-flex items-center gap-1.5 text-xs xl:text-sm font-semibold text-navy hover:text-brandBlue py-2 px-3.5 rounded-pill bg-brandBlue-pale/60 hover:bg-brandBlue-soft transition-all border border-borderSubtle"
              >
                <Phone className="w-4 h-4 text-brandBlue" aria-hidden="true" />
                <span>{clinicData.contact.phoneDisplay}</span>
              </a>

              <Button
                href="/appointment"
                variant="primary"
                size="md"
                className="rounded-pill shadow-glow hover:shadow-card bg-gradient-to-r from-brandBlue to-brandCyan hover:from-brandBlue-hover hover:to-brandBlue px-5"
              >
                <Calendar className="w-4 h-4 mr-1.5" aria-hidden="true" />
                <span>Book Appointment</span>
              </Button>
            </div>

            {/* Mobile Header Controls */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={`tel:${clinicData.contact.phone}`}
                className="p-2.5 rounded-full text-brandBlue bg-brandBlue-soft hover:bg-brandBlue-pale"
                aria-label="Call clinic directly"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-element text-navy hover:bg-brandBlue-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-navy" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6 text-navy" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-borderSubtle mt-3 pt-3 pb-6 animate-in slide-in-from-top duration-200">
              {/* Emergency Banner in Mobile Menu */}
              <div className="p-3 mb-3 rounded-element bg-status-emergencyBg border border-status-emergency/20 text-xs text-bodyText flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-status-emergency shrink-0" />
                <span>For emergency care, please visit hospital casualty directly.</span>
              </div>

              <nav className="flex flex-col gap-1">
                <Link
                  href="/"
                  className={cn(
                    "px-4 py-2.5 rounded-element text-base font-semibold",
                    pathname === "/"
                      ? "bg-brandBlue-soft text-brandBlue font-bold"
                      : "text-bodyText hover:bg-brandBlue-pale"
                  )}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={cn(
                    "px-4 py-2.5 rounded-element text-base font-semibold",
                    pathname.startsWith("/about")
                      ? "bg-brandBlue-soft text-brandBlue font-bold"
                      : "text-bodyText hover:bg-brandBlue-pale"
                  )}
                >
                  About Dr. Shikha Gupta
                </Link>

                {/* Services Group */}
                <div className="py-2">
                  <Link
                    href="/services"
                    className="block px-4 py-1.5 text-base font-bold text-navy"
                  >
                    Paediatric Services
                  </Link>
                  <div className="pl-4 mt-1 border-l-2 border-brandBlue/20 space-y-1">
                    {servicesData.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="block px-3 py-1.5 text-sm text-bodyText hover:text-brandBlue font-medium"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/reviews"
                  className={cn(
                    "px-4 py-2.5 rounded-element text-base font-semibold",
                    pathname.startsWith("/reviews")
                      ? "bg-brandBlue-soft text-brandBlue font-bold"
                      : "text-bodyText hover:bg-brandBlue-pale"
                  )}
                >
                  Parent Reviews
                </Link>
                <Link
                  href="/faqs"
                  className={cn(
                    "px-4 py-2.5 rounded-element text-base font-semibold",
                    pathname.startsWith("/faqs")
                      ? "bg-brandBlue-soft text-brandBlue font-bold"
                      : "text-bodyText hover:bg-brandBlue-pale"
                  )}
                >
                  FAQs
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    "px-4 py-2.5 rounded-element text-base font-semibold",
                    pathname.startsWith("/contact")
                      ? "bg-brandBlue-soft text-brandBlue font-bold"
                      : "text-bodyText hover:bg-brandBlue-pale"
                  )}
                >
                  Contact & Clinic
                </Link>

                {/* Mobile Action Buttons */}
                <div className="pt-4 mt-2 border-t border-borderSubtle flex flex-col gap-2.5">
                  <Button
                    href="/appointment"
                    variant="primary"
                    className="w-full justify-center rounded-pill bg-gradient-to-r from-brandBlue to-brandCyan shadow-soft py-3 font-bold"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Request Appointment
                  </Button>
                  <Button
                    href={whatsappUrl}
                    variant="secondary"
                    className="w-full justify-center rounded-pill bg-emerald-600 text-white hover:bg-emerald-700 border-none py-3 font-bold"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    WhatsApp Enquiry
                  </Button>
                  <a
                    href={`tel:${clinicData.contact.phone}`}
                    className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-pill border border-borderSubtle text-navy font-bold text-sm hover:bg-brandBlue-pale"
                  >
                    <Phone className="w-4 h-4 text-brandBlue" />
                    Call {clinicData.contact.phoneDisplay}
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
