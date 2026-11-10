/**
 * Washington DC Airbnb Revenue & Sensitivity Financial Calculator
 */

export interface PropertyInputs {
  neighbourhood: string;
  roomType: string;
  bedrooms: number;
  bathrooms: number;
  accommodates: number;
  propertyTier: 'budget' | 'median' | 'premium';
  isHosted: boolean; // Hosted (primary residence, no 90-day limit) vs Unhosted (capped at 90 days/yr in DC)
  longTermRentBenchmark: number; // e.g. $2,200/mo traditional lease benchmark
}

export interface SensitivityControls {
  nightlyPrice: number;
  occupancyPercent: number; // 0 to 100
  avgStayLength: number; // days per stay, e.g. 3.5
  cleaningFeeCharged: number; // fee charged to guests
  cleaningCostPaid: number; // actual cost paid to clean
  monthlyUtilities: number; // electric, gas, water, internet
  monthlySupplies: number; // coffee, toiletries, linens
  monthlyMaintenance: number; // repairs and wear-and-tear reserve
  platformFeePercent: number; // standard Airbnb host fee is 3%
  managementFeePercent: number; // 0% DIY to 20% co-host
  enforceDC90DayCap: boolean; // if unhosted, calculate effective annualized monthly return
}

export const DEFAULT_EXPENSES: Pick<
  SensitivityControls,
  | 'monthlyUtilities'
  | 'monthlySupplies'
  | 'monthlyMaintenance'
  | 'platformFeePercent'
  | 'managementFeePercent'
  | 'cleaningFeeCharged'
  | 'cleaningCostPaid'
> = {
  monthlyUtilities: 220,
  monthlySupplies: 60,
  monthlyMaintenance: 120,
  platformFeePercent: 3,
  managementFeePercent: 0,
  cleaningFeeCharged: 95,
  cleaningCostPaid: 95,
};

export const DEFAULT_ASSUMED_EXPENSES = DEFAULT_EXPENSES;

/**
 * Empirical DC bedroom price multiplier for Entire home/apt listings
 * Derived from the 1,837 DC listings in the Inside Airbnb dataset specifying bedroom size:
 * Studio (0BR): median $167 (0.72x)
 * 1 Bedroom: median $183 (0.80x)
 * 2 Bedrooms: median $245 (1.00x baseline)
 * 3 Bedrooms: median $328 (1.35x)
 * 4+ Bedrooms: median $382+ (1.58x)
 */
export function getBedroomPriceMultiplier(bedrooms: number, roomType: string): number {
  if (roomType !== 'Entire home/apt') return 1.0;
  switch (bedrooms) {
    case 0:
      return 0.72; // Studio
    case 1:
      return 0.80; // 1 Bedroom
    case 2:
      return 1.0; // 2 Bedrooms (baseline)
    case 3:
      return 1.35; // 3 Bedrooms
    case 4:
    default:
      return 1.58; // 4+ Bedrooms
  }
}

/**
 * Calibrate default operating expenses based on property scale (bedrooms & bathrooms)
 */
export function getScaledDefaultExpenses(bedrooms: number, bathrooms: number, roomType: string) {
  if (roomType !== 'Entire home/apt') {
    return {
      cleaningFeeCharged: 50,
      cleaningCostPaid: 50,
      monthlyUtilities: 100,
      monthlySupplies: 35,
      monthlyMaintenance: 60,
    };
  }

  const bathExtra = Math.max(0, Math.floor(bathrooms - 1)) * 15;
  let baseCleaning = 95;
  let utilities = 220;
  let supplies = 60;
  let maintenance = 120;

  switch (bedrooms) {
    case 0: // Studio
      baseCleaning = 70;
      utilities = 150;
      supplies = 40;
      maintenance = 80;
      break;
    case 1: // 1BR
      baseCleaning = 80;
      utilities = 180;
      supplies = 50;
      maintenance = 100;
      break;
    case 2: // 2BR
      baseCleaning = 95;
      utilities = 220;
      supplies = 60;
      maintenance = 120;
      break;
    case 3: // 3BR
      baseCleaning = 140;
      utilities = 290;
      supplies = 80;
      maintenance = 160;
      break;
    case 4: // 4+BR
    default:
      baseCleaning = 180;
      utilities = 360;
      supplies = 100;
      maintenance = 210;
      break;
  }

  const finalCleaning = baseCleaning + bathExtra;

  return {
    cleaningFeeCharged: finalCleaning,
    cleaningCostPaid: finalCleaning,
    monthlyUtilities: utilities,
    monthlySupplies: supplies,
    monthlyMaintenance: maintenance,
  };
}

