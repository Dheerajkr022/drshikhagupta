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
  Home,
  User,
  Stethoscope,
  Star,
  HelpCircle,
  MapPin,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { clinicData } from "@/data/clinic";
import { doctorData } from "@/data/doctor";
import { servicesData } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    setIsServicesOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services", hasChildren: true },
    { label: "Reviews", href: "/reviews" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact", href: "/contact" },
  ];

  const dropdownServices = [
    {
      title: "Well-Baby Care",
      desc: "Infant health & feeding",
      slug: "well-baby-care",
      image: "/images/services/well-baby.jpg",
    },
    {
      title: "Child Vaccination",
      desc: "IAP & national schedules",
      slug: "vaccination",
      image: "/images/services/vaccination.jpg",
    },
    {
      title: "Growth & Milestones",
      desc: "WHO percentile tracking",
      slug: "growth-development",
      image: "/images/services/growth.jpg",
    },
    {
      title: "Childhood Illness",
      desc: "Fever, cough & viral care",
      slug: "childhood-illness",
      image: "/images/services/childhood-illness.jpg",
    },
    {
      title: "Adolescent Care",
      desc: "Teenage health & puberty",
      slug: "adolescent-care",
      image: "/images/services/adolescent.jpg",
    },
    {
      title: "Parental Guidance",
      desc: "Behaviour & sleep routines",
      slug: "parental-counselling",
      image: "/images/services/parenting.jpg",
    },
    {
      title: "Breastfeeding Support",
      desc: "Latch & lactation guidance",
      slug: "breastfeeding-support",
      image: "/images/services/breastfeeding.jpg",
    },
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

          {/* Right: Location Landmark & Quick Call */}
          <div className="flex items-center gap-4 text-white/90 text-xs">
            <span className="text-white/70 flex items-center gap-1 text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-brandCyan-light" />
              Bhatia Chowk, Kamla Nagar, Delhi
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
                  width={260}
                  height={127}
                  priority
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-all"
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

                      {/* Dropdown Menu - Sleek, Compact 2-Column Grid (Zero Overflow, Fast to Scan) */}
                      {isServicesOpen && (
                        <div
                          className="absolute left-0 top-full w-[490px] pt-2 z-50 animate-in fade-in slide-in-from-top-1.5 duration-150"
                          role="menu"
                        >
                          <div className="bg-white rounded-[20px] border border-borderSubtle shadow-dropdown p-2.5">
                            <div className="grid grid-cols-2 gap-1.5">
                              {dropdownServices.map((s) => (
                                <Link
                                  key={s.slug}
                                  href={`/services/${s.slug}`}
                                  className="group flex items-center gap-2.5 p-2 rounded-xl text-bodyText hover:bg-brandBlue-pale/70 hover:text-navy transition-all duration-150"
                                >
                                  <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-borderSubtle bg-brandBlue-pale shadow-soft">
                                    <Image
                                      src={s.image}
                                      alt=""
                                      fill
                                      sizes="32px"
                                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <p className="font-bold text-navy group-hover:text-brandBlue transition-colors text-xs leading-tight">
                                      {s.title}
                                    </p>
                                    <p className="text-[11px] text-bodyText-muted leading-tight mt-0.5 truncate">
                                      {s.desc}
                                    </p>
                                  </div>
                                </Link>
                              ))}

                              {/* 8th Card: View All Services CTA */}
                              <Link
                                href="/services"
                                className="group flex items-center gap-2.5 p-2 rounded-xl bg-brandBlue-pale/50 hover:bg-brandBlue text-brandBlue hover:text-white transition-all duration-150 border border-brandBlue/15 hover:border-brandBlue"
                              >
                                <div className="w-8 h-8 rounded-lg bg-brandBlue text-white group-hover:bg-white group-hover:text-brandBlue flex items-center justify-center shrink-0 transition-colors shadow-soft">
                                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <p className="font-bold text-xs group-hover:text-white text-navy transition-colors leading-tight">
                                    All 7 Care Areas
                                  </p>
                                  <p className="text-[11px] text-brandBlue group-hover:text-white/90 transition-colors leading-tight mt-0.5">
                                    View full directory →
                                  </p>
                                </div>
                              </Link>
                            </div>
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
                className="p-2.5 rounded-full text-brandBlue bg-brandBlue-soft hover:bg-brandBlue-pale transition-colors"
                aria-label="Call clinic directly"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 rounded-full text-navy bg-brandBlue-pale hover:bg-brandBlue-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue transition-all active:scale-95"
                aria-expanded={mobileMenuOpen}
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5 text-navy" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Modern Mobile Slide-Over Sidebar Drawer */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[60]"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Sidebar"
        >
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-navy/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-[86vw] max-w-sm bg-white shadow-2xl flex flex-col z-[61] overflow-hidden animate-in slide-in-from-right duration-300">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-borderSubtle bg-gradient-to-r from-brandBlue-pale/60 via-white to-white shrink-0">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center"
                aria-label="Dr. Shikha Gupta Home"
              >
                <Image
                  src="/images/logo/logo.png"
                  alt="Dr. Shikha Gupta - Child Clinic Logo"
                  width={220}
                  height={107}
                  className="h-11 sm:h-12 w-auto object-contain"
                />
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-brandBlue-pale hover:bg-brandBlue-soft text-navy flex items-center justify-center transition-colors active:scale-95"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Navigation Body */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {/* Navigation Links */}
              <nav className="space-y-1">
                {/* Home */}
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-3.5 py-2.5 rounded-element text-sm font-semibold transition-colors",
                    pathname === "/"
                      ? "bg-brandBlue text-white shadow-soft font-bold"
                      : "text-navy hover:bg-brandBlue-pale"
                  )}
                >
                  <span className="flex items-center gap-3">
                    <Home className="w-4 h-4 shrink-0" />
                    <span>Home</span>
                  </span>
                  <ChevronRight className="w-4 h-4 opacity-60" />
                </Link>

                {/* About */}
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-3.5 py-2.5 rounded-element text-sm font-semibold transition-colors",
                    pathname.startsWith("/about")
                      ? "bg-brandBlue text-white shadow-soft font-bold"
                      : "text-navy hover:bg-brandBlue-pale"
                  )}
                >
                  <span className="flex items-center gap-3">
                    <User className="w-4 h-4 shrink-0" />
                    <span>About Dr. Shikha Gupta</span>
                  </span>
                  <ChevronRight className="w-4 h-4 opacity-60" />
                </Link>

                {/* Services Collapsible Accordion */}
                <div className="rounded-element overflow-hidden border border-borderSubtle/70 bg-brandBlue-pale/30">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={cn(
                      "w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold transition-colors text-left",
                      pathname.startsWith("/services")
                        ? "text-brandBlue font-bold bg-brandBlue-soft/50"
                        : "text-navy hover:bg-brandBlue-pale"
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <Stethoscope className="w-4 h-4 text-brandBlue shrink-0" />
                      <span>Paediatric Services</span>
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-brandBlue/10 text-brandBlue px-2 py-0.5 rounded-pill">
                        7 Care Areas
                      </span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 text-bodyText-muted transition-transform duration-200",
                          mobileServicesOpen && "rotate-180 text-brandBlue"
                        )}
                      />
                    </div>
                  </button>

                  {/* Expandable Services List */}
                  {mobileServicesOpen && (
                    <div className="px-2 pb-2 pt-1 space-y-1 bg-white/80 border-t border-borderSubtle/60">
                      <Link
                        href="/services"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-3 py-1.5 rounded-element text-xs font-bold text-brandBlue hover:bg-brandBlue-soft transition-colors"
                      >
                        <span>View All Services Overview</span>
                        <span>→</span>
                      </Link>
                      <div className="h-px bg-borderSubtle/50 my-1" />
                      {servicesData.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "flex items-center justify-between px-3 py-1.5 rounded-element text-xs transition-colors",
                            pathname === `/services/${s.slug}`
                              ? "bg-brandBlue-soft text-brandBlue font-bold"
                              : "text-bodyText hover:text-navy hover:bg-brandBlue-pale"
                          )}
                        >
                          <span className="truncate">{s.title}</span>
                          <span className="text-[10px] text-bodyText-muted shrink-0 ml-2">
                            {s.eyebrow.split("•")[0]?.trim()}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Parent Reviews */}
                <Link
                  href="/reviews"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-3.5 py-2.5 rounded-element text-sm font-semibold transition-colors",
                    pathname.startsWith("/reviews")
                      ? "bg-brandBlue text-white shadow-soft font-bold"
                      : "text-navy hover:bg-brandBlue-pale"
                  )}
                >
                  <span className="flex items-center gap-3">
                    <Star className="w-4 h-4 shrink-0 text-amber-500 fill-amber-500" />
                    <span>Parent Reviews</span>
                  </span>
                  <span
                    className={cn(
                      "text-[11px] font-bold px-2 py-0.5 rounded-pill",
                      pathname.startsWith("/reviews")
                        ? "bg-white/20 text-white"
                        : "bg-amber-100 text-amber-800"
                    )}
                  >
                    4.9 ★
                  </span>
                </Link>

                {/* FAQs */}
                <Link
                  href="/faqs"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-3.5 py-2.5 rounded-element text-sm font-semibold transition-colors",
                    pathname.startsWith("/faqs")
                      ? "bg-brandBlue text-white shadow-soft font-bold"
                      : "text-navy hover:bg-brandBlue-pale"
                  )}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 shrink-0" />
                    <span>Doctor FAQs</span>
                  </span>
                  <ChevronRight className="w-4 h-4 opacity-60" />
                </Link>

                {/* Contact */}
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-3.5 py-2.5 rounded-element text-sm font-semibold transition-colors",
                    pathname.startsWith("/contact")
                      ? "bg-brandBlue text-white shadow-soft font-bold"
                      : "text-navy hover:bg-brandBlue-pale"
                  )}
                >
                  <span className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span>Clinic Location & Hours</span>
                  </span>
                  <ChevronRight className="w-4 h-4 opacity-60" />
                </Link>
              </nav>

              {/* Doctor Quick Profile Card */}
              <div className="p-3.5 rounded-card bg-gradient-to-br from-brandBlue-pale/60 via-white to-brandCyan/10 border border-borderSubtle space-y-2.5">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brandBlue/30 shadow-soft shrink-0">
                    <Image
                      src="/images/doctor/dr-shikha-gupta.jpg"
                      alt="Dr. Shikha Gupta"
                      fill
                      sizes="48px"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-navy text-sm truncate">
                      {doctorData.name}
                    </p>
                    <p className="text-[11px] text-brandBlue font-medium truncate">
                      MBBS (VMMC), MD Pediatrics (RML)
                    </p>
                    <p className="text-[10px] text-bodyText-muted truncate">
                      Sethi Multispecialty Clinic, Kamla Nagar
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-borderSubtle/60 flex items-center justify-between text-[11px] text-bodyText-muted">
                  <span className="flex items-center gap-1 font-medium text-navy">
                    <Clock className="w-3.5 h-3.5 text-brandBlue" />
                    Mon–Sat: 10:30–12:30 & 6:00–8:30
                  </span>
                </div>
              </div>
            </div>

            {/* Fixed Action Footer inside Drawer */}
            <div className="p-4 bg-white border-t border-borderSubtle shrink-0 space-y-2 shadow-lg">
              <Button
                href="/appointment"
                variant="primary"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full justify-center rounded-pill bg-gradient-to-r from-brandBlue to-brandCyan shadow-glow py-3 font-bold text-sm"
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>Book Appointment</span>
              </Button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-pill bg-emerald-600 text-white hover:bg-emerald-700 font-semibold text-xs transition-colors shadow-soft"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`tel:${clinicData.contact.phone}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-pill border border-borderSubtle text-navy font-semibold text-xs hover:bg-brandBlue-pale transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brandBlue" />
                  <span>Call Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
