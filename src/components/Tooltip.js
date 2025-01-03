import React from 'react';

const Tooltip = ({ text, children }) => {
  return (
    <div className="relative group">
      {children}
      <span className="absolute hidden group-hover:block bg-gray-700 text-white text-sm p-2 rounded">
        {text}
      </span>
    </div>
  );
};

export default Tooltip;