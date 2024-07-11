import React, { useState } from 'react';

const ProfessionalExperience = () => {
  const [openKey, setOpenKey] = useState(null);

  const toggleOpen = (key) => {
    setOpenKey(openKey === key ? null : key);
  };

  const experienceData = [
    {
      key: 'firstExp',
      title: 'Crypto and Web Developer',
      date: '2021 - 2022',
      location: 'Remote',
      description: 'Developed smart contracts and their websites for several successful crypto projects.',
      technologies: ['Solidity', 'React JS', 'CSS', 'Wix'],
    },
    {
      key: 'secondExp',
      title: 'Designer and Social Media Manager at DABAD',
      date: '2023 - Present',
      location: 'Remote',
      description: 'Designed and managed the association\'s all social media accounts.',
      technologies: ['Photoshop', 'Figma', 'Canva', 'DaVinci Resolve'],
    },
    {
      key: 'thirdExp',
      title: 'Front-end Developer at New Mind AI',
      date: '2024 - Present',
      location: 'Istanbul / Turkiye',
      description: 'Worked on bug fixes and new features for the company\'s web applications that facilitate legal processes using React JS.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React JS', 'Node.js'],
    },
  ];

  return (
    <div className='flex flex-col justify-center items-center py-56 h-full w-screen'>
      <h1 className='text-6xl lg:text-8xl text-gray-200 pb-7 font-extrabold text-center'>My Experience</h1>
      <div className="p-8 text-white w-5/6">
        {experienceData.map(({ key, title, date, location, description, technologies }) => (
          <div
            key={key}
            onClick={() => toggleOpen(key)}
            className={`p-6 rounded-lg mb-4 cursor-pointer ${openKey === key ? 'bg-green-600' : 'bg-green-700'}`}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xl font-semibold">{title}</p>
                <p className="text-sm">{date}</p>
              </div>
              <span className="pl-8 text-xl font-extrabold">{openKey === key ? '-' : '+'}</span>
            </div>
            <div
              className={`transition-max-height duration-700 ease-in-out overflow-hidden ${openKey === key ? 'max-h-screen' : 'max-h-0'}`}
            >
              <div className="mt-4 bg-gray-800 p-4 rounded-lg">
                {location && <p className='font-bold'>{location}</p>}
                {key === 'firstExp' && <a href='https://dabad.org' target='_blank' rel="noreferrer" className='pointer'>dabad.org</a>}
                {key === 'thirdExp' && <a href='https://newmind.ai' target='_blank' rel="noreferrer" className='pointer'>newmind.ai</a>}
                <p>{description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <span key={technology} className="bg-blue-700 text-white px-2 py-1 rounded">{technology}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalExperience;
