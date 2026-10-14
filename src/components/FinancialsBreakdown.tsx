import { useState } from 'react';
import { FINANCIALS } from '../data/admissionData';

export interface FinancialsBreakdownProps {
  isDark?: boolean;
}

type FinancialCategoryKey = 'Regular' | 'FullFee' | 'Foreign' | 'Affiliated' | 'all';

interface CategoryTab {
  id: FinancialCategoryKey;
  label: string;
  badge: string;
  subtext: string;
}

const CATEGORY_TABS: CategoryTab[] = [
  { id: 'Regular', label: 'Regular (Subsidized)', badge: 'Subsidized', subtext: 'Govt. Quota' },
  { id: 'FullFee', label: 'Full Fee (Paying)', badge: 'Constituent', subtext: 'Self-Financed' },
  { id: 'Foreign', label: 'Foreign Students', badge: 'International', subtext: 'Non-Nepali' },
  { id: 'Affiliated', label: 'Affiliated Colleges', badge: 'Private', subtext: 'TU Affiliated' },
  { id: 'all', label: 'Side-by-Side Comparison', badge: 'Overview', subtext: 'Compare All' }
];

export default function FinancialsBreakdown({ isDark: _isDark = false }: FinancialsBreakdownProps) {
  const [selectedCategory, setSelectedCategory] = useState<FinancialCategoryKey>('Regular');

  const selectedData = selectedCategory !== 'all' ? FINANCIALS[selectedCategory] : null;

  return (
    <div className="animate-fadeIn space-y-6">
      
      {/* Header */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white print:text-black">
            4-Year Engineering Financial Investment Breakdown
          </h2>
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/50">
            IOE Booklet 2083 (2083/084 Intake)
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          A transparent, itemized financial analysis of tuition fees, recurring semester dues, one-time fees, refundable caution deposits, and living budgets across all enrollment pathways.
        </p>
      </div>

      {/* Category Selector Tabs - Touch-friendly & Mobile-ready */}
      <div className="space-y-2 print:hidden">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
          Select Fee Category:
        </label>
        
        {/* Horizontal scroll container on mobile, flex-wrap on desktop */}
        <div 
          className="flex gap-2 overflow-x-auto no-scrollbar pb-1 sm:flex-wrap"
          role="tablist" 
          aria-label="Fee Structure Categories"
        >
          {CATEGORY_TABS.map(tab => {
            const isSelected = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isSelected}
                type="button"
                onClick={() => setSelectedCategory(tab.id)}
                className={`flex-shrink-0 min-h-[44px] px-3.5 py-2 rounded-xl text-left transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm ring-2 ring-blue-500/20'
                    : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold leading-tight">{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded font-medium ${
                    isSelected 
                      ? 'bg-blue-700 text-blue-100' 
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                  }`}>
                    {tab.badge}
                  </span>
                </div>
                <span className={`text-[10.5px] block mt-0.5 ${
                  isSelected ? 'text-blue-100' : 'text-slate-400 dark:text-slate-400'
                }`}>
                  {tab.subtext}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* View 1: Focused Detailed Category View */}
      {selectedCategory !== 'all' && selectedData && (
        <div className="space-y-5 animate-fadeIn">
          
          {/* Category Banner */}
          <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/70 shadow-2xs">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/50">
                {selectedCategory} Category Focus
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Applicable to 2083/084 B.E. / B.Arch Admissions
              </span>
            </div>
            <h3 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white mb-1.5">
              {selectedData.type}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {selectedData.notes}
            </p>
          </div>

          {/* 4 Big Stat Metric Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            
            {/* Card 1: 4-Year Tuition */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/60 shadow-2xs flex flex-col justify-between">
              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block mb-1">
                {selectedCategory === 'Affiliated' ? '4-Yr Academic Tuition' : '4-Yr Total Tuition & Fees'}
              </span>
              <div>
                <span className="text-base sm:text-xl font-mono font-bold text-slate-900 dark:text-white block">
                  {selectedData.tuition}
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-1">
                  Excludes refundable deposit
                </span>
              </div>
            </div>

            {/* Card 2: 1st Payment */}
            <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/40 dark:bg-blue-950/20 shadow-2xs flex flex-col justify-between">
              <span className="text-[11px] font-semibold text-blue-700 dark:text-blue-400 block mb-1">
                Initial Admission Payment
              </span>
              <div>
                <span className="text-base sm:text-xl font-mono font-bold text-blue-700 dark:text-blue-300 block">
                  {selectedData.semBreakdown?.firstPayment || 'Varies by College'}
                </span>
                <span className="text-[10px] text-blue-600/80 dark:text-blue-300/80 block mt-1">
                  Includes 1st sem + deposit
                </span>
              </div>
            </div>

            {/* Card 3: Living Cost */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/60 shadow-2xs flex flex-col justify-between">
              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block mb-1">
                Est. Living Cost (4 Yrs)
              </span>
              <div>
                <span className="text-base sm:text-xl font-mono font-bold text-slate-900 dark:text-white block">
                  {selectedData.living}
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-1">
                  ≈ NPR 10,000/mo (food + room)
                </span>
              </div>
            </div>

            {/* Card 4: Total Investment */}
            <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/40 dark:bg-emerald-950/20 shadow-2xs flex flex-col justify-between">
              <span className="text-[11px] font-semibold text-emerald-800 dark:text-emerald-400 block mb-1">
                Total Est. Investment
              </span>
              <div>
                <span className="text-base sm:text-xl font-mono font-bold text-emerald-700 dark:text-emerald-300 block">
                  {selectedData.total}
                </span>
                <span className="text-[10px] text-emerald-700/80 dark:text-emerald-300/80 block mt-1">
                  Tuition + living combined
                </span>
              </div>
            </div>

          </div>

          {/* Detailed Itemized Payment Schedule */}
          {selectedData.semBreakdown && (
            <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-2xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0"></span>
                  Official Installment Payment Structure ({selectedData.type})
                </h4>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  IOE B.E./B.Arch Booklet 2083
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 pt-1">
                
                {/* 1st Payment Breakdown */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-700/80 space-y-2.5">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-200 dark:border-slate-700">
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      Stage 1: First Admission Payment
                    </span>
                    <span className="text-xs font-mono font-bold text-blue-700 dark:text-blue-400">
                      {selectedData.semBreakdown.firstPayment}
                    </span>
                  </div>
                  
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between items-center text-slate-600 dark:text-slate-300">
                      <span>• First Semester All Charges:</span>
                      <strong className="font-mono text-slate-800 dark:text-slate-200">{selectedData.semBreakdown.allChargesPerSem}</strong>
                    </div>
                    <div className="flex justify-between items-center text-slate-600 dark:text-slate-300">
                      <span>• One-Time Institutional Fee:</span>
                      <strong className="font-mono text-slate-800 dark:text-slate-200">{selectedData.semBreakdown.oneTimeCharges}</strong>
                    </div>
                    <div className="flex justify-between items-center text-slate-600 dark:text-slate-300">
                      <span>• Refundable Caution Deposit:</span>
                      <strong className="font-mono text-slate-800 dark:text-slate-200">{selectedData.semBreakdown.refundableDeposits}</strong>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200/60 dark:border-slate-700/60 leading-normal">
                    *Deposited upon securing seat allocation at campus counter. The caution deposit is fully refunded after degree completion.*
                  </p>
                </div>

                {/* Semesters 2 to 8 Breakdown */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-700/80 space-y-2.5">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-200 dark:border-slate-700">
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      Stage 2: Semesters 2 to 8 Dues
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">
                      {selectedData.semBreakdown.allChargesPerSem} / Semester
                    </span>
                  </div>
                  
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between items-center text-slate-600 dark:text-slate-300">
                      <span>• Semester Pure Tuition:</span>
                      <strong className="font-mono text-slate-800 dark:text-slate-200">{selectedData.semBreakdown.tuitionPerSem}</strong>
                    </div>
                    <div className="flex justify-between items-center text-slate-600 dark:text-slate-300">
                      <span>• Total Charges Per Semester:</span>
                      <strong className="font-mono text-slate-800 dark:text-slate-200">{selectedData.semBreakdown.allChargesPerSem}</strong>
                    </div>
                    <div className="flex justify-between items-center text-slate-600 dark:text-slate-300">
                      <span>• Total for Remaining 7 Semesters:</span>
                      <strong className="font-mono text-slate-800 dark:text-slate-200">
                        {selectedCategory === 'Regular' ? 'Rs. 48,818' : selectedCategory === 'FullFee' ? 'Rs. 3,69,362' : 'Rs. 10,30,162'}
                      </strong>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200/60 dark:border-slate-700/60 leading-normal">
                    *Paid at the beginning of each successive 6-month semester. TU semester examination board registration fees are collected separately.*
                  </p>
                </div>

              </div>
            </div>
          )}

          {/* Affiliated Notes if selected */}
          {selectedCategory === 'Affiliated' && (
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 space-y-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                Affiliated Private College Fee Architecture
              </h4>
              <p>
                Private institutions affiliated with IOE (e.g., Kathmandu Engineering College, Advanced College, Kantipur Engineering College, Khwopa) set institution-level tuition ranges between <strong>NPR 10,00,000 to NPR 16,00,000</strong> depending on the engineering faculty and scholarship quotas.
              </p>
              <div className="p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/50 text-[11px] text-blue-900 dark:text-blue-200">
                <strong>Mandatory 10% Scholarship Rule:</strong> Under Tribhuvan University affiliation bylaws, every affiliated private engineering college must award full-tuition scholarships to 10% of their enrolled batch based strictly on IOE CBT merit rank.
              </div>
            </div>
          )}

        </div>
      )}

      {/* View 2: Side-by-Side Comprehensive Comparison Mode */}
      {selectedCategory === 'all' && (
        <div className="space-y-4 animate-fadeIn">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
            Compare all 4 enrollment categories side-by-side. Constituent figures are official rates from Booklet 2083. Affiliated college figures are indicative institutional estimates.
          </div>

          {/* Responsive Comparison Cards on Mobile / Table on Desktop */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-2xs">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60">
                  <th className="p-3.5 sm:p-4 font-bold text-slate-900 dark:text-white">Financial Component</th>
                  <th className="p-3.5 sm:p-4 font-bold text-blue-700 dark:text-blue-400">Regular (Subsidized)</th>
                  <th className="p-3.5 sm:p-4 font-bold text-slate-900 dark:text-white">Full Fee (Constituent)</th>
                  <th className="p-3.5 sm:p-4 font-bold text-slate-900 dark:text-white">Foreign Students</th>
                  <th className="p-3.5 sm:p-4 font-bold text-slate-900 dark:text-white">Affiliated Colleges</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                <tr>
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-900 dark:text-white">Semester Tuition</td>
                  <td className="p-3.5 sm:p-4 font-mono font-medium">Rs. 2,862</td>
                  <td className="p-3.5 sm:p-4 font-mono font-medium">Rs. 46,854</td>
                  <td className="p-3.5 sm:p-4 font-mono font-medium">Rs. 1,34,754</td>
                  <td className="p-3.5 sm:p-4 font-mono">College Specific</td>
                </tr>
                <tr>
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-900 dark:text-white">Total Charges / Semester</td>
                  <td className="p-3.5 sm:p-4 font-mono font-medium">Rs. 6,974</td>
                  <td className="p-3.5 sm:p-4 font-mono font-medium">Rs. 52,766</td>
                  <td className="p-3.5 sm:p-4 font-mono font-medium">Rs. 1,47,166</td>
                  <td className="p-3.5 sm:p-4 font-mono">College Specific</td>
                </tr>
                <tr>
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-900 dark:text-white">One-Time Campus Fee</td>
                  <td className="p-3.5 sm:p-4 font-mono font-medium">Rs. 7,295</td>
                  <td className="p-3.5 sm:p-4 font-mono font-medium">Rs. 1,23,704</td>
                  <td className="p-3.5 sm:p-4 font-mono font-medium">Rs. 2,73,433</td>
                  <td className="p-3.5 sm:p-4 font-mono">Varies</td>
                </tr>
                <tr>
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-900 dark:text-white">Refundable Caution Deposit</td>
                  <td className="p-3.5 sm:p-4 font-mono font-medium">Rs. 3,400</td>
                  <td className="p-3.5 sm:p-4 font-mono font-medium">Rs. 40,000</td>
                  <td className="p-3.5 sm:p-4 font-mono font-medium">Rs. 1,15,000</td>
                  <td className="p-3.5 sm:p-4 font-mono">Varies (~10k–30k)</td>
                </tr>
                <tr className="bg-blue-50/30 dark:bg-blue-950/10 font-semibold">
                  <td className="p-3.5 sm:p-4 text-blue-800 dark:text-blue-300">1st Admission Payment</td>
                  <td className="p-3.5 sm:p-4 font-mono font-bold text-blue-700 dark:text-blue-400">Rs. 17,669</td>
                  <td className="p-3.5 sm:p-4 font-mono font-bold text-blue-700 dark:text-blue-400">Rs. 2,16,470</td>
                  <td className="p-3.5 sm:p-4 font-mono font-bold text-blue-700 dark:text-blue-400">Rs. 5,35,599</td>
                  <td className="p-3.5 sm:p-4 font-mono">~NPR 2L–4L</td>
                </tr>
                <tr className="font-semibold">
                  <td className="p-3.5 sm:p-4 text-slate-900 dark:text-white">4-Year Total Tuition & Fees</td>
                  <td className="p-3.5 sm:p-4 font-mono font-bold text-slate-900 dark:text-white">Rs. 63,087</td>
                  <td className="p-3.5 sm:p-4 font-mono font-bold text-slate-900 dark:text-white">Rs. 5,45,832</td>
                  <td className="p-3.5 sm:p-4 font-mono font-bold text-slate-900 dark:text-white">Rs. 14,50,761</td>
                  <td className="p-3.5 sm:p-4 font-mono">≈ NPR 10L–16L</td>
                </tr>
                <tr>
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-900 dark:text-white">Est. 4-Year Living Budget</td>
                  <td className="p-3.5 sm:p-4 font-mono">≈ NPR 4,80,000</td>
                  <td className="p-3.5 sm:p-4 font-mono">≈ NPR 4,80,000</td>
                  <td className="p-3.5 sm:p-4 font-mono">≈ NPR 4,80,000</td>
                  <td className="p-3.5 sm:p-4 font-mono">≈ NPR 4,80,000</td>
                </tr>
                <tr className="bg-emerald-50/40 dark:bg-emerald-950/20 font-bold">
                  <td className="p-3.5 sm:p-4 text-emerald-900 dark:text-emerald-300">Total Est. Investment</td>
                  <td className="p-3.5 sm:p-4 font-mono text-emerald-700 dark:text-emerald-400">≈ NPR 5,43,087</td>
                  <td className="p-3.5 sm:p-4 font-mono text-emerald-700 dark:text-emerald-400">≈ NPR 10,25,832</td>
                  <td className="p-3.5 sm:p-4 font-mono text-emerald-700 dark:text-emerald-400">≈ NPR 19,30,761</td>
                  <td className="p-3.5 sm:p-4 font-mono text-emerald-700 dark:text-emerald-400">≈ NPR 14.8L–20.8L</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Semester Installment Payment Rules */}
      <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
          Constituent Campus Installment & Living Rules
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
