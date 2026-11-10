import React from 'react';
import { PieChart, DollarSign, CheckCircle2 } from 'lucide-react';
import { MonthlyFinancials, SensitivityControls } from '../utils/calculator';

interface ExpenseBreakdownBarProps {
  financials: MonthlyFinancials;
  sensitivity: SensitivityControls;
  isHosted: boolean;
}

export const ExpenseBreakdownBar: React.FC<ExpenseBreakdownBarProps> = ({
  financials,
  sensitivity,
  isHosted,
}) => {
  const total = Math.max(1, financials.totalGrossRevenue);

  const profitPct = Math.max(0, Math.round((financials.netOperatingIncome / total) * 100));
  const platformPct = Math.round((financials.platformFee / total) * 100);
  const cleaningPct = Math.round((financials.totalCleaningExpense / total) * 100);
  const fixedPct = Math.round((financials.fixedOperatingCosts / total) * 100);
  const mgmtPct = Math.round((financials.managementFee / total) * 100);

  return (
    <div className="bg-white rounded-xl border border-zinc-200 p-5 shadow-xs space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
        <div className="flex items-center gap-2">
          <PieChart className="w-4 h-4 text-zinc-700" />
          <h3 className="text-sm font-semibold text-zinc-900 tracking-tight">
            Revenue & Expense Allocation
          </h3>
        </div>
        <span className="text-xs font-mono text-zinc-500">
          ${financials.totalGrossRevenue.toLocaleString()} Total Revenue
        </span>
      </div>

      {/* Stacked Visual Bar */}
      <div className="space-y-1.5">
        <div className="w-full h-4 bg-zinc-100 rounded-full overflow-hidden flex shadow-inner">
          {profitPct > 0 && (
            <div
              style={{ width: `${profitPct}%` }}
              className="h-full bg-emerald-500 transition-all duration-300"
              title={`Net Profit: ${profitPct}%`}
            />
          )}
          {cleaningPct > 0 && (
            <div
              style={{ width: `${cleaningPct}%` }}
              className="h-full bg-amber-400 transition-all duration-300"
              title={`Cleaning: ${cleaningPct}%`}
            />
          )}
          {fixedPct > 0 && (
            <div
              style={{ width: `${fixedPct}%` }}
              className="h-full bg-blue-400 transition-all duration-300"
              title={`Utilities & Supplies: ${fixedPct}%`}
            />
          )}
          {platformPct > 0 && (
            <div
              style={{ width: `${platformPct}%` }}
              className="h-full bg-purple-400 transition-all duration-300"
              title={`Airbnb Fee: ${platformPct}%`}
            />
          )}
          {mgmtPct > 0 && (
            <div
              style={{ width: `${mgmtPct}%` }}
              className="h-full bg-zinc-400 transition-all duration-300"
              title={`Management: ${mgmtPct}%`}
            />
          )}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-zinc-600">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span>Net Profit ({profitPct}%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
            <span>Cleaning ({cleaningPct}%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
            <span>Fixed / Utilities ({fixedPct}%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span>
            <span>Airbnb 3% ({platformPct}%)</span>
          </div>
          {mgmtPct > 0 && (
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-400"></span>
              <span>Management ({mgmtPct}%)</span>
            </div>
          )}
        </div>
      </div>

      {/* Itemized Table */}
      <div className="pt-2 border-t border-zinc-100">
        <div className="text-xs space-y-1.5">
          <div className="flex justify-between py-1 text-zinc-600">
            <span>Nightly Rental Revenue ({financials.bookedNights} nights × ${sensitivity.nightlyPrice})</span>
            <span className="font-mono font-medium text-zinc-900">+${financials.grossNightlyRevenue.toLocaleString()}</span>
          </div>
          <div className="flex justify-between py-1 text-zinc-600">
            <span>Guest Cleaning Fees Collected ({financials.numberOfStays} stays × ${sensitivity.cleaningFeeCharged})</span>
            <span className="font-mono font-medium text-zinc-900">+${financials.grossCleaningRevenue.toLocaleString()}</span>
          </div>
          <div className="flex justify-between py-1 font-semibold text-zinc-900 bg-zinc-50 px-2 rounded">
            <span>Total Monthly Inflow</span>
            <span className="font-mono">${financials.totalGrossRevenue.toLocaleString()}</span>
          </div>

          <div className="pt-2 space-y-1 text-zinc-500 text-[11px]">
            <div className="flex justify-between py-0.5">
              <span>Airbnb Host Platform Fee (3%)</span>
              <span className="font-mono text-zinc-700">-${financials.platformFee.toLocaleString()}</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span>Cleaning Turnover Expense ({financials.numberOfStays} × ${sensitivity.cleaningCostPaid})</span>
              <span className="font-mono text-zinc-700">-${financials.totalCleaningExpense.toLocaleString()}</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span>Utilities & Wi-Fi</span>
              <span className="font-mono text-zinc-700">-${sensitivity.monthlyUtilities.toLocaleString()}</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span>Supplies & Guest Amenities</span>
              <span className="font-mono text-zinc-700">-${sensitivity.monthlySupplies.toLocaleString()}</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span>Maintenance & Reserve</span>
              <span className="font-mono text-zinc-700">-${sensitivity.monthlyMaintenance.toLocaleString()}</span>
            </div>
            {financials.managementFee > 0 && (
              <div className="flex justify-between py-0.5">
                <span>Management / Co-Hosting Fee ({sensitivity.managementFeePercent}%)</span>
                <span className="font-mono text-zinc-700">-${financials.managementFee.toLocaleString()}</span>
              </div>
            )}
          </div>

          <div className="flex justify-between py-1.5 font-bold text-xs border-t border-zinc-200 text-zinc-900">
            <span>Estimated Monthly Net Operating Income (NOI)</span>
            <span className="font-mono text-emerald-700">${financials.netOperatingIncome.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
