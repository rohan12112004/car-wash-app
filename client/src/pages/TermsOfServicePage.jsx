/**
 * @file TermsOfServicePage.jsx
 * @description Terms of service content page.
 */

import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import FadeIn from '../components/animations/FadeIn';

const TermsOfServicePage = () => {
  return (
    <PageWrapper
      title="Terms of Service | Premia Carwash"
      description="Read our terms of service."
    >
      <div className="bg-bg-light min-h-screen pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-white rounded-3xl shadow-md p-8 md:p-12 border border-gray-100 prose prose-green max-w-none">
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-8 pb-4 border-b border-gray-100">
                Terms of Service
              </h1>
              
              <div className="space-y-6 text-gray-700 font-body">
                <p><strong>Last Updated:</strong> 2025</p>
                
                <h2 className="text-xl font-bold text-primary-dark mt-8">1. Acceptance of Terms</h2>
                <p>By accessing and using the Premia Carwash website and services, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
                
                <h2 className="text-xl font-bold text-primary-dark mt-8">2. Description of Service</h2>
                <p>Premia Carwash provides users with access to a rich collection of resources, including various cleaning services, booking tools, and educational content. You understand and agree that the service may include advertisements and that these advertisements are necessary for Premia Carwash to provide the service.</p>

                <h2 className="text-xl font-bold text-primary-dark mt-8">3. Booking and Cancellation Policy</h2>
                <p>When you book a service with us, you agree to provide accurate, current, and complete information. Cancellations made less than 24 hours before the scheduled service time may be subject to a cancellation fee. We reserve the right to refuse service to anyone for any reason at any time.</p>

                <h2 className="text-xl font-bold text-primary-dark mt-8">4. Liability</h2>
                <p>While we take the utmost care with your property (vehicles, home, commercial spaces), Premia Carwash is not liable for pre-existing damage, heavily soiled areas that cannot be fully cleaned without potential damage, or loose items left in vehicles or areas being cleaned.</p>

                <h2 className="text-xl font-bold text-primary-dark mt-8">5. Modifications to Service</h2>
                <p>Premia Carwash reserves the right at any time and from time to time to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice. You agree that Premia Carwash shall not be liable to you or to any third party for any modification, suspension or discontinuance of the Service.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </PageWrapper>
  );
};

export default TermsOfServicePage;
