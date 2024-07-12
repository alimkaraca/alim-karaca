import React from 'react';
import ReactLogo from '../assets/react-logo.svg';
import DesignSVG from '../assets/design.svg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,  
  });

  return (
    <>
    <motion.div
    ref={ref}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -30 }}
      transition={{ duration: 0.5 }}
      className='flex flex-col justify-center items-center w-full h-full pt-32 pb-16'>
      <div className='text-5xl lg:text-6xl xl:text-8xl text-gray-200 font-extrabold select-none'>My Skills</div>
      </motion.div>

      <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -30 }}
      transition={{ duration: 1 }} 
      className='flex flex-col lg:flex-row justify-center items-center pb-32'>

        <main className='border-2 w-4/5 h-1/3 lg:w-1/3 lg:h-96 xl:w-1/3 border-gray-500'>
          <section className='flex justify-start items-center text-start pt-8 '>
            <img className='reactsvg select-none' src={ReactLogo} alt="React Logo" />
            <h1 className='text-md lg:text-xl font-bold text-gray-200 select-none'>Front-End Developer</h1>
          </section>
          <p className='text-sm md:text-xl p-6 text-gray-200'>I love building things from the ground up and bringing my ideas to life. I have 2 years of development experience in HTML, CSS, JS, and React.</p>
        </main>

        <main className='border-2 w-4/5 h-1/3 border-t-0 lg:border-l-0 lg:border-t-2 lg:w-1/3 lg:h-96 xl:w-1/3  border-gray-500'>
          <section className='flex justify-start items-center text-start pt-8 '>
            <img className='designsvg select-none' src={DesignSVG} alt="Design Icon" />
            <h1 className='text-lg lg:text-xl font-bold text-gray-200 select-none'>Designer</h1>
          </section>
          <p className='text-sm md:text-xl p-6 text-gray-200'>I'm passionate about UI/UX and design in general. I'm proficient in using Photoshop, Illustrator, Sketch, Figma, and Canva.</p>
        </main>
      </motion.div>
    </>
  );
}

export default Skills;
