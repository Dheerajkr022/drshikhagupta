import { ServiceDetail } from "@/types";

export const servicesData: ServiceDetail[] = [
  {
    id: "well-baby-care",
    slug: "well-baby-care",
    title: "Well-Baby Care & Infant Health Checkups",
    eyebrow: "Newborn Care • 0 to 12 Months",
    image: "/images/services/well-baby.jpg",
    shortDescription:
      "Comprehensive, doctor-led routine health assessments for newborns and infants, focusing on healthy weight gain, feeding guidance, sleep patterns, and vital early milestones.",
    leadParagraph:
      "The first year of your baby's life is a journey of rapid physical growth and milestone development. Our structured well-baby consultations in Kamla Nagar provide unhurried clinical evaluations to ensure your infant is thriving, gaining weight steadily, and meeting key developmental markers.",
    detailedContent: [
      "Well-baby visits are structured preventive examinations designed to assess an infant's overall health proactively, rather than waiting for symptoms of sickness to emerge. In early infancy, regular clinical checkups offer vital reassurance that physiological development is progressing smoothly.",
      "During every well-baby consultation at our Kamla Nagar clinic, Dr. Shikha Gupta performs an attentive head-to-toe physical examination. This includes evaluating fontanelle closure, tracking skull shape and head circumference, checking eye movement, listening to heart and lung sounds, examining the abdomen and umbilical area, and assessing hip joint stability and muscle tone.",
      "Beyond physical measurements, these appointments provide a dedicated, calm setting for parents to ask questions about breastfeeding frequency, formula preparation, burping challenges, infant reflux, sleep stretches, and diaper rash care. Dr. Gupta partners with you through each step of early parenthood.",
    ],
    whoItIsFor: [
      "Newborns attending their first hospital follow-up checkup (within the first 7 to 10 days of birth)",
      "Infants aged 1 to 12 months undergoing regular monthly or bi-monthly milestone reviews",
      "Parents seeking practical guidance on infant feeding, latching, colic, or irregular sleep cycles",
      "Families looking for regular WHO-standardised weight, length, and head circumference plotting",
    ],
    whatWeCover: [
      "Precise anthropometric assessment: plotting baby's weight, length, and head circumference on WHO growth charts",
      "Head-to-toe physical exam: checking fontanelles, eyes, ears, chest, abdomen, hips, and skin health",
      "Developmental milestone checks: visual tracking, auditory response, social smile, head control, rolling, and sitting",
      "Feeding and lactation support: assessment of milk transfer, burping techniques, and managing spit-ups",
      "Complementary feeding roadmap: timing, texture, and food safety when starting solid foods (around 6 months)",
      "Review and coordination of due vaccinations according to current IAP guidelines",
    ],
    whatParentsShouldBring: [
      "Hospital discharge summary and birth health record booklet",
      "Child's physical vaccination tracking card",
      "A brief note of current daily feeds, wet diapers, and stool patterns over the last 48 hours",
      "A written list of questions or specific observations about baby's behaviour",
    ],
    faqIds: ["faq-well-baby-1", "faq-well-baby-2", "faq-bring-first-visit"],
    metaTitle: "Well-Baby Care & Newborn Doctor in Kamla Nagar | Dr. Shikha Gupta",
    metaDescription:
      "Consultant paediatrician Dr. Shikha Gupta provides gentle well-baby checkups, infant growth tracking, and feeding consultations in Kamla Nagar, North Delhi. Book an appointment today.",
    cardHighlights: [
      "Physical growth: weight, length and head circumference tracking",
      "Developmental screening: visual tracking, head control and early milestones",
    ],
  },
  {
    id: "vaccination",
    slug: "vaccination",
    title: "Child Vaccination & Immunisation Guidance",
    eyebrow: "Protective Vaccines • IAP Guidelines",
    image: "/images/services/vaccination.jpg",
    shortDescription:
      "Doctor-administered child vaccinations adhering to Indian Academy of Pediatrics (IAP) schedules, including catch-up immunisation plans and cold-chain maintained vaccines.",
    leadParagraph:
      "Timely immunisation is the safest and most effective foundation for protecting your child against life-threatening infectious diseases. Dr. Shikha Gupta offers evidence-based vaccine consultations in Kamla Nagar, reviewing previous doses, answering safety questions, and providing personalised catch-up schedules.",
    detailedContent: [
      "Childhood immunisation programs are scientifically structured to build active immunity at the exact ages when infants and young children are most vulnerable to infections. In our Kamla Nagar clinic, every vaccine is stored under strict, monitored cold-chain refrigeration to guarantee maximum efficacy and safety.",
      "Before any vaccine is administered, Dr. Shikha Gupta carries out a pre-immunisation physical checkup to confirm that your child is clinically well and fit for vaccination. We take time to discuss the purpose of each vaccine, explain potential mild post-vaccination reactions (such as low-grade fever or injection site tenderness), and advise you on simple, safe fever management at home.",
      "For families whose children have missed earlier doses due to travel, illness, or relocation, Dr. Gupta formulates an individualized catch-up vaccination plan based on IAP and National Immunisation Schedule protocols to bring your child safely up to date without redundant injections.",
    ],
    whoItIsFor: [
      "Newborns and infants due for essential primary vaccine series (birth, 6, 10, and 14 weeks)",
      "Babies due for 6-month, 9-month, and 12-month booster doses",
      "Toddlers and preschoolers requiring booster vaccines (MMR, DTP, Varicella, Typhoid)",
      "Children who missed earlier scheduled vaccinations needing a medically approved catch-up schedule",
      "School-age children and teenagers requiring booster doses (Tdap, HPV, Influenza)",
    ],
    whatWeCover: [
      "Thorough review of the child's past immunisation booklet and dose verification",
      "Pre-vaccination health assessment to evaluate fitness for injection (checking active fever or wheezing)",
      "Detailed explanation of recommended optional vs core vaccines under IAP recommendations",
      "Gentle administration using child-friendly distraction techniques and comfort holds",
      "Clear, written post-vaccine home-care advice, paracetamol dosage guidance, and red-flag symptoms",
      "Accurate official documentation on your child's permanent immunisation card",
    ],
    whatParentsShouldBring: [
      "Child's physical vaccination booklet or digital immunisation record",
      "Information on past vaccine reactions, family allergies, or current prescriptions",
      "Child's favorite comforting toy or soothing blanket for post-vaccine comfort",
    ],
    importantNotice:
      "Vaccines are administered only following a clinical fitness assessment by Dr. Shikha Gupta. All vaccines are maintained under certified medical cold-chain refrigeration. Specific batch availability can be confirmed directly with our reception desk.",
    faqIds: ["faq-vaccine-1", "faq-vaccine-2", "faq-vaccine-catchup"],
    metaTitle: "Child Vaccination & Immunisation in Kamla Nagar | Dr. Shikha Gupta",
    metaDescription:
      "Protect your child with IAP-recommended vaccines and personalised catch-up immunisation schedules at Dr. Shikha Gupta's paediatric clinic in Kamla Nagar, North Delhi.",
    cardHighlights: [
      "Complete review of past vaccination history and immunisation card",
      "Guidance on recommended vaccines based on IAP and national schedules",
    ],
  },
  {
    id: "growth-development",
    slug: "growth-development",
    title: "Child Growth & Developmental Milestone Tracking",
    eyebrow: "Developmental Screening • Milestone Guidance",
    image: "/images/services/growth.jpg",
    shortDescription:
      "Scientific tracking of your child's physical growth parameters, motor skills, speech development, and cognitive milestones using standardised WHO percentiles.",
    leadParagraph:
      "Every child grows along their own distinctive trajectory. However, systematic tracking against established developmental milestones helps ensure that any subtle delays in speech, motor coordination, or physical growth are identified early, when gentle, timely intervention is most effective.",
    detailedContent: [
      "A child's physical growth is one of the most reliable windows into their nutritional wellbeing, metabolic health, and general development. Rather than focusing solely on a single weight check, Dr. Shikha Gupta plots multiple parameters across time on standard World Health Organization (WHO) and Indian Academy of Pediatrics growth percentiles to evaluate long-term trends.",
      "Alongside physical stature (height, weight, and head circumference), developmental screening assesses four key functional domains: gross motor milestones (sitting, crawling, walking), fine motor skills (pincer grasp, pencil holding), speech and language communication (babbling, word combinations), and social-emotional engagement (eye contact, interactive smiles, peer play).",
      "If you ever feel concerned that your toddler isn't speaking as early as peers, seems reluctant to bear weight, or struggles with sensory challenges, these consultations offer an objective, compassionate clinical evaluation with practical steps forward.",
    ],
    whoItIsFor: [
      "Parents seeking professional assessment of speech development, vocabulary, or communication",
      "Toddlers and young children experiencing delays in crawling, standing, walking, or hand coordination",
      "Children with concerns regarding slow physical weight gain, poor appetite, or short stature",
      "Parents desiring a formal developmental milestone review before preschool or school admission",
    ],
    whatWeCover: [
      "Precise clinical measurement of weight, height/length, and head circumference plotted on WHO charts",
      "Comprehensive gross motor evaluation: muscle tone, balance, posture, and gait",
      "Fine motor coordination screening: reaching, grasping, hand-eye coordination, and tool use",
      "Speech, language, and social communication screening (auditory attention, receptive/expressive language)",
      "Nutritional intake assessment, identifying micronutrient gaps (iron, vitamin D, calcium)",
      "Actionable home activities to stimulate motor and cognitive development through parent-child play",
    ],
    whatParentsShouldBring: [
      "Child's historical growth charts, birth weight, and previous paediatric records",
      "A brief note of current daily food intake, meal routines, and physical activity habits",
      "Short video recordings (if helpful) showing specific walking patterns or speech behaviours that concern you",
    ],
    faqIds: ["faq-growth-1", "faq-growth-2"],
    metaTitle: "Child Growth & Milestone Tracking in Kamla Nagar | Dr. Shikha Gupta",
    metaDescription:
      "Evaluate your child's height, weight, speech, and motor milestones with expert paediatrician Dr. Shikha Gupta in Kamla Nagar, North Delhi. Gentle, evidence-based assessments.",
    cardHighlights: [
      "Accurate height/length, weight, and head circumference measurement on WHO charts",
      "Gross and fine motor, speech, and social milestone evaluation",
    ],
  },
  {
    id: "childhood-illness",
    slug: "childhood-illness",
    title: "Childhood Illness & Acute Sickness Consultation",
    eyebrow: "Clinical Diagnosis • Rational Medication",
    image: "/images/services/childhood-illness.jpg",
    shortDescription:
      "Evidence-based paediatric diagnosis and gentle treatment for common childhood illnesses including viral fevers, seasonal coughs, colds, wheezing, and digestive infections.",
    leadParagraph:
      "When your child is unwell, you need clear medical answers, rational treatment, and calm reassurance. Dr. Shikha Gupta provides methodical paediatric consultations in Kamla Nagar for fevers, respiratory issues, and seasonal infections, adhering strictly to safe, antibiotic-stewardship practices.",
    detailedContent: [
      "Young children experience an average of six to eight viral respiratory or gastrointestinal infections each year as their immune systems encounter new pathogens. Distinguishing between a routine viral illness that requires supportive hydration and a bacterial infection that truly warrants specific medication requires seasoned clinical acumen.",
      "At our Kamla Nagar clinic, Dr. Shikha Gupta conducts thorough, gentle physical examinations—inspecting the ears (otoscopy), throat, tonsils, chest breathing sounds (auscultation), and abdominal tenderness. She explains the diagnosis transparently, outlines expected fever timelines, and emphasizes rational medicine: no unnecessary antibiotics, steroid syrups, or excessive multi-drug regimens.",
      "Parents are equipped with precise, weight-appropriate paracetamol dosing instructions, effective non-pharmacological comfort measures, and clear warning signs that would require prompt re-evaluation.",
    ],
    whoItIsFor: [
      "Children presenting with acute fever, seasonal viral illness, or recurrent high temperatures",
      "Toddlers and children with persistent cough, cold, nasal congestion, or noisy chest breathing",
      "Suspected ear infections, throat pain, difficulty swallowing, or swollen lymph glands",
      "Gastrointestinal symptoms: loose watery stools, nausea, vomiting, abdominal cramps, or dehydration",
      "Unexplained skin rashes, seasonal allergy flare-ups, or viral exanthems",
    ],
    whatWeCover: [
      "Complete physical examination: ears (tympanic membrane), throat, chest sounds, abdomen, and skin",
      "Accurate clinical diagnosis distinguishing between viral and bacterial causes",
      "Strict antibiotic stewardship: prescribing antimicrobial therapy only when clinically proven and essential",
      "Home-care hydration protocols: oral rehydration salts (ORS), fluid replacement, and soothing measures",
      "Clear, weight-based fever medicine dosage instructions to prevent accidental under or overdosing",
      "Explicit red-flag warning signs that indicate when emergency hospital evaluation is mandatory",
    ],
    whatParentsShouldBring: [
      "A fever log noting recorded temperatures and times over the last 24 to 72 hours",
      "Exact names and dosages of all syrups, drops, or medications given prior to the clinic visit",
      "Recent lab reports, blood tests, or chest X-rays if already conducted",
    ],
    importantNotice:
      "EMERGENCY MEDICAL ADVISORY: If your child exhibits severe difficulty breathing (retractions/chest pulling), blueness around the lips, uncontrolled continuous seizures, sudden unresponsiveness/extreme lethargy, or inability to retain any liquids, please visit the nearest hospital emergency room immediately. Outpatient clinics and website enquiry forms are not designed for emergency care.",
    faqIds: ["faq-illness-1", "faq-illness-2", "faq-urgent-attention"],
    metaTitle: "Child Illness & Fever Consultation in Kamla Nagar | Dr. Shikha Gupta",
    metaDescription:
      "Gentle, rational medical care for childhood fevers, coughs, colds, wheezing, and stomach infections. Dr. Shikha Gupta practices safe paediatric medicine in Kamla Nagar.",
    cardHighlights: [
      "Clinical physical exam for cough, fever, cold, wheezing, and stomach infections",
      "Strict antibiotic stewardship and clear, weight-based home-care guidance",
    ],
  },
  {
    id: "adolescent-care",
    slug: "adolescent-care",
    title: "Adolescent Care & Teenage Health Consultations",
    eyebrow: "Ages 11 to 18 Years • Pubertal Wellness",
    image: "/images/services/adolescent.jpg",
    shortDescription:
      "Age-appropriate, private health consultations for pre-teens and teenagers covering pubertal changes, growth spurts, nutritional screening, posture, and lifestyle habits.",
    leadParagraph:
      "The transition from childhood into adolescence involves dynamic physical, hormonal, and psychological changes. Dr. Shikha Gupta provides respectful, age-sensitive paediatric consultations in Kamla Nagar designed to address teenage health concerns openly and constructively.",
    detailedContent: [
      "As young people enter adolescence, their medical needs evolve from routine infant illnesses to questions about rapid pubertal growth spurts, hormonal skin changes, menstrual health questions for girls, nutritional balance, digital screen ergonomics, and sleep hygiene.",
      "Teenagers often feel reluctant to discuss bodily changes or lifestyle concerns in front of family members. Dr. Shikha Gupta establishes a warm, confidential, and non-judgmental environment where adolescents feel respected and heard, encouraging them to take healthy ownership of their own bodies.",
      "Consultations include screening for common adolescent health conditions in North Delhi—such as iron-deficiency anaemia, vitamin D deficiency from indoor study schedules, postural strain from heavy backpacks and screens, and sleep rhythm disturbances.",
    ],
    whoItIsFor: [
      "Pre-teens and teenagers aged 10 to 18 years experiencing rapid physical growth or pubertal changes",
      "Adolescents dealing with chronic fatigue, low stamina, paleness, or suspected nutritional deficiencies",
      "Teens experiencing frequent headaches, neck stiffness, poor posture, or screen-related sleep disruptions",
      "Families seeking confidential, doctor-led guidance on balanced teenage nutrition, fitness, and puberty updates",
    ],
    whatWeCover: [
      "Comprehensive physical health check: height velocity, blood pressure, BMI, and spinal posture",
      "Pubertal maturation assessment and answering common questions regarding physical transitions",
      "Nutritional screening: diet evaluation for anaemia prevention, adequate protein, calcium, and vitamin D",
      "Digital ergonomics: advice on screen distance, posture, neck strain, and blue-light sleep disruption",
      "Adolescent vaccination updates (Tdap booster, HPV immunisation, seasonal flu protection)",
      "Supportive guidance on stress management, academic stamina, and healthy lifestyle routines",
    ],
    whatParentsShouldBring: [
      "Previous health checkup records, blood test results (e.g. haemoglobin levels), if available",
      "Past vaccination records to verify required adolescent booster doses",
      "A list of specific concerns regarding energy levels, diet, or physical symptoms",
    ],
    faqIds: ["faq-adolescent-1", "faq-adolescent-2"],
    metaTitle: "Adolescent & Teenage Healthcare in Kamla Nagar | Dr. Shikha Gupta",
    metaDescription:
      "Age-appropriate, respectful health consultations for teenagers in Kamla Nagar, North Delhi. Covering pubertal growth, anaemia screening, posture, and adolescent wellness.",
    cardHighlights: [
      "Comprehensive pubertal transition, growth velocity, and nutritional screening",
      "Practical guidance on screen posture, healthy sleep habits, and stress relief",
    ],
  },
  {
    id: "parental-counselling",
    slug: "parental-counselling",
    title: "Parental Guidance & Child Care Counselling",
    eyebrow: "Parent Partnership • Everyday Guidance",
    image: "/images/services/parenting.jpg",
    shortDescription:
      "A compassionate, dedicated consultation space for parents to discuss toddler tantrums, sleep routines, fussy eating, boundary-setting, and screen-time management.",
    leadParagraph:
      "Parenting is one of life's most rewarding journeys, yet it frequently brings overwhelming doubts, conflicting advice, and sleepless nights. Our parental counselling sessions in Kamla Nagar offer a calm, evidence-based space to find practical, realistic solutions for everyday parenting challenges.",
    detailedContent: [
      "Modern parents are inundated with advice from parenting forums, social media influencers, and well-meaning relatives. This information overload often triggers intense anxiety regarding whether your child is eating enough, sleeping adequately, or behaving appropriately for their age.",
      "In a dedicated parental counselling session, Dr. Shikha Gupta listens to your household routines without judgment. Drawing upon her clinical background and personal experience as a mother, she helps families cut through the noise, explaining which behaviours are normal developmental stages and offering structured, achievable strategies tailored to your lifestyle.",
      "Whether you are dealing with aggressive bedtime struggles, mealtime tantrums, sibling rivalry, or difficulty weaning from smartphones, Dr. Gupta helps you foster positive parenting habits that nurture your child's emotional security.",
    ],
    whoItIsFor: [
      "First-time parents feeling anxious or overwhelmed during their baby's early developmental stages",
      "Parents struggling with toddler tantrums, aggressive meltdowns, or bedtime refusal",
      "Families facing stressful mealtime battles, extreme picky eating, or force-feeding dilemmas",
      "Caregivers seeking actionable, doctor-backed strategies to manage screen time and encourage creative play",
    ],
    whatWeCover: [
      "Understanding normal developmental phases: autonomy seeking, separation anxiety, and emotional regulation",
      "Practical mealtime strategies: establishing joyful, pressure-free family eating routines without force-feeding",
      "Healthy sleep architecture: wind-down rituals, gentle bedtime consistency, and reducing night awakenings",
      "Constructive boundary setting: positive discipline approaches that replace yelling with calm consistency",
      "Digital wellness: clear frameworks for age-appropriate screen limits and interactive alternatives",
      "Reassurance and mental wellbeing strategies to alleviate parental guilt, exhaustion, and anxiety",
    ],
    whatParentsShouldBring: [
      "A brief written list of your household's top 2 or 3 daily behavioral or routine struggles",
      "A 3-day log of your child's typical meal choices, sleep timings, or screen exposure",
    ],
    importantNotice:
      "Parental counselling sessions provide developmental, behavioural, and lifestyle guidance. For formal psychometric testing, diagnosed clinical psychological disorders, or specialized developmental therapy, Dr. Gupta coordinates referrals with qualified paediatric psychologists.",
    faqIds: ["faq-counselling-1", "faq-counselling-2"],
    metaTitle: "Parental Counselling & Child Guidance in Kamla Nagar | Dr. Shikha Gupta",
    metaDescription:
      "Compassionate, doctor-led parenting consultations in Kamla Nagar, North Delhi. Practical guidance for toddler routines, picky eating, bedtime challenges, and screen habits.",
    cardHighlights: [
      "Constructive, calm guidance for toddler tantrums and bedtime consistency",
      "Positive discipline and healthy family mealtime habits without force-feeding",
    ],
  },
  {
    id: "breastfeeding-support",
    slug: "breastfeeding-support",
    title: "Breastfeeding Support & Lactation Counselling",
    eyebrow: "Maternal Support • Infant Feeding",
    image: "/images/services/breastfeeding.jpg",
    shortDescription:
      "Gentle, doctor-led clinical support for nursing mothers addressing latching technique, nipple comfort, milk supply evaluation, and gentle weaning schedules.",
    leadParagraph:
      "Breastfeeding is a natural biological bond, but it is also a learned physical skill for both mother and newborn. Dr. Shikha Gupta offers sensitive, patient-centered lactation support in Kamla Nagar to help mothers overcome feeding difficulties with clinical confidence and warmth.",
    detailedContent: [
      "The first few weeks after delivery are often marked by unexpected nursing challenges—sore or cracked nipples, painful engorgement, difficulty achieving a deep latch, and persistent doubts regarding whether your baby is transferring enough milk.",
      "During a breastfeeding consultation, Dr. Shikha Gupta observes a live nursing session in a comfortable, private setting. She evaluates your baby's oral anatomy (screening for anatomical factors like tongue-tie or lip-tie), assesses latch depth, demonstrates ergonomic nursing postures that eliminate back and nipple strain, and reviews wet diaper counts and weight curves.",
      "Whether you are working towards exclusive breastfeeding, managing combination feeding with formula, using a breast pump, or planning a gradual, gentle weaning transition, Dr. Gupta provides supportive, evidence-based guidance respecting your family's choices.",
    ],
    whoItIsFor: [
      "New mothers in the first days and weeks following delivery experiencing painful or shallow latches",
      "Parents concerned about inadequate breast milk supply or slow infant weight gain",
      "Mothers dealing with recurrent engorgement, blocked milk ducts, or mastitis symptoms",
      "Working mothers preparing for pumping schedules, milk storage protocols, or gentle weaning transitions",
    ],
    whatWeCover: [
      "Clinical evaluation of infant oral anatomy: checking sucking reflex, palate shape, and tongue-tie",
      "Guidance on ergonomic breastfeeding positions (cross-cradle, football hold, side-lying) for pain relief",
      "Achieving a deep, asymmetrical latch that ensures efficient milk transfer and protects maternal skin",
      "Objective assessment of milk intake: weight tracking, urine/stool output, and satiety cues",
      "Evidence-based techniques for boosting milk supply and managing feeding frequency safely",
      "Practical tips for burping, reducing swallowed air, managing infant spit-ups, and pumping storage",
    ],
    whatParentsShouldBring: [
      "Baby's feeding and diaper diary from the preceding 24 to 48 hours",
      "Paediatric weight records from birth and hospital discharge summaries",
      "Any nipple shields, breast pumps, or feeding aids currently in use",
    ],
    faqIds: ["faq-breastfeeding-1", "faq-breastfeeding-2"],
    metaTitle: "Breastfeeding Support & Lactation Doctor in Kamla Nagar | Dr. Shikha Gupta",
    metaDescription:
      "Doctor-led breastfeeding consultations, latching assessments, and infant feeding guidance in Kamla Nagar, North Delhi. Compassionate care with Dr. Shikha Gupta.",
    cardHighlights: [
      "Clinical evaluation of latch technique, infant oral anatomy, and nursing comfort",
      "Objective milk transfer checks, weight monitoring, and gentle supply support",
    ],
  },
];
