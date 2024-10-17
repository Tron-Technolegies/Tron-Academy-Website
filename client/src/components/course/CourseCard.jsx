import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function CourseCard({ name, months }) {
  return (
    <div>
      <h4>{name}</h4>
      <div>
        <p>{months}</p>
        <button>
          <span>View</span>
          <span>
            <IoIosArrowRoundForward />
          </span>
        </button>
      </div>
    </div>
  );
}
