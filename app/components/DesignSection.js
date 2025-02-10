import Image from 'next/image'
import DesignImage from '../../public/design.jpg'

const DesignSection = () => {
  return (
    <section className='bg-white text-black h-screen flex items-center justify-center text-left p-6'>
      <div className='flex items-center justify-center gap-8'>
        <div className='max-w-[600px]'>
          <h3 className='font-manrope text-8xl font-bold tracking-tighter'>
            High quality design
          </h3>
          <p className='mt-6 font-extralight max-w-[400px] text-xl'>
Our high-quality web design combines visually stunning aesthetics with seamless user experiences to leave a lasting impression.          </p>
        </div>
        <div className='max-w-[600px]'>
          <Image
            src={DesignImage}
            width={700}
            height={700}
            alt="Picture of the author"
          />
        </div>
      </div>
    </section>
  )
}

export default DesignSection