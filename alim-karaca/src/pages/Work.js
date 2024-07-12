import React from 'react'
import MobileMockup from '../assets/phonelaptopmockup.png'
import LaptopMockup from '../components/LaptopMockup'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const FadeInSection = ({ children, initial, animate, transition }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? animate : initial}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

const Work = () => {
  return (
    <>
      <FadeInSection initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className='text-6xl lg:text-6xl xl:text-8xl text-gray-200 pb-7 pt-32 pl-8 xl:pl-48 font-extrabold text-start select-none'>
          My Work
        </h1>
      </FadeInSection>

      <div className='h-full w-screen xl:grid grid-cols-5 pt-2 text-center pb-16'>
<div className='block px-2 xl:hidden'>
        <FadeInSection
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          
            <img src={MobileMockup} alt="Laptop Mockup" />
          
        </FadeInSection>
</div>

<div className='hidden xl:block col-span-3'>
        <FadeInSection
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          
            <LaptopMockup />
          
        </FadeInSection>
</div>
<div className='flex flex-col justify-center items-center w-full xl:col-span-2 mr-32 grid-rows-2'>
        <FadeInSection
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          
            <div className='flex items-center pt-6'>
              <p className='text-gray-200 text-start px-8 xl:pr-20 xl:pl-0 pb-8 text-lg xl:text-3xl'>
                I have developed a web app where you can see a movie's or tv show's watching order. See the website{' '}
                <a className='underline text-red-600' href="https://whatorder.vercel.app" target='_blank' rel="noreferrer">here</a>.
              </p>
            </div>
            <p className='text-gray-200 text-lg px-8 xl:pr-20 xl:pl-0 xl:text-start'>
              <br />
              Also see my{' '}
              <a href="https://github.com/mehrfarben" className="underline text-red-600" target='_blank' rel="noreferrer">GitHub</a>{' '}
              for all the projects I have worked on.
            </p>
          
        </FadeInSection>
</div>
      </div>
    </>
  );
}

export default Work
