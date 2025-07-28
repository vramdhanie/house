import React from 'react';

const PropertyDetails: React.FC = () => {
  const features = [
    { icon: "🏠", label: "Square Footage", value: "3,100 sq ft" },
    { icon: "🛏️", label: "Bedrooms", value: "4 + Office" },
    { icon: "🚿", label: "Bathrooms", value: "2.5" },
    { icon: "🚗", label: "Garage", value: "2-car enclosed" },
    { icon: "🌳", label: "Lot Size", value: "10,000 sq ft (50' x 200')" },
    { icon: "📅", label: "Exterior Paint", value: "2 years ago" },
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
    "Pedestrian gate with path to main entrance",
    "Side gates and high fence secure the backyard",
    "Fruit trees: julie mango, starch mango, cherry, portugal, plum, coconut, limes",
    "Tank stand/storage room with 1,400 gallons water capacity",
    "Water pump and garden supplies storage",
    "Plumbing for additional toilet"
  ];

  const houseFeatures = [
    "Fully air conditioned with regular service",
    "4 bedrooms including master suite with closets",
    "Additional room usable as office or 5th bedroom",
    "2.5 bathrooms including master bath with shower, tub, and dual sinks",
    "Extra walk-in closet near foyer for bulk storage",
    "Enclosed 2-car garage with remote controlled roll-up door",
    "Storage shelves in garage",
    "Large open floor plan kitchen, dining, and living room",
    "New kitchen cabinets with quartz countertops",
    "7-foot kitchen island with second sink",
    "Dishwasher included",
    "Separate laundry/utility room",
    "150L solar water heater",
    "Covered back porch with wrought iron gates",
    "Continuously serviced by Rentokil since construction"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Property Overview */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Property Overview</h2>
            <p className="text-lg text-gray-600 mb-8">
              This stunning spacious family home in Kelly Village, Caroni offers the perfect blend of comfort and functionality. 
              Located just 7 minutes from the airport, this property features modern amenities, high-quality finishes, 
              and exceptional attention to detail throughout.
            </p>
            
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
            This exceptional property is situated in the desirable Kelly Village area of Caroni, offering the perfect 
            balance of tranquility and convenience. 
          </p>
          <p className="text-gray-600">
            Just 7 minutes from the airport, this location provides the ideal setting for families seeking a peaceful 
            residential area with all the amenities of modern life within reach. The property offers a quiet, family-friendly 
            environment while maintaining excellent connectivity to major transportation routes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails; 