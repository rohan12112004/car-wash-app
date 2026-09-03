/**
 * @file NotFoundPage.jsx
 * @description Custom animated 404 page.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';

const NotFoundPage = () => {
  // Bubble animation variants
  const bubbleVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <PageWrapper
      title="404 - Page Not Found | Premia Carwash"
      description="The page you are looking for does not exist."
    >
      <div className="min-h-screen bg-bg-dark flex items-center justify-center relative overflow-hidden px-4">
        
        {/* Floating Bubbles Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              variants={bubbleVariants}
              animate="animate"
              style={{
                animationDelay: `${i * 0.5}s`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              className="absolute w-12 h-12 rounded-full bg-primary-light/10 border border-primary-light/20 backdrop-blur-sm"
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-lg">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
          >
            <h1 className="text-9xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent mb-4">
              404
            </h1>
            <h2 className="text-3xl font-heading font-bold text-text-light mb-6">
              Oops! This page is squeaky clean.
            </h2>
            <p className="text-text-light/70 font-body text-lg mb-10">
              We couldn't find the page you were looking for. It might have been washed away or moved to a different URL.
            </p>
            
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-primary/30"
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default NotFoundPage;
