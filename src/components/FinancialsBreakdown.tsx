import { FINANCIALS } from '../data/admissionData';

export interface FinancialsBreakdownProps {
  isDark?: boolean;
}

export default function FinancialsBreakdown({ isDark: _isDark = false }: FinancialsBreakdownProps) {
  return (
    <div className="animate-fadeIn space-y-6">
      
      <div>
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white print:text-black">
          4-Year Engineering Financial Investment Breakdown
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
          A realistic comparative financial analysis of 4-year tuition fees and estimated living expenditures across Regular, Full Fee, Foreign, and Affiliated paths for the <strong>2083/084 academic intake</strong>.
        </p>
      </div>

      {/* Financials Cards Grid: 4 Paths */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {Object.entries(FINANCIALS).map(([typeKey, item]) => (
          <div
            key={typeKey}
            className="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/60 shadow-2xs flex flex-col justify-between transition-all hover:border-slate-300 dark:hover:border-slate-700"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/50">
                  {typeKey} Category
                </span>
              </div>

              <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-2 leading-snug">
                {item.type}
              </h3>

              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                {item.notes}
              </p>

              {/* Semester Breakdown Badges (if available) */}
              {item.semBreakdown && (
                <div className="mb-4 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-700/60 space-y-1 text-[10.5px]">
                  <div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
                    <span>Sem. Tuition:</span>
                    <strong className="text-slate-800 dark:text-slate-200">{item.semBreakdown.tuitionPerSem}</strong>
                  </div>
                  <div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
                    <span>All Sem. Charges:</span>
                    <strong className="text-slate-800 dark:text-slate-200">{item.semBreakdown.allChargesPerSem}</strong>
                  </div>
                  <div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
                    <span>One-Time Charges:</span>
                    <strong className="text-slate-800 dark:text-slate-200">{item.semBreakdown.oneTimeCharges}</strong>
                  </div>
                  <div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
                    <span>Refundable Deposit:</span>
                    <strong className="text-slate-800 dark:text-slate-200">{item.semBreakdown.refundableDeposits}</strong>
                  </div>
                  <div className="pt-1 mt-1 border-t border-slate-200 dark:border-slate-700/70 flex justify-between items-center text-blue-700 dark:text-blue-400 font-semibold">
                    <span>1st Payment (w/ deposit):</span>
                    <span>{item.semBreakdown.firstPayment}</span>
                  </div>
                </div>
              )}

              {/* Tuition & Living Cost Boxes */}
              <div className="space-y-2.5 mb-4">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 block">
                    {typeKey === 'Affiliated' ? '4-Year Tuition and Academic Fees' : '4-Year Total Tuition and Charges'}
                  </span>
                  <span className="text-sm font-bold tracking-tight text-slate-900 dark:text-white mt-0.5 block">
                    {item.tuition}
                  </span>
                  {item.tuitionSubtext && (
                    <span className="text-[10px] text-slate-500 italic mt-0.5 block">
                      *({item.tuitionSubtext})*
                    </span>
                  )}
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 block">Est. Living Expenses (4 Yrs)</span>
                  <span className="text-sm font-bold tracking-tight text-slate-900 dark:text-white mt-0.5 block">{item.living}</span>
                  <span className="text-[10px] text-slate-500 mt-0.5 block">Estimated at ~NPR 10,000/month (food + room).</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 block mb-0.5">Total Estimated Investment</span>
              <span className="text-base sm:text-lg font-bold tracking-tight text-blue-700 dark:text-blue-400 block">
                {item.total}
              </span>
              {item.totalFootnote && (
                <span className="text-[10px] text-slate-500 italic mt-1 block leading-tight">
                  *{item.totalFootnote}*
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Semester Installment Payment Rules */}
      <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
          Semester Installment Payment Rules
        </h3>
        
        <div className="grid md:grid-cols-2 gap-5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 dark:text-white">Constituent Campuses:</h4>
            <p>
              For the 2083/084 intake, the published fee schedule separates the initial admission payment from subsequent semester charges.
            </p>
            <ul className="space-y-1.5 list-disc list-inside bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
              <li>
                <strong className="text-slate-800 dark:text-slate-200">Regular:</strong> First admission payment of approximately NPR 17,669.
              </li>
              <li>
                <strong className="text-slate-800 dark:text-slate-200">Full Fee:</strong> First admission payment of approximately NPR 2,16,470.
              </li>
              <li>
                <strong className="text-slate-800 dark:text-slate-200">Foreign:</strong> First admission payment of approximately NPR 5,35,599.
              </li>
            </ul>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              The first payment includes the initial semester's charges, one-time charges, and applicable refundable deposits. Subsequent semester payments follow the published semester fee schedule and campus payment instructions.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 dark:text-white">Hostel & Living Costs:</h4>
            <p>
              Campus hostel availability, eligibility, rent, and maintenance charges depend on the relevant campus's current rules and allocation process. Hostel accommodation is not guaranteed, and the NPR 10,000/month living budget is an estimate rather than an official IOE rate.
            </p>
            <div className="p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/50 text-[11px] text-blue-900 dark:text-blue-200">
              <strong>Planning Tip:</strong> Constituent campus hostels at Pulchowk, WRC, and ERC provide subsidized accommodation awarded through separate merit lists after academic admission confirmation.
            </div>
          </div>
        </div>
      </div>

      {/* Official Fee Structure Revision Notice */}
      <div className="p-4 sm:p-5 rounded-2xl border border-amber-200 dark:border-amber-900/50 bg-amber-50/60 dark:bg-amber-950/30 text-xs text-amber-900 dark:text-amber-200 space-y-2">
        <h4 className="font-bold text-sm text-amber-950 dark:text-amber-100 flex items-center gap-1.5">
          <svg className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          Fee Structure Revision Notice
        </h4>
        <p className="leading-relaxed">
          The constituent-campus figures above are based on the <strong>IOE B.E./B.Arch. Booklet 2083</strong>, for the <strong>2083/084 academic intake</strong>. Fee schedules may be revised for subsequent admission years. Living expenses are illustrative estimates and may differ according to location, accommodation, food, transport, and personal expenses. The affiliated-college fee range requires confirmation from the specific institution.
        </p>
        <p className="pt-1 font-medium">
          <strong>Official reference:</strong>{' '}
          <a
            href="https://ioe.tu.edu.np/downloads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 dark:text-blue-400 underline underline-offset-2 hover:text-blue-900"
          >
            https://ioe.tu.edu.np/downloads
          </a>
        </p>
      </div>

    </div>
  );
}
