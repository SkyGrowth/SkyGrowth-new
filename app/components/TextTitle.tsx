import React from 'react';

const Title = ({ children }) => {
  return (
    <span className="text-black font-manrope text-4xl leading-5 px-3 rounded font-bold tracking-tighter">
      {children}
    </span>
  );
};

export default Title;

// font-manrope text-4xl font-bold tracking-tighter