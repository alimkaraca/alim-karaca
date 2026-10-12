import React from 'react';
import ReactLogo from '../assets/react-logo.svg';
import DesignSVG from '../assets/design.svg';
import NodeLogo from '../assets/nodejs.svg';
import CrawlLogo from '../assets/crawl.svg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
    <motion.div
    ref={ref}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -30 }}
      transition={{ duration: 0.5 }}
      className='flex flex-col justify-center items-center w-full pb-36 pt-36 lg:pt-32 '>
      <div className='text-5xl lg:text-6xl xl:text-8xl text-gray-200 font-extrabold select-none'>My Skills</div>
      </motion.div>

      <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -30 }}
      transition={{ duration: 1 }}
      className='flex justify-center items-center pb-32'>
      <main className='w-screen lg:grid lg:grid-cols-2 flex-col flex items-center'>

        <main className='border-2 h-2/3 w-5/6 lg:w-4/6 lg:h-[400px] border-gray-500 lg:place-self-end'>
          <section className='flex justify-start items-center text-start pt-8 '>
            <img className='reactsvg select-none' src={ReactLogo} alt="React Logo" />
            <h1 className='text-md lg:text-xl font-bold text-gray-200 select-none'>Front-End Developer</h1>
          </section>
          <p className='text-sm lg:text-lg p-6 text-gray-200'>I love building things from the ground up and bringing my ideas to life. I have 2 years of development experience in HTML, CSS, JS, and React.</p>
        </main>

        <main className='border-2 h-2/3 w-5/6 lg:w-4/6 border-t-0 lg:border-l-0 lg:border-t-2 lg:h-[400px] border-gray-500'>
          <section className='flex justify-start items-center text-start pt-8 '>
            <img className='designsvg select-none' src={NodeLogo} alt="Design Icon" />
            <h1 className='text-lg lg:text-xl font-bold text-gray-200 select-none'>Back-End Developer</h1>
          </section>
          <p className='text-sm lg:text-lg p-6 text-gray-200'>I focus on developing robust backend systems for efficient and scalable applications. I specialize in Node.js, Express, and MongoDB. I'm passionate about creating seamless server-side functionality and integrating complex systems to bring full-stack applications to life.</p>
        </main>

        <main className='border-2 h-2/3 w-5/6 lg:w-4/6 border-t-0 lg:h-[400px] border-gray-500 lg:place-self-end'>
          <section className='flex justify-start items-center text-start pt-8 '>
            <img className='designsvg select-none' src={CrawlLogo} alt="Design Icon" />
            <h1 className='text-lg lg:text-xl font-bold text-gray-200 select-none'>Web Crawler</h1>
          </section>
          <p className='text-sm lg:text-lg p-6 text-gray-200'>I have a strong interest in web crawling and data extraction. I work with Python and tools like BeautifulSoup and Requests to gather and analyze data from the web. I am experienced in using MongoDB to store and manage the collected data efficiently.</p>
        </main>

        <main className='border-2 w-5/6 lg:w-4/6 h-2/3 border-t-0 lg:border-l-0 lg:h-[400px] border-gray-500 '>
          <section className='flex justify-start items-center text-start pt-8 '>
            <img className='designsvg select-none' src={DesignSVG} alt="Design Icon" />
            <h1 className='text-lg lg:text-xl font-bold text-gray-200 select-none'>Designer</h1>
          </section>
          <p className='text-sm lg:text-lg p-6 text-gray-200'>I'm passionate about UI/UX and design in general. I'm proficient in using Photoshop, Illustrator, Sketch, Figma, and Canva.</p>
        </main>
      </main>
      </motion.div>
    </>
  );
}

export default Skills;
