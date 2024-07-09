import React, { useState, useRef, useEffect } from 'react';

const ExperienceRoadmap = () => {
  const experiences = [
    { year: '2020', description: 'Started at Company X' },
    { year: '2021', description: 'Promoted to Senior Developer' },
    { year: '2022', description: 'Joined Company Y' },
    { year: '2023', description: 'Started own business' },
    // Add more experiences here
  ];

  const [activePopup, setActivePopup] = useState(null);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setActivePopup(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const togglePopup = (index) => {
    setActivePopup(activePopup === index ? null : index);
  };

  return (
    <div className="flex items-center justify-center my-12 relative">
      <div className="h-3 bg-gray-300 w-2/3 relative">
        {experiences.map((exp, index) => (
          <React.Fragment key={index}>
            <div
              className="absolute w-8 h-8 bg-blue-600 rounded-full cursor-pointer hover:bg-red-600"
              style={{
                left: `${index * (100 / (experiences.length - 1))}%`,
                transform: 'translate(-50%, -50%)',
                top: '5px',
                zIndex: 10,
              }}
              onClick={() => togglePopup(index)}
            />
            {activePopup === index && (
  <div
    ref={popupRef}
    className={`popup absolute text-black bg-white p-6 rounded-md ${activePopup === index ? 'active' : ''}`}
    style={{
      left: `${index * (100 / (experiences.length - 1))}%`,
                  transform: 'translateX(-50%)',
                  top: '20px',
                  zIndex: 20,
                }}
                onClick={() => togglePopup(index)}
              >
                <h4 className="text-lg font-semibold">{exp.year}</h4>
                <p className="text-sm">{exp.description}</p>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ExperienceRoadmap;
