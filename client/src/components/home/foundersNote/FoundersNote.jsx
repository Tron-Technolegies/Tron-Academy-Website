import React from 'react';


const FoundersNote = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          Hear From <span className="text-purple-600">Our Founder</span>
        </h2>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-2">
        <div className="md:w-2/4 space-y-6">
          <h3 className="text-xl md:text-2xl font-bold ">
            Beyond Education, We Shape Confidence; 
            <br />
            Beyond Knowledge, We Foster Purpose.
          </h3>
          
          <p className="text-gray-700 font-medium">
            "Before Starting This Company, I Spent Years In The Trenches Of Digital Marketing—Running Campaigns, 
            Analyzing Performance Metrics, And Working With Businesses That Struggled To Stand Out In An 
            Overcrowded Digital Space. I Saw Firsthand How Many Brands Were Wasting Money On Strategies That Didn't 
            Move The Needle.
          </p>
          
          <div className="pt-4">
            <h3 className="text-xl font-bold uppercase">RISHAN</h3>
            <p className="text-purple-600 font-medium">Founder & CEO</p>
          </div>
        </div>
        
        <div className="md:w-2/5">
          <div className="bg-purple-100 rounded-3xl p-4 max-w-sm mx-auto">
            <img 
              src="/founder_img.png" 
              alt="ceo_image" 
              className="rounded-3xl w-full transform scale-x-[-1]" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundersNote;