import { useState, type SyntheticEvent } from 'react';
import { CUTOFFS, CAMPUS_NAMES, ALL_PROGRAMS, AFFILIATED_COLLEGES } from '../data/admissionData';
import { getPhaseCutoff } from '../utils/calculations';
import InfoDisclaimer from './common/InfoDisclaimer';
import type { TabId } from './App';
import type { CampusKey, FeeType, PriorityOption, PriorityLists } from '../types';

export interface PriorityGeneratorProps {
  isDark?: boolean;
  onNavigateTab?: (tab: TabId) => void;
}

/**
 * Builds the universe of admission options from historical constituent cutoffs and affiliated benchmarks
 */
function getAllPriorityOptions(): PriorityOption[] {
  const options: PriorityOption[] = [];

  // 1. Constituent Campuses (Pulchowk, Thapathali, WRC, ERC, ChEC)
  (Object.keys(CUTOFFS) as CampusKey[]).forEach(campus => {
    Object.keys(CUTOFFS[campus]).forEach(prog => {
      (['Regular', 'FullFee'] as FeeType[]).forEach(fee => {
        const openCutoff = CUTOFFS[campus][prog]?.[fee]?.['Open'];
        if (openCutoff) {
          options.push({
            campus,
            campusName: CAMPUS_NAMES[campus],
            prog,
            fee,
            cutoff: getPhaseCutoff(openCutoff, fee, 1)
          });
        }
      });
    });
  });

  // 2. TU Affiliated Benchmark Colleges
  AFFILIATED_COLLEGES.forEach(col => {
    const cutoffNum = parseInt(col.cutoff.replace(/[^0-9]/g, ''), 10) || 4500;
    const progs = col.programs.split(',').map(p => p.trim());
    progs.forEach(shortP => {
      let fullProg = shortP;
      if (shortP === 'Civil') fullProg = 'Civil Engineering';
      else if (shortP === 'Computer') fullProg = 'Computer Engineering';
      else if (shortP === 'Electrical') fullProg = 'Electrical Engineering';
      else if (shortP === 'Electronics') fullProg = 'Electronics, Communication and Information Engineering';

      options.push({
        campus: 'Affiliated',
        campusName: col.name,
        prog: fullProg,
        fee: 'Affiliated',
        cutoff: cutoffNum,
        notes: `${col.location} • Approx ${col.fee}`
      });
    });
  });

  return options;
}

