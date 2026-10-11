import React from 'react';

export default function Header({ isDark, setIsDark }) {
  return (
    <>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-3 focus:py-1.5 focus:bg-blue-600 focus:text-white focus:rounded-md focus:shadow-md focus:outline-none text-xs font-medium"
      >
        Skip to main content
      </a>

      <header className="w-full max-w-5xl mb-3 sm:mb-6 relative z-10 print:hidden mt-1 sm:mt-2">
        <div className="flex items-center justify-between gap-2.5 sm:gap-4">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center p-1.5 shadow-2xs shrink-0">
              <img 
                src="/ioe-logo.png" 
                alt="Tribhuvan University Emblem" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = "/ioe logo.png";
                }}
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <h1 className="text-base sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white truncate">
                  IOE Admission Hub
                </h1>
                <span className="text-[10px] sm:text-[11px] font-medium px-1.5 sm:px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/50 shrink-0">
                  2081/2082 BS
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 truncate hidden xs:block">
                Tribhuvan University B.E. & B.Arch Admissions Portal
              </p>
            </div>
          </div>

          {/* Action Controls & Original Site Backlink */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href="https://www.dipeshsapkota7.com.np/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit original developer portfolio website"
              className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-750 text-[11px] sm:text-xs font-medium transition-colors shadow-2xs hidden sm:inline-flex items-center gap-1"
            >
              <span>Main Site</span>
              <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            <button
              onClick={() => window.print()}
              aria-label="Print page or save as PDF"
              title="Print page or save as PDF"
              className="p-2 sm:px-2.5 sm:py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-750 text-xs font-medium transition-colors shadow-2xs inline-flex items-center gap-1.5"
            >
              <svg className="w-4 h-4 text-slate-500 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              <span className="hidden md:inline">Print</span>
            </button>

            <button
              onClick={() => setIsDark(!isDark)}
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
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
          </div>

        </div>
      </header>
    </>
  );
}
