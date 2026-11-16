# Website Development Brief --- Dr. Shikha Gupta's Child Clinic

**Project:** Official website redesign and development\
**Website:** https://drshikhagupta.com/\
**Technology:** Next.js (App Router), React, TypeScript, Tailwind CSS\
**Visual identity:** Blue and white, aligned with the clinic logo\
**Primary objective:** Build trust with parents and make it easy to
call, enquire, find the clinic and request an appointment.

------------------------------------------------------------------------

## 1. Project vision

Create a polished, welcoming and credible paediatric clinic website that
feels like it was designed by a thoughtful human design studio---not
generated from a generic AI website template.

The experience should communicate three things immediately:

1.  **Who provides the care:** Dr. Shikha Gupta, Consultant
    Paediatrician.
2.  **What the clinic helps with:** newborn and child care, vaccination,
    growth and development, adolescent care and parent guidance.
3.  **What a parent should do next:** call the clinic, send a WhatsApp
    enquiry or request an appointment.

The website must be reassuring without making exaggerated medical
claims. Avoid phrases such as "best doctor", "100% safe", "guaranteed
cure", "No. 1 clinic" or unsupported outcome claims.

### Audience

-   Parents and caregivers of newborns, infants, children and teenagers.
-   First-time parents looking for reliable guidance.
-   Families looking for vaccination and preventive-care information.
-   Parents in and around Kamla Nagar and North Delhi.

### Main conversion actions

-   Call clinic
-   WhatsApp enquiry
-   Request an appointment
-   Get directions
-   Read about the doctor and services

------------------------------------------------------------------------

## 2. Research findings and content audit

The current official website describes Dr. Shikha Gupta as a consultant
paediatrician practising in Kamla Nagar, Delhi. It publishes the
following qualifications and background:

-   MBBS from Vardhman Mahavir Medical College (VMMC) and Safdarjung
    Hospital, New Delhi.
-   MD Pediatrics from Dr. Ram Manohar Lohia Hospital / PGIMER, Delhi.
-   Former Senior Resident Doctor at RML Hospital.
-   Clinical exposure across paediatric subspecialty areas including
    haematology, cardiology, infectious diseases, neurology and
    respiratory medicine.
-   A stated focus on preventive healthcare, screening, early
    recognition, growth and development, and parent education.

The official site lists these service areas:

-   Well-baby care
-   Vaccination
-   Growth and development monitoring
-   Adolescent care
-   Parental counselling
-   Breastfeeding counselling
-   Childhood illness consultation and treatment

The official site also lists these clinic contact details:

-   Phone: +91 99586 83094
-   Email: sshikhagarg2007@gmail.com
-   Address: D-26, Sethi Multispecialty Clinic, Bhatia Chowk, Kamla
    Nagar, Delhi -- 110007

The existing About page contains parent feedback attributed to named
reviewers. The new site should only publish genuine, permissioned
testimonials and must not invent, rewrite as medical endorsements, or
add fabricated star ratings.

### Important inconsistencies to resolve before launch

Do not silently choose one value when sources conflict:

1.  **Experience:** The official website has different statements of 6
    and 8 years. Other public doctor listings show different figures
    again. Ask the doctor to confirm the exact, supportable experience
    statement and the date from which it is counted.
2.  **Clinic timings:** The Services page currently lists
    Monday--Saturday, morning 10:30--12:30 and evening 6:00--8:30, with
    Sunday by appointment. Confirm these timings directly before
    publishing. Check whether the morning end time is AM or PM; the
    current page has a formatting error.
3.  **Address:** The official site lists D-26, Sethi Multispecialty
    Clinic, Bhatia Chowk, Kamla Nagar. Confirm the exact current address
    and pin location with the clinic.
4.  **Qualifications and designation:** Verify exact degree names,
    institution names, professional registration number and approved
    designation with the doctor.
5.  **Services:** Confirm which services are currently offered at this
    clinic and which require referral or another facility.
6.  **Fees and payment:** Do not publish a consultation fee, payment
    methods or insurance/TPA information until confirmed by the clinic.
7.  **Emergency availability:** Do not imply 24/7 availability or
    emergency services unless the clinic has confirmed and can
    consistently provide them.

Use a single approved source of truth for the doctor's name,
qualifications, registration number, address, phone, hours and fees. The
website, Google Business Profile and other listings should match.

------------------------------------------------------------------------

## 3. Brand and visual design system

### Colour palette

Use only a considered blue-and-white family, with neutral grey for
supporting text and borders. Match the exact logo blue after inspecting
the supplied logo asset.

Suggested starting palette (adjust to the logo):

  Role           Colour                              Hex
  -------------- ----------------------------------- -----------
  Primary navy   Main headings, footer, strong CTA   `#123B67`
  Primary blue   Links, buttons, key highlights      `#2563A6`
  Soft blue      Section backgrounds, cards          `#EAF3FB`
  Pale blue      Small highlights and hover states   `#F4F8FC`
  White          Main page background                `#FFFFFF`
  Body text      Readable dark neutral               `#344054`
  Muted text     Captions and metadata               `#667085`
  Border         Subtle separators                   `#DCE6F0`

