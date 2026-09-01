/**
 * @file Input.jsx
 * @description Styled input component with label and error handling.
 */
import React, { forwardRef } from 'react';

const Input = forwardRef(({ label, error, className = '', ...props }, ref) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-sm font-medium text-text-dark font-body">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={`w-full px-4 py-2 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-body ${
          error ? 'border-red-500 animate-[shake_0.5s]' : 'border-gray-200'
        } ${className}`}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-500 mt-1">{error}</span>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
