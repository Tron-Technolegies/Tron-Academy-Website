import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import InstructorCard from "./InstructorCard";

export default function InstructorsSection() {
  return (
    <div
      className="extra:px-[120px] extra:py-20 px-10 py-5 flex extra:flex-row flex-col-reverse gap-20 justify-between items-center extra:bg-no-repeat extra:bg-left bg-cover extra:bg-auto"
      style={{ backgroundImage: "url(/homeinstructorsbg.png)" }}
    >
      <div className="grid grid-cols-3 gap-x-2 gap-y-5">
        <InstructorCard
          img={"/instructor1.jpg"}
          name={"Dilshad"}
          position={"Designer"}
        />
        <InstructorCard
          img={"/instructor2.jpg"}
          name={"Shahma"}
          position={"Designer"}
        />
        <InstructorCard
          img={"/instructor3.jpg"}
          name={"Jasim"}
          position={"Digital Marketing"}
        />
        <InstructorCard
          img={"/instructor4.jpg"}
          name={"Nehla"}
          position={"Social Media Manager"}
        />
        <InstructorCard
          img={"/instructor5.jpg"}
          name={"Parvathy"}
          position={"Python Developer"}
        />
        <InstructorCard
          img={"/instructor6.jpg"}
          name={"Risan"}
          position={"Flutter Developer"}
        />
      </div>
      <div className="extra:max-w-[365px] flex flex-col items-center extra:items-start gap-3">
        <h4 className="text-4xl font-black roboto-font">
          <span className="text-hoverPrimary">Our</span> Instructors
        </h4>
        <p className="text-[#000000BF] text-sm roboto-font">
          At Tron Academy, we strive to bring together the best professors for
          the best courses
        </p>
        <div className="flex extra:flex-row flex-col-reverse gap-2 items-end">
          <img src="/homeinstructorsArrow.png"></img>
          <button className="bg-black p-3 rounded-lg flex gap-2 items-center text-white hover:bg-hoverPrimary hover-animation">
            <span className="text-sm roboto-font">All Instructors</span>
            <span>
              <MdKeyboardArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
