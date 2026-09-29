import React from 'react';

const SearchInput = ({
  value,
  onChange,
  onSearch,
  placeholder = 'Course, topic, creator',
  buttonText = 'Search',
  noButton = false,
  width = 'max-w-xl',
  height = 'h-12',
  className = '',
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex items-center justify-between bg-white rounded-full p-1.5 border border-gray-100 ${width} ${height} ${className}`}
    >
      <div className="flex items-center gap-3 pl-3 flex-1 h-full min-w-0">
        <svg
          className="w-5 h-5 text-gray-400 shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full font-satoshi h-full text-sm text-gray-800 bg-transparent focus:outline-none placeholder-gray-400 pr-3"
        />
      </div>
    </form>
  );
};

export default SearchInput;
