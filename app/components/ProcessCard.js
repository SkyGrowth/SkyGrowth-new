import React from 'react';

const ProcessesCard = ({ title, children }) => {
  return (
    <div className="flex items-center justify-center flex-col bg-white p-6 w-[320px] h-[320px] shadow-lg rounded-2xl transition-transform transform hover:scale-105 hover:shadow-2xl">
      <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-3 text-sm font-extralight">{children}</p>
    </div>
  );
};

export default ProcessesCard;
