import type { 
  DetailedCbtScoreResult, 
  ScoreToRankResult, 
  ProbabilityResult 
} from '../types';

/**
 * IOE Entrance Examination and Admission Calculations
 * Based on official IOE Examination Guidelines & Historical Cutoff Benchmarks
 */

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Validates raw positive and negative marks for Quick Marks Mode.
 * Total marks in the IOE CBT exam is 140.
 */
export function validateQuickCbtMarks(correctMarks: number | string, wrongMarks: number | string): ValidationResult {
  const cStr = String(correctMarks).trim();
  const wStr = String(wrongMarks).trim();

  if (cStr === '' || wStr === '') {
    return { isValid: false, error: 'Please enter both positive marks and incorrect marks.' };
  }

  const c = parseFloat(cStr);
  const w = parseFloat(wStr);

  if (isNaN(c) || isNaN(w)) {
    return { isValid: false, error: 'Please enter valid numeric values for marks.' };
  }
  if (c < 0 || w < 0) {
    return { isValid: false, error: 'Marks cannot be negative. Please enter values of 0 or greater.' };
  }
  if (c > 140) {
    return { isValid: false, error: `Positive marks (${c}) cannot exceed total exam full marks of 140.` };
  }
  if (w > 140) {
    return { isValid: false, error: `Incorrect marks (${w}) cannot exceed total exam full marks of 140.` };
  }
  if (c + w > 140) {
    return { 
      isValid: false, 
      error: `Mathematical impossibility: Sum of correct marks (${c}) + incorrect marks (${w}) is ${Number((c + w).toFixed(2))}, which exceeds the total exam marks (140). Attempted marks cannot exceed full marks.` 
    };
  }
  return { isValid: true };
}

/**
 * Calculates net score for IOE Computer Based Test (CBT)
 * 10% negative marking penalty:
 * Each wrong 1-mark question deducts 0.1 mark.
 * Each wrong 2-mark question deducts 0.2 mark.
 * 
 * @param correctMarks - Total positive marks scored
 * @param wrongMarks - Total raw mark value of questions answered incorrectly
 * @returns Net score rounded to 2 decimal places
 */
export function calculateNetCbtScore(correctMarks: number | string, wrongMarks: number | string): number {
  const c = Math.max(0, Math.min(140, parseFloat(String(correctMarks)) || 0));
  const w = Math.max(0, Math.min(140, parseFloat(String(wrongMarks)) || 0));

  if (c + w > 140) {
    throw new Error(
      `Attempted marks sum (${c + w}) exceeds the exam full marks of 140.`
    );
  }

  const net = Math.max(0, c - (w * 0.1));
  return Number(net.toFixed(2));
}

export interface DetailedCbtScoreParams {
  correct1?: number | string;
  wrong1?: number | string;
  correct2?: number | string;
  wrong2?: number | string;
}

/**
 * Validates question counts for Section A (60 1-mark questions) and Section B (40 2-mark questions)
 */
export function validateDetailedCbtQuestions({
  correct1 = 0,
  wrong1 = 0,
  correct2 = 0,
  wrong2 = 0
}: DetailedCbtScoreParams): ValidationResult {
  const parseVal = (v: number | string) => {
    const s = String(v).trim();
    return s === '' ? 0 : Number(s);
  };

  const c1 = parseVal(correct1);
  const w1 = parseVal(wrong1);
  const c2 = parseVal(correct2);
  const w2 = parseVal(wrong2);

  if (isNaN(c1) || isNaN(w1) || isNaN(c2) || isNaN(w2)) {
    return { isValid: false, error: 'Please enter valid integer numbers for question counts.' };
  }
  if (c1 < 0 || w1 < 0 || c2 < 0 || w2 < 0) {
    return { isValid: false, error: 'Question counts cannot be negative.' };
  }
  if (!Number.isInteger(c1) || !Number.isInteger(w1) || !Number.isInteger(c2) || !Number.isInteger(w2)) {
    return { isValid: false, error: 'Question counts must be whole integers (no fractional questions).' };
  }
  if (c1 + w1 > 60) {
    return { 
      isValid: false, 
      error: `Section A limit exceeded: ${c1} correct + ${w1} incorrect = ${c1 + w1} questions. Section A only has 60 1-mark questions.` 
    };
  }
  if (c2 + w2 > 40) {
    return { 
      isValid: false, 
      error: `Section B limit exceeded: ${c2} correct + ${w2} incorrect = ${c2 + w2} questions. Section B only has 40 2-mark questions.` 
    };
  }
  if (c1 + w1 + c2 + w2 > 100) {
    return {
      isValid: false,
      error: `Total exam question limit exceeded: Attempted ${c1 + w1 + c2 + w2} questions out of maximum 100 questions.`
    };
  }
  return { isValid: true };
}

/**
 * Detailed CBT Calculator with distinct 1-mark and 2-mark questions
 * 
 * @param params - Question counters for 1-mark and 2-mark questions
 * @returns Score breakdown
 */
