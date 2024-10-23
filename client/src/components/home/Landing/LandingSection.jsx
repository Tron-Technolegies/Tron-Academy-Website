import React, { useRef } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { handleChatClick } from "../../../utils/whatsApp";
import { motion, useInView } from "framer-motion";

export default function LandingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <div className="lg:px-[120px] lg:py-10 px-10 py-5 flex lg:flex-row flex-col gap-5 justify-between items-center bg-gradient-to-br from-[#F4E3FA] from-5% ...">
      <div className="flex flex-col gap-5">
        <motion.h1
          ref={ref}
          className="lg:text-5xl md:text-4xl text-3xl text-primary comic-font font-bold flex flex-col gap-3"
          initial={{ rotateX: -180, opacity: 0 }}
          animate={
            isInView
              ? {
                  rotateX: 0, // First rotation animation
                  opacity: 1,
                  // y: [0, 5, 0], // After the rotation, start a continuous translation
                }
              : {}
          }
          transition={{
            rotateX: {
              duration: 1, // Spin duration
              ease: [0.42, 0, 0.58, 1],
            },
            opacity: {
              duration: 1,
              delay: 0.2,
            },
            // y: {
            //   delay: 1.2, // Starts the translation after the spin finishes
            //   duration: 2, // Duration for one back-and-forth movement
            //   repeat: Infinity, // Infinite loop
            //   repeatType: "reverse", // Moves back and forth
            //   ease: "easeInOut",
            // },
          }}
          style={{ transformStyle: "preserve-3d", display: "" }}
        >
          OWN YOUR PATH AND DEFINE{" "}
          <span className="bg-[#FDCCFB] px-1 w-fit">SUCCESS</span>
        </motion.h1>
        <p className="text-[#5E5E5E] text-sm lg:text-base max-w-[500px] text-justify roboto-font">
          Change your life in just few months... if you're ready to Focus on
          mastering the right skills with the best guidance at TRON Academy
        </p>

        <div className="flex gap-5 items-center">
          <motion.button
            onClick={() => handleChatClick("enroll in one of your courses.")}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, backgroundColor: "#CA90F2" }} // Change color on hover
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }} // Smooth animation
            className="flex gap-2 items-center bg-black w-fit h-fit text-white md:p-4 p-2 rounded-lg"
          >
            <span className="text-sm">Enroll Now</span>
            <span>
              <MdKeyboardArrowRight />
            </span>
          </motion.button>
          <motion.img
            className="md:max-w-[210px] md:max-h-[113px] max-w-[150px] max-h-[81px]"
            src="/bookingPercent.png"
            initial={{ rotate: 0 }} // Initial rotation state
            animate={isInView ? { rotate: [-15, 15] } : {}} // Swing from -15 to 15 degrees
            transition={{
              duration: 2, // Duration of the swing
              repeat: Infinity, // Infinite swing loop
              repeatType: "reverse", // Swing back and forth
              ease: "easeInOut", // Smooth ease-in and ease-out for pendulum effect
            }}
          ></motion.img>
        </div>
      </div>
      <motion.img
        ref={ref}
        className="md:max-w-[603px] md:h-[531px] max-w-[350px] h-[308px]"
        src="/home1.png"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1, x: [0, 20, 0] } : {}}
        transition={{
          scale: { duration: 1.2, ease: "easeOut" }, // First scaling animation
          x: {
            repeat: Infinity, // Infinite repeat for translation
            repeatType: "reverse", // Moves back and forth
            duration: 2, // Speed of the translation
            ease: "easeInOut",
            delay: 1.2, // Start after the initial scaling finishes
          },
          opacity: { duration: 1.2, ease: "easeOut" },
        }}
      ></motion.img>
    </div>
  );
}
