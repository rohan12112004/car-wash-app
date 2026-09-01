/**
 * @file ServiceDetailTemplate.jsx
 * @description Master template for individual service pages with luxury gradient CTA banner and animated buttons.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight, ShieldCheck, Clock, Sparkles, Phone, Star } from 'lucide-react';
import PageWrapper from '../layout/PageWrapper';
import SectionHeading from '../common/SectionHeading';
import ServiceCard from './ServiceCard';
import FAQAccordion from '../common/FAQAccordion';
import BeforeAfterSlider from '../common/BeforeAfterSlider';
import Button from '../common/Button';
import companyInfo from '../../data/companyInfo';
import { getRelatedServices } from '../../data/servicesData';

const ServiceDetailTemplate = ({ service }) => {
  const item = service || {};
  const title = item.name || item.title || 'Cleaning Service';
  const description = item.description || item.shortDescription || '';
  const features = item.features || [];
  const howItWorks = item.howItWorks || [];
  const faqs = item.faqs || [];
  const beforeAfter = item.beforeAfterImages || item.beforeAfter;
  const heroImage = item.heroImage || '/images/car_foam_wash.jpg';
  const related = getRelatedServices(item) || [];

  let formattedPrice = '₹499';
  if (typeof item.price === 'object' && item.price !== null) {
    formattedPrice = `${item.price.currency || '₹'}${item.price.starting || 499}`;
  } else if (item.price) {
    formattedPrice = typeof item.price === 'number' || !String(item.price).startsWith('₹') 
      ? `₹${item.price}` 
      : String(item.price);
  }

  return (
    <PageWrapper
      title={`${title} | ${companyInfo.name}`}
      description={description}
    >
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 bg-bg-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img src={heroImage} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent text-xs font-bold mb-4 border border-accent/30">
            <Sparkles size={14} />
            <span>Doorstep Service Package</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold mb-6 leading-tight">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-gray-200 mb-8 max-w-2xl leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10">
            <div>
              <span className="text-xs text-gray-400 font-medium block uppercase">Starting Rate</span>
              <span className="text-3xl font-extrabold text-accent font-heading">{formattedPrice}</span>
            </div>

            {item.duration && (
              <div className="border-l border-white/20 pl-6">
                <span className="text-xs text-gray-400 font-medium block uppercase">Est. Duration</span>
                <span className="text-lg font-bold text-white flex items-center gap-1.5">
                  <Clock size={16} className="text-accent" /> {item.duration}
                </span>
              </div>
            )}

            <div className="ml-auto">
              <Link to={`/book?service=${item.slug}`}>
                <Button size="lg" className="bg-gradient-to-r from-primary-light via-accent to-accent-glow text-bg-dark font-extrabold shadow-green-lg hover:scale-105 active:scale-95 transition-all duration-300">
                  <span>Book Now</span>
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      {features.length > 0 && (
        <section className="py-20 bg-bg-light">
          <div className="container mx-auto px-4 max-w-5xl">
            <SectionHeading title="What's Included" subtitle="Comprehensive Package Coverage" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {features.map((feat, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={18} />
                  </div>
                  <span className="text-sm font-semibold text-gray-800 leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Before / After Section */}
      {beforeAfter && (
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <SectionHeading title="Transformation Proof" subtitle="Before & After Results" />
            <div className="h-80 sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 mt-8">
              <BeforeAfterSlider 
                beforeImage={beforeAfter.before || '/images/hatchback_wash.jpg'} 
                afterImage={beforeAfter.after || '/images/car_foam_wash.jpg'} 
              />
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section className="py-20 bg-bg-light border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-3xl">
            <SectionHeading title="Frequently Asked Questions" subtitle="Got Questions?" />
            <div className="mt-8">
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {related.length > 0 && (
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-6xl">
            <SectionHeading title="Related Services" subtitle="More Solutions For You" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              {related.map((relService, idx) => (
                <ServiceCard key={relService.id || idx} service={relService} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BOTTOM CTA BANNER (WITH GRADIENT & ANIMATED BUTTONS) */}
      <section className="py-20 bg-bg-dark text-white text-center relative overflow-hidden border-t border-white/10">
        {/* Animated Background Mesh */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-primary-light/20 via-accent/20 to-primary/20 blur-3xl rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent text-xs font-extrabold mb-4 border border-accent/30 animate-pulse">
            <Sparkles size={14} />
            <span>100% Satisfaction Guarantee</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold mb-4 tracking-tight">
            Ready for a Spotless Finish?
          </h2>
          
          <p className="text-gray-300 text-base sm:text-lg mb-10 max-w-xl mx-auto">
            Book your <strong>{title}</strong> session online in less than 2 minutes, or give our support desk a call.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-5">
            {/* Button 1: Gradient with Shimmer & Scale Animation */}
            <Link to={`/book?service=${item.slug}`}>
              <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-gradient-to-r from-primary-light via-accent to-accent-glow text-bg-dark font-extrabold px-9 py-4 shadow-green-lg border-0 text-base flex items-center gap-2 group">
                  <span>Book Now ({formattedPrice})</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
                </Button>
              </motion.div>
            </Link>

            {/* Button 2: Glass Gradient Border with Pulse Icon */}
            <a href={`tel:${companyInfo.phone}`}>
              <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-9 py-4 text-base flex items-center gap-2.5">
                  <Phone size={18} className="text-accent animate-bounce" />
                  <span>Call {companyInfo.phone}</span>
                </Button>
              </motion.div>
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default ServiceDetailTemplate;
