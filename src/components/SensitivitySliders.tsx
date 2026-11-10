import React, { useState } from 'react';
import { Sliders, DollarSign, Calendar, Sparkles, ChevronDown, ChevronUp, AlertTriangle, RotateCcw, Check, Info, TrendingDown, Star } from 'lucide-react';
import { SensitivityControls, DEFAULT_EXPENSES, predictOccupancyFromPrice } from '../utils/calculator';
import { RoomTypeBenchmark } from '../data/dcData';

interface SensitivitySlidersProps {
  sensitivity: SensitivityControls;
  onChange: (sensitivity: SensitivityControls) => void;
  benchmark?: RoomTypeBenchmark;
  benchmarkPrice: number;
  baseOccupancyPercent: number;
  isHosted: boolean;
  elasticityMode: boolean;
  onToggleElasticityMode: (enabled: boolean) => void;
  optimalPriceData: {
    optimalPrice: number;
    optimalOccupancy: number;
    maxMonthlyProfit: number;
  };
}

export const SensitivitySliders: React.FC<SensitivitySlidersProps> = ({
  sensitivity,
  onChange,
  benchmark,
  benchmarkPrice,
  baseOccupancyPercent,
  isHosted,
  elasticityMode,
  onToggleElasticityMode,
  optimalPriceData,
}) => {
  const [showAdvancedExpenses, setShowAdvancedExpenses] = useState(false);
  const [justResetExpenses, setJustResetExpenses] = useState(false);

  const update = (partial: Partial<SensitivityControls>) => {
    onChange({ ...sensitivity, ...partial });
  };

  const handlePriceChange = (newPrice: number) => {
    if (elasticityMode && benchmarkPrice > 0) {
      const predictedOcc = predictOccupancyFromPrice(newPrice, benchmarkPrice, baseOccupancyPercent);
      onChange({
        ...sensitivity,
        nightlyPrice: newPrice,
        occupancyPercent: predictedOcc,
      });
    } else {
      update({ nightlyPrice: newPrice });
    }
  };

  const handleApplyOptimal = () => {
    onChange({
      ...sensitivity,
      nightlyPrice: optimalPriceData.optimalPrice,
      occupancyPercent: optimalPriceData.optimalOccupancy,
    });
  };

  const handleResetExpenses = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    onChange({
      ...sensitivity,
      ...DEFAULT_EXPENSES,
    });
    setJustResetExpenses(true);
    setTimeout(() => setJustResetExpenses(false), 2000);
  };

  const isExpensesModified =
    sensitivity.monthlyUtilities !== DEFAULT_EXPENSES.monthlyUtilities ||
    sensitivity.monthlySupplies !== DEFAULT_EXPENSES.monthlySupplies ||
    sensitivity.monthlyMaintenance !== DEFAULT_EXPENSES.monthlyMaintenance ||
    sensitivity.platformFeePercent !== DEFAULT_EXPENSES.platformFeePercent ||
    sensitivity.managementFeePercent !== DEFAULT_EXPENSES.managementFeePercent ||
    sensitivity.cleaningFeeCharged !== DEFAULT_EXPENSES.cleaningFeeCharged ||
    sensitivity.cleaningCostPaid !== DEFAULT_EXPENSES.cleaningCostPaid;

  const bookedNightsPerMonth = Math.round((sensitivity.occupancyPercent / 100) * 30.42);
  const turnoversPerMonth =
    bookedNightsPerMonth > 0
      ? Number((bookedNightsPerMonth / Math.max(1, sensitivity.avgStayLength)).toFixed(1))
      : 0;

  // Price difference vs benchmark
  const priceDeltaPercent = benchmarkPrice > 0 
    ? Math.round(((sensitivity.nightlyPrice - benchmarkPrice) / benchmarkPrice) * 100)
    : 0;
  const occDeltaPercent = baseOccupancyPercent > 0
    ? Math.round(((sensitivity.occupancyPercent - baseOccupancyPercent) / baseOccupancyPercent) * 100)
    : 0;

  return (
    <div className="bg-white rounded-xl border border-zinc-200 p-5 shadow-xs space-y-6">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
        <div className="flex items-center gap-2">
          <Sliders className="w-4 h-4 text-emerald-600" />
          <h2 className="text-sm font-semibold text-zinc-900 tracking-tight">
            2. Owner Control Variables (Sensitivity Sliders)
          </h2>
        </div>
        <span className="text-xs text-zinc-500">Live Sensitivity Model</span>
      </div>

      {/* Slider 1: Nightly Price */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <label className="text-xs font-semibold text-zinc-800 flex items-center gap-1.5">
              <span>Nightly Listing Price</span>
            </label>
            <p className="text-[11px] text-zinc-500">
              Direct rate charged on Airbnb before taxes
            </p>
          </div>
          <div className="flex items-center gap-1 bg-zinc-50 border border-zinc-200 px-2.5 py-1 rounded-md">
            <span className="text-xs text-zinc-400 font-mono">$</span>
            <input
              type="number"
              min="20"
              max="1500"
              value={sensitivity.nightlyPrice}
              onChange={(e) =>
                handlePriceChange(Math.max(10, parseInt(e.target.value, 10) || 10))
              }
              className="w-16 text-right font-mono text-sm font-bold text-zinc-900 focus:outline-hidden bg-transparent"
            />
            <span className="text-[11px] text-zinc-500">/nt</span>
          </div>
        </div>

        <input
          type="range"
          min="40"
          max="650"
          step="5"
          value={sensitivity.nightlyPrice}
          onChange={(e) => handlePriceChange(parseInt(e.target.value, 10))}
          className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
        />

        {/* Quantile Anchors & Optimal Price Button */}
        <div className="flex flex-wrap items-center justify-between gap-y-1 text-[11px] pt-1">
          {benchmark && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handlePriceChange(benchmark.p25Price)}
                className={`hover:underline cursor-pointer ${
                  sensitivity.nightlyPrice === benchmark.p25Price
                    ? 'text-emerald-700 font-semibold'
                    : 'text-zinc-500'
                }`}
              >
                25th: ${benchmark.p25Price}
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => handlePriceChange(benchmark.medianPrice)}
                className={`hover:underline cursor-pointer ${
                  sensitivity.nightlyPrice === benchmark.medianPrice
                    ? 'text-emerald-700 font-semibold'
                    : 'text-zinc-600'
                }`}
              >
                Median: ${benchmark.medianPrice}
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => handlePriceChange(benchmark.p75Price)}
                className={`hover:underline cursor-pointer ${
                  sensitivity.nightlyPrice === benchmark.p75Price
                    ? 'text-emerald-700 font-semibold'
                    : 'text-zinc-500'
                }`}
              >
                75th: ${benchmark.p75Price}
              </button>
            </div>
          )}

          {optimalPriceData && (
            <button
              type="button"
              onClick={handleApplyOptimal}
              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold transition-colors cursor-pointer border ${
                sensitivity.nightlyPrice === optimalPriceData.optimalPrice
                  ? 'bg-emerald-600 text-white border-emerald-700 shadow-2xs'
                  : 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100'
              }`}
              title="Set revenue-maximizing optimal price where price × predicted demand yields highest net profit"
            >
              <Star className="w-3 h-3 fill-current" />
              <span>Optimal: ${optimalPriceData.optimalPrice}</span>
            </button>
          )}
        </div>
      </div>

      {/* Slider 2: Occupancy Rate with Price Elasticity Engine */}
      <div className="space-y-2 pt-2 border-t border-zinc-100">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <label className="text-xs font-semibold text-zinc-800">
                Target Occupancy Rate
              </label>
              {elasticityMode && (
                <span className="text-[10px] uppercase font-mono font-semibold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">
                  Elasticity Active (ε = -1.2)
                </span>
              )}
            </div>
            <p className="text-[11px] text-zinc-500">
              Estimated ~{bookedNightsPerMonth} booked nights / month
              {elasticityMode && priceDeltaPercent !== 0 && (
                <span className={`ml-1 font-medium ${priceDeltaPercent > 0 ? 'text-amber-700' : 'text-emerald-700'}`}>
                  ({priceDeltaPercent > 0 ? '+' : ''}{priceDeltaPercent}% price → {occDeltaPercent > 0 ? '+' : ''}{occDeltaPercent}% demand)
                </span>
              )}
            </p>
          </div>
          <div className="flex items-center gap-1 bg-zinc-50 border border-zinc-200 px-2.5 py-1 rounded-md font-mono text-sm font-bold text-zinc-900">
            <span>{sensitivity.occupancyPercent}%</span>
          </div>
        </div>

        <input
          type="range"
          min="15"
          max="95"
          step="1"
          value={sensitivity.occupancyPercent}
          onChange={(e) => {
            update({ occupancyPercent: parseInt(e.target.value, 10) });
          }}
          className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
        />

        <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-0.5">
          <span className="text-zinc-400">Low (30%)</span>
          <span className="text-emerald-700 font-medium">
            DC Market Avg ({benchmark ? Math.round(benchmark.estimatedOccupancyRate * 100) : 65}%)
          </span>
          <span className="text-zinc-400">High (85%)</span>
        </div>

        {/* Elasticity Toggle Switch Bar */}
        <div className="pt-1.5 flex items-center justify-between text-xs bg-zinc-50 p-2.5 rounded-lg border border-zinc-200">
          <div className="flex items-center gap-2">
            <TrendingDown className={`w-4 h-4 ${elasticityMode ? 'text-emerald-600' : 'text-zinc-400'}`} />
            <div>
              <div className="font-semibold text-zinc-800 text-[11px]">
                Auto-Predict Occupancy from Price
              </div>
              <div className="text-[10px] text-zinc-500">
                Adjusts booked days dynamically using economic price elasticity (ε = -1.2)
              </div>
            </div>
          </div>

          <label className="relative inline-flex items-center cursor-pointer shrink-0 ml-3">
            <input
              type="checkbox"
              checked={elasticityMode}
              onChange={(e) => onToggleElasticityMode(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-8 h-4 bg-zinc-300 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-3 after:w-3.5 after:transition-all peer-checked:bg-emerald-600"></div>
          </label>
        </div>
      </div>

      {/* Slider 3: Average Length of Stay & Turnovers */}
      <div className="space-y-2 pt-2 border-t border-zinc-100">
        <div className="flex items-center justify-between">
          <div>
            <label className="text-xs font-semibold text-zinc-800">
              Average Guest Stay Length
            </label>
            <p className="text-[11px] text-zinc-500">
              Results in ~{turnoversPerMonth} guest turnovers per month
            </p>
          </div>
          <div className="flex items-center gap-1 bg-zinc-50 border border-zinc-200 px-2.5 py-1 rounded-md font-mono text-xs font-bold text-zinc-900">
            <span>{sensitivity.avgStayLength} nights</span>
          </div>
        </div>

        <input
          type="range"
          min="1.5"
          max="10"
          step="0.5"
          value={sensitivity.avgStayLength}
          onChange={(e) =>
            update({ avgStayLength: parseFloat(e.target.value) })
          }
          className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
        />
      </div>

      {/* Slider 4: Cleaning Fee to Guests & Cleaning Cost */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-zinc-100">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-zinc-800">
              Cleaning Fee Charged
            </label>
            <span className="font-mono text-xs font-bold text-zinc-900 bg-zinc-50 px-2 py-0.5 rounded border border-zinc-200">
              ${sensitivity.cleaningFeeCharged}
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="250"
            step="5"
            value={sensitivity.cleaningFeeCharged}
            onChange={(e) =>
              update({ cleaningFeeCharged: parseInt(e.target.value, 10) })
            }
            className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
          />
          <p className="text-[10px] text-zinc-400">Paid by guest each reservation</p>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-zinc-800">
              Actual Cleaning Cost
            </label>
            <span className="font-mono text-xs font-bold text-zinc-900 bg-zinc-50 px-2 py-0.5 rounded border border-zinc-200">
              ${sensitivity.cleaningCostPaid}
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="200"
            step="5"
            value={sensitivity.cleaningCostPaid}
            onChange={(e) =>
              update({ cleaningCostPaid: parseInt(e.target.value, 10) })
            }
            className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-zinc-700"
          />
          <p className="text-[10px] text-zinc-400">
            {sensitivity.cleaningCostPaid === 0 ? 'Self-cleaned by owner ($0)' : 'Hired cleaning crew'}
          </p>
        </div>
      </div>

      {/* Advanced Operating Expenses Accordion */}
      <div className="pt-2 border-t border-zinc-100">
        <div className="flex items-center justify-between py-1">
          <button
            type="button"
            onClick={() => setShowAdvancedExpenses(!showAdvancedExpenses)}
            className="flex items-center gap-2 text-xs font-medium text-zinc-700 hover:text-zinc-900 transition-colors cursor-pointer text-left"
          >
            <span className="flex items-center gap-1.5 font-semibold">
              Operating Expenses & Platform Fees
              <span className="text-[10px] font-normal text-zinc-500 hidden sm:inline">
                (${sensitivity.monthlyUtilities + sensitivity.monthlySupplies + sensitivity.monthlyMaintenance}/mo + {sensitivity.platformFeePercent}% fee)
              </span>
            </span>
            {showAdvancedExpenses ? (
              <ChevronUp className="w-4 h-4 text-zinc-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-zinc-400" />
            )}
          </button>

          <button
            type="button"
            onClick={handleResetExpenses}
            className={`inline-flex items-center gap-1 text-[11px] font-medium px-2 py-1 rounded transition-colors cursor-pointer border ${
              justResetExpenses
                ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                : isExpensesModified
                ? 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100'
                : 'bg-zinc-50 text-zinc-600 border-zinc-200 hover:bg-zinc-100'
            }`}
            title="Reset utilities, supplies, maintenance, platform fee, and management fee back to default baseline values"
          >
            {justResetExpenses ? (
              <>
                <Check className="w-3 h-3 text-emerald-600" />
                <span>Reset to Defaults!</span>
              </>
            ) : (
              <>
                <RotateCcw className="w-3 h-3 text-zinc-500" />
                <span>Reset to Defaults</span>
              </>
            )}
          </button>
        </div>

        {showAdvancedExpenses && (
          <div className="space-y-4 pt-3 mt-2 border-t border-zinc-100">
            {/* Utilities */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-600">Monthly Utilities & Wi-Fi:</span>
                <span className="font-mono font-medium text-zinc-900">
                  ${sensitivity.monthlyUtilities}/mo
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="500"
                step="10"
                value={sensitivity.monthlyUtilities}
                onChange={(e) =>
                  update({ monthlyUtilities: parseInt(e.target.value, 10) })
                }
                className="w-full h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-zinc-700"
              />
            </div>

            {/* Supplies & Consumables */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-600">Supplies & Guest Consumables:</span>
                <span className="font-mono font-medium text-zinc-900">
                  ${sensitivity.monthlySupplies}/mo
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="250"
                step="5"
                value={sensitivity.monthlySupplies}
                onChange={(e) =>
                  update({ monthlySupplies: parseInt(e.target.value, 10) })
                }
                className="w-full h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-zinc-700"
              />
            </div>

            {/* Maintenance Reserve */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-600">Maintenance & Wear Reserve:</span>
                <span className="font-mono font-medium text-zinc-900">
                  ${sensitivity.monthlyMaintenance}/mo
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="350"
                step="10"
                value={sensitivity.monthlyMaintenance}
                onChange={(e) =>
                  update({ monthlyMaintenance: parseInt(e.target.value, 10) })
                }
                className="w-full h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-zinc-700"
              />
            </div>

            {/* Airbnb Host Platform Fee */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <div>
                  <span className="text-zinc-600">Airbnb Host Platform Fee:</span>
                  <span className="text-[10px] text-zinc-400 ml-1.5">
                    (Standard US host split-fee is 3.0%)
                  </span>
                </div>
                <span className="font-mono font-medium text-zinc-900">
                  {sensitivity.platformFeePercent}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="16"
                step="0.5"
                value={sensitivity.platformFeePercent}
                onChange={(e) =>
                  update({ platformFeePercent: parseFloat(e.target.value) })
                }
                className="w-full h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-zinc-700"
              />
              <div className="flex justify-between text-[10px] text-zinc-400">
                <span>0% (Direct)</span>
                <span className="text-emerald-700 font-medium">3% (Airbnb Standard)</span>
                <span>15% (Host-Only model)</span>
              </div>
            </div>

            {/* Management Fee */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-600">Co-Host / Property Manager Fee:</span>
                <span className="font-mono font-medium text-zinc-900">
                  {sensitivity.managementFeePercent}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="25"
                step="1"
                value={sensitivity.managementFeePercent}
                onChange={(e) =>
                  update({ managementFeePercent: parseInt(e.target.value, 10) })
                }
                className="w-full h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-zinc-700"
              />
              <div className="flex justify-between text-[10px] text-zinc-400">
                <span>0% (Self-Managed)</span>
                <span>15% (Co-host)</span>
                <span>25% (Turnkey)</span>
              </div>
            </div>

            {/* Source of Default Values Explanation */}
            <div className="pt-2.5 border-t border-zinc-100 text-[11px] text-zinc-500 leading-relaxed flex items-start gap-1.5">
              <Info className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
              <span>
                These default values represent standard U.S. short-term rental operating cost benchmarks and Airbnb's 3.0% host split-fee policy rather than figures tracked in the Inside Airbnb dataset.
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Unhosted 90-day Cap Warning / Toggle */}
      {!isHosted && (
        <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-lg text-xs space-y-2">
          <div className="flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-900">
                DC 90-Day Unhosted Cap Sensitivity
              </p>
              <p className="text-amber-800 text-[11px] mt-0.5">
                Under D.C. Law 22-307, unhosted residential listings are restricted to 90 nights per year.
              </p>
            </div>
          </div>

          <label className="flex items-center gap-2 pt-1 cursor-pointer">
            <input
              type="checkbox"
              checked={sensitivity.enforceDC90DayCap}
              onChange={(e) => update({ enforceDC90DayCap: e.target.checked })}
              className="rounded text-amber-600 focus:ring-amber-500 h-4 w-4"
            />
            <span className="text-amber-900 font-medium text-[11px]">
              Apply 90-day STR limit (annualized with medium-term remainder)
            </span>
          </label>
        </div>
      )}
    </div>
  );
};
