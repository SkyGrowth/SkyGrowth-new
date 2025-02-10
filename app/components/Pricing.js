import PricingCard from './PricingCard'

const Pricing = () => {

  const PRICING= {
  Tier1: {
    title: '£50pm',
    description: 'The first step is to design'
  },
  Tier2: {
    title: '£150pm',
    description: 'The first step is to design'
  },
  Tier3: {
    title: '£350pm',
    description: 'The first step is to design'
  }
}

  return (
    <section className='bg-white text-black h-[1000px] flex flex-col items-center justify-center text-left p-6'>
      <h3 className='text-8xl font-bold mb-24 mt-10'>Our packages</h3>
      <div className='flex items-center justify-center gap-8'>
        <PricingCard title={PRICING.Tier1.title} children={PRICING.Tier1.description}  />
        <PricingCard title={PRICING.Tier2.title}  children={PRICING.Tier2.description}  />
        <PricingCard title={PRICING.Tier3.title}  children={PRICING.Tier3.description}  />
      </div>
    </section>
  )
}

export default Pricing