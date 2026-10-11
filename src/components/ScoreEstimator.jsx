import React, { useState } from 'react';
import { getScoreToRankEstimate } from '../utils/calculations';
import InfoDisclaimer from './common/InfoDisclaimer';

export default function ScoreEstimator({ isDark, initialScore = '' }) {
  const [scoreInput, setScoreInput] = useState(initialScore ? String(initialScore) : '');
  const [estimateResult, setEstimateResult] = useState(
    initialScore ? getScoreToRankEstimate(initialScore) : null
  );

  const calculateEstimate = (scoreVal) => {
    const res = getScoreToRankEstimate(scoreVal);
    setEstimateResult(res);
  };

  const handleEstimate = (e) => {
    e.preventDefault();
    calculateEstimate(scoreInput);
  };

  const getResultStyle = (color) => {
    switch (color) {
      case 'emerald':
        return isDark ? 'bg-emerald-900/50 border-emerald-500 text-emerald-50' : 'bg-emerald-50 border-emerald-300 text-emerald-950';
      case 'teal':
        return isDark ? 'bg-teal-900/50 border-teal-500 text-teal-50' : 'bg-teal-50 border-teal-300 text-teal-950';
      case 'amber':
        return isDark ? 'bg-amber-900/50 border-amber-500 text-amber-50' : 'bg-amber-50 border-amber-300 text-amber-950';
      case 'orange':
        return isDark ? 'bg-orange-900/50 border-orange-500 text-orange-50' : 'bg-orange-50 border-orange-300 text-orange-950';
      case 'red':
      default:
        return isDark ? 'bg-rose-900/50 border-rose-500 text-rose-50' : 'bg-rose-50 border-rose-300 text-rose-950';
    }
  };

  return (
    <div className="animate-fadeIn">
      
      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white print:text-black">
          CBT Score-to-Rank Curve Estimator
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
          Estimate your anticipated merit rank bracket from your raw CBT score (out of 140) before official rank lists are released.
        </p>
      </div>

      <form onSubmit={handleEstimate} className="bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-500 p-4 sm:p-5 rounded-xl print:hidden flex flex-col gap-3">
        <div>
          <label htmlFor="score-input" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            Your Expected CBT Score (Out of 140) <span className="text-rose-500">*</span>
          </label>
          <div className="flex flex-col sm:flex-row gap-2.5">
            <input
              id="score-input"
              type="number"
              step="any"
              min="1"
              max="140"
              inputMode="decimal"
              placeholder="e.g. 104.5"
              value={scoreInput}
              onChange={(e) => setScoreInput(e.target.value)}
              required
              className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-mono text-base focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
            />
            <button
              type="submit"
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-xs rounded-xl transition-all shadow-xs whitespace-nowrap min-h-[44px]"
            >
              Estimate Rank Bracket
            </button>
          </div>
          <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1.5">Minimum qualifying pass mark is 56 (40%).</p>
        </div>
      </form>

      {estimateResult && (
        <div className={`mt-6 p-5 sm:p-6 rounded-xl border text-center transition-all ${getResultStyle(estimateResult.color)}`}>
          <span className="text-xs font-medium opacity-80 block mb-1">
            Estimated Merit Rank Bracket
          </span>
          <h3 className="text-2xl sm:text-4xl font-mono font-bold my-1">
            {estimateResult.range}
          </h3>
          <p className="text-xs sm:text-sm font-medium max-w-lg mx-auto opacity-90 mt-1">
            {estimateResult.msg}
          </p>
          <div className="mt-3 pt-2.5 border-t border-current/15 text-xs font-medium opacity-80">
            Pass Benchmark (56 Marks):{' '}
            <strong>{estimateResult.isQualified ? 'Eligible for IOE Merit Listing' : 'Does not meet 40% Pass Cutoff'}</strong>
          </div>
        </div>
      )}

      {/* Historical Score vs Rank Reference Guide */}
      <div className="mt-6 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800">
        <h4 className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-3">
          Historical Score vs Rank Distribution Benchmarks
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
          <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
            <span className="text-slate-500 block text-[11px] font-medium">120+ Marks</span>
            <strong className="text-slate-900 dark:text-white font-mono text-sm block mt-0.5">Rank &lt; 100</strong>
            <p className="text-[11px] text-slate-500 mt-0.5">Top Merit Zone</p>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
            <span className="text-slate-500 block text-[11px] font-medium">100 - 119 Marks</span>
            <strong className="text-slate-900 dark:text-white font-mono text-sm block mt-0.5">Rank 100 - 500</strong>
            <p className="text-[11px] text-slate-500 mt-0.5">Pulchowk Regular</p>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
            <span className="text-slate-500 block text-[11px] font-medium">85 - 99 Marks</span>
            <strong className="text-slate-900 dark:text-white font-mono text-sm block mt-0.5">Rank 500 - 1500</strong>
            <p className="text-[11px] text-slate-500 mt-0.5">Full Fee / Regional</p>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
            <span className="text-slate-500 block text-[11px] font-medium">56 - 84 Marks</span>
            <strong className="text-slate-900 dark:text-white font-mono text-sm block mt-0.5">Rank 1500 - 5000+</strong>
            <p className="text-[11px] text-slate-500 mt-0.5">Regional / Affiliated</p>
          </div>
        </div>
      </div>

      <InfoDisclaimer
        isDark={isDark}
        title="Estimation Model Limitation"
        text="Score-to-rank conversions are heuristic interpolations modelled on recent examination results and candidate performance distributions. Because the IOE CBT uses scaled standard deviations and each year's applicant difficulty curve varies, true ranks will only be confirmed on the official Entrance Board result day."
      />

    </div>
  );
}
