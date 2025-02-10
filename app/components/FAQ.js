import Accordion from "./Accordion"

const FAQ = () => {
  const QUESTIONS = {
    q1: {
      question: "What types of websites do you build?",
      answer: "We design and develop a wide range of websites, including business websites, e-commerce stores, landing pages, and custom web solutions tailored to your needs."
    },
    q2: {
      question: "How long does it take to build a website?",
      answer: "The timeline depends on the complexity of the project. A standard business website typically takes 3–6 weeks, while more complex sites may take longer. We’ll provide a clear timeline after discussing your requirements."
    },
    q3: {
      question: "Do you offer SEO services?",
      answer: "Yes! We optimize all our websites for search engines and offer ongoing SEO strategies to improve your rankings, increase traffic, and boost conversions."
    },
    q4: {
      question: "Can you help with website hosting and maintenance?",
      answer: "Absolutely! We offer secure hosting and ongoing maintenance plans to ensure your website stays fast, secure, and up to date."
    },
    q5: {
      question: "Will my website be mobile-friendly?",
      answer: "Yes! Every website we create is fully responsive and optimized for mobile devices to provide the best experience for all users."
    }
  }

  return (
    <section className='bg-white text-black h-[800px] flex items-left flex-col justify-center text-left p-6'>
      <h3 className='text-7xl mb-10'>Frequently Asked Questions</h3>
      <div className="flex flex-col">
        <Accordion title={QUESTIONS.q1.question} children={QUESTIONS.q1.answer} />
        <Accordion title={QUESTIONS.q2.question} children={QUESTIONS.q2.answer} />
        <Accordion title={QUESTIONS.q3.question} children={QUESTIONS.q3.answer} />
        <Accordion title={QUESTIONS.q4.question} children={QUESTIONS.q4.answer} />
        <Accordion title={QUESTIONS.q5.question} children={QUESTIONS.q5.answer} />
      </div>
    </section>
  )
}

export default FAQ