Do not introduce random purple, orange, neon gradients or unrelated
accent colours. Use colour consistently and maintain WCAG contrast.

### Typography

Use a human, editorial combination rather than the default look of a
template:

-   Headings: `DM Sans` or `Manrope`, with restrained weight variation.
-   Body: `Inter` or `DM Sans`.
-   Use a clear type scale, comfortable line-height and short paragraph
    widths.
-   Avoid oversized all-caps text, excessive bolding and too many
    different font sizes.

Load fonts locally or through `next/font` to avoid layout shifts.

### Visual direction

-   Calm, premium, clean and approachable.
-   White canvas with selected pale-blue sections.
-   Navy headings and blue calls to action.
-   Rounded corners used sparingly (12--18px), not every element as a
    pill.
-   Thin borders and subtle shadows only where useful.
-   Consistent spacing and a clear grid.
-   Use genuine photos of Dr. Shikha Gupta and the actual clinic
    wherever possible.
-   If genuine images are not available, use carefully licensed,
    natural-looking healthcare photography. Do not imply a stock person
    is the doctor or a real patient.
-   Avoid cartoon doctors, floating 3D medical icons, AI-looking faces,
    random blobs, excessive gradients, glassmorphism and generic
    dashboard-style cards.

### Photography shot list

Request these assets from the clinic:

1.  A professional portrait of Dr. Shikha Gupta.
2.  A natural consultation photograph with parent and child (with
    written consent).
3.  Actual clinic exterior and reception.
4.  Consultation room.
5.  Doctor interacting with a child in a non-identifiable, consented
    setting.
6.  A few authentic team/clinic photographs if relevant.

Use descriptive alt text. Never publish identifiable child/patient
photos without informed parent/guardian consent and appropriate
safeguards.

------------------------------------------------------------------------

## 4. Sitemap and page structure

Build the following pages:

  -----------------------------------------------------------------------------------
  Route                               Page                    Purpose
  ----------------------------------- ----------------------- -----------------------
  `/`                                 Home                    Introduce the clinic
                                                              and guide visitors to
                                                              book

  `/about`                            About Dr. Shikha        Qualifications,
                                                              experience, care
                                                              philosophy

  `/services`                         All services            Overview of care areas

  `/services/well-baby-care`          Well-baby care          Explain routine infant
                                                              visits

  `/services/vaccination`             Vaccination             Explain vaccination
                                                              consultation and
                                                              schedule guidance

  `/services/growth-development`      Growth & development    Explain monitoring and
                                                              milestones

  `/services/childhood-illness`       Childhood illness       Explain paediatric
                                                              consultations

  `/services/adolescent-care`         Adolescent care         Explain age-appropriate
                                                              support

  `/services/parental-counselling`    Parent counselling      Explain practical
                                                              guidance for caregivers

  `/services/breastfeeding-support`   Breastfeeding           Explain feeding
                                      counselling             support, if currently
                                                              offered

  `/reviews`                          Patient feedback        Display authentic,
                                                              approved feedback

  `/faqs`                             FAQs                    Answer common
                                                              administrative and
                                                              service questions

  `/contact`                          Contact                 Phone, WhatsApp, map,
                                                              address and hours

  `/appointment`                      Appointment request     Enquiry form and
                                                              confirmation state

  `/privacy-policy`                   Privacy policy          Explain data collection
                                                              and handling
  -----------------------------------------------------------------------------------

If the clinic prefers a smaller site, service detail pages can be
consolidated into `/services`, but each service should still have a
clearly labelled section and useful information.

------------------------------------------------------------------------

## 5. Global navigation and reusable elements

### Header

-   Logo on the left.
-   Navigation: Home, About, Services, Patient Feedback, FAQs, Contact.
-   Primary CTA: "Request an Appointment".
-   Mobile menu with accessible open/close control.
-   Optional small phone link in desktop header.
-   Sticky header only if it does not obscure content or reduce the
    mobile viewport.

### Floating/mobile actions

On mobile, provide a compact, non-obstructive bottom action bar: -
Call - WhatsApp - Appointment

Do not cover form controls, browser controls or important content.
Respect safe-area insets.

### Footer

Include: - Logo and short clinic introduction. - Navigation links. -
Service links. - Phone and email. - Confirmed clinic address. -
Confirmed clinic hours. - Google Maps directions link. - Privacy
policy. - Copyright notice. - A brief note that website information is
general and does not replace an in-person medical assessment.

### Reusable components

-   `SiteHeader`
-   `MobileNavigation`
-   `SiteFooter`
-   `PrimaryButton`
-   `SecondaryButton`
-   `SectionHeading`
-   `DoctorProfileCard`
-   `ServiceCard`
-   `TestimonialCard`
-   `FAQAccordion`
-   `ContactDetails`
-   `AppointmentForm`
-   `WhatsAppButton`
-   `CallButton`
-   `MapEmbed`
-   `Breadcrumbs`
-   `PageHero`
-   `TrustHighlights`

