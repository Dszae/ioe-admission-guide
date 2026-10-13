import React, { useState, useEffect, useRef } from 'react';

const SECONDARY_TABS = [
  { id: 'estimator', label: 'Score Curve' },
  { id: 'affiliated', label: 'Affiliated Colleges' },
  { id: 'compare', label: 'Compare Disciplines' },
  { id: 'checklist', label: 'Checklist' },
  { id: 'notices', label: 'Official Notices' },
  { id: 'financials', label: 'Fee Breakdown' }
];

const NAV_GROUPS = [
  {
    title: 'Rank & Admission Odds',
    items: [
      { id: 'predictor', label: 'Rank Predictor' },
      { id: 'calculator', label: 'CBT Calculator' },
      { id: 'estimator', label: 'Score-to-Rank Curve' }
    ]
  },
  {
    title: 'Campuses & Seat Matrices',
    items: [
      { id: 'campuses', label: 'Constituent Campuses' },
      { id: 'affiliated', label: 'Affiliated Colleges' },
      { id: 'compare', label: 'Compare Disciplines' }
    ]
  },
  {
    title: 'Preference & Strategy',
    items: [
      { id: 'priority', label: 'Priority Optimizer' }
    ]
  },
  {
    title: 'Admissions Guide',
    items: [
      { id: 'guide', label: 'Counseling Handbook' },
      { id: 'checklist', label: 'Checklist' },
      { id: 'notices', label: 'Official Notices' },
      { id: 'financials', label: 'Fee Breakdown' }
    ]
  }
];

const tabHref = (tabId) => tabId === 'predictor' ? '/' : `/${tabId}/`;

export default function Header({ 
  activeTab = 'predictor', 
  setActiveTab 
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef(null);

  // Close More dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreOpen(false);
      }
    };
    if (moreOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [moreOpen]);

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

  // Close menus on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (moreOpen) setMoreOpen(false);
        if (menuOpen) setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen, moreOpen]);

  const handleSelectTab = (tabId) => {
    if (setActiveTab) {
      setActiveTab(tabId);
    }
    setMenuOpen(false);
    setMoreOpen(false);
  };

  const handleTabLinkClick = (event, tabId) => {
    event.preventDefault();
    handleSelectTab(tabId);
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
      <header className="fixed top-0 inset-x-0 z-40 h-16 sm:h-18 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-600 print:hidden transition-colors shadow-2xs">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 h-full flex items-center justify-between gap-3 sm:gap-4">
          
          {/* Logo & Brand Identity (Links to same page) */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 shrink-0">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleSelectTab('predictor');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              title="IOE Admission Hub — Go to homepage"
              aria-label="IOE Admission Hub homepage"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center p-1.5 shadow-2xs shrink-0 hover:border-blue-500 dark:hover:border-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <img 
                src="/ioe-logo.png" 
                alt="Tribhuvan University IOE Emblem" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = "/ioe logo.png";
                }}
              />
            </a>

            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleSelectTab('predictor');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-1.5 sm:gap-2 group focus:outline-none"
              title="IOE Admission Hub"
            >
              <span className="text-sm sm:text-base font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate leading-tight">
                IOE Admission Hub
              </span>
              <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/50 hidden md:inline-block">
                2081/2082 BS
              </span>
            </a>
          </div>

          {/* Center: Desktop Shortcut Navigation with More Dropdown */}
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
                <a
                  key={tab.id}
                  href={tabHref(tab.id)}
                  onClick={(event) => handleTabLinkClick(event, tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-2xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {tab.label}
                </a>
              );
            })}

            {/* Desktop More Tools Dropdown */}
            <div className="relative" ref={moreRef}>
              <button
                type="button"
                onClick={() => setMoreOpen(!moreOpen)}
                aria-expanded={moreOpen}
                aria-haspopup="true"
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all inline-flex items-center gap-1.5 ${
                  SECONDARY_TABS.some(t => t.id === activeTab)
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <span>
                  {SECONDARY_TABS.find(t => t.id === activeTab)?.label || 'More'}
                </span>
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {moreOpen && (
                <div className="absolute right-0 top-full mt-1.5 w-52 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-xl shadow-xl z-50 animate-fadeIn">
                  <div className="px-3 py-1.5 border-b border-slate-100 dark:border-slate-600 text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                    Additional Tools
                  </div>
                  {SECONDARY_TABS.map((tab) => {
                    const isCurrent = activeTab === tab.id;
                    return (
                      <a
                        key={tab.id}
                        href={tabHref(tab.id)}
                        onClick={(event) => {
                          handleTabLinkClick(event, tab.id);
                          setMoreOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 flex items-center justify-between text-xs transition-colors ${
                          isCurrent
                            ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-semibold'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                        }`}
                      >
                        <span>{tab.label}</span>
                        {isCurrent && (
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                        )}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Right: Print and Mobile/Tablet Hamburger Button */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Print / Save Button */}
            <button
              onClick={() => window.print()}
              aria-label="Print admission report or save as PDF"
              title="Print page or save as PDF"
              className="p-2 sm:px-2.5 sm:py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 text-xs font-medium transition-colors shadow-2xs hidden xs:inline-flex items-center gap-1.5"
            >
              <svg className="w-4 h-4 text-slate-500 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              <span className="hidden md:inline">Print</span>
            </button>

            {/* Mobile & Tablet Hamburger Button (Hidden on Laptops lg:hidden) */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-dialog"
              className="lg:hidden p-2 sm:px-2.5 sm:py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-2xs hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="fixed top-0 right-0 h-full w-full max-w-sm sm:max-w-md bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-600 z-50 shadow-2xl flex flex-col overflow-y-auto animate-fadeIn"
          >
            {/* Drawer Top Header */}
            <div className="sticky top-0 z-10 px-5 py-4 border-b border-slate-200 dark:border-slate-600 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                    Menu
                  </h2>
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
                        <a
                          key={item.id}
                          href={tabHref(item.id)}
                          onClick={(event) => handleTabLinkClick(event, item.id)}
                          className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center justify-between gap-2 border ${
                            isCurrent
                              ? 'bg-blue-50 dark:bg-blue-900/50 border-blue-200 dark:border-blue-500 text-blue-900 dark:text-blue-100 shadow-2xs'
                              : 'bg-slate-50 dark:bg-slate-800 border-transparent hover:border-slate-200 dark:hover:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100'
                          }`}
                        >
                          <span className={`text-sm font-semibold ${isCurrent ? 'text-blue-700 dark:text-blue-200' : 'text-slate-900 dark:text-white'}`}>
                            {item.label}
                          </span>
                          {isCurrent && (
                            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-300 shrink-0" aria-hidden="true"></span>
                          )}
                        </a>
                      );
                    })}
                  </div>
                </div>
              ))}

            </div>

          </div>
        </>
      )}
    </>
  );
}
