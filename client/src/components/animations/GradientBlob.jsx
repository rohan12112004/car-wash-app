/**
 * @file GradientBlob.jsx
 * @description Animated gradient mesh background blobs.
 */
import React from 'react';
import { motion } from 'framer-motion';

const GradientBlob = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-40 -right-40 w-96 h-96 bg-primary-light/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          x: [0, -70, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-40 -left-20 w-80 h-80 bg-accent/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="absolute -bottom-20 left-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2"
      />
    </div>
  );
};

export default GradientBlob;
