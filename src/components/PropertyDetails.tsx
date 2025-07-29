import React from 'react';

const PropertyDetails: React.FC = () => {
  const features = [
    { icon: "🏠", label: "Square Footage", value: "3,100 sq ft" },
    { icon: "🛏️", label: "Bedrooms", value: "4 + Office" },
    { icon: "🚿", label: "Bathrooms", value: "2.5" },
    { icon: "🚗", label: "Garage", value: "2-car enclosed" },
    { icon: "🌳", label: "Lot Size", value: "10,000 sq ft (50' x 200')" },
    { icon: "❄️", label: "Cooling", value: "Fully air conditioned" },
  ];

  const landFeatures = [
    "Freehold land ownership",
    "Plot size: 50' x 200' (10,000 sq ft)",
    "Located in Kelly Village, Caroni",
    "About 7 minutes from the airport",
    "15 minutes from Trincity Mall",
    "20 minutes from PriceSmart"
  ];

  const yardFeatures = [
    "Front yard: 50' x 30' with parking and driveway",
    "Remote controlled gate for driveway access",
    "Pedestrian gate with path to main entry",
    "Side gates and high fence secure the backyard",
    "Fruit trees: julie mango, starch mango, cherry, portugal, plum, coconut, limes",
    "Tank stand/storage room with 1,400 gallons water capacity",
    "Water pump and garden supplies storage",
    "Plumbing for additional toilet"
  ];

  const houseFeatures = [
      "Large open floor plan including kitchen, dining, and living room",
      "Additional room usable as office or 5th bedroom",
    "Fully air conditioned with regular service",
    "New kitchen cabinets with quartz countertops",
    "2.5 bathrooms including master bath with shower, tub, and dual sinks",
    "150L solar water heater",
    "7-foot kitchen island with prep sink",
    "Enclosed 2-car garage with remote controlled roll-up door",
    "Covered back porch enclosed with wrought iron gates",
    "Dishwasher included",
    "Storage shelves in garage",
    "Separate laundry/utility room",
    "4 bedrooms, including a master suite, with ample closet space in each",
    "Extra walk-in closet near garage for bulk storage",
    "Continuously serviced by Rentokil since construction"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Property Overview */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Property Overview</h2>
            
            
            {/* Key Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <div className="text-sm text-gray-500">{feature.label}</div>
                  <div className="font-semibold text-gray-900">{feature.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Land & Location */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Land & Location</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <ul className="space-y-3">
                {landFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Yard Features */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Yard & Outdoor Features</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Front Yard</h4>
              <ul className="space-y-2">
                {yardFeatures.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Backyard & Storage</h4>
              <ul className="space-y-2">
                {yardFeatures.slice(3).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* House Features */}
        <div className="mt-8 bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">House Features & Amenities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {houseFeatures.map((feature, index) => (
              <div key={index} className="flex items-start">
                <svg className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Location & Description */}
        <div className="mt-8 bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Location & Neighborhood</h3>
          <p className="text-gray-600 mb-4">
          This street in Kelly Village is very quiet and family-oriented with an active neighbourhood watch. The neighbours are  friendly and look out for each other. Our children enjoyed riding their bikes and scooters on the road on evenings, or playing cricket, football, volleyball or badminton in the backyard. We have spent 14 very happy years here making unforgettable memories.
          </p>
          <p className="text-gray-600">
          This home is conveniently located as it is just off the Caroni South Bank Road and minutes from the airport and Churchill Roosevelt Highway. Trincity Mall, Pricesmart and Valpark Shopping Plaza are all 15-20 minutes away.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails; 