# Dr. Shikha Gupta's Child Clinic — Official Website

Modern, accessible, and reassuring website for **Dr. Shikha Gupta's Child Clinic** (Consultant Paediatrician, Kamla Nagar, Delhi), built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**.

---

## 1. Project Overview & Architecture

Designed following the human-first healthcare design brief in `dr_shikha_gupta_website_development_brief.md`. The design avoids generic AI templates, excessive gradients, or cartoonish graphics, and instead provides a calm, editorial, reassuring clinical aesthetic with a considered blue-and-white color palette.

### Brand Palette
- **Primary Navy (`#123B67`)**: Headings, footer, structured accents.
- **Primary Blue (`#2563A6`)**: Interactive links, buttons, key highlights.
- **Soft Blue (`#EAF3FB`)**: Card surfaces, icon containers, subtle accents.
- **Pale Blue (`#F4F8FC`)**: Backgrounds, section separators, hover states.
- **White (`#FFFFFF`)**: Page canvas.
- **Body Neutral (`#344054`)**: High-contrast, readable body typography.
- **Muted Text (`#667085`)**: Captions, timestamps, and secondary metadata.
- **Border (`#DCE6F0`)**: Subtle hairline dividers.

---

## 2. Directory Structure

```text
src/
  app/
    layout.tsx                      # Root layout with emergency banner, header, footer, bottom mobile bar, and Schema.org LD-JSON
    page.tsx                        # Coherent 10-section homepage
    about/page.tsx                  # Biography, qualifications timeline, subspecialties, and care philosophy
    services/
      page.tsx                      # Services overview
      well-baby-care/page.tsx       # Routine infant visits & early milestones
      vaccination/page.tsx          # Immunisation schedules & record review
      growth-development/page.tsx   # Milestone tracking & percentiles
      childhood-illness/page.tsx    # Fevers, common ailments & red flags
      adolescent-care/page.tsx      # Pre-teen & teen healthcare guidance
      parental-counselling/page.tsx # Behaviour, routines & parenting support
      breastfeeding-support/page.tsx# Infant feeding, latch & weaning guidance
    reviews/page.tsx                # Verified parent feedback & medical ethics transparency note
    faqs/page.tsx                   # Accessible, searchable, categorized FAQs directory
    contact/page.tsx                # Address, map directions, consultation timings & enquiry form
    appointment/page.tsx            # Dedicated mobile-first appointment enquiry request flow
    privacy-policy/page.tsx         # DPDP Act 2023 compliant data protection policy
    sitemap.ts                      # Dynamic XML sitemap generator
    robots.ts                       # SEO robots.txt configuration
  components/
    layout/                         # SiteHeader, SiteFooter, EmergencyBanner, MobileBottomBar
    navigation/                     # Breadcrumbs navigation
    sections/                       # HeroSection, TrustStrip, WelcomePreview, ServicesGrid, etc.
    services/                       # ServiceCard, ServiceDetailTemplate
    reviews/                        # ReviewCard
    forms/                          # AppointmentForm, ContactForm (React Hook Form + Zod)
    ui/                             # Button, SectionHeading, Badge, Accordion
  data/
    clinic.ts                       # Single source of truth for clinic contact & hours
    doctor.ts                       # Single source of truth for qualifications & philosophy
    services.ts                     # Single source of truth for all 7 clinical service areas
    testimonials.ts                 # Verified parent reviews
    faqs.ts                         # Complete FAQ questions & answers
  lib/
    utils.ts                        # Tailwind class utilities
    validation.ts                   # Zod schemas for appointment & contact forms
    metadata.ts                     # Metadata & OpenGraph helper
    structured-data.ts              # Physician, MedicalClinic, Breadcrumb, FAQ Schema.org generators
  styles/
    globals.css                     # Tailwind layers, focus styles, smooth scroll, reduced motion
```

---

## 3. Key UX & Safety Features

1. **Single Source of Truth (`src/data/`)**: All phone numbers, addresses, consultation timings, qualifications, and copy are kept in typed data files. Modifying any detail in `src/data/clinic.ts` updates the header, footer, contact page, booking forms, and metadata simultaneously.
2. **Medical Emergency Advisory**: Dedicated top bar and inline callouts explicitly advising parents that severe breathing distress, seizures, or trauma require immediate emergency hospital care rather than website enquiries.
3. **Appointment Request vs Confirmed Booking**: Forms clearly inform parents that submissions are preliminary requests that will be confirmed by the clinic desk via phone or WhatsApp.
4. **Mobile Bottom Action Bar**: Non-intrusive floating bar on mobile screens offering one-tap access to **Call**, **WhatsApp**, and **Book**.
5. **Healthcare Privacy & DPDP Compliance**: Minimal information collection without ad trackers or third-party marketing pixels.

---

## 4. Development & Production Commands

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run TypeScript type check
npx tsc --noEmit

# Build production bundle
npm run build

# Start production server
npm run start
```

---

## 5. Pre-Launch Verification Checklist (For Doctor / Clinic Team)

Before taking the website live on `https://drshikhagupta.com/`, the following items must be verified directly with Dr. Shikha Gupta:

- [ ] **Experience Statement**: Finalise the exact approved years of experience (or keep the current neutral designation: *"Senior Paediatric Clinical Experience"*).
- [ ] **Clinic Timings**: Confirm that morning consultation hours are 10:30 AM – 12:30 PM (and confirm holiday variations).
- [ ] **State Medical Council Registration**: Provide the exact registration number if the doctor chooses to display it on the website.
- [ ] **Photography**: Replace placeholder silhouettes with the doctor's approved professional portrait and consented clinic photos.
- [ ] **Payment Methods**: Confirm accepted methods (UPI / Cash / Card) at reception.
- [ ] **Google Business Profile Alignment**: Ensure address formatting matches the Google Maps pin.

