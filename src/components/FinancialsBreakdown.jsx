import React from 'react';
import { FINANCIALS } from '../data/admissionData';
import InfoDisclaimer from './common/InfoDisclaimer';

export default function FinancialsBreakdown({ isDark }) {
  return (
    <div className="animate-fadeIn">
      
      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white print:text-black">
          4-Year Engineering Financial Investment Breakdown
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
          A realistic comparative financial analysis of 4-year tuition fees and estimated living expenditures across Regular, Full Fee, and Affiliated paths.
        </p>
      </div>

      {/* Financials Cards Grid */}
      <div className="grid lg:grid-cols-3 gap-4 sm:gap-5">
        {Object.entries(FINANCIALS).map(([typeKey, item]) => (
          <div
            key={typeKey}
            className="p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/60 shadow-2xs flex flex-col justify-between transition-colors"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/50">
                  {typeKey} Category
                </span>
              </div>

              <h3 className="font-bold text-base text-slate-900 dark:text-white mb-1.5">
                {item.type}
              </h3>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                {item.notes}
              </p>

              <div className="space-y-3 mb-5">
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                  <span className="text-[11px] font-medium text-slate-500 block">4-Year Total Tuition</span>
                  <span className="text-sm font-bold tracking-tight tabular-nums text-slate-900 dark:text-white mt-0.5 block">{item.tuition}</span>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                  <span className="text-[11px] font-medium text-slate-500 block">Est. Living Expenses (4 Yrs)</span>
                  <span className="text-sm font-bold tracking-tight tabular-nums text-slate-900 dark:text-white mt-0.5 block">{item.living}</span>
                  <span className="text-[10px] text-slate-500 mt-0.5 block">Estimated at ~NPR 10k/month (food + room)</span>
                </div>
              </div>
            </div>

            <div className="pt-3.5 border-t border-slate-100 dark:border-slate-800">
              <span className="text-[11px] font-medium text-slate-500 block mb-0.5">Total Estimated Investment</span>
              <span className="text-base sm:text-lg font-bold tracking-tight tabular-nums text-blue-700 dark:text-blue-400">{item.total}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Installment Schedule & Financial Tips */}
      <div className="mt-6 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800">
        <h4 className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2.5">
          Semester Installment Payment Rules
        </h4>
        <div className="grid sm:grid-cols-2 gap-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          <div>
            <strong className="text-slate-800 dark:text-slate-200 block mb-1">Constituent Campuses:</strong>
            Full Fee tuition is divided across 8 semesters. The first installment (~NPR 80,000 to 1,20,000 depending on faculty) is paid upon initial seat acceptance at the campus bank counter. Subsequent installments are payable before each semester examination registration.
          </div>
          <div>
            <strong className="text-slate-800 dark:text-slate-200 block mb-1">Hostel & Living Costs:</strong>
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
