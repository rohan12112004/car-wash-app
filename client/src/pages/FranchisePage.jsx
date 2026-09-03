/**
 * @file FranchisePage.jsx
 * @description Comprehensive franchise pitch page with benefits grid, 4-step timeline, and high-converting application form.
 */

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { 
  TrendingUp, GraduationCap, Wrench, Megaphone, Headphones, MapPin, 
  Send, DollarSign, CheckCircle2, User, Mail, Phone, 
  Briefcase, Sparkles, Building
} from 'lucide-react';
import toast from 'react-hot-toast';
import confetti from 'canvas-confetti';
import PageWrapper from '../components/layout/PageWrapper';
import FadeIn from '../components/animations/FadeIn';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import companyInfo from '../data/companyInfo';
import { franchiseBenefits } from '../data/servicesData';
import api from '../services/api';

// Icon lookup for benefits grid
const BENEFIT_ICONS = {
  TrendingUp,
  GraduationCap,
  Wrench,
  Megaphone,
  HeadphonesIcon: Headphones,
  Headphones,
  MapPin,
};

// Form validation schema matching backend createInquirySchema
const schema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid 10-digit phone number"),
  city: z.string().min(2, "City name is required"),
  state: z.string().min(2, "State name is required"),
  investmentBudget: z.string().min(1, "Please select an investment budget range"),
  currentOccupation: z.string().min(2, "Occupation is required"),
  message: z.string().optional(),
});

