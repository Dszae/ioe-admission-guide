import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import RankPredictor from './RankPredictor';
import CampusExplorer from './CampusExplorer';
import NoticeTracker from './NoticeTracker';
import PriorityGenerator from './PriorityGenerator';
import StudentChecklist from './StudentChecklist';
import CBTCalculator from './CBTCalculator';
import ScoreEstimator from './ScoreEstimator';
import AdmissionGuide from './AdmissionGuide';
import FacultyCompare from './FacultyCompare';
import AffiliatedColleges from './AffiliatedColleges';
import FinancialsBreakdown from './FinancialsBreakdown';

export type TabId = 
  | 'predictor'
  | 'profile'
  | 'calculator'
  | 'estimator'
  | 'campuses'
  | 'affiliated'
  | 'compare'
  | 'priority'
  | 'guide'
  | 'checklist'
  | 'notices'
  | 'financials';

const SITE_ORIGIN = 'https://ioe-admission.dipeshsapkota7.com.np';

const TAB_PATHS: Record<TabId, string> = {
  predictor: '/predictor/',
  profile: '/profile/',
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

const TAB_SEO: Record<TabId, [string, string]> = {
  predictor: ['IOE Rank Predictor & Historical Cutoffs | IOE Admission Hub', 'Compare IOE entrance merit ranks with official historical closing ranks by campus, program, fee category, and quota on IOE Admission Hub.'],
  profile: ['Dipesh Sapkota | Creator of IOE Admission Hub', 'Learn about Dipesh Sapkota, the creator and builder of IOE Admission Hub, an independent entrance guide and rank intelligence platform in Nepal.'],
  calculator: ['IOE CBT Score Calculator (Negative Marking) | IOE Admission Hub', 'Calculate IOE CBT marks, duration, 40% pass threshold, and exact 10% negative-marking penalty rules on IOE Admission Hub.'],
  estimator: ['IOE Score-to-Rank Estimator & Merit Curves | IOE Admission Hub', 'Estimate historical IOE entrance merit-rank brackets from raw CBT exam scores using benchmark percentile curves on IOE Admission Hub.'],
  campuses: ['IOE Constituent Campuses & 2,040 Seat Matrix | IOE Admission Hub', 'IOE constituent campus profiles, programs, facilities, and 2,040 seat matrix capacities for Pulchowk, Thapathali, WRC, ERC, and Chitwan.'],
  affiliated: ['TU-Affiliated Engineering Colleges Directory & Fees | IOE Admission Hub', 'Comprehensive reference directory and fee comparisons for 10 TU-affiliated private engineering colleges in Nepal.'],
  compare: ['Compare IOE Engineering Disciplines & Career Scope | IOE Admission Hub', 'Compare IOE engineering discipline focus areas, curriculum overlap, and industry career directions on IOE Admission Hub.'],
  priority: ['IOE Priority Form Optimizer & Counseling Strategy | IOE Admission Hub', 'Build an algorithmic Reach, Target, and Safety IOE counseling preference sequence using historical cutoff data on IOE Admission Hub.'],
  guide: ['IOE Admission Guide & Counseling Handbook (2083/084) | IOE Admission Hub', 'Comprehensive IOE counseling handbook: merit-list rounds, auto-upgrade rules, physical document verification, and affirmative action quotas.'],
  checklist: ['IOE Admission Checklist & Document Verification | IOE Admission Hub', 'Track the complete IOE admission process from CBT registration through document verification with an interactive checklist.'],
  notices: ['IOE Admission Notices, Quota Circulars & Merit Lists | IOE Admission Hub', 'Browse authentic and source-linked IOE entrance and admission notices, circulars, and campus merit lists.'],
  financials: ['IOE Engineering Tuition Fees & Living Costs Breakdown | IOE Admission Hub', 'Compare 4-year tuition costs between IOE Regular and Full Fee schemes, hostel expenses, and living cost estimates on IOE Admission Hub.']
};

const TAB_LABELS: Record<TabId, string> = {
  predictor: 'Rank Predictor',
  profile: 'Profile',
  calculator: 'CBT Calculator',
  estimator: 'Score-to-Rank Estimator',
  campuses: 'Campuses and Seat Matrix',
  affiliated: 'Affiliated Colleges',
  compare: 'Compare Disciplines',
  priority: 'Priority Optimizer',
  guide: 'Admission Guide',
  checklist: 'Admission Checklist',
  notices: 'Admission Notices',
  financials: 'Fees and Living Costs'
};

interface AppProps {
  initialTab?: TabId;
}

export default function App({ initialTab = 'predictor' }: AppProps) {
  const isDark = false;

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

  const [activeTab, setActiveTab] = useState<TabId>(() => {
    if (typeof window !== 'undefined') {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const tabParam = urlParams.get('tab') as TabId;
        const validTabs: TabId[] = [
          'predictor', 'profile', 'calculator', 'estimator', 
          'campuses', 'affiliated', 'compare', 
          'priority', 
          'guide', 'checklist', 'notices', 'financials'
        ];
        if (tabParam && validTabs.includes(tabParam)) {
          return tabParam;
        }
        const pathname = window.location.pathname;
        const pathTab = (Object.entries(TAB_PATHS) as [TabId, string][]).find(
          ([, path]) => path !== '/' && pathname === path
        )?.[0];
        if (pathTab) return pathTab;
      } catch {}
    }
    return initialTab;
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

  // Scroll window to top whenever active section changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      } catch {
        window.scrollTo(0, 0);
      }
    }
  }, [activeTab]);

  useEffect(() => {
    const isHomepage = activeTab === 'predictor' && (typeof window !== 'undefined' && window.location.pathname === '/');
    const [tabTitle, tabDesc] = TAB_SEO[activeTab] || TAB_SEO.predictor;
    const title = isHomepage
      ? 'IOE Admission Hub | Central IOE Admission Guide, Rank Predictor & CBT Calculator'
      : tabTitle;
    const description = isHomepage
      ? 'IOE Admission Hub: the premier central admission portal for Tribhuvan University Institute of Engineering (IOE) applicants in Nepal. Predict entrance ranks, explore 2,040 constituent seats, calculate CBT negative marking scores, and optimize counseling priority.'
      : tabDesc;
    const tabUrl = `${SITE_ORIGIN}${isHomepage ? '/' : (TAB_PATHS[activeTab] || TAB_PATHS.predictor)}`;
    const setMeta = (selector: string, value: string) => {
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

  const handleSendToEstimator = (score: string | number) => {
    setEstimatorPreScore(String(score));
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
          <main id="main-content" tabIndex={-1} className="min-w-0 focus:outline-none">
            {activeTab === 'predictor' && <RankPredictor isDark={isDark} onNavigateTab={setActiveTab} />}
            {activeTab === 'profile' && (
              <article className="animate-fadeIn space-y-7 max-w-3xl mx-auto">
                <nav aria-label="Breadcrumb" className="text-[11px] text-slate-500 dark:text-slate-400">
                  <ol className="flex flex-wrap items-center gap-1.5">
                    <li><a href="/" className="text-blue-700 dark:text-blue-400 hover:underline">IOE Admission Hub</a></li>
                    <li aria-hidden="true">/</li>
                    <li aria-current="page" className="font-semibold text-slate-700 dark:text-slate-200">Dipesh Sapkota</li>
                  </ol>
                </nav>
                {/* Hero Profile Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-50 via-white to-blue-50/40 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 border border-slate-200/90 dark:border-slate-700 shadow-2xs flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 sm:gap-6">
                  <div className="group relative shrink-0">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-white dark:border-slate-700 shadow-md ring-4 ring-blue-500/10 relative">
                      <img
                        src="/dipesh-sapkota-profile.webp"
                        alt="Dipesh Sapkota"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      {/* Interactive Social Links Overlay on Photo Hover */}
                      <div 
                        className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-2"
                        aria-label="Direct Social Links"
                      >
                        <span className="text-[9px] uppercase tracking-wider font-bold text-blue-300 mb-1.5 select-none pointer-events-none">Connect</span>
                        <div className="grid grid-cols-2 gap-1.5">
                          {/* Personal Website */}
                          <a
                            href="https://www.dipeshsapkota7.com.np/"
                            target="_blank"
                            rel="noopener noreferrer home author"
                            title="Personal Website"
                            aria-label="Dipesh Sapkota Personal Website"
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/15 hover:bg-white text-white hover:text-blue-600 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                          >
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <circle cx="12" cy="12" r="10" strokeWidth="2" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                            </svg>
                          </a>
                          {/* GitHub */}
                          <a
                            href="https://github.com/Dszae"
                            target="_blank"
                            rel="noopener noreferrer me"
                            title="GitHub (@Dszae)"
                            aria-label="GitHub Profile"
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/15 hover:bg-white text-white hover:text-slate-900 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                          >
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                            </svg>
                          </a>
                          {/* LinkedIn */}
                          <a
                            href="https://www.linkedin.com/in/dipesh-sapkota/"
                            target="_blank"
                            rel="noopener noreferrer me"
                            title="LinkedIn"
                            aria-label="LinkedIn Profile"
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/15 hover:bg-white text-white hover:text-[#0077b5] flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                          >
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                            </svg>
                          </a>
                          {/* Instagram */}
                          <a
                            href="https://instagram.com/dsz.ae"
                            target="_blank"
                            rel="noopener noreferrer me"
                            title="Instagram (@dsz.ae)"
                            aria-label="Instagram Profile"
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/15 hover:bg-white text-white hover:text-pink-600 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                          >
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-blue-600 border-2 border-white dark:border-slate-800 flex items-center justify-center text-white text-[10px] z-10 shadow-xs transition-transform duration-200 group-hover:scale-110" title="Creator verified">
                      ✓
                    </span>
                  </div>
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                      <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Dipesh Sapkota
                      </h1>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-200 border border-blue-200 dark:border-blue-700">
                        Creator & Builder
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">
                      Creator of IOE Admission Hub
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center sm:justify-start gap-1.5 pt-0.5">
                      <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Kathmandu, Nepal</span>
                    </p>
                  </div>
                </div>

                {/* First-Person Bio */}
                <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-800/60 p-5 sm:p-7 rounded-2xl border border-slate-200/90 dark:border-slate-700">
                  <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    Why I Built IOE Admission Hub
                  </h2>
                  <p>
                    When preparing for and navigating the Institute of Engineering (IOE) entrance admissions under Tribhuvan University, I experienced first-hand how fragmented, confusing, and stressful the whole journey could be. Critical information — such as past cutoff ranks, how negative marking actually reduces net scores, how campus seat quotas are distributed, and how auto-upgrade counseling works — was scattered across buried notices and unofficial social media groups.
                  </p>
                  <p>
                    I built <strong>IOE Admission Hub</strong> to fix that. My mission was to create a single, clean, fast, and completely free platform where any applicant can calculate their CBT score with official negative marking rules, explore seat matrices across all 5 constituent campuses, and make confident, informed counseling decisions.
                  </p>
                  <p>
                    This is an independent, non-commercial initiative built for high school graduates and engineering aspirants across Nepal. Every tool, calculation formula, and historical dataset on this site is maintained with care and transparency.
                  </p>
                </div>

                {/* Sitelinks to Core Tools */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      Explore the Tools I Created
                    </h2>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">Direct Sitelinks</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
                    <a
                      href="/"
                      onClick={(e) => { e.preventDefault(); setActiveTab('predictor'); }}
                      className="p-3.5 rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/30 hover:bg-blue-100/70 dark:hover:bg-blue-900/40 transition-colors group flex flex-col justify-between"
                    >
                      <div className="font-semibold text-blue-900 dark:text-blue-200 group-hover:text-blue-700 dark:group-hover:text-blue-100 flex items-center justify-between">
                        <span>IOE Admission Hub Home</span>
                        <span aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform">→</span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1">
                        Mainpage & IOE merit rank predictor tool.
                      </p>
                    </a>

                    <a
                      href="/calculator/"
                      onClick={(e) => { e.preventDefault(); setActiveTab('calculator'); }}
                      className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-400 dark:hover:border-blue-500 transition-colors group flex flex-col justify-between"
                    >
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-between">
                        <span>CBT Score Calculator</span>
                        <span aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform">→</span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1">
                        Exact 10% negative marking penalty calculator.
                      </p>
                    </a>

                    <a
                      href="/campuses/"
                      onClick={(e) => { e.preventDefault(); setActiveTab('campuses'); }}
                      className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-400 dark:hover:border-blue-500 transition-colors group flex flex-col justify-between"
                    >
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-between">
                        <span>Campuses & Seat Matrix</span>
                        <span aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform">→</span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1">
                        All 2,040 constituent campus seats and programs.
                      </p>
                    </a>

                    <a
                      href="/priority/"
                      onClick={(e) => { e.preventDefault(); setActiveTab('priority'); }}
                      className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-400 dark:hover:border-blue-500 transition-colors group flex flex-col justify-between"
                    >
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-between">
                        <span>Priority Optimizer</span>
                        <span aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform">→</span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1">
                        Build Reach, Target, and Safety counseling preferences.
                      </p>
                    </a>

                    <a
                      href="/estimator/"
                      onClick={(e) => { e.preventDefault(); setActiveTab('estimator'); }}
                      className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-400 dark:hover:border-blue-500 transition-colors group flex flex-col justify-between"
                    >
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-between">
                        <span>Score-to-Rank Curve</span>
                        <span aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform">→</span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1">
                        Map CBT scores to empirical rank brackets.
                      </p>
                    </a>

                    <a
                      href="/guide/"
                      onClick={(e) => { e.preventDefault(); setActiveTab('guide'); }}
                      className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-400 dark:hover:border-blue-500 transition-colors group flex flex-col justify-between"
                    >
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-between">
                        <span>Admission Guide</span>
                        <span aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform">→</span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1">
                        Counseling roadmap, auto-upgrades, and documents.
                      </p>
                    </a>
                  </div>
                </div>

                {/* Social Links at Bottom (Icons Only) */}
                <div className="pt-2 border-t border-slate-200/90 dark:border-slate-700">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                    <div className="text-center sm:text-left">
                      <p className="text-xs font-semibold text-slate-900 dark:text-white">Connect with Dipesh</p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">Personal links & profiles</p>
                    </div>

                    {/* Icons Only Social Links */}
                    <div className="flex items-center gap-2" aria-label="Dipesh Sapkota social profiles">
                      {/* Personal Website */}
                      <a
                        href="https://www.dipeshsapkota7.com.np/"
                        target="_blank"
                        rel="noopener noreferrer home author"
                        title="Personal Website"
                        aria-label="Dipesh Sapkota Personal Website"
                        className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-500 transition-all shadow-2xs hover:scale-105"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <circle cx="12" cy="12" r="10" strokeWidth="2" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                        </svg>
                      </a>

                      {/* GitHub */}
                      <a
                        href="https://github.com/Dszae"
                        target="_blank"
                        rel="noopener noreferrer me"
                        title="GitHub (@Dszae)"
                        aria-label="GitHub Profile"
                        className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white hover:border-slate-400 transition-all shadow-2xs hover:scale-105"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </a>

                      {/* LinkedIn */}
                      <a
                        href="https://www.linkedin.com/in/dipesh-sapkota/"
                        target="_blank"
                        rel="noopener noreferrer me"
                        title="LinkedIn"
                        aria-label="LinkedIn Profile"
                        className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-[#0077b5] dark:hover:text-[#0077b5] hover:border-[#0077b5]/50 transition-all shadow-2xs hover:scale-105"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                        </svg>
                      </a>

                      {/* Instagram */}
                      <a
                        href="https://instagram.com/dsz.ae"
                        target="_blank"
                        rel="noopener noreferrer me"
                        title="Instagram (@dsz.ae)"
                        aria-label="Instagram Profile"
                        className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-300 dark:hover:border-pink-500 transition-all shadow-2xs hover:scale-105"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Independent Attribution Disclaimer */}
                <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed text-center sm:text-left">
                  <p>
                    <strong>Disclaimer:</strong> IOE Admission Hub is an independent personal project created by Dipesh Sapkota. It is not an official portal of Tribhuvan University or IOE. All official procedures and final merit allocations are administered exclusively by the IOE Entrance Examination Board at <a href="https://entrance.ioe.edu.np" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">entrance.ioe.edu.np</a>.
                  </p>
                </div>
              </article>
            )}
            
            {activeTab === 'campuses' && <CampusExplorer isDark={isDark} onNavigateTab={setActiveTab} />}
            {activeTab === 'notices' && <NoticeTracker isDark={isDark} />}
            {activeTab === 'priority' && <PriorityGenerator isDark={isDark} onNavigateTab={setActiveTab} />}
            {activeTab === 'checklist' && <StudentChecklist isDark={isDark} />}
            {activeTab === 'calculator' && <CBTCalculator isDark={isDark} onSendToEstimator={handleSendToEstimator} onNavigateTab={setActiveTab} />}
            {activeTab === 'estimator' && <ScoreEstimator isDark={isDark} initialScore={estimatorPreScore} />}
            {activeTab === 'guide' && <AdmissionGuide isDark={isDark} />}
            {activeTab === 'compare' && <FacultyCompare isDark={isDark} />}
            {activeTab === 'affiliated' && <AffiliatedColleges isDark={isDark} />}
            {activeTab === 'financials' && <FinancialsBreakdown isDark={isDark} />}

            {/* Bottom Breadcrumbs & Author Attribution */}
            {activeTab !== 'profile' && (
              <div className="mt-8 pt-5 border-t border-slate-200/90 dark:border-slate-700/80 space-y-3 print:hidden">
                <nav aria-label="Breadcrumb" className="text-[11px] text-slate-500 dark:text-slate-400">
                  <ol className="flex flex-wrap items-center gap-1.5">
                    <li><a href="/" className="text-blue-700 dark:text-blue-400 hover:underline">IOE Admission Hub</a></li>
                    <li aria-hidden="true">/</li>
                    <li><a href="/profile/" className="text-blue-700 dark:text-blue-400 hover:underline">Dipesh Sapkota</a></li>
                    <li aria-hidden="true">/</li>
                    <li aria-current="page" className="text-slate-700 dark:text-slate-300 font-medium">{TAB_LABELS[activeTab] || 'Admission Tools'}</li>
                  </ol>
                </nav>

                <div className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700">
                  <img 
                    src="/dipesh-sapkota-profile.webp" 
                    alt="Dipesh Sapkota — Creator of IOE Admission Hub" 
                    className="w-10 h-10 object-cover rounded-lg shadow-2xs border border-slate-200 dark:border-slate-600 shrink-0" 
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-slate-700 dark:text-slate-200">
                      <a href="/" className="font-semibold text-blue-700 dark:text-blue-400 hover:underline">IOE Admission Hub</a> created by{' '}
                      <a href="/profile/" className="font-semibold text-blue-700 dark:text-blue-400 hover:underline">Dipesh Sapkota</a>
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">Independent Admission Guide, CBT Calculator & Rank Matrix</p>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>

      </div>

      {/* Footer */}
      <Footer isDark={isDark} showOfficialPortals={activeTab === 'predictor'} />

    </div>
  );
}
