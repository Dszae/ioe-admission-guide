import React, { useState } from 'react';
import { CUTOFFS, CAMPUS_NAMES } from '../data/admissionData';
import { getPhaseCutoff } from '../utils/calculations';
import InfoDisclaimer from './common/InfoDisclaimer';

export default function PriorityGenerator({ isDark, onNavigateTab }) {
  const [priorityRank, setPriorityRank] = useState('');
  const [priorityLists, setPriorityLists] = useState(null);
  const [copied, setCopied] = useState(false);

  const calculatePriorities = (rankInput) => {
    const r = parseInt(rankInput, 10);
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

  const generatePriority = (e) => {
    e.preventDefault();
    calculatePriorities(priorityRank);
  };

  const handleQuickPreset = (rankVal) => {
    setPriorityRank(String(rankVal));
    calculatePriorities(rankVal);
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
      text += `[Realistic / Target Choices]\n`;
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
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white print:text-black">
          Priority Form Sequence Optimizer
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
          Input your entrance rank to generate a balanced multi-tier sequence (Reach, Target, and Safety) optimized for the IOE auto-upgrade algorithm.
        </p>
      </div>

      <form onSubmit={generatePriority} className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 rounded-xl print:hidden flex flex-col gap-3">
        <div>
          <label htmlFor="priority-rank-input" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            Your Official IOE Merit Rank <span className="text-rose-500">*</span>
          </label>
          <div className="flex flex-col sm:flex-row gap-2.5">
            <input 
              id="priority-rank-input"
              type="number" 
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="e.g. 1450" 
              className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-mono text-base focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
              value={priorityRank} 
              onChange={(e) => setPriorityRank(e.target.value)} 
              required 
              min="1" 
              max="15000"
            />
            <button 
              type="submit" 
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-xs rounded-xl transition-all shadow-xs whitespace-nowrap min-h-[44px]"
            >
              Generate Sequence
            </button>
          </div>
        </div>

        {/* Quick presets */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-[11px] text-slate-500 dark:text-slate-400">Try example:</span>
          <button
            type="button"
            onClick={() => handleQuickPreset(350)}
            className="px-2 py-0.5 rounded text-[11px] font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100"
          >
            Rank 350
          </button>
          <button
            type="button"
            onClick={() => handleQuickPreset(1200)}
            className="px-2 py-0.5 rounded text-[11px] font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100"
          >
            Rank 1,200
          </button>
          <button
            type="button"
            onClick={() => handleQuickPreset(2800)}
            className="px-2 py-0.5 rounded text-[11px] font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100"
          >
            Rank 2,800
          </button>
        </div>
      </form>

      {priorityLists && (
        <div className="mt-8 space-y-6">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800 print:hidden">
            <h3 className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
              Recommended Preference Sequence (Rank #{priorityRank})
            </h3>
            <button
              onClick={copyToClipboard}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-850 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 transition-colors shadow-2xs"
            >
              {copied ? (
                <>
                  <svg className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/></svg>
                  <span>Copy Sequence</span>
                </>
              )}
            </button>
          </div>

          {/* Tier 1: Ambitious / Reach */}
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <h4 className="font-semibold text-xs sm:text-sm text-emerald-800 dark:text-emerald-300">
                Tier 1: Ambitious (Reach) — Place at the Top
              </h4>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2.5">
              Programs where historical cutoffs are slightly ahead of your rank. If vacant seats emerge later, the auto-upgrade system will promote you here.
            </p>
            <div className="grid gap-2">
              {priorityLists.ambitious.length ? priorityLists.ambitious.map((o, i) => (
                <div key={i} className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5 text-xs shadow-2xs">
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white">{CAMPUS_NAMES[o.campus]}</span>
                    <span className="text-slate-500 dark:text-slate-400 ml-1.5">
                      {o.prog} ({o.fee === 'FullFee' ? 'Full Fee' : 'Regular'})
                    </span>
                  </div>
                  <span className="font-mono text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                    Cutoff: {o.cutoff}
                  </span>
                </div>
              )) : (
                <p className="text-xs text-slate-500 p-3 rounded-lg border border-dashed border-slate-200 dark:border-slate-800">
                  No ambitious options identified for this rank bracket.
                </p>
              )}
            </div>
          </div>

          {/* Tier 2: Realistic / Match */}
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <h4 className="font-semibold text-xs sm:text-sm text-amber-800 dark:text-amber-300">
                Tier 2: Realistic (Target Match) — Place in the Middle
              </h4>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2.5">
              Programs closely matching your rank where you have strong historical admission likelihood.
            </p>
            <div className="grid gap-2">
              {priorityLists.match.length ? priorityLists.match.map((o, i) => (
                <div key={i} className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5 text-xs shadow-2xs">
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white">{CAMPUS_NAMES[o.campus]}</span>
                    <span className="text-slate-500 dark:text-slate-400 ml-1.5">
                      {o.prog} ({o.fee === 'FullFee' ? 'Full Fee' : 'Regular'})
                    </span>
                  </div>
                  <span className="font-mono text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                    Cutoff: {o.cutoff}
                  </span>
                </div>
              )) : (
                <p className="text-xs text-slate-500 p-3 rounded-lg border border-dashed border-slate-200 dark:border-slate-800">
                  No match options available.
                </p>
              )}
            </div>
          </div>

          {/* Tier 3: Safety */}
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <h4 className="font-semibold text-xs sm:text-sm text-blue-800 dark:text-blue-300">
                Tier 3: Safety Backups — Place at the Bottom
              </h4>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2.5">
              Reliable safety choices where historical closing ranks are comfortably above your rank, ensuring guaranteed seat enrollment.
            </p>
            <div className="grid gap-2">
              {priorityLists.safety.length ? priorityLists.safety.map((o, i) => (
                <div key={i} className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5 text-xs shadow-2xs">
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white">{CAMPUS_NAMES[o.campus]}</span>
                    <span className="text-slate-500 dark:text-slate-400 ml-1.5">
                      {o.prog} ({o.fee === 'FullFee' ? 'Full Fee' : 'Regular'})
                    </span>
                  </div>
                  <span className="font-mono text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                    Cutoff: {o.cutoff}
                  </span>
                </div>
              )) : (
                <p className="text-xs text-slate-500 p-3 rounded-lg border border-dashed border-slate-200 dark:border-slate-800">
                  No safety choices generated.
                </p>
              )}
            </div>
          </div>

        </div>
      )}

      {/* Internal Sitelinks */}
      {onNavigateTab && (
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 print:hidden">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Related Planning Tools
            </h3>
            <span className="text-[11px] text-slate-400">Direct Navigation</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => onNavigateTab('financials')}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-850 text-left transition-all group shadow-2xs"
            >
              <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                <span>Tuition & Fee Breakdown</span>
                <svg className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                Compare Regular subsidized fees vs. Full-Fee costs
              </p>
            </button>
            <button
              type="button"
              onClick={() => onNavigateTab('checklist')}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-850 text-left transition-all group shadow-2xs"
            >
              <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                <span>Admission Checklist</span>
                <svg className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                Verify citizenship, transcripts, and counseling deadlines
              </p>
            </button>
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
