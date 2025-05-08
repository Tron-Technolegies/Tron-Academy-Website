import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import ExploreCourseCard from "./ExploreCourseCard";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function ExploreCourseSection() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const courses = [
    { icon: "/digital.jpg", name: "Digital Marketing" },
    { icon: "/coding.jpg", name: "Coding" },
    { icon: "/multimedia.jpg", name: "Multimedia" },
  ];

  return (
    <div className="lg:px-[120px] lg:py-10 px-10 py-5 bg-gradient-to-br from-[#F4E3FA] from-5% flex xl:flex-row flex-col justify-between item-center pb-20">
      <div className="xl:max-w-[300px] flex flex-col items-center xl:items-start justify-center gap-5">
        <h4 className="md:text-4xl text-2xl xl:text-left text-center font-black comic-font">
          <span className="text-hoverPrimary">Explore</span> Our Trending Course
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
      <div className="flex items-center justify-center xl:mt-0 mt-10">
        <div className="flex gap-3">
          {courses.map((course, index) => (
            <ExploreCourseCard
              key={index}
              icon={course.icon}
              name={course.name}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}