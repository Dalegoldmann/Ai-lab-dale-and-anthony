import React from 'react';
import { Building2, BedDouble, Bath, ShieldAlert, Sparkles, MapPin } from 'lucide-react';
import { PropertyInputs } from '../utils/calculator';
import { DC_AIRBNB_DATA } from '../data/dcData';

interface PropertyProfileCardProps {
  inputs: PropertyInputs;
  onChange: (inputs: PropertyInputs) => void;
  onApplyTierPrice: (tier: 'budget' | 'median' | 'premium') => void;
}

export const PropertyProfileCard: React.FC<PropertyProfileCardProps> = ({
  inputs,
  onChange,
  onApplyTierPrice,
}) => {
  const neighborhoodList = Object.keys(DC_AIRBNB_DATA.neighborhoods).sort((a, b) =>
    a.localeCompare(b)
  );

  const currentHoodData = DC_AIRBNB_DATA.neighborhoods[inputs.neighbourhood];
  const roomBenchmark =
    currentHoodData?.roomTypes[inputs.roomType] ||
    DC_AIRBNB_DATA.citySummary.cityMedians[inputs.roomType];

  const handleNeighborhoodChange = (hood: string) => {
    onChange({
      ...inputs,
      neighbourhood: hood,
    });
  };

  const handleRoomTypeChange = (roomType: string) => {
    onChange({
      ...inputs,
      roomType,
    });
  };

  const handleTierChange = (tier: 'budget' | 'median' | 'premium') => {
    onChange({
      ...inputs,
      propertyTier: tier,
    });
    onApplyTierPrice(tier);
  };

  return (
    <div className="bg-white rounded-xl border border-zinc-200 p-5 shadow-xs space-y-5">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4 text-zinc-700" />
          <h2 className="text-sm font-semibold text-zinc-900 tracking-tight">
            1. Property Details
          </h2>
        </div>
        <span className="text-xs text-zinc-500 font-mono">
          {currentHoodData?.totalListings || 0} local comps in dataset
        </span>
      </div>

      {/* Neighborhood Selection */}
      <div className="space-y-1.5">
        <label className="text-xs font-medium text-zinc-700 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-zinc-500" />
            Washington D.C. Neighborhood
          </span>
          {currentHoodData && (
            <span className="text-[11px] text-zinc-500">
              Area Median: <strong className="font-semibold text-zinc-800">${currentHoodData.overallMedianPrice}/nt</strong>
            </span>
          )}
        </label>
        <select
          value={inputs.neighbourhood}
          onChange={(e) => handleNeighborhoodChange(e.target.value)}
          className="w-full text-xs sm:text-sm font-medium bg-zinc-50 hover:bg-zinc-100/80 focus:bg-white text-zinc-900 border border-zinc-300 rounded-lg p-2.5 focus:outline-hidden focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-colors"
        >
          {neighborhoodList.map((hood) => {
            const data = DC_AIRBNB_DATA.neighborhoods[hood];
            return (
              <option key={hood} value={hood}>
                {hood} ({data.totalListings} listings • med. ${data.overallMedianPrice})
              </option>
            );
          })}
        </select>
      </div>

      {/* Room Type */}
      <div className="space-y-2">
        <label className="text-xs font-medium text-zinc-700 block">
          Rental Listing Format
        </label>
        <div className="grid grid-cols-3 gap-2">
          {[
            { id: 'Entire home/apt', label: 'Entire Place', desc: 'Whole condo or rowhouse' },
            { id: 'Private room', label: 'Private Room', desc: 'Bed in shared dwelling' },
            { id: 'Shared room', label: 'Shared Room', desc: 'Hostel or shared space' },
          ].map((type) => {
            const isSelected = inputs.roomType === type.id;
            const b = currentHoodData?.roomTypes[type.id];
            return (
              <button
                key={type.id}
                type="button"
                onClick={() => handleRoomTypeChange(type.id)}
                className={`text-left p-2.5 rounded-lg border transition-all cursor-pointer ${
                  isSelected
                    ? 'border-zinc-900 bg-zinc-900 text-white shadow-xs'
                    : 'border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-800'
                }`}
              >
                <div className="text-xs font-semibold">{type.label}</div>
                <div
                  className={`text-[10px] truncate ${
                    isSelected ? 'text-zinc-300' : 'text-zinc-500'
                  }`}
                >
                  {b ? `$${b.medianPrice}/nt • ${b.count} comps` : type.desc}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bedrooms, Bathrooms, Accommodates */}
      <div className="grid grid-cols-3 gap-3">
        <div className="space-y-1">
          <label className="text-[11px] font-medium text-zinc-600 flex items-center gap-1">
            <BedDouble className="w-3 h-3 text-zinc-400" />
            Bedrooms
          </label>
          <select
            value={inputs.bedrooms}
            onChange={(e) =>
              onChange({ ...inputs, bedrooms: parseInt(e.target.value, 10) })
            }
            className="w-full text-xs bg-zinc-50 border border-zinc-200 rounded-md p-2 text-zinc-800 font-medium focus:bg-white focus:outline-hidden focus:border-zinc-900"
          >
            <option value={0}>Studio</option>
            <option value={1}>1 Bedroom</option>
            <option value={2}>2 Bedrooms</option>
            <option value={3}>3 Bedrooms</option>
            <option value={4}>4+ Bedrooms</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-[11px] font-medium text-zinc-600 flex items-center gap-1">
            <Bath className="w-3 h-3 text-zinc-400" />
            Baths
          </label>
          <select
            value={inputs.bathrooms}
            onChange={(e) =>
              onChange({ ...inputs, bathrooms: parseFloat(e.target.value) })
            }
            className="w-full text-xs bg-zinc-50 border border-zinc-200 rounded-md p-2 text-zinc-800 font-medium focus:bg-white focus:outline-hidden focus:border-zinc-900"
          >
            <option value={1}>1 Bath</option>
            <option value={1.5}>1.5 Baths</option>
            <option value={2}>2 Baths</option>
            <option value={2.5}>2.5 Baths</option>
            <option value={3}>3+ Baths</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-[11px] font-medium text-zinc-600">Max Guests</label>
          <input
            type="number"
            min={1}
            max={14}
            value={inputs.accommodates}
            onChange={(e) =>
              onChange({
                ...inputs,
                accommodates: Math.max(1, parseInt(e.target.value, 10) || 1),
              })
            }
            className="w-full text-xs bg-zinc-50 border border-zinc-200 rounded-md p-2 text-zinc-800 font-medium focus:bg-white focus:outline-hidden focus:border-zinc-900"
          />
        </div>
      </div>

      {/* Property Condition / Tier Selection */}
      <div className="space-y-2">
        <label className="text-xs font-medium text-zinc-700 flex items-center justify-between">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-zinc-500" />
            Finishing & Quality Tier
          </span>
          <span className="text-[11px] text-zinc-500">
            Calibrates base rate to Inside Airbnb quantiles
          </span>
        </label>
        <div className="grid grid-cols-3 gap-2">
          {[
            {
              id: 'budget' as const,
              label: 'Budget / Cozy',
              quantileLabel: '25th %ile',
              price: roomBenchmark?.p25Price || 120,
            },
            {
              id: 'median' as const,
              label: 'Standard / Modern',
              quantileLabel: 'Median (50th)',
              price: roomBenchmark?.medianPrice || 180,
            },
            {
              id: 'premium' as const,
              label: 'Luxury / Historic',
              quantileLabel: '75th %ile',
              price: roomBenchmark?.p75Price || 260,
            },
          ].map((tier) => {
            const isSelected = inputs.propertyTier === tier.id;
            return (
              <button
                key={tier.id}
                type="button"
                onClick={() => handleTierChange(tier.id)}
                className={`p-2 rounded-lg border text-left transition-colors cursor-pointer ${
                  isSelected
                    ? 'border-emerald-600 bg-emerald-50/70 text-emerald-950 font-semibold ring-1 ring-emerald-600'
                    : 'border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700'
                }`}
              >
                <div className="text-xs font-medium">{tier.label}</div>
                <div className="text-[11px] font-mono text-emerald-700 font-semibold mt-0.5">
                  ${tier.price}/night
                </div>
                <div className="text-[10px] text-zinc-400">{tier.quantileLabel}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* DC Regulatory Hosting Model */}
      <div className="space-y-2 pt-2 border-t border-zinc-100">
        <label className="text-xs font-medium text-zinc-700 flex items-center justify-between">
          <span>DC Short-Term Rental Model</span>
          <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">
            DC Law 22-307
          </span>
        </label>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => onChange({ ...inputs, isHosted: true })}
            className={`p-2.5 rounded-lg border text-left transition-colors cursor-pointer ${
              inputs.isHosted
                ? 'border-zinc-800 bg-zinc-900 text-white'
                : 'border-zinc-200 bg-zinc-50 text-zinc-700 hover:bg-zinc-100'
            }`}
          >
            <div className="text-xs font-semibold">Hosted (Primary Residence)</div>
            <div
              className={`text-[10px] mt-0.5 ${
                inputs.isHosted ? 'text-zinc-300' : 'text-zinc-500'
              }`}
            >
              No 90-day annual cap. Owner lives on premises.
            </div>
          </button>

          <button
            type="button"
            onClick={() => onChange({ ...inputs, isHosted: false })}
            className={`p-2.5 rounded-lg border text-left transition-colors cursor-pointer ${
              !inputs.isHosted
                ? 'border-amber-600 bg-amber-50/80 text-amber-950 ring-1 ring-amber-600'
                : 'border-zinc-200 bg-zinc-50 text-zinc-700 hover:bg-zinc-100'
            }`}
          >
            <div className="text-xs font-semibold flex items-center gap-1">
              <span>Unhosted STR</span>
              <ShieldAlert className="w-3 h-3 text-amber-700" />
            </div>
            <div className="text-[10px] mt-0.5 text-zinc-600">
              Subject to DC 90-day annual cap for STR bookings.
            </div>
          </button>
        </div>
      </div>

      {/* Long-Term Benchmark / Opportunity Cost */}
      <div className="space-y-1.5 pt-2 border-t border-zinc-100">
        <label className="text-xs font-medium text-zinc-700 flex items-center justify-between">
          <span>Monthly Long-Term Rent or Carrying Cost</span>
          <span className="text-[11px] text-zinc-500">Benchmark comparison</span>
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-xs text-zinc-400 font-mono">
            $
          </span>
          <input
            type="number"
            step="50"
            min="0"
            max="15000"
            value={inputs.longTermRentBenchmark}
            onChange={(e) =>
              onChange({
                ...inputs,
                longTermRentBenchmark: Math.max(0, parseInt(e.target.value, 10) || 0),
              })
            }
            placeholder="e.g. 2400"
            className="w-full text-xs sm:text-sm pl-7 pr-3 py-2 bg-zinc-50 border border-zinc-200 rounded-md font-mono text-zinc-900 focus:bg-white focus:outline-hidden focus:border-zinc-900"
          />
        </div>
        <p className="text-[11px] text-zinc-500">
          Used to calculate your net monthly surplus over traditional long-term leasing.
        </p>
      </div>
    </div>
  );
};
