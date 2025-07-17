import React from 'react';

const MultimediaTools = () => {
  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2">
          Master These Essential Tools
        </h2>
        
        {/* Subtitle */}
        <p className="text-gray-600 text-sm sm:text-base mb-4">
          Learn the industry's best design tools. In this course, you'll get hands-on experience with:
        </p>
        
        {/* Tools Layout */}
        <div className="flex flex-col items-center space-y-4">
          {/* First Row - Three Tools */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <div className="bg-yellow-600 text-white rounded-full px-4 py-2 flex items-center space-x-2 shadow-md">
              <span className="text-sm sm:text-base font-medium">Adobe Illustrator</span>
              <div className="bg-black rounded-lg p-1">
                <span className="text-orange-500 font-bold text-sm sm:text-base">Ai</span>
              </div>
            </div>
            <div className="bg-teal-500 text-white rounded-full px-4 py-2 flex items-center space-x-2 shadow-md">
              <span className="text-sm sm:text-base font-medium">Adobe Photoshop</span>
              <div className="bg-blue-800 rounded-lg p-1">
                <span className="text-white font-bold text-sm sm:text-base">Ps</span>
              </div>
            </div>
            <div className="bg-blue-600 text-white rounded-full px-4 py-2 flex items-center space-x-2 shadow-md">
              <span className="text-sm sm:text-base font-medium">After effects</span>
              <div className="bg-purple-900 rounded-lg p-1">
                <span className="text-white font-bold text-sm sm:text-base">Ae</span>
              </div>
            </div>
          </div>
          
          {/* Second Row - Two Tools */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <div className="bg-orange-500 text-white rounded-full px-4 py-2 flex items-center space-x-2 shadow-md">
              <span className="text-sm sm:text-base font-medium">Premiere Pro</span>
              <div className="bg-purple-900 rounded-lg p-1">
                <span className="text-white font-bold text-sm sm:text-base">Pr</span>
              </div>
            </div>
            <div className="bg-pink-500 text-white rounded-full px-4 py-2 flex items-center space-x-2 shadow-md">
              <span className="text-sm sm:text-base font-medium">Figma</span>
              <div className="bg-black rounded-lg p-1 flex items-center justify-center w-5 h-5">
                <div className="w-2.5 h-2.5 bg-orange-500 rounded-full relative">
                  <div className="absolute top-0 left-1 w-1 h-1 bg-purple-500 rounded-full"></div>
                  <div className="absolute top-1 right-0 w-1 h-1 bg-green-500 rounded-full"></div>
                  <div className="absolute bottom-0 left-0 w-1 h-1 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultimediaTools;