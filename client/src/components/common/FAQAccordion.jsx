/**
 * @file FAQAccordion.jsx
 * @description Animated accordion for FAQ sections with safe prop fallback.
 */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQAccordion = ({ items, faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqList = (items || faqs) || [];

  if (!Array.isArray(faqList) || faqList.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 w-full max-w-3xl mx-auto">
      {faqList.map((item, idx) => (
        <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:border-primary/30 transition-colors">
          <button
            className="w-full p-5 flex justify-between items-center text-left focus:outline-none"
            onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
          >
            <span className="font-heading font-semibold text-text-dark">{item.question}</span>
            <ChevronDown className={`transform transition-transform duration-300 text-primary ${activeIndex === idx ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {activeIndex === idx && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-5 pt-0 text-gray-600 font-body border-t border-gray-100">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
