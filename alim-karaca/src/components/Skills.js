import React from 'react'
import ReactLogo from '../assets/react-logo.svg'

const Skills = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
    <div className='text-6xl text-gray-200 pb-7 font-extrabold'>My Skills</div>
    <div className='border-2 w-1/3 h-72 border-gray-400'>
    <div className='flex justify-center text-center pt-10 '>
      <img className='w-16' src={ReactLogo} alt="React Logo" />
      <h1 className='text-xl font-semibold pt-5 pl-3 text-gray-200'>Front-End Developer</h1>
      
    </div>
    <p className='text-md p-8 text-gray-200'>I'm passionate about UI/UX and design in general. I have 2 years of development experience in HTML, CSS, JS and React</p>
    </div>
    </div>
  )
}

export default Skills