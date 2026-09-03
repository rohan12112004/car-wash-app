/**
 * @file AboutPage.jsx
 * @description About us page for Premia Carwash featuring Founder Sultan and 2025 Founding Story.
 */

import React from 'react';
import { Target, Eye, Award, Calendar, UserCheck, ShieldCheck, Sparkles } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import FadeIn from '../components/animations/FadeIn';
import companyInfo from '../data/companyInfo';

const AboutPage = () => {
  return (
    <PageWrapper
      title={`About Us | ${companyInfo.name}`}
      description={`Learn about Premia Carwash, founded in 2025 by Sultan to revolutionize doorstep car washing and detailing.`}
    >
      <div className="bg-bg-light min-h-screen pt-32 pb-24">
        
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary-dark text-xs font-bold mb-4">
              <Sparkles size={14} className="text-primary-light" />
              <span>Founded in 2025</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-primary-dark mb-6">
              The {companyInfo.name} Journey
            </h1>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto font-body leading-relaxed">
              Founded in <strong>2025</strong> by <strong>Sultan and Nitin Mukesh</strong>, & powered by <strong>Premia Group PVT. LTD.</strong> Premia Carwash is driven by a passion for excellence in automotive care. We deliver premium car cleaning, detailing, enhancement, and protection services, combining professional expertise with meticulous attention to detail. Our goal is simple — to make every vehicle look its finest and every customer experience truly exceptional.
            </p>
          </FadeIn>
        </div>

        {/* Founder Spotlight Card */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <FadeIn>
            <div className="bg-bg-dark text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 text-center">
                <div className="w-32 h-32 mx-auto rounded-3xl bg-gradient-to-tr from-primary-light to-accent flex items-center justify-center font-heading font-extrabold text-bg-dark text-3xl shadow-xl mb-4">
                  S & N
                </div>
                <h3 className="text-2xl font-heading font-extrabold text-white">Sultan & Nitin Mukesh</h3>
                <span className="text-xs text-accent font-bold uppercase tracking-wider block mt-1">Co-Founders</span>
                <span className="inline-block mt-2 px-3 py-1 rounded-full bg-white/10 text-[11px] text-gray-300">Est. 2025</span>
              </div>

              <div className="md:col-span-8 space-y-4 text-gray-200 text-sm sm:text-base leading-relaxed">
                <h4 className="text-xl font-heading font-bold text-white border-b border-white/15 pb-2">
                  Founders' Vision
                </h4>
                <p>
                  "In 2025, we recognized that car owners in India faced a major challenge: spending hours waiting at traditional service centers or settling for quick, scratch-inducing local washes. We founded <strong>Premia Carwash</strong> to redefine the experience."
                </p>
                <p>
                  "By combining pH-neutral snow foam technology, scratch-free microfiber techniques, and 100% doorstep convenience, our team ensures your vehicle receives true white-glove treatment right outside your home or office. Together with co-founder Nitin Mukesh, powered by Premia Group PVT. LTD., we are building India's most trusted automotive care brand."
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Mission & Vision */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.2}>
              <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-200 hover:shadow-xl transition-shadow group h-full">
                <div className="w-14 h-14 bg-primary-light/10 text-primary-light rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Target size={28} />
                </div>
                <h2 className="text-2xl font-heading font-bold text-primary-dark mb-4">Our Mission</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To provide doorstep eco-friendly cleaning solutions that exceed customer expectations, preserve vehicle paint longevity, and create healthier living environments.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-200 hover:shadow-xl transition-shadow group h-full">
                <div className="w-14 h-14 bg-accent/20 text-primary-dark rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Eye size={28} />
                </div>
                <h2 className="text-2xl font-heading font-bold text-primary-dark mb-4">Our Vision</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To become India's #1 recognized doorstep carwash and franchise network, known for innovation, reliability, and 100% customer joy.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-bg-dark py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mb-3">
                  Our Core Pillars
                </h2>
                <p className="text-accent text-sm max-w-xl mx-auto">
                  The principles established by Sultan that guide every wash, detailing session, and customer interaction.
                </p>
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: '100% Doorstep Convenience', desc: 'We bring power, water, and detailing tools to your location.' },
                { title: 'Scratch-Free Foam Wash', desc: 'pH-neutral chemicals and premium plush microfiber towels.' },
                { title: 'Transparent Pricing', desc: 'Zero hidden fees. Flat rates for Hatchback, Sedan, SUV, & Luxury.' },
                { title: 'Guaranteed Satisfaction', desc: 'If you are not delighted, we re-wash your vehicle for free.' }
              ].map((value, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
                    <ShieldCheck className="text-accent w-7 h-7 mb-3" />
                    <h4 className="font-heading font-bold text-base text-white mb-2">{value.title}</h4>
                    <p className="text-gray-300 text-xs leading-relaxed">{value.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

      </div>
    </PageWrapper>
  );
};

export default AboutPage;
