import React from 'react'
import Cube from '../components/Cube'
import MobileCube from '../components/MobileCube'
import { motion } from "framer-motion"

const Home = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center text-center lg:grid grid-cols-2 xl:text-start">
    <div className='block -z-10 w-full absolute lg:hidden'>
      <MobileCube/>
    </div>
    <div className='hidden lg:block'>
    <Cube/>
      </div>
      <div className='flex flex-col justify-center lg:text-start select-none pb-16'> 

      <motion.div 
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}>
      <p className='text-white font-extrabold text-2xl lg:text-red-600 lg:text-5xl pb-4'>Hi, I'm Alim Karaca</p>
      </motion.div>

      <motion.div 
  initial={{ opacity: 0, x: -40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}>
      <p className='text-white font-extrabold text-sm lg:text-green-600 lg:text-xl pb-4'>I'm a UI/UX designer & front-end developer</p>
      </motion.div>

      <motion.div 
  initial={{ opacity: 0, x: -60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}>
      <p className='text-white font-extrabold text-lg lg:text-blue-600 lg:text-3xl'>Let's make your dreams a reality</p>
      </motion.div>

      </div>
    </div>
  )
}

export default Home