import React from 'react';
import { Home, Sliders, RotateCcw, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onReset: () => void;
  activeNeighborhood: string;
}

export const Header: React.FC<HeaderProps> = ({ onReset, activeNeighborhood }) => {
  return (
    <header className="border-b border-zinc-200 bg-white/90 backdrop-blur sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-zinc-900 text-white flex items-center justify-center shadow-xs">
            <Home className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-semibold text-zinc-900 tracking-tight">
                DC Airbnb Profit & Sensitivity Estimator
              </h1>
              <span className="text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 bg-zinc-100 text-zinc-700 rounded border border-zinc-200">
                Inside Airbnb Data
              </span>
            </div>
            <p className="text-xs text-zinc-500">
              Empirical market benchmarks across 39 Washington D.C. neighborhoods with owner sensitivity modeling
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 self-start sm:self-auto">
          <div className="hidden md:flex items-center gap-1.5 text-xs text-zinc-500 bg-zinc-50 px-2.5 py-1 rounded border border-zinc-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>DC STR Law 22-307 Aware</span>
          </div>

          <button
            onClick={onReset}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-700 bg-white hover:bg-zinc-50 active:bg-zinc-100 border border-zinc-300 rounded-md shadow-2xs transition-colors cursor-pointer"
            title="Reset variables to neighborhood empirical medians"
          >
            <RotateCcw className="w-3.5 h-3.5 text-zinc-500" />
            <span>Reset to Medians</span>
          </button>
        </div>
      </div>
    </header>
  );
};