const FranchisePage = () => {
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      investmentBudget: '2-3 Lacs (Doorstep Carwash)',
    }
  });

  const onSubmit = async (data) => {
    try {
      await api.post('/inquiries', data);
      
      // Trigger success confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // ignore fallback
      }

      toast.success('Franchise Inquiry Submitted! Our team will call you within 24 hours.');
      setSubmittedSuccess(true);
      reset();
    } catch (error) {
      console.error('Franchise inquiry submission failed:', error);
      const errMsg = error.response?.data?.message || 'Failed to submit inquiry. Please try again.';
      toast.error(errMsg);
    }
  };

  return (
    <PageWrapper
      title="Franchise Opportunity | Premia Carwash"
      description="Own a profitable doorstep car wash & cleaning franchise. Low investment, high ROI, 100% brand support, and territory protection."
    >
      <div className="bg-bg-light min-h-screen">
        
        {/* 1. HERO HEADER */}
        <section className="relative bg-bg-dark text-white pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-95 z-0" />
          <div className="absolute top-1/3 right-10 w-96 h-96 bg-primary-light/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-accent text-xs sm:text-sm font-semibold mb-6 border border-white/15 backdrop-blur-md">
                <Sparkles size={16} className="text-accent animate-pulse" />
                <span>Exclusive City Territory Rights Available</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
                Own a High-Profit <br className="hidden sm:inline" />
                <span className="text-gradient">{companyInfo.name}</span> Franchise
              </h1>

              <p className="text-base sm:text-lg text-gray-200 font-body max-w-2xl mx-auto mb-10 leading-relaxed">
                Tap into India's booming automotive & home care market with an established, tech-enabled doorstep brand. High profit margins, recurring revenue, and zero prior experience required.
              </p>
            </FadeIn>

            {/* Quick Metrics Bar */}
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md max-w-3xl mx-auto text-left">
                <div className="p-3 border-r border-white/10">
                  <span className="text-xs text-gray-400 block uppercase font-medium">Investment</span>
                  <span className="text-xl font-extrabold text-white font-heading">{companyInfo.franchiseInvestment.min} - {companyInfo.franchiseInvestment.max}</span>
                </div>
                <div className="p-3 border-r border-white/10">
                  <span className="text-xs text-gray-400 block uppercase font-medium">Avg Annual ROI</span>
                  <span className="text-xl font-extrabold text-accent font-heading">{companyInfo.franchiseInvestment.averageROI}</span>
                </div>
                <div className="p-3 border-r border-white/10">
                  <span className="text-xs text-gray-400 block uppercase font-medium">Break-Even</span>
                  <span className="text-xl font-extrabold text-white font-heading">{companyInfo.franchiseInvestment.breakEven}</span>
                </div>
                <div className="p-3">
                  <span className="text-xs text-gray-400 block uppercase font-medium">Outlets Active</span>
                  <span className="text-xl font-extrabold text-gold font-heading">50+ Across India</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 2. FRANCHISE BENEFITS GRID */}
        <section className="py-20 bg-bg-light border-t border-gray-200/60">
          <div className="container mx-auto px-4 max-w-6xl">
            <SectionHeading title="Why Partner With Premia Carwash?" subtitle="Complete Business System" />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {franchiseBenefits?.map((benefit, idx) => {
                const BenefitIcon = BENEFIT_ICONS[benefit.icon] || TrendingUp;
                return (
                  <FadeIn key={idx} delay={idx * 0.1}>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-primary-light/40 hover:shadow-green transition-all group h-full flex flex-col justify-between">
                      <div>
                        <div className="w-14 h-14 bg-gradient-to-tr from-primary-light/20 to-accent/30 text-primary-dark rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gradient-primary group-hover:text-white transition-all shadow-sm">
                          <BenefitIcon size={28} />
                        </div>
                        <h3 className="text-xl font-heading font-bold text-text-dark mb-3 group-hover:text-primary transition-colors">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. 4-STEP APPLICATION TIMELINE */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <SectionHeading title="4 Steps to Launch Your Business" subtitle="Simple Onboarding Process" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                { step: '01', title: 'Submit Inquiry', desc: 'Fill the application form below with your city & budget details.' },
                { step: '02', title: 'Discovery Call', desc: 'Our franchise manager conducts a 1-on-1 business pitch & interview.' },
                { step: '03', title: 'Site & Training', desc: 'Location finalized, equipment supplied, and 2-week staff training.' },
                { step: '04', title: 'Grand Launch', desc: 'Local marketing push, doorstep setup, and immediate revenue flow.' },
              ].map((item, idx) => (
                <FadeIn key={idx} delay={idx * 0.15}>
                  <div className="p-6 rounded-3xl bg-bg-light border border-gray-200 relative h-full flex flex-col justify-between">
                    <div>
                      <span className="text-4xl font-extrabold text-primary-light/30 font-heading block mb-3">
                        {item.step}
                      </span>
                      <h4 className="font-heading font-bold text-lg text-primary-dark mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 4. FRANCHISE APPLICATION FORM SECTION */}
        <section id="apply-form" className="py-20 bg-bg-light border-t border-gray-200/60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="bg-bg-dark text-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary-light/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10">
                  <div className="text-center mb-10">
                    <span className="text-accent font-bold uppercase tracking-wider text-xs mb-2 block">
                      Fast-Track Partner Application
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mb-3">
                      Apply For A {companyInfo.name} Franchise
                    </h2>
                    <p className="text-gray-300 text-sm max-w-lg mx-auto">
                      Fill out the details below. Our expansion team will review your application and share the confidential franchise prospectus.
                    </p>
                  </div>

                  {submittedSuccess ? (
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="bg-white/10 border border-accent/40 rounded-2xl p-8 text-center my-6"
                    >
                      <CheckCircle2 size={64} className="text-accent mx-auto mb-4" />
                      <h3 className="text-2xl font-heading font-bold text-white mb-2">Application Received!</h3>
                      <p className="text-gray-200 text-sm max-w-md mx-auto mb-6">
                        Thank you for applying. A Franchise Business Manager has been assigned to your request and will call you on your phone number within 24 hours.
                      </p>
                      <Button onClick={() => setSubmittedSuccess(false)} variant="outline" className="border-accent text-accent">
                        Submit Another Inquiry
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                          <label className="block text-xs font-semibold text-gray-200 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <User size={14} className="text-accent" /> Full Name *
                          </label>
                          <input 
                            {...register('name')}
                            placeholder="e.g. Rahul Sharma"
                            className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-sm"
                          />
                          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-xs font-semibold text-gray-200 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <Mail size={14} className="text-accent" /> Email Address *
                          </label>
                          <input 
                            type="email"
                            {...register('email')}
                            placeholder="e.g. rahul@example.com"
                            className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-sm"
                          />
                          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block text-xs font-semibold text-gray-200 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <Phone size={14} className="text-accent" /> Phone Number *
                          </label>
                          <input 
                            {...register('phone')}
                            placeholder="e.g. 98765 43210"
                            className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-sm"
                          />
                          {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>}
                        </div>

                        {/* Occupation */}
                        <div>
                          <label className="block text-xs font-semibold text-gray-200 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <Briefcase size={14} className="text-accent" /> Current Occupation *
                          </label>
                          <input 
                            {...register('currentOccupation')}
                            placeholder="e.g. Business Owner, Engineer, Manager"
                            className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-sm"
                          />
                          {errors.currentOccupation && <p className="mt-1 text-xs text-red-400">{errors.currentOccupation.message}</p>}
                        </div>

                        {/* City */}
                        <div>
                          <label className="block text-xs font-semibold text-gray-200 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <MapPin size={14} className="text-accent" /> Proposed City *
                          </label>
                          <input 
                            {...register('city')}
                            placeholder="e.g. Lucknow, Noida, Jaipur"
                            className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-sm"
                          />
                          {errors.city && <p className="mt-1 text-xs text-red-400">{errors.city.message}</p>}
                        </div>

                        {/* State */}
                        <div>
                          <label className="block text-xs font-semibold text-gray-200 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <Building size={14} className="text-accent" /> State *
                          </label>
                          <input 
                            {...register('state')}
                            placeholder="e.g. Uttar Pradesh, Rajasthan"
                            className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-sm"
                          />
                          {errors.state && <p className="mt-1 text-xs text-red-400">{errors.state.message}</p>}
                        </div>
                      </div>

                      {/* Dropdown: Investment Budget */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-200 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <DollarSign size={14} className="text-accent" /> Investment Budget Range *
                        </label>
                        <select 
                          {...register('investmentBudget')}
                          className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-sm"
                        >
                          <option value="2-3 Lacs (Doorstep Carwash)" className="text-gray-900">2-3 Lacs (Doorstep Carwash)</option>
                          <option value="5 to 10 Lacs (Semi manual outlet)" className="text-gray-900">5 to 10 Lacs (Semi manual outlet)</option>
                          <option value="15 to 18 Lacs (Automatic Outlet)" className="text-gray-900">15 to 18 Lacs (Automatic Outlet)</option>
                          <option value="15 Lacs (Master Doorstep Franchise)" className="text-gray-900">15 Lacs (Master Doorstep Franchise)</option>
                        </select>
                        {errors.investmentBudget && <p className="mt-1 text-xs text-red-400">{errors.investmentBudget.message}</p>}
                      </div>

                      {/* Additional Message */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-200 uppercase tracking-wider mb-2">
                          Additional Message / Preferred Location Details (Optional)
                        </label>
                        <textarea
                          {...register('message')}
                          rows={3}
                          placeholder="Tell us about your target location, business experience, or any specific questions..."
                          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-sm"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        isLoading={isSubmitting} 
                        className="w-full text-base py-4 justify-center shadow-green-lg"
                      >
                        <span>Submit Franchise Application</span>
                        <Send size={18} />
                      </Button>

                      <p className="text-[11px] text-gray-400 text-center">
                        🔒 Your information is confidential and protected. We do not share your contact details with third parties.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default FranchisePage;
