export interface FinancialsBreakdownProps {
  isDark?: boolean;
}

export default function FinancialsBreakdown({ isDark: _isDark = false }: FinancialsBreakdownProps) {
  return (
    <div className="animate-fadeIn space-y-6">
      
      {/* Header */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white print:text-black">
            4-Year Engineering Financial Investment Comparison
          </h2>
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/50">
            IOE Booklet 2083 (2083/084 Intake)
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          A side-by-side comparative financial analysis of 4-year tuition fees, one-time charges, refundable deposits, initial payments, and estimated living expenditures across all enrollment pathways.
        </p>
      </div>

      {/* 4 Quick Summary Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        
        {/* Regular */}
        <div className="p-4 rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/40 dark:bg-blue-950/20 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-1 mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                Regular Subsidized
              </span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-600 text-white font-medium">
                Govt. Quota
              </span>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400 block mb-0.5">4-Yr Institutional Dues:</span>
            <span className="text-base sm:text-lg font-mono font-bold text-slate-900 dark:text-white block">
              Rs. 63,087
            </span>
          </div>
          <div className="pt-2 mt-2 border-t border-blue-100 dark:border-blue-900/50 flex justify-between items-center text-xs">
            <span className="text-slate-500 text-[11px]">1st Payment:</span>
            <span className="font-mono font-bold text-blue-700 dark:text-blue-300">Rs. 17,669</span>
          </div>
        </div>

        {/* Full Fee */}
        <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/60 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-1 mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Full Fee Paying
              </span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium">
                Constituent
              </span>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400 block mb-0.5">4-Yr Institutional Dues:</span>
            <span className="text-base sm:text-lg font-mono font-bold text-slate-900 dark:text-white block">
              Rs. 5,45,832
            </span>
          </div>
          <div className="pt-2 mt-2 border-t border-slate-100 dark:border-slate-700/60 flex justify-between items-center text-xs">
            <span className="text-slate-500 text-[11px]">1st Payment:</span>
            <span className="font-mono font-bold text-blue-700 dark:text-blue-400">Rs. 2,16,470</span>
          </div>
        </div>

        {/* Foreign */}
        <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/60 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-1 mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Foreign Students
              </span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium">
                International
              </span>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400 block mb-0.5">4-Yr Institutional Dues:</span>
            <span className="text-base sm:text-lg font-mono font-bold text-slate-900 dark:text-white block">
              Rs. 14,50,761
            </span>
          </div>
          <div className="pt-2 mt-2 border-t border-slate-100 dark:border-slate-700/60 flex justify-between items-center text-xs">
            <span className="text-slate-500 text-[11px]">1st Payment:</span>
            <span className="font-mono font-bold text-blue-700 dark:text-blue-400">Rs. 5,35,599</span>
          </div>
        </div>

        {/* Affiliated */}
        <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/60 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-1 mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Affiliated Private
              </span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium">
                10 Colleges
              </span>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400 block mb-0.5">4-Yr Academic Tuition:</span>
            <span className="text-base sm:text-lg font-mono font-bold text-slate-900 dark:text-white block">
              ≈ NPR 10L–16L
            </span>
          </div>
          <div className="pt-2 mt-2 border-t border-slate-100 dark:border-slate-700/60 flex justify-between items-center text-xs">
            <span className="text-slate-500 text-[11px]">1st Payment:</span>
            <span className="font-mono font-medium text-slate-700 dark:text-slate-300">~NPR 2L–4L</span>
          </div>
        </div>

      </div>

      {/* Main Side-by-Side Comparison Container */}
      <div className="space-y-3">
        
        {/* Mobile Horizontal Scroll Hint */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 sm:hidden px-1">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-blue-600 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            Swipe horizontally to compare schemes
          </span>
          <span className="text-[10px] uppercase font-bold text-blue-600 dark:text-blue-400">4 Categories</span>
        </div>

        {/* Side-by-Side Table with Sticky First Column for Smooth Mobile Reading */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-2xs">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50/90 dark:bg-slate-900/80">
                <th className="sticky left-0 bg-slate-50 dark:bg-slate-900 p-3.5 sm:p-4 font-bold text-slate-900 dark:text-white z-10 border-r border-slate-200/60 dark:border-slate-700/60 min-w-[150px] sm:min-w-[180px]">
                  Financial Component
                </th>
                <th className="p-3.5 sm:p-4 font-bold text-blue-700 dark:text-blue-400 min-w-[140px] sm:min-w-[160px]">
                  Regular (Subsidized)
                </th>
                <th className="p-3.5 sm:p-4 font-bold text-slate-900 dark:text-white min-w-[140px] sm:min-w-[160px]">
                  Full Fee (Constituent)
                </th>
                <th className="p-3.5 sm:p-4 font-bold text-slate-900 dark:text-white min-w-[140px] sm:min-w-[160px]">
                  Foreign Students
                </th>
                <th className="p-3.5 sm:p-4 font-bold text-slate-900 dark:text-white min-w-[140px] sm:min-w-[160px]">
                  Affiliated Colleges
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              
              {/* Semester Tuition */}
              <tr>
                <td className="sticky left-0 bg-white dark:bg-slate-800 p-3.5 sm:p-4 font-semibold text-slate-900 dark:text-white z-10 border-r border-slate-200/60 dark:border-slate-700/60">
                  Semester Pure Tuition
                </td>
                <td className="p-3.5 sm:p-4 font-mono font-medium">Rs. 2,862</td>
                <td className="p-3.5 sm:p-4 font-mono font-medium">Rs. 46,854</td>
                <td className="p-3.5 sm:p-4 font-mono font-medium">Rs. 1,34,754</td>
                <td className="p-3.5 sm:p-4 font-mono text-slate-500">College Specific</td>
              </tr>

              {/* All Charges Per Semester */}
              <tr className="bg-slate-50/40 dark:bg-slate-900/20">
                <td className="sticky left-0 bg-slate-50/90 dark:bg-slate-900/90 p-3.5 sm:p-4 font-semibold text-slate-900 dark:text-white z-10 border-r border-slate-200/60 dark:border-slate-700/60">
                  All Charges / Semester
                </td>
                <td className="p-3.5 sm:p-4 font-mono font-medium">Rs. 6,974</td>
                <td className="p-3.5 sm:p-4 font-mono font-medium">Rs. 52,766</td>
                <td className="p-3.5 sm:p-4 font-mono font-medium">Rs. 1,47,166</td>
                <td className="p-3.5 sm:p-4 font-mono text-slate-500">College Specific</td>
              </tr>

              {/* One-Time Campus Fee */}
              <tr>
                <td className="sticky left-0 bg-white dark:bg-slate-800 p-3.5 sm:p-4 font-semibold text-slate-900 dark:text-white z-10 border-r border-slate-200/60 dark:border-slate-700/60">
                  One-Time Campus Fee
                </td>
                <td className="p-3.5 sm:p-4 font-mono font-medium">Rs. 7,295</td>
                <td className="p-3.5 sm:p-4 font-mono font-medium">Rs. 1,23,704</td>
                <td className="p-3.5 sm:p-4 font-mono font-medium">Rs. 2,73,433</td>
                <td className="p-3.5 sm:p-4 font-mono text-slate-500">Varies (~15k–35k)</td>
              </tr>

              {/* Refundable Caution Deposit */}
              <tr className="bg-slate-50/40 dark:bg-slate-900/20">
                <td className="sticky left-0 bg-slate-50/90 dark:bg-slate-900/90 p-3.5 sm:p-4 font-semibold text-slate-900 dark:text-white z-10 border-r border-slate-200/60 dark:border-slate-700/60">
                  Refundable Deposit (Refunded)
                </td>
                <td className="p-3.5 sm:p-4 font-mono font-medium">Rs. 3,400</td>
                <td className="p-3.5 sm:p-4 font-mono font-medium">Rs. 40,000</td>
                <td className="p-3.5 sm:p-4 font-mono font-medium">Rs. 1,15,000</td>
                <td className="p-3.5 sm:p-4 font-mono text-slate-500">Varies (~10k–30k)</td>
              </tr>

              {/* 1st Admission Payment */}
              <tr className="bg-blue-50/50 dark:bg-blue-950/30">
                <td className="sticky left-0 bg-blue-50/95 dark:bg-blue-950/90 p-3.5 sm:p-4 font-bold text-blue-900 dark:text-blue-200 z-10 border-r border-blue-200/60 dark:border-blue-800/60">
                  1st Admission Payment
                  <span className="block text-[10px] font-normal text-blue-700 dark:text-blue-300">
                    Sem 1 + One-Time + Deposit
                  </span>
                </td>
                <td className="p-3.5 sm:p-4 font-mono font-bold text-blue-700 dark:text-blue-300">Rs. 17,669</td>
                <td className="p-3.5 sm:p-4 font-mono font-bold text-blue-700 dark:text-blue-300">Rs. 2,16,470</td>
                <td className="p-3.5 sm:p-4 font-mono font-bold text-blue-700 dark:text-blue-300">Rs. 5,35,599</td>
                <td className="p-3.5 sm:p-4 font-mono text-blue-800 dark:text-blue-200">~NPR 2L–4L</td>
              </tr>

              {/* Remaining 7 Semesters Total */}
              <tr>
                <td className="sticky left-0 bg-white dark:bg-slate-800 p-3.5 sm:p-4 font-semibold text-slate-900 dark:text-white z-10 border-r border-slate-200/60 dark:border-slate-700/60">
                  Remaining 7 Semesters Dues
                  <span className="block text-[10px] font-normal text-slate-500 dark:text-slate-400">
                    7 × All Semester Charges
                  </span>
                </td>
                <td className="p-3.5 sm:p-4 font-mono font-medium">Rs. 48,818</td>
                <td className="p-3.5 sm:p-4 font-mono font-medium">Rs. 3,69,362</td>
                <td className="p-3.5 sm:p-4 font-mono font-medium">Rs. 10,30,162</td>
                <td className="p-3.5 sm:p-4 font-mono text-slate-500">College Specific</td>
              </tr>

              {/* 4-Year Total Tuition & Institutional Fees */}
              <tr className="bg-slate-50/70 dark:bg-slate-900/40">
                <td className="sticky left-0 bg-slate-50/95 dark:bg-slate-900/95 p-3.5 sm:p-4 font-bold text-slate-900 dark:text-white z-10 border-r border-slate-200/60 dark:border-slate-700/60">
                  4-Yr Total Institutional Fees
                  <span className="block text-[10px] font-normal text-slate-500 dark:text-slate-400">
                    8 Sems + One-Time (Excl. Deposit)
                  </span>
                </td>
                <td className="p-3.5 sm:p-4 font-mono font-bold text-slate-900 dark:text-white">Rs. 63,087</td>
                <td className="p-3.5 sm:p-4 font-mono font-bold text-slate-900 dark:text-white">Rs. 5,45,832</td>
                <td className="p-3.5 sm:p-4 font-mono font-bold text-slate-900 dark:text-white">Rs. 14,50,761</td>
                <td className="p-3.5 sm:p-4 font-mono font-bold text-slate-900 dark:text-white">≈ NPR 10L–16L</td>
              </tr>

              {/* Estimated 4-Year Living Cost */}
              <tr>
                <td className="sticky left-0 bg-white dark:bg-slate-800 p-3.5 sm:p-4 font-semibold text-slate-900 dark:text-white z-10 border-r border-slate-200/60 dark:border-slate-700/60">
                  Est. 4-Yr Living Budget
                  <span className="block text-[10px] font-normal text-slate-500 dark:text-slate-400">
                    48 months @ ~10,000/mo
                  </span>
                </td>
                <td className="p-3.5 sm:p-4 font-mono">≈ NPR 4,80,000</td>
                <td className="p-3.5 sm:p-4 font-mono">≈ NPR 4,80,000</td>
                <td className="p-3.5 sm:p-4 font-mono">≈ NPR 4,80,000</td>
                <td className="p-3.5 sm:p-4 font-mono">≈ NPR 4,80,000</td>
              </tr>

              {/* Total Estimated Investment */}
              <tr className="bg-emerald-50/60 dark:bg-emerald-950/30">
                <td className="sticky left-0 bg-emerald-50/95 dark:bg-emerald-950/95 p-3.5 sm:p-4 font-bold text-emerald-900 dark:text-emerald-200 z-10 border-r border-emerald-200/60 dark:border-emerald-800/60">
                  Total Estimated Investment
                  <span className="block text-[10px] font-normal text-emerald-700 dark:text-emerald-300">
                    Institutional + Living Combined
                  </span>
                </td>
                <td className="p-3.5 sm:p-4 font-mono font-bold text-emerald-700 dark:text-emerald-400 text-sm">
                  ≈ NPR 5,43,087
                </td>
                <td className="p-3.5 sm:p-4 font-mono font-bold text-emerald-700 dark:text-emerald-400 text-sm">
                  ≈ NPR 10,25,832
                </td>
                <td className="p-3.5 sm:p-4 font-mono font-bold text-emerald-700 dark:text-emerald-400 text-sm">
                  ≈ NPR 19,30,761
                </td>
                <td className="p-3.5 sm:p-4 font-mono font-bold text-emerald-700 dark:text-emerald-400 text-sm">
                  ≈ NPR 14.8L–20.8L
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

      {/* Installment Rules & Hostel Living Guidelines */}
      <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-2xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
          Constituent Campus Installment & Living Guidelines
        </h3>
        
        <div className="grid md:grid-cols-2 gap-5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 dark:text-white">Constituent Campus Payment Cadence:</h4>
            <p>
              For the 2083/084 academic intake, the published fee schedule separates the initial admission payment from subsequent semester dues:
            </p>
            <ul className="space-y-1.5 list-disc list-inside bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
              <li>
                <strong className="text-slate-800 dark:text-slate-200">Regular:</strong> First admission payment of <strong>NPR 17,669</strong> (includes Rs. 3,400 refundable deposit).
              </li>
              <li>
                <strong className="text-slate-800 dark:text-slate-200">Full Fee:</strong> First admission payment of <strong>NPR 2,16,470</strong> (includes Rs. 40,000 refundable deposit).
              </li>
              <li>
                <strong className="text-slate-800 dark:text-slate-200">Foreign:</strong> First admission payment of <strong>NPR 5,35,599</strong> (includes Rs. 1,15,000 refundable deposit).
              </li>
            </ul>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              The first installment is paid at admission confirmation. Semesters 2 through 8 are paid in 6-month cycles prior to each semester start.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 dark:text-white">Hostel Accommodation & Living Costs:</h4>
            <p>
              Campus hostel eligibility and allocation depend on each constituent campus's quota system and entrance rank merit lists. Hostel accommodation is subsidized but not guaranteed for all students.
            </p>
            <div className="p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/50 text-[11px] text-blue-900 dark:text-blue-200 space-y-1">
              <p>
                <strong>Estimated Off-Campus Living:</strong> ≈ NPR 10,000/month covers food and shared room rent near Pulchowk, Thapathali, WRC, or ERC.
              </p>
              <p>
                <strong>Affiliated Private Colleges:</strong> Must offer 10% mandatory full scholarships to students based strictly on IOE entrance merit rank.
              </p>
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
          Official Fee Structure Source & Revision Notice
        </h4>
        <p className="leading-relaxed">
          The constituent-campus figures above are derived strictly from the official <strong>IOE B.E./B.Arch. Booklet 2083</strong> for the <strong>2083/084 academic intake</strong>. Living expenses are illustrative estimates and vary according to personal choices, campus location, and room accommodation. The affiliated-college fee range requires confirmation from each respective college administration.
        </p>
        <p className="pt-1 font-medium">
          <strong>Official primary reference:</strong>{' '}
          <a
            href="https://ioe.tu.edu.np/downloads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 dark:text-blue-400 underline underline-offset-2 hover:text-blue-900 font-mono"
          >
            https://ioe.tu.edu.np/downloads
          </a>
        </p>
      </div>

    </div>
  );
}
