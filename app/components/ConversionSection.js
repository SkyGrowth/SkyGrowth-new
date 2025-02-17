import Image from 'next/image'
import Woman from '../../public/woman.png'

const ConversionSection = () => {
  return (
    <section className='bg-white text-black flex items-center justify-center mt-10 text-left p-6'>
      <div className='flex items-center justify-center gap-8'>
        <div className='max-w-[600px]'>
          <Image
            src={Woman}
            width={450}
            height={450}
            alt="Picture of the author"
          />
        </div>
        <div className='max-w-[500px]'>
          <h1 className='font-manrope text-4xl tracking-tighter font-bold'>
            Never Miss a Lead Again
          </h1>
          <p className='mt-6 font-extralight text-xl'>
            Every time an inbound call to your business goes unanswered, we'll send a text message back to the caller within seconds!
          </p>
        </div>
      </div>
    </section>
  )
}

export default ConversionSection