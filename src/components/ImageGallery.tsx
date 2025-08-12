import React, { useState, useEffect } from 'react';

interface ImageData {
  src: string;
  alt: string;
  caption: string;
}

const ImageGallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set());

  const images: ImageData[] = [
    {
      src: "https://res.cloudinary.com/dp5tvvzhl/image/upload/v1753662716/house/exterior2_s6rioz.png",
      alt: "Side view of the property",
      caption: "Large front yard with driveway and pedestrian walkway"
    },
    {
      src: "https://res.cloudinary.com/dp5tvvzhl/image/upload/v1753662716/house/front_yard_bq97p9.jpg",
      alt: "Front view of the property",
      caption: "Remote control garage"
    },
    {
        src: "https://res.cloudinary.com/dp5tvvzhl/image/upload/v1753662716/house/exterior5_racs9m.jpg",
        alt: "Side view of the property",
        caption: "Another view of front yard"
      },
    {
      src: "https://res.cloudinary.com/dp5tvvzhl/image/upload/v1753662716/house/Front_door_iz4obu.jpg",
      alt: "Front door entrance",
      caption: "Main entrance"
    },
    {
        src: "https://res.cloudinary.com/dp5tvvzhl/image/upload/v1753662716/house/side_gate_yxnlle.jpg",
        alt: "Side gate",
        caption: "Side gate and high fence secure the backyard"
      },
    {
      src: "https://res.cloudinary.com/dp5tvvzhl/image/upload/v1753662716/house/backyard_eqxofy.jpg",
      alt: "Backyard",
      caption: "Backyard - space for outdoor toilet and storage room including water pump"
    },
    {
        src: "https://res.cloudinary.com/dp5tvvzhl/image/upload/v1753662716/house/limetree_qk4tvb.jpg",
        alt: "Lime tree",
        caption: "Lime tree in the backyard"
      },
      {
        src: "https://res.cloudinary.com/dp5tvvzhl/image/upload/v1753662716/house/pedestrian_gate_y8j4nq.jpg",
        alt: "Pedestrian gate",
        caption: "Pedestrian gate"
      },
    {
        src: "https://res.cloudinary.com/dp5tvvzhl/image/upload/v1753662716/house/kitchen_nop6sm.png",
        alt: "Modern kitchen",
        caption: "Kitchen - recently renovated"
      },
      {
        src: "https://res.cloudinary.com/dp5tvvzhl/image/upload/v1753662716/house/kitchen_detail_imof4d.jpg",
        alt: "Kitchen detail",
        caption: "Kitchen detail"
      },
    {
      src: "https://res.cloudinary.com/dp5tvvzhl/image/upload/v1753662716/house/livingroom_vveth5.png",
      alt: "Spacious living room",
      caption: "Living room"
    },
    {
        src: "https://res.cloudinary.com/dp5tvvzhl/image/upload/v1753662716/house/living_room_ohy2y2.jpg",
        alt: "Spacious living room",
        caption: "Open concept"
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
    },
    {
      src: "https://res.cloudinary.com/dp5tvvzhl/image/upload/v1753662716/house/floor_plan_bmbqeb.jpg",
      alt: "Floor plan",
      caption: "Floor plan"
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

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const goToNextImage = () => {
    setSelectedImageIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setSelectedImageIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  // Handle keyboard shortcuts for lightbox navigation
  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeLightbox();
      } else if (event.key === 'ArrowRight') {
        goToNextImage();
      } else if (event.key === 'ArrowLeft') {
        goToPreviousImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Prevent background scrolling while lightbox is open
    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      body.style.overflow = previousOverflow;
    };
  }, [isLightboxOpen]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Property Gallery</h2>
        </div>

        {/* Main Image with Caption */}
        <div className="mb-8">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg bg-gray-100">
            <button
              type="button"
              onClick={() => openLightbox(selectedImageIndex)}
              className="group w-full h-full cursor-zoom-in"
              aria-label="Open image in fullscreen"
            >
              <img
                src={images[selectedImageIndex].src}
                alt={images[selectedImageIndex].alt}
                className="w-full h-full object-contain"
                onError={() => handleImageError(selectedImageIndex)}
                onLoad={() => handleImageLoad(selectedImageIndex)}
              />
            </button>
            {/* Caption overlay for md+ screens only */}
            <div className="hidden sm:block absolute bottom-0 left-0 right-0 bg-black/75 text-white p-4">
              <p className="text-base md:text-lg font-medium">{images[selectedImageIndex].caption}</p>
            </div>
          </div>
          {/* Mobile caption below image (no overlay) */}
          <div className="sm:hidden mt-2">
            <p className="text-xs text-gray-700 text-center">{images[selectedImageIndex].caption}</p>
          </div>
        </div>

        {/* Thumbnail Gallery - Simplified Layout */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={`relative w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden shadow-md transition-all duration-200 group ${
                selectedImageIndex === index 
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
            {selectedImageIndex + 1} of {images.length} photos
          </span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black bg-opacity-90 flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-white text-sm">
              {selectedImageIndex + 1} / {images.length}
            </span>
            <button
              type="button"
              className="text-white hover:text-gray-200 focus:outline-none"
              onClick={closeLightbox}
              aria-label="Close image viewer"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="relative flex-1 flex items-center justify-center px-4">
            <img
              src={images[selectedImageIndex].src}
              alt={images[selectedImageIndex].alt}
              className="max-w-full max-h-full object-contain select-none"
              draggable={false}
              onError={() => handleImageError(selectedImageIndex)}
              onLoad={() => handleImageLoad(selectedImageIndex)}
            />

            {/* Previous Button */}
            <button
              type="button"
              onClick={goToPreviousImage}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 focus:outline-none"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={goToNextImage}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 focus:outline-none"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Caption */}
          <div className="px-4 pb-4">
            <p className="text-white text-center text-sm sm:text-base">
              {images[selectedImageIndex].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageGallery; 

