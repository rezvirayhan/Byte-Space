import React from 'react';
import Button from '../../ui/Button';

export default function Short() {
  const pillButtonStyle =
    'w-full sm:w-auto bg-white text-gray-700 border-2 border-[#CED0D3] rounded-full px-3.5 sm:px-4 py-2 hover:bg-gray-50 text-xs sm:text-sm font-medium gap-2 shrink-0 transition-all justify-center';

  return (
    <div className="max-w-[1460px] mx-auto p-2 sm:p-4 md:p-6 font-sans w-full">
      <div className="w-full px-2 sm:px-4 py-3 bg-white">
        <div className="grid grid-cols-2 sm:flex sm:items-center sm:justify-between gap-2.5 sm:gap-3 font-satoshi w-full">
          <div className="contents sm:flex sm:items-center sm:gap-3">
            <Button className={pillButtonStyle}>
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-700 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              <span>Filter</span>
            </Button>

            <Button className={pillButtonStyle}>
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-700 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4 19h4v-7H4v7zm6 0h4V5h-4v14zm6 0h4v-11h-4v11z" />
              </svg>
              <span>Level</span>
            </Button>

            <Button className={pillButtonStyle}>
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-700 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 4h6v6H4zM14 4l3 6 3-6zM14 14h6v6h-6zM7 17a3 3 0 100-6 3 3 0 000 6z"
                />
              </svg>
              <span>Category</span>
            </Button>
          </div>

          <div className="contents sm:flex sm:items-center">
            <Button className={pillButtonStyle}>
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-700 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h12M3 18h6" />
              </svg>
              <span>Most relevant</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
