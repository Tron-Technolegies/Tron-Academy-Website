import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { handleChatClick } from "../../utils/whatsApp";

export default function SmallHeader({ setSmallBar }) {
  const [showCourseDropdown, setShowCourseDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCourseDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="lg:hidden w-full bg-white py-5">
      <div className="flex flex-col gap-5 items-start px-10">
        <NavLink
          to={"/"}
          className="border-b w-full py-2 border-hoverPrimary hover-navlink hover-animation hover:drop-shadow-navlink text-xl"
          onClick={() => setSmallBar(false)}
        >
          Home
        </NavLink>
        <div className="relative w-full" ref={dropdownRef}>
          <div
            className="flex items-center gap-1 cursor-pointer border-b w-full py-2 border-hoverPrimary hover-navlink hover-animation hover:drop-shadow-navlink text-xl"
            onClick={() => setShowCourseDropdown(!showCourseDropdown)}
          >
            <span>Course</span>
            <IoIosArrowDown
              className={`transition-transform ${
                showCourseDropdown ? "rotate-180" : ""
              }`}
            />
          </div>
          {showCourseDropdown && (
            <div className="bg-white shadow-md rounded-md py-2 w-full z-50">
              <NavLink
                to="/codingcourseinkerala"
                className="block px-4 py-2 hover:bg-gray-100 text-base border-b border-hoverPrimary"
                onClick={() => {
                  setShowCourseDropdown(false);
                  setSmallBar(false);
                }}
              >
                Coding
              </NavLink>
              <NavLink
                to="/BestDigitalMarketingCourseInKerala"
                className="block px-4 py-2 hover:bg-gray-100 text-base border-b border-hoverPrimary"
                onClick={() => {
                  setShowCourseDropdown(false);
                  setSmallBar(false);
                }}
              >
                Digital Marketing
              </NavLink>
              <NavLink
                to="/GraphicdesignCourseinKerala"
                className="block px-4 py-2 hover:bg-gray-100 text-base border-b border-hoverPrimary"
                onClick={() => {
                  setShowCourseDropdown(false);
                  setSmallBar(false);
                }}
              >
                Multimedia
              </NavLink>
            </div>
          )}
        </div>
        <NavLink
          to={"/blog"}
          className="border-b w-full py-2 border-hoverPrimary hover-navlink hover-animation hover:drop-shadow-navlink text-xl"
          onClick={() => setSmallBar(false)}
        >
          Blog
        </NavLink>
        {/* <NavLink
          to={"/team"}
          className="border-b w-full py-2 border-hoverPrimary hover-navlink hover-animation hover:drop-shadow-navlink text-xl"
          onClick={() => setSmallBar(false)}
        >
          Our Team
        </NavLink> */}
        <NavLink
          to={"/about"}
          className="border-b w-full py-2 border-hoverPrimary hover-navlink hover-animation hover:drop-shadow-navlink text-xl"
          onClick={() => setSmallBar(false)}
        >
          About
        </NavLink>
        <button
          onClick={() => {
            handleChatClick("know more about Tron Academy");
            setSmallBar(false);
          }}
          className="rounded-lg px-3 py-2 bg-primary hover:bg-hoverPrimary hover-animation text-white hover:py-[10px] text-xl"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}