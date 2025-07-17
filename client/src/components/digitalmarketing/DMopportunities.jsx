import React from "react";
import {
  marketingOpportunities,
  otherRoles,
} from "../../utils/dmOpportunities";
import { handleChatClick } from '../../utils/whatsApp';

const DMopportunities = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
        Digital Marketing Opportunities
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {marketingOpportunities.map((opportunity) => (
          <div
            key={opportunity.id}
            className="bg-purple-50 rounded-lg p-4 sm:p-6 flex flex-col"
          >
            <div className="mb-3 sm:mb-4">
              <img
                src={opportunity.image}
                alt={opportunity.title}
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
              {opportunity.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              {opportunity.description}
            </p>
          </div>
        ))}

        {/* "And Many More" card */}
        <div className="bg-purple-600 text-white rounded-lg p-4 sm:p-6 flex flex-col">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            And Many More.....
          </h3>
          <p className="text-sm sm:text-base mb-3 sm:mb-4">
            The digital marketing field is extensive, featuring roles such as{" "}
            {otherRoles.join(" ")}
          </p>

          <button
            onClick={() => handleChatClick("know more about digital marketing course")}
            className="mt-auto bg-white text-purple-600 py-1 sm:py-2 px-3 sm:px-4 rounded-md text-sm sm:text-base hover:bg-purple-100 transition-colors"
          >
            Know more
          </button>
        </div>
      </div>
    </div>
  );
};

export default DMopportunities;