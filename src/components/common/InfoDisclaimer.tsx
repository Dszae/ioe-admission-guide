
export interface InfoDisclaimerProps {
  title: string;
  text: string;
  isDark?: boolean;
  type?: 'info' | 'alert' | 'warning';
  headingLevel?: 'h2' | 'h3' | 'h4' | 'h5';
}

/**
 * Standard accessible disclaimer & notice box
 */
export default function InfoDisclaimer({ 
  title, 
  text, 
  isDark = false, 
  type = 'info', 
  headingLevel = 'h3' 
}: InfoDisclaimerProps) {
  const isAlert = type === 'alert' || type === 'warning';
  const HeadingTag = headingLevel;

  const containerStyle = isDark
    ? isAlert
      ? 'bg-amber-900/40 border-amber-500 text-amber-100'
      : 'bg-slate-700/70 border-slate-500 text-slate-100'
    : isAlert
      ? 'bg-amber-50 border-amber-300 text-amber-950'
      : 'bg-slate-50 border-slate-200 text-slate-800';

  const iconStyle = isAlert
    ? 'text-amber-600 dark:text-amber-400'
    : 'text-blue-600 dark:text-blue-400';

  return (
    <aside 
      aria-label={title}
      className={`mt-8 sm:mt-10 p-4 sm:p-5 rounded-xl border flex flex-col sm:flex-row gap-3.5 text-left transition-colors print:hidden ${containerStyle}`}
    >
      <div className={`flex-shrink-0 mt-0.5 ${iconStyle}`}>
        {isAlert ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </div>
      <div>
        <HeadingTag className="text-xs sm:text-sm font-semibold tracking-wide mb-1 flex items-center gap-2">
          {title}
        </HeadingTag>
        <p className="text-xs sm:text-sm leading-relaxed opacity-90">{text}</p>
      </div>
    </aside>
  );
}
