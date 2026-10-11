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
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
          Constituent Campuses & Seat Matrix
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
          Explore official seat capacities, degree offerings, and campus profiles across all 5 constituent engineering colleges under TU IOE (Total 2,040 Seats).
        </p>
      </div>

      {/* Campus Selector Pills */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 mb-6" role="tablist" aria-label="Campus Selection">
        {Object.keys(CAMPUS_DETAILS).map((cKey) => {
          const isSelected = selectedCampus === cKey;
          return (
            <button
              key={cKey}
              role="tab"
              aria-selected={isSelected}
              onClick={() => setSelectedCampus(cKey)}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border flex-shrink-0 min-h-[40px] ${
                isSelected
                  ? 'bg-blue-600 text-white border-blue-600 shadow-2xs'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {CAMPUS_NAMES[cKey]}
            </button>
          );
        })}
      </div>

      {/* Selected Campus Overview Card */}
      {campus && (
        <div className="p-5 sm:p-6 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-3.5">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/50">
                  {campus.type} • Est. {campus.established}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1.5">
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
                className="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-medium hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                Campus Portal ↗
              </a>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            {campus.description}
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-850 border border-slate-200/80 dark:border-slate-750 text-center shadow-2xs">
            <div>
              <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Regular (Subsidized)</p>
              <p className="text-lg sm:text-xl font-mono font-bold text-slate-900 dark:text-white mt-0.5">{totalRegular}</p>
            </div>
            <div>
              <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Full Fee (Paying)</p>
              <p className="text-lg sm:text-xl font-mono font-bold text-slate-900 dark:text-white mt-0.5">{totalFullFee}</p>
            </div>
            <div>
              <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Total Intake</p>
              <p className="text-lg sm:text-xl font-mono font-bold text-blue-600 dark:text-blue-400 mt-0.5">{campus.totalSeats}</p>
            </div>
          </div>

          {/* Campus Facilities */}
          {campus.facilities && campus.facilities.length > 0 && (
            <div className="mt-3.5 flex flex-wrap gap-1.5 items-center">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 mr-1">Facilities:</span>
              {campus.facilities.map((fac, idx) => (
                <span key={idx} className="text-[11px] px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 text-slate-700 dark:text-slate-300">
                  {fac}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Program Search & Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="flex-1">
          <label htmlFor="search-program" className="sr-only">Search engineering programs</label>
          <input
            id="search-program"
            type="search"
            placeholder="Filter programs (e.g. Civil, Computer, Electrical)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
          />
        </div>
        <div className="w-full sm:w-56">
          <label htmlFor="filter-program" className="sr-only">Filter by specific program</label>
          <select
            id="filter-program"
            value={programFilter}
            onChange={(e) => setProgramFilter(e.target.value)}
            className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
          >
            <option value="All">All Disciplines</option>
            {ALL_PROGRAMS.map(prog => (
              <option key={prog} value={prog}>{prog}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Verified Seat Matrix Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-2xs">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 text-slate-600 dark:text-slate-400 font-semibold text-xs">
              <th scope="col" className="p-3 sm:p-3.5">Engineering Discipline</th>
              <th scope="col" className="p-3 sm:p-3.5 text-center">Regular (Scholarship)</th>
              <th scope="col" className="p-3 sm:p-3.5 text-center">Full Fee (Paying)</th>
              <th scope="col" className="p-3 sm:p-3.5 text-right">Total Intake</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {filteredSeats.length > 0 ? (
              filteredSeats.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 dark:hover:bg-slate-850/50 transition-colors">
                  <td className="p-3 sm:p-3.5 font-medium text-slate-900 dark:text-white">
                    {item.program}
                  </td>
                  <td className="p-3 sm:p-3.5 text-center font-mono font-medium text-slate-700 dark:text-slate-300">
                    {item.regular}
                  </td>
                  <td className="p-3 sm:p-3.5 text-center font-mono font-medium text-slate-700 dark:text-slate-300">
                    {item.fullFee}
                  </td>
                  <td className="p-3 sm:p-3.5 text-right font-mono font-bold text-slate-900 dark:text-white">
                    {item.total}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-6 text-center text-slate-500 text-xs">
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
        text="Seat figures are strictly verified against official IOE Admission Guidelines. Regular seats represent government-subsidized positions, while Full Fee seats require standard tuition installments. Quota reservations (such as Female Quota, Janajati, Dalit, and Remote Districts) are distributed internally within each program's allocated capacity."
      />

    </div>
  );
}
