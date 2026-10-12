import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(prevState => !prevState);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      toggleMenu();
    }
  };

  return (
    
    <div className='fixed right-0 top-0 z-50 lg:hidden'>
    <motion.div 
    initial={{ x: 80 }}
    animate={{ x: 0 }}
    transition={{ duration: 0.5 }}>
      <button
        className="p-2 text-white rounded-md focus:outline-none"
        onClick={toggleMenu}
      >
        <svg className='w-14 h-14' viewBox="0 0 24 24" fill="none">
          <path d="M5 7H19" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 12L19 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 17L19 17" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 backdrop-blur-lg bg-black bg-opacity-60 z-50 flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-1 right-1 p-2 text-white rounded-md focus:outline-none"
              onClick={toggleMenu}
            >
              <svg fill="#fff" className='w-12 h-12' viewBox="0 0 256 256" id="Flat">
                <path d="M208.48535,191.51465a12.0001,12.0001,0,0,1-16.9707,16.9707L128,144.9707,64.48535,208.48535a12.0001,12.0001,0,0,1-16.9707-16.9707L111.0293,128,47.51465,64.48535a12.0001,12.0001,0,0,1,16.9707-16.9707L128,111.0293l63.51465-63.51465a12.0001,12.0001,0,0,1,16.9707,16.9707L144.9707,128Z"/>
              </svg>
            </button>
            <nav className="space-y-10 text-white text-start text-xl font-bold flex flex-col">
              <button onClick={() => scrollToSection('home-section')} className='text-start'>//home</button>
              <button onClick={() => scrollToSection('skills-section')} className='text-start'>//skills</button>
              <button onClick={() => scrollToSection('work-section')} className='text-start'>//work</button>
              <button onClick={() => scrollToSection('experience-section')} className='text-start'>//experience</button>
              <button onClick={() => scrollToSection('contact-section')} className='text-start'>//contact</button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
