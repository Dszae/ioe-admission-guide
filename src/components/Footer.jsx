import React from 'react';
import { OFFICIAL_PORTALS } from '../data/admissionData';

export default function Footer({ isDark }) {
  return (
    <footer className="w-full max-w-5xl mt-10 sm:mt-12 mb-6 sm:mb-8 relative z-10 print:hidden text-slate-500 dark:text-slate-400">
      
      {/* Official Portals Grid */}
      <div className={`p-4 sm:p-6 rounded-xl border mb-5 transition-colors ${
        isDark ? 'bg-[#131620] border-slate-800' : 'bg-white border-slate-200 shadow-2xs'
      }`}>
        <h2 className="text-xs font-semibold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2">
          <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Direct Links to Official Portals
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          {OFFICIAL_PORTALS.map((portal) => (
            <a
              key={portal.name}
              href={portal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-850/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex flex-col justify-between group"
            >
              <span className="font-medium text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-1">
                {portal.name}
              </span>
              <span className="text-[11px] text-slate-400 mt-1 inline-flex items-center gap-1">
                <span>{portal.authority}</span>
                <svg className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Author, Sitelinks & Social Links Network */}
      <div className={`p-4 sm:p-5 rounded-xl border mb-5 transition-colors ${
        isDark ? 'bg-[#131620] border-slate-800' : 'bg-white border-slate-200 shadow-2xs'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3.5 mb-3.5 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h2 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Developer & Connected Network
            </h2>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              Engineering projects and official portfolio links by Dipesh Sapkota
            </p>
          </div>

          {/* Sitelink Breadcrumb */}
          <nav aria-label="Sitelink Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <a
              href="https://www.dipeshsapkota7.com.np/"
              target="_blank"
              rel="noopener noreferrer home author"
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              title="Dipesh Sapkota Official Website"
            >
              dipeshsapkota7.com.np
            </a>
            <span className="opacity-40" aria-hidden="true">/</span>
            <span className="text-slate-700 dark:text-slate-300 font-medium">ioe-admission</span>
          </nav>
        </div>

        {/* Social & Platform Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
          
          {/* Original Website */}
          <a
            href="https://www.dipeshsapkota7.com.np/"
            target="_blank"
            rel="noopener noreferrer home author"
            title="Visit Dipesh Sapkota Official Website"
            className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 bg-slate-50/60 dark:bg-slate-850/60 hover:bg-white dark:hover:bg-slate-800 transition-all flex items-center gap-3 group"
          >
            <div className="w-8 h-8 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 block truncate">
                Original Website
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block truncate">
                dipeshsapkota7.com.np
              </span>
            </div>
            <svg className="w-3.5 h-3.5 text-slate-400 opacity-60 group-hover:opacity-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          {/* GitHub Profile */}
          <a
            href="https://github.com/Dszae"
            target="_blank"
            rel="noopener noreferrer me"
            title="View Dipesh Sapkota GitHub Profile"
            className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 bg-slate-50/60 dark:bg-slate-850/60 hover:bg-white dark:hover:bg-slate-800 transition-all flex items-center gap-3 group"
          >
            <div className="w-8 h-8 rounded-md bg-slate-200/70 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 block truncate">
                GitHub Profile
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block truncate">
                @Dszae
              </span>
            </div>
            <svg className="w-3.5 h-3.5 text-slate-400 opacity-60 group-hover:opacity-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          {/* LinkedIn Profile */}
          <a
            href="https://www.linkedin.com/in/dipesh-sapkota/"
            target="_blank"
            rel="noopener noreferrer me"
            title="Connect with Dipesh Sapkota on LinkedIn"
            className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 bg-slate-50/60 dark:bg-slate-850/60 hover:bg-white dark:hover:bg-slate-800 transition-all flex items-center gap-3 group"
          >
            <div className="w-8 h-8 rounded-md bg-[#0077b5]/10 text-[#0077b5] flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 block truncate">
                LinkedIn
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block truncate">
                Dipesh Sapkota
              </span>
            </div>
            <svg className="w-3.5 h-3.5 text-slate-400 opacity-60 group-hover:opacity-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          {/* Git Visualizer Platform */}
          <a
            href="https://git-visualizer.dipeshsapkota7.com.np/"
            target="_blank"
            rel="noopener noreferrer"
            title="Launch Git Visualizer Companion Platform"
            className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-orange-400 dark:hover:border-orange-500 bg-slate-50/60 dark:bg-slate-850/60 hover:bg-white dark:hover:bg-slate-800 transition-all flex items-center gap-3 group"
          >
            <div className="w-8 h-8 rounded-md bg-orange-50 dark:bg-orange-950/50 text-orange-600 dark:orange-400 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <line x1="6" y1="3" x2="6" y2="15" strokeWidth="2" strokeLinecap="round" />
                <circle cx="18" cy="6" r="3" strokeWidth="2" />
                <circle cx="6" cy="18" r="3" strokeWidth="2" />
                <path d="M18 9a9 9 0 0 1-9 9" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-orange-600 dark:group-hover:text-orange-400 block truncate">
                Git Visualizer
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block truncate">
                Interactive Graph Tool
              </span>
            </div>
            <svg className="w-3.5 h-3.5 text-slate-400 opacity-60 group-hover:opacity-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

        </div>
      </div>

      {/* Disclaimers & Credits */}
      <div className="space-y-3 text-xs leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-4">
        
        <div className="p-3 rounded-lg bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400">
          <strong className="text-slate-800 dark:text-slate-200 block mb-0.5">
            Academic Affiliation Disclaimer:
          </strong>
          IOE Admission Hub is an independent educational tool designed to assist prospective engineering students in Nepal. This platform is <strong>not officially operated, affiliated with, or endorsed</strong> by Tribhuvan University (TU) or the Institute of Engineering (IOE). All official procedures, final cutoffs, and schedules are determined solely by the IOE Entrance Examination Board. Cross-verify all announcements at{' '}
          <a href="https://entrance.ioe.edu.np" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline underline-offset-2">
            entrance.ioe.edu.np
          </a>.
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-slate-500 text-xs pt-0.5">
          <p>
            © {new Date().getFullYear()} IOE Admission Hub. Historical benchmark data from IOE Archives (2082 BS).
          </p>
          <p className="flex items-center gap-1.5">
            <span>Built by</span>
            <a 
              href="https://www.dipeshsapkota7.com.np/" 
              target="_blank" 
              rel="noopener noreferrer home author"
              className="font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:underline"
            >
              Dipesh Sapkota
            </a>
          </p>
        </div>

      </div>

    </footer>
  );
}
