import React, { useEffect } from 'react';

const HeroSection: React.FC = () => {
  const heroImageSrc = "https://res.cloudinary.com/dp5tvvzhl/image/upload/v1753662716/house/exterior1_xbopil.png";

  // Preload hero image when component mounts
  useEffect(() => {
    const preloadHeroImage = () => {
      const img = new Image();
      img.onload = () => {
        console.log('Hero image preloaded successfully!');
      };
      img.onerror = () => {
        console.error('Failed to preload hero image');
      };
      img.src = heroImageSrc;
    };

    preloadHeroImage();
  }, []);

  const handleImageError = () => {
    console.error('Failed to load hero image');
  };

  const handleImageLoad = () => {
    console.log('Successfully loaded hero image');
  };

  return (
    <section className="relative bg-gray-900">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={heroImageSrc}
          alt="Spacious Family Home in Caroni"
          onError={handleImageError}
          onLoad={handleImageLoad}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Spacious Family Home in Caroni
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Located in Kelly Village
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="bg-white bg-opacity-90 rounded-lg px-6 py-4">
              <div className="text-3xl font-bold text-green-600">$2,100,000</div>
              <div className="text-sm text-gray-600">Asking Price</div>
            </div>
            <div className="bg-white bg-opacity-90 rounded-lg px-6 py-4">
              <div className="text-2xl font-bold text-gray-900">3,100 sq ft</div>
              <div className="text-sm text-gray-600">Living Space</div>
            </div>
            <div className="bg-white bg-opacity-90 rounded-lg px-6 py-4">
              <div className="text-2xl font-bold text-gray-900">4 BR</div>
              <div className="text-sm text-gray-600">Bedrooms</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 