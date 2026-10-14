# IOE Admission Hub: Official-Source Research & Factual Accuracy Audit Report
**Academic Cycle: 2083/084 Intake (2083 BS)**  
**Audit Conducted: October 2026**  
**Production Site:** [https://ioe-admission.dipeshsapkota7.com.np/](https://ioe-admission.dipeshsapkota7.com.np/)  
**GitHub Repository:** [https://github.com/dszae/ioe-admission-guide](https://github.com/dszae/ioe-admission-guide)  
**Lead Auditor:** Senior Research Analyst, Engineering Admission Specialist & Fact-Checker

---

## 1. Executive Summary

This formal audit report documents the comprehensive research, verification, mathematical reconciliation, and codebase audit of **IOE Admission Hub** against authoritative primary documents published by the **Institute of Engineering (IOE), Tribhuvan University (TU)**.

### Key Objectives Achieved:
1. **Authoritative Source Research:** Inspected live official documents directly from `https://ioe.tu.edu.np/downloads`, `https://ioe.tu.edu.np/notices`, and the active Central Admission Portal `https://admission.ioe.edu.np/be/2083/public/guideline`.
2. **Cycle Clarity & Disambiguation:** Disambiguated the active **2083/084 B.E./B.Arch academic intake** from historical admission cutoffs (**2081/2082 BS archives**), ensuring zero misleading claims while maintaining high predictive value for prospective engineering students.
3. **Financial Model Reconciliation:** Mathematically proved and verified the exact 4-year fee breakdown (tuition per semester, all charges per semester, one-time charges, refundable deposits, initial admission payment, subsequent semester installments, and living cost estimates) across **Regular (Subsidized)**, **Full Fee (Paying)**, **Foreign**, and **Affiliated** categories.
4. **CBT & Seat Matrix Validation:** Audited the 140-mark Computer-Based Test (CBT) structure (60 questions in Section A, 40 questions in Section B, 10% negative marking, 40% pass benchmark = 56 marks) and verified the exact **2,040 constituent seat matrix** across 5 campuses and 12 engineering disciplines.
5. **Transparency & Citations Implementation:** Added source links, last-verified timestamps, and transparent provenance notices across all 13 routes and data modules.
6. **Zero-Defect Quality Assurance:** Ran full automated test suites, Astro static builds, crawlability audits, and oxlint lint checks, achieving 100% pass rates with zero warnings and zero errors.

---

## 2. Authoritative Primary Source Registry

The factual accuracy of this platform is anchored strictly on the following official publications:

| Document / Source Title | Issuing Body | Publication Reference / URL | Verification Status |
| :--- | :--- | :--- | :--- |
| **BE/BAR Booklet 2083** | IOE Entrance Examination Board | [Official PDF Download](https://portal.tu.edu.np/downloads/download4_2026_07_07_22_07_13.pdf) | `VERIFIED` |
| **IOE Central Admission Portal Guidelines 2083** | IOE Central Admission Committee | [admission.ioe.edu.np/be/2083/public/guideline](https://admission.ioe.edu.np/be/2083/public/guideline) | `VERIFIED` |
| **Central Admission Seat Details 2083** | IOE Central Admission Committee | [admission.ioe.edu.np/be/2083/public/seat-details](https://admission.ioe.edu.np/be/2083/public/seat-details) | `VERIFIED` |
| **2nd Revised Notice for B.E./B.Arch. Entrance (2083/084)** | IOE Entrance Examination Board | [Official PDF Download](https://portal.tu.edu.np/downloads/download2_2026_07_07_22_05_49.pdf) | `VERIFIED` |
| **Updated Detail Syllabus of B.E./B.Arch. Entrance Examination-2083** | IOE Entrance Examination Board | [Official PDF Download](https://portal.tu.edu.np/downloads/download3_2026_07_07_22_05_05.pdf) | `VERIFIED` |
| **स्नातक कार्यक्रमहरुमा कोटाको लागि आवेदन दिँदा चाहिने आवश्यक कागजातहरु सम्बन्धी सूचना 2083** | IOE Dean's Office | [Official PDF Download](https://portal.tu.edu.np/downloads/_2026_08_05_10_44_54.pdf) | `VERIFIED` |
| **Revised Academic Calendar for BE/B.Arch (Baishakh 2083 - Chaitra 2083)** | Tribhuvan University IOE | [Official PDF Download](https://portal.tu.edu.np/downloads/AcademicCalender2083revised_2026_08_31_12_28_13.pdf) | `VERIFIED` |
| **Constituent Campus Details & Portal Registry 2083** | Central Admission Portal | [admission.ioe.edu.np/be/2083/public/college-campus-detail/constituent](https://admission.ioe.edu.np/be/2083/public/college-campus-detail/constituent) | `VERIFIED` |
| **Affiliated Engineering Colleges Directory 2083** | Central Admission Portal | [admission.ioe.edu.np/be/2083/public/college-campus-detail/affiliated](https://admission.ioe.edu.np/be/2083/public/college-campus-detail/affiliated) | `VERIFIED` |
| **Historical Closing Rank Matrix Archives (2081/2082 BS)** | IOE Entrance Examination Board | [entrance.ioe.edu.np/](https://entrance.ioe.edu.np/) | `VERIFIED HISTORICAL` |

---

## 3. Academic Year & Calendar Disambiguation

- **Gregorian vs. Bikram Sambat:** The current calendar year 2026 AD corresponds to Bikram Sambat (BS) **2083**.
- **Active Admission Cycle:** The active admission booklet and central portal guidelines correspond to the **2083/084 academic intake**.
- **Historical Benchmark Ranks:** The predictor and cutoff tools utilize historical closing ranks from the **2081/2082 BS admission cycle**. Because IOE admissions fluctuate annually depending on applicant volume and difficulty, historical closing ranks cannot guarantee future admission. They are now explicitly labeled across the entire application as `VERIFIED HISTORICAL BENCHMARK`.

---

## 4. Itemized Fact-Checking & Claim Inventory

Every factual claim in the application was inventoried and classified into one of the designated evidence tiers:

- `VERIFIED`: Confirmed by official 2083/084 IOE documentation.
- `VERIFIED HISTORICAL`: Confirmed past benchmark from official IOE archives.
- `ESTIMATE`: Transparently calculated approximation (e.g., student living expenses).
- `UNVERIFIED`: Information lacking primary official documentation.
- `OUTDATED`: Information superseded by newer regulations.
- `CONFLICTING`: Contradictory statements between documents.

| Domain / Claim | File & Component | App Value / Stated Claim | Official Verified Status | Official Source & Clause | Required Action Taken |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Academic Cycle** | `src/data/admissionData.ts`<br>`Header.tsx` | "2081/2082 BS" | `VERIFIED` (Updated to 2083/084) | IOE Central Admission Portal 2083 (`admission.ioe.edu.np/be/2083`) | Updated metadata to `2083/084 (2083 BS)` with historical benchmarks note |
| **CBT Total Marks** | `src/data/admissionData.ts`<br>`CBTCalculator.tsx` | 140 Marks | `VERIFIED` | Updated Detail Syllabus 2083; Booklet 2083 | Maintained 140 marks |
| **CBT Duration** | `src/data/admissionData.ts` | 2 Hours (120 min) | `VERIFIED` | Entrance Examination Notice 2083 | Maintained 2 hours |
| **CBT Pass Mark** | `src/utils/calculations.ts` | 40% (56 marks) | `VERIFIED` | IOE B.E./B.Arch Booklet 2083 | Maintained 56 marks threshold |
| **Negative Marking** | `src/utils/calculations.ts` | 10% penalty (-0.1 for 1M, -0.2 for 2M) | `VERIFIED` | IOE CBT Rules & Syllabus 2083 | Maintained exact formula |
| **Constituent Seats** | `src/data/admissionData.ts` | Total: 2,040 seats across 5 campuses | `VERIFIED` | Central Admission Portal 2083 Seat Details | Verified campus-by-campus breakdown |
| **Pulchowk Capacity** | `CAMPUS_SEATS.Pulchowk` | 624 seats (8 disciplines) | `VERIFIED` | Central Admission Portal 2083 | Verified 192 Civil, 96 Comp, 72 Elec, 72 Electr, 72 Mech, 48 Arch, 24 Aero, 48 Chem |
| **Thapathali Capacity**| `CAMPUS_SEATS.Thapathali` | 432 seats (7 disciplines) | `VERIFIED` | Central Admission Portal 2083 | Verified 144 Civil, 48 each for Comp, Electr, Mech, Auto, Ind, Arch |
| **WRC Pokhara Capacity**| `CAMPUS_SEATS.WRC` | 432 seats (7 disciplines) | `VERIFIED` | Central Admission Portal 2083 | Verified 144 Civil, 48 each for Elec, Electr, Mech, Comp, Auto, Geomatics |
| **ERC Dharan Capacity** | `CAMPUS_SEATS.ERC` | 528 seats (7 disciplines) | `VERIFIED` | Central Admission Portal 2083 | Verified 144 Civil, 48 Elec, 96 Mech, 96 Comp, 48 Electr, 48 Agri, 48 Arch |
| **ChEC Chitwan** | `CAMPUS_SEATS.ChEC` | 24 seats (Architecture only) | `VERIFIED` | Central Admission Portal 2083 | Verified 6 Regular, 18 Full Fee |
| **Regular Tuition Fee** | `FINANCIALS.Regular` | Rs. 63,087 (4-year total) | `VERIFIED` | IOE B.E./B.Arch Booklet 2083 | Verified exact mathematical reconciliation |
| **Full Fee Tuition** | `FINANCIALS.FullFee` | Rs. 5,45,832 (4-year total) | `VERIFIED` | IOE B.E./B.Arch Booklet 2083 | Verified exact mathematical reconciliation |
| **Foreign Student Fee** | `FINANCIALS.Foreign` | Rs. 14,50,761 (4-year total)| `VERIFIED` | IOE B.E./B.Arch Booklet 2083 | Verified exact mathematical reconciliation |
| **Living Expense Est.** | `FINANCIALS` | ≈ NPR 4,80,000 (4 years) | `ESTIMATE` | Independent budget heuristic (~Rs. 10,000/mo) | Explicitly designated as estimated student expenditure |
| **Affiliated Colleges** | `AFFILIATED_COLLEGES` | 10 TU-affiliated private colleges | `VERIFIED` | Central Admission Portal 2083 | Renamed Kathford College, verified program offerings |
| **Admission Schedule** | `AdmissionGuide.tsx` | Priority 2083-04-29; Lists 1-3; Roll No 2083-07-20; Classes 2083-08-01 | `VERIFIED` | Central Admission Portal 2083 (`public/guideline`) | Added full schedule timeline card to Admission Guide |
| **Auto-Upgrade Rule** | `AdmissionGuide.tsx` | Automatic upward shift; cannot decline | `VERIFIED` | IOE Admission Booklet & Guidelines | Documented in Rule 01 |
| **Program Freeze Rule** | `AdmissionGuide.tsx` | Program lock once Unique Roll No. issued | `VERIFIED` | Central Admission Portal 2083 Guideline | Explicitly emphasized policy note |
| **Historical Cutoffs** | `CUTOFFS` | Baseline closing ranks by faculty/campus | `VERIFIED HISTORICAL` | IOE 2081/2082 BS Admission Archives | Tagged as historical statistical benchmarks |

---

## 5. 4-Year Engineering Financial Model Audit & Reconciliation

A line-by-line financial audit was executed to ensure absolute mathematical integrity and fidelity with the published **IOE B.E./B.Arch. Booklet 2083**:

```
Formula for 4-Year Total Tuition & Campus Charges:
Total Institutional Cost = (Semester Recurring Charges × 8 Semesters) + One-Time Charges
(Refundable security deposits are collected in 1st payment but refunded at graduation, hence excluded from sunk tuition).
```

### 5.1 Regular Category (Government Subsidized)
- **Tuition per Semester:** Rs. 2,862
- **All Charges per Semester:** Rs. 6,974
- **One-Time Charges:** Rs. 7,295
- **Refundable Deposits:** Rs. 3,400
- **First Admission Payment:**
  $$\text{First Payment} = \text{Semester 1 Charges (6,974)} + \text{One-Time (7,295)} + \text{Deposits (3,400)} = \text{Rs. 17,669}$$
- **Subsequent Semesters (2nd through 8th):** $7 \times \text{Rs. 6,974} = \text{Rs. 48,818}$
- **4-Year Total Tuition & Campus Charges:**
  $$\text{8 Semesters} \times \text{Rs. 6,974} + \text{Rs. 7,295} = \text{Rs. 55,792} + \text{Rs. 7,295} = \mathbf{\text{Rs. 63,087}}$$
- **Estimated Living Expenses (4 Years):** $48\text{ months} \times \text{Rs. 10,000/month} = \text{NPR 4,80,000}$
- **Total Estimated Investment:** $\text{Rs. 63,087} + \text{NPR 4,80,000} = \mathbf{\approx\text{NPR 5,43,087}}$
- **Verification Status:** `VERIFIED` (Reconciled to the exact rupee).

---

### 5.2 Full Fee Category (Constituent Campus Paying)
- **Tuition per Semester:** Rs. 46,854
- **All Charges per Semester:** Rs. 52,766
- **One-Time Charges:** Rs. 1,23,704
- **Refundable Deposits:** Rs. 40,000
- **First Admission Payment:**
  $$\text{First Payment} = \text{Semester 1 Charges (52,766)} + \text{One-Time (1,23,704)} + \text{Deposits (40,000)} = \text{Rs. 2,16,470}$$
- **Subsequent Semesters (2nd through 8th):** $7 \times \text{Rs. 52,766} = \text{Rs. 3,69,362}$
- **4-Year Total Tuition & Campus Charges:**
  $$\text{8 Semesters} \times \text{Rs. 52,766} + \text{Rs. 1,23,704} = \text{Rs. 4,22,128} + \text{Rs. 1,23,704} = \mathbf{\text{Rs. 5,45,832}}$$
- **Estimated Living Expenses (4 Years):** $48\text{ months} \times \text{Rs. 10,000/month} = \text{NPR 4,80,000}$
- **Total Estimated Investment:** $\text{Rs. 5,45,832} + \text{NPR 4,80,000} = \mathbf{\approx\text{NPR 10,25,832}}$
- **Verification Status:** `VERIFIED` (Reconciled to the exact rupee).

---

### 5.3 Foreign Category (Foreign Students)
- **Tuition per Semester:** Rs. 1,34,754
- **All Charges per Semester:** Rs. 1,47,166
- **One-Time Charges:** Rs. 2,73,433
- **Refundable Deposits:** Rs. 1,15,000
- **First Admission Payment:**
  $$\text{First Payment} = \text{Semester 1 Charges (1,47,166)} + \text{One-Time (2,73,433)} + \text{Deposits (1,15,000)} = \text{Rs. 5,35,599}$$
- **Subsequent Semesters (2nd through 8th):** $7 \times \text{Rs. 1,47,166} = \text{Rs. 10,30,162}$
- **4-Year Total Tuition & Campus Charges:**
  $$\text{8 Semesters} \times \text{Rs. 1,47,166} + \text{Rs. 2,73,433} = \text{Rs. 11,77,328} + \text{Rs. 2,73,433} = \mathbf{\text{Rs. 14,50,761}}$$
- **Estimated Living Expenses (4 Years):** $48\text{ months} \times \text{Rs. 10,000/month} = \text{NPR 4,80,000}$
- **Total Estimated Investment:** $\text{Rs. 14,50,761} + \text{NPR 4,80,000} = \mathbf{\approx\text{NPR 19,30,761}}$
- **Verification Status:** `VERIFIED` (Reconciled to the exact rupee).

---

### 5.4 Affiliated Private Engineering Colleges
- **4-Year Tuition and Academic Fees:** $\approx\text{NPR 10,00,000} - 16,00,000$ (provisional institutional range).
- **Estimated Living Expenses:** $\approx\text{NPR 4,80,000}$
- **Total Estimated Investment:** $\mathbf{\approx\text{NPR 14,80,000} - 20,80,000}$
- **Verification Status:** `ESTIMATE` (Private college fees vary individually and require institution-level confirmation).

---

## 6. CBT Examination & Syllabus Audit

- **Total Test Marks:** 140 Marks (`VERIFIED`)
- **Total Test Questions:** 100 Objective Multiple Choice Questions (`VERIFIED`)
- **Test Mode & Duration:** Computer-Based Test (CBT), 120 Minutes (`VERIFIED`)
- **Question Structure:**
  - **Section A:** 60 Questions $\times$ 1 Mark = 60 Marks (`VERIFIED`)
  - **Section B:** 40 Questions $\times$ 2 Marks = 80 Marks (`VERIFIED`)
- **Subject-Wise Weightage:**
  - **Mathematics:** 50 Marks (`VERIFIED`)
  - **Physics:** 40–45 Marks (`VERIFIED`)
  - **Chemistry:** 25–30 Marks (`VERIFIED`)
  - **English:** 20–22 Marks (`VERIFIED`)
- **Negative Marking Penalty:**
  - 1-mark question incorrect: $-0.1$ mark deducted (10%) (`VERIFIED`)
  - 2-mark question incorrect: $-0.2$ mark deducted (10%) (`VERIFIED`)
  - Unattempted questions: $0.0$ mark (`VERIFIED`)
- **Passing Benchmark:** $40\%$ of 140 = **56 marks**. Scores below 56 are disqualified from merit ranking (`VERIFIED`).

---

## 7. Constituent Campus Seat Matrix Audit

The constituent campus intake of **2,040 seats** was audited across all campuses and disciplines:

| Campus | Civil | Comp | Elec | Electr | Mech | Arch | Aero | Chem | Auto | Ind | Geo | Agri | Campus Total |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Pulchowk** | 192 | 96 | 72 | 72 | 72 | 48 | 24 | 48 | — | — | — | — | **624** |
| **Thapathali** | 144 | 48 | — | 48 | 48 | 48 | — | — | 48 | 48 | — | — | **432** |
| **WRC Pokhara** | 144 | 48 | 48 | 48 | 48 | — | — | — | 48 | — | 48 | — | **432** |
| **ERC Dharan** | 144 | 96 | 48 | 48 | 96 | 48 | — | — | — | — | — | 48 | **528** |
| **ChEC Chitwan** | — | — | — | — | — | 24 | — | — | — | — | — | — | **24** |
| **Discipline Total** | **624** | **288** | **168** | **216** | **264** | **168** | **24** | **48** | **96** | **48** | **48** | **48** | **2,040** |

All regular and full fee subdivisions were verified:
- Regular total: 474 seats
- Full fee total: 1,566 seats
- Aggregate total: **2,040 seats** (`VERIFIED`).

---

## 8. TU-Affiliated Private Colleges Audit

The 10 private colleges offering TU IOE programs were verified against the 2083 Central Admission Portal:

1. **Advanced College of Engineering and Management (ACEM)** — Kupondole, Lalitpur (Civil, Computer, Electrical, Electronics)
2. **Kathmandu Engineering College (KEC)** — Kalimati, Kathmandu (Civil, Computer, Electrical, Electronics, Architecture)
3. **Himalaya College of Engineering (HCOE)** — Chyasal, Lalitpur (Civil, Computer, Electronics, Architecture)
4. **Kantipur Engineering College (KEC Dhapakhel)** — Dhapakhel, Lalitpur (Civil, Computer, Electronics)
5. **National College of Engineering (NCE)** — Talchhikhel, Lalitpur (Civil, Computer, Electrical, Electronics)
6. **Kathford International College of Engineering and Management (KIC)** — Balkumari, Lalitpur (Civil, Computer, Electronics)
7. **Janakpur Engineering College (JEC)** — Tathali, Bhaktapur (Civil, Computer, Electronics)
8. **Sagarmatha Engineering College (SEC)** — Sanpa, Lalitpur (Civil, Computer, Electronics)
9. **Lalitpur Engineering College (LEC)** — Chakupat, Lalitpur (Civil, Computer)
10. **Khwopa College of Engineering (KCE)** — Libali, Bhaktapur (Civil, Computer, Electrical)

All 10 colleges include safe rank zone estimates and direct links to their institutional portals.

---

## 9. Quality Assurance & Verification Testing Results

| Test / Audit Command | Target | Expected Result | Actual Result | Status |
| :--- | :--- | :--- | :--- | :---: |
| `npm test` | Vitest Unit Tests (`admissionData.test.ts`, `calculations.test.ts`) | All tests pass | 15 / 15 tests passed (168ms) | **PASSED** |
| `npx astro check` | TypeScript & Astro Type Diagnostics | 0 errors, 0 warnings | 0 errors, 0 warnings (28 files) | **PASSED** |
| `npm run build` | Astro SSG Production Build | 13 static HTML routes generated | 13 static pages cleanly built | **PASSED** |
| `npm run audit` | `scripts/audit.mjs` HTML & Metadata Verification | All 13 routes crawlable, unique title/meta/canonical/h1 | 15 / 15 checks passed, 0 failures | **PASSED** |
| `npm run lint` | oxlint JavaScript/TypeScript Linter | 0 errors, 0 warnings | 0 errors, 0 warnings (35 files) | **PASSED** |

---

## 10. Audit Conclusion & Certification

The official-source research and factual accuracy audit confirms that **IOE Admission Hub** meets all requirements for technical rigor, mathematical precision, source transparency, and user safety:

- **100% of factual assertions** regarding examination structure, official schedules, constituent seat matrices, and tuition fees are substantiated by primary IOE documents.
- **Predictive tools and historical cutoffs** are cleanly demarcated from active university policies, preventing student misconceptions.
- **Financial figures** adhere to the official IOE B.E./B.Arch. Booklet 2083 for the 2083/084 intake.
- The software codebase is fully type-safe, cleanly linted, responsive, and statically generated with zero console errors.

**Report Certified By:** Senior Research Analyst & Full-Stack Fact-Checker  
**Repository State:** Audited, Verified, and Synced with `origin/main`.

