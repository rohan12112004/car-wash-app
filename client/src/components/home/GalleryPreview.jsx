/**
 * @file GalleryPreview.jsx
 * @description Before/after gallery preview section with 4 interactive comparison sliders.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import BeforeAfterSlider from '../common/BeforeAfterSlider';
import FadeIn from '../animations/FadeIn';
import Button from '../common/Button';
import { PLACEHOLDER_IMAGES } from '../../data/servicesData';

const galleryItems = [
  {
    title: 'Foam Wash & Paint Correction',
    service: 'Car Wash',
    before: '/images/hatchback_wash.jpg',
    after: '/images/car_foam_wash.jpg',
  },
  {
    title: 'Full Vehicle Detailing',
    service: 'Car Wash',
    before: '/images/suv_wash.jpg',
    after: '/images/sedan_detailing.jpg',
  },
  {
    title: 'Commercial Truck Cleaning',
    service: 'Commercial',
    before: '/images/truck_cleaning.jpg',
    after: '/images/fleet_bus_wash.jpg',
  },
  {
    title: 'Sofa & Upholstery Restoration',
    service: 'Home Cleaning',
    before: '/images/carpet_cleaning.jpg',
    after: '/images/sofa_cleaning.jpg',
  },
];

const GalleryPreview = () => {
  return (
    <section className="py-20 bg-bg-dark text-white relative">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="See The Transformation" 
          subtitle="Real Before & After Results" 
          darkBackground={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {galleryItems.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.15}>
              <div className="rounded-3xl p-4 bg-white/5 backdrop-blur-md shadow-2xl border border-white/10 group hover:border-accent/40 transition-colors">
                <div className="flex justify-between items-center mb-3 px-2">
                  <h4 className="font-heading font-bold text-base text-white flex items-center gap-2">
                    <Sparkles size={16} className="text-accent" />
                    {item.title}
                  </h4>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary-light/20 text-accent border border-primary-light/30">
                    {item.service}
                  </span>
                </div>
                
                <BeforeAfterSlider beforeImage={item.before} afterImage={item.after} />
                
                <div className="flex justify-between items-center mt-3 px-2 text-xs text-gray-400">
                  <span>← Drag slider to compare →</span>
                  <span className="text-accent font-semibold">100% Restored</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/gallery">
            <Button variant="outline" size="md" className="border-accent text-accent hover:bg-accent hover:text-bg-dark">
              View Full Gallery <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
