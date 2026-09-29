import React from 'react';

const SectionTitle = ({ title, heading, children, width = 'w-auto', className = '', ...props }) => {
  return (
    <div
      className={`
        font-poppins
        flex
        flex-col
        ${width}
        ${className}
      `}
      {...props}
    >
      {title && (
        <span className="text-md sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight sm:leading-snug text-inherit">
          {title}
        </span>
      )}

      {heading && (
        <h1 className="text-md sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight sm:leading-snug text-inherit">
          {heading}
        </h1>
      )}

      {children}
    </div>
  );
};

export default SectionTitle;
