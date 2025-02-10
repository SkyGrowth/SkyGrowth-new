import React from "react";

const images = [
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
];

const InfiniteSlider = () => {
  return (
    <div className="relative w-full h-[100px] overflow-hidden bg-white shadow-lg">
      {/* Gradient effect on left and right */}
      <div className="absolute top-0 left-0 h-full w-[200px] bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute top-0 right-0 h-full w-[200px] bg-gradient-to-l from-white to-transparent z-10" />
      
      {/* Slide track */}
      <div className="flex w-[calc(250px*14)] animate-scroll">
        {[...images, ...images].map((src, index) => (
          <div key={index} className="w-[250px] h-[100px] flex-shrink-0">
            <img src={src} alt="slide" className="w-full h-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
