import React from 'react'
import MobileMockup from '../assets/phonelaptopmockup.png'
import LaptopMockup from '../components/LaptopMockup'


const Work = () => {
  return (
    <>
    <h1 className='text-6xl lg:text-6xl xl:text-8xl text-gray-200 pb-7 pt-32 pl-8 xl:pl-48 font-extrabold text-start'>My Work</h1>
    <div className='h-full w-screen xl:grid grid-cols-5 pt-2 text-center'>
    <main className='block px-2 xl:hidden'>
    <img src={MobileMockup} alt="Laptop Mockup" />
    </main>
        <main className='hidden xl:block col-span-3'>   
            <LaptopMockup/>
        </main>
        <main className='flex flex-col justify-center w-full xl:grid col-span-2 mr-32 grid-rows-2'>
        <div className='flex items-center pt-6'>
      <p className='text-gray-200 text-start px-8 pb-8 text-lg xl:text-3xl '>I have developed a web app where you can see a movie's or tv show's watching order. See the website <a className='underline text-red-600' href="https://whatorder.vercel.app" target='_blank' rel="noreferrer">here</a>.</p>
      </div>
      <p className='text-gray-200 text-lg px-8'><br />Also see my <a href="https://github.com/mehrfarben" className="underline text-red-600" target='_blank' rel="noreferrer">GitHub</a> for all the projects I have worked on.</p>
        </main>
        
    </div>
    </>
  )
}

export default Work