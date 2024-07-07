import React from 'react'

const Navbar = () => {

  const handleScrollToHome = () => {
    const skillsSection = document.getElementById('home-section');
    skillsSection.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToSkills = () => {
    const skillsSection = document.getElementById('skills-section');
    skillsSection.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToWork = () => {
    const skillsSection = document.getElementById('work-section');
    skillsSection.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToExperience = () => {
    const skillsSection = document.getElementById('experience-section');
    skillsSection.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToContact = () => {
    const skillsSection = document.getElementById('contact-section');
    skillsSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='w-full grid grid-cols-2'>
    <p className='text-white pl-32 pt-6 text-3xl select-none'>
      alim_karaca
    </p>
    <div className='flex justify-end text-center'>
    <button className='navbtn'>home/</button>
    <button onClick={handleScrollToSkills} className='navbtn'>skills/</button>
    <button onClick={handleScrollToWork} className='navbtn'>work/</button>
    <button onClick={handleScrollToExperience} className='navbtn'>experience/</button>
    <button onClick={handleScrollToContact} className='navbtn mr-16'>contact/</button>
    </div>
    </div>
  )
}

export default Navbar