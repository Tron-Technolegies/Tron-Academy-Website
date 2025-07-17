import React from 'react'

import { handleChatClick } from '../../utils/whatsApp';

const CodingHeader = () => {
  return (
   <div className='header_container'>
      <div className="header_contents">
        <div className="header_text">
          <h1>
            <span className='main_title_color'>Level Up Your Career </span> 
            <br /> with the best coding course in kerala.
          </h1>
          <p>
            At Tron Academy, we transform beginners into skilled coders and future-ready developers through hands-on experience training in Python, Data Science, Web Development, and more. Whether you dream of becoming a Python expert in Thrissur, a Data Scientist in Kerala, or a Web Developer, We don’t provide ordinary coding courses – we deliver industry domination programs.

          </p>
          <button className="cta_button" onClick={() => handleChatClick("know more about coding course")} >Explore Courses</button>
        </div>
      </div>
      <div className="accent_triangle icon_top_left"></div>
      <div className="accent_triangle icon_bottom_right"></div>
      <div className="accent_circle"></div>
    </div>
  )
}

export default CodingHeader
