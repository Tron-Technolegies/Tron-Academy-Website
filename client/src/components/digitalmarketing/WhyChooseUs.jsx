import React from "react";
import "./WhyChooseUs.css";
// import chooseusicon from "../../../public/dm/chooseusicon.png";

const WhyChooseUs = () => {
  return (
    <div className="why_choose_us_container">
      <div className="why_choose_us_contents">
        <h2 className="main_title_color">Why Choose Tron Academy</h2>
        <h3>As Your Digital Marketing Academy In Thrissur</h3>
        <p>
          TRON Academy is revolutionizing the education system concerning
          digital marketing in Kerala to such an extent as 100% placement
          guarantees in full-fledged job-oriented courses. Being the premier
          institute for offering digital marketing course in Thrissur and
          Kerala, it transforms the whole classroom process into real-life
          experiences about digital marketing.
        </p>
        <div className="choose_us_icon">
          {/* <img src={chooseusicon} alt="Choose Tron Academy" /> */}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;