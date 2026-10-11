/**
 * IOE Engineering Admission Roadmap & Interactive Student Checklist
 * Stored locally in student's browser (no sensitive tracking)
 */

export const ADMISSION_CHECKLIST_ITEMS = [
  {
    id: "step-1",
    phase: "Phase 1: Pre-Examination",
    title: "Complete Online Entrance Registration",
    description: "Fill the formal application form at the official entrance portal (entrance.ioe.edu.np) with valid personal, schooling, and +2 academic information.",
    portalLink: "https://entrance.ioe.edu.np",
    requiredDocs: ["Citizenship or National ID / Passport", "SEE/SLC Marksheet", "+2 Transcript or Grade 11/12 Grade Sheet"]
  },
  {
    id: "step-2",
    phase: "Phase 1: Pre-Examination",
    title: "Pay Entrance Examination Fee",
    description: "Deposit the required application fee (approx. NPR 2,000) via ConnectIPS, eSewa, Khalti, or designated Himalayan Bank voucher and retain the transaction reference code.",
    portalLink: "https://entrance.ioe.edu.np",
    requiredDocs: ["Transaction receipt / Bank Voucher number"]
  },
  {
    id: "step-3",
    phase: "Phase 1: Pre-Examination",
    title: "Download & Print Admit Card",
    description: "Download the official color entrance admit card once IOE approves your application. Verify your roll number, exam shift, date, and exam room at ICTC Pulchowk.",
    portalLink: "https://entrance.ioe.edu.np",
    requiredDocs: ["Colored printout of IOE Admit Card", "Original Citizenship / Government Photo ID"]
  },
  {
    id: "step-4",
    phase: "Phase 2: Examination & Merit",
    title: "Appear for CBT Examination",
    description: "Take the 2-hour Computer Based Test (140 marks: Math 50, Physics 45, Chem 25, English 20). Remember negative marking (10%) and ensure you cross the 40% passing benchmark (56 marks).",
    portalLink: "https://pcampus.edu.np",
    requiredDocs: ["Color Admit Card", "Original Citizenship / Passport", "Black ballpoint pen"]
  },
  {
    id: "step-5",
    phase: "Phase 2: Examination & Merit",
    title: "Verify Entrance Rank & Score Card",
    description: "Check your published merit score and overall rank on the official portal when IOE publishes entrance results. Download and keep a PDF copy of your rank card.",
    portalLink: "https://entrance.ioe.edu.np",
    requiredDocs: ["IOE Merit Rank Card PDF"]
  },
  {
    id: "step-6",
    phase: "Phase 3: Counseling & Choices",
    title: "Submit Online Priority Form",
    description: "Carefully structure your campus and faculty choices in descending order of true preference. Remember that auto-upgrades only move upward; you cannot downgrade.",
    portalLink: "https://entrance.ioe.edu.np",
    requiredDocs: ["IOE Roll Number", "Merit Rank", "Prepared Priority Sequence"]
  },
  {
    id: "step-7",
    phase: "Phase 4: Allocation & Admission",
    title: "Check Merit List & Dabi Birodh (Claim Window)",
    description: "Check whether your name appears in the 1st or subsequent admission lists. If an eligible lower-ranked candidate is placed above you, file an objection within 48 hours.",
    portalLink: "https://entrance.ioe.edu.np",
    requiredDocs: ["Merit list roll number comparison"]
  },
  {
    id: "step-8",
    phase: "Phase 4: Allocation & Admission",
    title: "Deposit Seat Confirmation Fee",
    description: "Pay the required initial installment at the designated campus bank within the strict 3-to-4-day deadline to confirm your seat. Failure to pay permanently forfeits your seat.",
    portalLink: "https://pcampus.edu.np",
    requiredDocs: ["Bank Voucher / Online Payment Proof", "Seat Allotment Letter"]
  },
  {
    id: "step-9",
    phase: "Phase 4: Allocation & Admission",
    title: "In-Person Campus Document Verification",
    description: "Visit the respective campus admission department with original certificates, character certificates, quota recommendation letters (if applicable), and 4 passport photos.",
    portalLink: "https://www.ioe.tu.edu.np",
    requiredDocs: [
      "Original Citizenship / NID",
      "SEE Marksheet & Character Certificate",
      "+2 Transcript, Migration & Character Certificates",
      "Quota Verification Letter (if quota applicant)",
      "4 Recent Passport-size Photos"
    ]
  }
];

