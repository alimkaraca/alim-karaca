import React from 'react'
import Cube from './Cube'
import { motion } from "framer-motion"

const Home = () => {
  return (
    <div className="h-screen w-screen pt-12 grid grid-cols-2">
    <motion.div 
  initial={{ opacity: 0}}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }} 
  className=' relative bottom-10 left-14' >
    <Cube />
      </motion.div>
      <div className='flex flex-col justify-center items-start select-none pb-16'> 

      <motion.div 
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}>
      <p className='text-red-600 text-5xl pb-1'>Hi, I'm Alim Karaca.</p>
      </motion.div>

      <motion.div 
  initial={{ opacity: 0, x: -40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}>
      <p className='text-green-600 text-3xl pb-1'>I'm a UI/UX designer & front-end developer.</p>
      </motion.div>

      <motion.div 
  initial={{ opacity: 0, x: -60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}>
      <p className='text-blue-600 text-2xl'>Let's make your dreams a reality.</p>
      </motion.div>

      </div>
    </div>
  )
}

export default Home