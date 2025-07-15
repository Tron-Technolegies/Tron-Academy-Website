import React, { useState } from 'react';
import studentsProjects from "../../utils/studentsProjects.js";

const MultimediaStudentsProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const multimediaProjects = studentsProjects.filter(
    (project) => project.category === "multimedia"
  );

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="py-8 bg-white">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">
          <span className="text-purple-500">Student's </span> Portfolio
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {multimediaProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="h-48 overflow-hidden cursor-pointer" onClick={() => openModal(project)}>
                <img
                  loading="lazy"
                  src={project.image}
                  alt={project.title || "Student project"}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x240/cccccc/666666?text=Project+Image";
                    e.target.alt = "Project image placeholder";
                  }}
                />
              </div>
              {/* <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {project.title || "Student Project"}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  By {project.studentName}
                </p>
              </div> */}
            </div>
          ))}
        </div>
      </div>

      {/* Modal for large image view */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl max-h-full rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Large image */}
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title || "Student project"}
                className="w-full h-auto max-h-[80vh] object-contain"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/800x600/cccccc/666666?text=Project+Image";
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultimediaStudentsProjects;