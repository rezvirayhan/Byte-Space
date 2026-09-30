import React from 'react';

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  activeClass = ' text-[#CED0D3] font-semibold  ',
  inactiveClass = 'text-[#CED0D3] font-semibold ',
  buttonClass = 'bg-white text-[#040819]  hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed',
}) => {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, '...', totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(
          1,
          '...',
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-center space-x-2 mt-12 py-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`w-10 h-10 flex border items-center justify-center  rounded-full transition-colors duration-200 cursor-pointer ${buttonClass}`}
        aria-label="Previous Page"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div className="flex items-center space-x-1.5 sm:space-x-2">
        {getPageNumbers().map((page, index) => {
          if (page === '...') {
            return (
              <span key={`ellipsis-${index}`} className="px-2 py-1 font-medium select-none ">
                ...
              </span>
            );
          }

          const isActive = currentPage === page;

          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-10 h-10 flex text-lg items-center justify-center   rounded-full transition-all duration-200 cursor-pointer font-satoshi ${
                isActive ? activeClass : inactiveClass
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`w-10 h-10 border flex items-center justify-center  rounded-full transition-colors duration-200 cursor-pointer ${buttonClass}`}
        aria-label="Next Page"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
