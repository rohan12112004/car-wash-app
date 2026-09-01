/**
 * @file ServicesHubPage.jsx
 * @description Main services overview with 3 category cards & horizontal Premia Process Timeline bar.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Car, Building2, Home, CheckCircle2, Sparkles, Droplets, ShieldCheck, ArrowRight, UserCheck } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import FadeIn from '../components/animations/FadeIn';
import SectionHeading from '../components/common/SectionHeading';
import companyInfo from '../data/companyInfo';

const categories = [
  {
    title: 'Car Wash & Detailing',
    path: '/services/car-wash',
    icon: Car,
    description: 'Doorstep foam washing, ceramic coating, interior steam sanitization, and rim detailing.',
    color: 'bg-emerald-500 text-emerald-600',
    image: '/images/car_foam_wash.jpg',
  },
  {
    title: 'Commercial Cleaning',
    path: '/services/commercial',
    icon: Building2,
    description: 'Commercial fleet care, truck washing, office sanitization, and retail space cleaning.',
    color: 'bg-blue-500 text-blue-600',
    image: '/images/office_cleaning.jpg',
  },
  {
    title: 'Home & Carpet Care',
    path: '/services/home',
    icon: Home,
    description: 'Deep house cleaning, sofa vacuuming, carpet shampooing, and kitchen sanitization.',
    color: 'bg-green-600 text-green-700',
    image: '/images/carpet_cleaning.jpg',
  }
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Greeting & Intake',
    desc: 'Our technician arrives at your doorstep, checks vehicle condition, and maps special requirements.',
    icon: UserCheck,
    image: '/images/hatchback_wash.jpg'
  },
  {
    step: '02',
    title: 'Pre-Wash Prep',
    desc: 'High-pressure underbody rinse, mud removal, and rim degreaser application.',
    icon: Droplets,
    image: '/images/suv_wash.jpg'
  },
  {
    step: '03',
    title: 'Snow Foam Scrub',
    desc: 'Thick pH-neutral snow foam bath with gentle scratch-free microfiber hand agitation.',
    icon: Sparkles,
    image: '/images/car_foam_wash.jpg'
  },
  {
    step: '04',
    title: 'Interior Steam & Vacuum',
    desc: 'Deep upholstery suction, dashboard microfiber wipe, and anti-bacterial steam sanitization.',
    icon: ShieldCheck,
    image: '/images/interior_detailing.jpg'
  },
  {
    step: '05',
    title: 'Shine & Handover',
    desc: 'Streak-free glass polish, tire dressing, and final quality inspection sign-off.',
    icon: CheckCircle2,
    image: '/images/luxury_car_polish.jpg'
  }
];

const ServicesHubPage = () => {
  return (
    <PageWrapper
      title={`Our Services | ${companyInfo.name}`}
      description="Explore doorstep car wash, detailing, commercial cleaning, and residential care."
    >
      <div className="bg-bg-light min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Header */}
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-accent font-bold uppercase tracking-wider text-xs block mb-2">
                Luxury Doorstep Cleaning
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary-dark mb-4">
                Services by {companyInfo.name}
              </h1>
              <p className="text-base sm:text-lg text-gray-600 font-body">
                Pick a specialized cleaning category to explore our packages or book online in under 2 minutes.
              </p>
            </div>
          </FadeIn>

          {/* 3 Main Category Hub Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {categories.map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <FadeIn key={cat.title} delay={idx * 0.1}>
                  <Link to={cat.path} className="block group h-full">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col justify-between">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={cat.image} 
                          alt={cat.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h2 className="text-2xl font-heading font-bold">{cat.title}</h2>
                        </div>
                      </div>

                      <div className="p-6 flex-grow flex flex-col justify-between">
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                          {cat.description}
                        </p>
                        <div className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:text-primary-light transition-colors">
                          <span>Explore Packages</span>
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>

          {/* HORIZONTAL PROCESS TIMELINE BAR (REQUIREMENT #8) */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-200 relative overflow-hidden">
            <SectionHeading 
              title="The Premia Carwash Process Timeline" 
              subtitle="Step-by-Step Excellence" 
            />

            {/* Horizontal Timeline Connector Bar */}
            <div className="hidden lg:block absolute top-[280px] left-16 right-16 h-1 bg-gradient-to-r from-primary-light via-accent to-primary rounded-full z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12 relative z-10">
              {PROCESS_STEPS.map((step, idx) => {
                const StepIcon = step.icon;
                return (
                  <FadeIn key={idx} delay={idx * 0.1}>
                    <div className="bg-bg-light rounded-2xl p-5 border border-gray-200 relative h-full flex flex-col justify-between group hover:border-primary-light transition-all">
                      <div>
                        {/* Step Image */}
                        <div className="relative h-28 rounded-xl overflow-hidden mb-4">
                          <img src={step.image} alt={step.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-lg bg-bg-dark text-white font-extrabold text-xs shadow-md">
                            {step.step}
                          </span>
                        </div>

                        <div className="w-9 h-9 rounded-xl bg-primary text-white flex items-center justify-center mb-3">
                          <StepIcon size={18} />
                        </div>

                        <h4 className="font-heading font-extrabold text-base text-primary-dark mb-1.5 leading-snug">
                          {step.title}
                        </h4>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
};

export default ServicesHubPage;
