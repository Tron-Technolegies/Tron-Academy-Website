import React, { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion, useInView, useAnimation } from "framer-motion";
import ContactPopup from "../../ContactPopup";

export default function LandingSection() {
  const controls = useAnimation();
  const spanControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls
        .start({
          y: 0, // Final position
          transition: { duration: 0.5, ease: "easeOut" },
        })
        .then(() => {
          // Faster rotation on the x-axis
          spanControls
            .start({
              rotateX: [0, 1080], // Two full rotations
              transition: { duration: 0.5, ease: "easeInOut" }, // Faster rotation
            })
            .then(() => {
              // After rotation completes, tilt on the z-axis
              spanControls.start({
                rotateZ: [0, 15, 0], // Tilt to 15 degrees and back
                transition: { duration: 2.5, ease: "easeInOut" },
              });
            });
        });
    }
  }, [controls, spanControls, isInView]);

  const handleEnrollClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div
      className="lg:px-[120px] py-10 px-5 landing-height bg-no-repeat bg-cover md:bg-center bg-left flex flex-col justify-center items-center relative"
      style={{ backgroundImage: `url("/landing.png")` }}
    >
      <div className="flex flex-col gap-10 items-center md:max-w-[750px] max-w-[400px]">
        <motion.h1
          ref={ref}
          animate={controls}
          initial={{ y: -200 }} // Start above the viewport
          className="text-[#A23CC6] md:text-5xl text-3xl font-bold comic-font text-center inline-block"
        >
          OWN YOUR PATH AND DEFINE
          <motion.h2
            animate={spanControls}
            className="relative inline-block ms-4"
          >
            {" "}
            SUCCESS
            <img src="/underline.png" className="absolute"></img>
          </motion.h2>
        </motion.h1>
        <p className="font-medium text-center ">Ready to take the first step? Let’s make it happen</p>
        <motion.button
          onClick={handleEnrollClick}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, backgroundColor: "#CA90F2" }} // Change color on hover
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }} // Smooth animation
          className="flex items-center gap-3 bg-black text-white px-4 py-2 rounded-lg"
        >
          Book A Free Consultation
          <span>
            <MdKeyboardArrowRight />
          </span>
        </motion.button>
        <motion.img
          src="/landing-icon1.png"
          draggable={false}
          className="absolute bottom-0 md:left-6 left-0 lg:w-[414px] object-cover w-[200px]"
          initial={{ scale: 0.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        ></motion.img>
        <motion.img
          src="/landing-icon2.png"
          draggable={false}
          className="absolute right-0 top-0 lg:w-[256px] object-cover w-[150px]"
          initial={{ scale: 0.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        ></motion.img>
      </div>
      
      {showPopup && <ContactPopup onClose={handleClosePopup} />}
    </div>
  );
}