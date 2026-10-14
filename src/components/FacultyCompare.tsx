import { useState } from 'react';
import { FACULTY_DATA } from '../data/admissionData';
import InfoDisclaimer from './common/InfoDisclaimer';

export interface FacultyCompareProps {
  isDark?: boolean;
}

const COMMON_COMPARISONS = [
  { label: 'Computer vs Electronics', a: 'Computer Engineering', b: 'Electronics, Communication and Information Engineering' },
  { label: 'Mechanical vs Automobile', a: 'Mechanical Engineering', b: 'Automobile Engineering' },
  { label: 'Civil vs Architecture', a: 'Civil Engineering', b: 'Architecture' },
  { label: 'Electrical vs Electronics', a: 'Electrical Engineering', b: 'Electronics, Communication and Information Engineering' },
  { label: 'Civil vs Geomatics', a: 'Civil Engineering', b: 'Geomatics Engineering' },
  { label: 'Mechanical vs Industrial', a: 'Mechanical Engineering', b: 'Industrial Engineering' }
];

export default function FacultyCompare({ isDark = false }: FacultyCompareProps) {
  const [compA, setCompA] = useState<string>('Computer Engineering');
  const [compB, setCompB] = useState<string>('Electronics, Communication and Information Engineering');
  const [activeView, setActiveView] = useState<'all' | 'syllabus' | 'careers' | 'labs'>('all');

  const facultyA = FACULTY_DATA[compA] || { tags: [], description: '', careers: [], overlap: {} };
  const facultyB = FACULTY_DATA[compB] || { tags: [], description: '', careers: [], overlap: {} };

  const overlapAB = facultyA.overlap?.[compB] || facultyB.overlap?.[compA] || '~ 20%';
  const overlapNumeric = parseInt(overlapAB.replace(/[^0-9]/g, ''), 10) || 20;

  const handleSwap = () => {
    const temp = compA;
    setCompA(compB);
    setCompB(temp);
  };

  const handleSelectPreset = (a: string, b: string) => {
    setCompA(a);
    setCompB(b);
  };

  return (
    <div className="animate-fadeIn space-y-6">
      
      {/* Header */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white print:text-black">
            Engineering Faculty & Detailed Syllabus Comparator
          </h2>
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/50">
            12 Official IOE Disciplines
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          Compare authentic TU IOE curricula, semester core subjects, laboratory workshops, technical domain overlap, and industry career outcomes across engineering disciplines.
        </p>
      </div>

      {/* Quick Comparison Presets */}
      <div className="space-y-1.5 print:hidden">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Popular Discipline Comparisons
        </span>
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {COMMON_COMPARISONS.map((preset, idx) => {
            const isCurrent = (compA === preset.a && compB === preset.b) || (compA === preset.b && compB === preset.a);
            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectPreset(preset.a, preset.b)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all shrink-0 border ${
                  isCurrent
                    ? 'bg-blue-600 text-white border-blue-600 shadow-2xs'
                    : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-400'
                }`}
              >
                {preset.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selectors with Swap */}
      <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/70 shadow-2xs print:hidden">
        <div className="grid sm:grid-cols-[1fr,auto,1fr] gap-3 sm:gap-4 items-end">
          <div>
            <label htmlFor="compare-a" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Primary Discipline (A)
            </label>
            <select
              id="compare-a"
              value={compA}
              onChange={(e) => setCompA(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
            >
              {Object.keys(FACULTY_DATA).map(prog => (
                <option key={prog} value={prog} disabled={prog === compB}>
                  {prog} {prog === 'Architecture' ? '(5 Yrs)' : ''}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-center pb-0.5">
            <button
              type="button"
              onClick={handleSwap}
              title="Swap Selected Disciplines"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 transition-colors cursor-pointer shadow-2xs"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              <span className="sr-only">Swap</span>
            </button>
          </div>

          <div>
            <label htmlFor="compare-b" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Comparative Discipline (B)
            </label>
            <select
              id="compare-b"
              value={compB}
              onChange={(e) => setCompB(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
            >
              {Object.keys(FACULTY_DATA).map(prog => (
                <option key={prog} value={prog} disabled={prog === compA}>
                  {prog} {prog === 'Architecture' ? '(5 Yrs)' : ''}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* View Focus Filter */}
        <div className="flex items-center gap-1.5 pt-4 mt-4 border-t border-slate-100 dark:border-slate-700/60 overflow-x-auto no-scrollbar">
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mr-1 shrink-0">View Filter:</span>
          {([
            { id: 'all', label: 'All Dimensions' },
            { id: 'syllabus', label: 'Core Syllabus Courses' },
            { id: 'careers', label: 'Careers & Industry' },
            { id: 'labs', label: 'Labs & Workshops' }
          ] as const).map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveView(tab.id)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all shrink-0 ${
                activeView === tab.id
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-2xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Overlap Summary Banner */}
      <div className="p-4 sm:p-5 rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/40 dark:bg-blue-950/20 flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xs">
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
              Curricular Shared Base
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 font-mono font-bold">
              {overlapAB} Overlap
            </span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
            All TU IOE B.E. programs share foundational first-year coursework (Calculus, Physics, Chemistry, Applied Mechanics, Basic Electrical, and C Programming). The remaining percentage accounts for specialized domain engineering from Semester 3 onward.
          </p>
        </div>

        <div className="w-full md:w-56 shrink-0 space-y-1.5">
          <div className="flex justify-between text-[11px] font-semibold text-slate-700 dark:text-slate-300">
            <span>Core Specific</span>
            <span>Shared Base: {overlapAB}</span>
          </div>
          <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
            <div
              className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-500"
              style={{ width: `${overlapNumeric}%` }}
            />
          </div>
        </div>
      </div>

      {/* Side-by-Side Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
        
        {/* Card A */}
        <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/60 shadow-2xs space-y-5">
          <div>
            <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/50">
                Discipline A
              </span>
              <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200/60 dark:border-emerald-800/40">
                {facultyA.duration || '4 Years (8 Semesters)'}
              </span>
            </div>
            <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
              {compA}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
              {facultyA.degree || 'Bachelor of Engineering'}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2.5">
              {facultyA.description}
            </p>
          </div>

          {/* Core Focus Tags */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 block mb-2">
              Technical Focus Areas
            </span>
            <div className="flex flex-wrap gap-1.5">
              {facultyA.tags?.map(tag => (
                <span key={tag} className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium border border-slate-200/60 dark:border-slate-700/60">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Core Syllabus Courses */}
          {(activeView === 'all' || activeView === 'syllabus') && facultyA.coreSubjects && (
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block">
                Official Syllabus Key Subjects
              </span>
              <ul className="grid gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                {facultyA.coreSubjects.map((sub, i) => (
                  <li key={i} className="flex items-start gap-2 p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/80">
                    <span className="text-blue-600 dark:text-blue-400 shrink-0 font-mono text-[10px] mt-0.5">#{i + 1}</span>
                    <span>{sub}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Careers & Industry */}
          {(activeView === 'all' || activeView === 'careers') && (
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1.5">
                  High-Impact Career Roles
                </span>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  {facultyA.careers?.map(career => (
                    <li key={career} className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{career}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {facultyA.industries && (
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 block mb-1.5">
                    Employment Sectors in Nepal & Globally
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {facultyA.industries.map(ind => (
                      <span key={ind} className="text-[11px] px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800">
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Laboratories & Further Studies */}
          {(activeView === 'all' || activeView === 'labs') && (
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3">
              {facultyA.labWorkshops && (
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 block mb-1.5">
                    Key Laboratory Work & Practical Facilities
                  </span>
                  <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                    {facultyA.labWorkshops.map(lab => (
                      <li key={lab} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                        <span>{lab}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {facultyA.furtherStudies && (
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 block mb-1.5">
                    Postgraduate & M.Sc. Pathways
                  </span>
                  <div className="flex flex-wrap gap-1 text-[11px] text-slate-600 dark:text-slate-400">
                    {facultyA.furtherStudies.join(' • ')}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Card B */}
        <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/60 shadow-2xs space-y-5">
          <div>
            <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-800/50">
                Discipline B
              </span>
              <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200/60 dark:border-emerald-800/40">
                {facultyB.duration || '4 Years (8 Semesters)'}
              </span>
            </div>
            <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
              {compB}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
              {facultyB.degree || 'Bachelor of Engineering'}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2.5">
              {facultyB.description}
            </p>
          </div>

          {/* Core Focus Tags */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 block mb-2">
              Technical Focus Areas
            </span>
            <div className="flex flex-wrap gap-1.5">
              {facultyB.tags?.map(tag => (
                <span key={tag} className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium border border-slate-200/60 dark:border-slate-700/60">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Core Syllabus Courses */}
          {(activeView === 'all' || activeView === 'syllabus') && facultyB.coreSubjects && (
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block">
                Official Syllabus Key Subjects
              </span>
              <ul className="grid gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                {facultyB.coreSubjects.map((sub, i) => (
                  <li key={i} className="flex items-start gap-2 p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/80">
                    <span className="text-teal-600 dark:text-teal-400 shrink-0 font-mono text-[10px] mt-0.5">#{i + 1}</span>
                    <span>{sub}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Careers & Industry */}
          {(activeView === 'all' || activeView === 'careers') && (
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1.5">
                  High-Impact Career Roles
                </span>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  {facultyB.careers?.map(career => (
                    <li key={career} className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{career}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {facultyB.industries && (
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 block mb-1.5">
                    Employment Sectors in Nepal & Globally
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {facultyB.industries.map(ind => (
                      <span key={ind} className="text-[11px] px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800">
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Laboratories & Further Studies */}
          {(activeView === 'all' || activeView === 'labs') && (
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3">
              {facultyB.labWorkshops && (
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 block mb-1.5">
                    Key Laboratory Work & Practical Facilities
                  </span>
                  <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                    {facultyB.labWorkshops.map(lab => (
                      <li key={lab} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                        <span>{lab}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {facultyB.furtherStudies && (
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 block mb-1.5">
                    Postgraduate & M.Sc. Pathways
                  </span>
                  <div className="flex flex-wrap gap-1 text-[11px] text-slate-600 dark:text-slate-400">
                    {facultyB.furtherStudies.join(' • ')}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

      </div>

      <InfoDisclaimer
        isDark={isDark}
        title="Curriculum & Syllabus Provenance"
        text="All course lists, semester subjects, laboratory descriptions, and overlap percentages are sourced directly from official Tribhuvan University Institute of Engineering (IOE) curriculum syllabi. All B.E. programs are 4-year (8-semester) technical degrees, while Bachelor of Architecture (B.Arch) is a 5-year (10-semester) professional degree accredited by the Nepal Engineering Council."
      />

    </div>
  );
}
