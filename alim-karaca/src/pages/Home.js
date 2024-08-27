import React from 'react'
import Cube from '../components/Cube'
import MobileCube from '../components/MobileCube'
import { motion } from "framer-motion"

const Home = () => {


  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center text-center lg:grid grid-cols-2 xl:text-start">
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      delay={1}
      transition={{ delay: 1.5, duration: 1.5 }} 
      className='block -z-10 w-full absolute xl:hidden lg:relative'>
      <MobileCube/>
    </motion.div>
    <div className='hidden xl:block'>
    <Cube/>
      </div>
      <div className='flex flex-col justify-center text-center select-none'> 

      <motion.div 
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}>
      <p className='hidden text-start lg:block font-extrabold text-red-600 text-5xl pb-4'>Hi, I'm Alim Karaca </p>
      </motion.div>

      <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      delay={1}
      transition={{duration: 1 }} >
      <p className='block lg:hidden font-extrabold text-white text-5xl  pb-4'>
ALIM KARACA
      </p>
      </motion.div>

      <motion.div 
  initial={{ opacity: 0, x: -40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}>
      <p className='text-white hidden text-start lg:block font-extrabold text-sm lg:text-green-600 lg:text-xl pb-6'>Full-Stack Web Developer & Web Crawler & UI/UX designer </p>
      </motion.div>


      <motion.div
      initial={{ opacity: 0, y: -40}}
      animate={{ opacity: 1, y: 0}}
      delay={1}
      transition={{duration: 1 }}>
      <p className='block lg:hidden text-white text-2xl px-4 pb-4'>
UI/UX DESIGNER & <br /> FULLSTACK DEVELOPER & <br /> WEB CRAWLER
      </p>
      </motion.div>

      <motion.div 
  initial={{ opacity: 0, x: -60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}>
      <p className='text-white hidden text-start lg:block font-extrabold text-lg lg:text-blue-600 lg:text-3xl'>Let's make your dreams a reality</p>
      </motion.div>

      </div>
    </div>
  )
}

export default Home