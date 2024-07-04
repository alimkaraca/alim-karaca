import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full grid grid-cols-2'>
    <p className='text-white pl-32 pt-6 text-3xl select-none'>
      alim_karaca
    </p>
    <div className='flex justify-end text-center'>
    <div className='navbtn'>home /</div>
    <div className='navbtn'>expertise /</div>
    <div className='navbtn'>work /</div>
    <div className='navbtn'>experience /</div>
    <div className='navbtn mr-16'>contact /</div>
    </div>
    </div>
  )
}

export default Navbar