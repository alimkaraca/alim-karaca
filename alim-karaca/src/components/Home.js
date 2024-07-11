import React from 'react'
import Cube from './Cube'
import MobileCube from './MobileCube'
import { motion } from "framer-motion"

const Home = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center lg:grid grid-cols-2 text-start">
    <div className='block -z-10 w-screen absolute lg:hidden'>
      <MobileCube/>
    </div>
    <div className='hidden lg:block'>
    <Cube/>
      </div>
      <div className='flex flex-col justify-center items-center select-none pb-16'> 

      <motion.div 
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}>
      <p className='text-white font-extrabold lg:text-red-600 text-5xl pb-1'>Hi, I'm Alim Karaca.</p>
      </motion.div>

      <motion.div 
  initial={{ opacity: 0, x: -40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}>
      <p className='text-white font-extrabold text-md lg:text-green-600 text-xl pb-1'>I'm a UI/UX designer & front-end developer.</p>
      </motion.div>

      <motion.div 
  initial={{ opacity: 0, x: -60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}>
      <p className='text-white font-extrabold lg:text-blue-600 text-3xl'>Let's make your dreams a reality.</p>
      </motion.div>

      </div>
    </div>
  )
}

export default Home