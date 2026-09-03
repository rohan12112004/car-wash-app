/**
 * @file RefundPolicyPage.jsx
 * @description Refund and cancellation policy page.
 */

import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import FadeIn from '../components/animations/FadeIn';

const RefundPolicyPage = () => {
  return (
    <PageWrapper
      title="Refund Policy | Premia Carwash"
      description="Our policies regarding refunds and service guarantees."
    >
      <div className="bg-bg-light min-h-screen pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-white rounded-3xl shadow-md p-8 md:p-12 border border-gray-100 prose prose-green max-w-none">
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-8 pb-4 border-b border-gray-100">
                Refund & Satisfaction Policy
              </h1>
              
              <div className="space-y-6 text-gray-700 font-body">
                <p><strong>Effective Date:</strong> 2025</p>
                
                <h2 className="text-xl font-bold text-primary-dark mt-8">1. Premia Carwash Guarantee</h2>
                <p>We take pride in our work. If you are not completely satisfied with your cleaning service, please let us know within 24 hours of the service completion. We will gladly return to reclean the area in question at no additional charge.</p>
                
                <h2 className="text-xl font-bold text-primary-dark mt-8">2. Refund Eligibility</h2>
                <p>Full or partial refunds may be issued under the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>If a scheduled service is cancelled by Premia Carwash and cannot be rescheduled to your satisfaction.</li>
                  <li>If you cancel your appointment at least 48 hours prior to the scheduled time.</li>
                  <li>In rare instances where a reclean does not resolve the issue, subject to management approval.</li>
                </ul>

                <h2 className="text-xl font-bold text-primary-dark mt-8">3. Non-Refundable Situations</h2>
                <p>Refunds will generally not be provided in these scenarios:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Services that have been fully rendered and approved at the time of completion.</li>
                  <li>Cancellations made less than 24 hours before the appointment (a cancellation fee may apply).</li>
                  <li>Gift cards or prepaid promotional packages (though they may be transferred to another individual).</li>
                </ul>

                <h2 className="text-xl font-bold text-primary-dark mt-8">4. Process for Requesting a Refund</h2>
                <p>To request a refund or raise a concern, please email our support team at premiacarwash@gmail.com with your booking reference number, contact details, and a clear description (with photos if applicable) of the issue. We aim to review all requests within 3 business days.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </PageWrapper>
  );
};

export default RefundPolicyPage;
