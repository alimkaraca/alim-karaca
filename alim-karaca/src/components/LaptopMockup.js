import React from 'react'
import LaptopScreen from '../assets/laptop.png'

const LaptopMockup = () => {
  return (
    <div class="mockup-container">
        <img src={LaptopScreen} alt="Laptop Mockup" class="mockup-image"/>
        <iframe title='What Order' src="https://whatorder.vercel.app" class="mockup-screen"></iframe>
    </div>
  )
}

export default LaptopMockup