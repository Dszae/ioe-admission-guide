import React, { useState } from 'react';
import { AFFILIATED_COLLEGES } from '../data/admissionData';
import InfoDisclaimer from './common/InfoDisclaimer';

export default function AffiliatedColleges({ isDark }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = AFFILIATED_COLLEGES.filter(col =>
    col.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    col.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    col.programs.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="animate-fadeIn">
      
      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white print:text-black">
          TU-Affiliated Engineering Colleges
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
          Explore Tribhuvan University affiliated private engineering institutions in Kathmandu Valley for ranks outside constituent cutoff zones.
        </p>
      </div>

      {/* Search Input */}
      <div className="mb-6">
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
      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map((col, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850/60 shadow-2xs flex flex-col justify-between transition-colors"
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
                    className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline flex-shrink-0"
                  >
                    Portal ↗
                  </a>
                )}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                📍 {col.location} {col.established ? `• Est. ${col.established}` : ''}
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
