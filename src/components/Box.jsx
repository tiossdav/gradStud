import React from "react";

const Box = ({ title, count, borderColor }) => {
  return (
    <div
      className={`flex flex-col bg-white justify-between items-start rounded-lg border-l-4 h-24 p-4  shadow-sm ${borderColor}`}
    >
      <p className="text-gray-500 text-xs sm:text-sm md:text-sm font-medium whitespace-break-spaces">
        {title}
      </p>
      <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-800">
        {count}
      </h2>
    </div>
  );
};

export default Box;
