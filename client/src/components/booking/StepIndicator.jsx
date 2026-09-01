/**
 * @file StepIndicator.jsx
 * @description Visual progress indicator for multi-step form.
 */
import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const StepIndicator = ({ currentStep, steps }) => {
  return (
    <div className="w-full py-6">
      <div className="flex items-center justify-between relative">
        {/* Background Line */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 rounded-full z-0" />
        
        {/* Active Line */}
        <motion.div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary rounded-full z-0"
          initial={{ width: '0%' }}
          animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          transition={{ duration: 0.3 }}
        />

        {steps.map((step, idx) => {
          const stepNumber = idx + 1;
          const isCompleted = stepNumber < currentStep;
          const isActive = stepNumber === currentStep;
          
          return (
            <div key={step} className="relative z-10 flex flex-col items-center gap-2">
              <motion.div 
                initial={false}
                animate={{
                  backgroundColor: isCompleted || isActive ? '#14532D' : '#FFFFFF',
                  borderColor: isCompleted || isActive ? '#14532D' : '#E5E7EB',
                  scale: isActive ? 1.2 : 1
                }}
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors shadow-sm`}
              >
                {isCompleted ? (
                  <Check size={14} className="text-white" />
                ) : (
                  <span className={`text-xs font-bold ${isActive ? 'text-white' : 'text-gray-400'}`}>
                    {stepNumber}
                  </span>
                )}
              </motion.div>
              <span className={`text-[10px] sm:text-xs font-medium absolute -bottom-6 whitespace-nowrap ${isActive ? 'text-primary-dark font-bold' : 'text-gray-500'}`}>
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepIndicator;
