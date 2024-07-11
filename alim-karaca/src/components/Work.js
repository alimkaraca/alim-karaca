import React from 'react'
import MobileMockup from '../assets/phonelaptopmockup.png'
import LaptopMockup from './LaptopMockup'


const Work = () => {
  return (
    <>
    <h1 className='text-6xl lg:text-8xl text-gray-200 pb-7 pt-24 font-extrabold text-center'>My Work</h1>
    <div className='h-full w-screen lg:grid grid-cols-5 pt-8 text-center'>
    <main className='block px-12 lg:hidden'>
    <img src={MobileMockup} alt="Laptop Mockup" />
    </main>
        <main className='hidden lg:block col-span-3'>   
            <LaptopMockup/>
        </main>
        <main className='flex flex-col justify-center w-full lg:grid col-span-2 mr-32 grid-rows-2'>
        <div className='flex items-center pt-12'>
      <p className='text-gray-200 text-start px-12 text-lg lg:text-3xl '>I have developed a web app where you can see a movie's or tv show's watching order. See the website <a className='underline text-red-600' href="https://whatorder.vercel.app" target='_blank' rel="noreferrer">here</a>.</p>
      </div>
      <p className='text-gray-200 text-lg'><br />Also see my <a href="https://github.com/mehrfarben" className="underline text-red-600" target='_blank' rel="noreferrer">GitHub</a> for all the projects I have worked on.</p>
        </main>
        
    </div>
    </>
  )
}

export default Work