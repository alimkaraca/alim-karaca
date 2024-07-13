import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProfessionalExperience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [openKey, setOpenKey] = useState(null);

  const toggleOpen = (key) => {
    setOpenKey(openKey === key ? null : key);
  };

  const experienceData = [
    {
      key: 'firstExp',
      title: 'Crypto & Web Developer',
      date: '2021 - 2022',
      location: 'Remote',
      description: 'Developed smart contracts and their websites for several successful crypto projects.',
      technologies: ['Solidity', 'React JS', 'CSS', 'Wix'],
    },
    {
      key: 'secondExp',
      title: 'Designer & Social Media Manager at DABAD',
      date: '2023 - Present',
      location: 'Remote',
      description: 'Designed and managed the association\'s all social media accounts. I also did the filming and editing of the videos for the association\'s YouTube channel.',
      technologies: ['Photoshop', 'Figma', 'Canva', 'DaVinci Resolve'],
    },
    {
      key: 'thirdExp',
      title: 'Front-end Developer at New Mind AI',
      date: '2024 - Present',
      location: 'Istanbul / Turkiye',
      description: 'Worked on bug fixes and new features on both the front-end and back-end for the company\'s web applications that facilitate legal processes using React JS and Node.js.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React JS', 'Node.js'],
    },
  ];

  const variants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.4 },
    }),
  };

  return (
    <>
      <div className='flex flex-col justify-center items-center pt-32 pb-28 h-full w-screen select-none'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -30 }}
          transition={{ duration: 0.2 }}>
          <h1 className='text-4xl lg:text-6xl text-gray-200 pl-12 sm:pl-0 md:px-6 font-extrabold text-start'>Professional Experience</h1>
        </motion.div>

        <div className="p-8 text-white w-11/12 md:w-3/5 lg:2/3">
          {experienceData.map(({ key, title, date, location, description, technologies }, index) => (
            <motion.div
              ref={ref}
              key={key}
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
              className={`p-6 rounded-lg mb-4 hover:bg-green-600 ${openKey === key ? 'bg-green-600' : 'bg-green-700'}`}
              onClick={() => toggleOpen(key)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg lg:text-xl text-white font-semibold">{title}</p>
                  <p className="text-sm text-gray-200">{date}</p>
                </div>
                <span className="pl-8 text-xl font-extrabold">{openKey === key ? '-' : '+'}</span>
              </div>
              <div
                className={`transition-max-height duration-700 ease-in-out overflow-hidden ${openKey === key ? 'max-h-screen' : 'max-h-0'}`}
              >
                <div className="mt-4 bg-gray-800 p-4 rounded-lg">
                  {location && <p className='text-red-400 font-bold pb-1'>{location}</p>}
                  {key === 'secondExp' && <a href='https://www.instagram.com/beyin_arastirmalari/' target='_blank' rel="noreferrer" className='underline pointer text-blue-400'>Instagram</a>}
                  {key === 'thirdExp' && <a href='https://newmind.ai' target='_blank' rel="noreferrer" className='underline pointer text-blue-400'>newmind.ai</a>}
                  <p className='pt-2 text-sm'>{description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {technologies.map((technology) => (
                      <span key={technology} className="bg-blue-700 text-xs text-white px-2 py-1 rounded">{technology}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfessionalExperience;
