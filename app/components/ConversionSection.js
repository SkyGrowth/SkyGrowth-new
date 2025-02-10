import Image from 'next/image'
import ConversionImage from '../../public/conversion.jpg'

const ConversionSection = () => {
  return (
    <section className='bg-white text-black h-screen flex items-center justify-center text-left p-6'>
      <div className='flex items-center justify-center gap-8'>
        <div className='max-w-[600px]'>
          <Image
            src={ConversionImage}
            width={700}
            height={700}
            alt="Picture of the author"
          />
        </div>
        <div className='max-w-[500px]'>
          <h3 className='font-manrope text-8xl tracking-tighter font-bold'>
            Conversion Focused
          </h3>
          <p className='mt-6 font-extralight text-xl'>
            We specialize in creating conversion-focused websites that not only look great but also turn visitors into loyal customers.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ConversionSection