------------------------------------------------------------------------

## 6. Homepage --- detailed wireframe and content

The homepage should tell a coherent story. Avoid placing unrelated
sections in a random sequence.

### Section 1: Hero

**Eyebrow:** CHILD HEALTHCARE IN KAMLA NAGAR, DELHI

**Headline:** Thoughtful Care for Every Stage of Childhood.

**Supporting copy:** From your baby's first check-up to the growing
years, Dr. Shikha Gupta offers paediatric consultations with a focus on
preventive care, healthy development and helping parents feel informed.

**Primary CTA:** Request an Appointment\
**Secondary CTA:** Call +91 99586 83094

Visual: - Real, high-quality doctor portrait or authentic consultation
photograph. - Calm white background with a restrained pale-blue shape or
panel. - Avoid a generic stock hospital banner.

### Section 2: Quick trust strip

Use 3--4 factual highlights, only after verification:

-   MBBS --- VMMC & Safdarjung Hospital
-   MD Pediatrics --- RML Hospital / PGIMER
-   Consultant Paediatrician
-   Kamla Nagar, Delhi

Do not use unsupported numerical counters or claims such as "10,000+
happy patients".

### Section 3: Welcome / About preview

**Heading:** Care That Listens to Children and Parents.

**Copy:** Every child grows at their own pace, and every parent has
questions along the way. Dr. Shikha Gupta's approach brings together
clinical assessment, preventive care and clear conversations, so
families can better understand their child's health and next steps.

CTA: Meet Dr. Shikha Gupta

### Section 4: Services

**Heading:** Care for the Little Things That Matter.

Intro: Explore the clinic's paediatric care services, from routine
check-ups and vaccination guidance to growth monitoring and support for
parents.

Create service cards for:

1.  **Well-Baby Care** --- Routine health visits for infants, with
    attention to feeding, growth, development and common concerns.
2.  **Vaccination Guidance** --- Consultation on age-appropriate
    immunisation and vaccination schedules, based on applicable
    recommendations.
3.  **Growth & Development** --- Monitoring growth patterns and
    developmental milestones, with guidance when further assessment is
    needed.
4.  **Childhood Illness Consultation** --- Assessment and treatment
    guidance for common childhood health concerns.
5.  **Adolescent Care** --- Age-appropriate consultation and guidance
    for the physical and emotional changes of adolescence.
6.  **Parental Counselling** --- A space for parents to discuss everyday
    concerns, behaviour, routines and child development.
7.  **Breastfeeding Counselling** --- Support with breastfeeding
    questions and feeding-related concerns, if currently offered.

Each card should link to its service detail page.

### Section 5: Why choose Dr. Shikha Gupta?

**Heading:** A Thoughtful Approach to Your Child's Care.

Use evidence-based reasons rather than generic marketing claims:

-   **A conversation-first approach:** Parents are encouraged to share
    their concerns and ask questions.
-   **Preventive care matters:** Routine check-ups, screening and early
    recognition are part of the clinic's stated approach.
-   **Growth beyond numbers:** Visits can include attention to growth
    and developmental milestones.
-   **Guidance for parents:** Clear explanations help caregivers
    understand recommendations and follow-up.
-   **Paediatric-focused training:** Display verified medical
    qualifications and professional details.
-   **Care across growing years:** Present the confirmed age range and
    services available at the clinic.

Do not claim guaranteed outcomes, instant access or 24-hour support
unless verified.

### Section 6: Meet the doctor

**Heading:** Meet Dr. Shikha Gupta.

**Draft copy:** Dr. Shikha Gupta is a Consultant Paediatrician
practising in Kamla Nagar, Delhi. She completed her MBBS at VMMC and
Safdarjung Hospital and pursued MD Pediatrics at RML Hospital / PGIMER,
Delhi. Her clinical experience includes exposure to several areas of
paediatric medicine. She places importance on preventive healthcare,
growth and development monitoring, early recognition and helping parents
make informed decisions about their child's care.

Include: - Real doctor portrait. - Verified qualifications. -
Professional registration number, once supplied and checked. - A
concise, confirmed experience statement. - CTA: Read More About
Dr. Shikha

### Section 7: The clinic experience

**Heading:** A Convenient Place for Your Child's Consultation.

Use real clinic photos and practical information: - Clinic name. - Full
confirmed address. - Confirmed clinic timings. - Directions link. -
Accessibility/parking information only if verified.

### Section 8: Parent feedback

**Heading:** Words from Parents.

Use only authentic reviews with permission and attribution rules
checked. Do not fabricate names, dates, star ratings or edited medical
claims. If using third-party reviews, link to the original public review
source and follow its display rules. Avoid implying that testimonials
predict another patient's outcome.

Show 2--3 selected comments with a "Read more feedback" link. Do not
duplicate the same reviews several times as the current site does.

### Section 9: FAQs preview

