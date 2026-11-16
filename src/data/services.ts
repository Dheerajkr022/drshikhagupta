import { ServiceDetail } from "@/types";

export const servicesData: ServiceDetail[] = [
  {
    id: "well-baby-care",
    slug: "well-baby-care",
    title: "Well-Baby Care",
    eyebrow: "Infant Health & Early Milestones",
    image: "/images/services/well-baby.jpg",
    shortDescription:
      "Routine health visits for infants, with dedicated attention to feeding, healthy weight gain, sleep cycles, developmental checks, and everyday newborn care.",
    leadParagraph:
      "Support for your baby's earliest months. Routine well-baby visits offer a reassuring opportunity to evaluate overall physical health, review feeding practices, assess developmental milestones, and address first-time parent concerns.",
    detailedContent: [
      "The first year of life is marked by rapid physiological growth and major developmental transitions. Well-baby consultations are structured preventive visits designed to monitor this progress proactively, rather than waiting for an illness to arise.",
      "During each consultation, Dr. Shikha Gupta performs a head-to-toe clinical check, tracks physical parameters against standardised paediatric growth charts, and provides practical advice on baby care routines, weaning, and hygiene.",
    ],
    whoItIsFor: [
      "Newborns (first week check and monthly routine assessments)",
      "Infants from 1 to 12 months undergoing routine milestone monitoring",
      "Parents with questions regarding latch, weaning, sleep routines, or colic",
      "Families seeking regular preventive paediatric check-ups",
    ],
    whatWeCover: [
      "Physical growth assessment: weight, length, and head circumference charting",
      "Developmental screening: visual tracking, head control, social smiles, motor milestones",
      "Feeding and nutrition advice: exclusive breastfeeding support, formula guidance, and complementary feeding (weaning) plans",
      "Infant sleep patterns, colic management, and diaper care hygiene",
      "Review and coordination of required routine infant immunisations",
    ],
    whatParentsShouldBring: [
      "Baby's hospital discharge summary and birth record",
      "Immunisation tracking card / yellow booklet",
      "List of any current medications, vitamins, or formula being used",
      "A brief list of questions or observations about sleep, stools, or feeding",
    ],
    faqIds: ["faq-well-baby-1", "faq-well-baby-2", "faq-bring-first-visit"],
    metaTitle: "Well-Baby Care in Kamla Nagar | Dr. Shikha Gupta Paediatric Clinic",
    metaDescription:
      "Comprehensive infant check-ups, growth tracking, and feeding consultations with Dr. Shikha Gupta, Consultant Paediatrician in Kamla Nagar, Delhi.",
  },
  {
    id: "vaccination",
    slug: "vaccination",
    title: "Vaccination Guidance",
    eyebrow: "Immunisation Consultation & Schedules",
    image: "/images/services/vaccination.jpg",
    shortDescription:
      "Age-appropriate immunisation consultations based on national and paediatric recommendations, catch-up vaccine guidance, and record reviews.",
    leadParagraph:
      "Understand your child's vaccination needs with calm, science-based guidance. We help parents review immunization history, plan upcoming doses, navigate catch-up schedules, and address safety queries.",
    detailedContent: [
      "Vaccines are among the most effective preventive health tools available in modern medicine. They protect infants, children, and young adults from preventable, life-threatening infectious diseases.",
      "At Dr. Shikha Gupta's clinic, vaccination visits include an evaluation of the child's health before any administration, detailed answers to parent questions regarding vaccine components and mild post-vaccine symptoms, and accurate documentation in the child's permanent record.",
    ],
    whoItIsFor: [
      "Newborns and infants due for routine primary immunisation series",
      "Toddlers and preschoolers requiring booster doses",
      "Older children and teenagers needing age-specific or seasonal vaccines",
      "Children who missed earlier scheduled vaccinations requiring a safe catch-up plan",
    ],
    whatWeCover: [
      "Complete review of the child's past vaccination history and records",
      "Explanation of recommended vaccines based on IAP (Indian Academy of Pediatrics) guidelines",
      "Catch-up immunisation schedules for delayed or missed doses",
      "Pre-vaccine clinical fitness check (evaluating fever, acute illness, or allergies)",
      "Clear post-vaccination care instructions for fever management and injection site comfort",
    ],
    whatParentsShouldBring: [
      "Child's physical vaccination card or digital immunisation record",
      "Past records of any unexpected reactions or known allergies",
      "Previous prescription slips if the child is recovering from a recent illness",
    ],
    importantNotice:
      "Vaccines are administered only after a clinical assessment. Schedule availability and specific batch queries can be confirmed with the clinic desk prior to your visit.",
    faqIds: ["faq-vaccine-1", "faq-vaccine-2", "faq-vaccine-catchup"],
    metaTitle: "Child Vaccination in Kamla Nagar, Delhi | Dr. Shikha Gupta",
    metaDescription:
      "Doctor-led child immunisation consultations, IAP vaccine schedule reviews, and catch-up vaccination guidance in Kamla Nagar, North Delhi.",
  },
  {
    id: "growth-development",
    slug: "growth-development",
    title: "Growth & Development",
    eyebrow: "Milestone Tracking & Assessment",
    image: "/images/services/growth.jpg",
    shortDescription:
      "Systematic monitoring of physical growth trends (height, weight, head size) and age-appropriate developmental milestones from infancy through early childhood.",
    leadParagraph:
      "Following your child's growth, step by step. Every child develops at their own unique pace, but timely monitoring ensures that deviations are noticed early when gentle intervention is most beneficial.",
    detailedContent: [
      "A child's growth is a sensitive indicator of general health, nutritional status, and underlying wellbeing. Regular plotting against WHO and paediatric reference percentiles reveals long-term patterns that single measurements might overlook.",
      "In addition to physical stature, development encompasses motor skills (rolling, sitting, walking), speech and communication, social interactions, and cognitive problem-solving. Consultations offer reassurance, early screening, and structured guidance.",
    ],
    whoItIsFor: [
      "Parents monitoring developmental milestones such as sitting, walking, or talking",
      "Children with concerns regarding slow weight gain or selective eating habits",
      "Families seeking an objective assessment of height and weight progression",
      "Children needing formal growth tracking for preschool or school admissions",
    ],
    whatWeCover: [
      "Accurate height/length, weight, and head circumference measurement and plotting",
      "Gross and fine motor milestone evaluation",
      "Speech, language, and social communication milestone checks",
      "Nutritional assessment and dietary balance discussions",
      "Structured recommendations or specialist referral if formal developmental delay is observed",
    ],
    whatParentsShouldBring: [
      "Previous growth records, birth weight, and paediatric milestone logs",
      "Observations or short video clips of child behavior if specific concerns exist (e.g. gait or speech)",
      "Details of typical daily meals, feeding routines, and physical activities",
    ],
    faqIds: ["faq-growth-1", "faq-growth-2"],
    metaTitle: "Child Growth & Milestone Monitoring in Delhi | Dr. Shikha Gupta",
    metaDescription:
      "Thorough developmental milestone assessments and growth tracking for infants and children with Dr. Shikha Gupta in Kamla Nagar.",
  },
  {
    id: "childhood-illness",
    slug: "childhood-illness",
    title: "Childhood Illness Consultation",
    eyebrow: "Diagnosis & Treatment Guidance",
    image: "/images/services/childhood-illness.jpg",
    shortDescription:
      "Clinical assessment and treatment for common childhood conditions including coughs, fevers, seasonal allergies, ear infections, and gastrointestinal upsets.",
    leadParagraph:
      "Paediatric guidance when your child is unwell. We provide thorough clinical evaluations for common childhood sicknesses, focusing on accurate diagnosis, rational medicine use, and parent peace of mind.",
    detailedContent: [
      "Young children experience multiple episodes of seasonal viral fevers, upper respiratory colds, and stomach bugs as their immune systems develop. Distinguishing between a mild, self-limiting infection and a condition requiring medical treatment requires trained clinical judgement.",
      "Dr. Shikha Gupta provides methodical paediatric examinations, prioritises responsible antibiotic stewardship (avoiding unnecessary medications), and educates parents on red flags to watch for at home.",
    ],
    whoItIsFor: [
      "Children with fever, persistent cough, cold, ear pain, or throat soreness",
      "Children experiencing loose stools, vomiting, stomach cramps, or reduced oral intake",
      "Skin rashes, viral exanthems, or seasonal allergy flare-ups",
      "Follow-up reviews after an acute hospital discharge",
    ],
    whatWeCover: [
      "Comprehensive paediatric clinical examination (ears, throat, chest, abdomen)",
      "Diagnosis and evidence-based treatment plans for common ailments",
      "Clear advice on hydration, home care, and fever reduction safety",
      "Prescription of necessary medications with strict dosage instructions",
      "Explicit instructions on symptoms that require immediate emergency evaluation",
    ],
    whatParentsShouldBring: [
      "Temperature log if fever has been recorded over the past few days",
      "List of all medicines administered at home before coming to the clinic",
      "Previous medical records, lab reports, or discharge summaries if relevant",
    ],
    importantNotice:
      "EMERGENCY ADVICE: If your child has difficulty breathing, blueness of lips/face, persistent vomiting with no fluid retention, convulsions/seizures, or extreme drowsiness/unresponsiveness, seek emergency room hospital care immediately. Do not rely on routine outpatient clinic appointments for emergency situations.",
    faqIds: ["faq-illness-1", "faq-illness-2", "faq-urgent-attention"],
    metaTitle: "Child Illness & Fever Consultation in Kamla Nagar | Dr. Shikha Gupta",
    metaDescription:
      "Expert paediatric diagnosis and care for childhood fevers, coughs, infections, and common illnesses at Sethi Multispecialty Clinic, Kamla Nagar.",
  },
  {
    id: "adolescent-care",
    slug: "adolescent-care",
    title: "Adolescent Care",
    eyebrow: "Support Through the Growing Years",
    image: "/images/services/adolescent.jpg",
    shortDescription:
      "Age-appropriate consultations addressing physical changes, pubertal growth, lifestyle, nutritional needs, and general health for older children and teenagers.",
    leadParagraph:
      "Support through the transformative growing years. Adolescence brings major physiological, hormonal, and emotional shifts. We offer respectful, confidential, and age-sensitive health consultations.",
    detailedContent: [
      "As children transition into adolescents, their healthcare needs shift from purely infant-oriented issues to questions regarding pubertal development, growth spurts, skin and hormonal changes, sleep hygiene, and lifestyle habits.",
      "Dr. Shikha Gupta provides a calm, safe setting where teenagers and their parents can discuss health topics openly, fostering healthy habits that last into adulthood.",
    ],
    whoItIsFor: [
      "Pre-teens and teenagers aged 10 to 18 years",
      "Adolescents experiencing rapid growth, pubertal changes, or posture concerns",
      "Teens dealing with fatigue, irregular meal patterns, or nutritional deficiencies (e.g. anaemia)",
      "Families seeking guidance on healthy screen habits, physical activity, and sleep",
    ],
    whatWeCover: [
      "General health check-up, blood pressure check, and growth spurt assessment",
      "Evaluation of pubertal development milestones and questions",
      "Nutritional guidance: anaemia prevention, calcium balance, and sports activity diet",
      "Screen time ergonomics, posture advice, and sleep routine guidance",
      "Age-appropriate vaccination updates (e.g., HPV, Tdap boosters)",
    ],
    whatParentsShouldBring: [
      "Any previous blood work or health reports",
      "Immunisation records for booster evaluation",
      "List of any chronic complaints (e.g., frequent headaches, fatigue)",
    ],
    faqIds: ["faq-adolescent-1", "faq-adolescent-2"],
    metaTitle: "Adolescent Healthcare in Kamla Nagar | Dr. Shikha Gupta",
    metaDescription:
      "Confidential, age-appropriate paediatric care and health guidance for teenagers and adolescents in North Delhi.",
  },
  {
    id: "parental-counselling",
    slug: "parental-counselling",
    title: "Parental Counselling",
    eyebrow: "Guidance for Everyday Caregiving",
    image: "/images/services/parenting.jpg",
    shortDescription:
      "A supportive, unhurried space for caregivers to discuss child behaviour, sleep routines, fussy eating, screen habits, and family adjustments.",
    leadParagraph:
      "A space for parents to ask, learn, and understand. Parenting is fulfilling yet often overwhelming. We offer dedicated counselling sessions focused on practical guidance and realistic solutions.",
    detailedContent: [
      "Modern parents are flooded with conflicting advice from social media, relatives, and online forums. This often causes unnecessary anxiety regarding whether a child is eating enough, sleeping well, or developing on track.",
      "In a parental counselling session, Dr. Shikha Gupta helps parents filter through the noise, providing grounded medical perspective and actionable strategies tailored to their family's routine.",
    ],
    whoItIsFor: [
      "First-time parents navigating early months of infant care",
      "Parents dealing with toddler tantrums, boundary-setting, or separation anxiety",
      "Families struggling with mealtime battles or extreme fussy eating",
      "Caregivers looking to establish healthy digital habits and sleep routines",
    ],
    whatWeCover: [
      "Managing everyday behavioural milestones and normal developmental phases",
      "Realistic strategies for picky or selective eaters without force-feeding",
      "Sleep hygiene and gentle bedtime routine recommendations",
      "Balancing screen time and encouraging active creative play",
      "Reassurance and practical tips to reduce parental stress and fatigue",
    ],
    whatParentsShouldBring: [
      "A brief written list of top daily challenges or questions",
      "A 3-day log of typical meal habits or sleep times if that is the primary concern",
    ],
    importantNotice:
      "Parental counselling provides general developmental and parenting guidance. For clinical psychological evaluations or diagnosed psychiatric conditions, referrals to specialised child psychologists are facilitated.",
    faqIds: ["faq-counselling-1", "faq-counselling-2"],
    metaTitle: "Parental Guidance & Child Care Counselling in Delhi | Dr. Shikha Gupta",
    metaDescription:
      "Compassionate, doctor-led parenting consultations for infant care, toddler routines, nutrition, and screen-time management in Kamla Nagar.",
  },
  {
    id: "breastfeeding-support",
    slug: "breastfeeding-support",
    title: "Breastfeeding Counselling",
    eyebrow: "Infant Feeding & Maternal Support",
    image: "/images/services/breastfeeding.jpg",
    shortDescription:
      "Practical guidance on breastfeeding questions, latching technique, feeding frequency, breast milk supply reassurance, and gentle weaning.",
    leadParagraph:
      "Guidance for your breastfeeding questions. Feeding a newborn is natural, but it is also a learned skill for both mother and baby. We provide gentle, clinical support during this vital stage.",
    detailedContent: [
      "Early breastfeeding challenges such as latching discomfort, concern over adequate milk transfer, and engorgement are common reasons mothers feel distressed in the first weeks of motherhood.",
      "Dr. Shikha Gupta offers clinical assessments of infant feeding, evaluates oral anatomy (such as checking for tongue-tie), reviews maternal comfort, and provides practical advice to make feeding a calm, positive bonding experience.",
    ],
    whoItIsFor: [
      "Mothers of newborns in the first days and weeks following delivery",
      "Parents concerned about baby's weight gain and sufficiency of breast milk",
      "Mothers experiencing nipple pain, soreness, or feeding difficulty",
      "Families preparing for the transition to complementary foods and weaning",
    ],
    whatWeCover: [
      "Observation and guidance on comfortable positioning and effective latch",
      "Assessing infant hunger cues, feeding frequency, and wet diaper counts",
      "Evidence-based strategies for boosting and maintaining healthy milk supply",
      "Guidance on burping, reducing swallowed air, and reflux management",
      "Pumping basics, safe milk storage, and gradual weaning schedules",
    ],
    whatParentsShouldBring: [
      "Baby's feeding and diaper diary from the last 24 to 48 hours",
      "Current baby weight history if available from paediatric cards",
      "Any nipple shields or feeding aids currently being used",
    ],
    faqIds: ["faq-breastfeeding-1", "faq-breastfeeding-2"],
    metaTitle: "Breastfeeding Support & Infant Feeding in Kamla Nagar | Dr. Shikha Gupta",
    metaDescription:
      "Gentle doctor-led breastfeeding guidance, latch assessment, and infant feeding counselling in North Delhi with Dr. Shikha Gupta.",
  },
];
