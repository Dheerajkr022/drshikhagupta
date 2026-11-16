import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { WelcomePreview } from "@/components/sections/WelcomePreview";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { DoctorPreviewSection } from "@/components/sections/DoctorPreviewSection";
import { ClinicExperienceSection } from "@/components/sections/ClinicExperienceSection";
import { ReviewsPreviewSection } from "@/components/sections/ReviewsPreviewSection";
import { FAQsPreviewSection } from "@/components/sections/FAQsPreviewSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <WelcomePreview />
      <ServicesGrid />
      <WhyChooseSection />
      <DoctorPreviewSection />
      <ClinicExperienceSection />
      <ReviewsPreviewSection />
      <FAQsPreviewSection />
      <CtaSection />
    </>
  );
}