Suggested questions: - What age groups does the clinic see? - How can I
request an appointment? - What should I bring to my child's first
visit? - Can I ask about my child's vaccination schedule? - Does the
clinic offer growth and development assessments? - What are the clinic
timings? - Where is the clinic located?

Answers must be confirmed by the doctor or clinic team.

### Section 10: Final CTA

**Heading:** Have a Question About Your Child's Health?

**Copy:** Get in touch with the clinic to enquire about an appointment
or the services available.

Buttons: - Call the Clinic - WhatsApp the Clinic - Request an
Appointment

### Section 11: Footer

Use the global footer described above.

------------------------------------------------------------------------

## 7. About page

### Hero

**Headline:** Getting to Know Dr. Shikha Gupta.

**Intro:** A paediatrician's role is not only to care for a child when
they are unwell, but also to help families understand the everyday steps
that support healthy growth.

### Doctor profile

Use a genuine portrait and the approved biography.

**Draft biography:**

Dr. Shikha Gupta is a Consultant Paediatrician practising in Kamla
Nagar, Delhi. She completed her MBBS from Vardhman Mahavir Medical
College and Safdarjung Hospital, New Delhi, followed by MD Pediatrics
from Dr. Ram Manohar Lohia Hospital / PGIMER, Delhi. She has clinical
exposure across multiple areas of paediatric medicine, including
respiratory medicine, infectious diseases, neurology, cardiology and
haematology.

Her stated approach places emphasis on preventive healthcare, screening,
early recognition, growth and development monitoring, and giving parents
time to discuss their concerns.

**Important:** Confirm all wording, institutions, dates and experience
with the doctor before publishing.

### Qualifications and professional background

Present as a clean timeline or editorial list: - MBBS --- VMMC &
Safdarjung Hospital, New Delhi. - MD Pediatrics --- RML Hospital /
PGIMER, Delhi. - Former Senior Resident --- RML Hospital (confirm
dates). - Professional registration --- add exact council and
registration number after verification.

Do not use unverified awards, memberships, certifications or
affiliations.

### Care philosophy

**Heading:** Helping Parents Feel Informed, Not Overwhelmed.

Suggested points: - Listen carefully to the concern behind the visit. -
Explain assessments and recommendations in understandable language. -
Give attention to preventive care and age-appropriate screening. -
Monitor growth and development as clinically appropriate. - Encourage
parents to ask questions and understand follow-up steps.

### Why families visit

Use the factual differentiators published by the clinic: - Paediatric
consultation. - Preventive health focus. - Growth and development
evaluation. - Vaccination guidance. - Parent and breastfeeding
counselling, where offered.

### CTA

**Heading:** Let's Talk About Your Child's Care.

Button: Request an Appointment

------------------------------------------------------------------------

## 8. Services overview and service detail page template

The services page should not be a wall of generic text. Each service
should explain what it is, when a parent might enquire, what may be
discussed and how to arrange a visit. Avoid providing individual
diagnosis or treatment instructions through marketing copy.

### Service 1: Well-Baby Care

**Headline:** Support for Your Baby's Early Milestones.

Explain that well-baby visits provide an opportunity to discuss feeding,
sleep, growth, development, routine care and parent questions. The
doctor can advise on the appropriate visit schedule for the individual
child.

Suggested content blocks: - What a well-baby visit may cover. - Growth
and developmental observations. - Feeding and routine-care questions. -
When to arrange a consultation. - What parents may bring to the visit.

### Service 2: Vaccination

**Headline:** Understand Your Child's Vaccination Needs.

Explain that vaccination consultations help parents discuss
age-appropriate immunisation, due doses, records and questions about
vaccines. The doctor should confirm the schedule based on the child's
age, history and current recommendations.

Content blocks: - Review of the child's vaccination record. - Discussion
of due and upcoming vaccines. - Guidance on missed or delayed doses. -
Parent questions and post-vaccination guidance. - Bring the child's
vaccination card/records.

Do not publish a static schedule unless it is reviewed and dated by the
doctor. Avoid claims that every vaccine is always in stock; confirm
current availability before saying so.

### Service 3: Growth & Development

**Headline:** Following Your Child's Growth, Step by Step.

Explain that growth and development assessments may consider
height/length, weight, age-appropriate milestones and parent
observations. The doctor can explain whether a child's progress needs
follow-up or further assessment.

Content blocks: - Growth measurements and trends. - Developmental
milestones. - Nutrition and daily routines. - Parent questions and
follow-up planning.

### Service 4: Childhood Illness Consultation

**Headline:** Paediatric Guidance When Your Child Is Unwell.

Explain that parents can enquire about consultations for common
childhood health concerns. The doctor assesses the child and recommends
appropriate next steps.

Content blocks: - What concerns the clinic can assess (confirm exact
scope). - What information to share during booking. - What previous
prescriptions or reports to bring. - When urgent/emergency services are
needed.

Include a clear safety note: for severe breathing difficulty,
unconsciousness, seizures, severe dehydration or another medical
emergency, seek emergency medical care immediately rather than waiting
for a website response or routine appointment.

### Service 5: Adolescent Care

