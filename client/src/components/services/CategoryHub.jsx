/**
 * @file CategoryHub.jsx
 * @description Master category hub page template for Car Wash, Commercial, and Home Cleaning.
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import ServiceCard from './ServiceCard';
import Button from '../common/Button';
import FadeIn from '../animations/FadeIn';
import companyInfo from '../../data/companyInfo';

const CategoryHub = ({ title, categoryName, description, services = [] }) => {
  const displayTitle = title || categoryName || 'Our Services';

  return (
    <>
      <Helmet>
        <title>{displayTitle} | {companyInfo.name}</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className="pt-32 pb-24 bg-bg-light min-h-screen">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading title={displayTitle} subtitle="Explore Specialized Solutions" />
          {description && (
            <p className="text-center text-gray-600 max-w-2xl mx-auto -mt-6 mb-12 text-base leading-relaxed">
              {description}
            </p>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {services.map((service, idx) => (
              <FadeIn key={service.id || idx} delay={idx * 0.08}>
                <ServiceCard service={service} isPopular={idx === 0} />
              </FadeIn>
            ))}
          </div>

          {/* Bottom CTA Banner with Gradient & Micro-Animations */}
          <div className="bg-bg-dark text-white rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl border border-white/10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-gradient-to-r from-primary-light/20 via-accent/20 to-primary/20 blur-3xl rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent text-xs font-extrabold mb-4 border border-accent/30 animate-pulse">
                <Sparkles size={14} />
                <span>Premier Doorstep Cleaning</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold mb-4">
                Ready for a Spotless Finish?
              </h2>
              
              <p className="text-gray-300 text-sm sm:text-base mb-8">
                Book your <strong>{displayTitle}</strong> appointment online in under 2 minutes or speak directly with our team.
              </p>

              <div className="flex flex-wrap justify-center items-center gap-4">
                <Link to="/book">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="bg-gradient-to-r from-primary-light via-accent to-accent-glow text-bg-dark font-extrabold px-8 py-3.5 shadow-green-lg border-0 flex items-center gap-2 group">
                      <span>Book Online Now</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </Link>

                <a href={`tel:${companyInfo.phone}`}>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-8 py-3.5 flex items-center gap-2">
                      <Phone size={18} className="text-accent animate-bounce" />
                      <span>Call {companyInfo.phone}</span>
                    </Button>
                  </motion.div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryHub;
