import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';



const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const menuVariants = {
      open: {
        x: '0%',
        opacity: 1,
        transition: {
          x: { type: 'spring', stiffness: 1000, damping: 100 },
          opacity: { duration: 0.2 },
        },
      },
      closed: {
        x: '-100%',
        opacity: 0,
        transition: {
          x: { type: 'spring', stiffness: 1000, damping: 100 },
          opacity: { duration: 0.2 },
        },
      },
    };
  
    return (
      <div className="relative">
        <button className="hamburger-button" onClick={toggleMenu}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </button>
        <motion.div
          className="absolute right-0 top-0 h-full w-full bg-black bg-opacity-70 backdrop-blur-lg"
          variants={menuVariants}
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          onClick={toggleMenu}
        />
        <motion.div
          className="absolute right-0 top-0 h-full w-full flex items-center justify-center"
          variants={menuVariants}
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="h-1 w-8 bg-white rounded-full" />
            <div className="h-1 w-8 bg-white rounded-full" />
            <div className="h-1 w-8 bg-white rounded-full" />
          </div>
        </motion.div>
      </div>
    );
  };

  export default HamburgerMenu;