import React from 'react'
import Button from './Button';
import StarRate from './StarRate';
const Hero = () => {
  return (
    <section className="bg-white h-screen flex flex-col items-center justify-center text-left p-6">
      <div className='max-w-[1000px]'>
        <p className="text-sm bg-blue-100 text-gray-950 mb-6 font-extralight fade-down shadow-sm rounded-full max-w-min p-2 whitespace-nowrap">Real Results</p>
        <h1 className="font-manrope text-7xl tracking-tight font-bold leading-[1.1] text-black fade-down">Boost your online presence with a high converting website</h1>
        <p className="text-xl text-gray-700 mt-3 font-extralight fade-down mb-12">We design, build, and host websites that drive results.</p>
        <div className='mb-3'>        
          <Button label={"Contact us now"}/>
        </div>
        <StarRate />
      </div>
    </section>
  );
};

export default Hero;