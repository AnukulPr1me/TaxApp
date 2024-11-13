import React, { useState, useEffect } from 'react';
import money1 from "../assets/images/money1.webp";
import money2 from "../assets/images/money2.png";

const Carousel = () => {
  const images = [
    {
      src: money2,
      title: "Tax Calculator",
      heading: "Calculate Your Taxes Instantly",
      subheading: "Easily calculate your tax with our tool. Enter your income and deductions for an accurate estimate. Save time and reduce stress by instantly knowing your liabilities or refunds."
    },
    {
      src: money1,
      title: "Tax Filing",
      heading: "Fast & Secure Tax Returns",
      subheading: "File your tax returns quickly and securely. Our platform ensures compliance with the latest tax laws, providing a hassle-free filing experience with reminders and support."
    }
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
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 flex items-center justify-center">
            {/* Image and Text Layout */}
            <div className="text-center">
              <img
                src={image.src}
                alt={`Slide ${index + 1}`}
                className="w-full max-w-[300px] h-auto mx-auto mb-6 object-contain"
              />
              <div className="text-lg font-bold text-[40px]">{image.title}</div>
              <div className="text-xl font-semibold mt-3 text-[24px]">{image.heading}</div>
              <div className="text-base text-gray-600 mt-5 max-w-[600px] mx-auto">{image.subheading}</div>
            </div>
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
