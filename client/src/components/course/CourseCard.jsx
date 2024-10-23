import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function CourseCard({ name, months, file }) {
  return (
    <div className="bg-[#B277F3] w-[280px] px-4 py-2 rounded-lg shadow-md shadow-[#B277F3] inter-font text-white flex flex-col justify-between h-[120px] animate-slideInTop">
      <h4 className="font-semibold">{name?.toUpperCase()}</h4>
      <div className="flex justify-between items-center">
        <p className="text-sm font-semibold">{months}</p>
        <motion.a
          href={file}
          download
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, backgroundColor: "black", color: "white" }} // Change color on hover
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }} // Smooth animation
          className="flex gap-2 items-center p-2 rounded-md bg-white text-black text-xs font-semibold "
        >
          <span>View</span>
          <span>
            <IoIosArrowRoundForward />
          </span>
        </motion.a>
      </div>
    </div>
  );
}
