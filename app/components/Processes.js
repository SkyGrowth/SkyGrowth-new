import ProcessesCard from './ProcessCard'

const Processes = () => {

  const PROCESS= {
  step1: {
    title: '1. Discovery',
    description: 'We research your business, goals, and audience to create a strategy that aligns with your vision.'
  },
  step2: {
    title: '2. Planning',
    description: 'We define the site structure, UX flow, and key features to ensure a seamless development process.'
  },
  step3: {
    title: '3. Development',
    description: 'We design and build a high-performing, responsive website with clean code and SEO best practices.'
  },
  step4: {
    title: '4. Launch',
    description: 'We deploy, test, and optimize your site, ensuring a smooth launch with ongoing support available.'
  },
}

  return (
    <section className='bg-white text-black h-[400px] flex flex-col items-left justify-center text-left p-6'>
      <h3 className='text-8xl font-bold mb-24 mt-10 ml-6'>Our process</h3>
      <div className='flex items-center justify-center gap-8'>
        <ProcessesCard title={PROCESS.step1.title} children={PROCESS.step1.description}  />
        <ProcessesCard title={PROCESS.step2.title}  children={PROCESS.step2.description}  />
        <ProcessesCard title={PROCESS.step3.title}  children={PROCESS.step3.description}  />
        <ProcessesCard title={PROCESS.step4.title}  children={PROCESS.step4.description}  />
      </div>
    </section>
  )
}

export default Processes