/**
 * @file ServicesGrid.jsx
 * @description 3 large gradient cards (Car Wash / Commercial / Home Cleaning) with hover animations & links to hubs.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { Car, Truck, Home, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../animations/FadeIn';
import SectionHeading from '../common/SectionHeading';

const categories = [
  {
    title: 'Car Wash & Detailing',
    subtitle: 'Personal Vehicles',
    description: 'Foam wash, dry wash, machine polishing, steam deep cleaning, and full detailing delivered at your doorstep.',
    icon: Car,
    link: '/services/car-wash',
    badge: 'Popular',
    gradient: 'from-primary-dark via-primary to-primary-light',
    servicesCount: '5 Premium Services',
  },
  {
    title: 'Commercial Vehicle Care',
    subtitle: 'Logistics & Fleets',
    description: 'Industrial-grade cleaning for trucks, dumpers, luxury buses, and commercial transport fleets.',
    icon: Truck,
    link: '/services/commercial',
    badge: 'Fleet Discount',
    gradient: 'from-primary via-primary-dark to-bg-dark',
    servicesCount: '3 Commercial Services',
  },
  {
    title: 'Home Cleaning Services',
    subtitle: 'Residential & Office',
    description: 'Deep extraction sofa & carpet cleaning, AC servicing, water tank sanitization, solar panel & tile cleaning.',
    icon: Home,
    link: '/services/home',
    badge: 'Doorstep Care',
    gradient: 'from-primary-light via-accent to-accent-glow',
    servicesCount: '8 Home Services',
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-bg-light relative">
      <div className="container mx-auto px-4">
        
        <SectionHeading 
          title="Explore Our Core Services" 
          subtitle="Three specialized verticals tailored for personal vehicles, commercial fleets, and residential hygiene."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {categories.map((cat, idx) => (
            <FadeIn key={idx} delay={idx * 0.15}>
              <Link to={cat.link} className="block h-full">
                <motion.div 
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl p-8 shadow-green border border-gray-100 hover:border-primary-light/40 group h-full flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Top Badge */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                      <cat.icon size={28} />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent/30 text-primary-dark border border-accent/40">
                      {cat.badge}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-light block mb-1">
                      {cat.subtitle}
                    </span>
                    <h3 className="text-2xl font-heading font-bold text-text-dark mb-3 group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-500">{cat.servicesCount}</span>
                    <span className="text-primary font-bold text-sm flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                      Explore Hub <ArrowRight size={16} />
                    </span>
                  </div>
                </motion.div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
