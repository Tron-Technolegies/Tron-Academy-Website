import React from 'react';

const Mentors = ({ mentors, title = "Mentorship From Industry Experts" }) => {
  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">
        {title}
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="bg-white rounded-lg shadow-md p-3 sm:p-4 text-center">
            <img
              src={mentor.image}
              alt={mentor.name}
              className="w-full h-32 sm:h-40 object-cover rounded-t-lg mb-3 sm:mb-4"
            />
            <h2 className="text-base sm:text-lg font-semibold">
              {mentor.designation}
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              {mentor.name}
            </p>
            <div className="flex justify-center gap-2 sm:gap-3 mt-2 sm:mt-3">
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.42 2.88 8.14 6.84 9.48.5.1.68-.22.68-.48 0-.24-.02-.86-.02-1.68-2.78.6-3.36-1.34-3.36-1.34-.46-1.16-1.12-1.46-1.12-1.46-.92-.62.06-.62.06-.62 1.02.08 1.56 1.04 1.56 1.04.9 1.54 2.36 1.1 2.94.84.1-.66.36-1.1.66-1.36-2.22-.24-4.56-1.1-4.56-4.92 0-1.08.38-1.98 1.02-2.68-.1-.24-.44-1.28.1-2.66 0 0 .84-.26 2.76 1.02 1.6-.44 3.32-.44 4.92 0 1.92-1.28 2.76-1.02 2.76-1.02.54 1.38.2 2.42.1 2.66.64.7 1.02 1.6 1.02 2.68 0 3.84-2.34 4.68-4.56 4.92.36.32.68.94.68 1.5 0 1.08-.02 1.96-.02 2.22 0 .26.18.58.68.48A10 10 0 0012 2.04z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-1.5 2.5h-13v13h13v-13zm-9.5 2h3v3h-3v-3zm0 4.5h3v3h-3v-3zm4.5-4.5h3v3h-3v-3zm0 4.5h3v3h-3v-3z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentors;