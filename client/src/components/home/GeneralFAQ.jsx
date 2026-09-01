/**
 * @file GeneralFAQ.jsx
 * @description 8-question accordion.
 */
import React from 'react';
import SectionHeading from '../common/SectionHeading';
import FAQAccordion from '../common/FAQAccordion';

const faqs = [
  { question: "How do I book a service?", answer: "You can book directly via our website by selecting a service, choosing a slot, and confirming your details." },
  { question: "Do you bring your own water and electricity?", answer: "We bring our own specialized equipment, but we may require access to a water tap or plug point depending on the specific service." },
  { question: "Are your products safe for pets and children?", answer: "Yes! All our cleaning agents are 100% eco-friendly, biodegradable, and completely safe for your family." },
  { question: "How long does a standard car wash take?", answer: "A basic exterior and interior wash usually takes 45-60 minutes. Detailing can take 2-3 hours." },
  { question: "What is your cancellation policy?", answer: "You can cancel or reschedule for free up to 4 hours before the service. Late cancellations may incur a small fee." },
  { question: "Do you offer subscription plans?", answer: "Yes, we offer weekly and monthly subscription plans at discounted rates. Contact support for details." },
  { question: "Is your staff verified?", answer: "Absolutely. All our cleaning professionals undergo strict background checks and extensive training." },
  { question: "What if it rains on the day of my car wash?", answer: "We will automatically reach out to reschedule your appointment at no extra cost to you." }
];

const GeneralFAQ = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading title="Got Questions?" subtitle="FAQ" />
        <FAQAccordion items={faqs} />
      </div>
    </section>
  );
};

export default GeneralFAQ;
