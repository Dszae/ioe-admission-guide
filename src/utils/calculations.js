/**
 * IOE Entrance Examination and Admission Calculations
 * Based on official IOE Examination Guidelines & Historical Cutoff Benchmarks
 */

/**
 * Calculates net score for IOE Computer Based Test (CBT)
 * 10% negative marking penalty:
 * Each wrong 1-mark question deducts 0.1 mark.
 * Each wrong 2-mark question deducts 0.2 mark.
 * 
 * @param {number} correctMarks - Total positive marks scored
 * @param {number} wrongMarks - Total raw mark value of questions answered incorrectly
 * @returns {number} Net score rounded to 2 decimal places
 */
export function calculateNetCbtScore(correctMarks, wrongMarks) {
  const c = Math.max(0, Math.min(140, parseFloat(correctMarks) || 0));
  const w = Math.max(0, Math.min(140, parseFloat(wrongMarks) || 0));
  const net = Math.max(0, c - (w * 0.1));
  return Number(net.toFixed(2));
}

/**
 * Detailed CBT Calculator with distinct 1-mark and 2-mark questions
 * 
 * @param {Object} params
 * @param {number} params.correct1 - Correct 1-mark questions
 * @param {number} params.wrong1 - Wrong 1-mark questions (-0.1 penalty each)
 * @param {number} params.correct2 - Correct 2-mark questions
 * @param {number} params.wrong2 - Wrong 2-mark questions (-0.2 penalty each)
 * @returns {Object} Score breakdown
 */
export function calculateDetailedCbtScore({ correct1 = 0, wrong1 = 0, correct2 = 0, wrong2 = 0 }) {
  const c1 = Math.max(0, parseInt(correct1, 10) || 0);
  const w1 = Math.max(0, parseInt(wrong1, 10) || 0);
  const c2 = Math.max(0, parseInt(correct2, 10) || 0);
  const w2 = Math.max(0, parseInt(wrong2, 10) || 0);

  const score1 = Math.max(0, (c1 * 1.0) - (w1 * 0.1));
  const score2 = Math.max(0, (c2 * 2.0) - (w2 * 0.2));
  const totalNet = Math.max(0, Math.min(140, score1 + score2));
  const totalAttempted = c1 + w1 + c2 + w2;
  const totalPenalty = (w1 * 0.1) + (w2 * 0.2);
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
 * @param {number} score
 * @returns {Object} Estimated bracket, message, styling token, and qualification status
 */
export function getScoreToRankEstimate(score) {
  const s = parseFloat(score);
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
 * @param {number} baseCutoff
 * @param {string} feeType
 * @param {number} phase
 * @returns {number}
 */
export function getPhaseCutoff(baseCutoff, feeType, phase = 1) {
  if (phase === 1 || !baseCutoff) return baseCutoff;
  const multiplier = feeType === 'FullFee' ? 1.45 : 1.15;
  return Math.round(baseCutoff * multiplier);
}

/**
 * Returns probabilistic outlook for a given rank and cutoff
 * Never labels a candidate as "guaranteed".
 * 
 * @param {number} rank
 * @param {number} cutoff
 * @param {number} phase
 * @returns {Object}
 */
export function getProbability(rank, cutoff, phase = 1) {
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
