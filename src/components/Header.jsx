import React, { useState, useEffect } from 'react';

const NAV_GROUPS = [
  {
    title: 'Rank & Admission Odds',
    items: [
      { id: 'predictor', label: 'Rank Probability Predictor', desc: 'Predict admission odds across TU constituent campuses' },
      { id: 'calculator', label: 'CBT Negative Marking Calculator', desc: 'Calculate exact net score with 10% deduction' },
      { id: 'estimator', label: 'Score-to-Rank Curve', desc: 'Examine historical score distributions and percentiles' }
    ]
  },
  {
    title: 'Campuses & Seat Matrices',
    items: [
      { id: 'campuses', label: 'Constituent Campuses (2,040 Seats)', desc: 'Pulchowk, Thapathali, WRC, ERC, ChEC seats' },
      { id: 'affiliated', label: 'Affiliated Colleges', desc: 'Private TU affiliated engineering colleges' },
      { id: 'compare', label: 'Compare Disciplines', desc: 'Side-by-side engineering program comparison' }
    ]
  },
  {
    title: 'Preference & Strategy',
    items: [
      { id: 'priority', label: 'Priority Sequence Optimizer', desc: 'Algorithmic multi-tier choice form generator' }
    ]
  },
  {
    title: 'Admissions Guide & Official Data',
    items: [
      { id: 'guide', label: 'Counseling Handbook', desc: 'Step-by-step admission procedure and guidelines' },
      { id: 'checklist', label: 'Action Checklist', desc: 'Required documents and deadline checklist' },
      { id: 'notices', label: 'Official Notices & Deadlines', desc: 'Important TU IOE announcements and circulars' },
      { id: 'financials', label: 'Tuition & Fee Breakdown', desc: 'Regular vs. Full-Fee cost analysis' }
    ]
  }
];

