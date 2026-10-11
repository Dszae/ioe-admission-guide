import React, { useState } from 'react';
import { CUTOFFS, CAMPUS_NAMES, ALL_PROGRAMS, ADMISSION_METADATA } from '../data/admissionData';
import { getProbability, getPhaseCutoff } from '../utils/calculations';
import InfoDisclaimer from './common/InfoDisclaimer';

export default function RankPredictor({ isDark, onNavigateTab }) {
  const [mode, setMode] = useState('campus');
  const [phase, setPhase] = useState(1);
  const [form, setForm] = useState({ 
    rank: '', 
    college: 'Pulchowk', 
    program: 'Civil Engineering', 
    feeType: 'Regular', 
    quota: 'Open' 
  });
  const [singleResult, setSingleResult] = useState(null);
  const [multiResult, setMultiResult] = useState(null);

  const availablePrograms = mode === 'campus' 
    ? Object.keys(CUTOFFS[form.college] || {}) 
    : ALL_PROGRAMS;

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setSingleResult(null);
    setMultiResult(null);
    if (newMode === 'campus') {
      const campusPrograms = Object.keys(CUTOFFS[form.college] || {});
      if (!campusPrograms.includes(form.program)) {
        setForm(prev => ({
          ...prev,
          program: campusPrograms[0] || 'Civil Engineering'
        }));
      }
    }
  };

  const handleCollegeChange = (newCollege) => {
    const campusPrograms = Object.keys(CUTOFFS[newCollege] || {});
    setForm(prev => ({
      ...prev,
      college: newCollege,
      program: campusPrograms.includes(prev.program) ? prev.program : (campusPrograms[0] || 'Civil Engineering')
    }));
  };

  const runPrediction = (rankNum, targetForm = form, targetMode = mode, targetPhase = phase) => {
    const rank = parseInt(rankNum, 10);
    if (!rank || rank < 1) return;

    if (targetMode === 'campus') {
      const feeData = CUTOFFS[targetForm.college]?.[targetForm.program]?.[targetForm.feeType];
      if (!feeData) {
        setSingleResult({ 
          status: 'UNAVAILABLE', 
          message: `${targetForm.program} is not offered under ${targetForm.feeType} at ${CAMPUS_NAMES[targetForm.college]}.` 
        });
        setMultiResult(null);
        return;
      }
      const baseCutoff = feeData[targetForm.quota] || feeData['Open'];
      const finalCutoff = getPhaseCutoff(baseCutoff, targetForm.feeType, targetPhase);
      setSingleResult({ 
        ...getProbability(rank, finalCutoff, targetPhase), 
        cutoff: finalCutoff, 
        input: rank 
      });
      setMultiResult(null);
    } else {
      const resultsAcrossCampuses = Object.keys(CUTOFFS).map(campusName => {
        const programData = CUTOFFS[campusName]?.[targetForm.program];
        if (!programData || !programData[targetForm.feeType]) {
          return { campus: campusName, status: 'NOT OFFERED' };
        }
        const baseCutoff = programData[targetForm.feeType][targetForm.quota] || programData[targetForm.feeType]['Open'];
        const finalCutoff = getPhaseCutoff(baseCutoff, targetForm.feeType, targetPhase);
        return { 
          campus: campusName, 
          ...getProbability(rank, finalCutoff, targetPhase), 
          cutoff: finalCutoff 
        };
      });
      setMultiResult(resultsAcrossCampuses);
      setSingleResult(null);
    }
  };

  const handlePredict = (e) => {
    e.preventDefault();
    runPrediction(form.rank);
  };

  const resultTheme = (color) => {
    switch (color) {
      case 'emerald':
        return {
          container: isDark ? 'bg-emerald-950/30 border-emerald-800/60 text-emerald-100' : 'bg-emerald-50/80 border-emerald-200 text-emerald-950',
          badge: isDark ? 'bg-emerald-900/50 text-emerald-300 border-emerald-700/60' : 'bg-emerald-100 text-emerald-800 border-emerald-300',
          statBg: isDark ? 'bg-emerald-900/20 border-emerald-800/40' : 'bg-emerald-100/60 border-emerald-200'
        };
      case 'amber':
        return {
          container: isDark ? 'bg-amber-950/30 border-amber-800/60 text-amber-100' : 'bg-amber-50/80 border-amber-200 text-amber-950',
          badge: isDark ? 'bg-amber-900/50 text-amber-300 border-amber-700/60' : 'bg-amber-100 text-amber-900 border-amber-300',
          statBg: isDark ? 'bg-amber-900/20 border-amber-800/40' : 'bg-amber-100/60 border-amber-200'
        };
      case 'orange':
        return {
          container: isDark ? 'bg-orange-950/30 border-orange-800/60 text-orange-100' : 'bg-orange-50/80 border-orange-200 text-orange-950',
          badge: isDark ? 'bg-orange-900/50 text-orange-300 border-orange-700/60' : 'bg-orange-100 text-orange-900 border-orange-300',
          statBg: isDark ? 'bg-orange-900/20 border-orange-800/40' : 'bg-orange-100/60 border-orange-200'
        };
      case 'red':
      default:
        return {
          container: isDark ? 'bg-rose-950/30 border-rose-800/60 text-rose-100' : 'bg-rose-50/80 border-rose-200 text-rose-950',
          badge: isDark ? 'bg-rose-900/50 text-rose-300 border-rose-700/60' : 'bg-rose-100 text-rose-900 border-rose-300',
          statBg: isDark ? 'bg-rose-900/20 border-rose-800/40' : 'bg-rose-100/60 border-rose-200'
        };
    }
  };

  return (
    <div className="animate-fadeIn">
      
      {/* Title */}
      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white print:text-black">
          Admission Rank Probability Predictor
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
          Estimate your admission probability based on verified historical closing merit ranks across constituent engineering campuses.
        </p>
      </div>

      {/* Mode & Phase Switches */}
      <div className="grid sm:grid-cols-2 gap-2.5 sm:gap-4 mb-5 sm:mb-6 print:hidden">
        {/* Scope Segmented Control */}
        <div className="grid grid-cols-2 p-1 rounded-xl bg-slate-100 dark:bg-slate-850 border border-slate-200 dark:border-slate-800" role="group" aria-label="Prediction Scope">
          <button 
            type="button"
            onClick={() => handleModeChange('campus')} 
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all text-center ${
              mode === 'campus' 
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs' 
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            By Specific Campus
          </button>
          <button 
            type="button"
            onClick={() => handleModeChange('cross')} 
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all text-center ${
              mode === 'cross' 
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs' 
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Compare All
          </button>
        </div>

        {/* Phase Round Segmented Control */}
        <div className="grid grid-cols-2 p-1 rounded-xl bg-slate-100 dark:bg-slate-850 border border-slate-200 dark:border-slate-800" role="group" aria-label="Merit List Round">
          <button 
            type="button"
            onClick={() => setPhase(1)} 
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all text-center ${
              phase === 1 
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs' 
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Phase 1 First List
          </button>
          <button 
            type="button"
            onClick={() => setPhase(2)} 
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all text-center ${
              phase === 2 
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs' 
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Final List (Estimated)
          </button>
        </div>
      </div>

      {/* Main Predictor Form */}
      <form onSubmit={handlePredict} className="grid sm:grid-cols-2 gap-4 sm:gap-5 print:hidden">
        
        {/* Merit Rank Input */}
        <div className="sm:col-span-2">
          <label htmlFor="pred-rank" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            Your IOE Entrance Merit Rank <span className="text-rose-500">*</span>
          </label>
          <input 
            id="pred-rank"
            type="number" 
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="e.g. 240" 
            className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-semibold tabular-nums text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors shadow-2xs"
            value={form.rank} 
            onChange={(e) => setForm({ ...form, rank: e.target.value })} 
            required 
            min="1"
            max="15000"
          />
        </div>

        {/* Campus Selection */}
        {mode === 'campus' && (
          <div>
            <label htmlFor="pred-college" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Target Constituent Campus
            </label>
            <select 
              id="pred-college"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors shadow-2xs"
              value={form.college} 
              onChange={(e) => handleCollegeChange(e.target.value)}
            >
              <option value="Pulchowk">Pulchowk Campus (Lalitpur)</option>
              <option value="Thapathali">Thapathali Campus (Kathmandu)</option>
              <option value="WRC">Pashchimanchal Campus (WRC, Pokhara)</option>
              <option value="ERC">Purwanchal Campus (ERC, Dharan)</option>
              <option value="ChEC">Chitwan Engineering Campus (ChEC)</option>
            </select>
          </div>
        )}

        {/* Engineering Program */}
        <div className={mode === 'cross' ? 'sm:col-span-2' : ''}>
          <label htmlFor="pred-program" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            Engineering Program
          </label>
          <select 
            id="pred-program"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors shadow-2xs"
            value={form.program} 
            onChange={(e) => setForm({ ...form, program: e.target.value })}
          >
            {availablePrograms.map(prog => (
              <option key={prog} value={prog}>{prog}</option>
            ))}
          </select>
        </div>

        {/* Fee Category */}
        <div>
          <label htmlFor="pred-fee" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            Fee Category
          </label>
          <select 
            id="pred-fee"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors shadow-2xs"
            value={form.feeType} 
            onChange={(e) => setForm({ ...form, feeType: e.target.value })}
          >
            <option value="Regular">Regular (Subsidized Scholarship)</option>
            <option value="FullFee">Full Fee (Paying Category)</option>
          </select>
        </div>

        {/* Quota */}
        <div>
          <label htmlFor="pred-quota" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            Admission Quota
          </label>
          <select 
            id="pred-quota"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors shadow-2xs"
            value={form.quota} 
            onChange={(e) => setForm({ ...form, quota: e.target.value })}
          >
            <option value="Open">Open Merit Category</option>
            <option value="Janajati">Adivasi / Janajati Quota</option>
            <option value="Female_FmQ">Female Merit Quota (FmQ)</option>
            <option value="Female_RsQ">Female Reserved Quota (RsQ)</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="sm:col-span-2 mt-1">
          <button 
            type="submit" 
            className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm rounded-xl transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-[44px]"
          >
            Calculate Admission Probability
          </button>
        </div>

      </form>

      {/* Screen Reader Live Region */}
      <div aria-live="polite" className="sr-only">
        {singleResult && `Prediction status: ${singleResult.status}. Historical closing cutoff is ${singleResult.cutoff}.`}
      </div>

      {/* Print View Header */}
      <div className="hidden print:block mb-6">
        <h2 className="text-xl font-bold border-b pb-2 mb-3">IOE Admission Prediction Summary</h2>
        <p className="font-semibold text-sm">Merit Rank: {form.rank}</p>
        <p className="text-sm">Program: {form.program} ({form.feeType} - {form.quota})</p>
        <p className="text-sm">List Phase: {phase === 1 ? 'Phase 1 First List' : 'Final Round Estimate'}</p>
      </div>

      {/* Single Campus Result Card */}
      {mode === 'campus' && singleResult && (
        <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 animate-fadeIn print:border-none print:pt-0">
          {singleResult.status === 'UNAVAILABLE' ? (
            <div className="p-5 rounded-xl text-center border bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
              <p className="font-medium text-sm">{singleResult.message}</p>
            </div>
          ) : (() => {
            const theme = resultTheme(singleResult.color);
            return (
              <div className={`p-5 sm:p-6 border rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 transition-all ${theme.container}`}>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${theme.badge}`}>
                      {singleResult.status}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {CAMPUS_NAMES[form.college]} • {form.program}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-semibold mt-1">
                    {singleResult.message}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Based on {phase === 1 ? 'Phase 1 first list' : 'subsequent round closing'} data under {form.feeType} ({form.quota}).
                  </p>
                </div>

                <div className={`text-center sm:text-right flex-shrink-0 p-4 rounded-xl border ${theme.statBg} w-full sm:w-auto`}>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-0.5">
                    Historical Closing Cutoff
                  </p>
                  <p className="text-2xl sm:text-4xl font-bold tracking-tight tabular-nums">
                    {singleResult.cutoff}
                  </p>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
                    Your Rank: {singleResult.input}
                  </p>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* Multi Campus Results Grid */}
      {mode === 'cross' && multiResult && (
        <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 animate-fadeIn print:border-none print:pt-0">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            {form.program} — Outlook Across Constituent Campuses
          </h3>
          <div className="grid sm:grid-cols-2 gap-3.5">
            {multiResult.map((res, idx) => {
              if (res.status === 'NOT OFFERED') {
                return (
                  <div key={idx} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 flex justify-between items-center text-slate-400 text-xs">
                    <span className="font-medium text-slate-600 dark:text-slate-400">{CAMPUS_NAMES[res.campus]}</span>
                    <span className="px-2 py-0.5 rounded bg-slate-200/60 dark:bg-slate-800 text-slate-500 font-medium">Not Offered</span>
                  </div>
                );
              }
              const theme = resultTheme(res.color);
              return (
                <div key={idx} className={`p-4 rounded-xl border flex flex-col justify-between transition-all ${theme.container}`}>
                  <div className="flex justify-between items-start mb-3 gap-2">
                    <h4 className="font-semibold text-sm leading-snug">
                      {CAMPUS_NAMES[res.campus]}
                    </h4>
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border whitespace-nowrap ${theme.badge}`}>
                      {res.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-end border-t border-current/10 pt-2 text-xs">
                    <span className="opacity-80">Closing Cutoff:</span>
                    <span className="font-bold text-base tabular-nums">{res.cutoff}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Internal Sitelinks & Connected Tools */}
      {onNavigateTab && (
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 print:hidden">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Related Admission Hub Tools
            </h3>
            <span className="text-[11px] text-slate-400">Quick Deep Links</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <button
              type="button"
              onClick={() => onNavigateTab('campuses')}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-850 text-left transition-all group shadow-2xs"
            >
              <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                <span>Constituent Campuses</span>
                <svg className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                Explore 2,040 seats & faculty allocations
              </p>
            </button>

            <button
              type="button"
              onClick={() => onNavigateTab('priority')}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-850 text-left transition-all group shadow-2xs"
            >
              <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                <span>Priority Planner</span>
                <svg className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                Build an optimal multi-tier preference order
              </p>
            </button>

            <button
              type="button"
              onClick={() => onNavigateTab('calculator')}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-850 text-left transition-all group shadow-2xs"
            >
              <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                <span>CBT Score Calculator</span>
                <svg className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                Calculate net marks with 10% penalty
              </p>
            </button>
          </div>
        </div>
      )}

      {/* Predictor Disclaimer */}
      <InfoDisclaimer 
        isDark={isDark}
        title="Probabilistic Methodology & Guidance Notice" 
        text="Cutoff values represent historical closing ranks from previous IOE admission lists. Actual closing ranks for the current academic session may deviate upward or downward depending on test difficulty, applicant distribution, and seat withdrawals. This statistical tool is designed for planning guidance and does not guarantee admission." 
      />

    </div>
  );
}
