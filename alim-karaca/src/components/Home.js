import React from 'react'
import Cube from './Cube'

const Home = () => {
  return (
    <div className="h-screen w-screen pt-12 grid grid-cols-2 gradient">
    <div className=' relative bottom-10 left-14' >
    <Cube />
      </div>
      <div className='flex flex-col justify-center items-start select-none pb-16'> 
      
      <p className='text-red-600 text-5xl pb-1'>Hi, I'm Alim Karaca.</p>
      <p className='text-green-600 text-3xl pb-1'>I'm a UI/UX designer & front-end developer.</p>
      <p className='text-blue-600 text-2xl'>Let's make your dreams a reality.</p>
      </div>
    </div>
  )
}

export default Home