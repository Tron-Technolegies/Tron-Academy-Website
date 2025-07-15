import React from "react";
import studentsProjects from "../../utils/studentsProjects.js";

const CodingStudentsProjects = () => {
  return (
    <div className="py-8 bg-gradient-to-b from-white to-gray-50">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          <span className="text-purple-600">Student's</span> Projects
        </h2>
        <p className="mt-2 text-gray-600 text-lg">Explore the amazing work by our talented students!</p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {studentsProjects.slice(0, 4).map((project, index) => (
            <div
              key={project.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:bg-purple-50"
              style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards` }}
            >
              <style>
                {`
                  @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                  }
                `}
              </style>
              <div className="h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90"
                  onError={(e) => {
                    e.target.src = "/api/placeholder/400/240";
                    e.target.alt = "Project image placeholder";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodingStudentsProjects;