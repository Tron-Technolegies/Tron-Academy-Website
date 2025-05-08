import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ExploreCourseCard({ icon, name, isActive, onClick }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const navigate = useNavigate();
  
  return (
    <motion.div 
      className="flex flex-col relative w-[200px] h-[400px] overflow-hidden cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
    >
      <motion.img
        ref={ref}
        src={icon}
        className={`w-[200px] h-[400px] object-cover rounded-lg transition-all duration-300 ${isActive ? 'ring-4 ring-hoverPrimary' : 'opacity-80'}`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{
          opacity: { duration: 1 },
          scale: { duration: 1, ease: "easeOut" },
        }}
      />
      <motion.button
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1, backgroundColor: "#CA90F2" }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
        className={`absolute p-2 rounded-lg text-white w-[200px] bottom-0 ${isActive ? 'bg-hoverPrimary' : 'bg-black bg-opacity-60'}`}
        onClick={(e) => {
          e.stopPropagation();
          navigate("/course");
        }}
      >
        {name}
      </motion.button>
    </motion.div>
  );
}