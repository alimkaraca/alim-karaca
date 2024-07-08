import React from 'react'
import WhatOrder from '../assets/whatorderbanner.png'
import LaptopMockup from './LaptopMockup'


const Work = () => {
  return (
    <>
    <h1 className='text-8xl text-gray-200 pb-7 pt-24 font-extrabold text-center'>My Work</h1>
    <div className='h-screen w-screen grid grid-cols-5 pt-8 text-center'>
        <main className='text-center col-span-3'>   
            <LaptopMockup/>
        </main>
        <main className='grid text-start col-span-2 mr-32 grid-rows-2'>
        <div className='flex items-center pt-24'>
      <p className='text-gray-200 text-3xl '>I have developed a web app where you can see a movie's or tv show's watching order. <br /> See the website <a className='underline text-red-600' href="https://whatorder.vercel.app" target='_blank' rel="noreferrer">here</a>.</p>
      </div>
      <p className='text-gray-200 text-lg'>Also see my <a href="https://github.com/mehrfarben" className="underline text-red-600" target='_blank' rel="noreferrer">GitHub</a> for all the projects I have worked on.</p>
        </main>
        
    </div>
    </>
  )
}

export default Work