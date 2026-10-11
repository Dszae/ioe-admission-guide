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

      {/* Network Sitelinks to Original Website */}
      <div className={`p-3.5 sm:p-4 rounded-xl border mb-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs transition-colors ${
        isDark ? 'bg-[#131620] border-slate-800' : 'bg-white border-slate-200 shadow-2xs'
      }`}>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-800 dark:text-slate-200">Connected Platforms:</span>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <a
            href="https://www.dipeshsapkota7.com.np/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
          >
            <span>dipeshsapkota7.com.np</span>
            <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <span className="text-slate-300 dark:text-slate-700">|</span>
          <a
            href="https://git-visualizer.dipeshsapkota7.com.np/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
          >
            <span>Git Visualizer</span>
            <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
              rel="noopener noreferrer"
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
