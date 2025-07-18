import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function ExploreCourseSection() {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState(0);

  const courses = [
    {
      id: 0,
      title: "Advanced Digital Marketing",
      image: "/digital.jpg",
      bgColor: "bg-teal-600",
      route: "/digitalmarketing",
      duration: "4 months",
      startDate: "Sept 1, 2025",
      time: "10:30 am to 12:30pm",
    },
    {
      id: 1,
      title: "Coding",
      image: "/coding.jpg",
      bgColor: "bg-blue-600",
      route: "/coding",
      duration: "6 Months + 2 Months",
      startDate: "Sept 1, 2025",
      time: "2pm to 5pm",
    },
    {
      id: 2,
      title: "Multimedia",
      image: "/team/faheem.jpg",
      bgColor: "bg-purple-600",
      route: "/multimedia",
      duration: "4 Months + 1 Month",
      startDate: "Sept 1, 2025",
      time: "11am to 2pm",
    },
  ];

  const activeCourse = courses[activeCard];

  return (
    <section className="lg:px-[120px] lg:py-10 px-4 py-5 bg-gradient-to-br from-[#F4E3FA] from-5% flex xl:flex-row flex-col justify-start items-center pb-20 w-full">
      {/* Left Section - Title and View All Button */}
      <div className="xl:max-w-[300px] flex flex-col items-center xl:items-start justify-center gap-5 flex-shrink-0">
        <h4 className="md:text-4xl text-2xl xl:text-left text-center font-black comic-font">
          <span className="text-hoverPrimary">Explore</span> Our Trending Courses
        </h4>
        <div className="flex gap-3 items-center">
          <motion.button
            onClick={() => navigate("/course")}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, backgroundColor: "#CA90F2" }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex gap-2 items-center bg-black rounded-lg px-4 py-2 text-white text-base roboto-font"
          >
            <span>View All</span>
            <span>
              <MdKeyboardArrowRight size={20} />
            </span>
          </motion.button>
          <img src="/exploreArrow.png" className="hidden xl:block" alt="" />
        </div>
      </div>

      {/* Right Section - Course Cards */}
      <div className="flex items-center justify-end xl:mt-0 mt-10 w-full xl:w-auto ml-auto">
        <div className="flex gap-2 sm:gap-4 flex-grow">
          {/* Main Featured Card */}
          <motion.div
            className={`relative w-52 sm:w-72 h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-lg ${activeCourse.bgColor} flex-shrink-0`}
            key={activeCard}
            initial={{ scale: 0.95, opacity: 0.8, x: 0 }}
            animate={{ scale: 1, opacity: 1, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Image */}
            <img
              src={activeCourse.image}
              alt={activeCourse.title}
              className="w-full h-full object-cover opacity-50"
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 p-2 sm:p-6 flex flex-col justify-between text-white bg-black bg-opacity-60">
              <div>
                <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-4 leading-tight text-shadow-lg">
                  {activeCourse.title.split(' ').map((word, index) => (
                    <React.Fragment key={index}>
                      {word}
                      {index < activeCourse.title.split(' ').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
                <button
                  onClick={() => navigate(activeCourse.route)}
                  className="text-yellow-200 text-sm sm:text-lg font-medium flex items-center gap-1 sm:gap-2 hover:text-yellow-100 transition-colors"
                >
                  Explore more <MdKeyboardArrowRight size={16} />
                </button>
              </div>

              {/* Course Details */}
              <div className="space-y-1 sm:space-y-3">
                <div className="bg-black bg-opacity-70 rounded-lg px-2 sm:px-4 py-1 sm:py-3 text-sm sm:text-lg">
                  {activeCourse.duration}
                </div>
                <div className="flex items-center gap-1 sm:gap-3 text-sm sm:text-lg">
                  <div className="w-3 sm:w-5 h-2 sm:h-4 bg-orange-300 rounded-sm"></div>
                  <span>{activeCourse.startDate}</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-3 text-sm sm:text-lg">
                  <div className="w-3 sm:w-5 h-3 sm:h-5 border-2 border-white rounded-full flex items-center justify-center">
                    <div className="w-1 sm:w-2 h-1 sm:h-2 bg-white rounded-full"></div>
                  </div>
                  <span>{activeCourse.time}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Course Cards */}
          {courses.map((course, index) => {
            if (index === activeCard) return null;

            return (
              <motion.div
                key={course.id}
                className={`relative w-16 sm:w-24 md:w-32 h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-lg bg-gray-100 cursor-pointer hover:shadow-xl transition-all duration-300 flex-shrink-0 ${
                  activeCard === index ? 'ring-4 ring-blue-400' : ''
                }`}
                onClick={() => setActiveCard(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Vertical Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute right-1 sm:right-3 md:right-4 top-1/2 transform -translate-y-1/2 rotate-90">
                    <span className="text-white font-bold text-xs sm:text-lg md:text-xl whitespace-nowrap drop-shadow-lg">
                      {course.title}
                    </span>
                  </div>
                </div>

                {/* Active indicator */}
                {activeCard === index && (
                  <div className="absolute top-2 right-2 w-2 h-2 sm:w-3 sm:h-3 bg-yellow-300 rounded-full"></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}