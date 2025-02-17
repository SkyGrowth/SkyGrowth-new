import React from "react";

const Topper = ({ children }) => {
  return (
    <h1 className="text-sm tracking-widest px-4 py-4 rounded font-semibold text-gray-600">
      {children}
    </h1>
  );
};

export default Topper;
