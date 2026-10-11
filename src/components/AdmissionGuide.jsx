import React from 'react';
import InfoDisclaimer from './common/InfoDisclaimer';

export default function AdmissionGuide({ isDark }) {
  return (
    <div className="animate-fadeIn">
      
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white print:text-black">
          IOE Engineering Admission Handbook & Counseling Procedure
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
          The comprehensive official procedure, seat rules, quota verifications, and counseling timeline for Tribhuvan University Institute of Engineering.
        </p>
      </div>

      <div className="space-y-6">
        
        {/* Step 1: Phase-Wise Counseling */}
        <div className={`p-5 sm:p-6 rounded-2xl border transition-colors ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
              Rule 01
            </span>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
              Phase-Wise Counseling & Merit Selection Architecture
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Admissions across TU IOE constituent campuses are strictly decentralized but driven by the centralized CBT Merit Rank list and individual online Priority Forms.
          </p>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-2.5">
              <span className="text-cyan-500 font-bold mt-0.5">➔</span>
              <div>
                <strong>Initial Lists:</strong> The top rankers occupy high-demand Regular (scholarship) seats. As candidates withdraw (e.g. choosing medical MBBS, foreign scholarships, or other universities), subsequent lists (2nd, 3rd, 4th, and Spot lists) are published.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyan-500 font-bold mt-0.5">➔</span>
              <div>
                <strong>Auto-Upgrade System:</strong> If admitted to a lower priority choice (e.g., Choice #4) and a vacant seat emerges in Choice #2 in a subsequent round, the system automatically shifts you upward. <em>You cannot decline an auto-upgrade to go down to a lower choice.</em>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyan-500 font-bold mt-0.5">➔</span>
              <div>
                <strong>Physical Spot Admissions:</strong> Conducted physically at respective campus administrative wings at the conclusion of the admissions cycle to fill any remaining unallocated seats.
              </div>
            </li>
          </ul>
        </div>

        {/* Step 2: Quota Reservations */}
        <div className={`p-5 sm:p-6 rounded-2xl border transition-colors ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
              Rule 02
            </span>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
              Inclusive Quotas & Verification Requirements
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Under Tribhuvan University affirmative action regulations, specific percentages of seats are reserved for underrepresented demographics:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60">
              <strong className="text-slate-900 dark:text-white block mb-1">Female Quota (FmQ & RsQ)</strong>
              <p className="text-slate-600 dark:text-slate-400">
                FmQ (Female Merit Quota) awarded across regular seats; RsQ (Reserved Quota) requires government school graduation proof or official certification.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60">
              <strong className="text-slate-900 dark:text-white block mb-1">Adivasi / Janajati Quota</strong>
              <p className="text-slate-600 dark:text-slate-400">
                Requires official certification from the National Indigenous Nationalities Commission or relevant District Administration Office (DAO).
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60">
              <strong className="text-slate-900 dark:text-white block mb-1">Remote District Quota (Pichhadiyeko Kshetra)</strong>
              <p className="text-slate-600 dark:text-slate-400">
                Candidates must provide permanent residency verification from designated backward districts alongside schooling verification.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60">
              <strong className="text-slate-900 dark:text-white block mb-1">Dalit, Madhesi & Muslim Quotas</strong>
              <p className="text-slate-600 dark:text-slate-400">
                Official recommendation letter from respective national commissions or local government administrative bodies is mandatory.
              </p>
            </div>
          </div>
        </div>

        {/* Step 3: Mandatory Document Checklist */}
        <div className={`p-5 sm:p-6 rounded-2xl border transition-colors ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
              Rule 03
            </span>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
              Physical Verification Document Checklist
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            During physical campus admission, both original documents and 2 sets of attested photocopies must be presented:
          </p>
          <div className="grid sm:grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <span className="text-emerald-500">✓</span> IOE Entrance Admit Card (Color Print)
            </div>
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <span className="text-emerald-500">✓</span> Original Citizenship Certificate or National ID
            </div>
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <span className="text-emerald-500">✓</span> SLC / SEE Grade Sheet & Character Certificate
            </div>
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <span className="text-emerald-500">✓</span> 10+2 / Diploma Transcript & Migration Certificate
            </div>
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <span className="text-emerald-500">✓</span> 4 Recent Passport-Sized Photographs
            </div>
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <span className="text-emerald-500">✓</span> Official Quota Recommendation Letter (if applicable)
            </div>
          </div>
        </div>

        {/* Step 4: Seat Acceptance & Claim Window */}
        <div className={`p-5 sm:p-6 rounded-2xl border transition-colors ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
              Rule 04
            </span>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
              Seat Acceptance & Claim / Objection Window (Dabi Birodh)
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
            Following every merit list publication:
          </p>
          <ul className="list-disc pl-5 text-xs sm:text-sm space-y-1.5 text-slate-600 dark:text-slate-300">
            <li>
              <strong>Deposit Window:</strong> Successful candidates have 3 to 4 working days to deposit the initial campus installment at the designated bank counter. Missing this deadline cancels your seat permanently.
            </li>
            <li>
              <strong>Dabi Birodh (Claim & Objection):</strong> A strict 24-48 hour window opens immediately after each list. If a candidate with a worse rank is erroneously admitted into your program/quota, submit an objection on the portal.
            </li>
            <li>
              <strong>Auto-Transfer of Deposit:</strong> If auto-upgraded in a later round, your initial fee voucher is automatically transferred to your new faculty/campus.
            </li>
          </ul>
        </div>

      </div>

      <InfoDisclaimer
        isDark={isDark}
        title="Official Rule Reference"
        text="All procedural guidelines are synthesized directly from the official IOE B.E./B.Arch Information Booklet and Tribhuvan University Academic Ordinances. Campuses maintain specific operational guidelines regarding local bank vouchers and office hours."
      />

    </div>
  );
}

