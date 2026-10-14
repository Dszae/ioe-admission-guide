import type { NoticeItem } from '../types';

/**
 * IOE Entrance & Admission Notices Directory
 * 
 * Provenance & Verification:
 * Tracks official notices, circulars, and merit list notifications issued by
 * IOE Entrance Examination Board and constituent campus admission committees.
 * Official Sources: 
 * - https://ioe.tu.edu.np/downloads
 * - https://ioe.tu.edu.np/notices
 * - https://admission.ioe.edu.np/be/2083/public/guideline
 * - https://entrance.ioe.edu.np/
 * 
 * Last Verified: October 2026
 */

export const NOTICES_DATA: NoticeItem[] = [
  {
    id: "notice-2083-01",
    title: "IOE B.E. / B.Arch. Information Booklet 2083 (Academic Year 2083/084)",
    academicYear: "2083/084 BS",
    publishedDate: "2083 Ashadh (Verified)",
    category: "Syllabus & Guidelines",
    authority: "IOE Entrance Examination Board",
    status: "Verified Official",
    sourceUrl: "https://portal.tu.edu.np/downloads/download4_2026_07_07_22_07_13.pdf",
    summary: "Official information booklet detailing candidate eligibility criteria, constituent campus quotas, fee structure for Regular (Rs. 63,087), Full Fee (Rs. 5,45,832), and Foreign students (Rs. 14,50,761).",
    isImportant: true
  },
  {
    id: "notice-2083-02",
    title: "2nd Revised Notice for B.E./B.Arch. Entrance Examination (Academic Year 2083/084)",
    academicYear: "2083/084 BS",
    publishedDate: "2083 Ashadh (Verified)",
    category: "Syllabus & Guidelines",
    authority: "IOE Entrance Examination Board",
    status: "Verified Official",
    sourceUrl: "https://portal.tu.edu.np/downloads/download2_2026_07_07_22_05_49.pdf",
    summary: "Comprehensive notification specifying CBT exam schedules, shift allotments at ICTC Pulchowk, roll number confirmation procedures, and online admit card download rules.",
    isImportant: true
  },
  {
    id: "notice-2083-03",
    title: "Updated Detail Syllabus of B.E./B.Arch. Entrance Examination-2083",
    academicYear: "2083/084 BS",
    publishedDate: "2083 Ashadh (Verified)",
    category: "Syllabus & Guidelines",
    authority: "IOE Entrance Examination Board",
    status: "Verified Official",
    sourceUrl: "https://portal.tu.edu.np/downloads/download3_2026_07_07_22_05_05.pdf",
    summary: "Complete 140-mark examination syllabus (Mathematics 50, Physics 40, Chemistry 30, English 20). 100 questions (60 in Section A @ 1 mark, 40 in Section B @ 2 marks) with 10% negative marking.",
    isImportant: true
  },
  {
    id: "notice-2083-04",
    title: "स्नातक कार्यक्रमहरुमा कोटाको लागि आवेदन दिँदा चाहिने आवश्यक कागजातहरु सम्बन्धी सूचना 2083",
    academicYear: "2083/084 BS",
    publishedDate: "2083 Shrawan (Verified)",
    category: "Quota Verification",
    authority: "IOE Central Admission Committee",
    status: "Verified Official",
    sourceUrl: "https://portal.tu.edu.np/downloads/_2026_08_05_10_44_54.pdf",
    summary: "Mandatory verification requirements for quota candidates including Female (FmQ/RsQ), Adivasi/Janajati, Remote District (Pichhadiyeko Kshetra), Dalit, Madhesi, and Government School certifications.",
    isImportant: true
  },
  {
    id: "notice-2083-05",
    title: "REVISED ACADEMIC CALENDAR FOR BE/B.Arch, Baishakh 2083 to Chaitra 2083",
    academicYear: "2083/084 BS",
    publishedDate: "2083 Shrawan (Verified)",
    category: "Syllabus & Guidelines",
    authority: "Tribhuvan University IOE Dean's Office",
    status: "Verified Official",
    sourceUrl: "https://portal.tu.edu.np/downloads/AcademicCalender2083revised_2026_08_31_12_28_13.pdf",
    summary: "Approved academic calendar establishing semester examination periods, vacation windows, internal assessment weeks, and commencement dates for undergraduate engineering.",
    isImportant: false
  },
  {
    id: "notice-2083-06",
    title: "Central Admission Portal 2083: Application, 1st-3rd Merit Lists & Class Commencement Schedule",
    academicYear: "2083/084 BS",
    publishedDate: "2083 Shrawan - Bhadra (Live)",
    category: "Admission List",
    authority: "Central Admission Committee (admission.ioe.edu.np)",
    status: "Active / Current Cycle",
    sourceUrl: "https://admission.ioe.edu.np/be/2083/public/guideline",
    summary: "Centralized schedule: Applications 2083-04-29 to 2083-05-02; Priority edits 2083-05-03; 1st List 2083-05-07; 2nd List 2083-05-14; 3rd List 2083-05-21; Unique Roll No 2083-07-20; Classes commence 2083-08-01 (Mangsir 1).",
    isImportant: true
  },
  {
    id: "notice-2081-01",
    title: "Historical Benchmark Archive: IOE B.E. / B.Arch 2081/2082 Closing Rank Matrix",
    academicYear: "2081/2082 BS",
    publishedDate: "2081 Mangsir (Archive)",
    category: "Historical Benchmark",
    authority: "IOE Entrance Examination Board",
    status: "Historical Reference",
    sourceUrl: "https://entrance.ioe.edu.np/",
    summary: "Archived cutoff baseline data across Pulchowk, Thapathali, WRC, ERC, and ChEC utilized by the predictive heuristics on this platform.",
    isImportant: false
  },
  {
    id: "notice-2080-01",
    title: "Historical Final Closing Rank Archive & Spot Admission Notice (2080 BS Cycle)",
    academicYear: "2080/2081 BS",
    publishedDate: "2080 Poush (Archive)",
    category: "Historical Benchmark",
    authority: "IOE Dean's Office",
    status: "Historical Reference",
    sourceUrl: "https://ioe.tu.edu.np/notices",
    summary: "Official historical closing rank records from the 2080 BS cycle across all constituent engineering campuses and inclusive reservation categories.",
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
