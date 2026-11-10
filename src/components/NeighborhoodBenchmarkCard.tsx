import React from 'react';
import { BarChart3, ShieldCheck, MapPin, Building, Info, ExternalLink, Tag } from 'lucide-react';
import { NeighborhoodData, RoomTypeBenchmark } from '../data/dcData';

interface NeighborhoodBenchmarkCardProps {
  neighborhoodData?: NeighborhoodData;
  roomType: string;
}

export const NeighborhoodBenchmarkCard: React.FC<NeighborhoodBenchmarkCardProps> = ({
  neighborhoodData,
  roomType,
}) => {
  if (!neighborhoodData) return null;

  const roomStats: RoomTypeBenchmark | undefined = neighborhoodData.roomTypes[roomType];

  return (
    <div className="bg-white rounded-xl border border-zinc-200 p-5 shadow-xs space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-3 border-b border-zinc-100">
        <div>
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-emerald-600" />
            <h3 className="text-sm font-semibold text-zinc-900 tracking-tight">
              Inside Airbnb Market Comps & Benchmarks
            </h3>
          </div>
          <p className="text-[11px] text-zinc-500 mt-0.5">
            Empirical data from {neighborhoodData.totalListings} active listings in {neighborhoodData.name}
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-600 bg-zinc-50 px-2.5 py-1 rounded border border-zinc-200">
          <MapPin className="w-3 h-3 text-zinc-400" />
          <span>{neighborhoodData.pricedListings} priced listings</span>
        </div>
      </div>

      {/* Metrics Grid */}
      {roomStats ? (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-zinc-50 rounded-lg p-3 border border-zinc-200/80">
            <div className="text-[10px] uppercase font-semibold text-zinc-500">
              Area Median ({roomType})
            </div>
            <div className="text-xl font-bold font-mono text-zinc-900 mt-0.5">
              ${roomStats.medianPrice}
              <span className="text-xs font-normal text-zinc-500">/nt</span>
            </div>
            <div className="text-[10px] text-zinc-500 mt-0.5">
              Range: ${roomStats.p25Price} - ${roomStats.p75Price}
            </div>
          </div>

          <div className="bg-zinc-50 rounded-lg p-3 border border-zinc-200/80">
            <div className="text-[10px] uppercase font-semibold text-zinc-500">
              Est. Market Occupancy
            </div>
            <div className="text-xl font-bold font-mono text-emerald-700 mt-0.5">
              {Math.round(roomStats.estimatedOccupancyRate * 100)}%
            </div>
            <div className="text-[10px] text-zinc-500 mt-0.5">
              ~{Math.round(roomStats.estimatedOccupancyRate * 30.42)} booked days/mo
            </div>
          </div>

          <div className="bg-zinc-50 rounded-lg p-3 border border-zinc-200/80">
            <div className="text-[10px] uppercase font-semibold text-zinc-500">
              Review Velocity
            </div>
            <div className="text-xl font-bold font-mono text-zinc-900 mt-0.5">
              {roomStats.avgReviewsPerMonth}
              <span className="text-xs font-normal text-zinc-500"> rev/mo</span>
            </div>
            <div className="text-[10px] text-zinc-500 mt-0.5">
              Indicator of guest turns
            </div>
          </div>

          <div className="bg-zinc-50 rounded-lg p-3 border border-zinc-200/80">
            <div className="text-[10px] uppercase font-semibold text-zinc-500">
              DC STR License Rate
            </div>
            <div className="text-xl font-bold font-mono text-zinc-900 mt-0.5">
              {roomStats.licensedPercentage}%
            </div>
            <div className="text-[10px] text-zinc-500 mt-0.5">
              With DC DLCP license
            </div>
          </div>
        </div>
      ) : (
        <div className="p-3 bg-zinc-50 rounded-lg text-xs text-zinc-600">
          Limited sample for this room type in {neighborhoodData.name}. Using citywide D.C. benchmarks.
        </div>
      )}

      {/* Real Comps List */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-zinc-800">
            Sample Live Comps in {neighborhoodData.name}
          </span>
          <span className="text-[11px] text-zinc-500">
            Inside Airbnb dataset ground truth
          </span>
        </div>

        <div className="space-y-2">
          {neighborhoodData.sampleComps.slice(0, 4).map((comp) => (
            <div
              key={comp.id}
              className="p-3 rounded-lg border border-zinc-200 hover:border-zinc-300 bg-white transition-colors flex items-center justify-between gap-3 text-xs"
            >
              <div className="min-w-0 flex-1">
                <div className="font-medium text-zinc-900 truncate">
                  {comp.name}
                </div>
                <div className="flex items-center gap-2 text-[11px] text-zinc-500 mt-0.5">
                  <span className="capitalize">{comp.roomType}</span>
                  <span>•</span>
                  <span>{comp.numReviews} total reviews ({comp.reviewsPerMonth}/mo)</span>
                  {comp.hasLicense && (
                    <>
                      <span>•</span>
                      <span className="text-emerald-700 flex items-center gap-0.5">
                        <ShieldCheck className="w-3 h-3" />
                        {comp.isHosted ? 'Hosted License' : 'Licensed'}
                      </span>
                    </>
                  )}
                </div>
              </div>

              <div className="text-right shrink-0">
                <div className="font-mono font-bold text-sm text-zinc-900">
                  ${comp.price}
                  <span className="text-[10px] font-normal text-zinc-500">/nt</span>
                </div>
                <div className="text-[10px] text-zinc-400">
                  min. {comp.minNights} {comp.minNights === 1 ? 'night' : 'nights'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Washington D.C. Short-Term Rental Regulations Primer */}
      <div className="p-3.5 bg-zinc-50 rounded-lg border border-zinc-200 text-xs text-zinc-600 space-y-2">
        <div className="flex items-center gap-1.5 font-semibold text-zinc-900">
          <Info className="w-3.5 h-3.5 text-zinc-600" />
          <span>Washington D.C. Short-Term Rental Regulations (Law 22-307)</span>
        </div>
        <ul className="list-disc pl-4 space-y-1 text-[11px] text-zinc-600">
          <li>
            <strong>Primary Residence Only:</strong> You may only operate a short-term rental in your primary residence (where you reside at least 185 days/year).
          </li>
          <li>
            <strong>Hosted vs Unhosted:</strong> If you are present on-site during stays ("Hosted"), there is <strong>no annual calendar limit</strong>. If you rent the entire home while away ("Unhosted"), DC law restricts STR operation to <strong>90 nights per calendar year</strong> unless a vacation endorsement is granted.
          </li>
          <li>
            <strong>Licensing:</strong> Requires a Basic Business License (BLL) with a Short-Term Rental endorsement from the DC Department of Licensing and Consumer Protection (DLCP).
          </li>
          <li>
            <strong>Taxes:</strong> The 14.95% DC Transient Occupancy Tax is collected and remitted automatically by Airbnb on your behalf.
          </li>
        </ul>
      </div>
    </div>
  );
};
