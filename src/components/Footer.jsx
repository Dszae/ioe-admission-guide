import React from 'react';
import { OFFICIAL_PORTALS } from '../data/admissionData';

export default function Footer({ isDark }) {
  return (
    <footer className="w-full max-w-6xl mt-12 mb-8 relative z-10 print:hidden text-slate-600 dark:text-slate-400">
      
      {/* Official Portals Grid */}
      <div className={`p-6 sm:p-8 rounded-2xl border mb-8 transition-colors ${isDark ? 'bg-[#121216]/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <svg className="w-4 h-4 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Direct Links to Official IOE & Campus Portals
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          {OFFICIAL_PORTALS.map((portal) => (
            <a
              key={portal.name}
              href={portal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-cyan-500 dark:hover:border-cyan-500 hover:bg-cyan-50/50 dark:hover:bg-cyan-950/20 transition-all flex flex-col justify-between group"
            >
              <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 line-clamp-1">
                {portal.name}
              </span>
              <span className="text-[10px] text-slate-600 dark:text-slate-400 mt-1">
                {portal.authority} ↗
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Disclaimers & Credits */}
      <div className="space-y-4 text-xs leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-6">
        
        <div className="p-4 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-[11px]">
          <strong className="text-slate-800 dark:text-slate-200 block mb-1">
            Official Affiliation Disclaimer:
          </strong>
          IOE Admission Hub is an independent open educational guide built to assist prospective engineering students in Nepal. This platform is <strong>not officially operated, affiliated with, or endorsed</strong> by Tribhuvan University (TU) or the Institute of Engineering (IOE). All admission procedures, final cutoffs, schedules, and seat allocations are determined solely by the IOE Entrance Examination Board. Always cross-verify with official notices at{' '}
          <a href="https://entrance.ioe.edu.np" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 underline underline-offset-2">
            entrance.ioe.edu.np
          </a>.
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-slate-600 dark:text-slate-400 text-xs pt-2">
          <p>
            © {new Date().getFullYear()} IOE Admission Hub. Historical data referenced from IOE Archives (2079/2080 BS).
          </p>
          <p className="flex items-center gap-2">
            <span>Built by</span>
            <a 
              href="https://www.dipeshsapkota7.com.np/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold text-cyan-600 dark:text-cyan-400 hover:underline underline-offset-2"
            >
              Dipesh Sapkota
            </a>
          </p>
        </div>

      </div>

    </footer>
  );
}

