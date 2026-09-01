/**
 * @file HowItWorks.jsx
 * @description 4-step horizontal timeline.
 */
import React from 'react';
import SectionHeading from '../common/SectionHeading';
import FadeIn from '../animations/FadeIn';
import { MousePointerClick, CalendarCheck, Truck, Sparkles } from 'lucide-react';

const steps = [
  { icon: MousePointerClick, title: 'Book Online', desc: 'Choose your service and slot via our app.' },
  { icon: CalendarCheck, title: 'Confirm', desc: 'Receive instant booking confirmation.' },
  { icon: Truck, title: 'We Arrive', desc: 'Our team reaches your doorstep on time.' },
  { icon: Sparkles, title: 'You Relax', desc: 'Enjoy a spotless, fresh clean result.' },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-primary-dark text-white relative">
      <div className="absolute inset-0 bg-[url('/mesh.png')] opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="How It Works" subtitle="4-Step Doorstep Process" darkBackground={true} />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-12 left-1/8 right-1/8 h-0.5 bg-primary-light/30 z-0 border-t border-dashed border-primary-light" />
          
          {steps.map((step, idx) => (
            <FadeIn key={idx} delay={idx * 0.2} className="relative z-10 text-center flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white mb-6 shadow-xl shadow-black/30 border-4 border-primary-dark relative">
                <step.icon size={40} />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-primary-dark font-bold flex items-center justify-center border-2 border-primary-dark">
                  {idx + 1}
                </div>
              </div>
              <h4 className="text-xl font-heading font-bold mb-3">{step.title}</h4>
              <p className="text-gray-300 text-sm">{step.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
