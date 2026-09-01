/**
 * @file SectionHeading.jsx
 * @description Reusable section heading with gradient text, subtitle, and dark mode support.
 */
import React from 'react';
import FadeIn from '../animations/FadeIn';

const SectionHeading = ({ title, subtitle, align = 'center', darkBackground = false }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center flex flex-col items-center' : 'text-left flex flex-col items-start'}`}>
    <FadeIn>
      {subtitle && (
        <span className={`font-bold tracking-wider uppercase text-xs sm:text-sm mb-2 block font-body ${darkBackground ? 'text-accent' : 'text-primary-light'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight ${
        darkBackground 
          ? 'text-white' 
          : 'text-text-dark'
      }`}>
        {title}
      </h2>
      <div className={`h-1 w-20 mt-4 rounded-full ${darkBackground ? 'bg-gradient-to-r from-accent to-accent-glow' : 'bg-gradient-to-r from-primary-light to-accent'}`} />
    </FadeIn>
  </div>
);

export default SectionHeading;