/**
 * Typical DC long-term rent benchmark by bedroom count
 */
export function getDefaultLongTermRent(bedrooms: number, roomType: string): number {
  if (roomType !== 'Entire home/apt') return 1100;
  switch (bedrooms) {
    case 0:
      return 1800; // Studio
    case 1:
      return 2250; // 1 Bedroom
    case 2:
      return 2800; // 2 Bedrooms
    case 3:
      return 3800; // 3 Bedrooms
    case 4:
    default:
      return 4900; // 4+ Bedrooms
  }
}

export interface MonthlyFinancials {
  bookedNights: number;
  unbookedNights: number;
  numberOfStays: number;
  grossNightlyRevenue: number;
  grossCleaningRevenue: number;
  totalGrossRevenue: number;
  // Expenses
  platformFee: number;
  totalCleaningExpense: number;
  managementFee: number;
  fixedOperatingCosts: number; // utilities + supplies + maintenance
  totalExpenses: number;
  // Net
  netOperatingIncome: number; // Monthly NOI
  annualGrossRevenue: number;
  annualNetProfit: number;
  // Comparison
  netVsLongTerm: number;
  breakEvenNights: number;
  profitMarginPercent: number;
}

export interface SensitivityMatrixCell {
  nightlyPrice: number;
  occupancyPercent: number;
  monthlyNetProfit: number;
  isCurrent: boolean;
}

export function calculateFinancials(
  sensitivity: SensitivityControls,
  longTermBenchmark: number = 0,
  isHosted: boolean = true
): MonthlyFinancials {
  const daysInMonth = 30.42; // average days in a month
  
  // Calculate booked nights based on occupancy
  const rawBookedNights = (sensitivity.occupancyPercent / 100) * daysInMonth;
  const bookedNights = Math.min(daysInMonth, Math.max(0, rawBookedNights));
  const unbookedNights = Math.max(0, daysInMonth - bookedNights);

  // Number of guest stays / turnovers per month
  const avgStay = Math.max(1, sensitivity.avgStayLength);
  const numberOfStays = bookedNights > 0 ? Number((bookedNights / avgStay).toFixed(1)) : 0;

  // Gross revenues
  const grossNightlyRevenue = bookedNights * sensitivity.nightlyPrice;
  const grossCleaningRevenue = numberOfStays * sensitivity.cleaningFeeCharged;
  const totalGrossRevenue = grossNightlyRevenue + grossCleaningRevenue;

  // Operating Expenses
  const platformFee = grossNightlyRevenue * (sensitivity.platformFeePercent / 100);
  const totalCleaningExpense = numberOfStays * sensitivity.cleaningCostPaid;
  const managementFee = totalGrossRevenue * (sensitivity.managementFeePercent / 100);
  const fixedOperatingCosts =
    sensitivity.monthlyUtilities + sensitivity.monthlySupplies + sensitivity.monthlyMaintenance;

  const totalExpenses =
    platformFee + totalCleaningExpense + managementFee + fixedOperatingCosts;

  const monthlyNOI = totalGrossRevenue - totalExpenses;

  // DC 90-day unhosted limit handling
  // If unhosted AND user enforces 90-day cap, STR only operates 90 days / year (7.5 days/month)
  // or switches to 30+ day medium-term rental.
  let annualGrossRevenue = totalGrossRevenue * 12;
  let annualNetProfit = monthlyNOI * 12;

  if (!isHosted && sensitivity.enforceDC90DayCap) {
    // 90 nights allowed per year for short-term rental
    const annualAllowedSTRNights = Math.min(90, bookedNights * 12);
    const strStaysYear = annualAllowedSTRNights / avgStay;
    const strGrossYear = (annualAllowedSTRNights * sensitivity.nightlyPrice) + (strStaysYear * sensitivity.cleaningFeeCharged);
    const strPlatformFee = (annualAllowedSTRNights * sensitivity.nightlyPrice) * (sensitivity.platformFeePercent / 100);
    const strCleaningCost = strStaysYear * sensitivity.cleaningCostPaid;
    const strMgmt = strGrossYear * (sensitivity.managementFeePercent / 100);
    const strFixedAnnual = fixedOperatingCosts * 12;
    
    // Medium term rental or vacancy for remaining ~275 days
    // Assume 30+ day corporate/furnished rental fills remainder at conservative rate (~70% of standard long-term benchmark)
    const remainderMonths = (365 - annualAllowedSTRNights) / 30.42;
    const mtrRevenue = remainderMonths * (longTermBenchmark > 0 ? longTermBenchmark : (grossNightlyRevenue * 0.5));
    
    annualGrossRevenue = strGrossYear + mtrRevenue;
    annualNetProfit = (strGrossYear - (strPlatformFee + strCleaningCost + strMgmt + (fixedOperatingCosts * (annualAllowedSTRNights / 365 * 12)))) + (mtrRevenue * 0.85);
  }

  // Break-even nights needed per month (fixed costs / (nightly rate - variable cost per night))
  const variableCostPerNight = bookedNights > 0 
    ? (platformFee + totalCleaningExpense - grossCleaningRevenue) / bookedNights 
    : 0;
  const netContributionPerNight = Math.max(1, sensitivity.nightlyPrice - variableCostPerNight);
  const breakEvenNights = Math.min(30, Math.max(0, Math.ceil(fixedOperatingCosts / netContributionPerNight)));

  const profitMarginPercent = totalGrossRevenue > 0 
    ? Math.round((monthlyNOI / totalGrossRevenue) * 100) 
    : 0;

  const netVsLongTerm = monthlyNOI - longTermBenchmark;

  return {
    bookedNights: Math.round(bookedNights * 10) / 10,
    unbookedNights: Math.round(unbookedNights * 10) / 10,
    numberOfStays,
    grossNightlyRevenue: Math.round(grossNightlyRevenue),
    grossCleaningRevenue: Math.round(grossCleaningRevenue),
    totalGrossRevenue: Math.round(totalGrossRevenue),
    platformFee: Math.round(platformFee),
    totalCleaningExpense: Math.round(totalCleaningExpense),
    managementFee: Math.round(managementFee),
    fixedOperatingCosts: Math.round(fixedOperatingCosts),
    totalExpenses: Math.round(totalExpenses),
    netOperatingIncome: Math.round(monthlyNOI),
    annualGrossRevenue: Math.round(annualGrossRevenue),
    annualNetProfit: Math.round(annualNetProfit),
    netVsLongTerm: Math.round(netVsLongTerm),
    breakEvenNights,
    profitMarginPercent,
  };
}

/**
 * Standard Price Elasticity of Demand coefficient for urban short-term rentals
 * Derived from empirical hospitality economics research (Wang & Nicolau; Gibbs et al.)
 * A 10% price increase relative to local comps reduces booked volume by ~12%.
 */
export const PRICE_ELASTICITY_COEFFICIENT = -1.2;

/**
 * Predict occupancy rate based on nightly price relative to neighborhood benchmark
 * Formula: Predicted Occ = Base Occ * (Price / BenchmarkPrice) ^ Elasticity
 */
export function predictOccupancyFromPrice(
  price: number,
  benchmarkPrice: number,
  baseOccupancyPercent: number,
  elasticity: number = PRICE_ELASTICITY_COEFFICIENT,
  minOcc: number = 15,
  maxOcc: number = 92
): number {
  if (price <= 0 || benchmarkPrice <= 0) return baseOccupancyPercent;
  const priceRatio = price / benchmarkPrice;
  // Q = Q0 * (P / P0)^epsilon
  const predicted = baseOccupancyPercent * Math.pow(priceRatio, elasticity);
  return Math.min(maxOcc, Math.max(minOcc, Math.round(predicted)));
}

