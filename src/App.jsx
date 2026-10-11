import React, { useState, useEffect, lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RankPredictor from './components/RankPredictor';

// Code-split secondary modules for optimal initial bundle
const CampusExplorer = lazy(() => import('./components/CampusExplorer'));
const NoticeTracker = lazy(() => import('./components/NoticeTracker'));
const PriorityGenerator = lazy(() => import('./components/PriorityGenerator'));
const StudentChecklist = lazy(() => import('./components/StudentChecklist'));
const CBTCalculator = lazy(() => import('./components/CBTCalculator'));
const ScoreEstimator = lazy(() => import('./components/ScoreEstimator'));
const AdmissionGuide = lazy(() => import('./components/AdmissionGuide'));
const FacultyCompare = lazy(() => import('./components/FacultyCompare'));
const AffiliatedColleges = lazy(() => import('./components/AffiliatedColleges'));
const FinancialsBreakdown = lazy(() => import('./components/FinancialsBreakdown'));

function TabLoadingSkeleton() {
  return (
    <div className="py-12 px-4 text-center animate-pulse" role="status" aria-label="Loading section">
      <div className="h-4 w-36 bg-slate-200 dark:bg-slate-800 rounded mx-auto mb-2.5"></div>
      <div className="h-3 w-56 bg-slate-100 dark:bg-slate-850 rounded mx-auto mb-6"></div>
      <div className="grid sm:grid-cols-2 gap-3 max-w-lg mx-auto">
        <div className="h-24 bg-slate-100 dark:bg-slate-800/50 rounded-lg"></div>
        <div className="h-24 bg-slate-100 dark:bg-slate-800/50 rounded-lg"></div>
      </div>
      <span className="sr-only">Loading section content...</span>
    </div>
  );
}

const CATEGORIES = [
  {
    id: 'rank-tools',
    label: 'Rank & Odds',
    icon: (
      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    subTabs: [
      { id: 'predictor', label: 'Rank Predictor' },
      { id: 'calculator', label: 'CBT Calculator' },
      { id: 'estimator', label: 'Score Curve' }
    ]
  },
  {
    id: 'campus-tools',
    label: 'Campuses & Seats',
    icon: (
      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    subTabs: [
      { id: 'campuses', label: 'Constituent (2,040 Seats)' },
      { id: 'affiliated', label: 'Affiliated Colleges' },
      { id: 'compare', label: 'Compare Disciplines' }
    ]
  },
  {
    id: 'priority',
    label: 'Priority Planner',
    icon: (
      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    subTabs: [
      { id: 'priority', label: 'Priority Optimizer' }
    ]
  },
  {
    id: 'guide-tools',
    label: 'Admissions Guide',
    icon: (
      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    subTabs: [
      { id: 'guide', label: 'Counseling Handbook' },
      { id: 'checklist', label: 'Action Checklist' },
      { id: 'notices', label: 'Official Notices' },
      { id: 'financials', label: 'Fee Breakdown' }
    ]
  }
];

export default function App() {
  const [isDark, setIsDark] = useState(false);
  
  // Read initial tab from URL parameter for search sitelink compatibility
  const [activeTab, setActiveTab] = useState(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const tabParam = urlParams.get('tab');
      const validTabs = [
        'predictor', 'calculator', 'estimator', 
        'campuses', 'affiliated', 'compare', 
        'priority', 
        'guide', 'checklist', 'notices', 'financials'
      ];
      if (tabParam && validTabs.includes(tabParam)) {
        return tabParam;
      }
    } catch {}
    return 'predictor';
  });

  const [estimatorPreScore, setEstimatorPreScore] = useState('');

  // Sync tab change with URL query parameter for shareable sitelinks
  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      if (activeTab === 'predictor') {
        url.searchParams.delete('tab');
      } else {
        url.searchParams.set('tab', activeTab);
      }
      window.history.replaceState({}, '', url.toString());
    } catch {}
  }, [activeTab]);

  const handleSendToEstimator = (score) => {
    setEstimatorPreScore(score);
    setActiveTab('estimator');
  };

  // Find active category based on activeTab
  const currentCategory = CATEGORIES.find(cat => 
    cat.subTabs.some(sub => sub.id === activeTab)
  ) || CATEGORIES[0];

  const handleCategorySelect = (category) => {
    const hasCurrent = category.subTabs.some(sub => sub.id === activeTab);
    if (!hasCurrent) {
      setActiveTab(category.subTabs[0].id);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-between transition-colors duration-200 ${
      isDark ? 'dark bg-[#0b0e17] text-slate-100' : 'bg-[#f8fafc] text-slate-800'
    } pt-20 sm:pt-24 lg:pt-28 px-3 sm:px-6 lg:px-8 pb-8 sm:pb-12 font-sans print:bg-white print:text-black print:p-0`}>

      {/* Fixed Navbar at Top */}
      <Header 
        isDark={isDark} 
        setIsDark={setIsDark} 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Container */}
      <div className="w-full max-w-5xl relative z-10 flex-1 flex flex-col mt-2 sm:mt-4">
        
        {/* Navigation Bar */}
        <nav 
          aria-label="Portal Navigation"
          className="w-full mb-3 sm:mb-5 print:hidden"
        >
          {/* Primary Category Tabs: scrollable on mobile, flex-1 on tablet/desktop */}
          <div className="flex gap-1 sm:gap-2 overflow-x-auto no-scrollbar p-1 bg-white dark:bg-[#131620] border border-slate-200/90 dark:border-slate-800 rounded-xl shadow-2xs">
            {CATEGORIES.map((cat) => {
              const isSelected = currentCategory.id === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat)}
                  aria-current={isSelected ? 'page' : undefined}
                  className={`flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 sm:flex-1 min-h-[40px] sm:min-h-[44px] ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-2xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <span className={isSelected ? 'text-white' : 'text-slate-400 dark:text-slate-500'}>
                    {cat.icon}
                  </span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Secondary Sub-Pills */}
          {currentCategory.subTabs.length > 1 && (
            <div 
              role="tablist" 
              aria-label={`${currentCategory.label} sub-tools`}
              className="flex gap-1.5 overflow-x-auto no-scrollbar mt-1.5 sm:mt-2 px-0.5 py-0.5"
            >
              {currentCategory.subTabs.map((sub) => {
                const isSubActive = activeTab === sub.id;
                return (
                  <button
                    key={sub.id}
                    role="tab"
                    aria-selected={isSubActive}
                    onClick={() => setActiveTab(sub.id)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all whitespace-nowrap shrink-0 min-h-[34px] flex items-center ${
                      isSubActive
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold shadow-2xs'
                        : 'bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    {sub.label}
                  </button>
                );
              })}
            </div>
          )}
        </nav>

        {/* Card Surface for Content */}
        <div className={`w-full rounded-xl sm:rounded-2xl border transition-colors duration-200 p-3.5 sm:p-7 lg:p-8 print:border-none print:shadow-none print:bg-transparent print:p-0 ${
          isDark 
            ? 'bg-[#131620] border-slate-800/90 shadow-2xs' 
            : 'bg-white border-slate-200/90 shadow-2xs'
        }`}>
          <main id="main-content" tabIndex="-1" className="min-w-0 focus:outline-none">
            {activeTab === 'predictor' && <RankPredictor isDark={isDark} onNavigateTab={setActiveTab} />}
            
            <Suspense fallback={<TabLoadingSkeleton />}>
              {activeTab === 'campuses' && <CampusExplorer isDark={isDark} onNavigateTab={setActiveTab} />}
              {activeTab === 'notices' && <NoticeTracker isDark={isDark} />}
              {activeTab === 'priority' && <PriorityGenerator isDark={isDark} onNavigateTab={setActiveTab} />}
              {activeTab === 'checklist' && <StudentChecklist isDark={isDark} />}
              {activeTab === 'calculator' && <CBTCalculator isDark={isDark} onSendToEstimator={handleSendToEstimator} onNavigateTab={setActiveTab} />}
              {activeTab === 'estimator' && <ScoreEstimator isDark={isDark} initialScore={estimatorPreScore} onNavigateTab={setActiveTab} />}
              {activeTab === 'guide' && <AdmissionGuide isDark={isDark} onNavigateTab={setActiveTab} />}
              {activeTab === 'compare' && <FacultyCompare isDark={isDark} />}
              {activeTab === 'affiliated' && <AffiliatedColleges isDark={isDark} />}
              {activeTab === 'financials' && <FinancialsBreakdown isDark={isDark} onNavigateTab={setActiveTab} />}
            </Suspense>
          </main>
        </div>

      </div>

      {/* Footer */}
      <Footer isDark={isDark} />

    </div>
  );
}