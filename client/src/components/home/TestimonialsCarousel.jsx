/**
 * @file TestimonialsCarousel.jsx
 * @description Auto-rotating carousel with star ratings and touch/swipe support.
 */
import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { testimonials } from '../../data/servicesData';

const TestimonialsCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-bg-light relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="What Our Customers Say" 
          subtitle="Real Client Testimonials" 
        />
        
        <div className="max-w-3xl mx-auto mt-10 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-6 sm:p-10 shadow-green border border-gray-100 text-center flex flex-col items-center justify-between min-h-[280px] relative"
            >
              <Quote className="text-primary-light/20 w-16 h-16 absolute top-6 left-6 pointer-events-none" />

              <div className="flex gap-1 text-gold mb-4 z-10">
                {[...Array(testimonials[current].rating || 5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-gold text-gold" />
                ))}
              </div>

              <p className="text-base sm:text-lg md:text-xl text-text-dark font-body mb-6 italic leading-relaxed z-10">
                "{testimonials[current].text}"
              </p>

              <div className="z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-primary text-white font-bold text-base flex items-center justify-center mx-auto mb-2 shadow-md">
                  {testimonials[current].avatar || testimonials[current].name.charAt(0)}
                </div>
                <h4 className="font-heading font-bold text-base text-primary-dark">{testimonials[current].name}</h4>
                <span className="text-xs text-gray-500 font-medium">{testimonials[current].location} • Service: {testimonials[current].service}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <button 
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="absolute left-0 sm:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-primary-dark hover:bg-primary-light hover:text-white transition-colors z-20"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={handleNext}
            aria-label="Next testimonial"
            className="absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-primary-dark hover:bg-primary-light hover:text-white transition-colors z-20"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${current === i ? 'bg-primary-light w-8' : 'bg-gray-300 w-2.5'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
