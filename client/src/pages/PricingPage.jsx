/**
 * @file PricingPage.jsx
 * @description Full pricing table for all services.
 */

import React, { useState } from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import FadeIn from '../components/animations/FadeIn';
import PricingTable from '../components/services/PricingTable';
import { carWashServices, commercialServices, homeCleaningServices } from '../data/servicesData';

const PricingPage = () => {
  const [activeTab, setActiveTab] = useState('car-wash');

  const getServicesForTab = () => {
    switch (activeTab) {
      case 'car-wash': return carWashServices;
      case 'commercial': return commercialServices;
      case 'home': return homeCleaningServices;
      default: return carWashServices;
    }
  };

  return (
    <PageWrapper
      title="Pricing & Packages | SparkleWash Pro"
      description="Transparent, competitive pricing for all our car wash, commercial, and home cleaning services."
    >
      <div className="bg-bg-light min-h-screen pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark mb-4">
                Transparent Pricing
              </h1>
              <p className="text-lg text-text-dark/70 font-body max-w-2xl mx-auto">
                No hidden fees. Select a category below to view our comprehensive pricing packages.
              </p>
            </div>
          </FadeIn>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'car-wash', label: 'Car Wash' },
              { id: 'commercial', label: 'Commercial' },
              { id: 'home', label: 'Home Cleaning' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3 rounded-full font-medium transition-all ${
                  activeTab === tab.id 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105' 
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <FadeIn key={activeTab}>
             <PricingTable services={getServicesForTab()} category={activeTab} />
          </FadeIn>
        </div>
      </div>
    </PageWrapper>
  );
};

export default PricingPage;
