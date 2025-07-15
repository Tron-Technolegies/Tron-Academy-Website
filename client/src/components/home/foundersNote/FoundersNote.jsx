import React from 'react';
import rishaan from "../../../../public/founders/rishaan.jpg";
import rizwan from "../../../../public/founders/rizwan.jpg";
import muzammil from "../../../../public/founders/muzammil.jpg";

const FoundersNote = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Meet the <span style={{color: '#a157dc'}}>Founders</span> </h2>
      </div>
             
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <img
          src={rishaan}
          alt="Rishaan"
          className="rounded-3xl object-cover w-[300px] h-[600px]"
        />
         <img
          src={muzammil}
          alt="Muzammil"
          className="rounded-3xl object-cover w-[300px] h-[600px]"
        />
        <img
          src={rizwan}
          alt="Rizwan"
          className="rounded-3xl object-cover w-[300px] h-[600px]"
        />
              
      </div>
    </div>
  );
};

export default FoundersNote;