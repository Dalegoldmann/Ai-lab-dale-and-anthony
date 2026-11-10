const fs = require('fs');
const path = require('path');

function parseCSV(text) {
  const lines = [];
  let row = [];
  let inQuotes = false;
  let cur = '';
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '"') {
      if (inQuotes && text[i + 1] === '"') {
        cur += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === ',' && !inQuotes) {
      row.push(cur);
      cur = '';
    } else if ((ch === '\r' || ch === '\n') && !inQuotes) {
      if (ch === '\r' && text[i + 1] === '\n') i++;
      row.push(cur);
      cur = '';
      if (row.length > 1 || row[0] !== '') lines.push(row);
      row = [];
    } else {
      cur += ch;
    }
  }
  if (cur.length > 0 || row.length > 0) {
    row.push(cur);
    lines.push(row);
  }
  return lines;
}

const csvPath = path.join(__dirname, '../public/assets/aistudio/listings__1__adf5f22a.csv');
const text = fs.readFileSync(csvPath, 'utf8');
const rows = parseCSV(text);

function median(arr) {
  if (arr.length === 0) return 0;
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}
function quantile(arr, q) {
  if (arr.length === 0) return 0;
  const sorted = [...arr].sort((a, b) => a - b);
  const pos = (sorted.length - 1) * q;
  const base = Math.floor(pos);
  const rest = pos - base;
  if (sorted[base + 1] !== undefined) {
    return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
  } else {
    return sorted[base];
  }
}
function avg(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

const hoods = {};
const allPricesByRoom = {};
const allPrices = [];

for (let i = 1; i < rows.length; i++) {
  const r = rows[i];
  if (!r || r.length < 11) continue;
  const id = r[0];
  const name = r[1] ? r[1].trim().replace(/\s+/g, ' ').slice(0, 75) : 'DC Listing';
  const neighbourhood = r[6] ? r[6].trim() : '';
  const roomType = r[9] ? r[9].trim() : 'Entire home/apt';
  const priceVal = parseFloat(r[10]);
  const minNights = parseInt(r[11], 10) || 1;
  const numReviews = parseInt(r[12], 10) || 0;
  const reviewsPerMonth = parseFloat(r[14]) || 0;
  const availability365 = parseInt(r[16], 10) || 0;
  const license = r[18] ? r[18].trim() : '';

  if (!neighbourhood) continue;

  const validPrice = !isNaN(priceVal) && priceVal > 15 && priceVal < 5000 ? priceVal : null;

  if (validPrice) {
    allPrices.push(validPrice);
    if (!allPricesByRoom[roomType]) allPricesByRoom[roomType] = [];
    allPricesByRoom[roomType].push(validPrice);
  }

  if (!hoods[neighbourhood]) {
    hoods[neighbourhood] = [];
  }

  hoods[neighbourhood].push({
    id,
    name,
    roomType,
    price: validPrice,
    minNights,
    numReviews,
    reviewsPerMonth,
    availability365,
    hasLicense: license.length > 0,
    isHosted: license.toLowerCase().includes('hosted')
  });
}

// City benchmarks
const cityMedians = {};
for (const [rt, prices] of Object.entries(allPricesByRoom)) {
  cityMedians[rt] = {
    median: Math.round(median(prices)),
    p25: Math.round(quantile(prices, 0.25)),
    p75: Math.round(quantile(prices, 0.75)),
    count: prices.length
  };
}

const neighborhoodMap = {};

for (const [hoodName, listings] of Object.entries(hoods)) {
  const roomTypes = {};
  const validListingsWithPrice = listings.filter(l => l.price !== null);

  // Group by room type
  const byRoom = {};
  listings.forEach(l => {
    if (!byRoom[l.roomType]) byRoom[l.roomType] = [];
    byRoom[l.roomType].push(l);
  });

  for (const [rt, rListings] of Object.entries(byRoom)) {
    const prices = rListings.map(l => l.price).filter(p => p !== null);
    const minNightsArr = rListings.map(l => l.minNights).filter(n => n > 0 && n <= 365);
    const reviewsPerMonthArr = rListings.map(l => l.reviewsPerMonth).filter(r => r > 0);
    const licensedCount = rListings.filter(l => l.hasLicense).length;

    // Estimate occupancy: In Inside Airbnb data, average booked nights can be estimated via review rate:
    // Typical model: 50% review rate, ~3.5 nights/stay -> reviews_per_month * 2 * 3.5 nights / 30
    // Clamped realistically between 40% and 80% with baseline ~62%
    let estimatedOcc = 0.62;
    if (reviewsPerMonthArr.length > 0) {
      const avgRPM = avg(reviewsPerMonthArr);
      const modeledNights = avgRPM * 2.0 * 3.5;
      const rawOcc = modeledNights / 30;
      estimatedOcc = Math.min(0.82, Math.max(0.45, rawOcc));
    }

    roomTypes[rt] = {
      count: rListings.length,
      pricedCount: prices.length,
      medianPrice: prices.length >= 3 ? Math.round(median(prices)) : (cityMedians[rt]?.median || 180),
      p25Price: prices.length >= 3 ? Math.round(quantile(prices, 0.25)) : (cityMedians[rt]?.p25 || 120),
      p75Price: prices.length >= 3 ? Math.round(quantile(prices, 0.75)) : (cityMedians[rt]?.p75 || 260),
      medianMinNights: minNightsArr.length > 0 ? Math.round(median(minNightsArr)) : 2,
      avgReviewsPerMonth: reviewsPerMonthArr.length > 0 ? Number(avg(reviewsPerMonthArr).toFixed(2)) : 1.2,
      estimatedOccupancyRate: Number(estimatedOcc.toFixed(2)),
      licensedPercentage: Math.round((licensedCount / rListings.length) * 100)
    };
  }

  // Representative sample comps: pick up to 5 diverse listings that have price and reviews
  const sortedComps = validListingsWithPrice
    .filter(l => l.numReviews >= 3)
    .sort((a, b) => b.numReviews - a.numReviews)
    .slice(0, 5)
    .map(l => ({
      id: l.id,
      name: l.name,
      roomType: l.roomType,
      price: l.price,
      minNights: l.minNights,
      numReviews: l.numReviews,
      reviewsPerMonth: l.reviewsPerMonth,
      isHosted: l.isHosted,
      hasLicense: l.hasLicense
    }));

  neighborhoodMap[hoodName] = {
    name: hoodName,
    totalListings: listings.length,
    pricedListings: validListingsWithPrice.length,
    overallMedianPrice: validListingsWithPrice.length > 0 ? Math.round(median(validListingsWithPrice.map(l => l.price))) : 180,
    roomTypes,
    sampleComps: sortedComps
  };
}

const outputData = {
  citySummary: {
    totalListings: rows.length - 1,
    neighborhoodsCount: Object.keys(hoods).length,
    cityMedians,
    defaultBaselineOccupancy: 0.65
  },
  neighborhoods: neighborhoodMap
};

const targetPath = path.join(__dirname, '../src/data/dcData.ts');
fs.mkdirSync(path.dirname(targetPath), { recursive: true });

const tsCode = `// Auto-generated DC Inside Airbnb benchmark data
export interface RoomTypeBenchmark {
  count: number;
  pricedCount: number;
  medianPrice: number;
  p25Price: number;
  p75Price: number;
  medianMinNights: number;
  avgReviewsPerMonth: number;
  estimatedOccupancyRate: number;
  licensedPercentage: number;
}

export interface SampleListingComp {
  id: string;
  name: string;
  roomType: string;
  price: number;
  minNights: number;
  numReviews: number;
  reviewsPerMonth: number;
  isHosted: boolean;
  hasLicense: boolean;
}

export interface NeighborhoodData {
  name: string;
  totalListings: number;
  pricedListings: number;
  overallMedianPrice: number;
  roomTypes: Record<string, RoomTypeBenchmark>;
  sampleComps: SampleListingComp[];
}

export interface CitySummary {
  totalListings: number;
  neighborhoodsCount: number;
  cityMedians: Record<string, { median: number; p25: number; p75: number; count: number }>;
  defaultBaselineOccupancy: number;
}

export const DC_AIRBNB_DATA: {
  citySummary: CitySummary;
  neighborhoods: Record<string, NeighborhoodData>;
} = ${JSON.stringify(outputData, null, 2)};
`;

fs.writeFileSync(targetPath, tsCode, 'utf8');
console.log('Successfully generated', targetPath, 'Size:', (fs.statSync(targetPath).size / 1024).toFixed(1), 'KB');
