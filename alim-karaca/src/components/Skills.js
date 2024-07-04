import React from 'react'
import ReactLogo from '../assets/react-logo.svg'
import DesignSVG from '../assets/design.svg'

const Skills = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
    <div className='text-6xl text-gray-200 pb-7 font-extrabold'>My Skills</div>

<div className='flex justify-center'>

    <main className='border-2 w-1/4 h-auto border-red-600'>
    <section className='flex justify-center text-center pt-10 '>
      <img className='w-16' src={ReactLogo} alt="React Logo" />
      <h1 className='text-2xl font-semibold pt-5 pl-3 text-gray-200'>Front-End Developer</h1>
      </section>
    <p className='text-xl p-8 text-gray-200'>I'm love building things from ground up and bringing my ideas to life. I have 2 years of development experience in HTML, CSS, JS and React.</p>
    </main>

    <main className='border-2 border-l-0 w-1/4 h-auto border-red-600'>
    <section className='flex justify-center text-center pt-10 '>
      <img className='designsvg' src={DesignSVG} alt="Design Icon" />
      <h1 className='text-2xl font-semibold pt-5 pl-3 text-gray-200'>Designer</h1>
      </section>
    <p className='text-xl p-8 text-gray-200'>I'm passionate about UI/UX and design in general. I'm proficient in using Photoshop, Illustrator, Sketch, Figma and Canva.</p>
    </main>

    </div>
    </div>
  )
}

export default Skills