export default function PriorityGenerator({ isDark = false, onNavigateTab }: PriorityGeneratorProps) {
  const [priorityRank, setPriorityRank] = useState('');
  const [selectedFaculty, setSelectedFaculty] = useState('ALL');
  const [priorityLists, setPriorityLists] = useState<PriorityLists | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const calculatePriorities = (rankInput: string, facultyFilter = selectedFaculty) => {
    const r = parseInt(rankInput, 10);
    if (!r || r < 1 || r > 15000) {
      setValidationError('Please enter a valid official merit rank between 1 and 15,000.');
      setPriorityLists(null);
      return;
    }
    setValidationError(null);

    const allOptions = getAllPriorityOptions();

    // Filter by faculty if not "ALL"
    const filteredOptions = facultyFilter === 'ALL'
      ? allOptions
      : allOptions.filter(o => o.prog.toLowerCase() === facultyFilter.toLowerCase());

    if (filteredOptions.length === 0) {
      setPriorityLists({ ambitious: [], match: [], safety: [] });
      return;
    }

    // Sort by student trend and competitiveness: lowest closing cutoff rank first
    filteredOptions.sort((a, b) => {
      if (a.cutoff !== b.cutoff) return a.cutoff - b.cutoff;
      if (a.campus !== 'Affiliated' && b.campus === 'Affiliated') return -1;
      if (a.campus === 'Affiliated' && b.campus !== 'Affiliated') return 1;
      if (a.fee === 'Regular' && b.fee !== 'Regular') return -1;
      if (a.fee !== 'Regular' && b.fee === 'Regular') return 1;
      return 0;
    });

    let ambitious: PriorityOption[] = [];
    let match: PriorityOption[] = [];
    let safety: PriorityOption[] = [];

    if (r <= 80) {
      // Top Rankers (Rank 1 - 80)
      // Tier 1: Absolute highest-demand dream seats in Nepal
      ambitious = filteredOptions.slice(0, 4);
      // Tier 2: Premier target matches
      match = filteredOptions.slice(4, 8);
      // Tier 3: Guaranteed backup seats
      safety = filteredOptions.slice(8, 12);
    } else if (r <= 500) {
      // High Rankers (Rank 81 - 500)
      ambitious = filteredOptions.filter(o => o.cutoff < r).slice(0, 4);
      if (ambitious.length < 3) ambitious = filteredOptions.slice(0, 4);

      match = filteredOptions.filter(o => o.cutoff >= r && o.cutoff <= r * 1.6).slice(0, 4);
      if (match.length < 3) match = filteredOptions.filter(o => o.cutoff >= r).slice(0, 4);

      safety = filteredOptions.filter(o => o.cutoff > r * 1.6).slice(0, 4);
      if (safety.length < 3) safety = filteredOptions.slice(-4);
    } else if (r <= 2500) {
      // Mid Rankers (Rank 501 - 2500)
      ambitious = filteredOptions.filter(o => o.cutoff < r && o.cutoff >= r * 0.35).slice(0, 4);
      if (ambitious.length < 3) ambitious = filteredOptions.filter(o => o.cutoff < r).slice(-4);

      match = filteredOptions.filter(o => o.cutoff >= r && o.cutoff <= r * 1.45).slice(0, 4);
      if (match.length < 3) match = filteredOptions.filter(o => o.cutoff >= r).slice(0, 4);

      safety = filteredOptions.filter(o => o.cutoff > r * 1.45).slice(0, 4);
      if (safety.length < 3) safety = filteredOptions.filter(o => o.cutoff > r).slice(-4);
    } else if (r <= 4500) {
      // Competitive Passing Ranks (Rank 2501 - 4500)
      ambitious = filteredOptions.filter(o => o.cutoff < r && o.cutoff >= 1200).slice(0, 4);
      if (ambitious.length < 3) ambitious = filteredOptions.filter(o => o.cutoff < r).slice(-4);

      match = filteredOptions.filter(o => o.cutoff >= r && o.cutoff <= 4800).slice(0, 4);
      if (match.length < 3) match = filteredOptions.filter(o => o.cutoff >= r).slice(0, 4);

      safety = filteredOptions.filter(o => o.cutoff > 4000).slice(0, 4);
      if (safety.length < 3) safety = filteredOptions.slice(-4);
    } else {
      // Higher Passing Ranks (Rank 4501 - 15000)
      // Tier 1: Constituent late-round potential reach
      ambitious = filteredOptions.filter(o => o.campus !== 'Affiliated' && o.cutoff >= 2800).slice(0, 4);
      if (ambitious.length < 2) ambitious = filteredOptions.filter(o => o.campus !== 'Affiliated').slice(-4);

      // Tier 2: Premier TU Affiliated Colleges (competitive cutoff benchmarks)
      match = filteredOptions.filter(o => o.campus === 'Affiliated' && o.cutoff <= 4600).slice(0, 4);
      if (match.length < 3) match = filteredOptions.filter(o => o.cutoff <= 5000).slice(-4);

      // Tier 3: Confirmed admission TU Affiliated Colleges for pass candidates
      safety = filteredOptions.filter(o => o.campus === 'Affiliated' && o.cutoff >= 4700).slice(0, 4);
      if (safety.length < 3) safety = filteredOptions.filter(o => o.campus === 'Affiliated').slice(-4);
      if (safety.length === 0) safety = filteredOptions.slice(-4);
    }

    // Deduplicate choices across tiers
    const usedKeys = new Set<string>();
    const keyOf = (o: PriorityOption) => `${o.campusName || o.campus}-${o.prog}-${o.fee}`;

    const cleanAmbitious = ambitious.filter(o => {
      const k = keyOf(o);
      if (usedKeys.has(k)) return false;
      usedKeys.add(k);
      return true;
    });

    const cleanMatch = match.filter(o => {
      const k = keyOf(o);
      if (usedKeys.has(k)) return false;
      usedKeys.add(k);
      return true;
    });

    const cleanSafety = safety.filter(o => {
      const k = keyOf(o);
      if (usedKeys.has(k)) return false;
      usedKeys.add(k);
      return true;
    });

    setPriorityLists({
      ambitious: cleanAmbitious.length > 0 ? cleanAmbitious : filteredOptions.slice(0, 4),
      match: cleanMatch.length > 0 ? cleanMatch : filteredOptions.slice(4, 8),
      safety: cleanSafety.length > 0 ? cleanSafety : filteredOptions.slice(8, 12)
    });
  };

  const generatePriority = (e: SyntheticEvent) => {
    e.preventDefault();
    calculatePriorities(priorityRank, selectedFaculty);
  };

  const copyToClipboard = () => {
    if (!priorityLists) return;
    const facultyLabel = selectedFaculty === 'ALL' ? 'All Faculties (Student Trend)' : selectedFaculty;
    let text = `IOE Admission Priority Form Sequence Recommendation\n`;
    text += `Reference Merit Rank: #${priorityRank}\n`;
    text += `Discipline Preference: ${facultyLabel}\n`;
    text += `Counseling Note: Sequence is ordered based on historical student demand & closing ranks. You must prioritize the faculty of your genuine passion. IOE auto-upgrades upwards only (never downgrades).\n\n`;

    let index = 1;
    if (priorityLists.ambitious.length) {
      text += `[Tier 1: Ambitious (Reach) — Place at the Top of your Form]\n`;
      priorityLists.ambitious.forEach(o => {
        const cName = o.campus === 'Affiliated' ? o.campusName : (CAMPUS_NAMES[o.campus as CampusKey] || o.campusName);
        const feeLabel = o.fee === 'FullFee' ? 'Full Fee' : o.fee === 'Regular' ? 'Regular' : 'Affiliated Private';
        text += `${index++}. ${cName} - ${o.prog} (${feeLabel}) [Historical Cutoff: ~${o.cutoff}]\n`;
      });
      text += `\n`;
    }
    if (priorityLists.match.length) {
      text += `[Tier 2: Realistic (Target Match) — Place in the Middle]\n`;
      priorityLists.match.forEach(o => {
        const cName = o.campus === 'Affiliated' ? o.campusName : (CAMPUS_NAMES[o.campus as CampusKey] || o.campusName);
        const feeLabel = o.fee === 'FullFee' ? 'Full Fee' : o.fee === 'Regular' ? 'Regular' : 'Affiliated Private';
        text += `${index++}. ${cName} - ${o.prog} (${feeLabel}) [Historical Cutoff: ~${o.cutoff}]\n`;
      });
      text += `\n`;
    }
    if (priorityLists.safety.length) {
      text += `[Tier 3: Safety (High Probability Backups) — Place at the Bottom]\n`;
      priorityLists.safety.forEach(o => {
        const cName = o.campus === 'Affiliated' ? o.campusName : (CAMPUS_NAMES[o.campus as CampusKey] || o.campusName);
        const feeLabel = o.fee === 'FullFee' ? 'Full Fee' : o.fee === 'Regular' ? 'Regular' : 'Affiliated Private';
        text += `${index++}. ${cName} - ${o.prog} (${feeLabel}) [Historical Cutoff: ~${o.cutoff}]\n`;
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
        <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white print:text-black tracking-tight">
          Priority Form Sequence Optimizer
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
          Generate an optimal Reach, Target, and Safety priority sequence tailored to your rank and aligned with student trends and the official IOE auto-upgrade algorithm.
        </p>
      </div>

      {/* Validation Error Alert */}
      {validationError && (
        <div className="mb-6 p-4 rounded-xl border border-rose-300 dark:border-rose-700 bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-200 text-xs sm:text-sm flex items-start gap-3 shadow-2xs animate-fadeIn" role="alert">
          <svg className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div>
            <strong className="font-bold block text-sm mb-0.5">Input Error</strong>
            <span>{validationError}</span>
          </div>
        </div>
      )}

      <form onSubmit={generatePriority} className="bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-500 p-4 sm:p-5 rounded-xl print:hidden flex flex-col gap-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="priority-rank-input" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Your Official IOE Merit Rank <span className="text-rose-500">*</span>
            </label>
            <input 
              id="priority-rank-input"
              type="number" 
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="e.g. 1450" 
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-mono text-base focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
              value={priorityRank} 
              onChange={(e) => {
                setPriorityRank(e.target.value);
                if (validationError) setValidationError(null);
              }} 
              required 
              min="1" 
              max="15000"
            />
            <p className="text-[11px] text-slate-500 mt-1">Accepts any rank between 1 and 15,000.</p>
          </div>

          <div>
            <label htmlFor="priority-faculty-filter" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Faculty / Discipline Preference
            </label>
            <select
              id="priority-faculty-filter"
              value={selectedFaculty}
              onChange={(e) => {
                setSelectedFaculty(e.target.value);
                if (priorityRank) calculatePriorities(priorityRank, e.target.value);
              }}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
            >
              <option value="ALL">All Disciplines (General Student Trend)</option>
              {ALL_PROGRAMS.map((prog) => (
                <option key={prog} value={prog}>
                  {prog}
                </option>
              ))}
            </select>
            <p className="text-[11px] text-slate-500 mt-1">Filter by a single faculty or follow the overall student trend.</p>
          </div>
        </div>

        <div>
          <button 
            type="submit" 
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-xs rounded-xl transition-all shadow-xs min-h-[44px]"
          >
            Generate Optimized Sequence
          </button>
        </div>
      </form>

      {priorityLists && (
        <div className="mt-8 space-y-6">
          
          {/* Important Counseling Strategy & Student Interest Banner */}
          <div className="p-4 sm:p-5 rounded-xl border border-amber-300 dark:border-amber-600/70 bg-amber-50/90 dark:bg-amber-950/40 text-amber-950 dark:text-amber-100 shadow-2xs animate-fadeIn">
            <div className="flex items-start gap-3">
              <span className="text-xl shrink-0 mt-0.5" aria-hidden="true">⚠️</span>
              <div className="space-y-1.5 text-xs sm:text-sm">
                <h4 className="font-bold text-amber-900 dark:text-amber-200">
                  Crucial Strategy Notice: Student Trends vs. Your Genuine Passion
                </h4>
                <p className="leading-relaxed text-amber-900/90 dark:text-amber-200/90">
                  This recommended sequence is calculated according to <strong>historical student demand trends and closing cutoff ranks</strong> (e.g., Pulchowk leading campus preference; Computer, Electronics, and Civil leading general applicant volume).
                </p>
                <div className="p-2.5 rounded-lg bg-amber-100/70 dark:bg-amber-900/50 border border-amber-200 dark:border-amber-700/60 font-medium">
                  <strong>⚡ The Fundamental Rule of IOE Priority Counseling:</strong>
                  <p className="mt-1">
                    The IOE counseling algorithm operates on an <strong>upwards-only auto-upgrade system</strong>. You can only be promoted to a higher-numbered priority choice; you will <strong>NEVER be allowed to downgrade</strong> to a lower preference once a higher seat is granted.
                  </p>
                  <p className="mt-1">
                    <strong>Always prioritize the faculty and campus of your own true passion.</strong> Do not rank Computer or Electronics above Civil or Mechanical just because of popular hype if your heart is set on Civil or Mechanical!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800 print:hidden">
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                Recommended Preference Sequence (Rank #{priorityRank})
              </h3>
              <p className="text-[11px] text-slate-500">
                Discipline: {selectedFaculty === 'ALL' ? 'General Student Trend' : selectedFaculty}
              </p>
            </div>
            <button
              onClick={copyToClipboard}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 transition-colors shadow-2xs"
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
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <h4 className="font-semibold text-xs sm:text-sm text-emerald-800 dark:text-emerald-300">
                Tier 1: Ambitious (Reach Choices) — Place at the Very Top
              </h4>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2.5">
              High-prestige choices whose historical cutoffs are slightly ahead of your rank. If vacant seats emerge in subsequent rounds, the auto-upgrade system promotes you here.
            </p>
            <div className="grid gap-2">
              {priorityLists.ambitious.length ? priorityLists.ambitious.map((o, i) => (
                <div key={i} className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5 text-xs shadow-2xs">
                  <div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {o.campus === 'Affiliated' ? o.campusName : (CAMPUS_NAMES[o.campus as CampusKey] || o.campusName)}
                      </span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                        o.fee === 'Regular'
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200'
                          : o.fee === 'FullFee'
                          ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200'
                          : 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-200'
                      }`}>
                        {o.fee === 'FullFee' ? 'Full Fee' : o.fee === 'Regular' ? 'Regular' : 'Affiliated Private'}
                      </span>
                    </div>
                    <span className="text-slate-500 dark:text-slate-400 block mt-0.5">
                      {o.prog} {o.notes ? `• ${o.notes}` : ''}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/80 px-2 py-0.5 rounded whitespace-nowrap">
                    Cutoff: ~{o.cutoff}
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
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <h4 className="font-semibold text-xs sm:text-sm text-amber-800 dark:text-amber-300">
                Tier 2: Realistic (Target Matches) — Place in the Middle
              </h4>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2.5">
              Programs closely matching your rank bracket where historical admission likelihood is very strong.
            </p>
            <div className="grid gap-2">
              {priorityLists.match.length ? priorityLists.match.map((o, i) => (
                <div key={i} className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5 text-xs shadow-2xs">
                  <div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {o.campus === 'Affiliated' ? o.campusName : (CAMPUS_NAMES[o.campus as CampusKey] || o.campusName)}
                      </span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                        o.fee === 'Regular'
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200'
                          : o.fee === 'FullFee'
                          ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200'
                          : 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-200'
                      }`}>
                        {o.fee === 'FullFee' ? 'Full Fee' : o.fee === 'Regular' ? 'Regular' : 'Affiliated Private'}
                      </span>
                    </div>
                    <span className="text-slate-500 dark:text-slate-400 block mt-0.5">
                      {o.prog} {o.notes ? `• ${o.notes}` : ''}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/80 px-2 py-0.5 rounded whitespace-nowrap">
                    Cutoff: ~{o.cutoff}
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
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
              <h4 className="font-semibold text-xs sm:text-sm text-blue-800 dark:text-blue-300">
                Tier 3: Safety Backups — Place at the Bottom
              </h4>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2.5">
              Reliable safety choices where historical closing ranks are comfortably above your rank, ensuring guaranteed seat enrollment.
            </p>
            <div className="grid gap-2">
              {priorityLists.safety.length ? priorityLists.safety.map((o, i) => (
                <div key={i} className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5 text-xs shadow-2xs">
                  <div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {o.campus === 'Affiliated' ? o.campusName : (CAMPUS_NAMES[o.campus as CampusKey] || o.campusName)}
                      </span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                        o.fee === 'Regular'
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200'
                          : o.fee === 'FullFee'
                          ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200'
                          : 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-200'
                      }`}>
                        {o.fee === 'FullFee' ? 'Full Fee' : o.fee === 'Regular' ? 'Regular' : 'Affiliated Private'}
                      </span>
                    </div>
                    <span className="text-slate-500 dark:text-slate-400 block mt-0.5">
                      {o.prog} {o.notes ? `• ${o.notes}` : ''}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/80 px-2 py-0.5 rounded whitespace-nowrap">
                    Cutoff: ~{o.cutoff}
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
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-3">
            Related Tools
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => onNavigateTab('financials')}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 text-left transition-all group shadow-2xs"
            >
              <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300">
                <span>Fee Breakdown</span>
                <svg className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
            <button
              type="button"
              onClick={() => onNavigateTab('checklist')}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 text-left transition-all group shadow-2xs"
            >
              <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300">
                <span>Checklist</span>
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
        title="Priority Order Principle & Counseling Strategy" 
        text="In IOE counseling, the auto-upgrade system only promotes you upwards (towards higher priority numbers). You cannot choose a lower priority seat if you are already offered a higher one. Never place a faculty you dislike above one you genuinely want to study, regardless of cutoff rankings." 
      />

    </div>
  );
}
