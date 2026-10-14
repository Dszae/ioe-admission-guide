import { OFFICIAL_PORTALS } from '../data/admissionData';

export interface FooterProps {
  isDark?: boolean;
  showOfficialPortals?: boolean;
}

export default function Footer({ isDark = false, showOfficialPortals = false }: FooterProps) {
  return (
    <footer className="w-full max-w-5xl mt-10 sm:mt-12 mb-6 sm:mb-8 relative z-10 print:hidden text-slate-600 dark:text-slate-300">
      
      {showOfficialPortals && (
      <div className={`p-4 sm:p-6 rounded-xl border mb-5 transition-colors ${
        isDark ? 'bg-slate-800 border-slate-600' : 'bg-white border-slate-200 shadow-2xs'
      }`}>
        <h2 className="text-xs font-semibold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
          <svg className="w-4 h-4 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Direct Links to Official Portals
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          {OFFICIAL_PORTALS.map((portal) => (
            <a
              key={portal.name}
              href={portal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-400 bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-all flex flex-col justify-between group"
            >
              <span className="font-medium text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-300 line-clamp-1">
                {portal.name}
              </span>
              <span className="text-[11px] text-slate-600 dark:text-slate-300 mt-1 inline-flex items-center gap-1">
                <span>{portal.authority}</span>
                <svg className="w-2.5 h-2.5 opacity-80 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
      )}

      <nav aria-label="IOE Admission Hub sections" className="mb-5 border-y border-slate-200 py-4">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2.5">
          Explore IOE Admission Hub
        </h2>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs">
          <a href="/" className="text-blue-700 hover:text-blue-900 hover:underline font-semibold">Home</a>
          <a href="/predictor/" className="text-blue-700 hover:text-blue-900 hover:underline">Rank Predictor</a>
          <a href="/profile/" className="text-blue-700 hover:text-blue-900 hover:underline font-medium">Dipesh Sapkota</a>
          <a href="/estimator/" className="text-blue-700 hover:text-blue-900 hover:underline">Score Estimator</a>
          <a href="/campuses/" className="text-blue-700 hover:text-blue-900 hover:underline">Campuses & Seats</a>
          <a href="/affiliated/" className="text-blue-700 hover:text-blue-900 hover:underline">Affiliated Colleges</a>
          <a href="/compare/" className="text-blue-700 hover:text-blue-900 hover:underline">Compare Disciplines</a>
          <a href="/priority/" className="text-blue-700 hover:text-blue-900 hover:underline">Priority Optimizer</a>
          <a href="/calculator/" className="text-blue-700 hover:text-blue-900 hover:underline">CBT Calculator</a>
          <a href="/guide/" className="text-blue-700 hover:text-blue-900 hover:underline">Admission Guide</a>
          <a href="/checklist/" className="text-blue-700 hover:text-blue-900 hover:underline">Checklist</a>
          <a href="/notices/" className="text-blue-700 hover:text-blue-900 hover:underline">Notices</a>
          <a href="/financials/" className="text-blue-700 hover:text-blue-900 hover:underline">Financials</a>
        </div>
      </nav>

      {/* Disclaimers & Credits */}
      <div className="space-y-4 text-xs leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-5">
        
        <div className="p-3.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-[11px] text-slate-700 dark:text-slate-200">
          <strong className="text-slate-900 dark:text-white block mb-0.5">
            Academic Affiliation Disclaimer:
          </strong>
          IOE Admission Hub is an independent educational tool designed to assist prospective engineering students in Nepal. This platform is <strong>not officially operated, affiliated with, or endorsed</strong> by Tribhuvan University (TU) or the Institute of Engineering (IOE). All official procedures, final cutoffs, and schedules are determined solely by the IOE Entrance Examination Board. Cross-verify all announcements at{' '}
          <a href="https://entrance.ioe.edu.np" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline underline-offset-2">
            entrance.ioe.edu.np
          </a>.
        </div>

        {/* Bottom Bar: All Rights Reserved & Social Logos Only */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-2 text-xs">
          <div className="text-center sm:text-left text-slate-500 dark:text-slate-400">
            <p className="font-semibold text-slate-800 dark:text-slate-200">
              © {new Date().getFullYear()} <a href="/" className="hover:text-blue-600 transition-colors">IOE Admission Hub</a>. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              Historical benchmark data referenced from IOE Archives (2082 BS). Created and engineered by{' '}
              <a 
                href="/profile/" 
                className="font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-colors"
              >
                Dipesh Sapkota
              </a>.
            </p>
          </div>

          {/* Social Links (Logo Only) */}
          <div className="flex items-center gap-1.5 shrink-0" aria-label="Author Social Profiles">
            {/* Website Icon */}
            <a
              href="https://www.dipeshsapkota7.com.np/"
              target="_blank"
              rel="noopener noreferrer home author"
              title="Dipesh Sapkota Website"
              aria-label="Dipesh Sapkota Website"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-2xs"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
              </svg>
            </a>

            {/* GitHub Icon */}
            <a
              href="https://github.com/Dszae"
              target="_blank"
              rel="noopener noreferrer me"
              title="GitHub Profile (@Dszae)"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors shadow-2xs"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/dipesh-sapkota/"
              target="_blank"
              rel="noopener noreferrer me"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-[#0077b5] dark:hover:text-[#0077b5] transition-colors shadow-2xs"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/dsz.ae"
              target="_blank"
              rel="noopener noreferrer me"
              title="Instagram (@dsz.ae)"
              aria-label="Instagram Profile"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors shadow-2xs"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

    </footer>
  );
}
