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
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white print:text-black">
          TU-Affiliated Private Engineering Colleges
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
          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
        />
      </div>

      {/* Colleges Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map((col, idx) => (
          <div
            key={idx}
            className={`p-5 rounded-2xl border flex flex-col justify-between transition-all hover:border-cyan-500/50 ${
              isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div>
              <div className="flex justify-between items-start gap-2 mb-1">
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                  {col.name}
                </h3>
                {col.website && (
                  <a
                    href={col.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline flex-shrink-0"
                  >
                    Site ↗
                  </a>
                )}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                📍 {col.location} {col.established ? `• Est. ${col.established}` : ''}
              </p>
              
              <div className="mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Offered Programs</span>
                <p className="text-xs font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
                  {col.programs}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-end border-t border-slate-100 dark:border-slate-800 pt-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-0.5">Approx. 4-Yr Fee</span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-700 dark:text-cyan-400">
                  {col.fee}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-0.5">Historical Safe Rank</span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-orange-500/10 text-orange-700 dark:text-orange-400">
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

