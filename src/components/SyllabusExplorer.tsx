import { useState, useMemo } from 'react';
import { SYLLABUS_DATA } from '../data/syllabusData';
import type { TabId } from './App';

interface SyllabusExplorerProps {
  isDark?: boolean;
  onNavigateTab?: (tab: TabId) => void;
}

export default function SyllabusExplorer({ isDark: _isDark = false, onNavigateTab }: SyllabusExplorerProps) {
  const [activeSubjectId, setActiveSubjectId] = useState<'all' | 'mathematics' | 'physics' | 'chemistry' | 'english'>('mathematics');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter subjects and units based on selected tab and search query
  const displayedSubjects = useMemo(() => {
    let subjects = activeSubjectId === 'all' 
      ? SYLLABUS_DATA 
      : SYLLABUS_DATA.filter(s => s.id === activeSubjectId);

    const q = searchQuery.trim().toLowerCase();
    if (!q) return subjects;

    return subjects.map(subject => {
      const matchingUnits = subject.units.map(unit => {
        const matchesUnitName = unit.unitName.toLowerCase().includes(q);
        const matchingTopics = unit.topics.filter(t => t.toLowerCase().includes(q) || matchesUnitName);
        return {
          ...unit,
          topics: matchesUnitName ? unit.topics : matchingTopics
        };
      }).filter(unit => unit.topics.length > 0);

      return {
        ...subject,
        units: matchingUnits
      };
    }).filter(subject => subject.units.length > 0);
  }, [activeSubjectId, searchQuery]);

  // Overall syllabus stats
  const totalStats = useMemo(() => {
    let totalUnits = 0;
    let totalTopics = 0;
    SYLLABUS_DATA.forEach(sub => {
      totalUnits += sub.units.length;
      sub.units.forEach(u => {
        totalTopics += u.topics.length;
      });
    });
    return { totalUnits, totalTopics };
  }, []);

  return (
    <article className="animate-fadeIn space-y-6 max-w-4xl mx-auto">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="text-[11px] text-slate-500 dark:text-slate-400">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <button 
              type="button"
              onClick={() => onNavigateTab?.('predictor')}
              className="text-blue-700 dark:text-blue-400 hover:underline cursor-pointer"
            >
              IOE Admission Hub
            </button>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="font-semibold text-slate-700 dark:text-slate-200">
            IOE Entrance Syllabus
          </li>
        </ol>
      </nav>

      {/* Minimal Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200/90 dark:border-slate-700">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Tribhuvan University • IOE Entrance Examination
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Entrance Syllabus &amp; Topics
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Official 140-mark CBT curriculum. Clean, concise, and structured strictly by subject and topic.
          </p>
        </div>

        {/* Minimalist Summary Pill */}
        <div className="flex items-center gap-2 self-start sm:self-auto bg-slate-50 dark:bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-200/90 dark:border-slate-700 text-xs">
          <span className="font-semibold text-slate-700 dark:text-slate-200">
            {totalStats.totalUnits} Units
          </span>
          <span className="text-slate-300 dark:text-slate-600">•</span>
          <span className="font-bold text-blue-600 dark:text-blue-400">
            {totalStats.totalTopics} Topics
          </span>
          <span className="text-slate-300 dark:text-slate-600">•</span>
          <span className="text-slate-500 dark:text-slate-400">
            140 Marks
          </span>
        </div>
      </div>

      {/* Subject Filter Tabs */}
      <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700">
        <button
          type="button"
          onClick={() => { setActiveSubjectId('all'); setSearchQuery(''); }}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            activeSubjectId === 'all'
              ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs font-bold'
              : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          All Subjects (140M)
        </button>

        {SYLLABUS_DATA.map(sub => {
          const isActive = activeSubjectId === sub.id;
          return (
            <button
              key={sub.id}
              type="button"
              onClick={() => { setActiveSubjectId(sub.id); setSearchQuery(''); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                isActive
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs font-bold ring-1 ring-slate-200 dark:ring-slate-600'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${sub.theme.indicator}`} />
              <span>{sub.name}</span>
              <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ${sub.theme.badgeBg} ${sub.theme.badgeText}`}>
                {sub.totalMarks}M
              </span>
            </button>
          );
        })}
      </div>

      {/* Search Filter Input Bar */}
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Filter topics (e.g. Calculus, Matrix, Friction, Equilibrium, Optics, Prepositions)..."
          className="w-full text-xs py-2.5 pl-9 pr-8 rounded-xl border border-slate-200/90 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <svg className="w-4 h-4 text-slate-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
          >
            ✕
          </button>
        )}
      </div>

      {/* Main Topics Container */}
      <div className="space-y-8">
        {displayedSubjects.length === 0 ? (
          <div className="text-center py-12 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500">
            <p className="text-sm font-semibold">No syllabus topics matching &ldquo;{searchQuery}&rdquo;</p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="mt-3 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-200 cursor-pointer"
            >
              Clear filter
            </button>
          </div>
        ) : (
          displayedSubjects.map(subject => (
            <section key={subject.id} className="space-y-3.5">
              {/* Subject Title Bar */}
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-100 dark:border-slate-700/60">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${subject.theme.indicator}`} />
                  <h2 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                    {subject.name}
                  </h2>
                  <span className="text-xs text-slate-400 font-medium">({subject.nepaliName})</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${subject.theme.badgeBg} ${subject.theme.badgeText}`}>
                    {subject.totalMarks} Marks • {subject.totalQuestions} Questions
                  </span>
                </div>
              </div>

              {/* Units Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {subject.units.map(unit => (
                  <div 
                    key={unit.id}
                    className="p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:border-slate-300 dark:hover:border-slate-600 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-2.5">
                      {/* Unit Name & Topic Count */}
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 leading-snug">
                          {unit.unitName}
                        </h3>
                        <span className="text-[10px] font-semibold text-slate-400 shrink-0">
                          {unit.topics.length} topics
                        </span>
                      </div>

                      {/* Clean Topic Pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {unit.topics.map(topic => (
                          <span
                            key={topic}
                            className="px-2.5 py-1 rounded-lg text-[11px] leading-tight font-medium bg-slate-50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-200 border border-slate-200/70 dark:border-slate-600/60 hover:border-slate-300 dark:hover:border-slate-400 transition-colors"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))
        )}
      </div>

      {/* Quick Action Navigation Bar */}
      <div className="pt-4 border-t border-slate-200/90 dark:border-slate-700 flex flex-wrap items-center justify-between gap-3 text-xs">
        <p className="text-[11px] text-slate-500 dark:text-slate-400">
          Institute of Engineering (IOE), Tribhuvan University entrance examination curriculum.
        </p>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onNavigateTab?.('calculator')}
            className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:border-blue-400 font-semibold cursor-pointer"
          >
            CBT Marks Calculator →
          </button>
          <button
            type="button"
            onClick={() => onNavigateTab?.('predictor')}
            className="px-3 py-1.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 cursor-pointer"
          >
            Predict Rank →
          </button>
        </div>
      </div>
    </article>
  );
}
