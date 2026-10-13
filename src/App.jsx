import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RankPredictor from './components/RankPredictor';
import CampusExplorer from './components/CampusExplorer';
import NoticeTracker from './components/NoticeTracker';
import PriorityGenerator from './components/PriorityGenerator';
import StudentChecklist from './components/StudentChecklist';
import CBTCalculator from './components/CBTCalculator';
import ScoreEstimator from './components/ScoreEstimator';
import AdmissionGuide from './components/AdmissionGuide';
import FacultyCompare from './components/FacultyCompare';
import AffiliatedColleges from './components/AffiliatedColleges';
import FinancialsBreakdown from './components/FinancialsBreakdown';

const SITE_ORIGIN = 'https://ioe-admission.dipeshsapkota7.com.np';
const TAB_PATHS = {
  predictor: '/predictor/',
  calculator: '/calculator/',
  estimator: '/estimator/',
  campuses: '/campuses/',
  affiliated: '/affiliated/',
  compare: '/compare/',
  priority: '/priority/',
  guide: '/guide/',
  checklist: '/checklist/',
  notices: '/notices/',
  financials: '/financials/'
};
const TAB_SEO = {
  predictor: ['IOE Rank Predictor | IOE Admission Hub', 'Estimate IOE admission probability by merit rank, campus, program, fee category, quota, and merit-list phase using historical closing ranks.'],
  calculator: ['IOE CBT Negative Marking Calculator | IOE Admission Hub', 'Calculate your IOE CBT net score out of 140 with the documented negative-marking rules and pass-threshold reference.'],
  estimator: ['IOE Score-to-Rank Estimator | IOE Admission Hub', 'Estimate an IOE merit-rank bracket from your raw CBT score using historical score-to-rank reference curves.'],
  campuses: ['IOE Campuses and Seat Matrix | IOE Admission Hub', 'Explore Pulchowk, Thapathali, WRC, ERC, and Chitwan Engineering Campus programs, facilities, and seat capacities.'],
  affiliated: ['TU-Affiliated Engineering Colleges | IOE Admission Hub', 'Search TU-affiliated private engineering colleges, locations, programs, fee ranges, and reference cutoffs.'],
  compare: ['Compare IOE Engineering Disciplines | IOE Admission Hub', 'Compare IOE engineering disciplines by curriculum overlap, technical domains, and career outcomes.'],
  priority: ['IOE Priority Form Optimizer | IOE Admission Hub', 'Generate a balanced Reach, Target, and Safety preference sequence for IOE counseling from your merit rank.'],
  guide: ['IOE Admission Guide and Counseling Handbook | IOE Admission Hub', 'Read the IOE admission roadmap, merit-list rounds, auto-upgrade rules, seat deposits, and document guidance.'],
  checklist: ['IOE Admission Checklist | IOE Admission Hub', 'Track the IOE admission process from CBT registration through document verification with a private progress checklist.'],
  notices: ['IOE Admission Notices and Circulars | IOE Admission Hub', 'Search IOE entrance notices, circulars, quota documents, merit lists, and campus admission updates.'],
  financials: ['IOE Engineering Fees and Living Costs | IOE Admission Hub', 'Compare four-year tuition and estimated living costs across Regular, Full Fee, and affiliated engineering paths.']
};

export default function App() {
  const isDark = false;

  // Keep the document in the single supported light theme.
  useEffect(() => {
    try {
      const root = document.documentElement;
      const themeColorMeta = document.querySelector('meta[name="theme-color"]');
      root.classList.remove('dark');
      document.body.classList.remove('dark');
      root.style.colorScheme = 'light';
      if (themeColorMeta) themeColorMeta.setAttribute('content', '#1e40af');
      localStorage.removeItem('theme');
    } catch {}
  }, []);
  
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
      const pathTab = Object.entries(TAB_PATHS).find(([, path]) => path !== '/' && window.location.pathname === path)?.[0];
      if (pathTab) return pathTab;
    } catch {}
    return 'predictor';
  });

  const [estimatorPreScore, setEstimatorPreScore] = useState('');

  // Sync tab change with URL query parameter for shareable sitelinks
  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      if (activeTab === 'predictor' && url.pathname === '/') return;
      url.pathname = TAB_PATHS[activeTab] || TAB_PATHS.predictor;
      url.search = '';
      window.history.replaceState({}, '', `${url.pathname}${url.hash}`);
    } catch {}
  }, [activeTab]);

  useEffect(() => {
    const [title, description] = TAB_SEO[activeTab] || TAB_SEO.predictor;
    const isHomepage = activeTab === 'predictor' && window.location.pathname === '/';
    const tabUrl = `${SITE_ORIGIN}${isHomepage ? '/' : (TAB_PATHS[activeTab] || TAB_PATHS.predictor)}`;
    const setMeta = (selector, value) => {
      const element = document.querySelector(selector);
      if (element) element.setAttribute('content', value);
    };

    document.title = title;
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', tabUrl);
    setMeta('meta[property="twitter:title"]', title);
    setMeta('meta[property="twitter:description"]', description);
    setMeta('meta[property="twitter:url"]', tabUrl);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', tabUrl);
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
          </main>
        </div>

      </div>

      {/* Footer */}
      <Footer isDark={isDark} showOfficialPortals={activeTab === 'predictor'} />

    </div>
  );
}