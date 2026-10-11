import React, { useState } from 'react';
import { calculateNetCbtScore, calculateDetailedCbtScore } from '../utils/calculations';
import InfoDisclaimer from './common/InfoDisclaimer';

export default function CBTCalculator({ isDark, onSendToEstimator, onNavigateTab }) {
  const [mode, setMode] = useState('quick'); // 'quick' | 'detailed'
  
  // Quick mode state
  const [quickForm, setQuickForm] = useState({ correct: '', wrong: '' });
  const [quickResult, setQuickResult] = useState(null);

  // Detailed mode state
  const [detailedForm, setDetailedForm] = useState({
    correct1: '',
    wrong1: '',
    correct2: '',
    wrong2: ''
  });
  const [detailedResult, setDetailedResult] = useState(null);

  const handleQuickCalc = (e) => {
    e.preventDefault();
    const c = parseFloat(quickForm.correct) || 0;
    const w = parseFloat(quickForm.wrong) || 0;
    const net = calculateNetCbtScore(c, w);
    const penalty = Number((w * 0.1).toFixed(2));
    const isQualified = net >= 56;
    setQuickResult({ net, penalty, isQualified, percentage: Number(((net / 140) * 100).toFixed(1)) });
  };

  const handleDetailedCalc = (e) => {
    e.preventDefault();
    const res = calculateDetailedCbtScore({
      correct1: detailedForm.correct1,
      wrong1: detailedForm.wrong1,
      correct2: detailedForm.correct2,
      wrong2: detailedForm.wrong2
    });
    setDetailedResult(res);
  };

  return (
    <div className="animate-fadeIn">
      
      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white print:text-black">
          CBT Negative Marking Calculator
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
          Calculate your exact net score for the 140-mark IOE Computer-Based Test taking into account the official 10% negative marking penalty.
        </p>
      </div>

      {/* Mode Switch */}
      <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-500 mb-6" role="group" aria-label="Calculator Mode">
        <button
          type="button"
          onClick={() => setMode('quick')}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
            mode === 'quick'
              ? 'bg-white dark:bg-slate-500 text-slate-900 dark:text-white shadow-xs'
              : 'text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          Quick Marks Mode
        </button>
        <button
          type="button"
          onClick={() => setMode('detailed')}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
            mode === 'detailed'
              ? 'bg-white dark:bg-slate-500 text-slate-900 dark:text-white shadow-xs'
              : 'text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          1-Mark & 2-Mark Breakdown
        </button>
      </div>

      {/* Quick Calculator Form */}
      {mode === 'quick' && (
        <form onSubmit={handleQuickCalc} className="grid sm:grid-cols-2 gap-4 sm:gap-5 print:hidden">
          <div>
            <label htmlFor="quick-correct" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Positive Marks Scored (Max 140) <span className="text-rose-500">*</span>
            </label>
            <input
              id="quick-correct"
              type="number"
              step="any"
              min="0"
              max="140"
              inputMode="decimal"
              placeholder="e.g. 102"
              value={quickForm.correct}
              onChange={(e) => setQuickForm({ ...quickForm, correct: e.target.value })}
              required
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
            />
          </div>

          <div>
            <label htmlFor="quick-wrong" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Incorrect Question Marks (Penalty Base) <span className="text-rose-500">*</span>
            </label>
            <input
              id="quick-wrong"
              type="number"
              step="any"
              min="0"
              max="140"
              inputMode="decimal"
              placeholder="e.g. 24"
              value={quickForm.wrong}
              onChange={(e) => setQuickForm({ ...quickForm, wrong: e.target.value })}
              required
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
            />
            <p className="text-[11px] text-slate-500 mt-1">Official 10% penalty (-0.1 per mark) subtracted from raw score.</p>
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-xs rounded-xl transition-all shadow-xs min-h-[44px]"
            >
              Calculate Net Score
            </button>
          </div>
        </form>
      )}

      {/* Detailed Calculator Form */}
      {mode === 'detailed' && (
        <form onSubmit={handleDetailedCalc} className="grid sm:grid-cols-2 gap-4 sm:gap-5 print:hidden">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40">
            <h3 className="text-xs font-semibold text-blue-700 dark:text-blue-400 mb-3">
              1-Mark Questions (Standard MCQ)
            </h3>
            <div className="space-y-3">
              <div>
                <label htmlFor="detail-c1" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Correct 1-Mark Answers
                </label>
                <input
                  id="detail-c1"
                  type="number"
                  min="0"
                  max="100"
                  inputMode="numeric"
                  placeholder="e.g. 45"
                  value={detailedForm.correct1}
                  onChange={(e) => setDetailedForm({ ...detailedForm, correct1: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="detail-w1" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Incorrect 1-Mark Answers (-0.1 penalty each)
                </label>
                <input
                  id="detail-w1"
                  type="number"
                  min="0"
                  max="100"
                  inputMode="numeric"
                  placeholder="e.g. 10"
                  value={detailedForm.wrong1}
                  onChange={(e) => setDetailedForm({ ...detailedForm, wrong1: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40">
            <h3 className="text-xs font-semibold text-blue-700 dark:text-blue-400 mb-3">
              2-Mark Questions (Conceptual MCQ)
            </h3>
            <div className="space-y-3">
              <div>
                <label htmlFor="detail-c2" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Correct 2-Mark Answers
                </label>
                <input
                  id="detail-c2"
                  type="number"
                  min="0"
                  max="50"
                  inputMode="numeric"
                  placeholder="e.g. 25"
                  value={detailedForm.correct2}
                  onChange={(e) => setDetailedForm({ ...detailedForm, correct2: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="detail-w2" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Incorrect 2-Mark Answers (-0.2 penalty each)
                </label>
                <input
                  id="detail-w2"
                  type="number"
                  min="0"
                  max="50"
                  inputMode="numeric"
                  placeholder="e.g. 6"
                  value={detailedForm.wrong2}
                  onChange={(e) => setDetailedForm({ ...detailedForm, wrong2: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-xs rounded-xl transition-all shadow-xs min-h-[44px]"
            >
              Calculate Detailed CBT Score
            </button>
          </div>
        </form>
      )}

      {/* Result Display */}
      {((mode === 'quick' && quickResult) || (mode === 'detailed' && detailedResult)) && (
        (() => {
          const res = mode === 'quick' ? quickResult : detailedResult;
          const scoreValue = mode === 'quick' ? res.net : res.totalNet;
          return (
            <div className="mt-6 p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-center animate-fadeIn shadow-2xs">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block mb-1">
                Your Calculated Net Score
              </span>
              <div className="text-3xl sm:text-5xl font-mono font-bold text-slate-900 dark:text-white my-1">
                {scoreValue} <span className="text-lg text-slate-400 font-normal">/ 140</span>
              </div>
              
              <div className="flex justify-center items-center gap-3 text-xs font-medium text-slate-600 dark:text-slate-400 my-3 flex-wrap">
                <span>Penalty Deducted: <strong>-{res.penalty || res.totalPenalty}</strong></span>
                <span>•</span>
                <span>Score: <strong>{res.percentage}%</strong></span>
                <span>•</span>
                <span>
                  Eligibility (Pass 56):{' '}
                  <strong className={res.isQualified ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-700 dark:text-rose-400'}>
                    {res.isQualified ? 'Qualified (Met)' : 'Below 40% Pass Mark'}
                  </strong>
                </span>
              </div>

              {onSendToEstimator && (
                <button
                  onClick={() => onSendToEstimator(scoreValue)}
                  className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-medium hover:bg-slate-100 transition-colors shadow-2xs"
                >
                  <span>Pass Score to Rank Curve Estimator</span>
                  <svg className="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              )}
            </div>
          );
        })()
      )}

      {/* Internal Sitelinks */}
      {onNavigateTab && (
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 print:hidden">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-3">
            Related Tools
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => onNavigateTab('predictor')}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 text-left transition-all group shadow-2xs"
            >
              <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300">
                <span>Rank Predictor</span>
                <svg className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
            <button
              type="button"
              onClick={() => onNavigateTab('estimator')}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 text-left transition-all group shadow-2xs"
            >
              <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300">
                <span>Score-to-Rank Curve</span>
                <svg className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      )}

      <InfoDisclaimer
        isDark={isDark}
        title="Official Negative Marking Rule"
        text="According to the IOE Entrance Examination Board regulations, incorrect MCQ answers carry a 10% penalty (-0.1 mark for 1-mark questions, and -0.2 mark for 2-mark questions). Unanswered questions carry zero penalty. A minimum of 40% (56 marks out of 140) is strictly required to qualify for rank ranking and seat allocation."
      />

    </div>
  );
}
