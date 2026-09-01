/**
 * @file ShippingPolicyPage.jsx
 * @description Doorstep Service Fulfillment & Delivery Policy for Premia Carwash.
 */
import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import SectionHeading from '../components/common/SectionHeading';
import companyInfo from '../data/companyInfo';

const ShippingPolicyPage = () => {
  return (
    <PageWrapper
      title={`Shipping & Delivery Policy | ${companyInfo.name}`}
      description="Learn about doorstep service execution, arrival timelines, and delivery terms."
    >
      <div className="bg-bg-light min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading title="Shipping & Service Delivery Policy" subtitle="Doorstep Fulfillment Terms" />

          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-200 text-gray-700 space-y-6 leading-relaxed">
            <p className="text-sm text-gray-500">Effective Date: January 1, 2025 • Premia Carwash (Founded 2025 by Sultan)</p>

            <h3 className="text-xl font-heading font-bold text-primary-dark">1. Doorstep On-Demand Service Delivery</h3>
            <p>
              At <strong>Premia Carwash</strong>, we provide mobile doorstep cleaning and detailing services directly at your home, office, or commercial location. We do not ship physical physical parcels; instead, our trained detailing technicians arrive at your specified address at your selected appointment time slot.
            </p>

            <h3 className="text-xl font-heading font-bold text-primary-dark">2. Arrival Timelines & Slot Commitment</h3>
            <p>
              Our technician team will arrive within 15–30 minutes of your chosen booking time slot. In case of unexpected traffic or severe weather delays, our customer support team will notify you promptly via phone call or SMS at <strong>{companyInfo.phone}</strong>.
            </p>

            <h3 className="text-xl font-heading font-bold text-primary-dark">3. Location Requirements</h3>
            <p>
              To execute doorstep carwashing or carpet cleaning, please ensure access to a safe parking space and basic water/power connection (if specified during your booking selection).
            </p>

            <h3 className="text-xl font-heading font-bold text-primary-dark">4. Service Area Availability</h3>
            <p>
              Doorstep fulfillment is available across all major operational hubs including Delhi NCR, Lucknow, Jaipur, Chandigarh, Mumbai, Bangalore, and partner cities.
            </p>

            <h3 className="text-xl font-heading font-bold text-primary-dark">5. Contact Support</h3>
            <p>
              If you have any questions regarding service delivery, slot rescheduling, or arrival status, please contact our support desk at <strong>{companyInfo.phone}</strong> or email <strong>{companyInfo.email}</strong>.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ShippingPolicyPage;
