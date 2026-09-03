/**
 * @file FranchiseCTA.jsx
 * @description Full-width dark gradient section for homepage with embedded Quick Franchise Inquiry Form.
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { TrendingUp, ShieldCheck, Award, ArrowRight, Send, CheckCircle2, Sparkles, MapPin, Phone, Mail, User } from 'lucide-react';
import toast from 'react-hot-toast';
import confetti from 'canvas-confetti';
import Button from '../common/Button';
import FadeIn from '../animations/FadeIn';
import companyInfo from '../../data/companyInfo';
import api from '../../services/api';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid 10-digit phone required'),
  email: z.string().email('Valid email required'),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  investmentBudget: z.string().min(1, 'Select a budget'),
  currentOccupation: z.string().optional(),
});

const FranchiseCTA = () => {
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      investmentBudget: '2-3 Lacs (Doorstep Carwash)',
      state: 'Uttar Pradesh',
    }
  });

  const onSubmit = async (data) => {
    try {
      await api.post('/inquiries', {
        ...data,
        currentOccupation: data.currentOccupation || 'Entrepreneur / Investor',
      });
      
      try {
        confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
      } catch (e) {
        // ignore
      }

      toast.success('Franchise Inquiry Submitted! We will call you within 24 hours.');
      setSubmitted(true);
      reset();
    } catch (err) {
      console.error('Franchise submit error:', err);
      toast.error('Failed to submit inquiry. Please try again or call us directly.');
    }
  };

  return (
    <section className="py-20 bg-gradient-dark text-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary-light/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Pitch & Key ROI Metrics */}
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-accent text-xs font-semibold mb-4 border border-white/15">
                <Sparkles size={14} className="animate-pulse" />
                <span>Franchise Business Opportunities</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mb-6 leading-tight">
                Start Your Own <br />
                <span className="text-gradient">{companyInfo.name}</span> Franchise
              </h2>

              <p className="text-gray-200 text-base sm:text-lg mb-8 leading-relaxed font-normal">
                Join India's fastest-growing doorstep car wash & cleaning franchise network. Low initial setup costs, 40-60% annual returns, and 100% brand & marketing support.
              </p>

              {/* 3 Metric Cards */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md">
                  <TrendingUp size={20} className="text-accent mb-1" />
                  <span className="text-lg font-extrabold text-white block font-heading">{companyInfo.franchiseInvestment.averageROI}</span>
                  <span className="text-gray-400 text-[11px]">Expected ROI</span>
                </div>

                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md">
                  <ShieldCheck size={20} className="text-accent mb-1" />
                  <span className="text-lg font-extrabold text-white block font-heading">{companyInfo.franchiseInvestment.breakEven}</span>
                  <span className="text-gray-400 text-[11px]">Break-even</span>
                </div>

                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md">
                  <Award size={20} className="text-gold mb-1" />
                  <span className="text-lg font-extrabold text-white block font-heading">50+ Hubs</span>
                  <span className="text-gray-400 text-[11px]">Active Outlets</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-gray-300">
                <Link to="/franchise" className="text-accent font-semibold flex items-center gap-1 hover:underline">
                  View Detailed Prospectus & ROI Calculator <ArrowRight size={14} />
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Embedded Quick Application Form */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.2}>
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative">
                
                <div className="mb-6 border-b border-white/10 pb-4 text-center">
                  <h3 className="font-heading font-extrabold text-2xl text-white">Apply For Franchise</h3>
                  <p className="text-xs text-accent mt-1">Get initial consultation & business deck within 24 hours.</p>
                </div>

                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle2 size={56} className="text-accent mx-auto mb-3" />
                    <h4 className="font-heading font-bold text-xl text-white mb-2">Inquiry Submitted!</h4>
                    <p className="text-xs text-gray-200 mb-6">Our expansion manager will call you shortly on your registered number.</p>
                    <Button size="sm" onClick={() => setSubmitted(false)} variant="outline" className="border-accent text-accent">
                      Submit Another Query
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-200 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input 
                          {...register('name')}
                          placeholder="e.g. Amit Sharma"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent text-xs sm:text-sm"
                        />
                      </div>
                      {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name.message}</p>}
                    </div>

                    {/* Phone & Email Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-gray-200 uppercase tracking-wider mb-1">
                          Phone *
                        </label>
                        <div className="relative">
                          <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input 
                            {...register('phone')}
                            placeholder="9876543210"
                            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent text-xs"
                          />
                        </div>
                        {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone.message}</p>}
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-gray-200 uppercase tracking-wider mb-1">
                          Email *
                        </label>
                        <div className="relative">
                          <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input 
                            type="email"
                            {...register('email')}
                            placeholder="name@email.com"
                            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent text-xs"
                          />
                        </div>
                        {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email.message}</p>}
                      </div>
                    </div>

                    {/* City & State Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-gray-200 uppercase tracking-wider mb-1">
                          Target City *
                        </label>
                        <div className="relative">
                          <MapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input 
                            {...register('city')}
                            placeholder="e.g. Lucknow"
                            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent text-xs"
                          />
                        </div>
                        {errors.city && <p className="text-[11px] text-red-400 mt-1">{errors.city.message}</p>}
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-gray-200 uppercase tracking-wider mb-1">
                          State *
                        </label>
                        <input 
                          {...register('state')}
                          placeholder="e.g. UP"
                          className="w-full px-3 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent text-xs"
                        />
                        {errors.state && <p className="text-[11px] text-red-400 mt-1">{errors.state.message}</p>}
                      </div>
                    </div>

                    {/* Investment Budget */}
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-200 uppercase tracking-wider mb-1">
                        Investment Budget *
                      </label>
                      <select 
                        {...register('investmentBudget')}
                        className="w-full px-3 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-accent text-xs"
                      >
                        <option value="2-3 Lacs (Doorstep Carwash)" className="text-gray-900">2-3 Lacs (Doorstep Carwash)</option>
                        <option value="5 to 10 Lacs (Semi manual outlet)" className="text-gray-900">5 to 10 Lacs (Semi manual outlet)</option>
                        <option value="15 to 18 Lacs (Automatic Outlet)" className="text-gray-900">15 to 18 Lacs (Automatic Outlet)</option>
                        <option value="15 Lacs (Master Doorstep Franchise)" className="text-gray-900">15 Lacs (Master Doorstep Franchise)</option>
                      </select>
                    </div>

                    <Button 
                      type="submit" 
                      isLoading={isSubmitting} 
                      className="w-full justify-center text-sm py-3 mt-2 shadow-green-lg"
                    >
                      <span>Submit Franchise Inquiry</span>
                      <Send size={16} />
                    </Button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FranchiseCTA;
