import Image from 'next/image'
import DesignImage from '../../public/design.jpg'
import BackgroundImage from '../../public/background.jpg'
import Button from './Button'

const BigCardSection = () => {
  return (
    <section className='text-white h-[1000px] flex items-center justify-center text-left p-6' style={{ backgroundImage: `url(${BackgroundImage.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='flex flex-col items-center justify-center gap-8 bg-slate-700/80 rounded-3xl p-10 shadow-[0px_4px_30px_0px_rgba(31,_38,_135,_0.15)]'>
        <h3 className='text-5xl font-bold max-w-[700px]'>
          Ready to get the site you always wanted?
        </h3>
        <Button label={"Start now"}/>
      </div>
    </section>
  )
}

export default BigCardSection