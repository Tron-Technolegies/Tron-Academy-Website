import React from 'react';
import courseSchedule from "../../utils/courseSchedule.js";
import { handleChatClick } from "../../utils/whatsApp.js";

const MultimediaCourseSchedule = () => {
  const displayedCourses = courseSchedule.slice(6, 11);

  const colors = [
    "bg-[#E8D9F3]", 
  ];

  return (
    <div className="py-8 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-purple-500 text-base sm:text-lg">Our Courses</h2>
        <h1 className="text-2xl sm:text-3xl font-bold text-black">
          <span className="text-purple-500">Choose Your Learning Style:</span>
          <br />
          Flexible Schedules Available
        </h1>
      </div>

      {/* Courses Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {displayedCourses.map((course, index) => (
          <div
            key={course.id}
            className={`${
              colors[index % colors.length]
            } text-black rounded-lg p-6 shadow-lg flex flex-col items-start justify-between h-60 relative`}
          >
            {/* Mode Badge */}
            <span className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded">
              {course.mode}
            </span>

            {/* Course Details */}
            <div className="w-full">
              <h3 className="text-xl font-bold mt-6">{course.title}</h3>
              <p className="mt-1 text-sm">Duration: {course.duration}</p>
            </div>

            <div className="w-full">
              {/* Enquire Now Button */}
              <button className="w-full bg-white text-black text-sm font-medium px-4 py-2 rounded hover:bg-gray-200 transition"onClick={() => handleChatClick(`enquire about ${course.title} course`)}>
                Enquire now
              </button>
            </div>
          </div>
        ))}

        {/* More Classes On the Way */}
        <div className="flex items-center justify-center h-60">
          <h3 className="text-xl sm:text-3xl font-bold text-purple-600 text-center">
            More
            <br />
            Classes
            <br />
            On the
            <br />
            way
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MultimediaCourseSchedule;