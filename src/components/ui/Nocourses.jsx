import React from 'react';

const NoCourses = ({ onReset }) => {
  return (
    <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
      <p className="text-gray-500 text-sm">No courses found in this category.</p>
      <button
        onClick={onReset}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full text-xs font-semibold hover:bg-blue-700 transition-all cursor-pointer"
      >
        Show Featured Courses
      </button>
    </div>
  );
};

export default NoCourses;
