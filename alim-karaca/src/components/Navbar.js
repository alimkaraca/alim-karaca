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
    <div className='w-full grid grid-cols-2 fixed z-10 backdrop-blur-md'>
    <p className='text-white p-4 lg:pl-12 lg:pt-6 text-3xl select-none'>
      alim_karaca.
    </p>
    <main className='hidden lg:flex justify-end text-center '>
    <button onClick={handleScrollToHome} className='navbtn'>home/</button>
    <button onClick={handleScrollToSkills} className='navbtn'>skills/</button>
    <button onClick={handleScrollToWork} className='navbtn'>work/</button>
    <button onClick={handleScrollToExperience} className='navbtn'>experience/</button>
    <button onClick={handleScrollToContact} className='navbtn mr-16'>contact/</button>
    </main>

    <main className='flex justify-end lg:hidden'>
      <section className='text-white pr-12 pt-6'>
button
      </section>
    </main>
    </div>
  )
}

export default Navbar