import React, { useState } from 'react';
import { CUTOFFS, CAMPUS_NAMES, ALL_PROGRAMS, ADMISSION_METADATA } from '../data/admissionData';
import { getProbability, getPhaseCutoff } from '../utils/calculations';
import InfoDisclaimer from './common/InfoDisclaimer';

export default function RankPredictor({ isDark }) {
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

  const handlePredict = (e) => {
    e.preventDefault();
    const rank = parseInt(form.rank, 10);
    if (!rank || rank < 1) return;

    if (mode === 'campus') {
      const feeData = CUTOFFS[form.college]?.[form.program]?.[form.feeType];
      if (!feeData) {
        setSingleResult({ 
          status: 'UNAVAILABLE', 
          message: `${form.program} is not offered under ${form.feeType} at ${CAMPUS_NAMES[form.college]}.` 
        });
        return;
      }
      const baseCutoff = feeData[form.quota] || feeData['Open'];
      const finalCutoff = getPhaseCutoff(baseCutoff, form.feeType, phase);
      setSingleResult({ 
        ...getProbability(rank, finalCutoff, phase), 
        cutoff: finalCutoff, 
        input: rank 
      });
    } else {
      const resultsAcrossCampuses = Object.keys(CUTOFFS).map(campusName => {
        const programData = CUTOFFS[campusName]?.[form.program];
        if (!programData || !programData[form.feeType]) {
          return { campus: campusName, status: 'NOT OFFERED' };
        }
        const baseCutoff = programData[form.feeType][form.quota] || programData[form.feeType]['Open'];
        const finalCutoff = getPhaseCutoff(baseCutoff, form.feeType, phase);
        return { 
          campus: campusName, 
          ...getProbability(rank, finalCutoff, phase), 
          cutoff: finalCutoff 
        };
      });
      setMultiResult(resultsAcrossCampuses);
    }
  };

  const badgeColorClasses = (color) => {
    switch (color) {
      case 'emerald':
        return isDark 
          ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400' 
          : 'bg-emerald-50 border-emerald-200 text-emerald-800';
      case 'amber':
        return isDark 
          ? 'bg-amber-500/10 border-amber-500/40 text-amber-400' 
          : 'bg-amber-50 border-amber-200 text-amber-800';
      case 'orange':
        return isDark 
          ? 'bg-orange-500/10 border-orange-500/40 text-orange-400' 
          : 'bg-orange-50 border-orange-200 text-orange-800';
      case 'red':
      default:
        return isDark 
          ? 'bg-red-500/10 border-red-500/40 text-red-400' 
          : 'bg-red-50 border-red-200 text-red-800';
    }
  };

  return (
    <div className="animate-fadeIn">
      
      {/* Title & Provenance Notice */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white print:text-black">
            Admission Rank Probability Predictor
          </h2>
          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md w-fit">
            Benchmark: {ADMISSION_METADATA.academicYear}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
          Evaluate your admission odds based on verified historical closing merit ranks across constituent engineering campuses.
        </p>
      </div>

      {/* Mode & Phase Switches */}
      <div className="flex flex-col sm:flex-row justify-between mb-8 gap-4 print:hidden">
        <div className="grid grid-cols-2 gap-2 w-full sm:w-auto" role="group" aria-label="Prediction Mode">
          <button 
            type="button"
            onClick={() => handleModeChange('campus')} 
            className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all border ${
              mode === 'campus' 
                ? 'bg-cyan-600 text-white border-cyan-500 shadow-md' 
                : 'bg-slate-100 dark:bg-slate-800/60 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            By Campus
          </button>
          <button 
            type="button"
            onClick={() => handleModeChange('cross')} 
            className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all border ${
              mode === 'cross' 
                ? 'bg-cyan-600 text-white border-cyan-500 shadow-md' 
                : 'bg-slate-100 dark:bg-slate-800/60 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Across All Campuses
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2 w-full sm:w-auto" role="group" aria-label="Phase Round">
          <button 
            type="button"
            onClick={() => setPhase(1)} 
            className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all border ${
              phase === 1 
                ? 'bg-cyan-600 text-white border-cyan-500 shadow-md' 
                : 'bg-slate-100 dark:bg-slate-800/60 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Phase 1 (First List)
          </button>
          <button 
            type="button"
            onClick={() => setPhase(2)} 
            className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all border ${
              phase === 2 
                ? 'bg-cyan-600 text-white border-cyan-500 shadow-md' 
                : 'bg-slate-100 dark:bg-slate-800/60 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Final List (Estimated)
          </button>
        </div>
      </div>

      {/* Form with accessible labels and IDs */}
      <form onSubmit={handlePredict} className="grid sm:grid-cols-2 gap-5 sm:gap-6 print:hidden">
        
        <div className="sm:col-span-2">
          <label htmlFor="pred-rank" className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-600 dark:text-slate-400">
            Your IOE Entrance Merit Rank <span className="text-red-500">*</span>
          </label>
          <input 
            id="pred-rank"
            type="number" 
            placeholder="e.g. 145" 
            className="w-full px-5 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-mono text-base focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all shadow-sm"
            value={form.rank} 
            onChange={(e) => setForm({ ...form, rank: e.target.value })} 
            required 
            min="1"
            max="15000"
          />
          <p className="text-[11px] text-slate-500 mt-1">Enter your official merit rank published on the IOE result card.</p>
        </div>

        {mode === 'campus' && (
          <div>
            <label htmlFor="pred-college" className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-600 dark:text-slate-400">
              Target Constituent Campus
            </label>
            <select 
              id="pred-college"
              className="w-full px-4 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all shadow-sm"
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

        <div className={mode === 'cross' ? 'sm:col-span-2' : ''}>
          <label htmlFor="pred-program" className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-600 dark:text-slate-400">
            Engineering Program
          </label>
          <select 
            id="pred-program"
            className="w-full px-4 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all shadow-sm"
            value={form.program} 
            onChange={(e) => setForm({ ...form, program: e.target.value })}
          >
            {availablePrograms.map(prog => (
              <option key={prog} value={prog}>{prog}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="pred-fee" className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-600 dark:text-slate-400">
            Fee Category
          </label>
          <select 
            id="pred-fee"
            className="w-full px-4 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all shadow-sm"
            value={form.feeType} 
            onChange={(e) => setForm({ ...form, feeType: e.target.value })}
          >
            <option value="Regular">Regular (Government Subsidized Scholarship)</option>
            <option value="FullFee">Full Fee (Paying Category)</option>
          </select>
        </div>

        <div>
          <label htmlFor="pred-quota" className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-600 dark:text-slate-400">
            Admission Quota
          </label>
          <select 
            id="pred-quota"
            className="w-full px-4 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all shadow-sm"
            value={form.quota} 
            onChange={(e) => setForm({ ...form, quota: e.target.value })}
          >
            <option value="Open">Open Merit Category</option>
            <option value="Janajati">Adivasi / Janajati Quota</option>
            <option value="Female_FmQ">Female Merit Quota (FmQ)</option>
            <option value="Female_RsQ">Female Reserved Quota (RsQ)</option>
          </select>
        </div>

        <div className="sm:col-span-2 mt-2">
          <button 
            type="submit" 
            className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 active:scale-[0.99] text-white font-bold text-sm tracking-wider uppercase rounded-xl transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
      <div className="hidden print:block mb-8">
        <h2 className="text-2xl font-black border-b pb-2 mb-4">IOE Admission Prediction Summary</h2>
        <p className="font-bold">Merit Rank: {form.rank}</p>
        <p>Program: {form.program} ({form.feeType} - {form.quota})</p>
        <p>List Phase: {phase === 1 ? 'Phase 1 First List' : 'Final Round Estimate'}</p>
      </div>

      {/* Single Campus Result Card */}
      {mode === 'campus' && singleResult && (
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 animate-fadeIn print:border-none print:pt-0">
          {singleResult.status === 'UNAVAILABLE' ? (
            <div className="p-6 rounded-2xl text-center border bg-slate-100 dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400">
              <p className="font-semibold">{singleResult.message}</p>
            </div>
          ) : (
            <div className={`p-6 sm:p-8 border rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-6 transition-all ${badgeColorClasses(singleResult.color)}`}>
              <div className="text-center sm:text-left">
                <span className="text-[11px] font-bold uppercase tracking-widest opacity-80 block mb-1">
                  Historical Admission Outlook
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-2">
                  {singleResult.status}
                </h3>
                <p className="text-sm font-medium opacity-90 max-w-md">
                  {singleResult.message}
                </p>
              </div>

              <div className="text-center sm:text-right flex-shrink-0 bg-white/40 dark:bg-black/20 p-4 rounded-xl border border-current/20">
                <p className="text-xs font-bold uppercase tracking-wider opacity-80 mb-1">
                  Historical Cutoff Rank
                </p>
                <p className="text-3xl sm:text-5xl font-mono font-extrabold">
                  {singleResult.cutoff}
                </p>
                <p className="text-[10px] opacity-75 mt-1 font-mono">
                  Your Rank: {singleResult.input}
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Multi Campus Results Grid */}
      {mode === 'cross' && multiResult && (
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 animate-fadeIn print:border-none print:pt-0">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
            {form.program} — Outlook Across All Constituent Campuses
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {multiResult.map((res, idx) => {
              if (res.status === 'NOT OFFERED') {
                return (
                  <div key={idx} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 flex justify-between items-center text-slate-500">
                    <span className="font-semibold text-sm">{CAMPUS_NAMES[res.campus]}</span>
                    <span className="text-xs uppercase font-bold px-2 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-500">Not Offered</span>
                  </div>
                );
              }
              return (
                <div key={idx} className={`p-4 sm:p-5 rounded-xl border flex flex-col justify-between transition-all ${badgeColorClasses(res.color)}`}>
                  <div className="flex justify-between items-start mb-4 gap-2">
                    <h4 className="font-bold text-sm sm:text-base leading-snug">
                      {CAMPUS_NAMES[res.campus]}
                    </h4>
                    <span className="text-[10px] uppercase font-bold px-2.5 py-1 rounded-full bg-current/10 whitespace-nowrap">
                      {res.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-end border-t border-current/10 pt-3">
                    <span className="text-xs font-semibold opacity-80">Historical Cutoff:</span>
                    <span className="text-lg font-mono font-bold">{res.cutoff}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Predictor Disclaimer */}
      <InfoDisclaimer 
        isDark={isDark}
        title="Probabilistic Methodology & Non-Guarantee Notice" 
        text="Cutoff values represent historical closing ranks from previous IOE admission lists. Actual closing ranks for the current academic session may deviate upward or downward depending on test difficulty, applicant distribution, and seat withdrawals. This statistical tool does not guarantee admission." 
      />

    </div>
  );
}
