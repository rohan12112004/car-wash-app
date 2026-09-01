/**
 * @file NewsletterSignup.jsx
 * @description Email input with gradient CTA.
 */
import React, { useState } from 'react';
import FadeIn from '../animations/FadeIn';
import Button from '../common/Button';
import toast from 'react-hot-toast';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    toast.success('Subscribed successfully!');
    setEmail('');
  };

  return (
    <section className="py-20 bg-bg-light">
      <div className="container mx-auto px-4">
        <FadeIn className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-primary/10 text-center">
          <h2 className="text-3xl font-heading font-bold text-primary-dark mb-4">Get Exclusive Offers</h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Subscribe to our newsletter for cleaning tips, seasonal discounts, and latest updates.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-grow px-6 py-4 rounded-full bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body"
              required
            />
            <Button type="submit" size="lg" className="whitespace-nowrap">
              Subscribe Now
            </Button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
};

export default NewsletterSignup;
