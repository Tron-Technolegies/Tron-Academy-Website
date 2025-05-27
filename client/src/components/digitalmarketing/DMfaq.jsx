import React, { useState } from 'react';
import { dmfaq } from '../../utils/faq';
import { FaPlus, FaMinus } from 'react-icons/fa';

const DMfaq = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">
          Frequently Ask Questions
        </h2>
        <p className="text-gray-600 mt-2">
          About Our Digital Marketing Courses In Kerala
        </p>
      </div>

      {/* Accordion Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {dmfaq.map(({ id, question, answer }) => (
          <div
            key={id}
            className="bg-white shadow-md rounded-xl p-6 cursor-pointer transition-all duration-300"
            onClick={() => toggleFAQ(id)}
          >
            <div className="flex items-start gap-4">
              <span className="text-purple-800 mt-1">
                {activeId === id ? <FaMinus /> : <FaPlus />}
              </span>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">{question}</h3>
                {activeId === id && answer && (
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                    {answer}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DMfaq;
