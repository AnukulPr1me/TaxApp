import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const images = [
    // Add image URLs here
    "https://via.placeholder.com/1920x1080",
    "https://via.placeholder.com/1920x1080",
    "https://via.placeholder.com/1920x1080"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); // 3 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Left arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
      >
        ❮
      </button>

      {/* Right arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
