import React, { useState, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { PropertyProfileCard } from './components/PropertyProfileCard';
import { SensitivitySliders } from './components/SensitivitySliders';
import { ProfitSummaryKPIs } from './components/ProfitSummaryKPIs';
import { SensitivityMatrixTable } from './components/SensitivityMatrixTable';
import { ExpenseBreakdownBar } from './components/ExpenseBreakdownBar';
import { NeighborhoodBenchmarkCard } from './components/NeighborhoodBenchmarkCard';
import {
  PropertyInputs,
  SensitivityControls,
  calculateFinancials,
  generateSensitivityMatrix,
  DEFAULT_EXPENSES,
  findOptimalPrice,
  getBedroomPriceMultiplier,
  getScaledDefaultExpenses,
  getDefaultLongTermRent,
} from './utils/calculator';
import { DC_AIRBNB_DATA } from './data/dcData';

export default function App() {
  const defaultNeighborhood = 'Capitol Hill, Lincoln Park';
  const defaultHoodData = DC_AIRBNB_DATA.neighborhoods[defaultNeighborhood];
  const initialRoomBenchmark = defaultHoodData?.roomTypes['Entire home/apt'];

  const [inputs, setInputs] = useState<PropertyInputs>({
    neighbourhood: defaultNeighborhood,
    roomType: 'Entire home/apt',
    bedrooms: 2,
    bathrooms: 1.5,
    accommodates: 4,
    propertyTier: 'median',
    isHosted: true,
    longTermRentBenchmark: 2800,
  });

  const [elasticityMode, setElasticityMode] = useState<boolean>(true);

  const [sensitivity, setSensitivity] = useState<SensitivityControls>({
    nightlyPrice: initialRoomBenchmark?.medianPrice || 220,
    occupancyPercent: Math.round((initialRoomBenchmark?.estimatedOccupancyRate || 0.65) * 100),
    avgStayLength: 3.5,
    cleaningFeeCharged: 95,
    cleaningCostPaid: 95,
    monthlyUtilities: 220,
    monthlySupplies: 60,
    monthlyMaintenance: 120,
    platformFeePercent: 3,
    managementFeePercent: 0,
    enforceDC90DayCap: false,
  });

  // Current neighborhood and room benchmark
  const currentHoodData = DC_AIRBNB_DATA.neighborhoods[inputs.neighbourhood];
  const currentBenchmark =
    currentHoodData?.roomTypes[inputs.roomType] ||
    DC_AIRBNB_DATA.citySummary.cityMedians[inputs.roomType];

  const rawBasePrice = currentBenchmark ? (
    inputs.propertyTier === 'budget' ? currentBenchmark.p25Price :
    inputs.propertyTier === 'premium' ? currentBenchmark.p75Price :
    currentBenchmark.medianPrice
  ) : 220;

  const bedroomMultiplier = getBedroomPriceMultiplier(inputs.bedrooms, inputs.roomType);
  const benchmarkPrice = Math.round(rawBasePrice * bedroomMultiplier);
  const benchmarkOccupancy = Math.round((currentBenchmark?.estimatedOccupancyRate || 0.65) * 100);

  const optimalPriceData = useMemo(() => {
    return findOptimalPrice(
      benchmarkPrice,
      benchmarkOccupancy,
      sensitivity,
      inputs.longTermRentBenchmark,
      inputs.isHosted
    );
  }, [benchmarkPrice, benchmarkOccupancy, sensitivity, inputs.longTermRentBenchmark, inputs.isHosted]);

  // When neighborhood, room type, bedrooms, or bathrooms change, update benchmark defaults
  const handlePropertyInputsChange = (newInputs: PropertyInputs) => {
    const hoodChanged = newInputs.neighbourhood !== inputs.neighbourhood;
    const roomChanged = newInputs.roomType !== inputs.roomType;
    const bedroomsChanged = newInputs.bedrooms !== inputs.bedrooms;
    const bathroomsChanged = newInputs.bathrooms !== inputs.bathrooms;
    const hostedChanged = newInputs.isHosted !== inputs.isHosted;

    // Automatically suggest capacity and long-term benchmark when bedrooms change
    if (bedroomsChanged) {
      newInputs.accommodates = newInputs.bedrooms === 0 ? 2 : Math.max(2, newInputs.bedrooms * 2);
      newInputs.longTermRentBenchmark = getDefaultLongTermRent(newInputs.bedrooms, newInputs.roomType);
    }

    setInputs(newInputs);

    if (hoodChanged || roomChanged || bedroomsChanged || bathroomsChanged) {
      const targetHood = DC_AIRBNB_DATA.neighborhoods[newInputs.neighbourhood];
      const targetBench =
        targetHood?.roomTypes[newInputs.roomType] ||
        DC_AIRBNB_DATA.citySummary.cityMedians[newInputs.roomType];

      if (targetBench) {
        let basePrice = targetBench.medianPrice;
        if (newInputs.propertyTier === 'budget') basePrice = targetBench.p25Price;
        if (newInputs.propertyTier === 'premium') basePrice = targetBench.p75Price;

        const mult = getBedroomPriceMultiplier(newInputs.bedrooms, newInputs.roomType);
        const newScaledPrice = Math.round(basePrice * mult);
        const newOcc = Math.round((targetBench.estimatedOccupancyRate || 0.65) * 100);
        const scaledExpenses = getScaledDefaultExpenses(newInputs.bedrooms, newInputs.bathrooms, newInputs.roomType);

        setSensitivity((prev) => ({
          ...prev,
          nightlyPrice: newScaledPrice,
          occupancyPercent: newOcc,
          avgStayLength: Math.max(2, targetBench.medianMinNights ? targetBench.medianMinNights + 1.5 : 3.5),
          ...scaledExpenses,
        }));
      }
    }

    if (hostedChanged && newInputs.isHosted) {
      setSensitivity((prev) => ({
        ...prev,
        enforceDC90DayCap: false,
      }));
    }
  };

  const handleApplyTierPrice = (tier: 'budget' | 'median' | 'premium') => {
    if (!currentBenchmark) return;
    let basePrice = currentBenchmark.medianPrice;
    if (tier === 'budget') basePrice = currentBenchmark.p25Price;
    if (tier === 'premium') basePrice = currentBenchmark.p75Price;

    const mult = getBedroomPriceMultiplier(inputs.bedrooms, inputs.roomType);
    const targetPrice = Math.round(basePrice * mult);

    setSensitivity((prev) => ({
      ...prev,
      nightlyPrice: targetPrice,
    }));
  };

  // Reset to initial neighborhood medians and default expense values
  const handleReset = () => {
    if (!currentBenchmark) return;
    setInputs((prev) => ({
      ...prev,
      propertyTier: 'median',
      bedrooms: 2,
      bathrooms: 1.5,
      accommodates: 4,
      longTermRentBenchmark: 2800,
    }));
    setSensitivity({
      nightlyPrice: currentBenchmark.medianPrice,
      occupancyPercent: Math.round((currentBenchmark.estimatedOccupancyRate || 0.65) * 100),
      avgStayLength: 3.5,
      ...DEFAULT_EXPENSES,
      enforceDC90DayCap: false,
    });
    setElasticityMode(true);
  };

  // Compute live financials
  const financials = useMemo(() => {
    return calculateFinancials(
      sensitivity,
      inputs.longTermRentBenchmark,
      inputs.isHosted
    );
  }, [sensitivity, inputs.longTermRentBenchmark, inputs.isHosted]);

  // Compute live sensitivity matrix
  const sensitivityMatrixData = useMemo(() => {
    return generateSensitivityMatrix(
      sensitivity.nightlyPrice,
      sensitivity.occupancyPercent,
      sensitivity,
      inputs.longTermRentBenchmark,
      inputs.isHosted,
      benchmarkPrice,
      benchmarkOccupancy
    );
  }, [sensitivity, inputs.longTermRentBenchmark, inputs.isHosted, benchmarkPrice, benchmarkOccupancy]);

  const handleSelectScenario = (price: number, occ: number) => {
    setSensitivity((prev) => ({
      ...prev,
      nightlyPrice: price,
      occupancyPercent: occ,
    }));
  };

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 font-sans antialiased selection:bg-emerald-500 selection:text-white">
      <Header
        onReset={handleReset}
        activeNeighborhood={inputs.neighbourhood}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Intro banner */}
        <div className="bg-white rounded-xl border border-zinc-200/90 p-4 shadow-2xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="text-xs text-zinc-600">
            <span className="font-semibold text-zinc-900">
              Considering listing your Washington D.C. property on Airbnb?
            </span>{' '}
            Enter your property configuration below. Use the live sliding bars to run sensitivity analysis on price, occupancy, and operating expenses.
          </div>
          <div className="shrink-0 text-xs font-mono text-zinc-500 bg-zinc-50 px-3 py-1 rounded border border-zinc-200">
            Active: <strong className="text-zinc-800">{inputs.neighbourhood}</strong>
          </div>
        </div>

        {/* Core Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Property Details & Owner Sensitivity Sliders (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            <PropertyProfileCard
              inputs={inputs}
              onChange={handlePropertyInputsChange}
              onApplyTierPrice={handleApplyTierPrice}
            />

            <SensitivitySliders
              sensitivity={sensitivity}
              onChange={setSensitivity}
              benchmark={currentBenchmark}
              benchmarkPrice={benchmarkPrice}
              baseOccupancyPercent={benchmarkOccupancy}
              isHosted={inputs.isHosted}
              elasticityMode={elasticityMode}
              onToggleElasticityMode={setElasticityMode}
              optimalPriceData={optimalPriceData}
            />
          </div>

          {/* Right Column: Financial Output, Sensitivity Matrix & Comps (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6">
            {/* KPI Performance Summary */}
            <ProfitSummaryKPIs financials={financials} />

            {/* Sensitivity Matrix Table (Price vs Occupancy Heatmap) */}
            <SensitivityMatrixTable
              priceSteps={sensitivityMatrixData.priceSteps}
              occupancySteps={sensitivityMatrixData.occupancySteps}
              matrix={sensitivityMatrixData.matrix}
              onSelectScenario={handleSelectScenario}
              currentPrice={sensitivity.nightlyPrice}
              currentOccupancy={sensitivity.occupancyPercent}
            />

            {/* Revenue & Expense Allocation Bar and Ledger */}
            <ExpenseBreakdownBar
              financials={financials}
              sensitivity={sensitivity}
              isHosted={inputs.isHosted}
            />

            {/* Inside Airbnb Dataset Market Comps & DC Regulations */}
            <NeighborhoodBenchmarkCard
              neighborhoodData={currentHoodData}
              roomType={inputs.roomType}
            />
          </div>
        </div>

        {/* Footer info note */}
        <footer className="pt-4 pb-8 border-t border-zinc-200 text-center text-xs text-zinc-500 space-y-1">
          <p>
            Data source: Inside Airbnb Washington D.C. dataset ({DC_AIRBNB_DATA.citySummary.totalListings.toLocaleString()} listings across {DC_AIRBNB_DATA.citySummary.neighborhoodsCount} neighborhoods).
          </p>
          <p className="text-[11px] text-zinc-400">
            This tool provides financial estimation and sensitivity models for planning purposes. Always consult local DC Department of Licensing and Consumer Protection (DLCP) guidelines and a tax professional before hosting.
          </p>
        </footer>
      </main>
    </div>
  );
}
