import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProfessionalExperience = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleOpen = (key) => {
    setIsOpen((prevKey) => (prevKey === key ? null : key));
  };

  const variants = {
    hidden: { opacity: 1, height: 0, overflow: 'hidden' },
    visible: { opacity: 1, height: 'auto', overflow: 'hidden' }
  };

  const transition = {
    duration: 0.3,
    ease: [0.10, 0.62, 0.8, 1]
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen'>
      <h1 className='text-8xl text-gray-200 pb-7 font-extrabold text-center'>My Experience</h1>
      <div className="p-8 text-white w-1/2">
        <div onClick={() => toggleOpen('firstExp')} className="bg-green-700 p-6 rounded-lg mb-4 cursor-pointer">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xl font-semibold">Crypto and Web Developer</p>
              <p className="text-sm">2021 - 2022</p>
            </div>
            <span className="text-xl">{isOpen === 'firstExp' ? '-' : '+'}</span>
          </div>
          <AnimatePresence initial={false}>
            {isOpen === 'firstExp' && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
                transition={transition}
                className="mt-4 bg-gray-800 p-4 rounded-lg"
              >
                <p className='font-bold'>Remote</p>
                <p className="mt-3">
                  Developed smart contracts and their websites for several successful crypto projects.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-blue-700 text-white px-2 py-1 rounded">Solidity</span>
                  <span className="bg-blue-700 text-white px-2 py-1 rounded">React JS</span>
                  <span className="bg-blue-700 text-white px-2 py-1 rounded">CSS</span>
                  <span className="bg-blue-700 text-white px-2 py-1 rounded">Wix</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div onClick={() => toggleOpen('secondExp')} className="bg-green-700 p-6 rounded-lg mb-4 cursor-pointer">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xl font-semibold">Designer and Social Media Manager at DABAD</p>
              <p className="text-sm">2023 - Present</p>
            </div>
            <span className="text-xl">{isOpen === 'secondExp' ? '-' : '+'}</span>
          </div>
          <AnimatePresence initial={false}>
            {isOpen === 'secondExp' && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
                transition={transition}
                className="mt-4 bg-gray-800 p-4 rounded-lg"
              >
                <p className='font-bold'>Remote</p>
                <p>dabad.org</p>
                <p className="mt-4">
                  Designed and managed the association's all social media accounts.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-blue-700 text-white px-2 py-1 rounded">Photoshop</span>
                  <span className="bg-blue-700 text-white px-2 py-1 rounded">Figma</span>
                  <span className="bg-blue-700 text-white px-2 py-1 rounded">Canva</span>
                  <span className="bg-blue-700 text-white px-2 py-1 rounded">DaVinci Resolve</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div onClick={() => toggleOpen('thirdExp')} className="bg-green-700 p-6 rounded-lg mb-4 cursor-pointer">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xl font-semibold">Front-end Developer at New Mind AI</p>
              <p className="text-sm">2024 - Present</p>
            </div>
            <span className="text-xl">{isOpen === 'thirdExp' ? '-' : '+'}</span>
          </div>
          <AnimatePresence initial={false}>
            {isOpen === 'thirdExp' && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
                transition={transition}
                className="mt-4 bg-gray-800 p-4 rounded-lg"
              >
                <p className='font-bold'>Istanbul / Turkiye</p>
                <a href='https://newmind.ai' target='_blank' rel="noreferrer" className='pointer'>newmind.ai</a>
                <p className="mt-4">
                  Worked on bug fixes and new features for the company's web applications that facilitate legal processes using React JS.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-blue-700 text-white px-2 py-1 rounded">HTML</span>
                  <span className="bg-blue-700 text-white px-2 py-1 rounded">CSS</span>
                  <span className="bg-blue-700 text-white px-2 py-1 rounded">JavaScript</span>
                  <span className="bg-blue-700 text-white px-2 py-1 rounded">React JS</span>
                  <span className="bg-blue-700 text-white px-2 py-1 rounded">Node.js</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalExperience;
