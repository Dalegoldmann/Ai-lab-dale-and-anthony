// Auto-generated DC Inside Airbnb benchmark data
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
} = {
  "citySummary": {
    "totalListings": 6906,
    "neighborhoodsCount": 39,
    "cityMedians": {
      "Private room": {
        "median": 121,
        "p25": 65,
        "p75": 233,
        "count": 1230
      },
      "Entire home/apt": {
        "median": 226,
        "p25": 161,
        "p75": 324,
        "count": 4504
      },
      "Shared room": {
        "median": 51,
        "p25": 45,
        "p75": 73,
        "count": 37
      },
      "Hotel room": {
        "median": 357,
        "p25": 245,
        "p75": 582,
        "count": 200
      }
    },
    "defaultBaselineOccupancy": 0.65
  },
  "neighborhoods": {
    "Downtown, Chinatown, Penn Quarters, Mount Vernon Square, North Capitol Street": {
      "name": "Downtown, Chinatown, Penn Quarters, Mount Vernon Square, North Capitol Street",
      "totalListings": 396,
      "pricedListings": 306,
      "overallMedianPrice": 304,
      "roomTypes": {
        "Entire home/apt": {
          "count": 221,
          "pricedCount": 154,
          "medianPrice": 299,
          "p25Price": 245,
          "p75Price": 541,
          "medianMinNights": 2,
          "avgReviewsPerMonth": 1.1,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 67
        },
        "Private room": {
          "count": 107,
          "pricedCount": 100,
          "medianPrice": 287,
          "p25Price": 209,
          "p75Price": 344,
          "medianMinNights": 1,
          "avgReviewsPerMonth": 2.12,
          "estimatedOccupancyRate": 0.5,
          "licensedPercentage": 70
        },
        "Shared room": {
          "count": 8,
          "pricedCount": 8,
          "medianPrice": 77,
          "p25Price": 65,
          "p75Price": 82,
          "medianMinNights": 1,
          "avgReviewsPerMonth": 2.33,
          "estimatedOccupancyRate": 0.54,
          "licensedPercentage": 100
        },
        "Hotel room": {
          "count": 60,
          "pricedCount": 44,
          "medianPrice": 517,
          "p25Price": 410,
          "p75Price": 894,
          "medianMinNights": 1,
          "avgReviewsPerMonth": 0.66,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 100
        }
      },
      "sampleComps": [
        {
          "id": "1071820910926347270",
          "name": "Selected by hotel",
          "roomType": "Private room",
          "price": 139,
          "minNights": 1,
          "numReviews": 433,
          "reviewsPerMonth": 15.07,
          "isHosted": false,
          "hasLicense": true
        },
        {
          "id": "4204367",
          "name": "The best room for a solo traveller!",
          "roomType": "Private room",
          "price": 104,
          "minNights": 2,
          "numReviews": 346,
          "reviewsPerMonth": 2.38,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "2477330",
          "name": "Cool small bedroom: most cntrl part of DC",
          "roomType": "Private room",
          "price": 135,
          "minNights": 2,
          "numReviews": 337,
          "reviewsPerMonth": 2.21,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "863112795538390776",
          "name": "GardenLevel 4BR/2.5BA-Parking+By Convention Center",
          "roomType": "Entire home/apt",
          "price": 270,
          "minNights": 1,
          "numReviews": 292,
          "reviewsPerMonth": 7.15,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "51121876",
          "name": "Cozy 1 Bedroom Apt in Historic DC with Tempurpedic",
          "roomType": "Entire home/apt",
          "price": 281,
          "minNights": 2,
          "numReviews": 274,
          "reviewsPerMonth": 4.38,
          "isHosted": true,
          "hasLicense": true
        }
      ]
    },
    "Historic Anacostia": {
      "name": "Historic Anacostia",
      "totalListings": 45,
      "pricedListings": 42,
      "overallMedianPrice": 147,
      "roomTypes": {
        "Private room": {
          "count": 12,
          "pricedCount": 10,
          "medianPrice": 110,
          "p25Price": 71,
          "p75Price": 119,
          "medianMinNights": 2,
          "avgReviewsPerMonth": 1.31,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 75
        },
        "Entire home/apt": {
          "count": 33,
          "pricedCount": 32,
          "medianPrice": 155,
          "p25Price": 127,
          "p75Price": 253,
          "medianMinNights": 2,
          "avgReviewsPerMonth": 1.7,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 91
        }
      },
      "sampleComps": [
        {
          "id": "44389677",
          "name": "Private Basement Unit - Free Parking, Pet Friendly",
          "roomType": "Entire home/apt",
          "price": 180,
          "minNights": 2,
          "numReviews": 227,
          "reviewsPerMonth": 3.22,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "45753882",
          "name": "Trendy Home +Private Parking+ 5 min walk to Metro",
          "roomType": "Entire home/apt",
          "price": 288,
          "minNights": 4,
          "numReviews": 141,
          "reviewsPerMonth": 2.13,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "50772751",
          "name": "The Bangor D.C., Cozy Basement Apartment w/Kitchen",
          "roomType": "Private room",
          "price": 260,
          "minNights": 1,
          "numReviews": 128,
          "reviewsPerMonth": 2.06,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "40466314",
          "name": "Your DC Home Base",
          "roomType": "Private room",
          "price": 110,
          "minNights": 1,
          "numReviews": 123,
          "reviewsPerMonth": 1.48,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "47124147",
          "name": "Posh, high end luxury in the heart of D.C!",
          "roomType": "Entire home/apt",
          "price": 567,
          "minNights": 2,
          "numReviews": 122,
          "reviewsPerMonth": 2.12,
          "isHosted": true,
          "hasLicense": true
        }
      ]
    },
    "Edgewood, Bloomingdale, Truxton Circle, Eckington": {
      "name": "Edgewood, Bloomingdale, Truxton Circle, Eckington",
      "totalListings": 518,
      "pricedListings": 465,
      "overallMedianPrice": 200,
      "roomTypes": {
        "Private room": {
          "count": 89,
          "pricedCount": 80,
          "medianPrice": 87,
          "p25Price": 53,
          "p75Price": 157,
          "medianMinNights": 2,
          "avgReviewsPerMonth": 1.46,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 67
        },
        "Entire home/apt": {
          "count": 429,
          "pricedCount": 385,
          "medianPrice": 228,
          "p25Price": 168,
          "p75Price": 358,
          "medianMinNights": 2,
          "avgReviewsPerMonth": 2.04,
          "estimatedOccupancyRate": 0.48,
          "licensedPercentage": 84
        }
      },
      "sampleComps": [
        {
          "id": "23170552",
          "name": "Sunny Self Contained English Basement",
          "roomType": "Entire home/apt",
          "price": 148,
          "minNights": 1,
          "numReviews": 685,
          "reviewsPerMonth": 6.54,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "16910466",
          "name": "Gorgeous Designed 2-bedroom in DC, with parking!",
          "roomType": "Entire home/apt",
          "price": 212,
          "minNights": 1,
          "numReviews": 674,
          "reviewsPerMonth": 5.75,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "3964658",
          "name": "Garden Suite Efficiency",
          "roomType": "Entire home/apt",
          "price": 96,
          "minNights": 31,
          "numReviews": 594,
          "reviewsPerMonth": 4.11,
          "isHosted": false,
          "hasLicense": false
        },
        {
          "id": "3943",
          "name": "Historic Rowhouse Near Monuments",
          "roomType": "Private room",
          "price": 197,
          "minNights": 1,
          "numReviews": 586,
          "reviewsPerMonth": 2.77,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "29802594",
          "name": "Renovated row home guest suite :)",
          "roomType": "Entire home/apt",
          "price": 252,
          "minNights": 1,
          "numReviews": 570,
          "reviewsPerMonth": 5.97,
          "isHosted": true,
          "hasLicense": true
        }
      ]
    },
    "Kalorama Heights, Adams Morgan, Lanier Heights": {
      "name": "Kalorama Heights, Adams Morgan, Lanier Heights",
      "totalListings": 283,
      "pricedListings": 233,
      "overallMedianPrice": 250,
      "roomTypes": {
        "Entire home/apt": {
          "count": 152,
          "pricedCount": 113,
          "medianPrice": 191,
          "p25Price": 126,
          "p75Price": 295,
          "medianMinNights": 3,
          "avgReviewsPerMonth": 2.23,
          "estimatedOccupancyRate": 0.52,
          "licensedPercentage": 79
        },
        "Private room": {
          "count": 102,
          "pricedCount": 92,
          "medianPrice": 273,
          "p25Price": 198,
          "p75Price": 711,
          "medianMinNights": 1,
          "avgReviewsPerMonth": 2.62,
          "estimatedOccupancyRate": 0.61,
          "licensedPercentage": 77
        },
        "Hotel room": {
          "count": 29,
          "pricedCount": 28,
          "medianPrice": 312,
          "p25Price": 269,
          "p75Price": 540,
          "medianMinNights": 1,
          "avgReviewsPerMonth": 1.2,
          "estimatedOccupancyRate": 0.62,
          "licensedPercentage": 100
        }
      },
      "sampleComps": [
        {
          "id": "17141233",
          "name": "Beautiful, Sunny Studio in Vibrant Adams Morgan",
          "roomType": "Entire home/apt",
          "price": 106,
          "minNights": 1,
          "numReviews": 770,
          "reviewsPerMonth": 6.6,
          "isHosted": false,
          "hasLicense": true
        },
        {
          "id": "20538744",
          "name": "Sparkling Studio in Adams Morgan/Dupont Circle",
          "roomType": "Entire home/apt",
          "price": 155,
          "minNights": 1,
          "numReviews": 708,
          "reviewsPerMonth": 6.5,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "28253557",
          "name": "Adams Morgan One Bedroom Retreat",
          "roomType": "Entire home/apt",
          "price": 126,
          "minNights": 1,
          "numReviews": 636,
          "reviewsPerMonth": 6.52,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "40500030",
          "name": "Stylish Studio in Adams Morgan/Dupont Circle",
          "roomType": "Entire home/apt",
          "price": 155,
          "minNights": 1,
          "numReviews": 519,
          "reviewsPerMonth": 6.31,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "25742193",
          "name": "Walk Everywhere! Charming Adams Morgan 1 BR!",
          "roomType": "Entire home/apt",
          "price": 129,
          "minNights": 1,
          "numReviews": 508,
          "reviewsPerMonth": 5.03,
          "isHosted": false,
          "hasLicense": true
        }
      ]
    },
    "Brightwood Park, Crestwood, Petworth": {
      "name": "Brightwood Park, Crestwood, Petworth",
      "totalListings": 365,
      "pricedListings": 314,
      "overallMedianPrice": 155,
      "roomTypes": {
        "Private room": {
          "count": 67,
          "pricedCount": 56,
          "medianPrice": 64,
          "p25Price": 34,
          "p75Price": 98,
          "medianMinNights": 30,
          "avgReviewsPerMonth": 0.66,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 54
        },
        "Entire home/apt": {
          "count": 298,
          "pricedCount": 258,
          "medianPrice": 171,
          "p25Price": 132,
          "p75Price": 233,
          "medianMinNights": 2,
          "avgReviewsPerMonth": 1.67,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 79
        }
      },
      "sampleComps": [
        {
          "id": "16487475",
          "name": "Cozy Guest Basement Suite w/ Private Entrance",
          "roomType": "Entire home/apt",
          "price": 99,
          "minNights": 2,
          "numReviews": 595,
          "reviewsPerMonth": 5.03,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "16427522",
          "name": "Perfectly Petworth! Apt. Next to Metro w/ Parking",
          "roomType": "Entire home/apt",
          "price": 188,
          "minNights": 1,
          "numReviews": 538,
          "reviewsPerMonth": 4.57,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "14101888",
          "name": "The Heights House - A Private Urban Retreat",
          "roomType": "Entire home/apt",
          "price": 241,
          "minNights": 1,
          "numReviews": 459,
          "reviewsPerMonth": 3.73,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "4420920",
          "name": "In DC Private Studio Apartment",
          "roomType": "Entire home/apt",
          "price": 158,
          "minNights": 1,
          "numReviews": 424,
          "reviewsPerMonth": 2.94,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "13005087",
          "name": "3BD/2.5 BTR w/ metro & free street parking",
          "roomType": "Entire home/apt",
          "price": 262,
          "minNights": 2,
          "numReviews": 339,
          "reviewsPerMonth": 2.7,
          "isHosted": true,
          "hasLicense": true
        }
      ]
    },
    "Spring Valley, Palisades, Wesley Heights, Foxhall Crescent, Foxhall Village, Georgetown Reservoir": {
      "name": "Spring Valley, Palisades, Wesley Heights, Foxhall Crescent, Foxhall Village, Georgetown Reservoir",
      "totalListings": 45,
      "pricedListings": 36,
      "overallMedianPrice": 181,
      "roomTypes": {
        "Entire home/apt": {
          "count": 31,
          "pricedCount": 22,
          "medianPrice": 222,
          "p25Price": 154,
          "p75Price": 300,
          "medianMinNights": 3,
          "avgReviewsPerMonth": 1,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 71
        },
        "Private room": {
          "count": 14,
          "pricedCount": 14,
          "medianPrice": 142,
          "p25Price": 122,
          "p75Price": 169,
          "medianMinNights": 1,
          "avgReviewsPerMonth": 1.26,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 93
        }
      },
      "sampleComps": [
        {
          "id": "35230824",
          "name": "Private Palisades suite w/parking, work space King",
          "roomType": "Private room",
          "price": 155,
          "minNights": 1,
          "numReviews": 259,
          "reviewsPerMonth": 2.92,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "22849113",
          "name": "08. Nice room in Palisades/Georgetown",
          "roomType": "Private room",
          "price": 143,
          "minNights": 1,
          "numReviews": 239,
          "reviewsPerMonth": 2.27,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "23645709",
          "name": "11. Master Bedroom near the German/French Embassy",
          "roomType": "Private room",
          "price": 143,
          "minNights": 1,
          "numReviews": 210,
          "reviewsPerMonth": 2.02,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "13247788",
          "name": "Free Parking, Minutes to GTownU/Medstar Hospital",
          "roomType": "Private room",
          "price": 133,
          "minNights": 1,
          "numReviews": 208,
          "reviewsPerMonth": 1.66,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "45789238",
          "name": "1bd apt in Upper Georgetown( Washington DC)",
          "roomType": "Entire home/apt",
          "price": 218,
          "minNights": 2,
          "numReviews": 182,
          "reviewsPerMonth": 2.94,
          "isHosted": true,
          "hasLicense": true
        }
      ]
    },
    "Cathedral Heights, McLean Gardens, Glover Park": {
      "name": "Cathedral Heights, McLean Gardens, Glover Park",
      "totalListings": 64,
      "pricedListings": 61,
      "overallMedianPrice": 195,
      "roomTypes": {
        "Entire home/apt": {
          "count": 40,
          "pricedCount": 38,
          "medianPrice": 194,
          "p25Price": 126,
          "p75Price": 327,
          "medianMinNights": 3,
          "avgReviewsPerMonth": 1.23,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 73
        },
        "Private room": {
          "count": 23,
          "pricedCount": 22,
          "medianPrice": 196,
          "p25Price": 75,
          "p75Price": 264,
          "medianMinNights": 1,
          "avgReviewsPerMonth": 0.85,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 48
        },
        "Shared room": {
          "count": 1,
          "pricedCount": 1,
          "medianPrice": 51,
          "p25Price": 45,
          "p75Price": 73,
          "medianMinNights": 31,
          "avgReviewsPerMonth": 0.23,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 0
        }
      },
      "sampleComps": [
        {
          "id": "808830",
          "name": "Cozy comfort and convenience in DC",
          "roomType": "Private room",
          "price": 195,
          "minNights": 1,
          "numReviews": 479,
          "reviewsPerMonth": 2.88,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "11785",
          "name": "Sanctuary near Cathedral",
          "roomType": "Entire home/apt",
          "price": 111,
          "minNights": 31,
          "numReviews": 412,
          "reviewsPerMonth": 2.03,
          "isHosted": false,
          "hasLicense": false
        },
        {
          "id": "25571727",
          "name": "Huge Studio w/ Full Kitchen | W/D | Parking",
          "roomType": "Entire home/apt",
          "price": 146,
          "minNights": 2,
          "numReviews": 345,
          "reviewsPerMonth": 3.42,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "21436977",
          "name": "Walk to Georgetown - Glover Park Guest Suite",
          "roomType": "Entire home/apt",
          "price": 142,
          "minNights": 1,
          "numReviews": 340,
          "reviewsPerMonth": 3.19,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "28564940",
          "name": "Walk to Georgetown • Free Parking • Private 1BR",
          "roomType": "Entire home/apt",
          "price": 187,
          "minNights": 2,
          "numReviews": 205,
          "reviewsPerMonth": 2.17,
          "isHosted": true,
          "hasLicense": true
        }
      ]
    },
    "Columbia Heights, Mt. Pleasant, Pleasant Plains, Park View": {
      "name": "Columbia Heights, Mt. Pleasant, Pleasant Plains, Park View",
      "totalListings": 499,
      "pricedListings": 428,
      "overallMedianPrice": 192,
      "roomTypes": {
        "Entire home/apt": {
          "count": 383,
          "pricedCount": 335,
          "medianPrice": 214,
          "p25Price": 165,
          "p75Price": 314,
          "medianMinNights": 2,
          "avgReviewsPerMonth": 1.95,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 85
        },
        "Private room": {
          "count": 116,
          "pricedCount": 93,
          "medianPrice": 91,
          "p25Price": 51,
          "p75Price": 113,
          "medianMinNights": 31,
          "avgReviewsPerMonth": 1.41,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 61
        }
      },
      "sampleComps": [
        {
          "id": "16465485",
          "name": "A Tranquil Oasis in Heart of Historic Mt. Pleasant",
          "roomType": "Private room",
          "price": 154,
          "minNights": 2,
          "numReviews": 780,
          "reviewsPerMonth": 6.87,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "5780038",
          "name": "Quiet Modern Garden 1BR in Columbia Heights",
          "roomType": "Entire home/apt",
          "price": 246,
          "minNights": 1,
          "numReviews": 748,
          "reviewsPerMonth": 5.37,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "1488282",
          "name": "Chic Oasis ♥ Clean, Close to Metro",
          "roomType": "Entire home/apt",
          "price": 174,
          "minNights": 3,
          "numReviews": 664,
          "reviewsPerMonth": 4.18,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "722114",
          "name": "Cool Columbia Heights Garden Apt.",
          "roomType": "Entire home/apt",
          "price": 128,
          "minNights": 1,
          "numReviews": 640,
          "reviewsPerMonth": 3.77,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "36801219",
          "name": "Modern and Cozy 3 Bed Carriage House with Parking!",
          "roomType": "Entire home/apt",
          "price": 213,
          "minNights": 1,
          "numReviews": 621,
          "reviewsPerMonth": 7.17,
          "isHosted": true,
          "hasLicense": true
        }
      ]
    },
    "Lamont Riggs, Queens Chapel, Fort Totten, Pleasant Hill": {
      "name": "Lamont Riggs, Queens Chapel, Fort Totten, Pleasant Hill",
      "totalListings": 97,
      "pricedListings": 85,
      "overallMedianPrice": 129,
      "roomTypes": {
        "Entire home/apt": {
          "count": 75,
          "pricedCount": 65,
          "medianPrice": 149,
          "p25Price": 114,
          "p75Price": 232,
          "medianMinNights": 3,
          "avgReviewsPerMonth": 1.85,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 76
        },
        "Private room": {
          "count": 22,
          "pricedCount": 20,
          "medianPrice": 63,
          "p25Price": 43,
          "p75Price": 107,
          "medianMinNights": 31,
          "avgReviewsPerMonth": 0.47,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 55
        }
      },
      "sampleComps": [
        {
          "id": "23625381",
          "name": "Private entire basement, private bath,free parking",
          "roomType": "Entire home/apt",
          "price": 129,
          "minNights": 3,
          "numReviews": 485,
          "reviewsPerMonth": 4.66,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "29701036",
          "name": "Charming Petworth Retreat-near metro, free parking",
          "roomType": "Entire home/apt",
          "price": 200,
          "minNights": 2,
          "numReviews": 399,
          "reviewsPerMonth": 4.17,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "43652954",
          "name": "Vibrant Townhome w/ Patio in Green DC Area",
          "roomType": "Entire home/apt",
          "price": 232,
          "minNights": 2,
          "numReviews": 279,
          "reviewsPerMonth": 3.64,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "969090001287583316",
          "name": "Private, Luxury Studio",
          "roomType": "Entire home/apt",
          "price": 138,
          "minNights": 1,
          "numReviews": 268,
          "reviewsPerMonth": 7.24,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "999247664972316947",
          "name": "Cozy Studio in NE DC",
          "roomType": "Entire home/apt",
          "price": 74,
          "minNights": 1,
          "numReviews": 229,
          "reviewsPerMonth": 6.49,
          "isHosted": true,
          "hasLicense": true
        }
      ]
    },
    "Howard University, Le Droit Park, Cardozo/Shaw": {
      "name": "Howard University, Le Droit Park, Cardozo/Shaw",
      "totalListings": 206,
      "pricedListings": 177,
      "overallMedianPrice": 236,
      "roomTypes": {
        "Private room": {
          "count": 33,
          "pricedCount": 30,
          "medianPrice": 88,
          "p25Price": 40,
          "p75Price": 163,
          "medianMinNights": 7,
          "avgReviewsPerMonth": 0.74,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 58
        },
        "Entire home/apt": {
          "count": 167,
          "pricedCount": 142,
          "medianPrice": 258,
          "p25Price": 194,
          "p75Price": 340,
          "medianMinNights": 2,
          "avgReviewsPerMonth": 2.03,
          "estimatedOccupancyRate": 0.47,
          "licensedPercentage": 81
        },
        "Shared room": {
          "count": 6,
          "pricedCount": 5,
          "medianPrice": 83,
          "p25Price": 73,
          "p75Price": 89,
          "medianMinNights": 1,
          "avgReviewsPerMonth": 1.11,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 100
        }
      },
      "sampleComps": [
        {
          "id": "15373088",
          "name": "Modern – Parking - Metro 1/2 blk 99 Walkscore",
          "roomType": "Entire home/apt",
          "price": 441,
          "minNights": 1,
          "numReviews": 1006,
          "reviewsPerMonth": 8.3,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "20968665",
          "name": "Ideal DC Location! Shaw/U St./Logan Apartment",
          "roomType": "Entire home/apt",
          "price": 175,
          "minNights": 1,
          "numReviews": 553,
          "reviewsPerMonth": 5.09,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "17956698",
          "name": "Laid-Back Lite Lux in LeDroit Park, The Danikil!",
          "roomType": "Private room",
          "price": 164,
          "minNights": 1,
          "numReviews": 475,
          "reviewsPerMonth": 4.55,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "10403348",
          "name": "Travelers Trove' Sleeps 6 in Shaw",
          "roomType": "Entire home/apt",
          "price": 284,
          "minNights": 2,
          "numReviews": 427,
          "reviewsPerMonth": 3.28,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "36037856",
          "name": "Luxury Home-DC's Best Walking Neighborhood-Parking",
          "roomType": "Entire home/apt",
          "price": 523,
          "minNights": 1,
          "numReviews": 421,
          "reviewsPerMonth": 4.79,
          "isHosted": true,
          "hasLicense": true
        }
      ]
    },
    "Dupont Circle, Connecticut Avenue/K Street": {
      "name": "Dupont Circle, Connecticut Avenue/K Street",
      "totalListings": 595,
      "pricedListings": 513,
      "overallMedianPrice": 232,
      "roomTypes": {
        "Private room": {
          "count": 154,
          "pricedCount": 130,
          "medianPrice": 253,
          "p25Price": 203,
          "p75Price": 405,
          "medianMinNights": 1,
          "avgReviewsPerMonth": 2.13,
          "estimatedOccupancyRate": 0.5,
          "licensedPercentage": 78
        },
        "Entire home/apt": {
          "count": 416,
          "pricedCount": 358,
          "medianPrice": 227,
          "p25Price": 155,
          "p75Price": 328,
          "medianMinNights": 2,
          "avgReviewsPerMonth": 1.73,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 67
        },
        "Hotel room": {
          "count": 25,
          "pricedCount": 25,
          "medianPrice": 211,
          "p25Price": 190,
          "p75Price": 232,
          "medianMinNights": 1,
          "avgReviewsPerMonth": 3.25,
          "estimatedOccupancyRate": 0.76,
          "licensedPercentage": 100
        }
      },
      "sampleComps": [
        {
          "id": "19142630",
          "name": "Historic Dupont Circle Inn ~ Lola's Room",
          "roomType": "Private room",
          "price": 207,
          "minNights": 1,
          "numReviews": 656,
          "reviewsPerMonth": 5.81,
          "isHosted": false,
          "hasLicense": true
        },
        {
          "id": "14805243",
          "name": "New 2 BR Apartment within a Dupont Brownstone",
          "roomType": "Entire home/apt",
          "price": 316,
          "minNights": 1,
          "numReviews": 645,
          "reviewsPerMonth": 5.28,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "4284144",
          "name": "Dupont 1BR: spacious, stylish, walkable",
          "roomType": "Entire home/apt",
          "price": 179,
          "minNights": 1,
          "numReviews": 628,
          "reviewsPerMonth": 4.52,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "16405079",
          "name": "Historic DuPont Circle Inn ~ Lincoln Room",
          "roomType": "Entire home/apt",
          "price": 225,
          "minNights": 1,
          "numReviews": 622,
          "reviewsPerMonth": 5.24,
          "isHosted": false,
          "hasLicense": true
        },
        {
          "id": "12865283",
          "name": "Charming row house apartment near everything",
          "roomType": "Entire home/apt",
          "price": 175,
          "minNights": 1,
          "numReviews": 601,
          "reviewsPerMonth": 5,
          "isHosted": true,
          "hasLicense": true
        }
      ]
    },
    "Takoma, Brightwood, Manor Park": {
      "name": "Takoma, Brightwood, Manor Park",
      "totalListings": 119,
      "pricedListings": 104,
      "overallMedianPrice": 144,
      "roomTypes": {
        "Private room": {
          "count": 26,
          "pricedCount": 22,
          "medianPrice": 72,
          "p25Price": 56,
          "p75Price": 109,
          "medianMinNights": 31,
          "avgReviewsPerMonth": 0.69,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 54
        },
        "Entire home/apt": {
          "count": 93,
          "pricedCount": 82,
          "medianPrice": 173,
          "p25Price": 120,
          "p75Price": 283,
          "medianMinNights": 2,
          "avgReviewsPerMonth": 1.59,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 80
        }
      },
      "sampleComps": [
        {
          "id": "8353034",
          "name": "A fabulous basement studio in my house!",
          "roomType": "Entire home/apt",
          "price": 107,
          "minNights": 2,
          "numReviews": 945,
          "reviewsPerMonth": 7.06,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "11838693",
          "name": "Lovely private apt. in quiet neighborhood",
          "roomType": "Entire home/apt",
          "price": 136,
          "minNights": 2,
          "numReviews": 586,
          "reviewsPerMonth": 4.64,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "23791737",
          "name": "La Côte-du-Sud",
          "roomType": "Entire home/apt",
          "price": 121,
          "minNights": 2,
          "numReviews": 452,
          "reviewsPerMonth": 4.41,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "21730002",
          "name": "Brilliant Basement near Takoma",
          "roomType": "Entire home/apt",
          "price": 156,
          "minNights": 1,
          "numReviews": 431,
          "reviewsPerMonth": 4.04,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "54215403",
          "name": "Private 1 Bdrm Suite w Easy City Access",
          "roomType": "Entire home/apt",
          "price": 178,
          "minNights": 1,
          "numReviews": 279,
          "reviewsPerMonth": 4.91,
          "isHosted": true,
          "hasLicense": true
        }
      ]
    },
    "Congress Heights, Bellevue, Washington Highlands": {
      "name": "Congress Heights, Bellevue, Washington Highlands",
      "totalListings": 119,
      "pricedListings": 100,
      "overallMedianPrice": 161,
      "roomTypes": {
        "Private room": {
          "count": 27,
          "pricedCount": 23,
          "medianPrice": 63,
          "p25Price": 47,
          "p75Price": 81,
          "medianMinNights": 14,
          "avgReviewsPerMonth": 0.89,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 63
        },
        "Entire home/apt": {
          "count": 92,
          "pricedCount": 77,
          "medianPrice": 176,
          "p25Price": 113,
          "p75Price": 257,
          "medianMinNights": 2,
          "avgReviewsPerMonth": 1.19,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 78
        }
      },
      "sampleComps": [
        {
          "id": "1005799808157085162",
          "name": "5-BR Home near DC Metro -Free Parking/Full Kitchen",
          "roomType": "Entire home/apt",
          "price": 428,
          "minNights": 1,
          "numReviews": 337,
          "reviewsPerMonth": 9.53,
          "isHosted": false,
          "hasLicense": true
        },
        {
          "id": "24737866",
          "name": "A 4 bedroom house near a metro station w/ parking",
          "roomType": "Entire home/apt",
          "price": 250,
          "minNights": 2,
          "numReviews": 312,
          "reviewsPerMonth": 3.12,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "23368804",
          "name": "Bright DC-Area Townhome w/ Free Parking",
          "roomType": "Entire home/apt",
          "price": 496,
          "minNights": 1,
          "numReviews": 219,
          "reviewsPerMonth": 2.1,
          "isHosted": false,
          "hasLicense": true
        },
        {
          "id": "22617173",
          "name": "Cherry Blossom Stay | Walk to METRO | Free Parking",
          "roomType": "Entire home/apt",
          "price": 112,
          "minNights": 3,
          "numReviews": 180,
          "reviewsPerMonth": 1.7,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "9644823",
          "name": "Lovely Studio 5 min drive to Sites/MGM+Metro+Pkg",
          "roomType": "Entire home/apt",
          "price": 80,
          "minNights": 31,
          "numReviews": 150,
          "reviewsPerMonth": 1.16,
          "isHosted": false,
          "hasLicense": false
        }
      ]
    },
    "Colonial Village, Shepherd Park, North Portal Estates": {
      "name": "Colonial Village, Shepherd Park, North Portal Estates",
      "totalListings": 37,
      "pricedListings": 35,
      "overallMedianPrice": 190,
      "roomTypes": {
        "Private room": {
          "count": 20,
          "pricedCount": 18,
          "medianPrice": 138,
          "p25Price": 67,
          "p75Price": 203,
          "medianMinNights": 3,
          "avgReviewsPerMonth": 0.26,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 70
        },
        "Entire home/apt": {
          "count": 17,
          "pricedCount": 17,
          "medianPrice": 193,
          "p25Price": 165,
          "p75Price": 304,
          "medianMinNights": 2,
          "avgReviewsPerMonth": 1.69,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 94
        }
      },
      "sampleComps": [
        {
          "id": "8741535",
          "name": "Hilltop House - Cozy 1BR Suite close to Rock Creek",
          "roomType": "Private room",
          "price": 110,
          "minNights": 2,
          "numReviews": 78,
          "reviewsPerMonth": 0.66,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "313405",
          "name": "Blue Room - Washington DC 1-2p Bedroom Near Metro",
          "roomType": "Private room",
          "price": 112,
          "minNights": 3,
          "numReviews": 66,
          "reviewsPerMonth": 0.38,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "1292197928142405988",
          "name": "DC Garden House - Modern 4-Person Stay by Metro",
          "roomType": "Entire home/apt",
          "price": 175,
          "minNights": 3,
          "numReviews": 63,
          "reviewsPerMonth": 2.84,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "299030",
          "name": "Red Room - Washington 1-2/p Bedroom near Metro",
          "roomType": "Private room",
          "price": 90,
          "minNights": 3,
          "numReviews": 59,
          "reviewsPerMonth": 0.34,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "2466942",
          "name": "Cozy Colonial N Convenient Location",
          "roomType": "Private room",
          "price": 163,
          "minNights": 7,
          "numReviews": 56,
          "reviewsPerMonth": 0.37,
          "isHosted": true,
          "hasLicense": true
        }
      ]
    },
    "Georgetown, Burleith/Hillandale": {
      "name": "Georgetown, Burleith/Hillandale",
      "totalListings": 228,
      "pricedListings": 203,
      "overallMedianPrice": 286,
      "roomTypes": {
        "Entire home/apt": {
          "count": 200,
          "pricedCount": 177,
          "medianPrice": 300,
          "p25Price": 212,
          "p75Price": 428,
          "medianMinNights": 1,
          "avgReviewsPerMonth": 2.5,
          "estimatedOccupancyRate": 0.58,
          "licensedPercentage": 87
        },
        "Private room": {
          "count": 28,
          "pricedCount": 26,
          "medianPrice": 220,
          "p25Price": 103,
          "p75Price": 285,
          "medianMinNights": 1,
          "avgReviewsPerMonth": 1.19,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 61
        }
      },
      "sampleComps": [
        {
          "id": "30394567",
          "name": "Cozy modern apt. Heart of G-Town. King bed",
          "roomType": "Entire home/apt",
          "price": 252,
          "minNights": 1,
          "numReviews": 698,
          "reviewsPerMonth": 7.48,
          "isHosted": false,
          "hasLicense": true
        },
        {
          "id": "33830823",
          "name": "Cozy & modern apt in the heart of town King Bed",
          "roomType": "Entire home/apt",
          "price": 261,
          "minNights": 1,
          "numReviews": 532,
          "reviewsPerMonth": 5.94,
          "isHosted": false,
          "hasLicense": true
        },
        {
          "id": "50092809",
          "name": "Beautiful 2 bedroom apt. King bed-chic and cozy",
          "roomType": "Entire home/apt",
          "price": 342,
          "minNights": 1,
          "numReviews": 525,
          "reviewsPerMonth": 8.14,
          "isHosted": false,
          "hasLicense": true
        },
        {
          "id": "30325364",
          "name": "Cozy Georgetown Rowhouse Apt-In the Heart of town.",
          "roomType": "Entire home/apt",
          "price": 242,
          "minNights": 2,
          "numReviews": 496,
          "reviewsPerMonth": 5.27,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "47992072",
          "name": "Quiet & Cozy Studio Unbeatable location",
          "roomType": "Entire home/apt",
          "price": 179,
          "minNights": 1,
          "numReviews": 492,
          "reviewsPerMonth": 7.31,
          "isHosted": false,
          "hasLicense": true
        }
      ]
    },
    "Brookland, Brentwood, Langdon": {
      "name": "Brookland, Brentwood, Langdon",
      "totalListings": 108,
      "pricedListings": 99,
      "overallMedianPrice": 171,
      "roomTypes": {
        "Private room": {
          "count": 25,
          "pricedCount": 24,
          "medianPrice": 53,
          "p25Price": 40,
          "p75Price": 102,
          "medianMinNights": 31,
          "avgReviewsPerMonth": 0.49,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 44
        },
        "Entire home/apt": {
          "count": 83,
          "pricedCount": 75,
          "medianPrice": 182,
          "p25Price": 139,
          "p75Price": 279,
          "medianMinNights": 2,
          "avgReviewsPerMonth": 2.02,
          "estimatedOccupancyRate": 0.47,
          "licensedPercentage": 90
        }
      },
      "sampleComps": [
        {
          "id": "5156582",
          "name": "Pied-a-Terre in Washington, DC",
          "roomType": "Entire home/apt",
          "price": 166,
          "minNights": 1,
          "numReviews": 360,
          "reviewsPerMonth": 2.8,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "605796546620751360",
          "name": "Gorgeous Two-Story Guesthouse w/ Driveway & W/D",
          "roomType": "Entire home/apt",
          "price": 250,
          "minNights": 1,
          "numReviews": 314,
          "reviewsPerMonth": 6.02,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "51962614",
          "name": "Luxury escape in DC now with a private Deck!",
          "roomType": "Entire home/apt",
          "price": 422,
          "minNights": 1,
          "numReviews": 301,
          "reviewsPerMonth": 4.98,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "4767589",
          "name": "Light-filled 1br & outdoor escape with city access",
          "roomType": "Entire home/apt",
          "price": 177,
          "minNights": 1,
          "numReviews": 277,
          "reviewsPerMonth": 3.12,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "25896860",
          "name": "Brookland 2BR with free parking and kitchen",
          "roomType": "Entire home/apt",
          "price": 159,
          "minNights": 2,
          "numReviews": 264,
          "reviewsPerMonth": 2.65,
          "isHosted": true,
          "hasLicense": true
        }
      ]
    },
    "Shaw, Logan Circle": {
      "name": "Shaw, Logan Circle",
      "totalListings": 345,
      "pricedListings": 302,
      "overallMedianPrice": 256,
      "roomTypes": {
        "Entire home/apt": {
          "count": 280,
          "pricedCount": 243,
          "medianPrice": 285,
          "p25Price": 217,
          "p75Price": 400,
          "medianMinNights": 2,
          "avgReviewsPerMonth": 2.29,
          "estimatedOccupancyRate": 0.53,
          "licensedPercentage": 83
        },
        "Private room": {
          "count": 61,
          "pricedCount": 55,
          "medianPrice": 125,
          "p25Price": 86,
          "p75Price": 190,
          "medianMinNights": 1,
          "avgReviewsPerMonth": 1.43,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 66
        },
        "Shared room": {
          "count": 4,
          "pricedCount": 4,
          "medianPrice": 61,
          "p25Price": 57,
          "p75Price": 72,
          "medianMinNights": 1,
          "avgReviewsPerMonth": 3.11,
          "estimatedOccupancyRate": 0.73,
          "licensedPercentage": 100
        }
      },
      "sampleComps": [
        {
          "id": "20138171",
          "name": "Spacious Apt in Heart of the Capital: U St | Logan",
          "roomType": "Entire home/apt",
          "price": 229,
          "minNights": 1,
          "numReviews": 830,
          "reviewsPerMonth": 7.49,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "18689667",
          "name": "Stylish DC Apt - Convenient, Clean and Private",
          "roomType": "Entire home/apt",
          "price": 194,
          "minNights": 1,
          "numReviews": 818,
          "reviewsPerMonth": 7.23,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "5755232",
          "name": "Charming flat & fireplace near Convention Center",
          "roomType": "Entire home/apt",
          "price": 213,
          "minNights": 2,
          "numReviews": 800,
          "reviewsPerMonth": 5.72,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "40950741",
          "name": "Duo Housing, 12 Bed Mixed Dorm",
          "roomType": "Shared room",
          "price": 49,
          "minNights": 1,
          "numReviews": 770,
          "reviewsPerMonth": 9.58,
          "isHosted": false,
          "hasLicense": true
        },
        {
          "id": "4244705",
          "name": "Front Suite(1BD/1BA) *Convention Center/DT/Metro",
          "roomType": "Private room",
          "price": 144,
          "minNights": 2,
          "numReviews": 622,
          "reviewsPerMonth": 4.27,
          "isHosted": true,
          "hasLicense": true
        }
      ]
    },
    "Capitol Hill, Lincoln Park": {
      "name": "Capitol Hill, Lincoln Park",
      "totalListings": 612,
      "pricedListings": 527,
      "overallMedianPrice": 216,
      "roomTypes": {
        "Entire home/apt": {
          "count": 538,
          "pricedCount": 464,
          "medianPrice": 225,
          "p25Price": 169,
          "p75Price": 317,
          "medianMinNights": 2,
          "avgReviewsPerMonth": 2.28,
          "estimatedOccupancyRate": 0.53,
          "licensedPercentage": 82
        },
        "Private room": {
          "count": 56,
          "pricedCount": 46,
          "medianPrice": 124,
          "p25Price": 74,
          "p75Price": 176,
          "medianMinNights": 4,
          "avgReviewsPerMonth": 1.89,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 46
        },
        "Hotel room": {
          "count": 2,
          "pricedCount": 2,
          "medianPrice": 357,
          "p25Price": 245,
          "p75Price": 582,
          "medianMinNights": 2,
          "avgReviewsPerMonth": 2.33,
          "estimatedOccupancyRate": 0.54,
          "licensedPercentage": 100
        },
        "Shared room": {
          "count": 16,
          "pricedCount": 15,
          "medianPrice": 46,
          "p25Price": 38,
          "p75Price": 48,
          "medianMinNights": 1,
          "avgReviewsPerMonth": 0.92,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 100
        }
      },
      "sampleComps": [
        {
          "id": "2791050",
          "name": "Capitol Hill elegant, charming room",
          "roomType": "Private room",
          "price": 182,
          "minNights": 1,
          "numReviews": 850,
          "reviewsPerMonth": 5.66,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "3103276",
          "name": "Attractive 2 Twin Beds Near Capitol",
          "roomType": "Private room",
          "price": 173,
          "minNights": 1,
          "numReviews": 835,
          "reviewsPerMonth": 5.57,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "4801046",
          "name": "Charming Flat Right by the Capitol",
          "roomType": "Entire home/apt",
          "price": 192,
          "minNights": 2,
          "numReviews": 762,
          "reviewsPerMonth": 5.68,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "38478357",
          "name": "CapHill Oasis-Scenic Park View-FreeParking!",
          "roomType": "Entire home/apt",
          "price": 209,
          "minNights": 1,
          "numReviews": 702,
          "reviewsPerMonth": 8.22,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "12253009",
          "name": "Location, Location, Location - US Capitol & more",
          "roomType": "Entire home/apt",
          "price": 170,
          "minNights": 2,
          "numReviews": 686,
          "reviewsPerMonth": 5.43,
          "isHosted": true,
          "hasLicense": true
        }
      ]
    },
    "Union Station, Stanton Park, Kingman Park": {
      "name": "Union Station, Stanton Park, Kingman Park",
      "totalListings": 659,
      "pricedListings": 584,
      "overallMedianPrice": 231,
      "roomTypes": {
        "Entire home/apt": {
          "count": 599,
          "pricedCount": 531,
          "medianPrice": 238,
          "p25Price": 185,
          "p75Price": 321,
          "medianMinNights": 2,
          "avgReviewsPerMonth": 2.39,
          "estimatedOccupancyRate": 0.56,
          "licensedPercentage": 85
        },
        "Private room": {
          "count": 60,
          "pricedCount": 53,
          "medianPrice": 133,
          "p25Price": 83,
          "p75Price": 220,
          "medianMinNights": 1,
          "avgReviewsPerMonth": 2.69,
          "estimatedOccupancyRate": 0.63,
          "licensedPercentage": 72
        }
      },
      "sampleComps": [
        {
          "id": "4545885",
          "name": "Union Market Penthouse Apartment",
          "roomType": "Entire home/apt",
          "price": 241,
          "minNights": 1,
          "numReviews": 1197,
          "reviewsPerMonth": 8.34,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "453315",
          "name": "Efficiency suite in Capitol Hill",
          "roomType": "Entire home/apt",
          "price": 140,
          "minNights": 1,
          "numReviews": 1123,
          "reviewsPerMonth": 6.43,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "748316",
          "name": "Cozy Cabin in the City on Cap Hill",
          "roomType": "Entire home/apt",
          "price": 172,
          "minNights": 2,
          "numReviews": 809,
          "reviewsPerMonth": 4.8,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "38698346",
          "name": "Union Market Garden Apartment",
          "roomType": "Entire home/apt",
          "price": 196,
          "minNights": 1,
          "numReviews": 796,
          "reviewsPerMonth": 9.42,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "13578244",
          "name": "Capitol, Union Station, Romantic, Walkable Apt",
          "roomType": "Entire home/apt",
          "price": 181,
          "minNights": 1,
          "numReviews": 730,
          "reviewsPerMonth": 5.87,
          "isHosted": false,
          "hasLicense": true
        }
      ]
    },
    "Douglas, Shipley Terrace": {
      "name": "Douglas, Shipley Terrace",
      "totalListings": 30,
      "pricedListings": 26,
      "overallMedianPrice": 185,
      "roomTypes": {
        "Private room": {
          "count": 12,
          "pricedCount": 11,
          "medianPrice": 41,
          "p25Price": 36,
          "p75Price": 47,
          "medianMinNights": 31,
          "avgReviewsPerMonth": 0.34,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 25
        },
        "Entire home/apt": {
          "count": 18,
          "pricedCount": 15,
          "medianPrice": 324,
          "p25Price": 251,
          "p75Price": 525,
          "medianMinNights": 2,
          "avgReviewsPerMonth": 1.94,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 94
        }
      },
      "sampleComps": [
        {
          "id": "1875603",
          "name": "Safari themed room next to metro",
          "roomType": "Private room",
          "price": 54,
          "minNights": 31,
          "numReviews": 131,
          "reviewsPerMonth": 0.84,
          "isHosted": false,
          "hasLicense": false
        },
        {
          "id": "15109650",
          "name": "Executive themed room next to metro",
          "roomType": "Private room",
          "price": 25,
          "minNights": 31,
          "numReviews": 122,
          "reviewsPerMonth": 1,
          "isHosted": false,
          "hasLicense": false
        },
        {
          "id": "846424798410268005",
          "name": "Modern Townhome + Free Parking",
          "roomType": "Entire home/apt",
          "price": 333,
          "minNights": 2,
          "numReviews": 122,
          "reviewsPerMonth": 3.11,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "17795487",
          "name": "Bright and Beautiful Basement In-law Suite",
          "roomType": "Entire home/apt",
          "price": 160,
          "minNights": 31,
          "numReviews": 52,
          "reviewsPerMonth": 0.47,
          "isHosted": false,
          "hasLicense": true
        },
        {
          "id": "1109466694940549396",
          "name": "Spacious DC Townhome",
          "roomType": "Entire home/apt",
          "price": 575,
          "minNights": 2,
          "numReviews": 51,
          "reviewsPerMonth": 1.79,
          "isHosted": true,
          "hasLicense": true
        }
      ]
    },
    "Cleveland Park, Woodley Park, Massachusetts Avenue Heights, Woodland-Normanstone Terrace": {
      "name": "Cleveland Park, Woodley Park, Massachusetts Avenue Heights, Woodland-Normanstone Terrace",
      "totalListings": 71,
      "pricedListings": 55,
      "overallMedianPrice": 214,
      "roomTypes": {
        "Entire home/apt": {
          "count": 67,
          "pricedCount": 51,
          "medianPrice": 215,
          "p25Price": 162,
          "p75Price": 377,
          "medianMinNights": 5,
          "avgReviewsPerMonth": 1.59,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 55
        },
        "Private room": {
          "count": 4,
          "pricedCount": 4,
          "medianPrice": 144,
          "p25Price": 99,
          "p75Price": 188,
          "medianMinNights": 17,
          "avgReviewsPerMonth": 2.11,
          "estimatedOccupancyRate": 0.49,
          "licensedPercentage": 75
        }
      },
      "sampleComps": [
        {
          "id": "16808703",
          "name": "Spacious, Stylish, Cozy, Fun Home! Parking, Metro",
          "roomType": "Entire home/apt",
          "price": 140,
          "minNights": 2,
          "numReviews": 713,
          "reviewsPerMonth": 6.06,
          "isHosted": false,
          "hasLicense": true
        },
        {
          "id": "16716427",
          "name": "Studio Apartment with Parking",
          "roomType": "Entire home/apt",
          "price": 215,
          "minNights": 1,
          "numReviews": 572,
          "reviewsPerMonth": 4.86,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "9732220",
          "name": "Free Off-Street Parking, Woodley Park/Zoo!",
          "roomType": "Entire home/apt",
          "price": 158,
          "minNights": 2,
          "numReviews": 461,
          "reviewsPerMonth": 3.61,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "1008231274442060198",
          "name": "New Embassy Enclave in Woodley Park with Parking",
          "roomType": "Entire home/apt",
          "price": 267,
          "minNights": 1,
          "numReviews": 289,
          "reviewsPerMonth": 8.3,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "12886507",
          "name": "Garden Suite",
          "roomType": "Entire home/apt",
          "price": 221,
          "minNights": 2,
          "numReviews": 210,
          "reviewsPerMonth": 1.68,
          "isHosted": true,
          "hasLicense": true
        }
      ]
    },
    "Friendship Heights, American University Park, Tenleytown": {
      "name": "Friendship Heights, American University Park, Tenleytown",
      "totalListings": 55,
      "pricedListings": 54,
      "overallMedianPrice": 195,
      "roomTypes": {
        "Private room": {
          "count": 14,
          "pricedCount": 13,
          "medianPrice": 133,
          "p25Price": 126,
          "p75Price": 168,
          "medianMinNights": 2,
          "avgReviewsPerMonth": 3.01,
          "estimatedOccupancyRate": 0.7,
          "licensedPercentage": 93
        },
        "Entire home/apt": {
          "count": 32,
          "pricedCount": 32,
          "medianPrice": 193,
          "p25Price": 163,
          "p75Price": 263,
          "medianMinNights": 3,
          "avgReviewsPerMonth": 1.63,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 84
        },
        "Hotel room": {
          "count": 9,
          "pricedCount": 9,
          "medianPrice": 408,
          "p25Price": 220,
          "p75Price": 479,
          "medianMinNights": 1,
          "avgReviewsPerMonth": 0.2,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 100
        }
      },
      "sampleComps": [
        {
          "id": "15962871",
          "name": "Great Sleep in Comfy Blue Room/Metro 12 min walk!",
          "roomType": "Private room",
          "price": 103,
          "minNights": 1,
          "numReviews": 483,
          "reviewsPerMonth": 4.04,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "20617856",
          "name": "Renovated Apartment close to American University",
          "roomType": "Entire home/apt",
          "price": 191,
          "minNights": 2,
          "numReviews": 415,
          "reviewsPerMonth": 3.81,
          "isHosted": false,
          "hasLicense": true
        },
        {
          "id": "15963788",
          "name": "Beautiful Cozy Yellow Room/Metro 12 min walk!",
          "roomType": "Private room",
          "price": 133,
          "minNights": 1,
          "numReviews": 407,
          "reviewsPerMonth": 3.4,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "16753438",
          "name": "Private Bathroom in Master room/Metro 12 min walk!",
          "roomType": "Private room",
          "price": 126,
          "minNights": 1,
          "numReviews": 379,
          "reviewsPerMonth": 3.22,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "11555687",
          "name": "Beautiful Apt in NW D.C. Near 2 Metro's",
          "roomType": "Entire home/apt",
          "price": 141,
          "minNights": 2,
          "numReviews": 331,
          "reviewsPerMonth": 2.96,
          "isHosted": true,
          "hasLicense": true
        }
      ]
    },
    "Hawthorne, Barnaby Woods, Chevy Chase": {
      "name": "Hawthorne, Barnaby Woods, Chevy Chase",
      "totalListings": 24,
      "pricedListings": 20,
      "overallMedianPrice": 206,
      "roomTypes": {
        "Private room": {
          "count": 4,
          "pricedCount": 3,
          "medianPrice": 81,
          "p25Price": 79,
          "p75Price": 116,
          "medianMinNights": 31,
          "avgReviewsPerMonth": 1.54,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 0
        },
        "Entire home/apt": {
          "count": 20,
          "pricedCount": 17,
          "medianPrice": 224,
          "p25Price": 146,
          "p75Price": 260,
          "medianMinNights": 2,
          "avgReviewsPerMonth": 1.82,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 70
        }
      },
      "sampleComps": [
        {
          "id": "1245292",
          "name": "Railroad Retirement w/Private Bath in Chevy Chase!",
          "roomType": "Private room",
          "price": 81,
          "minNights": 31,
          "numReviews": 358,
          "reviewsPerMonth": 2.44,
          "isHosted": false,
          "hasLicense": false
        },
        {
          "id": "51408229",
          "name": "Nature in the city: new, large Rock Creek suite",
          "roomType": "Entire home/apt",
          "price": 146,
          "minNights": 1,
          "numReviews": 284,
          "reviewsPerMonth": 4.57,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "37889765",
          "name": "The White House Luxury Sanctuary",
          "roomType": "Entire home/apt",
          "price": 170,
          "minNights": 2,
          "numReviews": 280,
          "reviewsPerMonth": 3.28,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "8967165",
          "name": "Rock Creek Park Residence",
          "roomType": "Entire home/apt",
          "price": 219,
          "minNights": 2,
          "numReviews": 252,
          "reviewsPerMonth": 1.92,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "574174588340504989",
          "name": "Best in Chevy Chase DC Big, Sleeps 4-5, nr Metro",
          "roomType": "Entire home/apt",
          "price": 256,
          "minNights": 1,
          "numReviews": 186,
          "reviewsPerMonth": 3.44,
          "isHosted": true,
          "hasLicense": true
        }
      ]
    },
    "Ivy City, Arboretum, Trinidad, Carver Langston": {
      "name": "Ivy City, Arboretum, Trinidad, Carver Langston",
      "totalListings": 355,
      "pricedListings": 326,
      "overallMedianPrice": 194,
      "roomTypes": {
        "Entire home/apt": {
          "count": 299,
          "pricedCount": 274,
          "medianPrice": 214,
          "p25Price": 154,
          "p75Price": 304,
          "medianMinNights": 2,
          "avgReviewsPerMonth": 1.77,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 81
        },
        "Private room": {
          "count": 56,
          "pricedCount": 52,
          "medianPrice": 58,
          "p25Price": 47,
          "p75Price": 127,
          "medianMinNights": 31,
          "avgReviewsPerMonth": 2.12,
          "estimatedOccupancyRate": 0.49,
          "licensedPercentage": 39
        }
      },
      "sampleComps": [
        {
          "id": "15564599",
          "name": "Modern and Inviting Suite, Close to Capitol Hill",
          "roomType": "Entire home/apt",
          "price": 168,
          "minNights": 1,
          "numReviews": 629,
          "reviewsPerMonth": 5.23,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "11529762",
          "name": "Comfy Room Near H Street",
          "roomType": "Private room",
          "price": 42,
          "minNights": 31,
          "numReviews": 610,
          "reviewsPerMonth": 4.76,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "21793152",
          "name": "Modern Home near Union Market - free parking",
          "roomType": "Entire home/apt",
          "price": 247,
          "minNights": 1,
          "numReviews": 594,
          "reviewsPerMonth": 5.53,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "31249608",
          "name": "Modern 3BR Near Union Market & Capitol w/Parking",
          "roomType": "Entire home/apt",
          "price": 325,
          "minNights": 1,
          "numReviews": 439,
          "reviewsPerMonth": 4.68,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "3201115",
          "name": "Comfy 1 br apt near H St, Gallaudet & Union Market",
          "roomType": "Entire home/apt",
          "price": 150,
          "minNights": 2,
          "numReviews": 430,
          "reviewsPerMonth": 2.88,
          "isHosted": true,
          "hasLicense": true
        }
      ]
    },
    "West End, Foggy Bottom, GWU": {
      "name": "West End, Foggy Bottom, GWU",
      "totalListings": 200,
      "pricedListings": 165,
      "overallMedianPrice": 343,
      "roomTypes": {
        "Private room": {
          "count": 64,
          "pricedCount": 58,
          "medianPrice": 261,
          "p25Price": 53,
          "p75Price": 490,
          "medianMinNights": 3,
          "avgReviewsPerMonth": 0.7,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 56
        },
        "Entire home/apt": {
          "count": 76,
          "pricedCount": 48,
          "medianPrice": 320,
          "p25Price": 206,
          "p75Price": 488,
          "medianMinNights": 31,
          "avgReviewsPerMonth": 3.22,
          "estimatedOccupancyRate": 0.75,
          "licensedPercentage": 53
        },
        "Hotel room": {
          "count": 60,
          "pricedCount": 59,
          "medianPrice": 462,
          "p25Price": 324,
          "p75Price": 763,
          "medianMinNights": 1,
          "avgReviewsPerMonth": 0.52,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 100
        }
      },
      "sampleComps": [
        {
          "id": "48425132",
          "name": "2 Queen Apt Suite | 2500 Penn Placemakr Experience",
          "roomType": "Entire home/apt",
          "price": 182,
          "minNights": 1,
          "numReviews": 1819,
          "reviewsPerMonth": 29.69,
          "isHosted": false,
          "hasLicense": true
        },
        {
          "id": "11176974",
          "name": "#3 Foggy Bottom/Georgetown Apartment",
          "roomType": "Entire home/apt",
          "price": 269,
          "minNights": 1,
          "numReviews": 637,
          "reviewsPerMonth": 4.97,
          "isHosted": false,
          "hasLicense": true
        },
        {
          "id": "11868625",
          "name": "#4 Foggy Bottom/Georgetown Apartment",
          "roomType": "Entire home/apt",
          "price": 311,
          "minNights": 1,
          "numReviews": 511,
          "reviewsPerMonth": 4,
          "isHosted": false,
          "hasLicense": true
        },
        {
          "id": "11866275",
          "name": "#1 Foggy Bottom/Georgetown Apartment",
          "roomType": "Entire home/apt",
          "price": 377,
          "minNights": 1,
          "numReviews": 505,
          "reviewsPerMonth": 3.95,
          "isHosted": false,
          "hasLicense": true
        },
        {
          "id": "11868093",
          "name": "#2 Foggy Bottom/Georgetown Apartment",
          "roomType": "Entire home/apt",
          "price": 310,
          "minNights": 1,
          "numReviews": 487,
          "reviewsPerMonth": 3.81,
          "isHosted": false,
          "hasLicense": true
        }
      ]
    },
    "North Cleveland Park, Forest Hills, Van Ness": {
      "name": "North Cleveland Park, Forest Hills, Van Ness",
      "totalListings": 27,
      "pricedListings": 27,
      "overallMedianPrice": 177,
      "roomTypes": {
        "Entire home/apt": {
          "count": 18,
          "pricedCount": 18,
          "medianPrice": 241,
          "p25Price": 178,
          "p75Price": 310,
          "medianMinNights": 2,
          "avgReviewsPerMonth": 1.82,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 100
        },
        "Private room": {
          "count": 1,
          "pricedCount": 1,
          "medianPrice": 121,
          "p25Price": 65,
          "p75Price": 233,
          "medianMinNights": 150,
          "avgReviewsPerMonth": 1.2,
          "estimatedOccupancyRate": 0.62,
          "licensedPercentage": 0
        },
        "Hotel room": {
          "count": 8,
          "pricedCount": 8,
          "medianPrice": 120,
          "p25Price": 119,
          "p75Price": 125,
          "medianMinNights": 1,
          "avgReviewsPerMonth": 1.21,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 100
        }
      },
      "sampleComps": [
        {
          "id": "19767116",
          "name": "Apt in leafy NW DC, off-st parking, close to metro",
          "roomType": "Entire home/apt",
          "price": 148,
          "minNights": 3,
          "numReviews": 353,
          "reviewsPerMonth": 3.16,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "584879166427780593",
          "name": "In-Law Suite in Van Ness/Cleveland Prk/free parkin",
          "roomType": "Entire home/apt",
          "price": 148,
          "minNights": 1,
          "numReviews": 303,
          "reviewsPerMonth": 5.57,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "1936134",
          "name": "Modern DC Northwest Apartment with Parking Spot",
          "roomType": "Entire home/apt",
          "price": 321,
          "minNights": 1,
          "numReviews": 302,
          "reviewsPerMonth": 2.05,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "25162568",
          "name": "Family-Friendly / Subway / Rooftop Deck / AU",
          "roomType": "Entire home/apt",
          "price": 252,
          "minNights": 2,
          "numReviews": 176,
          "reviewsPerMonth": 1.73,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "19205234",
          "name": "Rock Creek Park, the Zoo and Cleveland Park!",
          "roomType": "Entire home/apt",
          "price": 232,
          "minNights": 1,
          "numReviews": 146,
          "reviewsPerMonth": 1.32,
          "isHosted": true,
          "hasLicense": true
        }
      ]
    },
    "Twining, Fairlawn, Randle Highlands, Penn Branch, Fort Davis Park, Fort Dupont": {
      "name": "Twining, Fairlawn, Randle Highlands, Penn Branch, Fort Davis Park, Fort Dupont",
      "totalListings": 121,
      "pricedListings": 104,
      "overallMedianPrice": 172,
      "roomTypes": {
        "Entire home/apt": {
          "count": 96,
          "pricedCount": 82,
          "medianPrice": 199,
          "p25Price": 137,
          "p75Price": 297,
          "medianMinNights": 2,
          "avgReviewsPerMonth": 1.95,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 85
        },
        "Private room": {
          "count": 25,
          "pricedCount": 22,
          "medianPrice": 103,
          "p25Price": 52,
          "p75Price": 124,
          "medianMinNights": 2,
          "avgReviewsPerMonth": 1.9,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 80
        }
      },
      "sampleComps": [
        {
          "id": "37050513",
          "name": "Vibrant + Artsy - mins to NavyYard, CapHill, Dtown",
          "roomType": "Entire home/apt",
          "price": 149,
          "minNights": 1,
          "numReviews": 543,
          "reviewsPerMonth": 6.25,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "54353344",
          "name": "Simple Stay in the Nation's Capital",
          "roomType": "Entire home/apt",
          "price": 232,
          "minNights": 2,
          "numReviews": 331,
          "reviewsPerMonth": 6.23,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "17089486",
          "name": "*Modern & Roomy* 3BR near Capitol Hill & Navy Yard",
          "roomType": "Entire home/apt",
          "price": 171,
          "minNights": 2,
          "numReviews": 322,
          "reviewsPerMonth": 4.48,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "29339623",
          "name": "Modern Luxury Retreat• Cozy • Clean •",
          "roomType": "Entire home/apt",
          "price": 260,
          "minNights": 1,
          "numReviews": 290,
          "reviewsPerMonth": 3.02,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "45304193",
          "name": "1BR Fairlawn Suite",
          "roomType": "Entire home/apt",
          "price": 114,
          "minNights": 3,
          "numReviews": 251,
          "reviewsPerMonth": 3.44,
          "isHosted": true,
          "hasLicense": true
        }
      ]
    },
    "Capitol View, Marshall Heights, Benning Heights": {
      "name": "Capitol View, Marshall Heights, Benning Heights",
      "totalListings": 88,
      "pricedListings": 81,
      "overallMedianPrice": 139,
      "roomTypes": {
        "Entire home/apt": {
          "count": 56,
          "pricedCount": 52,
          "medianPrice": 198,
          "p25Price": 136,
          "p75Price": 279,
          "medianMinNights": 2,
          "avgReviewsPerMonth": 2.08,
          "estimatedOccupancyRate": 0.49,
          "licensedPercentage": 96
        },
        "Private room": {
          "count": 32,
          "pricedCount": 29,
          "medianPrice": 89,
          "p25Price": 64,
          "p75Price": 102,
          "medianMinNights": 1,
          "avgReviewsPerMonth": 1.36,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 97
        }
      },
      "sampleComps": [
        {
          "id": "11639515",
          "name": "Garden Underground - private entrance, parking",
          "roomType": "Entire home/apt",
          "price": 111,
          "minNights": 1,
          "numReviews": 844,
          "reviewsPerMonth": 6.67,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "3633359",
          "name": "Comfortable Studio Apartment",
          "roomType": "Entire home/apt",
          "price": 119,
          "minNights": 2,
          "numReviews": 516,
          "reviewsPerMonth": 5.39,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "53709148",
          "name": "Cozy Basement Guest Unit with Free Street Parking",
          "roomType": "Entire home/apt",
          "price": 71,
          "minNights": 1,
          "numReviews": 419,
          "reviewsPerMonth": 7.44,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "5785467",
          "name": "DC Brick and Bloom - (2 stops to NW Stadium)",
          "roomType": "Entire home/apt",
          "price": 132,
          "minNights": 1,
          "numReviews": 379,
          "reviewsPerMonth": 2.72,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "25780267",
          "name": "The Zen Room - near metro",
          "roomType": "Private room",
          "price": 69,
          "minNights": 1,
          "numReviews": 330,
          "reviewsPerMonth": 3.28,
          "isHosted": true,
          "hasLicense": true
        }
      ]
    },
    "Southwest Employment Area, Southwest/Waterfront, Fort McNair, Buzzard Point": {
      "name": "Southwest Employment Area, Southwest/Waterfront, Fort McNair, Buzzard Point",
      "totalListings": 104,
      "pricedListings": 84,
      "overallMedianPrice": 243,
      "roomTypes": {
        "Private room": {
          "count": 16,
          "pricedCount": 15,
          "medianPrice": 143,
          "p25Price": 109,
          "p75Price": 209,
          "medianMinNights": 1,
          "avgReviewsPerMonth": 1.87,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 81
        },
        "Entire home/apt": {
          "count": 85,
          "pricedCount": 66,
          "medianPrice": 257,
          "p25Price": 178,
          "p75Price": 371,
          "medianMinNights": 2,
          "avgReviewsPerMonth": 2.44,
          "estimatedOccupancyRate": 0.57,
          "licensedPercentage": 69
        },
        "Hotel room": {
          "count": 3,
          "pricedCount": 3,
          "medianPrice": 292,
          "p25Price": 292,
          "p75Price": 318,
          "medianMinNights": 1,
          "avgReviewsPerMonth": 1.15,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 100
        }
      },
      "sampleComps": [
        {
          "id": "4231934",
          "name": "06. Just the perfect room in SW DC",
          "roomType": "Private room",
          "price": 166,
          "minNights": 1,
          "numReviews": 573,
          "reviewsPerMonth": 4,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "13865075",
          "name": "Breakfast, Free Parking & Easy Walk to Mall, Wharf",
          "roomType": "Private room",
          "price": 260,
          "minNights": 1,
          "numReviews": 412,
          "reviewsPerMonth": 3.33,
          "isHosted": false,
          "hasLicense": true
        },
        {
          "id": "18791414",
          "name": "Walk to museums and restaurants. Free Parking.",
          "roomType": "Entire home/apt",
          "price": 711,
          "minNights": 1,
          "numReviews": 342,
          "reviewsPerMonth": 3.07,
          "isHosted": false,
          "hasLicense": true
        },
        {
          "id": "21437643",
          "name": "05. Renovated room near Nats/Wharf/Audi Field",
          "roomType": "Private room",
          "price": 143,
          "minNights": 1,
          "numReviews": 323,
          "reviewsPerMonth": 2.99,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "12623775",
          "name": "Waterfront Townhouse Wharf’s Location + Parking!",
          "roomType": "Entire home/apt",
          "price": 632,
          "minNights": 2,
          "numReviews": 236,
          "reviewsPerMonth": 1.9,
          "isHosted": true,
          "hasLicense": true
        }
      ]
    },
    "River Terrace, Benning, Greenway, Dupont Park": {
      "name": "River Terrace, Benning, Greenway, Dupont Park",
      "totalListings": 60,
      "pricedListings": 50,
      "overallMedianPrice": 140,
      "roomTypes": {
        "Private room": {
          "count": 15,
          "pricedCount": 13,
          "medianPrice": 48,
          "p25Price": 43,
          "p75Price": 86,
          "medianMinNights": 31,
          "avgReviewsPerMonth": 0.94,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 60
        },
        "Entire home/apt": {
          "count": 45,
          "pricedCount": 37,
          "medianPrice": 152,
          "p25Price": 133,
          "p75Price": 244,
          "medianMinNights": 2,
          "avgReviewsPerMonth": 1.55,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 87
        }
      },
      "sampleComps": [
        {
          "id": "37295012",
          "name": "Free Private Parking: Entire Studio",
          "roomType": "Entire home/apt",
          "price": 141,
          "minNights": 2,
          "numReviews": 419,
          "reviewsPerMonth": 4.84,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "7826994",
          "name": "Great price for DC room",
          "roomType": "Private room",
          "price": 42,
          "minNights": 31,
          "numReviews": 333,
          "reviewsPerMonth": 2.47,
          "isHosted": false,
          "hasLicense": false
        },
        {
          "id": "50049004",
          "name": "Modern D.C. home",
          "roomType": "Entire home/apt",
          "price": 135,
          "minNights": 1,
          "numReviews": 237,
          "reviewsPerMonth": 4.66,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "602390267685898067",
          "name": "★ Deluxe Stay at the Boss Estate (Hidden Gem!) ★",
          "roomType": "Entire home/apt",
          "price": 315,
          "minNights": 1,
          "numReviews": 218,
          "reviewsPerMonth": 4.1,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "890384516184093231",
          "name": "Private Suite w/Parking near Capitol Hill DC",
          "roomType": "Private room",
          "price": 101,
          "minNights": 2,
          "numReviews": 151,
          "reviewsPerMonth": 3.82,
          "isHosted": true,
          "hasLicense": true
        }
      ]
    },
    "Fairfax Village, Naylor Gardens, Hillcrest, Summit Park": {
      "name": "Fairfax Village, Naylor Gardens, Hillcrest, Summit Park",
      "totalListings": 32,
      "pricedListings": 26,
      "overallMedianPrice": 142,
      "roomTypes": {
        "Entire home/apt": {
          "count": 26,
          "pricedCount": 23,
          "medianPrice": 147,
          "p25Price": 101,
          "p75Price": 256,
          "medianMinNights": 2,
          "avgReviewsPerMonth": 1.09,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 81
        },
        "Private room": {
          "count": 6,
          "pricedCount": 3,
          "medianPrice": 106,
          "p25Price": 96,
          "p75Price": 140,
          "medianMinNights": 1,
          "avgReviewsPerMonth": 2.99,
          "estimatedOccupancyRate": 0.7,
          "licensedPercentage": 83
        }
      },
      "sampleComps": [
        {
          "id": "35251578",
          "name": "DC 2BR Sleeps 6 | Free Parking + Easy Access to DT",
          "roomType": "Entire home/apt",
          "price": 193,
          "minNights": 2,
          "numReviews": 154,
          "reviewsPerMonth": 1.74,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "1107461660018312394",
          "name": "DC Getaway: Near Nationals Stadium & DC United",
          "roomType": "Private room",
          "price": 106,
          "minNights": 1,
          "numReviews": 130,
          "reviewsPerMonth": 4.47,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "707120189234346526",
          "name": "Amenities filled 1BR suite in Hillcrest",
          "roomType": "Entire home/apt",
          "price": 147,
          "minNights": 1,
          "numReviews": 122,
          "reviewsPerMonth": 2.51,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "5195346",
          "name": "Pennsylvania Avenue 3 BR Condo!",
          "roomType": "Entire home/apt",
          "price": 86,
          "minNights": 31,
          "numReviews": 86,
          "reviewsPerMonth": 0.62,
          "isHosted": false,
          "hasLicense": false
        },
        {
          "id": "833334824948777840",
          "name": "Hillcrest Studio in Southeast DC",
          "roomType": "Entire home/apt",
          "price": 136,
          "minNights": 2,
          "numReviews": 63,
          "reviewsPerMonth": 1.52,
          "isHosted": true,
          "hasLicense": true
        }
      ]
    },
    "Near Southeast, Navy Yard": {
      "name": "Near Southeast, Navy Yard",
      "totalListings": 110,
      "pricedListings": 80,
      "overallMedianPrice": 241,
      "roomTypes": {
        "Entire home/apt": {
          "count": 70,
          "pricedCount": 41,
          "medianPrice": 259,
          "p25Price": 208,
          "p75Price": 372,
          "medianMinNights": 31,
          "avgReviewsPerMonth": 1.58,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 54
        },
        "Private room": {
          "count": 14,
          "pricedCount": 13,
          "medianPrice": 170,
          "p25Price": 153,
          "p75Price": 242,
          "medianMinNights": 1,
          "avgReviewsPerMonth": 3.1,
          "estimatedOccupancyRate": 0.72,
          "licensedPercentage": 79
        },
        "Shared room": {
          "count": 4,
          "pricedCount": 4,
          "medianPrice": 43,
          "p25Price": 38,
          "p75Price": 47,
          "medianMinNights": 1,
          "avgReviewsPerMonth": 1.14,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 100
        },
        "Hotel room": {
          "count": 22,
          "pricedCount": 22,
          "medianPrice": 265,
          "p25Price": 228,
          "p75Price": 336,
          "medianMinNights": 1,
          "avgReviewsPerMonth": 0.47,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 100
        }
      },
      "sampleComps": [
        {
          "id": "1060015676580503653",
          "name": "Steps to Nationals Park + Bistro, Pool & Gym",
          "roomType": "Private room",
          "price": 242,
          "minNights": 1,
          "numReviews": 322,
          "reviewsPerMonth": 10.44,
          "isHosted": false,
          "hasLicense": true
        },
        {
          "id": "925608891252175947",
          "name": "Walk to Navy Yard | Rooftop Bar. Restaurant & Gym",
          "roomType": "Private room",
          "price": 245,
          "minNights": 1,
          "numReviews": 221,
          "reviewsPerMonth": 5.72,
          "isHosted": false,
          "hasLicense": true
        },
        {
          "id": "1110799714913463564",
          "name": "Walk to U.S. Capitol | Rooftop Bar. Gym + Dining",
          "roomType": "Private room",
          "price": 245,
          "minNights": 1,
          "numReviews": 217,
          "reviewsPerMonth": 7.87,
          "isHosted": false,
          "hasLicense": true
        },
        {
          "id": "654883122930235250",
          "name": "Studio Apartment | Coda on Half | Placemakr",
          "roomType": "Entire home/apt",
          "price": 247,
          "minNights": 1,
          "numReviews": 194,
          "reviewsPerMonth": 3.91,
          "isHosted": false,
          "hasLicense": true
        },
        {
          "id": "37449471",
          "name": "Walk to /Museums/ballpark/Free Parking",
          "roomType": "Entire home/apt",
          "price": 380,
          "minNights": 1,
          "numReviews": 151,
          "reviewsPerMonth": 1.77,
          "isHosted": true,
          "hasLicense": true
        }
      ]
    },
    "North Michigan Park, Michigan Park, University Heights": {
      "name": "North Michigan Park, Michigan Park, University Heights",
      "totalListings": 81,
      "pricedListings": 74,
      "overallMedianPrice": 138,
      "roomTypes": {
        "Private room": {
          "count": 25,
          "pricedCount": 25,
          "medianPrice": 86,
          "p25Price": 63,
          "p75Price": 118,
          "medianMinNights": 2,
          "avgReviewsPerMonth": 1.82,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 84
        },
        "Entire home/apt": {
          "count": 56,
          "pricedCount": 49,
          "medianPrice": 164,
          "p25Price": 122,
          "p75Price": 258,
          "medianMinNights": 2,
          "avgReviewsPerMonth": 1.51,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 86
        }
      },
      "sampleComps": [
        {
          "id": "42503052",
          "name": "DC Urban Oasis - Best Value in Town!",
          "roomType": "Entire home/apt",
          "price": 120,
          "minNights": 1,
          "numReviews": 601,
          "reviewsPerMonth": 7.52,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "48166180",
          "name": "Cozy DC Suite Near Basilica, CUA - Parking & Metro",
          "roomType": "Entire home/apt",
          "price": 168,
          "minNights": 2,
          "numReviews": 290,
          "reviewsPerMonth": 4.3,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "41152887",
          "name": "*Master Private Bed&Bath in Brookland*",
          "roomType": "Private room",
          "price": 124,
          "minNights": 1,
          "numReviews": 207,
          "reviewsPerMonth": 3.28,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "41152512",
          "name": "*Spacious Private Bed&Bath in Brookland*",
          "roomType": "Private room",
          "price": 118,
          "minNights": 1,
          "numReviews": 179,
          "reviewsPerMonth": 2.82,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "26669187",
          "name": "Brookland Gem 5 Mins to Cath Uni Metro",
          "roomType": "Entire home/apt",
          "price": 207,
          "minNights": 2,
          "numReviews": 147,
          "reviewsPerMonth": 1.65,
          "isHosted": true,
          "hasLicense": true
        }
      ]
    },
    "Sheridan, Barry Farm, Buena Vista": {
      "name": "Sheridan, Barry Farm, Buena Vista",
      "totalListings": 45,
      "pricedListings": 35,
      "overallMedianPrice": 172,
      "roomTypes": {
        "Private room": {
          "count": 12,
          "pricedCount": 10,
          "medianPrice": 85,
          "p25Price": 75,
          "p75Price": 114,
          "medianMinNights": 30,
          "avgReviewsPerMonth": 1.01,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 67
        },
        "Entire home/apt": {
          "count": 33,
          "pricedCount": 25,
          "medianPrice": 196,
          "p25Price": 126,
          "p75Price": 334,
          "medianMinNights": 3,
          "avgReviewsPerMonth": 1.61,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 88
        }
      },
      "sampleComps": [
        {
          "id": "1199357534187553548",
          "name": "Sleek & Cozy DC Oasis | 1BR/1BA",
          "roomType": "Entire home/apt",
          "price": 181,
          "minNights": 1,
          "numReviews": 247,
          "reviewsPerMonth": 10.95,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "844006949273737622",
          "name": "VIBES! *Breakfast*Free Parking*Piano*King Bed*",
          "roomType": "Entire home/apt",
          "price": 303,
          "minNights": 1,
          "numReviews": 179,
          "reviewsPerMonth": 4.21,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "41344281",
          "name": "Private Room 5 Min from Metro-Parking Available",
          "roomType": "Private room",
          "price": 93,
          "minNights": 2,
          "numReviews": 178,
          "reviewsPerMonth": 2.23,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "43475702",
          "name": "Private Suite w/private entrance near Metro.",
          "roomType": "Private room",
          "price": 82,
          "minNights": 2,
          "numReviews": 115,
          "reviewsPerMonth": 2.98,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "624543537455753233",
          "name": "Basement Bedroom w/Private Bath & Private Entry",
          "roomType": "Private room",
          "price": 84,
          "minNights": 2,
          "numReviews": 102,
          "reviewsPerMonth": 1.98,
          "isHosted": true,
          "hasLicense": true
        }
      ]
    },
    "Mayfair, Hillbrook, Mahaning Heights": {
      "name": "Mayfair, Hillbrook, Mahaning Heights",
      "totalListings": 49,
      "pricedListings": 45,
      "overallMedianPrice": 132,
      "roomTypes": {
        "Private room": {
          "count": 22,
          "pricedCount": 19,
          "medianPrice": 41,
          "p25Price": 34,
          "p75Price": 64,
          "medianMinNights": 31,
          "avgReviewsPerMonth": 0.24,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 23
        },
        "Entire home/apt": {
          "count": 27,
          "pricedCount": 26,
          "medianPrice": 234,
          "p25Price": 179,
          "p75Price": 379,
          "medianMinNights": 2,
          "avgReviewsPerMonth": 1.48,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 93
        }
      },
      "sampleComps": [
        {
          "id": "16973661",
          "name": "Charming DC Townhome with 3 Private Bedroom Suites",
          "roomType": "Entire home/apt",
          "price": 410,
          "minNights": 1,
          "numReviews": 313,
          "reviewsPerMonth": 2.82,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "835387696346765859",
          "name": "Subway & Easy Parking! Sunny 2 Bdrm w/ King Bed",
          "roomType": "Entire home/apt",
          "price": 289,
          "minNights": 1,
          "numReviews": 224,
          "reviewsPerMonth": 5.52,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "23190741",
          "name": "Room in residencial area/Cuarto en ZonaResidencial",
          "roomType": "Private room",
          "price": 44,
          "minNights": 31,
          "numReviews": 105,
          "reviewsPerMonth": 1.01,
          "isHosted": false,
          "hasLicense": false
        },
        {
          "id": "51258867",
          "name": "Private Basement Suite w/ Backyard Oasis & Firepit",
          "roomType": "Entire home/apt",
          "price": 176,
          "minNights": 1,
          "numReviews": 83,
          "reviewsPerMonth": 2.21,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "780729537743309143",
          "name": "Luxurious Getaway/Free Garage parking",
          "roomType": "Entire home/apt",
          "price": 357,
          "minNights": 2,
          "numReviews": 71,
          "reviewsPerMonth": 1.96,
          "isHosted": false,
          "hasLicense": true
        }
      ]
    },
    "Woodridge, Fort Lincoln, Gateway": {
      "name": "Woodridge, Fort Lincoln, Gateway",
      "totalListings": 38,
      "pricedListings": 35,
      "overallMedianPrice": 190,
      "roomTypes": {
        "Entire home/apt": {
          "count": 34,
          "pricedCount": 31,
          "medianPrice": 206,
          "p25Price": 149,
          "p75Price": 281,
          "medianMinNights": 2,
          "avgReviewsPerMonth": 2.27,
          "estimatedOccupancyRate": 0.53,
          "licensedPercentage": 94
        },
        "Private room": {
          "count": 4,
          "pricedCount": 4,
          "medianPrice": 69,
          "p25Price": 47,
          "p75Price": 86,
          "medianMinNights": 6,
          "avgReviewsPerMonth": 2.25,
          "estimatedOccupancyRate": 0.52,
          "licensedPercentage": 100
        }
      },
      "sampleComps": [
        {
          "id": "38646781",
          "name": "TheAzalea: Cozy, private basement suite w/ jacuzzi",
          "roomType": "Entire home/apt",
          "price": 224,
          "minNights": 1,
          "numReviews": 414,
          "reviewsPerMonth": 5.67,
          "isHosted": false,
          "hasLicense": true
        },
        {
          "id": "47990347",
          "name": "4BR/2 Full Bath - Sleeps 10! Large Yard! 2 Cars!",
          "roomType": "Entire home/apt",
          "price": 232,
          "minNights": 1,
          "numReviews": 332,
          "reviewsPerMonth": 4.97,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "48070188",
          "name": "Rare Find Spacious Basement Apartment with Parking",
          "roomType": "Entire home/apt",
          "price": 150,
          "minNights": 2,
          "numReviews": 223,
          "reviewsPerMonth": 3.33,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "824722945761587061",
          "name": "2 BR Haven in the Pulse of the DC’s Vibrant Buzz!",
          "roomType": "Entire home/apt",
          "price": 286,
          "minNights": 1,
          "numReviews": 160,
          "reviewsPerMonth": 5.12,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "53993838",
          "name": "Modern & Sleek 2-bedroom place in Washington, DC!",
          "roomType": "Entire home/apt",
          "price": 152,
          "minNights": 2,
          "numReviews": 133,
          "reviewsPerMonth": 2.32,
          "isHosted": true,
          "hasLicense": true
        }
      ]
    },
    "Woodland/Fort Stanton, Garfield Heights, Knox Hill": {
      "name": "Woodland/Fort Stanton, Garfield Heights, Knox Hill",
      "totalListings": 11,
      "pricedListings": 10,
      "overallMedianPrice": 182,
      "roomTypes": {
        "Private room": {
          "count": 3,
          "pricedCount": 3,
          "medianPrice": 72,
          "p25Price": 66,
          "p75Price": 121,
          "medianMinNights": 2,
          "avgReviewsPerMonth": 1.21,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 100
        },
        "Entire home/apt": {
          "count": 8,
          "pricedCount": 7,
          "medianPrice": 188,
          "p25Price": 182,
          "p75Price": 209,
          "medianMinNights": 3,
          "avgReviewsPerMonth": 1.02,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 75
        }
      },
      "sampleComps": [
        {
          "id": "12973607",
          "name": "Pvt. Bedroom Suite w/ Free Parking & L2-EV Outlet",
          "roomType": "Private room",
          "price": 72,
          "minNights": 3,
          "numReviews": 252,
          "reviewsPerMonth": 2.29,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "838463237828208781",
          "name": "Great single family 4br/3.5b home! 3-car driveway!",
          "roomType": "Entire home/apt",
          "price": 272,
          "minNights": 2,
          "numReviews": 60,
          "reviewsPerMonth": 1.74,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "1392119850774204501",
          "name": "The District Den/Cozy Stay",
          "roomType": "Entire home/apt",
          "price": 189,
          "minNights": 2,
          "numReviews": 20,
          "reviewsPerMonth": 1.17,
          "isHosted": false,
          "hasLicense": true
        },
        {
          "id": "1436980216187149518",
          "name": "Home away from home",
          "roomType": "Entire home/apt",
          "price": 187,
          "minNights": 2,
          "numReviews": 19,
          "reviewsPerMonth": 1.26,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "16651819",
          "name": "Blue + Cozy Townhome in DC (Private BR & Bath)",
          "roomType": "Private room",
          "price": 170,
          "minNights": 2,
          "numReviews": 14,
          "reviewsPerMonth": 0.13,
          "isHosted": true,
          "hasLicense": true
        }
      ]
    },
    "Eastland Gardens, Kenilworth": {
      "name": "Eastland Gardens, Kenilworth",
      "totalListings": 8,
      "pricedListings": 8,
      "overallMedianPrice": 138,
      "roomTypes": {
        "Entire home/apt": {
          "count": 6,
          "pricedCount": 6,
          "medianPrice": 206,
          "p25Price": 132,
          "p75Price": 274,
          "medianMinNights": 3,
          "avgReviewsPerMonth": 2.96,
          "estimatedOccupancyRate": 0.69,
          "licensedPercentage": 83
        },
        "Private room": {
          "count": 2,
          "pricedCount": 2,
          "medianPrice": 121,
          "p25Price": 65,
          "p75Price": 233,
          "medianMinNights": 31,
          "avgReviewsPerMonth": 0.2,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 0
        }
      },
      "sampleComps": [
        {
          "id": "33768875",
          "name": "Vibrant Modern-Boho Style Home",
          "roomType": "Entire home/apt",
          "price": 263,
          "minNights": 2,
          "numReviews": 287,
          "reviewsPerMonth": 3.42,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "15128321",
          "name": "Lux Basement Apartment Near Metro & Hwy.",
          "roomType": "Entire home/apt",
          "price": 148,
          "minNights": 3,
          "numReviews": 70,
          "reviewsPerMonth": 1.97,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "1572548932592569761",
          "name": "DC Luxury 5BR/5.5BA+Free Parking+Metro Nearby+EVSE",
          "roomType": "Entire home/apt",
          "price": 488,
          "minNights": 1,
          "numReviews": 32,
          "reviewsPerMonth": 4.87,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "1589421806663890429",
          "name": "Modern DC Retreat| Steps to Metro |Newly Remodeled",
          "roomType": "Entire home/apt",
          "price": 278,
          "minNights": 3,
          "numReviews": 20,
          "reviewsPerMonth": 2.55,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "49703312",
          "name": "Sun-filled master BR in urban oasis (Room 1)",
          "roomType": "Private room",
          "price": 40,
          "minNights": 31,
          "numReviews": 11,
          "reviewsPerMonth": 0.18,
          "isHosted": false,
          "hasLicense": false
        }
      ]
    },
    "Deanwood, Burrville, Grant Park, Lincoln Heights, Fairmont Heights": {
      "name": "Deanwood, Burrville, Grant Park, Lincoln Heights, Fairmont Heights",
      "totalListings": 57,
      "pricedListings": 52,
      "overallMedianPrice": 172,
      "roomTypes": {
        "Private room": {
          "count": 16,
          "pricedCount": 16,
          "medianPrice": 98,
          "p25Price": 67,
          "p75Price": 680,
          "medianMinNights": 2,
          "avgReviewsPerMonth": 1.01,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 88
        },
        "Entire home/apt": {
          "count": 41,
          "pricedCount": 36,
          "medianPrice": 180,
          "p25Price": 156,
          "p75Price": 251,
          "medianMinNights": 2,
          "avgReviewsPerMonth": 1.46,
          "estimatedOccupancyRate": 0.45,
          "licensedPercentage": 83
        }
      },
      "sampleComps": [
        {
          "id": "855260924654839953",
          "name": "420-Friendly Suite Near Metro & Dispensary",
          "roomType": "Entire home/apt",
          "price": 414,
          "minNights": 1,
          "numReviews": 161,
          "reviewsPerMonth": 3.82,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "40342072",
          "name": "Weed and Movies",
          "roomType": "Entire home/apt",
          "price": 218,
          "minNights": 1,
          "numReviews": 150,
          "reviewsPerMonth": 2.02,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "51804946",
          "name": "4/20 Friendly NE Townhome Near Metro & Attractions",
          "roomType": "Entire home/apt",
          "price": 480,
          "minNights": 2,
          "numReviews": 121,
          "reviewsPerMonth": 2,
          "isHosted": true,
          "hasLicense": true
        },
        {
          "id": "1026464109261147365",
          "name": "Irie Blue: 4/20-Friendly Oasis w/ Patio & Firepit",
          "roomType": "Entire home/apt",
          "price": 246,
          "minNights": 1,
          "numReviews": 119,
          "reviewsPerMonth": 4.05,
          "isHosted": false,
          "hasLicense": true
        },
        {
          "id": "54071424",
          "name": "Welcome to this beautiful and spacious room",
          "roomType": "Private room",
          "price": 77,
          "minNights": 2,
          "numReviews": 108,
          "reviewsPerMonth": 1.92,
          "isHosted": true,
          "hasLicense": true
        }
      ]
    }
  }
};
