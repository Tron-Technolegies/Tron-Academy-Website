import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import InstructorCard from "./InstructorCard";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function InstructorsSection() {
  const navigate = useNavigate();
  return (
    <div
      className="extra:px-[120px] extra:py-20 px-10 py-5 flex extra:flex-row flex-col-reverse lg:gap-20 gap-10 justify-between items-center extra:bg-no-repeat extra:bg-left bg-cover extra:bg-auto"
      style={{ backgroundImage: "url(/homeinstructorsbg.png)" }}
    >
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-2 gap-y-5">
        <InstructorCard
          img={"/paaru.jpg"}
          name={"Parvathy"}
          position={"Python Developer"}
        />
        <InstructorCard
          img={"/nhala.jpg"}
          name={"Nahala"}
          position={"Social Media Specialist"}
        />
        <InstructorCard
          img={"/neha.jpg"}
          name={"Neha"}
          position={"Content Marketing"}
        />
        <InstructorCard
          img={"/dil.jpg"}
          name={"Dilshad"}
          position={"Graphic Designer"}
        />
        <InstructorCard
          img={"/ashwin.jpg"}
          name={"Aswin"}
          position={"Front-End Developer"}
        />
        <InstructorCard
          img={"/alex.jpg"}
          name={"Alex"}
          position={"SEO Analyst"}
        />
      </div>
      <div className="extra:max-w-[365px] flex flex-col items-center extra:items-start gap-3">
        <h4 className="md:text-4xl text-2xl text-center font-black comic-font">
          <span className="text-hoverPrimary">Our</span> Instructors
        </h4>
        <p className="text-[#000000BF] text-sm roboto-font extra:text-left text-center">
          At Tron Academy, we strive to bring together the best professors for
          the best courses
        </p>
        <div className="flex extra:flex-row flex-col-reverse gap-2 items-end">
          <img
            src="/homeinstructorsArrow.png"
            className="md:w-[123px] md:h-[110px] w-[70px] h-[63px]"
          ></img>
          <motion.button
            onClick={() => navigate("/team")}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, backgroundColor: "#CA90F2" }} // Change color on hover
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }} // Smooth animation
            className="bg-black p-3 rounded-lg flex gap-2 items-center text-white"
          >
            <span className="text-sm roboto-font">All Instructors</span>
            <span>
              <MdKeyboardArrowRight />
            </span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
