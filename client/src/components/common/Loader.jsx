/**
 * @file Loader.jsx
 * @description Green-themed SVG spinner with animated stroke.
 */
import React from 'react';

const Loader = ({ size = 'md' }) => {
  const sizes = { sm: 'w-6 h-6', md: 'w-10 h-10', lg: 'w-16 h-16' };
  
  return (
    <div className={`flex justify-center items-center ${sizes[size]}`}>
      <svg className="animate-spin text-primary drop-shadow-md" viewBox="0 0 50 50">
        <circle className="opacity-25" cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="5" />
        <circle className="opacity-75" cx="25" cy="25" r="20" fill="none" stroke="url(#gradient)" strokeWidth="5" strokeDasharray="30 100" strokeLinecap="round" />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22C55E" />
            <stop offset="100%" stopColor="#0B3D2E" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Loader;
