import React, { useState } from 'react';
import { NOTICES_DATA, NOTICE_CATEGORIES } from '../data/noticesData';
import InfoDisclaimer from './common/InfoDisclaimer';

export default function NoticeTracker({ isDark }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNotices = NOTICES_DATA.filter(notice => {
    const matchesCategory = selectedCategory === 'All' || notice.category === selectedCategory;
    const matchesSearch = notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          notice.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          notice.authority.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="animate-fadeIn">
      
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
          Official Admission Notices & Circular Tracker
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
          Direct tracker of official circulars, merit lists, quota notices, and entrance updates published by the IOE Entrance Board and constituent campus committees.
        </p>
      </div>

      {/* Filter Categories and Search */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex-1">
          <label htmlFor="search-notices" className="sr-only">Search notices</label>
          <input
            id="search-notices"
            type="search"
            placeholder="Search notices by keyword or issuing authority..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm"
          />
        </div>

        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none" role="group" aria-label="Notice category filter">
          {NOTICE_CATEGORIES.map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all border flex-shrink-0 ${
                selectedCategory === cat
                  ? 'bg-cyan-700 text-white border-cyan-600 shadow-sm'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Notices List */}
      <div className="space-y-4">
        {filteredNotices.length > 0 ? (
          filteredNotices.map(notice => {
            const isHistorical = notice.category === 'Historical Benchmark';
            return (
              <article
                key={notice.id}
                className={`p-5 rounded-2xl border transition-all ${
                  isDark
                    ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    : 'bg-white border-slate-200 shadow-sm hover:border-slate-300'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      isHistorical 
                        ? 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300' 
                        : 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20'
                    }`}>
                      {notice.category}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                      {notice.academicYear} • {notice.publishedDate}
                    </span>
                  </div>

                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    notice.status === 'Verified Official'
                      ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20'
                      : notice.status === 'Active / Current Cycle'
                      ? 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}>
                    {notice.status}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug mb-2">
                  {notice.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {notice.summary}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800/80 text-xs">
                  <span className="text-[11px] text-slate-500 font-medium">
                    Issued by: <strong className="text-slate-700 dark:text-slate-300">{notice.authority}</strong>
                  </span>
                  <a
                    href={notice.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-cyan-600 dark:text-cyan-400 hover:underline underline-offset-2"
                  >
                    View Source Notice ↗
                  </a>
                </div>
              </article>
            );
          })
        ) : (
          <div className="p-8 text-center rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 text-slate-500">
            No notices found matching "{searchQuery}" in category "{selectedCategory}".
          </div>
        )}
      </div>

      <InfoDisclaimer
        isDark={isDark}
        title="Official Source Verification Policy"
        text="All notices link directly to authentic IOE portals (ioe.tu.edu.np, entrance.ioe.edu.np, or constituent campus pages). We do not host modified copies or re-publish altered circulars. For legal and administrative actions, always rely exclusively on the original signed PDF on the official university portal."
      />

    </div>
  );
}

