import { useState } from 'react';
import { NOTICES_DATA, NOTICE_CATEGORIES } from '../data/noticesData';
import InfoDisclaimer from './common/InfoDisclaimer';

export interface NoticeTrackerProps {
  isDark?: boolean;
}

export default function NoticeTracker({ isDark = false }: NoticeTrackerProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

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
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
          Official Admission Notices & Circulars
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
            placeholder="Search circulars by keyword or authority..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
          />
        </div>

        <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1" role="group" aria-label="Notice category filter">
          {NOTICE_CATEGORIES.map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all border flex-shrink-0 min-h-[36px] ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white border-blue-600 shadow-2xs'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Notices List */}
      <div className="space-y-3.5">
        {filteredNotices.length > 0 ? (
          filteredNotices.map(notice => {
            const isHistorical = notice.category === 'Historical Benchmark';
            return (
              <article
                key={notice.id}
                className="p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/60 shadow-2xs transition-all hover:border-slate-300 dark:hover:border-slate-700"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-[11px] font-medium px-2 py-0.5 rounded-md ${
                      isHistorical 
                        ? 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300' 
                        : 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/50'
                    }`}>
                      {notice.category}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      {notice.academicYear} • {notice.publishedDate}
                    </span>
                  </div>

                  <span className={`text-[11px] font-medium px-2 py-0.5 rounded ${
                    notice.status === 'Verified Official'
                      ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50'
                      : notice.status === 'Active / Current Cycle'
                      ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}>
                    {notice.status}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug mb-1.5">
                  {notice.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3.5">
                  {notice.summary}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                  <span className="text-[11px] text-slate-500 font-medium">
                    Authority: <strong className="text-slate-700 dark:text-slate-300">{notice.authority}</strong>
                  </span>
                  <a
                    href={notice.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <span>View Circular</span>
                    <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </article>
            );
          })
        ) : (
          <div className="p-8 text-center rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 text-slate-500 text-xs sm:text-sm">
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
