import React, { useState } from 'react';
import { FACULTY_DATA } from '../data/admissionData';
import InfoDisclaimer from './common/InfoDisclaimer';

export default function FacultyCompare({ isDark }) {
  const [compA, setCompA] = useState('Computer Engineering');
  const [compB, setCompB] = useState('Electronics, Communication and Information Engineering');

  const facultyA = FACULTY_DATA[compA] || {};
  const facultyB = FACULTY_DATA[compB] || {};

  const overlapAB = facultyA.overlap?.[compB] || '< 15%';

  return (
    <div className="animate-fadeIn">
      
      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white print:text-black">
          Engineering Faculty & Syllabus Comparator
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
          Compare curriculum overlaps, primary technical domains, and career outcomes between different IOE undergraduate engineering disciplines.
        </p>
      </div>

      {/* Selectors */}
      <div className="grid sm:grid-cols-2 gap-4 mb-6 print:hidden">
        <div>
          <label htmlFor="compare-a" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            Discipline A
          </label>
          <select
            id="compare-a"
            value={compA}
            onChange={(e) => setCompA(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
          >
            {Object.keys(FACULTY_DATA).map(prog => (
              <option key={prog} value={prog}>{prog}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="compare-b" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            Discipline B
          </label>
          <select
            id="compare-b"
            value={compB}
            onChange={(e) => setCompB(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
          >
            {Object.keys(FACULTY_DATA).map(prog => (
              <option key={prog} value={prog}>{prog}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Overlap Summary Banner */}
      <div className="p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 text-center sm:text-left shadow-2xs">
        <div>
          <span className="text-xs font-semibold text-blue-700 dark:text-blue-400 block mb-0.5">
            Curriculum Foundation Overlap
          </span>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Estimated shared foundation coursework (Math, Physics, Basic EE, Programming) across all 8 semesters.
          </p>
        </div>
        <div className="text-2xl sm:text-3xl font-mono font-bold text-slate-900 dark:text-white flex-shrink-0">
          {overlapAB}
        </div>
      </div>

      {/* Side-by-Side Comparison Cards */}
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
        
        {/* Card A */}
        <div className="p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850/60 shadow-2xs">
          <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-1.5">
            {compA}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            {facultyA.description}
          </p>

          <div className="mb-4">
            <span className="text-[11px] font-semibold text-slate-500 block mb-1.5">Core Focus Areas</span>
            <div className="flex flex-wrap gap-1.5">
              {facultyA.tags?.map(tag => (
                <span key={tag} className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="text-[11px] font-semibold text-slate-500 block mb-1.5">Common Career Trajectories</span>
            <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
              {facultyA.careers?.map(career => (
                <li key={career} className="flex items-center gap-1.5">
                  <span className="text-blue-600 dark:text-blue-400">•</span> {career}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card B */}
        <div className="p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850/60 shadow-2xs">
          <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-1.5">
            {compB}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            {facultyB.description}
          </p>

          <div className="mb-4">
            <span className="text-[11px] font-semibold text-slate-500 block mb-1.5">Core Focus Areas</span>
            <div className="flex flex-wrap gap-1.5">
              {facultyB.tags?.map(tag => (
                <span key={tag} className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="text-[11px] font-semibold text-slate-500 block mb-1.5">Common Career Trajectories</span>
            <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
              {facultyB.careers?.map(career => (
                <li key={career} className="flex items-center gap-1.5">
                  <span className="text-blue-600 dark:text-blue-400">•</span> {career}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      <InfoDisclaimer
        isDark={isDark}
        title="Curriculum Overlap Reference"
        text="All IOE engineering disciplines share common foundational coursework during the first year (Engineering Mathematics, Physics, Chemistry, Basic Electrical, Applied Mechanics, and C Programming). Overlap percentages represent structural commonality across all 8 semesters based on TU IOE course syllabi."
      />

    </div>
  );
}
