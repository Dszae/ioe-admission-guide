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
  predictor: ['IOE Rank Predictor 2081/2082 | Historical Cutoffs by Dipesh Sapkota', 'Compare IOE entrance merit ranks with historical closing ranks by campus, program, fee category, and quota by Dipesh Sapkota.'],
  profile: ['Dipesh Sapkota | Creator of IOE Admission Hub & Software Engineer', 'Official profile of Dipesh Sapkota, software engineer and creator of IOE Admission Hub for Tribhuvan University engineering applicants in Nepal.'],
  calculator: ['IOE CBT Score Calculator | Negative Marking Formula by Dipesh Sapkota', 'Calculate IOE CBT marks, duration, 40% pass threshold, and exact 10% negative-marking penalty rules by Dipesh Sapkota.'],
  estimator: ['IOE Score-to-Rank Estimator | Merit Curves by Dipesh Sapkota', 'Estimate historical IOE entrance merit-rank brackets from raw CBT exam scores using benchmark percentile curves.'],
  campuses: ['IOE Constituent Campuses & 2,040 Seat Matrix | IOE Admission Hub', 'IOE constituent campus profiles, programs, facilities, and 2,040 seat matrix capacities for Pulchowk, Thapathali, WRC, ERC, and Chitwan.'],
  affiliated: ['TU-Affiliated Engineering Colleges Directory & Fees | IOE Admission Hub', 'Comprehensive reference directory and fee comparisons for 10 TU-affiliated private engineering colleges in Nepal.'],
  compare: ['Compare IOE Engineering Disciplines & Career Scope | IOE Admission Hub', 'Compare IOE engineering discipline focus areas, curriculum overlap, and industry career directions.'],
  priority: ['IOE Priority Form Optimizer | Counseling Strategy by Dipesh Sapkota', 'Build an algorithmic Reach, Target, and Safety IOE counseling preference sequence using historical cutoff data.'],
  guide: ['IOE Admission Guide & Counseling Handbook 2081/2082 | IOE Admission Hub', 'Comprehensive IOE counseling handbook: merit-list rounds, auto-upgrade rules, physical document verification, and affirmative action quotas.'],
  checklist: ['IOE Admission Checklist & Document Verification | IOE Admission Hub', 'Track the complete IOE admission process from CBT registration through document verification with an interactive checklist.'],
  notices: ['IOE Admission Notices, Quota Circulars & Merit Lists | IOE Admission Hub', 'Browse authentic and source-linked IOE entrance and admission notices, circulars, and campus merit lists.'],
  financials: ['IOE Engineering Fees & Living Costs Breakdown | IOE Admission Hub', 'Compare 4-year tuition costs between IOE Regular and Full Fee schemes, hostel expenses, and living cost estimates.']
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

  useEffect(() => {
    const [title, description] = TAB_SEO[activeTab] || TAB_SEO.predictor;
    const isHomepage = activeTab === 'predictor' && window.location.pathname === '/';
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
            <nav aria-label="Breadcrumb" className="mb-5 text-[11px] text-slate-500 dark:text-slate-400">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li><a href="/" className="text-blue-700 hover:underline">IOE Admission Hub</a></li>
                <li aria-hidden="true">/</li>
                <li><a href="/profile/" className="text-blue-700 hover:underline">Dipesh Sapkota profile</a></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">{TAB_LABELS[activeTab] || 'Admission Tools'}</li>
              </ol>
            </nav>
            <div className="flex items-center gap-3 mb-5 p-3 rounded-xl border border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700">
              <img src="/ioe-logo.png" alt="IOE Admission Hub profile emblem" className="w-10 h-10 object-contain rounded-lg bg-white p-1" />
              <div className="min-w-0 flex-1">
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  <a href="/" className="font-semibold text-blue-700 dark:text-blue-400 hover:underline">IOE Admission Hub</a> created & maintained by{' '}
                  <a href="/profile/" className="font-semibold text-blue-700 dark:text-blue-400 hover:underline">Dipesh Sapkota</a>
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">Independent Engineering Admission & Rank Intelligence Platform</p>
              </div>
            </div>
            {activeTab === 'predictor' && <RankPredictor isDark={isDark} onNavigateTab={setActiveTab} />}
            {activeTab === 'profile' && (
              <article className="animate-fadeIn space-y-6">
                {/* Author Header Card */}
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 border border-blue-100 dark:border-slate-700 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white dark:bg-slate-700 border border-blue-200 dark:border-slate-600 p-2 shadow-2xs shrink-0 flex items-center justify-center">
                    <img src="/ioe-logo.png" alt="Dipesh Sapkota — IOE Admission Hub" className="w-full h-full object-contain" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Dipesh Sapkota
                      </h1>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-600 text-white uppercase tracking-wider">
                        Creator & Engineer
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-blue-800 dark:text-blue-300">
                      Software Engineer • Full-Stack Developer • IOE Admission Intelligence
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 pt-0.5">
                      Kathmandu, Nepal • Creator of IOE Admission Hub & Git Visualizer
                    </p>
                  </div>
                </div>

                {/* Sitelinks to Mainpage & Primary Admission Tools */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      Direct Sitelinks to IOE Admission Hub Tools
                    </h2>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">Core Navigation</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
                    <a
                      href="/"
                      onClick={(e) => { e.preventDefault(); setActiveTab('predictor'); }}
                      className="p-3 rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/30 hover:bg-blue-100/70 dark:hover:bg-blue-900/40 transition-colors group flex flex-col justify-between"
                    >
                      <div className="font-semibold text-blue-900 dark:text-blue-200 group-hover:text-blue-700 dark:group-hover:text-blue-100 flex items-center justify-between">
                        <span>IOE Admission Hub Mainpage</span>
                        <span aria-hidden="true">→</span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1">
                        Go to the official home & IOE merit rank predictor tool.
                      </p>
                    </a>

                    <a
                      href="/predictor/"
                      onClick={(e) => { e.preventDefault(); setActiveTab('predictor'); }}
                      className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-400 dark:hover:border-blue-500 transition-colors group flex flex-col justify-between"
                    >
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-between">
                        <span>IOE Rank Predictor</span>
                        <span aria-hidden="true">→</span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1">
                        Evaluate admission probability against historical closing ranks.
                      </p>
                    </a>

                    <a
                      href="/calculator/"
                      onClick={(e) => { e.preventDefault(); setActiveTab('calculator'); }}
                      className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-400 dark:hover:border-blue-500 transition-colors group flex flex-col justify-between"
                    >
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-between">
                        <span>CBT Score Calculator</span>
                        <span aria-hidden="true">→</span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1">
                        Calculate marks with exact 10% negative marking penalty rules.
                      </p>
                    </a>

                    <a
                      href="/campuses/"
                      onClick={(e) => { e.preventDefault(); setActiveTab('campuses'); }}
                      className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-400 dark:hover:border-blue-500 transition-colors group flex flex-col justify-between"
                    >
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-between">
                        <span>Campuses & Seat Matrix</span>
                        <span aria-hidden="true">→</span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1">
                        Explore all 2,040 seats across Pulchowk, Thapathali, WRC, ERC, and ChEC.
                      </p>
                    </a>

                    <a
                      href="/priority/"
                      onClick={(e) => { e.preventDefault(); setActiveTab('priority'); }}
                      className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-400 dark:hover:border-blue-500 transition-colors group flex flex-col justify-between"
                    >
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-between">
                        <span>Priority Optimizer</span>
                        <span aria-hidden="true">→</span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1">
                        Generate optimal Reach, Target, and Safety counseling preferences.
                      </p>
                    </a>

                    <a
                      href="/guide/"
                      onClick={(e) => { e.preventDefault(); setActiveTab('guide'); }}
                      className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-400 dark:hover:border-blue-500 transition-colors group flex flex-col justify-between"
                    >
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-between">
                        <span>Admission Guide</span>
                        <span aria-hidden="true">→</span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1">
                        Complete counseling, auto-upgrade rules, and document handbook.
                      </p>
                    </a>
                  </div>
                </div>

                {/* About Dipesh Sapkota */}
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-700 pt-5">
                  <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                    About Dipesh Sapkota & IOE Admission Hub
                  </h2>
                  <p>
                    <strong>Dipesh Sapkota</strong> is a software engineer and developer dedicated to engineering transparent, accessible, and fast web applications for students in Nepal. As the creator and maintainer of <strong>IOE Admission Hub</strong>, Dipesh compiled historical entrance examination closing ranks, empirical percentile curves, and official counseling protocols to demystify the admission journey for thousands of high-school graduates.
                  </p>
                  <p>
                    The platform provides prospective applicants with interactive rank predictions, real-time CBT negative-marking simulations, constituent seat matrices (2,040 seats), priority form generation, and step-by-step document verification roadmaps.
                  </p>
                </div>

                {/* Verified Author Channels */}
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 space-y-2.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Verified Creator Links
                  </h3>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <a
                      href="https://www.dipeshsapkota7.com.np/"
                      target="_blank"
                      rel="noopener noreferrer home author"
                      className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-blue-700 dark:text-blue-300 font-semibold hover:border-blue-400 hover:text-blue-900 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>Personal Portfolio (dipeshsapkota7.com.np)</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                    <a
                      href="https://github.com/Dszae"
                      target="_blank"
                      rel="noopener noreferrer me"
                      className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold hover:border-slate-400 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>GitHub (@Dszae)</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/dipesh-sapkota/"
                      target="_blank"
                      rel="noopener noreferrer me"
                      className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold hover:border-slate-400 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>LinkedIn (Dipesh Sapkota)</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                    <a
                      href="https://git-visualizer.dipeshsapkota7.com.np/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-orange-700 dark:text-orange-300 font-semibold hover:border-orange-400 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>Git Visualizer</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>

                {/* Provenance and Disclaimer */}
                <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                  <p>
                    <strong>Independent Attribution:</strong> IOE Admission Hub is an independent engineering project conceived and built by Dipesh Sapkota. It is not an official portal of Tribhuvan University (TU) or the Institute of Engineering (IOE). For legal and official counseling notices, consult the IOE Entrance Examination Board at <a href="https://entrance.ioe.edu.np" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">entrance.ioe.edu.np</a>.
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
          </main>
        </div>

      </div>

      {/* Footer */}
      <Footer isDark={isDark} showOfficialPortals={activeTab === 'predictor'} />

    </div>
  );
}
