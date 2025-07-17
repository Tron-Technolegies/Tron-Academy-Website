import React from "react";
import "../multimedia/MultimediaHeader.css";

import { handleChatClick } from "../../utils/whatsApp";
const MultimediaHeader = () => {
  return (
    <div className="multimedia_container ">
      <div className="header_contents">
        <div className="header_text">
          <h1>
            <span className="main_title_color">Introducing </span>
            <br></br> <span id="graphic-design"> Graphic design Course</span> in
            Kerala
            <br />
          </h1>
          <p id="graphic-design-paragraph">
            TRON Academy Transforms Your Career with the Most Practical Digital
            Marketing course.
            <br />
            Are you ready to secure your career with the most job-ready digital
            marketing course in Kerala?
          </p>
          <button
            className="cta_button multimedia_btn"
            onClick={() =>
              handleChatClick("know more about multimedia courses")
            }
          >
            Enquiry Now
          </button>
        </div>
      </div>
      <div className="accent_triangle icon_top_left"></div>
      <div className="accent_triangle icon_bottom_right"></div>
      <div className="accent_circle"></div>
    </div>
  );
};

export default MultimediaHeader;
