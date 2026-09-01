/**
 * @file PopularServices.jsx
 * @description Carousel of top popular service cards from servicesData.js.
 */
import React from 'react';
import SectionHeading from '../common/SectionHeading';
import ServiceCard from '../services/ServiceCard';
import FadeIn from '../animations/FadeIn';
import { carWashServices, homeCleaningServices, commercialServices } from '../../data/servicesData';

// Select top featured services across categories
const popularList = [
  carWashServices[0],    // Foam Wash
  carWashServices[3],    // Full Detailing
  homeCleaningServices[0], // Sofa Cleaning
  commercialServices[0],   // Truck Cleaning
  homeCleaningServices[3], // AC Cleaning
  carWashServices[2],    // Car Polishing
];

const PopularServices = () => {
  return (
    <section className="py-20 bg-bg-light relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Most Popular Services" 
          subtitle="Trending Customer Favorites" 
        />
        
        {/* Horizontal scroll container with snap */}
        <div className="flex overflow-x-auto gap-6 pb-8 pt-2 hide-scrollbar snap-x snap-mandatory">
          {popularList.map((service, idx) => (
            <div key={service.id || idx} className="min-w-[300px] sm:min-w-[360px] max-w-[380px] snap-start shrink-0">
              <FadeIn delay={idx * 0.1}>
                <ServiceCard service={service} isPopular={idx === 0 || idx === 1} />
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
