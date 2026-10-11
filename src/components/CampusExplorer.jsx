import React, { useState } from 'react';
import { CAMPUS_DETAILS, CAMPUS_SEATS, ALL_PROGRAMS, CAMPUS_NAMES } from '../data/admissionData';
import InfoDisclaimer from './common/InfoDisclaimer';

export default function CampusExplorer({ isDark }) {
  const [selectedCampus, setSelectedCampus] = useState('Pulchowk');
  const [searchQuery, setSearchQuery] = useState('');
  const [programFilter, setProgramFilter] = useState('All');

  const campus = CAMPUS_DETAILS[selectedCampus];
  const seats = CAMPUS_SEATS[selectedCampus] || [];

  const filteredSeats = seats.filter(item => {
    const matchesSearch = item.program.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesProgram = programFilter === 'All' || item.program === programFilter;
    return matchesSearch && matchesProgram;
  });

  const totalRegular = seats.reduce((acc, curr) => acc + curr.regular, 0);
  const totalFullFee = seats.reduce((acc, curr) => acc + curr.fullFee, 0);

  return (
    <div className="animate-fadeIn">
      
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
          Constituent Campus & Seat Matrix Explorer
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
          Explore official seat capacities, degree offerings, and campus profiles across all 5 constituent engineering colleges under TU IOE (Total 2,040 Seats).
        </p>
      </div>

      {/* Campus Selector Pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-none" role="tablist" aria-label="Campus Selection">
        {Object.keys(CAMPUS_DETAILS).map((cKey) => {
          const isSelected = selectedCampus === cKey;
          return (
            <button
              key={cKey}
              role="tab"
              aria-selected={isSelected}
              onClick={() => setSelectedCampus(cKey)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border flex-shrink-0 ${
                isSelected
                  ? 'bg-cyan-700 text-white border-cyan-600 shadow-md'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-cyan-500'
              }`}
            >
              {CAMPUS_NAMES[cKey]}
            </button>
          );
        })}
      </div>

      {/* Selected Campus Overview Card */}
      {campus && (
        <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                {campus.type} • Est. {campus.established}
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mt-1.5">
                {campus.fullName}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                📍 {campus.location} ({campus.district} District)
              </p>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <a
                href={campus.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-bold hover:bg-cyan-50 dark:hover:bg-cyan-950/30 transition-colors flex items-center gap-1.5"
              >
                Official Site ↗
              </a>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            {campus.description}
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 text-center">
            <div>
              <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Regular Seats</p>
              <p className="text-lg sm:text-xl font-mono font-bold text-emerald-600 dark:text-emerald-400">{totalRegular}</p>
            </div>
            <div>
              <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Full Fee Seats</p>
              <p className="text-lg sm:text-xl font-mono font-bold text-cyan-600 dark:text-cyan-400">{totalFullFee}</p>
            </div>
            <div>
              <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Total Campus Intake</p>
              <p className="text-lg sm:text-xl font-mono font-bold text-slate-900 dark:text-white">{campus.totalSeats}</p>
            </div>
          </div>

          {/* Campus Facilities */}
          <div className="mt-4 flex flex-wrap gap-1.5 items-center">
            <span className="text-[11px] font-semibold text-slate-500 mr-1">Key Facilities:</span>
            {campus.facilities.map((fac, idx) => (
              <span key={idx} className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                {fac}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Program Search & Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="flex-1">
          <label htmlFor="search-program" className="sr-only">Search engineering programs</label>
          <input
            id="search-program"
            type="search"
            placeholder="Search programs (e.g. Civil, Computer, Electrical)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
        <div className="w-full sm:w-60">
          <label htmlFor="filter-program" className="sr-only">Filter by specific program</label>
          <select
            id="filter-program"
            value={programFilter}
            onChange={(e) => setProgramFilter(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option value="All">All Programs</option>
            {ALL_PROGRAMS.map(prog => (
              <option key={prog} value={prog}>{prog}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Verified Seat Matrix Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/40 text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider text-[11px]">
              <th scope="col" className="p-3.5 sm:p-4">Engineering Discipline</th>
              <th scope="col" className="p-3.5 sm:p-4 text-center">Regular (Scholarship)</th>
              <th scope="col" className="p-3.5 sm:p-4 text-center">Full Fee (Paying)</th>
              <th scope="col" className="p-3.5 sm:p-4 text-right">Total Intake</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {filteredSeats.length > 0 ? (
              filteredSeats.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-900 dark:text-white">
                    {item.program}
                  </td>
                  <td className="p-3.5 sm:p-4 text-center font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    {item.regular}
                  </td>
                  <td className="p-3.5 sm:p-4 text-center font-mono font-bold text-cyan-600 dark:text-cyan-400">
                    {item.fullFee}
                  </td>
                  <td className="p-3.5 sm:p-4 text-right font-mono font-bold text-slate-900 dark:text-white">
                    {item.total}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-6 text-center text-slate-500">
                  No programs found matching "{searchQuery}" at {CAMPUS_NAMES[selectedCampus]}.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <InfoDisclaimer
        isDark={isDark}
        title="Verified Seat Allocation Notice"
        text="Seat figures are strictly verified against official IOE Admission Guidelines. Regular seats represent government-subsidized positions, while Full Fee seats require regular tuition installments. Quota reservations (such as Female Quota, Janajati, Dalit, and Remote Districts) are distributed internally within each program's allocated capacity."
      />

    </div>
  );
}