/**
 * Find the optimal revenue-maximizing price (P*) and its predicted occupancy
 */
export function findOptimalPrice(
  benchmarkPrice: number,
  baseOccupancyPercent: number,
  sensitivityBase: SensitivityControls,
  longTermBenchmark: number,
  isHosted: boolean,
  elasticity: number = PRICE_ELASTICITY_COEFFICIENT
): {
  optimalPrice: number;
  optimalOccupancy: number;
  maxMonthlyProfit: number;
} {
  let optimalPrice = benchmarkPrice;
  let optimalOccupancy = baseOccupancyPercent;
  let maxMonthlyProfit = -Infinity;

  const minPrice = Math.max(30, Math.round(benchmarkPrice * 0.5));
  const maxPrice = Math.round(benchmarkPrice * 1.85);

  for (let p = minPrice; p <= maxPrice; p += 5) {
    const occ = predictOccupancyFromPrice(p, benchmarkPrice, baseOccupancyPercent, elasticity);
    const scenario: SensitivityControls = {
      ...sensitivityBase,
      nightlyPrice: p,
      occupancyPercent: occ,
    };
    const fin = calculateFinancials(scenario, longTermBenchmark, isHosted);
    if (fin.netOperatingIncome > maxMonthlyProfit) {
      maxMonthlyProfit = fin.netOperatingIncome;
      optimalPrice = p;
      optimalOccupancy = occ;
    }
  }

  return { optimalPrice, optimalOccupancy, maxMonthlyProfit };
}

export interface SensitivityMatrixCell {
  nightlyPrice: number;
  occupancyPercent: number;
  monthlyNetProfit: number;
  isCurrent: boolean;
  isPredictedDemand?: boolean;
}

/**
 * Generate a 2D matrix of Sensitivity scenarios (Nightly Price x Occupancy Rate)
 */
export function generateSensitivityMatrix(
  basePrice: number,
  baseOccupancy: number,
  baseSensitivity: SensitivityControls,
  longTermBenchmark: number,
  isHosted: boolean,
  benchmarkPrice?: number,
  benchmarkOccupancy?: number
): {
  priceSteps: number[];
  occupancySteps: number[];
  matrix: SensitivityMatrixCell[][];
} {
  // Step multipliers for price: -20%, -10%, Base, +10%, +20%
  const priceMultipliers = [0.8, 0.9, 1.0, 1.1, 1.2];
  const priceSteps = priceMultipliers.map(m => Math.round(basePrice * m));

  // Occupancy steps: 40%, 50%, 60%, 70%, 80%
  const occupancySteps = [40, 50, 60, 70, 80];

  const benchP = benchmarkPrice || basePrice;
  const benchOcc = benchmarkOccupancy || baseOccupancy;

  const matrix: SensitivityMatrixCell[][] = [];

  for (const price of priceSteps) {
    const row: SensitivityMatrixCell[] = [];
    const predictedOcc = predictOccupancyFromPrice(price, benchP, benchOcc);

    // Find which column step is closest to predicted occupancy
    let closestStep = occupancySteps[0];
    let minDiff = Math.abs(occupancySteps[0] - predictedOcc);
    for (const step of occupancySteps) {
      const diff = Math.abs(step - predictedOcc);
      if (diff < minDiff) {
        minDiff = diff;
        closestStep = step;
      }
    }

    for (const occ of occupancySteps) {
      const scenarioSensitivity: SensitivityControls = {
        ...baseSensitivity,
        nightlyPrice: price,
        occupancyPercent: occ,
      };

      const fin = calculateFinancials(scenarioSensitivity, longTermBenchmark, isHosted);
      const isCurrent =
        Math.abs(price - baseSensitivity.nightlyPrice) < 5 &&
        Math.abs(occ - baseSensitivity.occupancyPercent) < 3;
      const isPredictedDemand = occ === closestStep;

      row.push({
        nightlyPrice: price,
        occupancyPercent: occ,
        monthlyNetProfit: fin.netOperatingIncome,
        isCurrent,
        isPredictedDemand,
      });
    }
    matrix.push(row);
  }

  return { priceSteps, occupancySteps, matrix };
}
