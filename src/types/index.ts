export type CampusKey = 'Pulchowk' | 'Thapathali' | 'WRC' | 'ERC' | 'ChEC';

export type FeeType = 'Regular' | 'FullFee';

export type QuotaType = 'Open' | 'Janajati' | 'Female_FmQ' | 'Female_RsQ' | string;

export interface AdmissionMetadata {
  academicYear: string;
  governingBody: string;
  examFormat: string;
  totalMarks: number;
  durationHours: number;
  passPercentage: number;
  negativeMarking: string;
  totalConstituentSeats: number;
  sourceUrl: string;
  disclaimer: string;
}

export interface CampusDetail {
  fullName: string;
  location: string;
  district: string;
  established: number;
  website: string;
  admissionPortal: string;
  type: string;
  totalSeats: number;
  description: string;
  facilities: string[];
}

export interface CampusSeat {
  program: string;
  regular: number;
  fullFee: number;
  total: number;
}

export type QuotaCutoffMap = {
  Open: number;
  Janajati?: number;
  Female_FmQ?: number;
  Female_RsQ?: number;
  [quota: string]: number | undefined;
};

export type FeeCutoffMap = {
  Regular?: QuotaCutoffMap;
  FullFee?: QuotaCutoffMap;
  [fee: string]: QuotaCutoffMap | undefined;
};

export type ProgramCutoffMap = Record<string, FeeCutoffMap>;

export type CutoffsData = Record<CampusKey, ProgramCutoffMap>;

export interface AffiliatedCollege {
  name: string;
  location: string;
  programs: string;
  fee: string;
  cutoff: string;
  website: string;
}

export interface FacultyInfo {
  degree?: string;
  duration?: string;
  tags: string[];
  description: string;
  coreSubjects?: string[];
  careers: string[];
  industries?: string[];
  labWorkshops?: string[];
  furtherStudies?: string[];
  overlap: Record<string, string>;
}

export interface FinancialPlan {
  type: string;
  tuition: string;
  living: string;
  total: string;
  notes: string;
  tuitionSubtext?: string;
  totalFootnote?: string;
  semBreakdown?: {
    tuitionPerSem?: string;
    allChargesPerSem?: string;
    oneTimeCharges?: string;
    refundableDeposits?: string;
    firstPayment?: string;
  };
}

export interface OfficialPortal {
  name: string;
  url: string;
  type: string;
  authority: string;
}

export interface ChecklistItem {
  id: string;
  phase: string;
  title: string;
  description: string;
  portalLink: string;
  requiredDocs: string[];
}

export interface NoticeItem {
  id: string;
  title: string;
  academicYear: string;
  publishedDate: string;
  category: string;
  authority: string;
  status: string;
  sourceUrl: string;
  summary: string;
  isImportant: boolean;
}

// Calculation result types
export interface DetailedCbtScoreResult {
  score1: number;
  score2: number;
  totalNet: number;
  totalPenalty: number;
  totalAttempted: number;
  isQualified: boolean;
  percentage: number;
}

export interface ScoreToRankResult {
  range: string;
  msg: string;
  color: 'emerald' | 'teal' | 'amber' | 'orange' | 'red';
  isQualified: boolean;
}

export interface ProbabilityResult {
  status: 'HIGH PROBABILITY' | 'COMPETITIVE' | 'REACH / BORDERLINE' | 'LOW PROBABILITY' | 'UNAVAILABLE' | 'UNKNOWN';
  message: string;
  color: 'emerald' | 'amber' | 'orange' | 'red' | 'slate';
}

export interface PriorityOption {
  campus: CampusKey;
  prog: string;
  fee: FeeType;
  cutoff: number;
}

export interface PriorityLists {
  ambitious: PriorityOption[];
  match: PriorityOption[];
  safety: PriorityOption[];
}

