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
      src: "https://github.com/user-attachments/assets/20c62a05-287e-46e7-9fe0-048ef537e6aa",
      alt: "Front view of the spacious family home",
      caption: "Beautiful front facade with well-maintained landscaping"
    },
    {
      src: "https://github.com/user-attachments/assets/9df5aa50-469d-4355-b6c2-33f71cba1bb2",
      alt: "Side view of the property",
      caption: "Side view showing the spacious layout and modern design"
    },
    {
      src: "https://github.com/user-attachments/assets/3eecc79a-7ac0-4124-96bd-4f10f183ce86",
      alt: "Backyard and outdoor area",
      caption: "Private backyard perfect for family gatherings and outdoor activities"
    },
    {
      src: "https://github.com/user-attachments/assets/769e0997-75b1-461b-8c3c-cae510e79bcd",
      alt: "Additional exterior view",
      caption: "Another angle showcasing the property's curb appeal"
    },
    {
      src: "https://github.com/user-attachments/assets/bceff646-078f-41a4-9258-3987fd8fd39e",
      alt: "Spacious living room",
      caption: "Open concept living room with plenty of natural light"
    },
    {
      src: "https://github.com/user-attachments/assets/51b22e32-0af5-4c2d-bce9-dafa2efb7a7d",
      alt: "Dining and living area",
      caption: "Combined dining and living space perfect for entertaining"
    },
    {
      src: "https://github.com/user-attachments/assets/4a619af2-446d-4ddd-a321-0ad48e455fa7",
      alt: "Modern kitchen",
      caption: "Fully equipped kitchen with modern appliances and ample storage"
    },
    {
      src: "https://github.com/user-attachments/assets/7aaaa342-5c14-4fc1-998a-1be6c3b6b5f9",
      alt: "Master bedroom",
      caption: "Spacious master bedroom with en-suite bathroom"
    },
    {
      src: "https://github.com/user-attachments/assets/81040713-1cb2-48e1-b77c-edc622dbe3b9",
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