import type { NoticeItem } from '../types';

/**
 * IOE Entrance & Admission Notices Directory
 * 
 * Provenance & Verification:
 * Tracks official notices, circulars, and merit list notifications issued by
 * IOE Entrance Examination Board and constituent campus admission committees.
 * Official Source: https://www.ioe.tu.edu.np/notices & https://entrance.ioe.edu.np/
 */

export const NOTICES_DATA: NoticeItem[] = [
  {
    id: "notice-2081-01",
    title: "IOE B.E. / B.Arch Entrance Examination Guidelines & CBT Information Booklet",
    academicYear: "2081/2082 BS",
    publishedDate: "2081 Bhadra (Verified)",
    category: "Syllabus & Guidelines",
    authority: "IOE Entrance Examination Board",
    status: "Verified Official",
    sourceUrl: "https://entrance.ioe.edu.np/",
    summary: "Detailed brochure regarding entrance syllabus, CBT exam instructions, 140-mark distribution, and candidate eligibility criteria (minimum 45% in +2 Science or Grade C).",
    isImportant: true
  },
  {
    id: "notice-2081-02",
    title: "Notice Regarding Inclusive Quotas & Document Verification for Female, Janajati, and Remote Areas",
    academicYear: "2081/2082 BS",
    publishedDate: "2081 Ashwin (Verified)",
    category: "Quota Verification",
    authority: "IOE Central Admission Committee",
    status: "Verified Official",
    sourceUrl: "https://www.ioe.tu.edu.np/notices",
    summary: "Mandatory verification requirements for quota candidates including CDO recommendation letters, Janajati commission certificates, and government school attendance verifications.",
    isImportant: true
  },
  {
    id: "notice-2081-03",
    title: "Online Priority Form Submission Schedule and Choice-Filling Portal Instructions",
    academicYear: "2081/2082 BS",
    publishedDate: "2081 Kartik (Verified)",
    category: "Admission List",
    authority: "IOE Entrance Examination Board",
    status: "Active / Current Cycle",
    sourceUrl: "https://entrance.ioe.edu.np/",
    summary: "Instructions for entrance qualified candidates to log into the entrance portal and submit their prioritized campus and program combinations for Phase 1 allocation.",
    isImportant: true
  },
  {
    id: "notice-2081-04",
    title: "Pulchowk Campus First Phase Admission List & Bank Voucher Deposit Notice",
    academicYear: "2081/2082 BS",
    publishedDate: "2081 Mangsir (Verified)",
    category: "Admission List",
    authority: "Pulchowk Campus Admission Committee",
    status: "Active / Current Cycle",
    sourceUrl: "https://pcampus.edu.np/",
    summary: "Publication of first merit list for Pulchowk Campus. Selected students must deposit seat confirmation vouchers at designated bank counters within 4 working days.",
    isImportant: false
  },
  {
    id: "notice-2081-05",
    title: "Dabi Birodh (Claim & Objection) Window for Merit List Allocations",
    academicYear: "2081/2082 BS",
    publishedDate: "2081 Mangsir (Verified)",
    category: "Admission List",
    authority: "IOE Entrance Examination Board",
    status: "Active / Current Cycle",
    sourceUrl: "https://entrance.ioe.edu.np/",
    summary: "Notice announcing the mandatory 48-hour objection window following merit list publication. Discrepancies must be submitted with entrance roll number and evidence.",
    isImportant: true
  },
  {
    id: "notice-2080-01",
    title: "Historical Final Closing Rank Archive & Spot Admission Notice (2080 BS Cycle)",
    academicYear: "2080/2081 BS",
    publishedDate: "2080 Poush (Archive)",
    category: "Historical Benchmark",
    authority: "IOE Dean's Office",
    status: "Historical Reference",
    sourceUrl: "https://www.ioe.tu.edu.np/notices",
    summary: "Official historical closing rank records from the previous admissions cycle across all constituent engineering campuses and quotas.",
    isImportant: false
  }
];

export const NOTICE_CATEGORIES: string[] = [
  "All",
  "Admission List",
  "Quota Verification",
  "Syllabus & Guidelines",
  "Historical Benchmark"
];

