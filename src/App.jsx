import React, { useState, lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RankPredictor from './components/RankPredictor';

// Code-split secondary modules to eliminate unused initial JavaScript
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
    <div className="p-8 text-center animate-pulse" role="status" aria-label="Loading module content">
      <div className="h-6 w-48 bg-slate-200 dark:bg-slate-800 rounded-lg mx-auto mb-4"></div>
      <div className="h-4 w-72 bg-slate-200 dark:bg-slate-800 rounded mx-auto mb-8"></div>
      <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
        <div className="h-24 bg-slate-100 dark:bg-slate-800/60 rounded-xl"></div>
        <div className="h-24 bg-slate-100 dark:bg-slate-800/60 rounded-xl"></div>
      </div>
      <span className="sr-only">Loading module content...</span>
    </div>
  );
}

const TABS = [
  { 
    id: 'predictor', 
    label: 'Rank Predictor', 
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  { 
    id: 'campuses', 
    label: 'Campus Explorer', 
    badge: '2040 Seats',
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  { 
    id: 'notices', 
    label: 'Official Notices', 
    badge: 'Live',
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    )
  },
  { 
    id: 'priority', 
    label: 'Priority Sequence', 
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  },
  { 
    id: 'checklist', 
    label: 'Admission Checklist', 
    badge: 'Planner',
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  { 
    id: 'calculator', 
    label: 'CBT Negative Calc', 
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  { 
    id: 'estimator', 
    label: 'Score-to-Rank Curve', 
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  { 
    id: 'guide', 
    label: 'Admission Guide', 
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  { 
    id: 'compare', 
    label: 'Faculty Comparator', 
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    )
  },
  { 
    id: 'affiliated', 
    label: 'Affiliated Colleges', 
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    )
  },
  { 
    id: 'financials', 
    label: 'Financial Breakdown', 
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [activeTab, setActiveTab] = useState('predictor');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [estimatorPreScore, setEstimatorPreScore] = useState('');

  const handleSendToEstimator = (score) => {
    setEstimatorPreScore(score);
    setActiveTab('estimator');
  };

  const currentTab = TABS.find(t => t.id === activeTab) || TABS[0];

  return (
    <div className={`min-h-screen relative flex flex-col items-center justify-between transition-colors duration-300 ${
      isDark ? 'dark bg-[#0a0a0c] text-slate-100' : 'bg-slate-50 text-slate-800'
    } p-3 sm:p-6 lg:p-8 overflow-x-hidden font-sans print:bg-white print:text-black print:p-0`}>
      
      {/* Background Watermark (Verified Asset) */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden print:hidden" aria-hidden="true">
        <img 
          src="/ioe-logo.png" 
          alt="" 
          className={`w-[120%] sm:w-[70%] max-w-2xl object-contain transition-opacity duration-500 ${
            isDark ? 'opacity-[0.02]' : 'opacity-[0.04]'
          }`}
          onError={(e) => {
            e.currentTarget.src = "/ioe logo.png";
          }}
        />
      </div>

      {/* Accessible Header */}
      <Header isDark={isDark} setIsDark={setIsDark} />

      {/* Main Application Container */}
      <div className="w-full max-w-6xl relative z-10 flex-1 flex flex-col">
        
        <div className={`w-full rounded-2xl sm:rounded-3xl border transition-colors duration-300 flex flex-col md:flex-row overflow-hidden print:border-none print:shadow-none print:bg-transparent print:p-0 print:block shadow-sm ${
          isDark ? 'bg-[#121216]/90 border-slate-800 shadow-xl' : 'bg-white/95 border-slate-200 shadow-md'
        }`}>
          
          {/* Mobile Tab Header Bar */}
          <div className="md:hidden flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-800 print:hidden">
            <div className="flex items-center gap-2">
              <span className="text-cyan-600 dark:text-cyan-400">{currentTab.icon}</span>
              <span className="font-extrabold text-sm text-slate-900 dark:text-white">
                {currentTab.label}
              </span>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              aria-label="Toggle navigation tabs"
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              {isMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>

          {/* Navigation Sidebar */}
          <nav 
            id="mobile-nav"
            aria-label="Application Modules"
            className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col w-full md:w-72 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/20 print:hidden flex-shrink-0`}
          >
            <div className="p-3 sm:p-4 flex flex-col gap-1">
              <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 hidden md:block">
                Navigation Modules
              </div>
              {TABS.map(tab => {
                const isActive = activeTab === tab.id;
                return (
                  <button 
                    key={tab.id} 
                    onClick={() => { 
                      setActiveTab(tab.id); 
                      setIsMenuOpen(false); 
                    }} 
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-bold transition-all text-left ${
                      isActive 
                        ? 'bg-cyan-600 text-white shadow-md' 
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={isActive ? 'text-white' : 'text-slate-500 dark:text-slate-400'}>
                        {tab.icon}
                      </span>
                      <span>{tab.label}</span>
                    </div>

                    {tab.badge && (
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                        isActive 
                          ? 'bg-white/20 text-white' 
                          : 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20'
                      }`}>
                        {tab.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Main Content Area */}
          <main id="main-content" tabIndex="-1" className="flex-1 p-5 sm:p-8 lg:p-10 min-w-0 focus:outline-none">
            {activeTab === 'predictor' ? (
              <RankPredictor isDark={isDark} />
            ) : (
              <Suspense fallback={<TabLoadingSkeleton />}>
                {activeTab === 'campuses' && <CampusExplorer isDark={isDark} />}
                {activeTab === 'notices' && <NoticeTracker isDark={isDark} />}
                {activeTab === 'priority' && <PriorityGenerator isDark={isDark} />}
                {activeTab === 'checklist' && <StudentChecklist isDark={isDark} />}
                {activeTab === 'calculator' && <CBTCalculator isDark={isDark} onSendToEstimator={handleSendToEstimator} />}
                {activeTab === 'estimator' && <ScoreEstimator isDark={isDark} initialScore={estimatorPreScore} />}
                {activeTab === 'guide' && <AdmissionGuide isDark={isDark} />}
                {activeTab === 'compare' && <FacultyCompare isDark={isDark} />}
                {activeTab === 'affiliated' && <AffiliatedColleges isDark={isDark} />}
                {activeTab === 'financials' && <FinancialsBreakdown isDark={isDark} />}
              </Suspense>
            )}
          </main>

        </div>

      </div>

      {/* Accessible Footer */}
      <Footer isDark={isDark} />

    </div>
  );
}