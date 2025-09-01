import React from "react";

const FilterInput = () => {
  return (
    <div className="w-64">
      <div className="flex items-center justify-between border rounded-full px-4 py-2 bg-white text-gray-600">
        {/* Left text */}
        <span className="text-sm text-gray-500">Filter By Size</span>

        {/* Divider line */}
        <div className="w-px h-5 bg-gray-300 mx-2"></div>

        {/* Dropdown arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default FilterInput;
