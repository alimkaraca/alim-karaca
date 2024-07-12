import React from 'react'
import ReactLogo from '../assets/react-logo.svg'
import DesignSVG from '../assets/design.svg'

const Skills = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full py-32'>
    <div className='text-5xl lg:text-6xl xl:text-8xl text-gray-200 pb-10 font-extrabold'>My Skills</div>

<div className='flex flex-col lg:flex-row justify-center items-center'>

    <main className='border-2 w-4/5 h-1/3  lg:w-1/3 lg:h-96 xl:w-1/3 border-gray-500'>
    <section className='flex justify-center items-center text-start pt-8 '>
      <img className='reactsvg' src={ReactLogo} alt="React Logo" />
      <h1 className='text-md lg:text-xl font-semibold text-gray-200'>Front-End Developer</h1>
      </section>
    <p className='text-sm md:text-xl p-6 text-gray-200'>I'm love building things from ground up and bringing my ideas to life. I have 2 years of development experience in HTML, CSS, JS and React.</p>
    </main>

    <main className='border-2 w-4/5 h-1/3 border-t-0 lg:border-l-0 lg:border-t-2 lg:w-1/3 lg:h-96 xl:w-1/3  border-gray-500'>
    <section className='flex justify-center items-center text-start pt-8 '>
      <img className='designsvg' src={DesignSVG} alt="Design Icon" />
      <h1 className='text-md lg:text-xl font-semibold text-gray-200'>Designer</h1>
      </section>
    <p className='text-sm md:text-xl p-6 text-gray-200'>I'm passionate about UI/UX and design in general. I'm proficient in using Photoshop, Illustrator, Sketch, Figma and Canva.</p>
    </main>

    </div>
    </div>
  )
}

export default Skills