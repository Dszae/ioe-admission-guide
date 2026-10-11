import React, { useState } from 'react';
import { getScoreToRankEstimate } from '../utils/calculations';
import InfoDisclaimer from './common/InfoDisclaimer';

export default function ScoreEstimator({ isDark, initialScore = '' }) {
  const [scoreInput, setScoreInput] = useState(initialScore ? String(initialScore) : '');
  const [estimateResult, setEstimateResult] = useState(
    initialScore ? getScoreToRankEstimate(initialScore) : null
  );

  const handleEstimate = (e) => {
    e.preventDefault();
    const res = getScoreToRankEstimate(scoreInput);
    setEstimateResult(res);
  };

  const getResultStyle = (color) => {
    switch (color) {
      case 'emerald':
        return isDark ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-800';
      case 'teal':
        return isDark ? 'bg-teal-500/10 border-teal-500/40 text-teal-400' : 'bg-teal-50 border-teal-200 text-teal-800';
      case 'amber':
        return isDark ? 'bg-amber-500/10 border-amber-500/40 text-amber-400' : 'bg-amber-50 border-amber-200 text-amber-800';
      case 'orange':
        return isDark ? 'bg-orange-500/10 border-orange-500/40 text-orange-400' : 'bg-orange-50 border-orange-200 text-orange-800';
      case 'red':
      default:
        return isDark ? 'bg-red-500/10 border-red-500/40 text-red-400' : 'bg-red-50 border-red-200 text-red-800';
    }
  };

  return (
    <div className="animate-fadeIn">
      
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white print:text-black">
          CBT Score-to-Rank Curve Estimator
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
          Estimate your anticipated merit rank bracket from your raw CBT score (out of 140) before official rank lists are released.
        </p>
      </div>

      <form onSubmit={handleEstimate} className="bg-cyan-500/5 border border-cyan-500/20 p-5 sm:p-6 rounded-2xl print:hidden flex flex-col sm:flex-row gap-4">
        <div className="w-full">
          <label htmlFor="score-input" className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-600 dark:text-slate-400">
            Your Expected Score (Out of 140) <span className="text-red-500">*</span>
          </label>
          <input
            id="score-input"
            type="number"
            step="any"
            min="1"
            max="140"
            placeholder="e.g. 104.5"
            value={scoreInput}
            onChange={(e) => setScoreInput(e.target.value)}
            required
            className="w-full px-5 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-mono text-base focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all shadow-sm"
          />
          <p className="text-[11px] text-slate-500 mt-1">Minimum qualifying pass mark is 56 (40%).</p>
        </div>

        <div className="w-full sm:w-auto flex items-end">
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3.5 bg-cyan-600 hover:bg-cyan-500 active:scale-[0.98] text-white font-bold text-xs tracking-wider uppercase rounded-xl transition-all shadow-md whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            Estimate Rank Bracket
          </button>
        </div>
      </form>

      {estimateResult && (
        <div className={`mt-8 p-6 sm:p-8 rounded-2xl border text-center transition-all ${getResultStyle(estimateResult.color)}`}>
          <span className="text-xs font-bold uppercase tracking-widest opacity-80 block mb-1">
            Estimated Merit Rank Bracket
          </span>
          <h3 className="text-3xl sm:text-5xl font-mono font-extrabold my-2">
            {estimateResult.range}
          </h3>
          <p className="text-xs sm:text-sm font-semibold max-w-lg mx-auto opacity-90 mt-2">
            {estimateResult.msg}
          </p>
          <div className="mt-4 pt-3 border-t border-current/20 text-xs font-medium opacity-80">
            Pass Benchmark (56 Marks):{' '}
            <strong>{estimateResult.isQualified ? 'Eligible for IOE Merit Listing' : 'Does not meet 40% Pass Cutoff'}</strong>
          </div>
        </div>
      )}

      {/* Historical Score vs Rank Reference Guide */}
      <div className="mt-8 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
          Historical Score vs Rank Distribution Benchmarks
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
            <span className="text-slate-500 block text-[10px] uppercase font-bold">120+ Marks</span>
            <strong className="text-emerald-600 dark:text-emerald-400 font-mono text-sm">Rank &lt; 100</strong>
            <p className="text-[11px] text-slate-500 mt-1">Topper Zone</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
            <span className="text-slate-500 block text-[10px] uppercase font-bold">100 - 119 Marks</span>
            <strong className="text-teal-600 dark:text-teal-400 font-mono text-sm">Rank 100 - 500</strong>
            <p className="text-[11px] text-slate-500 mt-1">Pulchowk Regular</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
            <span className="text-slate-500 block text-[10px] uppercase font-bold">85 - 99 Marks</span>
            <strong className="text-amber-600 dark:text-amber-400 font-mono text-sm">Rank 500 - 1500</strong>
            <p className="text-[11px] text-slate-500 mt-1">Full Fee / Regional</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
            <span className="text-slate-500 block text-[10px] uppercase font-bold">56 - 84 Marks</span>
            <strong className="text-orange-600 dark:text-orange-400 font-mono text-sm">Rank 1500 - 5000+</strong>
            <p className="text-[11px] text-slate-500 mt-1">Regional / Affiliated</p>
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

