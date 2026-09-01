/**
 * @file BookingPage.jsx
 * @description Universal booking wizard page.
 */

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageWrapper from '../components/layout/PageWrapper';
import FadeIn from '../components/animations/FadeIn';
import BookingWizard from '../components/booking/BookingWizard';

const BookingPage = () => {
  const [searchParams] = useSearchParams();
  const initialServiceId = searchParams.get('service');
  
  return (
    <PageWrapper
      title="Book a Service | SparkleWash Pro"
      description="Schedule your car wash or cleaning service online in minutes."
    >
      <div className="bg-bg-light min-h-screen pt-32 pb-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-96 bg-primary-dark rounded-b-[50px] md:rounded-b-[100px] z-0"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-10">
              <h1 className="text-4xl font-heading font-bold text-text-light mb-4">
                Schedule Your Service
              </h1>
              <p className="text-text-light/80 font-body">
                Follow the simple steps below to book your appointment.
              </p>
            </div>
          </FadeIn>

          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-gray-100 min-h-[600px]">
             <BookingWizard initialServiceId={initialServiceId} />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default BookingPage;
