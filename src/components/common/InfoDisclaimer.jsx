import React from 'react';

/**
 * Standard accessible disclaimer box
 * Declared at top level to satisfy React compiler & avoid recreation during render
 */
export default function InfoDisclaimer({ title, text, isDark, type = 'info' }) {
  const isAlert = type === 'alert' || type === 'warning';

  const baseStyle = isDark
    ? isAlert 
      ? 'bg-amber-500/10 border-amber-500/30 text-amber-200' 
      : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-200'
    : isAlert
      ? 'bg-amber-50 border-amber-200 text-amber-900'
      : 'bg-cyan-50 border-cyan-200 text-cyan-900';

  return (
    <aside 
      aria-label={title}
      className={`mt-8 sm:mt-10 p-4 sm:p-5 rounded-2xl border flex flex-col sm:flex-row gap-3 text-left transition-colors print:hidden ${baseStyle}`}
    >
      <div className="flex-shrink-0 mt-0.5 text-current">
        {isAlert ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </div>
      <div>
        <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider mb-1.5 flex items-center gap-2">
          {title}
        </h4>
        <p className="text-xs sm:text-sm leading-relaxed opacity-90">{text}</p>
      </div>
    </aside>
  );
}

