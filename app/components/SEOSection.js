import Image from 'next/image'
import SEO from '../../public/seo.jpg'

const SEOSection = () => {
  return (
    <section className='bg-white text-black h-screen flex items-center justify-center text-left p-6'>
      <div className='flex items-center justify-center gap-8'>
        <div className='max-w-[600px]'>
          <Image
            src={SEO}
            width={700}
            height={700}
            alt="Picture of the author"
          />
        </div>
        <div className='max-w-[600px]'>
          <h3 className='text-8xl font-bold'>
            SEO Performance
          </h3>
          <p className='mt-6 font-extralight text-xl'>
Our SEO services are designed to boost your website’s visibility, driving more organic traffic and helping you rank higher in search results.          </p>
        </div>
      </div>
    </section>
  )
}

export default SEOSection