**Headline:** Support Through the Growing Years.

Explain that adolescence brings physical, emotional and social changes.
A consultation can provide a private, respectful and age-appropriate
opportunity to discuss health questions, development and wellbeing,
within appropriate safeguarding and confidentiality practices.

Confirm the age range and scope with the doctor.

### Service 6: Parental Counselling

**Headline:** A Space for Parents to Ask, Learn and Understand.

Explain that parents can discuss child development, behaviour, routines,
feeding or other parenting concerns. Avoid implying that a paediatric
consultation replaces specialist mental-health care when that is
required.

### Service 7: Breastfeeding Counselling

**Headline:** Guidance for Your Breastfeeding Questions.

Explain that parents may discuss feeding concerns, positioning, latch,
feeding patterns or when to seek additional support, only to the extent
that these services are actually provided by the clinic. Confirm service
scope and any referral arrangements.

### Shared CTA on service pages

"Would you like to discuss this with the clinic?"

Buttons: Call / WhatsApp / Request an Appointment

------------------------------------------------------------------------

## 9. Reviews and patient feedback

Create a clean, restrained review section.

### Rules

-   Use genuine feedback from actual patients/parents only.
-   Obtain permission for testimonials displayed directly on the
    clinic's website.
-   Do not create fictional reviews or combine multiple comments into
    one quote.
-   Do not change the meaning of a review.
-   Do not add star ratings unless they are accurately sourced and
    permitted.
-   Do not imply a particular result is typical or guaranteed.
-   Do not offer incentives for positive reviews.
-   Check applicable professional-conduct rules and legal advice before
    publishing patient testimonials or endorsements on a doctor's own
    promotional website.
-   Keep patient identity and health information private.

### Recommended implementation

-   Display a small number of approved testimonials.
-   Keep the original wording, with only minimal spelling correction if
    the reviewer approves.
-   Include source/date only where permission and source terms allow.
-   Link to the original review platform where appropriate.
-   Provide a neutral link to the clinic's public review profile if
    allowed.
-   If the testimonials cannot be approved for website use, replace the
    section with factual "What parents can expect" information instead.

------------------------------------------------------------------------

## 10. Contact page

### Hero

**Headline:** We're Here to Help You Take the Next Step.

**Copy:** For appointment enquiries, clinic timings or questions about
available paediatric services, contact the clinic using the details
below.

### Contact information

-   **Doctor:** Dr. Shikha Gupta
-   **Phone:** +91 99586 83094
-   **Email:** sshikhagarg2007@gmail.com
-   **Clinic:** D-26, Sethi Multispecialty Clinic, Bhatia Chowk, Kamla
    Nagar, Delhi -- 110007

Confirm all details before launch.

### Clinic timings

Use a clear weekly schedule, but only after the clinic confirms the
current timings. Current official website text appears to list: - Monday
to Saturday: morning 10:30--12:30 - Monday to Saturday: evening
6:00--8:30 - Sunday: by appointment

The morning time format is ambiguous on the current site. Confirm exact
AM/PM and any holiday variations.

### Enquiry form fields

-   Parent/guardian name (required)
-   Phone number (required)
-   Email (optional)
-   Child's age (optional; avoid asking for unnecessary sensitive
    details)
-   Enquiry type (appointment / service information / clinic timings /
    other)
-   Preferred date/time (optional; clearly state that this is a request,
    not a confirmed booking)
-   Message (optional; instruct users not to include detailed medical
    records or emergency information)
-   Consent checkbox for being contacted about this enquiry, with link
    to privacy notice.

Success message: "Thank you. Your enquiry has been received. The clinic
team will contact you using the details provided. Your appointment is
not confirmed until the clinic confirms it."

Do not promise instant replies.

### Map and directions

-   Embed a map only after confirming the exact clinic pin.
-   Provide a separate "Get Directions" link.
-   Include the address as selectable text.
-   Do not guess the map coordinates.

### Contact CTAs

-   `tel:+919958683094`
-   WhatsApp link using the verified number and a prefilled neutral
    message such as "Hello, I would like to enquire about an appointment
    with Dr. Shikha Gupta."
-   `mailto:sshikhagarg2007@gmail.com`

------------------------------------------------------------------------

## 11. Appointment request flow

Create a simple, mobile-first request flow:

1.  Visitor clicks "Request an Appointment".
2.  Visitor enters name and phone number.
3.  Visitor optionally enters child's age and preferred appointment
    date/time.
4.  Visitor selects the reason for enquiry from a short list.
5.  Visitor reads the privacy notice and checks the contact consent box.
6.  Form validates and submits securely.
7.  Visitor sees a clear confirmation page/message.
8.  Clinic team receives the enquiry through a secure configured channel
    and contacts the parent to confirm availability.

**Important:** Do not present a submitted request as a booked
appointment. A booking is confirmed only after the clinic confirms it.

Do not collect detailed medical histories, diagnoses, prescriptions or
reports through a basic marketing form. If the clinic later needs secure
clinical intake, implement a separate appropriately protected system.

