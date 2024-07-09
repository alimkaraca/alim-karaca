import React, { useEffect, useState } from 'react';

const RadialGradientMover = ({ children }) => {
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const mouseXpercentage = Math.round((event.clientX / windowWidth) * 100);
      const mouseYpercentage = Math.round((event.clientY / windowHeight) * 100);

      setGradientPosition({ x: mouseXpercentage, y: mouseYpercentage });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const gradientStyle = {
    background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, #1C2735 5%, #151d28 50%)`,
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
    pointerEvents: 'none' 
  };

  return (
    <div>
      <div className="radial-gradient" style={gradientStyle}></div>
      {children}
    </div>
  );
};

export default RadialGradientMover;
