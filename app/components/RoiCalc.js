"use client"; 

import { useState } from "react";

export default function ROICalculator() {
  const [clientValue, setClientValue] = useState(300);
  const [missedCalls, setMissedCalls] = useState(30);
  const [closeRate, setCloseRate] = useState(25);
  const [roi, setROI] = useState(null);

  const calculateROI = () => {
    const monthlyLeftOnTable = (clientValue * missedCalls * closeRate) / 100;
    const charge = 40;
    const roiPercentage = ((monthlyLeftOnTable - charge) / charge) * 100;
    setROI({ monthlyLeftOnTable, charge, roiPercentage });
  };

  return (
    <div className="max-w-4xl mx-auto p-8"> {/* Wider container (max-w-2xl) */}
      <h2 className="text-2xl font-bold text-center text-gray-800"></h2>

      {/* Client Value Input Section */}
      <div className="mt-6">
        <label className="block font-medium text-gray-700">Average Client Value:</label>
        <input
          type="number"
          value={clientValue}
          onChange={(e) => setClientValue(Number(e.target.value))}
          className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
        />
      </div>

      {/* Missed Calls Input Section */}
      <div className="mt-6">
        <label className="block font-medium text-gray-700">Missed Calls per Month:</label>
        <input
          type="number"
          value={missedCalls}
          onChange={(e) => setMissedCalls(Number(e.target.value))}
          className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
        />
      </div>

      {/* Close Rate Input Section */}
      <div className="mt-6">
        <label className="block font-medium text-gray-700">Average Close Rate (%):</label>
        <input
          type="number"
          value={closeRate}
          onChange={(e) => setCloseRate(Number(e.target.value))}
          className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
        />
      </div>

      {/* Calculate Button */}
      <button
        onClick={calculateROI}
        className="mt-8 w-full bg-blue-700 text-white font-medium py-3 rounded-md shadow-md transition tracking-wide"
      >
        Calculate
      </button>

      {/* Results Section */}
      {roi && (
        <div className="mt-8 leading-9">
          <h3 className="text-2xl font-semibold text-center justify-center text-gray-800">Results:</h3>
          <p className="mt-4 text-gray-700 text-lg text-center justify-center">Revenue: <span className="font-medium text-red-600">-£{roi.monthlyLeftOnTable}/pm</span></p>
          {/* <p className="text-gray-700">Return on Investment: <span className="font-medium text-green-600">{roi.roiPercentage}%</span></p> */}
          {/* <p className="text-gray-700 text-center justify-center py-4">We Charge £35/month </p> */}
          <p className=" mt-3 text-md  font-semibold text-center justify-center text-gray-800 leading-snug">
          We help you put this money back in your pocket.
        </p>
        </div>
      )}
    </div>
  );
}