------------------------------------------------------------------------

## 12. FAQs

Create an accessible accordion. Initial suggested questions:

1.  Which age groups does Dr. Shikha Gupta consult?
2.  Where is the clinic located?
3.  What are the current clinic timings?
4.  How can I request an appointment?
5.  Is an appointment required before visiting?
6.  What should I bring for my child's first consultation?
7.  Can I bring my child's vaccination card for review?
8.  Does the clinic provide well-baby consultations?
9.  Can I discuss growth and developmental milestones?
10. Does the clinic offer adolescent consultations?
11. Is breastfeeding counselling available?
12. What payment methods are accepted?
13. What should I do if my child needs urgent medical attention?

Only publish answers confirmed by the clinic. For urgent concerns,
direct visitors to emergency medical services rather than promising a
response through the website.

------------------------------------------------------------------------

## 13. Privacy, consent and healthcare trust

The site may collect names, phone numbers, email addresses and limited
child-related information. Treat this information carefully.

-   Publish a clear privacy notice explaining what data is collected,
    why, who can access it, how long it is retained and how a person can
    contact the clinic about it.
-   Collect only the minimum information needed to respond to an
    enquiry.
-   Use explicit, understandable consent language where required.
-   Do not send health-related form contents to advertising pixels,
    analytics tools, session-replay tools or unrelated third parties.
-   Do not record form field contents in analytics or error logs.
-   Use HTTPS throughout.
-   Restrict access to submissions and configure retention/deletion
    procedures.
-   Use secure server-side validation and spam protection.
-   Do not expose private API keys in client-side code.
-   Obtain appropriate parent/guardian consent before publishing a
    child's identifiable photo, story or testimonial.
-   Have the clinic review the privacy notice and legal obligations
    before launch, including applicable Indian data-protection
    requirements.

------------------------------------------------------------------------

## 14. SEO and local search setup

### Core local SEO

Use consistent clinic details across: - Website - Google Business
Profile - Relevant doctor directories - Social profiles

Target natural, location-specific phrases where relevant: -
Paediatrician in Kamla Nagar - Child specialist in Kamla Nagar, Delhi -
Child vaccination in Kamla Nagar - Well-baby care in North Delhi - Child
growth and development consultation in Delhi

Do not stuff keywords into every heading. Write for parents first.

### Page metadata suggestions

**Home** - Title: Dr. Shikha Gupta \| Paediatrician in Kamla Nagar,
Delhi - Description: Explore paediatric consultations, well-baby care,
vaccination guidance and child growth support with Dr. Shikha Gupta in
Kamla Nagar, Delhi.

**About** - Title: About Dr. Shikha Gupta \| Consultant Paediatrician,
Delhi - Description: Learn about Dr. Shikha Gupta's paediatric
qualifications, clinical background and approach to child healthcare.

**Services** - Title: Paediatric Services \| Dr. Shikha Gupta, Kamla
Nagar - Description: Explore well-baby care, vaccination guidance,
growth and development monitoring, adolescent care and parent
counselling.

**Contact** - Title: Contact Dr. Shikha Gupta \| Child Clinic, Kamla
Nagar - Description: Find the clinic address, confirmed timings and
contact details to enquire about an appointment.

### Technical SEO

-   Unique title and meta description per page.
-   Canonical URLs.
-   XML sitemap.
-   `robots.txt`.
-   Open Graph and social sharing metadata.
-   Descriptive image alt text.
-   Breadcrumbs on service pages.
-   Internal links between home, about, services, FAQs and contact.
-   Correct heading hierarchy (one clear H1 per page).
-   LocalBusiness/MedicalClinic/Physician structured data only with
    accurate, visible and verified facts. Validate schema before
    deployment.
-   Do not add fake aggregate ratings or review schema.
-   Set up Google Search Console after launch.
-   Create a redirect map for old URLs if routes change; preserve
    existing useful URLs where possible.

------------------------------------------------------------------------

## 15. Design details that make it feel human-made

This is a key requirement. Do not build a page that looks like a
predictable AI-generated landing page.

### Do

-   Use an editorial layout with varied section compositions.
-   Give the doctor's real portrait a prominent but natural role.
-   Use real clinic details and meaningful copy.
-   Mix full-width sections, two-column layouts, small factual strips
    and restrained cards.
-   Use generous white space and intentional alignment.
-   Keep text lengths varied and natural.
-   Use small, purposeful interactions: subtle hover states, a gentle
    accordion transition and a restrained entrance animation.
-   Use consistent icon style (Lucide icons) only when an icon improves
    comprehension.
-   Make mobile layouts feel deliberately designed, not just squeezed
    desktop layouts.

### Do not

-   Use the same 3-card layout in every section.
-   Use excessive rounded cards, gradients, glass effects or floating
    blobs.
-   Add fake statistics, fake badges, fake awards or made-up
    testimonials.
-   Use generic copy like "Your health, our priority" repeatedly.
-   Use AI-generated-looking doctor/patient images as if they were real
    clinic photographs.
