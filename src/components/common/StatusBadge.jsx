import React from 'react';

export default function StatusBadge({ label, color = 'cyan', isDark }) {
  const colorMap = {
    emerald: isDark ? 'bg-emerald-950/60 text-emerald-300 border-emerald-700/50' : 'bg-emerald-100 text-emerald-900 border-emerald-200',
    amber: isDark ? 'bg-amber-950/60 text-amber-300 border-amber-700/50' : 'bg-amber-100 text-amber-950 border-amber-300',
    orange: isDark ? 'bg-orange-950/60 text-orange-300 border-orange-700/50' : 'bg-orange-100 text-orange-950 border-orange-300',
    red: isDark ? 'bg-red-950/60 text-red-300 border-red-700/50' : 'bg-red-100 text-red-900 border-red-200',
    cyan: isDark ? 'bg-cyan-950/60 text-cyan-300 border-cyan-700/50' : 'bg-cyan-100 text-cyan-900 border-cyan-200',
    teal: isDark ? 'bg-teal-950/60 text-teal-300 border-teal-700/50' : 'bg-teal-100 text-teal-900 border-teal-200',
    slate: isDark ? 'bg-slate-900 text-slate-200 border-slate-700' : 'bg-slate-100 text-slate-800 border-slate-200'
  };

  const chosenStyle = colorMap[color] || colorMap.slate;

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase border ${chosenStyle}`}>
      {label}
    </span>
  );
}

