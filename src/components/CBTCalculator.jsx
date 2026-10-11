import React, { useState } from 'react';
import { calculateNetCbtScore, calculateDetailedCbtScore } from '../utils/calculations';
import InfoDisclaimer from './common/InfoDisclaimer';

export default function CBTCalculator({ isDark, onSendToEstimator }) {
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
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white print:text-black">
          CBT Negative Marking Calculator
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
          Calculate your exact net score for the 140-mark IOE Computer-Based Test taking into account the official 10% negative marking penalty.
        </p>
      </div>

      {/* Mode Switch */}
      <div className="flex gap-2 mb-6" role="group" aria-label="Calculator Mode">
        <button
          type="button"
          onClick={() => setMode('quick')}
          className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all border ${
            mode === 'quick'
              ? 'bg-cyan-700 text-white border-cyan-600 shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800/60 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300'
          }`}
        >
          Quick Marks Mode
        </button>
        <button
          type="button"
          onClick={() => setMode('detailed')}
          className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all border ${
            mode === 'detailed'
              ? 'bg-cyan-700 text-white border-cyan-600 shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800/60 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300'
          }`}
        >
          Detailed 1-Mark & 2-Mark Breakdown
        </button>
      </div>

      {/* Quick Calculator Form */}
      {mode === 'quick' && (
        <form onSubmit={handleQuickCalc} className="grid sm:grid-cols-2 gap-5 print:hidden">
          <div>
            <label htmlFor="quick-correct" className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-600 dark:text-slate-400">
              Total Positive Marks Scored (Max 140) <span className="text-red-500">*</span>
            </label>
            <input
              id="quick-correct"
              type="number"
              step="any"
              min="0"
              max="140"
              placeholder="e.g. 102"
              value={quickForm.correct}
              onChange={(e) => setQuickForm({ ...quickForm, correct: e.target.value })}
              required
              className="w-full px-5 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-mono text-base focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label htmlFor="quick-wrong" className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-600 dark:text-slate-400">
              Total Incorrect Question Marks (Penalty Base) <span className="text-red-500">*</span>
            </label>
            <input
              id="quick-wrong"
              type="number"
              step="any"
              min="0"
              max="140"
              placeholder="e.g. 24"
              value={quickForm.wrong}
              onChange={(e) => setQuickForm({ ...quickForm, wrong: e.target.value })}
              required
              className="w-full px-5 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-mono text-base focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <p className="text-[11px] text-slate-500 mt-1">10% will be subtracted from your positive score.</p>
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full py-4 bg-cyan-700 hover:bg-cyan-800 active:bg-cyan-900 text-white font-bold text-xs tracking-wider uppercase rounded-xl transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
            >
              Calculate Net Score
            </button>
          </div>
        </form>
      )}

      {/* Detailed Calculator Form */}
      {mode === 'detailed' && (
        <form onSubmit={handleDetailedCalc} className="grid sm:grid-cols-2 gap-5 print:hidden">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-3">
              1-Mark Questions (Standard MCQ)
            </h3>
            <div className="space-y-3">
              <div>
                <label htmlFor="detail-c1" className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                  Correct 1-Mark Answers
                </label>
                <input
                  id="detail-c1"
                  type="number"
                  min="0"
                  max="100"
                  placeholder="e.g. 45"
                  value={detailedForm.correct1}
                  onChange={(e) => setDetailedForm({ ...detailedForm, correct1: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label htmlFor="detail-w1" className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                  Incorrect 1-Mark Answers (-0.1 penalty each)
                </label>
                <input
                  id="detail-w1"
                  type="number"
                  min="0"
                  max="100"
                  placeholder="e.g. 10"
                  value={detailedForm.wrong1}
                  onChange={(e) => setDetailedForm({ ...detailedForm, wrong1: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-3">
              2-Mark Questions (Conceptual MCQ)
            </h3>
            <div className="space-y-3">
              <div>
                <label htmlFor="detail-c2" className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                  Correct 2-Mark Answers
                </label>
                <input
                  id="detail-c2"
                  type="number"
                  min="0"
                  max="50"
                  placeholder="e.g. 25"
                  value={detailedForm.correct2}
                  onChange={(e) => setDetailedForm({ ...detailedForm, correct2: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label htmlFor="detail-w2" className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                  Incorrect 2-Mark Answers (-0.2 penalty each)
                </label>
                <input
                  id="detail-w2"
                  type="number"
                  min="0"
                  max="50"
                  placeholder="e.g. 6"
                  value={detailedForm.wrong2}
                  onChange={(e) => setDetailedForm({ ...detailedForm, wrong2: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full py-4 bg-cyan-700 hover:bg-cyan-800 active:bg-cyan-900 text-white font-bold text-xs tracking-wider uppercase rounded-xl transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
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
            <div className="mt-8 p-6 sm:p-8 rounded-2xl border border-cyan-500/30 bg-cyan-50/50 dark:bg-cyan-950/20 text-center animate-fadeIn">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 block mb-1">
                Your Calculated Net Score
              </span>
              <div className="text-4xl sm:text-6xl font-black font-mono text-cyan-700 dark:text-cyan-300 my-2">
                {scoreValue} <span className="text-2xl text-slate-400">/ 140</span>
              </div>
              
              <div className="flex justify-center items-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-400 my-4 flex-wrap">
                <span>Total Negative Penalty: <strong>-{res.penalty || res.totalPenalty} Marks</strong></span>
                <span>•</span>
                <span>Percentage: <strong>{res.percentage}%</strong></span>
                <span>•</span>
                <span>
                  Pass Benchmark (56 Marks):{' '}
                  <strong className={res.isQualified ? 'text-emerald-700 dark:text-emerald-400' : 'text-red-700 dark:text-red-400'}>
                    {res.isQualified ? 'QUALIFIED (Met)' : 'BELOW 40% PASS MARK'}
                  </strong>
                </span>
              </div>

              {onSendToEstimator && (
                <button
                  onClick={() => onSendToEstimator(scoreValue)}
                  className="mt-2 px-6 py-2.5 rounded-xl border border-cyan-700 dark:border-cyan-500 text-cyan-800 dark:text-cyan-300 font-bold text-xs hover:bg-cyan-700 hover:text-white transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  Pass Score to Rank Estimator →
                </button>
              )}
            </div>
          );
        })()
      )}

      <InfoDisclaimer
        isDark={isDark}
        title="Official Negative Marking Rule"
        text="According to the IOE Entrance Examination Board regulations, incorrect MCQ answers carry a 10% penalty (-0.1 mark for 1-mark questions, and -0.2 mark for 2-mark questions). Unanswered questions carry zero penalty. A minimum of 40% (56 marks out of 140) is strictly required to qualify for rank ranking and seat allocation."
      />

    </div>
  );
}

