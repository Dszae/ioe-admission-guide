import React from 'react';

export default function StatusBadge({ label, color = 'blue', isDark }) {
  const colorMap = {
    emerald: isDark 
      ? 'bg-emerald-950/50 text-emerald-300 border-emerald-800/60' 
      : 'bg-emerald-50 text-emerald-800 border-emerald-200',
    blue: isDark 
      ? 'bg-blue-950/50 text-blue-300 border-blue-800/60' 
      : 'bg-blue-50 text-blue-800 border-blue-200',
    cyan: isDark 
      ? 'bg-sky-950/50 text-sky-300 border-sky-800/60' 
      : 'bg-sky-50 text-sky-800 border-sky-200',
    teal: isDark 
      ? 'bg-teal-950/50 text-teal-300 border-teal-800/60' 
      : 'bg-teal-50 text-teal-800 border-teal-200',
    amber: isDark 
      ? 'bg-amber-950/50 text-amber-300 border-amber-800/60' 
      : 'bg-amber-50 text-amber-900 border-amber-200',
    orange: isDark 
      ? 'bg-orange-950/50 text-orange-300 border-orange-800/60' 
      : 'bg-orange-50 text-orange-900 border-orange-200',
    red: isDark 
      ? 'bg-rose-950/50 text-rose-300 border-rose-800/60' 
      : 'bg-rose-50 text-rose-800 border-rose-200',
    slate: isDark 
      ? 'bg-slate-800/60 text-slate-300 border-slate-700/60' 
      : 'bg-slate-100 text-slate-700 border-slate-200'
  };

  const chosenStyle = colorMap[color] || colorMap.slate;

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium border ${chosenStyle}`}>
      {label}
    </span>
  );
}
