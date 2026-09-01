/**
 * @file ParallaxSection.jsx
 * @description Section with parallax background effect.
 */
import React from 'react';

const ParallaxSection = ({ bgImage, children, overlay = 'bg-black/50', className = '' }) => {
  return (
    <div 
      className={`relative bg-fixed bg-center bg-cover ${className}`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={`absolute inset-0 ${overlay}`} />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
