import React from 'react';
import "../digitalmarketing/DMNextBatchCards.css";
import advancebatch from "../../../public/dm/dm_advance_batch.png"
import basicbatch from "../../../public/dm/dm_basic_batch.png"
import { handleChatClick } from '../../utils/whatsApp';
const DMNextBatchCards = () => {
  return (
    <div className="dm-next-batch-cards">
      <div className="dm-card">
        <img 
          src={advancebatch} 
          alt="Advanced Digital Marketing" 
          className="dm-card-image"
        />
        <div className="dm-card-content">
          <div className="dm-card-info">
            <div className="dm-info-item">
              <span className="dm-icon dm-calendar-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </span>
              <span>5 Months</span>
            </div>
            <div className="dm-info-item">
              <span className="dm-icon dm-online-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </span>
              <span>Online | Offline</span>
            </div>
          </div>
          
          <h3 className="dm-card-title">Advanced Digital Marketing</h3>
          <p className="dm-card-description">Establish a Strong Foundation and develop into a strategist adept at orchestrating digital success.</p>
          
          <button className="dm-know-more-btn" onClick={() => handleChatClick("know more about advance digital marketing course")}>Know more</button>
        </div>
      </div>

      <div className="dm-card">
        <img 
          src={basicbatch}
          alt="Basic Digital Marketing" 
          className="dm-card-image"
        />
        <div className="dm-card-content">
          <div className="dm-card-info">
            <div className="dm-info-item">
              <span className="dm-icon dm-calendar-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </span>
              <span>3 Months</span>
            </div>
            <div className="dm-info-item">
              <span className="dm-icon dm-online-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </span>
              <span>Online | Offline</span>
            </div>
          </div>
          
          <h3 className="dm-card-title">Basic <br /> Digital Marketing</h3>
          <p className="dm-card-description">Establish a Strong Foundation and develop into a strategist adept at orchestrating digital success.</p>
          
          <button className="dm-know-more-btn" onClick={() => handleChatClick("know more about basic digital marketing course")} >Know more</button>
        </div>
      </div>
    </div>
  );
};

export default DMNextBatchCards;