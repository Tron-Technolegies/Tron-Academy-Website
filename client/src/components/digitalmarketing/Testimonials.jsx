import React, { useState } from 'react';

const Testimonials = ({ testimonials, title = "What Our Learners Have To Say About Us!" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="bg-gradient-to-r from-pink-100 to-purple-100 py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-500 text-center mb-2">
          Testimonials
        </h2>
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black text-center mb-8 sm:mb-10 md:mb-12">
          {title}
        </h3>

        {/* Testimonial Content */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Left: Testimonial Text with Quote Mark */}
          <div className="md:w-2/5 relative">
            {/* Large Quote Marks */}
            <div className="text-purple-100 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif absolute -top-8 sm:-top-10 md:-top-12 lg:-top-16 left-0">
              " "
            </div>

            {/* Testimonial Text */}
            <div className="pt-6 sm:pt-8">
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold">{currentTestimonial.name}</h4>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 border-b border-gray-300 pb-2 mb-4 sm:mb-6">
                {currentTestimonial.role}
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-800">
                {currentTestimonial.quote}
              </p>
            </div>
          </div>

          {/* Right: Video Thumbnails */}
          <div className="md:w-3/5 flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
            {/* First Video Thumbnail */}
            <div className="relative w-full sm:w-40 md:w-48 h-60 sm:h-64 md:h-72">
              <img
                src={currentTestimonial.videoThumbnail}
                alt={`${currentTestimonial.name} testimonial thumbnail`}
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="bg-gray-800 bg-opacity-50 rounded-full p-2 sm:p-3">
                  <svg className="w-5 h-5 sm:w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              {/* Video Controls */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <div className="bg-black bg-opacity-50 text-white px-2 sm:px-3 py-1 rounded-full flex items-center space-x-1">
                  <span className="text-xs sm:text-sm">●</span>
                  <span className="text-xs sm:text-sm">●</span>
                  <span className="text-xs sm:text-sm">●</span>
                </div>
              </div>
            </div>

            {/* Second Video Thumbnail */}
            <div className="relative w-full sm:w-40 md:w-48 h-60 sm:h-64 md:h-72">
              <img
                src={testimonials[(currentIndex + 1) % testimonials.length].videoThumbnail}
                alt={`${testimonials[(currentIndex + 1) % testimonials.length].name} testimonial thumbnail`}
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="bg-gray-800 bg-opacity-50 rounded-full p-2 sm:p-3">
                  <svg className="w-5 h-5 sm:w-6  text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              {/* Video Controls */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <div className="bg-black bg-opacity-50 text-white px-2 sm:px-3 py-1 rounded-full flex items-center space-x-1">
                  <span className="text-xs sm:text-sm">●</span>
                  <span className="text-xs sm:text-sm">●</span>
                  <span className="text-xs sm:text-sm">●</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end items-center mt-6 sm:mt-8 space-x-4">
          <button onClick={handlePrev} className="text-gray-600 hover:text-purple-700" aria-label="Previous testimonial">
            <svg className="w-5 h-5 sm:w-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="text-gray-800">
            <span className="text-lg sm:text-xl font-bold">{String(currentIndex + 1).padStart(2, '0')}</span>
            <span className="text-gray-400 text-xs sm:text-sm">/{String(testimonials.length).padStart(2, '0')}</span>
          </span>
          <button onClick={handleNext} className="text-gray-600 hover:text-purple-700" aria-label="Next testimonial">
            <svg className="w-5 h-5 sm:w-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;