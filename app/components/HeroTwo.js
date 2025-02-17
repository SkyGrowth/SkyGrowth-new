import React from "react";
import Line from "./Line";

const HeroTwo = () => {
  return (
    <section className="flex flex-col items-start justify-center text-left py-20 ml-36 mt-16 px-8 bg-white">
      
      {/* H1 */}
      <h1 className="text-7xl font-medium text-black leading-tight mb-4 tracking-normal">
        We turn missed calls into<br className="hidden md:block" /> booked appointments
      </h1>

      {/* P */}
      <p className="text-gray-800 text-7xl text-start flex font-extralight tracking-wider mt-2 max-w-[650px] mb-8">
        Every missed call is a lost client. We automatically follow up with your customers, so you can focus on running your business.
      </p>

      {/* Buttons */}
      <div className="mt-5 flex gap-4">
        <button className="flex px-8 py-5 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition">
          Free 7 Day Trial
        </button>
        <button className="px-6 py-3 text-gray-900 rounded-full text-sm font-medium relative overflow-hidden group">
          See how it works
          <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
        </button>
      </div>
      <Line />
    </section>
  );
};

export default HeroTwo;