-   Add autoplay videos, unnecessary carousels or distracting motion.
-   Put every section inside a coloured container.
-   Use giant headings that push the useful information below the fold.

### Motion

-   Prefer CSS transitions and small Framer Motion interactions only
    where useful.
-   Respect `prefers-reduced-motion`.
-   No scroll-jacking, parallax overload or animation that delays access
    to contact information.

------------------------------------------------------------------------

## 16. Technical implementation requirements

### Stack

-   Next.js with App Router.
-   React.
-   TypeScript.
-   Tailwind CSS.
-   `next/image` for optimised images.
-   `next/font` for typography.
-   Lucide React for consistent icons.
-   React Hook Form + Zod for form validation (or an equally robust
    approach).
-   Server Actions or a secure API route for form submission.
-   A database or secure clinic-approved notification destination for
    appointment enquiries, if required.

Do not add a database, CMS or complex booking engine unless the clinic
needs it. Keep the first version simple, maintainable and secure.

### Suggested project structure

``` text
src/
  app/
    layout.tsx
    page.tsx
    about/
      page.tsx
    services/
      page.tsx
      well-baby-care/
        page.tsx
      vaccination/
        page.tsx
      growth-development/
        page.tsx
      childhood-illness/
        page.tsx
      adolescent-care/
        page.tsx
      parental-counselling/
        page.tsx
      breastfeeding-support/
        page.tsx
    reviews/
      page.tsx
    faqs/
      page.tsx
    contact/
      page.tsx
    appointment/
      page.tsx
    privacy-policy/
      page.tsx
    sitemap.ts
    robots.ts
  components/
    layout/
    navigation/
    sections/
    services/
    forms/
    ui/
  data/
    doctor.ts
    services.ts
    testimonials.ts
    faqs.ts
    clinic.ts
  lib/
    validation.ts
    metadata.ts
    structured-data.ts
  types/
    index.ts
  styles/
    globals.css
public/
  images/
    doctor/
    clinic/
    services/
  logo/
```

### Content architecture

Keep doctor, clinic, service, FAQ and approved testimonial information
in typed data files or a CMS. Avoid hardcoding the same phone number,
address and hours in multiple components.

Create one source of truth for clinic details and reuse it throughout
the site.

### Performance

-   Use responsive image sizes and modern formats.
-   Lazy-load below-the-fold images.
-   Avoid shipping unnecessary client-side JavaScript.
-   Prefer Server Components for static content.
-   Keep interactive client components small.
-   Avoid layout shifts.
-   Target strong Core Web Vitals, especially on mobile.
-   Test on a mid-range Android phone and a slower mobile connection.

### Accessibility

-   Semantic HTML.
-   Keyboard-accessible navigation and forms.
-   Visible focus states.
-   Proper labels and helpful validation messages.
-   Accessible accordion controls.
-   Sufficient colour contrast.
-   Alt text for meaningful images; empty alt for decorative images.
-   Respect reduced-motion preferences.
-   Do not rely on colour alone to convey meaning.

### Security

-   Server-side form validation.
-   Rate limiting and spam protection.
-   Safe handling of environment variables.
-   No secrets in browser bundles.
-   HTTPS.
-   Restrict access to enquiry submissions.
-   Avoid logging personal or health information.
-   Configure backups and retention if submissions are stored.

------------------------------------------------------------------------

## 17. Analytics and conversion tracking

Track only what is useful and privacy-appropriate:

-   Appointment CTA clicks.
-   Phone link clicks.
-   WhatsApp link clicks.
-   Directions clicks.
-   Appointment form starts and successful submissions.
-   Service page views.

Do not send names, phone numbers, message contents, child details or
medical information to GA4, Meta Pixel, Google Ads or other advertising
platforms.

Use consent-aware analytics and have the clinic approve the tracking and
privacy setup. Avoid session replay on pages or forms where sensitive
information may be entered.

------------------------------------------------------------------------

## 18. Testing and launch checklist

### Content and approvals

-   [ ] Doctor approves biography and qualifications.
-   [ ] Registration number and professional details verified.
-   [ ] Experience statement reconciled and approved.
-   [ ] Service list and service scope confirmed.
-   [ ] Clinic address and map pin confirmed.
-   [ ] Clinic hours confirmed, including AM/PM.
-   [ ] Phone, WhatsApp and email tested.
-   [ ] Fees/payment details confirmed or omitted.
-   [ ] Testimonials approved and permissions documented.
-   [ ] All photos approved for website use.
-   [ ] Privacy notice reviewed.

### Design and usability

-   [ ] Logo displays correctly.
-   [ ] Blue and white palette matches brand identity.
-   [ ] Desktop, tablet and mobile layouts checked.
-   [ ] Navigation works with keyboard and touch.
-   [ ] Buttons have clear labels and states.
-   [ ] No broken links or placeholder content.
-   [ ] No fake counters, claims, reviews or badges.
-   [ ] Text is readable and easy for parents to understand.

### Technical

