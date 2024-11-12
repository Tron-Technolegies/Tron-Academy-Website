import React from "react";
import { handleChatClick } from "../../utils/whatsApp";
import { motion } from "framer-motion";

export default function AboutHeader() {
  return (
    <div
      className="lg:px-[120px] lg:py-20 px-10 py-5 landing-height bg-center flex lg:flex-row flex-col gap-10 justify-between items-center relative"
      style={{ backgroundImage: `url('/about/about-bg.png')` }}
    >
      <div className="flex flex-col gap-20 max-w-[700px] justify-start">
        <div className="flex flex-col gap-5">
          <h3 className="comic-font md:text-4xl text-2xl font-black">
            <span className="text-[#B277F3]">About </span>Us
          </h3>
          <p className="inter-font md:text-lg text-base">
            Tron Academy isn’t for everyone, only for the ambitious. If you want
            to coast through theory, you’re in the wrong place. We deliver
            real-world projects and an impressive portfolio that will make
            employers take notice. The choice is yours: step up or get
            overlooked. The clock is ticking.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h4 className="roboto-font md:text-3xl text-xl font-semibold">
            You Want Success? We Make It Happen!
          </h4>
          <div className="text-[#5A5A5A] inter-font flex gap-10">
            <div className="flex gap-2 items-center">
              <p className="md:text-[32px] text-[20px] font-semibold">5/5</p>
              <p className="md:text-[15px] text-[12px] max-w-[75px]">
                Client Happiness
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="md:text-[32px] text-[20px] font-semibold">700+</p>
              <p className="md:text-[15px] text-[12px] max-w-[75px]">
                Projects Completed
              </p>
            </div>
          </div>
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "black",
            }} // Change color on hover
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }} // Smooth animation
            onClick={() => handleChatClick("know more about Tron Academy")}
            className="bg-[#A157DC] w-fit px-5 py-3 md:text-base text-sm rounded-s-full rounded-e-full text-white"
          >
            Contact Us
          </motion.button>
        </div>
      </div>
      <div>
        <motion.img
          src="/about/logo.png"
          className="md:max-w-[397px] md:max-h-[168px] max-w-[250px] max-h-[106px]"
        ></motion.img>
      </div>
      <motion.img
        src="/about/robot.png"
        className="absolute md:w-[67px] md:h-[85px] w-[45px] h-[57px] sm:right-20 sm:bottom-10 top-5 right-0"
        animate={{
          rotate: [-15, 15], // Swing between -15 to 15 degrees
          x: [0, 5, 0], // Translate 20px left and right
        }}
        transition={{
          rotate: {
            repeat: Infinity, // Infinite loop
            repeatType: "reverse", // Back and forth motion
            duration: 1, // Duration of each swing
            ease: "easeInOut", // Smooth pendulum effect
          },
          x: {
            repeat: Infinity, // Infinite loop
            repeatType: "reverse", // Moves back and forth
            duration: 1, // Sync with the swing duration
            ease: "easeInOut", // Smooth easing
          },
        }}
      ></motion.img>
    </div>
  );
}
