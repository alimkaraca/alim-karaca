import React from 'react'
import Cesni from '../assets/cesnimockup.png'
import WhatOrder from '../assets/whatordermockup2.png'

const Work = () => {
  return (
    <>
    <main className='min-h-screen w-screen flex flex-col justify-center items-center'>
        <div className='text-5xl lg:text-6xl xl:text-8xl text-gray-200 font-extrabold select-none pb-12'>My Work</div>
            <main className=' flex justify-center items-center flex-col xl:flex-row gap-10 w-full lg:w-4/6'>

              
                <section className='h-[450px] group hover:cursor-pointer w-11/12 md:w-2/4 bg-gray-900 overflow-hidden'>
                <a href="https://github.com/mehrfarben/recipe-app" target='_blank' rel="noreferrer">
                    <div className='h-[300px] object-cover overflow-hidden'>
                      <img src={Cesni} className='h-[300px] w-full object-cover group-hover:scale-110 transition duration-300' alt="" />
                    </div>
                    <div className='relative flex flex-col justify-between min-h-[150px] text-[#e5e7eb] p-6'>
                        <h1 className='text-2xl font-bold'>Ceşni - Recipe App</h1>
                        <p className='text-[#e5e7eb80] text-sm group-hover:opacity-0 group-hover:-translate-y-5 duration-300'>My first full-stack app written using React, Express and MongoDB where users can share their own recipes.</p>
                        <p className='text-[#dc2626] absolute bottom-0 text-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-8 duration-300'>See GitHub repo →</p>
                    </div>
                    </a>
                </section>

                <section className='h-[450px] group hover:cursor-pointer w-11/12 md:w-2/4 xl:w-2/3 bg-gray-900 overflow-hidden'>
                <a href="https://whatorder.vercel.app/" target='_blank' rel="noreferrer">
                  <div className='group h-[300px] overflow-hidden'>
                    <img src={WhatOrder} className='h-[300px] w-full object-contain xl:object-cover group-hover:scale-105 transition duration-300' alt="" />
                  </div>
                  <div className='relative flex flex-col justify-between min-h-[150px] text-[#e5e7eb] p-6'>
                        <h1 className='text-2xl font-bold'>What Order</h1>
                        <p className='text-[#e5e7eb80] text-sm group-hover:opacity-0 group-hover:-translate-y-5 duration-300'>What order is a website where you can see the chronological order in which movies and TV series should be watched</p>
                        <p className='text-[#dc2626] absolute bottom-0 text-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-8 duration-300'>See live website →</p>
                    </div>
                    </a>
                </section>

                

            </main>
            <p className='text-[#e5e7eb] text-xl px-6 py-16'>Also see my <a href="https://github.com/mehrfarben" target='_blank' rel="noreferrer" className="text-[#dc2626] underline">GitHub</a> for all the projects I have worked on.</p>
    </main>

    

  </>
  )
}

export default Work