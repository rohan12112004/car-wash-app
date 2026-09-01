/**
 * @file GalleryPage.jsx
 * @description Real-life car wash & detailing gallery with category filtering & before/after sliders.
 */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ZoomIn } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import FadeIn from '../components/animations/FadeIn';
import BeforeAfterSlider from '../components/common/BeforeAfterSlider';
import companyInfo from '../data/companyInfo';

const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Luxury Sedan Snow Foam Bath',
    category: 'Car Wash',
    beforeImage: '/images/hatchback_wash.jpg',
    afterImage: '/images/car_foam_wash.jpg',
    description: 'Deep snow foam agitation and high-pressure underbody mud clearance.'
  },
  {
    id: 2,
    title: 'Full Interior Steam & Upholstery Detailing',
    category: 'Interior Detailing',
    beforeImage: '/images/interior_detailing.jpg',
    afterImage: '/images/sedan_detailing.jpg',
    description: 'Hot steam sanitization removing 99.9% bacteria and seat stains.'
  },
  {
    id: 3,
    title: 'SUV Ceramic Polish & Paint Correction',
    category: 'Car Detailing',
    beforeImage: '/images/suv_wash.jpg',
    afterImage: '/images/ceramic_coating.jpg',
    description: '9H ceramic coating providing hydrophobicity and mirror gloss.'
  },
  {
    id: 4,
    title: 'Fabric Sofa & Cushion Deep Cleaning',
    category: 'Home Cleaning',
    beforeImage: '/images/carpet_cleaning.jpg',
    afterImage: '/images/sofa_cleaning.jpg',
    description: 'Injection-extraction shampooing restoring sofa fabric freshness.'
  },
  {
    id: 5,
    title: 'Commercial Fleet & Truck Pressure Wash',
    category: 'Commercial',
    beforeImage: '/images/truck_cleaning.jpg',
    afterImage: '/images/fleet_bus_wash.jpg',
    description: 'Heavy duty fleet degreasing for logistics trucks and transport buses.'
  },
  {
    id: 6,
    title: 'Alloy Rim & Tire Gloss Protection',
    category: 'Car Detailing',
    beforeImage: '/images/sedan_detailing.jpg',
    afterImage: '/images/luxury_car_polish.jpg',
    description: 'Brake dust removal and hydrophobic silicone tire dressing.'
  }
];

const CATEGORIES = ['All Work', 'Car Wash', 'Car Detailing', 'Interior Detailing', 'Home Cleaning', 'Commercial'];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('All Work');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = GALLERY_ITEMS.filter(item => 
    activeCategory === 'All Work' || item.category === activeCategory
  );

  return (
    <PageWrapper
      title={`Before & After Work Gallery | ${companyInfo.name}`}
      description="Inspect real doorstep cleaning transformations executed by Premia Carwash technicians across India."
    >
      <div className="bg-bg-light min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-7xl">
          
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-accent font-bold uppercase tracking-wider text-xs block mb-2">
                Real Customer Transformations
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary-dark mb-4">
                Our Work Speaks For Itself
              </h1>
              <p className="text-base sm:text-lg text-gray-600 font-body">
                Drag the interactive slider left & right to see the dramatic before-and-after results delivered by {companyInfo.name}.
              </p>
            </div>
          </FadeIn>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-gradient-primary text-white shadow-green-lg scale-105' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, idx) => (
              <FadeIn key={item.id} delay={idx * 0.1}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200 group flex flex-col justify-between h-full">
                  <div className="h-64 relative">
                    <BeforeAfterSlider beforeImage={item.beforeImage} afterImage={item.afterImage} />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-bg-dark/80 backdrop-blur-md text-accent text-[11px] font-bold z-10 border border-white/20">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-heading font-extrabold text-primary-dark mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    
                    <button 
                      onClick={() => setSelectedImage(item)}
                      className="w-full text-xs font-bold text-primary flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-primary/5 hover:bg-primary hover:text-white transition-all"
                    >
                      <ZoomIn size={14} /> Expand Full Screen
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-accent transition-colors z-50 p-2"
            >
              <X size={32} />
            </button>
            <div className="max-w-4xl w-full h-[60vh] md:h-[75vh] relative flex flex-col items-center justify-center">
              <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <BeforeAfterSlider beforeImage={selectedImage.beforeImage} afterImage={selectedImage.afterImage} />
              </div>
              <p className="text-center text-white mt-4 text-lg font-heading font-bold">{selectedImage.title}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
};

export default GalleryPage;
