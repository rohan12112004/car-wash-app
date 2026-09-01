/**
 * @file AnimatedCounter.jsx
 * @description Smooth 60fps animated count-up component using pure React & IntersectionObserver.
 * WHY: Eliminates module export resolution bugs from third-party libraries while offering 60fps ease-out count-ups.
 */
import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ end, suffix = '', prefix = '', decimals, duration = 2, title }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);

  const isDecimal = typeof end === 'number' && !Number.isInteger(end);
  const numDecimals = decimals !== undefined ? decimals : (isDecimal ? 1 : 0);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime = null;
    let animationFrame = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Smooth ease-out cubic curve
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      
      setCount(easeOutProgress * end);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [hasAnimated, end, duration]);

  const formattedCount = numDecimals > 0 
    ? count.toFixed(numDecimals) 
    : Math.floor(count).toLocaleString();

  return (
    <div 
      ref={containerRef}
      className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 text-center shadow-lg hover:border-accent/40 transition-colors"
    >
      <div className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-accent mb-2">
        {prefix}{formattedCount}{suffix}
      </div>
      <p className="text-xs sm:text-sm text-gray-200 font-body font-semibold uppercase tracking-wider">
        {title}
      </p>
    </div>
  );
};

export default AnimatedCounter;
