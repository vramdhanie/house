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
      src: "https://firebasestorage.googleapis.com/v0/b/sonika-rustic.firebasestorage.app/o/exterior2.png?alt=media&token=60fcdb02-8d62-483c-a3a2-4ba078ae1835",
      alt: "Side view of the property",
      caption: "Large front yard with driveway and pedestrian walkway"
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/sonika-rustic.firebasestorage.app/o/front_yard.jpeg?alt=media&token=6da4eb3b-9321-42f5-b0c6-41eb0f28b4b8",
      alt: "Front view of the property",
      caption: "Remote control garage"
    },
    {
        src: "https://firebasestorage.googleapis.com/v0/b/sonika-rustic.firebasestorage.app/o/exterior5.jpeg?alt=media&token=024cfc95-ae85-49db-ad7b-aa9eaaaa78a9",
        alt: "Side view of the property",
        caption: "Another view of front yard"
      },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/sonika-rustic.firebasestorage.app/o/Front_door.jpg?alt=media&token=79a2c954-6b1f-4097-93e8-a4f19c883ab0",
      alt: "Front door entrance",
      caption: "Main entrance"
    },
    {
        src: "https://firebasestorage.googleapis.com/v0/b/sonika-rustic.firebasestorage.app/o/side_gate.jpeg?alt=media&token=93d0dc19-865b-4cfa-bbd8-f829d15d9bcb",
        alt: "Side gate",
        caption: "Side gate and high fence secure the backyard"
      },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/sonika-rustic.firebasestorage.app/o/backyard.jpeg?alt=media&token=43c06ed2-3093-40bc-8a77-8d5039393ff6",
      alt: "Backyard",
      caption: "Backyard - space for outdoor toilet and storage room including water pump"
    },
    {
        src: "https://firebasestorage.googleapis.com/v0/b/sonika-rustic.firebasestorage.app/o/limetree.jpeg?alt=media&token=adf40166-eba9-4c4c-8e5e-52cee718f9c4",
        alt: "Lime tree",
        caption: "Lime tree in the backyard"
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/sonika-rustic.firebasestorage.app/o/pedestrian_gate.jpeg?alt=media&token=168c41f1-165e-4767-bc4c-bf948fabe049",
        alt: "Pedestrian gate",
        caption: "Pedestrian gate"
      },
    {
        src: "https://firebasestorage.googleapis.com/v0/b/sonika-rustic.firebasestorage.app/o/kitchen.png?alt=media&token=e7f46fc1-1791-49b3-b00f-756451109202",
        alt: "Modern kitchen",
        caption: "Kitchen - recently renovated"
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/sonika-rustic.firebasestorage.app/o/kitchen_detail.jpeg?alt=media&token=f0480e14-3d46-442e-b7dd-b931b20826f7",
        alt: "Kitchen detail",
        caption: "Kitchen detail"
      },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/sonika-rustic.firebasestorage.app/o/livingroom.png?alt=media&token=34472cb7-4459-4953-bd31-553d03ee4c42",
      alt: "Spacious living room",
      caption: "Living room"
    },
    {
        src: "https://firebasestorage.googleapis.com/v0/b/sonika-rustic.firebasestorage.app/o/living_room.jpeg?alt=media&token=9fa0c0d7-2ac4-468f-b3d2-387210313d47",
        alt: "Spacious living room",
        caption: "Open concept"
      },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/sonika-rustic.firebasestorage.app/o/dining_living.png?alt=media&token=bdd3423c-72a7-4c59-bb6c-232641883595",
      alt: "Dining and living area",
      caption: "Dining and living area"
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/sonika-rustic.firebasestorage.app/o/bedroom.png?alt=media&token=fcbfc790-b187-4724-976d-288bfc3bac6b",
      alt: "Additional bedroom",
      caption: "Bedroom"
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/sonika-rustic.firebasestorage.app/o/Master_bedroom.jpg?alt=media&token=2523edb2-18fb-4592-9e06-8f79da4d3d7f",
      alt: "Master bedroom",
      caption: "Master bedroom"
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/sonika-rustic.firebasestorage.app/o/Master_bath_1.jpg?alt=media&token=0a6464e9-7bd5-461f-a874-8224ead31964",
      alt: "Master bathroom",
      caption: "Master bathroom"
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/sonika-rustic.firebasestorage.app/o/Master_bath_2.jpg?alt=media&token=b49e3c50-cdd8-4e87-b10a-e2eef4783ca4",
      alt: "Additional master bathroom angle",
      caption: "Master bathroom"
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/sonika-rustic.firebasestorage.app/o/Master_closet_2.jpg?alt=media&token=759b339f-af1d-4750-b90b-01733e3f40ba",
      alt: "Master closet",
      caption: "Master closet"
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/sonika-rustic.firebasestorage.app/o/Master_closet_1.jpg?alt=media&token=408f0f89-f630-4a42-9cba-89df4c3fce1d",
      alt: "Master closet",
      caption: "Master closet"
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/sonika-rustic.firebasestorage.app/o/floor_plan.jpeg?alt=media&token=be32ff95-83d4-452f-b564-453bbcc00e43",
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

              {/* Hover/Focus overlay cue */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 focus-visible:bg-black/20 transition-colors">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-md p-3">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </span>
                </div>
              </div>

              {/* Persistent corner badge hint */}
              <div className="pointer-events-none absolute top-2 right-2 z-[1] inline-flex items-center gap-1 rounded-full bg-black/60 text-white px-2 py-1 text-[11px] sm:text-xs">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <span className="sm:hidden">Tap to expand</span>
                <span className="hidden sm:inline">Click to enlarge</span>
              </div>
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

