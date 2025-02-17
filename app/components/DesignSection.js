import Image from 'next/image';
import man from '../../public/man.png';

const DesignSection = () => {
  return (
    <section className='bg-white text-black flex items-center justify-center text-left p-6'>
      <div className='flex items-center justify-center gap-8'>
        <div className='max-w-[600px]'>
          <h3 className='font-manrope text-4xl font-bold tracking-tighter'>
            Stay Connected
          </h3>
          <p className='mt-6 font-extralight max-w-[400px] text-xl'>
            When they reply, we'll push you a notification from our software, where you can continue the conversation!
          </p>
        </div>
        <div className='max-w-[600px]'>
          <Image
            src={man}
            width={450}
            height={450}
            alt="Picture of the author"
          />
        </div>
      </div>
    </section>
  );
};

export default DesignSection;
