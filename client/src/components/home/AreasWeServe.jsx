/**
 * @file AreasWeServe.jsx
 * @description Pill list of city names dynamically pulled from companyInfo.js.
 */
import React from 'react';
import { MapPin } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import FadeIn from '../animations/FadeIn';
import companyInfo from '../../data/companyInfo';

const AreasWeServe = () => {
  return (
    <section className="py-20 bg-bg-light border-t border-gray-100">
      <div className="container mx-auto px-4">
        <SectionHeading title="Cities We Cover Across India" subtitle="Our Doorstep Service Reach" />
        
        <div className="flex flex-wrap justify-center gap-3 mt-8 max-w-5xl mx-auto">
          {companyInfo.areasServed.map((city, idx) => (
            <FadeIn key={idx} delay={idx * 0.03} direction="up">
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-text-dark font-medium text-sm hover:border-primary-light hover:bg-primary-light/10 hover:text-primary transition-all shadow-sm">
                <MapPin size={16} className="text-primary-light shrink-0" />
                <span>{city}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasWeServe;