export default function Header({ 
  isDark, 
  setIsDark, 
  activeTab = 'predictor', 
  setActiveTab 
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock background scrolling and interaction when menu is open
  useEffect(() => {
    if (menuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [menuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const handleSelectTab = (tabId) => {
    if (setActiveTab) {
      setActiveTab(tabId);
    }
    setMenuOpen(false);
  };

  return (
    <>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-60 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none text-xs font-semibold"
      >
        Skip to main content
      </a>

      {/* Fixed Navbar at Top */}
      <header className="fixed top-0 inset-x-0 z-40 h-16 sm:h-18 bg-white/95 dark:bg-[#0b0e17]/95 backdrop-blur-md border-b border-slate-200/90 dark:border-slate-800/90 print:hidden transition-colors shadow-2xs">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 h-full flex items-center justify-between gap-3 sm:gap-4">
          
          {/* Logo & Brand Identity with Breadcrumb Sitelink */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center p-1.5 shadow-2xs shrink-0">
              <img 
                src="/ioe-logo.png" 
                alt="Tribhuvan University Emblem" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = "/ioe logo.png";
                }}
              />
            </div>

            <div className="flex flex-col min-w-0">
              <span className="text-[10px] sm:text-[11px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider leading-none mb-1">
                TU Engineering Counseling
              </span>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-sm sm:text-base font-bold tracking-tight text-slate-900 dark:text-white truncate leading-tight">
                  IOE Admission Hub
                </span>
                <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/50 hidden md:inline-block">
                  2081/2082 BS
                </span>
              </div>
            </div>
          </div>

          {/* Center: Desktop Shortcut Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Quick Navigation">
            {[
              { id: 'predictor', label: 'Predictor' },
              { id: 'campuses', label: 'Campuses' },
              { id: 'priority', label: 'Priority' },
              { id: 'calculator', label: 'Calculator' },
              { id: 'guide', label: 'Guide' }
            ].map(tab => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleSelectTab(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-2xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </nav>

          {/* Right: Print, Theme Toggle & Mobile/Tablet Hamburger Button */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Print / Save Button */}
            <button
              onClick={() => window.print()}
              aria-label="Print admission report or save as PDF"
              title="Print page or save as PDF"
              className="p-2 sm:px-2.5 sm:py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-750 text-xs font-medium transition-colors shadow-2xs hidden xs:inline-flex items-center gap-1.5"
            >
              <svg className="w-4 h-4 text-slate-500 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              <span className="hidden md:inline">Print</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={() => setIsDark(!isDark)}
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              aria-pressed={isDark}
              title={isDark ? "Switch to light theme" : "Switch to dark theme"}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-2xs hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {isDark ? (
                <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.03 9.03 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Mobile & Tablet Hamburger Button (Hidden on Laptops lg:hidden) */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-dialog"
              className="lg:hidden p-2 sm:px-2.5 sm:py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-2xs hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <svg className="w-5 h-5 text-slate-700 dark:text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
              <span className="text-xs font-semibold hidden sm:inline">Menu</span>
            </button>
          </div>

        </div>
      </header>

      {/* Background Overlay & Modal Drawer When Toggled */}
      {menuOpen && (
        <>
          {/* Backdrop Overlay - Blocks Background Access Completely */}
          <div 
            className="fixed inset-0 bg-slate-950/65 dark:bg-black/80 backdrop-blur-xs z-50 transition-opacity animate-fadeIn"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Dialog */}
          <div 
            id="mobile-nav-dialog"
            role="dialog" 
            aria-modal="true" 
            aria-label="Site Navigation and Admissions Tools"
            className="fixed top-0 right-0 h-full w-full max-w-sm sm:max-w-md bg-white dark:bg-[#0f1320] border-l border-slate-200 dark:border-slate-800 z-50 shadow-2xl flex flex-col overflow-y-auto animate-fadeIn"
          >
            {/* Drawer Top Header */}
            <div className="sticky top-0 z-10 px-5 py-4 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#0f1320]/95 backdrop-blur-md flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                    All Admission Tools
                  </h2>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Navigate IOE Hub Modules & Sitelinks
                  </p>
                </div>
              </div>

              {/* Close Button (X) */}
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation menu"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Drawer Body: Categorized Sitelink Navigation */}
            <div className="p-4 sm:p-5 space-y-5 flex-1">
              {NAV_GROUPS.map((group, gIdx) => (
                <div key={gIdx} className="space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-2 block">
                    {group.title}
                  </span>
                  <div className="space-y-1">
                    {group.items.map((item) => {
                      const isCurrent = activeTab === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleSelectTab(item.id)}
                          className={`w-full text-left p-2.5 sm:p-3 rounded-xl transition-all flex items-start justify-between gap-2 border ${
                            isCurrent
                              ? 'bg-blue-50/80 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800/80 text-blue-900 dark:text-blue-100 shadow-2xs'
                              : 'bg-slate-50/50 dark:bg-slate-900/30 border-transparent hover:border-slate-200 dark:hover:border-slate-800 hover:bg-slate-100/70 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          <div className="min-w-0">
                            <span className={`text-xs font-bold block ${isCurrent ? 'text-blue-700 dark:text-blue-400' : 'text-slate-900 dark:text-white'}`}>
                              {item.label}
                            </span>
                            <span className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                              {item.desc}
                            </span>
                          </div>
                          {isCurrent && (
                            <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0 mt-1.5" aria-hidden="true"></span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

            </div>

            {/* Drawer Footer Actions */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 flex items-center justify-between text-xs">
              <span className="text-slate-500 dark:text-slate-400 font-medium">
                Theme: {isDark ? 'Dark Mode' : 'Light Mode'}
              </span>
              <button
                onClick={() => setIsDark(!isDark)}
                className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold shadow-2xs hover:bg-slate-100 dark:hover:bg-slate-750 transition-colors"
              >
                Switch to {isDark ? 'Light' : 'Dark'}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
