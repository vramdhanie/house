import React, { useState, useEffect } from 'react';

interface ImageData {
  src: string;
  alt: string;
  caption: string;
}

const ImageGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set());

  const images: ImageData[] = [
    {
      src: "https://res.cloudinary.com/dp5tvvzhl/image/upload/v1753662716/house/exterior2_s6rioz.png",
      alt: "Side view of the property",
      caption: "Large front yard with driveway and pedestrian walkway"
    },
    {
      src: "https://res.cloudinary.com/dp5tvvzhl/image/upload/v1753662716/house/Front_door_iz4obu.jpg",
      alt: "Front door entrance",
      caption: "Front entrance"
    },
    {
        src: "https://res.cloudinary.com/dp5tvvzhl/image/upload/v1753662716/house/kitchen_nop6sm.png",
        alt: "Modern kitchen",
        caption: "Kitchen - recently renovated"
      },
    {
      src: "https://res.cloudinary.com/dp5tvvzhl/image/upload/v1753662716/house/livingroom_vveth5.png",
      alt: "Spacious living room",
      caption: "Living room"
    },
    {
      src: "https://res.cloudinary.com/dp5tvvzhl/image/upload/v1753662716/house/dining_living_xbxulo.png",
      alt: "Dining and living area",
      caption: "Dining and living area"
    },
    {
      src: "https://res.cloudinary.com/dp5tvvzhl/image/upload/v1753662716/house/bedroom_p1446l.png",
      alt: "Additional bedroom",
      caption: "Bedroom"
    },
    {
      src: "https://res.cloudinary.com/dp5tvvzhl/image/upload/v1753662716/house/Master_bedroom_fldj0z.jpg",
      alt: "Master bedroom",
      caption: "Master bedroom"
    },
    {
      src: "https://res.cloudinary.com/dp5tvvzhl/image/upload/v1753662716/house/Master_bath_1_tmirps.jpg",
      alt: "Master bathroom",
      caption: "Master bathroom"
    },
    {
      src: "https://res.cloudinary.com/dp5tvvzhl/image/upload/v1753662716/house/Master_bath_2_xvz9r4.jpg",
      alt: "Additional master bathroom angle",
      caption: "Master bathroom"
    },
    {
      src: "https://res.cloudinary.com/dp5tvvzhl/image/upload/v1753662716/house/Master_closet_2_kqenpd.jpg",
      alt: "Master closet",
      caption: "Master closet"
    },
    {
      src: "https://res.cloudinary.com/dp5tvvzhl/image/upload/v1753662716/house/Master_closet_1_lwowxz.jpg",
      alt: "Master closet",
      caption: "Master closet"
    }
  ];

  // Preload all images when component mounts
  useEffect(() => {
    const preloadImages = async () => {
      const preloadPromises = images.map((image, index) => {
        return new Promise<void>((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            setPreloadedImages(prev => new Set(prev).add(image.src));
            console.log(`Preloaded image ${index + 1}: ${image.src}`);
            resolve();
          };
          img.onerror = () => {
            console.error(`Failed to preload image ${index + 1}: ${image.src}`);
            reject();
          };
          img.src = image.src;
        });
      });

      try {
        await Promise.all(preloadPromises);
        console.log('All images preloaded successfully!');
      } catch (error) {
        console.warn('Some images failed to preload:', error);
      }
    };

    preloadImages();
  }, []);

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
        </div>

        {/* Main Image with Caption */}
        <div className="mb-8">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg bg-gray-100">
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="w-full h-full object-contain"
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
                  className="w-full h-full object-contain"
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