-   [ ] All forms validate on client and server.
-   [ ] Form success and failure states work.
-   [ ] Appointment requests are not mislabelled as confirmed bookings.
-   [ ] Spam protection and rate limits configured.
-   [ ] Metadata and canonical URLs correct.
-   [ ] Sitemap and robots file work.
-   [ ] Structured data validated.
-   [ ] HTTPS and redirects checked.
-   [ ] Core Web Vitals and mobile performance tested.
-   [ ] Search Console configured.
-   [ ] Analytics events tested without collecting sensitive data.

------------------------------------------------------------------------

## 19. Delivery milestones

1.  **Discovery:** Confirm logo, photos, clinic details, timings,
    credentials, service scope and testimonials.
2.  **Design system:** Define palette, typography, spacing, buttons,
    cards and responsive behaviour.
3.  **Homepage:** Build and approve the homepage before creating all
    inner pages.
4.  **Inner pages:** Build About, Services, service detail pages,
    Reviews, FAQs, Contact and Appointment.
5.  **Functionality:** Add forms, call/WhatsApp links, map, SEO metadata
    and structured data.
6.  **Quality assurance:** Test mobile, accessibility, content, privacy,
    security and performance.
7.  **Launch:** Deploy, connect domain, configure Search Console and
    monitor enquiries.

------------------------------------------------------------------------

## 20. Master prompt for Google Antigravity

Build a complete, production-quality, responsive website for
**Dr. Shikha Gupta's Child Clinic** using **Next.js App Router, React,
TypeScript and Tailwind CSS**. Follow this specification as the source
of truth.

The visual identity must be **blue and white**, aligned with the clinic
logo. Use a premium, editorial, calm and welcoming visual style. The
website must look custom-designed by a skilled human product
designer---not like an AI-generated template. Avoid repetitive card
grids, excessive gradients, random decorative blobs, generic
stock-looking doctor images, fake counters, fake awards and fabricated
reviews. Use real clinic/doctor photography supplied in the project; if
unavailable, use clearly replaceable, licensed placeholder photography
and never imply that a stock person is Dr. Shikha or a patient.

Build these routes: Home, About, Services, individual service pages,
Patient Feedback, FAQs, Contact, Appointment Request and Privacy Policy.
Include a consistent responsive header, mobile navigation, footer,
service cards, doctor profile section, why-choose-us section, clinic
information, authentic parent feedback (only approved content), FAQ
accordion, appointment enquiry form, click-to-call, WhatsApp and
directions links.

Use the approved website information in this brief. Do not invent
credentials, registration details, years of experience, clinic hours,
prices, services, awards, patient counts, review ratings or medical
outcomes. The current website has conflicting experience statements and
ambiguous morning clinic timings; keep these values in a clearly marked
central configuration and do not publish a guessed value. Use the
verified phone, email and address from the brief, but make them easy to
update from one source of truth.

Write natural, parent-friendly English. Explain each service in clear
language without giving individual diagnosis or treatment advice.
Include an appropriate emergency disclaimer. Do not imply that a form
submission confirms an appointment. Clearly state that the clinic will
contact the parent to confirm.

Use reusable, typed React components and centralised content data.
Prefer Server Components for static sections. Use semantic HTML,
accessible labels, keyboard navigation, visible focus states,
reduced-motion support, responsive images, `next/font`, `next/image`,
page metadata, canonical URLs, sitemap, robots file and accurate
structured data. Use server-side validation, spam protection and secure
form handling. Never expose API secrets or send personal/health
information to analytics or advertising pixels.

Make the site fast and mobile-first. Test at desktop, tablet and mobile
sizes. Ensure every CTA works and there are no broken links, placeholder
texts or console errors. Keep animations subtle. Build the homepage
first with excellent visual polish, then complete every inner page
consistently. Before launch, leave a clear checklist of all facts,
images, legal text and timings that require clinic approval.

Deliver clean, maintainable code with a clear project structure and
setup instructions. Do not stop at a homepage mockup: implement the
complete website and all listed routes.

------------------------------------------------------------------------

## 21. Research references

Use these sources as research inputs and verify details again with the
clinic before publishing:

1.  Official clinic homepage: https://drshikhagupta.com/
2.  Official About page: https://drshikhagupta.com/about
3.  Official Services page: https://drshikhagupta.com/services
4.  Public doctor listing (cross-check only; it contains different
    experience/timing information):
    https://www.practo.com/delhi/doctor/dr-shikha-3-pediatrician
5.  Indian Academy of Pediatrics, Delhi directory (historical directory;
    not a substitute for current verification):
    https://www.iapdelhi.org/wp-content/uploads/2022/10/iap-directory.pdf
6.  Ministry of Health and Family Welfare, Accessibility Standards for
    Healthcare: verify the current official publication before using it
    as a compliance checklist.
7.  Digital Personal Data Protection Act, 2023:
    https://www.meity.gov.in/

**Research note:** The existing website and third-party listings do not
agree on every detail. The doctor/clinic must approve all final factual
content. This brief is a design and development specification, not
medical or legal advice.
