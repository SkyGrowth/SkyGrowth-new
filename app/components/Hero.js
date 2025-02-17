import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className=" bg-white h-screen flex flex-col items-start justify-center text-left p-6 ml-36 overflow-hidden">
      <div className="max-w-[1000px]">
        <h1 className="text-7xl font-medium font-manrope text-black leading-tight mb-4 tracking-normal pt-20">
          We turn missed calls into
          <br className="hidden md:block" /> booked appointments
        </h1>
        <p className="text-black text-lg text-start flex font-light tracking-wider mt-2 max-w-[650px] mb-8">
          Every missed call is a lost client. We automatically follow up with
          potential customers, so you can focus on running your business.
        </p>
        <div className="mb-3">
          <Button label={"Try Us For Free"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
