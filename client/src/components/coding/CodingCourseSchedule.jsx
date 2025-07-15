import React from "react";
import courseSchedule from "../../utils/courseSchedule.js";
import { handleChatClick } from "../../utils/whatsApp.js";

const CodingCourseSchedule = () => {
  const displayedCourses = courseSchedule.slice(0, 3);

  const colors = ["bg-[#E8D9F3]"];

  return (
    <div className="py-4 bg-gray-100">
      <div className="text-center mb-6">
        <h2 className="text-purple-500 text-base sm:text-lg">Our Courses</h2>
        <h1 className="text-2xl sm:text-3xl font-bold text-black">
          <span className="text-purple-500">Choose Your Learning Style:</span>
          <br />
          Flexible Schedules Available
        </h1>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {displayedCourses.map((course, index) => (
          <div
            key={course.id}
            className={`${
              colors[index % colors.length]
            } text-black rounded-lg p-4 shadow-lg flex flex-col items-start justify-between h-48 relative`}
          >
            {/* Mode Badge with increased top spacing */}
            <span className="absolute top-2 left-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
              {course.mode}
            </span>

            {/* Course Details */}
            <div className="w-full mt-6"> {/* Added mt-6 to ensure content starts lower */}
              <h3 className="text-xl font-bold">{course.title}</h3>
              <p className="mt-1 text-sm">Duration: {course.duration}</p>
              <p className="mt-1 text-sm">Next Batch: {course.date}</p>
            </div>

            <div className="w-full">
              <button
                className="w-full bg-white text-black text-sm font-medium px-4 py-2 rounded hover:bg-gray-200 transition my-2"
                onClick={() => handleChatClick(`enquire about ${course.title} course`)}
              >
                Enquire now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodingCourseSchedule;