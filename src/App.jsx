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
      <div className="h-4 w-36 bg-slate-200 dark:bg-slate-700 rounded mx-auto mb-2.5"></div>
      <div className="h-3 w-56 bg-slate-100 dark:bg-slate-700 rounded mx-auto mb-6"></div>
      <div className="grid sm:grid-cols-2 gap-3 max-w-lg mx-auto">
        <div className="h-24 bg-slate-100 dark:bg-slate-700/60 rounded-lg"></div>
        <div className="h-24 bg-slate-100 dark:bg-slate-700/60 rounded-lg"></div>
      </div>
      <span className="sr-only">Loading section content...</span>
    </div>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return false; // Default to light theme
    } catch {
      return false;
    }
  });

  // Sync dark class on document root, body, color-scheme, and storage
  useEffect(() => {
    try {
      const root = document.documentElement;
      const themeColorMeta = document.querySelector('meta[name="theme-color"]');
      if (isDark) {
        root.classList.add('dark');
        document.body.classList.add('dark');
        root.style.colorScheme = 'dark';
        if (themeColorMeta) themeColorMeta.setAttribute('content', '#0f172a');
        localStorage.setItem('theme', 'dark');
      } else {
        root.classList.remove('dark');
        document.body.classList.remove('dark');
        root.style.colorScheme = 'light';
        if (themeColorMeta) themeColorMeta.setAttribute('content', '#1e40af');
        localStorage.setItem('theme', 'light');
      }
    } catch {}
  }, [isDark]);
  
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

  return (
    <div className={`min-h-screen flex flex-col items-center justify-between transition-colors duration-200 ${
      isDark ? 'dark bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-800'
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

        {/* Card Surface for Content */}
        <div className={`w-full rounded-xl sm:rounded-2xl border transition-colors duration-200 p-3.5 sm:p-7 lg:p-8 print:border-none print:shadow-none print:bg-transparent print:p-0 ${
          isDark 
            ? 'bg-slate-800 border-slate-600 shadow-sm' 
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
      <Footer isDark={isDark} showOfficialPortals={activeTab === 'predictor'} />

    </div>
  );
}