/**
 * @file WhyChooseUs.jsx
 * @description 6 feature tiles with icons for homepage.
 */
import React from 'react';
import SectionHeading from '../common/SectionHeading';
import FadeIn from '../animations/FadeIn';
import { ShieldCheck, Leaf, Clock, Award, DollarSign, HeadphonesIcon } from 'lucide-react';

const features = [
  { icon: Award, title: 'Trained Professionals', desc: 'Expert staff rigorously trained for best results.' },
  { icon: Leaf, title: 'Eco-Friendly', desc: '100% biodegradable and water-saving products.' },
  { icon: Clock, title: 'On-Time Service', desc: 'We value your time. Punctuality guaranteed.' },
  { icon: ShieldCheck, title: 'Best Equipment', desc: 'State-of-the-art cleaning technology and tools.' },
  { icon: DollarSign, title: 'Affordable Pricing', desc: 'Premium service without breaking the bank.' },
  { icon: HeadphonesIcon, title: '24/7 Support', desc: 'Always available to assist you with bookings.' },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading title="Why Choose Premia Carwash" subtitle="Our Advantage" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feat, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="flex items-start gap-4 p-6 rounded-2xl hover:bg-bg-light transition-colors border border-transparent hover:border-gray-100 group">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0">
                  <feat.icon size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-bold text-text-dark mb-2">{feat.title}</h4>
                  <p className="text-gray-500 font-body text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
