import React, { useState } from 'react';

interface ImageData {
  src: string;
  alt: string;
  caption: string;
}

const ImageGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  const images: ImageData[] = [
    {
      src: "/images/exterior1.png",
      alt: "Front view of the spacious family home",
      caption: "Beautiful front facade with well-maintained landscaping"
    },
    {
      src: "/images/exterior2.png",
      alt: "Side view of the property",
      caption: "Side view showing the spacious layout and modern design"
    },
    {
      src: "/images/exterior3.png",
      alt: "Backyard and outdoor area",
      caption: "Private backyard perfect for family gatherings and outdoor activities"
    },
    {
      src: "/images/exterior4.png",
      alt: "Additional exterior view",
      caption: "Another angle showcasing the property's curb appeal"
    },
    {
      src: "/images/livingroom.png",
      alt: "Spacious living room",
      caption: "Open concept living room with plenty of natural light"
    },
    {
      src: "/images/dining_living.png",
      alt: "Dining and living area",
      caption: "Combined dining and living space perfect for entertaining"
    },
    {
      src: "/images/kitchen.png",
      alt: "Modern kitchen",
      caption: "Fully equipped kitchen with modern appliances and ample storage"
    },
    {
      src: "/images/master.png",
      alt: "Master bedroom",
      caption: "Spacious master bedroom with en-suite bathroom"
    },
    {
      src: "/images/bedroom.png",
      alt: "Additional bedroom",
      caption: "Comfortable bedroom with built-in storage and natural light"
    }
  ];

  const handleImageError = (index: number) => {
    console.error(`Failed to load image: ${images[index].src}`);
    setImageErrors(prev => new Set(prev).add(index));
  };

  const handleImageLoad = (index: number) => {
    console.log(`Successfully loaded image: ${images[index].src}`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Property Gallery</h2>
          <p className="text-lg text-gray-600">Explore every detail of this magnificent home</p>
        </div>

        {/* Main Image with Caption */}
        <div className="mb-8">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="w-full h-full object-cover"
              onError={() => handleImageError(selectedImage)}
              onLoad={() => handleImageLoad(selectedImage)}
            />
            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4">
              <p className="text-lg font-medium">{images[selectedImage].caption}</p>
            </div>
          </div>
        </div>

        {/* Thumbnail Gallery - Simplified Layout */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden shadow-md transition-all duration-200 group ${
                selectedImage === index 
                  ? 'ring-4 ring-green-500 scale-105' 
                  : 'hover:scale-105'
              }`}
            >
              {imageErrors.has(index) ? (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-xs">Error</span>
                </div>
              ) : (
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  onError={() => handleImageError(index)}
                  onLoad={() => handleImageLoad(index)}
                />
              )}
              {/* Hover caption for thumbnails - only visible on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <p className="text-white text-xs text-center px-1">
                  {image.caption}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Image Counter */}
        <div className="text-center">
          <span className="text-sm text-gray-500">
            {selectedImage + 1} of {images.length} photos
          </span>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery; 