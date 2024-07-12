import React from 'react'
import Ben from '../assets/ben.png'

const Links = () => {
  return (
    <div className='flex flex-col h-full md:flex-row lg:flex-col xl:flex-row justify-center items-start '>
        <main className='grid grid-cols-3 lg:w-full xl:w-1/2 px-4 py-8 bg-red-600 h-full'>
        <img className='h-42 bg-red-700 rounded-full px-4 py-2 self-center' src={Ben} alt="Me"/>
        <p className='text-start text-white ml-4 col-span-2 content-center'>Made by Alim Karaca with React JS, Tailwind and love.</p>
        </main>

        <main className='flex flex-col justify-center w-full lg:w-full xl:w-1/2 h-full py-12 bg-green-600 text-center text-white text-xl font-semibold gap-4'>
        <a className='hover:text-gray-300' href="https://www.linkedin.com/in/alimkaraca/" target='_blank' rel="noreferrer">LinkedIn</a>
        <a className='hover:text-gray-300' href="https://www.instagram.com/alim.png/" target='_blank' rel="noreferrer">Instagram</a>
        <a className='hover:text-gray-300' href="https://github.com/mehrfarben" target='_blank' rel="noreferrer">GitHub</a>

        </main>
    </div>
  )
}

export default Links