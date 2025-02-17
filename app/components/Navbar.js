"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import SkyGrowthBlack from "../../public/SkyGrowthBlack.png";
import SkyGrowthWhite from "../../public/SkyGrowthWhite.png";
import PulsingCircle from "./PulsingCircle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

//shadow-[0px_0px_60px_1px_#9233ea]

  return (
    <nav
      className={`fixed text-sm left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-in-out z-50 ${
        isScrolled
          ? "w-[50%] bg-zinc-950/70 hover:bg-zinc-950/80 rounded-md hover:shadow-[0px_0px_20px_1px_#22d3ee] transition-500 backdrop-blur-3xl p-4  text-white mt-5"
          : "w-full bg-white border-b border-zinc-200 shadow-[0px_3px_20px_0px_rgba(0,_0,_0,_0.1)] hover:shadow-[0px_0px_20px_1px_#38bdf8] p-5 text-zinc-950 mt-0"
      }`}
    >
      <div className="flex justify-between pr-10 items-center mx-auto px-1 cursor-pointer select-none">
        <div className="flex gap-2 items-center">
          {/* <PulsingCircle stroke={isScrolled ? "#FFFFFF" : "#000000"}/> */}
          <Image
            src={isScrolled ? SkyGrowthWhite : SkyGrowthBlack}
            width={130} // Adjust size as needed
            height={130}
            alt="SkyGrowth Logo"
            className="select-none"
          />
        </div>

        {/* Menu Items */}
        <ul className="flex items-center space-x-10 font-extralight">
          <li className="cursor-pointer relative group transition-all duration-300 hover:text-blue-300">
            About Us
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="cursor-pointer relative group transition-all duration-300 hover:text-blue-300">
            Our Work
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="cursor-pointer relative group transition-all duration-300 hover:text-blue-300">
            Services
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="cursor-pointer relative group transition-all duration-300 hover:text-blue-300">
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
          </li>
          {/* <PulsingCircle stroke={isScrolled ? "#FFFFFF" : "#000000"}/> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
