import React, { useState } from 'react';
import { CUTOFFS, CAMPUS_NAMES } from '../data/admissionData';
import { getPhaseCutoff } from '../utils/calculations';
import InfoDisclaimer from './common/InfoDisclaimer';

export default function PriorityGenerator({ isDark }) {
  const [priorityRank, setPriorityRank] = useState('');
  const [priorityLists, setPriorityLists] = useState(null);
  const [copied, setCopied] = useState(false);

  const generatePriority = (e) => {
    e.preventDefault();
    const r = parseInt(priorityRank, 10);
    if (!r || r < 1) return;
    
    let allOptions = [];
    Object.keys(CUTOFFS).forEach(campus => {
      Object.keys(CUTOFFS[campus]).forEach(prog => {
        ['Regular', 'FullFee'].forEach(fee => {
          if (CUTOFFS[campus][prog]?.[fee]?.['Open']) {
            allOptions.push({
              campus, 
              prog, 
              fee,
              cutoff: getPhaseCutoff(CUTOFFS[campus][prog][fee]['Open'], fee, 1)
            });
          }
        });
      });
    });

    allOptions.sort((a, b) => a.cutoff - b.cutoff);

    // Filter by probability bands
    const ambitious = allOptions.filter(o => o.cutoff >= r * 0.6 && o.cutoff < r).slice(0, 4);
    const match = allOptions.filter(o => o.cutoff >= r && o.cutoff <= r * 1.5).slice(0, 4);
    const safety = allOptions.filter(o => o.cutoff > r * 1.5 && o.cutoff <= r * 3.5).slice(0, 4);

    setPriorityLists({ ambitious, match, safety });
  };

  const copyToClipboard = () => {
    if (!priorityLists) return;
    let text = `IOE Admission Priority Sequence (Reference Rank: ${priorityRank})\n\n`;
    
    let index = 1;
    if (priorityLists.ambitious.length) {
      text += `[Ambitious / Reach Choices]\n`;
      priorityLists.ambitious.forEach(o => {
        text += `${index++}. ${CAMPUS_NAMES[o.campus]} - ${o.prog} (${o.fee === 'FullFee' ? 'Full Fee' : 'Regular'})\n`;
      });
      text += `\n`;
    }
    if (priorityLists.match.length) {
      text += `[Realistic / Match Choices]\n`;
      priorityLists.match.forEach(o => {
        text += `${index++}. ${CAMPUS_NAMES[o.campus]} - ${o.prog} (${o.fee === 'FullFee' ? 'Full Fee' : 'Regular'})\n`;
      });
      text += `\n`;
    }
    if (priorityLists.safety.length) {
      text += `[Safety / High Probability Choices]\n`;
      priorityLists.safety.forEach(o => {
        text += `${index++}. ${CAMPUS_NAMES[o.campus]} - ${o.prog} (${o.fee === 'FullFee' ? 'Full Fee' : 'Regular'})\n`;
      });
    }

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="animate-fadeIn">
      
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white print:text-black">
          Smart Priority Form Sequence Optimizer
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
          Input your entrance rank to generate a balanced 12-choice hierarchy (Reach, Match, and Safety) optimized for the IOE auto-upgrade algorithm.
        </p>
      </div>

      <form onSubmit={generatePriority} className="bg-cyan-500/5 border border-cyan-500/20 p-5 sm:p-6 rounded-2xl print:hidden flex flex-col sm:flex-row gap-4">
        <div className="w-full">
          <label htmlFor="priority-rank-input" className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-600 dark:text-slate-400">
            Your Official IOE Merit Rank <span className="text-red-500">*</span>
          </label>
          <input 
            id="priority-rank-input"
            type="number" 
            placeholder="e.g. 1450" 
            className="w-full px-5 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-mono text-base focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all shadow-sm"
            value={priorityRank} 
            onChange={(e) => setPriorityRank(e.target.value)} 
            required 
            min="1" 
            max="15000"
          />
        </div>
        <div className="w-full sm:w-auto flex items-end">
          <button 
            type="submit" 
            className="w-full sm:w-auto px-8 py-3.5 bg-cyan-600 hover:bg-cyan-500 active:scale-[0.98] text-white font-bold text-xs tracking-wider uppercase rounded-xl transition-all shadow-md whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            Generate Sequence
          </button>
        </div>
      </form>

      {priorityLists && (
        <div className="mt-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800 print:hidden">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Recommended Priority Sequence for Rank #{priorityRank}
            </h3>
            <button
              onClick={copyToClipboard}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-cyan-500 transition-colors shadow-sm"
            >
              {copied ? (
                <>
                  <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/></svg>
                  <span>Copy List for Official Portal</span>
                </>
              )}
            </button>
          </div>

          {/* Tier 1: Ambitious / Reach */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <h4 className="font-extrabold text-sm sm:text-base text-emerald-600 dark:text-emerald-400">
                Tier 1: Ambitious (Reach) — Place at the Top
              </h4>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
              Programs where historical cutoffs are slightly ahead of your rank. If seats open up in subsequent lists, the auto-upgrade system will promote you here.
            </p>
            <div className="grid gap-2.5">
              {priorityLists.ambitious.length ? priorityLists.ambitious.map((o, i) => (
                <div key={i} className={`p-3.5 rounded-xl border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 ${isDark ? 'bg-emerald-950/20 border-emerald-900/40' : 'bg-emerald-50/70 border-emerald-200'}`}>
                  <div>
                    <span className="font-bold text-sm text-slate-900 dark:text-white">{CAMPUS_NAMES[o.campus]}</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400 ml-2">
                      {o.prog} ({o.fee === 'FullFee' ? 'Full Fee' : 'Regular'})
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md">
                    Benchmark Cutoff: {o.cutoff}
                  </span>
                </div>
              )) : (
                <p className="text-xs text-slate-500 p-3 rounded-lg border border-dashed border-slate-300 dark:border-slate-800">
                  No ambitious options identified for this rank bracket.
                </p>
              )}
            </div>
          </div>

          {/* Tier 2: Realistic / Match */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <h4 className="font-extrabold text-sm sm:text-base text-amber-600 dark:text-amber-400">
                Tier 2: Realistic (Competitive Match) — Place in Middle
              </h4>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
              Programs closely matching your current rank where you hold competitive historical probability.
            </p>
            <div className="grid gap-2.5">
              {priorityLists.match.length ? priorityLists.match.map((o, i) => (
                <div key={i} className={`p-3.5 rounded-xl border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 ${isDark ? 'bg-amber-950/20 border-amber-900/40' : 'bg-amber-50/70 border-amber-200'}`}>
                  <div>
                    <span className="font-bold text-sm text-slate-900 dark:text-white">{CAMPUS_NAMES[o.campus]}</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400 ml-2">
                      {o.prog} ({o.fee === 'FullFee' ? 'Full Fee' : 'Regular'})
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-amber-700 dark:text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md">
                    Benchmark Cutoff: {o.cutoff}
                  </span>
                </div>
              )) : (
                <p className="text-xs text-slate-500 p-3 rounded-lg border border-dashed border-slate-300 dark:border-slate-800">
                  No match options available.
                </p>
              )}
            </div>
          </div>

          {/* Tier 3: Safety / High Probability */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
              <h4 className="font-extrabold text-sm sm:text-base text-blue-600 dark:text-blue-400">
                Tier 3: Safety (High Historical Probability) — Place at Bottom
              </h4>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
              Reliable safety options where historical cutoff ranks are comfortably above your rank. Ensures you secure an admission seat in initial rounds.
            </p>
            <div className="grid gap-2.5">
              {priorityLists.safety.length ? priorityLists.safety.map((o, i) => (
                <div key={i} className={`p-3.5 rounded-xl border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 ${isDark ? 'bg-blue-950/20 border-blue-900/40' : 'bg-blue-50/70 border-blue-200'}`}>
                  <div>
                    <span className="font-bold text-sm text-slate-900 dark:text-white">{CAMPUS_NAMES[o.campus]}</span>
                    <span className="text-xs text-slate-600 dark:text-slate-400 ml-2">
                      {o.prog} ({o.fee === 'FullFee' ? 'Full Fee' : 'Regular'})
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-blue-700 dark:text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md">
                    Benchmark Cutoff: {o.cutoff}
                  </span>
                </div>
              )) : (
                <p className="text-xs text-slate-500 p-3 rounded-lg border border-dashed border-slate-300 dark:border-slate-800">
                  No safety choices generated.
                </p>
              )}
            </div>
          </div>

        </div>
      )}

      <InfoDisclaimer 
        isDark={isDark}
        title="Priority Order Principle & Counseling Strategy" 
        text="In IOE counseling, the auto-upgrade system only promotes you upwards (towards higher priority numbers). You cannot choose a lower priority seat if you are already offered a higher one. Never place a faculty you dislike above one you genuinely want to study, regardless of cutoff rankings." 
      />

    </div>
  );
}

