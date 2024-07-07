import React from 'react'
import WhatOrder from '../assets/whatorderbanner.png'

const Work = () => {
  return (
    <div className='h-screen w-screen grid grid-cols-2 text-center'>
        <main className='pt-52 pl-64 text-start'>
            <h1 className='text-8xl text-gray-200 pb-7 font-extrabold '>My Work</h1>
            <p className='text-white text-xl pt-24'>I have developed a web app where you can see a movie's or tv show's watching order.</p>
            <p className='text-white text-xl pt-52'>Also see my Github for all the projects I have done.</p>
        </main>
        <main className='pt-52 pl-24'>
        <a href="https://whatorder.vercel.app/" target="_blank">
            <img className='w-96 mt-24 rounded-lg hover:scale-105 transition duration-200' src={WhatOrder} alt="What Order Logo" />
            </a>
        </main>
    </div>
  )
}

export default Work