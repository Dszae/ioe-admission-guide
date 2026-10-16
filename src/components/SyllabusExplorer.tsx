import { useState, useMemo, useEffect } from 'react';
import { SYLLABUS_DATA } from '../data/syllabusData';
import type { TabId } from './App';

interface SyllabusExplorerProps {
  isDark?: boolean;
  onNavigateTab?: (tab: TabId) => void;
}

export default function SyllabusExplorer({ onNavigateTab }: SyllabusExplorerProps) {
  const [activeSubjectId, setActiveSubjectId] = useState<'mathematics' | 'physics' | 'chemistry' | 'english'>('mathematics');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedChapterIds, setExpandedChapterIds] = useState<Set<string>>(() => {
    // Expand first two chapters by default for immediate preview
    return new Set(['math-sets-functions', 'math-algebra-complex']);
  });
  const [completedTopicIds, setCompletedTopicIds] = useState<Set<string>>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('ioe_syllabus_completed');
        if (stored) return new Set(JSON.parse(stored));
      } catch {}
    }
    return new Set<string>();
  });
  const [showBlueprintTable, setShowBlueprintTable] = useState(false);

  // Persist completed chapters in localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('ioe_syllabus_completed', JSON.stringify(Array.from(completedTopicIds)));
      } catch {}
    }
  }, [completedTopicIds]);

  const activeSubject = useMemo(() => {
    return SYLLABUS_DATA.find(s => s.id === activeSubjectId) || SYLLABUS_DATA[0];
  }, [activeSubjectId]);

  // Filter chapters based on search query
  const filteredChapters = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return activeSubject.chapters;

    return activeSubject.chapters.filter(chapter => {
      const matchName = chapter.name.toLowerCase().includes(q);
      const matchSub = chapter.subtopics.some(s => s.toLowerCase().includes(q));
      const matchHigh = chapter.highYieldPoints.some(h => h.toLowerCase().includes(q));
      const matchFormula = chapter.formulaFocus.some(f => f.toLowerCase().includes(q));
      const matchQ = chapter.typicalQuestions.toLowerCase().includes(q);
      return matchName || matchSub || matchHigh || matchFormula || matchQ;
    });
  }, [activeSubject, searchQuery]);

  // Overall syllabus completion stats
  const completionStats = useMemo(() => {
    const totalChapters = SYLLABUS_DATA.reduce((acc, sub) => acc + sub.chapters.length, 0);
    const completedCount = completedTopicIds.size;
    const percentage = totalChapters > 0 ? Math.round((completedCount / totalChapters) * 100) : 0;
    
    const subjectCompleted = activeSubject.chapters.filter(c => completedTopicIds.has(c.id)).length;
    const subjectTotal = activeSubject.chapters.length;
    const subjectPercentage = subjectTotal > 0 ? Math.round((subjectCompleted / subjectTotal) * 100) : 0;

    return { totalChapters, completedCount, percentage, subjectCompleted, subjectTotal, subjectPercentage };
  }, [completedTopicIds, activeSubject]);

  const toggleChapter = (chapterId: string) => {
    setExpandedChapterIds(prev => {
      const next = new Set(prev);
      if (next.has(chapterId)) {
        next.delete(chapterId);
      } else {
        next.add(chapterId);
      }
      return next;
    });
  };

  const expandAll = () => {
    const allIds = new Set(activeSubject.chapters.map(c => c.id));
    setExpandedChapterIds(allIds);
  };

  const collapseAll = () => {
    setExpandedChapterIds(new Set());
  };

  const toggleTopicCompleted = (topicId: string) => {
    setCompletedTopicIds(prev => {
      const next = new Set(prev);
      if (next.has(topicId)) {
        next.delete(topicId);
      } else {
        next.add(topicId);
      }
      return next;
    });
  };

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
            IOE Entrance Syllabus &amp; Exam Pattern
          </li>
        </ol>
      </nav>

      {/* Hero Header Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-6 sm:p-8 shadow-sm">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2.5">
            <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-blue-500/20 text-blue-200 border border-blue-400/30">
              Official IOE CBT Syllabus • 2083/084
            </span>
            <span className="text-xs text-blue-200/80 font-medium">
              Tribhuvan University • Institute of Engineering
            </span>
          </div>

          <div className="space-y-1.5">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              IOE Entrance Examination Syllabus &amp; Marking Scheme
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Complete, chapter-wise official curriculum for Tribhuvan University engineering entrance. Review question patterns, high-yield topics, formulas, and track your revision progress.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 text-xs">
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
              <span className="text-[10px] text-blue-200 uppercase tracking-wider block">Full Marks</span>
              <span className="text-base sm:text-lg font-bold text-white">140 Marks</span>
              <span className="text-[10px] text-slate-300 block">56 Pass Mark (40%)</span>
            </div>
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
              <span className="text-[10px] text-blue-200 uppercase tracking-wider block">Total Questions</span>
              <span className="text-base sm:text-lg font-bold text-white">100 MCQs</span>
              <span className="text-[10px] text-slate-300 block">60 Sec A + 40 Sec B</span>
            </div>
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
              <span className="text-[10px] text-blue-200 uppercase tracking-wider block">Exam Duration</span>
              <span className="text-base sm:text-lg font-bold text-white">2 Hours</span>
              <span className="text-[10px] text-slate-300 block">120 Minutes CBT</span>
            </div>
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
              <span className="text-[10px] text-blue-200 uppercase tracking-wider block">Negative Marking</span>
              <span className="text-base sm:text-lg font-bold text-amber-300">-10% Penalty</span>
              <span className="text-[10px] text-slate-300 block">-0.10 / -0.20 per wrong</span>
            </div>
          </div>
        </div>
      </div>

      {/* Blueprint Visual & Table Accordion */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700 shadow-2xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <div>
            <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Marks Distribution Blueprint (140 Total Marks)
            </h2>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Visual proportion of mathematics, physics, chemistry, and English in IOE CBT.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowBlueprintTable(!showBlueprintTable)}
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline self-start sm:self-auto flex items-center gap-1"
          >
            <span>{showBlueprintTable ? 'Hide Table' : 'Show Detailed Section Table'}</span>
            <svg className={`w-3.5 h-3.5 transition-transform ${showBlueprintTable ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Visual Segmented Weightage Bar */}
        <div className="space-y-1.5 pt-1">
          <div className="h-3 w-full rounded-full bg-slate-100 dark:bg-slate-700 flex overflow-hidden p-0.5">
            <div className="bg-blue-600 h-full rounded-l-full transition-all duration-300" style={{ width: '35.7%' }} title="Mathematics: 50 Marks (35.7%)" />
            <div className="bg-violet-600 h-full transition-all duration-300" style={{ width: '32.1%' }} title="Physics: 45 Marks (32.1%)" />
            <div className="bg-emerald-600 h-full transition-all duration-300" style={{ width: '17.9%' }} title="Chemistry: 25 Marks (17.9%)" />
            <div className="bg-amber-500 h-full rounded-r-full transition-all duration-300" style={{ width: '14.3%' }} title="English: 20 Marks (14.3%)" />
          </div>

          <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-600 dark:text-slate-300 gap-2 pt-0.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block" />
              <span className="font-semibold text-slate-800 dark:text-slate-200">Math</span> (50M • 35.7%)
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-violet-600 inline-block" />
              <span className="font-semibold text-slate-800 dark:text-slate-200">Physics</span> (45M • 32.1%)
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block" />
              <span className="font-semibold text-slate-800 dark:text-slate-200">Chemistry</span> (25M • 17.9%)
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
              <span className="font-semibold text-slate-800 dark:text-slate-200">English</span> (20M • 14.3%)
            </div>
          </div>
        </div>

        {/* Detailed Blueprint Table */}
        {showBlueprintTable && (
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 font-semibold">
                  <th className="py-2 pr-3">Subject</th>
                  <th className="py-2 px-3 text-center">Sec A (1 Mark)</th>
                  <th className="py-2 px-3 text-center">Sec B (2 Marks)</th>
                  <th className="py-2 px-3 text-center">Total Qs</th>
                  <th className="py-2 pl-3 text-right">Total Marks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60 font-medium">
                {SYLLABUS_DATA.map(sub => (
                  <tr key={sub.id} className="hover:bg-slate-50/70 dark:hover:bg-slate-700/30">
                    <td className="py-2 pr-3 text-slate-900 dark:text-white font-semibold">
                      {sub.name} <span className="text-[10px] text-slate-400 font-normal">({sub.nepaliName})</span>
                    </td>
                    <td className="py-2 px-3 text-center text-slate-600 dark:text-slate-300">
                      {sub.sectionA.questions} Qs ({sub.sectionA.totalMarks}M)
                    </td>
                    <td className="py-2 px-3 text-center text-slate-600 dark:text-slate-300">
                      {sub.sectionB.questions} Qs ({sub.sectionB.totalMarks}M)
                    </td>
                    <td className="py-2 px-3 text-center text-slate-700 dark:text-slate-200 font-semibold">
                      {sub.totalQuestions} Qs
                    </td>
                    <td className="py-2 pl-3 text-right font-bold text-blue-600 dark:text-blue-400">
                      {sub.totalMarks} Marks
                    </td>
                  </tr>
                ))}
                <tr className="font-bold bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border-t-2 border-slate-200 dark:border-slate-600">
                  <td className="py-2.5 pr-3">Exam Total</td>
                  <td className="py-2.5 px-3 text-center text-blue-700 dark:text-blue-300">60 Qs (60M)</td>
                  <td className="py-2.5 px-3 text-center text-blue-700 dark:text-blue-300">40 Qs (80M)</td>
                  <td className="py-2.5 px-3 text-center">100 Qs</td>
                  <td className="py-2.5 pl-3 text-right text-emerald-600 dark:text-emerald-400">140 Marks</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Subject Navigation Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {SYLLABUS_DATA.map(subject => {
          const isActive = activeSubjectId === subject.id;
          return (
            <button
              key={subject.id}
              type="button"
              onClick={() => {
                setActiveSubjectId(subject.id);
                setSearchQuery('');
              }}
              className={`p-3.5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between group cursor-pointer ${
                isActive
                  ? `${subject.theme.borderLight} ${subject.theme.bgLight} ring-2 ${subject.theme.ringColor} shadow-xs`
                  : 'border-slate-200/90 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {subject.name}
                </span>
                <span className="text-[10px] text-slate-400">
                  {subject.nepaliName}
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${subject.theme.badgeBg} ${subject.theme.badgeText}`}>
                  {subject.totalMarks} Marks
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                  {subject.totalQuestions} Qs
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Subject Strategy & Preparation Tracker Banner */}
      <div className={`p-4 sm:p-5 rounded-2xl border ${activeSubject.theme.borderLight} ${activeSubject.theme.bgLight} space-y-3`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full bg-current ${activeSubject.theme.accentColor}`} />
              {activeSubject.name} Strategy &amp; Revision Progress
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
              {activeSubject.overview}
            </p>
          </div>

          {/* Subject Completion Progress Badge */}
          <div className="shrink-0 flex items-center gap-3 p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700">
            <div className="text-right">
              <p className="text-[10px] uppercase font-bold text-slate-400">Subject Prep</p>
              <p className="text-xs font-bold text-slate-800 dark:text-slate-100">
                {completionStats.subjectCompleted} / {completionStats.subjectTotal} Units
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-xs font-extrabold text-blue-600 dark:text-blue-400">
              {completionStats.subjectPercentage}%
            </div>
          </div>
        </div>

        {/* Strategy Bullets */}
        <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] text-slate-600 dark:text-slate-300">
          {activeSubject.preparationStrategy.map((tip, idx) => (
            <div key={idx} className="flex items-start gap-1.5">
              <span className="text-blue-600 dark:text-blue-400 font-bold shrink-0">✓</span>
              <span>{tip}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Search, Filter & Chapter Expand Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
        <div className="relative flex-1">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search ${activeSubject.name} chapters, formulas, or topics (e.g. Calculus, Carnot, Aldol)...`}
            className="w-full text-xs py-2.5 pl-9 pr-3 rounded-xl border border-slate-200/90 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg className="w-4 h-4 text-slate-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-2.5 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              Clear
            </button>
          )}
        </div>

        <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-auto text-xs">
          <button
            type="button"
            onClick={expandAll}
            className="px-2.5 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Expand All
          </button>
          <button
            type="button"
            onClick={collapseAll}
            className="px-2.5 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Chapter Cards Accordion List */}
      <div className="space-y-3">
        {filteredChapters.length === 0 ? (
          <div className="text-center py-10 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400">
            <p className="text-sm font-semibold">No syllabus topics match &ldquo;{searchQuery}&rdquo;</p>
            <p className="text-xs mt-1">Try searching for other keywords like &ldquo;trigonometry&rdquo;, &ldquo;kinematics&rdquo;, or &ldquo;equilibrium&rdquo;.</p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="mt-3 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-200"
            >
              Reset Search
            </button>
          </div>
        ) : (
          filteredChapters.map((chapter) => {
            const isExpanded = expandedChapterIds.has(chapter.id);
            const isCompleted = completedTopicIds.has(chapter.id);

            return (
              <div 
                key={chapter.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded 
                    ? 'bg-white dark:bg-slate-800/90 border-slate-300 dark:border-slate-600 shadow-2xs' 
                    : 'bg-white/80 dark:bg-slate-800/60 border-slate-200/90 dark:border-slate-700/80 hover:border-slate-300'
                }`}
              >
                {/* Chapter Card Header */}
                <div className="p-4 sm:p-5 flex items-center justify-between gap-3 cursor-pointer select-none" onClick={() => toggleChapter(chapter.id)}>
                  <div className="flex items-center gap-3 min-w-0">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleTopicCompleted(chapter.id);
                      }}
                      title={isCompleted ? 'Mark as pending' : 'Mark unit as prepared'}
                      className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors shrink-0 ${
                        isCompleted
                          ? 'bg-emerald-600 border-emerald-600 text-white'
                          : 'border-slate-300 dark:border-slate-600 hover:border-emerald-500'
                      }`}
                    >
                      {isCompleted && (
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className={`text-sm sm:text-base font-bold tracking-tight ${
                          isCompleted 
                            ? 'line-through text-slate-400 dark:text-slate-500' 
                            : 'text-slate-900 dark:text-white'
                        }`}>
                          {chapter.name}
                        </h4>
                        {chapter.weightageLabel && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300">
                            {chapter.weightageLabel}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                        {chapter.subtopics.length} key syllabus areas • {chapter.highYieldPoints.length} exam focus points
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      aria-label={isExpanded ? 'Collapse chapter details' : 'Expand chapter details'}
                      className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                    >
                      <svg className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Chapter Expanded Body */}
                {isExpanded && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 pt-1 space-y-4 border-t border-slate-100 dark:border-slate-700/80 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    
                    {/* Official Subtopics */}
                    <div className="space-y-1.5">
                      <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Official Curriculum Topics
                      </h5>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2">
                        {chapter.subtopics.map((sub, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                            <span>{sub}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* High-Yield Exam Focus & Traps */}
                    <div className="p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-800/40 space-y-1.5">
                      <h5 className="text-[11px] font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                        High-Yield Exam Focus &amp; Repeated Concepts
                      </h5>
                      <ul className="space-y-1 pl-1 text-[11px] text-amber-950 dark:text-amber-200/90">
                        {chapter.highYieldPoints.map((point, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-amber-600 font-bold shrink-0">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Formulas and Rapid Rules */}
                    {chapter.formulaFocus.length > 0 && (
                      <div className="space-y-1.5">
                        <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          Essential Formulas &amp; Quick Identities
                        </h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {chapter.formulaFocus.map((formula, i) => (
                            <div key={i} className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/80 font-mono text-[11px] text-slate-800 dark:text-slate-200">
                              {formula}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Typical IOE Question Pattern */}
                    {chapter.typicalQuestions && (
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700 text-[11px] text-slate-600 dark:text-slate-300">
                        <span className="font-bold text-slate-900 dark:text-white">Example IOE Question Pattern: </span>
                        {chapter.typicalQuestions}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Sitelinks to Core Tools */}
      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-blue-50/70 via-white to-slate-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 border border-blue-200/80 dark:border-blue-900/60 shadow-2xs space-y-4">
        <div>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Apply Syllabus Knowledge to Exam Tools
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
            Test yourself with the 140-mark CBT calculator, explore 2,040 campus seats, or check rank cutoffs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
          <button
            type="button"
            onClick={() => onNavigateTab?.('calculator')}
            className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-400 text-left transition-colors group cursor-pointer"
          >
            <div className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 flex items-center justify-between">
              <span>CBT Marks Calculator</span>
              <span>→</span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              Calculate Section A &amp; B marks with 10% negative penalty.
            </p>
          </button>

          <button
            type="button"
            onClick={() => onNavigateTab?.('predictor')}
            className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-400 text-left transition-colors group cursor-pointer"
          >
            <div className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 flex items-center justify-between">
              <span>IOE Rank Predictor</span>
              <span>→</span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              Check Pulchowk &amp; constituent cutoffs for your score.
            </p>
          </button>

          <button
            type="button"
            onClick={() => onNavigateTab?.('financials')}
            className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-400 text-left transition-colors group cursor-pointer"
          >
            <div className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 flex items-center justify-between">
              <span>Fee Structure &amp; Costs</span>
              <span>→</span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              Compare 4-year tuition between Regular and Full Fee.
            </p>
          </button>
        </div>
      </div>

      {/* Official Disclaimer */}
      <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed text-center sm:text-left">
        <p>
          <strong>Official Note:</strong> This syllabus is compiled from the authentic Tribhuvan University Institute of Engineering (IOE) Entrance Examination Board guidelines for undergraduate engineering (B.E./B.Arch.) admissions. Always refer to official notifications on <a href="https://entrance.ioe.edu.np" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">entrance.ioe.edu.np</a> for any schedule or procedural updates.
        </p>
      </div>
    </article>
  );
}
