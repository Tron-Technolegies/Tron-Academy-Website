import React from 'react';
import "../../components/digitalmarketing/DigitalMarketingHeader.css";

const DigitalMarketingHeader = () => {
  return (
    <div className='dm_header_container'>
      <div className="dm_header_contents">
        <div className="dm_header_text">
          <h1>
            <span className='main_title_color'>Best Digital Marketing Course </span> In Kerala
            <br />With 100% Placement Guarantee.
          </h1>
          <p>
            TRON Academy Transforms Your Career with the Most Practical Digital Marketing course.
            <br />Are you ready to secure your career with the most job-ready digital marketing course in Kerala?
          </p>
          <button className="dm_cta_button">Learn & Earn</button>
        </div>
      </div>
      <div className="dm_accent_triangle icon_top_left"></div>
      <div className="dm_accent_triangle icon_bottom_right"></div>
      <div className="dm_accent_circle"></div>
    </div>
  );
};

export default DigitalMarketingHeader;