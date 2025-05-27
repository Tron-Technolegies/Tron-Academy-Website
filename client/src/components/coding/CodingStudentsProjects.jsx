import React from "react";
import studentsProjects from "../../utils/studentsProjects.js";

const CodingStudentsProjects = () => {
  return (
    <div className="py-8 bg-white">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">
          <span className="text-purple-500">Student's</span> Projects
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentsProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "/api/placeholder/400/240";
                    e.target.alt = "Project image placeholder";
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  By {project.studentName}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodingStudentsProjects;
