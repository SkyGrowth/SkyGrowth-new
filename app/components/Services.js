import React from 'react'
import Accordion from './Accordion'

const Services = () => {
  return (
    <section className='bg-white h-screen flex items-center justify-center text-left p-6'>
      <div className='flex items-center justify-center gap-8'>
        <div className='max-w-[500px]'>
          <p className='text-black font-extralight text-xl'>What we do</p>
          <h2 className='font-manrope text-black font-bold text-7xl mt-2'>We create meaningful experiences</h2>
          <p className='text-black font-extralight mt-2 text-xl'>We create brands and websites for businesses that give a damn.</p>
        </div>
        <div className='max-w-[600px]'>
          <h3 className='font-manrope text-black mb-5 font-bold text-4xl text-left'>Our Services</h3>
          <Accordion title={"Conversion Focused"} children={"We specialize in creating conversion-focused websites that not only look great but also turn visitors into loyal customers."}/>
          <Accordion title={"High quality design"} children={"Our high-quality web design combines visually stunning aesthetics with seamless user experiences to leave a lasting impression."}/>
          <Accordion title={"SEO"} children={"Our SEO services are designed to boost your website’s visibility, driving more organic traffic and helping you rank higher in search results."}/>
        </div>
      </div>
    </section>
  )
}

export default Services