export function calculateDetailedCbtScore({ 
  correct1 = 0, 
  wrong1 = 0, 
  correct2 = 0, 
  wrong2 = 0 
}: DetailedCbtScoreParams): DetailedCbtScoreResult {
  const validation = validateDetailedCbtQuestions({ correct1, wrong1, correct2, wrong2 });
  if (!validation.isValid) {
    throw new Error(validation.error);
  }

  const c1 = Math.max(0, parseInt(String(correct1), 10) || 0);
  const w1 = Math.max(0, parseInt(String(wrong1), 10) || 0);
  const c2 = Math.max(0, parseInt(String(correct2), 10) || 0);
  const w2 = Math.max(0, parseInt(String(wrong2), 10) || 0);

  const rawPositive = (c1 * 1.0) + (c2 * 2.0);
  const penalty1 = w1 * 0.1;
  const penalty2 = w2 * 0.2;
  const totalPenalty = penalty1 + penalty2;

  const score1 = Math.max(0, (c1 * 1.0) - penalty1);
  const score2 = Math.max(0, (c2 * 2.0) - penalty2);

  // Overall examination net score
  const totalNet = Math.max(0, Math.min(140, rawPositive - totalPenalty));
  const totalAttempted = c1 + w1 + c2 + w2;
  const isQualified = totalNet >= 56; // 40% minimum passing mark (56 / 140)

  return {
    score1: Number(score1.toFixed(2)),
    score2: Number(score2.toFixed(2)),
    totalNet: Number(totalNet.toFixed(2)),
    totalPenalty: Number(totalPenalty.toFixed(2)),
    totalAttempted,
    isQualified,
    percentage: Number(((totalNet / 140) * 100).toFixed(1))
  };
}

/**
 * Score-to-rank estimator based on recent years' difficulty curve
 * Total marks: 140. Pass mark: 40% (56 marks)
 * 
 * @param score - Raw CBT test score
 * @returns Estimated bracket, message, styling token, and qualification status
 */
export function getScoreToRankEstimate(score: number | string): ScoreToRankResult {
  const s = parseFloat(String(score));
  if (isNaN(s) || s < 1 || s > 140) {
    return {
      range: "Invalid Score",
      msg: "Entrance score must be between 1 and 140.",
      color: "red",
      isQualified: false
    };
  }

  if (s >= 125) {
    return {
      range: "Rank 1 - 50",
      msg: "Exceptional score. Strong contender for Pulchowk Regular in all faculties.",
      color: "emerald",
      isQualified: true
    };
  }
  if (s >= 110) {
    return {
      range: "Rank 50 - 250",
      msg: "Outstanding score. High probability for Pulchowk Regular Computer, Civil & Electronics.",
      color: "emerald",
      isQualified: true
    };
  }
  if (s >= 95) {
    return {
      range: "Rank 250 - 700",
      msg: "Great score. Highly competitive for Pulchowk Full Fee and WRC/Thapathali Regular seats.",
      color: "teal",
      isQualified: true
    };
  }
  if (s >= 80) {
    return {
      range: "Rank 700 - 1500",
      msg: "Solid performance. Favorable chances for Constituent Campus Full Fee or ERC/WRC Regular.",
      color: "amber",
      isQualified: true
    };
  }
  if (s >= 65) {
    return {
      range: "Rank 1500 - 3000",
      msg: "Moderate score. Competitive for WRC & ERC Full Fee, or Thapathali secondary lists.",
      color: "orange",
      isQualified: true
    };
  }
  if (s >= 56) {
    return {
      range: "Rank 3000 - 5500",
      msg: "Qualified (Pass Mark met). Strong standing for ERC, ChEC, or top TU Affiliated colleges.",
      color: "orange",
      isQualified: true
    };
  }

  return {
    range: "Below Pass Threshold",
    msg: "Score is below the 40% passing benchmark (56/140). TU IOE requires at least 40% to be included in the merit rank list.",
    color: "red",
    isQualified: false
  };
}

/**
 * Calculates phase-adjusted cutoff
 * Later lists (Phase 2/3) historically see higher cutoff ranks
 * 
 * @param baseCutoff - Historical baseline closing rank
 * @param feeType - Regular or FullFee
 * @param phase - Counseling phase list number (1, 2, 3...)
 * @returns Phase-adjusted cutoff rank
 */
export function getPhaseCutoff(baseCutoff: number, feeType?: string, phase: number = 1): number {
  if (phase === 1 || !baseCutoff) return baseCutoff;
  const multiplier = feeType === 'FullFee' ? 1.45 : 1.15;
  return Math.round(baseCutoff * multiplier);
}

/**
 * Returns probabilistic outlook for a given rank and cutoff
 * Never labels a candidate as "guaranteed".
 * 
 * @param rank - Candidate entrance merit rank
 * @param cutoff - Target benchmark cutoff rank
 * @param phase - Counseling list phase
 * @returns ProbabilityResult
 */
export function getProbability(rank: number, cutoff: number, phase: number = 1): ProbabilityResult {
  if (!rank || !cutoff) return { status: 'UNKNOWN', message: 'Cutoff data not available.', color: 'slate' };
  
  if (rank <= cutoff * 0.8) {
    return {
      status: 'HIGH PROBABILITY',
      message: 'Rank is well within historical benchmark closing range.',
      color: 'emerald'
    };
  }
  if (rank <= cutoff) {
    return {
      status: 'COMPETITIVE',
      message: 'Within historical cutoff threshold; selection subject to yearly demand.',
      color: 'amber'
    };
  }
  if (rank <= cutoff + (phase === 2 ? 100 : 200)) {
    return {
      status: 'REACH / BORDERLINE',
      message: 'Slightly above baseline cutoff; possible in subsequent upgrade lists.',
      color: 'orange'
    };
  }
  return {
    status: 'LOW PROBABILITY',
    message: 'Exceeds historical cutoff parameters for this specific quota.',
    color: 'red'
  };
}

