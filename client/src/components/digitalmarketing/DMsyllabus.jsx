import React, { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';
import { BsBook } from 'react-icons/bs';
import dmSyllabus from "../../utils/dmSyllabus";

const DMsyllabus = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (monthIndex, topicIndex) => {
    const key = `${monthIndex}-${topicIndex}`;
    setExpandedSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dmSyllabus.map((monthData, monthIndex) => (
          <div 
            key={monthIndex} 
            className={`bg-white rounded-lg shadow-sm overflow-hidden ${
              monthIndex >= 2 ? 'md:-mt-4' : ''
            }`}
          >
            {/* Month Header */}
            <div 
              className="px-4 py-3 flex items-center gap-2"
              style={{
                background: `linear-gradient(to right, #A23CC6, #8B32A8)`
              }}
            >
              <BsBook className="text-white text-lg" />
              <h2 className="text-white font-semibold text-lg">{monthData.month}</h2>
            </div>

            {/* Topics List */}
            <div style={{ backgroundColor: '#F5E9FA' }}>
              {monthData.topics.map((topic, topicIndex) => (
                <div 
                  key={topicIndex} 
                  className="border-b last:border-b-0"
                  style={{ borderColor: '#E8D4F0' }}
                >
                  <button
                    onClick={() => toggleSection(monthIndex, topicIndex)}
                    className="w-full px-4 py-4 text-left hover:bg-[#E8D4F0] transition-colors duration-200 flex items-center justify-between group"
                  >
                    <span className="text-gray-800 font-medium pr-4">{topic}</span>
                    <IoChevronDown 
                      className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
                        expandedSections[`${monthIndex}-${topicIndex}`] ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {/* Expandable Content */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedSections[`${monthIndex}-${topicIndex}`] ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-4 pb-4 pt-2 bg-white">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        This topic covers comprehensive learning materials and practical exercises for {topic.toLowerCase()}.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DMsyllabus;