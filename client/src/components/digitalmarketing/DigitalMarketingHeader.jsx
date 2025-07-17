import React from 'react';
import "../../components/digitalmarketing/DigitalMarketingHeader.css";
import "../../utils/whatsApp";
import { handleChatClick } from '../../utils/whatsApp';

const DigitalMarketingHeader = () => {
  return (
    <div className='header_container'>
      <div className="header_contents">
        <div className="header_text">
          <h1>
            <span className='main_title_color'>Best Digital Marketing Course </span> In Kerala
            <br />With 100% Placement Guarantee.
          </h1>
          <p>
            TRON Academy Transforms Your Career with the Most Practical Digital Marketing Course.
            <br /> Are you ready to secure your career with the most job-ready digital marketing course in Kerala?

          </p>
          <div className="button_container">
            <button 
              className="cta_button" 
              onClick={() => handleChatClick("know more about digital marketing course")}
            >
              Learn & Earn
            </button>
            <button 
              className="cta_button" 
              onClick={() => handleChatClick("know more about digital marketing course")}
            >
              Launch Your Career
            </button>
          </div>
        </div>
      </div>
      <div className="accent_triangle icon_top_left"></div>
      <div className="accent_triangle icon_bottom_right"></div>
      <div className="accent_circle"></div>
    </div>
  );
};

export default DigitalMarketingHeader;