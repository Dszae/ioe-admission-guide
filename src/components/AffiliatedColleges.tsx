import { useState } from 'react';
import { AFFILIATED_COLLEGES } from '../data/admissionData';
import InfoDisclaimer from './common/InfoDisclaimer';

export interface AffiliatedCollegesProps {
  isDark?: boolean;
}

export default function AffiliatedColleges({ isDark = false }: AffiliatedCollegesProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = AFFILIATED_COLLEGES.filter(col =>
    col.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    col.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    col.programs.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="animate-fadeIn">
      
      <div className="mb-5 sm:mb-6">
        <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white print:text-black tracking-tight">
          TU-Affiliated Engineering Colleges
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
          Explore Tribhuvan University affiliated private engineering institutions in Kathmandu Valley for ranks outside constituent cutoff zones.
        </p>
      </div>

      {/* Search Input */}
      <div className="mb-5">
        <label htmlFor="search-affiliated" className="sr-only">Search affiliated colleges</label>
        <input
          id="search-affiliated"
          type="search"
          placeholder="Search by college name, location, or discipline..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
        />
      </div>

      {/* Colleges Grid */}
      <div className="grid md:grid-cols-2 gap-3.5 sm:gap-4">
        {filtered.map((col, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/60 shadow-2xs flex flex-col justify-between transition-colors"
          >
            <div>
              <div className="flex justify-between items-start gap-2 mb-1">
                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                  {col.name}
                </h3>
                {col.website && (
                  <a
                    href={col.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline shrink-0 inline-flex items-center gap-1"
                  >
                    <span>Portal</span>
                    <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{col.location}</span>
              </p>
              
              <div className="mb-4">
                <span className="text-[11px] font-semibold text-slate-500 block mb-1">Offered Programs</span>
                <p className="text-xs font-normal text-slate-700 dark:text-slate-300 leading-relaxed">
                  {col.programs}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-end border-t border-slate-100 dark:border-slate-800 pt-3 text-xs">
              <div>
                <span className="text-[11px] font-medium text-slate-500 block mb-0.5">Approx. 4-Yr Fee</span>
                <span className="font-mono font-medium text-slate-900 dark:text-white">
                  {col.fee}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-medium text-slate-500 block mb-0.5">Safe Rank Zone</span>
                <span className="font-mono font-medium text-blue-700 dark:text-blue-400">
                  {col.cutoff}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <InfoDisclaimer
        isDark={isDark}
        title="Affiliated College Admissions Disclaimer"
        text="TU-affiliated private colleges conduct separate admission application procedures following the publication of IOE CBT Entrance results. Fees, installment schedules, and scholarships (10% mandatory quota scholarships) are administered in accordance with IOE Affiliated College guidelines. Please verify directly with each institution."
      />

    </div>
  );
}
