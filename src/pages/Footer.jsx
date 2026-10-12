import Ben from '../assets/ben.png'

const Footer = () => {

  const openPdf = () => {
    window.open('/AlimKaracaCV.pdf', '_blank');
  };

  return (
    <div className='flex relative flex-col md:flex-row lg:flex-col xl:flex-row justify-center'>
        <main className='grid grid-cols-3 lg:w-full xl:w-1/2 px-4 py-8 bg-red-600'>
        <img className='h-40 bg-red-700 rounded-full px-4 py-2 self-center' src={Ben} alt="Me"/>
        <p className='text-start text-white ml-4 col-span-2 content-center'>Made by Alim Karaca with React JS, Tailwind and love.</p>
        <p className='absolute bottom-2 text-white text-xs hidden xl:block'>© 2024 All rights reserved.</p>
        </main>

        <main className='flex flex-col justify-center w-full lg:w-full xl:w-1/2 py-12 bg-blue-600 text-center text-white text-2xl font-semibold gap-4'>
        <a className='hover:text-gray-300' href="https://www.linkedin.com/in/alimkaraca/" target='_blank' rel="noreferrer">LinkedIn</a>
        <a className='hover:text-gray-300' href="https://github.com/mehrfarben" target='_blank' rel="noreferrer">GitHub</a>
        <button className='hover:text-gray-300' onClick={openPdf}>My CV</button>

        </main>
    </div>
  )
}

export default Footer
