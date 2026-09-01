/**
 * @file Hero.jsx
 * @description Hero section with clean, simple buttons (solid green + borderless glass) and white text.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Star, Clock, Droplets, ArrowDown } from 'lucide-react';
import FadeIn from '../animations/FadeIn';
import GradientBlob from '../animations/GradientBlob';
import Button from '../common/Button';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-bg-dark text-text-light pt-28 pb-16">
      {/* Dynamic Animated Gradient Mesh Background */}
      <GradientBlob />
      
      {/* Background Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay z-0"
        style={{ backgroundImage: 'url(/images/hero_banner.jpg)' }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-95 z-0" />
      
      {/* Ambient Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-light/15 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="container mx-auto px-4 relative z-10 my-auto">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Trust Pill Badge */}
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-accent text-xs sm:text-sm font-bold mb-6 shadow-green">
              <Sparkles size={16} className="text-accent animate-pulse" />
              <span>India's #1 Doorstep Cleaning & Franchise Network</span>
            </div>
          </FadeIn>
          
          {/* Headline */}
          <FadeIn delay={0.3}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-tight tracking-tight mb-6">
              Spotless Cleaning for Your <br className="hidden sm:inline" />
              <span className="text-gradient">Vehicle & Home</span>
            </h1>
          </FadeIn>
          
          {/* Tagline / Subtitle */}
          <FadeIn delay={0.5}>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
              Professional foam wash, detailing, commercial fleet care, and home cleaning delivered right to your doorstep with guaranteed 100% satisfaction.
            </p>
          </FadeIn>
          
          {/* SIMPLE CLEAN BUTTONS (WHITE TEXT, NO HEAVY BORDERS) */}
          <FadeIn delay={0.7}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              <Link to="/book" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto">
                  Book Service Now
                </Button>
              </Link>

              <Link to="/franchise" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Franchise Inquiry
                </Button>
              </Link>
            </div>
          </FadeIn>
          
          {/* Trust Badges Strip */}
          <FadeIn delay={0.9}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/15 max-w-3xl mx-auto text-left">
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <ShieldCheck className="w-8 h-8 text-accent shrink-0" />
                <div>
                  <h4 className="text-white text-xs font-bold">100% Guaranteed</h4>
                  <p className="text-gray-300 text-[11px]">Satisfaction or re-wash</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <Clock className="w-8 h-8 text-accent shrink-0" />
                <div>
                  <h4 className="text-white text-xs font-bold">On-Time Arrival</h4>
                  <p className="text-gray-300 text-[11px]">Doorstep service on slot</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <Star className="w-8 h-8 text-gold shrink-0 fill-gold" />
                <div>
                  <h4 className="text-white text-xs font-bold">4.9 / 5 Rating</h4>
                  <p className="text-gray-300 text-[11px]">5,000+ happy clients</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <Droplets className="w-8 h-8 text-accent shrink-0" />
                <div>
                  <h4 className="text-white text-xs font-bold">Eco-Friendly</h4>
                  <p className="text-gray-300 text-[11px]">pH neutral & safe products</p>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>

      {/* Scroll Down Bouncing Arrow */}
      <div className="relative z-10 flex justify-center pt-8">
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-gray-300 text-xs cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight - 100, behavior: 'smooth' })}
        >
          <span>Scroll to explore</span>
          <ArrowDown size={16} className="text-accent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
