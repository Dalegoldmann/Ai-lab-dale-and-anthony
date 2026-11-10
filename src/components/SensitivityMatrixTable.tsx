import React from 'react';
import { Grid, Sparkles, HelpCircle } from 'lucide-react';
import { SensitivityMatrixCell } from '../utils/calculator';

interface SensitivityMatrixTableProps {
  priceSteps: number[];
  occupancySteps: number[];
  matrix: SensitivityMatrixCell[][];
  onSelectScenario: (price: number, occupancy: number) => void;
  currentPrice: number;
  currentOccupancy: number;
}

export const SensitivityMatrixTable: React.FC<SensitivityMatrixTableProps> = ({
  priceSteps,
  occupancySteps,
  matrix,
  onSelectScenario,
  currentPrice,
  currentOccupancy,
}) => {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 p-5 shadow-xs space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-3 border-b border-zinc-100">
        <div>
          <div className="flex items-center gap-2">
            <Grid className="w-4 h-4 text-emerald-600" />
            <h3 className="text-sm font-semibold text-zinc-900 tracking-tight">
              Sensitivity Analysis Matrix (Price vs Occupancy)
            </h3>
          </div>
          <p className="text-[11px] text-zinc-500 mt-0.5">
            Compare monthly net profits across market conditions. Click any cell to test that scenario.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-[10px] text-zinc-500">
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded bg-emerald-100 border border-emerald-400"></span>
            Profitable
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded bg-amber-100 border border-amber-400"></span>
            Breakeven
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded bg-rose-100 border border-rose-400"></span>
            Loss
          </span>
          <span className="flex items-center gap-1 text-emerald-800 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            Predicted Demand Curve
          </span>
        </div>
      </div>

      {/* The 2D Grid Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-center text-xs border-collapse">
          <thead>
            <tr>
              <th className="p-2 text-left font-semibold text-zinc-500 bg-zinc-50 border border-zinc-200 rounded-tl-lg">
                <span className="text-[10px] uppercase tracking-wider block">Nightly Price \ Occ</span>
              </th>
              {occupancySteps.map((occ) => (
                <th
                  key={occ}
                  className={`p-2 font-semibold border border-zinc-200 text-zinc-700 ${
                    Math.abs(occ - currentOccupancy) < 5
                      ? 'bg-zinc-100 font-bold text-zinc-900'
                      : 'bg-zinc-50'
                  }`}
                >
                  <div className="font-mono text-xs">{occ}%</div>
                  <div className="text-[10px] font-normal text-zinc-400">
                    ~{Math.round((occ / 100) * 30.42)} nights
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {matrix.map((row, rowIndex) => {
              const price = priceSteps[rowIndex];
              const isPriceSelected = Math.abs(price - currentPrice) < 5;

              return (
                <tr key={price}>
                  <td
                    className={`p-2 text-left font-mono font-medium border border-zinc-200 ${
                      isPriceSelected
                        ? 'bg-zinc-100 font-bold text-zinc-900'
                        : 'bg-zinc-50 text-zinc-700'
                    }`}
                  >
                    ${price}/night
                  </td>
                  {row.map((cell) => {
                    const profit = cell.monthlyNetProfit;
                    const isSelected = cell.isCurrent;
                    const isPredicted = cell.isPredictedDemand;

                    let bgClass = 'bg-emerald-50 text-emerald-900 border-emerald-200';
                    if (profit > 3000) {
                      bgClass = 'bg-emerald-100/90 text-emerald-950 border-emerald-300 font-semibold';
                    } else if (profit > 1500) {
                      bgClass = 'bg-emerald-50/80 text-emerald-900 border-emerald-200';
                    } else if (profit > 500) {
                      bgClass = 'bg-teal-50 text-teal-900 border-teal-200';
                    } else if (profit >= 0) {
                      bgClass = 'bg-amber-50 text-amber-900 border-amber-200';
                    } else {
                      bgClass = 'bg-rose-50 text-rose-900 border-rose-200 font-medium';
                    }

                    return (
                      <td
                        key={cell.occupancyPercent}
                        onClick={() =>
                          onSelectScenario(cell.nightlyPrice, cell.occupancyPercent)
                        }
                        className={`p-2.5 border transition-all cursor-pointer relative group ${bgClass} ${
                          isSelected
                            ? 'ring-2 ring-zinc-900 z-10 shadow-xs'
                            : isPredicted
                            ? 'ring-1 ring-emerald-500/80 shadow-2xs'
                            : 'hover:brightness-95'
                        }`}
                        title={`Click to set $${cell.nightlyPrice}/nt at ${cell.occupancyPercent}% occupancy${isPredicted ? ' (predicted economic demand at this price)' : ''}`}
                      >
                        <div className="font-mono text-xs sm:text-sm font-semibold">
                          ${profit.toLocaleString()}
                        </div>
                        {isSelected ? (
                          <div className="text-[9px] font-bold uppercase tracking-wider text-zinc-900 mt-0.5">
                            Active
                          </div>
                        ) : isPredicted ? (
                          <div className="text-[9px] font-medium text-emerald-700 mt-0.5 flex items-center justify-center gap-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                            <span>Predicted</span>
                          </div>
                        ) : null}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="text-[11px] text-zinc-500 bg-zinc-50 p-2.5 rounded-lg border border-zinc-200 flex items-start gap-2">
        <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
        <span>
          <strong>Pro-tip for DC Hosts:</strong> Demand peaks in Spring (Cherry Blossom Festival) and Fall (Congress session), pushing occupancy above 75-80%. Use this matrix to evaluate if your property remains cashflow-positive during slower winter months (January-February, typically 40-50% occupancy).
        </span>
      </div>
    </div>
  );
};
