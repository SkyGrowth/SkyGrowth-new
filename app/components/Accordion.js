"use client"
import { useState } from 'react';

const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="accordion-wrapper mb-2">
      <div
        className={`text-5xl accordion-title cursor-pointer px-6 py-2 border-b border-gray-700 flex justify-between items-center ${isOpen ? 'text-black' : 'text-gray-500'}`}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
        <span
          className={`transform transition-all ${isOpen ? 'rotate-180' : ''}`}
        >
          ▼
        </span>
      </div>
      <div
        className={`accordion-item overflow-hidden transition-all duration-300 ease-in-out ${!isOpen ? 'max-h-0' : 'max-h-9999'}`}
      >
        <div className="accordion-content px-6 py-3 text-black">{children}</div>
      </div>
    </div>
  );
};

export default Accordion