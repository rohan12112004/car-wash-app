/**
 * @file StatsCounter.jsx
 * @description Stats with animated count-up numbers.
 */
import React from 'react';
import AnimatedCounter from '../animations/AnimatedCounter';

const StatsCounter = () => {
  return (
    <section className="py-20 bg-primary bg-[url('/mesh.png')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-primary-dark/80 mix-blend-multiply" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <AnimatedCounter end={25000} suffix="+" title="Cars Washed" />
          <AnimatedCounter end={10000} suffix="+" title="Happy Homes" />
          <AnimatedCounter end={50} suffix="+" title="Franchises" />
          <AnimatedCounter end={4.9} suffix="/5" title="Average Rating" />
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
