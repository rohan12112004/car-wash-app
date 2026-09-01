/**
 * @file Button.jsx
 * @description Reusable button component with clean, simple variants and white text defaults.
 */
import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-primary-light text-white font-bold hover:bg-primary shadow-md hover:shadow-lg cursor-pointer border-0',
  secondary: 'bg-white/15 text-white font-bold hover:bg-white/25 border-0 backdrop-blur-md cursor-pointer',
  outline: 'border border-gray-300 text-text-dark font-medium hover:bg-gray-50 bg-white cursor-pointer',
  ghost: 'text-white hover:bg-white/10 font-medium cursor-pointer border-0',
};

const sizes = {
  sm: 'px-4 py-2 text-xs sm:text-sm',
  md: 'px-6 py-3 text-sm sm:text-base',
  lg: 'px-8 py-4 text-base sm:text-lg font-bold',
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  onClick,
  disabled = false,
  isLoading = false,
  ...props
}) => {
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`rounded-full font-heading transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${variants[variant] || variants.primary} ${sizes[size]} ${className}`}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Loading...</span>
        </div>
      ) : (
        <span className="flex items-center gap-2">{children}</span>
      )}
    </motion.button>
  );
};

export default Button;
