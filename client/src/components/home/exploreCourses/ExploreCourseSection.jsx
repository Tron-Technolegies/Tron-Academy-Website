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
      startDate: "Oct 15, 2025",
      time: "2pm to 5pm",
    },
    {
      id: 2,
      title: "Multimedia",
      image: "/multimedia.jpg",
      bgColor: "bg-purple-600",
      route: "/multimedia",
      duration: "4 Months + 1 Month",
      startDate: "Nov 5, 2025",
      time: "11am to 2pm",
    },
  ];

  const activeCourse = courses[activeCard];

  return (
    <section className="lg:px-[120px] lg:py-10 px-4 py-5 bg-gradient-to-br from-[#F4E3FA] from-5% flex xl:flex-row flex-col justify-between items-center pb-20 w-full">
      {/* Left Section - Title and View All Button */}
      <div className="xl:max-w-[300px] flex flex-col items-center xl:items-start justify-center gap-5 flex-shrink-0">
        <h4 className="md:text-4xl text-xl xl:text-left text-center font-black comic-font">
          <span className="text-hoverPrimary">Explore</span> Our Trending
          Courses
        </h4>
        <div className="flex gap-3 items-center">
          <motion.button
            onClick={() => navigate("/course")}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, backgroundColor: "#CA90F2" }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex gap-2 items-center bg-black rounded-lg px-3 py-2 text-white text-sm roboto-font"
          >
            <span>View All</span>
            <span>
              <MdKeyboardArrowRight />
            </span>
          </motion.button>
          <img src="/exploreArrow.png" className="hidden xl:block" alt="" />
        </div>
      </div>

      {/* Right Section - Course Cards */}
      <div className="flex items-center justify-center xl:mt-0 mt-10">
        <div className="flex gap-3 md:gap-6">
          {/* Main Featured Card */}
          <motion.div 
            className={`relative w-64 sm:w-80 h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-lg ${activeCourse.bgColor}`}
            key={activeCard}
            initial={{ scale: 0.95, opacity: 0.8, x: 0 }}
            animate={{ scale: 1, opacity: 1, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Image */}
            <img
              src={activeCourse.image}
              alt={activeCourse.title}
              className="w-full h-full object-cover opacity-30"
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 p-4 sm:p-8 flex flex-col justify-between text-white">
              <div>
                <h3 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-6 leading-tight">
                  {activeCourse.title.split(' ').map((word, index) => (
                    <React.Fragment key={index}>
                      {word}
                      {index < activeCourse.title.split(' ').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
                <button
                  onClick={() => navigate(activeCourse.route)}
                  className="text-yellow-300 text-sm sm:text-base font-medium flex items-center gap-2 hover:text-yellow-200 transition-colors"
                >
                  Explore more <MdKeyboardArrowRight />
                </button>
              </div>

              {/* Course Details */}
              <div className="space-y-2 sm:space-y-3">
                <div className="bg-black bg-opacity-30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">
                  {activeCourse.duration}
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <div className="w-4 sm:w-5 h-3 sm:h-4 bg-orange-400 rounded-sm"></div>
                  <span>{activeCourse.startDate}</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <div className="w-4 sm:w-5 h-4 sm:h-5 border border-white rounded-full flex items-center justify-center">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full"></div>
                  </div>
                  <span>{activeCourse.time}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Course Cards - Better visibility on smaller screens */}
          {courses.map((course, index) => {
            if (index === activeCard) return null;
            
            return (
              <motion.div
                key={course.id}
                className={`relative w-24 sm:w-32 md:w-40 h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-lg bg-gray-100 cursor-pointer hover:shadow-xl transition-all duration-300 ${
                  activeCard === index ? 'ring-4 ring-blue-400' : ''
                }`}
                onClick={() => setActiveCard(index)}
                whileshe whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                
                {/* Vertical Text - Better visibility */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 rotate-90">
                    <span className="text-white font-bold text-lg sm:text-xl md:text-2xl whitespace-nowrap drop-shadow-2xl">
                      {course.title.split(' ').slice(-1)[0]}
                    </span>
                  </div>
                </div>

                {/* Active indicator */}
                {activeCard === index && (
                  <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-400 rounded-full"></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}