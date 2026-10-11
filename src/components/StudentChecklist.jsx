import React, { useState, useEffect } from 'react';
import { ADMISSION_CHECKLIST_ITEMS } from '../data/checklistData';
import InfoDisclaimer from './common/InfoDisclaimer';

const STORAGE_KEY = 'ioe_admission_hub_checklist_v1';

export default function StudentChecklist({ isDark }) {
  const [completedSteps, setCompletedSteps] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completedSteps));
    } catch (e) {
      console.warn('LocalStorage save failed:', e);
    }
  }, [completedSteps]);

  const toggleStep = (stepId) => {
    setCompletedSteps(prev => ({
      ...prev,
      [stepId]: !prev[stepId]
    }));
  };

  const resetAll = () => {
    if (window.confirm("Are you sure you want to reset your checklist progress?")) {
      setCompletedSteps({});
    }
  };

  const totalSteps = ADMISSION_CHECKLIST_ITEMS.length;
  const completedCount = Object.values(completedSteps).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / totalSteps) * 100);

  return (
    <div className="animate-fadeIn">
      
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            IOE Admission Roadmap & Action Checklist
          </h2>
          <button
            type="button"
            onClick={resetAll}
            className="text-[11px] font-semibold text-slate-500 hover:text-red-500 underline self-start sm:self-auto"
          >
            Reset Progress
          </button>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
          Track your real-time milestone progress from entrance application to final campus enrollment. Stored privately on your device.
        </p>
      </div>

      {/* Progress Bar Card */}
      <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm mb-8">
        <div className="flex justify-between items-center mb-2 text-xs font-bold uppercase tracking-wider">
          <span className="text-slate-700 dark:text-slate-300">Admission Readiness Progress</span>
          <span className="text-cyan-600 dark:text-cyan-400 font-mono">{completedCount} / {totalSteps} Completed ({progressPercent}%)</span>
        </div>
        <div className="w-full h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <div 
            className="h-full bg-cyan-500 transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Checklist Steps */}
      <div className="space-y-4">
        {ADMISSION_CHECKLIST_ITEMS.map((item, index) => {
          const isDone = !!completedSteps[item.id];
          return (
            <div
              key={item.id}
              className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                isDone
                  ? isDark 
                    ? 'bg-emerald-950/20 border-emerald-900/40 opacity-80' 
                    : 'bg-emerald-50/60 border-emerald-200'
                  : isDark 
                    ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700' 
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div className="flex items-start gap-3.5">
                
                <input
                  id={`chk-${item.id}`}
                  type="checkbox"
                  checked={isDone}
                  onChange={() => toggleStep(item.id)}
                  className="w-5 h-5 mt-1 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500 cursor-pointer flex-shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Step {index + 1} • {item.phase}
                    </span>
                    {item.portalLink && (
                      <a
                        href={item.portalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-bold text-cyan-600 dark:text-cyan-400 hover:underline"
                      >
                        Action Portal ↗
                      </a>
                    )}
                  </div>

                  <label
                    htmlFor={`chk-${item.id}`}
                    className={`text-sm sm:text-base font-bold cursor-pointer block leading-snug ${
                      isDone 
                        ? 'line-through text-slate-500 dark:text-slate-400' 
                        : 'text-slate-900 dark:text-white'
                    }`}
                  >
                    {item.title}
                  </label>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-1">
                    {item.description}
                  </p>

                  {item.requiredDocs && item.requiredDocs.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center gap-1.5 text-[11px]">
                      <span className="font-semibold text-slate-500">Required:</span>
                      {item.requiredDocs.map((doc, dIdx) => (
                        <span key={dIdx} className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          {doc}
                        </span>
                      ))}
                    </div>
                  )}

                </div>

              </div>
            </div>
          );
        })}
      </div>

      <InfoDisclaimer
        isDark={isDark}
        title="Privacy & Storage Notice"
        text="Your checklist progress is saved exclusively inside your browser's private localStorage. No personal identifier, device data, or progress information is sent to or stored on external servers."
      />

    </div>
  );
}

