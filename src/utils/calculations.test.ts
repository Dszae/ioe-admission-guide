import { describe, it, expect } from 'vitest';
import { 
  calculateNetCbtScore, 
  calculateDetailedCbtScore, 
  validateQuickCbtMarks,
  validateDetailedCbtQuestions,
  getScoreToRankEstimate, 
  getPhaseCutoff, 
  getProbability 
} from './calculations';

describe('CBT Score Calculation', () => {
  it('correctly calculates net score with standard 10% penalty', () => {
    // 100 correct marks, 20 wrong marks -> 100 - (20 * 0.1) = 98.00
    expect(calculateNetCbtScore(100, 20)).toBe(98);
    // 0 correct, 10 wrong -> 0 (non-negative)
    expect(calculateNetCbtScore(0, 10)).toBe(0);
    // max capping at 140
    expect(calculateNetCbtScore(150, 0)).toBe(140);
  });

  it('rejects impossible marks where sum exceeds 140 full marks (e.g. 130 correct + 30 wrong)', () => {
    const val = validateQuickCbtMarks(130, 30);
    expect(val.isValid).toBe(false);
    expect(val.error).toContain('Mathematical impossibility');

    expect(() => calculateNetCbtScore(130, 30)).toThrow('Attempted marks sum (160) exceeds the exam full marks of 140');
  });

  it('rejects negative marks or marks > 140 in Quick mode', () => {
    expect(validateQuickCbtMarks(-5, 10).isValid).toBe(false);
    expect(validateQuickCbtMarks(10, -2).isValid).toBe(false);
    expect(validateQuickCbtMarks(145, 0).isValid).toBe(false);
    expect(validateQuickCbtMarks(0, 145).isValid).toBe(false);
  });

  it('correctly computes detailed 1-mark and 2-mark question penalty', () => {
    const res = calculateDetailedCbtScore({
      correct1: 40, // 40 marks
      wrong1: 10,   // -1.0
      correct2: 25, // 50 marks
      wrong2: 5     // -1.0
    });
    // score1: 40 - 1 = 39
    // score2: 50 - 1 = 49
    // total: 88
    expect(res.totalNet).toBe(88);
    expect(res.totalPenalty).toBe(2);
    expect(res.isQualified).toBe(true);
    expect(res.totalAttempted).toBe(80);
  });

  it('validates 1-mark (max 60) and 2-mark (max 40) question boundaries', () => {
    // 50 correct + 20 wrong = 70 questions in Section A (limit is 60)
    const valSec1 = validateDetailedCbtQuestions({ correct1: 50, wrong1: 20 });
    expect(valSec1.isValid).toBe(false);
    expect(valSec1.error).toContain('Section A limit exceeded');

    // 35 correct + 15 wrong = 50 questions in Section B (limit is 40)
    const valSec2 = validateDetailedCbtQuestions({ correct2: 35, wrong2: 15 });
    expect(valSec2.isValid).toBe(false);
    expect(valSec2.error).toContain('Section B limit exceeded');
  });

  it('handles absolute worst-case scenario: all 100 questions incorrect', () => {
    // 0 correct, 60 incorrect 1-mark, 40 incorrect 2-mark
    const res = calculateDetailedCbtScore({
      correct1: 0,
      wrong1: 60,
      correct2: 0,
      wrong2: 40
    });
    // Total penalty = 60 * 0.1 + 40 * 0.2 = 6 + 8 = 14
    expect(res.totalPenalty).toBe(14);
    expect(res.totalNet).toBe(0); // non-negative floor
    expect(res.totalAttempted).toBe(100);
    expect(res.isQualified).toBe(false);
  });

  it('handles perfect score: all 100 questions correct', () => {
    const res = calculateDetailedCbtScore({
      correct1: 60,
      wrong1: 0,
      correct2: 40,
      wrong2: 0
    });
    expect(res.totalNet).toBe(140);
    expect(res.totalPenalty).toBe(0);
    expect(res.totalAttempted).toBe(100);
    expect(res.isQualified).toBe(true);
    expect(res.percentage).toBe(100);
  });

  it('detects disqualification when score is below 40% (56 marks)', () => {
    const res = calculateDetailedCbtScore({
      correct1: 30,
      wrong1: 0,
      correct2: 10,
      wrong2: 0
    });
    // total = 30 + 20 = 50 (< 56)
    expect(res.totalNet).toBe(50);
    expect(res.isQualified).toBe(false);
  });
});

describe('Score to Rank Estimator', () => {
  it('maps exceptional score to top rank bracket', () => {
    const est = getScoreToRankEstimate(130);
    expect(est.range).toBe('Rank 1 - 50');
    expect(est.isQualified).toBe(true);
    expect(est.color).toBe('emerald');
  });

  it('correctly flags scores below pass mark 56', () => {
    const est = getScoreToRankEstimate(45);
    expect(est.range).toBe('Below Pass Threshold');
    expect(est.isQualified).toBe(false);
    expect(est.color).toBe('red');
  });

  it('handles boundary and invalid values gracefully', () => {
    expect(getScoreToRankEstimate(0).range).toBe('Invalid Score');
    expect(getScoreToRankEstimate(150).range).toBe('Invalid Score');
    expect(getScoreToRankEstimate('abc').range).toBe('Invalid Score');
  });
});

describe('Phase Cutoff & Probability Engine', () => {
  it('multiplies cutoffs for later lists (Phase 2)', () => {
    const regPhase1 = getPhaseCutoff(100, 'Regular', 1);
    const regPhase2 = getPhaseCutoff(100, 'Regular', 2);
    const ffPhase2 = getPhaseCutoff(100, 'FullFee', 2);

    expect(regPhase1).toBe(100);
    expect(regPhase2).toBe(115); // 1.15x
    expect(ffPhase2).toBe(145);  // 1.45x
  });

  it('evaluates probabilities without guaranteeing admission', () => {
    const highProb = getProbability(100, 200, 1);
    expect(highProb.status).toBe('HIGH PROBABILITY');
    expect(highProb.color).toBe('emerald');

    const competitive = getProbability(180, 200, 1);
    expect(competitive.status).toBe('COMPETITIVE');

    const reach = getProbability(250, 200, 1);
    expect(reach.status).toBe('REACH / BORDERLINE');

    const low = getProbability(600, 200, 1);
    expect(low.status).toBe('LOW PROBABILITY');
  });
});

