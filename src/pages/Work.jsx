import React from 'react'
import Cesni from '../assets/cesnimockup.png'
import WhatOrder from '../assets/whatordermockup2.png'
import WhatOrderMobile from '../assets/whatordermockup.png'
import KritonPati from '../assets/kritonpati.png'
import MehmetYigit from '../assets/mehmetyigit.png'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Work = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      <main className='w-screen flex flex-col justify-center items-center'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -30 }}
          transition={{ duration: 0.5 }}
          className='text-5xl lg:text-6xl xl:text-8xl text-gray-200 font-extrabold select-none pb-12'
        >
          My Work
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -30 }}
          transition={{ duration: 1 }}
          className='grid grid-cols-1 lg:grid-cols-3 gap-6 w-full lg:w-4/6 px-6 lg:px-0'
        >
          {/* Büyük Kart (2 kolon kaplar) */}
          <section className='h-[450px] group hover:cursor-pointer lg:col-span-2 bg-gray-900 overflow-hidden rounded-xl'>
            <a href="https://dtmehmetyigit.com" target='_blank' rel="noreferrer" className='block h-full'>
              <div className='h-[300px] overflow-hidden'>
                <img src={MehmetYigit} className='h-[300px] w-full xl:block object-cover group-hover:scale-105 transition duration-300' alt="" />
              </div>
              <div className='relative flex flex-col justify-between min-h-[150px] text-[#e5e7eb] p-6'>
                <h1 className='text-2xl font-bold'>Dt.Mehmet Yigit</h1>
                <p className='text-[#e5e7eb80] text-sm group-hover:opacity-0 group-hover:-translate-y-5 duration-300'>My first commercial project. A dentist website with blogging functionality for the admin. Created using Next.js and MongoDB.</p>
                <p className='text-[#dc2626] absolute bottom-6 text-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 duration-300'>See live website →</p>
              </div>
            </a>
          </section>

          {/* Küçük Kart 1 */}
          <section className='h-[450px] group hover:cursor-pointer lg:col-span-1 bg-gray-900 overflow-hidden rounded-xl'>
            <a href="https://www.kritonpativeteriner.com/" target='_blank' rel="noreferrer" className='block h-full'>
              <div className='h-[300px] overflow-hidden'>
                <img src={KritonPati} className='h-[300px] w-full object-cover group-hover:scale-110 transition duration-300' alt="" />
              </div>
              <div className='relative flex flex-col justify-between min-h-[150px] text-[#e5e7eb] p-6'>
                <h1 className='text-2xl font-bold'>Kriton Pati Veteriner</h1>
                <p className='text-[#e5e7eb80] text-sm group-hover:opacity-0 group-hover:-translate-y-5 duration-300'>Veterinary website with a landing page. Created using React.js.</p>
                <p className='text-[#dc2626] absolute bottom-6 text-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 duration-300'>See live website →</p>
              </div>
            </a>
          </section>

          {/* Küçük Kart 2 */}
          <section className='h-[450px] group hover:cursor-pointer lg:col-span-1 bg-gray-900 overflow-hidden rounded-xl'>
            <a href="https://github.com/mehrfarben/recipe-app" target='_blank' rel="noreferrer" className='block h-full'>
              <div className='h-[300px] overflow-hidden'>
                <img src={Cesni} className='h-[300px] w-full object-cover group-hover:scale-110 transition duration-300' alt="" />
              </div>
              <div className='relative flex flex-col justify-between min-h-[150px] text-[#e5e7eb] p-6'>
                <h1 className='text-2xl font-bold'>Ceşni - Recipe App</h1>
                <p className='text-[#e5e7eb80] text-sm group-hover:opacity-0 group-hover:-translate-y-5 duration-300'>My first full-stack app written using React, Express and MongoDB.</p>
                <p className='text-[#dc2626] absolute bottom-6 text-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 duration-300'>See GitHub repo →</p>
              </div>
            </a>
          </section>

          <section className='h-[450px] group hover:cursor-pointer lg:col-span-2 bg-gray-900 overflow-hidden rounded-xl'>
            <a href="https://whatorder.vercel.app/" target='_blank' rel="noreferrer" className='block h-full'>
              <div className='h-[300px] overflow-hidden'>
                <img src={WhatOrder} className='h-[300px] w-full hidden xl:block object-cover group-hover:scale-105 transition duration-300' alt="" />
                <img src={WhatOrderMobile} className='h-[300px] block xl:hidden w-full object-cover group-hover:scale-105 transition duration-300' alt="" />
              </div>
              <div className='relative flex flex-col justify-between min-h-[150px] text-[#e5e7eb] p-6'>
                <h1 className='text-2xl font-bold'>What Order</h1>
                <p className='text-[#e5e7eb80] text-sm group-hover:opacity-0 group-hover:-translate-y-5 duration-300'>What order is a website where you can see the chronological order in which movies and TV series should be watched</p>
                <p className='text-[#dc2626] absolute bottom-6 text-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 duration-300'>See live website →</p>
              </div>
            </a>
          </section>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -30 }}
          transition={{ duration: 1 }}
        >
          <p className='text-[#e5e7eb] text-xl px-6 pt-16'>Also see my <a href="https://github.com/mehrfarben" target='_blank' rel="noreferrer" className="text-[#dc2626] underline">GitHub</a> for all the projects I have worked on.</p>
        </motion.div>
      </main>
    </>
  )
}

export default Work
