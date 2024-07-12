import React from 'react'
import { motion } from 'framer-motion';

const Navbar = () => {

  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToHome = () => scrollToSection('home-section');
  const handleScrollToSkills = () => scrollToSection('skills-section');
  const handleScrollToWork = () => scrollToSection('work-section');
  const handleScrollToExperience = () => scrollToSection('experience-section');
  const handleScrollToContact = () => scrollToSection('contact-section');

  return (
    <div className='w-full grid grid-cols-2 fixed z-10 backdrop-blur-md'>

    <motion.div 
    initial={{ x: -200 }}
    animate={{ x: 0 }}
    transition={{ duration: 0.5 }}>
    <p onClick={handleScrollToHome} className='text-white p-4 lg:pl-12 lg:pt-6 text-3xl select-none cursor-pointer hover:translate-x-4 duration-150 hover:text-red-600 active:translate-x-5 active:text-blue-600'>
      alim_karaca.
    </p>
    </motion.div>
    <main className='hidden lg:flex justify-end text-center '>

    <motion.div
    initial={{ y: -70 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.6 }}>
    <button onClick={handleScrollToHome} className='navbtn'>home/</button>
    </motion.div>

    <motion.div
    initial={{ y: -80 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.7 }}>
    <button onClick={handleScrollToSkills} className='navbtn'>skills/</button>
    </motion.div>

    <motion.div
    initial={{ y: -90 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.8 }}>
    <button onClick={handleScrollToWork} className='navbtn'>work/</button>
    </motion.div>

    <motion.div
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.9 }}>
    <button onClick={handleScrollToExperience} className='navbtn'>experience/</button>
    </motion.div>

    <motion.div
    initial={{ y: -110 }}
    animate={{ y: 0 }}
    transition={{ duration: 1 }}>
    <button onClick={handleScrollToContact} className='navbtn mr-16'>contact/</button>
    </motion.div>
    </main>
    </div>
  )
}

export default Navbar