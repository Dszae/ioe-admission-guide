import React from 'react';
import { FINANCIALS } from '../data/admissionData';
import InfoDisclaimer from './common/InfoDisclaimer';

export default function FinancialsBreakdown({ isDark }) {
  return (
    <div className="animate-fadeIn">
      
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white print:text-black">
          4-Year Engineering Financial Investment Breakdown
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
          A realistic comparative financial analysis of 4-year tuition fees and estimated living expenditures across Regular, Full Fee, and Affiliated paths.
        </p>
      </div>

      {/* Financials Cards Grid */}
      <div className="grid lg:grid-cols-3 gap-5">
        {Object.entries(FINANCIALS).map(([typeKey, item]) => (
          <div
            key={typeKey}
            className={`p-5 sm:p-6 rounded-2xl border flex flex-col justify-between transition-colors ${
              isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                  {typeKey} Category
                </span>
              </div>

              <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white mb-2">
                {item.type}
              </h3>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                {item.notes}
              </p>

              <div className="space-y-4 mb-6">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">4-Year Total Tuition</span>
                  <span className="text-sm font-mono font-bold text-slate-900 dark:text-white mt-0.5 block">{item.tuition}</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Est. Living Costs (4 Yrs)</span>
                  <span className="text-sm font-mono font-bold text-slate-900 dark:text-white mt-0.5 block">{item.living}</span>
                  <span className="text-[10px] text-slate-500 mt-0.5 block">Estimated at ~NPR 10k/month (food + room)</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Total Estimated Investment</span>
              <span className="text-lg sm:text-xl font-mono font-extrabold text-cyan-600 dark:text-cyan-400">{item.total}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Installment Schedule & Financial Tips */}
      <div className="mt-8 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
          Semester Installment Payment Rules
        </h4>
        <div className="grid sm:grid-cols-2 gap-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          <div>
            <strong className="text-slate-800 dark:text-slate-200 block mb-1">Constituent Campuses (Pulchowk, Thapathali, WRC, ERC, ChEC):</strong>
            Full Fee tuition is divided across 8 semesters. The first installment (~NPR 80,000 to 1,20,000 depending on faculty) is paid upon initial seat acceptance at the campus bank counter. Subsequent installments are payable before each semester examination registration.
          </div>
          <div>
            <strong className="text-slate-800 dark:text-slate-200 block mb-1">Hostel & Accommodation Subsidies:</strong>
            Campus hostels at Pulchowk, WRC, and ERC provide highly subsidized accommodation (~NPR 1,500 to 3,000/month room rent) awarded through separate hostel merit applications following admission.
          </div>
        </div>
      </div>

      <InfoDisclaimer
        isDark={isDark}
        title="Fee Structure Revision Notice"
        text="Tuition figures reflect published fee structures and semester ordinances for Tribhuvan University Institute of Engineering. Living costs are heuristic estimates based on current Kathmandu and regional living expense indices and may vary based on personal lifestyle."
      />

    </div>
  );
}

