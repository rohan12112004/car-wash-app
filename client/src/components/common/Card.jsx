/**
 * @file Card.jsx
 * @description Reusable Card component with glassmorphism and hover effects.
 */
import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-100 ${
        hover ? 'hover:shadow-green hover:border-accent/30 transition-shadow' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
