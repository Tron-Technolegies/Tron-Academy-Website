import React from 'react';

const CourseOutcomes = () => {
  return (
    <div className="bg-pink-100 p-8 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-12 text-center">
        What You'll Get in the Course
      </h1>
      
      {/* Course outcomes grid */}
      <div className="max-w-6xl w-full">
        {/* First row */}
        <div className="flex flex-col md:flex-row gap-6 mb-6 justify-center items-center">
          <div className="bg-pink-200 border-2 border-gray-400 rounded-full px-8 py-4 text-center min-w-80">
            <span className="text-xl font-semibold text-gray-800">
              Job-Ready Design Portfolio
            </span>
          </div>
          <div className="bg-pink-200 border-2 border-gray-400 rounded-full px-8 py-4 text-center min-w-80">
            <span className="text-xl font-semibold text-gray-800">
              Real-World Work Experience
            </span>
          </div>
        </div>
        
        {/* Second row */}
        <div className="flex flex-col md:flex-row gap-6 mb-6 justify-center items-center">
          <div className="bg-pink-200 border-2 border-gray-400 rounded-full px-8 py-4 text-center min-w-64">
            <span className="text-xl font-semibold text-gray-800">
              Industry Certification
            </span>
          </div>
          <div className="bg-pink-200 border-2 border-gray-400 rounded-full px-8 py-4 text-center min-w-96">
            <span className="text-xl font-semibold text-gray-800">
              In-Demand Skills in Graphic, Motion, and UI Design
            </span>
          </div>
        </div>
        
        {/* Third row */}
        <div className="flex justify-center">
          <div className="bg-pink-200 border-2 border-gray-400 rounded-full px-8 py-4 text-center min-w-80">
            <span className="text-xl font-semibold text-gray-800">
              Career Launchpad with Placement Help
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOutcomes;