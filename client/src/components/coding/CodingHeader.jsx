import React from 'react'

import { handleChatClick } from '../../utils/whatsApp';

const CodingHeader = () => {
  return (
   <div className='header_container'>
      <div className="header_contents">
        <div className="header_text">
          <h1>
            <span className='main_title_color'>Level Up Your Career </span> In Kerala
            <br />With 100% Placement Guarantee.
          </h1>
          <p>
            TRON Academy Transforms Your Career with the Most Practical Digital Marketing course.
            <br />Are you ready to secure your career with the most job-ready digital marketing course in Kerala?
          </p>
          <button className="cta_button" onClick={() => handleChatClick("know more about coding course")} >Learn & Earn</button>
        </div>
      </div>
      <div className="accent_triangle icon_top_left"></div>
      <div className="accent_triangle icon_bottom_right"></div>
      <div className="accent_circle"></div>
    </div>
  )
}

export default CodingHeader
