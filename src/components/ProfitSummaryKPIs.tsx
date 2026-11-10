import React from 'react';
import { MonthlyFinancials } from '../utils/calculator';

interface ProfitSummaryKPIsProps {
  financials: MonthlyFinancials;
}

export const ProfitSummaryKPIs: React.FC<ProfitSummaryKPIsProps> = ({
  financials,
}) => {
  return (
    <div className="space-y-4">
      {/* Primary Hero KPI: Top 2 Most Important Numbers */}
      <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white rounded-xl p-6 shadow-sm border border-zinc-800">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:divide-x sm:divide-zinc-800">
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-emerald-400">
              Estimated Monthly Profit
            </div>
            <div className="flex items-baseline gap-2 mt-1.5">
              <span className="text-3xl sm:text-4xl font-extrabold tracking-tight font-mono text-white">
                ${financials.netOperatingIncome.toLocaleString()}
              </span>
              <span className="text-sm font-medium text-zinc-400">/ month</span>
            </div>
          </div>

          <div className="sm:pl-6">
            <div className="text-xs uppercase tracking-wider font-semibold text-zinc-400">
              Estimated Annual Profit
            </div>
            <div className="flex items-baseline gap-2 mt-1.5">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight font-mono text-zinc-100">
                ${financials.annualNetProfit.toLocaleString()}
              </span>
              <span className="text-sm font-medium text-zinc-400">/ year</span>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {/* Gross Revenue */}
        <div className="bg-white rounded-lg border border-zinc-200 p-3.5 shadow-2xs">
          <div className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">
            Gross Revenue
          </div>
          <div className="text-lg sm:text-xl font-bold font-mono text-zinc-900 mt-1">
            ${financials.totalGrossRevenue.toLocaleString()}
          </div>
          <div className="text-[11px] text-zinc-500 mt-0.5">
            ${financials.grossNightlyRevenue.toLocaleString()} stay + ${financials.grossCleaningRevenue.toLocaleString()} clean
          </div>
        </div>

        {/* Operating Expenses */}
        <div className="bg-white rounded-lg border border-zinc-200 p-3.5 shadow-2xs">
          <div className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">
            Monthly Expenses
          </div>
          <div className="text-lg sm:text-xl font-bold font-mono text-zinc-900 mt-1">
            ${financials.totalExpenses.toLocaleString()}
          </div>
          <div className="text-[11px] text-zinc-500 mt-0.5">
            Fees, cleaning, utilities
          </div>
        </div>

        {/* Break-even Nights */}
        <div className="bg-white rounded-lg border border-zinc-200 p-3.5 shadow-2xs">
          <div className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">
            Break-Even Point
          </div>
          <div className="text-lg sm:text-xl font-bold font-mono text-zinc-900 mt-1">
            {financials.breakEvenNights} nights
          </div>
          <div className="text-[11px] text-zinc-500 mt-0.5">
            Needed/mo to cover costs
          </div>
        </div>

        {/* Monthly Guest Stays & Turnovers */}
        <div
          className="bg-white rounded-lg border border-zinc-200 p-3.5 shadow-2xs"
          title="Number of separate guest bookings per month (Booked Nights ÷ Average Stay Length), which determines monthly turnover cleanings"
        >
          <div className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">
            Monthly Guest Stays
          </div>
          <div className="text-lg sm:text-xl font-bold font-mono text-zinc-900 mt-1">
            {financials.numberOfStays} stays
          </div>
          <div className="text-[11px] text-zinc-500 mt-0.5">
            Turnovers & cleanings / mo
          </div>
        </div>
      </div>
    </div>
  );
};
