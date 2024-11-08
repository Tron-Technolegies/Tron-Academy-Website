import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ExploreCourseCard({ icon, name }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const navigate = useNavigate();
  return (
    <div className="flex flex-col relative w-[200px] h-[400px] overflow-hidden">
      <motion.img
        ref={ref}
        src={icon}
        className="w-[200px] h-[400px] object-cover rounded-lg"
        initial={{ opacity: 0, scale: 0.5 }} // Start with opacity 0 and scale 50% of original size
        animate={isInView ? { opacity: 1, scale: 1 } : {}} // Fade in and scale to 100%
        transition={{
          opacity: { duration: 1 }, // Duration for the fade-in
          scale: { duration: 1, ease: "easeOut" }, // Duration and easing for the scale-in
        }}
      ></motion.img>
      <motion.button
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1, backgroundColor: "#CA90F2" }} // Change color on hover
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }} // Smooth animation
        className="absolute p-2 rounded-lg bg-black text-white bg-opacity-60 w-[200px] bottom-0"
        onClick={() => navigate("/course")}
      >
        {name}
      </motion.button>
    </div>
  );
}
